/**
 * TOEFL Speaking — Test 16 (2026 format) — AUTO-GENERATED
 * Source: scripts/speaking-images/scenes-data.js + scripts/speaking-images/interview-data.js
 * Regenerate with: node scripts/generate-speaking-data.js
 *
 * 11 items per test:
 *   - 7 Listen-and-Repeat items (scene image + per-sentence highlight, 8/10/12s response by sentence length)
 *   - 4 Interview items (pre-recorded video from R2 + 45s response)
 */
const R2_SPEAKING_BASE = '/assets/video/speaking/test-16';
window.SPEAKING_TEST_16 = {
  "id": "speaking-test-16",
  "title": "Speaking Practice Test 16",
  "format": "2026",
  "sceneImage": "/assets/images/speaking/test-16.png",
  "sceneTrace": "/assets/images/speaking/test-16.trace.json",
  "partMapping": "/assets/images/speaking/part-mapping.json",
  "sceneTheme": "Train Station",
  "sceneParts": [
    "Departure board",
    "Ticket counter",
    "Waiting passengers",
    "Help desk",
    "Priority seating",
    "Ticket machine",
    "Platform sign"
  ],
  "listenAndRepeat": [
    {
      "id": "st16-rep1",
      "taskNumber": 1,
      "type": "listen_and_repeat",
      "partIndex": 0,
      "sentence": "Welcome to the central train station.",
      "audioSrc": "/assets/audio/speaking/test-16/s1.mp3",
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
      "id": "st16-rep2",
      "taskNumber": 2,
      "type": "listen_and_repeat",
      "partIndex": 1,
      "sentence": "Please keep your ticket ready.",
      "audioSrc": "/assets/audio/speaking/test-16/s2.mp3",
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
      "id": "st16-rep3",
      "taskNumber": 3,
      "type": "listen_and_repeat",
      "partIndex": 2,
      "sentence": "Departure times are shown on the overhead boards.",
      "audioSrc": "/assets/audio/speaking/test-16/s3.mp3",
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
      "id": "st16-rep4",
      "taskNumber": 4,
      "type": "listen_and_repeat",
      "partIndex": 3,
      "sentence": "Priority seating is reserved for elderly and disabled passengers.",
      "audioSrc": "/assets/audio/speaking/test-16/s4.mp3",
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
      "id": "st16-rep5",
      "taskNumber": 5,
      "type": "listen_and_repeat",
      "partIndex": 4,
      "sentence": "Luggage should be kept with you at all times on the platform.",
      "audioSrc": "/assets/audio/speaking/test-16/s5.mp3",
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
      "id": "st16-rep6",
      "taskNumber": 6,
      "type": "listen_and_repeat",
      "partIndex": 5,
      "sentence": "If you miss your train, you may exchange your ticket at the help desk.",
      "audioSrc": "/assets/audio/speaking/test-16/s6.mp3",
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
      "id": "st16-rep7",
      "taskNumber": 7,
      "type": "listen_and_repeat",
      "partIndex": 6,
      "sentence": "Smoking, skateboarding, and eating hot food are not permitted inside the station building.",
      "audioSrc": "/assets/audio/speaking/test-16/s7.mp3",
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
    "topic": "Decision Making",
    "interviewerName": "Dr. Daniel Foster",
    "scenario": "You have agreed to participate in a psychology department research study about how people make decisions. You will have a short online interview with a researcher.",
    "introVideo": R2_SPEAKING_BASE + '/Test16_intro.mp4',
    "questions": [
      {
        "id": "st16-int1",
        "taskNumber": 8,
        "type": "interview_video",
        "questionType": "personal_recall",
        "videoSrc": R2_SPEAKING_BASE + '/Test16_q1.mp4',
        "prompt": "Think about a difficult decision you had to make recently in your daily life. What was it, and how did you decide what to do?",
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
        "id": "st16-int2",
        "taskNumber": 9,
        "type": "interview_video",
        "questionType": "preference_opinion",
        "videoSrc": R2_SPEAKING_BASE + '/Test16_q2.mp4',
        "prompt": "When facing a decision, do you tend to decide quickly based on instinct, or do you prefer to think carefully and weigh your options? Why?",
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
        "id": "st16-int3",
        "taskNumber": 10,
        "type": "interview_video",
        "questionType": "agree_disagree",
        "videoSrc": R2_SPEAKING_BASE + '/Test16_q3.mp4',
        "prompt": "Do you think important decisions should involve advice from other people, or is it better to rely mainly on your own judgment? Explain.",
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
        "id": "st16-int4",
        "taskNumber": 11,
        "type": "interview_video",
        "questionType": "policy_prediction",
        "videoSrc": R2_SPEAKING_BASE + '/Test16_q4.mp4',
        "prompt": "In the future, do you think people will rely more on apps and artificial intelligence to help them make everyday decisions? What might be one benefit and one risk?",
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
window.SPEAKING_SECTION_16 = window.SPEAKING_TEST_16;
