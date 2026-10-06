// TOEFL iBT 2026 Listening Practice — Test 9
// Module 1 (Router): 30 questions | Module 2: 17 questions | Total: 47
// Audio: pre-recorded MP3 files in /audio/listening/test-9/

window.LISTENING_SECTION_9 = {
  id: 'listening-test-9',
  title: 'Listening Practice Test 9',
  format: '2026',
  timeLimit: 1740,

  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      introAudio: 'audio/listening/test-9/m1-intro.mp3',

      chooseResponse: [
    {
      id: 'lt9-m1-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m1-cr01.mp3',
      image: '/img/listening/stock_modal/male-1.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you sign up for the orientation guide training?',
      options: [
        { id: 'd', text: 'Guides usually help newcomers find their way around.', correct: false },
        { id: 'a', text: 'Training usually prepares people for that kind of role.', correct: false },
        { id: 'b', text: 'I plan to. The deadline is this Friday.', correct: true },
        { id: 'c', text: 'Orientations tend to be routine every year.', correct: false }
      ],
      explanation: 'Soft yes with verification question.',
      points: 1
    },
    {
      id: 'lt9-m1-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m1-cr02.mp3',
      image: '/img/listening/stock_modal/female-2.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I haven\'t decided whether to live on campus or off campus next year.',
      options: [
        { id: 'a', text: 'Living choices vary quite a bit.', correct: false },
        { id: 'd', text: 'On campus is more convenient.', correct: true },
        { id: 'c', text: 'Campuses offer several different housing options.', correct: false },
        { id: 'b', text: 'Years usually bring a lot of changes.', correct: false }
      ],
      explanation: 'Balanced trade-off.',
      points: 1
    },
    {
      id: 'lt9-m1-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m1-cr03.mp3',
      image: '/img/listening/stock_modal/male-3.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did the professor say what topics will be on the quiz tomorrow?',
      options: [
        { id: 'c', text: 'Quizzes in that class vary from week to week.', correct: false },
        { id: 'b', text: 'Just the chapter we read this week and the lab notes.', correct: true },
        { id: 'a', text: 'Topics tend to narrow down as the term goes on.', correct: false },
        { id: 'd', text: 'Tomorrow is coming up and most students are skipping the discussion section.', correct: false }
      ],
      explanation: 'Specific scope.',
      points: 1
    },
    {
      id: 'lt9-m1-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m1-cr04.mp3',
      image: '/img/listening/stock_modal/female-4.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m planning to volunteer at the literacy center this summer.',
      options: [
        { id: 'b', text: 'Summers offer plenty of free time for projects.', correct: false },
        { id: 'c', text: 'Volunteering helps the community in all sorts of useful ways.', correct: false },
        { id: 'a', text: 'Literacy matters more than people tend to think.', correct: false },
        { id: 'd', text: 'That\'s wonderful. They really need bilingual volunteers right now.', correct: true }
      ],
      explanation: 'Encouragement with relevant detail.',
      points: 1
    },
    {
      id: 'lt9-m1-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m1-cr05.mp3',
      image: '/img/listening/stock_modal/male-5.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you going to the open studio for the new sculpture class?',
      options: [
        { id: 'c', text: 'Open events welcome anyone, though the studio ones tend to fill up fast these days.', correct: false },
        { id: 'a', text: 'Sculpture is one of the oldest art forms still taught on campus.', correct: false },
        { id: 'd', text: 'I plan to drop by Thursday. I want to see what they\'ve been making.', correct: true },
        { id: 'b', text: 'Studios are creative places, especially the older ones over in the arts building.', correct: false }
      ],
      explanation: 'Direct intent with reason.',
      points: 1
    },
    {
      id: 'lt9-m1-cr6',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m1-cr06.mp3',
      image: '/img/listening/stock_modal/female-6.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Have you used the new wifi network in the dining hall?',
      options: [
        { id: 'a', text: 'Wifi is pretty essential for most students now.', correct: false },
        { id: 'd', text: 'Yes, it\'s much faster than the old one.', correct: true },
        { id: 'b', text: 'Networks tend to improve every couple of years.', correct: false },
        { id: 'c', text: 'Halls mainly serve food, though the wifi draws students too.', correct: false }
      ],
      explanation: 'Direct positive comparison.',
      points: 1
    },
    {
      id: 'lt9-m1-cr7',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m1-cr07.mp3',
      image: '/img/listening/stock_modal/male-1.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m trying to figure out how to use the printing kiosk.',
      options: [
        { id: 'b', text: 'You tap your ID.', correct: true },
        { id: 'a', text: 'Printing is useful around campus.', correct: false },
        { id: 'c', text: 'Kiosks are usually pretty helpful.', correct: false },
        { id: 'd', text: 'Steps matter a great deal.', correct: false }
      ],
      explanation: 'Step-by-step instruction.',
      points: 1
    },
    {
      id: 'lt9-m1-cr8',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m1-cr08.mp3',
      image: '/img/listening/stock_modal/female-2.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Are you joining the international students potluck?',
      options: [
        { id: 'd', text: 'I\'m bringing pasta. What are you making?', correct: true },
        { id: 'c', text: 'Potlucks are fun when everyone brings something.', correct: false },
        { id: 'b', text: 'Food connects people from all over the world.', correct: false },
        { id: 'a', text: 'International students bring all kinds of different dishes.', correct: false }
      ],
      explanation: 'Direct contribution with reciprocal question.',
      points: 1
    },
    {
      id: 'lt9-m1-cr9',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m1-cr09.mp3',
      image: '/img/listening/stock_modal/male-3.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Have you found a study buddy for the chemistry course yet?',
      options: [
        { id: 'b', text: 'Courses vary quite a lot in how hard they are.', correct: false },
        { id: 'd', text: 'Chemistry challenges most students, and the lab portion is usually the hardest.', correct: false },
        { id: 'a', text: 'I asked the woman next to me in lab. She seemed willing.', correct: true },
        { id: 'c', text: 'Buddies help a lot more than most people would expect.', correct: false }
      ],
      explanation: 'Specific status.',
      points: 1
    },
    {
      id: 'lt9-m1-cr10',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m1-cr10.mp3',
      image: '/img/listening/stock_modal/female-4.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m not sure if I should drop the early class.',
      options: [
        { id: 'c', text: 'The professor allows late arrivals if you let her know in advance.', correct: true },
        { id: 'd', text: 'Mornings differ quite a bit from one person to another.', correct: false },
        { id: 'b', text: 'Early classes test your discipline, but most professors really do appreciate the effort.', correct: false },
        { id: 'a', text: 'Drops happen fairly often during the first couple of weeks.', correct: false }
      ],
      explanation: 'Useful information for decision.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt9-m1-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-9/m1-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Man: Have you decided where to go for summer break?\nWoman: I\'m planning to do an internship in another city.\nMan: That\'s great. Where are you going?\nWoman: A nonprofit in Seattle. Three months.\nMan: Have you found a place to live yet?\nWoman: They offer housing in a shared apartment with other interns.\nMan: Good. Is it paid?\nWoman: A small stipend. It covers food and a bus pass.\nMan: When do you start?\nWoman: The first Monday in June. I fly out that Saturday.\nMan: What will you be doing there?\nWoman: Mostly writing grant applications and helping with their tutoring program.',
      questions: [
        {
          id: 'lt9-m1-conv1-q1',
          stem: 'What are the woman\'s plans for summer?',
          options: [
        { id: 'c', text: 'Traveling around Europe with a friend.', correct: false },
        { id: 'a', text: 'Studying at home for a graduate exam.', correct: false },
        { id: 'd', text: 'Working a part-time job back at home.', correct: false },
        { id: 'b', text: 'Doing an internship in another city.', correct: true }
          ],
          explanation: 'Internship in another city.',
          points: 1
        },        {
          id: 'lt9-m1-conv1-q2',
          stem: 'What is the woman\'s housing situation?',
          options: [
        { id: 'd', text: 'She is staying with relatives in Seattle.', correct: false },
        { id: 'a', text: 'She is in shared intern housing.', correct: true },
        { id: 'c', text: 'She rented her own apartment.', correct: false },
        { id: 'b', text: 'She booked a hotel for three months.', correct: false }
          ],
          explanation: 'Shared apartment with other interns.',
          points: 1
        }
      ]
    },
    {
      id: 'lt9-m1-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-9/m1-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Woman: I just got back from the registrar\'s office.\nMan: How did your appointment go?\nWoman: They confirmed I\'m on track to graduate this spring.\nMan: That\'s great news. You must be relieved.\nWoman: I am. They also mentioned the early ceremony rehearsal next week.\nMan: Make sure to mark your calendar so you don\'t miss it.\nWoman: I already did. It\'s Thursday at four in the auditorium.\nMan: Did they check all your credits too?\nWoman: Every one, including the summer course I took.\nMan: So you\'re all set?\nWoman: Now I just have to turn in the graduation form by Friday.',
      questions: [
        {
          id: 'lt9-m1-conv2-q1',
          stem: 'What did the woman learn at the registrar\'s office?',
          options: [
        { id: 'c', text: 'Her financial aid was canceled for next term.', correct: false },
        { id: 'a', text: 'Her transcript was missing one of her required courses.', correct: false },
        { id: 'd', text: 'She needs to take more credits before she graduates.', correct: false },
        { id: 'b', text: 'She is on track to graduate this spring.', correct: true }
          ],
          explanation: 'On track to graduate this spring.',
          points: 1
        },        {
          id: 'lt9-m1-conv2-q2',
          stem: 'What does the man advise her to do?',
          options: [
        { id: 'a', text: 'Order her cap and gown right away.', correct: false },
        { id: 'c', text: 'Apply for graduate school before the deadline.', correct: false },
        { id: 'b', text: 'Mark her calendar for the rehearsal.', correct: true },
        { id: 'd', text: 'Tell her parents about the good news.', correct: false }
          ],
          explanation: 'Mark calendar for rehearsal.',
          points: 1
        }
      ]
    },
    {
      id: 'lt9-m1-conv3',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-9/m1-conv3.mp3',
      image: '/img/listening/two_people/people-3.webp',
      transcript: 'Man: Are you going to the history department\'s lecture series?\nWoman: I went last week. The talk on the Roman Empire was excellent. You should really come to one.\nMan: I missed that one. I was working. Are they recording the talks?\nWoman: Yes, they post them on the department site within a few days.\nMan: That\'s perfect. I\'ll watch it tonight after my shift.\nWoman: The next talk this week is about medieval trade routes. It\'s Thursday at four in Kimball Hall.\nMan: Do I need to sign up?\nWoman: No, just walk in. Seats fill fast, though, so get there ten minutes early.',
      questions: [
        {
          id: 'lt9-m1-conv3-q1',
          stem: 'What is the woman recommending?',
          options: [
        { id: 'a', text: 'A field trip to a museum.', correct: false },
        { id: 'd', text: 'The history department\'s lecture series.', correct: true },
        { id: 'c', text: 'A study group on Roman history.', correct: false },
        { id: 'b', text: 'A new history textbook.', correct: false }
          ],
          explanation: 'History department lecture series.',
          points: 1
        },        {
          id: 'lt9-m1-conv3-q2',
          stem: 'How can the man see the talk he missed?',
          options: [
        { id: 'd', text: 'He can attend a repeat showing next week.', correct: false },
        { id: 'a', text: 'It will be re-broadcast on the local TV station.', correct: false },
        { id: 'b', text: 'It will be posted on the department site.', correct: true },
        { id: 'c', text: 'He can borrow a recording from the library.', correct: false }
          ],
          explanation: 'Posted on department site.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt9-m1-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-9/m1-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good morning. The history department is hosting a film series this semester featuring documentaries about important historical events. Films will be shown every Tuesday at six p.m. in the history lecture hall, starting the second week of the semester. Each screening is followed by a brief discussion led by a faculty member, usually about thirty minutes. Free popcorn will be served. Seating is limited to eighty people, so arrive early. The list of titles is posted outside the department office and on the department website.',
      questions: [
        {
          id: 'lt9-m1-ann1-q1',
          stem: 'What is the film series about?',
          options: [
        { id: 'd', text: 'Documentaries on important historical events.', correct: true },
        { id: 'a', text: 'Films about modern political issues.', correct: false },
        { id: 'b', text: 'Independent films by student directors.', correct: false },
        { id: 'c', text: 'Movies about famous historians and writers.', correct: false }
          ],
          explanation: 'Historical documentaries.',
          points: 1
        },        {
          id: 'lt9-m1-ann1-q2',
          stem: 'What follows each screening?',
          options: [
        { id: 'c', text: 'A faculty-led discussion.', correct: true },
        { id: 'b', text: 'A guest speaker presentation.', correct: false },
        { id: 'd', text: 'Free dinner for attendees.', correct: false },
        { id: 'a', text: 'A vote on the next film.', correct: false }
          ],
          explanation: 'Faculty-led discussion.',
          points: 1
        }
      ]
    },
    {
      id: 'lt9-m1-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-9/m1-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Attention history majors. The department will hold an open house for prospective majors this Thursday at three p.m. in Room 210 of Hartley Hall. Faculty members will discuss courses, research opportunities, and post-graduation paths. Three seniors will also talk about their thesis projects. Snacks will be served. This is a great chance to ask questions if you\'re considering the major. No registration is needed. If you cannot make it on Thursday, email the department advisor and she will set up a separate meeting.',
      questions: [
        {
          id: 'lt9-m1-ann2-q1',
          stem: 'Who is the open house for?',
          options: [
        { id: 'b', text: 'Graduate students.', correct: false },
        { id: 'd', text: 'Current history majors only.', correct: false },
        { id: 'c', text: 'Prospective history majors.', correct: true },
        { id: 'a', text: 'High school visitors.', correct: false }
          ],
          explanation: 'Prospective majors.',
          points: 1
        },        {
          id: 'lt9-m1-ann2-q2',
          stem: 'What will faculty discuss?',
          options: [
        { id: 'a', text: 'Courses, research.', correct: true },
        { id: 'c', text: 'Just course requirements.', correct: false },
        { id: 'd', text: 'Faculty research projects only.', correct: false },
        { id: 'b', text: 'Tuition costs and aid.', correct: false }
          ],
          explanation: 'Courses, research, post-grad paths.',
          points: 1
        }
      ]
    },
    {
      id: 'lt9-m1-ann3',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-9/m1-ann3.mp3',
      image: '/img/listening/announcement/female-3.webp',
      speakerGender: 'female',
      transcript: 'Good afternoon. The campus library is launching a new digital archive of historical documents. The archive includes letters, photographs, and rare books from the university\'s history, some dating back to the 1870s. Access is free for students and faculty through the library website, using your campus username. Training sessions begin next week and run every Wednesday at noon in the second floor computer lab. If a document you need has not been scanned yet, ask a reference librarian to request it.',
      questions: [
        {
          id: 'lt9-m1-ann3-q1',
          stem: 'What is being launched?',
          options: [
        { id: 'b', text: 'An online textbook rental service.', correct: false },
        { id: 'a', text: 'A new physical wing of the library.', correct: false },
        { id: 'c', text: 'A book donation program for students.', correct: false },
        { id: 'd', text: 'A digital archive of historical documents.', correct: true }
          ],
          explanation: 'Digital archive of historical docs.',
          points: 1
        },        {
          id: 'lt9-m1-ann3-q2',
          stem: 'What does the archive contain?',
          options: [
        { id: 'a', text: 'Modern student newspapers and magazines.', correct: false },
        { id: 'd', text: 'Mostly digital audio and video recordings.', correct: false },
        { id: 'b', text: 'Letters, photos, and rare books.', correct: true },
        { id: 'c', text: 'Just recent academic journal articles.', correct: false }
          ],
          explanation: 'Letters, photos, rare books.',
          points: 1
        }
      ]
    },
      ],

      academicTalks: [
    {
      id: 'lt9-m1-talk1',
      title: 'Listen to a talk in a history class.',
      audio: '/audio/listening/test-9/m1-talk1.mp3',
      image: '/img/listening/announcement/male-1.webp',
      speakerGender: 'male',
      transcript: 'Today we\'ll examine the Silk Road, the network of trade routes that connected China with the Mediterranean world for nearly two thousand years. I\'ll cover what moved along it, why it peaked, and why it faded. Start with the name, which misleads in two ways. First, the Silk Road was never a single road. It was a shifting web of overland and sea routes crossing deserts, mountains, and oceans. Second, the term is modern: a German geographer coined it in the 1870s. Very few merchants covered the whole distance. Goods passed hand to hand, so a bolt of silk might change owners a dozen times before reaching Rome. Silk was the most famous Chinese export, but caravans also carried tea, spices, ceramics, paper, and gunpowder. In return, China received gold, silver, glassware, horses, and goods from Central Asia, Persia, and beyond. Just as importantly, the Silk Road moved ideas. Buddhism spread from India into China along these routes. Mathematical and astronomical knowledge crossed in both directions. Even diseases, including the plague, sometimes traveled with the caravans. The Silk Road flourished most strongly under the Tang Dynasty, when relative political stability across Eurasia made long-distance trade safer and more profitable. Silk weaving was already ancient by then; what the Tang added was security. It declined as sea routes grew more efficient in the late Middle Ages and European powers began trading directly with East Asia by ship. Next time, we\'ll focus on specific cities along the Silk Road, including Samarkand and Dunhuang, and the cultural mixing there.',
      questions: [
        {
          id: 'lt9-m1-talk1-q1',
          stem: 'What is the main idea of the talk?',
          options: [
        { id: 'd', text: 'The technology used to produce silk in the workshops of ancient China.', correct: false },
        { id: 'a', text: 'How European powers colonized large parts of Asia by sea.', correct: false },
        { id: 'b', text: 'A single famous battle fought in the early history of China.', correct: false },
        { id: 'c', text: 'The Silk Road and its role in long-distance trade and exchange.', correct: true }
          ],
          explanation: 'The lecture is about the Silk Road.',
          points: 1
        },        {
          id: 'lt9-m1-talk1-q2',
          stem: 'Besides goods, what else moved along the Silk Road?',
          options: [
        { id: 'b', text: 'Only military technology and new kinds of weapons.', correct: false },
        { id: 'd', text: 'Government officials traveling on official diplomatic missions.', correct: false },
        { id: 'a', text: 'Religion, scientific knowledge, and even diseases.', correct: true },
        { id: 'c', text: 'Mostly the personal letters of traveling merchants.', correct: false }
          ],
          explanation: 'Buddhism, math, astronomy, and diseases all moved along the route.',
          points: 1
        },        {
          id: 'lt9-m1-talk1-q3',
          stem: 'Why does the speaker mention the Tang Dynasty?',
          options: [
        { id: 'b', text: 'It was the period when the Silk Road flourished most strongly.', correct: true },
        { id: 'a', text: 'It was the dynasty that first invented the art of silk weaving.', correct: false },
        { id: 'd', text: 'It produced the first written records of trade on the route.', correct: false },
        { id: 'c', text: 'It built the longest single road anywhere in the network.', correct: false }
          ],
          explanation: 'The Silk Road peaked under the Tang due to political stability.',
          points: 1
        },        {
          id: 'lt9-m1-talk1-q4',
          stem: 'What will the speaker most likely discuss next?',
          options: [
        { id: 'c', text: 'The decline of the Roman Empire during the course of the third century.', correct: false },
        { id: 'd', text: 'Specific cities along the Silk Road and the cultures that mixed there.', correct: true },
        { id: 'a', text: 'The development of paper money in the towns of medieval Europe.', correct: false },
        { id: 'b', text: 'Maritime exploration by European fleets during the early sixteenth century.', correct: false }
          ],
          explanation: 'He previews Samarkand and Dunhuang as examples.',
          points: 1
        }
      ]
    },
        {
          id: 'lt9-m1-talk2',
          title: 'Listen to a talk in a physics class.',
          audio: '/audio/listening/test-9/m1-talk2.mp3',
          image: '/img/listening/announcement/male-1.webp',
          speakerGender: 'male',
          transcript: 'Let\'s look at how rainbows form, because the explanation is nice basic optics, and it clears up a few things people find puzzling. A rainbow is a band of colors that appears in the sky, usually after rain. To see one, you need two things at the same time: sunlight, and water drops in the air. If either is missing, there\'s no rainbow. Now, what happens inside a single drop? When sunlight enters a water drop, it bends slightly. Physicists call that bending refraction. The light then reflects off the inside of the back of the drop and bends again on the way out. Here\'s the crucial part. Sunlight is actually made of many colors mixed together. Isaac Newton showed this in the 1660s by passing a beam of sunlight through a glass prism and spreading it into a band of colors. As the light passes through the water drop, the different colors bend by different amounts and separate. When that light leaves the drop, we see the colors as a rainbow. A rainbow always shows the colors in the same order: red, orange, yellow, green, blue, indigo, and violet. This is because each color always bends by the same amount. The physics doesn\'t vary. That fixed geometry has one odd consequence. The light reaches your eye at a set angle, so the rainbow\'s position depends on where you\'re standing. Two people side by side are seeing light from different drops. You can never walk up to a rainbow, and you can never reach its end.',
          questions: [
          {
            id: 'lt9-m1-talk2-q1',
            stem: 'What two things are needed to see a rainbow?',
            options: [
                  { id: 'd', text: 'Strong wind and cold weather at night.', correct: false },
                  { id: 'c', text: 'A camera and good light in the sky.', correct: false },
                  { id: 'a', text: 'A clear sky and warm dry air.', correct: false },
                  { id: 'b', text: 'Sunlight and water drops in the air.', correct: true }
            ],
            explanation: 'The speaker says you need sunlight and water drops in the air at the same time.',
            points: 1
          },
          {
            id: 'lt9-m1-talk2-q2',
            stem: 'Why do we see the colors in a rainbow as separate bands?',
            options: [
                  { id: 'b', text: 'Because the sun changes color as it moves slowly across the sky.', correct: false },
                  { id: 'd', text: 'Because rainbows reflect off the surface of the clouds behind them.', correct: false },
                  { id: 'c', text: 'Because the air is full of dust and other very tiny particles.', correct: false },
                  { id: 'a', text: 'Because each color bends by a different amount in the water drop.', correct: true }
            ],
            explanation: 'The talk says different colors bend by different amounts when passing through the water drop.',
            points: 1
          },
              {
                id: 'lt9-m1-talk2-q3',
                stem: 'What is sunlight actually made of, according to the speaker?',
                options: [
                  { id: 'a', text: 'A single pure color of light.', correct: false },
                  { id: 'c', text: 'Only heat and nothing else.', correct: false },
                  { id: 'd', text: 'Tiny drops of water in the air.', correct: false },
                  { id: 'b', text: 'Many different colors mixed together.', correct: true }
                ],
                explanation: 'The speaker says sunlight is actually made of many colors mixed together.',
                points: 1
              },
                            {
                id: 'lt9-m1-talk2-q4',
                stem: 'What does the speaker suggest about where a rainbow appears?',
                options: [
                  { id: 'a', text: 'It forms wherever the water drops are thickest.', correct: false },
                  { id: 'b', text: 'It appears directly above the falling rain.', correct: false },
                  { id: 'c', text: 'Each viewer sees it in a different place.', correct: true },
                  { id: 'd', text: 'It shows up only while the sun is setting.', correct: false }
                ],
                explanation: 'The light arrives at the eye at a set angle, so the spot where the rainbow seems to hang changes with where each person stands.',
                points: 1
              }
          ]
        }
      ]
    },

    {
      id: 'module-2',
      title: 'Module 2',
      introAudio: 'audio/listening/test-9/m2-intro.mp3',

      chooseResponse: [
    {
      id: 'lt9-m2-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m2-cr01.mp3',
      image: '/img/listening/stock_modal/male-1.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I haven\'t been able to find the lecture hall building.',
      options: [
        { id: 'd', text: 'Buildings have features that make them recognizable, like a clock tower or a small courtyard.', correct: false },
        { id: 'a', text: 'Locations vary a lot depending on which part of campus you mean.', correct: false },
        { id: 'c', text: 'Halls like that one are pretty common on a campus this size.', correct: false },
        { id: 'b', text: 'It\'s the brick one across from the library. Look for the big oak tree.', correct: true }
      ],
      explanation: 'Specific location with landmark.',
      points: 1
    },
    {
      id: 'lt9-m2-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m2-cr02.mp3',
      image: '/img/listening/stock_modal/female-2.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you receive the new academic calendar?',
      options: [
        { id: 'c', text: 'Receiving the calendar is normal at this time of year.', correct: false },
        { id: 'd', text: 'Calendars organize the whole year for everyone on campus.', correct: false },
        { id: 'b', text: 'Yes, the dates for the holidays got moved by a week.', correct: true },
        { id: 'a', text: 'Academic years follow patterns, and most of the major dates stay consistent.', correct: false }
      ],
      explanation: 'Specific helpful detail.',
      points: 1
    },
    {
      id: 'lt9-m2-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m2-cr03.mp3',
      image: '/img/listening/stock_modal/male-3.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you joining the cooking workshop on Saturday?',
      options: [
        { id: 'c', text: 'Cooking is useful, and the workshops teach techniques you actually use at home.', correct: false },
        { id: 'd', text: 'I want to. Is there still room or has it filled up?', correct: true },
        { id: 'b', text: 'Workshops teach you a lot more than a cookbook ever could.', correct: false },
        { id: 'a', text: 'Saturdays are usually open for most people around here.', correct: false }
      ],
      explanation: 'Soft yes with verification.',
      points: 1
    },
    {
      id: 'lt9-m2-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m2-cr04.mp3',
      image: '/img/listening/stock_modal/female-4.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m trying to decide what classes to take next semester.',
      options: [
        { id: 'c', text: 'Have you checked the recommended pathway for your major?', correct: true },
        { id: 'a', text: 'Classes form your education path, so the timing of them matters.', correct: false },
        { id: 'd', text: 'Decisions like that matter more than people realize.', correct: false },
        { id: 'b', text: 'Semesters always approach faster than anyone expects them to.', correct: false }
      ],
      explanation: 'Helpful question.',
      points: 1
    },
    {
      id: 'lt9-m2-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-9/m2-cr05.mp3',
      image: '/img/listening/stock_modal/male-5.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Have you noticed how crowded the gym has been recently?',
      options: [
        { id: 'd', text: 'Recent changes come in batches, and the gym just got new equipment.', correct: false },
        { id: 'b', text: 'I started going at six AM. It\'s nearly empty then.', correct: true },
        { id: 'a', text: 'Gyms get busy at certain points in the term.', correct: false },
        { id: 'c', text: 'Crowds vary a great deal from one place to another.', correct: false }
      ],
      explanation: 'Practical workaround.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt9-m2-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-9/m2-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Woman: I noticed they painted the murals in the student center.\nMan: I saw them yesterday. The art club did an amazing job.\nWoman: Did students get to vote on the designs?\nMan: Yes, there was an online survey last month. About nine hundred people voted.\nWoman: I missed the survey. Were the designs all student-made?\nMan: They were. The art club ran a competition for the winning designs.\nWoman: How long did the painting itself take?\nMan: Three weekends, I think. A few club members did almost all of it themselves.\nWoman: I\'ll go look at the one by the stairs this afternoon.',
      questions: [
        {
          id: 'lt9-m2-conv1-q1',
          stem: 'What change has occurred in the student center?',
          options: [
        { id: 'd', text: 'Murals were painted on the walls.', correct: true },
        { id: 'c', text: 'The furniture was rearranged in the lounge.', correct: false },
        { id: 'a', text: 'The opening hours were extended on weekends.', correct: false },
        { id: 'b', text: 'A new dining option opened downstairs.', correct: false }
          ],
          explanation: 'Murals painted.',
          points: 1
        },        {
          id: 'lt9-m2-conv1-q2',
          stem: 'How were the mural designs chosen?',
          options: [
        { id: 'd', text: 'Through an art club competition with student voting.', correct: true },
        { id: 'b', text: 'By the campus maintenance department on its own.', correct: false },
        { id: 'c', text: 'By the campus administration without any input from students.', correct: false },
        { id: 'a', text: 'By a local professional artist hired for the job.', correct: false }
          ],
          explanation: 'Art club competition with student voting.',
          points: 1
        }
      ]
    },
    {
      id: 'lt9-m2-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-9/m2-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Man: Are you joining the campus history club?\nWoman: I\'ve been thinking about it. What kind of activities do they do?\nMan: Field trips to historical sites, mostly. Last fall they went to a Civil War battlefield.\nWoman: That sounds fun. Are the trips expensive?\nMan: They\'re subsidized for members. Just a small membership fee per semester, twenty dollars, and that covers the bus.\nWoman: Twenty for the semester? That\'s nothing.\nMan: Right. You only pay for lunch on the longer trips.\nWoman: That works for me. I\'ll sign up at the next meeting.\nMan: It\'s Wednesday at seven in the Student Union.',
      questions: [
        {
          id: 'lt9-m2-conv2-q1',
          stem: 'What does the history club mainly do?',
          options: [
        { id: 'b', text: 'Take field trips to historical sites.', correct: true },
        { id: 'c', text: 'Publish a quarterly newsletter about local history.', correct: false },
        { id: 'a', text: 'Watch history documentaries together on weeknights.', correct: false },
        { id: 'd', text: 'Hold weekly debates on famous historical topics.', correct: false }
          ],
          explanation: 'Field trips to historical sites.',
          points: 1
        },        {
          id: 'lt9-m2-conv2-q2',
          stem: 'How are the trips funded?',
          options: [
        { id: 'c', text: 'The university pays for everything the club does.', correct: false },
        { id: 'b', text: 'Members pay the full price for each trip.', correct: false },
        { id: 'd', text: 'The trips are sponsored entirely by local businesses downtown.', correct: false },
        { id: 'a', text: 'They are subsidized through a small semester fee.', correct: true }
          ],
          explanation: 'Subsidized through small fee.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt9-m2-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-9/m2-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good morning. The university archives are accepting donations of historical materials this semester. Old photographs, letters, and yearbooks related to campus life are especially welcome. Items from the 1940s through the 1970s fill the biggest gaps. Donors may keep originals if preferred; the archives will scan them and return them, usually within two weeks. Contact the archives office for details. The office is in the basement of Foster Library, open weekdays from ten to four. Please do not leave materials at the front desk unattended.',
      questions: [
        {
          id: 'lt9-m2-ann1-q1',
          stem: 'What is being collected?',
          options: [
        { id: 'a', text: 'Old textbooks from past courses.', correct: false },
        { id: 'd', text: 'Used computer equipment from campus offices.', correct: false },
        { id: 'b', text: 'Historical materials related to campus.', correct: true },
        { id: 'c', text: 'Books for a campus charity drive.', correct: false }
          ],
          explanation: 'Historical materials.',
          points: 1
        },        {
          id: 'lt9-m2-ann1-q2',
          stem: 'What option is offered to donors?',
          options: [
        { id: 'a', text: 'Tax deductions for the value of any donation.', correct: false },
        { id: 'c', text: 'Their originals can be returned after scanning.', correct: true },
        { id: 'b', text: 'A small honorarium for each item donated.', correct: false },
        { id: 'd', text: 'A free copy of any future library publications.', correct: false }
          ],
          explanation: 'Originals returned after scanning.',
          points: 1
        }
      ]
    },
    {
      id: 'lt9-m2-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-9/m2-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Attention students. The campus museum will host a special exhibit on local history this April. The exhibit features artifacts from the founding of the university, including the original charter and the tools used to build the first classroom hall. Admission is free with student ID, and six dollars for everyone else. Guided tours run on weekends, at eleven in the morning and two in the afternoon. Educational materials are available for class use, and instructors can request a classroom set from the museum office.',
      questions: [
        {
          id: 'lt9-m2-ann2-q1',
          stem: 'What is the exhibit about?',
          options: [
        { id: 'a', text: 'Modern art by local painters.', correct: false },
        { id: 'c', text: 'The founding of the university.', correct: true },
        { id: 'd', text: 'Famous alumni from recent decades.', correct: false },
        { id: 'b', text: 'Cultural heritage from around the world.', correct: false }
          ],
          explanation: 'University founding.',
          points: 1
        },        {
          id: 'lt9-m2-ann2-q2',
          stem: 'When are guided tours offered?',
          options: [
        { id: 'c', text: 'Every weekday.', correct: false },
        { id: 'a', text: 'On weekends.', correct: true },
        { id: 'b', text: 'By appointment only.', correct: false },
        { id: 'd', text: 'Tuesday evenings only.', correct: false }
          ],
          explanation: 'On weekends.',
          points: 1
        }
      ]
    }
      ],

      academicTalks: [
        {
          id: 'lt9-m2-talk1',
          title: 'Listen to a talk in a history class.',
          audio: '/audio/listening/test-9/m2-talk1.mp3',
          image: '/img/listening/announcement/female-3.webp',
          speakerGender: 'female',
          transcript: 'Medieval guilds were associations of artisans and merchants who organized themselves to control the practice of a particular craft within a town. I\'ll cover what they controlled, how you joined one, and why they disappeared. Start with control. A weavers\' guild, for instance, would set the standards for cloth quality, regulate prices, and decide who was permitted to operate a loom in the town. That last power mattered most. If you weren\'t a member, you simply couldn\'t work at the craft there. Guilds also did something we\'d now call insurance. They paid for members\' funerals and supported the widows and children of members who died. Now, membership, which came in stages. A young person would first serve as an apprentice, working for several years under a master in exchange for training, food, and lodging. After completing the apprenticeship, the worker became a journeyman, paid for daily labor but not yet permitted to open a workshop. Some journeymen traveled between towns for experience. Eventually, after producing a "masterpiece" judged worthy by the existing masters, a journeyman could become a master and open a shop of his own. Historians disagree about the effect. The system trained skilled workers thoroughly and protected buyers from shoddy goods. It also limited competition and kept outsiders out, which some argue slowed innovation. Guilds shaped urban economies for centuries before the rise of factory production gradually replaced them. Once goods could be made cheaply at scale outside the town workshop, a guild\'s control over one craft in one town meant very little.',
          questions: [
            {
              id: 'lt9-m2-talk1-q1',
              stem: 'According to the speaker, what was a "masterpiece" in the context of medieval guilds?',
              options: [
                { id: 'c', text: 'A formal essay written by an apprentice at the end of his long years with a master', correct: false },
                { id: 'd', text: 'A signed contract between a master and an apprentice setting out the terms of the training', correct: false },
                { id: 'a', text: 'A famous artwork displayed in the guild hall that visitors to the town came to admire', correct: false },
                { id: 'b', text: 'A piece of work judged by existing masters that allowed a journeyman to become a master himself', correct: true }
              ],
              explanation: 'The speaker defines a masterpiece as a piece of work judged worthy by masters that allowed a journeyman to become a master.',
              points: 1
            },
            {
              id: 'lt9-m2-talk1-q2',
              stem: 'What eventually led to the decline of guilds?',
              options: [
                { id: 'b', text: 'Conflicts between apprentices and masters', correct: false },
                { id: 'c', text: 'The rise of factory production', correct: true },
                { id: 'd', text: 'A dramatic decrease in urban populations', correct: false },
                { id: 'a', text: 'New laws that banned them across Europe', correct: false }
              ],
              explanation: 'The speaker says guilds shaped urban economies for centuries before factory production gradually replaced them.',
              points: 1
            },
                            {
                id: 'lt9-m2-talk1-q3',
                stem: 'Why does the speaker mention funerals and widows?',
                options: [
                  { id: 'a', text: 'To explain why apprentices received food and lodging.', correct: false },
                  { id: 'd', text: 'To explain how masters judged a journeyman\'s work.', correct: false },
                  { id: 'c', text: 'To show guilds also supported members\' families.', correct: true },
                  { id: 'b', text: 'To show that guild membership fees were unusually high.', correct: false }
                ],
                explanation: 'The speaker brings up funerals and widows to make the point that guilds looked after the families of their members, not just the standards of the craft.',
                points: 1
              },
                            {
                id: 'lt9-m2-talk1-q4',
                stem: 'What is the speaker\'s attitude toward the guild system?',
                options: [
                  { id: 'a', text: 'Guilds were an ideal arrangement for medieval towns.', correct: false },
                  { id: 'd', text: 'Guilds are worth remembering chiefly for their insurance.', correct: false },
                  { id: 'b', text: 'Guilds brought both real benefits and real drawbacks.', correct: true },
                  { id: 'c', text: 'Guilds mattered little to the economies of towns.', correct: false }
                ],
                explanation: 'The speaker credits the guild system with training workers thoroughly and protecting buyers, then in the same breath notes that it limited competition and shut outsiders out, so the verdict lands on both sides.',
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
    introAudio: '/audio/listening/test-9/m2-intro.mp3',
    chooseResponse: [
          {
            id: 'lt9-m2e-cr1',
            type: 'choose_response',
            audio: '/audio/listening/test-9/m2e-cr01.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'How was your interview yesterday?',
            options: [
              { id: 'b', text: 'It went very well, thanks.', correct: true },
              { id: 'a', text: 'Interviews can be really hard sometimes.', correct: false },
              { id: 'c', text: 'I have another one tomorrow morning.', correct: false },
              { id: 'd', text: 'Most companies look for real experience.', correct: false }
            ],
            explanation: 'The speaker is asking about a past event.',
            points: 1
          },
          {
            id: 'lt9-m2e-cr2',
            type: 'choose_response',
            audio: '/audio/listening/test-9/m2e-cr02.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Could you turn off the lights when you leave?',
            options: [
              { id: 'b', text: 'Lights use electricity.', correct: false },
              { id: 'd', text: 'The switch is broken.', correct: false },
              { id: 'a', text: 'Sure, no problem.', correct: true },
              { id: 'c', text: 'I love the dark.', correct: false }
            ],
            explanation: 'The speaker is making a request.',
            points: 1
          },
          {
            id: 'lt9-m2e-cr3',
            type: 'choose_response',
            audio: '/audio/listening/test-9/m2e-cr03.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Are you going to the conference?',
            options: [
              { id: 'd', text: 'Hotels can be pretty costly there.', correct: false },
              { id: 'c', text: 'I attend a lot of events.', correct: false },
              { id: 'b', text: 'Yes, I registered last week.', correct: true },
              { id: 'a', text: 'Conferences are important for making contacts.', correct: false }
            ],
            explanation: 'The speaker is asking about attendance.',
            points: 1
          },
          {
            id: 'lt9-m2e-cr4',
            type: 'choose_response',
            audio: '/audio/listening/test-9/m2e-cr04.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Did you remember to lock the door?',
            options: [
              { id: 'a', text: 'Doors should be locked.', correct: false },
              { id: 'b', text: 'Yes, I checked twice.', correct: true },
              { id: 'c', text: 'Locks can be tricky.', correct: false },
              { id: 'd', text: 'I lost my key once.', correct: false }
            ],
            explanation: 'The speaker is asking if the door was locked.',
            points: 1
          },
          {
            id: 'lt9-m2e-cr5',
            type: 'choose_response',
            audio: '/audio/listening/test-9/m2e-cr05.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Would you like a cup of coffee?',
            options: [
              { id: 'c', text: 'I drank some coffee earlier.', correct: false },
              { id: 'd', text: 'Cafes are everywhere around here.', correct: false },
              { id: 'a', text: 'Coffee is popular with students.', correct: false },
              { id: 'b', text: 'Yes, please, with cream.', correct: true }
            ],
            explanation: 'The speaker is offering coffee, so the correct response accepts and adds detail.',
            points: 1
          },
    ],
    conversations: [
          {
            id: 'lt9-m2e-conv1',
            title: 'Listen to a conversation.',
            audio: '/audio/listening/test-9/m2e-conv1.mp3',
            image: '/img/listening/two_people/people-1.webp',
            transcript: 'Man: Hi Lisa, did you sign up for the cooking class?\nWoman: Yes, the first class is this Friday.\nMan: I am thinking about joining too. Is there still space?\nWoman: I think so. The class is small, only ten students.\nMan: What time does it meet?\nWoman: Friday evenings from six to eight.\nMan: That works for me. Where do I sign up?\nWoman: Just go to the community center, room 201.',
            questions: [
              {
                id: 'lt9-m2e-conv1-q1',
                stem: 'What is the woman doing?',
                options: [
                  { id: 'b', text: 'Taking a cooking class.', correct: true },
                  { id: 'd', text: 'Studying nutrition at the college.', correct: false },
                  { id: 'c', text: 'Working at a local restaurant.', correct: false },
                  { id: 'a', text: 'Hosting a dinner for friends.', correct: false }
                ],
                explanation: 'The woman is taking a cooking class.',
                points: 1
              },
              {
                id: 'lt9-m2e-conv1-q2',
                stem: 'When does the class meet?',
                options: [
                  { id: 'b', text: 'Friday evenings from six to eight.', correct: true },
                  { id: 'c', text: 'Saturday mornings from nine to eleven.', correct: false },
                  { id: 'd', text: 'Sunday evenings from five to seven.', correct: false },
                  { id: 'a', text: 'Friday afternoons from two to four.', correct: false }
                ],
                explanation: 'The class meets Friday evenings from six to eight.',
                points: 1
              }
            ]
          },
        {
          id: 'lt9-m2e-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-9/m2e-conv2.mp3',
          image: '/img/listening/two_people/people-1.webp',
          transcript: 'Woman: Hi Alex, did you watch the soccer game last night?\nMan: Yes, but I fell asleep before the end.\nWoman: Did our team win?\nMan: I am not sure. I checked the news this morning but missed it.\nWoman: They won three to two. It went into extra time.\nMan: Wow, sounds exciting. I will watch the highlights later.',
          questions: [
          {
            id: 'lt9-m2e-conv2-q1',
            stem: 'Why didn\'t the man see the end of the game?',
            options: [
                  { id: 'c', text: 'His TV stopped working during the game.', correct: false },
                  { id: 'b', text: 'He fell asleep before it ended.', correct: true },
                  { id: 'd', text: 'He had to leave early for work.', correct: false },
                  { id: 'a', text: 'He was studying for an exam.', correct: false }
            ],
            explanation: 'The man says he fell asleep before the end.',
            points: 1
          },
          {
            id: 'lt9-m2e-conv2-q2',
            stem: 'What was the final score?',
            options: [
                  { id: 'a', text: 'Two to one.', correct: false },
                  { id: 'c', text: 'Three to three.', correct: false },
                  { id: 'd', text: 'One to zero.', correct: false },
                  { id: 'b', text: 'Three to two.', correct: true }
            ],
            explanation: 'The woman says the team won three to two.',
            points: 1
          }
          ]
        }
    ],
    announcements: [
          {
            id: 'lt9-m2e-ann1',
            title: 'Listen to an announcement at a university.',
            audio: '/audio/listening/test-9/m2e-ann1.mp3',
            image: '/img/listening/announcement/female-1.webp',
            speakerGender: 'female',
            transcript: 'Hello everyone. The Student Activities Office is organizing a beach cleanup this Saturday. Volunteers will help collect trash and recyclables on the local beach. We will leave the campus at eight a.m. and return by noon. The university will provide buses, gloves, and trash bags. Please wear comfortable clothes and shoes you do not mind getting sandy. Light snacks will be provided. To sign up, please visit the Student Activities Office by Thursday.',
            questions: [
              {
                id: 'lt9-m2e-ann1-q1',
                stem: 'What is the announcement about?',
                options: [
                  { id: 'c', text: 'A beach volleyball game.', correct: false },
                  { id: 'a', text: 'A beach cleanup event.', correct: true },
                  { id: 'b', text: 'A beach safety class.', correct: false },
                  { id: 'd', text: 'A new bus route to the beach.', correct: false }
                ],
                explanation: 'The announcement is about a beach cleanup.',
                points: 1
              },
              {
                id: 'lt9-m2e-ann1-q2',
                stem: 'What time will the buses leave campus?',
                options: [
                  { id: 'd', text: 'Ten a.m.', correct: false },
                  { id: 'c', text: 'Nine a.m.', correct: false },
                  { id: 'a', text: 'Seven a.m.', correct: false },
                  { id: 'b', text: 'Eight a.m.', correct: true }
                ],
                explanation: 'They will leave campus at eight a.m.',
                points: 1
              }
            ]
          },
        {
          id: 'lt9-m2e-ann2',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-9/m2e-ann2.mp3',
          image: '/img/listening/announcement/female-1.webp',
          speakerGender: 'female',
          transcript: 'Attention students. The campus shuttle to the airport will run on a special schedule during the holiday break, departing every two hours from seven a.m. to seven p.m. Please reserve your seat in advance through the transportation website. Each ride costs five dollars, payable in cash to the driver. Reservations are first-come, first-served.',
          questions: [
          {
            id: 'lt9-m2e-ann2-q1',
            stem: 'How often does the airport shuttle run during the holiday break?',
            options: [
                  { id: 'b', text: 'Every two hours.', correct: true },
                  { id: 'd', text: 'Twice a day only.', correct: false },
                  { id: 'a', text: 'Every hour.', correct: false },
                  { id: 'c', text: 'Every four hours.', correct: false }
            ],
            explanation: 'The announcement says the shuttle departs every two hours.',
            points: 1
          },
          {
            id: 'lt9-m2e-ann2-q2',
            stem: 'How much does each ride cost?',
            options: [
                  { id: 'b', text: 'Two dollars.', correct: false },
                  { id: 'd', text: 'Ten dollars.', correct: false },
                  { id: 'c', text: 'Five dollars.', correct: true },
                  { id: 'a', text: 'Free for students.', correct: false }
            ],
            explanation: 'The announcement says each ride costs five dollars, payable in cash to the driver.',
            points: 1
          }
          ]
        }
    ],
    academicTalks: [
          {
            id: 'lt9-m2e-talk1',
            title: 'Listen to a talk in a health class.',
            audio: '/audio/listening/test-9/m2e-talk1.mp3',
            image: '/img/listening/announcement/male-1.webp',
            speakerGender: 'male',
            transcript: 'Today we will talk about the importance of breakfast. Many people skip breakfast because they think it will help them lose weight. However, studies show that eating breakfast is important for your health. A good breakfast gives you energy for the day. It also helps your brain work better. Students who eat breakfast tend to do better in school. A healthy breakfast does not have to be big. A piece of fruit, a glass of milk, and some whole grain toast can be a great start. Try to avoid sugary cereals and pastries, which give you energy quickly but make you tired soon after.',
            questions: [
              {
                id: 'lt9-m2e-talk1-q1',
                stem: 'What is the main idea of the talk?',
                options: [
                  { id: 'b', text: 'Skipping breakfast helps most people lose weight.', correct: false },
                  { id: 'd', text: 'Most people eat far too much breakfast.', correct: false },
                  { id: 'c', text: 'Sugary cereals are the best food for breakfast.', correct: false },
                  { id: 'a', text: 'Eating breakfast is important for your health.', correct: true }
                ],
                explanation: 'The talk explains why breakfast is important for health.',
                points: 1
              },
              {
                id: 'lt9-m2e-talk1-q2',
                stem: 'What does the speaker recommend for breakfast?',
                options: [
                  { id: 'b', text: 'Fruit, milk, and whole grain toast.', correct: true },
                  { id: 'a', text: 'A large meal with eggs, bacon, and potatoes.', correct: false },
                  { id: 'd', text: 'Black coffee and a couple of pastries.', correct: false },
                  { id: 'c', text: 'Sugary cereals and a glass of juice.', correct: false }
                ],
                explanation: 'The speaker recommends a piece of fruit, a glass of milk, and whole grain toast.',
                points: 1
              },
              {
                id: 'lt9-m2e-talk1-q3',
                stem: 'What kind of breakfast does the speaker recommend?',
                options: [
                  { id: 'b', text: 'Sugary cereal and pastries from a nearby bakery.', correct: false },
                  { id: 'd', text: 'A large hot meal of bacon, eggs, and potatoes.', correct: false },
                  { id: 'c', text: 'Just a large cup of black coffee and nothing else.', correct: false },
                  { id: 'a', text: 'A piece of fruit, milk, and whole grain toast.', correct: true }
                ],
                explanation: 'The speaker says a healthy breakfast can be a piece of fruit, milk, and whole grain toast.',
                points: 1
              },
              {
                id: 'lt9-m2e-talk1-q4',
                stem: 'What benefit of breakfast does the speaker mention for students?',
                options: [
                  { id: 'a', text: 'They are taller than the students who skip it.', correct: false },
                  { id: 'c', text: 'They tend to have more friends at school.', correct: false },
                  { id: 'b', text: 'They tend to do better in school.', correct: true },
                  { id: 'd', text: 'They tend to sleep much better at night.', correct: false }
                ],
                explanation: 'The speaker says students who eat breakfast tend to do better in school.',
                points: 1
              }
            ]
          }
    ]
  },
};

// Alias for full-test loader, which reads window.LISTENING_TEST_9
window.LISTENING_TEST_9 = window.LISTENING_SECTION_9;
