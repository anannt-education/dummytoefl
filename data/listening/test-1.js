// TOEFL iBT 2026 Listening Practice — Test 1
// Module 1 (Router): 30 questions | Module 2: 17 questions | Total: 47
// Audio: pre-recorded MP3 files in /audio/listening/test-1/

window.LISTENING_SECTION_1 = window.LISTENING_TEST_1 = {
  id: 'listening-test-1',
  title: 'Listening Practice Test 1',
  format: '2026',
  timeLimit: 1740, // 29 minutes (ETS 2026 spec)

  modules: [
    // =========================================================================
    //  MODULE 1 (Router) — 30 questions
    // =========================================================================
    {
      id: 'module-1',
      title: 'Module 1',
      introAudio: '/audio/listening/test-1/m1-intro.mp3?v=20261006',

      // ─── TASK 1: Listen and Choose a Response (Q1–Q12) ─────────────────
      chooseResponse: [
        {
          id: 'lt1-m1-cr1',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m1-cr01.mp3?v=20261006',
          image: '/img/listening/stock_modal/female-1.webp',
          speakerGender: 'female',
          stem: 'Choose the best response.',
          transcript: 'Did you get a chance to talk to the professor about the deadline extension?',
          options: [
            { id: 'd', text: 'No, but I read the syllabus and I know the late-penalty rule.', correct: false },
            { id: 'a', text: 'Yes, she said I could turn it in by Friday instead.', correct: true },
            { id: 'c', text: 'I\'m planning to stop by her office sometime next week.', correct: false },
            { id: 'b', text: 'The professor usually teaches on Monday mornings this semester.', correct: false }
          ],
          explanation: 'The speaker is asking whether the listener talked to the professor. The best response directly answers the question with relevant information about the outcome.',
          points: 1
        },
        {
          id: 'lt1-m1-cr2',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m1-cr02.mp3?v=20261006',
          image: '/img/listening/stock_modal/male-1.webp',
          speakerGender: 'male',
          stem: 'Choose the best response.',
          transcript: 'I just got back from the dentist.',
          options: [
            { id: 'd', text: 'I had one last month.', correct: false },
            { id: 'a', text: 'I hope it went well.', correct: true },
            { id: 'b', text: 'The appointment was short.', correct: false },
            { id: 'c', text: 'My dentist just started this week.', correct: false }
          ],
          explanation: 'The statement implies the speaker just had a dental visit. The best response acknowledges this and shows concern for the outcome.',
          points: 1
        },
        {
          id: 'lt1-m1-cr3',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m1-cr03.mp3?v=20261006',
          image: '/img/listening/stock_modal/female-2.webp',
          speakerGender: 'female',
          stem: 'Choose the best response.',
          transcript: 'Excuse me, is there a coffee shop near the science building?',
          options: [
            { id: 'c', text: 'Yes, there\'s one right across the courtyard.', correct: true },
            { id: 'b', text: 'The science building is fairly new, I think.', correct: false },
            { id: 'd', text: 'Coffee shops on campus tend to close early.', correct: false },
            { id: 'a', text: 'I usually drink tea rather than coffee, myself.', correct: false }
          ],
          explanation: 'The speaker is asking for directions to a coffee shop. The correct response provides the location.',
          points: 1
        },
        {
          id: 'lt1-m1-cr4',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m1-cr04.mp3?v=20261006',
          image: '/img/listening/stock_modal/male-2.webp',
          speakerGender: 'male',
          stem: 'Choose the best response.',
          transcript: 'I left my umbrella at home again, and it looks like it\'s about to rain.',
          options: [
            { id: 'a', text: 'I have an extra one you can borrow.', correct: true },
            { id: 'c', text: 'Umbrellas are on sale at the bookstore this week.', correct: false },
            { id: 'd', text: 'You should check the weather forecast before you go.', correct: false },
            { id: 'b', text: 'It rained a lot last week as well.', correct: false }
          ],
          explanation: 'The speaker implies they need an umbrella right now. The best response offers immediate help by lending one.',
          points: 1
        },
        {
          id: 'lt1-m1-cr5',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m1-cr05.mp3?v=20261006',
          image: '/img/listening/stock_modal/female-3.webp',
          speakerGender: 'female',
          stem: 'Choose the best response.',
          transcript: 'Didn\'t we have a study group meeting scheduled for tonight?',
          options: [
            { id: 'b', text: 'Yes, it\'s at seven in the library.', correct: true },
            { id: 'd', text: 'The meeting room is on the second floor.', correct: false },
            { id: 'c', text: 'I studied for two hours last night.', correct: false },
            { id: 'a', text: 'The study group has five members.', correct: false }
          ],
          explanation: 'The speaker is confirming a scheduled meeting. The correct response confirms and provides the time and place.',
          points: 1
        },
        {
          id: 'lt1-m1-cr6',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m1-cr06.mp3?v=20261006',
          image: '/img/listening/stock_modal/male-3.webp',
          speakerGender: 'male',
          stem: 'Choose the best response.',
          transcript: 'I can\'t believe how long the line is at the registrar\'s office.',
          options: [
            { id: 'c', text: 'I registered for my classes back in the fall.', correct: false },
            { id: 'd', text: 'They close at five on weekdays, I\'m pretty sure.', correct: false },
            { id: 'a', text: 'That office is over in the administration building somewhere.', correct: false },
            { id: 'b', text: 'You can do most things online now, you know.', correct: true }
          ],
          explanation: 'The speaker is frustrated about a long line. The best response offers a practical alternative.',
          points: 1
        },
        {
          id: 'lt1-m1-cr7',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m1-cr07.mp3?v=20261006',
          image: '/img/listening/stock_modal/female-4.webp',
          speakerGender: 'female',
          stem: 'Choose the best response.',
          transcript: 'Would you mind switching lab partners with me this week?',
          options: [
            { id: 'a', text: 'The lab is open until nine on Thursdays, so you have time.', correct: false },
            { id: 'd', text: 'I think we have lab on Wednesday this week, not Tuesday.', correct: false },
            { id: 'b', text: 'I already finished writing up the lab report from last week.', correct: false },
            { id: 'c', text: 'Sure, that\'s fine with me. Who would I be working with?', correct: true }
          ],
          explanation: 'The speaker is making a request. The correct response agrees and asks a relevant follow-up question.',
          points: 1
        },
        {
          id: 'lt1-m1-cr8',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m1-cr08.mp3?v=20261006',
          image: '/img/listening/stock_modal/male-4.webp',
          speakerGender: 'male',
          stem: 'Choose the best response.',
          transcript: 'Have you heard anything about the campus shuttle schedule changing next month?',
          options: [
            { id: 'b', text: 'I take the shuttle every morning to get to class.', correct: false },
            { id: 'a', text: 'The shuttle stops near the dormitories and the whole science complex.', correct: false },
            { id: 'c', text: 'The campus is really big, so the shuttle helps.', correct: false },
            { id: 'd', text: 'Yeah, they\'re adding an extra route to the north campus.', correct: true }
          ],
          explanation: 'The speaker is asking for information about schedule changes. The correct response shares relevant knowledge about the change.',
          points: 1
        },
        {
          id: 'lt1-m1-cr9',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m1-cr09.mp3?v=20261006',
          image: '/img/listening/stock_modal/female-5.webp',
          speakerGender: 'female',
          stem: 'Choose the best response.',
          transcript: 'I\'ve been trying to get into Professor Chen\'s sociology class, but it\'s completely full.',
          options: [
            { id: 'a', text: 'Sociology is a really interesting subject to study.', correct: false },
            { id: 'd', text: 'I took a sociology course my first year here.', correct: false },
            { id: 'b', text: 'Have you tried adding yourself to the waitlist?', correct: true },
            { id: 'c', text: 'Professor Chen has been teaching here for about ten years.', correct: false }
          ],
          explanation: 'The speaker is expressing frustration about a full class. The best response suggests a practical next step.',
          points: 1
        },
        {
          id: 'lt1-m1-cr10',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m1-cr10.mp3?v=20261006',
          image: '/img/listening/stock_modal/male-5.webp',
          speakerGender: 'male',
          stem: 'Choose the best response.',
          transcript: 'Do you know where I can print out my boarding pass for tomorrow\'s flight?',
          options: [
            { id: 'b', text: 'I flew home over the Thanksgiving break last year.', correct: false },
            { id: 'c', text: 'Boarding passes usually have your seat number printed on them.', correct: false },
            { id: 'd', text: 'The airport is about an hour away from campus.', correct: false },
            { id: 'a', text: 'The computer lab on the first floor has printers.', correct: true }
          ],
          explanation: 'The speaker needs to print something. The correct response tells them where printers are available.',
          points: 1
        },
      ],

      // ─── TASK 2: Conversations (Q13–Q18, 3 conversations × 2 questions) ──
      conversations: [
        {
          id: 'lt1-m1-conv1',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-1/m1-conv1.mp3?v=20261006',
          image: '/img/listening/two_people/people-1.webp',
          transcript: 'Woman: I can\'t believe our trip is two weeks away. Have you booked the rental car yet?\nMan: Not yet. I compared prices last night. Some companies offer better weekend rates if you prepay.\nWoman: That\'s good to know. I\'ll cover the hotel if you handle the car.\nMan: Deal. I\'ll finalize it tonight and send you the confirmation.\nWoman: Thanks. Get unlimited mileage if you can, we\'re driving the coast.\nMan: Will do. And I\'ll double-check our flight times so we get to the rental place on time.\nWoman: Good idea. Our Denver connection is tight.\nMan: Right. It\'s all coming together nicely.',
          questions: [
            {
              id: 'lt1-m1-conv1-q1',
              stem: 'Why does the man mention double-checking their flight times?',
              options: [
                { id: 'c', text: 'He wants to ensure they can pick up the car on time.', correct: true },
                { id: 'a', text: 'He plans to change the time of departure so they can arrive earlier.', correct: false },
                { id: 'd', text: 'He thinks the rental car office might close earlier than usual.', correct: false },
                { id: 'b', text: 'He forgot to confirm the flight details earlier in the week.', correct: false }
              ],
              explanation: 'The man says he\'ll double-check flight times to make sure they get to the rental place on time.',
              points: 1
            },
            {
              id: 'lt1-m1-conv1-q2',
              stem: 'What does the woman agree to do?',
              options: [
                { id: 'c', text: 'Call the airline to verify their schedule.', correct: false },
                { id: 'd', text: 'Pay for the hotel and the vehicle.', correct: false },
                { id: 'b', text: 'Cover the hotel expenses.', correct: true },
                { id: 'a', text: 'Book the rental car for the trip.', correct: false }
              ],
              explanation: 'The woman says she\'ll cover the hotel if the man handles the car.',
              points: 1
            }
          ]
        },
        {
          id: 'lt1-m1-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-1/m1-conv2.mp3?v=20261006',
          image: '/img/listening/two_people/people-2.webp',
          transcript: 'Man: Did you see the email about the new campus dining options?\nWoman: Yeah! I\'m excited they\'re adding a Mediterranean food station. I\'ve wanted more variety.\nMan: Me too. But they\'re also removing the salad bar, and that\'s my go-to for lunch.\nWoman: Really? That\'s too bad. Maybe you should send feedback to the dining services office.\nMan: Good idea. There\'s a suggestion form on their website.\nWoman: There is. I used it last year about the coffee cart hours, and they changed them.\nMan: Really? Do they reply to everyone?\nWoman: Usually within a week. Do it soon, the changes start next month.',
          questions: [
            {
              id: 'lt1-m1-conv2-q1',
              stem: 'What is the woman excited about?',
              options: [
                { id: 'a', text: 'A change in the class schedule for next term.', correct: false },
                { id: 'c', text: 'A new food station in the dining hall.', correct: true },
                { id: 'b', text: 'An improved internet connection in the residence halls.', correct: false },
                { id: 'd', text: 'An all-campus fundraiser for the new student center.', correct: false }
              ],
              explanation: 'The woman says she\'s excited about the new Mediterranean food station being added.',
              points: 1
            },
            {
              id: 'lt1-m1-conv2-q2',
              stem: 'What does the woman suggest the man do?',
              options: [
                { id: 'c', text: 'Talk to the cafeteria manager in person.', correct: false },
                { id: 'b', text: 'Send feedback to the dining services office.', correct: true },
                { id: 'd', text: 'Wait until the dining changes are finalized.', correct: false },
                { id: 'a', text: 'Try the new Mediterranean food station himself.', correct: false }
              ],
              explanation: 'The woman suggests he send feedback to dining services about removing the salad bar.',
              points: 1
            }
          ]
        },
        {
          id: 'lt1-m1-conv3',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-1/m1-conv3.mp3?v=20261006',
          image: '/img/listening/two_people/people-3.webp',
          transcript: 'Woman: I\'m really struggling with the research paper for Professor Adams\' class. Have you started yours yet?\nMan: I just picked my topic yesterday. I\'m writing about the effects of social media on attention spans.\nWoman: That sounds interesting. I can\'t even decide on a topic. There are too many options.\nMan: Why don\'t you go to the writing center? They helped me narrow down my ideas last semester.\nWoman: I didn\'t know they helped with that. I thought they only checked grammar.\nMan: No, they do a lot more. They can help with brainstorming, outlining, everything really.',
          questions: [
            {
              id: 'lt1-m1-conv3-q1',
              stem: 'What is the woman\'s main problem?',
              options: [
                { id: 'b', text: 'She has not been able to choose a topic.', correct: true },
                { id: 'd', text: 'She has already missed the deadline for the paper.', correct: false },
                { id: 'c', text: 'She does not understand what the assignment is asking.', correct: false },
                { id: 'a', text: 'She cannot find enough good sources for her paper.', correct: false }
              ],
              explanation: 'The woman says she can\'t decide on a topic because there are too many options.',
              points: 1
            },
            {
              id: 'lt1-m1-conv3-q2',
              stem: 'What does the man suggest?',
              options: [
                { id: 'd', text: 'Choose the easiest topic that is available.', correct: false },
                { id: 'c', text: 'Visit the campus writing center for help.', correct: true },
                { id: 'a', text: 'Ask Professor Adams for extra time on it.', correct: false },
                { id: 'b', text: 'Write about social media like he is.', correct: false }
              ],
              explanation: 'The man suggests she go to the writing center, where they can help with brainstorming and outlining.',
              points: 1
            }
          ]
        }
      ],

      // ─── TASK 3: Announcements (Q19–Q26, 4 announcements × 2 questions) ──
      announcements: [
        {
          id: 'lt1-m1-ann1',
          title: 'Listen to an announcement at a university event.',
          audio: '/audio/listening/test-1/m1-ann1.mp3?v=20261006',
          image: '/img/listening/announcement/female-1.webp',
          speakerGender: 'female',
          transcript: 'Good morning, students. The Financial Aid Office will host an information session this Friday at ten a.m. in Room 202 of the Student Services Building. Staff members will explain how to complete renewal applications and answer questions about scholarships and grants for next year. Students are encouraged to bring their laptops if they want help submitting forms online. Renewal applications are due March first, so this is the last session before that deadline. Seating is limited, so arrive early. Light refreshments will be provided.',
          questions: [
            {
              id: 'lt1-m1-ann1-q1',
              stem: 'What is the main purpose of the announcement?',
              options: [
                { id: 'c', text: 'To advertise a workshop on personal budget management.', correct: false },
                { id: 'b', text: 'To inform students about a financial aid information session.', correct: true },
                { id: 'a', text: 'To announce new requirements for all grant applications.', correct: false },
                { id: 'd', text: 'To remind students to check their financial aid status.', correct: false }
              ],
              explanation: 'The announcement is about an upcoming financial aid information session on Friday.',
              points: 1
            },
            {
              id: 'lt1-m1-ann1-q2',
              stem: 'Why does the speaker mention bringing laptops?',
              options: [
                { id: 'd', text: 'The session will include an online quiz about financial aid.', correct: false },
                { id: 'b', text: 'Staff will demonstrate a new financial aid website there.', correct: false },
                { id: 'c', text: 'Students can get help submitting forms online during the session.', correct: true },
                { id: 'a', text: 'Students may need them for taking notes during the session.', correct: false }
              ],
              explanation: 'The speaker says students should bring laptops if they want help submitting forms online.',
              points: 1
            }
          ]
        },
        {
          id: 'lt1-m1-ann2',
          title: 'Listen to an announcement on campus.',
          audio: '/audio/listening/test-1/m1-ann2.mp3?v=20261006',
          image: '/img/listening/announcement/male-1.webp',
          speakerGender: 'male',
          transcript: 'Attention, all residents of Hamilton Hall. Due to scheduled maintenance on the building\'s heating system, hot water will be unavailable this Saturday from eight a.m. to two p.m. Cold water and electricity will not be affected. Anyone who needs a shower during those hours may use the locker rooms at the Recreation Center, which opens at seven. We apologize for the inconvenience and recommend that residents plan accordingly. If you have any questions, please contact the facilities office at extension four-one-five-zero. Thank you for your patience.',
          questions: [
            {
              id: 'lt1-m1-ann2-q1',
              stem: 'What is being announced?',
              options: [
                { id: 'c', text: 'An upcoming fire safety inspection of the building.', correct: false },
                { id: 'd', text: 'A renovation project in the residence hall.', correct: false },
                { id: 'a', text: 'A temporary interruption of hot water service.', correct: true },
                { id: 'b', text: 'A permanent change to dormitory visitor policies.', correct: false }
              ],
              explanation: 'The announcement says hot water will be unavailable on Saturday due to heating system maintenance.',
              points: 1
            },
            {
              id: 'lt1-m1-ann2-q2',
              stem: 'What are residents advised to do?',
              options: [
                { id: 'd', text: 'Attend a meeting about the maintenance schedule this week.', correct: false },
                { id: 'c', text: 'Submit a maintenance request form to the office.', correct: false },
                { id: 'a', text: 'Move to a temporary housing location for Saturday.', correct: false },
                { id: 'b', text: 'Contact the facilities office if they have questions.', correct: true }
              ],
              explanation: 'The announcement tells residents to contact the facilities office at extension 4150 with questions.',
              points: 1
            }
          ]
        },
        {
          id: 'lt1-m1-ann3',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-1/m1-ann3.mp3?v=20261006',
          image: '/img/listening/announcement/female-2.webp',
          speakerGender: 'female',
          transcript: 'Hello, everyone. This is a reminder that the annual Campus Career Fair will take place next Wednesday from ten a.m. to three p.m. in the gymnasium. Over forty employers from various industries will be present, including technology, healthcare, and education. Students should bring copies of their resume and dress professionally. Walk-ins are welcome, but those who register in advance through the Career Services portal will receive priority access to employer booths. Registration closes Monday at midnight, and the portal link is in your student email.',
          questions: [
            {
              id: 'lt1-m1-ann3-q1',
              stem: 'What is the main purpose of this announcement?',
              options: [
                { id: 'd', text: 'To recruit volunteers to help at a campus event.', correct: false },
                { id: 'b', text: 'To remind students about an upcoming career fair.', correct: true },
                { id: 'a', text: 'To promote a new career counseling service on campus.', correct: false },
                { id: 'c', text: 'To announce changes to the university graduation requirements.', correct: false }
              ],
              explanation: 'The announcement reminds students about the annual Campus Career Fair next Wednesday.',
              points: 1
            },
            {
              id: 'lt1-m1-ann3-q2',
              stem: 'What benefit do students get by registering in advance?',
              options: [
                { id: 'c', text: 'Priority access to employer booths.', correct: true },
                { id: 'a', text: 'Free professional clothing for the event.', correct: false },
                { id: 'd', text: 'A printed copy of participating companies.', correct: false },
                { id: 'b', text: 'A guaranteed job interview with employers.', correct: false }
              ],
              explanation: 'Students who register through the Career Services portal get priority access to employer booths.',
              points: 1
            }
          ]
        },
      ],

      // ─── TASK 4: Academic Talk (Q27–Q30, 1 talk × 4 questions) ────────
      academicTalks: [
        {
          id: 'lt1-m1-talk1',
          title: 'Listen to a talk in a psychology class.',
          audio: '/audio/listening/test-1/m1-talk1.mp3?v=20261006',
          image: '/img/listening/announcement/male-3.webp',
          speakerGender: 'male',
          transcript: 'Today I want to talk about the Zeigarnik Effect: what it is, where it came from, and why it matters for the way you work. The effect refers to our tendency to remember unfinished tasks more vividly than completed ones. It got its name in the 1920s. The psychologist Bluma Zeigarnik noticed something about the waiters in a cafe. They could recall unpaid orders with remarkable accuracy, but once a bill was settled, the order seemed to drop out of memory. Her explanation was that an incomplete task creates a mild state of psychological tension, and that tension keeps the task active in memory until closure is achieved. That is only an observation, though, so let\'s look at the laboratory evidence. In one experiment, participants were interrupted partway through a set of puzzles. Those interrupted remembered the details better than participants who worked straight through to a solution. Their minds appeared to hold the unresolved task open, as if still waiting for completion. Modern researchers connect this to goal-oriented cognition. While a goal remains incomplete, the brain maintains heightened focus on information related to that goal. So the effect explains a lot: replaying an unfinished conversation, feeling pulled back toward work you left half done. It also suggests practical strategies, such as breaking a large project into smaller segments that preserve motivation. Next, let\'s take a look at some popular apps and inventions that people use today to improve their focus and reduce the impact of the Zeigarnik Effect.',
          questions: [
            {
              id: 'lt1-m1-talk1-q1',
              stem: 'What is the main topic of the talk?',
              options: [
                { id: 'a', text: 'The role of attention and focus in modern productivity methods.', correct: false },
                { id: 'd', text: 'Early twentieth-century experiments that shaped the field of cognitive science.', correct: false },
                { id: 'c', text: 'How memory retention varies between short-term and long-term recall.', correct: false },
                { id: 'b', text: 'A psychological phenomenon related to unfinished tasks.', correct: true }
              ],
              explanation: 'The talk is primarily about the Zeigarnik Effect, which is a psychological phenomenon about remembering unfinished tasks better.',
              points: 1
            },
            {
              id: 'lt1-m1-talk1-q2',
              stem: 'According to the speaker, what did Zeigarnik observe about waiters in a cafe?',
              options: [
                { id: 'c', text: 'They relied on repetition rather than reasoning to recall orders.', correct: false },
                { id: 'b', text: 'They remembered unpaid orders better than completed ones.', correct: true },
                { id: 'a', text: 'They performed better when they tracked several tables at once.', correct: false },
                { id: 'd', text: 'They retained more details when the cafe was less crowded.', correct: false }
              ],
              explanation: 'The speaker says Zeigarnik noticed waiters recalled unpaid orders accurately but forgot them once bills were settled.',
              points: 1
            },
            {
              id: 'lt1-m1-talk1-q3',
              stem: 'What can be inferred about unfinished tasks according to the speaker?',
              options: [
                { id: 'a', text: 'They are more memorable because people consciously choose to revisit them.', correct: false },
                { id: 'd', text: 'They typically cause the brain to block other incoming information.', correct: false },
                { id: 'b', text: 'They often strengthen unrelated cognitive skills over the long term.', correct: false },
                { id: 'c', text: 'They tend to occupy the mind until they are completed.', correct: true }
              ],
              explanation: 'The speaker explains that incomplete tasks create psychological tension that keeps them active in memory until closure.',
              points: 1
            },
            {
              id: 'lt1-m1-talk1-q4',
              stem: 'What will the speaker most likely discuss next?',
              options: [
                { id: 'a', text: 'Modern tools and techniques designed to help people stay focused.', correct: true },
                { id: 'd', text: 'The use of experimental methods in unrelated areas of psychology.', correct: false },
                { id: 'b', text: 'The origins of psychological research in early twentieth-century Europe.', correct: false },
                { id: 'c', text: 'The relationship between memory and physical health in older adults.', correct: false }
              ],
              explanation: 'The speaker ends by saying they\'ll look at popular apps and inventions people use to improve focus.',
              points: 1
            }
          ]
        },
        {
          id: 'lt1-m1-talk2',
          title: 'Listen to a talk in a psychology class.',
          audio: '/audio/listening/test-1/m1-talk2.mp3?v=20261006',
          image: '/img/listening/announcement/female-1.webp',
          speakerGender: 'female',
          transcript: 'Today we will look at how memory works, and I want to keep it practical, because it affects how you study for this course. Scientists describe two main types of memory. Short-term memory holds a small amount of information for a few seconds. Think of a phone number you hear and then dial: you hold it just long enough to use it, and then it is gone. Long-term memory is different. It stores information for years, like the name of your first school or the street it was on. So how does information move from the first store into the second? Through repetition and meaningful connections. When you repeat a word and also tie it to something you already know, you are giving your brain more than one path back to it, and that is how a long-term memory gets built. This is why active study methods work better than simply rereading your notes. Quizzing yourself forces you to pull the information back out and to build those connections, while rereading only lets you recognize words you have already seen. In one classroom study, students who tested themselves on a passage remembered far more a week later than students who reread that passage several times. Sleep also plays a key role. During sleep, the brain organizes memories from the day, sorting and strengthening what you took in while you were awake. So the all-night session before an exam works against the very system you are trying to use.',
          questions: [
          {
            id: 'lt1-m1-talk2-q1',
            stem: 'What is the talk mainly about?',
            options: [
                  { id: 'c', text: 'How sleep affects physical health and daily energy levels.', correct: false },
                  { id: 'd', text: 'Why phone numbers are so difficult for most people to remember.', correct: false },
                  { id: 'a', text: 'How short-term and long-term memory work and how to build memories.', correct: true },
                  { id: 'b', text: 'Why some people forget things more easily than others do.', correct: false }
            ],
            explanation: 'The talk explains how the two memory types work and how to build long-term memories.',
            points: 1
          },
          {
            id: 'lt1-m1-talk2-q2',
            stem: 'According to the speaker, why are active study methods more effective?',
            options: [
                  { id: 'd', text: 'They allow students to study together with their friends.', correct: false },
                  { id: 'c', text: 'They work even without a full night of sleep.', correct: false },
                  { id: 'a', text: 'They build connections that move information into long-term memory.', correct: true },
                  { id: 'b', text: 'They take less total time than rereading class notes.', correct: false }
            ],
            explanation: 'Active methods help the brain make connections and move information into long-term memory.',
            points: 1
          },
              {
                id: 'lt1-m1-talk2-q3',
                stem: 'What does the speaker say about long-term memory?',
                options: [
                  { id: 'a', text: 'It only lasts a few seconds.', correct: false },
                  { id: 'd', text: 'It cannot be improved.', correct: false },
                  { id: 'c', text: 'It is the same as short-term memory.', correct: false },
                  { id: 'b', text: 'It stores information for years.', correct: true }
                ],
                explanation: 'The speaker says long-term memory stores information for years, like the name of your first school.',
                points: 1
              },
              {
                id: 'lt1-m1-talk2-q4',
                stem: 'What role does sleep play according to the speaker?',
                options: [
                  { id: 'c', text: 'It has no real effect on memory.', correct: false },
                  { id: 'd', text: 'It only matters for young children.', correct: false },
                  { id: 'b', text: 'It organizes memories from the day.', correct: true },
                  { id: 'a', text: 'It causes us to forget recent information.', correct: false }
                ],
                explanation: 'The speaker says during sleep, the brain organizes memories from the day.',
                points: 1
              }
          ]
        }
      ]
    },

    // =========================================================================
    //  MODULE 2 — 17 questions
    // =========================================================================
    {
      id: 'module-2',
      title: 'Module 2',
      introAudio: '/audio/listening/test-1/m2-intro.mp3?v=20261006',

      // ─── TASK 1: Listen and Choose a Response (Q1–Q7) ─────────────────
      chooseResponse: [
        {
          id: 'lt1-m2-cr1',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m2-cr01.mp3?v=20261006',
          image: '/img/listening/stock_modal/male-2.webp',
          speakerGender: 'male',
          stem: 'Choose the best response.',
          transcript: 'Do you happen to know if the gym is open during spring break?',
          options: [
            { id: 'a', text: 'I think it has reduced hours, but it should still be open.', correct: true },
            { id: 'c', text: 'Spring break starts next Friday and runs for a week.', correct: false },
            { id: 'd', text: 'I usually exercise early in the morning before the place gets crowded.', correct: false },
            { id: 'b', text: 'The gym has a lot of new weight equipment upstairs.', correct: false }
          ],
          explanation: 'The speaker is asking about gym hours during spring break. The correct response provides relevant information.',
          points: 1
        },
        {
          id: 'lt1-m2-cr2',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m2-cr02.mp3?v=20261006',
          image: '/img/listening/stock_modal/female-3.webp',
          speakerGender: 'female',
          stem: 'Choose the best response.',
          transcript: 'I accidentally left my notebook in the lecture hall. The building\'s locked now.',
          options: [
            { id: 'a', text: 'You could ask campus security to let you in.', correct: true },
            { id: 'b', text: 'I use a laptop for my notes instead of paper.', correct: false },
            { id: 'd', text: 'Notebooks are available at the bookstore, but it opens Monday.', correct: false },
            { id: 'c', text: 'The lecture this morning was really informative, I thought.', correct: false }
          ],
          explanation: 'The speaker has a problem: they left something in a locked building. The best response offers a solution.',
          points: 1
        },
        {
          id: 'lt1-m2-cr3',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m2-cr03.mp3?v=20261006',
          image: '/img/listening/stock_modal/male-4.webp',
          speakerGender: 'male',
          stem: 'Choose the best response.',
          transcript: 'I heard the library is extending its hours during finals week. That\'s great news.',
          options: [
            { id: 'b', text: 'Definitely. I always need a quiet place to study late.', correct: true },
            { id: 'c', text: 'Finals week is usually in the middle of December here.', correct: false },
            { id: 'd', text: 'I returned all of my library books yesterday afternoon.', correct: false },
            { id: 'a', text: 'The library has a large collection of journals and reference books.', correct: false }
          ],
          explanation: 'The speaker is sharing positive news about extended hours. The best response agrees and explains why it matters.',
          points: 1
        },
        {
          id: 'lt1-m2-cr4',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m2-cr04.mp3?v=20261006',
          image: '/img/listening/stock_modal/female-5.webp',
          speakerGender: 'female',
          stem: 'Choose the best response.',
          transcript: 'Could you show me how to use the self-checkout machine at the library?',
          options: [
            { id: 'b', text: 'I don\'t even have a library card of my own yet.', correct: false },
            { id: 'd', text: 'Those self-checkout machines are very common at most university libraries.', correct: false },
            { id: 'c', text: 'Sure, you just scan your card first and then scan the book\'s barcode.', correct: true },
            { id: 'a', text: 'The library closes at nine tonight, so you still have plenty of time.', correct: false }
          ],
          explanation: 'The speaker is asking for help with a machine. The best response provides step-by-step instructions.',
          points: 1
        },
        {
          id: 'lt1-m2-cr5',
          type: 'choose_response',
          audio: '/audio/listening/test-1/m2-cr05.mp3?v=20261006',
          image: '/img/listening/stock_modal/male-6.webp',
          speakerGender: 'male',
          stem: 'Choose the best response.',
          transcript: 'The presentation is tomorrow and we still haven\'t rehearsed the final section.',
          options: [
            { id: 'd', text: 'I gave a presentation in that same class just last week.', correct: false },
            { id: 'c', text: 'The final section has about three slides and a short summary.', correct: false },
            { id: 'a', text: 'Presentations usually last about ten minutes, but mine ran over by quite a bit.', correct: false },
            { id: 'b', text: 'I can meet you at the library in an hour to run through it.', correct: true }
          ],
          explanation: 'The speaker is implying urgency about rehearsing. The best response offers to meet and practice.',
          points: 1
        },
      ],

      // ─── TASK 2: Conversations (Q8–Q11, 2 conversations × 2 questions) ──
      conversations: [
        {
          id: 'lt1-m2-conv1',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-1/m2-conv1.mp3?v=20261006',
          image: '/img/listening/two_people/people-4.webp',
          transcript: 'Man: I just found out that the photography exhibit in the Fine Arts Building is closing this weekend. Have you seen it yet?\nWoman: No, I haven\'t. Is it worth going?\nMan: Absolutely. The photos are all from students who traveled abroad last summer. Some of them are incredible.\nWoman: That does sound interesting. Is there an admission fee?\nMan: No, it\'s free with a student ID.\nWoman: Good. Do you know the hours?\nMan: I think it\'s open until five on Saturday. We could go together after lunch if you\'re free.\nWoman: That works for me. Let\'s meet at the student center at noon.',
          questions: [
            {
              id: 'lt1-m2-conv1-q1',
              stem: 'What are the speakers mainly discussing?',
              options: [
                { id: 'a', text: 'A photography course they want to take next semester.', correct: false },
                { id: 'c', text: 'Their plans to travel abroad during the summer.', correct: false },
                { id: 'b', text: 'A student photography exhibit that is closing soon.', correct: true },
                { id: 'd', text: 'A new art gallery that just opened near campus.', correct: false }
              ],
              explanation: 'The conversation centers on a photography exhibit in the Fine Arts Building that is closing this weekend.',
              points: 1
            },
            {
              id: 'lt1-m2-conv1-q2',
              stem: 'What do the speakers plan to do?',
              options: [
                { id: 'd', text: 'Sign up for a photography workshop later this month.', correct: false },
                { id: 'b', text: 'Visit the exhibit together on Saturday after lunch.', correct: true },
                { id: 'a', text: 'Submit their own photos to the student exhibit.', correct: false },
                { id: 'c', text: 'Attend the exhibit opening ceremony on Friday evening.', correct: false }
              ],
              explanation: 'The man suggests going after lunch on Saturday, and the woman agrees to meet at the student center at noon.',
              points: 1
            }
          ]
        },
        {
          id: 'lt1-m2-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-1/m2-conv2.mp3?v=20261006',
          image: '/img/listening/two_people/people-5.webp',
          transcript: 'Woman: Have you decided on your community service hours yet?\nMan: Not yet. I wanted to volunteer at the animal shelter, but the shifts conflict with my Tuesday labs.\nWoman: What about the tutoring program at the community center? They need people on Wednesday evenings.\nMan: That could work. I\'m good at math, and I\'m free Wednesdays after four.\nWoman: Perfect. It\'s two hours a week, six to eight, and they always need math tutors.\nMan: Even better. Any training required?\nWoman: Just a short orientation. I\'ll send you the sign-up link. The coordinator, Maria, is really organized.\nMan: Thanks, I\'ll fill it out tonight.',
          questions: [
            {
              id: 'lt1-m2-conv2-q1',
              stem: 'Why can\'t the man volunteer at the animal shelter?',
              options: [
                { id: 'b', text: 'The shelter is too far away from campus.', correct: false },
                { id: 'd', text: 'The shelter already has more than enough volunteers.', correct: false },
                { id: 'a', text: 'He is not interested in working with animals.', correct: false },
                { id: 'c', text: 'The shift times conflict with his Tuesday labs.', correct: true }
              ],
              explanation: 'The man says the animal shelter shifts conflict with his Tuesday labs.',
              points: 1
            },
            {
              id: 'lt1-m2-conv2-q2',
              stem: 'What will the man most likely do next?',
              options: [
                { id: 'a', text: 'Contact the animal shelter about a different shift time.', correct: false },
                { id: 'b', text: 'Fill out the sign-up form for the tutoring program.', correct: true },
                { id: 'd', text: 'Look for other volunteer opportunities on the university website.', correct: false },
                { id: 'c', text: 'Ask his professor to reschedule his Tuesday lab sessions.', correct: false }
              ],
              explanation: 'The man says he\'ll fill out the tutoring sign-up form tonight.',
              points: 1
            }
          ]
        }
      ],

      // ─── TASK 3: Announcements (Q12–Q15, 2 announcements × 2 questions) ─
      announcements: [
        {
          id: 'lt1-m2-ann1',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-1/m2-ann1.mp3?v=20261006',
          image: '/img/listening/announcement/female-3.webp',
          speakerGender: 'female',
          transcript: 'Good afternoon, everyone. I\'d like to remind you that the deadline to submit your application for the undergraduate research fellowship is this Monday at five p.m. Applications must include a two-page project proposal, a faculty recommendation letter, and your current transcript. You can submit everything electronically through the research portal on the university website. If you have questions about the application process, drop by the Office of Undergraduate Research in Whitman Hall, Room 118. We\'re open weekdays from nine to four.',
          questions: [
            {
              id: 'lt1-m2-ann1-q1',
              stem: 'What is the speaker reminding students about?',
              options: [
                { id: 'c', text: 'A new partnership between the university and a research institute.', correct: false },
                { id: 'a', text: 'A change in the research fellowship requirements.', correct: false },
                { id: 'b', text: 'The approaching deadline for a research fellowship application.', correct: true },
                { id: 'd', text: 'An upcoming presentation by a guest researcher.', correct: false }
              ],
              explanation: 'The speaker reminds students that the fellowship application deadline is this Monday at five p.m.',
              points: 1
            },
            {
              id: 'lt1-m2-ann1-q2',
              stem: 'What are students told to include in their application?',
              options: [
                { id: 'c', text: 'A research paper and a list of completed courses.', correct: false },
                { id: 'd', text: 'A resume, a cover letter, and proof of enrollment.', correct: false },
                { id: 'a', text: 'A personal statement and three separate letters of recommendation.', correct: false },
                { id: 'b', text: 'A project proposal, a faculty recommendation, and a transcript.', correct: true }
              ],
              explanation: 'The speaker lists three required items: a two-page project proposal, a faculty recommendation letter, and a transcript.',
              points: 1
            }
          ]
        },
        {
          id: 'lt1-m2-ann2',
          title: 'Listen to an announcement on campus.',
          audio: '/audio/listening/test-1/m2-ann2.mp3?v=20261006',
          image: '/img/listening/announcement/male-4.webp',
          speakerGender: 'male',
          transcript: 'Hey everyone, quick heads-up. The Student Government Association is organizing a campus clean-up day this Saturday starting at nine a.m. We\'ll meet in front of the student union, and supplies like gloves and trash bags will be provided. Volunteers who participate for at least two hours will receive a free T-shirt and a coupon for the campus cafe. No sign-up is needed, just show up. It\'s a great way to give back to the campus community and meet new people. Hope to see you there.',
          questions: [
            {
              id: 'lt1-m2-ann2-q1',
              stem: 'What event is being announced?',
              options: [
                { id: 'a', text: 'A fundraising dinner organized by student government.', correct: false },
                { id: 'b', text: 'A campus clean-up volunteer event.', correct: true },
                { id: 'd', text: 'A new recycling program launch.', correct: false },
                { id: 'c', text: 'A student government election meeting.', correct: false }
              ],
              explanation: 'The announcement is about a campus clean-up day organized by the Student Government Association.',
              points: 1
            },
            {
              id: 'lt1-m2-ann2-q2',
              stem: 'What will volunteers who participate for two hours receive?',
              options: [
                { id: 'd', text: 'A gift card to the campus bookstore.', correct: false },
                { id: 'c', text: 'A free T-shirt and a cafe coupon.', correct: true },
                { id: 'a', text: 'Credit hours toward their community service requirement.', correct: false },
                { id: 'b', text: 'A certificate of participation from the association.', correct: false }
              ],
              explanation: 'Volunteers who participate for at least two hours get a free T-shirt and a coupon for the campus cafe.',
              points: 1
            }
          ]
        }
      ],

      // ─── TASK 4: Academic Talk (1 talk × 2 questions, brings test to 47 items) ────────
      academicTalks: [
        {
          id: 'lt1-m2-talk1',
          title: 'Listen to a talk in an environmental science class.',
          audio: '/audio/listening/test-1/m2-talk1.mp3?v=20261006',
          image: '/img/listening/announcement/female-3.webp',
          speakerGender: 'female',
          transcript: 'One of the most surprising findings in recent ecology is the role a single predator can play in shaping an entire ecosystem. I want to walk you through the Yellowstone case and then give you the term ecologists use for it. Some background. Wolves were hunted out of Yellowstone National Park by the 1920s, and for roughly seventy years the park had none. When a small number were brought back in 1995, the aim was straightforward. Scientists expected the wolves to control the elk population, which had grown large in their absence. What they did not anticipate was the cascade of effects that would follow. Elk numbers fell, but just as importantly, the surviving elk became more cautious about where they grazed. They stopped lingering in the open valleys along the streams, where a wolf could approach unseen. Willows and aspens in those streamside areas, browsed down for decades, began to recover. Beavers returned to those streams to use the new vegetation, and the dams they built created wetlands that supported birds, fish, and amphibians. Even the courses of some rivers shifted, because stable streamside vegetation slowed erosion and held the banks. This phenomenon, in which a single predator at the top of the food web influences populations and even the physical landscape several levels below it, is now called a trophic cascade. Ecologists still argue over how much weight to give each link in that chain, but the central lesson holds and it changed how the field thinks about predators.',
          questions: [
            {
              id: 'lt1-m2-talk1-q1',
              stem: 'What was the original reason for reintroducing wolves to Yellowstone?',
              options: [
                { id: 'a', text: 'To restore wetland habitats for birds and fish.', correct: false },
                { id: 'd', text: 'To stabilize riverbanks against erosion.', correct: false },
                { id: 'c', text: 'To attract tourists to the park.', correct: false },
                { id: 'b', text: 'To control the elk population.', correct: true }
              ],
              explanation: 'The speaker states that scientists expected wolves to control the elk population when they were reintroduced in 1995.',
              points: 1
            },
            {
              id: 'lt1-m2-talk1-q2',
              stem: 'What does the term "trophic cascade" describe?',
              options: [
                { id: 'c', text: 'The complete collapse of a wetland ecosystem in the years after a top predator has been removed from it.', correct: false },
                { id: 'd', text: 'A pattern in which beavers and wolves compete with each other for the same limited prey.', correct: false },
                { id: 'a', text: 'A predator at the top of the food web influencing populations and the landscape several levels below it.', correct: true },
                { id: 'b', text: 'The predictable seasonal migration of elk herds between their summer ranges and their winter feeding grounds.', correct: false }
              ],
              explanation: 'The speaker defines a trophic cascade as a phenomenon in which a single top predator influences populations and the physical landscape several levels below it.',
              points: 1
            },
                            {
                id: 'lt1-m2-talk1-q3',
                stem: 'Why did streamside willows and aspens begin to recover?',
                options: [
                  { id: 'c', text: 'Park staff planted young trees along the damaged streams.', correct: false },
                  { id: 'a', text: 'Beavers built dams that raised the water levels nearby.', correct: false },
                  { id: 'b', text: 'Cautious elk stopped grazing in the open streamside areas.', correct: true },
                  { id: 'd', text: 'Shifting river courses carried more water to the banks.', correct: false }
                ],
                explanation: 'The elk grew wary of the open valleys along the streams, so the trees growing there were no longer browsed down.',
                points: 1
              },
                            {
                id: 'lt1-m2-talk1-q4',
                stem: 'What is the speaker\'s attitude toward the cascade\'s details?',
                options: [
                  { id: 'a', text: 'Every link in the chain has now been firmly settled.', correct: false },
                  { id: 'c', text: 'The individual links remain debated though the main lesson stands.', correct: true },
                  { id: 'd', text: 'The findings apply only to parks that have reintroduced predators.', correct: false },
                  { id: 'b', text: 'The overall conclusion is doubtful and has been badly overstated.', correct: false }
                ],
                explanation: 'The speaker allows that ecologists still argue over how much weight each link deserves while treating the central lesson as settled.',
                points: 1
              }
          ]
        }
      ]
    }
  ],
  module2Easy: {
    id: 'module-2-easy',
    title: 'Module 2 (Easy path)',
    introAudio: '/audio/listening/test-1/m2-intro.mp3?v=20261006',
    chooseResponse: [
          {
            id: 'lt1-m2e-cr1',
            type: 'choose_response',
            audio: '/audio/listening/test-1/m2e-cr01.mp3?v=20261006',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Do you know what time the library opens on Saturday?',
            options: [
              { id: 'a', text: 'It opens at nine in the morning.', correct: true },
              { id: 'b', text: 'I borrowed three books from there yesterday.', correct: false },
              { id: 'c', text: 'The library is on the third floor.', correct: false },
              { id: 'd', text: 'Yes, I really enjoy reading on weekends.', correct: false }
            ],
            explanation: 'The speaker is asking about opening time, so the correct response gives a time.',
            points: 1
          },
          {
            id: 'lt1-m2e-cr2',
            type: 'choose_response',
            audio: '/audio/listening/test-1/m2e-cr02.mp3?v=20261006',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Could you tell me where the science lab is?',
            options: [
              { id: 'd', text: 'The lab opened at the start of last semester.', correct: false },
              { id: 'c', text: 'I do not really like my science classes.', correct: false },
              { id: 'b', text: 'It is on the second floor of this building.', correct: true },
              { id: 'a', text: 'I have a chemistry class in the afternoon.', correct: false }
            ],
            explanation: 'The speaker is asking for directions, so the correct response gives a location.',
            points: 1
          },
          {
            id: 'lt1-m2e-cr3',
            type: 'choose_response',
            audio: '/audio/listening/test-1/m2e-cr03.mp3?v=20261006',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Are you free to study together tonight?',
            options: [
              { id: 'd', text: 'I usually study alone at night.', correct: false },
              { id: 'c', text: 'The exam is next Friday morning.', correct: false },
              { id: 'a', text: 'I studied for two hours yesterday.', correct: false },
              { id: 'b', text: 'Sure, let us meet at seven.', correct: true }
            ],
            explanation: 'The speaker is suggesting a study session, so the correct response agrees and proposes a time.',
            points: 1
          },
          {
            id: 'lt1-m2e-cr4',
            type: 'choose_response',
            audio: '/audio/listening/test-1/m2e-cr04.mp3?v=20261006',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Did you finish your math homework?',
            options: [
              { id: 'd', text: 'My math teacher is very nice.', correct: false },
              { id: 'c', text: 'I have three classes later today.', correct: false },
              { id: 'b', text: 'Yes, I finished it last night.', correct: true },
              { id: 'a', text: 'Math is my favorite subject this year.', correct: false }
            ],
            explanation: 'The speaker is asking a yes/no question, so the correct response answers it directly.',
            points: 1
          },
          {
            id: 'lt1-m2e-cr5',
            type: 'choose_response',
            audio: '/audio/listening/test-1/m2e-cr05.mp3?v=20261006',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Would you like to join the soccer team?',
            options: [
              { id: 'b', text: 'Soccer is played all around the world now.', correct: false },
              { id: 'd', text: 'The soccer field is right behind the gym.', correct: false },
              { id: 'a', text: 'I bought a new pair of running shoes yesterday.', correct: false },
              { id: 'c', text: 'That sounds fun, but I am not very good.', correct: true }
            ],
            explanation: 'The speaker is inviting them to join, so the correct response responds to the invitation.',
            points: 1
          },
    ],
    conversations: [
          {
            id: 'lt1-m2e-conv1',
            title: 'Listen to a conversation.',
            audio: '/audio/listening/test-1/m2e-conv1.mp3?v=20261006',
            image: '/img/listening/two_people/people-1.webp',
            transcript: 'Man: Hi Maria, are you going to the library this afternoon?\nWoman: Yes, I need to return some books before they are overdue.\nMan: Could you bring back my book too? I left it on the desk in your room.\nWoman: Sure, no problem. What is the title of the book?\nMan: It is a history textbook with a green cover. The author is Anderson.\nWoman: Got it. I will pick it up before I leave.\nMan: Thanks, that really helps me. I have a class at two and cannot go myself.',
            questions: [
              {
                id: 'lt1-m2e-conv1-q1',
                stem: 'What does the man ask the woman to do?',
                options: [
                  { id: 'c', text: 'Buy him a new history book.', correct: false },
                  { id: 'b', text: 'Return his book to the library.', correct: true },
                  { id: 'd', text: 'Lend him her own history textbook.', correct: false },
                  { id: 'a', text: 'Help him study for his class.', correct: false }
                ],
                explanation: 'The man asks the woman to bring back his book.',
                points: 1
              },
              {
                id: 'lt1-m2e-conv1-q2',
                stem: 'What does the man\'s book look like?',
                options: [
                  { id: 'c', text: 'It has a dark blue cover.', correct: false },
                  { id: 'b', text: 'It has a green cover.', correct: true },
                  { id: 'd', text: 'It has no cover at all.', correct: false },
                  { id: 'a', text: 'It has a bright red cover.', correct: false }
                ],
                explanation: 'The man says it is a history textbook with a green cover.',
                points: 1
              }
            ]
          },
        {
          id: 'lt1-m2e-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-1/m2e-conv2.mp3?v=20261006',
          image: '/img/listening/two_people/people-1.webp',
          transcript: 'Woman: Hi Tom, did you find a place to stay for the conference next month?\nMan: Yes, I booked a small hotel near the campus. It was the cheapest option.\nWoman: Is it close enough to walk?\nMan: It is about a fifteen-minute walk. Not bad if the weather is nice.\nWoman: Are you presenting any research?\nMan: Just a poster, but I am a little nervous about it.',
          questions: [
          {
            id: 'lt1-m2e-conv2-q1',
            stem: 'Where will Tom stay during the conference?',
            options: [
                  { id: 'b', text: 'At a small hotel near the campus.', correct: true },
                  { id: 'a', text: 'At a relative\'s house in the city.', correct: false },
                  { id: 'd', text: 'At an expensive resort outside the city.', correct: false },
                  { id: 'c', text: 'In a dormitory room on the campus.', correct: false }
            ],
            explanation: 'Tom says he booked a small hotel near the campus.',
            points: 1
          },
          {
            id: 'lt1-m2e-conv2-q2',
            stem: 'What is Tom doing at the conference?',
            options: [
                  { id: 'b', text: 'Presenting a poster.', correct: true },
                  { id: 'd', text: 'Attending only.', correct: false },
                  { id: 'a', text: 'Giving a long speech.', correct: false },
                  { id: 'c', text: 'Hosting a workshop.', correct: false }
            ],
            explanation: 'Tom says he is just presenting a poster but is a little nervous.',
            points: 1
          }
          ]
        }
    ],
    announcements: [
          {
            id: 'lt1-m2e-ann1',
            title: 'Listen to an announcement at a university.',
            audio: '/audio/listening/test-1/m2e-ann1.mp3?v=20261006',
            image: '/img/listening/announcement/female-1.webp',
            speakerGender: 'female',
            transcript: 'Good morning, students. I want to remind everyone that the campus shuttle will not run this Sunday because of the holiday. Regular service will start again on Monday morning. If you need transportation on Sunday, you can use the city bus or call a taxi. The campus parking office is also closed on Sunday. Please plan ahead. Thank you, and enjoy the holiday weekend.',
            questions: [
              {
                id: 'lt1-m2e-ann1-q1',
                stem: 'What is the announcement mainly about?',
                options: [
                  { id: 'c', text: 'The opening of a new bus route.', correct: false },
                  { id: 'a', text: 'A change to the shuttle schedule.', correct: true },
                  { id: 'b', text: 'A new parking policy.', correct: false },
                  { id: 'd', text: 'A campus safety reminder.', correct: false }
                ],
                explanation: 'The announcement is about the shuttle not running on Sunday because of the holiday.',
                points: 1
              },
              {
                id: 'lt1-m2e-ann1-q2',
                stem: 'When will regular shuttle service start again?',
                options: [
                  { id: 'c', text: 'Tuesday morning.', correct: false },
                  { id: 'a', text: 'Sunday afternoon.', correct: false },
                  { id: 'b', text: 'Monday morning.', correct: true },
                  { id: 'd', text: 'Wednesday morning.', correct: false }
                ],
                explanation: 'The announcement says regular service will start again on Monday morning.',
                points: 1
              }
            ]
          },
        {
          id: 'lt1-m2e-ann2',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-1/m2e-ann2.mp3?v=20261006',
          image: '/img/listening/announcement/female-1.webp',
          speakerGender: 'female',
          transcript: 'Hello students. Just a reminder that the campus bookstore will close two hours early next Friday for staff training. The bookstore will close at four p.m. instead of six. Normal hours will resume on Saturday morning. If you need to buy textbooks or supplies for next week, please plan to come in earlier on Friday or wait until Saturday. Thank you for your understanding.',
          questions: [
          {
            id: 'lt1-m2e-ann2-q1',
            stem: 'Why is the bookstore closing early next Friday?',
            options: [
                  { id: 'b', text: 'For staff training.', correct: true },
                  { id: 'c', text: 'For emergency building repairs.', correct: false },
                  { id: 'd', text: 'For a national holiday.', correct: false },
                  { id: 'a', text: 'For an inventory count.', correct: false }
            ],
            explanation: 'The announcement says the bookstore will close early for staff training.',
            points: 1
          },
          {
            id: 'lt1-m2e-ann2-q2',
            stem: 'What time will the bookstore close on Friday?',
            options: [
                  { id: 'b', text: 'Four p.m.', correct: true },
                  { id: 'c', text: 'Six p.m.', correct: false },
                  { id: 'd', text: 'Eight p.m.', correct: false },
                  { id: 'a', text: 'Two p.m.', correct: false }
            ],
            explanation: 'The announcement says it will close at four p.m. instead of six.',
            points: 1
          }
          ]
        }
    ],
    academicTalks: [
          {
            id: 'lt1-m2e-talk1',
            title: 'Listen to a talk in a biology class.',
            audio: '/audio/listening/test-1/m2e-talk1.mp3?v=20261006',
            image: '/img/listening/announcement/male-1.webp',
            speakerGender: 'male',
            transcript: 'Today we are going to talk about how trees grow. Every spring, trees begin growing new leaves and branches. The tree gets energy from the sun through its leaves. The roots take water and nutrients from the soil. As the tree gets older, its trunk becomes thicker each year. If you cut down a tree, you can count the rings inside the trunk to see how old it is. Each ring usually shows one year of growth. Trees grow faster in years with plenty of rain and slower in dry years. By looking at tree rings, scientists can learn about weather from many years ago.',
            questions: [
              {
                id: 'lt1-m2e-talk1-q1',
                stem: 'What is the talk mainly about?',
                options: [
                  { id: 'd', text: 'The best season of the year to cut trees.', correct: false },
                  { id: 'b', text: 'How to plant a tree in your garden.', correct: false },
                  { id: 'a', text: 'How trees grow and what their rings show.', correct: true },
                  { id: 'c', text: 'Why some trees grow taller than others do.', correct: false }
                ],
                explanation: 'The talk explains how trees grow and what tree rings can tell us.',
                points: 1
              },
              {
                id: 'lt1-m2e-talk1-q2',
                stem: 'What can scientists learn by studying tree rings?',
                options: [
                  { id: 'c', text: 'About weather from many years ago.', correct: true },
                  { id: 'a', text: 'How tall the tree will become.', correct: false },
                  { id: 'b', text: 'What kind of soil the tree grew in.', correct: false },
                  { id: 'd', text: 'Which animals lived near the tree.', correct: false }
                ],
                explanation: 'The talk says scientists can learn about weather from many years ago by looking at tree rings.',
                points: 1
              },
              {
                id: 'lt1-m2e-talk1-q3',
                stem: 'Where do trees get water and nutrients?',
                options: [
                  { id: 'b', text: 'From their leaves and outer bark.', correct: false },
                  { id: 'a', text: 'From the air around their branches.', correct: false },
                  { id: 'd', text: 'From sunlight throughout the growing season.', correct: false },
                  { id: 'c', text: 'From the soil through their roots.', correct: true }
                ],
                explanation: 'The talk says the roots take water and nutrients from the soil.',
                points: 1
              },
              {
                id: 'lt1-m2e-talk1-q4',
                stem: 'What can scientists learn from tree rings?',
                options: [
                  { id: 'd', text: 'What season the tree was planted in.', correct: false },
                  { id: 'b', text: 'What kind of animals live in the forest.', correct: false },
                  { id: 'a', text: 'How tall the tree will grow.', correct: false },
                  { id: 'c', text: 'About weather from many years ago.', correct: true }
                ],
                explanation: 'The talk says by looking at tree rings, scientists can learn about weather from many years ago.',
                points: 1
              }
            ]
          }
    ]
  },
};
