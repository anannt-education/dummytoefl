/**
 * TOEFL Speaking — Test 1 (2026 format) — AUTO-GENERATED
 * Source: scripts/speaking-images/scenes-data.js + scripts/speaking-images/interview-data.js
 * Regenerate with: node scripts/generate-speaking-data.js
 *
 * 11 items per test:
 *   - 7 Listen-and-Repeat items (scene image + per-sentence highlight, 8/10/12s response by sentence length)
 *   - 4 Interview items (pre-recorded video from R2 + 45s response)
 */
const R2_SPEAKING_BASE = '/assets/video/speaking/test-1';
window.SPEAKING_TEST_1 = {
  "id": "speaking-test-1",
  "title": "Speaking Practice Test 1",
  "format": "2026",
  "sceneImage": "/assets/images/speaking/test-1.png",
  "sceneTrace": "/assets/images/speaking/test-1.trace.json",
  "partMapping": "/assets/images/speaking/part-mapping.json",
  "sceneTheme": "University Library",
  "sceneParts": [
    "Circulation desk",
    "Book stacks",
    "Study carrels",
    "Self-checkout machine",
    "Student at laptop",
    "Reserved books cart",
    "Quiet Zone sign"
  ],
  "listenAndRepeat": [
    {
      "id": "st1-rep1",
      "taskNumber": 1,
      "type": "listen_and_repeat",
      "partIndex": 0,
      "sentence": "Welcome to the campus library.",
      "audioSrc": "/assets/audio/speaking/test-1/s1.mp3?v=20261006",
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
      "id": "st1-rep2",
      "taskNumber": 2,
      "type": "listen_and_repeat",
      "partIndex": 1,
      "sentence": "Please keep your phone on silent.",
      "audioSrc": "/assets/audio/speaking/test-1/s2.mp3?v=20261006",
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
      "id": "st1-rep3",
      "taskNumber": 3,
      "type": "listen_and_repeat",
      "partIndex": 2,
      "sentence": "Books can be borrowed for up to three weeks.",
      "audioSrc": "/assets/audio/speaking/test-1/s3.mp3?v=20261006",
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
      "id": "st1-rep4",
      "taskNumber": 4,
      "type": "listen_and_repeat",
      "partIndex": 3,
      "sentence": "Study carrels are located on the quiet upper floor.",
      "audioSrc": "/assets/audio/speaking/test-1/s4.mp3?v=20261006",
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
      "id": "st1-rep5",
      "taskNumber": 5,
      "type": "listen_and_repeat",
      "partIndex": 4,
      "sentence": "The self-checkout machine accepts student cards and guest passes.",
      "audioSrc": "/assets/audio/speaking/test-1/s5.mp3?v=20261006",
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
      "id": "st1-rep6",
      "taskNumber": 6,
      "type": "listen_and_repeat",
      "partIndex": 5,
      "sentence": "If a book is already checked out, please reserve it at the front desk.",
      "audioSrc": "/assets/audio/speaking/test-1/s6.mp3?v=20261006",
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
      "id": "st1-rep7",
      "taskNumber": 7,
      "type": "listen_and_repeat",
      "partIndex": 6,
      "sentence": "Food and drinks are not permitted near the bookshelves, though water bottles may be carried.",
      "audioSrc": "/assets/audio/speaking/test-1/s7.mp3?v=20261006",
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
    "topic": "Teamwork",
    "interviewerName": "Dr. Sarah Chen",
    "scenario": "You have agreed to participate in a research study about teamwork. You will have a short online interview with a researcher. The researcher will ask you some questions.",
    "introVideo": R2_SPEAKING_BASE + '/Test1_intro.mp4',
    "questions": [
      {
        "id": "st1-int1",
        "taskNumber": 8,
        "type": "interview_video",
        "questionType": "personal_recall",
        "videoSrc": R2_SPEAKING_BASE + '/Test1_q1.mp4',
        "prompt": "Think about a time you worked on a group project at school or at work. What was the project about, and what was your role in the group?",
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
        "id": "st1-int2",
        "taskNumber": 9,
        "type": "interview_video",
        "questionType": "preference_opinion",
        "videoSrc": R2_SPEAKING_BASE + '/Test1_q2.mp4',
        "prompt": "When you work in a group, do you prefer to take the lead or follow directions from others? Why?",
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
        "id": "st1-int3",
        "taskNumber": 10,
        "type": "interview_video",
        "questionType": "agree_disagree",
        "videoSrc": R2_SPEAKING_BASE + '/Test1_q3.mp4',
        "prompt": "Some people believe that group projects help students develop important skills for professional life. Do you agree with this idea? Why or why not?",
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
        "id": "st1-int4",
        "taskNumber": 11,
        "type": "interview_video",
        "questionType": "policy_prediction",
        "videoSrc": R2_SPEAKING_BASE + '/Test1_q4.mp4',
        "prompt": "Do you think teamwork helps people improve their communication skills, or do you feel it slows down individual progress? Explain your reasoning.",
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
window.SPEAKING_SECTION_1 = window.SPEAKING_TEST_1;
