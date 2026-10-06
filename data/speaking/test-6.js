/**
 * TOEFL Speaking — Test 6 (2026 format) — AUTO-GENERATED
 * Source: scripts/speaking-images/scenes-data.js + scripts/speaking-images/interview-data.js
 * Regenerate with: node scripts/generate-speaking-data.js
 *
 * 11 items per test:
 *   - 7 Listen-and-Repeat items (scene image + per-sentence highlight, 8/10/12s response by sentence length)
 *   - 4 Interview items (pre-recorded video from R2 + 45s response)
 */
const R2_SPEAKING_BASE = '/assets/video/speaking/test-6';
window.SPEAKING_TEST_6 = {
  "id": "speaking-test-6",
  "title": "Speaking Practice Test 6",
  "format": "2026",
  "sceneImage": "/assets/images/speaking/test-6.png",
  "sceneTrace": "/assets/images/speaking/test-6.trace.json",
  "partMapping": "/assets/images/speaking/part-mapping.json",
  "sceneTheme": "University Cafeteria",
  "sceneParts": [
    "Hot food counter",
    "Salad bar",
    "Beverage dispenser",
    "Cashier at register",
    "Dining tables",
    "Tray return window",
    "Menu board"
  ],
  "listenAndRepeat": [
    {
      "id": "st6-rep1",
      "taskNumber": 1,
      "type": "listen_and_repeat",
      "partIndex": 0,
      "sentence": "Welcome to the main dining hall.",
      "audioSrc": "/assets/audio/speaking/test-6/s1.mp3",
      "recordingTime": 8,
      "scoringCriteria": {
        "1": "Unintelligible or no response.",
        "2": "Significant errors, hard to understand.",
        "3": "Several errors but sentence mostly intelligible.",
        "4": "One minor error in pronunciation or rhythm.",
        "5": "Perfect repetition with natural intonation and rhythm."
      }
    },
    {
      "id": "st6-rep2",
      "taskNumber": 2,
      "type": "listen_and_repeat",
      "partIndex": 1,
      "sentence": "Please return your tray when finished.",
      "audioSrc": "/assets/audio/speaking/test-6/s2.mp3",
      "recordingTime": 8,
      "scoringCriteria": {
        "1": "Unintelligible or no response.",
        "2": "Significant errors, hard to understand.",
        "3": "Several errors but sentence mostly intelligible.",
        "4": "One minor error in pronunciation or rhythm.",
        "5": "Perfect repetition with natural intonation and rhythm."
      }
    },
    {
      "id": "st6-rep3",
      "taskNumber": 3,
      "type": "listen_and_repeat",
      "partIndex": 2,
      "sentence": "Daily menus are displayed above each food station.",
      "audioSrc": "/assets/audio/speaking/test-6/s3.mp3",
      "recordingTime": 10,
      "scoringCriteria": {
        "1": "Unintelligible or no response.",
        "2": "Significant errors, hard to understand.",
        "3": "Several errors but sentence mostly intelligible.",
        "4": "One minor error in pronunciation or rhythm.",
        "5": "Perfect repetition with natural intonation and rhythm."
      }
    },
    {
      "id": "st6-rep4",
      "taskNumber": 4,
      "type": "listen_and_repeat",
      "partIndex": 3,
      "sentence": "Allergen information can be found on the posted labels.",
      "audioSrc": "/assets/audio/speaking/test-6/s4.mp3",
      "recordingTime": 10,
      "scoringCriteria": {
        "1": "Unintelligible or no response.",
        "2": "Significant errors, hard to understand.",
        "3": "Several errors but sentence mostly intelligible.",
        "4": "One minor error in pronunciation or rhythm.",
        "5": "Perfect repetition with natural intonation and rhythm."
      }
    },
    {
      "id": "st6-rep5",
      "taskNumber": 5,
      "type": "listen_and_repeat",
      "partIndex": 4,
      "sentence": "Students must swipe their meal card before taking a plate.",
      "audioSrc": "/assets/audio/speaking/test-6/s5.mp3",
      "recordingTime": 10,
      "scoringCriteria": {
        "1": "Unintelligible or no response.",
        "2": "Significant errors, hard to understand.",
        "3": "Several errors but sentence mostly intelligible.",
        "4": "One minor error in pronunciation or rhythm.",
        "5": "Perfect repetition with natural intonation and rhythm."
      }
    },
    {
      "id": "st6-rep6",
      "taskNumber": 6,
      "type": "listen_and_repeat",
      "partIndex": 5,
      "sentence": "If you need a special dietary meal, please ask the chef at the hot food counter.",
      "audioSrc": "/assets/audio/speaking/test-6/s6.mp3",
      "recordingTime": 12,
      "scoringCriteria": {
        "1": "Unintelligible or no response.",
        "2": "Significant errors, hard to understand.",
        "3": "Several errors but sentence mostly intelligible.",
        "4": "One minor error in pronunciation or rhythm.",
        "5": "Perfect repetition with natural intonation and rhythm."
      }
    },
    {
      "id": "st6-rep7",
      "taskNumber": 7,
      "type": "listen_and_repeat",
      "partIndex": 6,
      "sentence": "Recyclable containers are available at the beverage area for students eating outside the cafeteria.",
      "audioSrc": "/assets/audio/speaking/test-6/s7.mp3",
      "recordingTime": 12,
      "scoringCriteria": {
        "1": "Unintelligible or no response.",
        "2": "Significant errors, hard to understand.",
        "3": "Several errors but sentence mostly intelligible.",
        "4": "One minor error in pronunciation or rhythm.",
        "5": "Perfect repetition with natural intonation and rhythm."
      }
    }
  ],
  "interview": {
    "topic": "Community Service",
    "interviewerName": "Dr. Michael Torres",
    "scenario": "You have agreed to participate in a sociology department research study about community service and volunteering. You will have a short online interview with a researcher.",
    "introVideo": R2_SPEAKING_BASE + '/Test6_intro.mp4',
    "questions": [
      {
        "id": "st6-int1",
        "taskNumber": 8,
        "type": "interview_video",
        "questionType": "personal_recall",
        "videoSrc": R2_SPEAKING_BASE + '/Test6_q1.mp4',
        "prompt": "Tell me about a time you volunteered or helped your community in some way. What were your responsibilities?",
        "responseTime": 45,
        "prepTime": 0,
        "scoringRubric": {
          "0": "No response or completely unintelligible.",
          "1": "Very limited response with almost no relevant content.",
          "2": "Underdeveloped response with vague detail. Frequent pauses.",
          "3": "Partially developed response with limited detail. Noticeable pauses.",
          "4": "Generally clear response with adequate detail. Minor hesitations.",
          "5": "Clear, well-developed response with specific personal details. Natural delivery."
        }
      },
      {
        "id": "st6-int2",
        "taskNumber": 9,
        "type": "interview_video",
        "questionType": "preference_opinion",
        "videoSrc": R2_SPEAKING_BASE + '/Test6_q2.mp4',
        "prompt": "What motivates you to volunteer, and how does it usually make you feel afterward?",
        "responseTime": 45,
        "prepTime": 0,
        "scoringRubric": {
          "0": "No response or completely unintelligible.",
          "1": "Very limited response with almost no relevant content.",
          "2": "Underdeveloped response with vague detail. Frequent pauses.",
          "3": "Partially developed response with limited detail. Noticeable pauses.",
          "4": "Generally clear response with adequate detail. Minor hesitations.",
          "5": "Clear, well-developed response with specific personal details. Natural delivery."
        }
      },
      {
        "id": "st6-int3",
        "taskNumber": 10,
        "type": "interview_video",
        "questionType": "agree_disagree",
        "videoSrc": R2_SPEAKING_BASE + '/Test6_q3.mp4',
        "prompt": "Some universities require students to complete volunteer hours before graduation. Do you think this is a good policy? Why or why not?",
        "responseTime": 45,
        "prepTime": 0,
        "scoringRubric": {
          "0": "No response or completely unintelligible.",
          "1": "Very limited response with almost no reasoning.",
          "2": "Underdeveloped response with weak reasoning.",
          "3": "Partially developed response with limited reasoning.",
          "4": "Generally clear response with adequate reasoning. Minor hesitations.",
          "5": "Clear, well-developed response with strong reasoning. Natural delivery."
        }
      },
      {
        "id": "st6-int4",
        "taskNumber": 11,
        "type": "interview_video",
        "questionType": "policy_prediction",
        "videoSrc": R2_SPEAKING_BASE + '/Test6_q4.mp4',
        "prompt": "Do you think virtual volunteering, such as online tutoring or remote charity work, will become more popular than in-person service in the future?",
        "responseTime": 45,
        "prepTime": 0,
        "scoringRubric": {
          "0": "No response or completely unintelligible.",
          "1": "Very limited response with almost no reasoning.",
          "2": "Underdeveloped response with weak reasoning.",
          "3": "Partially developed response with limited reasoning.",
          "4": "Generally clear response with adequate reasoning. Minor hesitations.",
          "5": "Clear, well-developed response with strong reasoning. Natural delivery."
        }
      }
    ]
  }
};
window.SPEAKING_SECTION_6 = window.SPEAKING_TEST_6;
