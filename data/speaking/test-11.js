/**
 * TOEFL Speaking — Test 11 (2026 format) — AUTO-GENERATED
 * Source: scripts/speaking-images/scenes-data.js + scripts/speaking-images/interview-data.js
 * Regenerate with: node scripts/generate-speaking-data.js
 *
 * 11 items per test:
 *   - 7 Listen-and-Repeat items (scene image + per-sentence highlight, 8/10/12s response by sentence length)
 *   - 4 Interview items (pre-recorded video from R2 + 45s response)
 */
const R2_SPEAKING_BASE = '/assets/video/speaking/test-11';
window.SPEAKING_TEST_11 = {
  "id": "speaking-test-11",
  "title": "Speaking Practice Test 11",
  "format": "2026",
  "sceneImage": "/assets/images/speaking/test-11.png",
  "sceneTrace": "/assets/images/speaking/test-11.trace.json",
  "partMapping": "/assets/images/speaking/part-mapping.json",
  "sceneTheme": "Community Cooking Class",
  "sceneParts": [
    "Chef instructor",
    "Student prep counters",
    "Stove with pots",
    "Oven",
    "Sink",
    "Refrigerator",
    "Ingredient shelf"
  ],
  "listenAndRepeat": [
    {
      "id": "st11-rep1",
      "taskNumber": 1,
      "type": "listen_and_repeat",
      "partIndex": 0,
      "sentence": "Welcome to today's cooking class.",
      "audioSrc": "/assets/audio/speaking/test-11/s1.mp3",
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
      "id": "st11-rep2",
      "taskNumber": 2,
      "type": "listen_and_repeat",
      "partIndex": 1,
      "sentence": "Please wash your hands before starting.",
      "audioSrc": "/assets/audio/speaking/test-11/s2.mp3",
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
      "id": "st11-rep3",
      "taskNumber": 3,
      "type": "listen_and_repeat",
      "partIndex": 2,
      "sentence": "Knives and sharp tools must be used very carefully.",
      "audioSrc": "/assets/audio/speaking/test-11/s3.mp3",
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
      "id": "st11-rep4",
      "taskNumber": 4,
      "type": "listen_and_repeat",
      "partIndex": 3,
      "sentence": "All ingredients are already prepared on the center counter for you.",
      "audioSrc": "/assets/audio/speaking/test-11/s4.mp3",
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
      "id": "st11-rep5",
      "taskNumber": 5,
      "type": "listen_and_repeat",
      "partIndex": 4,
      "sentence": "The stove and oven should only be operated with an instructor nearby.",
      "audioSrc": "/assets/audio/speaking/test-11/s5.mp3",
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
      "id": "st11-rep6",
      "taskNumber": 6,
      "type": "listen_and_repeat",
      "partIndex": 5,
      "sentence": "If you cut yourself, rinse the wound and report to the instructor immediately.",
      "audioSrc": "/assets/audio/speaking/test-11/s6.mp3",
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
      "id": "st11-rep7",
      "taskNumber": 7,
      "type": "listen_and_repeat",
      "partIndex": 6,
      "sentence": "Clean dishes are stored in the cabinet above the sink, and glassware on the right.",
      "audioSrc": "/assets/audio/speaking/test-11/s7.mp3",
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
    "topic": "Online Learning",
    "interviewerName": "Dr. Megan Scott",
    "scenario": "You have agreed to participate in an education department research study about online learning. You will have a short online interview with a researcher.",
    "introVideo": R2_SPEAKING_BASE + '/Test11_intro.mp4',
    "questions": [
      {
        "id": "st11-int1",
        "taskNumber": 8,
        "type": "interview_video",
        "questionType": "personal_recall",
        "videoSrc": R2_SPEAKING_BASE + '/Test11_q1.mp4',
        "prompt": "Have you ever taken a class or completed a course online? Tell me about the experience and how it compared to learning in a classroom.",
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
        "id": "st11-int2",
        "taskNumber": 9,
        "type": "interview_video",
        "questionType": "preference_opinion",
        "videoSrc": R2_SPEAKING_BASE + '/Test11_q2.mp4',
        "prompt": "Do you prefer learning online or in a physical classroom? What is the main reason for your preference?",
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
        "id": "st11-int3",
        "taskNumber": 10,
        "type": "interview_video",
        "questionType": "agree_disagree",
        "videoSrc": R2_SPEAKING_BASE + '/Test11_q3.mp4',
        "prompt": "Some educators believe that online courses can be just as effective as in-person classes if designed well. Do you agree or disagree?",
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
        "id": "st11-int4",
        "taskNumber": 11,
        "type": "interview_video",
        "questionType": "policy_prediction",
        "videoSrc": R2_SPEAKING_BASE + '/Test11_q4.mp4',
        "prompt": "Do you think universities will offer more online degrees in the future, and would you consider earning a degree entirely online? Explain.",
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
window.SPEAKING_SECTION_11 = window.SPEAKING_TEST_11;
