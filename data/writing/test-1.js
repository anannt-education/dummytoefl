/**
 * TOEFL Writing Practice Test 1 — 2026 format
 *
 *   Module 1: Build a Sentence (10 items, 6:30 total)
 *   Module 2: Write an Email (7:00)
 *   Module 3: Write for an Academic Discussion (10:00)
 *
 * Shape notes
 * -----------
 * Build-a-Sentence items use two avatars: a speaker who asks/states the
 * prompt, and a respondent whose line is a sentence with blanks that the
 * test-taker fills by dragging word chunks. The correct order is checked
 * against `correctOrder` (the chunks in the order that fills the blanks).
 * Any chunk listed in `wordChunks` but not in `correctOrder` is an extra.
 */
window.WRITING_SECTION_1 = {
  id: 'writing-test-1',
  title: 'TOEFL Writing Practice Test 1',
  format: '2026',

  // =========================================================================
  //  MODULE 1 — Build a Sentence (10 items, 390 seconds total)
  // =========================================================================
  buildASentence: [
    {
      id: 'w1-bas-1',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two roommates are talking in the kitchen.',
      speakerName: 'Amelia',
      speakerImage: 'female-1.webp',
      speakerLine: 'Where did you get this recipe?',
      respondentName: 'Daniel',
      respondentImage: 'male-1.webp',
      answerPrefix: 'I',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['I watched', 'got', 'cooked', 'it', 'cooking show', 'from a', 'that'],
      correctOrder: ['got', 'it', 'from a', 'cooking show', 'that', 'I watched'],
      extraWord: 'cooked',
      correctSentence: "I got it from a cooking show that I watched.",
      grammarPattern: 'past_simple_relative_clause',
      explanation: "The correct sentence is “I got it from a cooking show that I watched.” The relative clause (introduced by that, who, which, or when) comes directly after the noun it describes. The word “cooked” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w1-bas-2',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two classmates are discussing their schedules.',
      speakerName: 'Ravi',
      speakerImage: 'male-2.webp',
      speakerLine: 'I heard Emma started a new job last month.',
      respondentName: 'Sophie',
      respondentImage: 'female-2.webp',
      answerPrefix: 'Did she',
      answerSuffix: '?',
      numBlanks: 6,
      wordChunks: ['explain', 'she\'s', 'you', 'doing', 'tell', 'there', 'what'],
      correctOrder: ['tell', 'you', 'what', 'she\'s', 'doing', 'there'],
      extraWord: 'explain',
      correctSentence: "Did she tell you what she\'s doing there?",
      grammarPattern: 'embedded_wh_question',
      explanation: "The correct sentence is “Did she tell you what she's doing there?” This is an embedded (indirect) question, so after the question word you keep statement word order (subject then verb), not question inversion. The word “explain” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w1-bas-3',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is talking with her academic advisor.',
      speakerName: 'Dr. Nolan',
      speakerImage: 'male-3.webp',
      speakerLine: 'Have you decided which courses to take next semester?',
      respondentName: 'Priya',
      respondentImage: 'female-3.webp',
      answerPrefix: 'I\'m still',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['to take', 'trying', 'remember', 'which electives', 'out', 'to', 'figure'],
      correctOrder: ['trying', 'to', 'figure', 'out', 'which electives', 'to take'],
      extraWord: 'remember',
      correctSentence: "I\'m still trying to figure out which electives to take.",
      grammarPattern: 'gerund_with_embedded_wh',
      explanation: "The correct sentence is “I'm still trying to figure out which electives to take.” This is an embedded (indirect) question, so after the question word you keep statement word order (subject then verb), not question inversion. The word “remember” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w1-bas-4',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A visitor is asking for directions on campus.',
      speakerName: 'Visitor',
      speakerImage: 'male-4.webp',
      speakerLine: 'Excuse me, I am looking for the Chemistry building.',
      respondentName: 'Jenna',
      respondentImage: 'female-4.webp',
      answerPrefix: 'It\'s',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['the library', 'red', 'across from', 'building', 'the', 'tall', 'stands'],
      correctOrder: ['the', 'tall', 'red', 'building', 'across from', 'the library'],
      extraWord: 'stands',
      correctSentence: "It\'s the tall red building across from the library.",
      grammarPattern: 'present_simple_relative_phrase',
      explanation: "The correct sentence is “It's the tall red building across from the library.” The relative clause (introduced by that, who, which, or when) comes directly after the noun it describes. The word “stands” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w1-bas-5',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is speaking with a librarian.',
      speakerName: 'Librarian',
      speakerImage: 'female-5.webp',
      speakerLine: 'I noticed your book was returned two days late.',
      respondentName: 'Tomas',
      respondentImage: 'male-5.webp',
      answerPrefix: 'I\'m sorry,',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['forgot', 'it', 'I', 'returning', 'about', 'on time', 'completely', 'remember'],
      correctOrder: ['I', 'completely', 'forgot', 'about', 'returning', 'it', 'on time'],
      extraWord: 'remember',
      correctSentence: "I\'m sorry, I completely forgot about returning it on time.",
      grammarPattern: 'past_simple_with_adverb',
      explanation: "The correct sentence is “I'm sorry, I completely forgot about returning it on time.” Standard English word order applies here: subject, then verb, then object, with any time or place phrase at the end. The word “remember” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w1-bas-6',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A professor is greeting a student at office hours.',
      speakerName: 'Prof. Reyes',
      speakerImage: 'female-6.webp',
      speakerLine: 'You wanted to talk about your research paper?',
      respondentName: 'Marcus',
      respondentImage: 'male-6.webp',
      answerPrefix: 'Yes, I was hoping',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['look at', 'my thesis', 'advice', 'some', 'get', 'to', 'on'],
      correctOrder: ['to', 'get', 'some', 'advice', 'on', 'my thesis'],
      extraWord: 'look at',
      correctSentence: "Yes, I was hoping to get some advice on my thesis.",
      grammarPattern: 'past_continuous_infinitive',
      explanation: "The correct sentence is “Yes, I was hoping to get some advice on my thesis.” Past continuous uses was or were plus the -ing form. The word “look at” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w1-bas-7',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two friends are planning a weekend trip.',
      speakerName: 'Leo',
      speakerImage: 'male-1.webp',
      speakerLine: 'Do you know what time the train leaves on Saturday?',
      respondentName: 'Hana',
      respondentImage: 'female-2.webp',
      answerPrefix: 'I think',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['morning', 'train', 'arrives', 'eight', 'around', 'in the', 'the', 'leaves'],
      correctOrder: ['the', 'train', 'leaves', 'around', 'eight', 'in the', 'morning'],
      extraWord: 'arrives',
      correctSentence: "I think the train leaves around eight in the morning.",
      grammarPattern: 'present_simple_statement',
      explanation: "The correct sentence is “I think the train leaves around eight in the morning.” Standard English word order applies here: subject, then verb, then object, with any time or place phrase at the end. The word “arrives” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w1-bas-8',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is emailing a classmate about a group project.',
      speakerName: 'Classmate',
      speakerImage: 'female-3.webp',
      speakerLine: 'When can we meet to finish the slides?',
      respondentName: 'Ethan',
      respondentImage: 'male-2.webp',
      answerPrefix: 'I',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['should', 'be', 'arrive', 'any time', 'after', 'my lab', 'available'],
      correctOrder: ['should', 'be', 'available', 'any time', 'after', 'my lab'],
      extraWord: 'arrive',
      correctSentence: "I should be available any time after my lab.",
      grammarPattern: 'modal_present',
      explanation: "The correct sentence is “I should be available any time after my lab.” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “arrive” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w1-bas-9',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is speaking with a career advisor.',
      speakerName: 'Advisor',
      speakerImage: 'male-4.webp',
      speakerLine: 'Have you submitted any internship applications yet?',
      respondentName: 'Olivia',
      respondentImage: 'female-4.webp',
      answerPrefix: 'I was told',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['that', 'revise', 'my resume', 'I should', 'apply', 'before', 'applying'],
      correctOrder: ['that', 'I should', 'revise', 'my resume', 'before', 'applying'],
      acceptedOrders: [
        ['that', 'before', 'applying', 'I should', 'revise', 'my resume']
      ],
      extraWord: 'apply',
      correctSentence: "I was told that I should revise my resume before applying.",
      grammarPattern: 'reported_speech_with_modal',
      explanation: "The correct sentence is “I was told that I should revise my resume before applying.” This is reported (indirect) speech, so the clause keeps statement word order and the tense usually shifts back. The word “apply” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w1-bas-10',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are discussing an upcoming exam.',
      speakerName: 'Noah',
      speakerImage: 'male-5.webp',
      speakerLine: 'Are you nervous about the midterm on Friday?',
      respondentName: 'Isabella',
      respondentImage: 'female-5.webp',
      answerPrefix: 'Honestly,',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['pretty', 'been', 'forgot', 'for it', 'I\'ve', 'studying', 'hard'],
      correctOrder: ['I\'ve', 'been', 'studying', 'pretty', 'hard', 'for it'],
      acceptedOrders: [
        ['I\'ve', 'been', 'studying', 'for it', 'pretty', 'hard']
      ],
      extraWord: 'forgot',
      correctSentence: "Honestly, I\'ve been studying pretty hard for it.",
      grammarPattern: 'present_perfect_continuous',
      explanation: "The correct sentence is “Honestly, I've been studying pretty hard for it.” Present perfect uses have or has plus the past participle to connect a past action to the present. The word “forgot” is an extra distractor that does not belong in the answer.",
      points: 1
    }
  ],

  // =========================================================================
  //  MODULE 2 — Write an Email (420 seconds / 7 minutes)
  // =========================================================================
  writeAnEmail: {
    id: 'w1-email-1',
    type: 'write_email',
    directions: 'You have seven minutes to read the situation and write your email. Aim for about 100 to 150 words. Be sure to address every point in the prompt.',
    situation: 'You are taking an online course in 20th-century history. Over the past week, you have tried several times to upload your final essay through the class portal, but every attempt ends with the same error message. The essay is due tomorrow morning, and Professor Mitchell has said it counts for 30% of your course grade.',
    taskInstructions: 'Write an email to Professor Mitchell. In your email, do each of the following:',
    requiredPoints: [
      'Explain why you are writing and how important the essay is.',
      'Describe the problem you have had while trying to upload the file.',
      'Ask about another way you can submit the essay in time.'
    ],
    recipient: 'profmitchell@state.edu',
    subject: 'Submitting my 20th-century history essay',
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
    id: 'w1-disc-1',
    type: 'academic_discussion',
    topicIntro: 'Your professor is teaching a class on public policy. Write a post responding to the professor\u2019s question.',
    directions: 'In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.',
    professorPrompt: {
      name: 'Professor Alvarez',
      image: 'male-3.webp',
      text: 'This week we are looking at the way cities encourage people to change their habits. Some governments are considering adding a so-called sin tax to unhealthy foods, such as sugary drinks and fast food. Supporters argue that the tax will reduce lifestyle-related diseases and raise money for public health programs. Critics reply that it is unfair to low-income families, who spend a larger share of their income on food and often live in neighborhoods with few healthy options. What do you think? Should cities adopt a sin tax on unhealthy foods, or not?'
    },
    studentResponses: [
      {
        name: 'Mikhail',
        image: 'male-5.webp',
        text: 'I am not in favor of a sin tax on unhealthy food. As the professor mentioned, these taxes often hit low-income families the hardest. In some American cities there are food deserts where many residents do not own a car and live far from a full supermarket, so they depend on fast food and convenience stores. Taxing those meals would not give them better choices. It would just make the only food they can reach more expensive.'
      },
      {
        name: 'Kaitlyn',
        image: 'female-4.webp',
        text: 'I support the idea of a tax on unhealthy products. Fast food and sugary drinks contain large amounts of sugar, salt, and saturated fat, which contribute to heart disease and type 2 diabetes. A tax would raise the cost of these items and push people toward healthier choices. The money raised could fund school lunch programs or subsidies for supermarkets that open in neighborhoods without one.'
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
window.WRITING_TEST_1 = window.WRITING_SECTION_1;
