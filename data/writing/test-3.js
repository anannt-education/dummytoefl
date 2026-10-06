/**
 * TOEFL Writing Practice Test 3 — 2026 format
 *
 *   Module 1: Build a Sentence (10 items, 6:30 total)
 *   Module 2: Write an Email (7:00)
 *   Module 3: Write for an Academic Discussion (10:00)
 */
window.WRITING_SECTION_3 = {
  id: 'writing-test-3',
  title: 'TOEFL Writing Practice Test 3',
  format: '2026',

  // =========================================================================
  //  MODULE 1 — Build a Sentence (10 items, 390 seconds total)
  // =========================================================================
  buildASentence: [
    {
      id: 'w3-bas-1',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are walking out of the gym.',
      speakerName: 'Carlos',
      speakerImage: 'male-1.webp',
      speakerLine: 'Did you hear that the swimming pool will be closed all week?',
      respondentName: 'Renee',
      respondentImage: 'female-1.webp',
      answerPrefix: 'I heard',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['to', 'the tiles', 'are', 'they', 'going', 'fixing', 'replace'],
      correctOrder: ['they', 'are', 'going', 'to', 'replace', 'the tiles'],
      extraWord: 'fixing',
      correctSentence: "I heard they are going to replace the tiles.",
      grammarPattern: 'reported_be_going_to',
      explanation: "The correct sentence is “I heard they are going to replace the tiles.” This is reported (indirect) speech, so the clause keeps statement word order and the tense usually shifts back. The word “fixing” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w3-bas-2',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is meeting with her thesis advisor.',
      speakerName: 'Dr. Patel',
      speakerImage: 'male-2.webp',
      speakerLine: 'Have you decided on the methodology for your study?',
      respondentName: 'Yara',
      respondentImage: 'female-2.webp',
      answerPrefix: 'I would like',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['the methods', 'to', 'before', 'discussing', 'with you', 'I commit', 'discuss'],
      correctOrder: ['to', 'discuss', 'the methods', 'with you', 'before', 'I commit'],
      extraWord: 'discussing',
      correctSentence: "I would like to discuss the methods with you before I commit.",
      grammarPattern: 'modal_with_infinitive',
      explanation: "The correct sentence is “I would like to discuss the methods with you before I commit.” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “discussing” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w3-bas-3',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is calling to register for an evening course.',
      speakerName: 'Office Staff',
      speakerImage: 'female-3.webp',
      speakerLine: 'Are you sure you want to take a class that meets twice a week at night?',
      respondentName: 'Reza',
      respondentImage: 'male-3.webp',
      answerPrefix: 'It\'s',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['don\'t have', 'the', 'I', 'working', 'time', 'to work', 'only'],
      correctOrder: ['the', 'only', 'time', 'I', 'don\'t have', 'to work'],
      extraWord: 'working',
      correctSentence: "It\'s the only time I don\'t have to work.",
      grammarPattern: 'relative_clause_with_when',
      explanation: "The correct sentence is “It's the only time I don't have to work.” The relative clause (introduced by that, who, which, or when) comes directly after the noun it describes. The word “working” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w3-bas-4',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are choosing a study spot.',
      speakerName: 'Iris',
      speakerImage: 'female-4.webp',
      speakerLine: 'Should we work in the cafe or in the library today?',
      respondentName: 'Tariq',
      respondentImage: 'male-4.webp',
      answerPrefix: 'The library',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['become', 'gets', 'has', 'much', 'than', 'the cafe', 'quieter'],
      correctOrder: ['has', 'become', 'much', 'quieter', 'than', 'the cafe'],
      extraWord: 'gets',
      correctSentence: "The library has become much quieter than the cafe.",
      grammarPattern: 'present_perfect_comparative',
      explanation: "The correct sentence is “The library has become much quieter than the cafe.” Present perfect uses have or has plus the past participle to connect a past action to the present. The word “gets” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w3-bas-5',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is asking about an upcoming guest lecture.',
      speakerName: 'Dr. Owens',
      speakerImage: 'female-5.webp',
      speakerLine: 'Are you planning to attend the talk by the visiting economist?',
      respondentName: 'Henrik',
      respondentImage: 'male-5.webp',
      answerPrefix: 'I am',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['hear', 'her', 'about', 'inflation', 'hoping', 'spoke', 'to', 'speak'],
      correctOrder: ['hoping', 'to', 'hear', 'her', 'speak', 'about', 'inflation'],
      extraWord: 'spoke',
      correctSentence: "I am hoping to hear her speak about inflation.",
      grammarPattern: 'present_continuous_infinitive',
      explanation: "The correct sentence is “I am hoping to hear her speak about inflation.” The continuous form uses a form of be plus the -ing form of the verb. The word “spoke” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w3-bas-6',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is dropping off a paper at the writing center.',
      speakerName: 'Tutor June',
      speakerImage: 'female-6.webp',
      speakerLine: 'Would you like me to focus on grammar or on overall structure?',
      respondentName: 'Sven',
      respondentImage: 'male-6.webp',
      answerPrefix: 'Could you',
      answerSuffix: '?',
      numBlanks: 6,
      wordChunks: ['at', 'mainly', 'connect', 'look', 'connecting', 'how', 'my ideas'],
      correctOrder: ['look', 'mainly', 'at', 'how', 'my ideas', 'connect'],
      // "Could you mainly look at how my ideas connect?" is equally idiomatic:
      // "mainly" is standard both before and after the verb it modifies.
      acceptedOrders: [
        ['mainly', 'look', 'at', 'how', 'my ideas', 'connect']
      ],
      extraWord: 'connecting',
      correctSentence: "Could you look mainly at how my ideas connect?",
      grammarPattern: 'embedded_how_clause',
      explanation: "The correct sentence is “Could you look mainly at how my ideas connect?” This is an embedded (indirect) question, so after the question word you keep statement word order (subject then verb), not question inversion. The word “connecting” is an extra distractor that does not belong in the answer. Placing “mainly” before “look” is accepted too, because the adverb is standard on either side of the verb.",
      points: 1
    },
    {
      id: 'w3-bas-7',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two friends are planning a study group.',
      speakerName: 'Aiko',
      speakerImage: 'female-1.webp',
      speakerLine: 'How many people are coming to study tomorrow?',
      respondentName: 'Diego',
      respondentImage: 'male-2.webp',
      answerPrefix: 'Four,',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['invite', 'I', 'two', 'more friends', 'and', 'might', 'inviting'],
      correctOrder: ['and', 'I', 'might', 'invite', 'two', 'more friends'],
      extraWord: 'inviting',
      correctSentence: "Four, and I might invite two more friends.",
      grammarPattern: 'modal_with_quantifier',
      explanation: "The correct sentence is “Four, and I might invite two more friends.” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “inviting” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w3-bas-8',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is checking in at the campus health center.',
      speakerName: 'Receptionist',
      speakerImage: 'female-3.webp',
      speakerLine: 'Is this your first visit to our clinic?',
      respondentName: 'Pavel',
      respondentImage: 'male-1.webp',
      answerPrefix: 'Yes, are',
      answerSuffix: '?',
      numBlanks: 7,
      wordChunks: ['should', 'filled', 'out today', 'there', 'fill', 'forms', 'any', 'I'],
      correctOrder: ['there', 'any', 'forms', 'I', 'should', 'fill', 'out today'],
      extraWord: 'filled',
      correctSentence: "Yes, are there any forms I should fill out today?",
      grammarPattern: 'yes_no_with_existential',
      explanation: "The correct sentence is “Yes, are there any forms I should fill out today?” This begins with there is or there are, or with an auxiliary verb for a yes/no question. The word “filled” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w3-bas-9',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is talking with a financial aid officer.',
      speakerName: 'Officer Brooks',
      speakerImage: 'male-4.webp',
      speakerLine: 'Have you applied for the merit-based scholarship yet?',
      respondentName: 'Lina',
      respondentImage: 'female-2.webp',
      answerPrefix: 'I\'m not sure',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['all', 'I', 'understood', 'understand', 'of', 'criteria', 'the'],
      correctOrder: ['I', 'understand', 'all', 'of', 'the', 'criteria'],
      acceptedOrders: [
        ['I', 'understood', 'all', 'of', 'the', 'criteria']
      ],
      extraWord: 'understood',
      correctSentence: "I\'m not sure I understand all of the criteria.",
      grammarPattern: 'embedded_object_clause',
      explanation: "The correct sentence is “I'm not sure I understand all of the criteria.” This is an embedded (indirect) question, so after the question word you keep statement word order (subject then verb), not question inversion. The word “understood” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w3-bas-10',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are talking after a difficult exam.',
      speakerName: 'Mira',
      speakerImage: 'female-5.webp',
      speakerLine: 'How do you think the exam went for you?',
      respondentName: 'Joon',
      respondentImage: 'male-5.webp',
      answerPrefix: 'It',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['harder', 'tests', 'was', 'than', 'difficult', 'much', 'practice', 'the'],
      correctOrder: ['was', 'much', 'harder', 'than', 'the', 'practice', 'tests'],
      extraWord: 'difficult',
      correctSentence: "It was much harder than the practice tests.",
      grammarPattern: 'comparative_with_adverb',
      explanation: "The correct sentence is “It was much harder than the practice tests.” The comparative uses an -er ending or more plus the adjective, usually followed by than. The word “difficult” is an extra distractor that does not belong in the answer.",
      points: 1
    }
  ],

  // =========================================================================
  //  MODULE 2 — Write an Email (420 seconds / 7 minutes)
  // =========================================================================
  writeAnEmail: {
    id: 'w3-email-1',
    type: 'write_email',
    directions: 'You have seven minutes to read the situation and write your email. Aim for about 100 to 150 words. Be sure to address every point in the prompt.',
    situation: 'You signed up to be a peer mentor for first-year students this semester. The training session is scheduled for Friday afternoon, but a required psychology lab now meets at the same time. You want to keep the mentoring role but cannot attend the original training.',
    taskInstructions: 'Write an email to the mentoring program coordinator. In your email, do each of the following:',
    requiredPoints: [
      'Confirm that you still want to be a peer mentor this semester.',
      'Explain why you are unable to attend the Friday training.',
      'Suggest a make-up option, such as a recorded version or a different session.'
    ],
    recipient: 'mentoring@state.edu',
    subject: 'Friday training conflict, peer mentor program',
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
    id: 'w3-disc-1',
    type: 'academic_discussion',
    topicIntro: 'Your professor is teaching a class on urban planning. Write a post responding to the professor\u2019s question.',
    directions: 'In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.',
    professorPrompt: {
      name: 'Professor Lin',
      image: 'female-2.webp',
      text: 'This week we are discussing how cities can reduce traffic. Some planners want to ban private cars from city centers, replacing them with buses, bikes, and walking paths. They believe this would lower pollution and make downtown areas safer for pedestrians. Critics counter that bans hurt small businesses, exclude people with limited mobility, and create new traffic problems on the streets just outside the restricted zone. What do you think? Should city centers ban private cars, or not?'
    },
    studentResponses: [
      {
        name: 'Nora',
        image: 'female-5.webp',
        text: 'I support banning private cars in city centers. European cities like Oslo and Pontevedra have shown that pedestrian zones lower air pollution and increase foot traffic for local shops. With reliable public transit and bike lanes, most trips that used to require a car become faster on a bus or by bike. Cities can still allow delivery vehicles and accessible vans for people who need them.'
      },
      {
        name: 'Wesley',
        image: 'male-3.webp',
        text: 'I am against a full ban. Many people in my city depend on cars because the bus network does not reach the suburbs frequently. Forcing them to give up driving without first improving public transit would hurt working families. A better step would be congestion pricing, which charges drivers a fee during busy hours and uses the revenue to expand transit options gradually.'
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
window.WRITING_TEST_3 = window.WRITING_SECTION_3;
