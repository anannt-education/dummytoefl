/**
 * TOEFL Writing Practice Test 20, 2026 format
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

window.WRITING_SECTION_20 = {
  "id": "writing-test-20",
  "title": "TOEFL Writing Practice Test 20",
  "format": "2026",
  "buildASentence": [
    {
      "id": "w20-bas-1",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking outside the registrar’s office.",
      "speakerName": "Rania",
      "speakerImage": "female-1.webp",
      "speakerLine": "Who was that woman you were talking to at the desk?",
      "respondentName": "Idris",
      "respondentImage": "male-1.webp",
      "answerPrefix": "She's",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "request",
        "who",
        "rejected",
        "my transfer",
        "the advisor",
        "last week",
        "approved"
      ],
      "correctOrder": [
        "the advisor",
        "who",
        "approved",
        "my transfer",
        "request",
        "last week"
      ],
      "extraWord": "rejected",
      "correctSentence": "She's the advisor who approved my transfer request last week.",
      "grammarPattern": "relative_clause_with_subject_who",
      "explanation": "The correct sentence is “She’s the advisor who approved my transfer request last week.” The relative pronoun who comes directly after the noun it describes and acts as the subject of the verb inside the clause. The word “rejected” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w20-bas-2",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two friends are talking after a club meeting on campus.",
      "speakerName": "Hassan",
      "speakerImage": "male-2.webp",
      "speakerLine": "Did Lena say anything about the trip?",
      "respondentName": "Chiara",
      "respondentImage": "female-2.webp",
      "answerPrefix": "She",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "would",
        "told",
        "by",
        "said",
        "Friday",
        "let me know",
        "she"
      ],
      "correctOrder": [
        "said",
        "she",
        "would",
        "let me know",
        "by",
        "Friday"
      ],
      "extraWord": "told",
      "correctSentence": "She said she would let me know by Friday.",
      "grammarPattern": "reported_speech_backshift",
      "explanation": "The correct sentence is “She said she would let me know by Friday.” In reported speech, will shifts back to would, and say is used without a person as its object. The word “told” is an extra distractor that does not belong in the answer, because told needs an object such as me right after it.",
      "points": 1
    },
    {
      "id": "w20-bas-3",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are comparing apartments they visited near campus this week.",
      "speakerName": "Yuki",
      "speakerImage": "female-3.webp",
      "speakerLine": "So which place are you going to choose?",
      "respondentName": "Marcus",
      "respondentImage": "male-3.webp",
      "answerPrefix": "The second one is",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "than",
        "much smaller",
        "a lot",
        "more cheap",
        "but",
        "cheaper",
        "the first"
      ],
      "correctOrder": [
        "a lot",
        "cheaper",
        "than",
        "the first",
        "but",
        "much smaller"
      ],
      "extraWord": "more cheap",
      "correctSentence": "The second one is a lot cheaper than the first but much smaller.",
      "grammarPattern": "comparative_with_intensifier",
      "explanation": "The correct sentence is “The second one is a lot cheaper than the first but much smaller.” Short adjectives form the comparative with the ending er, and intensifiers such as a lot and much go in front of the comparative. The phrase “more cheap” is an extra distractor that does not belong in the answer.",
      "points": 1,
      "acceptedOrders": [
        [
          "a lot",
          "cheaper",
          "but",
          "much smaller",
          "than",
          "the first"
        ],
        [
          "much smaller",
          "but",
          "a lot",
          "cheaper",
          "than",
          "the first"
        ],
        [
          "much smaller",
          "than",
          "the first",
          "but",
          "a lot",
          "cheaper"
        ]
      ]
    },
    {
      "id": "w20-bas-4",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two classmates are talking about a study abroad program.",
      "speakerName": "Elena",
      "speakerImage": "female-4.webp",
      "speakerLine": "Are you applying for the semester in Seoul?",
      "respondentName": "Omar",
      "respondentImage": "male-4.webp",
      "answerPrefix": "I",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "had",
        "if",
        "will apply",
        "savings",
        "would apply",
        "enough",
        "I"
      ],
      "correctOrder": [
        "would apply",
        "if",
        "I",
        "had",
        "enough",
        "savings"
      ],
      "extraWord": "will apply",
      "correctSentence": "I would apply if I had enough savings.",
      "grammarPattern": "second_conditional",
      "explanation": "The correct sentence is “I would apply if I had enough savings.” The second conditional describes an unreal or unlikely situation, so it pairs would plus a base verb in the main clause with the past simple in the if clause. The phrase “will apply” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w20-bas-5",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "A student is asking a staff member at the recreation center.",
      "speakerName": "Grace",
      "speakerImage": "female-5.webp",
      "speakerLine": "Why is the pool closed all week?",
      "respondentName": "Andres",
      "respondentImage": "male-5.webp",
      "answerPrefix": "The tiles",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "replacing",
        "by",
        "are",
        "company",
        "being",
        "an outside",
        "replaced"
      ],
      "correctOrder": [
        "are",
        "being",
        "replaced",
        "by",
        "an outside",
        "company"
      ],
      "extraWord": "replacing",
      "correctSentence": "The tiles are being replaced by an outside company.",
      "grammarPattern": "present_continuous_passive",
      "explanation": "The correct sentence is “The tiles are being replaced by an outside company.” The present continuous passive follows the pattern be plus being plus a past participle, and by introduces the agent doing the action. The word “replacing” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w20-bas-6",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking in the hallway before class starts.",
      "speakerName": "Diego",
      "speakerImage": "male-6.webp",
      "speakerLine": "How did you even find that internship?",
      "respondentName": "Aisha",
      "respondentImage": "female-6.webp",
      "answerPrefix": "I found it",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "through",
        "last",
        "walked",
        "while",
        "Thursday",
        "the career fair",
        "walking"
      ],
      "correctOrder": [
        "while",
        "walking",
        "through",
        "the career fair",
        "last",
        "Thursday"
      ],
      "extraWord": "walked",
      "correctSentence": "I found it while walking through the career fair last Thursday.",
      "grammarPattern": "participle_phrase_after_while",
      "explanation": "The correct sentence is “I found it while walking through the career fair last Thursday.” When both actions share the same subject, while can be followed directly by an ing participle instead of a full clause. The word “walked” is an extra distractor that does not belong in the answer.",
      "points": 1,
      "acceptedOrders": [
        [
          "last",
          "Thursday",
          "while",
          "walking",
          "through",
          "the career fair"
        ]
      ]
    },
    {
      "id": "w20-bas-7",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two friends are talking about their morning routines on campus.",
      "speakerName": "Sofia",
      "speakerImage": "female-1.webp",
      "speakerLine": "You look exhausted this morning.",
      "respondentName": "Kenji",
      "respondentImage": "male-1.webp",
      "answerPrefix": "I'm not used to",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "a class",
        "get up",
        "three days",
        "for",
        "getting up",
        "a week",
        "this early"
      ],
      "correctOrder": [
        "getting up",
        "this early",
        "for",
        "a class",
        "three days",
        "a week"
      ],
      "extraWord": "get up",
      "correctSentence": "I'm not used to getting up this early for a class three days a week.",
      "grammarPattern": "gerund_after_preposition",
      "explanation": "The correct sentence is “I'm not used to getting up this early for a class three days a week.” In the phrase be used to, the word to is a preposition, so the verb after it takes the ing form. The phrase “get up” is an extra distractor that does not belong in the answer.",
      "points": 1,
      "acceptedOrders": [
        [
          "getting up",
          "this early",
          "three days",
          "a week",
          "for",
          "a class"
        ]
      ]
    },
    {
      "id": "w20-bas-8",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two teammates are talking after a volunteer shift downtown.",
      "speakerName": "Layla",
      "speakerImage": "female-2.webp",
      "speakerLine": "Why did you stop by the office this morning?",
      "respondentName": "Viktor",
      "respondentImage": "male-2.webp",
      "answerPrefix": "I went in",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "we need",
        "next month's",
        "picking up",
        "to pick up",
        "trip",
        "for",
        "the forms"
      ],
      "correctOrder": [
        "to pick up",
        "the forms",
        "we need",
        "for",
        "next month's",
        "trip"
      ],
      "extraWord": "picking up",
      "correctSentence": "I went in to pick up the forms we need for next month's trip.",
      "grammarPattern": "infinitive_of_purpose",
      "explanation": "The correct sentence is “I went in to pick up the forms we need for next month's trip.” To explain the purpose of an action, English uses to plus the base form of the verb, not an ing form. The phrase “picking up” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w20-bas-9",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "A student is asking a librarian at the front desk.",
      "speakerName": "Mr. Bennett",
      "speakerImage": "male-3.webp",
      "speakerLine": "Can I help you find something?",
      "respondentName": "Fatima",
      "respondentImage": "female-3.webp",
      "answerPrefix": "Actually, I was wondering",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "could",
        "where",
        "if",
        "is the reserve shelf",
        "the reserve shelf is",
        "show me",
        "you"
      ],
      "correctOrder": [
        "if",
        "you",
        "could",
        "show me",
        "where",
        "the reserve shelf is"
      ],
      "extraWord": "is the reserve shelf",
      "correctSentence": "Actually, I was wondering if you could show me where the reserve shelf is.",
      "grammarPattern": "embedded_wh_question_word_order",
      "explanation": "The correct sentence is “Actually, I was wondering if you could show me where the reserve shelf is.” This is an embedded (indirect) question, so after the question word you keep statement word order (subject then verb), not question inversion. The phrase “is the reserve shelf” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w20-bas-10",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking about a canceled weekend hiking trip.",
      "speakerName": "Noah",
      "speakerImage": "male-4.webp",
      "speakerLine": "Did the hiking club ever reschedule the trip?",
      "respondentName": "Mariam",
      "respondentImage": "female-4.webp",
      "answerPrefix": "They",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "until",
        "off",
        "clears up",
        "put",
        "off it",
        "the weather",
        "it"
      ],
      "correctOrder": [
        "put",
        "it",
        "off",
        "until",
        "the weather",
        "clears up"
      ],
      "extraWord": "off it",
      "correctSentence": "They put it off until the weather clears up.",
      "grammarPattern": "separable_phrasal_verb_with_pronoun",
      "explanation": "The correct sentence is “They put it off until the weather clears up.” With a separable phrasal verb such as put off, a pronoun object must sit between the verb and the particle, so put it off is correct and put off it is not. The phrase “off it” is an extra distractor that does not belong in the answer.",
      "points": 1
    }
  ],
  "writeAnEmail": {
    "id": "w20-email-1",
    "type": "write_email",
    "directions": "You have seven minutes to read the situation and write your email. Aim for about 100 to 150 words. Be sure to address every point in the prompt.",
    "situation": "Your dorm floor wants to hold an international food night in the shared lounge next month. You have offered to organize it. About thirty students have said they plan to come. The residence life coordinator, Ms. Okafor, handles lounge bookings, and you need to reserve the space and ask about the kitchen rules.",
    "taskInstructions": "Write an email to Ms. Okafor. In your email, do each of the following:",
    "requiredPoints": [
      "Introduce yourself and explain what event you are planning.",
      "Request the lounge for a specific date and time, and say how many students are expected.",
      "Ask what the rules are for cooking in the lounge kitchen and for cleaning up afterward."
    ],
    "recipient": "s.okafor@lakeview.edu",
    "subject": "Reserving the lounge for our floor's food night",
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
    "id": "w20-disc-1",
    "type": "academic_discussion",
    "topicIntro": "Your professor is teaching a class on tourism management. Write a post responding to the professor’s question.",
    "directions": "In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    "professorPrompt": {
      "name": "Professor Salas",
      "image": "female-5.webp",
      "text": "This week we are studying how popular destinations manage visitor numbers. Several cities have started limiting daily arrivals, charging entry fees, or capping cruise ship dockings. Supporters say these limits protect neighborhoods, historic sites, and the people who live there year round. Critics answer that tourism supports hotels, restaurants, and thousands of ordinary jobs, and that limits mostly shut out travelers who cannot pay premium prices. Should cities cap the number of tourists they allow, or not?"
    },
    "studentResponses": [
      {
        "name": "Rafael",
        "image": "male-6.webp",
        "text": "I think caps are necessary. My cousin lives in Barcelona, and rents in her neighborhood doubled after most of the apartments near her became short-term rentals. Locals moved out, and the bakery on her corner turned into a souvenir shop. A city is not a museum. If residents cannot afford to stay, the place tourists came to see disappears."
      },
      {
        "name": "Meiling",
        "image": "female-6.webp",
        "text": "I disagree with hard limits. In many coastal towns, tourism is the only industry left after fishing or manufacturing declined, and a cap on arrivals means fewer hours for cleaners, drivers, and cooks who have no other employer nearby. Entry fees also filter by wallet rather than by behavior, so a wealthy visitor who stays one night gets in while a student traveler does not. Better crowd management would help more than a hard ceiling."
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
window.WRITING_TEST_20 = window.WRITING_SECTION_20;
