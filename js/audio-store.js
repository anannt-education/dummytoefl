/**
 * AudioStore — IndexedDB persistence for speaking clips.
 *
 * localStorage (~5MB) cannot hold audio; blobs live here instead.
 * Key: resultId + ':' + taskId. Value: {blob, mimeType, duration}.
 * No dependencies. All methods fail soft (resolve null / reject caught
 * by callers) so storage trouble never blocks submitting a test.
 */
var AudioStore = (function () {
  'use strict';
  var DB_NAME = 'toefl_audio';
  var STORE = 'clips';
  var VERSION = 1;

  function idb() {
    return (typeof indexedDB !== 'undefined') ? indexedDB : null;
  }

  function openDb() {
    return new Promise(function (resolve, reject) {
      var f = idb();
      if (!f) return reject(new Error('indexedDB unavailable'));
      try {
        var rq = f.open(DB_NAME, VERSION);
        rq.onupgradeneeded = function () {
          try { rq.result.createObjectStore(STORE); } catch (e) {}
        };
        rq.onsuccess = function () { resolve(rq.result); };
        rq.onerror = function () { reject(rq.error || new Error('open failed')); };
      } catch (e) {
        reject(e);
      }
    });
  }

  function key(resultId, taskId) {
    return resultId + ':' + taskId;
  }

  /**
   * Persist clips for one result.
   * @param {string} resultId
   * @param {Array<[string, {blob: Blob, mimeType: string, duration: number}]>} entries
   * @returns {Promise<number>} count stored
   */
  function saveClips(resultId, entries) {
    if (!entries || entries.length === 0) return Promise.resolve(0);
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var t;
        try {
          t = db.transaction(STORE, 'readwrite');
          var st = t.objectStore(STORE);
          entries.forEach(function (pair) {
            st.put(
              { blob: pair[1].blob, mimeType: pair[1].mimeType || '', duration: pair[1].duration || 0 },
              key(resultId, pair[0])
            );
          });
        } catch (e) {
          try { db.close(); } catch (_) {}
          reject(e);
          return;
        }
        t.oncomplete = function () { try { db.close(); } catch (_) {} resolve(entries.length); };
        t.onerror = function () { try { db.close(); } catch (_) {} reject(t.error || new Error('write failed')); };
      });
    });
  }

  /** Fetch one clip. Resolves null when missing/unavailable. */
  function getClip(resultId, taskId) {
    return openDb().then(function (db) {
      return new Promise(function (resolve) {
        var t;
        try {
          t = db.transaction(STORE, 'readonly');
          var rq = t.objectStore(STORE).get(key(resultId, taskId));
          rq.onsuccess = function () {
            try { db.close(); } catch (_) {}
            resolve(rq.result || null);
          };
          rq.onerror = function () { try { db.close(); } catch (_) {} resolve(null); };
        } catch (e) {
          try { db.close(); } catch (_) {}
          resolve(null);
        }
      });
    }).catch(function () { return null; });
  }

  /** Delete every clip belonging to a result. Best-effort. */
  function deleteClips(resultId) {
    return openDb().then(function (db) {
      return new Promise(function (resolve) {
        try {
          var t = db.transaction(STORE, 'readwrite');
          var st = t.objectStore(STORE);
          var prefix = resultId + ':';
          var cursorRq = st.openCursor();
          cursorRq.onsuccess = function () {
            var c = cursorRq.result;
            if (c) {
              if (typeof c.key === 'string' && c.key.indexOf(prefix) === 0) c.delete();
              c.continue();
            }
          };
          t.oncomplete = function () { try { db.close(); } catch (_) {} resolve(true); };
          t.onerror = function () { try { db.close(); } catch (_) {} resolve(false); };
        } catch (e) {
          try { db.close(); } catch (_) {}
          resolve(false);
        }
      });
    }).catch(function () { return false; });
  }

  return { saveClips: saveClips, getClip: getClip, deleteClips: deleteClips };
})();
