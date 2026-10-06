/**
 * Audio Engine - SpeechSynthesis wrapper for TOEFL Mock Test
 *
 * Provides text-to-speech playback for listening comprehension and speaking
 * section prompts. Uses the Web Speech API (SpeechSynthesis) to read scripts
 * composed of multiple speaker segments.
 *
 * Usage:
 *   await audioEngine.init();
 *   await audioEngine.speakScript([
 *     { speaker: 'narrator', text: 'Listen to a lecture...', pause: 1000 },
 *     { speaker: 'professor', text: 'Today we will discuss...', rate: 0.9 }
 *   ]);
 */

class AudioEngine {
  constructor() {
    /** @type {SpeechSynthesis} */
    this.synth = window.speechSynthesis;

    /** @type {SpeechSynthesisVoice[]} */
    this.voices = [];

    /** Preferred voices keyed by gender / role */
    this.preferredVoices = { male: null, female: null, narrator: null };

    /** Currently speaking utterance (if any) */
    this.currentUtterance = null;

    /** Playback state flags */
    this.isPlaying = false;
    this.isPaused = false;

    /** The full script being played */
    this.scriptQueue = [];

    /** Index of the segment currently being spoken */
    this.currentSegmentIndex = 0;

    // -- Callbacks --
    /** @type {Function|null} Called after each segment with (segmentIndex, totalSegments) */
    this.onProgress = null;

    /** @type {Function|null} Called when the entire script finishes */
    this.onComplete = null;

    /** @type {Function|null} Called when a new segment starts with (segment, index) */
    this.onSegmentChange = null;

    /** Playback volume 0-1 */
    this.volume = 0.8;

    /** Internal abort flag */
    this._aborted = false;

    /** Whether init() has resolved */
    this._ready = false;

    /** Currently playing Audio element (for file playback) */
    this._currentAudio = null;
  }

  // ===========================================================================
  //  INITIALISATION
  // ===========================================================================

  /**
   * Load available voices and select preferred ones.
   * Must be called (and awaited) before any speak calls.
   *
   * @returns {Promise<void>}
   */
  async init() {
    if (this._ready) return;

    // Voices may load asynchronously in Chrome / Edge
    await this._loadVoices();
    this.selectPreferredVoices();
    this._ready = true;
  }

  /**
   * Wait for the browser to populate speechSynthesis.getVoices().
   * @returns {Promise<SpeechSynthesisVoice[]>}
   * @private
   */
  _loadVoices() {
    return new Promise((resolve) => {
      const tryLoad = () => {
        const v = this.synth.getVoices();
        if (v.length > 0) {
          this.voices = v;
          resolve(v);
          return true;
        }
        return false;
      };

      // Some browsers have voices ready immediately
      if (tryLoad()) return;

      // Others fire an event when voices become available
      this.synth.addEventListener(
        'voiceschanged',
        () => {
          tryLoad();
          resolve(this.voices);
        },
        { once: true }
      );

      // Timeout fallback after 3 seconds (some browsers never fire the event)
      setTimeout(() => {
        if (this.voices.length === 0) {
          this.voices = this.synth.getVoices();
          resolve(this.voices);
        }
      }, 3000);
    });
  }

