/**
 * Writing Editor - Custom textarea controller with undo/redo and metrics
 *
 * Wraps a plain <textarea> element with keyboard shortcut handling (Ctrl+Z,
 * Ctrl+Y, Tab insertion) and real-time writing statistics (word count,
 * sentence count, vocabulary diversity, etc.).
 *
 * Usage:
 *   const editor = new WritingEditor(document.getElementById('essay'));
 *   editor.onStatsChange = (stats) => console.log(stats.wordCount);
 *   editor.onContentChange = (text) => Alpine.store('test').updateWritingContent(taskId, text);
 */

class WritingEditor {
  /**
   * @param {HTMLTextAreaElement} textareaElement
   */
  constructor(textareaElement) {
    if (!textareaElement || textareaElement.tagName !== 'TEXTAREA') {
      throw new Error('WritingEditor requires a <textarea> element');
    }

    /** @type {HTMLTextAreaElement} */
    this.textarea = textareaElement;

    /** Undo history stack (stores full textarea values) */
    this.undoStack = [];

    /** Redo history stack */
    this.redoStack = [];

    /** Content at the time of last explicit save (for dirty detection) */
    this.lastSavedContent = '';

    /** Maximum number of snapshots to keep in the undo stack */
    this.maxUndoSteps = 100;

    // -- Computed statistics --
    this.wordCount = 0;
    this.sentenceCount = 0;
    this.characterCount = 0;

    // -- Callbacks --
    /** @type {Function|null} Called when content changes, receives the new text */
    this.onContentChange = null;

    /** @type {Function|null} Called when stats update, receives {words, sentences, characters} */
    this.onStatsChange = null;

    /** Debounce timer id for undo snapshots */
    this._debounceTimer = null;

    /** Debounce delay for recording undo states (ms) */
    this._debounceDelay = 500;

    /** Track whether we are programmatically setting content (to skip snapshot) */
    this._suppressSnapshot = false;

    this._init();
  }

  // ===========================================================================
  //  INITIALISATION
  // ===========================================================================

  /**
   * Set up event listeners on the textarea.
   * @private
   */
  _init() {
    // Take an initial undo snapshot
    this.undoStack.push(this.textarea.value);

    // -- Input handler (fires on every character typed / pasted / deleted) --
    this.textarea.addEventListener('input', () => {
      this._onInput();
    });

    // -- Keydown handler for shortcuts --
    this._boundKeydown = this._handleKeydown.bind(this);
    this.textarea.addEventListener('keydown', this._boundKeydown);

    // -- Paste handler (ensure stats update after paste) --
    this.textarea.addEventListener('paste', () => {
      // Paste event fires before the value is updated; defer stats
      setTimeout(() => {
        this._onInput();
      }, 0);
    });

    // Initial stats
    this.updateStats();
  }

  // ===========================================================================
  //  EVENT HANDLERS
  // ===========================================================================

  /**
   * Called on every input event.
   * Updates stats immediately and debounces undo snapshots.
   * @private
   */
  _onInput() {
    this.updateStats();
    this.onContentChange?.(this.textarea.value);

    if (!this._suppressSnapshot) {
      this._debouncedSnapshot();
    }
  }

  /**
   * Handle keyboard shortcuts inside the textarea.
   *
   * @param {KeyboardEvent} e
   * @private
   */
  _handleKeydown(e) {
    const isCtrl = e.ctrlKey || e.metaKey; // metaKey for Mac Cmd

    // Tab -> insert 4 spaces
    if (e.key === 'Tab') {
      e.preventDefault();
      this.insertAtCursor('    ');
      return;
    }

    // Ctrl+Z -> Undo
    if (isCtrl && !e.shiftKey && e.key === 'z') {
      e.preventDefault();
      this.undo();
      return;
    }

    // Ctrl+Y or Ctrl+Shift+Z -> Redo
    if ((isCtrl && e.key === 'y') || (isCtrl && e.shiftKey && e.key === 'z') || (isCtrl && e.shiftKey && e.key === 'Z')) {
      e.preventDefault();
      this.redo();
      return;
    }
  }

  // ===========================================================================
  //  UNDO / REDO
  // ===========================================================================

  /**
   * Schedule an undo snapshot after a debounce delay.
   * This prevents recording a snapshot on every keystroke.
   * @private
   */
  _debouncedSnapshot() {
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this._debounceTimer = setTimeout(() => {
      this.pushUndoState();
    }, this._debounceDelay);
  }

  /**
   * Push the current textarea value onto the undo stack.
   * Clears the redo stack (new edits invalidate the redo future).
   */
  pushUndoState() {
    const currentValue = this.textarea.value;

    // Don't push duplicates
    if (this.undoStack.length > 0 && this.undoStack[this.undoStack.length - 1] === currentValue) {
      return;
    }

    this.undoStack.push(currentValue);

    // Enforce max size
    if (this.undoStack.length > this.maxUndoSteps) {
      this.undoStack.shift();
    }

    // New input invalidates the redo chain
    this.redoStack = [];
  }

  /**
   * Undo the last change.
   */
  undo() {
    if (this.undoStack.length <= 1) return; // nothing to undo (stack[0] is initial state)

    // Save current state to redo stack
    this.redoStack.push(this.undoStack.pop());

    // Restore the previous state
    const previousState = this.undoStack[this.undoStack.length - 1];
    this._setValueSilently(previousState);
  }

  /**
   * Redo the last undone change.
   */
  redo() {
    if (this.redoStack.length === 0) return;

    const nextState = this.redoStack.pop();
    this.undoStack.push(nextState);
    this._setValueSilently(nextState);
  }

