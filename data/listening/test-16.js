// TOEFL iBT 2026 Listening Practice — Test 16
// Module 1 (Router): 30 questions | Module 2: 17 questions | Total: 47
// Audio: pre-recorded MP3 files in /audio/listening/test-16/

window.LISTENING_SECTION_16 = {
  id: 'listening-test-16',
  title: 'Listening Practice Test 16',
  format: '2026',
  timeLimit: 1740,

  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      introAudio: 'audio/listening/test-16/m1-intro.mp3',

      chooseResponse: [
    {
      id: 'lt16-m1-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m1-cr01.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m trying to figure out which lab section has space.',
      options: [
        { id: 'c', text: 'All the labs require approval from your faculty advisor first.', correct: false },
        { id: 'b', text: 'You should email the lab coordinator directly about the schedule.', correct: false },
        { id: 'a', text: 'I think most of the chemistry labs are full this semester already.', correct: false },
        { id: 'd', text: 'The Tuesday afternoon section still had openings this morning.', correct: true }
      ],
      explanation: 'Specific recent info.',
      points: 1
    },
    {
      id: 'lt16-m1-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m1-cr02.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you receive your acceptance letter for the program?',
      options: [
        { id: 'b', text: 'I heard the program takes about forty students each year.', correct: false },
        { id: 'a', text: 'Applications are still being reviewed by the committee this week.', correct: false },
        { id: 'd', text: 'The program coordinator usually replies within a few business days.', correct: false },
        { id: 'c', text: 'Yes, this morning. I almost can\'t believe it.', correct: true }
      ],
      explanation: 'Direct yes with emotion. The other three describe the program or the review process, so none of them says whether this speaker was accepted.',
      points: 1
    },
    {
      id: 'lt16-m1-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m1-cr03.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I haven\'t decided whether to keep my campus job for next term.',
      options: [
        { id: 'b', text: 'Talk to your supervisor about adjusting hours. Maybe it can still work.', correct: true },
        { id: 'd', text: 'You could try the writing center, they hire tutors every semester.', correct: false },
        { id: 'a', text: 'Most students keep their campus jobs until graduation if they enjoy them.', correct: false },
        { id: 'c', text: 'Campus jobs usually pay slightly better than the off-campus options near downtown.', correct: false }
      ],
      explanation: 'Practical alternative.',
      points: 1
    },
    {
      id: 'lt16-m1-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m1-cr04.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you going to the entrepreneurship pitch contest?',
      options: [
        { id: 'a', text: 'I heard the prize money doubled from last year.', correct: false },
        { id: 'd', text: 'I went last year, but the venue was too small.', correct: false },
        { id: 'c', text: 'The business school runs a similar contest every fall.', correct: false },
        { id: 'b', text: 'I\'m one of the contestants. Wish me luck.', correct: true }
      ],
      explanation: 'Direct involvement.',
      points: 1
    },
    {
      id: 'lt16-m1-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m1-cr05.mp3',
      image: '/img/listening/stock_modal/female-5.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m trying to find an old yearbook from when my mom was here.',
      options: [
        { id: 'd', text: 'Have you tried searching for it on the alumni association website yet?', correct: false },
        { id: 'b', text: 'Most students just throw their yearbooks out a year or two after graduating.', correct: false },
        { id: 'a', text: 'The university archives keep them all. The librarian can help you locate it.', correct: true },
        { id: 'c', text: 'Yearbooks go on sale every May at the student bookstore near the union.', correct: false }
      ],
      explanation: 'Specific resource info.',
      points: 1
    },
    {
      id: 'lt16-m1-cr6',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m1-cr06.mp3',
      image: '/img/listening/stock_modal/male-6.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m worried I haven\'t prepared enough for the interview tomorrow.',
      options: [
        { id: 'd', text: 'You\'ve done a lot already. Get a good night\'s sleep and trust yourself.', correct: true },
        { id: 'a', text: 'Interview questions are usually pretty similar across all the major departments here.', correct: false },
        { id: 'c', text: 'The career center runs mock interviews if you book a slot in advance.', correct: false },
        { id: 'b', text: 'I had mine last month and they mostly asked about my coursework.', correct: false }
      ],
      explanation: 'Reassurance with practical advice.',
      points: 1
    },
    {
      id: 'lt16-m1-cr7',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m1-cr07.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you sign up for the spring break community service trip?',
      options: [
        { id: 'd', text: 'I\'m leading the housing rebuild team on that trip. We have a dozen volunteers already.', correct: true },
        { id: 'b', text: 'These trips usually fill up within two days of registration opening.', correct: false },
        { id: 'c', text: 'My roommate says these trips are the best part of the year.', correct: false },
        { id: 'a', text: 'Sign-ups closed last week according to the email from the dean\'s office.', correct: false }
      ],
      explanation: 'Leading a team on that trip is an indirect yes. The other three describe how sign-ups work or what someone else thinks, so none of them says whether this speaker signed up.',
      points: 1
    },
    {
      id: 'lt16-m1-cr8',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m1-cr08.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m trying to find a printer that\'s not always out of paper.',
      options: [
        { id: 'b', text: 'You can buy a small paper pack at the bookstore if you\'re stuck.', correct: false },
        { id: 'c', text: 'The third-floor printer in the engineering building is usually well stocked.', correct: true },
        { id: 'a', text: 'Campus printers are supposed to be refilled every two hours during the day.', correct: false },
        { id: 'd', text: 'Library staff restock the paper too, but only between scheduled class blocks.', correct: false }
      ],
      explanation: 'Specific recommendation.',
      points: 1
    },
    {
      id: 'lt16-m1-cr9',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m1-cr09.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m thinking about buying a parking pass for next semester.',
      options: [
        { id: 'a', text: 'Parking on the north side of campus is much easier than near the gym.', correct: false },
        { id: 'c', text: 'Some students just take the campus shuttle and skip the whole hassle.', correct: false },
        { id: 'b', text: 'I bought a semester pass last fall but barely drove to campus in winter.', correct: false },
        { id: 'd', text: 'The semester pass is much cheaper per month than monthly passes.', correct: true }
      ],
      explanation: 'Practical comparison info.',
      points: 1
    },
    {
      id: 'lt16-m1-cr10',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m1-cr10.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you finish your group meeting agenda yet?',
      options: [
        { id: 'c', text: 'Last meeting we forgot the agenda and the discussion went way over time.', correct: false },
        { id: 'd', text: 'Meetings are easier when everyone reads the chapter before they arrive.', correct: false },
        { id: 'b', text: 'Our group keeps all the agendas in the shared drive on the cloud.', correct: false },
        { id: 'a', text: 'I drafted it this afternoon. Want to look it over before tomorrow?', correct: true }
      ],
      explanation: 'Status with reciprocal offer.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt16-m1-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-16/m1-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Woman: I just signed up for the public speaking workshop.\nMan: That\'s a useful skill. Why now?\nWoman: I have a big presentation next month and I\'m nervous.\nMan: What\'s it on?\nWoman: My lab results, in front of the whole department. Forty people, maybe more.\nMan: The workshop will definitely help. How long is it?\nWoman: Three sessions over two weeks.\nMan: That\'s perfect timing for your presentation.\nWoman: They record you on the first day and again on the last, so you can see the difference.\nMan: That part sounds painful, but I bet it works.',
      questions: [
        {
          id: 'lt16-m1-conv1-q1',
          stem: 'Why is the woman taking the workshop?',
          options: [
        { id: 'd', text: 'She is preparing for a job interview.', correct: false },
        { id: 'a', text: 'She has a big upcoming presentation.', correct: true },
        { id: 'b', text: 'She wants to lead a campus club.', correct: false },
        { id: 'c', text: 'She is required to for her major.', correct: false }
          ],
          explanation: 'Big upcoming presentation.',
          points: 1
        },        {
          id: 'lt16-m1-conv1-q2',
          stem: 'How long is the workshop?',
          options: [
        { id: 'd', text: 'Four sessions over a full month.', correct: false },
        { id: 'a', text: 'Two sessions in one intensive day.', correct: false },
        { id: 'c', text: 'Three sessions over two weeks.', correct: true },
        { id: 'b', text: 'Weekly sessions across an entire semester.', correct: false }
          ],
          explanation: 'Three sessions over two weeks.',
          points: 1
        }
      ]
    },
    {
      id: 'lt16-m1-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-16/m1-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Man: I noticed the campus radio station is recruiting new DJs.\nWoman: Are you thinking of applying?\nMan: I am. I love music and would enjoy the experience.\nWoman: Do you know what\'s involved?\nMan: A trial show, then weekly broadcasts if they like you.\nWoman: When would you be on the air?\nMan: Late slots at first, ten to midnight on weekdays. The afternoon hours go to returning DJs.\nWoman: That\'s a lot of late nights during exams.\nMan: It\'s only one shift a week, and applications close Friday, so I\'ll decide fast.\nWoman: Sounds fun. Bring me as a guest sometime.',
      questions: [
        {
          id: 'lt16-m1-conv2-q1',
          stem: 'What is the man considering?',
          options: [
        { id: 'd', text: 'Joining the campus newspaper as a writer.', correct: false },
        { id: 'b', text: 'Switching to a media studies major next term.', correct: false },
        { id: 'a', text: 'Producing a music podcast on his own.', correct: false },
        { id: 'c', text: 'Applying to be a campus radio DJ.', correct: true }
          ],
          explanation: 'Applying as radio DJ.',
          points: 1
        },        {
          id: 'lt16-m1-conv2-q2',
          stem: 'What does the application involve?',
          options: [
        { id: 'a', text: 'A sample tape submitted in advance.', correct: false },
        { id: 'c', text: 'An interview with the station manager.', correct: false },
        { id: 'd', text: 'A trial show, then weekly broadcasts.', correct: true },
        { id: 'b', text: 'A series of written qualifying tests.', correct: false }
          ],
          explanation: 'Trial show, then weekly broadcasts.',
          points: 1
        }
      ]
    },
    {
      id: 'lt16-m1-conv3',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-16/m1-conv3.mp3',
      image: '/img/listening/two_people/people-3.webp',
      transcript: 'Woman: I have to give a TED-style talk for my class. It\'s a third of the grade.\nMan: That\'s exciting. Have you picked a topic?\nWoman: I\'m leaning toward something on the importance of curiosity.\nMan: That\'s a great topic. Are you preparing slides?\nWoman: Just a few. The professor said visuals should be minimal.\nMan: How long do you get?\nWoman: Twelve minutes, and the professor times us strictly. My opening is solid, but the ending still feels flat.\nMan: Endings are the hard part. Let me know if you want a practice audience.',
      questions: [
        {
          id: 'lt16-m1-conv3-q1',
          stem: 'What is the woman doing for a class?',
          options: [
        { id: 'a', text: 'Writing a long research paper.', correct: false },
        { id: 'c', text: 'Giving a TED-style talk.', correct: true },
        { id: 'd', text: 'Conducting a campus survey.', correct: false },
        { id: 'b', text: 'Recording a podcast episode.', correct: false }
          ],
          explanation: 'TED-style talk.',
          points: 1
        },        {
          id: 'lt16-m1-conv3-q2',
          stem: 'What does the man offer?',
          options: [
        { id: 'c', text: 'To make the slides.', correct: false },
        { id: 'b', text: 'To be a practice audience.', correct: true },
        { id: 'a', text: 'To choose her topic for her.', correct: false },
        { id: 'd', text: 'To record her presentation.', correct: false }
          ],
          explanation: 'Practice audience.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt16-m1-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-16/m1-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good morning. The communication studies department is hosting a public speaking competition next month. Students from any major can compete, and you do not need to be enrolled in a communication course. Speakers have five minutes to deliver an original speech on a topic of their choice. Notes are allowed, but slides are not. Cash prizes will be awarded to the top three finishers. Sign up at the department office in Hall 200 or online by April 1st. Late entries will not be accepted.',
      questions: [
        {
          id: 'lt16-m1-ann1-q1',
          stem: 'What is being organized?',
          options: [
        { id: 'a', text: 'A student poetry slam.', correct: false },
        { id: 'd', text: 'A campus debate tournament.', correct: false },
        { id: 'b', text: 'A public speaking competition.', correct: true },
        { id: 'c', text: 'A creative writing contest.', correct: false }
          ],
          explanation: 'Public speaking competition.',
          points: 1
        },        {
          id: 'lt16-m1-ann1-q2',
          stem: 'How long does each speaker have?',
          options: [
        { id: 'a', text: 'Five minutes.', correct: true },
        { id: 'd', text: 'Three minutes.', correct: false },
        { id: 'c', text: 'Ten minutes.', correct: false },
        { id: 'b', text: 'Fifteen minutes.', correct: false }
          ],
          explanation: 'Five minutes.',
          points: 1
        }
      ]
    },
    {
      id: 'lt16-m1-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-16/m1-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Attention students. The campus radio station is now accepting applications for new program hosts. Hosts run weekly hour-long shows in any genre, from music to talk to news. No prior experience is needed, and students from every major are encouraged to apply. Training is provided over two Saturday sessions, and the station engineer handles all the equipment during your show. Applications are due by the end of the month. Pick up a form at the station in the basement of Weller Hall.',
      questions: [
        {
          id: 'lt16-m1-ann2-q1',
          stem: 'What positions are being filled?',
          options: [
        { id: 'c', text: 'Campus newspaper editors.', correct: false },
        { id: 'b', text: 'Radio program hosts.', correct: true },
        { id: 'a', text: 'Student podcast producers.', correct: false },
        { id: 'd', text: 'Television news announcers.', correct: false }
          ],
          explanation: 'Radio program hosts.',
          points: 1
        },        {
          id: 'lt16-m1-ann2-q2',
          stem: 'What experience is required?',
          options: [
        { id: 'b', text: 'Strong technical skills.', correct: false },
        { id: 'a', text: 'At least one prior radio show.', correct: false },
        { id: 'd', text: 'No prior experience needed.', correct: true },
        { id: 'c', text: 'A communication studies major.', correct: false }
          ],
          explanation: 'No experience; training provided.',
          points: 1
        }
      ]
    },
    {
      id: 'lt16-m1-ann3',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-16/m1-ann3.mp3',
      image: '/img/listening/announcement/female-3.webp',
      speakerGender: 'female',
      transcript: 'Hello, everyone. The communication studies department will host a workshop on interview skills next Friday at three p.m. in Room 214 of the Student Center. Topics include preparing for common questions, dressing professionally, and following up after the interview. The second hour is a mock interview, so bring a copy of your resume if you want feedback on your answers. All students are welcome, and no registration is required. If you cannot attend, a recording will be posted online. Light refreshments will be served.',
      questions: [
        {
          id: 'lt16-m1-ann3-q1',
          stem: 'What is the workshop about?',
          options: [
        { id: 'c', text: 'Cover letter writing.', correct: false },
        { id: 'a', text: 'Public speaking basics.', correct: false },
        { id: 'd', text: 'Networking strategies.', correct: false },
        { id: 'b', text: 'Interview skills.', correct: true }
          ],
          explanation: 'Interview skills.',
          points: 1
        },        {
          id: 'lt16-m1-ann3-q2',
          stem: 'What topics are covered?',
          options: [
        { id: 'c', text: 'Preparing for questions, dressing.', correct: true },
        { id: 'a', text: 'Salary negotiation only.', correct: false },
        { id: 'd', text: 'How to find job openings.', correct: false },
        { id: 'b', text: 'Just preparing for questions.', correct: false }
          ],
          explanation: 'Preparing, dressing, following up.',
          points: 1
        }
      ]
    },
      ],

      academicTalks: [
    {
      id: 'lt16-m1-talk1',
      title: 'Listen to a talk in a communication studies class.',
      audio: '/audio/listening/test-16/m1-talk1.mp3',
      image: '/img/listening/announcement/female-4.webp',
      speakerGender: 'female',
      transcript: 'Today we\'ll look at nonverbal communication, the messages we send and receive without using words. I want to cover three things: what counts as a nonverbal channel, which signals travel across cultures, and what happens when words and bodies disagree. Researchers estimate that more than half of the meaning in face-to-face conversation comes from nonverbal channels. These include facial expressions, eye contact, posture, gestures, tone of voice, and even the physical distance between speakers. Some nonverbal signals appear to be nearly universal. Studies of facial expressions suggest that basic emotions like happiness, sadness, anger, and surprise are recognized across very different cultures. In one well-known set of studies, adults in communities with almost no exposure to outside media sorted photographs of these expressions much as you or I would. Other signals, however, vary widely. A gesture that\'s friendly in one country may be rude in another, and the comfortable distance between two speakers can differ significantly between cultures. Stand where it feels normal to you, and you may be read as cold or pushy. Nonverbal communication often reinforces what we say with words, but sometimes the two channels conflict. Imagine someone saying, I am perfectly fine, while frowning and avoiding eye contact. Listeners almost always trust the nonverbal signal more than the words. All of this matters in teaching, counseling, healthcare, and international business. Next class, we\'ll look at how nonverbal communication has changed in the era of video calls and text-based chat, where many of these cues are filtered out.',
      questions: [
        {
          id: 'lt16-m1-talk1-q1',
          stem: 'What is the main topic of the talk?',
          options: [
        { id: 'd', text: 'How public speakers prepare and rehearse their speeches.', correct: false },
        { id: 'a', text: 'The history of sign language in different countries.', correct: false },
        { id: 'b', text: 'How young children learn to read facial expressions.', correct: false },
        { id: 'c', text: 'The role of nonverbal signals in face-to-face communication.', correct: true }
          ],
          explanation: 'The lecture is about nonverbal communication.',
          points: 1
        },        {
          id: 'lt16-m1-talk1-q2',
          stem: 'Which nonverbal signals does the speaker say appear to be nearly universal?',
          options: [
        { id: 'c', text: 'Basic facial expressions for emotions like happiness and sadness.', correct: true },
        { id: 'd', text: 'Hand gestures used to greet people in public.', correct: false },
        { id: 'b', text: 'The way people stand when waiting in a line.', correct: false },
        { id: 'a', text: 'The comfortable physical distance between two speakers in conversation.', correct: false }
          ],
          explanation: 'Basic emotional facial expressions are nearly universal.',
          points: 1
        },        {
          id: 'lt16-m1-talk1-q3',
          stem: 'When verbal and nonverbal signals conflict, what do listeners usually trust?',
          options: [
        { id: 'a', text: 'The nonverbal signal.', correct: true },
        { id: 'c', text: 'Whichever one is louder.', correct: false },
        { id: 'd', text: 'The verbal message.', correct: false },
        { id: 'b', text: 'Whichever message comes first.', correct: false }
          ],
          explanation: 'Listeners trust the nonverbal signal more.',
          points: 1
        },        {
          id: 'lt16-m1-talk1-q4',
          stem: 'What will the speaker most likely discuss next?',
          options: [
        { id: 'c', text: 'The early history of public broadcasting in the United States.', correct: false },
        { id: 'b', text: 'How different animals communicate with each other without language.', correct: false },
        { id: 'a', text: 'Different writing systems used in countries around the world.', correct: false },
        { id: 'd', text: 'How nonverbal communication has changed in video calls and chat.', correct: true }
          ],
          explanation: 'She previews communication in digital media.',
          points: 1
        }
      ]
    },
        {
          id: 'lt16-m1-talk2',
          title: 'Listen to a talk in a linguistics class.',
          audio: '/audio/listening/test-16/m1-talk2.mp3',
          image: '/img/listening/announcement/female-1.webp',
          speakerGender: 'female',
          transcript: 'Today let\'s look at how words enter a language. Languages are never finished. Every year speakers add words they need, and a few words quietly drop out of use. I\'ll take you through three main routes in, then say something about how dictionaries keep up. The first route is new technology. When a device or an activity is new, it needs a name, so we get words like smartphone and selfie. Neither existed twenty-five years ago. The second route is borrowing from other languages. English borrowed pizza from Italian and kindergarten from German, and it has taken thousands of other words from French, Arabic, Hindi, and Japanese. Borrowed words usually arrive along with the thing they name, which is why food and music supply so many of them. The third route is blending. Here speakers squeeze two existing words into a single shorter one. Brunch is the classic case: it combines breakfast and lunch, keeping the front of one word and the back of the other. Smog, from smoke and fog, was built the same way. Words can also disappear when they are no longer needed. When an object or a custom vanishes, the word for it usually follows, surviving only in older books. Dictionaries are updated regularly to add new words and to mark old ones as no longer used. Linguists, the scientists who study languages, find these changes interesting, because a dictionary is really a record of what a community needed to talk about. Track the words and you track the culture.',
          questions: [
          {
            id: 'lt16-m1-talk2-q1',
            stem: 'What is the talk mainly about?',
            options: [
                  { id: 'b', text: 'Why most new words in English come from new technology.', correct: false },
                  { id: 'a', text: 'How new words enter a language and how languages change.', correct: true },
                  { id: 'd', text: 'Why English contains more words than any other language.', correct: false },
                  { id: 'c', text: 'How dictionaries decide which words to remove each year.', correct: false }
            ],
            explanation: 'The talk explains how new words enter languages and how languages change.',
            points: 1
          },
          {
            id: 'lt16-m1-talk2-q2',
            stem: 'What is one example of a word made by combining two older words?',
            options: [
                  { id: 'b', text: 'Pizza.', correct: false },
                  { id: 'a', text: 'Smartphone.', correct: false },
                  { id: 'c', text: 'Brunch.', correct: true },
                  { id: 'd', text: 'Kindergarten.', correct: false }
            ],
            explanation: 'The talk gives "brunch" as an example of combining breakfast and lunch.',
            points: 1
          },
              {
                id: 'lt16-m1-talk2-q3',
                stem: 'What example does the speaker give of a word borrowed from another language?',
                options: [
                  { id: 'c', text: 'Brunch, from two English words.', correct: false },
                  { id: 'a', text: 'Smartphone, a new technology term.', correct: false },
                  { id: 'b', text: 'Pizza, borrowed from Italian.', correct: true },
                  { id: 'd', text: 'Garden, a common English word.', correct: false }
                ],
                explanation: 'The speaker mentions that English borrowed "pizza" from Italian and "kindergarten" from German.',
                points: 1
              },
              {
                id: 'lt16-m1-talk2-q4',
                stem: 'What do dictionaries do regularly, according to the speaker?',
                options: [
                  { id: 'c', text: 'Remove all foreign words from their published entries each year.', correct: false },
                  { id: 'b', text: 'Print every new word that anyone has ever said out loud.', correct: false },
                  { id: 'd', text: 'Republish their old editions each year without changing anything.', correct: false },
                  { id: 'a', text: 'Add new words and mark old ones as no longer used.', correct: true }
                ],
                explanation: 'The speaker says dictionaries are updated regularly to add new words and mark old ones as no longer used.',
                points: 1
              }
          ]
        }
      ]
    },

    {
      id: 'module-2',
      title: 'Module 2',
      introAudio: 'audio/listening/test-16/m2-intro.mp3',

      chooseResponse: [
    {
      id: 'lt16-m2-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m2-cr01.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I haven\'t been to the new outdoor gym area yet.',
      options: [
        { id: 'd', text: 'The pull-up bars are excellent. Best in nice weather.', correct: true },
        { id: 'a', text: 'The membership fees went up about twenty dollars this year.', correct: false },
        { id: 'b', text: 'I\'ve been going every morning since it opened last month.', correct: false },
        { id: 'c', text: 'They closed the old gym because there wasn\'t enough demand.', correct: false }
      ],
      explanation: 'Specific positive feature.',
      points: 1
    },
    {
      id: 'lt16-m2-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m2-cr02.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you submit your music recital program?',
      options: [
        { id: 'a', text: 'Recital programs need an official faculty signature before the submission counts.', correct: false },
        { id: 'b', text: 'The format requirements changed this year compared to the previous spring.', correct: false },
        { id: 'd', text: 'I sent it in this morning. Just waiting for approval now.', correct: true },
        { id: 'c', text: 'Performance dates are usually announced about two weeks after the submission.', correct: false }
      ],
      explanation: 'Direct done with status.',
      points: 1
    },
    {
      id: 'lt16-m2-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m2-cr03.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Are you taking the campus tour for prospective students?',
      options: [
        { id: 'c', text: 'Admissions added a virtual tour option just before the summer this year.', correct: false },
        { id: 'd', text: 'Most tour guides volunteer for a semester before becoming coordinators.', correct: false },
        { id: 'b', text: 'I lead one every Saturday morning. Want to come along?', correct: true },
        { id: 'a', text: 'Prospective students get a free dining hall voucher after the tour ends.', correct: false }
      ],
      explanation: 'Direct involvement with invitation.',
      points: 1
    },
    {
      id: 'lt16-m2-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m2-cr04.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m trying to find someone to share the textbook cost with.',
      options: [
        { id: 'd', text: 'Try the library first. They usually keep two or three copies on closed reserve.', correct: false },
        { id: 'b', text: 'The bookstore often sells used copies for about half of what a brand new one costs.', correct: false },
        { id: 'c', text: 'Textbook prices have honestly become unreasonable over the past few years, haven\'t they?', correct: false },
        { id: 'a', text: 'I have a copy already. You can borrow mine for an hour or two each day.', correct: true }
      ],
      explanation: 'Direct practical offer.',
      points: 1
    },
    {
      id: 'lt16-m2-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-16/m2-cr05.mp3',
      image: '/img/listening/stock_modal/female-5.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m worried I might miss the deadline for the conference paper.',
      options: [
        { id: 'b', text: 'I submitted mine last month and the editing rounds were the hardest part.', correct: false },
        { id: 'c', text: 'Email the chair and ask for an extension if you really need one.', correct: true },
        { id: 'd', text: 'Most of the deadline stress usually goes down after the first complete draft.', correct: false },
        { id: 'a', text: 'Conference papers usually take a lot more time than most students expect.', correct: false }
      ],
      explanation: 'Practical action.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt16-m2-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-16/m2-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Man: I\'m trying to become a better listener in conversations.\nWoman: That\'s a great goal. What made you want to work on it?\nMan: I realized I interrupt people a lot without meaning to. My roommate pointed it out.\nWoman: Try counting to two before responding.\nMan: That\'s a simple trick. Does it really work?\nWoman: Yes. It gives you a moment to actually take in what they said, instead of planning your reply while they\'re still talking.\nMan: I do that constantly. Two seconds feels awkward, though.\nWoman: It feels long to you and normal to everyone else. Give it a week.',
      questions: [
        {
          id: 'lt16-m2-conv1-q1',
          stem: 'What is the man trying to improve?',
          options: [
        { id: 'b', text: 'His listening in conversations.', correct: true },
        { id: 'c', text: 'His memory for names.', correct: false },
        { id: 'a', text: 'His public speaking skills.', correct: false },
        { id: 'd', text: 'His writing for his classes.', correct: false }
          ],
          explanation: 'Listening in conversations.',
          points: 1
        },        {
          id: 'lt16-m2-conv1-q2',
          stem: 'What technique does the woman suggest?',
          options: [
        { id: 'a', text: 'Repeating what other people say.', correct: false },
        { id: 'd', text: 'Making more eye contact while listening.', correct: false },
        { id: 'b', text: 'Taking notes during long conversations.', correct: false },
        { id: 'c', text: 'Counting to two before responding.', correct: true }
          ],
          explanation: 'Count to two before responding.',
          points: 1
        }
      ]
    },
    {
      id: 'lt16-m2-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-16/m2-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Woman: I joined a debate club to practice my arguments.\nMan: That sounds intimidating. How was your first meeting?\nWoman: Easier than I expected. Everyone was supportive.\nMan: How do they structure the debates?\nWoman: We get the topic a week in advance and prepare both sides.\nMan: Smart. That way you understand opposing views, too.\nWoman: Right. Last week the topic was banning cars downtown, and I ended up agreeing with the side I had to argue against.\nMan: How often do you meet?\nWoman: Every Wednesday evening in the library seminar room. You should come watch a round.',
      questions: [
        {
          id: 'lt16-m2-conv2-q1',
          stem: 'What did the woman join?',
          options: [
        { id: 'c', text: 'A book club for new readers.', correct: false },
        { id: 'b', text: 'A debate club to practice arguments.', correct: true },
        { id: 'a', text: 'A philosophy reading group on campus.', correct: false },
        { id: 'd', text: 'A speech and essay competition team.', correct: false }
          ],
          explanation: 'Debate club.',
          points: 1
        },        {
          id: 'lt16-m2-conv2-q2',
          stem: 'How are the debates structured?',
          options: [
        { id: 'd', text: 'Members focus on only one side of the topic.', correct: false },
        { id: 'b', text: 'Members debate each topic without any advance preparation.', correct: false },
        { id: 'c', text: 'Topics are revealed only during the debate itself.', correct: false },
        { id: 'a', text: 'Members prepare both sides of the topic in advance.', correct: true }
          ],
          explanation: 'Prepare both sides in advance.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt16-m2-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-16/m2-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Attention students. The campus debate team is hosting tryouts for new members next week. No experience is necessary, and first-year students are welcome. Tryouts focus on quick thinking and verbal skills, not memorized speeches. You will be given a topic on the spot and three minutes to respond, so there is nothing to prepare beforehand. Tryouts are Monday and Tuesday from four to six in the seminar room on the second floor of Kemp Hall. Just show up. If both days conflict, email the captain.',
      questions: [
        {
          id: 'lt16-m2-ann1-q1',
          stem: 'What is happening next week?',
          options: [
        { id: 'a', text: 'A meeting of the debate club.', correct: false },
        { id: 'b', text: 'A debate workshop for new students.', correct: false },
        { id: 'c', text: 'Tryouts for the campus debate team.', correct: true },
        { id: 'd', text: 'A tournament for the debate team.', correct: false }
          ],
          explanation: 'Debate team tryouts.',
          points: 1
        },        {
          id: 'lt16-m2-ann1-q2',
          stem: 'What do tryouts focus on?',
          options: [
        { id: 'c', text: 'Written analysis of formal arguments.', correct: false },
        { id: 'd', text: 'Memorized speeches and prepared notes.', correct: false },
        { id: 'a', text: 'Detailed knowledge of current events.', correct: false },
        { id: 'b', text: 'Quick thinking and verbal skills.', correct: true }
          ],
          explanation: 'Quick thinking and verbal skills.',
          points: 1
        }
      ]
    },
    {
      id: 'lt16-m2-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-16/m2-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Hi, students. The communication studies department is sponsoring a media literacy workshop next month. Participants will learn how to evaluate news sources, identify bias, and avoid misinformation. Each session runs two hours and includes hands-on practice with real headlines from the past year. The workshop is free but requires registration. Sessions are limited to twenty participants, and once a session fills, your name goes on a waiting list for the following week. Register through the department website, and bring a laptop if you have one.',
      questions: [
        {
          id: 'lt16-m2-ann2-q1',
          stem: 'What is the workshop about?',
          options: [
        { id: 'a', text: 'Public speaking and presentation skills.', correct: false },
        { id: 'c', text: 'Career paths in professional journalism.', correct: false },
        { id: 'b', text: 'Media literacy and evaluating sources.', correct: true },
        { id: 'd', text: 'Creative writing and storytelling techniques.', correct: false }
          ],
          explanation: 'Media literacy.',
          points: 1
        },        {
          id: 'lt16-m2-ann2-q2',
          stem: 'How many participants can attend each session?',
          options: [
        { id: 'b', text: 'Thirty.', correct: false },
        { id: 'd', text: 'Unlimited.', correct: false },
        { id: 'c', text: 'Twenty.', correct: true },
        { id: 'a', text: 'Ten.', correct: false }
          ],
          explanation: 'Twenty.',
          points: 1
        }
      ]
    }
      ],

      academicTalks: [
        {
          id: 'lt16-m2-talk1',
          title: 'Listen to a talk in a communication studies class.',
          audio: '/audio/listening/test-16/m2-talk1.mp3',
          image: '/img/listening/announcement/male-3.webp',
          speakerGender: 'male',
          transcript: 'Communication across cultures involves much more than translating between languages. That\'s the claim I want to build on today, first with examples, then with what researchers recommend. Every culture develops its own conventions for personal space, eye contact, gesture, and the appropriate level of directness, and they feel so natural to the people inside them that they are rarely noticed. Take a few cases. A nod that means yes in one culture may mean no in another. A handshake considered firm and confident in one country may seem aggressive in another. Sustained eye contact reads as honesty in some places and as a challenge in others. Directness varies just as much. In some workplaces a flat no is efficient. In others the same word lands as an insult, and a polite refusal sounds more like that would be difficult. These differences become especially important in business, diplomacy, and international study. Notice what is actually going wrong. Misunderstandings often arise not because people speak different languages but because they read the same nonverbal cues differently. Both sides believe they were perfectly clear, and both come away offended. So what do researchers recommend? Those who study cross-cultural communication encourage what they call cultural humility, an attitude that acknowledges one\'s own cultural assumptions and treats other conventions as neither better nor worse, just different. This is a stance, not a rule book of gestures to memorize. It does not eliminate misunderstandings entirely, but it tends to reduce friction and encourage genuine learning when people from different backgrounds work together.',
          questions: [
            {
              id: 'lt16-m2-talk1-q1',
              stem: 'According to the speaker, why are cross-cultural communication problems often not just about language?',
              options: [
                { id: 'c', text: 'Modern translation software now handles most language differences quite reliably', correct: false },
                { id: 'b', text: 'Different cultures interpret nonverbal cues like gestures and personal space differently', correct: true },
                { id: 'd', text: 'Most international communication now happens in writing rather than in person', correct: false },
                { id: 'a', text: 'Most cultures actually share the same basic vocabulary and grammar', correct: false }
              ],
              explanation: 'The speaker explains that misunderstandings often arise from different interpretations of nonverbal cues, not just different languages.',
              points: 1
            },
            {
              id: 'lt16-m2-talk1-q2',
              stem: 'What is "cultural humility" according to the speaker?',
              options: [
                { id: 'd', text: 'The practice of adopting the customs of the host country and setting aside all of your own usual conventions', correct: false },
                { id: 'b', text: 'An attitude that acknowledges one\'s own cultural assumptions and treats other conventions as different rather than better or worse', correct: true },
                { id: 'c', text: 'A formal apology that is offered whenever one offends someone who comes from a different culture', correct: false },
                { id: 'a', text: 'A deliberate strategy of avoiding contact with people whose cultural conventions are different from your own', correct: false }
              ],
              explanation: 'The speaker defines cultural humility as acknowledging one\'s own cultural assumptions and treating other conventions as just different, not better or worse.',
              points: 1
            },
                            {
                id: 'lt16-m2-talk1-q3',
                stem: 'Why does the speaker quote the phrase that would be difficult?',
                options: [
                  { id: 'c', text: 'To show how translation software mishandles polite speech.', correct: false },
                  { id: 'a', text: 'To show that some languages lack a word for no.', correct: false },
                  { id: 'd', text: 'To describe a task that a worker found challenging.', correct: false },
                  { id: 'b', text: 'To give an example of an indirect refusal.', correct: true }
                ],
                explanation: 'The phrase is offered as an example of how a refusal is softened in cultures where a flat no would give offense.',
                points: 1
              },
                            {
                id: 'lt16-m2-talk1-q4',
                stem: 'What does the speaker suggest about practicing cultural humility?',
                options: [
                  { id: 'a', text: 'It eliminates misunderstandings once both sides adopt it.', correct: false },
                  { id: 'c', text: 'It requires memorizing the gestures used in each culture.', correct: false },
                  { id: 'd', text: 'It reduces friction without ending misunderstandings entirely.', correct: true },
                  { id: 'b', text: 'It replaces any need to learn other languages.', correct: false }
                ],
                explanation: 'The speaker presents cultural humility as something that lowers friction and encourages learning without removing misunderstandings altogether.',
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
    introAudio: '/audio/listening/test-16/m2-intro.mp3',
    chooseResponse: [
          {
            id: 'lt16-m2e-cr1',
            type: 'choose_response',
            audio: '/audio/listening/test-16/m2e-cr01.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Could you help me with this assignment?',
            options: [
              { id: 'b', text: 'Assignments are always stressful around this time.', correct: false },
              { id: 'd', text: 'My grade in that class is good.', correct: false },
              { id: 'a', text: 'Sure, what part do you need help with?', correct: true },
              { id: 'c', text: 'I have a lot of assignments this week.', correct: false }
            ],
            explanation: 'The speaker is asking for help.',
            points: 1
          },
          {
            id: 'lt16-m2e-cr2',
            type: 'choose_response',
            audio: '/audio/listening/test-16/m2e-cr02.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'How was your day at work?',
            options: [
              { id: 'b', text: 'It was busy but good.', correct: true },
              { id: 'c', text: 'I really love my job.', correct: false },
              { id: 'd', text: 'Days are always long here.', correct: false },
              { id: 'a', text: 'Work is usually pretty challenging.', correct: false }
            ],
            explanation: 'The speaker is asking about a past day.',
            points: 1
          },
          {
            id: 'lt16-m2e-cr3',
            type: 'choose_response',
            audio: '/audio/listening/test-16/m2e-cr03.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Are you ready to leave?',
            options: [
              { id: 'c', text: 'Goodbyes are always so emotional.', correct: false },
              { id: 'b', text: 'Almost, just give me a minute.', correct: true },
              { id: 'd', text: 'I have a lot of bags.', correct: false },
              { id: 'a', text: 'Leaving is always hard for me.', correct: false }
            ],
            explanation: 'The speaker is asking if ready.',
            points: 1
          },
          {
            id: 'lt16-m2e-cr4',
            type: 'choose_response',
            audio: '/audio/listening/test-16/m2e-cr04.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Did you remember to pay the bill?',
            options: [
              { id: 'c', text: 'I have a lot of bills.', correct: false },
              { id: 'b', text: 'Yes, I paid it online yesterday.', correct: true },
              { id: 'd', text: 'Money is always tight these days.', correct: false },
              { id: 'a', text: 'Bills can be pretty expensive sometimes.', correct: false }
            ],
            explanation: 'The speaker is asking if a bill was paid.',
            points: 1
          },
          {
            id: 'lt16-m2e-cr5',
            type: 'choose_response',
            audio: '/audio/listening/test-16/m2e-cr05.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Would you like another cup of tea?',
            options: [
              { id: 'b', text: 'No, thank you, I am fine.', correct: true },
              { id: 'd', text: 'These cups can break pretty easily.', correct: false },
              { id: 'c', text: 'I love hot drinks in winter.', correct: false },
              { id: 'a', text: 'Tea comes in many different flavors.', correct: false }
            ],
            explanation: 'The speaker is offering more tea.',
            points: 1
          },
    ],
    conversations: [
          {
            id: 'lt16-m2e-conv1',
            title: 'Listen to a conversation.',
            audio: '/audio/listening/test-16/m2e-conv1.mp3',
            image: '/img/listening/two_people/people-1.webp',
            transcript: 'Woman: Hi Sam, are you free this Saturday?\nMan: I think so. Why, what is happening?\nWoman: I am moving into my new apartment. I could use some help.\nMan: Sure, I would be happy to help. What time should I come?\nWoman: Around ten in the morning would be perfect.\nMan: How long do you think it will take?\nWoman: Probably most of the day. I will buy lunch for everyone helping.\nMan: Sounds good. I will see you at ten.',
            questions: [
              {
                id: 'lt16-m2e-conv1-q1',
                stem: 'What is the woman doing on Saturday?',
                options: [
                  { id: 'a', text: 'Going on a weekend trip.', correct: false },
                  { id: 'b', text: 'Moving into a new apartment.', correct: true },
                  { id: 'd', text: 'Going to a friend\'s wedding.', correct: false },
                  { id: 'c', text: 'Hosting a party at home.', correct: false }
                ],
                explanation: 'She is moving into her new apartment.',
                points: 1
              },
              {
                id: 'lt16-m2e-conv1-q2',
                stem: 'What does she ask the man?',
                options: [
                  { id: 'b', text: 'To help her move.', correct: true },
                  { id: 'a', text: 'To pay the rent.', correct: false },
                  { id: 'c', text: 'To borrow his car.', correct: false },
                  { id: 'd', text: 'To find her a roommate.', correct: false }
                ],
                explanation: 'She asks for help moving.',
                points: 1
              }
            ]
          },
        {
          id: 'lt16-m2e-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-16/m2e-conv2.mp3',
          image: '/img/listening/two_people/people-1.webp',
          transcript: 'Man: Hi Grace, did you finish reading the novel for class?\nWoman: Almost. I have about fifty pages left.\nMan: When is the discussion?\nWoman: Wednesday afternoon at two.\nMan: That gives you time. The ending is really good, by the way.\nWoman: No spoilers, please. I want to enjoy it myself.',
          questions: [
          {
            id: 'lt16-m2e-conv2-q1',
            stem: 'How much of the novel does the woman have left to read?',
            options: [
                  { id: 'b', text: 'Fifty pages.', correct: true },
                  { id: 'a', text: 'Ten pages.', correct: false },
                  { id: 'c', text: 'A hundred pages.', correct: false },
                  { id: 'd', text: 'She has finished it.', correct: false }
            ],
            explanation: 'The woman says she has about fifty pages left.',
            points: 1
          },
          {
            id: 'lt16-m2e-conv2-q2',
            stem: 'Why does the woman tell the man not to share more?',
            options: [
                  { id: 'd', text: 'She thinks the man read a different book.', correct: false },
                  { id: 'c', text: 'She has another book to read first.', correct: false },
                  { id: 'a', text: 'She wants to enjoy the ending herself.', correct: true },
                  { id: 'b', text: 'She does not like talking in class.', correct: false }
            ],
            explanation: 'The woman says no spoilers, she wants to enjoy it herself.',
            points: 1
          }
          ]
        }
    ],
    announcements: [
          {
            id: 'lt16-m2e-ann1',
            title: 'Listen to an announcement at a university.',
            audio: '/audio/listening/test-16/m2e-ann1.mp3',
            image: '/img/listening/announcement/female-1.webp',
            speakerGender: 'female',
            transcript: 'Hello everyone. The Recreation Center will offer free swimming lessons starting next month. Lessons are open to all university students and run for six weeks. Each session is one hour long. Beginners and experienced swimmers are both welcome. There are two class times: Tuesday and Thursday at four p.m., and Saturday at ten in the morning. Please bring a swimsuit and towel. Sign-up is required and starts next Monday at the front desk of the Recreation Center.',
            questions: [
              {
                id: 'lt16-m2e-ann1-q1',
                stem: 'What is the announcement about?',
                options: [
                  { id: 'd', text: 'A pool safety class.', correct: false },
                  { id: 'b', text: 'A new pool opening.', correct: false },
                  { id: 'c', text: 'A swim competition.', correct: false },
                  { id: 'a', text: 'Free swimming lessons.', correct: true }
                ],
                explanation: 'The announcement is about free swimming lessons.',
                points: 1
              },
              {
                id: 'lt16-m2e-ann1-q2',
                stem: 'How long does each session last?',
                options: [
                  { id: 'd', text: 'Half a day.', correct: false },
                  { id: 'b', text: 'One hour.', correct: true },
                  { id: 'a', text: 'Thirty minutes.', correct: false },
                  { id: 'c', text: 'Two hours.', correct: false }
                ],
                explanation: 'Each session is one hour long.',
                points: 1
              }
            ]
          },
        {
          id: 'lt16-m2e-ann2',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-16/m2e-ann2.mp3',
          image: '/img/listening/announcement/male-1.webp',
          speakerGender: 'male',
          transcript: 'Good afternoon. The campus film society will screen a classic black-and-white movie this Friday at seven p.m. in the main auditorium. The movie is two hours long. Admission is free for students with a valid ID. Snacks will be sold outside the auditorium. Please silence all phones before the movie begins.',
          questions: [
          {
            id: 'lt16-m2e-ann2-q1',
            stem: 'When and where is the movie being shown?',
            options: [
                  { id: 'd', text: 'Thursday at five p.m. on the main lawn.', correct: false },
                  { id: 'b', text: 'Saturday at noon in the library basement.', correct: false },
                  { id: 'a', text: 'Friday at seven p.m. in the main auditorium.', correct: true },
                  { id: 'c', text: 'Sunday evening at seven in the gym.', correct: false }
            ],
            explanation: 'The announcement says Friday at seven p.m. in the main auditorium.',
            points: 1
          },
          {
            id: 'lt16-m2e-ann2-q2',
            stem: 'How much does it cost students to attend?',
            options: [
                  { id: 'a', text: 'Free with a valid ID.', correct: true },
                  { id: 'c', text: 'Ten dollars at the door.', correct: false },
                  { id: 'd', text: 'Fifteen dollars for a ticket.', correct: false },
                  { id: 'b', text: 'Five dollars for each student.', correct: false }
            ],
            explanation: 'The announcement says admission is free for students with a valid ID.',
            points: 1
          }
          ]
        }
    ],
    academicTalks: [
          {
            id: 'lt16-m2e-talk1',
            title: 'Listen to a talk in a history class.',
            audio: '/audio/listening/test-16/m2e-talk1.mp3',
            image: '/img/listening/announcement/male-1.webp',
            speakerGender: 'male',
            transcript: 'Today let us discuss the early Olympic Games. The Olympic Games started in ancient Greece nearly three thousand years ago. They were held every four years in a city called Olympia, in honor of the Greek god Zeus. Athletes from different Greek cities came to compete in events like running, wrestling, and chariot racing. Only men could participate in the early Olympics, and they competed without clothes. The games were so important that wars between Greek cities were paused so athletes could travel safely to Olympia. The ancient Olympics continued for many centuries before they were eventually stopped. The modern Olympic Games, which started in 1896, are based on these ancient traditions.',
            questions: [
              {
                id: 'lt16-m2e-talk1-q1',
                stem: 'What is the talk mainly about?',
                options: [
                  { id: 'd', text: 'Why running was the most popular event.', correct: false },
                  { id: 'a', text: 'The early Olympic Games in ancient Greece.', correct: true },
                  { id: 'b', text: 'Why the ancient Olympics were eventually stopped.', correct: false },
                  { id: 'c', text: 'How modern Olympic athletes train for competition.', correct: false }
                ],
                explanation: 'The talk is about the early Olympic Games in ancient Greece.',
                points: 1
              },
              {
                id: 'lt16-m2e-talk1-q2',
                stem: 'Why were wars paused during the early Olympics?',
                options: [
                  { id: 'b', text: 'So athletes could travel safely to Olympia.', correct: true },
                  { id: 'a', text: 'Because the Greek gods had commanded it.', correct: false },
                  { id: 'd', text: 'So cities could save money on soldiers.', correct: false },
                  { id: 'c', text: 'Because soldiers wanted to watch the games.', correct: false }
                ],
                explanation: 'Wars were paused so athletes could travel safely to Olympia.',
                points: 1
              },
              {
                id: 'lt16-m2e-talk1-q3',
                stem: 'Where were the early Olympic Games held?',
                options: [
                  { id: 'b', text: 'In a city called Olympia.', correct: true },
                  { id: 'a', text: 'In the city of Athens.', correct: false },
                  { id: 'c', text: 'In the city of Sparta.', correct: false },
                  { id: 'd', text: 'In many cities across Greece.', correct: false }
                ],
                explanation: 'The talk says the games were held in a city called Olympia.',
                points: 1
              },
              {
                id: 'lt16-m2e-talk1-q4',
                stem: 'When did the modern Olympic Games start?',
                options: [
                  { id: 'd', text: '2000.', correct: false },
                  { id: 'b', text: '1896.', correct: true },
                  { id: 'c', text: '1936.', correct: false },
                  { id: 'a', text: '1776.', correct: false }
                ],
                explanation: 'The talk says the modern Olympic Games started in 1896, based on these ancient traditions.',
                points: 1
              }
            ]
          }
    ]
  },
};

// Alias for full-test loader, which reads window.LISTENING_TEST_16
window.LISTENING_TEST_16 = window.LISTENING_SECTION_16;