  /**
   * Select the best English voices for male, female, and narrator roles.
   * Priority: Google US English > Microsoft US English > any English voice.
   */
  selectPreferredVoices() {
    const english = this.voices.filter((v) => v.lang && v.lang.startsWith('en'));

    if (english.length === 0) {
      // Absolute fallback: just use the first available voice
      const fallback = this.voices[0] || null;
      this.preferredVoices = { male: fallback, female: fallback, narrator: fallback };
      return;
    }

    /**
     * Pick the best voice from a prioritised list of name fragments.
     * @param {string[]} nameParts - substrings to look for in voice.name
     * @returns {SpeechSynthesisVoice|null}
     */
    const findBest = (nameParts) => {
      for (const part of nameParts) {
        const match = english.find((v) => v.name.toLowerCase().includes(part.toLowerCase()));
        if (match) return match;
      }
      return null;
    };

    // Male voice priority
    this.preferredVoices.male =
      findBest([
        'Google US English',
        'Microsoft David',
        'Microsoft Guy',
        'Microsoft Mark',
        'Alex',
        'Daniel',
      ]) || english[0];

    // Female voice priority
    this.preferredVoices.female =
      findBest([
        'Google US English Female',
        'Microsoft Zira',
        'Microsoft Aria',
        'Microsoft Jenny',
        'Samantha',
        'Karen',
        'Victoria',
      ]) || english[Math.min(1, english.length - 1)];

    // Narrator: reuse male voice
    this.preferredVoices.narrator = this.preferredVoices.male;
  }

  // ===========================================================================
  //  VOICE SELECTION
  // ===========================================================================

  /**
   * Return the appropriate voice for a given speaker label.
   *
   * @param {string} speaker - e.g. "professor", "student", "narrator",
   *                           "male", "female", "student-female"
   * @returns {SpeechSynthesisVoice|null}
   */
  getVoiceForSpeaker(speaker) {
    if (!speaker) return this.preferredVoices.narrator;

    const s = speaker.toLowerCase();

    // Explicit gender
    if (s.includes('female') || s.includes('woman')) {
      return this.preferredVoices.female;
    }
    if (s.includes('male') || s.includes('man')) {
      return this.preferredVoices.male;
    }

    // Role-based mapping
    const maleRoles = ['professor', 'instructor', 'librarian', 'advisor'];
    const femaleRoles = ['student', 'classmate'];

    if (maleRoles.some((r) => s.includes(r))) return this.preferredVoices.male;
    if (femaleRoles.some((r) => s.includes(r))) return this.preferredVoices.female;
    if (s === 'narrator') return this.preferredVoices.narrator;

    // Default
    return this.preferredVoices.male;
  }

  // ===========================================================================
  //  HIGH-LEVEL PLAYBACK
  // ===========================================================================

  /**
   * Speak an entire script (array of segments) sequentially.
   *
   * @param {Array<{speaker: string, text: string, pause?: number, rate?: number}>} script
   * @returns {Promise<void>} Resolves when the script finishes or is aborted.
   */
  async speakScript(script) {
    if (!script || script.length === 0) {
      this.onComplete?.();
      return;
    }

    this.stop(); // cancel anything playing

    this._aborted = false;
    this.scriptQueue = script;
    this.currentSegmentIndex = 0;
    this.isPlaying = true;

    try {
      for (let i = 0; i < script.length; i++) {
        if (this._aborted) break;

        this.currentSegmentIndex = i;
        const segment = script[i];

        // Notify listeners of segment change
        this.onSegmentChange?.(segment, i);

        // Speak the segment
        await this.speakSegment(segment);

        // Notify progress
        this.onProgress?.(i, script.length);

        if (this._aborted) break;

        // Inter-segment pause (default 400ms for natural pacing)
        const pauseMs = typeof segment.pause === 'number' ? segment.pause : 400;
        if (pauseMs > 0 && i < script.length - 1) {
          await this.wait(pauseMs);
        }
      }
    } catch (err) {
      if (!this._aborted) {
        console.error('AudioEngine.speakScript: playback error', err);
      }
    } finally {
      this.isPlaying = false;
      this.currentUtterance = null;
      if (!this._aborted) {
        this.onComplete?.();
      }
    }
  }

  /**
   * Speak a single segment.
   *
   * @param {{speaker: string, text: string, pause?: number, rate?: number}} segment
   * @returns {Promise<void>}
   */
  async speakSegment(segment) {
    if (!segment || !segment.text) return;

    const voice = this.getVoiceForSpeaker(segment.speaker);

    // Default rate is 0.9 for academic content (slightly slower for clarity)
    const rate = typeof segment.rate === 'number' ? segment.rate : 0.9;

    await this.speak(segment.text, voice, rate);
  }

