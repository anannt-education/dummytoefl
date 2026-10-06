/**
 * Test Registry - Central catalog of all available practice tests.
 *
 * Used by test.html to render the test selection UI, track completion,
 * and load the correct data files.
 *
 * The `position` field is the test's index within its section (1..16). It is
 * the source of truth for paywall gating: the first two tests in every section
 * (and the first two full tests) are free; positions 3+ are paid.
 *
 * TIMING — aligned to the ETS 2026 published spec on 2026-05-03:
 *   Reading:   30 min, 50 items (matches ETS spec; expanded 2026-05-03)
 *   Listening: 29 min, 47 items (matches ETS spec; M2 academic talk added 2026-05-03,
 *              audio MP3s pending generation via scripts/generate-listening-audio-m2-talks.py)
 *   Writing:   23 min, 12 items (matches ETS spec: 10 Build-a-Sentence + 1 Email + 1 Discussion)
 *   Speaking:  8 min, 11 items (matches ETS spec: 7 Listen-and-Repeat + 4 Interview)
 *   Full test: ~90 min, 120 items (sum of section item counts above)
 *
 * `duration` here is in minutes; `timeLimit` in section data files is in
 * milliseconds and is the per-section runner timer. They must stay in sync.
 */
// Full tests 17-20 club sections from DIFFERENT numbers (a Latin square: each
// section number is used exactly once per section). With tests 1-16 the full
// test and its sections shared a number, so "full N repeats section N" was
// predictable; here it is not, so the mapping is recorded rather than implied.
window.FULL_TEST_SECTIONS = {
  "17": {
    "reading": 18,
    "listening": 17,
    "writing": 19,
    "speaking": 20
  },
  "18": {
    "reading": 20,
    "listening": 19,
    "writing": 17,
    "speaking": 18
  },
  "19": {
    "reading": 17,
    "listening": 20,
    "writing": 18,
    "speaking": 19
  },
  "20": {
    "reading": 19,
    "listening": 18,
    "writing": 20,
    "speaking": 17
  }
};

