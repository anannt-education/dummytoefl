/**
 * TOEFL Speaking, Test 20 (2026 format), AUTO-GENERATED
 * Source: scripts/speaking-images/scenes-17-20.js + interview-data-pack-2.js
 * Regenerate with: node scripts/generate-speaking-data-17-20.js
 *
 * 11 items:
 *   7 Listen and Repeat (composited scene, exact per-part highlight, 8/10/12s by sentence length)
 *   4 Take an Interview (pre-recorded video, 45s response, no preparation time)
 */
const R2_SPEAKING_BASE = '/assets/video/speaking/test-20';
window.SPEAKING_TEST_20 = {
  "id": "speaking-test-20",
  "title": "Speaking Practice Test 20",
  "format": "2026",
  "sceneImage": "/assets/images/speaking/test-20.png",
  "sceneTrace": "/assets/images/speaking/test-20.trace.json",
  "partMapping": "/assets/images/speaking/part-mapping.json",
  "sceneTheme": "Botanical Garden Visitor Center",
  "sceneParts": [
    "Ticket booth",
    "Garden map board",
    "Greenhouse entrance",
    "Plant bed labels",
    "Gift shop",
    "Cafe tables",
    "Tour meeting point"
  ],
  "listenAndRepeat": [
    {
      "id": "st20-rep1",
      "taskNumber": 1,
      "type": "listen_and_repeat",
      "partIndex": 0,
      "sentence": "Tickets for the garden are sold at the booth.",
      "audioSrc": "/assets/audio/speaking/test-20/s1.mp3",
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
      "id": "st20-rep2",
      "taskNumber": 2,
      "type": "listen_and_repeat",
      "partIndex": 1,
      "sentence": "A map of the grounds is displayed here.",
      "audioSrc": "/assets/audio/speaking/test-20/s2.mp3",
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
      "id": "st20-rep3",
      "taskNumber": 3,
      "type": "listen_and_repeat",
      "partIndex": 2,
      "sentence": "The tropical greenhouse closes thirty minutes before the main gate.",
      "audioSrc": "/assets/audio/speaking/test-20/s3.mp3",
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
      "id": "st20-rep4",
      "taskNumber": 4,
      "type": "listen_and_repeat",
      "partIndex": 3,
      "sentence": "Every plant bed is labeled with its common and scientific name.",
      "audioSrc": "/assets/audio/speaking/test-20/s4.mp3",
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
      "id": "st20-rep5",
      "taskNumber": 5,
      "type": "listen_and_repeat",
      "partIndex": 4,
      "sentence": "The gift shop sells seeds, books and souvenirs from the garden.",
      "audioSrc": "/assets/audio/speaking/test-20/s5.mp3",
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
      "id": "st20-rep6",
      "taskNumber": 6,
      "type": "listen_and_repeat",
      "partIndex": 5,
      "sentence": "Food and drink bought outside the garden may not be consumed at the cafe tables.",
      "audioSrc": "/assets/audio/speaking/test-20/s6.mp3",
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
      "id": "st20-rep7",
      "taskNumber": 7,
      "type": "listen_and_repeat",
      "partIndex": 6,
      "sentence": "Guided walks leave from this meeting point every hour until four in the afternoon.",
      "audioSrc": "/assets/audio/speaking/test-20/s7.mp3",
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
    "topic": "Friendship and Social Connections",
    "interviewerName": "Dr. Aaron Walsh",
    "scenario": "You have agreed to participate in a sociology department research study about friendship and social connections. You will have a short online interview with a researcher.",
    "introVideo": R2_SPEAKING_BASE + '/Test20_intro_v2.mp4',
    "questions": [
      {
        "id": "st20-int1",
        "taskNumber": 8,
        "type": "interview_video",
        "questionType": "personal_recall",
        "videoSrc": R2_SPEAKING_BASE + '/Test20_q1_v2.mp4',
        "prompt": "Think about a close friend you have known for a long time. Tell me how the two of you first met, whether that was at school, at work, or somewhere else, and what has kept the friendship strong.",
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
        "id": "st20-int2",
        "taskNumber": 9,
        "type": "interview_video",
        "questionType": "preference_opinion",
        "videoSrc": R2_SPEAKING_BASE + '/Test20_q2_v2.mp4',
        "prompt": "That sounds meaningful. Do you prefer having a small circle of very close friends, or a wider group drawn from different parts of your life, such as school, work, and your neighborhood? Tell me which suits you better and why.",
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
        "id": "st20-int3",
        "taskNumber": 10,
        "type": "interview_video",
        "questionType": "agree_disagree",
        "videoSrc": R2_SPEAKING_BASE + '/Test20_q3_v2.mp4',
        "prompt": "I see. Some people say that friendships formed online can be just as meaningful as those formed in person, while others think something important is missing. Where do you stand on that? Give reasons for your answer.",
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
        "id": "st20-int4",
        "taskNumber": 11,
        "type": "interview_video",
        "questionType": "hypothetical",
        "videoSrc": R2_SPEAKING_BASE + '/Test20_q4_v2.mp4',
        "prompt": "Good answer. Finally, imagine you moved to a new city next month where you knew nobody at all. How would you go about building a group of friends there, and what do you think would be hardest?",
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
window.SPEAKING_SECTION_20 = window.SPEAKING_TEST_20;