  /**
   * Low-level speak function.  Creates a SpeechSynthesisUtterance, sets
   * all parameters, and returns a promise that resolves on end / error.
   *
   * @param {string} text
   * @param {SpeechSynthesisVoice|null} voice
   * @param {number} [rate=0.9]
   * @returns {Promise<void>}
   */
  speak(text, voice, rate) {
    return new Promise((resolve, reject) => {
      if (this._aborted) {
        resolve();
        return;
      }

      // Chrome has a bug where long utterances silently stop.
      // We chunk text into sentences to work around it.
      const chunks = this._chunkText(text);

      const speakChunk = (idx) => {
        if (idx >= chunks.length || this._aborted) {
          resolve();
          return;
        }

        const utterance = new SpeechSynthesisUtterance(chunks[idx]);
        this.currentUtterance = utterance;

        if (voice) utterance.voice = voice;
        utterance.rate = rate || 0.9;
        utterance.pitch = 1.0;
        utterance.volume = this.volume;

        utterance.onend = () => {
          speakChunk(idx + 1);
        };

        utterance.onerror = (event) => {
          // "interrupted" and "canceled" are expected when stopping
          if (event.error === 'interrupted' || event.error === 'canceled') {
            resolve();
          } else {
            console.warn('AudioEngine.speak: utterance error', event.error);
            // Continue to next chunk despite error
            speakChunk(idx + 1);
          }
        };

        this.synth.speak(utterance);
      };

      speakChunk(0);
    });
  }

  // ===========================================================================
  //  REPLAY
  // ===========================================================================

  /**
   * Re-speak a range of segments from the most recently loaded script.
   *
   * @param {number} startIndex - First segment index (inclusive)
   * @param {number} [endIndex] - Last segment index (inclusive). Defaults to startIndex.
   * @returns {Promise<void>}
   */
  async replaySegments(startIndex, endIndex) {
    if (!this.scriptQueue.length) return;

    const end = typeof endIndex === 'number' ? endIndex : startIndex;
    const subset = this.scriptQueue.slice(startIndex, end + 1);
    await this.speakScript(subset);
  }

  // ===========================================================================
  //  TRANSPORT CONTROLS
  // ===========================================================================

  /** Pause playback */
  pause() {
    if (this.isPlaying && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
    }
  }

  /** Resume playback */
  resume() {
    if (this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
    }
  }

  /** Stop playback entirely and cancel all pending speech */
  stop() {
    this._aborted = true;
    this.synth.cancel();
    this.isPlaying = false;
    this.isPaused = false;
    this.currentUtterance = null;
  }

  /**
   * Set playback volume.
   * @param {number} level - 0 to 1
   */
  setVolume(level) {
    this.volume = Math.max(0, Math.min(1, level));
  }

  // ===========================================================================
  //  PROGRESS
  // ===========================================================================

  /**
   * Current playback progress as a 0-100 percentage.
   * @returns {number}
   */
  get progress() {
    if (!this.scriptQueue.length) return 0;
    return Math.round((this.currentSegmentIndex / this.scriptQueue.length) * 100);
  }

  // ===========================================================================
  //  UTILITIES
  // ===========================================================================

  /**
   * Wait for a specified duration.
   *
   * @param {number} ms - Milliseconds to wait
   * @returns {Promise<void>}
   */
  wait(ms) {
    return new Promise((resolve) => {
      const timer = setTimeout(resolve, ms);
      // Allow abort to cut the wait short
      const checkAbort = setInterval(() => {
        if (this._aborted) {
          clearTimeout(timer);
          clearInterval(checkAbort);
          resolve();
        }
      }, 100);
      // Clean up the check interval when the wait finishes naturally
      setTimeout(() => clearInterval(checkAbort), ms + 50);
    });
  }

