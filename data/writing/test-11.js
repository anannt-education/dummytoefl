/**
 * TOEFL Writing Practice Test 11 — 2026 format
 */
window.WRITING_SECTION_11 = {
  id: 'writing-test-11',
  title: 'TOEFL Writing Practice Test 11',
  format: '2026',

  buildASentence: [
    {
      id: 'w11-bas-1',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are walking back from a conference.',
      speakerName: 'Mae',
      speakerImage: 'female-1.webp',
      speakerLine: 'Did the keynote speaker answer your question afterward?',
      respondentName: 'Bryce',
      respondentImage: 'male-1.webp',
      answerPrefix: 'I',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['her', 'catches', 'just', 'as', 'she', 'caught', 'left', 'briefly'],
      correctOrder: ['caught', 'her', 'briefly', 'just', 'as', 'she', 'left'],
      // "just" and "briefly" are both mobile here, and each arrangement answers
      // the question naturally, so all three are accepted.
      acceptedOrders: [
        ['just', 'caught', 'her', 'briefly', 'as', 'she', 'left'],
        ['briefly', 'caught', 'her', 'just', 'as', 'she', 'left'],
        ['just', 'briefly', 'caught', 'her', 'as', 'she', 'left'],
        ['caught', 'her', 'just', 'briefly', 'as', 'she', 'left']
      ],
      extraWord: 'catches',
      correctSentence: "I caught her briefly just as she left.",
      grammarPattern: 'past_simple_time_clause',
      explanation: "The correct sentence is “I caught her briefly just as she left.” The time expression (when, before, after, while, or a duration) attaches to the main clause without changing its internal order. The word “catches” is an extra distractor that does not belong in the answer. “I just caught her briefly as she left” and “I briefly caught her just as she left” are accepted too, because both adverbs are mobile in this sentence.",
      points: 1
    },
    {
      id: 'w11-bas-2',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is talking with a teaching assistant.',
      speakerName: 'TA Reece',
      speakerImage: 'male-2.webp',
      speakerLine: 'Have you had a chance to look at the practice problems?',
      respondentName: 'Maeve',
      respondentImage: 'female-2.webp',
      answerPrefix: 'I\'m',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['one', 'unsure', 'still', 'wondering', 'last', 'about', 'the'],
      correctOrder: ['still', 'unsure', 'about', 'the', 'last', 'one'],
      acceptedOrders: [
        ['still', 'wondering', 'about', 'the', 'last', 'one']
      ],
      extraWord: 'wondering',
      correctSentence: "I\'m still unsure about the last one.",
      grammarPattern: 'present_continuous_with_adjective',
      explanation: "The correct sentence is “I'm still unsure about the last one.” The continuous form uses a form of be plus the -ing form of the verb. The word “wondering” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w11-bas-3',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is asking the gym front desk about a personal trainer.',
      speakerName: 'Front Desk',
      speakerImage: 'female-3.webp',
      speakerLine: 'Have you booked a session with one of our trainers before?',
      respondentName: 'Felix',
      respondentImage: 'male-3.webp',
      answerPrefix: 'Could you',
      answerSuffix: '?',
      numBlanks: 6,
      wordChunks: ['let', 'me', 'rates', 'first', 'the', 'know', 'lets'],
      correctOrder: ['let', 'me', 'know', 'the', 'rates', 'first'],
      // "Could you first let me know the rates?" is equally natural: "first"
      // is standard at the front of the clause or at the end.
      acceptedOrders: [
        ['first', 'let', 'me', 'know', 'the', 'rates']
      ],
      extraWord: 'lets',
      correctSentence: "Could you let me know the rates first?",
      grammarPattern: 'modal_with_object_infinitive',
      explanation: "The correct sentence is “Could you let me know the rates first?” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “lets” is an extra distractor that does not belong in the answer. “Could you first let me know the rates?” is accepted too, because “first” is standard at either end of the clause.",
      points: 1
    },
    {
      id: 'w11-bas-4',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are debating which course to drop.',
      speakerName: 'Anouk',
      speakerImage: 'female-4.webp',
      speakerLine: 'Why are you thinking of dropping linguistics?',
      respondentName: 'Pavel',
      respondentImage: 'male-4.webp',
      answerPrefix: 'I',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['on', 'job', 'taken', 'part-time', 'a', 'have', 'taking'],
      correctOrder: ['have', 'taken', 'on', 'a', 'part-time', 'job'],
      extraWord: 'taking',
      correctSentence: "I have taken on a part-time job.",
      grammarPattern: 'present_perfect_phrasal',
      explanation: "The correct sentence is “I have taken on a part-time job.” Present perfect uses have or has plus the past participle to connect a past action to the present. The word “taking” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w11-bas-5',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is talking with the campus tour leader.',
      speakerName: 'Tour Leader',
      speakerImage: 'male-5.webp',
      speakerLine: 'Did you have a chance to see the new science building?',
      respondentName: 'Carmen',
      respondentImage: 'female-5.webp',
      answerPrefix: 'It\'s',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['I', 'expected', 'to be', 'than', 'biggest', 'it', 'much', 'larger'],
      correctOrder: ['much', 'larger', 'than', 'I', 'expected', 'it', 'to be'],
      extraWord: 'biggest',
      correctSentence: "It\'s much larger than I expected it to be.",
      grammarPattern: 'comparative_clause',
      explanation: "The correct sentence is “It's much larger than I expected it to be.” The comparative uses an -er ending or more plus the adjective, usually followed by than. The word “biggest” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w11-bas-6',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is talking with a writing center tutor.',
      speakerName: 'Tutor Iris',
      speakerImage: 'female-6.webp',
      speakerLine: 'Where would you like to begin with the draft today?',
      respondentName: 'Aldo',
      respondentImage: 'male-6.webp',
      answerPrefix: 'Let\'s',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['introduction', 'discuss', 'discussing', 'enough', 'whether', 'my', 'is', 'strong'],
      correctOrder: ['discuss', 'whether', 'my', 'introduction', 'is', 'strong', 'enough'],
      extraWord: 'discussing',
      correctSentence: "Let\'s discuss whether my introduction is strong enough.",
      grammarPattern: 'gerund_with_embedded_whether',
      explanation: "The correct sentence is “Let's discuss whether my introduction is strong enough.” This is an embedded (indirect) question, so after the question word you keep statement word order (subject then verb), not question inversion. The word “discussing” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w11-bas-7',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are heading to a campus event.',
      speakerName: 'Sade',
      speakerImage: 'female-1.webp',
      speakerLine: 'Do we need to bring anything to the welcome dinner?',
      respondentName: 'Erik',
      respondentImage: 'male-2.webp',
      answerPrefix: 'Just bring an ID;',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['including', 'else', 'provided', 'be', 'will', 'inside', 'everything'],
      correctOrder: ['everything', 'else', 'will', 'be', 'provided', 'inside'],
      extraWord: 'including',
      correctSentence: "Just bring an ID; everything else will be provided inside.",
      grammarPattern: 'compound_with_passive',
      explanation: "The correct sentence is “Just bring an ID; everything else will be provided inside.” This is a passive structure: the thing affected comes first, followed by a form of be and the past participle. The word “including” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w11-bas-8',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is asking the bookstore manager about a textbook order.',
      speakerName: 'Manager',
      speakerImage: 'female-3.webp',
      speakerLine: 'Are you still waiting on the textbook for your engineering class?',
      respondentName: 'Adi',
      respondentImage: 'male-1.webp',
      answerPrefix: 'I\'m wondering',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['has', 'updated', 'the date', 'whether', 'wonder', 'the', 'publisher'],
      correctOrder: ['whether', 'the', 'publisher', 'has', 'updated', 'the date'],
      extraWord: 'wonder',
      correctSentence: "I\'m wondering whether the publisher has updated the date.",
      grammarPattern: 'embedded_present_perfect_question',
      explanation: "The correct sentence is “I'm wondering whether the publisher has updated the date.” This is an embedded (indirect) question, so after the question word you keep statement word order (subject then verb), not question inversion. The word “wonder” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w11-bas-9',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is presenting at a peer review session.',
      speakerName: 'Peer Reviewer',
      speakerImage: 'male-4.webp',
      speakerLine: 'Could you summarize your project in one sentence?',
      respondentName: 'Lila',
      respondentImage: 'female-2.webp',
      answerPrefix: 'My project',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['examine', 'rising', 'address', 'examines', 'sea levels', 'policies', 'how'],
      correctOrder: ['examines', 'how', 'policies', 'address', 'rising', 'sea levels'],
      extraWord: 'examine',
      correctSentence: "My project examines how policies address rising sea levels.",
      grammarPattern: 'embedded_how_clause',
      explanation: "The correct sentence is “My project examines how policies address rising sea levels.” This is an embedded (indirect) question, so after the question word you keep statement word order (subject then verb), not question inversion. The word “examine” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w11-bas-10',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two friends are checking the cafeteria menu.',
      speakerName: 'Vera',
      speakerImage: 'female-5.webp',
      speakerLine: 'What looks good to you tonight?',
      respondentName: 'Cyrus',
      respondentImage: 'male-5.webp',
      answerPrefix: 'I\'ll',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['the', 'wrap', 'try', 'a burger', 'instead', 'trying', 'mushroom', 'of'],
      correctOrder: ['try', 'the', 'mushroom', 'wrap', 'instead', 'of', 'a burger'],
      // Reported 2026-08-24 by a student who chose the reverse and was marked
      // wrong. Both use the same seven chunks, both correctly leave 'trying'
      // unused, and nothing in "What looks good to you tonight?" favours one
      // dish over the other. 59 of 256 attempts gave this ordering against 63
      // for the key, so it was scoring correct English as wrong.
      acceptedOrders: [
        ['try', 'a burger', 'instead', 'of', 'the', 'mushroom', 'wrap']
      ],
      extraWord: 'trying',
      correctSentence: "I\'ll try the mushroom wrap instead of a burger.",
      grammarPattern: 'future_with_phrase',
      explanation: "The correct sentence is “I'll try the mushroom wrap instead of a burger.” The future (will or be going to) is followed by the base form of the verb, with any time phrase at the end. The word “trying” is an extra distractor that does not belong in the answer.",
      points: 1
    }
  ],

  writeAnEmail: {
    id: 'w11-email-1',
    type: 'write_email',
    directions: 'You have seven minutes to read the situation and write your email. Aim for about 100 to 150 words. Be sure to address every point in the prompt.',
    situation: 'You are running for treasurer of the international students association. Your campaign poster was rejected by the elections committee because it included the school logo, which is reserved for official communications. Voting begins in three days and you need a corrected poster approved.',
    taskInstructions: 'Write an email to the elections committee chair. In your email, do each of the following:',
    requiredPoints: [
      'Acknowledge the reason your poster was rejected.',
      'Explain how quickly you can submit a revised version.',
      'Ask for the fastest path to approval so your poster can go up before voting begins.'
    ],
    recipient: 'elections@state.edu',
    subject: 'Revised treasurer campaign poster',
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
    id: 'w11-disc-1',
    type: 'academic_discussion',
    topicIntro: 'Your professor is teaching a class on media literacy. Write a post responding to the professor\u2019s question.',
    directions: 'In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.',
    professorPrompt: {
      name: 'Professor Boateng',
      image: 'female-4.webp',
      text: 'This week we are looking at how news organizations should handle anonymous sources. Investigative reporters often rely on whistleblowers who would lose their jobs or face retaliation if named. Critics say that anonymous sourcing makes it easier for false claims to spread because the public cannot verify the source. Some outlets now require multiple anonymous sources, while others want to ban anonymous sourcing entirely. Should serious news outlets continue using anonymous sources, or should they require named sources for any major story?'
    },
    studentResponses: [
      {
        name: 'Imen',
        image: 'female-3.webp',
        text: 'I support the continued use of anonymous sources, with strong safeguards. Many of the most important stories of recent decades, such as the Watergate investigation and the Panama Papers, depended on insiders who would have been fired or worse if named. Editors should require multiple corroborating sources and document everything internally, but a complete ban would silence the people most likely to expose serious wrongdoing.'
      },
      {
        name: 'Roberto',
        image: 'male-1.webp',
        text: 'I think outlets should require named sources for serious accusations. Public trust in news has fallen sharply, and stories that rest on faceless sources are easy targets for accusations of bias. Even with internal verification, readers cannot test the claims themselves. Reporters could still protect identities for background context, but any story accusing a person or institution should rest on people willing to stand by their statements.'
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

window.WRITING_TEST_11 = window.WRITING_SECTION_11;
