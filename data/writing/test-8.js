/**
 * TOEFL Writing Practice Test 8 — 2026 format
 */
window.WRITING_SECTION_8 = {
  id: 'writing-test-8',
  title: 'TOEFL Writing Practice Test 8',
  format: '2026',

  buildASentence: [
    {
      id: 'w8-bas-1',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are leaving a poetry reading.',
      speakerName: 'Esther',
      speakerImage: 'female-1.webp',
      speakerLine: 'Which poem stood out to you tonight?',
      respondentName: 'Wesley',
      respondentImage: 'male-1.webp',
      answerPrefix: 'The third one,',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['her grandmother', 'of', 'her memories', 'the author', 'shares', 'in which', 'shared'],
      correctOrder: ['in which', 'the author', 'shares', 'her memories', 'of', 'her grandmother'],
      // "shared" is grammatical too: the literary present ("the author shares") is
      // the convention when describing what a text does, but simple past is also
      // standard because the poem was written in the past. Both earn the point.
      acceptedOrders: [
        ['in which', 'the author', 'shared', 'her memories', 'of', 'her grandmother']
      ],
      extraWord: 'shared',
      correctSentence: "The third one, in which the author shares her memories of her grandmother.",
      grammarPattern: 'relative_clause_in_which',
      explanation: "The correct sentence is “The third one, in which the author shares her memories of her grandmother.” The relative clause (introduced by that, who, which, or when) comes directly after the noun it describes. “Shared” is also accepted here: the literary present is the usual convention for describing what a text does, but the simple past is grammatical too.",
      points: 1
    },
    {
      id: 'w8-bas-2',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is calling about a missed advising appointment.',
      speakerName: 'Office Staff',
      speakerImage: 'male-2.webp',
      speakerLine: 'May I ask why you missed your appointment this morning?',
      respondentName: 'Aida',
      respondentImage: 'female-2.webp',
      answerPrefix: 'I',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['another', 'meeting', 'confused', 'the', 'with', 'time', 'meets'],
      correctOrder: ['confused', 'the', 'time', 'with', 'another', 'meeting'],
      extraWord: 'meets',
      correctSentence: "I confused the time with another meeting.",
      grammarPattern: 'past_simple_with_object',
      explanation: "The correct sentence is “I confused the time with another meeting.” Standard English word order applies here: subject, then verb, then object, with any time or place phrase at the end. The word “meets” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w8-bas-3',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are choosing dinner options.',
      speakerName: 'Niall',
      speakerImage: 'male-3.webp',
      speakerLine: 'Do you want to cook tonight or grab something easy?',
      respondentName: 'Indra',
      respondentImage: 'female-3.webp',
      answerPrefix: 'Cooking would be',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['eaten', 'eat', 'already', 'lunch', 'easier', 'I\'ve', 'since'],
      correctOrder: ['easier', 'since', 'I\'ve', 'eaten', 'lunch', 'already'],
      // "already" has two standard positions in the present perfect: between the
      // auxiliary and the participle ("I've already eaten lunch") and at the end
      // of the clause ("I've eaten lunch already"). Both earn the point.
      acceptedOrders: [
        ['easier', 'since', 'I\'ve', 'already', 'eaten', 'lunch']
      ],
      extraWord: 'eat',
      correctSentence: "Cooking would be easier since I\'ve eaten lunch already.",
      grammarPattern: 'reason_clause_present_perfect',
      explanation: "The correct sentence is “Cooking would be easier since I've eaten lunch already.” Present perfect uses have or has plus the past participle to connect a past action to the present. “Since I've already eaten lunch” is accepted too, because “already” is standard both before the participle and at the end of the clause.",
      points: 1
    },
    {
      id: 'w8-bas-4',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is sending an update to a study group.',
      speakerName: 'Group Leader',
      speakerImage: 'female-4.webp',
      speakerLine: 'Were you able to find a quiet room for tomorrow?',
      respondentName: 'Devin',
      respondentImage: 'male-4.webp',
      answerPrefix: 'I\'ve',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['until', 'reserve', 'eight', 'reserved', 'study', 'a', 'room', 'tomorrow'],
      correctOrder: ['reserved', 'a', 'study', 'room', 'until', 'eight', 'tomorrow'],
      extraWord: 'reserve',
      correctSentence: "I\'ve reserved a study room until eight tomorrow.",
      grammarPattern: 'present_perfect_with_object',
      explanation: "The correct sentence is “I've reserved a study room until eight tomorrow.” Present perfect uses have or has plus the past participle to connect a past action to the present. The word “reserve” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w8-bas-5',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are checking the weather before a hike.',
      speakerName: 'Ravi',
      speakerImage: 'male-5.webp',
      speakerLine: 'Will the rain hold off long enough for the trail?',
      respondentName: 'Sienna',
      respondentImage: 'female-5.webp',
      answerPrefix: 'The forecast',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['will', 'the', 'after lunch', 'stop', 'says', 'showers', 'should'],
      correctOrder: ['says', 'the', 'showers', 'should', 'stop', 'after lunch'],
      acceptedOrders: [
        ['says', 'the', 'showers', 'will', 'stop', 'after lunch']
      ],
      extraWord: 'will',
      correctSentence: "The forecast says the showers should stop after lunch.",
      grammarPattern: 'reported_modal',
      explanation: "The correct sentence is “The forecast says the showers should stop after lunch.” This is reported (indirect) speech, so the clause keeps statement word order and the tense usually shifts back. The word “will” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w8-bas-6',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is asking the registrar about a transcript request.',
      speakerName: 'Registrar',
      speakerImage: 'male-6.webp',
      speakerLine: 'Where would you like the official transcript sent?',
      respondentName: 'Yuna',
      respondentImage: 'female-6.webp',
      answerPrefix: 'Could you',
      answerSuffix: '?',
      numBlanks: 7,
      wordChunks: ['sends', 'to', 'university', 'send', 'it', 'the', 'graduate', 'in Berlin'],
      correctOrder: ['send', 'it', 'to', 'the', 'graduate', 'university', 'in Berlin'],
      extraWord: 'sends',
      correctSentence: "Could you send it to the graduate university in Berlin?",
      grammarPattern: 'modal_with_directional_phrase',
      explanation: "The correct sentence is “Could you send it to the graduate university in Berlin?” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “sends” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w8-bas-7',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is talking to a roommate about cleaning supplies.',
      speakerName: 'Cassie',
      speakerImage: 'female-1.webp',
      speakerLine: 'Did you pick up dish soap when you went shopping?',
      respondentName: 'Tomas',
      respondentImage: 'male-2.webp',
      answerPrefix: 'I forgot,',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['corner store', 'can', 'I', 'the', 'stop', 'at', 'stops', 'but'],
      correctOrder: ['but', 'I', 'can', 'stop', 'at', 'the', 'corner store'],
      extraWord: 'stops',
      correctSentence: "I forgot, but I can stop at the corner store.",
      grammarPattern: 'modal_with_phrasal_verb',
      explanation: "The correct sentence is “I forgot, but I can stop at the corner store.” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “stops” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w8-bas-8',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is filling out a club application.',
      speakerName: 'Club Officer',
      speakerImage: 'female-3.webp',
      speakerLine: 'Why are you interested in joining the debate team?',
      respondentName: 'Henrik',
      respondentImage: 'male-1.webp',
      answerPrefix: 'I want to',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['thinks', 'before', 'to law school', 'arguing', 'I', 'practice', 'apply', 'logically'],
      correctOrder: ['practice', 'arguing', 'logically', 'before', 'I', 'apply', 'to law school'],
      extraWord: 'thinks',
      correctSentence: "I want to practice arguing logically before I apply to law school.",
      grammarPattern: 'parallel_gerunds_with_purpose',
      explanation: "The correct sentence is “I want to practice arguing logically before I apply to law school.” The purpose clause (to or so that) explains why and follows the main action. The word “thinks” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w8-bas-9',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two friends are discussing a documentary they just watched.',
      speakerName: 'Stella',
      speakerImage: 'female-4.webp',
      speakerLine: 'What part of the film did you find most surprising?',
      respondentName: 'Anders',
      respondentImage: 'male-4.webp',
      answerPrefix: 'I was surprised',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['on', 'cost', 'the', 'public funding', 'by', 'how much', 'arts', 'depend'],
      correctOrder: ['by', 'how much', 'the', 'arts', 'depend', 'on', 'public funding'],
      extraWord: 'cost',
      correctSentence: "I was surprised by how much the arts depend on public funding.",
      grammarPattern: 'embedded_how_much',
      explanation: "The correct sentence is “I was surprised by how much the arts depend on public funding.” This is an embedded (indirect) question, so after the question word you keep statement word order (subject then verb), not question inversion. The word “cost” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w8-bas-10',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is calling the IT desk about a forgotten password.',
      speakerName: 'IT Staff',
      speakerImage: 'male-5.webp',
      speakerLine: 'When did you last log into the student portal successfully?',
      respondentName: 'Linnea',
      respondentImage: 'female-2.webp',
      answerPrefix: 'It was',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['I', 'morning', 'a paper', 'submit', 'submitted', 'Wednesday', 'when'],
      correctOrder: ['Wednesday', 'morning', 'when', 'I', 'submitted', 'a paper'],
      extraWord: 'submit',
      correctSentence: "It was Wednesday morning when I submitted a paper.",
      grammarPattern: 'time_clause_past_simple',
      explanation: "The correct sentence is “It was Wednesday morning when I submitted a paper.” The time expression (when, before, after, while, or a duration) attaches to the main clause without changing its internal order. The word “submit” is an extra distractor that does not belong in the answer.",
      points: 1
    }
  ],

  writeAnEmail: {
    id: 'w8-email-1',
    type: 'write_email',
    directions: 'You have seven minutes to read the situation and write your email. Aim for about 100 to 150 words. Be sure to address every point in the prompt.',
    situation: 'You ordered a custom academic regalia (cap and gown) for graduation through an outside vendor. The package arrived but the gown is two sizes too large and the cap is missing the tassel that matches your degree. The graduation ceremony is in twelve days.',
    taskInstructions: 'Write an email to the regalia vendor. In your email, do each of the following:',
    requiredPoints: [
      'Describe what is wrong with the order.',
      'Mention how soon you need a replacement because of the ceremony date.',
      'Ask whether they can ship a corrected order quickly or refund you so you can buy locally.'
    ],
    recipient: 'orders@vendor.com',
    subject: 'Wrong size and missing tassel for graduation order',
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

  academicDiscussion: {
    id: 'w8-disc-1',
    type: 'academic_discussion',
    topicIntro: 'Your professor is teaching a class on consumer behavior. Write a post responding to the professor\u2019s question.',
    directions: 'In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.',
    professorPrompt: {
      name: 'Professor Sato',
      image: 'female-2.webp',
      text: 'This week we are looking at influencer marketing. Brands now spend billions paying social media influencers to feature their products in casual posts. Supporters argue that influencers help small businesses reach new customers and that disclosure rules make sponsorship transparent. Critics say younger viewers cannot tell the difference between a recommendation and an ad, and that influencers blur the line between honest opinion and paid promotion. In your view, should governments regulate influencer advertising more strictly, or leave it to the platforms?'
    },
    studentResponses: [
      {
        name: 'Joaquin',
        image: 'male-3.webp',
        text: 'I think stricter regulation is needed. Self-regulation by platforms has been weak: a study by the FTC last year found that more than half of sponsored posts did not disclose the partnership clearly. Governments should require visible labels at the start of every sponsored post and treat undisclosed promotion as a fine-eligible violation. The current honor system simply does not protect younger viewers.'
      },
      {
        name: 'Saoirse',
        image: 'female-4.webp',
        text: 'I am more cautious about new regulation. Many influencers are small creators, not corporations, and complicated rules can crush their channels with paperwork. The platforms already provide labeling tools and educational programs. A better path is media literacy in schools so young viewers learn to question what they see, instead of expecting governments to filter every ad they encounter.'
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

window.WRITING_TEST_8 = window.WRITING_SECTION_8;
