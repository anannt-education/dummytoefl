/**
 * TOEFL Writing Practice Test 17, 2026 format
 *
 *   Module 1: Build a Sentence (10 items, 6:30 total)
 *   Module 2: Write an Email (7:00)
 *   Module 3: Write for an Academic Discussion (10:00)
 *
 * Authored against docs/benchmark: official item counts, prompt lengths and
 * post structure taken from the Official Guide.
 *
 * Items with more than one grammatical chunk order carry acceptedOrders. See
 * js/score-calculator.js, where a missing alternative is treated as a scoring
 * bug rather than a grammar call.
 */

window.WRITING_SECTION_17 = {
  "id": "writing-test-17",
  "title": "TOEFL Writing Practice Test 17",
  "format": "2026",
  "buildASentence": [
    {
      "id": "w17-bas-1",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking outside the lecture hall after class.",
      "speakerName": "Hana",
      "speakerImage": "female-1.webp",
      "speakerLine": "Do you know anyone who can help me with statistics?",
      "respondentName": "Tomas",
      "respondentImage": "male-1.webp",
      "answerPrefix": "I",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "who",
        "teaching",
        "have",
        "in the math center",
        "a friend",
        "students",
        "tutors"
      ],
      "correctOrder": [
        "have",
        "a friend",
        "who",
        "tutors",
        "students",
        "in the math center"
      ],
      "extraWord": "teaching",
      "correctSentence": "I have a friend who tutors students in the math center.",
      "grammarPattern": "defining_relative_clause",
      "explanation": "The correct sentence is “I have a friend who tutors students in the math center.” The relative pronoun (who, that, which) comes directly after the noun it describes, and the verb inside the relative clause agrees with that noun. The word “teaching” is an extra distractor that does not belong in the answer.",
      "points": 1,
      "acceptedOrders": [
        [
          "have",
          "a friend",
          "in the math center",
          "who",
          "tutors",
          "students"
        ]
      ]
    },
    {
      "id": "w17-bas-2",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two roommates are talking about a message from their landlord.",
      "speakerName": "Lucas",
      "speakerImage": "male-2.webp",
      "speakerLine": "Did the building manager say anything about the broken elevator?",
      "respondentName": "Ingrid",
      "respondentImage": "female-2.webp",
      "answerPrefix": "She",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "fixed",
        "said",
        "would be",
        "me",
        "told",
        "by Friday",
        "that it"
      ],
      "correctOrder": [
        "told",
        "me",
        "that it",
        "would be",
        "fixed",
        "by Friday"
      ],
      "extraWord": "said",
      "correctSentence": "She told me that it would be fixed by Friday.",
      "grammarPattern": "reported_speech",
      "explanation": "The correct sentence is “She told me that it would be fixed by Friday.” In reported speech, tell takes a person directly after it (tell me), while say does not, and the original will shifts back to would. The word “said” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w17-bas-3",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two friends are comparing two apartments near the campus gates.",
      "speakerName": "Yusuf",
      "speakerImage": "male-3.webp",
      "speakerLine": "So which place are you going to take?",
      "respondentName": "Mei",
      "respondentImage": "female-3.webp",
      "answerPrefix": "I think the second apartment is",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "than",
        "the one",
        "bigger",
        "yesterday",
        "a lot",
        "more big",
        "we saw"
      ],
      "correctOrder": [
        "a lot",
        "bigger",
        "than",
        "the one",
        "we saw",
        "yesterday"
      ],
      "extraWord": "more big",
      "correctSentence": "I think the second apartment is a lot bigger than the one we saw yesterday.",
      "grammarPattern": "comparative_with_intensifier",
      "explanation": "The correct sentence is “I think the second apartment is a lot bigger than the one we saw yesterday.” Short adjectives form the comparative with the ending -er, not with more, and an intensifier such as a lot or much goes before the comparative. The words “more big” are an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w17-bas-4",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "A student is talking with her advisor about a study abroad program.",
      "speakerName": "Dr. Osei",
      "speakerImage": "male-4.webp",
      "speakerLine": "Are you thinking about applying for the Tokyo exchange?",
      "respondentName": "Larissa",
      "respondentImage": "female-4.webp",
      "answerPrefix": "If I",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "would",
        "this fall",
        "had",
        "will",
        "I",
        "apply",
        "more savings,"
      ],
      "correctOrder": [
        "had",
        "more savings,",
        "I",
        "would",
        "apply",
        "this fall"
      ],
      "extraWord": "will",
      "correctSentence": "If I had more savings, I would apply this fall.",
      "grammarPattern": "second_conditional",
      "explanation": "The correct sentence is “If I had more savings, I would apply this fall.” The second conditional describes an unreal or unlikely present situation, so the if clause uses the past simple and the main clause uses would plus the base verb. The word “will” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w17-bas-5",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking about a notice on the library door.",
      "speakerName": "Aisha",
      "speakerImage": "female-5.webp",
      "speakerLine": "Any idea why the reading room is closed today?",
      "respondentName": "Marco",
      "respondentImage": "male-5.webp",
      "answerPrefix": "The floor",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "from",
        "repainting",
        "is being",
        "campus maintenance",
        "this week",
        "repainted",
        "by a crew"
      ],
      "correctOrder": [
        "is being",
        "repainted",
        "by a crew",
        "from",
        "campus maintenance",
        "this week"
      ],
      "extraWord": "repainting",
      "correctSentence": "The floor is being repainted by a crew from campus maintenance this week.",
      "grammarPattern": "present_continuous_passive",
      "explanation": "The correct sentence is “The floor is being repainted by a crew from campus maintenance this week.” The present continuous passive is formed with is or are, then being, then the past participle, and the person or group doing the action follows by. The word “repainting” is an extra distractor that does not belong in the answer.",
      "points": 1,
      "acceptedOrders": [
        [
          "is being",
          "repainted",
          "this week",
          "by a crew",
          "from",
          "campus maintenance"
        ]
      ]
    },
    {
      "id": "w17-bas-6",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two classmates are talking after a long evening lab session.",
      "speakerName": "Elena",
      "speakerImage": "female-6.webp",
      "speakerLine": "You look exhausted. What happened last night?",
      "respondentName": "Rahul",
      "respondentImage": "male-6.webp",
      "answerPrefix": "Having",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "at midnight,",
        "straight",
        "finishing",
        "I went",
        "the experiment",
        "to bed",
        "finished"
      ],
      "correctOrder": [
        "finished",
        "the experiment",
        "at midnight,",
        "I went",
        "straight",
        "to bed"
      ],
      "extraWord": "finishing",
      "correctSentence": "Having finished the experiment at midnight, I went straight to bed.",
      "grammarPattern": "perfect_participle_phrase",
      "explanation": "The correct sentence is “Having finished the experiment at midnight, I went straight to bed.” A perfect participle phrase uses having plus the past participle to show that one action was completed before the next one, and the subject of the main clause must be the same person. The word “finishing” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w17-bas-7",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two friends are talking about a weekend volunteer event downtown.",
      "speakerName": "Diego",
      "speakerImage": "male-2.webp",
      "speakerLine": "What made you decide to volunteer for the cleanup?",
      "respondentName": "Sofia",
      "respondentImage": "female-2.webp",
      "answerPrefix": "I",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "a talk",
        "after",
        "heard",
        "got",
        "hearing",
        "about ocean plastic",
        "involved"
      ],
      "correctOrder": [
        "got",
        "involved",
        "after",
        "hearing",
        "a talk",
        "about ocean plastic"
      ],
      "extraWord": "heard",
      "correctSentence": "I got involved after hearing a talk about ocean plastic.",
      "grammarPattern": "gerund_after_preposition",
      "explanation": "The correct sentence is “I got involved after hearing a talk about ocean plastic.” When a verb follows a preposition such as after, before, or without, it takes the -ing form, never a past tense form. The word “heard” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w17-bas-8",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two roommates are talking in the hallway on a cold morning.",
      "speakerName": "Chen",
      "speakerImage": "male-3.webp",
      "speakerLine": "Why are you leaving so early today?",
      "respondentName": "Amara",
      "respondentImage": "female-3.webp",
      "answerPrefix": "I'm going in early",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "gets",
        "printing",
        "the office",
        "before",
        "busy",
        "to print",
        "my thesis"
      ],
      "correctOrder": [
        "to print",
        "my thesis",
        "before",
        "the office",
        "gets",
        "busy"
      ],
      "extraWord": "printing",
      "correctSentence": "I'm going in early to print my thesis before the office gets busy.",
      "grammarPattern": "infinitive_of_purpose",
      "explanation": "The correct sentence is “I'm going in early to print my thesis before the office gets busy.” To plus the base verb explains the purpose of an action, answering the question why. The word “printing” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w17-bas-9",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "A new student is speaking with a staff member at the front desk.",
      "speakerName": "Bianca",
      "speakerImage": "female-4.webp",
      "speakerLine": "Good morning. Is there something I can help you with?",
      "respondentName": "Ahmet",
      "respondentImage": "male-4.webp",
      "answerPrefix": "Could you tell me",
      "answerSuffix": "?",
      "numBlanks": 6,
      "wordChunks": [
        "find",
        "I",
        "student office",
        "do I",
        "where",
        "can",
        "the international"
      ],
      "correctOrder": [
        "where",
        "I",
        "can",
        "find",
        "the international",
        "student office"
      ],
      "extraWord": "do I",
      "correctSentence": "Could you tell me where I can find the international student office?",
      "grammarPattern": "indirect_question",
      "explanation": "The correct sentence is “Could you tell me where I can find the international student office?” An indirect question keeps statement word order after the question word, so the subject comes before the verb and no auxiliary do is added. The words “do I” are an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w17-bas-10",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking about the forms for their campus jobs.",
      "speakerName": "Zara",
      "speakerImage": "female-5.webp",
      "speakerLine": "Did you finish the payroll paperwork yet?",
      "respondentName": "Nikolai",
      "respondentImage": "male-5.webp",
      "answerPrefix": "Not yet, I still",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "and",
        "it in",
        "need",
        "out it",
        "to fill",
        "hand",
        "it out"
      ],
      "correctOrder": [
        "need",
        "to fill",
        "it out",
        "and",
        "hand",
        "it in"
      ],
      "extraWord": "out it",
      "correctSentence": "Not yet, I still need to fill it out and hand it in.",
      "grammarPattern": "separable_phrasal_verbs",
      "explanation": "The correct sentence is “Not yet, I still need to fill it out and hand it in.” With a separable phrasal verb, a pronoun object such as it must sit between the verb and the particle, so we say fill it out and hand it in. The words “out it” are an extra distractor that does not belong in the answer.",
      "points": 1
    }
  ],
  "writeAnEmail": {
    "id": "w17-email-1",
    "type": "write_email",
    "directions": "You have seven minutes to read the situation and write your email. Aim for about 100 to 150 words. Be sure to address every point in the prompt.",
    "situation": "You belong to the campus photography club. The club president, Marcus Feld, has announced a weekend trip to Cedar Ridge National Park and asked members to reply if they want a seat in one of the club vans. You want to go, but you work a Saturday morning shift at the campus cafe.",
    "taskInstructions": "Write an email to Marcus Feld, the club president. In your email, do each of the following:",
    "requiredPoints": [
      "Say that you would like to join the trip and ask for a seat in a van.",
      "Explain the scheduling problem your Saturday morning shift creates.",
      "Ask what the trip will cost and when the vans will leave."
    ],
    "recipient": "photoclub@riverton.edu",
    "subject": "Cedar Ridge trip, a seat and a schedule question",
    "writeTime": 420,
    "targetWords": {
      "min": 100,
      "max": 150
    },
    "scoringRubric": {
      "0": "Off-topic, blank, copied verbatim from the prompt, or written in a language other than English.",
      "1": "Minimally addresses the situation. Serious language errors make portions of the message hard to understand, or two or more required points are missing.",
      "2": "Partially addresses the prompt. Notable problems with completeness, register, or grammar. Missing greeting or closing, or one point omitted.",
      "3": "Addresses most points but one may be vague or underdeveloped. Tone is mostly suitable; noticeable grammar or vocabulary problems occur but the overall message remains understandable.",
      "4": "Addresses all three points adequately with a generally appropriate tone. Minor grammar or word-choice issues do not impede understanding. Organization is logical and greeting/closing are present.",
      "5": "Fully addresses all three prompt points with a clear purpose, appropriate greeting and closing, and a consistently polite, respectful tone. Demonstrates sentence variety, accurate grammar, and precise, well-chosen vocabulary throughout."
    }
  },
  "academicDiscussion": {
    "id": "w17-disc-1",
    "type": "academic_discussion",
    "topicIntro": "Your professor is teaching a class on tourism management. Write a post responding to the professor’s question.",
    "directions": "In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    "professorPrompt": {
      "name": "Professor Ferreira",
      "image": "female-6.webp",
      "text": "Many popular destinations now receive far more visitors than they were built to handle. Some city governments have responded by capping the number of daily visitors, charging entry fees at crowded sites, or limiting short-term rentals. Supporters say these limits protect residents, historic buildings, and local housing. Others argue that tourism pays for jobs and public services, and that restrictions mostly shut out travelers who cannot afford premium prices. Should cities limit tourist numbers, or should they stay open to everyone?"
    },
    "studentResponses": [
      {
        "name": "Bruna",
        "image": "female-2.webp",
        "text": "I think limits are necessary. My hometown on the coast has about 12,000 residents, and in August the population triples. Buses are full, rents rise, and long-time families move inland. A daily visitor cap would not end tourism. It would simply keep the town livable for the people who stay there all year."
      },
      {
        "name": "Wei",
        "image": "male-5.webp",
        "text": "I see it differently. Caps and entry fees sound fair until you look at who actually gets turned away. Wealthy travelers will pay any fee, so the people priced out are students and families saving for one trip. Cities have other tools. They can spread visitors across the year with off-season events, invest ticket revenue in public transportation, and promote neighborhoods outside the historic center rather than closing the gate."
      }
    ],
    "writeTime": 600,
    "targetWords": {
      "min": 100
    },
    "scoringRubric": {
      "0": "Blank, off-topic, not in English, or copied from the prompt.",
      "1": "An unsuccessful response. Largely irrelevant, undeveloped, or incoherent, with severe and persistent language errors.",
      "2": "A mostly unsuccessful response. Limited relevance or development, weak organization, and frequent errors that sometimes obscure meaning.",
      "3": "A partially successful response. Contribution is mostly on topic but may lack depth or specific examples. Some organizational issues and noticeable grammar or vocabulary errors, but meaning is generally clear.",
      "4": "A generally successful response. Relevant contribution with an opinion supported by reasons or examples. Adequate development and organization. Occasional minor language errors do not obscure meaning.",
      "5": "A fully successful response. A clear, well-elaborated contribution with a strong opinion that engages meaningfully with the discussion. Well-organized and coherent, with varied sentence structure, accurate grammar, and precise vocabulary."
    }
  }
};

// Backward-compatible alias used by the 2026 test engine.
window.WRITING_TEST_17 = window.WRITING_SECTION_17;
