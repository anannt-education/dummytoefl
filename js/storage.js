/**
 * localStorage / sessionStorage abstraction layer for TOEFL Mock Test.
 *
 * - Test progress  -> localStorage   (survives reload AND tab close, so a
 *                     mid-test crash/freeze + reopen can offer "Resume". A
 *                     staleness guard clears entries older than PROGRESS_MAX_AGE
 *                     so a finished/abandoned test never nags on a later visit.)
 * - Test results   -> localStorage   (persists across sessions)
 * - User settings  -> localStorage   (persists across sessions)
 */

const StorageManager = (function () {
  // ---- Key prefixes ----
  const PREFIX_PROGRESS = 'toefl_progress_';
  const KEY_RESULTS = 'toefl_results';
  const PREFIX_SETTING = 'toefl_setting_';

  // Progress older than this is considered stale and is ignored (and cleared)
  // on read. A full test is ~90 min; 12 h is generous headroom for a resume
  // after a crash/reload while ensuring a test taken yesterday never prompts.
  const PROGRESS_MAX_AGE_MS = 12 * 60 * 60 * 1000;

  // ---------------------------------------------------------------
  //  Internal helpers
  // ---------------------------------------------------------------

  /**
   * Safely write a value to a storage backend.
   * Handles QuotaExceededError and disabled-storage scenarios.
   * @param {Storage} storage - sessionStorage or localStorage
   * @param {string} key
   * @param {*} value - Will be JSON-stringified
   * @returns {boolean} true if write succeeded
   */
  function _safeSet(storage, key, value) {
    try {
      storage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      if (
        e instanceof DOMException &&
        (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      ) {
        console.warn(
          'StorageManager: storage quota exceeded for key "' +
            key +
            '". ' +
            'Consider clearing old data.'
        );
      } else {
        console.error('StorageManager: failed to write key "' + key + '"', e);
      }
      return false;
    }
  }

  /**
   * Safely read and parse a value from a storage backend.
   * @param {Storage} storage
   * @param {string} key
   * @returns {*} Parsed value, or null if missing / corrupt
   */
  function _safeGet(storage, key) {
    try {
      const raw = storage.getItem(key);
      if (raw === null) return null;
      return JSON.parse(raw);
    } catch (e) {
      console.error('StorageManager: failed to read key "' + key + '"', e);
      return null;
    }
  }

  /**
   * Check whether a storage backend is available.
   * @param {string} type - 'localStorage' or 'sessionStorage'
   * @returns {boolean}
   */
  function _storageAvailable(type) {
    try {
      var s = window[type];
      var probe = '__storage_probe__';
      s.setItem(probe, '1');
      s.removeItem(probe);
      return true;
    } catch (e) {
      return false;
    }
  }

  // ---------------------------------------------------------------
  //  Test progress  (sessionStorage)
  // ---------------------------------------------------------------

  /**
   * Save in-progress test data.
   * @param {string} testId
   * @param {object} data - Arbitrary progress payload (answers, timer, etc.)
   * @returns {boolean}
   */
  function saveProgress(testId, data) {
    if (!testId) {
      console.warn('StorageManager.saveProgress: testId is required');
      return false;
    }
    var payload = {
      testId: testId,
      data: data,
      updatedAt: new Date().toISOString(),
    };
    return _safeSet(localStorage, PREFIX_PROGRESS + testId, payload);
  }

  /**
   * Retrieve progress data for a test. Returns null (and clears the entry) when
   * the saved progress is older than PROGRESS_MAX_AGE_MS, so a stale/abandoned
   * test never surfaces a resume prompt on a later visit.
   * @param {string} testId
   * @returns {object|null} The saved data object, or null
   */
  function getProgress(testId) {
    var entry = _safeGet(localStorage, PREFIX_PROGRESS + testId);
    if (!entry) return null;
    var ts = entry.updatedAt ? Date.parse(entry.updatedAt) : NaN;
    if (isFinite(ts) && Date.now() - ts > PROGRESS_MAX_AGE_MS) {
      clearProgress(testId);
      return null;
    }
    return entry.data || null;
  }

  /**
   * Remove progress data for a test.
   * @param {string} testId
   */
  function clearProgress(testId) {
    try {
      localStorage.removeItem(PREFIX_PROGRESS + testId);
    } catch (e) {
      console.error('StorageManager.clearProgress: failed', e);
    }
  }

  /**
   * Check whether (non-stale) progress exists for a given test.
   * @param {string} testId
   * @returns {boolean}
   */
  function hasProgress(testId) {
    return getProgress(testId) !== null;
  }

  // ---------------------------------------------------------------
  //  Test results  (localStorage)
  // ---------------------------------------------------------------

  /**
   * Append a completed test result to the persisted results array.
   * Automatically assigns an id and timestamp if not present.
   * @param {object} result
   * @returns {boolean}
   */
  function saveResult(result) {
    if (!result || typeof result !== 'object') {
      console.warn('StorageManager.saveResult: result must be an object');
      return false;
    }
    var results = getResults();
    var entry = Object.assign({}, result);
    if (!entry.id) {
      entry.id = Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 8);
    }
    if (!entry.completedAt) {
      entry.completedAt = new Date().toISOString();
    }
    results.push(entry);
    return _safeSet(localStorage, KEY_RESULTS, results);
  }

  /**
   * Return all saved test results, newest first.
   * @returns {Array<object>}
   */
  function getResults() {
    var data = _safeGet(localStorage, KEY_RESULTS);
    return Array.isArray(data) ? data : [];
  }

  /**
   * Retrieve a single result by its id.
   * @param {string} resultId
   * @returns {object|null}
   */
  function getResult(resultId) {
    var results = getResults();
    for (var i = 0; i < results.length; i++) {
      if (results[i].id === resultId) {
        return results[i];
      }
    }
    return null;
  }

  /**
   * Delete all saved test results.
   * @returns {boolean}
   */
  function clearResults() {
    try {
      localStorage.removeItem(KEY_RESULTS);
      return true;
    } catch (e) {
      console.error('StorageManager.clearResults: failed', e);
      return false;
    }
  }

  // ---------------------------------------------------------------
  //  Settings  (localStorage)
  // ---------------------------------------------------------------

  /**
   * Persist a single setting.
   * @param {string} key
   * @param {*} value
   * @returns {boolean}
   */
  function saveSetting(key, value) {
    if (!key) {
      console.warn('StorageManager.saveSetting: key is required');
      return false;
    }
    return _safeSet(localStorage, PREFIX_SETTING + key, value);
  }

  /**
   * Read a setting, returning a default when absent.
   * @param {string} key
   * @param {*} [defaultValue=null]
   * @returns {*}
   */
  function getSetting(key, defaultValue) {
    var val = _safeGet(localStorage, PREFIX_SETTING + key);
    return val !== null ? val : defaultValue !== undefined ? defaultValue : null;
  }

  // ---------------------------------------------------------------
  //  Public API
  // ---------------------------------------------------------------

  return {
    // Progress
    saveProgress: saveProgress,
    getProgress: getProgress,
    clearProgress: clearProgress,
    hasProgress: hasProgress,

    // Results
    saveResult: saveResult,
    getResults: getResults,
    getResult: getResult,
    clearResults: clearResults,

    // Settings
    saveSetting: saveSetting,
    getSetting: getSetting,

    // Helpers (exposed for testing / advanced use)
    _safeSet: _safeSet,
    _safeGet: _safeGet,

    /**
     * Quick check that both storage backends are available.
     * @returns {boolean}
     */
    isAvailable: function () {
      return _storageAvailable('localStorage') && _storageAvailable('sessionStorage');
    },

    // ---------------------------------------------------------------
    //  Completion tracking helpers
    // ---------------------------------------------------------------

    /**
     * Get set of all completed test IDs (including section practice tests).
     * @returns {Set<string>}
     */
    getCompletedTestIds: function () {
      var results = getResults();
      var ids = new Set();
      for (var i = 0; i < results.length; i++) {
        if (results[i].testId) ids.add(results[i].testId);
      }
      return ids;
    },

    /**
     * Check if a specific test has been completed at least once.
     * @param {string} testId
     * @returns {boolean}
     */
    isTestCompleted: function (testId) {
      return this.getCompletedTestIds().has(testId);
    },

    /**
     * Get the best band score for a specific test ID.
     * Returns null if never completed.
     * @param {string} testId
     * @returns {number|null}
     */
    getBestScore: function (testId) {
      var results = getResults();
      var best = null;
      for (var i = 0; i < results.length; i++) {
        if (results[i].testId !== testId) continue;
        var band = null;
        if (results[i].scores && results[i].scores.band) {
          band = results[i].scores.band;
        } else if (results[i].band) {
          band = results[i].band;
        }
        // For section-only tests, use the section band
        if (results[i].sectionOnly && results[i].scores) {
          var sec = results[i].scores[results[i].sectionOnly];
          if (sec && sec.band) band = sec.band;
        }
        if (band !== null && (best === null || band > best)) best = band;
      }
      return best;
    },

    /**
     * Get completion stats for a section (e.g., 'reading').
     * @param {string} section
     * @returns {{completed: number, total: number, avgBand: number|null}}
     */
    getSectionStats: function (section) {
      if (
        !window.TEST_REGISTRY ||
        !window.TEST_REGISTRY.sectionTests ||
        !window.TEST_REGISTRY.sectionTests[section]
      ) {
        return { completed: 0, total: 0, avgBand: null };
      }
      var tests = window.TEST_REGISTRY.sectionTests[section];
      var completedIds = this.getCompletedTestIds();
      var completed = 0;
      var bandSum = 0;
      var bandCount = 0;
      for (var i = 0; i < tests.length; i++) {
        if (completedIds.has(tests[i].id)) {
          completed++;
          var best = this.getBestScore(tests[i].id);
          if (best !== null) {
            bandSum += best;
            bandCount++;
          }
        }
      }
      return {
        completed: completed,
        total: tests.length,
        avgBand: bandCount > 0 ? Math.round((bandSum / bandCount) * 10) / 10 : null,
      };
    },
  };
})();
