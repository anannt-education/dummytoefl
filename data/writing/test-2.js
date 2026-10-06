/**
 * TOEFL Writing Practice Test 2 — 2026 format
 *
 *   Module 1: Build a Sentence (10 items, 6:30 total)
 *   Module 2: Write an Email (7:00)
 *   Module 3: Write for an Academic Discussion (10:00)
 */
window.WRITING_SECTION_2 = {
  id: 'writing-test-2',
  title: 'TOEFL Writing Practice Test 2',
  format: '2026',

  // =========================================================================
  //  MODULE 1 — Build a Sentence (10 items, 390 seconds total)
  // =========================================================================
  buildASentence: [
    {
      id: 'w2-bas-1',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two friends are talking after class.',
      speakerName: 'Hugo',
      speakerImage: 'male-1.webp',
      speakerLine: 'Are you joining the trip to the science museum on Saturday?',
      respondentName: 'Camila',
      respondentImage: 'female-1.webp',
      answerPrefix: 'I\'ll',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['be', 'there', 'I', 'finish', 'on time', 'my paper', 'if', 'finishing'],
      correctOrder: ['be', 'there', 'if', 'I', 'finish', 'my paper', 'on time'],
      acceptedOrders: [
        ['be', 'there', 'on time', 'if', 'I', 'finish', 'my paper']
      ],
      extraWord: 'finishing',
      correctSentence: "I\'ll be there if I finish my paper on time.",
      grammarPattern: 'conditional_with_modal',
      explanation: "The correct sentence is “I'll be there if I finish my paper on time.” A conditional joins an if-clause with a result clause; keep the two clauses in order and match their verb forms. The word “finishing” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w2-bas-2',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is talking with the dorm receptionist.',
      speakerName: 'Receptionist',
      speakerImage: 'female-2.webp',
      speakerLine: 'Did you receive the package that came in this morning?',
      respondentName: 'Yuki',
      respondentImage: 'male-2.webp',
      answerPrefix: 'I haven\'t',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['received', 'pick', 'to', 'it', 'a chance', 'had', 'up yet'],
      correctOrder: ['had', 'a chance', 'to', 'pick', 'it', 'up yet'],
      extraWord: 'received',
      correctSentence: "I haven\'t had a chance to pick it up yet.",
      grammarPattern: 'present_perfect_negative',
      explanation: "The correct sentence is “I haven't had a chance to pick it up yet.” Present perfect uses have or has plus the past participle to connect a past action to the present. The word “received” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w2-bas-3',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is asking a teaching assistant about an assignment.',
      speakerName: 'Aarav',
      speakerImage: 'male-3.webp',
      speakerLine: 'Did the professor explain how the lab reports should be formatted?',
      respondentName: 'TA Nina',
      respondentImage: 'female-3.webp',
      answerPrefix: 'She',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['on', 'posted', 'the course', 'sent', 'a sample', 'site', 'this morning'],
      correctOrder: ['posted', 'a sample', 'on', 'the course', 'site', 'this morning'],
      acceptedOrders: [
        ['posted', 'a sample', 'this morning', 'on', 'the course', 'site']
      ],
      extraWord: 'sent',
      correctSentence: "She posted a sample on the course site this morning.",
      grammarPattern: 'past_simple_with_object',
      explanation: "The correct sentence is “She posted a sample on the course site this morning.” Standard English word order applies here: subject, then verb, then object, with any time or place phrase at the end. The word “sent” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w2-bas-4',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are leaving the lecture hall.',
      speakerName: 'Beatrice',
      speakerImage: 'female-4.webp',
      speakerLine: 'Do you remember what the professor said about the final project?',
      respondentName: 'Logan',
      respondentImage: 'male-4.webp',
      answerPrefix: 'He',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['to', 'a topic', 'before midterms', 'we', 'choosing', 'choose', 'said', 'have'],
      correctOrder: ['said', 'we', 'have', 'to', 'choose', 'a topic', 'before midterms'],
      extraWord: 'choosing',
      correctSentence: "He said we have to choose a topic before midterms.",
      grammarPattern: 'reported_speech_with_modal',
      explanation: "The correct sentence is “He said we have to choose a topic before midterms.” This is reported (indirect) speech, so the clause keeps statement word order and the tense usually shifts back. The word “choosing” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w2-bas-5',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is greeting an exchange student in the cafeteria.',
      speakerName: 'Felix',
      speakerImage: 'male-5.webp',
      speakerLine: 'How long have you been studying here?',
      respondentName: 'Mei',
      respondentImage: 'female-5.webp',
      answerPrefix: 'I',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['the beginning', 'since', 'here', 'of', 'September', 'been', 'began', 'have'],
      correctOrder: ['have', 'been', 'here', 'since', 'the beginning', 'of', 'September'],
      extraWord: 'began',
      correctSentence: "I have been here since the beginning of September.",
      grammarPattern: 'present_perfect_with_since',
      explanation: "The correct sentence is “I have been here since the beginning of September.” Present perfect uses have or has plus the past participle to connect a past action to the present. The word “began” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w2-bas-6',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A graduate student is talking with the writing center tutor.',
      speakerName: 'Tutor Owen',
      speakerImage: 'male-6.webp',
      speakerLine: 'What part of the draft do you want to focus on today?',
      respondentName: 'Anya',
      respondentImage: 'female-6.webp',
      answerPrefix: 'Could you',
      answerSuffix: '?',
      numBlanks: 7,
      wordChunks: ['my', 'looks', 'introduction', 'is', 'whether', 'tell', 'me', 'clear'],
      correctOrder: ['tell', 'me', 'whether', 'my', 'introduction', 'is', 'clear'],
      acceptedOrders: [
        ['tell', 'me', 'whether', 'my', 'introduction', 'looks', 'clear']
      ],
      extraWord: 'looks',
      correctSentence: "Could you tell me whether my introduction is clear?",
      grammarPattern: 'embedded_whether_question',
      explanation: "The correct sentence is “Could you tell me whether my introduction is clear?” This is an embedded (indirect) question, so after the question word you keep statement word order (subject then verb), not question inversion. The word “looks” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w2-bas-7',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two roommates are discussing weekend chores.',
      speakerName: 'Mira',
      speakerImage: 'female-1.webp',
      speakerLine: 'Should we wait until Sunday to do the laundry?',
      respondentName: 'Diego',
      respondentImage: 'male-2.webp',
      answerPrefix: 'It',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['going', 'would', 'to', 'better', 'be', 'go', 'this evening'],
      correctOrder: ['would', 'be', 'better', 'to', 'go', 'this evening'],
      extraWord: 'going',
      correctSentence: "It would be better to go this evening.",
      grammarPattern: 'modal_with_infinitive',
      explanation: "The correct sentence is “It would be better to go this evening.” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “going” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w2-bas-8',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is calling the housing office about a maintenance issue.',
      speakerName: 'Housing Staff',
      speakerImage: 'female-3.webp',
      speakerLine: 'When did you first notice the leak in your bathroom?',
      respondentName: 'Marco',
      respondentImage: 'male-1.webp',
      answerPrefix: 'I',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['noticing', 'noticed', 'I', 'when', 'up', 'on Monday', 'it', 'woke'],
      correctOrder: ['noticed', 'it', 'when', 'I', 'woke', 'up', 'on Monday'],
      acceptedOrders: [
        ['noticed', 'it', 'on Monday', 'when', 'I', 'woke', 'up']
      ],
      extraWord: 'noticing',
      correctSentence: "I noticed it when I woke up on Monday.",
      grammarPattern: 'past_simple_with_time_clause',
      explanation: "The correct sentence is “I noticed it when I woke up on Monday.” The time expression (when, before, after, while, or a duration) attaches to the main clause without changing its internal order. The word “noticing” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w2-bas-9',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is asking the registrar about transferring credits.',
      speakerName: 'Registrar',
      speakerImage: 'male-4.webp',
      speakerLine: 'Have you submitted the official transcript from your previous school?',
      respondentName: 'Layla',
      respondentImage: 'female-2.webp',
      answerPrefix: 'I',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['this morning', 'emailed', 'a copy', 'sent', 'a request', 'them', 'for'],
      correctOrder: ['emailed', 'them', 'a request', 'for', 'a copy', 'this morning'],
      acceptedOrders: [
        ['sent', 'them', 'a request', 'for', 'a copy', 'this morning']
      ],
      extraWord: 'sent',
      correctSentence: "I emailed them a request for a copy this morning.",
      grammarPattern: 'past_simple_with_indirect_object',
      explanation: "The correct sentence is “I emailed them a request for a copy this morning.” Standard English word order applies here: subject, then verb, then object, with any time or place phrase at the end. The word “sent” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w2-bas-10',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two friends are choosing a topic for a group presentation.',
      speakerName: 'Sara',
      speakerImage: 'female-5.webp',
      speakerLine: 'Which topic do you think will be easiest for the team?',
      respondentName: 'Liam',
      respondentImage: 'male-5.webp',
      answerPrefix: 'I think',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['manageable', 'is', 'the', 'change', 'most', 'matters', 'climate', 'topic'],
      correctOrder: ['climate', 'change', 'is', 'the', 'most', 'manageable', 'topic'],
      acceptedOrders: [
        ['the', 'most', 'manageable', 'topic', 'is', 'climate', 'change']
      ],
      extraWord: 'matters',
      correctSentence: "I think climate change is the most manageable topic.",
      grammarPattern: 'superlative_statement',
      explanation: "The correct sentence is “I think climate change is the most manageable topic.” The superlative uses the plus an -est ending, or the plus most and the adjective. The word “matters” is an extra distractor that does not belong in the answer.",
      points: 1
    }
  ],

  // =========================================================================
  //  MODULE 2 — Write an Email (420 seconds / 7 minutes)
  // =========================================================================
  writeAnEmail: {
    id: 'w2-email-1',
    type: 'write_email',
    directions: 'You have seven minutes to read the situation and write your email. Aim for about 100 to 150 words. Be sure to address every point in the prompt.',
    situation: 'You ordered a textbook for your sociology class through the campus bookstore three weeks ago. You were told it would arrive within ten days, but it has still not come. Your first quiz is scheduled for next Tuesday and the readings depend on having the book.',
    taskInstructions: 'Write an email to the campus bookstore manager. In your email, do each of the following:',
    requiredPoints: [
      'Explain when you placed the order and what book you are waiting for.',
      'Describe how the delay is affecting your preparation for the quiz.',
      'Ask whether the order can be tracked or whether you should switch to a different copy.'
    ],
    recipient: 'bookstore@state.edu',
    subject: 'Delayed sociology textbook order',
    writeTime: 420,
    targetWords: { min: 100, max: 150 },
    scoringRubric: {
      5: 'Fully addresses all three prompt points with a clear purpose, appropriate greeting and closing, and a consistently polite, respectful tone. Demonstrates sentence variety, accurate grammar, and precise, well-chosen vocabulary throughout.',
      4: 'Addresses all three points adequately with a generally appropriate tone. Minor grammar or word-choice issues do not impede understanding. Organization is logical and greeting/closing are present.',
      3: 'Addresses most points but one may be vague or underdeveloped. Tone is mostly suitable; noticeable grammar or vocabulary problems occur but the overall message remains understandable.',
      2: 'Partially addresses the prompt. Notable problems with completeness, register, or grammar. Missing greeting or closing, or one point omitted.',
      1: 'Minimally addresses the situation. Serious language errors make portions of the message hard to understand, or two or more required points are missing.',
      0: 'Off-topic, blank, copied verbatim from the prompt, or written in a language other than English.'
    }
  },

  // =========================================================================
  //  MODULE 3 — Write for an Academic Discussion (600 seconds / 10 minutes)
  // =========================================================================
  academicDiscussion: {
    id: 'w2-disc-1',
    type: 'academic_discussion',
    topicIntro: 'Your professor is teaching a class on educational technology. Write a post responding to the professor\u2019s question.',
    directions: 'In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.',
    professorPrompt: {
      name: 'Professor Hayes',
      image: 'female-3.webp',
      text: 'This week we are looking at how schools use digital tools. Some districts have replaced printed textbooks with tablets, arguing that students learn better when materials are interactive and always up to date. Others worry that screens distract young learners and that families without reliable internet will fall behind. In your opinion, should public schools fully replace printed textbooks with tablets, or should they keep printed materials as the main resource? Explain your reasoning.'
    },
    studentResponses: [
      {
        name: 'Daniela',
        image: 'female-4.webp',
        text: 'I support keeping printed textbooks as the main resource. Many studies suggest that students remember information better when they read on paper, especially for long passages. Tablets can be useful for short videos or quick searches, but they also bring distractions like notifications and games. Until schools can guarantee that every family has stable internet at home, depending entirely on tablets is unfair to students from lower-income households.'
      },
      {
        name: 'Eric',
        image: 'male-5.webp',
        text: 'I think schools should move toward digital materials. Tablets can carry every textbook a student needs, which reduces the weight of backpacks and the cost of replacing torn pages. Interactive simulations also let students explore science experiments that would be too expensive or dangerous in a regular classroom. Schools can solve the access problem by lending devices and offering low-cost internet, the way some districts already do.'
      }
    ],
    writeTime: 600,
    targetWords: { min: 100 },
    scoringRubric: {
      5: 'A fully successful response. A clear, well-elaborated contribution with a strong opinion that engages meaningfully with the discussion. Well-organized and coherent, with varied sentence structure, accurate grammar, and precise vocabulary.',
      4: 'A generally successful response. Relevant contribution with an opinion supported by reasons or examples. Adequate development and organization. Occasional minor language errors do not obscure meaning.',
      3: 'A partially successful response. Contribution is mostly on topic but may lack depth or specific examples. Some organizational issues and noticeable grammar or vocabulary errors, but meaning is generally clear.',
      2: 'A mostly unsuccessful response. Limited relevance or development, weak organization, and frequent errors that sometimes obscure meaning.',
      1: 'An unsuccessful response. Largely irrelevant, undeveloped, or incoherent, with severe and persistent language errors.',
      0: 'Blank, off-topic, not in English, or copied from the prompt.'
    }
  }
};

// Backward-compatible alias used by the 2026 test engine.
window.WRITING_TEST_2 = window.WRITING_SECTION_2;
