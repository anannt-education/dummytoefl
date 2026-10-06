/**
 * Recording Engine - MediaRecorder wrapper for TOEFL Speaking section
 *
 * Handles microphone access, audio recording, real-time level metering,
 * and waveform data for visualisation. Each recording is keyed by a task id
 * so multiple speaking tasks can be recorded independently.
 *
 * Usage:
 *   const result = await recordingEngine.requestPermission();
 *   if (result.granted) {
 *     recordingEngine.startRecording('task-1');
 *     // ... user speaks ...
 *     const recording = await recordingEngine.stopRecording('task-1');
 *     recordingEngine.playRecording('task-1');
 *   }
 */

class RecordingEngine {
  constructor() {
    /** @type {MediaRecorder|null} */
    this.mediaRecorder = null;

    /** @type {Blob[]} Raw audio chunks from the current recording */
    this.audioChunks = [];

    /** @type {MediaStream|null} Active microphone stream */
    this.stream = null;

    /** @type {AudioContext|null} For real-time level analysis */
    this.audioContext = null;

    /** @type {AnalyserNode|null} */
    this.analyser = null;

    /** @type {MediaStreamAudioSourceNode|null} */
    this.sourceNode = null;

    /** Whether we are currently recording */
    this.isRecording = false;

    /** Timestamp when the current recording started */
    this._recordingStartTime = 0;

    /**
     * Called if the microphone goes away while we hold it: unplugged, taken by
     * another application, or revoked in the browser. Nothing watched for this
     * before, so a device lost mid-exercise was only discovered when the
     * recording came back empty, several questions later.
     * @type {null | (reason: string) => void}
     */
    this.onDeviceLost = null;

    /**
     * Completed recordings indexed by task id.
     * @type {Map<string, {blob: Blob, url: string, duration: number, mimeType: string}>}
     */
    this.recordings = new Map();

    /** @type {Audio|null} Currently playing audio element */
    this._playbackAudio = null;
  }

  // ===========================================================================
  //  PERMISSION & SETUP
  // ===========================================================================

  /**
   * Request microphone access and set up the audio analysis pipeline.
   *
   * @returns {Promise<{granted: boolean, error?: string}>}
   */
  async requestPermission() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      // Set up the Web Audio API analyser for level metering
      this._setupAnalyser();
      this._watchTracks();

