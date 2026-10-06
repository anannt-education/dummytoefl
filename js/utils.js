/**
 * Shared utility functions for TOEFL Mock Test
 */

/**
 * Format seconds to MM:SS string.
 * @param {number} seconds - Total seconds (non-negative integer expected)
 * @returns {string} Formatted time string like "05:32"
 */
function formatTime(seconds) {
  if (typeof seconds !== 'number' || !isFinite(seconds) || seconds < 0) {
    return '00:00';
  }
  const totalSeconds = Math.floor(seconds);
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
}

/**
 * Debounce: delays invoking fn until after `delay` ms have elapsed
 * since the last time the debounced function was invoked.
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function with a .cancel() method
 */
function debounce(fn, delay) {
  let timerId = null;

  function debounced(...args) {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      timerId = null;
      fn.apply(this, args);
    }, delay);
  }

  debounced.cancel = function () {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
  };

  return debounced;
}

/**
 * Throttle: ensures fn is called at most once every `delay` ms.
 * Uses a leading-edge call with trailing-edge guarantee.
 * @param {Function} fn - Function to throttle
 * @param {number} delay - Minimum interval in milliseconds
 * @returns {Function} Throttled function with a .cancel() method
 */
function throttle(fn, delay) {
  let lastCallTime = 0;
  let timerId = null;

  function throttled(...args) {
    const now = Date.now();
    const remaining = delay - (now - lastCallTime);

    if (remaining <= 0) {
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
      lastCallTime = now;
      fn.apply(this, args);
    } else if (timerId === null) {
      timerId = setTimeout(() => {
        lastCallTime = Date.now();
        timerId = null;
        fn.apply(this, args);
      }, remaining);
    }
  }

  throttled.cancel = function () {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
    lastCallTime = 0;
  };

  return throttled;
}

/**
 * Generate a unique ID string.
 * Combines a timestamp with a random suffix for collision resistance.
 * @returns {string} Unique identifier like "1a2b3c4d-e5f6"
 */
function generateId() {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return timestamp + '-' + random;
}

/**
 * Shuffle an array in place using the Fisher-Yates algorithm.
 * @param {Array} arr - Array to shuffle
 * @returns {Array} The same array, shuffled in place
 */
function shuffleArray(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

/**
 * Deep clone an object using structured cloning with a JSON fallback.
 * @param {*} obj - Object to clone
 * @returns {*} Deep clone of the object
 */
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  try {
    if (typeof structuredClone === 'function') {
      return structuredClone(obj);
    }
  } catch (_) {
    // Fall through to JSON method
  }
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (e) {
    console.warn('deepClone: failed to clone object', e);
    return obj;
  }
}

/**
 * Get a formatted date string.
 * @param {Date} [date] - Date to format (defaults to now)
 * @returns {string} Formatted date like "April 7, 2026"
 */
function formatDate(date) {
  const d = date instanceof Date && !isNaN(date) ? date : new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return d.toLocaleDateString('en-US', options);
}

/**
 * Calculate a percentage, guarding against division by zero.
 * @param {number} part - The numerator
 * @param {number} total - The denominator
 * @returns {number} Percentage rounded to one decimal place
 */
function percentage(part, total) {
  if (typeof part !== 'number' || typeof total !== 'number' || total === 0) {
    return 0;
  }
  return Math.round((part / total) * 1000) / 10;
}

/**
 * Easing function: ease-out cubic for smooth deceleration.
 * @param {number} t - Progress value between 0 and 1
 * @returns {number} Eased value between 0 and 1
 */
function easeOutCubic(t) {
  const clamped = Math.max(0, Math.min(1, t));
  return 1 - Math.pow(1 - clamped, 3);
}

/**
 * Animate a counter from 0 to a target value using requestAnimationFrame.
 * @param {HTMLElement} element - DOM element whose textContent will be updated
 * @param {number} target - Target number to count up to
 * @param {number} [duration=1000] - Animation duration in milliseconds
 * @returns {Promise<void>} Resolves when animation completes
 */
function animateCounter(element, target, duration) {
  if (!element || typeof target !== 'number') {
    return Promise.resolve();
  }
  duration = typeof duration === 'number' && duration > 0 ? duration : 1000;

  return new Promise((resolve) => {
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = Math.round(easedProgress * target);

      element.textContent = currentValue;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = target;
        resolve();
      }
    }

    requestAnimationFrame(step);
  });
}

/**
 * Show a toast notification that auto-dismisses.
 * @param {string} message - Notification message
 * @param {'success'|'error'|'warning'|'info'} [type='info'] - Toast type for styling
 * @param {number} [duration=3000] - Display duration in milliseconds
 */
