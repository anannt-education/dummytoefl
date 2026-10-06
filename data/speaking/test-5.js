/**
 * TOEFL Speaking — Test 5 (2026 format) — AUTO-GENERATED
 * Source: scripts/speaking-images/scenes-data.js + scripts/speaking-images/interview-data.js
 * Regenerate with: node scripts/generate-speaking-data.js
 *
 * 11 items per test:
 *   - 7 Listen-and-Repeat items (scene image + per-sentence highlight, 8/10/12s response by sentence length)
 *   - 4 Interview items (pre-recorded video from R2 + 45s response)
 */
const R2_SPEAKING_BASE = '/assets/video/speaking/test-5';
window.SPEAKING_TEST_5 = {
  "id": "speaking-test-5",
  "title": "Speaking Practice Test 5",
  "format": "2026",
  "sceneImage": "/assets/images/speaking/test-5.png",
  "sceneTrace": "/assets/images/speaking/test-5.trace.json",
  "partMapping": "/assets/images/speaking/part-mapping.json",
  "sceneTheme": "Campus Bookstore",
  "sceneParts": [
    "Textbook shelves",
    "Checkout counter",
    "Browsing student",
    "Supplies display",
    "Merchandise rack",
    "Bulletin board",
    "Calculator case"
  ],
  "listenAndRepeat": [
    {
      "id": "st5-rep1",
      "taskNumber": 1,
      "type": "listen_and_repeat",
      "partIndex": 0,
      "sentence": "Welcome to the university bookstore.",
      "audioSrc": "/assets/audio/speaking/test-5/s1.mp3",
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
      "id": "st5-rep2",
      "taskNumber": 2,
      "type": "listen_and_repeat",
      "partIndex": 1,
      "sentence": "Please keep your bag with you.",
      "audioSrc": "/assets/audio/speaking/test-5/s2.mp3",
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
      "id": "st5-rep3",
      "taskNumber": 3,
      "type": "listen_and_repeat",
      "partIndex": 2,
      "sentence": "Textbook rentals must be returned by the final exam week.",
      "audioSrc": "/assets/audio/speaking/test-5/s3.mp3",
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
      "id": "st5-rep4",
      "taskNumber": 4,
      "type": "listen_and_repeat",
      "partIndex": 3,
      "sentence": "Used copies are shelved next to new ones at a discount.",
      "audioSrc": "/assets/audio/speaking/test-5/s4.mp3",
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
      "id": "st5-rep5",
      "taskNumber": 5,
      "type": "listen_and_repeat",
      "partIndex": 4,
      "sentence": "School supplies, merchandise, and snacks are available on the second floor.",
      "audioSrc": "/assets/audio/speaking/test-5/s5.mp3",
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
      "id": "st5-rep6",
      "taskNumber": 6,
      "type": "listen_and_repeat",
      "partIndex": 5,
      "sentence": "If a textbook is out of stock, you can order it online through our website.",
      "audioSrc": "/assets/audio/speaking/test-5/s6.mp3",
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
      "id": "st5-rep7",
      "taskNumber": 7,
      "type": "listen_and_repeat",
      "partIndex": 6,
      "sentence": "Receipts are required for all returns, and digital codes cannot be refunded once opened.",
      "audioSrc": "/assets/audio/speaking/test-5/s7.mp3",
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
    "topic": "Public Speaking",
    "interviewerName": "Dr. Lisa Wang",
    "scenario": "You have agreed to participate in a communication department research study about public speaking. You will have a short online interview with a researcher.",
    "introVideo": R2_SPEAKING_BASE + '/Test5_intro.mp4',
    "questions": [
      {
        "id": "st5-int1",
        "taskNumber": 8,
        "type": "interview_video",
        "questionType": "personal_recall",
        "videoSrc": R2_SPEAKING_BASE + '/Test5_q1.mp4',
        "prompt": "Describe a recent time you had to speak in front of a group. What was the topic, and how did you prepare for it?",
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
        "id": "st5-int2",
        "taskNumber": 9,
        "type": "interview_video",
        "questionType": "preference_opinion",
        "videoSrc": R2_SPEAKING_BASE + '/Test5_q2.mp4',
        "prompt": "When speaking in front of an audience, how do you usually feel, and what strategies do you use to manage your nerves?",
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
        "id": "st5-int3",
        "taskNumber": 10,
        "type": "interview_video",
        "questionType": "agree_disagree",
        "videoSrc": R2_SPEAKING_BASE + '/Test5_q3.mp4',
        "prompt": "Do you think public speaking courses should be required for all university students, regardless of their major? Why or why not?",
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
        "id": "st5-int4",
        "taskNumber": 11,
        "type": "interview_video",
        "questionType": "policy_prediction",
        "videoSrc": R2_SPEAKING_BASE + '/Test5_q4.mp4',
        "prompt": "With email and video calls becoming more common, do you believe formal public speaking skills are still important in the modern workplace? Explain.",
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
window.SPEAKING_SECTION_5 = window.SPEAKING_TEST_5;
