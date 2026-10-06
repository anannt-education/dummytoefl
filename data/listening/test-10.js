// TOEFL iBT 2026 Listening Practice — Test 10
// Module 1 (Router): 30 questions | Module 2: 17 questions | Total: 47
// Audio: pre-recorded MP3 files in /audio/listening/test-10/

window.LISTENING_SECTION_10 = {
  id: 'listening-test-10',
  title: 'Listening Practice Test 10',
  format: '2026',
  timeLimit: 1740,

  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      introAudio: 'audio/listening/test-10/m1-intro.mp3',

      chooseResponse: [
    {
      id: 'lt10-m1-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m1-cr01.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you sign up for the new fitness orientation class?',
      options: [
        { id: 'd', text: 'Sign-ups usually get confirmed within a day.', correct: false },
        { id: 'a', text: 'I did. They send a confirmation by email.', correct: true },
        { id: 'c', text: 'Orientations explain a lot of the small details.', correct: false },
        { id: 'b', text: 'Fitness classes really help with stress and sleep.', correct: false }
      ],
      explanation: 'Direct yes with detail.',
      points: 1
    },
    {
      id: 'lt10-m1-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m1-cr02.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m not sure I\'m ready for the upcoming standardized test.',
      options: [
        { id: 'b', text: 'Testing tends to be stressful for most people.', correct: false },
        { id: 'd', text: 'Standardization measures the content the same way for every test taker.', correct: false },
        { id: 'c', text: 'The campus offers free practice sessions every Wednesday in the library.', correct: true },
        { id: 'a', text: 'Readiness varies quite a lot from one student to another.', correct: false }
      ],
      explanation: 'Specific resource for prep.',
      points: 1
    },
    {
      id: 'lt10-m1-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m1-cr03.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Have you tried the language partner program yet?',
      options: [
        { id: 'a', text: 'Programs help students connect across cultures, though they do take a real time commitment.', correct: false },
        { id: 'd', text: 'Partners usually share the time evenly between their two languages each week.', correct: false },
        { id: 'c', text: 'Languages connect people and they open up new cultural perspectives too.', correct: false },
        { id: 'b', text: 'I have a Spanish partner now. We meet at the cafe twice a week.', correct: true }
      ],
      explanation: 'Specific positive experience.',
      points: 1
    },
    {
      id: 'lt10-m1-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m1-cr04.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did the campus bus driver mention the new route?',
      options: [
        { id: 'c', text: 'Buses serve most parts of campus during the week.', correct: false },
        { id: 'b', text: 'Drivers know the campus streets pretty well by now.', correct: false },
        { id: 'd', text: 'Yes, it goes through the new science quad starting Monday.', correct: true },
        { id: 'a', text: 'Routes change every couple of years as new buildings open.', correct: false }
      ],
      explanation: 'Specific detail.',
      points: 1
    },
    {
      id: 'lt10-m1-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m1-cr05.mp3',
      image: '/img/listening/stock_modal/female-5.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m trying to find a good doctor close to campus.',
      options: [
        { id: 'd', text: 'Locations usually matter quite a bit for appointments like those.', correct: false },
        { id: 'c', text: 'Doctors help with all sorts of ordinary health problems these days.', correct: false },
        { id: 'a', text: 'Health is important, though most students wait until they actually need one.', correct: false },
        { id: 'b', text: 'The student health center can give you a list of recommended providers.', correct: true }
      ],
      explanation: 'Useful resource.',
      points: 1
    },
    {
      id: 'lt10-m1-cr6',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m1-cr06.mp3',
      image: '/img/listening/stock_modal/male-6.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m looking for a place to do video calls between classes.',
      options: [
        { id: 'a', text: 'Locations vary depending on how quiet you need things to be.', correct: false },
        { id: 'c', text: 'The phone booth pods on the second floor are pretty popular.', correct: true },
        { id: 'd', text: 'Booths offer privacy, though the third floor ones get loud.', correct: false },
        { id: 'b', text: 'Calls are common between classes for a lot of students.', correct: false }
      ],
      explanation: 'Specific suggestion.',
      points: 1
    },
    {
      id: 'lt10-m1-cr7',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m1-cr07.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m thinking of running for student government.',
      options: [
        { id: 'b', text: 'You\'d be great at it. The petitions are due in three weeks.', correct: true },
        { id: 'a', text: 'Petitions formalize the process in most campus elections these days.', correct: false },
        { id: 'c', text: 'Government roles vary in workload, and senate positions take the most time.', correct: false },
        { id: 'd', text: 'Students participate in campus elections at pretty high rates here.', correct: false }
      ],
      explanation: 'Encouragement with timeline.',
      points: 1
    },
    {
      id: 'lt10-m1-cr8',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m1-cr08.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you taking the early graduation option?',
      options: [
        { id: 'b', text: 'Graduation is rewarding, but the timing affects job and graduate school applications.', correct: false },
        { id: 'c', text: 'Early options exist at most schools in some form now.', correct: false },
        { id: 'a', text: 'I\'m thinking about it. I have to talk with my advisor first.', correct: true },
        { id: 'd', text: 'Decisions like that matter for the years right after college.', correct: false }
      ],
      explanation: 'Honest tentative answer.',
      points: 1
    },
    {
      id: 'lt10-m1-cr9',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m1-cr09.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you find a new place to live for the next term?',
      options: [
        { id: 'c', text: 'Living situations change a lot from term to term.', correct: false },
        { id: 'a', text: 'Terms come up faster than most people expect.', correct: false },
        { id: 'b', text: 'Most students prefer the apartments near Maple Street.', correct: false },
        { id: 'd', text: 'I\'m in the apartments on Pine Street. Quiet area.', correct: true }
      ],
      explanation: 'Specific where with comment.',
      points: 1
    },
    {
      id: 'lt10-m1-cr10',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m1-cr10.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I haven\'t been able to register for that popular elective.',
      options: [
        { id: 'd', text: 'Email the professor directly. Sometimes they let in extras.', correct: true },
        { id: 'b', text: 'Popular classes fill up fast during the first week.', correct: false },
        { id: 'a', text: 'Electives like that get a lot of interest.', correct: false },
        { id: 'c', text: 'Registration is competitive, especially for the upper-level seminars.', correct: false }
      ],
      explanation: 'Practical workaround.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt10-m1-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-10/m1-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Woman: I just signed up for the figure drawing class.\nMan: I didn\'t know you were interested in art.\nWoman: I always have been but never took a class. This term my schedule finally had room for one.\nMan: Nice. When does it meet?\nWoman: Tuesday and Thursday afternoons, three hours each session.\nMan: That\'s a long stretch. Do you need supplies for it?\nWoman: Just basic charcoal and a sketch pad. The professor said not to spend much the first month.\nMan: The art store on Maple sells everything you\'ll need, and they give a student discount on Wednesdays.',
      questions: [
        {
          id: 'lt10-m1-conv1-q1',
          stem: 'What did the woman just do?',
          options: [
        { id: 'd', text: 'Apply to a graduate art school program.', correct: false },
        { id: 'c', text: 'Sign up for a figure drawing class.', correct: true },
        { id: 'a', text: 'Drop her math elective this term.', correct: false },
        { id: 'b', text: 'Buy art supplies for the class.', correct: false }
          ],
          explanation: 'Signed up for figure drawing.',
          points: 1
        },        {
          id: 'lt10-m1-conv1-q2',
          stem: 'What does the man recommend?',
          options: [
        { id: 'b', text: 'The art club for borrowing supplies.', correct: false },
        { id: 'a', text: 'The art store on Maple for supplies.', correct: true },
        { id: 'c', text: 'An online shop for cheaper supplies.', correct: false },
        { id: 'd', text: 'The campus art museum for a visit.', correct: false }
          ],
          explanation: 'Art store on Maple.',
          points: 1
        }
      ]
    },
    {
      id: 'lt10-m1-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-10/m1-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Man: Did you finish your art history paper?\nWoman: Almost. I\'m having trouble with the last section.\nMan: What\'s the topic?\nWoman: A comparison of two paintings from different periods. I have to describe the brushwork in detail.\nMan: That\'s hard to do from the small prints in the textbook.\nWoman: Exactly. I can\'t see the surface texture at all, and it\'s due Thursday morning.\nMan: Then try the visual art database in the library system. It has high-resolution images that might help.\nWoman: That\'s a great suggestion. I\'ll search it tonight.',
      questions: [
        {
          id: 'lt10-m1-conv2-q1',
          stem: 'What is the woman struggling with?',
          options: [
        { id: 'a', text: 'Choosing a topic for her art history paper.', correct: false },
        { id: 'd', text: 'Finishing the last section of her paper.', correct: true },
        { id: 'b', text: 'Finding a copy of the course textbook.', correct: false },
        { id: 'c', text: 'Reading the assigned chapter for the class.', correct: false }
          ],
          explanation: 'Last section of paper.',
          points: 1
        },        {
          id: 'lt10-m1-conv2-q2',
          stem: 'What does the man recommend?',
          options: [
        { id: 'c', text: 'Switching to a different pair of paintings.', correct: false },
        { id: 'b', text: 'Asking the professor for a short extension.', correct: false },
        { id: 'd', text: 'Visiting the campus art gallery in person.', correct: false },
        { id: 'a', text: 'Using the visual art database for images.', correct: true }
          ],
          explanation: 'Visual art database for high-res images.',
          points: 1
        }
      ]
    },
    {
      id: 'lt10-m1-conv3',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-10/m1-conv3.mp3',
      image: '/img/listening/two_people/people-3.webp',
      transcript: 'Woman: Are you going to the campus film festival this weekend?\nMan: I plan to. What are they showing?\nWoman: Several short films by student filmmakers. Twelve of them, I think, spread over two evenings.\nMan: Are they all the same kind of thing?\nWoman: No, there\'s a documentary block and an animation block, so you can pick.\nMan: That sounds interesting. Are tickets needed?\nWoman: It\'s free for students. Just show up at the auditorium in the Hale Center.\nMan: Great. I\'ll meet you there Friday at seven.',
      questions: [
        {
          id: 'lt10-m1-conv3-q1',
          stem: 'What event are the speakers discussing?',
          options: [
        { id: 'd', text: 'A movie night in the residence hall.', correct: false },
        { id: 'c', text: 'A film studies class screening on campus.', correct: false },
        { id: 'b', text: 'A guest lecture by a film director.', correct: false },
        { id: 'a', text: 'A campus film festival featuring student work.', correct: true }
          ],
          explanation: 'Campus film festival.',
          points: 1
        },        {
          id: 'lt10-m1-conv3-q2',
          stem: 'What do students need to attend?',
          options: [
        { id: 'd', text: 'Just to show up at the auditorium.', correct: true },
        { id: 'a', text: 'A small entry fee paid at the door.', correct: false },
        { id: 'c', text: 'A printed ticket purchased ahead.', correct: false },
        { id: 'b', text: 'An invitation from the film club.', correct: false }
          ],
          explanation: 'Free, just show up.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt10-m1-ann1',
      title: 'Listen to an announcement at the art gallery.',
      audio: '/audio/listening/test-10/m1-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good evening. The campus art gallery is opening a new exhibit on contemporary photography this Thursday at six p.m. Light refreshments will be served at the opening reception, and three of the artists will be there to talk about their prints. The exhibit features work from twenty student photographers and runs through the end of the semester. Gallery hours are ten to five on weekdays and noon to four on Saturdays. Admission is free and no ticket is required.',
      questions: [
        {
          id: 'lt10-m1-ann1-q1',
          stem: 'What is the exhibit about?',
          options: [
        { id: 'd', text: 'Historical photography from Europe.', correct: false },
        { id: 'b', text: 'Architecture photography around campus.', correct: false },
        { id: 'a', text: 'Work by famous local photographers.', correct: false },
        { id: 'c', text: 'Contemporary photography by students.', correct: true }
          ],
          explanation: 'Contemporary student photography.',
          points: 1
        },        {
          id: 'lt10-m1-ann1-q2',
          stem: 'When does the exhibit close?',
          options: [
        { id: 'c', text: 'End of next week.', correct: false },
        { id: 'a', text: 'End of the semester.', correct: true },
        { id: 'b', text: 'End of the year.', correct: false },
        { id: 'd', text: 'Open for one weekend only.', correct: false }
          ],
          explanation: 'End of the semester.',
          points: 1
        }
      ]
    },
    {
      id: 'lt10-m1-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-10/m1-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Attention art majors. The annual senior art show takes place at the end of this semester in the Kessler Gallery. Senior students who wish to participate must submit application materials by April 15th. That means a one-page artist statement and photographs of three finished pieces. Each participant receives a small grant to help with materials. Information sessions are held weekly in the art department lounge, on Thursdays at four. If you cannot attend one, email the department coordinator for the packet.',
      questions: [
        {
          id: 'lt10-m1-ann2-q1',
          stem: 'What event is being announced?',
          options: [
        { id: 'd', text: 'A community art class series.', correct: false },
        { id: 'c', text: 'A faculty art exhibit opening.', correct: false },
        { id: 'a', text: 'The annual senior art show.', correct: true },
        { id: 'b', text: 'A regional student art competition.', correct: false }
          ],
          explanation: 'Annual senior art show.',
          points: 1
        },        {
          id: 'lt10-m1-ann2-q2',
          stem: 'What do participants receive?',
          options: [
        { id: 'b', text: 'Studio space for the year.', correct: false },
        { id: 'd', text: 'A small grant for materials.', correct: true },
        { id: 'a', text: 'A scholarship for tuition costs.', correct: false },
        { id: 'c', text: 'A free introductory art class.', correct: false }
          ],
          explanation: 'Small grant for materials.',
          points: 1
        }
      ]
    },
    {
      id: 'lt10-m1-ann3',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-10/m1-ann3.mp3',
      image: '/img/listening/announcement/female-3.webp',
      speakerGender: 'female',
      transcript: 'Hi, everyone. The art department is offering free figure drawing sessions every Wednesday evening. Sessions are open to all students, regardless of major, and you do not need any previous drawing experience. Bring your own supplies or borrow from the department, though the borrowed charcoal and pads are limited, so come early if you need them. A live model is provided, and poses run from two minutes up to twenty. No registration is needed; just show up at six p.m. in studio one.',
      questions: [
        {
          id: 'lt10-m1-ann3-q1',
          stem: 'What is offered every Wednesday?',
          options: [
        { id: 'd', text: 'Weekly art history lectures.', correct: false },
        { id: 'a', text: 'Free evening sculpture classes.', correct: false },
        { id: 'b', text: 'Free figure drawing sessions.', correct: true },
        { id: 'c', text: 'Free weekend painting workshops.', correct: false }
          ],
          explanation: 'Figure drawing sessions.',
          points: 1
        },        {
          id: 'lt10-m1-ann3-q2',
          stem: 'What about supplies?',
          options: [
        { id: 'd', text: 'Students can bring their own or borrow from the department.', correct: true },
        { id: 'c', text: 'Supplies are sold at the door before each session.', correct: false },
        { id: 'a', text: 'All supplies are provided for free by the art department.', correct: false },
        { id: 'b', text: 'Students must bring their own charcoal and pads.', correct: false }
          ],
          explanation: 'Bring own or borrow.',
          points: 1
        }
      ]
    },
      ],

      academicTalks: [
    {
      id: 'lt10-m1-talk1',
      title: 'Listen to a talk in an art history class.',
      audio: '/audio/listening/test-10/m1-talk1.mp3',
      image: '/img/listening/announcement/female-2.webp',
      speakerGender: 'female',
      transcript: 'Today we will look at Impressionism, a movement that began in France in the 1860s and changed how painters approached their work. I want to cover what they were reacting against, what they did differently, and how the public responded. The official French art world, the Salon and its juries, prized careful drawing, smooth brushwork, and grand historical subjects. A group of younger painters, including Claude Monet, Pierre-Auguste Renoir, and Camille Pissarro, rejected these conventions. They were more interested in capturing fleeting moments of everyday life, the changing light of an afternoon, or the surface of a pond on a windy day. To do that, they often painted outdoors in a single session rather than in a studio over many weeks. One technical change helped: paint had recently become available in sealed metal tubes, so an artist could carry a full palette outdoors. The brushstrokes are the giveaway. They are short, broken, and left visible. From up close, an Impressionist painting can look almost unfinished. From a distance, however, those same strokes blend in the eye to create a vivid impression of light and motion. Monet pushed this furthest, painting the same haystack at different hours to record the changing light. When the group first showed their work in 1874, the public was confused and many critics were hostile. But by the end of the century, Impressionism had reshaped European painting and influenced the movements that followed. Next session, we will compare specific paintings by Monet and Renoir to see how each used the approach differently.',
      questions: [
        {
          id: 'lt10-m1-talk1-q1',
          stem: 'What is the main topic of the talk?',
          options: [
        { id: 'a', text: 'How modern museums are organized today.', correct: false },
        { id: 'd', text: 'The history of French government art schools.', correct: false },
        { id: 'c', text: 'Famous portraits painted in the nineteenth century.', correct: false },
        { id: 'b', text: 'The origins and characteristics of Impressionism.', correct: true }
          ],
          explanation: 'The lecture is about Impressionism.',
          points: 1
        },        {
          id: 'lt10-m1-talk1-q2',
          stem: 'What did Impressionist painters often choose to paint?',
          options: [
        { id: 'b', text: 'Mythological battles taken from ancient Greek epic poems.', correct: false },
        { id: 'a', text: 'Detailed portraits of European royalty and nobility.', correct: false },
        { id: 'c', text: 'Fleeting moments of everyday life and changing light.', correct: true },
        { id: 'd', text: 'Religious scenes commissioned by the local church.', correct: false }
          ],
          explanation: 'They captured fleeting moments and changing light.',
          points: 1
        },        {
          id: 'lt10-m1-talk1-q3',
          stem: 'Why does the speaker describe Impressionist brushwork?',
          options: [
        { id: 'b', text: 'To show that the painters had never received any proper training.', correct: false },
        { id: 'c', text: 'To compare it with the carving techniques used in Renaissance sculpture.', correct: false },
        { id: 'a', text: 'To explain why so many of these works have been damaged over the years.', correct: false },
        { id: 'd', text: 'To explain how the strokes combine in the eye to suggest light and motion.', correct: true }
          ],
          explanation: 'Visible strokes blend in the eye from a distance.',
          points: 1
        },        {
          id: 'lt10-m1-talk1-q4',
          stem: 'What will the speaker most likely discuss next?',
          options: [
        { id: 'a', text: 'The economic conditions of France during the nineteenth century.', correct: false },
        { id: 'c', text: 'The abstract art movements of the twentieth century.', correct: false },
        { id: 'b', text: 'A comparison of paintings by Monet and Renoir.', correct: true },
        { id: 'd', text: 'Sculpture produced during the same period in France.', correct: false }
          ],
          explanation: 'She previews specific Monet/Renoir comparison.',
          points: 1
        }
      ]
    },
        {
          id: 'lt10-m1-talk2',
          title: 'Listen to a talk in a neuroscience class.',
          audio: '/audio/listening/test-10/m1-talk2.mp3',
          image: '/img/listening/announcement/female-1.webp',
          speakerGender: 'female',
          transcript: 'Today let\'s talk about why people dream. Dreams are images, sounds, and feelings that we experience while we sleep. Most dreams happen during a stage of sleep called REM sleep, when the brain is very active. REM stands for rapid eye movement, and sleep researchers first identified it in the 1950s, when they noticed that a sleeper\'s eyes dart back and forth under closed lids. That stage is easy to test. Wake someone during it and they\'ll usually report a vivid dream. Wake them at another point in the night and very often they report nothing at all. So why does the brain do this? Scientists have several theories about why we dream, and I want to take you through three of them. One theory is that dreams help the brain process information from the day, like sorting through memories. Support for that comes from studies where people who learned a new skill, a maze or a finger-tapping sequence, performed better after a full night of sleep than after a night that was cut short. Another theory is that dreams help us solve problems by letting the mind try out different ideas without consequences. In a dream you can work through a difficult conversation, and nothing is at stake. A third theory is more deflating. It says dreams are simply a side effect of brain activity during sleep, with no special purpose. Notice how hard these theories are to test, since we only ever get the dreamer\'s report. Scientists are still studying this fascinating subject.',
          questions: [
          {
            id: 'lt10-m1-talk2-q1',
            stem: 'What is the talk mainly about?',
            options: [
                  { id: 'a', text: 'Different theories about why people dream.', correct: true },
                  { id: 'c', text: 'Why some people sleep more than others.', correct: false },
                  { id: 'd', text: 'How dreams are different across cultures.', correct: false },
                  { id: 'b', text: 'How to remember dreams the next morning.', correct: false }
            ],
            explanation: 'The talk presents several theories about why people dream.',
            points: 1
          },
          {
            id: 'lt10-m1-talk2-q2',
            stem: 'What does one theory suggest dreams help us do?',
            options: [
                  { id: 'b', text: 'Predict events that will happen in the future.', correct: false },
                  { id: 'c', text: 'Heal physical injuries faster during the night.', correct: false },
                  { id: 'a', text: 'Process information and sort memories from the day.', correct: true },
                  { id: 'd', text: 'Talk with people who live far away.', correct: false }
            ],
            explanation: 'One theory mentioned is that dreams help the brain process information from the day, sorting through memories.',
            points: 1
          },
              {
                id: 'lt10-m1-talk2-q3',
                stem: 'What is REM sleep, according to the speaker?',
                options: [
                  { id: 'd', text: 'A type of medicine that doctors prescribe to help people sleep.', correct: false },
                  { id: 'b', text: 'A stage of sleep when the brain is very active and most dreams happen.', correct: true },
                  { id: 'c', text: 'The deepest stage of sleep, during which a person does not dream at all.', correct: false },
                  { id: 'a', text: 'A state in which the brain stops working almost completely for a while.', correct: false }
                ],
                explanation: 'The speaker says most dreams happen during REM sleep, when the brain is very active.',
                points: 1
              },
              {
                id: 'lt10-m1-talk2-q4',
                stem: 'What does the speaker say about scientific certainty around dreams?',
                options: [
                  { id: 'b', text: 'Scientists are still studying this fascinating subject.', correct: true },
                  { id: 'c', text: 'Dreams are now considered unimportant.', correct: false },
                  { id: 'a', text: 'Scientists have a single agreed-upon explanation.', correct: false },
                  { id: 'd', text: 'Most dreams have been explained by ancient writers.', correct: false }
                ],
                explanation: 'The speaker says scientists are still studying this fascinating subject.',
                points: 1
              }
          ]
        }
      ]
    },

    {
      id: 'module-2',
      title: 'Module 2',
      introAudio: 'audio/listening/test-10/m2-intro.mp3',

      chooseResponse: [
    {
      id: 'lt10-m2-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m2-cr01.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Are you using the new study room booking system?',
      options: [
        { id: 'c', text: 'Yes, I love that you can see availability in real time now.', correct: true },
        { id: 'b', text: 'Real time information matters a lot for something like that.', correct: false },
        { id: 'a', text: 'Systems like that help with a lot of scheduling problems.', correct: false },
        { id: 'd', text: 'Booking organizes the demand well, though the system glitches on Sunday nights.', correct: false }
      ],
      explanation: 'Specific positive feature.',
      points: 1
    },
    {
      id: 'lt10-m2-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m2-cr02.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you find a way to print your boarding pass?',
      options: [
        { id: 'c', text: 'Printing helps when the airport wifi is unreliable.', correct: false },
        { id: 'd', text: 'Front desks help with things like that sometimes.', correct: false },
        { id: 'a', text: 'I asked the front desk; they printed it for me.', correct: true },
        { id: 'b', text: 'Boarding requires documents that have to be in your name.', correct: false }
      ],
      explanation: 'Direct solution.',
      points: 1
    },
    {
      id: 'lt10-m2-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m2-cr03.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I haven\'t used the campus shuttle since the schedule changed.',
      options: [
        { id: 'd', text: 'Schedules change every semester for one reason or another.', correct: false },
        { id: 'a', text: 'Mornings get busy on the shuttle since the new building opened.', correct: false },
        { id: 'c', text: 'The new schedule is actually more frequent on weekday mornings.', correct: true },
        { id: 'b', text: 'Shuttles transport a lot of students around campus daily.', correct: false }
      ],
      explanation: 'Useful info with positive note.',
      points: 1
    },
    {
      id: 'lt10-m2-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m2-cr04.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you joining the volunteer trip to the wildlife center?',
      options: [
        { id: 'c', text: 'I heard they take in injured birds and small mammals there.', correct: false },
        { id: 'b', text: 'I\'m signed up for the second weekend. Saturday morning departures.', correct: true },
        { id: 'a', text: 'My roommate volunteers at the animal shelter.', correct: false },
        { id: 'd', text: 'The van ride out there takes forever.', correct: false }
      ],
      explanation: 'Direct confirmation with timing.',
      points: 1
    },
    {
      id: 'lt10-m2-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-10/m2-cr05.mp3',
      image: '/img/listening/stock_modal/female-5.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I haven\'t decided whether to take the online or in-person section.',
      options: [
        { id: 'b', text: 'In-person is better for participation.', correct: true },
        { id: 'c', text: 'Online learning grew a lot.', correct: false },
        { id: 'a', text: 'Those decisions really matter.', correct: false },
        { id: 'd', text: 'Sections differ in scheduling and workload.', correct: false }
      ],
      explanation: 'Balanced trade-off.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt10-m2-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-10/m2-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Man: Did you visit the new art exhibit at the campus gallery?\nWoman: I went yesterday. The mixed media pieces were really creative.\nMan: What made them stand out?\nWoman: Most of the artists combined fabric, metal and paint in one piece.\nMan: Do you know how long it\'s running?\nWoman: Through the end of next month, I think. The gallery\'s open until eight on weekdays now.\nMan: Good, I have time to fit it into my schedule.\nWoman: They also do guided tours on Thursday evenings. The curator leads them herself and explains the techniques.\nMan: Then I\'ll go this week.',
      questions: [
        {
          id: 'lt10-m2-conv1-q1',
          stem: 'What is showing at the campus gallery?',
          options: [
        { id: 'c', text: 'A collection of historical photography prints.', correct: false },
        { id: 'a', text: 'Sculptures made by the senior class.', correct: false },
        { id: 'b', text: 'Paintings by several famous local artists.', correct: false },
        { id: 'd', text: 'A new mixed media art exhibit.', correct: true }
          ],
          explanation: 'Mixed media exhibit.',
          points: 1
        },        {
          id: 'lt10-m2-conv1-q2',
          stem: 'When are guided tours offered?',
          options: [
        { id: 'c', text: 'Saturday afternoons.', correct: false },
        { id: 'b', text: 'Monday afternoons.', correct: false },
        { id: 'd', text: 'Sunday mornings.', correct: false },
        { id: 'a', text: 'Thursday evenings.', correct: true }
          ],
          explanation: 'Thursday evenings.',
          points: 1
        }
      ]
    },
    {
      id: 'lt10-m2-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-10/m2-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Woman: Did you sign up for the studio access pass for next term?\nMan: Not yet. What does it include?\nWoman: Twenty-four-hour access to the art studios.\nMan: Even overnight?\nWoman: Any hour, any day. You swipe your student ID at the side entrance and the door logs you in.\nMan: That\'s perfect for projects with tight deadlines.\nWoman: Exactly. The deadline to apply is this Friday.\nMan: Is there a cost?\nWoman: Thirty dollars, and it goes onto your tuition bill instead of being paid at the desk.\nMan: I\'ll submit my application tomorrow morning.',
      questions: [
        {
          id: 'lt10-m2-conv2-q1',
          stem: 'What does the studio access pass offer?',
          options: [
        { id: 'a', text: 'Discounted gallery admission.', correct: false },
        { id: 'b', text: 'Twenty-four-hour access to art studios.', correct: true },
        { id: 'd', text: 'Free art supplies for the term.', correct: false },
        { id: 'c', text: 'Access to professional equipment only.', correct: false }
          ],
          explanation: 'Twenty-four-hour studio access.',
          points: 1
        },        {
          id: 'lt10-m2-conv2-q2',
          stem: 'When is the deadline to apply?',
          options: [
        { id: 'd', text: 'This Friday.', correct: true },
        { id: 'a', text: 'Next Monday.', correct: false },
        { id: 'b', text: 'End of the month.', correct: false },
        { id: 'c', text: 'Beginning of next term.', correct: false }
          ],
          explanation: 'This Friday.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt10-m2-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-10/m2-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good morning. The campus art museum is offering free guided tours throughout the semester. Tours focus on different parts of the collection each week, beginning with the American landscape gallery on the second floor. Schedules are posted on the museum website, where you can also book your place. Tours are limited to ten participants and require online reservations, so walk-ins cannot be accepted. Reserve at least two days in advance, because weekend sessions fill quickly. For help booking, contact the museum education office in Hale Hall.',
      questions: [
        {
          id: 'lt10-m2-ann1-q1',
          stem: 'What is being offered at the museum?',
          options: [
        { id: 'a', text: 'Free guided tours throughout the semester.', correct: true },
        { id: 'd', text: 'An art class for complete beginners.', correct: false },
        { id: 'b', text: 'A new gift shop in the lobby.', correct: false },
        { id: 'c', text: 'Paid guided tours on weekends only.', correct: false }
          ],
          explanation: 'Free guided tours.',
          points: 1
        },        {
          id: 'lt10-m2-ann1-q2',
          stem: 'How can students join a tour?',
          options: [
        { id: 'b', text: 'Make an online reservation.', correct: true },
        { id: 'c', text: 'Sign up at their dorm.', correct: false },
        { id: 'a', text: 'Pay a small fee.', correct: false },
        { id: 'd', text: 'Show up at the museum entrance.', correct: false }
          ],
          explanation: 'Online reservation.',
          points: 1
        }
      ]
    },
    {
      id: 'lt10-m2-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-10/m2-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Attention art students. The annual student art competition is now accepting submissions. Categories include painting, sculpture, photography, and digital art. Each student may submit one piece per category, and work made for a class this year is eligible. The deadline is May 1st, and winners receive cash prizes. Submit through the department portal with a title and a short description. Report oversized pieces early so the gallery can plan hanging space. Winning entries stay on display in the Fine Arts lobby through June.',
      questions: [
        {
          id: 'lt10-m2-ann2-q1',
          stem: 'What competition is being announced?',
          options: [
        { id: 'd', text: 'A national art competition for students.', correct: false },
        { id: 'b', text: 'An interdepartmental art show on campus.', correct: false },
        { id: 'a', text: 'The annual student art competition.', correct: true },
        { id: 'c', text: 'A photography contest for students only.', correct: false }
          ],
          explanation: 'Annual student art competition.',
          points: 1
        },        {
          id: 'lt10-m2-ann2-q2',
          stem: 'What do winners receive?',
          options: [
        { id: 'c', text: 'Trophies.', correct: false },
        { id: 'b', text: 'Art supplies.', correct: false },
        { id: 'a', text: 'Free art classes.', correct: false },
        { id: 'd', text: 'Cash prizes.', correct: true }
          ],
          explanation: 'Cash prizes.',
          points: 1
        }
      ]
    }
      ],

      academicTalks: [
        {
          id: 'lt10-m2-talk1',
          title: 'Listen to a talk in an art history class.',
          audio: '/audio/listening/test-10/m2-talk1.mp3',
          image: '/img/listening/announcement/male-3.webp',
          speakerGender: 'male',
          transcript: 'In the mid-nineteenth century, a group of French painters rebelled against the dominant academic style of their time. I want to explain what they were reacting against, look at one notorious painting, and then at what the movement opened up. The academic style prized idealized historical or mythological scenes, subjects lifted out of ordinary life and tidied up for display. Rather than producing those, the realists painted ordinary working people and unremarkable landscapes with deliberate honesty. Gustave Courbet was among the most influential figures of this movement. His large painting of stonebreakers, exhausted laborers performing back-breaking work by the side of a road, scandalized critics who believed such subjects were beneath the dignity of serious art. Courbet made the offense impossible to ignore by giving two anonymous workers a canvas the size reserved for generals and heroes. He insisted that painting should depict the world as it actually was, including its hardships and its overlooked workers. Here\'s an analogy from music. The harpsichord could only play notes at one volume, however hard the player struck the key. The piano that replaced it could move between loud and soft, and that one change gave composers a range they\'d never had. The instrument is with us today in classical music, jazz, pop, and many other styles. Realism did something similar for painting. The movement opened the door for later artists who explored social conditions in their work, and it challenged the long-held assumption that art should primarily serve aristocratic taste and idealized themes.',
          questions: [
            {
              id: 'lt10-m2-talk1-q1',
              stem: 'According to the speaker, what did the realists rebel against?',
              options: [
                { id: 'b', text: 'Religious paintings commissioned by churches and private donors', correct: false },
                { id: 'c', text: 'Modern industrial machinery in the new city factories', correct: false },
                { id: 'a', text: 'Academic art that focused on idealized historical or mythological scenes', correct: true },
                { id: 'd', text: 'New photographic technologies that were beginning to compete with painting', correct: false }
              ],
              explanation: 'The speaker explains realists rebelled against the dominant academic style focused on idealized historical or mythological scenes.',
              points: 1
            },
            {
              id: 'lt10-m2-talk1-q2',
              stem: 'Why did Courbet\'s painting of stonebreakers scandalize critics?',
              options: [
                { id: 'b', text: 'It depicted exhausted ordinary laborers, which critics felt was beneath serious art', correct: true },
                { id: 'a', text: 'It was technically poorly executed in several obvious ways', correct: false },
                { id: 'd', text: 'It was much smaller than critics expected for a serious history painting', correct: false },
                { id: 'c', text: 'It was painted in colors that many critics found offensive', correct: false }
              ],
              explanation: 'The speaker notes critics believed such subjects, exhausted laborers, were beneath the dignity of serious art.',
              points: 1
            },
                            {
                id: 'lt10-m2-talk1-q3',
                stem: 'Why does the speaker describe the harpsichord and piano?',
                options: [
                  { id: 'a', text: 'To show how realism expanded what painting could do.', correct: true },
                  { id: 'c', text: 'To note that the piano is still played today.', correct: false },
                  { id: 'd', text: 'To suggest that realism narrowed the subjects available to painters.', correct: false },
                  { id: 'b', text: 'To argue that painting borrowed its techniques from music.', correct: false }
                ],
                explanation: 'The instrument comparison is there to make a point about painting: just as the piano gave composers a range they had not had, realism widened what painters could take on.',
                points: 1
              },
                            {
                id: 'lt10-m2-talk1-q4',
                stem: 'What lasting effect does the speaker attribute to realism?',
                options: [
                  { id: 'a', text: 'It ended aristocratic patronage of painters across all of Europe.', correct: false },
                  { id: 'd', text: 'It established large canvases as the standard for serious art.', correct: false },
                  { id: 'b', text: 'It encouraged later artists to examine social conditions in painting.', correct: true },
                  { id: 'c', text: 'It persuaded academic critics to accept idealized historical scenes.', correct: false }
                ],
                explanation: 'The speaker closes by crediting the movement with opening the way for artists who later took up social conditions as their subject.',
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
    introAudio: '/audio/listening/test-10/m2-intro.mp3',
    chooseResponse: [
          {
            id: 'lt10-m2e-cr1',
            type: 'choose_response',
            audio: '/audio/listening/test-10/m2e-cr01.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'What is the weather like today?',
            options: [
              { id: 'b', text: 'The weather changes often here.', correct: false },
              { id: 'c', text: 'I really love rainy days.', correct: false },
              { id: 'd', text: 'Forecasts can be wrong sometimes.', correct: false },
              { id: 'a', text: 'It is sunny and warm.', correct: true }
            ],
            explanation: 'The speaker is asking about current weather.',
            points: 1
          },
          {
            id: 'lt10-m2e-cr2',
            type: 'choose_response',
            audio: '/audio/listening/test-10/m2e-cr02.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Could you recommend a good restaurant?',
            options: [
              { id: 'd', text: 'Good food is really important to me.', correct: false },
              { id: 'b', text: 'There are restaurants all over this neighborhood.', correct: false },
              { id: 'a', text: 'I really like the Italian place on Oak Street.', correct: true },
              { id: 'c', text: 'I usually just cook at home on most nights.', correct: false }
            ],
            explanation: 'The speaker is asking for a recommendation.',
            points: 1
          },
          {
            id: 'lt10-m2e-cr3',
            type: 'choose_response',
            audio: '/audio/listening/test-10/m2e-cr03.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Are you working tomorrow?',
            options: [
              { id: 'b', text: 'Work can be really tiring.', correct: false },
              { id: 'c', text: 'I think tomorrow is Tuesday.', correct: false },
              { id: 'a', text: 'Yes, from nine to five.', correct: true },
              { id: 'd', text: 'I really love my job.', correct: false }
            ],
            explanation: 'The speaker is asking about a work schedule.',
            points: 1
          },
          {
            id: 'lt10-m2e-cr4',
            type: 'choose_response',
            audio: '/audio/listening/test-10/m2e-cr04.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Did you watch the news this morning?',
            options: [
              { id: 'a', text: 'News is important.', correct: false },
              { id: 'b', text: 'Yes, anything new happened?', correct: true },
              { id: 'c', text: 'I read the newspaper.', correct: false },
              { id: 'd', text: 'My phone has news alerts.', correct: false }
            ],
            explanation: 'The speaker is asking if the news was watched.',
            points: 1
          },
          {
            id: 'lt10-m2e-cr5',
            type: 'choose_response',
            audio: '/audio/listening/test-10/m2e-cr05.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Would you like to come over for dinner?',
            options: [
              { id: 'd', text: 'My favorite meal is pasta.', correct: false },
              { id: 'a', text: 'Dinner parties are fun.', correct: false },
              { id: 'c', text: 'I love cooking.', correct: false },
              { id: 'b', text: 'Sure, what time?', correct: true }
            ],
            explanation: 'The speaker is making an invitation.',
            points: 1
          },
    ],
    conversations: [
          {
            id: 'lt10-m2e-conv1',
            title: 'Listen to a conversation.',
            audio: '/audio/listening/test-10/m2e-conv1.mp3',
            image: '/img/listening/two_people/people-1.webp',
            transcript: 'Woman: Hi Mike, can you help me with the chemistry homework?\nMan: Sure. Which problem are you stuck on?\nWoman: Number five. I do not understand the equation.\nMan: Let me see. Oh, this is about balancing chemical reactions.\nWoman: Right. The numbers are not working out for me.\nMan: You need to start by counting the atoms on each side. Let me show you.\nWoman: That makes sense now. Thank you so much.\nMan: No problem. We can study together for the test tomorrow if you want.',
            questions: [
              {
                id: 'lt10-m2e-conv1-q1',
                stem: 'What does the woman need help with?',
                options: [
                  { id: 'a', text: 'Math homework.', correct: false },
                  { id: 'b', text: 'Chemistry homework.', correct: true },
                  { id: 'c', text: 'A history project.', correct: false },
                  { id: 'd', text: 'A book report.', correct: false }
                ],
                explanation: 'She needs help with chemistry homework.',
                points: 1
              },
              {
                id: 'lt10-m2e-conv1-q2',
                stem: 'Which problem is she stuck on?',
                options: [
                  { id: 'b', text: 'Number five.', correct: true },
                  { id: 'd', text: 'Number ten.', correct: false },
                  { id: 'c', text: 'Number seven.', correct: false },
                  { id: 'a', text: 'Number three.', correct: false }
                ],
                explanation: 'She says she is stuck on number five.',
                points: 1
              }
            ]
          },
        {
          id: 'lt10-m2e-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-10/m2e-conv2.mp3',
          image: '/img/listening/two_people/people-1.webp',
          transcript: 'Man: Hi Hannah, how was your trip last weekend?\nWoman: It was great. We went hiking in the national park.\nMan: That sounds fun. Did you see any wildlife?\nWoman: Yes, a few deer and lots of birds.\nMan: Were the trails crowded?\nWoman: Not too bad. We started early in the morning, so it was quiet.',
          questions: [
          {
            id: 'lt10-m2e-conv2-q1',
            stem: 'What did Hannah do last weekend?',
            options: [
                  { id: 'd', text: 'Worked overtime at her weekend job.', correct: false },
                  { id: 'a', text: 'Visited a museum in the city.', correct: false },
                  { id: 'b', text: 'Went hiking in a national park.', correct: true },
                  { id: 'c', text: 'Stayed at a hotel near town.', correct: false }
            ],
            explanation: 'The woman says they went hiking in the national park.',
            points: 1
          },
          {
            id: 'lt10-m2e-conv2-q2',
            stem: 'Why were the trails not crowded?',
            options: [
                  { id: 'd', text: 'The park was closed that day.', correct: false },
                  { id: 'b', text: 'They started early in the morning.', correct: true },
                  { id: 'a', text: 'It was raining hard all morning.', correct: false },
                  { id: 'c', text: 'It was a national holiday weekend.', correct: false }
            ],
            explanation: 'The woman says they started early in the morning, so it was quiet.',
            points: 1
          }
          ]
        }
    ],
    announcements: [
          {
            id: 'lt10-m2e-ann1',
            title: 'Listen to an announcement at a university.',
            audio: '/audio/listening/test-10/m2e-ann1.mp3',
            image: '/img/listening/announcement/male-1.webp',
            speakerGender: 'male',
            transcript: 'Good morning. The shuttle bus to the city center will follow a new route starting next Monday. Instead of stopping at Main Street, the shuttle will now stop at the new transit center on Park Avenue. The transit center is bigger and has more bus connections. The shuttle will run every fifteen minutes during the day and every thirty minutes in the evening. The first shuttle leaves campus at six a.m. and the last one returns at eleven p.m. Maps with the new route are available at the campus information desk.',
            questions: [
              {
                id: 'lt10-m2e-ann1-q1',
                stem: 'What is the announcement about?',
                options: [
                  { id: 'a', text: 'A new shuttle bus route.', correct: true },
                  { id: 'b', text: 'A change in shuttle ticket prices.', correct: false },
                  { id: 'c', text: 'A free shuttle weekend.', correct: false },
                  { id: 'd', text: 'Shuttle service to the airport.', correct: false }
                ],
                explanation: 'The announcement is about a new shuttle route.',
                points: 1
              },
              {
                id: 'lt10-m2e-ann1-q2',
                stem: 'Where will the shuttle stop instead of Main Street?',
                options: [
                  { id: 'b', text: 'The transit center on Park Avenue.', correct: true },
                  { id: 'a', text: 'The library on the main quad.', correct: false },
                  { id: 'c', text: 'The shopping mall on Oak Street.', correct: false },
                  { id: 'd', text: 'City Hall on the downtown square.', correct: false }
                ],
                explanation: 'The shuttle will now stop at the transit center on Park Avenue.',
                points: 1
              }
            ]
          },
        {
          id: 'lt10-m2e-ann2',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-10/m2e-ann2.mp3',
          image: '/img/listening/announcement/male-1.webp',
          speakerGender: 'male',
          transcript: 'Good afternoon. The university art gallery will hold a free guided tour this Saturday at two p.m. The tour will focus on the new contemporary art exhibit, which features works from young artists across the country. The tour lasts about an hour. Space is limited to twenty students, so please sign up in advance at the gallery front desk.',
          questions: [
          {
            id: 'lt10-m2e-ann2-q1',
            stem: 'What is the focus of the guided tour?',
            options: [
                  { id: 'd', text: 'Sculptures from several ancient civilizations.', correct: false },
                  { id: 'b', text: 'The new contemporary art exhibit.', correct: true },
                  { id: 'a', text: 'The history of the building.', correct: false },
                  { id: 'c', text: 'Famous paintings from European museums.', correct: false }
            ],
            explanation: 'The announcement says the tour focuses on the new contemporary art exhibit.',
            points: 1
          },
          {
            id: 'lt10-m2e-ann2-q2',
            stem: 'How can students sign up?',
            options: [
                  { id: 'a', text: 'On the gallery website only.', correct: false },
                  { id: 'd', text: 'By emailing the gallery office.', correct: false },
                  { id: 'c', text: 'By phone during business hours.', correct: false },
                  { id: 'b', text: 'At the gallery front desk.', correct: true }
            ],
            explanation: 'The announcement says to sign up in advance at the gallery front desk.',
            points: 1
          }
          ]
        }
    ],
    academicTalks: [
          {
            id: 'lt10-m2e-talk1',
            title: 'Listen to a talk in a music class.',
            audio: '/audio/listening/test-10/m2e-talk1.mp3',
            image: '/img/listening/announcement/female-1.webp',
            speakerGender: 'female',
            transcript: 'Today we will talk about the piano. The piano is one of the most popular musical instruments in the world. It was invented in Italy around the year 1700. Before the piano, people used instruments like the harpsichord, but the harpsichord could only play notes at one volume. The piano can play soft or loud sounds depending on how the player presses the keys. This made the piano a favorite for many composers. Today, pianos are used in classical music, jazz, pop, and many other styles. Learning to play the piano takes time and practice, but it is a skill that can bring joy for a lifetime.',
            questions: [
              {
                id: 'lt10-m2e-talk1-q1',
                stem: 'Where was the piano invented?',
                options: [
                  { id: 'd', text: 'Austria.', correct: false },
                  { id: 'b', text: 'Italy.', correct: true },
                  { id: 'a', text: 'Germany.', correct: false },
                  { id: 'c', text: 'France.', correct: false }
                ],
                explanation: 'The piano was invented in Italy around the year 1700.',
                points: 1
              },
              {
                id: 'lt10-m2e-talk1-q2',
                stem: 'What can the piano do that the harpsichord could not?',
                options: [
                  { id: 'a', text: 'Play many different notes quickly.', correct: false },
                  { id: 'c', text: 'Be moved around more easily.', correct: false },
                  { id: 'd', text: 'Be played by two people.', correct: false },
                  { id: 'b', text: 'Play soft and loud sounds.', correct: true }
                ],
                explanation: 'The talk says the piano can play soft or loud sounds depending on how the player presses the keys.',
                points: 1
              },
              {
                id: 'lt10-m2e-talk1-q3',
                stem: 'Where was the piano invented?',
                options: [
                  { id: 'b', text: 'Germany.', correct: false },
                  { id: 'c', text: 'Italy.', correct: true },
                  { id: 'a', text: 'England.', correct: false },
                  { id: 'd', text: 'Austria.', correct: false }
                ],
                explanation: 'The talk says the piano was invented in Italy around the year 1700.',
                points: 1
              },
              {
                id: 'lt10-m2e-talk1-q4',
                stem: 'What can the piano do that the harpsichord could not?',
                options: [
                  { id: 'c', text: 'Be carried from one place to another easily.', correct: false },
                  { id: 'a', text: 'Play music that was written in other languages.', correct: false },
                  { id: 'd', text: 'Be played by computers without any person being present.', correct: false },
                  { id: 'b', text: 'Play soft and loud sounds depending on key pressure.', correct: true }
                ],
                explanation: 'The talk says the piano can play soft or loud sounds depending on how the player presses the keys.',
                points: 1
              }
            ]
          }
    ]
  },
};

// Alias for full-test loader, which reads window.LISTENING_TEST_10
window.LISTENING_TEST_10 = window.LISTENING_SECTION_10;
