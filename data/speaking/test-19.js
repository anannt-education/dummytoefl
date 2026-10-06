/**
 * TOEFL Speaking, Test 19 (2026 format), AUTO-GENERATED
 * Source: scripts/speaking-images/scenes-17-20.js + interview-data-pack-2.js
 * Regenerate with: node scripts/generate-speaking-data-17-20.js
 *
 * 11 items:
 *   7 Listen and Repeat (composited scene, exact per-part highlight, 8/10/12s by sentence length)
 *   4 Take an Interview (pre-recorded video, 45s response, no preparation time)
 */
const R2_SPEAKING_BASE = '/assets/video/speaking/test-19';
window.SPEAKING_TEST_19 = {
  "id": "speaking-test-19",
  "title": "Speaking Practice Test 19",
  "format": "2026",
  "sceneImage": "/assets/images/speaking/test-19.png",
  "sceneTrace": "/assets/images/speaking/test-19.trace.json",
  "partMapping": "/assets/images/speaking/part-mapping.json",
  "sceneTheme": "Post Office",
  "sceneParts": [
    "Service counter",
    "Stamp display",
    "Parcel scales",
    "Self-service kiosk",
    "Post office boxes",
    "Packing table",
    "Queue barrier"
  ],
  "listenAndRepeat": [
    {
      "id": "st19-rep1",
      "taskNumber": 1,
      "type": "listen_and_repeat",
      "partIndex": 0,
      "sentence": "Please take a number before approaching the service counter.",
      "audioSrc": "/assets/audio/speaking/test-19/s1.mp3",
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
      "id": "st19-rep2",
      "taskNumber": 2,
      "type": "listen_and_repeat",
      "partIndex": 1,
      "sentence": "Stamps and envelopes are sold at the display rack.",
      "audioSrc": "/assets/audio/speaking/test-19/s2.mp3",
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
      "id": "st19-rep3",
      "taskNumber": 3,
      "type": "listen_and_repeat",
      "partIndex": 2,
      "sentence": "Weigh your parcel on the scales before joining the queue.",
      "audioSrc": "/assets/audio/speaking/test-19/s3.mp3",
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
      "id": "st19-rep4",
      "taskNumber": 4,
      "type": "listen_and_repeat",
      "partIndex": 3,
      "sentence": "The self-service kiosk accepts cards but does not accept cash.",
      "audioSrc": "/assets/audio/speaking/test-19/s4.mp3",
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
      "id": "st19-rep5",
      "taskNumber": 5,
      "type": "listen_and_repeat",
      "partIndex": 4,
      "sentence": "Box holders may collect their mail from the boxes at any hour.",
      "audioSrc": "/assets/audio/speaking/test-19/s5.mp3",
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
      "id": "st19-rep6",
      "taskNumber": 6,
      "type": "listen_and_repeat",
      "partIndex": 5,
      "sentence": "Tape, string and spare boxes are provided free of charge at the packing table.",
      "audioSrc": "/assets/audio/speaking/test-19/s6.mp3",
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
      "id": "st19-rep7",
      "taskNumber": 7,
      "type": "listen_and_repeat",
      "partIndex": 6,
      "sentence": "Please wait behind the barrier until a member of staff calls you forward.",
      "audioSrc": "/assets/audio/speaking/test-19/s7.mp3",
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
    "topic": "Learning a New Skill",
    "interviewerName": "Dr. Olivia Reed",
    "scenario": "You have agreed to participate in an education department research study about learning new skills. You will have a short online interview with a researcher.",
    "introVideo": R2_SPEAKING_BASE + '/Test19_intro_v2.mp4',
    "questions": [
      {
        "id": "st19-int1",
        "taskNumber": 8,
        "type": "interview_video",
        "questionType": "personal_recall",
        "videoSrc": R2_SPEAKING_BASE + '/Test19_q1_v2.mp4',
        "prompt": "Tell me about a skill you have learned in the past two years, such as a language, an instrument, or something for your job. How did you go about learning it, and what helped you most?",
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
        "id": "st19-int2",
        "taskNumber": 9,
        "type": "interview_video",
        "questionType": "preference_opinion",
        "videoSrc": R2_SPEAKING_BASE + '/Test19_q2_v2.mp4',
        "prompt": "That is interesting. When you want to learn something new, do you prefer a formal class with a teacher and a fixed schedule, or self-guided methods like online videos and tutorials? What makes that approach work for you?",
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
        "id": "st19-int3",
        "taskNumber": 10,
        "type": "interview_video",
        "questionType": "agree_disagree",
        "videoSrc": R2_SPEAKING_BASE + '/Test19_q3_v2.mp4',
        "prompt": "I understand. Some people believe it becomes much harder to learn new skills as you get older, while others think age makes very little difference. Do you agree with the first view, and what is your reasoning?",
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
        "id": "st19-int4",
        "taskNumber": 11,
        "type": "interview_video",
        "questionType": "policy_prediction",
        "videoSrc": R2_SPEAKING_BASE + '/Test19_q4_v2.mp4',
        "prompt": "That is a fair point. Finally, do you think workers in the future will need to keep learning new skills throughout their careers, rather than training once at the start? What might be one real challenge of doing that?",
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
window.SPEAKING_SECTION_19 = window.SPEAKING_TEST_19;