window.TEST_REGISTRY = {
  // =========================================================================
  //  FULL PRACTICE TESTS (all 4 sections)
  // =========================================================================
  fullTests: [
    { id: 'test1',  position: 1,  title: 'Practice Test 1',  questions: 120, duration: 90, description: 'Complete test with all four sections and instant band score report.' },
    { id: 'test2',  position: 2,  title: 'Practice Test 2',  questions: 120, duration: 90, description: 'Different passages, questions, and prompts. Same authentic format.' },
    { id: 'test3',  position: 3,  title: 'Practice Test 3',  questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 3 combined.' },
    { id: 'test4',  position: 4,  title: 'Practice Test 4',  questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 4 combined.' },
    { id: 'test5',  position: 5,  title: 'Practice Test 5',  questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 5 combined.' },
    { id: 'test6',  position: 6,  title: 'Practice Test 6',  questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 6 combined.' },
    { id: 'test7',  position: 7,  title: 'Practice Test 7',  questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 7 combined.' },
    { id: 'test8',  position: 8,  title: 'Practice Test 8',  questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 8 combined.' },
    { id: 'test9',  position: 9,  title: 'Practice Test 9',  questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 9 combined.' },
    { id: 'test10', position: 10, title: 'Practice Test 10', questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 10 combined.' },
    { id: 'test11', position: 11, title: 'Practice Test 11', questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 11 combined.' },
    { id: 'test12', position: 12, title: 'Practice Test 12', questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 12 combined.' },
    { id: 'test13', position: 13, title: 'Practice Test 13', questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 13 combined.' },
    { id: 'test14', position: 14, title: 'Practice Test 14', questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 14 combined.' },
    { id: 'test15', position: 15, title: 'Practice Test 15', questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 15 combined.' },
    { id: 'test16', position: 16, title: 'Practice Test 16', questions: 120, duration: 90, description: 'Reading + listening + writing + speaking test 16 combined.' },
    { id: 'test17', position: 17, title: 'Practice Test 17', questions: 120, duration: 90, description: 'Reading 18 + listening 17 + writing 19 + speaking 20 combined.' },
    { id: 'test18', position: 18, title: 'Practice Test 18', questions: 120, duration: 90, description: 'Reading 20 + listening 19 + writing 17 + speaking 18 combined.' },
    { id: 'test19', position: 19, title: 'Practice Test 19', questions: 120, duration: 90, description: 'Reading 17 + listening 20 + writing 18 + speaking 19 combined.' },
    { id: 'test20', position: 20, title: 'Practice Test 20', questions: 120, duration: 90, description: 'Reading 19 + listening 18 + writing 20 + speaking 17 combined.' },
  ],

  // =========================================================================
  //  SECTION PRACTICE TESTS (individual sections)
  // =========================================================================
  sectionTests: {
    reading: [
      { id: 'reading-test-1',  position: 1,  title: 'Reading Practice Test 1',  questions: 50, duration: 30, file: 'data/reading/test-1.js',  global: 'READING_SECTION_1',  description: 'Complete the words, read an email and text chain, and analyze an academic passage on coral reefs and sleep science.' },
      { id: 'reading-test-2',  position: 2,  title: 'Reading Practice Test 2',  questions: 50, duration: 30, file: 'data/reading/test-2.js',  global: 'READING_SECTION_2',  description: 'Fill in missing letters, comprehend a campus email and group chat, and read about urban heat islands.' },
      { id: 'reading-test-3',  position: 3,  title: 'Reading Practice Test 3',  questions: 50, duration: 30, file: 'data/reading/test-3.js',  global: 'READING_SECTION_3',  description: 'Vocabulary completion, dormitory notice, newspaper deadline coordination, and plate tectonics passage.' },
      { id: 'reading-test-4',  position: 4,  title: 'Reading Practice Test 4',  questions: 50, duration: 30, file: 'data/reading/test-4.js',  global: 'READING_SECTION_4',  description: 'Word formation, scholarship email, volunteer planning, and the history of antibiotics.' },
      { id: 'reading-test-5',  position: 5,  title: 'Reading Practice Test 5',  questions: 50, duration: 30, file: 'data/reading/test-5.js',  global: 'READING_SECTION_5',  description: 'Missing letters, parking permit notice, film club chat, and cognitive biases in decision-making.' },
      { id: 'reading-test-6',  position: 6,  title: 'Reading Practice Test 6',  questions: 50, duration: 30, file: 'data/reading/test-6.js',  global: 'READING_SECTION_6',  description: 'Vocabulary blanks, course registration email, sports scheduling, and ancient Egyptian agriculture.' },
      { id: 'reading-test-7',  position: 7,  title: 'Reading Practice Test 7',  questions: 50, duration: 30, file: 'data/reading/test-7.js',  global: 'READING_SECTION_7',  description: 'Complete the words, recycling program update, study abroad planning, and the Doppler effect.' },
      { id: 'reading-test-8',  position: 8,  title: 'Reading Practice Test 8',  questions: 50, duration: 30, file: 'data/reading/test-8.js',  global: 'READING_SECTION_8',  description: 'Fill in blanks, tutoring center hours, music festival logistics, and social media and democracy.' },
      { id: 'reading-test-9',  position: 9,  title: 'Reading Practice Test 9',  questions: 50, duration: 30, file: 'data/reading/test-9.js',  global: 'READING_SECTION_9',  description: 'Word completion, health insurance email, science fair prep, and the water cycle.' },
      { id: 'reading-test-10', position: 10, title: 'Reading Practice Test 10', questions: 50, duration: 30, file: 'data/reading/test-10.js', global: 'READING_SECTION_10', description: 'Missing letters, internship deadline reminder, community garden chat, and language acquisition.' },
      { id: 'reading-test-11', position: 11, title: 'Reading Practice Test 11', questions: 50, duration: 30, file: 'data/reading/test-11.js', global: 'READING_SECTION_11', description: 'Vocabulary blanks, library book recall, charity run planning, and the economics of space exploration.' },
      { id: 'reading-test-12', position: 12, title: 'Reading Practice Test 12', questions: 50, duration: 30, file: 'data/reading/test-12.js', global: 'READING_SECTION_12', description: 'Complete the words, IT security alert, cultural festival coordination, and neuroplasticity.' },
      { id: 'reading-test-13', position: 13, title: 'Reading Practice Test 13', questions: 50, duration: 30, file: 'data/reading/test-13.js', global: 'READING_SECTION_13', description: 'Fill in blanks, academic integrity update, yearbook scheduling, and the Industrial Revolution.' },
      { id: 'reading-test-14', position: 14, title: 'Reading Practice Test 14', questions: 50, duration: 30, file: 'data/reading/test-14.js', global: 'READING_SECTION_14', description: 'Word formation, graduation ceremony details, apartment search chat, and symbiotic relationships.' },
      { id: 'reading-test-15', position: 15, title: 'Reading Practice Test 15', questions: 50, duration: 30, file: 'data/reading/test-15.js', global: 'READING_SECTION_15', description: 'Missing letters, campus construction notice, research project division, and the psychology of color.' },
      { id: 'reading-test-16', position: 16, title: 'Reading Practice Test 16', questions: 50, duration: 30, file: 'data/reading/test-16.js', global: 'READING_SECTION_16', description: 'Vocabulary completion, student government elections, end-of-semester party planning, and deep ocean ecosystems.' },
      { id: 'reading-test-17', position: 17, title: 'Reading Practice Test 17', questions: 50, duration: 30, file: 'data/reading/test-17.js', global: 'READING_SECTION_17', description: 'Complete the words, a campus email and message chain, and academic passages on How Volcanoes Build Islands and The Invention of Refrigeration.' },
      { id: 'reading-test-18', position: 18, title: 'Reading Practice Test 18', questions: 50, duration: 30, file: 'data/reading/test-18.js', global: 'READING_SECTION_18', description: 'Complete the words, a campus email and message chain, and academic passages on The Silk Road and Cultural Exchange and How Sound Travels Underwater.' },
      { id: 'reading-test-19', position: 19, title: 'Reading Practice Test 19', questions: 50, duration: 30, file: 'data/reading/test-19.js', global: 'READING_SECTION_19', description: 'Complete the words, a campus email and message chain, and academic passages on The Rise of the Printing Press and Monarch Butterfly Migration.' },
      { id: 'reading-test-20', position: 20, title: 'Reading Practice Test 20', questions: 50, duration: 30, file: 'data/reading/test-20.js', global: 'READING_SECTION_20', description: 'Complete the words, a campus email and message chain, and academic passages on Democracy in Ancient Athens and How Batteries Store Energy.' },
    ],

    listening: [
      { id: 'listening-test-1',  position: 1,  title: 'Listening Practice Test 1',  questions: 47, duration: 29, file: 'data/listening/test-1.js',  global: 'LISTENING_SECTION_1',  description: 'Two-module listening: choose a response, conversations, announcements, and an academic talk on the Zeigarnik Effect (psychology).' },
      { id: 'listening-test-2',  position: 2,  title: 'Listening Practice Test 2',  questions: 47, duration: 29, file: 'data/listening/test-2.js',  global: 'LISTENING_SECTION_2',  description: 'Two-module listening with conversations, announcements, and an academic talk on social conformity (sociology).' },
      { id: 'listening-test-3',  position: 3,  title: 'Listening Practice Test 3',  questions: 47, duration: 29, file: 'data/listening/test-3.js',  global: 'LISTENING_SECTION_3',  description: 'Two-module listening with campus dialogues, announcements, and an academic talk on opportunity cost (economics).' },
      { id: 'listening-test-4',  position: 4,  title: 'Listening Practice Test 4',  questions: 47, duration: 29, file: 'data/listening/test-4.js',  global: 'LISTENING_SECTION_4',  description: 'Two-module listening with conversations, announcements, and an academic talk on cultural anthropology fieldwork.' },
      { id: 'listening-test-5',  position: 5,  title: 'Listening Practice Test 5',  questions: 47, duration: 29, file: 'data/listening/test-5.js',  global: 'LISTENING_SECTION_5',  description: 'Two-module listening with conversations, announcements, and an academic talk on photosynthesis (biology).' },
      { id: 'listening-test-6',  position: 6,  title: 'Listening Practice Test 6',  questions: 47, duration: 29, file: 'data/listening/test-6.js',  global: 'LISTENING_SECTION_6',  description: 'Two-module listening with conversations, announcements, and an academic talk on chemical bonding (chemistry).' },
      { id: 'listening-test-7',  position: 7,  title: 'Listening Practice Test 7',  questions: 47, duration: 29, file: 'data/listening/test-7.js',  global: 'LISTENING_SECTION_7',  description: 'Two-module listening with conversations, announcements, and an academic talk on the formation of stars (astronomy).' },
      { id: 'listening-test-8',  position: 8,  title: 'Listening Practice Test 8',  questions: 47, duration: 29, file: 'data/listening/test-8.js',  global: 'LISTENING_SECTION_8',  description: 'Two-module listening with conversations, announcements, and an academic talk on plate tectonics (geology).' },
      { id: 'listening-test-9',  position: 9,  title: 'Listening Practice Test 9',  questions: 47, duration: 29, file: 'data/listening/test-9.js',  global: 'LISTENING_SECTION_9',  description: 'Two-module listening with conversations, announcements, and an academic talk on the Silk Road trade (history).' },
      { id: 'listening-test-10', position: 10, title: 'Listening Practice Test 10', questions: 47, duration: 29, file: 'data/listening/test-10.js', global: 'LISTENING_SECTION_10', description: 'Two-module listening with conversations, announcements, and an academic talk on Impressionism (art history).' },
      { id: 'listening-test-11', position: 11, title: 'Listening Practice Test 11', questions: 47, duration: 29, file: 'data/listening/test-11.js', global: 'LISTENING_SECTION_11', description: 'Two-module listening with conversations, announcements, and an academic talk on language change (linguistics).' },
      { id: 'listening-test-12', position: 12, title: 'Listening Practice Test 12', questions: 47, duration: 29, file: 'data/listening/test-12.js', global: 'LISTENING_SECTION_12', description: 'Two-module listening with conversations, announcements, and an academic talk on Stoic ethics (philosophy).' },
      { id: 'listening-test-13', position: 13, title: 'Listening Practice Test 13', questions: 47, duration: 29, file: 'data/listening/test-13.js', global: 'LISTENING_SECTION_13', description: 'Two-module listening with conversations, announcements, and an academic talk on freshwater ecosystems (environmental science).' },
      { id: 'listening-test-14', position: 14, title: 'Listening Practice Test 14', questions: 47, duration: 29, file: 'data/listening/test-14.js', global: 'LISTENING_SECTION_14', description: 'Two-module listening with conversations, announcements, and an academic talk on the immune system (health science).' },
      { id: 'listening-test-15', position: 15, title: 'Listening Practice Test 15', questions: 47, duration: 29, file: 'data/listening/test-15.js', global: 'LISTENING_SECTION_15', description: 'Two-module listening with conversations, announcements, and an academic talk on machine learning basics (computer science).' },
      { id: 'listening-test-16', position: 16, title: 'Listening Practice Test 16', questions: 47, duration: 29, file: 'data/listening/test-16.js', global: 'LISTENING_SECTION_16', description: 'Two-module listening with conversations, announcements, and an academic talk on nonverbal communication (communication studies).' },
      { id: 'listening-test-17', position: 17, title: 'Listening Practice Test 17', questions: 47, duration: 29, file: 'data/listening/test-17.js', global: 'LISTENING_SECTION_17', description: 'Choose a response, campus conversations and announcements, and academic talks across two adaptive modules.' },
      { id: 'listening-test-18', position: 18, title: 'Listening Practice Test 18', questions: 47, duration: 29, file: 'data/listening/test-18.js', global: 'LISTENING_SECTION_18', description: 'Choose a response, campus conversations and announcements, and academic talks across two adaptive modules.' },
      { id: 'listening-test-19', position: 19, title: 'Listening Practice Test 19', questions: 47, duration: 29, file: 'data/listening/test-19.js', global: 'LISTENING_SECTION_19', description: 'Choose a response, campus conversations and announcements, and academic talks across two adaptive modules.' },
      { id: 'listening-test-20', position: 20, title: 'Listening Practice Test 20', questions: 47, duration: 29, file: 'data/listening/test-20.js', global: 'LISTENING_SECTION_20', description: 'Choose a response, campus conversations and announcements, and academic talks across two adaptive modules.' },
    ],

    writing: [
      { id: 'writing-test-1',  position: 1,  title: 'Writing Practice Test 1',  questions: 12, duration: 23, file: 'data/writing/test-1.js',  global: 'WRITING_SECTION_1',  description: 'Build-a-Sentence (10 items), a 7-minute email about a portal upload error, and an academic discussion on sin taxes for unhealthy foods.' },
      { id: 'writing-test-2',  position: 2,  title: 'Writing Practice Test 2',  questions: 12, duration: 23, file: 'data/writing/test-2.js',  global: 'WRITING_SECTION_2',  description: 'Build-a-Sentence (10 items), email about a delayed sociology textbook order, and a discussion on tablets vs. printed textbooks.' },
      { id: 'writing-test-3',  position: 3,  title: 'Writing Practice Test 3',  questions: 12, duration: 23, file: 'data/writing/test-3.js',  global: 'WRITING_SECTION_3',  description: 'Build-a-Sentence (10 items), email rescheduling peer-mentor training, and a discussion on banning private cars in city centers.' },
      { id: 'writing-test-4',  position: 4,  title: 'Writing Practice Test 4',  questions: 12, duration: 23, file: 'data/writing/test-4.js',  global: 'WRITING_SECTION_4',  description: 'Build-a-Sentence (10 items), email about a reassigned parking lot, and a discussion on banning single-use plastics.' },
      { id: 'writing-test-5',  position: 5,  title: 'Writing Practice Test 5',  questions: 12, duration: 23, file: 'data/writing/test-5.js',  global: 'WRITING_SECTION_5',  description: 'Build-a-Sentence (10 items), email to a missing group-project teammate, and a discussion on the four-day workweek.' },
      { id: 'writing-test-6',  position: 6,  title: 'Writing Practice Test 6',  questions: 12, duration: 23, file: 'data/writing/test-6.js',  global: 'WRITING_SECTION_6',  description: 'Build-a-Sentence (10 items), email following up with a guest researcher, and a discussion on AI tools in the classroom.' },
      { id: 'writing-test-7',  position: 7,  title: 'Writing Practice Test 7',  questions: 12, duration: 23, file: 'data/writing/test-7.js',  global: 'WRITING_SECTION_7',  description: 'Build-a-Sentence (10 items), email to a sublet tenant about a broken dishwasher, and a discussion on daily PE in schools.' },
      { id: 'writing-test-8',  position: 8,  title: 'Writing Practice Test 8',  questions: 12, duration: 23, file: 'data/writing/test-8.js',  global: 'WRITING_SECTION_8',  description: 'Build-a-Sentence (10 items), email about a wrong-size graduation regalia order, and a discussion on regulating influencer ads.' },
      { id: 'writing-test-9',  position: 9,  title: 'Writing Practice Test 9',  questions: 12, duration: 23, file: 'data/writing/test-9.js',  global: 'WRITING_SECTION_9',  description: 'Build-a-Sentence (10 items), email about missing campus-visit materials, and a discussion on standardized testing.' },
      { id: 'writing-test-10', position: 10, title: 'Writing Practice Test 10', questions: 12, duration: 23, file: 'data/writing/test-10.js', global: 'WRITING_SECTION_10', description: 'Build-a-Sentence (10 items), email asking for a workshop refund, and a discussion on city scooter rentals.' },
      { id: 'writing-test-11', position: 11, title: 'Writing Practice Test 11', questions: 12, duration: 23, file: 'data/writing/test-11.js', global: 'WRITING_SECTION_11', description: 'Build-a-Sentence (10 items), email about a rejected campaign poster, and a discussion on anonymous news sources.' },
      { id: 'writing-test-12', position: 12, title: 'Writing Practice Test 12', questions: 12, duration: 23, file: 'data/writing/test-12.js', global: 'WRITING_SECTION_12', description: 'Build-a-Sentence (10 items), email switching from pass/fail to a letter grade, and a discussion on remote work after the pandemic.' },
      { id: 'writing-test-13', position: 13, title: 'Writing Practice Test 13', questions: 12, duration: 23, file: 'data/writing/test-13.js', global: 'WRITING_SECTION_13', description: 'Build-a-Sentence (10 items), email about a bike storage deadline while away, and a discussion on green roofs vs. retrofits.' },
      { id: 'writing-test-14', position: 14, title: 'Writing Practice Test 14', questions: 12, duration: 23, file: 'data/writing/test-14.js', global: 'WRITING_SECTION_14', description: 'Build-a-Sentence (10 items), email about a missing course pack at the print shop, and a discussion on returning museum artifacts.' },
      { id: 'writing-test-15', position: 15, title: 'Writing Practice Test 15', questions: 12, duration: 23, file: 'data/writing/test-15.js', global: 'WRITING_SECTION_15', description: 'Build-a-Sentence (10 items), email about a club room reassignment, and a discussion on facial recognition in public spaces.' },
      { id: 'writing-test-16', position: 16, title: 'Writing Practice Test 16', questions: 12, duration: 23, file: 'data/writing/test-16.js', global: 'WRITING_SECTION_16', description: 'Build-a-Sentence (10 items), email checking on a summer research application, and a discussion on tourism caps in popular cities.' },
      { id: 'writing-test-17', position: 17, title: 'Writing Practice Test 17', questions: 12, duration: 23, file: 'data/writing/test-17.js', global: 'WRITING_SECTION_17', description: 'Build-a-Sentence (10 items), an email task, and an academic discussion.' },
      { id: 'writing-test-18', position: 18, title: 'Writing Practice Test 18', questions: 12, duration: 23, file: 'data/writing/test-18.js', global: 'WRITING_SECTION_18', description: 'Build-a-Sentence (10 items), an email task, and an academic discussion.' },
      { id: 'writing-test-19', position: 19, title: 'Writing Practice Test 19', questions: 12, duration: 23, file: 'data/writing/test-19.js', global: 'WRITING_SECTION_19', description: 'Build-a-Sentence (10 items), an email task, and an academic discussion.' },
      { id: 'writing-test-20', position: 20, title: 'Writing Practice Test 20', questions: 12, duration: 23, file: 'data/writing/test-20.js', global: 'WRITING_SECTION_20', description: 'Build-a-Sentence (10 items), an email task, and an academic discussion.' },
    ],

    speaking: [
      { id: 'speaking-test-1',  position: 1,  title: 'Speaking Practice Test 1',  questions: 11, duration: 8, file: 'data/speaking/test-1.js',  global: 'SPEAKING_TEST_1',  description: 'University library scene: 7 listen-and-repeat items + 4 interview questions on teamwork.' },
      { id: 'speaking-test-2',  position: 2,  title: 'Speaking Practice Test 2',  questions: 11, duration: 8, file: 'data/speaking/test-2.js',  global: 'SPEAKING_TEST_2',  description: 'Academic advising office scene with 4 interview questions on outdoor activities.' },
      { id: 'speaking-test-3',  position: 3,  title: 'Speaking Practice Test 3',  questions: 11, duration: 8, file: 'data/speaking/test-3.js',  global: 'SPEAKING_TEST_3',  description: 'Chemistry lab scene with 4 interview questions on learning styles.' },
      { id: 'speaking-test-4',  position: 4,  title: 'Speaking Practice Test 4',  questions: 11, duration: 8, file: 'data/speaking/test-4.js',  global: 'SPEAKING_TEST_4',  description: 'Student lounge scene with 4 interview questions on leisure time.' },
      { id: 'speaking-test-5',  position: 5,  title: 'Speaking Practice Test 5',  questions: 11, duration: 8, file: 'data/speaking/test-5.js',  global: 'SPEAKING_TEST_5',  description: 'Campus bookstore scene with 4 interview questions on shopping habits.' },
      { id: 'speaking-test-6',  position: 6,  title: 'Speaking Practice Test 6',  questions: 11, duration: 8, file: 'data/speaking/test-6.js',  global: 'SPEAKING_TEST_6',  description: 'Cafeteria scene with 4 interview questions on food and meals.' },
      { id: 'speaking-test-7',  position: 7,  title: 'Speaking Practice Test 7',  questions: 11, duration: 8, file: 'data/speaking/test-7.js',  global: 'SPEAKING_TEST_7',  description: 'Computer lab scene with 4 interview questions on technology use.' },
      { id: 'speaking-test-8',  position: 8,  title: 'Speaking Practice Test 8',  questions: 11, duration: 8, file: 'data/speaking/test-8.js',  global: 'SPEAKING_TEST_8',  description: 'Lecture hall scene with 4 interview questions on study habits.' },
      { id: 'speaking-test-9',  position: 9,  title: 'Speaking Practice Test 9',  questions: 11, duration: 8, file: 'data/speaking/test-9.js',  global: 'SPEAKING_TEST_9',  description: 'Museum scene with 4 interview questions on history and culture.' },
      { id: 'speaking-test-10', position: 10, title: 'Speaking Practice Test 10', questions: 11, duration: 8, file: 'data/speaking/test-10.js', global: 'SPEAKING_TEST_10', description: 'Zoo scene with 4 interview questions on animals and the environment.' },
      { id: 'speaking-test-11', position: 11, title: 'Speaking Practice Test 11', questions: 11, duration: 8, file: 'data/speaking/test-11.js', global: 'SPEAKING_TEST_11', description: 'Teaching kitchen scene with 4 interview questions on cooking and food.' },
      { id: 'speaking-test-12', position: 12, title: 'Speaking Practice Test 12', questions: 11, duration: 8, file: 'data/speaking/test-12.js', global: 'SPEAKING_TEST_12', description: 'Restaurant scene with 4 interview questions on dining out.' },
      { id: 'speaking-test-13', position: 13, title: 'Speaking Practice Test 13', questions: 11, duration: 8, file: 'data/speaking/test-13.js', global: 'SPEAKING_TEST_13', description: 'Medical clinic scene with 4 interview questions on health and wellness.' },
      { id: 'speaking-test-14', position: 14, title: 'Speaking Practice Test 14', questions: 11, duration: 8, file: 'data/speaking/test-14.js', global: 'SPEAKING_TEST_14', description: 'Supermarket scene with 4 interview questions on groceries and habits.' },
      { id: 'speaking-test-15', position: 15, title: 'Speaking Practice Test 15', questions: 11, duration: 8, file: 'data/speaking/test-15.js', global: 'SPEAKING_TEST_15', description: 'Coffee shop scene with 4 interview questions on hobbies and relaxation.' },
      { id: 'speaking-test-16', position: 16, title: 'Speaking Practice Test 16', questions: 11, duration: 8, file: 'data/speaking/test-16.js', global: 'SPEAKING_TEST_16', description: 'Train station scene with 4 interview questions on travel and commuting.' },
      { id: 'speaking-test-17', position: 17, title: 'Speaking Practice Test 17', questions: 11, duration: 8, file: 'data/speaking/test-17.js', global: 'SPEAKING_SECTION_17', description: 'Listen and repeat over an airport terminal scene, then a four-question video interview on time management.' },
      { id: 'speaking-test-18', position: 18, title: 'Speaking Practice Test 18', questions: 11, duration: 8, file: 'data/speaking/test-18.js', global: 'SPEAKING_SECTION_18', description: 'Listen and repeat over a campus fitness center scene, then a four-question video interview on music listening habits.' },
      { id: 'speaking-test-19', position: 19, title: 'Speaking Practice Test 19', questions: 11, duration: 8, file: 'data/speaking/test-19.js', global: 'SPEAKING_SECTION_19', description: 'Listen and repeat over a post office scene, then a four-question video interview on learning a new skill.' },
      { id: 'speaking-test-20', position: 20, title: 'Speaking Practice Test 20', questions: 11, duration: 8, file: 'data/speaking/test-20.js', global: 'SPEAKING_SECTION_20', description: 'Listen and repeat over a botanical garden visitor center scene, then a four-question video interview on friendship and social connections.' },
    ]
  }
};
