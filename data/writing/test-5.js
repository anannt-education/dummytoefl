/**
 * TOEFL Writing Practice Test 5 — 2026 format
 */
window.WRITING_SECTION_5 = {
  id: 'writing-test-5',
  title: 'TOEFL Writing Practice Test 5',
  format: '2026',

  buildASentence: [
    {
      id: 'w5-bas-1',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are talking about an upcoming concert on campus.',
      speakerName: 'Sasha',
      speakerImage: 'female-1.webp',
      speakerLine: 'Did you manage to get tickets for the orchestra performance?',
      respondentName: 'Mason',
      respondentImage: 'male-1.webp',
      answerPrefix: 'I',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['for', 'waiting', 'an hour', 'waited', 'line', 'almost', 'in'],
      correctOrder: ['waited', 'in', 'line', 'for', 'almost', 'an hour'],
      acceptedOrders: [
        ['waited', 'for', 'almost', 'an hour', 'in', 'line']
      ],
      extraWord: 'waiting',
      correctSentence: "I waited in line for almost an hour.",
      grammarPattern: 'past_simple_with_duration',
      explanation: "The correct sentence is “I waited in line for almost an hour.” The time expression (when, before, after, while, or a duration) attaches to the main clause without changing its internal order. The word “waiting” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w5-bas-2',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is at the campus print center.',
      speakerName: 'Print Tech',
      speakerImage: 'male-2.webp',
      speakerLine: 'Would you like single-sided or double-sided printing today?',
      respondentName: 'Petra',
      respondentImage: 'female-2.webp',
      answerPrefix: 'Double-sided,',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['in', 'fits', 'so', 'fitting', 'my bag', 'that', 'everything'],
      correctOrder: ['so', 'that', 'everything', 'fits', 'in', 'my bag'],
      extraWord: 'fitting',
      correctSentence: "Double-sided, so that everything fits in my bag.",
      grammarPattern: 'purpose_clause',
      explanation: "The correct sentence is “Double-sided, so that everything fits in my bag.” The purpose clause (to or so that) explains why and follows the main action. The word “fitting” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w5-bas-3',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A graduate student is meeting with the department chair.',
      speakerName: 'Chair Davis',
      speakerImage: 'male-3.webp',
      speakerLine: 'Have you considered presenting your research at the spring conference?',
      respondentName: 'Vera',
      respondentImage: 'female-3.webp',
      answerPrefix: 'I want',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['a few', 'points', 'first', 'data', 'gathered', 'more', 'to', 'gather'],
      correctOrder: ['to', 'gather', 'a few', 'more', 'data', 'points', 'first'],
      acceptedOrders: [
        ['to', 'first', 'gather', 'a few', 'more', 'data', 'points']
      ],
      extraWord: 'gathered',
      correctSentence: "I want to gather a few more data points first.",
      grammarPattern: 'modal_with_infinitive',
      explanation: "The correct sentence is “I want to gather a few more data points first.” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “gathered” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w5-bas-4',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two roommates are dividing chores for the week.',
      speakerName: 'Dahlia',
      speakerImage: 'female-4.webp',
      speakerLine: 'Could you take care of the dishes if I handle the laundry?',
      respondentName: 'Owen',
      respondentImage: 'male-4.webp',
      answerPrefix: 'I\'ll',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['them', 'wash', 'after', 'study', 'washing', 'session', 'my'],
      correctOrder: ['wash', 'them', 'after', 'my', 'study', 'session'],
      extraWord: 'washing',
      correctSentence: "I\'ll wash them after my study session.",
      grammarPattern: 'future_simple_with_phrase',
      explanation: "The correct sentence is “I'll wash them after my study session.” The future (will or be going to) is followed by the base form of the verb, with any time phrase at the end. The word “washing” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w5-bas-5',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is checking in at the campus career fair.',
      speakerName: 'Recruiter',
      speakerImage: 'female-5.webp',
      speakerLine: 'What kind of position are you hoping to find today?',
      respondentName: 'Adrian',
      respondentImage: 'male-5.webp',
      answerPrefix: 'I am looking for',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['internships', 'over the summer', 'helps', 'analysis', 'data', 'involve', 'that'],
      correctOrder: ['internships', 'that', 'involve', 'data', 'analysis', 'over the summer'],
      acceptedOrders: [
        ['internships', 'over the summer', 'that', 'involve', 'data', 'analysis']
      ],
      extraWord: 'helps',
      correctSentence: "I am looking for internships that involve data analysis over the summer.",
      grammarPattern: 'relative_clause_present_simple',
      explanation: "The correct sentence is “I am looking for internships that involve data analysis over the summer.” The relative clause (introduced by that, who, which, or when) comes directly after the noun it describes. The word “helps” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w5-bas-6',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is asking the professor about a paper extension.',
      speakerName: 'Prof. Holt',
      speakerImage: 'male-6.webp',
      speakerLine: 'Why are you requesting more time for the assignment?',
      respondentName: 'Imani',
      respondentImage: 'female-6.webp',
      answerPrefix: 'I had to',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['younger', 'take', 'caring', 'of', 'care', 'sister', 'my'],
      correctOrder: ['take', 'care', 'of', 'my', 'younger', 'sister'],
      extraWord: 'caring',
      correctSentence: "I had to take care of my younger sister.",
      grammarPattern: 'past_modal_with_phrasal_verb',
      explanation: "The correct sentence is “I had to take care of my younger sister.” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “caring” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w5-bas-7',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two students are walking back from the lab.',
      speakerName: 'Eitan',
      speakerImage: 'male-1.webp',
      speakerLine: 'How did your experiment turn out today?',
      respondentName: 'Selma',
      respondentImage: 'female-2.webp',
      answerPrefix: 'The reaction',
      answerSuffix: '.',
      numBlanks: 6,
      wordChunks: ['ran', 'a little', 'longer', 'expected', 'reactions', 'we', 'than'],
      correctOrder: ['ran', 'a little', 'longer', 'than', 'we', 'expected'],
      extraWord: 'reactions',
      correctSentence: "The reaction ran a little longer than we expected.",
      grammarPattern: 'past_simple_comparative',
      explanation: "The correct sentence is “The reaction ran a little longer than we expected.” The comparative uses an -er ending or more plus the adjective, usually followed by than. The word “reactions” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w5-bas-8',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is asking the dorm advisor about room changes.',
      speakerName: 'Advisor Cole',
      speakerImage: 'female-3.webp',
      speakerLine: 'Have you submitted a request for the room transfer?',
      respondentName: 'Karim',
      respondentImage: 'male-1.webp',
      answerPrefix: 'I want',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['discuss', 'roommate', 'to', 'it', 'my', 'discussing', 'with', 'first'],
      correctOrder: ['to', 'discuss', 'it', 'with', 'my', 'roommate', 'first'],
      acceptedOrders: [
        ['to', 'discuss', 'it', 'first', 'with', 'my', 'roommate'],
        ['to', 'first', 'discuss', 'it', 'with', 'my', 'roommate']
      ],
      extraWord: 'discussing',
      correctSentence: "I want to discuss it with my roommate first.",
      grammarPattern: 'modal_with_infinitive',
      explanation: "The correct sentence is “I want to discuss it with my roommate first.” A modal verb (can, should, must, would, will) is always followed by the base form of the next verb. The word “discussing” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w5-bas-9',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'Two friends are planning a study marathon.',
      speakerName: 'Niko',
      speakerImage: 'male-4.webp',
      speakerLine: 'When do you want to start studying for the final?',
      respondentName: 'Asha',
      respondentImage: 'female-4.webp',
      answerPrefix: 'How about',
      answerSuffix: '?',
      numBlanks: 7,
      wordChunks: ['the', 'when', 'building', 'morning', 'quiets', 'quiet', 'is', 'Saturday'],
      correctOrder: ['Saturday', 'morning', 'when', 'the', 'building', 'is', 'quiet'],
      extraWord: 'quiets',
      correctSentence: "How about Saturday morning when the building is quiet?",
      grammarPattern: 'time_clause_when',
      explanation: "The correct sentence is “How about Saturday morning when the building is quiet?” The time expression (when, before, after, while, or a duration) attaches to the main clause without changing its internal order. The word “quiets” is an extra distractor that does not belong in the answer.",
      points: 1
    },
    {
      id: 'w5-bas-10',
      type: 'build_a_sentence',
      prompt: 'Make an appropriate sentence.',
      context: 'A student is presenting a quick update at a club meeting.',
      speakerName: 'Club Member',
      speakerImage: 'female-5.webp',
      speakerLine: 'Has the design for the new T-shirts been approved?',
      respondentName: 'Quinn',
      respondentImage: 'male-5.webp',
      answerPrefix: 'It',
      answerSuffix: '.',
      numBlanks: 7,
      wordChunks: ['be', 'approved', 'ready', 'been', 'has', 'and', 'shirts', 'will'],
      correctOrder: ['has', 'been', 'approved', 'and', 'will', 'be', 'ready'],
      extraWord: 'shirts',
      correctSentence: "It has been approved and will be ready.",
      grammarPattern: 'present_perfect_passive_compound',
      explanation: "The correct sentence is “It has been approved and will be ready.” This is a passive structure: the thing affected comes first, followed by a form of be and the past participle. The word “shirts” is an extra distractor that does not belong in the answer.",
      points: 1
    }
  ],

  writeAnEmail: {
    id: 'w5-email-1',
    type: 'write_email',
    directions: 'You have seven minutes to read the situation and write your email. Aim for about 100 to 150 words. Be sure to address every point in the prompt.',
    situation: 'You and three classmates are working on a research presentation due in two weeks. One member has missed every group meeting so far and is not responding to messages. The professor offered to be contacted only if the team has tried to resolve the issue first.',
    taskInstructions: 'Write an email to the missing group member. In your email, do each of the following:',
    requiredPoints: [
      'Tell them what the team has accomplished and what is still left.',
      'Explain what part of the work has been assigned to them.',
      'Ask for a clear response by a specific date so the group can plan next steps.'
    ],
    recipient: 'classmate@state.edu',
    subject: 'Group project update and your section',
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
    id: 'w5-disc-1',
    type: 'academic_discussion',
    topicIntro: 'Your professor is teaching a class on labor economics. Write a post responding to the professor\u2019s question.',
    directions: 'In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.',
    professorPrompt: {
      name: 'Professor Ahmadi',
      image: 'male-2.webp',
      text: 'This week we are discussing the four-day workweek. Some companies have shifted from a five-day to a four-day schedule without cutting pay, reporting that workers are happier and just as productive. Others worry that compressing five days of work into four leads to longer days, more stress, and gaps in customer service. Should companies generally adopt a four-day workweek, or stick with the standard five-day model? Make your case.'
    },
    studentResponses: [
      {
        name: 'Cara',
        image: 'female-3.webp',
        text: 'I support a four-day workweek. Trials in Iceland and the United Kingdom showed that productivity stayed steady or even improved when employees had three full days off. Workers used the extra day for medical appointments, child care, and rest, which reduced burnout and sick leave. The model would not work for every industry, but office-based companies could clearly benefit.'
      },
      {
        name: 'Marek',
        image: 'male-1.webp',
        text: 'I am skeptical of the four-day workweek. Many service jobs cannot simply close one extra day, so the cost falls on retail and restaurant workers who would still cover the same hours. In office jobs, the trial results often involved careful management changes that may not translate when companies just reduce hours without restructuring. The five-day model still works for most industries.'
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

window.WRITING_TEST_5 = window.WRITING_SECTION_5;
