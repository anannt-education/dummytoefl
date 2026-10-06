/**
 * Score Calculator - TOEFL iBT scoring algorithms
 *
 * Converts raw scores to scaled scores (0-30 per section, 0-120 total).
 *
 * The Reading and Listening curves are DERIVED from two published ETS sources,
 * not estimated: the conversion tables in the Official Guide (pages 295 and 308)
 * and ETS Table 6 in score-scale-update-2026.pdf. Composed with scaledToBand in
 * api/_lib/scoring.js they reproduce ETS's band at every published row.
 * scripts/test-raw-to-scaled.js holds that to account.
 *
 * Reading & Listening: objective scoring (correct/incorrect)
 * Speaking & Writing: self-rating based (user rates own performance)
 *
 * Usage:
 *   const scores = ScoreCalculator.calculateAll(testData, answers, speakingRatings, writingRatings);
 *   console.log(scores.total); // 0-120
 */

const ScoreCalculator = {
  // ===========================================================================
  //  CONVERSION TABLES
  // ===========================================================================

  /**
   * Reading raw-to-scaled conversion.
   * Index = raw points earned (0 to 50). Value = scaled score (0-30).
   *
   * DERIVED, NOT INVENTED. Two published ETS sources fix this curve:
   *
   *   1. The reading conversion table in the Official Guide (page 295)
   *      maps a raw total to the 1-6 band for its own practice test.
   *   2. ETS Table 6 (score-scale-update-2026.pdf p14) maps a 0-30 scaled score
   *      to that same band, with different cut scores per section.
   *
   * For any proportion correct, (1) gives the band ETS awards and (2) gives the
   * scaled window that band occupies, so the scaled score is placed inside that
   * window. Composed with scaledToBand this reproduces ETS's band at all 36
   * rows of the published table. scripts/test-raw-to-scaled.js pins that.
   *
   * The previous table predated this check, carried no stated provenance, and
   * was written for the retired format. It ran high: at 80% of Listening it
   * reported band 5.5 where ETS gives 4.5.
   *
   * Do not hand-edit. Re-derive against the two sources above.
   */
  readingConversion: [
    0, 0, 0, 0, 1, 1, 1, 1, 3, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 14, 15, 16, 16, 17, 18, 18, 19,
    19, 19, 20, 20, 20, 21, 21, 22, 22, 23, 23, 23, 24, 25, 25, 26, 26, 27, 28, 28, 29, 30, 30,
  ],

  /**
   * Listening raw-to-scaled conversion.
   * Index = raw points earned (0 to 47). Value = scaled score (0-30).
   *
   * DERIVED, NOT INVENTED. Two published ETS sources fix this curve:
   *
   *   1. The listening conversion table in the Official Guide (page 308)
   *      maps a raw total to the 1-6 band for its own practice test.
   *   2. ETS Table 6 (score-scale-update-2026.pdf p14) maps a 0-30 scaled score
   *      to that same band, with different cut scores per section.
   *
   * For any proportion correct, (1) gives the band ETS awards and (2) gives the
   * scaled window that band occupies, so the scaled score is placed inside that
   * window. Composed with scaledToBand this reproduces ETS's band at all 36
   * rows of the published table. scripts/test-raw-to-scaled.js pins that.
   *
   * The previous table predated this check, carried no stated provenance, and
   * was written for the retired format. It ran high: at 80% of Listening it
   * reported band 5.5 where ETS gives 4.5.
   *
   * Do not hand-edit. Re-derive against the two sources above.
   */
  listeningConversion: [
    0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 8, 9, 10, 10, 11, 11, 12, 12, 13, 14, 14, 15,
    15, 16, 16, 17, 19, 20, 20, 20, 21, 21, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ],

  /**
   * Speaking: maps average task score (0-5) to scaled score (0-30).
   * Keys are anchor averages; values between them are interpolated.
   */
  speakingConversion: {
    0: 0,
    0.5: 1,
    1: 3,
    1.5: 6,
    2: 9,
    2.5: 12,
    3: 15,
    3.5: 18,
    4: 21,
    4.5: 24,
    5: 30,
  },

  /**
   * Writing: maps average task score (0-5) to scaled score (0-30).
   * Keys are anchor averages; values between them are interpolated.
   */
  writingConversion: {
    0: 0,
    0.5: 1,
    1: 3,
    1.5: 6,
    2: 9,
    2.5: 12,
    3: 15,
    3.5: 18,
    4: 21,
    4.5: 24,
    5: 30,
  },

  // ===========================================================================
  //  READING
  // ===========================================================================

  /**
   * Score the Reading section.
   *
   * @param {object} readingData - The reading section data (contains passages array)
   * @param {object} answers     - All user answers { questionId: answer }
   * @returns {{
   *   raw: number,
   *   scaled: number,
   *   total: number,
   *   perQuestion: Array<{id: string, correct: boolean, points: number}>,
   *   byType: object
   * }}
   */
  calculateReading(readingData, answers) {
    if (!readingData) return this._emptyResult();

    let rawScore = 0;
    let totalPossible = 0;
    const perQuestion = [];
    const byType = {};
    // Track Module 1 separately so we can derive the adaptive routing path
    // (the 60% threshold drives whether the student would have gone to a
    // Hard or Easy second module on a real ETS test).
    let module1Correct = 0;
    let module1Total = 0;
    // Whether the student reached Module 2. Assumed true for shapes that have
    // no Module 2 at all, so only a real skip sets it false.
    let m2Administered = true;

    // 2026 format: completeTheWords, dailyLife, academicPassages
    if (readingData.format === '2026') {
      // Complete the Words
      const ctw = readingData.completeTheWords || [];
      for (const paragraph of ctw) {
        const words = paragraph.words || [];
        for (const w of words) {
          if (!byType['complete_the_words'])
            byType['complete_the_words'] = { correct: 0, total: 0 };
          byType['complete_the_words'].total++;
          totalPossible++;
          module1Total++;
          const userAnswer = (answers[w.id] || '').toLowerCase().trim();
          const correct = userAnswer === (w.answer || '').toLowerCase().trim();
          if (correct) {
            rawScore++;
            byType['complete_the_words'].correct++;
            module1Correct++;
          }
          perQuestion.push({
            id: w.id,
            correct,
            points: correct ? 1 : 0,
            userAnswer,
            correctAnswer: w.answer,
            module: 1,
          });
        }
      }

      // Daily Life texts
      const dl = readingData.dailyLife || [];
      for (const text of dl) {
        for (const q of text.questions || []) {
          if (!byType['daily_life']) byType['daily_life'] = { correct: 0, total: 0 };
          byType['daily_life'].total++;
          totalPossible++;
          module1Total++;
          const userAnswer = answers[q.id];
          const correct = this._isCorrectFromOptions(q.options, userAnswer);
          if (correct) {
            rawScore++;
            byType['daily_life'].correct++;
            module1Correct++;
          }
          perQuestion.push({
            id: q.id,
            correct,
            points: correct ? 1 : 0,
            userAnswer,
            correctAnswer: this._getCorrectFromOptions(q.options),
            module: 1,
          });
        }
      }

      // Academic Passages
      const ap = readingData.academicPassages || [];
      for (const passage of ap) {
        for (const q of passage.questions || []) {
          const qType = q.type || 'factual';
          if (!byType[qType]) byType[qType] = { correct: 0, total: 0 };
          byType[qType].total++;
          totalPossible++;
          module1Total++;
          const userAnswer = answers[q.id];
          const correct = this._isCorrectFromOptions(q.options, userAnswer);
          if (correct) {
            rawScore++;
            byType[qType].correct++;
            module1Correct++;
          }
          perQuestion.push({
            id: q.id,
            correct,
            points: correct ? 1 : 0,
            userAnswer,
            correctAnswer: this._getCorrectFromOptions(q.options),
            module: 1,
          });
        }
      }

      // Module 2 (if present). Two-stage adaptive: pick which variant
      // the student actually saw based on Module-1 routing performance.
      // ≥60% on M1 → Hard variant; <60% → Easy variant. Falls back to the
      // legacy single `module2` block when no Hard/Easy split is authored.
      let _routingPathForM2 = null;
      if (module1Total > 0) {
        _routingPathForM2 = module1Correct / module1Total >= 0.6 ? 'hard' : 'easy';
      }
      const m2 =
        (_routingPathForM2 === 'hard' && readingData.module2Hard) ||
        (_routingPathForM2 === 'easy' && readingData.module2Easy) ||
        readingData.module2Hard ||
        readingData.module2Easy ||
        readingData.module2 ||
        null;
      // Same protection as Listening: a Module 2 the student never reached is
      // left out of the total instead of being counted as all wrong. See the
      // note in calculateListening2026.
      m2Administered = m2 ? this._anyAnswered(m2, answers) : false;
      if (m2 && m2Administered) {
        const ctw2 = m2.completeTheWords || [];
        for (const paragraph of ctw2) {
          for (const w of paragraph.words || []) {
            if (!byType['complete_the_words'])
              byType['complete_the_words'] = { correct: 0, total: 0 };
            byType['complete_the_words'].total++;
            totalPossible++;
            const userAnswer = (answers[w.id] || '').toLowerCase().trim();
            const correct = userAnswer === (w.answer || '').toLowerCase().trim();
            if (correct) {
              rawScore++;
              byType['complete_the_words'].correct++;
            }
            perQuestion.push({
              id: w.id,
              correct,
              points: correct ? 1 : 0,
              userAnswer,
              correctAnswer: w.answer,
              module: 2,
            });
          }
        }
        const dl2 = m2.dailyLife || [];
        for (const text of dl2) {
          for (const q of text.questions || []) {
            if (!byType['daily_life']) byType['daily_life'] = { correct: 0, total: 0 };
            byType['daily_life'].total++;
            totalPossible++;
            const userAnswer = answers[q.id];
            const correct = this._isCorrectFromOptions(q.options, userAnswer);
            if (correct) {
              rawScore++;
              byType['daily_life'].correct++;
            }
            perQuestion.push({
              id: q.id,
              correct,
              points: correct ? 1 : 0,
              userAnswer,
              correctAnswer: this._getCorrectFromOptions(q.options),
              module: 2,
            });
          }
        }
        const ap2 = m2.academicPassages || [];
        for (const passage of ap2) {
          for (const q of passage.questions || []) {
            const qType = q.type || 'factual';
            if (!byType[qType]) byType[qType] = { correct: 0, total: 0 };
            byType[qType].total++;
            totalPossible++;
            const userAnswer = answers[q.id];
            const correct = this._isCorrectFromOptions(q.options, userAnswer);
            if (correct) {
              rawScore++;
              byType[qType].correct++;
            }
            perQuestion.push({
              id: q.id,
              correct,
              points: correct ? 1 : 0,
              userAnswer,
              correctAnswer: this._getCorrectFromOptions(q.options),
              module: 2,
            });
          }
        }
      }
    } else {
      // Legacy format: passages array
      const passages = readingData.passages || [];
      for (const passage of passages) {
        for (const q of passage.questions || []) {
          const qType = q.type || 'multiple-choice';
          if (!byType[qType]) byType[qType] = { correct: 0, total: 0 };
          byType[qType].total++;
          const userAnswer = answers[q.id];
          let points = 0;
          let correct = false;
          if (qType === 'prose-summary' || qType === 'fill-table') {
            points = this._scoreProseSummary(q.correctAnswers || q.correct, userAnswer);
            correct = points > 0;
            totalPossible += 2;
          } else {
            correct = this._isCorrect(q.correct, userAnswer);
            points = correct ? 1 : 0;
            totalPossible++;
          }
          if (correct) byType[qType].correct++;
          rawScore += points;
          perQuestion.push({
            id: q.id,
            correct,
            points,
            userAnswer,
            correctAnswer: q.correct || q.correctAnswers,
          });
        }
      }
    }

    const scaled = this._lookupConversion(this.readingConversion, rawScore, totalPossible);

    // Adaptive routing path: ≥60% on Module 1 → Hard path (no band cap),
    // <60% → Easy path (band capped at 4.0 by the server scoring layer).
    // null when there is no Module 1/Module 2 split (legacy or section
    // tests with a single linear pass).
    let routingPath = null;
    let module1Pct = null;
    const _readingHasM2 = !!(
      readingData.module2 ||
      readingData.module2Hard ||
      readingData.module2Easy
    );
    if (module1Total > 0 && _readingHasM2) {
      module1Pct = module1Correct / module1Total;
      routingPath = module1Pct >= 0.6 ? 'hard' : 'easy';
    }

    return {
      raw: rawScore,
      scaled,
      total: totalPossible,
      perQuestion,
      byType,
      module1Correct,
      module1Total,
      module1Pct,
      routingPath,
      // True when Module 2 never ran, so the score reflects Module 1 only.
      moduleNotAdministered: readingData.format === '2026' && m2Administered === false,
    };
  },

  // ===========================================================================
  //  LISTENING
  // ===========================================================================

  /**
   * Score the Listening section.
   *
   * @param {object} listeningData - The listening section data (contains lectures array)
   * @param {object} answers       - All user answers
   * @returns {{raw: number, scaled: number, total: number, perQuestion: Array, byType: object}}
   */
  calculateListening(listeningData, answers) {
    if (!listeningData) return this._emptyResult();

    // 2026 format
    if (listeningData.format === '2026') return this.calculateListening2026(listeningData, answers);

    const items = listeningData.lectures || [];
    let rawScore = 0;
    let totalPossible = 0;
    const perQuestion = [];
    const byType = {};

    for (const item of items) {
      const questions = item.questions || [];

      for (const q of questions) {
        const qType = q.type || 'multiple-choice';
        if (!byType[qType]) byType[qType] = { correct: 0, total: 0 };
        byType[qType].total++;
        totalPossible++;

        const userAnswer = answers[q.id];
        let correct = false;

        if (qType === 'multi-select' || qType === 'select-multiple') {
          // Multi-select: ALL correct options must be selected, no extras
          correct = this._isMultiSelectCorrect(q.correct || q.correctAnswers, userAnswer);
        } else if (qType === 'ordering' || qType === 'order') {
          // Ordering: answer must be an array matching the correct order exactly
          correct = this._isOrderCorrect(q.correct, userAnswer);
        } else {
          // Standard single-select
          correct = this._isCorrect(q.correct, userAnswer);
        }

        if (correct) {
          byType[qType].correct++;
          rawScore++;
        }

        perQuestion.push({
          id: q.id,
          correct: correct,
          points: correct ? 1 : 0,
          userAnswer: userAnswer,
          correctAnswer: q.correct || q.correctAnswers,
        });
      }
    }

    const scaled = this._lookupConversion(this.listeningConversion, rawScore, totalPossible);

    return {
      raw: rawScore,
      scaled: scaled,
      total: totalPossible,
      perQuestion: perQuestion,
      byType: byType,
    };
  },

  // ===========================================================================
  //  SPEAKING
  // ===========================================================================

  /**
   * Score the Speaking section from self-ratings.
   *
   * @param {number[]|null} selfRatings - Array of ratings (0-5 each) for speaking tasks.
   *                                       null if not yet rated.
   * @returns {{taskScores: number[], average: number, scaled: number}}
   */
  calculateSpeaking(selfRatings) {
    if (!selfRatings || !Array.isArray(selfRatings) || selfRatings.length === 0) {
      return { taskScores: [], average: 0, scaled: 0 };
    }

    // Clamp each rating to 0-5
    const clamped = selfRatings.map((r) => Math.max(0, Math.min(5, Number(r) || 0)));
    const sum = clamped.reduce((a, b) => a + b, 0);
    const average = clamped.length > 0 ? sum / clamped.length : 0;

    // Interpolated below; deliberately NOT pre-rounded (see _lookupSpeakingWriting)
    // Not pre-rounded to 0.5: that is what made three bands unreachable.
    const scaled = this._lookupSpeakingWriting(this.speakingConversion, average);

    return {
      taskScores: clamped,
      average: parseFloat(average.toFixed(2)),
      scaled: scaled,
    };
  },

  // ===========================================================================
  //  WRITING
  // ===========================================================================

  /**
   * Score the Writing section from self-ratings, optional metrics, and auto-scored build-a-sentence.
   *
   * @param {number[]|null} selfRatings - Array of 2 ratings (0-5 each) for email + discussion.
   * @param {object|null} metrics       - Writing metrics from WritingEditor.getMetrics()
   * @param {object|null} writingData   - Writing test data (contains buildASentence array)
   * @param {object|null} answers       - User answers { questionId: answer }
   * @param {object|null} sentenceOrders - User sentence orders { itemId: [chunk, ...] }
   * @returns {{taskScores: number[], average: number, scaled: number, metrics: object|null, buildSentence: Array}}
   */
  calculateWriting(selfRatings, metrics, writingData, answers, sentenceOrders) {
    // Auto-score build-a-sentence
    const buildSentence = this.calculateBuildASentence(writingData, answers, sentenceOrders);

    // Collect all task scores
    const allScores = [];

    // Only include build-a-sentence if there were items to score
    if (buildSentence.total > 0) {
      const basScore = (buildSentence.correct / buildSentence.total) * 5;
      allScores.push(basScore);
    }

    // Include email + discussion self-ratings
    if (selfRatings && Array.isArray(selfRatings)) {
      for (const r of selfRatings) {
        allScores.push(Math.max(0, Math.min(5, Number(r) || 0)));
      }
    }

    const clamped = selfRatings
      ? selfRatings.map((r) => Math.max(0, Math.min(5, Number(r) || 0)))
      : [];
    const sum = allScores.reduce((a, b) => a + b, 0);
    const average = allScores.length > 0 ? sum / allScores.length : 0;

    // Interpolated below; deliberately NOT pre-rounded (see _lookupSpeakingWriting)
    // Not pre-rounded to 0.5: that is what made three bands unreachable.
    const scaled = this._lookupSpeakingWriting(this.writingConversion, average);

    return {
      taskScores: clamped,
      average: parseFloat(average.toFixed(2)),
      scaled: scaled,
      metrics: metrics || null,
      buildSentence: buildSentence.items,
      buildSentenceScore: { correct: buildSentence.correct, total: buildSentence.total },
    };
  },

  /**
   * Auto-score Build-a-Sentence items by comparing user's chunk order to correct order.
   *
   * Some items have more than one grammatical arrangement of the same chunks:
   * "I've eaten lunch already" and "I've already eaten lunch" are both standard
   * English, and an item may offer both a present and a past verb chunk where
   * either reading is defensible. Those items carry an `acceptedOrders` array of
   * additional chunk orders that also earn the point. An EFL teacher reported two
   * such items on Writing Test 8 on 2026-08-03 after correct answers were marked
   * wrong, so treat a missing alternative as a scoring bug, not a grammar call.
   *
   * @param {object|null} writingData    - Writing test data with buildASentence array
   * @param {object|null} answers        - User answers { itemId: joined string }
   * @param {object|null} sentenceOrders - User sentence orders { itemId: [chunk, ...] }
   * @returns {{correct: number, total: number, items: Array}}
   */
  calculateBuildASentence(writingData, answers, sentenceOrders) {
    const result = { correct: 0, total: 0, items: [] };
    if (!writingData || !writingData.buildASentence) return result;

    const ans = answers || {};
    const orders = sentenceOrders || {};

    for (const item of writingData.buildASentence) {
      result.total++;
      const correctJoined = item.correctOrder.join(' ').trim();
      // Compare using the sentence order array if available, otherwise the joined answer string
      const userOrder = orders[item.id] || [];
      const userJoined = (userOrder.length > 0 ? userOrder.join(' ') : ans[item.id] || '').trim();

      const accepted = [correctJoined].concat(
        (item.acceptedOrders || []).map((order) => order.join(' ').trim())
      );
      const isCorrect = accepted.some(
        (candidate) => userJoined.toLowerCase() === candidate.toLowerCase()
      );
      if (isCorrect) result.correct++;

      result.items.push({
        id: item.id,
        stem: item.speakerLine || item.prompt || item.context || '',
        correct: isCorrect,
        points: isCorrect ? 1 : 0,
        userAnswer: userJoined || '(no answer)',
        correctAnswer: item.correctSentence || correctJoined,
      });
    }
    return result;
  },

  // ===========================================================================
  //  AGGREGATE
  // ===========================================================================

  /**
   * Calculate scores for all four sections and produce a total.
   *
   * @param {object} testData        - Full test data with reading, listening, speaking, writing keys
   * @param {object} answers         - User answers { questionId: answer }
   * @param {number[]|null} speakingRatings - Self-ratings for speaking (4 values, 0-4)
   * @param {number[]|null} writingRatings  - Self-ratings for writing (2 values, 0-5)
   * @param {object|null} writingMetrics    - Writing metrics from WritingEditor
   * @returns {{
   *   resultId: string,
   *   reading: object,
   *   listening: object,
   *   speaking: object,
   *   writing: object,
   *   total: number,
   *   level: string,
   *   date: string
   * }}
   */
  calculateAll(testData, answers, speakingRatings, writingRatings, writingMetrics, sentenceOrders) {
    const data = testData || {};
    const ans = answers || {};

    const reading = this.calculateReading(data.reading, ans);
    const listening = this.calculateListening(data.listening, ans);
    const speaking = this.calculateSpeaking(speakingRatings);
    const writing = this.calculateWriting(
      writingRatings,
      writingMetrics,
      data.writing,
      ans,
      sentenceOrders
    );

    const legacyTotal = reading.scaled + listening.scaled + speaking.scaled + writing.scaled;

    // 2026 Band scoring (1.0-6.0 in 0.5 increments)
    const readingBand = this.scaledToBand(reading.scaled, 'reading');
    const listeningBand = this.scaledToBand(listening.scaled, 'listening');
    const speakingBand = this.scaledToBand(speaking.scaled, 'speaking');
    const writingBand = this.scaledToBand(writing.scaled, 'writing');
    const overallBand =
      Math.round(((readingBand + listeningBand + speakingBand + writingBand) / 4) * 2) / 2;

    return {
      resultId: typeof generateId === 'function' ? generateId() : Date.now().toString(36),
      reading: { ...reading, band: readingBand },
      listening: { ...listening, band: listeningBand },
      speaking: { ...speaking, band: speakingBand },
      writing: { ...writing, band: writingBand },
      total: legacyTotal,
      band: overallBand,
      cefrLevel: this.bandToCEFR(overallBand),
      level: this.getLevel(legacyTotal),
      date: new Date().toISOString(),
    };
  },

  /**
   * ETS Table 6, "Score mapping of the TOEFL iBT banded score scale to the
   * original TOEFL iBT scale" (score-scale-update-2026.pdf, p14).
   *
   * Must stay byte-identical to ETS_BAND_TABLE in api/_lib/scoring.js. The two
   * are checked against each other by npm run test:band-table, because a public
   * calculator that disagrees with the engine is worse than either being wrong
   * alone: the student sees one number on the results page and a different one
   * from the calculator for the same input.
   *
   * Ranges are [minScaled, maxScaled, band].
   */
  ETS_BAND_TABLE: {
    reading: [
      [29, 30, 6.0],
      [27, 28, 5.5],
      [24, 26, 5.0],
      [22, 23, 4.5],
      [18, 21, 4.0],
      [12, 17, 3.5],
      [6, 11, 3.0],
      [4, 5, 2.5],
      [3, 3, 2.0],
      [2, 2, 1.5],
      [0, 1, 1.0],
    ],
    listening: [
      [28, 30, 6.0],
      [26, 27, 5.5],
      [22, 25, 5.0],
      [20, 21, 4.5],
      [17, 19, 4.0],
      [13, 16, 3.5],
      [9, 12, 3.0],
      [6, 8, 2.5],
      [4, 5, 2.0],
      [2, 3, 1.5],
      [0, 1, 1.0],
    ],
    writing: [
      [29, 30, 6.0],
      [27, 28, 5.5],
      [24, 26, 5.0],
      [21, 23, 4.5],
      [17, 20, 4.0],
      [15, 16, 3.5],
      [13, 14, 3.0],
      [11, 12, 2.5],
      [7, 10, 2.0],
      [3, 6, 1.5],
      [0, 2, 1.0],
    ],
    speaking: [
      [28, 30, 6.0],
      [27, 27, 5.5],
      [25, 26, 5.0],
      [23, 24, 4.5],
      [20, 22, 4.0],
      [18, 19, 3.5],
      [16, 17, 3.0],
      [13, 15, 2.5],
      [10, 12, 2.0],
      [5, 9, 1.5],
      [0, 4, 1.0],
    ],
  },

  /**
   * Convert a section scaled score (0-30) to a 2026 band score (1.0-6.0).
   *
   * `section` is required. The cuts differ per section: scaled 18 is band 4.0
   * in Reading and band 3.5 in Speaking. This was one uniform ladder until
   * 2026-08-05, which put a wrong band on 58% of stored submissions, almost all
   * of them too high.
   */
  scaledToBand(scaled, section) {
    const table = this.ETS_BAND_TABLE[String(section || '').toLowerCase()];
    if (!table) return null;
    const n = Math.max(0, Math.min(30, Math.round(Number(scaled) || 0)));
    const row = table.find(function (r) {
      return n >= r[0] && n <= r[1];
    });
    return row ? row[2] : null;
  },

  /**
   * Map band score to CEFR level
   */
  bandToCEFR(band) {
    // Whole-band alignment: band 4 is B2 and band 5 is C1, so 4.0-4.5 = B2 and
    // 5.0-5.5 = C1. Must stay identical to bandToCEFR in api/_lib/scoring.js,
    // which is what a student's actual score report uses. This copy kept the
    // pre-2026-06-11 half-band boundaries, so the calculator told a band 4.5
    // learner they were C1 while their score report said B2.
    if (band >= 6.0) return 'C2';
    if (band >= 5.0) return 'C1';
    if (band >= 4.0) return 'B2';
    if (band >= 3.0) return 'B1';
    if (band >= 2.0) return 'A2';
    return 'A1';
  },

  // ===========================================================================
  //  LEVEL CLASSIFICATION
  // ===========================================================================

  /**
   * Get an overall proficiency level from the total score (0-120).
   *
   * @param {number} totalScore
   * @returns {string}
   */
  getLevel(totalScore) {
    if (totalScore >= 100) return 'Advanced';
    if (totalScore >= 80) return 'High-Intermediate';
    if (totalScore >= 60) return 'Low-Intermediate';
    if (totalScore >= 40) return 'Below Intermediate';
    return 'Basic';
  },

  /**
   * Get a proficiency level for a single section score (0-30).
   *
   * @param {number} sectionScore
   * @returns {string}
   */
  getLevelForSection(sectionScore) {
    if (sectionScore >= 25) return 'Advanced';
    if (sectionScore >= 20) return 'High-Intermediate';
    if (sectionScore >= 15) return 'Low-Intermediate';
    if (sectionScore >= 10) return 'Below Intermediate';
    return 'Basic';
  },

  /**
   * Get a CSS-friendly level class string.
   *
   * @param {string} level
   * @returns {string}
   */
  getLevelClass(level) {
    const map = {
      Advanced: 'level-advanced',
      'High-Intermediate': 'level-high-intermediate',
      'Low-Intermediate': 'level-low-intermediate',
      'Below Intermediate': 'level-below-intermediate',
      Basic: 'level-basic',
    };
    return map[level] || 'level-basic';
  },

  // ===========================================================================
  //  INTERNAL HELPERS
  // ===========================================================================

  /**
   * Look up a scaled score from a raw-to-scaled conversion array.
   *
   * @param {number[]} table
   * @param {number} rawScore
   * @param {number} [maxRaw] - Maximum possible raw score for this section.
   *   When supplied, rawScore is normalized to the table's range so the
   *   scoring curve still spans 0 → 30 scaled regardless of pool size.
   *   This is essential now that Reading has 50 items and Listening has 47
   *   (per the 2026 ETS spec), since the conversion tables were originally
   *   sized for smaller pools (~25 reading, ~34 listening).
   * @returns {number}
   * @private
   */
  /**
   * Did the student answer anything at all inside this module?
   *
   * Used to tell "scored badly on Module 2" apart from "Module 2 never ran".
   * The scorer only ever sees the answer sheet, so a module with not a single
   * answer of any kind is treated as never administered and left out of the
   * total rather than counted as all wrong.
   *
   * @param {object} mod - a module node holding stimulus arrays
   * @param {object} answers
   * @returns {boolean}
   * @private
   */
  _anyAnswered(mod, answers) {
    if (!mod || !answers) return false;
    const keys = [
      'chooseResponse',
      'conversations',
      'announcements',
      'academicTalks',
      'completeTheWords',
      'dailyLife',
      'academicPassages',
    ];
    for (const key of keys) {
      for (const item of mod[key] || []) {
        const probes = item.words || item.questions || [item];
        for (const q of probes) {
          if (!q || !q.id) continue;
          const a = answers[q.id];
          if (a !== undefined && a !== null && a !== '') return true;
        }
      }
    }
    return false;
  },

  _lookupConversion(table, rawScore, maxRaw) {
    if (typeof maxRaw === 'number' && maxRaw > 0) {
      const ratio = Math.max(0, Math.min(1, rawScore / maxRaw));
      const idx = Math.round(ratio * (table.length - 1));
      return table[idx];
    }
    const idx = Math.max(0, Math.min(Math.round(rawScore), table.length - 1));
    return table[idx];
  },

  /**
   * Look up a scaled score from a speaking/writing conversion object.
   * Finds the closest key if an exact match isn't present.
   *
   * @param {object} table
   * @param {number} average
   * @returns {number}
   * @private
   */
  _lookupSpeakingWriting(table, average) {
    // LINEAR INTERPOLATION between anchors, not a snap to the nearest one.
    //
    // Snapping meant Speaking and Writing could only ever emit the eleven
    // anchor values, and the ETS band table assigns bands to RANGES of scaled
    // scores that those eleven values miss entirely: band 3.0 (Speaking 16-17,
    // Writing 13-14), band 5.0 (Speaking 25-26) and band 5.5 (Speaking 27,
    // Writing 27-28) could not be produced at all.
    //
    // Every anchor value is unchanged, so an average landing exactly on one
    // scores exactly what it did before; only the gaps are filled.
    //
    // MUST STAY IDENTICAL to interpolateConversion in api/_lib/scoring.js. This
    // calculator is published, so if the two drift a student is shown one
    // number and awarded another. Pinned by npm run test:band-reachability.
    const keys = Object.keys(table)
      .map(Number)
      .sort((a, b) => a - b);
    if (!keys.length) return 0;
    const avg = Number(average);
    if (!isFinite(avg)) return 0;
    if (avg <= keys[0]) return table[keys[0]];
    const last = keys[keys.length - 1];
    if (avg >= last) return table[last];
    for (let i = 0; i < keys.length - 1; i++) {
      const lo = keys[i];
      const hi = keys[i + 1];
      if (avg >= lo && avg < hi) {
        const t = (avg - lo) / (hi - lo);
        return Math.round(table[lo] + t * (table[hi] - table[lo]));
      }
    }
    return table[last];
  },

  /**
   * Check if a single-select answer is correct.
   *
   * @param {*} correct  - The correct answer (string or number)
   * @param {*} userAnswer
   * @returns {boolean}
   * @private
   */
  _isCorrect(correct, userAnswer) {
    if (correct === undefined || correct === null) return false;
    if (userAnswer === undefined || userAnswer === null) return false;
    return String(correct) === String(userAnswer);
  },

  /**
   * Check if a multi-select answer is fully correct.
   * The user must select exactly the correct options (order doesn't matter).
   *
   * @param {string[]} correct    - Array of correct option ids
   * @param {string[]|undefined} userAnswer - Array of selected option ids
   * @returns {boolean}
   * @private
   */
  _isMultiSelectCorrect(correct, userAnswer) {
    if (!Array.isArray(correct) || !Array.isArray(userAnswer)) return false;
    if (correct.length !== userAnswer.length) return false;

    const sortedCorrect = [...correct].map(String).sort();
    const sortedUser = [...userAnswer].map(String).sort();

    for (let i = 0; i < sortedCorrect.length; i++) {
      if (sortedCorrect[i] !== sortedUser[i]) return false;
    }
    return true;
  },

  /**
   * Check if an ordering answer is correct (order matters).
   *
   * @param {string[]} correct
   * @param {string[]|undefined} userAnswer
   * @returns {boolean}
   * @private
   */
  _isOrderCorrect(correct, userAnswer) {
    if (!Array.isArray(correct) || !Array.isArray(userAnswer)) return false;
    if (correct.length !== userAnswer.length) return false;

    for (let i = 0; i < correct.length; i++) {
      if (String(correct[i]) !== String(userAnswer[i])) return false;
    }
    return true;
  },

  /**
   * Score a Prose Summary question with partial credit.
   * - 3 correct selections out of 3 = 2 points
   * - 2 correct selections = 1 point
   * - 1 or 0 correct = 0 points
   * Wrong selections reduce the count.
   *
   * @param {string[]} correctAnswers - Array of correct option ids (typically 3)
   * @param {string[]|undefined} userAnswer - Array of user-selected option ids
   * @returns {number} 0, 1, or 2
   * @private
   */
  _scoreProseSummary(correctAnswers, userAnswer) {
    if (!Array.isArray(correctAnswers) || !Array.isArray(userAnswer)) return 0;

    const correctSet = new Set(correctAnswers.map(String));
    let correctCount = 0;

    for (const sel of userAnswer) {
      if (correctSet.has(String(sel))) {
        correctCount++;
      }
    }

    // Deduct for wrong selections (over-selection penalty)
    const wrongCount = userAnswer.length - correctCount;
    const netCorrect = Math.max(0, correctCount - wrongCount);

    if (netCorrect >= 3) return 2;
    if (netCorrect >= 2) return 1;
    return 0;
  },

  /**
   * Check if answer is correct using options array (2026 format).
   * Options have { id, text, correct: true/false }.
   */
  _isCorrectFromOptions(options, userAnswer) {
    if (!options || !userAnswer) return false;
    const correctOption = options.find((o) => o.correct);
    return correctOption && String(correctOption.id) === String(userAnswer);
  },

  /**
   * Get the correct answer ID from an options array.
   */
  _getCorrectFromOptions(options) {
    if (!options) return null;
    const correctOption = options.find((o) => o.correct);
    return correctOption ? correctOption.id : null;
  },

  /**
   * Calculate Listening for 2026 format.
   * Handles chooseResponse, conversations, announcements, academicTalks.
   */
  calculateListening2026(listeningData, answers) {
    if (!listeningData) return this._emptyResult();

    let rawScore = 0;
    let totalPossible = 0;
    const perQuestion = [];
    const byType = {};
    // Track Module 1 separately for adaptive routing — same logic as
    // calculateReading: ≥60% on Stage 1 → Hard path, else Easy path.
    let module1Correct = 0;
    let module1Total = 0;

    const processQuestions = (items, typeName, moduleIdx) => {
      for (const item of items || []) {
        // chooseResponse items have options directly on the item
        const questions = item.questions || [item];
        for (const q of questions) {
          if (!q.id) continue;
          if (!byType[typeName]) byType[typeName] = { correct: 0, total: 0 };
          byType[typeName].total++;
          totalPossible++;
          if (moduleIdx === 0) module1Total++;
          const userAnswer = answers[q.id];
          const correct = this._isCorrectFromOptions(q.options, userAnswer);
          if (correct) {
            rawScore++;
            byType[typeName].correct++;
            if (moduleIdx === 0) module1Correct++;
          }
          // Resolve option ids to their text so the results page can show
          // the actual answer wording (not just "a" or "b").
          let correctText = this._getCorrectFromOptions(q.options);
          let userAnswerText = userAnswer;
          if (q.options) {
            const correctOpt = q.options.find((o) => o.correct);
            if (correctOpt && correctOpt.text) correctText = correctOpt.text;
            const selectedOpt = q.options.find((o) => o.id === userAnswer);
            if (selectedOpt && selectedOpt.text) userAnswerText = selectedOpt.text;
          }
          perQuestion.push({
            id: q.id,
            stem: q.stem,
            correct,
            points: correct ? 1 : 0,
            userAnswer: userAnswerText,
            correctAnswer: correctText,
            module: moduleIdx + 1,
          });
        }
      }
    };

    let isMultiModule = false;
    let m2Administered = true;
    // New 2026 format: data is nested under modules[]
    if (Array.isArray(listeningData.modules) && listeningData.modules.length > 0) {
      isMultiModule =
        listeningData.modules.length > 1 ||
        !!listeningData.module2Easy ||
        !!listeningData.module2Hard;
      // Score Module 1 (router) first so we can derive the routing path.
      const m1 = listeningData.modules[0];
      processQuestions(m1.chooseResponse, 'choose_response', 0);
      processQuestions(m1.conversations, 'conversation', 0);
      processQuestions(m1.announcements, 'announcement', 0);
      processQuestions(m1.academicTalks, 'academic_talk', 0);

      // Two-stage adaptive: pick the M2 variant the student actually saw
      // based on M1 performance. ≥60% → Hard, <60% → Easy.
      //
      // Resolution priority MUST mirror the runner's _activeListeningModules
      // in the test-page so the scorer iterates the same question IDs the
      // student actually answered:
      //   hard  → data.module2Hard || data.modules[1]
      //   easy  → data.module2Easy || data.modules[1]
      //   none  → data.modules[1] (single-variant tests)
      //
      // Earlier versions of this picker fell through `module2Easy` before
      // `modules[1]`, which silently regraded every hard-path attempt against
      // a question set the student never saw. See diagnosis 2026-05-06.
      let _m2RoutingPath = null;
      if (module1Total > 0) {
        _m2RoutingPath = module1Correct / module1Total >= 0.6 ? 'hard' : 'easy';
      }
      const m2 =
        (_m2RoutingPath === 'hard' && (listeningData.module2Hard || listeningData.modules[1])) ||
        (_m2RoutingPath === 'easy' && (listeningData.module2Easy || listeningData.modules[1])) ||
        listeningData.modules[1] ||
        listeningData.module2Hard ||
        listeningData.module2Easy ||
        null;
      // A module the student was never shown must not count against them.
      //
      // One clock covers both modules, so a slow Module 1 can expire it and the
      // section submits before Module 2 ever runs (timeExpired() on the test
      // page calls submitSection() with no module check). Connectivity failures
      // have produced the same outcome. Either way the student answered 30
      // questions and was scored out of 47. On a real 25/30 attempt that cost
      // 13 scaled points, turning a band 6 performance into a 3.5.
      //
      // The only signal available here is that not one Module 2 question has an
      // answer. A student who genuinely reached Module 2 and answered nothing at
      // all looks identical, and is far rarer than our own skips, so the benefit
      // of the doubt goes to the student.
      m2Administered = m2 ? this._anyAnswered(m2, answers) : false;
      if (m2 && m2Administered) {
        processQuestions(m2.chooseResponse, 'choose_response', 1);
        processQuestions(m2.conversations, 'conversation', 1);
        processQuestions(m2.announcements, 'announcement', 1);
        processQuestions(m2.academicTalks, 'academic_talk', 1);
      }
    } else {
      // Legacy flat format (pre-2026) — treat as single module, no routing.
      processQuestions(listeningData.chooseResponse, 'choose_response', 0);
      processQuestions(listeningData.conversations, 'conversation', 0);
      processQuestions(listeningData.announcements, 'announcement', 0);
      processQuestions(listeningData.academicTalks, 'academic_talk', 0);
    }

    const scaled = this._lookupConversion(this.listeningConversion, rawScore, totalPossible);

    let routingPath = null;
    let module1Pct = null;
    if (isMultiModule && module1Total > 0) {
      module1Pct = module1Correct / module1Total;
      routingPath = module1Pct >= 0.6 ? 'hard' : 'easy';
    }

    return {
      raw: rawScore,
      scaled,
      total: totalPossible,
      perQuestion,
      byType,
      module1Correct,
      module1Total,
      module1Pct,
      routingPath,
      // True when Module 2 never ran, so the score reflects Module 1 only.
      // Surfaced so results and support can tell a short section from a weak one.
      moduleNotAdministered: isMultiModule && !m2Administered,
    };
  },

  /**
   * Return an empty scoring result object.
   * @returns {object}
   * @private
   */
  _emptyResult() {
    return {
      raw: 0,
      scaled: 0,
      total: 0,
      perQuestion: [],
      byType: {},
    };
  },
};