  /**
   * Set the textarea value without triggering a new undo snapshot.
   *
   * @param {string} value
   * @private
   */
  _setValueSilently(value) {
    this._suppressSnapshot = true;
    this.textarea.value = value;
    this.updateStats();
    this.onContentChange?.(value);
    // Use a short timeout to re-enable snapshots after the input event fires
    setTimeout(() => { this._suppressSnapshot = false; }, 50);
  }

  // ===========================================================================
  //  TEXT MANIPULATION
  // ===========================================================================

  /**
   * Insert text at the current cursor position (or replace the selection).
   *
   * @param {string} text
   */
  insertAtCursor(text) {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    const before = this.textarea.value.substring(0, start);
    const after = this.textarea.value.substring(end);

    this.pushUndoState();
    this.textarea.value = before + text + after;

    // Move cursor to after the inserted text
    const newPos = start + text.length;
    this.textarea.selectionStart = newPos;
    this.textarea.selectionEnd = newPos;
    this.textarea.focus();

    this.updateStats();
    this.onContentChange?.(this.textarea.value);
  }

  // ===========================================================================
  //  STATISTICS
  // ===========================================================================

  /**
   * Recalculate all text statistics and fire the onStatsChange callback.
   */
  updateStats() {
    const text = this.textarea.value.trim();

    this.characterCount = text.length;

    // Word count: split on whitespace, filter empty strings
    if (text.length === 0) {
      this.wordCount = 0;
    } else {
      this.wordCount = text.split(/\s+/).filter((w) => w.length > 0).length;
    }

    // Sentence count: count sentence-ending punctuation clusters
    if (text.length === 0) {
      this.sentenceCount = 0;
    } else {
      const matches = text.match(/[.!?]+/g);
      this.sentenceCount = matches ? matches.length : 0;
      // If there's text but no terminal punctuation, count as at least 1 sentence
      if (this.sentenceCount === 0 && this.wordCount > 0) {
        this.sentenceCount = 1;
      }
    }

    this.onStatsChange?.({
      words: this.wordCount,
      sentences: this.sentenceCount,
      characters: this.characterCount
    });
  }

  // ===========================================================================
  //  CONTENT ACCESS
  // ===========================================================================

  /**
   * Get the current textarea content.
   * @returns {string}
   */
  getContent() {
    return this.textarea.value;
  }

  /**
   * Set the textarea content programmatically.
   * Records an undo snapshot before overwriting.
   *
   * @param {string} text
   */
  setContent(text) {
    this.pushUndoState();
    this.textarea.value = text;
    this.updateStats();
    this.onContentChange?.(text);
  }

  /**
   * Mark the current content as "saved" for dirty-checking purposes.
   */
  markSaved() {
    this.lastSavedContent = this.textarea.value;
  }

  /**
   * Whether the content has changed since the last markSaved() call.
   * @returns {boolean}
   */
  get isDirty() {
    return this.textarea.value !== this.lastSavedContent;
  }

  // ===========================================================================
  //  ADVANCED METRICS
  // ===========================================================================

  /**
   * Calculate the type-token ratio (unique words / total words).
   * A rough measure of vocabulary diversity (0 = no text, closer to 1 = more diverse).
   *
   * @returns {number} Ratio between 0 and 1
   */
  getVocabularyDiversity() {
    const text = this.textarea.value.toLowerCase();
    const words = text.split(/\s+/).filter((w) => w.length > 0);
    if (words.length === 0) return 0;

    // Strip punctuation from each word for accurate unique counting
    const cleaned = words.map((w) => w.replace(/[^a-z'-]/g, '')).filter((w) => w.length > 0);
    if (cleaned.length === 0) return 0;

    const unique = new Set(cleaned);
    return unique.size / cleaned.length;
  }

  /**
   * Get a comprehensive metrics object for the current content.
   *
   * @returns {{
   *   wordCount: number,
   *   sentenceCount: number,
   *   characterCount: number,
   *   paragraphCount: number,
   *   vocabularyDiversity: number,
   *   avgWordsPerSentence: string|number,
   *   avgWordLength: string|number
   * }}
   */
  getMetrics() {
    const text = this.textarea.value;
    const paragraphs = text.split(/\n\n+/).filter((p) => p.trim().length > 0);

    const words = text.trim().split(/\s+/).filter((w) => w.length > 0);
    const totalWordChars = words.reduce((sum, w) => sum + w.replace(/[^a-zA-Z]/g, '').length, 0);

    return {
      wordCount: this.wordCount,
      sentenceCount: this.sentenceCount,
      characterCount: this.characterCount,
      paragraphCount: paragraphs.length,
      vocabularyDiversity: parseFloat(this.getVocabularyDiversity().toFixed(3)),
      avgWordsPerSentence: this.sentenceCount > 0
        ? parseFloat((this.wordCount / this.sentenceCount).toFixed(1))
        : 0,
      avgWordLength: words.length > 0
        ? parseFloat((totalWordChars / words.length).toFixed(1))
        : 0
    };
  }

  // ===========================================================================
  //  CLEANUP
  // ===========================================================================

  /**
   * Remove all event listeners and clear internal state.
   * Call this when the editor is no longer needed.
   */
  destroy() {
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this.textarea.removeEventListener('keydown', this._boundKeydown);
    this.undoStack = [];
    this.redoStack = [];
    this.onContentChange = null;
    this.onStatsChange = null;
  }
}