  /**
   * Split long text into sentence-level chunks to avoid Chrome's
   * SpeechSynthesis bug where utterances > ~200 chars stop prematurely.
   *
   * @param {string} text
   * @returns {string[]}
   * @private
   */
  _chunkText(text) {
    if (!text) return [];

    // If text is short enough, return as-is
    if (text.length <= 180) return [text];

    // Split on sentence boundaries
    const sentences = text.match(/[^.!?]+[.!?]+\s*/g);
    if (!sentences) return [text];

    // Group sentences into chunks of roughly 180 chars
    const chunks = [];
    let current = '';
    for (const sentence of sentences) {
      if (current.length + sentence.length > 180 && current.length > 0) {
        chunks.push(current.trim());
        current = sentence;
      } else {
        current += sentence;
      }
    }
    if (current.trim().length > 0) {
      chunks.push(current.trim());
    }

    return chunks.length > 0 ? chunks : [text];
  }

  /**
   * Check whether the SpeechSynthesis API is available.
   * @returns {boolean}
   */
  static isSupported() {
    return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  }

  // ===========================================================================
  //  FILE-BASED AUDIO PLAYBACK (for pre-recorded MP3s)
  // ===========================================================================

  /**
   * Play a pre-recorded audio file (MP3).
   * Used for the new listening section with Edge TTS pre-generated audio.
   *
   * @param {string} url - Path to the MP3 file (e.g. 'audio/listening/test-1/m1-cr01.mp3')
   * @returns {Promise<void>} Resolves when playback finishes.
   */
  playFile(url) {
    return new Promise((resolve, reject) => {
      this.stopFile();
      this._aborted = false;

      const audio = new Audio(url);
      this._currentAudio = audio;
      audio.volume = this.volume;
      this.isPlaying = true;

      // Progress tracking
      audio.addEventListener('timeupdate', () => {
        if (audio.duration > 0) {
          const pct = Math.round((audio.currentTime / audio.duration) * 100);
          this.onProgress?.(pct, 100);
        }
      });

      audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this._currentAudio = null;
        this.onComplete?.();
        resolve();
      });

      audio.addEventListener('error', (e) => {
        this.isPlaying = false;
        this._currentAudio = null;
        console.warn('AudioEngine.playFile: error', e);
        reject(e);
      });

      audio.play().catch((err) => {
        this.isPlaying = false;
        this._currentAudio = null;
        console.warn('AudioEngine.playFile: play() rejected', err);
        reject(err);
      });
    });
  }

  /** Stop any currently playing audio file */
  stopFile() {
    if (this._currentAudio) {
      this._currentAudio.pause();
      this._currentAudio.currentTime = 0;
      this._currentAudio = null;
    }
    this.isPlaying = false;
  }

  /** Pause currently playing audio file */
  pauseFile() {
    if (this._currentAudio && !this._currentAudio.paused) {
      this._currentAudio.pause();
      this.isPaused = true;
    }
  }

  /** Resume paused audio file */
  resumeFile() {
    if (this._currentAudio && this._currentAudio.paused) {
      // A bare play() leaves an unhandled rejection when the browser refuses,
      // which is invisible to everyone. Nothing in this file may call play()
      // without saying what happens if it does not start.
      const p = this._currentAudio.play();
      if (p && p.catch) {
        p.catch((err) => {
          console.warn('AudioEngine.resumeFile: play() rejected', err);
          this.isPaused = true;
        });
      }
      this.isPaused = false;
    }
  }

  /** Get current audio file duration in seconds */
  get fileDuration() {
    return this._currentAudio?.duration || 0;
  }

  /** Get current audio file playback position in seconds */
  get fileCurrentTime() {
    return this._currentAudio?.currentTime || 0;
  }

  /** Set volume on current audio file */
  setFileVolume(level) {
    this.volume = Math.max(0, Math.min(1, level));
    if (this._currentAudio) {
      this._currentAudio.volume = this.volume;
    }
  }
}

// Singleton instance — attached to window for cross-script access
const audioEngine = new AudioEngine();
window.audioEngine = audioEngine;