function showToast(message, type, duration) {
  type = type || 'info';
  duration = typeof duration === 'number' && duration > 0 ? duration : 3000;

  // Ensure a container exists
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    Object.assign(container.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: '10000',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      pointerEvents: 'none'
    });
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.setAttribute('role', 'alert');

  const iconMap = {
    success: '\u2713',
    error: '\u2717',
    warning: '\u26A0',
    info: '\u2139'
  };

  const colorMap = {
    success: { bg: '#d4edda', border: '#28a745', text: '#155724' },
    error:   { bg: '#f8d7da', border: '#dc3545', text: '#721c24' },
    warning: { bg: '#fff3cd', border: '#ffc107', text: '#856404' },
    info:    { bg: '#d1ecf1', border: '#17a2b8', text: '#0c5460' }
  };

  const colors = colorMap[type] || colorMap.info;

  Object.assign(toast.style, {
    padding: '12px 20px',
    borderRadius: '6px',
    backgroundColor: colors.bg,
    border: '1px solid ' + colors.border,
    color: colors.text,
    fontSize: '14px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    pointerEvents: 'auto',
    opacity: '0',
    transform: 'translateX(100%)',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    maxWidth: '360px',
    wordBreak: 'break-word'
  });

  toast.innerHTML =
    '<span style="font-size:16px;flex-shrink:0">' + (iconMap[type] || iconMap.info) + '</span>' +
    '<span>' + message + '</span>';

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(0)';
  });

  // Auto dismiss
  const dismissTimer = setTimeout(() => {
    dismissToast(toast);
  }, duration);

  // Allow manual dismiss on click
  toast.addEventListener('click', () => {
    clearTimeout(dismissTimer);
    dismissToast(toast);
  });

  function dismissToast(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }, 300);
  }
}

/**
 * Keyboard shortcuts manager.
 * Supports single keys, modifier combos, and scoped enable/disable.
 */
class KeyboardShortcuts {
  /**
   * @param {boolean} [enabled=true] - Whether shortcuts start enabled
   */
  constructor(enabled) {
    this._shortcuts = new Map();
    this._enabled = enabled !== false;
    this._listener = this._handleKeyDown.bind(this);
    document.addEventListener('keydown', this._listener);
  }

  /**
   * Normalise a shortcut string into a canonical form.
   * e.g. "Ctrl+Shift+S" -> "ctrl+shift+s"
   * @param {string} combo
   * @returns {string}
   */
  _normalise(combo) {
    return combo
      .toLowerCase()
      .split('+')
      .map((s) => s.trim())
      .sort()
      .join('+');
  }

  /**
   * Build a canonical key from a KeyboardEvent.
   * @param {KeyboardEvent} e
   * @returns {string}
   */
  _eventKey(e) {
    const parts = [];
    if (e.ctrlKey) parts.push('ctrl');
    if (e.altKey) parts.push('alt');
    if (e.metaKey) parts.push('meta');
    if (e.shiftKey) parts.push('shift');
    const key = e.key.toLowerCase();
    if (!['control', 'alt', 'meta', 'shift'].includes(key)) {
      parts.push(key);
    }
    return parts.sort().join('+');
  }

  /**
   * @param {KeyboardEvent} e
   */
  _handleKeyDown(e) {
    if (!this._enabled) return;

    // Ignore if user is typing in an input/textarea/contentEditable
    const tag = (e.target && e.target.tagName) || '';
    if (
      tag === 'INPUT' ||
      tag === 'TEXTAREA' ||
      (e.target && e.target.isContentEditable)
    ) {
      return;
    }

    const combo = this._eventKey(e);
    const entry = this._shortcuts.get(combo);
    if (entry) {
      e.preventDefault();
      e.stopPropagation();
      try {
        entry.handler(e);
      } catch (err) {
        console.error('KeyboardShortcuts: handler error for "' + combo + '"', err);
      }
    }
  }

  /**
   * Register a keyboard shortcut.
   * @param {string} combo - Key combination like "Ctrl+S" or "Escape"
   * @param {Function} handler - Callback to invoke
   * @param {string} [description] - Human-readable description
   * @returns {KeyboardShortcuts} this (for chaining)
   */
  register(combo, handler, description) {
    if (typeof handler !== 'function') {
      throw new TypeError('handler must be a function');
    }
    const key = this._normalise(combo);
    this._shortcuts.set(key, { handler, description: description || '', combo });
    return this;
  }

  /**
   * Unregister a keyboard shortcut.
   * @param {string} combo
   * @returns {KeyboardShortcuts}
   */
  unregister(combo) {
    this._shortcuts.delete(this._normalise(combo));
    return this;
  }

  /**
   * Enable all shortcuts.
   */
  enable() {
    this._enabled = true;
  }

  /**
   * Disable all shortcuts (handlers won't fire).
   */
  disable() {
    this._enabled = false;
  }

  /**
   * List all registered shortcuts.
   * @returns {Array<{combo: string, description: string}>}
   */
  list() {
    const result = [];
    this._shortcuts.forEach((entry) => {
      result.push({ combo: entry.combo, description: entry.description });
    });
    return result;
  }

  /**
   * Remove all shortcuts and the event listener.
   * Call this when the shortcuts manager is no longer needed.
   */
  destroy() {
    this._shortcuts.clear();
    document.removeEventListener('keydown', this._listener);
  }
}
