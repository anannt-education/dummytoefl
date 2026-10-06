/**
 * TOEFL Writing Practice Test 19, 2026 format
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

window.WRITING_SECTION_19 = {
  "id": "writing-test-19",
  "title": "TOEFL Writing Practice Test 19",
  "format": "2026",
  "buildASentence": [
    {
      "id": "w19-bas-1",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking outside the campus library.",
      "speakerName": "Yusuf",
      "speakerImage": "male-1.webp",
      "speakerLine": "Who's the guy handing out flyers by the door?",
      "respondentName": "Lena",
      "respondentImage": "female-1.webp",
      "answerPrefix": "That's",
      "answerSuffix": ".",
      "numBlanks": 5,
      "wordChunks": [
        "organized",
        "clothing drive",
        "the student",
        "organizing",
        "who",
        "the winter"
      ],
      "correctOrder": [
        "the student",
        "who",
        "organized",
        "the winter",
        "clothing drive"
      ],
      "extraWord": "organizing",
      "correctSentence": "That's the student who organized the winter clothing drive.",
      "grammarPattern": "defining_relative_clause",
      "explanation": "The correct sentence is “That's the student who organized the winter clothing drive.” The relative pronoun “who” comes directly after the noun it describes, and it is followed by a full verb in the past simple. The word “organizing” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w19-bas-2",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two roommates are talking in their apartment after class.",
      "speakerName": "Marco",
      "speakerImage": "male-2.webp",
      "speakerLine": "Did you hear anything from the housing office?",
      "respondentName": "Ayesha",
      "respondentImage": "female-2.webp",
      "answerPrefix": "They",
      "answerSuffix": ".",
      "numBlanks": 5,
      "wordChunks": [
        "the results",
        "said",
        "sending",
        "would send",
        "on Friday",
        "they"
      ],
      "correctOrder": [
        "said",
        "they",
        "would send",
        "the results",
        "on Friday"
      ],
      "extraWord": "sending",
      "correctSentence": "They said they would send the results on Friday.",
      "grammarPattern": "reported_speech_backshift",
      "explanation": "The correct sentence is “They said they would send the results on Friday.” When you report a past statement, “will” shifts back to “would,” and the reported clause keeps normal statement word order. The word “sending” is an extra distractor that does not belong in the answer.",
      "points": 1,
      "acceptedOrders": [
        [
          "said",
          "on Friday",
          "they",
          "would send",
          "the results"
        ]
      ]
    },
    {
      "id": "w19-bas-3",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two friends are comparing two apartments they visited near campus.",
      "speakerName": "Hannah",
      "speakerImage": "female-3.webp",
      "speakerLine": "So which one are you going to take?",
      "respondentName": "Diego",
      "respondentImage": "male-3.webp",
      "answerPrefix": "The one on Cedar Street is",
      "answerSuffix": ".",
      "numBlanks": 5,
      "wordChunks": [
        "is tiny",
        "cheaper",
        "a lot",
        "the kitchen",
        "cheapest",
        "but"
      ],
      "correctOrder": [
        "a lot",
        "cheaper",
        "but",
        "the kitchen",
        "is tiny"
      ],
      "extraWord": "cheapest",
      "correctSentence": "The one on Cedar Street is a lot cheaper, but the kitchen is tiny.",
      "grammarPattern": "comparative_with_intensifier",
      "explanation": "The correct sentence is “The one on Cedar Street is a lot cheaper, but the kitchen is tiny.” Comparing two things calls for the comparative form “cheaper,” and intensifiers such as “a lot,” “much,” or “far” go in front of it. The word “cheapest” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w19-bas-4",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two classmates are talking about a scholarship deadline.",
      "speakerName": "Camila",
      "speakerImage": "female-4.webp",
      "speakerLine": "Are you going to apply for the travel grant?",
      "respondentName": "Jonas",
      "respondentImage": "male-4.webp",
      "answerPrefix": "I would apply",
      "answerSuffix": ".",
      "numBlanks": 5,
      "wordChunks": [
        "to write",
        "if",
        "I will have",
        "enough time",
        "I had",
        "the proposal"
      ],
      "correctOrder": [
        "if",
        "I had",
        "enough time",
        "to write",
        "the proposal"
      ],
      "extraWord": "I will have",
      "correctSentence": "I would apply if I had enough time to write the proposal.",
      "grammarPattern": "second_conditional",
      "explanation": "The correct sentence is “I would apply if I had enough time to write the proposal.” In an unreal present condition, the if-clause takes the past simple and the main clause takes “would” plus the base verb, so a future form never appears after “if.” The phrase “I will have” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w19-bas-5",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking about the campus theater.",
      "speakerName": "Nadia",
      "speakerImage": "female-5.webp",
      "speakerLine": "Why is the auditorium closed this week?",
      "respondentName": "Omar",
      "respondentImage": "male-5.webp",
      "answerPrefix": "The stage lights",
      "answerSuffix": ".",
      "numBlanks": 5,
      "wordChunks": [
        "crew",
        "replaced",
        "are being",
        "replacing",
        "an outside",
        "by"
      ],
      "correctOrder": [
        "are being",
        "replaced",
        "by",
        "an outside",
        "crew"
      ],
      "extraWord": "replacing",
      "correctSentence": "The stage lights are being replaced by an outside crew.",
      "grammarPattern": "present_continuous_passive",
      "explanation": "The correct sentence is “The stage lights are being replaced by an outside crew.” The present continuous passive is formed with “are being” plus the past participle, and the agent follows “by.” The word “replacing” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w19-bas-6",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking after a career fair on campus.",
      "speakerName": "Elena",
      "speakerImage": "female-6.webp",
      "speakerLine": "How did your conversation with the recruiter go?",
      "respondentName": "Sang-woo",
      "respondentImage": "male-6.webp",
      "answerPrefix": "Not knowing",
      "answerSuffix": ".",
      "numBlanks": 5,
      "wordChunks": [
        "my resume",
        "handed",
        "what to say",
        "handing",
        "him",
        "I just"
      ],
      "correctOrder": [
        "what to say",
        "I just",
        "handed",
        "him",
        "my resume"
      ],
      "extraWord": "handing",
      "correctSentence": "Not knowing what to say, I just handed him my resume.",
      "grammarPattern": "participle_phrase_opening",
      "explanation": "The correct sentence is “Not knowing what to say, I just handed him my resume.” An opening participle phrase describes the subject of the main clause, and that main clause still needs a complete past-tense verb. The word “handing” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w19-bas-7",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two friends are talking about part-time jobs on campus.",
      "speakerName": "Farah",
      "speakerImage": "female-1.webp",
      "speakerLine": "How do you manage a job and a full course load?",
      "respondentName": "Peter",
      "respondentImage": "male-1.webp",
      "answerPrefix": "I got used to",
      "answerSuffix": ".",
      "numBlanks": 5,
      "wordChunks": [
        "few weeks",
        "early",
        "wake up",
        "waking up",
        "the first",
        "after"
      ],
      "correctOrder": [
        "waking up",
        "early",
        "after",
        "the first",
        "few weeks"
      ],
      "extraWord": "wake up",
      "correctSentence": "I got used to waking up early after the first few weeks.",
      "grammarPattern": "gerund_after_preposition",
      "explanation": "The correct sentence is “I got used to waking up early after the first few weeks.” In the expression “get used to,” the word “to” is a preposition, so the verb that follows takes the -ing form rather than the base form. The phrase “wake up” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w19-bas-8",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "A student is talking with a librarian at the front desk.",
      "speakerName": "Ms. Okafor",
      "speakerImage": "female-2.webp",
      "speakerLine": "You'll need a code for the third-floor rooms.",
      "respondentName": "Tobias",
      "respondentImage": "male-2.webp",
      "answerPrefix": "I",
      "answerSuffix": ".",
      "numBlanks": 5,
      "wordChunks": [
        "my study room",
        "to pick up",
        "the desk",
        "code",
        "for picking up",
        "stopped by"
      ],
      "correctOrder": [
        "stopped by",
        "the desk",
        "to pick up",
        "my study room",
        "code"
      ],
      "extraWord": "for picking up",
      "correctSentence": "I stopped by the desk to pick up my study room code.",
      "grammarPattern": "infinitive_of_purpose",
      "explanation": "The correct sentence is “I stopped by the desk to pick up my study room code.” Purpose is expressed with the infinitive “to pick up,” not with “for” plus an -ing form. The phrase “for picking up” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w19-bas-9",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking outside the registrar's office.",
      "speakerName": "Ines",
      "speakerImage": "female-3.webp",
      "speakerLine": "The line is huge. Are they even open today?",
      "respondentName": "Kwame",
      "respondentImage": "male-3.webp",
      "answerPrefix": "I wonder",
      "answerSuffix": ".",
      "numBlanks": 5,
      "wordChunks": [
        "on Fridays",
        "the office",
        "does it stay",
        "open",
        "how long",
        "stays"
      ],
      "correctOrder": [
        "how long",
        "the office",
        "stays",
        "open",
        "on Fridays"
      ],
      "extraWord": "does it stay",
      "correctSentence": "I wonder how long the office stays open on Fridays.",
      "grammarPattern": "embedded_wh_question",
      "explanation": "The correct sentence is “I wonder how long the office stays open on Fridays.” This is an embedded (indirect) question, so after the question phrase you keep statement word order (subject then verb) and drop the auxiliary “do.” The phrase “does it stay” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w19-bas-10",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two roommates are talking about a package that never arrived.",
      "speakerName": "Bilal",
      "speakerImage": "male-4.webp",
      "speakerLine": "Any news about the headphones you ordered?",
      "respondentName": "Marta",
      "respondentImage": "female-4.webp",
      "answerPrefix": "I",
      "answerSuffix": ".",
      "numBlanks": 5,
      "wordChunks": [
        "and asked",
        "given up",
        "back",
        "gave up",
        "for my money",
        "on the delivery"
      ],
      "correctOrder": [
        "gave up",
        "on the delivery",
        "and asked",
        "for my money",
        "back"
      ],
      "extraWord": "given up",
      "correctSentence": "I gave up on the delivery and asked for my money back.",
      "grammarPattern": "phrasal_verb_past_simple",
      "explanation": "The correct sentence is “I gave up on the delivery and asked for my money back.” Both verbs describe finished actions, so both take the past simple, and the past participle cannot stand alone without “have.” The phrase “given up” is an extra distractor that does not belong in the answer.",
      "points": 1
    }
  ],
  "writeAnEmail": {
    "id": "w19-email-1",
    "type": "write_email",
    "directions": "You have seven minutes to read the situation and write your email. Aim for about 100 to 150 words. Be sure to address every point in the prompt.",
    "situation": "A friend from your hometown, Tomas, will start at your university next month. He wrote to say he does not know anyone on campus and is worried about making friends. You have lived there for two years and know the clubs well. He asked you to write back with some suggestions before he arrives.",
    "taskInstructions": "Write an email to Tomas. In your email, do each of the following:",
    "requiredPoints": [
      "Recommend one club or activity on campus and explain why it would suit him.",
      "Describe what he should do during his first week to meet people.",
      "Offer to meet him and suggest a time and a place."
    ],
    "recipient": "tomas.reyes@mailbox.com",
    "subject": "Getting to know people in your first weeks",
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
    "id": "w19-disc-1",
    "type": "academic_discussion",
    "topicIntro": "Your professor is teaching a class on tourism and development. Write a post responding to the professor’s question.",
    "directions": "In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    "professorPrompt": {
      "name": "Professor Haddad",
      "image": "male-6.webp",
      "text": "Many popular destinations are now dealing with what residents call overtourism. Some city governments have responded by capping daily visitor numbers at historic sites, charging entry fees to day visitors, or limiting short-term rentals. Supporters say these limits protect residents, housing, and fragile landmarks. Others argue that tourism supports thousands of local jobs and that restricting it punishes small businesses and lower-income workers. Should cities set strict limits on tourist numbers, or should they let visitor demand decide?"
    },
    "studentResponses": [
      {
        "name": "Rosa",
        "image": "female-5.webp",
        "text": "I think strict limits are necessary. In my hometown the old center emptied out because landlords found short-term rentals far more profitable than year-round leases. Families moved to the suburbs, the bakery closed, and now the streets belong to visitors for eight months a year. A cap on daily arrivals would at least slow that down."
      },
      {
        "name": "Ethan",
        "image": "male-4.webp",
        "text": "I would be careful with hard caps. Tourism is often the only industry hiring in these places, and the people who lose shifts first are guides, servers, and cleaners, not hotel owners. A cap also decides who gets in, and usually that is whoever can pay the most. I would rather see cities tax visitors properly and spend the money on housing and public transportation, so residents actually feel the benefit."
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
window.WRITING_TEST_19 = window.WRITING_SECTION_19;
