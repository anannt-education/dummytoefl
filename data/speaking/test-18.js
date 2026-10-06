/**
 * TOEFL Speaking, Test 18 (2026 format), AUTO-GENERATED
 * Source: scripts/speaking-images/scenes-17-20.js + interview-data-pack-2.js
 * Regenerate with: node scripts/generate-speaking-data-17-20.js
 *
 * 11 items:
 *   7 Listen and Repeat (composited scene, exact per-part highlight, 8/10/12s by sentence length)
 *   4 Take an Interview (pre-recorded video, 45s response, no preparation time)
 */
const R2_SPEAKING_BASE = '/assets/video/speaking/test-18';
window.SPEAKING_TEST_18 = {
  "id": "speaking-test-18",
  "title": "Speaking Practice Test 18",
  "format": "2026",
  "sceneImage": "/assets/images/speaking/test-18.png",
  "sceneTrace": "/assets/images/speaking/test-18.trace.json",
  "partMapping": "/assets/images/speaking/part-mapping.json",
  "sceneTheme": "Campus Fitness Center",
  "sceneParts": [
    "Reception desk",
    "Drinking fountain",
    "Treadmill row",
    "Free weights area",
    "Class schedule board",
    "Locker room entrance",
    "Towel station"
  ],
  "listenAndRepeat": [
    {
      "id": "st18-rep1",
      "taskNumber": 1,
      "type": "listen_and_repeat",
      "partIndex": 0,
      "sentence": "Scan your student card at the reception desk.",
      "audioSrc": "/assets/audio/speaking/test-18/s1.mp3",
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
      "id": "st18-rep2",
      "taskNumber": 2,
      "type": "listen_and_repeat",
      "partIndex": 1,
      "sentence": "A drinking fountain is located near the entrance.",
      "audioSrc": "/assets/audio/speaking/test-18/s2.mp3",
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
      "id": "st18-rep3",
      "taskNumber": 3,
      "type": "listen_and_repeat",
      "partIndex": 2,
      "sentence": "Please limit your time on the treadmills to thirty minutes.",
      "audioSrc": "/assets/audio/speaking/test-18/s3.mp3",
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
      "id": "st18-rep4",
      "taskNumber": 4,
      "type": "listen_and_repeat",
      "partIndex": 3,
      "sentence": "Return all dumbbells to the rack in the free weights area.",
      "audioSrc": "/assets/audio/speaking/test-18/s4.mp3",
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
      "id": "st18-rep5",
      "taskNumber": 5,
      "type": "listen_and_repeat",
      "partIndex": 4,
      "sentence": "Fitness class times for this week are posted on the schedule board.",
      "audioSrc": "/assets/audio/speaking/test-18/s5.mp3",
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
      "id": "st18-rep6",
      "taskNumber": 6,
      "type": "listen_and_repeat",
      "partIndex": 5,
      "sentence": "Lockers are emptied every evening, so please take your belongings home with you.",
      "audioSrc": "/assets/audio/speaking/test-18/s6.mp3",
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
      "id": "st18-rep7",
      "taskNumber": 7,
      "type": "listen_and_repeat",
      "partIndex": 6,
      "sentence": "Used towels should be placed in the bin beside the towel station before you leave.",
      "audioSrc": "/assets/audio/speaking/test-18/s7.mp3",
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
    "topic": "Music Listening Habits",
    "interviewerName": "Dr. Joshua Lee",
    "scenario": "You have agreed to participate in a research study about music listening habits. You will have a short online interview with a researcher.",
    "introVideo": R2_SPEAKING_BASE + '/Test18_intro_v2.mp4',
    "questions": [
      {
        "id": "st18-int1",
        "taskNumber": 8,
        "type": "interview_video",
        "questionType": "personal_recall",
        "videoSrc": R2_SPEAKING_BASE + '/Test18_q1_v2.mp4',
        "prompt": "Think about the last time you listened to music. Tell me where you were and what you were doing, such as commuting, exercising, or relaxing at home, and whether you chose the music deliberately or simply let a playlist run.",
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
        "id": "st18-int2",
        "taskNumber": 9,
        "type": "interview_video",
        "questionType": "preference_opinion",
        "videoSrc": R2_SPEAKING_BASE + '/Test18_q2_v2.mp4',
        "prompt": "That sounds familiar. Do you prefer listening to music alone through headphones, or sharing it with other people, such as at a party, in a car, or at a live concert? Tell me which you enjoy more and why.",
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
        "id": "st18-int3",
        "taskNumber": 10,
        "type": "interview_video",
        "questionType": "agree_disagree",
        "videoSrc": R2_SPEAKING_BASE + '/Test18_q3_v2.mp4',
        "prompt": "Interesting. Some people argue that listening to music while studying or working improves their concentration, while others say it is simply a distraction. What is your view, and does it depend on the kind of task?",
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
        "id": "st18-int4",
        "taskNumber": 11,
        "type": "interview_video",
        "questionType": "hypothetical",
        "videoSrc": R2_SPEAKING_BASE + '/Test18_q4_v2.mp4',
        "prompt": "Good reasoning. Finally, imagine you could keep only one way of listening to music for the next year, either streaming services or live performances. Which would you choose, and what would you miss most about the other?",
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
window.SPEAKING_SECTION_18 = window.SPEAKING_TEST_18;
