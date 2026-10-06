/**
 * Pre-test system verification for TOEFL Mock Test.
 *
 * Checks audio playback, microphone access, browser storage,
 * and required browser APIs before allowing the user to start
 * a test. The display check always passes — the test UI adapts
 * to phones, tablets, and desktops.
 */

const SystemCheck = (function () {
  // ---------------------------------------------------------------
  //  State
  // ---------------------------------------------------------------

  var results = _freshResults();

  function _freshResults() {
    return {
      screenSize: { status: 'pending', message: '' },
      audio: { status: 'pending', message: '' },
      microphone: { status: 'pending', message: '' },
      storage: { status: 'pending', message: '' },
      browser: { status: 'pending', message: '' },
    };
  }

  // ---------------------------------------------------------------
  //  Individual checks
  // ---------------------------------------------------------------

  /**
   * Device & display check. The test UI adapts to any viewport, so this
   * always passes. Phones, tablets, and desktops are all supported.
   */
  function checkScreenSize() {
    var width = window.innerWidth || document.documentElement.clientWidth || 0;
    var height = window.innerHeight || document.documentElement.clientHeight || 0;
    results.screenSize = {
      status: 'pass',
      message:
        'Display detected at ' +
        width +
        '×' +
        height +
        'px. The test works on phones, tablets, and desktops.',
    };
    return results.screenSize;
  }

  /**
   * Verify that the SpeechSynthesis API is available and can produce speech.
   * Resolves after a short utterance test or a timeout.
   */
  function checkAudio() {
    return new Promise(function (resolve) {
      // Check API existence
      if (!('speechSynthesis' in window)) {
        results.audio = {
          status: 'fail',
          message:
            'SpeechSynthesis API is not supported in this browser. Please use a modern browser such as Chrome, Edge, or Firefox.',
        };
        resolve(results.audio);
        return;
      }

      var synth = window.speechSynthesis;

      // Safety timeout in case voices never load
      var timeout = setTimeout(function () {
        // Even without voices the API may still work (some browsers load lazily).
        // Mark as a warning-pass.
        if (results.audio.status === 'pending') {
          results.audio = {
            status: 'pass',
            message:
              'SpeechSynthesis API is available. Voice list could not be confirmed, but audio may still work.',
          };
          resolve(results.audio);
        }
      }, 5000);

      function trySpeak() {
        var voices = synth.getVoices();

        // Find an English voice if possible
        var englishVoice = null;
        for (var i = 0; i < voices.length; i++) {
          if (voices[i].lang && voices[i].lang.indexOf('en') === 0) {
            englishVoice = voices[i];
            break;
          }
        }

        // Create a silent test utterance (volume 0 so nothing is audible)
        var utterance = new SpeechSynthesisUtterance('test');
        utterance.volume = 0;
        utterance.rate = 2;
        if (englishVoice) {
          utterance.voice = englishVoice;
        }

        utterance.onend = function () {
          clearTimeout(timeout);
          results.audio = {
            status: 'pass',
            message: 'Audio playback is working. ' + voices.length + ' voice(s) available.',
          };
          resolve(results.audio);
        };

        utterance.onerror = function (e) {
          clearTimeout(timeout);
          // "interrupted" or "canceled" errors are usually harmless
          if (e.error === 'interrupted' || e.error === 'canceled') {
            results.audio = {
              status: 'pass',
              message:
                'SpeechSynthesis API is available (' +
                voices.length +
                ' voices). Minor interruption during test, but audio should work.',
            };
          } else {
            results.audio = {
              status: 'fail',
              message:
                'Audio test failed: ' +
                (e.error || 'unknown error') +
                '. Please check your audio output settings.',
            };
          }
          resolve(results.audio);
        };

        try {
          synth.cancel(); // clear any queued speech
          synth.speak(utterance);
        } catch (err) {
          clearTimeout(timeout);
          results.audio = {
            status: 'fail',
            message: 'Audio test threw an error: ' + err.message,
          };
          resolve(results.audio);
        }
      }

      // Voices may load asynchronously
      if (synth.getVoices().length > 0) {
        trySpeak();
      } else {
        synth.addEventListener('voiceschanged', function onVoices() {
          synth.removeEventListener('voiceschanged', onVoices);
          trySpeak();
        });
        // Trigger loading
        synth.getVoices();
      }
    });
  }

  /**
   * Request microphone access via getUserMedia and verify we can record.
   * Provides specific messages for common error types.
   */
  function checkMicrophone() {
    return new Promise(function (resolve) {
      if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
        results.microphone = {
          status: 'fail',
          message: 'getUserMedia API is not available. Please use a modern browser over HTTPS.',
        };
        resolve(results.microphone);
        return;
      }

      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
          // Verify MediaRecorder support
          if (typeof MediaRecorder === 'undefined') {
            _stopTracks(stream);
            results.microphone = {
              status: 'fail',
              message:
                'Microphone access granted, but MediaRecorder API is not supported. Please use Chrome, Edge, or Firefox.',
            };
            resolve(results.microphone);
            return;
          }

          // Quick recording test
          try {
            var mimeType = _getSupportedMimeType();
            var options = mimeType ? { mimeType: mimeType } : undefined;
            var recorder = new MediaRecorder(stream, options);
            var chunks = [];

            recorder.ondataavailable = function (e) {
              if (e.data && e.data.size > 0) {
                chunks.push(e.data);
              }
            };

            recorder.onstop = function () {
              _stopTracks(stream);
              if (chunks.length > 0) {
                results.microphone = {
                  status: 'pass',
                  message:
                    'Microphone is working and recording is functional' +
                    (mimeType ? ' (' + mimeType + ').' : '.'),
                };
              } else {
                results.microphone = {
                  status: 'fail',
                  message:
                    'Microphone stream was captured but no audio data was recorded. Please check that your microphone is not muted.',
                };
              }
              resolve(results.microphone);
            };

            recorder.onerror = function (e) {
              _stopTracks(stream);
              results.microphone = {
                status: 'fail',
                message: 'Recording test failed: ' + (e.error ? e.error.message : 'unknown error'),
              };
              resolve(results.microphone);
            };

            recorder.start();
            setTimeout(function () {
              if (recorder.state === 'recording') {
                recorder.stop();
              }
            }, 500);
          } catch (recErr) {
            _stopTracks(stream);
            results.microphone = {
              status: 'fail',
              message: 'Failed to initialise MediaRecorder: ' + recErr.message,
            };
            resolve(results.microphone);
          }
        })
        .catch(function (err) {
          var message;
          switch (err.name) {
            case 'NotAllowedError':
              message =
                'Microphone permission was denied. Please allow microphone access in your browser settings and reload the page.';
              break;
            case 'NotFoundError':
              message = 'No microphone was detected. Please connect a microphone and try again.';
              break;
            case 'NotReadableError':
              message =
                'Your microphone is in use by another application. Please close other apps that may be using the microphone and try again.';
              break;
            case 'OverconstrainedError':
              message =
                'Microphone constraints could not be satisfied. Please try a different microphone.';
              break;
            case 'AbortError':
              message = 'Microphone access was aborted. Please try again.';
              break;
            default:
              message = 'Microphone access failed: ' + (err.message || err.name || 'unknown error');
          }
          results.microphone = { status: 'fail', message: message };
          resolve(results.microphone);
        });
    });
  }

  /**
   * Verify localStorage and sessionStorage are available and writable.
   */
  function checkStorage() {
    var localOk = _testStorage('localStorage');
    var sessionOk = _testStorage('sessionStorage');

    if (localOk && sessionOk) {
      var estimate = _estimateRemainingQuota();
      results.storage = {
        status: 'pass',
        message:
          'localStorage and sessionStorage are available.' +
          (estimate ? ' Approximate free space: ' + estimate + '.' : ''),
      };
    } else {
      var failing = [];
      if (!localOk) failing.push('localStorage');
      if (!sessionOk) failing.push('sessionStorage');
      results.storage = {
        status: 'fail',
        message:
          failing.join(' and ') +
          ' unavailable. Please disable private/incognito mode or check browser settings.',
      };
    }
    return results.storage;
  }

  /**
   * Check for required browser APIs and identify the browser.
   */
  function checkBrowser() {
    var missing = [];

    if (!('speechSynthesis' in window)) {
      missing.push('SpeechSynthesis');
    }
    if (typeof MediaRecorder === 'undefined') {
      missing.push('MediaRecorder');
    }
    if (typeof IntersectionObserver === 'undefined') {
      missing.push('IntersectionObserver');
    }

    var browserInfo = _detectBrowser();

    if (missing.length === 0) {
      results.browser = {
        status: 'pass',
        message: 'All required APIs are supported. Browser: ' + browserInfo + '.',
      };
    } else {
      results.browser = {
        status: 'fail',
        message:
          'Missing APIs: ' +
          missing.join(', ') +
          '. Browser: ' +
          browserInfo +
          '. Please update your browser or switch to Chrome / Edge / Firefox.',
      };
    }
    return results.browser;
  }

  // ---------------------------------------------------------------
  //  Run all checks
  // ---------------------------------------------------------------

  /**
   * Execute every check and resolve when all complete.
   * @returns {Promise<object>} The full results object
   */
  function checkAll() {
    // Reset
    results = _freshResults();

    // Synchronous checks first
    checkScreenSize();
    checkStorage();
    checkBrowser();

    // Async checks
    return Promise.all([checkAudio(), checkMicrophone()]).then(function () {
      return results;
    });
  }

  // ---------------------------------------------------------------
  //  Computed getters (exposed as functions for broad compat)
  // ---------------------------------------------------------------

  /**
   * @returns {boolean} True when every check has status 'pass'.
   */
  function getAllPassed() {
    var keys = Object.keys(results);
    for (var i = 0; i < keys.length; i++) {
      if (results[keys[i]].status !== 'pass') return false;
    }
    return true;
  }

  /**
   * @returns {Array<string>} Names of checks that did not pass.
   */
  function getFailedChecks() {
    var failed = [];
    var keys = Object.keys(results);
    for (var i = 0; i < keys.length; i++) {
      if (results[keys[i]].status !== 'pass') {
        failed.push(keys[i]);
      }
    }
    return failed;
  }

  // ---------------------------------------------------------------
  //  Private helpers
  // ---------------------------------------------------------------

  /**
   * Test whether a storage backend is available and writable.
   * @param {string} type - 'localStorage' or 'sessionStorage'
   * @returns {boolean}
   */
  function _testStorage(type) {
    try {
      var s = window[type];
      var probe = '__toefl_storage_check__';
      s.setItem(probe, 'ok');
      var val = s.getItem(probe);
      s.removeItem(probe);
      return val === 'ok';
    } catch (e) {
      return false;
    }
  }

  /**
   * Rough estimate of remaining localStorage space.
   * @returns {string|null} Human-readable size string, or null
   */
  function _estimateRemainingQuota() {
    try {
      var total = 0;
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        total += key.length + (localStorage.getItem(key) || '').length;
      }
      var usedKB = Math.round((total * 2) / 1024); // UTF-16 = 2 bytes/char
      // Most browsers allow 5-10 MB
      var estimatedTotalKB = 5120;
      var freeKB = Math.max(0, estimatedTotalKB - usedKB);
      if (freeKB > 1024) {
        return (freeKB / 1024).toFixed(1) + ' MB';
      }
      return freeKB + ' KB';
    } catch (e) {
      return null;
    }
  }

  /**
   * Detect the current browser name and version from the user agent.
   * @returns {string}
   */
  function _detectBrowser() {
    var ua = navigator.userAgent || '';
    var match;

    if ((match = ua.match(/Edg\/(\d+[\.\d]*)/))) {
      return 'Microsoft Edge ' + match[1];
    }
    if ((match = ua.match(/OPR\/(\d+[\.\d]*)/))) {
      return 'Opera ' + match[1];
    }
    if ((match = ua.match(/Chrome\/(\d+[\.\d]*)/))) {
      return 'Google Chrome ' + match[1];
    }
    if ((match = ua.match(/Firefox\/(\d+[\.\d]*)/))) {
      return 'Mozilla Firefox ' + match[1];
    }
    if ((match = ua.match(/Version\/(\d+[\.\d]*).*Safari/))) {
      return 'Apple Safari ' + match[1];
    }
    return 'Unknown browser';
  }

  /**
   * Stop all tracks on a MediaStream.
   * @param {MediaStream} stream
   */
  function _stopTracks(stream) {
    if (stream && typeof stream.getTracks === 'function') {
      stream.getTracks().forEach(function (track) {
        track.stop();
      });
    }
  }

  /**
   * Find a supported audio MIME type for MediaRecorder.
   * @returns {string|null}
   */
  function _getSupportedMimeType() {
    var types = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/ogg',
      'audio/mp4',
    ];
    for (var i = 0; i < types.length; i++) {
      if (MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(types[i])) {
        return types[i];
      }
    }
    return null;
  }

  // ---------------------------------------------------------------
  //  Public API
  // ---------------------------------------------------------------

  return {
    get results() {
      return results;
    },

    checkAll: checkAll,
    checkScreenSize: checkScreenSize,
    checkAudio: checkAudio,
    checkMicrophone: checkMicrophone,
    checkStorage: checkStorage,
    checkBrowser: checkBrowser,

    get allPassed() {
      return getAllPassed();
    },
    get failedChecks() {
      return getFailedChecks();
    },
  };
})();
