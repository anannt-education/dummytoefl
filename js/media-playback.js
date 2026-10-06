/**
 * One media-playback primitive for every audio and video prompt in a test.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * There used to be four separate implementations of "play this file and carry
 * on when it finishes", and they did not agree with each other:
 *
 *   practice-tests/.../index.html  _playVideoAndWait()        (interview video)
 *   practice-tests/.../index.html  initListenAndRepeatItem()  (repetition audio)
 *   practice-tests/.../index.html  playListeningFile()        (listening audio)
 *   js/test-engine.js              _playMediaAndWait()        (unused, divergent)
 *
 * Only the video one was ever hardened. It retries, watches for a stall, and
 * shows a tap-to-play overlay when the browser blocks autoplay. The two audio
 * ones did this instead:
 *
 *     const p = el.play();
 *     if (p && p.catch) p.catch(() => resolve());
 *
 * A rejected play() resolved the promise and the flow walked straight on to the
 * recording countdown. The student saw "Get ready to repeat", then a timer, for
 * a sentence that never came out of the speakers. Nothing was logged, nothing
 * was shown, and the resulting silence was scored as a zero. One student wrote
 * in on 2026-08-12 saying "I couldn't hear any speech whatsoever which is why I
 * skipped all of them", and his eleven clips are 8s, 8s, then 2s, 1s, 1s, 1s,
 * 1s: two windows waited out, then a section abandoned.
 *
 * Worse, neither audio path listened for 'error'. A file that fails to decode
 * never fires 'ended', so the promise never settled at all and the section
 * froze until the clock ran out.
 *
 * So this module is the single implementation. Every caller delegates here, and
 * the guarantees below hold for all of them.
 *
 * GUARANTEES
 * ----------
 *   1. The promise ALWAYS settles, exactly once. There is no path that hangs.
 *   2. The caller is TOLD what happened. 'played' is never returned for media
 *      that did not play, so no caller can silently continue as if it had.
 *   3. A transient load failure is retried with backoff before the student is
 *      shown anything.
 *   4. Blocked autoplay surfaces a tap-to-play affordance rather than being
 *      swallowed, because that failure is recoverable by one click.
 *   5. Every non-'played' outcome is recorded in MediaPlayback.failures so the
 *      submission can carry it and support can see it later.
 *
 * Depends on nothing. Attach before test-engine.js.
 */
