/**
 * TOEFL Speaking, Test 17 (2026 format), AUTO-GENERATED
 * Source: scripts/speaking-images/scenes-17-20.js + interview-data-pack-2.js
 * Regenerate with: node scripts/generate-speaking-data-17-20.js
 *
 * 11 items:
 *   7 Listen and Repeat (composited scene, exact per-part highlight, 8/10/12s by sentence length)
 *   4 Take an Interview (pre-recorded video, 45s response, no preparation time)
 */
const R2_SPEAKING_BASE = '/assets/video/speaking/test-17';
window.SPEAKING_TEST_17 = {
  "id": "speaking-test-17",
  "title": "Speaking Practice Test 17",
  "format": "2026",
  "sceneImage": "/assets/images/speaking/test-17.png",
  "sceneTrace": "/assets/images/speaking/test-17.trace.json",
  "partMapping": "/assets/images/speaking/part-mapping.json",
  "sceneTheme": "Airport Terminal",
  "sceneParts": [
    "Check-in desk",
    "Departure board",
    "Security screening lane",
    "Baggage carousel",
    "Information kiosk",
    "Boarding gate",
    "Seating area"
  ],
  "listenAndRepeat": [
    {
      "id": "st17-rep1",
      "taskNumber": 1,
      "type": "listen_and_repeat",
      "partIndex": 0,
      "sentence": "Please have your passport ready at the check-in desk.",
      "audioSrc": "/assets/audio/speaking/test-17/s1.mp3",
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
      "id": "st17-rep2",
      "taskNumber": 2,
      "type": "listen_and_repeat",
      "partIndex": 1,
      "sentence": "Flight times are displayed on the departure board.",
      "audioSrc": "/assets/audio/speaking/test-17/s2.mp3",
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
      "id": "st17-rep3",
      "taskNumber": 3,
      "type": "listen_and_repeat",
      "partIndex": 2,
      "sentence": "Remove laptops and liquids before you enter the security lane.",
      "audioSrc": "/assets/audio/speaking/test-17/s3.mp3",
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
      "id": "st17-rep4",
      "taskNumber": 4,
      "type": "listen_and_repeat",
      "partIndex": 3,
      "sentence": "Collect your suitcases from the baggage carousel in the arrivals hall.",
      "audioSrc": "/assets/audio/speaking/test-17/s4.mp3",
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
      "id": "st17-rep5",
      "taskNumber": 5,
      "type": "listen_and_repeat",
      "partIndex": 4,
      "sentence": "Staff at the information kiosk can help you find your gate.",
      "audioSrc": "/assets/audio/speaking/test-17/s5.mp3",
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
      "id": "st17-rep6",
      "taskNumber": 6,
      "type": "listen_and_repeat",
      "partIndex": 5,
      "sentence": "Passengers traveling with small children and those needing assistance may board first at the gate.",
      "audioSrc": "/assets/audio/speaking/test-17/s6.mp3",
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
      "id": "st17-rep7",
      "taskNumber": 7,
      "type": "listen_and_repeat",
      "partIndex": 6,
      "sentence": "Please do not leave bags unattended in the seating area at any time.",
      "audioSrc": "/assets/audio/speaking/test-17/s7.mp3",
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
    "topic": "Time Management",
    "interviewerName": "Dr. Hannah Davis",
    "scenario": "You have agreed to participate in a psychology department research study about how people manage their time. You will have a short online interview with a researcher.",
    "introVideo": R2_SPEAKING_BASE + '/Test17_intro_v2.mp4',
    "questions": [
      {
        "id": "st17-int1",
        "taskNumber": 8,
        "type": "interview_video",
        "questionType": "personal_recall",
        "videoSrc": R2_SPEAKING_BASE + '/Test17_q1_v2.mp4',
        "prompt": "Tell me about a typical weekday in your life. Walk me through how you usually decide which tasks to handle first, such as schoolwork, a job, or personal errands. What tends to come at the top of your list?",
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
        "id": "st17-int2",
        "taskNumber": 9,
        "type": "interview_video",
        "questionType": "preference_opinion",
        "videoSrc": R2_SPEAKING_BASE + '/Test17_q2_v2.mp4',
        "prompt": "That is helpful. Do you prefer planning your day in advance with a detailed schedule or a to-do list, or do you work better when you can stay flexible and decide as you go? Why does that suit you?",
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
        "id": "st17-int3",
        "taskNumber": 10,
        "type": "interview_video",
        "questionType": "agree_disagree",
        "videoSrc": R2_SPEAKING_BASE + '/Test17_q3_v2.mp4',
        "prompt": "I see. Some people believe that multitasking helps them get more done, while others think it lowers the quality of their work. Which view is closer to your own experience, and what makes you say that?",
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
        "id": "st17-int4",
        "taskNumber": 11,
        "type": "interview_video",
        "questionType": "policy_prediction",
        "videoSrc": R2_SPEAKING_BASE + '/Test17_q4_v2.mp4',
        "prompt": "That is a thoughtful answer. Finally, do you think schools and universities should teach time management as a required subject, in the same way they teach writing or mathematics? Explain what students might gain or lose from that.",
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
window.SPEAKING_SECTION_17 = window.SPEAKING_TEST_17;
