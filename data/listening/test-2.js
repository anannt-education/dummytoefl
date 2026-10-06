// TOEFL iBT 2026 Listening Practice — Test 2
// Module 1 (Router): 30 questions | Module 2: 17 questions | Total: 47
// Audio: pre-recorded MP3 files in /audio/listening/test-2/

window.LISTENING_SECTION_2 = window.LISTENING_TEST_2 = {
  id: 'listening-test-2',
  title: 'Listening Practice Test 2',
  format: '2026',
  timeLimit: 1740,

  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      introAudio: 'audio/listening/test-2/m1-intro.mp3',

      chooseResponse: [
    {
      id: 'lt2-m1-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m1-cr01.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Could you remind me what time the writing workshop starts?',
      options: [
        { id: 'b', text: 'I think it begins at three in the smaller seminar room.', correct: true },
        { id: 'd', text: 'The writing center is on the third floor next to testing services.', correct: false },
        { id: 'a', text: 'I went to one of those workshops last semester too.', correct: false },
        { id: 'c', text: 'I think the workshop covers academic essays this time.', correct: false }
      ],
      explanation: 'Direct question about start time.',
      points: 1
    },
    {
      id: 'lt2-m1-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m1-cr02.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'ve been trying to log into my student portal for an hour, but it keeps saying my password is wrong.',
      options: [
        { id: 'c', text: 'The portal was redesigned last year but it looks the same.', correct: false },
        { id: 'b', text: 'My portal seems to work fine on most days.', correct: false },
        { id: 'a', text: 'I always log in from the computers in the library.', correct: false },
        { id: 'd', text: 'You can reset it through the IT help page.', correct: true }
      ],
      explanation: 'Listener offers a practical solution.',
      points: 1
    },
    {
      id: 'lt2-m1-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m1-cr03.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Have you signed up for the campus blood drive yet?',
      options: [
        { id: 'b', text: 'Blood drives happen every semester, usually right before the midterm week.', correct: false },
        { id: 'a', text: 'The student center is a large building on campus.', correct: false },
        { id: 'd', text: 'No, but I was planning to do it this afternoon.', correct: true },
        { id: 'c', text: 'I gave blood once when I was in high school.', correct: false }
      ],
      explanation: 'Direct yes/no with follow-up.',
      points: 1
    },
    {
      id: 'lt2-m1-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m1-cr04.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I can\'t find a single open seat in the library today.',
      options: [
        { id: 'c', text: 'I usually prefer studying at home in the evenings.', correct: false },
        { id: 'd', text: 'Try the third floor; it\'s usually quieter and less crowded.', correct: true },
        { id: 'b', text: 'Library books can be checked out for three weeks at a time.', correct: false },
        { id: 'a', text: 'The library opens at eight every morning during the week.', correct: false }
      ],
      explanation: 'Suggests an alternative location.',
      points: 1
    },
    {
      id: 'lt2-m1-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m1-cr05.mp3',
      image: '/img/listening/stock_modal/female-5.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you remember to bring your textbook to class?',
      options: [
        { id: 'c', text: 'Class starts in about ten more minutes.', correct: false },
        { id: 'b', text: 'Yes, it\'s right here in my bag.', correct: true },
        { id: 'd', text: 'Textbooks are getting more expensive each year.', correct: false },
        { id: 'a', text: 'Our professor uses slides in every lecture.', correct: false }
      ],
      explanation: 'Direct confirmation.',
      points: 1
    },
    {
      id: 'lt2-m1-cr6',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m1-cr06.mp3',
      image: '/img/listening/stock_modal/male-6.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'My laptop battery died right in the middle of my exam yesterday.',
      options: [
        { id: 'b', text: 'I always carry a spare charger around in my bag.', correct: false },
        { id: 'd', text: 'Oh no, did the professor let you finish on a different machine?', correct: true },
        { id: 'c', text: 'Laptops have shorter battery life over time, especially the older student-issued ones.', correct: false },
        { id: 'a', text: 'Most of our exams are done online these days.', correct: false }
      ],
      explanation: 'Sympathetic concern with relevant follow-up.',
      points: 1
    },
    {
      id: 'lt2-m1-cr7',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m1-cr07.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Excuse me, do you know where the registrar moved to?',
      options: [
        { id: 'c', text: 'They\'re in the new administration wing now, on the second floor.', correct: true },
        { id: 'd', text: 'Registration for next term ends at noon this Friday.', correct: false },
        { id: 'a', text: 'The registrar handles transcripts and all the enrollment forms.', correct: false },
        { id: 'b', text: 'I haven\'t been there in years, but it was near the quad.', correct: false }
      ],
      explanation: 'Provides location information.',
      points: 1
    },
    {
      id: 'lt2-m1-cr8',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m1-cr08.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I might drop my philosophy class. The reading load is just too heavy.',
      options: [
        { id: 'c', text: 'I dropped a class last semester as well.', correct: false },
        { id: 'd', text: 'Philosophy classes can be interesting, but the workload surprises people.', correct: false },
        { id: 'a', text: 'Have you talked to the professor before deciding?', correct: true },
        { id: 'b', text: 'Reading closely is an important skill for college.', correct: false }
      ],
      explanation: 'Suggests a sensible step before deciding.',
      points: 1
    },
    {
      id: 'lt2-m1-cr9',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m1-cr09.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Are you going to the international film night on Friday?',
      options: [
        { id: 'c', text: 'The campus has a lot of international students.', correct: false },
        { id: 'b', text: 'Most films these days last about two hours.', correct: false },
        { id: 'd', text: 'I went last month and really enjoyed it.', correct: false },
        { id: 'a', text: 'I\'d like to. What movie are they showing?', correct: true }
      ],
      explanation: 'Shows interest and asks relevant follow-up.',
      points: 1
    },
    {
      id: 'lt2-m1-cr10',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m1-cr10.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I think I left my notebook in the lab last night.',
      options: [
        { id: 'd', text: 'Maintenance might have set it aside; check the front desk.', correct: true },
        { id: 'b', text: 'I bought myself a new notebook just last week.', correct: false },
        { id: 'c', text: 'The lab closes at ten o\'clock on most weekdays.', correct: false },
        { id: 'a', text: 'Notebooks are useful for taking notes in longer lab sessions.', correct: false }
      ],
      explanation: 'Practical suggestion to recover the item.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt2-m1-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-2/m1-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Woman: Have you decided on a topic for your sociology paper yet?\nMan: I\'m thinking about doing something on social media and friendship circles.\nWoman: That\'s a really current topic. Have you found enough sources?\nMan: I have plenty of news articles, but I need more academic ones. The rubric asks for six peer reviewed studies.\nWoman: The library database has a sociology section that would help.\nMan: Do I need a special login for that?\nWoman: Just your student ID. The reference desk runs a search tutorial at three.\nMan: Good idea. I\'ll head over there this afternoon.',
      questions: [
        {
          id: 'lt2-m1-conv1-q1',
          stem: 'What is the man having trouble with?',
          options: [
        { id: 'd', text: 'Finding academic sources for his topic.', correct: true },
        { id: 'c', text: 'Understanding the requirements of the assignment.', correct: false },
        { id: 'b', text: 'Reading through the assigned sociology articles.', correct: false },
        { id: 'a', text: 'Choosing a topic for his paper.', correct: false }
          ],
          explanation: 'He has news articles but needs more academic sources.',
          points: 1
        },        {
          id: 'lt2-m1-conv1-q2',
          stem: 'What does the woman suggest?',
          options: [
        { id: 'd', text: 'Searching the library database.', correct: true },
        { id: 'a', text: 'Talking to the professor.', correct: false },
        { id: 'c', text: 'Picking a different topic.', correct: false },
        { id: 'b', text: 'Reading the news every day.', correct: false }
          ],
          explanation: 'She suggests the library database sociology section.',
          points: 1
        }
      ]
    },
    {
      id: 'lt2-m1-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-2/m1-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Man: Did you go to the dorm meeting last night?\nWoman: I had to skip it. I had a lab section. What did I miss?\nMan: They announced new quiet hours starting at ten. They used to begin at midnight.\nWoman: Ten? That\'s earlier than the old policy.\nMan: A lot of residents complained about noise during exam weeks. The housing office collected almost sixty complaint forms.\nWoman: Does it apply on weekends too?\nMan: Weekends start at midnight, and the rule begins next month.\nWoman: That makes sense. I just hope people actually follow it.',
      questions: [
        {
          id: 'lt2-m1-conv2-q1',
          stem: 'What is the main change announced at the meeting?',
          options: [
        { id: 'b', text: 'Exam week dates were rescheduled again.', correct: false },
        { id: 'a', text: 'Noise complaints will now be ignored.', correct: false },
        { id: 'c', text: 'A new resident assistant was hired.', correct: false },
        { id: 'd', text: 'Quiet hours start earlier than before.', correct: true }
          ],
          explanation: 'Quiet hours moved earlier (to 10 PM).',
          points: 1
        },        {
          id: 'lt2-m1-conv2-q2',
          stem: 'Why was the change made?',
          options: [
        { id: 'c', text: 'More students moved into the dorm.', correct: false },
        { id: 'a', text: 'An old building rule was reinstated.', correct: false },
        { id: 'd', text: 'Many residents complained about noise.', correct: true },
        { id: 'b', text: 'The university made a budget decision.', correct: false }
          ],
          explanation: 'Residents complained about noise during exams.',
          points: 1
        }
      ]
    },
    {
      id: 'lt2-m1-conv3',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-2/m1-conv3.mp3',
      image: '/img/listening/two_people/people-3.webp',
      transcript: 'Woman: I\'m trying to figure out which classes to register for next term.\nMan: Have you talked to your advisor yet?\nWoman: Not yet, but I have an appointment Friday. Registration opens the following Monday.\nMan: Good. Bring a list of options. It really helps the conversation.\nWoman: That\'s smart. I\'ll print one out tonight. Should I rank them?\nMan: Yes, and note which ones meet at the same hour.\nWoman: Two of the ones I want are both Tuesday mornings.\nMan: Also check which classes have prerequisites you still need to take.',
      questions: [
        {
          id: 'lt2-m1-conv3-q1',
          stem: 'What is the woman planning to do Friday?',
          options: [
        { id: 'd', text: 'Travel home for the weekend.', correct: false },
        { id: 'c', text: 'Go to the registrar\'s office.', correct: false },
        { id: 'a', text: 'Drop a class she signed up for.', correct: false },
        { id: 'b', text: 'Meet with her academic advisor.', correct: true }
          ],
          explanation: 'She has an appointment with her advisor on Friday.',
          points: 1
        },        {
          id: 'lt2-m1-conv3-q2',
          stem: 'What does the man suggest she check?',
          options: [
        { id: 'd', text: 'How many other students are registering for them.', correct: false },
        { id: 'a', text: 'Whether the textbooks for those classes are expensive.', correct: false },
        { id: 'c', text: 'If the professors have office hours on Fridays.', correct: false },
        { id: 'b', text: 'Whether the classes have prerequisites she still needs.', correct: true }
          ],
          explanation: 'He suggests checking prerequisites.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt2-m1-ann1',
      title: 'Listen to an announcement at a university event.',
      audio: '/audio/listening/test-2/m1-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good morning, everyone. The Office of Student Activities will host a club fair this Thursday from noon until four in the main quad. More than fifty student organizations will have tables, including academic clubs, sports teams, and cultural groups. Stop by to learn about getting involved on campus. Free pizza and snacks will be available, and the first hundred students will receive a campus tote bag. If it rains, the fair moves indoors to the student center ballroom. Bring your student ID.',
      questions: [
        {
          id: 'lt2-m1-ann1-q1',
          stem: 'What is the announcement mainly about?',
          options: [
        { id: 'd', text: 'A change in student activity hours.', correct: false },
        { id: 'c', text: 'An upcoming campus club fair.', correct: true },
        { id: 'b', text: 'A regular club meeting.', correct: false },
        { id: 'a', text: 'A new pizza restaurant on campus.', correct: false }
          ],
          explanation: 'Club fair on Thursday.',
          points: 1
        },        {
          id: 'lt2-m1-ann1-q2',
          stem: 'What will the first hundred students receive?',
          options: [
        { id: 'd', text: 'A free lunch voucher.', correct: false },
        { id: 'c', text: 'A store discount card.', correct: false },
        { id: 'b', text: 'A free pizza coupon.', correct: false },
        { id: 'a', text: 'A campus tote bag.', correct: true }
          ],
          explanation: 'A campus tote bag.',
          points: 1
        }
      ]
    },
    {
      id: 'lt2-m1-ann2',
      title: 'Listen to an announcement on campus.',
      audio: '/audio/listening/test-2/m1-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Attention all students. The library will close at six p.m. on Friday for staff training. All study spaces and reference services will be unavailable during that time. Items on hold must be picked up before five thirty. Regular hours will resume Saturday morning at nine. If you need access to materials, please plan ahead. Books due Friday can be returned in the drop box by the north entrance. The 24-hour study lounge in the student center remains open.',
      questions: [
        {
          id: 'lt2-m1-ann2-q1',
          stem: 'Why is the library closing early on Friday?',
          options: [
        { id: 'c', text: 'For renovations.', correct: false },
        { id: 'b', text: 'For a special event.', correct: false },
        { id: 'a', text: 'Due to a power outage.', correct: false },
        { id: 'd', text: 'For staff training.', correct: true }
          ],
          explanation: 'Staff training.',
          points: 1
        },        {
          id: 'lt2-m1-ann2-q2',
          stem: 'What alternative is available to students?',
          options: [
        { id: 'a', text: 'The 24-hour study lounge in the student center.', correct: true },
        { id: 'd', text: 'The faculty lounge on the third floor.', correct: false },
        { id: 'b', text: 'The library annex over on the south side.', correct: false },
        { id: 'c', text: 'The campus cafe with extended weekend hours.', correct: false }
          ],
          explanation: '24-hour study lounge in student center.',
          points: 1
        }
      ]
    },
    {
      id: 'lt2-m1-ann3',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-2/m1-ann3.mp3',
      image: '/img/listening/announcement/female-3.webp',
      speakerGender: 'female',
      transcript: 'Hello, students. The Career Services office will host a workshop on writing strong cover letters next Tuesday at two p.m. The session runs ninety minutes in Whitman Hall, room two oh four. Bring a draft of a letter or one you\'d like to write. Career counselors will give individual feedback. Space is limited to twenty participants, so please register through the career portal by Monday evening. If the workshop fills, the portal will add you to a wait list.',
      questions: [
        {
          id: 'lt2-m1-ann3-q1',
          stem: 'What is the focus of the workshop?',
          options: [
        { id: 'a', text: 'Writing strong cover letters.', correct: true },
        { id: 'd', text: 'Practicing for job interviews.', correct: false },
        { id: 'b', text: 'Networking with local alumni.', correct: false },
        { id: 'c', text: 'Improving and formatting resumes.', correct: false }
          ],
          explanation: 'Cover letters.',
          points: 1
        },        {
          id: 'lt2-m1-ann3-q2',
          stem: 'What is the registration deadline?',
          options: [
        { id: 'b', text: 'Wednesday at noon.', correct: false },
        { id: 'c', text: 'Monday evening.', correct: true },
        { id: 'a', text: 'Sunday at midnight.', correct: false },
        { id: 'd', text: 'Tuesday morning.', correct: false }
          ],
          explanation: 'Monday evening.',
          points: 1
        }
      ]
    },
      ],

      academicTalks: [
    {
      id: 'lt2-m1-talk1',
      title: 'Listen to a talk in a sociology class.',
      audio: '/audio/listening/test-2/m1-talk1.mp3',
      image: '/img/listening/announcement/female-2.webp',
      speakerGender: 'female',
      transcript: 'Today we\'re going to examine social conformity, the tendency of individuals to align their behavior or beliefs with those of a group. I\'ll start with the classic experiment, then add what later research found, and close with the practical stakes. In the 1950s, the psychologist Solomon Asch designed a now-famous series of experiments to measure this tendency. Participants were shown a line on a card and asked to match it to one of three comparison lines on a second card. The task was easy, and people working alone got it right nearly every time. But Asch placed each participant in a room with several actors, and those actors had been instructed in advance to say the wrong answer out loud before the participant responded. About a third of the participants went along with the incorrect majority at least once, even though the correct line was obvious. Asch concluded that people conform for two reasons. Either they begin to doubt their own perception, or they simply fear standing out from the group. Now here\'s the detail I want you to hold onto. Later studies showed that conformity drops sharply when even one other person in the room breaks from the majority. A single ally gives people the confidence to dissent. That matters in classrooms, juries, and workplaces, where group dynamics can either strengthen sound decision making or quietly undermine it. Next class, we\'ll look at how digital communication and online communities have changed the patterns of conformity Asch first identified.',
      questions: [
        {
          id: 'lt2-m1-talk1-q1',
          stem: 'What is the main topic of the talk?',
          options: [
        { id: 'b', text: 'A description of standardized testing methods in psychology.', correct: false },
        { id: 'c', text: 'How online groups have replaced traditional local communities.', correct: false },
        { id: 'a', text: 'The role of social influence on individual judgment.', correct: true },
        { id: 'd', text: 'The history of experimental design in the 1950s.', correct: false }
          ],
          explanation: 'The talk centers on social conformity and the Asch experiments.',
          points: 1
        },        {
          id: 'lt2-m1-talk1-q2',
          stem: 'In the experiment, what did the actors do?',
          options: [
        { id: 'd', text: 'Refused to answer the matching question out loud.', correct: false },
        { id: 'a', text: 'Drew their own lines on a separate card.', correct: false },
        { id: 'b', text: 'Switched seats with the participant between the trials.', correct: false },
        { id: 'c', text: 'Gave the wrong answer before the participant responded.', correct: true }
          ],
          explanation: 'The speaker explains that actors gave wrong answers out loud first.',
          points: 1
        },        {
          id: 'lt2-m1-talk1-q3',
          stem: 'What can be inferred about participants who conformed?',
          options: [
        { id: 'c', text: 'They were unsure of their own perception or feared standing out.', correct: true },
        { id: 'a', text: 'They wanted to finish the experiment as quickly as possible.', correct: false },
        { id: 'b', text: 'They had been instructed in advance to copy the group.', correct: false },
        { id: 'd', text: 'They had poor vision and could not see the lines clearly.', correct: false }
          ],
          explanation: 'Asch concluded that doubt and social pressure drove conformity.',
          points: 1
        },        {
          id: 'lt2-m1-talk1-q4',
          stem: 'What will the speaker most likely discuss next?',
          options: [
        { id: 'c', text: 'Other classic experiments from the 1960s and 1970s.', correct: false },
        { id: 'd', text: 'How digital communication affects conformity today.', correct: true },
        { id: 'a', text: 'A statistical analysis of the original Asch data.', correct: false },
        { id: 'b', text: 'The personal life and career of Solomon Asch.', correct: false }
          ],
          explanation: 'The speaker ends by previewing online communities and modern conformity.',
          points: 1
        }
      ]
    },
        {
          id: 'lt2-m1-talk2',
          title: 'Listen to a talk in an urban planning class.',
          audio: '/audio/listening/test-2/m1-talk2.mp3',
          image: '/img/listening/announcement/male-1.webp',
          speakerGender: 'male',
          transcript: 'Let\'s discuss what makes a city sustainable, because that word gets used loosely and it\'s worth pinning down. A sustainable city is one that meets the needs of its residents today without damaging the environment for future generations. That\'s the definition I want you working from. So what does it look like in practice? Four features come up again and again. First, efficient public transportation, so that getting to work doesn\'t require a car. Second, plenty of green space, which cools the streets in summer and soaks up heavy rainfall. Third, buildings that use less energy, through better insulation, better windows, and better heating. And fourth, many sustainable cities encourage cycling and walking by creating safe paths and reducing car traffic in the center. Recycling and water conservation are also important, and they\'re often where a city improves fastest, since changing how waste and water are handled costs far less than rebuilding a transit network. Consider the scale involved. A resident of a compact, well-connected city typically uses far less energy getting around each day than someone living in a spread-out suburb, for the simple reason that the daily distances are shorter. I should be honest with you, though. No city is perfectly sustainable. The ones we praise are further along the road, not finished. But many cities around the world are working toward this goal, and progress is real. Cities like Copenhagen and Vancouver are often mentioned as good examples because of their strong public transportation and clean energy programs.',
          questions: [
          {
            id: 'lt2-m1-talk2-q1',
            stem: 'What is the speaker mainly explaining?',
            options: [
                  { id: 'd', text: 'Why cycling is the best form of transportation.', correct: false },
                  { id: 'c', text: 'How to design new neighborhoods from scratch.', correct: false },
                  { id: 'a', text: 'What makes a city sustainable and gives examples.', correct: true },
                  { id: 'b', text: 'Why most cities will fail to become sustainable.', correct: false }
            ],
            explanation: 'The talk explains what sustainable cities are and gives Copenhagen and Vancouver as examples.',
            points: 1
          },
          {
            id: 'lt2-m1-talk2-q2',
            stem: 'Which two cities does the speaker mention as good examples?',
            options: [
                  { id: 'c', text: 'Tokyo and Sydney.', correct: false },
                  { id: 'a', text: 'London and Paris.', correct: false },
                  { id: 'b', text: 'Copenhagen and Vancouver.', correct: true },
                  { id: 'd', text: 'New York and Berlin.', correct: false }
            ],
            explanation: 'The speaker mentions Copenhagen and Vancouver.',
            points: 1
          },
              {
                id: 'lt2-m1-talk2-q3',
                stem: 'According to the speaker, what do sustainable cities encourage?',
                options: [
                  { id: 'a', text: 'Driving large cars for daily commutes.', correct: false },
                  { id: 'b', text: 'Cycling and walking by creating safe paths.', correct: true },
                  { id: 'c', text: 'Building taller skyscrapers in every district.', correct: false },
                  { id: 'd', text: 'Heating homes with wood fires in winter.', correct: false }
                ],
                explanation: 'The speaker says sustainable cities encourage cycling and walking by creating safe paths.',
                points: 1
              },
              {
                id: 'lt2-m1-talk2-q4',
                stem: 'What does the speaker imply by mentioning Copenhagen and Vancouver?',
                options: [
                  { id: 'd', text: 'They will be the next cities to grow rapidly.', correct: false },
                  { id: 'c', text: 'They have failed to reduce car traffic.', correct: false },
                  { id: 'b', text: 'They are good examples of progress toward sustainability.', correct: true },
                  { id: 'a', text: 'They are the only sustainable cities in the world.', correct: false }
                ],
                explanation: 'The speaker mentions Copenhagen and Vancouver as good examples of cities working toward sustainability.',
                points: 1
              }
          ]
        }
      ]
    },

    {
      id: 'module-2',
      title: 'Module 2',
      introAudio: 'audio/listening/test-2/m2-intro.mp3',

      chooseResponse: [
    {
      id: 'lt2-m2-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m2-cr01.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Were you in class when the professor announced the new deadline?',
      options: [
        { id: 'd', text: 'I missed Tuesday\'s lecture entirely because I overslept.', correct: false },
        { id: 'c', text: 'Deadlines in that class are usually on Fridays.', correct: false },
        { id: 'a', text: 'Yes, she pushed the paper back to the following Monday.', correct: true },
        { id: 'b', text: 'Professor Diaz is teaching this term and rarely changes deadlines.', correct: false }
      ],
      explanation: 'Direct yes plus the relevant detail.',
      points: 1
    },
    {
      id: 'lt2-m2-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m2-cr02.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m not really following the calculus material this week.',
      options: [
        { id: 'c', text: 'Have you tried the free tutoring drop-ins on Wednesday evenings?', correct: true },
        { id: 'd', text: 'Math classes are challenging for many students, so try a study group.', correct: false },
        { id: 'a', text: 'I took that calculus course last year with another professor.', correct: false },
        { id: 'b', text: 'Calculus covers a lot of different topics in one term.', correct: false }
      ],
      explanation: 'Recommends a concrete resource.',
      points: 1
    },
    {
      id: 'lt2-m2-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m2-cr03.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Excuse me, do you have a pen I could borrow for this form?',
      options: [
        { id: 'c', text: 'Forms are often required at the office, and the staff has spare pens.', correct: false },
        { id: 'a', text: 'Sure, here you go. You can keep it if you need to.', correct: true },
        { id: 'd', text: 'Pens come in a lot of different colors these days.', correct: false },
        { id: 'b', text: 'I usually prefer pencils for most of my own writing.', correct: false }
      ],
      explanation: 'Direct help and small generous offer.',
      points: 1
    },
    {
      id: 'lt2-m2-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m2-cr04.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I haven\'t decided whether to take the summer class or not.',
      options: [
        { id: 'c', text: 'The shorter format is intense, so check how many hours it needs.', correct: true },
        { id: 'a', text: 'Congratulations, that is a great choice.', correct: false },
        { id: 'b', text: 'No, I do not teach during the summer.', correct: false },
        { id: 'd', text: 'You could ask them to say it again.', correct: false }
      ],
      explanation: 'The speaker is still weighing a decision, so the useful reply gives them something to weigh. "The shorter format is intense, so check how many hours it needs" does that. "Congratulations, that is a great choice" treats them as having already decided. "No, I do not teach during the summer" answers a question nobody asked. "You could ask them to say it again" responds to a hearing problem rather than a decision.',
      points: 1
    },
    {
      id: 'lt2-m2-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-2/m2-cr05.mp3',
      image: '/img/listening/stock_modal/female-5.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Do you know if there are any tickets left for the spring concert?',
      options: [
        { id: 'a', text: 'The spring season is always a busy time on campus here.', correct: false },
        { id: 'd', text: 'Tickets often sell out quickly, especially for evening shows in the main hall.', correct: false },
        { id: 'c', text: 'Concerts on campus are always popular events with the students.', correct: false },
        { id: 'b', text: 'I checked this morning and there were still some in the back rows.', correct: true }
      ],
      explanation: 'Provides specific recent information.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt2-m2-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-2/m2-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Man: I just got back from the campus career office.\nWoman: How did the resume review go?\nMan: They suggested a few changes. Mostly to the formatting. My margins were too narrow and the sections ran together.\nWoman: That\'s helpful. Did they recommend any internships?\nMan: They sent me a list of companies that recruit on campus. Most of them hire in the fall.\nWoman: How long did the whole thing take?\nMan: About thirty minutes, and they emailed the notes right after.\nWoman: Could you forward me that list? I\'d love to look through it.',
      questions: [
        {
          id: 'lt2-m2-conv1-q1',
          stem: 'What did the man do at the career office?',
          options: [
        { id: 'a', text: 'Met with a company recruiter.', correct: false },
        { id: 'c', text: 'Interviewed for a summer job.', correct: false },
        { id: 'b', text: 'Took a career personality test.', correct: false },
        { id: 'd', text: 'Got feedback on his resume.', correct: true }
          ],
          explanation: 'He had a resume review.',
          points: 1
        },        {
          id: 'lt2-m2-conv1-q2',
          stem: 'What does the woman ask the man to do?',
          options: [
        { id: 'c', text: 'Help her revise her own resume.', correct: false },
        { id: 'b', text: 'Forward her the list of companies.', correct: true },
        { id: 'a', text: 'Schedule a similar appointment for her.', correct: false },
        { id: 'd', text: 'Recommend a particular employer to her.', correct: false }
          ],
          explanation: 'She asks him to forward the list.',
          points: 1
        }
      ]
    },
    {
      id: 'lt2-m2-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-2/m2-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Woman: Are you going to the spring concert this Saturday?\nMan: I want to, but tickets sold out really fast. They were gone in about twenty minutes.\nWoman: Try the wait list on the student activities page.\nMan: I didn\'t know there was one. How does that work?\nWoman: They release returned tickets the day before the show. You get an email and have two hours to claim a seat.\nMan: Is there a charge if I take one?\nWoman: Same student price, fifteen dollars, charged to your account.\nMan: Thanks for the tip. I\'ll sign up tonight.',
      questions: [
        {
          id: 'lt2-m2-conv2-q1',
          stem: 'Why won\'t the man attend the concert in his original plan?',
          options: [
        { id: 'a', text: 'Tickets sold out before he could buy one.', correct: true },
        { id: 'b', text: 'He doesn\'t like the band that is performing.', correct: false },
        { id: 'd', text: 'He has another commitment on that Saturday night.', correct: false },
        { id: 'c', text: 'It\'s outdoors and the weather will be bad.', correct: false }
          ],
          explanation: 'Tickets sold out fast.',
          points: 1
        },        {
          id: 'lt2-m2-conv2-q2',
          stem: 'What does the woman recommend?',
          options: [
        { id: 'c', text: 'Skipping the spring concert entirely this year.', correct: false },
        { id: 'b', text: 'Going with friends who already have tickets.', correct: false },
        { id: 'd', text: 'Signing up for a wait list online.', correct: true },
        { id: 'a', text: 'Trying to buy tickets at the door.', correct: false }
          ],
          explanation: 'She recommends the wait list.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt2-m2-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-2/m2-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good afternoon. This is a reminder that course evaluations are now open and will close at the end of next week, on Friday at midnight. Your feedback helps improve courses for future students and is also used in faculty reviews. Evaluations are confidential, and no instructor sees any responses until final grades have been posted. Each one takes about five minutes per course, and you can save your answers and return later if you are interrupted. Please complete them through the student portal under Academics.',
      questions: [
        {
          id: 'lt2-m2-ann1-q1',
          stem: 'What are students being asked to do?',
          options: [
        { id: 'b', text: 'Vote in student elections.', correct: false },
        { id: 'd', text: 'Complete course evaluations.', correct: true },
        { id: 'c', text: 'Apply for courses next term.', correct: false },
        { id: 'a', text: 'Submit final papers.', correct: false }
          ],
          explanation: 'Complete course evaluations.',
          points: 1
        },        {
          id: 'lt2-m2-ann1-q2',
          stem: 'How long does each evaluation take?',
          options: [
        { id: 'c', text: 'Roughly half an hour.', correct: false },
        { id: 'b', text: 'Around fifteen minutes.', correct: false },
        { id: 'a', text: 'Less than a minute.', correct: false },
        { id: 'd', text: 'About five minutes.', correct: true }
          ],
          explanation: 'About five minutes.',
          points: 1
        }
      ]
    },
    {
      id: 'lt2-m2-ann2',
      title: 'Listen to an announcement at a campus building.',
      audio: '/audio/listening/test-2/m2-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Attention residents of West Hall. We\'ll be conducting routine fire alarm testing this Saturday from nine a.m. to noon. Alarms will sound briefly on every floor during this time, including the stairwells and the ground-floor lounge. There is no need to evacuate or take any action, since the alarms are only tests. A maintenance crew will be checking the alarm panel on each floor, and the work may finish before noon. If you hear an alarm outside of these hours, please follow normal evacuation procedures.',
      questions: [
        {
          id: 'lt2-m2-ann2-q1',
          stem: 'What is the announcement about?',
          options: [
        { id: 'b', text: 'New fire safety training.', correct: false },
        { id: 'c', text: 'A real fire emergency.', correct: false },
        { id: 'd', text: 'Routine fire alarm testing.', correct: true },
        { id: 'a', text: 'A planned building evacuation.', correct: false }
          ],
          explanation: 'Routine fire alarm testing.',
          points: 1
        },        {
          id: 'lt2-m2-ann2-q2',
          stem: 'What should residents do during the testing?',
          options: [
        { id: 'b', text: 'Move down to the basement for safety.', correct: false },
        { id: 'd', text: 'Report to the front desk for instructions.', correct: false },
        { id: 'c', text: 'Take no action; the alarms are tests.', correct: true },
        { id: 'a', text: 'Evacuate the building immediately and wait outside.', correct: false }
          ],
          explanation: 'Take no action.',
          points: 1
        }
      ]
    }
      ],

      academicTalks: [
        {
          id: 'lt2-m2-talk1',
          title: 'Listen to a talk in a biology class.',
          audio: '/audio/listening/test-2/m2-talk1.mp3',
          image: '/img/listening/announcement/male-3.webp',
          speakerGender: 'male',
          transcript: 'Many bird species undertake migrations of remarkable distances each year, and biologists have spent decades studying how they navigate so accurately. Today I want to take you through the cues they rely on, and then explain why the whole system is so hard to break. We now know that birds combine multiple cues rather than depending on any single one. During the day, they use the position of the sun, which means they also need an internal sense of time, since the sun shifts across the sky. At night, they use the patterns of stars. And birds detect the Earth\'s magnetic field through specialized cells in their eyes, cells that may respond to magnetism in ways that are still being investigated. Where does the ability come from? Both inheritance and experience. Younger birds appear to inherit a rough sense of the route they should follow, but they also learn from older birds traveling alongside them and from their own repeated journeys. A first-year bird will drift off course more often than an adult of the same species. The clearest evidence comes from experiments. When researchers deliberately disrupt one cue, for instance by covering the sky during daylight so the sun is hidden, the birds don\'t simply stop or scatter. They switch to backup methods like the magnetic field and carry on in roughly the right direction. That\'s the point I\'d like to leave you with. This redundancy, this overlap between several independent cues, is what makes their navigation surprisingly robust.',
          questions: [
            {
              id: 'lt2-m2-talk1-q1',
              stem: 'According to the speaker, what cue do birds use at night?',
              options: [
                { id: 'a', text: 'The position of the sun', correct: false },
                { id: 'c', text: 'Familiar landmarks below', correct: false },
                { id: 'd', text: 'The calls of other migrating birds', correct: false },
                { id: 'b', text: 'The patterns of stars', correct: true }
              ],
              explanation: 'The speaker states that birds use the patterns of stars at night.',
              points: 1
            },
            {
              id: 'lt2-m2-talk1-q2',
              stem: 'What does the speaker mean by "redundancy" in bird navigation?',
              options: [
                { id: 'a', text: 'Birds follow only one navigation method at a time during a migration', correct: false },
                { id: 'b', text: 'Birds repeat the same migration path year after year without using any other cues', correct: false },
                { id: 'c', text: 'Birds have multiple backup methods so navigation works even if one cue is disrupted', correct: true },
                { id: 'd', text: 'Birds rely entirely on inherited instinct rather than on experience or learning', correct: false }
              ],
              explanation: 'The speaker uses redundancy to describe how birds switch to backup cues like the magnetic field if one method is disrupted.',
              points: 1
            },
                            {
                id: 'lt2-m2-talk1-q3',
                stem: 'Why do birds using the sun need a time sense?',
                options: [
                  { id: 'b', text: 'Because stars replace the sun after dark each night.', correct: false },
                  { id: 'd', text: 'Because the sun\'s position shifts through the day.', correct: true },
                  { id: 'a', text: 'Because the sun is hidden during cloudy weather.', correct: false },
                  { id: 'c', text: 'Because magnetic cues weaken during the middle of the day.', correct: false }
                ],
                explanation: 'Because the sun moves across the sky during the day, a bird reading its position also needs an internal sense of time.',
                points: 1
              },
                            {
                id: 'lt2-m2-talk1-q4',
                stem: 'What does the speaker suggest about young birds\' navigation?',
                options: [
                  { id: 'a', text: 'They navigate entirely by instinct with no learning involved.', correct: false },
                  { id: 'b', text: 'They inherit a rough route and improve with experience.', correct: true },
                  { id: 'c', text: 'They follow older birds because they cannot see stars.', correct: false },
                  { id: 'd', text: 'They are taught the route by researchers before migrating.', correct: false }
                ],
                explanation: 'The speaker says younger birds inherit a rough sense of the route and then learn from older birds and from their own repeated journeys, which is why first-year birds drift off course more than adults.',
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
    introAudio: '/audio/listening/test-2/m2-intro.mp3',
    chooseResponse: [
          {
            id: 'lt2-m2e-cr1',
            type: 'choose_response',
            audio: '/audio/listening/test-2/m2e-cr01.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Do you know how to get to the gym from here?',
            options: [
              { id: 'a', text: 'It is across from the cafeteria.', correct: true },
              { id: 'd', text: 'Yes, I love going to the gym.', correct: false },
              { id: 'c', text: 'The gym closes at ten p.m.', correct: false },
              { id: 'b', text: 'I exercise three times a week.', correct: false }
            ],
            explanation: 'The speaker is asking for directions to the gym, so the correct response gives a location.',
            points: 1
          },
          {
            id: 'lt2-m2e-cr2',
            type: 'choose_response',
            audio: '/audio/listening/test-2/m2e-cr02.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Are you coming to the meeting tomorrow?',
            options: [
              { id: 'a', text: 'The meeting last week was very interesting.', correct: false },
              { id: 'c', text: 'Meetings like that one are sometimes boring.', correct: false },
              { id: 'b', text: 'Yes, I will be there at three.', correct: true },
              { id: 'd', text: 'We usually meet here every other week.', correct: false }
            ],
            explanation: 'The speaker is asking about attending the meeting, so the correct response confirms attendance.',
            points: 1
          },
          {
            id: 'lt2-m2e-cr3',
            type: 'choose_response',
            audio: '/audio/listening/test-2/m2e-cr03.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Could I borrow your pen for a moment?',
            options: [
              { id: 'b', text: 'Of course, here you go.', correct: true },
              { id: 'a', text: 'I will buy a new pen tomorrow.', correct: false },
              { id: 'c', text: 'Pens are useful for taking notes.', correct: false },
              { id: 'd', text: 'I always carry two pens.', correct: false }
            ],
            explanation: 'The speaker is asking to borrow a pen, so the correct response agrees to lend it.',
            points: 1
          },
          {
            id: 'lt2-m2e-cr4',
            type: 'choose_response',
            audio: '/audio/listening/test-2/m2e-cr04.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Did you enjoy the concert last night?',
            options: [
              { id: 'a', text: 'Concerts are usually loud.', correct: false },
              { id: 'd', text: 'The tickets were cheap.', correct: false },
              { id: 'c', text: 'I will go again next month.', correct: false },
              { id: 'b', text: 'Yes, the music was wonderful.', correct: true }
            ],
            explanation: 'The speaker is asking about the past concert, so the correct response describes how it was.',
            points: 1
          },
          {
            id: 'lt2-m2e-cr5',
            type: 'choose_response',
            audio: '/audio/listening/test-2/m2e-cr05.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Have you decided what to do this summer?',
            options: [
              { id: 'c', text: 'Last summer was very hot and humid.', correct: false },
              { id: 'a', text: 'Summer is my favorite season of the year.', correct: false },
              { id: 'd', text: 'I have three whole months off this year.', correct: false },
              { id: 'b', text: 'I am planning to take a road trip.', correct: true }
            ],
            explanation: 'The speaker is asking about future plans, so the correct response shares a plan.',
            points: 1
          },
    ],
    conversations: [
          {
            id: 'lt2-m2e-conv1',
            title: 'Listen to a conversation.',
            audio: '/audio/listening/test-2/m2e-conv1.mp3',
            image: '/img/listening/two_people/people-1.webp',
            transcript: 'Woman: Hi Tom, how was your weekend at home?\nMan: It was nice. I helped my parents work in the garden.\nWoman: That sounds fun. Did you grow anything new this year?\nMan: We planted tomatoes and peppers. My mother also wants to try strawberries.\nWoman: I would love to have a garden like that someday.\nMan: It is a lot of work, but the food really tastes great.\nWoman: Maybe I can come visit and see it sometime.\nMan: Sure, anytime. The vegetables should be ready in a few weeks.',
            questions: [
              {
                id: 'lt2-m2e-conv1-q1',
                stem: 'What did Tom do over the weekend?',
                options: [
                  { id: 'a', text: 'He visited a friend in another city.', correct: false },
                  { id: 'd', text: 'He took a cooking class on Saturday.', correct: false },
                  { id: 'b', text: 'He helped his parents in the garden.', correct: true },
                  { id: 'c', text: 'He worked at a local farmers\' market.', correct: false }
                ],
                explanation: 'Tom says he helped his parents work in the garden.',
                points: 1
              },
              {
                id: 'lt2-m2e-conv1-q2',
                stem: 'What did Tom\'s family plant?',
                options: [
                  { id: 'c', text: 'Apples and pears.', correct: false },
                  { id: 'd', text: 'Lettuce and herbs.', correct: false },
                  { id: 'a', text: 'Carrots and onions.', correct: false },
                  { id: 'b', text: 'Tomatoes and peppers.', correct: true }
                ],
                explanation: 'Tom mentions they planted tomatoes and peppers.',
                points: 1
              }
            ]
          },
        {
          id: 'lt2-m2e-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-2/m2e-conv2.mp3',
          image: '/img/listening/two_people/people-1.webp',
          transcript: 'Man: Hi Sara, are you going to the science museum on Saturday?\nWoman: Yes, my little sister wants to see the dinosaur exhibit.\nMan: I have heard the new planetarium show is great too.\nWoman: That sounds fun. How long is the show?\nMan: I think about thirty minutes. Tickets are five dollars extra.\nWoman: Worth it. We will probably go after lunch.',
          questions: [
          {
            id: 'lt2-m2e-conv2-q1',
            stem: 'Why is the woman going to the museum?',
            options: [
                  { id: 'b', text: 'Her little sister wants to see the dinosaur exhibit.', correct: true },
                  { id: 'd', text: 'She wants to take a class at the museum.', correct: false },
                  { id: 'c', text: 'She wants to meet a friend there for lunch.', correct: false },
                  { id: 'a', text: 'She wants to see a new movie about science.', correct: false }
            ],
            explanation: 'The woman says her little sister wants to see the dinosaur exhibit.',
            points: 1
          },
          {
            id: 'lt2-m2e-conv2-q2',
            stem: 'How much extra do tickets to the planetarium show cost?',
            options: [
                  { id: 'd', text: 'Nothing, they are free.', correct: false },
                  { id: 'b', text: 'Five dollars.', correct: true },
                  { id: 'c', text: 'Ten dollars.', correct: false },
                  { id: 'a', text: 'Two dollars.', correct: false }
            ],
            explanation: 'The man says tickets are five dollars extra.',
            points: 1
          }
          ]
        }
    ],
    announcements: [
          {
            id: 'lt2-m2e-ann1',
            title: 'Listen to an announcement at a university.',
            audio: '/audio/listening/test-2/m2e-ann1.mp3',
            image: '/img/listening/announcement/male-1.webp',
            speakerGender: 'male',
            transcript: 'Hello, students. The student health center will offer free flu shots next week from Monday through Friday. Shots will be given between nine in the morning and four in the afternoon. No appointment is needed. Just bring your student ID. The shots are free for all students. Faculty and staff can also get a shot for a small fee of ten dollars. Getting a flu shot is the best way to stay healthy this winter.',
            questions: [
              {
                id: 'lt2-m2e-ann1-q1',
                stem: 'What is the announcement about?',
                options: [
                  { id: 'a', text: 'Free flu shots for students next week.', correct: true },
                  { id: 'd', text: 'Volunteers needed at the student health center.', correct: false },
                  { id: 'b', text: 'A new health insurance plan for students.', correct: false },
                  { id: 'c', text: 'A change in the health center hours.', correct: false }
                ],
                explanation: 'The announcement is about free flu shots being offered next week.',
                points: 1
              },
              {
                id: 'lt2-m2e-ann1-q2',
                stem: 'When will the shots be given?',
                options: [
                  { id: 'a', text: 'Only on Monday morning of next week.', correct: false },
                  { id: 'c', text: 'Only on Saturday afternoons this coming week.', correct: false },
                  { id: 'b', text: 'Monday through Friday from nine to four.', correct: true },
                  { id: 'd', text: 'At any time of the day or night.', correct: false }
                ],
                explanation: 'The announcement says shots are given Monday through Friday from nine to four.',
                points: 1
              }
            ]
          },
        {
          id: 'lt2-m2e-ann2',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-2/m2e-ann2.mp3',
          image: '/img/listening/announcement/male-1.webp',
          speakerGender: 'male',
          transcript: 'Good morning. The student parking lot behind the science building will be closed this Saturday for maintenance. Vehicles must be moved by Friday at six p.m. or they will be towed. Free parking is available in the visitor lot near the main entrance for the weekend. Normal parking will be available again on Monday morning.',
          questions: [
          {
            id: 'lt2-m2e-ann2-q1',
            stem: 'When must vehicles be moved out of the student parking lot?',
            options: [
                  { id: 'b', text: 'Friday at six p.m.', correct: true },
                  { id: 'd', text: 'Sunday at nine a.m.', correct: false },
                  { id: 'c', text: 'Saturday at twelve noon.', correct: false },
                  { id: 'a', text: 'Thursday at eight a.m.', correct: false }
            ],
            explanation: 'The announcement says vehicles must be moved by Friday at six p.m.',
            points: 1
          },
          {
            id: 'lt2-m2e-ann2-q2',
            stem: 'Where is free parking available for the weekend?',
            options: [
                  { id: 'd', text: 'On the street just outside the campus gates.', correct: false },
                  { id: 'a', text: 'In the student lot behind the science building.', correct: false },
                  { id: 'b', text: 'In the visitor lot near the main entrance.', correct: true },
                  { id: 'c', text: 'In the parking area by the football stadium.', correct: false }
            ],
            explanation: 'The announcement says free parking is available in the visitor lot near the main entrance.',
            points: 1
          }
          ]
        }
    ],
    academicTalks: [
          {
            id: 'lt2-m2e-talk1',
            title: 'Listen to a talk in an Earth science class.',
            audio: '/audio/listening/test-2/m2e-talk1.mp3',
            image: '/img/listening/announcement/female-1.webp',
            speakerGender: 'female',
            transcript: 'Today let us talk about clouds. Clouds are made of tiny drops of water or pieces of ice. The water comes from oceans, lakes, and rivers. When the sun heats this water, some of it turns into water vapor and rises into the sky. As the water vapor rises, it cools down and turns back into tiny drops of water. These drops join together and form clouds. There are several types of clouds. Some are flat and gray. Others are tall and fluffy. The shape of a cloud can tell us about the weather. For example, dark clouds often mean that rain is coming soon.',
            questions: [
              {
                id: 'lt2-m2e-talk1-q1',
                stem: 'What is the talk mainly about?',
                options: [
                  { id: 'c', text: 'The history of weather forecasting in modern science.', correct: false },
                  { id: 'a', text: 'How clouds form and what their shapes tell us.', correct: true },
                  { id: 'd', text: 'Different types of weather found around the world.', correct: false },
                  { id: 'b', text: 'Why some places get much more rain than others.', correct: false }
                ],
                explanation: 'The talk explains how clouds form and what their shapes tell us.',
                points: 1
              },
              {
                id: 'lt2-m2e-talk1-q2',
                stem: 'According to the speaker, what often means rain is coming?',
                options: [
                  { id: 'a', text: 'Clear skies.', correct: false },
                  { id: 'd', text: 'A red sunset.', correct: false },
                  { id: 'b', text: 'Tall fluffy clouds.', correct: false },
                  { id: 'c', text: 'Dark clouds.', correct: true }
                ],
                explanation: 'The speaker says dark clouds often mean rain is coming soon.',
                points: 1
              },
              {
                id: 'lt2-m2e-talk1-q3',
                stem: 'Where does the water that becomes clouds come from?',
                options: [
                  { id: 'd', text: 'From snow on mountains only.', correct: false },
                  { id: 'b', text: 'From oceans, lakes, and rivers.', correct: true },
                  { id: 'c', text: 'From plants and forest trees.', correct: false },
                  { id: 'a', text: 'From other clouds and fog.', correct: false }
                ],
                explanation: 'The talk says the water comes from oceans, lakes, and rivers.',
                points: 1
              },
              {
                id: 'lt2-m2e-talk1-q4',
                stem: 'What happens to water vapor as it rises into the sky?',
                options: [
                  { id: 'c', text: 'It slowly disappears into outer space far above the earth\'s surface.', correct: false },
                  { id: 'b', text: 'It cools down and turns back into tiny drops of water.', correct: true },
                  { id: 'a', text: 'It evaporates and spreads out through the whole atmosphere.', correct: false },
                  { id: 'd', text: 'It becomes part of the ordinary air around it.', correct: false }
                ],
                explanation: 'The talk says as water vapor rises, it cools down and turns back into tiny drops of water.',
                points: 1
              }
            ]
          }
    ]
  },
};
