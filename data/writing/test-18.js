/**
 * TOEFL Writing Practice Test 18, 2026 format
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

window.WRITING_SECTION_18 = {
  "id": "writing-test-18",
  "title": "TOEFL Writing Practice Test 18",
  "format": "2026",
  "buildASentence": [
    {
      "id": "w18-bas-1",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking outside the campus library.",
      "speakerName": "Yuki",
      "speakerImage": "female-1.webp",
      "speakerLine": "Who's the guy you were sitting with earlier?",
      "respondentName": "Omar",
      "respondentImage": "male-1.webp",
      "answerPrefix": "He's",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "with",
        "the tutor",
        "helping",
        "who",
        "my statistics",
        "helped me",
        "homework"
      ],
      "correctOrder": [
        "the tutor",
        "who",
        "helped me",
        "with",
        "my statistics",
        "homework"
      ],
      "extraWord": "helping",
      "correctSentence": "He's the tutor who helped me with my statistics homework.",
      "grammarPattern": "relative_clause_with_who",
      "explanation": "The correct sentence is “He's the tutor who helped me with my statistics homework.” The relative clause (introduced by who, that, or which) comes directly after the noun it describes, and the relative pronoun acts as the subject of that clause. The word “helping” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w18-bas-2",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two roommates are talking after a phone call from home.",
      "speakerName": "Lena",
      "speakerImage": "female-2.webp",
      "speakerLine": "What did your brother want?",
      "respondentName": "Marco",
      "respondentImage": "male-2.webp",
      "answerPrefix": "He",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "visit",
        "would",
        "asked",
        "said",
        "next weekend",
        "he",
        "me"
      ],
      "correctOrder": [
        "said",
        "he",
        "would",
        "visit",
        "me",
        "next weekend"
      ],
      "extraWord": "asked",
      "correctSentence": "He said he would visit me next weekend.",
      "grammarPattern": "reported_speech_backshift",
      "explanation": "The correct sentence is “He said he would visit me next weekend.” In reported speech the verb shifts back one tense, so “will visit” becomes “would visit” after a past reporting verb like said. The word “asked” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w18-bas-3",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two friends are comparing apartments they saw near campus.",
      "speakerName": "Aisha",
      "speakerImage": "female-3.webp",
      "speakerLine": "So which place are you going to take?",
      "respondentName": "Henrik",
      "respondentImage": "male-3.webp",
      "answerPrefix": "The second one is",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "than",
        "more",
        "to campus",
        "much",
        "I saw first",
        "closer",
        "the apartment"
      ],
      "correctOrder": [
        "much",
        "closer",
        "to campus",
        "than",
        "the apartment",
        "I saw first"
      ],
      "extraWord": "more",
      "correctSentence": "The second one is much closer to campus than the apartment I saw first.",
      "grammarPattern": "comparative_with_than",
      "explanation": "The correct sentence is “The second one is much closer to campus than the apartment I saw first.” Short adjectives take the -er ending, so you say closer, not more close, and the word much goes before the comparative to strengthen it. The word “more” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w18-bas-4",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking about a study abroad program.",
      "speakerName": "Sofia",
      "speakerImage": "female-4.webp",
      "speakerLine": "Are you applying for the Berlin exchange?",
      "respondentName": "Kenji",
      "respondentImage": "male-4.webp",
      "answerPrefix": "I",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "the same week",
        "weren't",
        "if",
        "will be",
        "as my exams",
        "would apply",
        "the deadline"
      ],
      "correctOrder": [
        "would apply",
        "if",
        "the deadline",
        "weren't",
        "the same week",
        "as my exams"
      ],
      "extraWord": "will be",
      "correctSentence": "I would apply if the deadline weren't the same week as my exams.",
      "grammarPattern": "second_conditional",
      "explanation": "The correct sentence is “I would apply if the deadline weren't the same week as my exams.” In a second conditional the if clause uses a past form (weren't) and the main clause uses would plus the base verb, because the situation is unreal or unlikely. The words “will be” are an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w18-bas-5",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two club members are talking about a poster in the hallway.",
      "speakerName": "Ines",
      "speakerImage": "female-5.webp",
      "speakerLine": "I love the artwork on that concert poster.",
      "respondentName": "Felipe",
      "respondentImage": "male-5.webp",
      "answerPrefix": "It",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "designed",
        "from",
        "two students",
        "was",
        "designing",
        "the design club",
        "by"
      ],
      "correctOrder": [
        "was",
        "designed",
        "by",
        "two students",
        "from",
        "the design club"
      ],
      "extraWord": "designing",
      "correctSentence": "It was designed by two students from the design club.",
      "grammarPattern": "passive_voice_with_by_agent",
      "explanation": "The correct sentence is “It was designed by two students from the design club.” The passive is formed with the verb be plus a past participle, and the person who performed the action is introduced by by. The word “designing” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w18-bas-6",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two roommates are talking about a message from the housing office.",
      "speakerName": "Grace",
      "speakerImage": "female-6.webp",
      "speakerLine": "Did you see that message about moving in early?",
      "respondentName": "Hassan",
      "respondentImage": "male-6.webp",
      "answerPrefix": "The email",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "the new",
        "by",
        "sending",
        "explained",
        "sent",
        "check-in times",
        "the housing office"
      ],
      "correctOrder": [
        "sent",
        "by",
        "the housing office",
        "explained",
        "the new",
        "check-in times"
      ],
      "extraWord": "sending",
      "correctSentence": "The email sent by the housing office explained the new check-in times.",
      "grammarPattern": "past_participle_phrase",
      "explanation": "The correct sentence is “The email sent by the housing office explained the new check-in times.” A past participle phrase (sent by the housing office) works like a shortened relative clause meaning that was sent, and it sits right after the noun it describes. The word “sending” is an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w18-bas-7",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking about early morning workouts at the gym.",
      "speakerName": "Mei",
      "speakerImage": "female-2.webp",
      "speakerLine": "How do you manage to get up at five?",
      "respondentName": "Rafael",
      "respondentImage": "male-3.webp",
      "answerPrefix": "I got used to",
      "answerSuffix": ".",
      "numBlanks": 5,
      "wordChunks": [
        "joining",
        "waking up",
        "wake up",
        "at five",
        "the swim team",
        "after"
      ],
      "correctOrder": [
        "waking up",
        "at five",
        "after",
        "joining",
        "the swim team"
      ],
      "extraWord": "wake up",
      "correctSentence": "I got used to waking up at five after joining the swim team.",
      "grammarPattern": "gerund_after_preposition",
      "explanation": "The correct sentence is “I got used to waking up at five after joining the swim team.” After a preposition such as to in get used to, or after, English uses the -ing form of the verb, not the base form. The words “wake up” are an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w18-bas-8",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two students are talking outside the campus health center.",
      "speakerName": "Elena",
      "speakerImage": "female-4.webp",
      "speakerLine": "Why are you here so early?",
      "respondentName": "Samuel",
      "respondentImage": "male-1.webp",
      "answerPrefix": "I came in",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "the volunteer",
        "I need",
        "to pick up",
        "so that",
        "the forms",
        "program",
        "for"
      ],
      "correctOrder": [
        "to pick up",
        "the forms",
        "I need",
        "for",
        "the volunteer",
        "program"
      ],
      "extraWord": "so that",
      "correctSentence": "I came in to pick up the forms I need for the volunteer program.",
      "grammarPattern": "infinitive_of_purpose",
      "explanation": "The correct sentence is “I came in to pick up the forms I need for the volunteer program.” To plus a base verb explains the purpose of an action and answers the question why. The words “so that” are an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w18-bas-9",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "A student is speaking with a staff member at the registrar's office.",
      "speakerName": "Lucas",
      "speakerImage": "male-4.webp",
      "speakerLine": "Hi there, how can I help you today?",
      "respondentName": "Aditi",
      "respondentImage": "female-5.webp",
      "answerPrefix": "Could you tell me",
      "answerSuffix": "?",
      "numBlanks": 5,
      "wordChunks": [
        "can I",
        "pick up",
        "my new",
        "where",
        "student ID",
        "I can"
      ],
      "correctOrder": [
        "where",
        "I can",
        "pick up",
        "my new",
        "student ID"
      ],
      "extraWord": "can I",
      "correctSentence": "Could you tell me where I can pick up my new student ID?",
      "grammarPattern": "indirect_question",
      "explanation": "The correct sentence is “Could you tell me where I can pick up my new student ID?” In an indirect question the subject comes before the verb after the question word, so you say where I can, not where can I. The words “can I” are an extra distractor that does not belong in the answer.",
      "points": 1
    },
    {
      "id": "w18-bas-10",
      "type": "build_a_sentence",
      "prompt": "Make an appropriate sentence.",
      "context": "Two teammates are talking about a change to the weekend schedule.",
      "speakerName": "Julia",
      "speakerImage": "female-3.webp",
      "speakerLine": "Did the coach say anything about Saturday's game?",
      "respondentName": "Karim",
      "respondentImage": "male-6.webp",
      "answerPrefix": "They",
      "answerSuffix": ".",
      "numBlanks": 6,
      "wordChunks": [
        "off",
        "dries out",
        "until",
        "postponed",
        "put",
        "it",
        "the field"
      ],
      "correctOrder": [
        "put",
        "it",
        "off",
        "until",
        "the field",
        "dries out"
      ],
      "extraWord": "postponed",
      "correctSentence": "They put it off until the field dries out.",
      "grammarPattern": "separable_phrasal_verb",
      "explanation": "The correct sentence is “They put it off until the field dries out.” With a separable phrasal verb such as put off, a pronoun object must go between the verb and the particle, so you say put it off, never put off it. The word “postponed” is an extra distractor that does not belong in the answer.",
      "points": 1
    }
  ],
  "writeAnEmail": {
    "id": "w18-email-1",
    "type": "write_email",
    "directions": "You have seven minutes to read the situation and write your email. Aim for about 100 to 150 words. Be sure to address every point in the prompt.",
    "situation": "You are on the international student committee at your university. The committee is hosting Culture Night next Saturday, where students share food and music from their home countries. Tomas, an exchange student who just moved into your residence hall, has not met many people yet, and you want him to come.",
    "taskInstructions": "Write an email to Tomas. In your email, do each of the following:",
    "requiredPoints": [
      "Invite Tomas to Culture Night and tell him when it takes place.",
      "Describe what students do at the event so he knows what to expect.",
      "Ask whether he would like to share a dish or a song from his country."
    ],
    "recipient": "tomas.novak@state.edu",
    "subject": "Culture Night next Saturday, come join us",
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
    "id": "w18-disc-1",
    "type": "academic_discussion",
    "topicIntro": "Your professor is teaching a class on tourism management. Write a post responding to the professor’s question.",
    "directions": "In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.",
    "professorPrompt": {
      "name": "Professor Okafor",
      "image": "male-4.webp",
      "text": "This week we turn to the costs and benefits of mass tourism. Several famous cities now limit visitor numbers, charging entry fees or capping the number of cruise ships that can dock each day. Supporters say the limits protect residents, housing, and historic sites. Opponents say tourism pays local wages and that a fee simply keeps out travelers who cannot afford it. Should popular cities limit the number of visitors they allow, or not?"
    },
    "studentResponses": [
      {
        "name": "Nadia",
        "image": "female-5.webp",
        "text": "I think limits are necessary. In places like Venice, so many apartments have been turned into short-term rentals that ordinary families cannot find a home. A daily cap and a small entry fee would slow that pressure and give the city money to repair the bridges and streets that millions of footsteps wear down every year."
      },
      {
        "name": "Luis",
        "image": "male-6.webp",
        "text": "I disagree with capping visitors. In many coastal towns tourism is basically the whole economy, and the people who lose income first are hotel staff, drivers, and shop owners, not the wealthy. Caps also tend to shift crowds rather than reduce them, since travelers simply go to the next town, which is usually less prepared for them. I would rather see higher taxes on hotels, with the money spent on public transportation and housing."
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
window.WRITING_TEST_18 = window.WRITING_SECTION_18;
