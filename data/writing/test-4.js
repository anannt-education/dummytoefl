/**
 * TOEFL Writing Practice Test 4 — 2026 format
 */
window.WRITING_SECTION_4 = {
  id: 'writing-test-4',
  title: 'TOEFL Writing Practice Test 4',
  format: '2026',

  buildASentence: [
    {
      id: 'w4-bas-1',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is asking a classmate about a missed class.',
      speakerName: 'Greta',
      speakerImage: 'female-1.webp',
      speakerLine: 'Could you tell me what we covered while I was absent yesterday?',
      respondentName: 'Theo',
      respondentImage: 'male-1.webp',
      answerPrefix: 'We',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['went', 'two', 'chapter four', 'have', 'from', 'over', 'experiments'],
      correctOrder: ['went', 'over', 'two', 'experiments', 'from', 'chapter four'],
      extraWord: 'have',
      correctSentence: "We went over two experiments from chapter four.",
      grammarPattern: 'past_simple_phrasal_verb',
      explanation: "The correct sentence is “We went over two experiments from chapter four.” Keep the phrasal verb together (verb plus its particle) in the correct place. The word “have” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w4-bas-2',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is signing up for a campus club.',
      speakerName: 'Club President',
      speakerImage: 'male-2.webp',
      speakerLine: 'Are you available for the planning meeting next Wednesday evening?',
      respondentName: 'Alma',
      respondentImage: 'female-2.webp',
      answerPrefix: 'I am,',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['arriving', 'a little', 'late', 'I', 'might', 'although', 'arrive'],
      correctOrder: ['although', 'I', 'might', 'arrive', 'a little', 'late'],
      extraWord: 'arriving',
      correctSentence: "I am, although I might arrive a little late.",
      grammarPattern: 'modal_with_concession',
      explanation: "The correct sentence is “I am, although I might arrive a little late.” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “arriving” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w4-bas-3',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two friends are looking over a class schedule.',
      speakerName: 'Bruno',
      speakerImage: 'male-3.webp',
      speakerLine: 'Did you sign up for the early morning chemistry section?',
      respondentName: 'Maya',
      respondentImage: 'female-3.webp',
      answerPrefix: 'I',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['cannot', 'awake', 'that', 'imagine', 'early', 'sit', 'staying'],
      correctOrder: ['cannot', 'imagine', 'staying', 'awake', 'that', 'early'],
      extraWord: 'sit',
      correctSentence: "I cannot imagine staying awake that early.",
      grammarPattern: 'modal_with_gerund',
      explanation: "The correct sentence is “I cannot imagine staying awake that early.” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “sit” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w4-bas-4',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is asking the librarian for help.',
      speakerName: 'Librarian',
      speakerImage: 'female-4.webp',
      speakerLine: 'Are you looking for something specific or just browsing today?',
      respondentName: 'Adel',
      respondentImage: 'male-4.webp',
      answerPrefix: 'I\'m looking',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['in Asia', 'books', 'urban', 'for', 'journals', 'migration', 'about'],
      correctOrder: ['for', 'journals', 'about', 'urban', 'migration', 'in Asia'],
      // 'books' was the designated distractor while the librarian's own line said
      // "a specific book", so the prompt pointed at the one chunk the key excluded.
      // 273 of 503 attempts built this sentence, and it is ordinary English. The
      // line no longer primes it, and it is accepted either way rather than
      // retroactively becoming wrong for anyone who already chose it.
      acceptedOrders: [['for', 'books', 'about', 'urban', 'migration', 'in Asia']],
      extraWord: 'books',
      correctSentence: "I\'m looking for journals about urban migration in Asia.",
      grammarPattern: 'present_continuous_with_phrase',
      explanation: "The sentence runs “looking for” plus what you want plus “about” plus the topic: “I’m looking for journals about urban migration in Asia.” The chunk “books” fits the same slot and reads just as naturally, so either “journals” or “books” is accepted here.",
      points: 1
    },
    {
      id: 'w4-bas-5',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are choosing groups for a project.',
      speakerName: 'Pia',
      speakerImage: 'female-5.webp',
      speakerLine: 'Do you want to work with the same partners as last time?',
      respondentName: 'Andre',
      respondentImage: 'male-5.webp',
      answerPrefix: 'I would rather',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['a', 'this', 'try', 'time', 'team', 'tries', 'different'],
      correctOrder: ['try', 'a', 'different', 'team', 'this', 'time'],
      extraWord: 'tries',
      correctSentence: "I would rather try a different team this time.",
      grammarPattern: 'preference_modal',
      explanation: "The correct sentence is “I would rather try a different team this time.” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “tries” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w4-bas-6',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is meeting with a study abroad advisor.',
      speakerName: 'Advisor Quinn',
      speakerImage: 'female-6.webp',
      speakerLine: 'Have you decided which country you would like to study in?',
      respondentName: 'Tom',
      respondentImage: 'male-6.webp',
      answerPrefix: 'I\'m',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['toward', 'Argentina', 'of', 'wanted', 'because', 'the language', 'leaning'],
      correctOrder: ['leaning', 'toward', 'Argentina', 'because', 'of', 'the language'],
      extraWord: 'wanted',
      correctSentence: "I\'m leaning toward Argentina because of the language.",
      grammarPattern: 'present_continuous_with_reason',
      explanation: "The correct sentence is “I'm leaning toward Argentina because of the language.” The continuous form uses a form of be plus the -ing form of the verb. The word “wanted” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w4-bas-7',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A new student is asking about parking on campus.',
      speakerName: 'Vera',
      speakerImage: 'female-1.webp',
      speakerLine: 'Where do most students park during the morning?',
      respondentName: 'Mateo',
      respondentImage: 'male-2.webp',
      answerPrefix: 'Most people',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['park', 'nine', 'before', 'south', 'the', 'parking', 'lot', 'in'],
      correctOrder: ['park', 'in', 'the', 'south', 'lot', 'before', 'nine'],
      extraWord: 'parking',
      correctSentence: "Most people park in the south lot before nine.",
      grammarPattern: 'present_simple_routine',
      explanation: "The correct sentence is “Most people park in the south lot before nine.” Standard English word order applies here: subject, then verb, then object, with any time or place phrase at the end. The word “parking” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w4-bas-8',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is talking with the international office staff.',
      speakerName: 'Officer Park',
      speakerImage: 'female-3.webp',
      speakerLine: 'Have you renewed your visa for next semester yet?',
      respondentName: 'Imran',
      respondentImage: 'male-1.webp',
      answerPrefix: 'I',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['submitted', 'morning', 'the', 'just', 'form', 'submit', 'this'],
      correctOrder: ['just', 'submitted', 'the', 'form', 'this', 'morning'],
      // "I submitted the form just this morning." is equally natural: "just"
      // can sit before the verb or before the time phrase it narrows.
      acceptedOrders: [
        ['submitted', 'the', 'form', 'just', 'this', 'morning']
      ],
      extraWord: 'submit',
      correctSentence: "I just submitted the form this morning.",
      grammarPattern: 'past_simple_recent',
      explanation: "The correct sentence is “I just submitted the form this morning.” Standard English word order applies here: subject, then verb, then object, with any time or place phrase at the end. The word “submit” is an extra distractor that does not belong in the answer. “I submitted the form just this morning” is accepted too, because “just” is standard before the verb or before the time phrase.",
      points: 1
    },
    {
      id: 'w4-bas-9',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is calling the IT help desk.',
      speakerName: 'IT Staff',
      speakerImage: 'male-4.webp',
      speakerLine: 'When did you first notice that your laptop was running slowly?',
      respondentName: 'Riya',
      respondentImage: 'female-2.webp',
      answerPrefix: 'It started',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['installed', 'install', 'I', 'updates', 'after', 'the', 'right'],
      correctOrder: ['right', 'after', 'I', 'installed', 'the', 'updates'],
      extraWord: 'install',
      correctSentence: "It started right after I installed the updates.",
      grammarPattern: 'time_clause_past_simple',
      explanation: "The correct sentence is “It started right after I installed the updates.” The time expression (when, before, after, while, or a duration) attaches to the main clause without changing its internal order. The word “install” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w4-bas-10',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are talking about a popular online course.',
      speakerName: 'Naomi',
      speakerImage: 'female-5.webp',
      speakerLine: 'Have you tried that free course on data visualization?',
      respondentName: 'Kenji',
      respondentImage: 'male-5.webp',
      answerPrefix: 'I haven\'t,',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['it', 'have', 'classmates', 'recommended', 'few', 'a', 'recommend', 'but'],
      correctOrder: ['but', 'a', 'few', 'classmates', 'have', 'recommended', 'it'],
      extraWord: 'recommend',
      correctSentence: "I haven\'t, but a few classmates have recommended it.",
      grammarPattern: 'present_perfect_with_object',
      explanation: "The correct sentence is “I haven't, but a few classmates have recommended it.” Present perfect uses have or has plus the past participle to connect a past action to the present. The word “recommend” is an extra distractor that does not belong in the answer.",
      points: 1
    }
  ],

  writeAnEmail: {
    id: 'w4-email-1',
    type: 'write_email',
    directions: 'You have seven minutes to read the situation and write your email. Aim for about 100 to 150 words. Be sure to address every point in the prompt.',
    situation: 'You bought a parking permit for the on-campus student lot at the start of the semester. Last week the parking office repainted the lot lines and the spaces are now reserved for graduate students. You commute to campus every weekday and have no nearby alternative.',
    taskInstructions: 'Write an email to the parking office. In your email, do each of the following:',
    requiredPoints: [
      'Explain that you bought a permit and depend on the lot for daily commuting.',
      'Describe how the new restriction affects your ability to attend class on time.',
      'Ask whether the office can offer a replacement permit, a refund, or another lot you can use.'
    ],
    recipient: 'parking@state.edu',
    subject: 'Lot reassignment and my current permit',
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
    id: 'w4-disc-1',
    type: 'academic_discussion',
    topicIntro: 'Your professor is teaching a class on environmental policy. Write a post responding to the professor\u2019s question.',
    directions: 'In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.',
    professorPrompt: {
      name: 'Professor Reyes',
      image: 'male-4.webp',
      text: 'This week we are looking at single-use plastics. Several countries have already banned plastic bags, straws, and disposable cutlery, arguing that these items pile up in landfills and oceans. Others argue that bans are symbolic, that paper or compostable replacements have their own environmental costs, and that consumers should be free to choose. In your view, should governments ban single-use plastics outright, or focus on recycling and consumer choice? Defend your position.'
    },
    studentResponses: [
      {
        name: 'Olu',
        image: 'male-3.webp',
        text: 'I think outright bans are necessary. Recycling has been promoted for decades, yet less than ten percent of plastic ever produced has actually been recycled. The rest ends up in landfills, the ocean, or burned. A clear ban forces companies to invent better alternatives quickly, the way the EU plastic straw ban accelerated paper and silicone replacements within only two years.'
      },
      {
        name: 'Hannah',
        image: 'female-4.webp',
        text: 'I prefer the consumer-choice approach. A blanket ban can hurt small businesses that cannot afford pricier replacements and can shift waste to other materials whose production also harms the environment. Better policies would tax single-use plastics, fund recycling infrastructure, and require clear labels so customers can make informed decisions, like Sweden has done with its deposit return system.'
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

window.WRITING_TEST_4 = window.WRITING_SECTION_4;