      return { granted: true };
    } catch (err) {
      let message = 'Could not access the microphone.';

      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        message =
          'Microphone permission was denied. Please allow microphone access in your browser settings and try again.';
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        message = 'No microphone was found. Please connect a microphone and try again.';
      } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        message =
          'Your microphone is in use by another application. Please close other apps using the mic and try again.';
      } else if (err.name === 'OverconstrainedError') {
        message =
          'The microphone does not meet the required constraints. Please try a different microphone.';
      }

      console.error('RecordingEngine.requestPermission:', err.name, err.message);
      return { granted: false, error: message };
    }
  }

  /**
   * Notice the microphone disappearing.
   *
   * `ended` fires when the device is unplugged or the browser revokes access.
   * `mute` fires when the OS or another application takes the input; it can
   * also fire briefly on some systems, so the caller decides what to do rather
   * than this deciding for them.
   * @private
   */
  _watchTracks() {
    if (!this.stream) return;
    const tell = (reason) => {
      if (typeof this.onDeviceLost === 'function') this.onDeviceLost(reason);
    };
    this.stream.getAudioTracks().forEach((track) => {
      track.onended = () => tell('ended');
      track.onmute = () => tell('muted');
    });
  }

  /**
   * Is the microphone still actually there? Cheap enough to poll.
   * @returns {boolean}
   */
  isLive() {
    if (!this.stream) return false;
    const tracks = this.stream.getAudioTracks();
    if (!tracks.length) return false;
    return tracks.some((t) => t.readyState === 'live' && !t.muted);
  }

  /**
   * Set up the AnalyserNode for real-time audio level monitoring.
   * @private
   */
  _setupAnalyser() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      this.analyser.smoothingTimeConstant = 0.8;

      this.sourceNode = this.audioContext.createMediaStreamSource(this.stream);
      this.sourceNode.connect(this.analyser);
      // Note: we intentionally do NOT connect the analyser to the destination
      // to avoid feedback loops.
    } catch (err) {
      console.warn('RecordingEngine._setupAnalyser: Web Audio API setup failed', err);
      this.analyser = null;
    }
  }

  // ===========================================================================
  //  RECORDING
  // ===========================================================================

  /**
   * Begin recording audio for a given task.
   *
   * @param {string} taskId - Unique identifier for the speaking task
   * @returns {boolean} True if recording started successfully
   */
  startRecording(taskId) {
    if (this.isRecording) {
      console.warn('RecordingEngine.startRecording: already recording');
      return false;
    }

    if (!this.stream || !this.stream.active) {
      console.error(
        'RecordingEngine.startRecording: no active microphone stream. Call requestPermission() first.'
      );
      return false;
    }

    // Reset chunks
    this.audioChunks = [];

    // Choose the best supported MIME type
    const mimeType = RecordingEngine.getSupportedMimeType();

    try {
      const options = {};
      if (mimeType) options.mimeType = mimeType;
      // 24 kbps Opus is transparent for speech and ~4x smaller than the
      // browser default (~128 kbps), which keeps uploads well under Vercel
      // size and latency limits.
      options.audioBitsPerSecond = 24000;

      this.mediaRecorder = new MediaRecorder(this.stream, options);
    } catch (err) {
      console.error('RecordingEngine.startRecording: MediaRecorder creation failed', err);
      // Retry without the bitrate constraint (some older browsers reject it)
      try {
        const fallbackOptions = {};
        if (mimeType) fallbackOptions.mimeType = mimeType;
        this.mediaRecorder = new MediaRecorder(this.stream, fallbackOptions);
      } catch (err2) {
        // Last resort: no options at all
        try {
          this.mediaRecorder = new MediaRecorder(this.stream);
        } catch (err3) {
          console.error('RecordingEngine.startRecording: fallback MediaRecorder also failed', err3);
          return false;
        }
      }
    }

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.audioChunks.push(event.data);
      }
    };

    // Collect data every 250ms for smoother handling
    this.mediaRecorder.start(250);
    this.isRecording = true;
    this._recordingStartTime = Date.now();

    // Resume the AudioContext if it was suspended (Chrome autoplay policy)
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume().catch(() => {});
    }

    return true;
  }

  /**
   * Stop the current recording and store the result.
   *
   * @param {string} taskId - Identifier matching the startRecording call
   * @returns {Promise<{blob: Blob, url: string, duration: number, mimeType: string}|null>}
   */
  async stopRecording(taskId) {
    if (!this.isRecording || !this.mediaRecorder) {
      console.warn('RecordingEngine.stopRecording: not currently recording');
      return null;
    }

    const duration = Math.round((Date.now() - this._recordingStartTime) / 1000);
    const mimeType = this.mediaRecorder.mimeType || 'audio/webm';

    return new Promise((resolve) => {
      this.mediaRecorder.onstop = () => {
        this.isRecording = false;

        if (this.audioChunks.length === 0) {
          console.warn('RecordingEngine.stopRecording: no audio data captured');
          resolve(null);
          return;
        }

        const blob = new Blob(this.audioChunks, { type: mimeType });
        const url = URL.createObjectURL(blob);

        const result = { blob, url, duration, mimeType };
        this.recordings.set(taskId, result);
        this.audioChunks = [];

        resolve(result);
      };

      // Handle unexpected errors
      this.mediaRecorder.onerror = (event) => {
        console.error('RecordingEngine.stopRecording: MediaRecorder error', event.error);
        this.isRecording = false;
        resolve(null);
      };

      this.mediaRecorder.stop();
    });
  }

  // ===========================================================================
  //  PLAYBACK
  // ===========================================================================

  /**
   * Retrieve a stored recording.
   *
   * @param {string} taskId
   * @returns {{blob: Blob, url: string, duration: number, mimeType: string}|undefined}
   */
  getRecording(taskId) {
    return this.recordings.get(taskId);
  }

  /**
   * Play back a previously recorded audio clip.
   *
   * @param {string} taskId
   * @returns {HTMLAudioElement|null} The audio element for external control,
   *                                  or null if no recording exists.
   */
  playRecording(taskId) {
    const recording = this.recordings.get(taskId);
    if (!recording) {
      console.warn('RecordingEngine.playRecording: no recording for taskId "' + taskId + '"');
      return null;
    }

    // Stop any previous playback
    this.stopPlayback();

    const audio = new Audio(recording.url);
    audio.volume = 0.9;
    this._playbackAudio = audio;

    const clear = () => {
      this._playbackAudio = null;
    };
    audio.addEventListener('ended', clear);
    // Without this, a blob that fails to decode never fires 'ended', so
    // _playbackAudio stays set and stopPlayback() is left pointing at a dead
    // element. Same class of fault as the prompt playback fixed on 2026-08-13:
    // waiting on 'ended' alone is waiting forever when the media errors.
    audio.addEventListener('error', (e) => {
      console.error('RecordingEngine.playRecording: media error', recording.url, e);
      clear();
    });

    audio.play().catch((err) => {
      console.error('RecordingEngine.playRecording: playback failed', err);
      clear();
    });

    return audio;
  }

  /**
   * Stop any currently playing playback audio.
   */
  stopPlayback() {
    if (this._playbackAudio) {
      this._playbackAudio.pause();
      this._playbackAudio.currentTime = 0;
      this._playbackAudio = null;
    }
  }

  // ===========================================================================
  //  AUDIO LEVEL / WAVEFORM
  // ===========================================================================

  /**
   * Get the current microphone input level.
   * Returns a normalised value between 0 and 1.
   *
   * @returns {number}
   */
  getAudioLevel() {
    if (!this.analyser) return 0;

    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);

    // Compute RMS (root mean square) of the frequency data
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      const val = dataArray[i] / 255;
      sum += val * val;
    }
    const rms = Math.sqrt(sum / dataArray.length);

    // Scale up slightly so the meter feels responsive
    return Math.min(1, rms * 1.8);
  }

  /**
   * Get waveform data for visualisation (e.g. bar chart / oscilloscope).
   *
   * @param {number} [bins=32] - Number of output data points
   * @returns {number[]} Array of values between 0 and 1
   */
  getWaveformData(bins) {
    bins = bins || 32;

    if (!this.analyser) {
      return new Array(bins).fill(0);
    }

    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);

    // Downsample to the requested number of bins
    const result = [];
    const step = Math.floor(dataArray.length / bins);

    for (let i = 0; i < bins; i++) {
      let sum = 0;
      const start = i * step;
      for (let j = start; j < start + step && j < dataArray.length; j++) {
        sum += dataArray[j];
      }
      result.push(sum / step / 255);
    }

    return result;
  }

  // ===========================================================================
  //  CLEANUP
  // ===========================================================================

  /**
   * Release all resources: stop recording, close streams, revoke object URLs.
   */
  cleanup() {
    // Stop any active recording
    if (this.isRecording && this.mediaRecorder) {
      try {
        this.mediaRecorder.stop();
      } catch (_) {}
      this.isRecording = false;
    }

    // Stop playback
    this.stopPlayback();

    // Close the AudioContext
    if (this.audioContext) {
      try {
        this.audioContext.close();
      } catch (_) {}
      this.audioContext = null;
      this.analyser = null;
      this.sourceNode = null;
    }

    // Stop all media stream tracks
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }

    // Revoke all object URLs to free memory
    this.recordings.forEach((recording) => {
      if (recording.url) {
        try {
          URL.revokeObjectURL(recording.url);
        } catch (_) {}
      }
    });
    this.recordings.clear();
  }

  // ===========================================================================
  //  STATIC HELPERS
  // ===========================================================================

  /**
   * Determine the best MIME type supported by MediaRecorder on this browser.
   *
   * @returns {string|null} MIME type string, or null if none detected
   */
  static getSupportedMimeType() {
    if (typeof MediaRecorder === 'undefined') return null;

    // Preference order: webm/opus > webm > ogg/opus > mp4
    const types = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/ogg',
      'audio/mp4',
    ];

    for (const type of types) {
      if (MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }

    return null;
  }

  /**
   * Check whether the recording APIs are available in this browser.
   * @returns {boolean}
   */
  static isSupported() {
    return !!(
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia &&
      typeof MediaRecorder !== 'undefined'
    );
  }
}

// Singleton instance
const recordingEngine = new RecordingEngine();