(function (global) {
  'use strict';

  /**
   * Every timing lives here and is read at call time, so the test suite can
   * shrink the waits without the code under test drifting from the code that
   * ships. Capturing these in closure variables instead meant a test could set
   * a value that nothing actually read, which is worse than no test at all.
   */
  var CONFIG = {
    /** Auto-retries before the student is shown anything at all. */
    MAX_AUTO_RETRIES: 3,
    BACKOFF_MS: [700, 1800, 3500],
    /** How long to wait for the student to act on a tap-to-play prompt. */
    BLOCKED_GRACE_MS: 30000,
    /** How long to leave a "could not load" message up before moving on. */
    FAILED_GRACE_MS: 45000,
    /** Slack on top of the clip's own duration before calling it stalled. */
    STALL_SLACK_MS: 25000,
    /** Used when metadata never arrives, so no duration is known. */
    STALL_NO_METADATA_MS: 60000,
    /**
     * Once the deadline passes, how long to keep granting while the clip is
     * demonstrably still advancing. A 1 MB interview video on a throttled link
     * legitimately outruns duration + slack: it is playing, just slowly, and
     * killing it costs the student the prompt.
     */
    STALL_PROGRESS_MS: 10000,
    /** currentTime must move at least this much to count as progress. */
    STALL_PROGRESS_EPSILON: 0.25,
    /** How long to wait for canplaythrough before starting anyway. */
    BUFFER_WAIT_MS: 1500,
    /**
     * Decoder warm-up before play(). Calling play() in the same tick as src
     * assignment clipped the opening word, which cost marks on Listen and
     * Repeat because the first word is exactly what has to be reproduced.
     */
    DECODER_WARMUP_MS: 250,
  };

  /**
   * Every prompt that did not play, keyed by the id the caller passes in.
   * js/submission.js reads this so a submission records that the student was
   * never actually given the prompt. Without it a silent clip is indangling
   * from a zero for not speaking.
   *   { taskId: { outcome: 'blocked'|'failed', reason: string, src: string } }
   */
  var failures = {};

  function noop() {}

  /**
   * Play one media element and resolve when it has finished, failed, or been
   * given up on.
   *
   * @param {HTMLMediaElement} el      the <audio> or <video> to play
   * @param {string} src               file to load
   * @param {object} [opts]
   * @param {number} [opts.volume]     0-100
   * @param {string} [opts.id]         task id, used for the failure record
   * @param {string} [opts.label]      'audio' | 'video', for messages only
   * @param {function} [opts.onBlocked] (retry, reason) => void. Show a
   *        tap-to-play affordance and call retry() when the student acts.
   * @param {function} [opts.onFailed]  (retry, reason) => void
   * @param {function} [opts.onResolved] () => void. Always called once, before
   *        the promise settles, so the caller can tear its overlay down.
   * @param {function} [opts.isStale]  () => boolean. Return true if the student
   *        has moved on; playback is abandoned without touching any UI.
   * @returns {Promise<{outcome: 'played'|'blocked'|'failed'|'stale', reason: string|null}>}
   */
  function play(el, src, opts) {
    opts = opts || {};
    var label = opts.label || (el && el.tagName === 'VIDEO' ? 'video' : 'audio');
    var onBlocked = opts.onBlocked || noop;
    var onFailed = opts.onFailed || noop;
    var onResolved = opts.onResolved || noop;
    var isStale =
      typeof opts.isStale === 'function'
        ? opts.isStale
        : function () {
            return false;
          };

    return new Promise(function (resolve) {
      if (!el || !src) {
        // Nothing to play is not a failure the student can act on, but it is
        // still not 'played', so the caller cannot mistake it for success.
        resolve({ outcome: 'failed', reason: 'no media element or source' });
        return;
      }

      var settled = false;
      var started = false;
      var attempt = 0;
      var failedThisAttempt = false;
      var graceId = null;
      var stallId = null;
      var bufferId = null;
      var warmupId = null;
      var retryId = null;

      function clearTimers() {
        if (graceId) clearTimeout(graceId);
        if (stallId) clearTimeout(stallId);
        if (bufferId) clearTimeout(bufferId);
        if (warmupId) clearTimeout(warmupId);
        if (retryId) clearTimeout(retryId);
        graceId = stallId = bufferId = warmupId = retryId = null;
      }

      function settle(outcome, reason) {
        if (settled) return;
        settled = true;
        clearTimers();
        el.removeEventListener('ended', onEnd);
        el.removeEventListener('error', onElementError);
        el.removeEventListener('loadedmetadata', onMetadata);
        el.removeEventListener('canplaythrough', onCanPlay);
        if (outcome !== 'played' && outcome !== 'stale' && opts.id) {
          failures[opts.id] = { outcome: outcome, reason: reason || null, src: src };
        }
        try {
          onResolved();
        } catch (e) {
          /* a broken teardown must not stop the flow */
        }
        resolve({ outcome: outcome, reason: reason || null });
      }

      function abandonIfStale() {
        if (settled) return false;
        var stale = false;
        try {
          stale = !!isStale();
        } catch (e) {
          stale = false;
        }
        if (stale) settle('stale', null);
        return stale;
      }

      function onEnd() {
        settle('played', null);
      }

      /**
       * currentTime at the last watchdog check, to tell playing from frozen.
       * Starts at 0 because beginPlayback rewinds to 0, so "still at 0" is the
       * definition of no progress rather than a value to be granted credit for.
       */
      var lastProgressAt = 0;

      /**
       * The stall watchdog. play() can resolve, no 'error' can fire, and the
       * clip can still never reach 'ended' when a network throttles mid-file.
       * That used to freeze the section outright.
       *
       * Two things this must get right, both learned from a real sitting where
       * all four interview prompts came back 'video stalled without finishing'
       * and the student answered four questions she had never heard:
       *
       *   1. A deadline measured in wall clock cannot tell a clip that is
       *      buffering from one that is dead. If currentTime is still moving,
       *      the clip is playing on a slow link and must be granted more time.
       *   2. When it really is stuck, the student has to be TOLD. Every other
       *      failure route goes through handleFailure, which retries quietly
       *      and then shows the tap-to-retry panel. This one used to settle
       *      'failed' on the spot, so the caller moved straight on to
       *      recording and the prompt was simply lost in silence.
       */
      function armStallWatchdog(ms) {
        if (stallId) clearTimeout(stallId);
        stallId = setTimeout(function () {
          if (settled) return;
          if (abandonIfStale()) return;

          var at;
          try {
            at = Number(el.currentTime);
          } catch (e) {
            /* some elements throw on currentTime before metadata */
          }
          if (!isFinite(at)) at = -1;

          // Still advancing: playing slowly, not stuck. Grant another window.
          if (at > lastProgressAt + CONFIG.STALL_PROGRESS_EPSILON) {
            lastProgressAt = at;
            armStallWatchdog(CONFIG.STALL_PROGRESS_MS);
            return;
          }

          handleFailure(label + ' stalled without finishing');
        }, ms);
      }

      function onMetadata() {
        if (isFinite(el.duration) && el.duration > 0) {
          armStallWatchdog(el.duration * 1000 + CONFIG.STALL_SLACK_MS);
        }
      }

      function onElementError() {
        handleFailure('media error');
      }

      /** Give up on this attempt, retrying quietly first. */
      function handleFailure(reason) {
        if (settled || failedThisAttempt) return;
        failedThisAttempt = true;
        if (abandonIfStale()) return;

        if (attempt < CONFIG.MAX_AUTO_RETRIES) {
          var wait = CONFIG.BACKOFF_MS[Math.min(attempt, CONFIG.BACKOFF_MS.length - 1)];
          attempt++;
          retryId = setTimeout(function () {
            if (!settled) startLoad();
          }, wait);
          return;
        }

        // Out of quiet retries. Tell the student, leave the door open, and
        // move on eventually rather than trapping them on one task.
        try {
          onFailed(manualRetry, reason);
        } catch (e) {
          /* ignore */
        }
        graceId = setTimeout(function () {
          settle('failed', reason);
        }, CONFIG.FAILED_GRACE_MS);
      }

      /** Autoplay refusal. One click fixes it, so ask for the click. */
      function handleBlocked(reason) {
        if (settled) return;
        if (abandonIfStale()) return;
        try {
          onBlocked(manualRetry, reason);
        } catch (e) {
          /* ignore */
        }
        graceId = setTimeout(function () {
          settle('blocked', reason || 'autoplay blocked');
        }, CONFIG.BLOCKED_GRACE_MS);
      }

      /** Handed to the caller so a tap can restart the whole attempt. */
      function manualRetry() {
        if (settled) return;
        if (graceId) {
          clearTimeout(graceId);
          graceId = null;
        }
        attempt = 0;
        started = false;
        startLoad();
      }

      function onCanPlay() {
        beginPlayback();
      }

      function beginPlayback() {
        if (started || settled) return;
        started = true;
        if (bufferId) {
          clearTimeout(bufferId);
          bufferId = null;
        }
        warmupId = setTimeout(function () {
          if (settled) return;
          if (abandonIfStale()) return;
          try {
            el.currentTime = 0;
          } catch (e) {
            /* some browsers refuse before metadata; harmless */
          }
          var p;
          try {
            p = el.play();
          } catch (e) {
            handleFailure(e && e.message ? e.message : 'play threw');
            return;
          }
          if (p && typeof p.catch === 'function') {
            p.catch(function (err) {
              var name = err && err.name;
              var msg = err && err.message ? err.message : 'play rejected';
              // NotAllowedError is the browser's autoplay policy and is the one
              // failure a single click reliably fixes. Everything else is a
              // load or decode problem and belongs on the retry path.
              if (name === 'NotAllowedError') handleBlocked(msg);
              else handleFailure(msg);
            });
          }
        }, CONFIG.DECODER_WARMUP_MS);
      }

      function startLoad() {
        if (settled) return;
        if (abandonIfStale()) return;
        failedThisAttempt = false;
        started = false;
        // A retry replays from the top, so previous progress must not count
        // towards the next stall check.
        lastProgressAt = 0;
        // And the retry needs its own watchdog. Without this the second and
        // later attempts have no stall detection at all: 'loadedmetadata' is
        // registered once, so nothing re-arms, and a clip that hangs on every
        // attempt never settles and the caller waits forever.
        armStallWatchdog(CONFIG.STALL_NO_METADATA_MS);
        if (bufferId) clearTimeout(bufferId);
        if (warmupId) clearTimeout(warmupId);
        try {
          el.preload = 'auto';
          if (typeof opts.volume === 'number') {
            el.volume = Math.max(0, Math.min(100, opts.volume)) / 100;
          }
          el.src = src;
          try {
            el.load();
          } catch (e) {
            /* Safari throws on load() in some states; play() still works */
          }
          if (el.readyState >= 3) {
            beginPlayback();
          } else {
            el.addEventListener('canplaythrough', onCanPlay, { once: true });
            // Buffering can outlast canplaythrough on flaky links, and waiting
            // forever is worse than a slightly rough start.
            bufferId = setTimeout(beginPlayback, CONFIG.BUFFER_WAIT_MS);
          }
        } catch (e) {
          handleFailure(e && e.message ? e.message : 'exception while loading');
        }
      }

      el.addEventListener('ended', onEnd);
      el.addEventListener('error', onElementError);
      el.addEventListener('loadedmetadata', onMetadata, { once: true });
      // Armed before the first byte, so a source that never loads at all still
      // resolves rather than hanging the section.
      armStallWatchdog(CONFIG.STALL_NO_METADATA_MS);
      startLoad();
    });
  }

  global.MediaPlayback = {
    play: play,
    failures: failures,
    /** Everything that did not play, for the submission payload. */
    getFailures: function () {
      return failures;
    },
    clearFailures: function () {
      Object.keys(failures).forEach(function (k) {
        delete failures[k];
      });
    },
    /** The live timing table. Mutating it changes behaviour; tests do. */
    _constants: CONFIG,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = global.MediaPlayback;
  }
})(typeof window !== 'undefined' ? window : globalThis);
