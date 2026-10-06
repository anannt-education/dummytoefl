// TOEFL iBT 2026 Listening Practice — Test 8
// Module 1 (Router): 30 questions | Module 2: 17 questions | Total: 47
// Audio: pre-recorded MP3 files in /audio/listening/test-8/

window.LISTENING_SECTION_8 = {
  id: 'listening-test-8',
  title: 'Listening Practice Test 8',
  format: '2026',
  timeLimit: 1740,

  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      introAudio: 'audio/listening/test-8/m1-intro.mp3',

      chooseResponse: [
    {
      id: 'lt8-m1-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m1-cr01.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you remember to renew your library card?',
      options: [
        { id: 'a', text: 'I just did it online. The new one will arrive in the mail.', correct: true },
        { id: 'b', text: 'Libraries serve a lot of roles on campus, not just lending out books.', correct: false },
        { id: 'c', text: 'Renewing is pretty easy once you figure out where the form is.', correct: false },
        { id: 'd', text: 'Cards expire faster than you\'d think, usually after a year or two.', correct: false }
      ],
      explanation: 'Direct confirmation with detail.',
      points: 1
    },
    {
      id: 'lt8-m1-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m1-cr02.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you submitting your art portfolio for the fall show?',
      options: [
        { id: 'c', text: 'Portfolios take work.', correct: false },
        { id: 'a', text: 'Shows are exciting.', correct: false },
        { id: 'd', text: 'Submissions vary.', correct: false },
        { id: 'b', text: 'I am.', correct: true }
      ],
      explanation: 'Direct yes with task remaining.',
      points: 1
    },
    {
      id: 'lt8-m1-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m1-cr03.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m trying to find the lost and found for my notebook.',
      options: [
        { id: 'd', text: 'Notebooks are useful, though most people type their notes now.', correct: false },
        { id: 'a', text: 'It\'s behind the front desk in the student center.', correct: true },
        { id: 'c', text: 'Lost and found boxes turn up in most buildings around campus.', correct: false },
        { id: 'b', text: 'Notebooks get lost all the time, especially around midterms.', correct: false }
      ],
      explanation: 'Specific location.',
      points: 1
    },
    {
      id: 'lt8-m1-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m1-cr04.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Have you decided to apply for the teaching assistant position?',
      options: [
        { id: 'd', text: 'Decisions like that are personal, and everyone weighs it differently.', correct: false },
        { id: 'c', text: 'I sent in my application yesterday. Fingers crossed.', correct: true },
        { id: 'a', text: 'Positions like that help a lot with your resume.', correct: false },
        { id: 'b', text: 'Applications matter a lot more than people realize.', correct: false }
      ],
      explanation: 'Direct done with hopeful note.',
      points: 1
    },
    {
      id: 'lt8-m1-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m1-cr05.mp3',
      image: '/img/listening/stock_modal/female-5.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I can\'t decide whether to take the challenging course or the easier one.',
      options: [
        { id: 'b', text: 'Choices like that matter a lot, though people rarely see it that way.', correct: false },
        { id: 'd', text: 'What\'s your goal? If you want to push yourself, take the harder one.', correct: true },
        { id: 'a', text: 'Challenges build growth, but the hardest courses sometimes hurt a student\'s GPA.', correct: false },
        { id: 'c', text: 'Easy can be tempting, especially when the rest of the semester looks full.', correct: false }
      ],
      explanation: 'Helpful framing question.',
      points: 1
    },
    {
      id: 'lt8-m1-cr6',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m1-cr06.mp3',
      image: '/img/listening/stock_modal/male-6.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you sign up for the dorm cleanup day?',
      options: [
        { id: 'b', text: 'Dorms get dirty fast when everyone is busy with finals.', correct: false },
        { id: 'c', text: 'Cleanup is necessary at the end of just about every semester.', correct: false },
        { id: 'd', text: 'I did. Did you bring gloves like they suggested?', correct: true },
        { id: 'a', text: 'Sign-ups help the organizers plan how much they need.', correct: false }
      ],
      explanation: 'Confirms with practical follow-up.',
      points: 1
    },
    {
      id: 'lt8-m1-cr7',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m1-cr07.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Have you tried the new study app the library is recommending?',
      options: [
        { id: 'c', text: 'The library puts out a new tools list every semester.', correct: false },
        { id: 'a', text: 'There\'s a new one every other month, seems like.', correct: false },
        { id: 'b', text: 'Those apps can be really useful, I think.', correct: false },
        { id: 'd', text: 'Yes, the flashcard feature actually helped me with vocabulary.', correct: true }
      ],
      explanation: 'Specific positive experience.',
      points: 1
    },
    {
      id: 'lt8-m1-cr8',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m1-cr08.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m not sure if I should take a gap year before grad school.',
      options: [
        { id: 'c', text: 'Everybody I know did something different.', correct: false },
        { id: 'b', text: 'I heard grad admissions get tougher every year.', correct: false },
        { id: 'a', text: 'It\'s a big decision, and you\'ll be living with it for a while.', correct: false },
        { id: 'd', text: 'Talk to people who took one. Their honest perspective will help most.', correct: true }
      ],
      explanation: 'Practical advice for decision.',
      points: 1
    },
    {
      id: 'lt8-m1-cr9',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m1-cr09.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you read the syllabus update for our chemistry class?',
      options: [
        { id: 'a', text: 'Syllabi change constantly, especially in the bigger science courses on campus.', correct: false },
        { id: 'b', text: 'Chemistry is challenging, especially the long lab sections that meet twice weekly.', correct: false },
        { id: 'd', text: 'Updates matter, though half the class never reads them anyway.', correct: false },
        { id: 'c', text: 'Yes, the deadline for the final project moved back a week.', correct: true }
      ],
      explanation: 'Specific helpful content.',
      points: 1
    },
    {
      id: 'lt8-m1-cr10',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m1-cr10.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m thinking of joining the marching band this fall.',
      options: [
        { id: 'c', text: 'Music brings joy, and that alone is a reason to keep playing.', correct: false },
        { id: 'a', text: 'Bands need members in every section, and brass is always hardest to fill.', correct: false },
        { id: 'b', text: 'Auditions are in two weeks. I should get my audition piece ready.', correct: true },
        { id: 'd', text: 'Fall is busy, with classes and everything else starting at once.', correct: false }
      ],
      explanation: 'Practical next step.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt8-m1-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-8/m1-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Woman: Did you decide which seminar to take next semester?\nMan: I picked the one on ancient Rome. The professor\'s reviews are amazing.\nWoman: I considered that one too. What time is it offered?\nMan: Tuesday and Thursday afternoons.\nWoman: That conflicts with my lab. I\'ll have to find another option.\nMan: There\'s a similar seminar on medieval history that meets mornings.\nWoman: Same department?\nMan: Same department, and it counts for the same requirement. The reading is heavy, though. Two books a week, plus a research paper.\nWoman: I\'d rather have the reading than lose my lab.',
      questions: [
        {
          id: 'lt8-m1-conv1-q1',
          stem: 'What seminar did the man choose?',
          options: [
        { id: 'a', text: 'A seminar on modern philosophy.', correct: false },
        { id: 'b', text: 'A seminar on world religions.', correct: false },
        { id: 'd', text: 'A seminar on ancient Rome.', correct: true },
        { id: 'c', text: 'A seminar on European art.', correct: false }
          ],
          explanation: 'Ancient Rome seminar.',
          points: 1
        },        {
          id: 'lt8-m1-conv1-q2',
          stem: 'Why can\'t the woman take the same seminar?',
          options: [
        { id: 'a', text: 'It is already full for next semester.', correct: false },
        { id: 'd', text: 'She doesn\'t have the required prerequisites.', correct: false },
        { id: 'b', text: 'She heard mixed reviews about the professor.', correct: false },
        { id: 'c', text: 'It conflicts with her lab schedule.', correct: true }
          ],
          explanation: 'Conflicts with her lab.',
          points: 1
        }
      ]
    },
    {
      id: 'lt8-m1-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-8/m1-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Man: I\'m worried about my upcoming research presentation.\nWoman: When is it scheduled for?\nMan: Next Monday morning. I haven\'t really practiced yet, and it has to run fifteen minutes with questions after.\nWoman: Why don\'t we do a practice run this weekend?\nMan: That would help a lot. Are you free Saturday afternoon?\nWoman: Yes, let\'s meet at three in the seminar room. I\'ll time you and note anything that sounds unclear.\nMan: Perfect. I\'ll bring my slides on a laptop so you can see the charts.\nWoman: Good. The charts are where people usually lose the audience.',
      questions: [
        {
          id: 'lt8-m1-conv2-q1',
          stem: 'What is the man worried about?',
          options: [
        { id: 'd', text: 'Finding a faculty advisor.', correct: false },
        { id: 'a', text: 'His application to a graduate program.', correct: false },
        { id: 'b', text: 'His grade in research methods.', correct: false },
        { id: 'c', text: 'An upcoming research presentation.', correct: true }
          ],
          explanation: 'Research presentation.',
          points: 1
        },        {
          id: 'lt8-m1-conv2-q2',
          stem: 'What do they plan to do Saturday?',
          options: [
        { id: 'd', text: 'Watch a recorded lecture about giving effective research presentations.', correct: false },
        { id: 'c', text: 'Have a practice run at three in the seminar room.', correct: true },
        { id: 'b', text: 'Meet with a writing tutor for some extra help.', correct: false },
        { id: 'a', text: 'Visit the library together to look for a few sources.', correct: false }
          ],
          explanation: 'Practice run Saturday at three.',
          points: 1
        }
      ]
    },
    {
      id: 'lt8-m1-conv3',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-8/m1-conv3.mp3',
      image: '/img/listening/two_people/people-3.webp',
      transcript: 'Woman: I noticed you weren\'t at the lab session yesterday.\nMan: I had a doctor\'s appointment that ran longer than expected.\nWoman: I can share my notes with you tonight.\nMan: That would be great. Did you cover anything important?\nWoman: We started the new experiment, the one with the chemical reactions. It runs three weeks, and we record measurements every session.\nMan: So I\'ve already missed a set of measurements?\nWoman: You can borrow mine. The teaching assistant also opens the lab Friday afternoon if you want to catch up in person.\nMan: I\'ll do that before the next session.',
      questions: [
        {
          id: 'lt8-m1-conv3-q1',
          stem: 'Why did the man miss the lab session?',
          options: [
        { id: 'b', text: 'He confused the date of the lab session.', correct: false },
        { id: 'd', text: 'He had a doctor\'s appointment that ran long.', correct: true },
        { id: 'a', text: 'He had a class that conflicted with it.', correct: false },
        { id: 'c', text: 'He overslept and missed the entire lab session.', correct: false }
          ],
          explanation: 'Doctor appointment ran long.',
          points: 1
        },        {
          id: 'lt8-m1-conv3-q2',
          stem: 'What did the lab cover?',
          options: [
        { id: 'c', text: 'Safety procedures for the rest of the semester.', correct: false },
        { id: 'b', text: 'The start of a new chemical experiment.', correct: true },
        { id: 'd', text: 'A guest lecture from a visiting chemistry researcher.', correct: false },
        { id: 'a', text: 'A review of all of last week\'s material.', correct: false }
          ],
          explanation: 'Started a new chemical reactions experiment.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt8-m1-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-8/m1-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good morning. The geology department is organizing a field trip to the regional natural history museum next Saturday. Transportation is provided. The bus departs from the science building at nine a.m. and returns by four p.m. Sign up by Wednesday in the department office, room 210. Space is limited to forty students, and the department covers admission. A curator will lead a guided tour of the mineral collection, so bring a notebook. Lunch is on your own, and the museum cafe takes cash only.',
      questions: [
        {
          id: 'lt8-m1-ann1-q1',
          stem: 'What is being organized?',
          options: [
        { id: 'c', text: 'A camping trip in the mountains this spring.', correct: false },
        { id: 'd', text: 'A field trip to a natural history museum.', correct: true },
        { id: 'b', text: 'A tour of a regional mine and quarry.', correct: false },
        { id: 'a', text: 'A geology field research project for course credit.', correct: false }
          ],
          explanation: 'Field trip to museum.',
          points: 1
        },        {
          id: 'lt8-m1-ann1-q2',
          stem: 'When do students need to sign up by?',
          options: [
        { id: 'a', text: 'Saturday.', correct: false },
        { id: 'd', text: 'Friday.', correct: false },
        { id: 'c', text: 'Wednesday.', correct: true },
        { id: 'b', text: 'Monday.', correct: false }
          ],
          explanation: 'Wednesday.',
          points: 1
        }
      ]
    },
    {
      id: 'lt8-m1-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-8/m1-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Hello, students. The university is offering a series of free lectures on the geology of our region. Talks cover the formation of local mountains, valleys, and rivers. Lectures take place every Wednesday in March at five p.m. in the geology lecture hall, room two ten. No registration is needed, and seats are first come, first served. The first talk explains why the ridge behind campus is made of sandstone. The final talk ends with a photo tour of the river gorge to the north.',
      questions: [
        {
          id: 'lt8-m1-ann2-q1',
          stem: 'What is the lecture series about?',
          options: [
        { id: 'b', text: 'The history of modern geological research.', correct: false },
        { id: 'c', text: 'The geology of the local region.', correct: true },
        { id: 'd', text: 'The identification of common rock minerals.', correct: false },
        { id: 'a', text: 'Volcanic activity around the world today.', correct: false }
          ],
          explanation: 'Local region geology.',
          points: 1
        },        {
          id: 'lt8-m1-ann2-q2',
          stem: 'When do the lectures take place?',
          options: [
        { id: 'd', text: 'Every Friday in March at noon.', correct: false },
        { id: 'b', text: 'Once a month during the spring semester.', correct: false },
        { id: 'a', text: 'Every Tuesday in March at five p.m.', correct: false },
        { id: 'c', text: 'Every Wednesday in March at five p.m.', correct: true }
          ],
          explanation: 'Every Wednesday March 5 PM.',
          points: 1
        }
      ]
    },
    {
      id: 'lt8-m1-ann3',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-8/m1-ann3.mp3',
      image: '/img/listening/announcement/female-3.webp',
      speakerGender: 'female',
      transcript: 'Attention all students. The university is updating the campus emergency notification system. Please log into your student account and verify your contact information by the end of next week. Check both your cell phone number and the backup email address on file. This ensures you\'ll receive timely alerts in the event of an emergency, such as a severe storm or a sudden building closure. The update takes only a few minutes. Old numbers stay in the system until you correct them.',
      questions: [
        {
          id: 'lt8-m1-ann3-q1',
          stem: 'What does the announcement ask students to do?',
          options: [
        { id: 'c', text: 'Verify their contact information.', correct: true },
        { id: 'b', text: 'Download a new safety app.', correct: false },
        { id: 'a', text: 'Sign up for emergency training.', correct: false },
        { id: 'd', text: 'Attend a safety meeting.', correct: false }
          ],
          explanation: 'Verify contact info.',
          points: 1
        },        {
          id: 'lt8-m1-ann3-q2',
          stem: 'Why is this important?',
          options: [
        { id: 'b', text: 'To avoid paying late fees.', correct: false },
        { id: 'a', text: 'To meet a state requirement.', correct: false },
        { id: 'd', text: 'To register for emergency credits.', correct: false },
        { id: 'c', text: 'To receive timely emergency alerts.', correct: true }
          ],
          explanation: 'Receive emergency alerts.',
          points: 1
        }
      ]
    },
      ],

      academicTalks: [
    {
      id: 'lt8-m1-talk1',
      title: 'Listen to a talk in a geology class.',
      audio: '/audio/listening/test-8/m1-talk1.mp3',
      image: '/img/listening/announcement/female-4.webp',
      speakerGender: 'female',
      transcript: 'Today we will look at plate tectonics, the theory that explains many of the most dramatic features of our planet, from earthquakes to mountain ranges. I\'ll describe what the plates are, what happens where they meet, and how the theory finally won acceptance. The Earth\'s outer layer, called the lithosphere, is broken into a series of large pieces known as tectonic plates. These plates rest on a hotter, partially fluid layer beneath them, and they move slowly across the Earth\'s surface, usually at just a few centimeters per year. That is roughly the speed your fingernails grow, so in a human lifetime you would notice nothing. Over millions of years, it rearranges the globe. Most of the action happens at the boundaries where plates meet, and four things can happen there. When two plates push against each other, the crust buckles and folds, lifting up mountain ranges over millions of years. When one plate slides under another, in a process called subduction, deep ocean trenches form, and volcanic activity often follows. When plates pull apart, hot material rises from below and creates new crust. And when plates slide past each other horizontally, friction builds up and then releases in powerful earthquakes. The theory was widely accepted only in the 1960s, after scientists collected magnetic evidence from the ocean floor showing that continents had moved over geological time. Next class, we will look at specific examples of each plate boundary type, including the Himalayas, the Mariana Trench, and the San Andreas Fault.',
      questions: [
        {
          id: 'lt8-m1-talk1-q1',
          stem: 'What is the main idea of the talk?',
          options: [
        { id: 'a', text: 'The history of mountain climbing as a modern scientific field.', correct: false },
        { id: 'd', text: 'How ocean currents shape coastal regions around the world.', correct: false },
        { id: 'c', text: 'A theory that explains many of Earth\'s major geological features.', correct: true },
        { id: 'b', text: 'How earthquakes are predicted today using modern scientific instruments.', correct: false }
          ],
          explanation: 'The lecture introduces plate tectonics.',
          points: 1
        },        {
          id: 'lt8-m1-talk1-q2',
          stem: 'What happens when one plate slides under another?',
          options: [
        { id: 'a', text: 'Deep trenches and volcanic activity often form.', correct: true },
        { id: 'c', text: 'A new ocean basin opens.', correct: false },
        { id: 'b', text: 'A long mountain range rises along the boundary.', correct: false },
        { id: 'd', text: 'The process is called continental drift.', correct: false }
          ],
          explanation: 'Subduction creates trenches and volcanic activity.',
          points: 1
        },        {
          id: 'lt8-m1-talk1-q3',
          stem: 'Why does the speaker mention evidence from the ocean floor?',
          options: [
        { id: 'a', text: 'To compare the thickness of ocean and continental crust.', correct: false },
        { id: 'c', text: 'To describe deep-sea drilling for oil and natural gas.', correct: false },
        { id: 'd', text: 'To explain a method for measuring global sea levels.', correct: false },
        { id: 'b', text: 'To show how seafloor magnetic patterns supported plate tectonics.', correct: true }
          ],
          explanation: 'Magnetic evidence from the seafloor confirmed the theory.',
          points: 1
        },        {
          id: 'lt8-m1-talk1-q4',
          stem: 'What will the speaker most likely discuss next?',
          options: [
        { id: 'c', text: 'The role of water in chemical weathering.', correct: false },
        { id: 'a', text: 'The internal composition of the Earth\'s core.', correct: false },
        { id: 'd', text: 'Specific examples of each plate boundary type.', correct: true },
        { id: 'b', text: 'Famous geologists of the late nineteenth century.', correct: false }
          ],
          explanation: 'She previews Himalayas, Mariana Trench, San Andreas.',
          points: 1
        }
      ]
    },
        {
          id: 'lt8-m1-talk2',
          title: 'Listen to a talk in a linguistics class.',
          audio: '/audio/listening/test-8/m1-talk2.mp3',
          image: '/img/listening/announcement/female-1.webp',
          speakerGender: 'female',
          transcript: 'Today let us trace the history of the alphabet, and notice one thing as we go: it was not invented once. It was borrowed and adapted, step by step. The alphabet we use to write English is called the Latin alphabet, and its earliest form developed about three thousand years ago. Writing itself, though, is much older, and the earliest writing used no letters at all. Before alphabets, people used pictures to represent words. The ancient Egyptians, for example, used hundreds of small pictures called hieroglyphs. A system like that works, but consider the cost. If every word needs its own sign, a learner has to memorize hundreds of signs before writing anything useful, so reading and writing stayed in the hands of a small trained class of scribes. The first true alphabet, where each symbol represented a sound rather than a whole word, was developed by a people called the Phoenicians. Their alphabet had only twenty-two letters, all of them consonants. That is the breakthrough: twenty-two signs instead of hundreds. And the Phoenicians were traders working across the Mediterranean, so their writing traveled with their ships. Later, the Greeks borrowed the Phoenician alphabet and added vowels, which made written words match spoken words far more closely. The Romans then borrowed and changed the Greek alphabet, and that gave us the Latin alphabet we still use today. So the letters on your page carry a long history of borrowing, and each step made writing easier to learn.',
          questions: [
          {
            id: 'lt8-m1-talk2-q1',
            stem: 'What is the talk mainly about?',
            options: [
                  { id: 'd', text: 'The most beautiful alphabets in all of history.', correct: false },
                  { id: 'b', text: 'How to teach young children to write clearly.', correct: false },
                  { id: 'c', text: 'Why some alphabets have far more letters than others.', correct: false },
                  { id: 'a', text: 'How the Latin alphabet developed from earlier writing systems.', correct: true }
            ],
            explanation: 'The talk traces how the Latin alphabet developed.',
            points: 1
          },
          {
            id: 'lt8-m1-talk2-q2',
            stem: 'What did the Phoenicians create?',
            options: [
                  { id: 'a', text: 'A picture-based writing system with hundreds of signs.', correct: false },
                  { id: 'd', text: 'The first dictionary of a spoken language.', correct: false },
                  { id: 'b', text: 'The first true alphabet, with twenty-two consonants.', correct: true },
                  { id: 'c', text: 'A new system for teaching reading and writing.', correct: false }
            ],
            explanation: 'The talk says the Phoenicians developed the first true alphabet, with twenty-two consonants.',
            points: 1
          },
              {
                id: 'lt8-m1-talk2-q3',
                stem: 'What did the ancient Egyptians use to represent words?',
                options: [
                  { id: 'b', text: 'Hundreds of small pictures called hieroglyphs.', correct: true },
                  { id: 'd', text: 'Signs that represented spoken sounds only.', correct: false },
                  { id: 'a', text: 'Numbers arranged in long vertical columns.', correct: false },
                  { id: 'c', text: 'A simple alphabet with few letters.', correct: false }
                ],
                explanation: 'The speaker says the ancient Egyptians used hundreds of small pictures called hieroglyphs.',
                points: 1
              },
              {
                id: 'lt8-m1-talk2-q4',
                stem: 'What did the Greeks add to the Phoenician alphabet?',
                options: [
                  { id: 'b', text: 'Vowels.', correct: true },
                  { id: 'd', text: 'Punctuation marks.', correct: false },
                  { id: 'a', text: 'More consonants.', correct: false },
                  { id: 'c', text: 'Numbers.', correct: false }
                ],
                explanation: 'The speaker says the Greeks borrowed the Phoenician alphabet and added vowels.',
                points: 1
              }
          ]
        }
      ]
    },

    {
      id: 'module-2',
      title: 'Module 2',
      introAudio: 'audio/listening/test-8/m2-intro.mp3',

      chooseResponse: [
    {
      id: 'lt8-m2-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m2-cr01.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Have you used the new online tutoring service yet?',
      options: [
        { id: 'a', text: 'I tried it last week. The math tutor was actually really helpful.', correct: true },
        { id: 'b', text: 'Tutoring helps a lot, especially when you get stuck on problem sets.', correct: false },
        { id: 'd', text: 'Online services grow every year, and the campus keeps adding more of them.', correct: false },
        { id: 'c', text: 'Tutors vary a lot, so it really depends who you get.', correct: false }
      ],
      explanation: 'Specific positive experience.',
      points: 1
    },
    {
      id: 'lt8-m2-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m2-cr02.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you get the scholarship you applied for last semester?',
      options: [
        { id: 'b', text: 'Scholarships fund tuition for many students.', correct: false },
        { id: 'c', text: 'I made the second round.', correct: true },
        { id: 'a', text: 'Applications take a lot of effort.', correct: false },
        { id: 'd', text: 'Results vary from year to year.', correct: false }
      ],
      explanation: 'Update on progress.',
      points: 1
    },
    {
      id: 'lt8-m2-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m2-cr03.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m trying to choose between two concentrations in my major.',
      options: [
        { id: 'd', text: 'Concentrations focus your electives, but they also affect which faculty you build relationships with.', correct: false },
        { id: 'a', text: 'Choices like that matter more than most people are willing to admit.', correct: false },
        { id: 'b', text: 'Majors have several paths, and each one seems to lead somewhere different.', correct: false },
        { id: 'c', text: 'Look at the upper-level classes for each. That\'ll give you a real sense.', correct: true }
      ],
      explanation: 'Practical method to decide.',
      points: 1
    },
    {
      id: 'lt8-m2-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m2-cr04.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you participating in the club sports tournament?',
      options: [
        { id: 'c', text: 'I am, on the volleyball team. We have practice every Tuesday.', correct: true },
        { id: 'b', text: 'Clubs offer a fun way to meet people outside of class.', correct: false },
        { id: 'd', text: 'Tournaments really bring out the competitive side in just about everyone.', correct: false },
        { id: 'a', text: 'Sports build community, and the tournaments always draw a pretty big crowd.', correct: false }
      ],
      explanation: 'Direct confirmation with detail.',
      points: 1
    },
    {
      id: 'lt8-m2-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-8/m2-cr05.mp3',
      image: '/img/listening/stock_modal/female-5.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Do you know if the campus safety office gives out personal alarms?',
      options: [
        { id: 'c', text: 'Safety is important, especially when you are walking across campus at night.', correct: false },
        { id: 'b', text: 'Offices serve students in a lot of ways, probably more than people notice.', correct: false },
        { id: 'a', text: 'They do, free with your student ID. I picked one up last semester.', correct: true },
        { id: 'd', text: 'Alarms can help, though most people never actually end up using them.', correct: false }
      ],
      explanation: 'Direct yes with personal verification.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt8-m2-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-8/m2-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Man: Did you sign up for the campus blood drive?\nWoman: I did. It\'s my first time donating.\nMan: Good for you. Drink a lot of water beforehand.\nWoman: Thanks for the tip. Anything else I should know?\nMan: Eat a real breakfast. They give snacks afterward but you\'ll feel better.\nWoman: Got it. I\'m donating Wednesday morning at ten.\nMan: Bring your student ID. They won\'t check you in without it.\nWoman: Good thing you told me. How long does it take?\nMan: About an hour with the paperwork. The donation itself is quick.\nWoman: That works. I don\'t have class until one.',
      questions: [
        {
          id: 'lt8-m2-conv1-q1',
          stem: 'What is the woman doing for the first time?',
          options: [
        { id: 'a', text: 'Joining a club.', correct: false },
        { id: 'b', text: 'Going to a campus event.', correct: false },
        { id: 'c', text: 'Eating at the dining hall.', correct: false },
        { id: 'd', text: 'Donating blood.', correct: true }
          ],
          explanation: 'First time donating blood.',
          points: 1
        },        {
          id: 'lt8-m2-conv1-q2',
          stem: 'What does the man advise her to do?',
          options: [
        { id: 'd', text: 'Wear loose clothing with comfortable short sleeves.', correct: false },
        { id: 'a', text: 'Skip breakfast on the day of the donation.', correct: false },
        { id: 'b', text: 'Drink water and eat a real breakfast.', correct: true },
        { id: 'c', text: 'Bring a friend along for moral support.', correct: false }
          ],
          explanation: 'Drink water and eat breakfast.',
          points: 1
        }
      ]
    },
    {
      id: 'lt8-m2-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-8/m2-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Woman: Are you going to apply for a position as a teaching assistant?\nMan: I\'ve been thinking about it. Have you applied before?\nWoman: Yes, last semester. The application is straightforward.\nMan: Did you need a recommendation letter?\nWoman: Just one from a professor in the subject area.\nMan: Then I should ask Professor Park. She knows my work well.\nWoman: Ask her soon. Applications close on the fifteenth.\nMan: I\'ll email her tonight. What\'s the job like?\nWoman: Two discussion sections a week, plus grading on Sunday nights.\nMan: I can manage that. Does it pay anything?\nWoman: A stipend that covers my rent.',
      questions: [
        {
          id: 'lt8-m2-conv2-q1',
          stem: 'What is the man considering?',
          options: [
        { id: 'c', text: 'Joining a research lab this semester.', correct: false },
        { id: 'b', text: 'Switching to a different faculty advisor.', correct: false },
        { id: 'd', text: 'Applying for a teaching assistant position.', correct: true },
        { id: 'a', text: 'Taking an extra class next semester.', correct: false }
          ],
          explanation: 'Applying for TA position.',
          points: 1
        },        {
          id: 'lt8-m2-conv2-q2',
          stem: 'What does the woman say is required?',
          options: [
        { id: 'c', text: 'A formal interview with a panel of three faculty.', correct: false },
        { id: 'a', text: 'A recommendation from a professor in the subject area.', correct: true },
        { id: 'b', text: 'Two recommendation letters from professors in different departments.', correct: false },
        { id: 'd', text: 'A short video of a sample teaching demonstration.', correct: false }
          ],
          explanation: 'One recommendation from subject professor.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt8-m2-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-8/m2-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good morning, students. The campus is participating in an Earth Day event next Friday. Activities include tree planting, recycling drives, and educational workshops on environmental topics. All events are free and open to the campus community. The opening ceremony begins at ten a.m. in the main quad. Tree planting starts right afterward near the south parking lot, so wear old shoes. Bring used electronics to the recycling tables, though batteries and paint cannot be accepted. Volunteers sign in at the information tent by nine thirty.',
      questions: [
        {
          id: 'lt8-m2-ann1-q1',
          stem: 'What event is being announced?',
          options: [
        { id: 'b', text: 'An environmental science conference on campus.', correct: false },
        { id: 'a', text: 'A weekly campus farmers market.', correct: false },
        { id: 'c', text: 'A campus Earth Day celebration.', correct: true },
        { id: 'd', text: 'A free outdoor music festival.', correct: false }
          ],
          explanation: 'Earth Day event.',
          points: 1
        },        {
          id: 'lt8-m2-ann1-q2',
          stem: 'What activities are mentioned?',
          options: [
        { id: 'b', text: 'Tree planting, recycling drives.', correct: true },
        { id: 'c', text: 'A guided nature hike.', correct: false },
        { id: 'd', text: 'Speeches by environmental scientists.', correct: false },
        { id: 'a', text: 'Tree planting and nothing else.', correct: false }
          ],
          explanation: 'Tree planting, recycling, workshops.',
          points: 1
        }
      ]
    },
    {
      id: 'lt8-m2-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-8/m2-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Attention residents of East Hall. The hot water in the building will be temporarily shut off Saturday morning from eight to noon. This is part of routine plumbing maintenance. Crews will replace two aging valves in the basement. Service will be restored by lunch time. Cold water stays on, and the first floor laundry room remains open. For a hot shower that morning, the recreation center locker rooms open at seven. We apologize for any inconvenience and thank you for your patience.',
      questions: [
        {
          id: 'lt8-m2-ann2-q1',
          stem: 'What is the announcement about?',
          options: [
        { id: 'a', text: 'A new water heater installation.', correct: false },
        { id: 'c', text: 'A scheduled electrical power outage.', correct: false },
        { id: 'b', text: 'A scheduled hot water shutoff.', correct: true },
        { id: 'd', text: 'A planned building evacuation drill.', correct: false }
          ],
          explanation: 'Hot water shutoff.',
          points: 1
        },        {
          id: 'lt8-m2-ann2-q2',
          stem: 'When will service be restored?',
          options: [
        { id: 'b', text: 'By dinner time.', correct: false },
        { id: 'a', text: 'By lunch time.', correct: true },
        { id: 'd', text: 'By breakfast time.', correct: false },
        { id: 'c', text: 'By the next day.', correct: false }
          ],
          explanation: 'By lunch time.',
          points: 1
        }
      ]
    }
      ],

      academicTalks: [
        {
          id: 'lt8-m2-talk1',
          title: 'Listen to a talk in a geology class.',
          audio: '/audio/listening/test-8/m2-talk1.mp3',
          image: '/img/listening/announcement/male-3.webp',
          speakerGender: 'male',
          transcript: 'Volcanic islands give geologists a rare chance to watch the Earth\'s interior at work, and today I want to use the Hawaiian chain to show how that works and what it tells us about the plates. Start with a puzzle. Most of the world\'s volcanoes sit along plate boundaries, where one plate grinds into another. Hawaii doesn\'t. It sits near the middle of the Pacific plate, thousands of miles from the nearest boundary. The accepted explanation is a stationary plume of hot material rising from deep within the mantle, what geologists call a hot spot. As the Pacific plate moves slowly over this plume, magma punches through the ocean floor and, eruption after eruption, gradually builds an island above the waves. Here\'s the key point. The plume stays put, but the plate does not. Over millions of years the moving plate carries each island away from the hot spot, its magma supply is cut off, and a new island begins to form behind it. The result is a chain of islands of progressively older age. Erosion eventually wears the older islands down to coral reefs and underwater seamounts. The ages confirm the picture. Kauai, at the northwestern end, is roughly five million years old. The largest island, at the southeastern end, is less than half a million. By measuring the age of rocks across the chain, geologists can calculate the speed and direction of plate movement with surprising precision, a few inches a year. One caution: the plume itself may not be perfectly fixed.',
          questions: [
            {
              id: 'lt8-m2-talk1-q1',
              stem: 'According to the speaker, what causes the Hawaiian islands to form?',
              options: [
                { id: 'a', text: 'Repeated underwater earthquakes near a fault line on the deep ocean floor', correct: false },
                { id: 'd', text: 'The slow buildup of coral reefs on the seafloor over millions of years', correct: false },
                { id: 'c', text: 'The slow collision of two tectonic plates along a shared plate boundary', correct: false },
                { id: 'b', text: 'A stationary plume of hot material with the Pacific plate moving over it', correct: true }
              ],
              explanation: 'The speaker explains the islands form as the Pacific plate moves over a stationary mantle plume.',
              points: 1
            },
            {
              id: 'lt8-m2-talk1-q2',
              stem: 'Why do geologists measure the age of rocks across the island chain?',
              options: [
                { id: 'a', text: 'To predict when the next volcanic eruption will probably occur', correct: false },
                { id: 'd', text: 'To identify which of the islands have already become extinct', correct: false },
                { id: 'c', text: 'To estimate the age of the surrounding coral reefs', correct: false },
                { id: 'b', text: 'To calculate the speed and direction of tectonic plate movement', correct: true }
              ],
              explanation: 'The speaker says measuring rock ages across the chain allows geologists to calculate plate movement.',
              points: 1
            },
                            {
                id: 'lt8-m2-talk1-q3',
                stem: 'According to the speaker, what happens to the older islands?',
                options: [
                  { id: 'c', text: 'They erupt more violently once the magma supply stops.', correct: false },
                  { id: 'a', text: 'Erosion reduces them to coral reefs and undersea seamounts.', correct: true },
                  { id: 'b', text: 'They drift back toward the hot spot over time.', correct: false },
                  { id: 'd', text: 'They pull the hot spot slowly along behind them.', correct: false }
                ],
                explanation: 'The speaker says erosion eventually wears the older islands down into coral reefs and underwater seamounts.',
                points: 1
              },
                            {
                id: 'lt8-m2-talk1-q4',
                stem: 'What does the speaker\'s closing caution suggest about the explanation?',
                options: [
                  { id: 'b', text: 'The Pacific plate may have recently stopped moving entirely.', correct: false },
                  { id: 'a', text: 'The plate stays put while the plume drifts away.', correct: false },
                  { id: 'c', text: 'The plume may not be as fixed as assumed.', correct: true },
                  { id: 'd', text: 'The islands\' ages run the opposite way along the chain.', correct: false }
                ],
                explanation: 'The speaker ends by noting that the plume itself may not be perfectly fixed, which qualifies an assumption the whole account rests on.',
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
    introAudio: '/audio/listening/test-8/m2-intro.mp3',
    chooseResponse: [
          {
            id: 'lt8-m2e-cr1',
            type: 'choose_response',
            audio: '/audio/listening/test-8/m2e-cr01.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Could I make an appointment for next week?',
            options: [
              { id: 'a', text: 'Sure, what day works best for you?', correct: true },
              { id: 'd', text: 'The office is downtown near the station.', correct: false },
              { id: 'c', text: 'I am very busy these days.', correct: false },
              { id: 'b', text: 'Appointments are usually on Tuesday afternoons.', correct: false }
            ],
            explanation: 'The speaker is asking to schedule, so the correct response responds to that.',
            points: 1
          },
          {
            id: 'lt8-m2e-cr2',
            type: 'choose_response',
            audio: '/audio/listening/test-8/m2e-cr02.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Did you watch the game last night?',
            options: [
              { id: 'b', text: 'Yes, our team won.', correct: true },
              { id: 'd', text: 'I have friends on the team.', correct: false },
              { id: 'c', text: 'Sports are popular around here.', correct: false },
              { id: 'a', text: 'Games are exciting to watch.', correct: false }
            ],
            explanation: 'The speaker is asking about a past event.',
            points: 1
          },
          {
            id: 'lt8-m2e-cr3',
            type: 'choose_response',
            audio: '/audio/listening/test-8/m2e-cr03.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Are you ready to order?',
            options: [
              { id: 'a', text: 'I will have the chicken sandwich.', correct: true },
              { id: 'd', text: 'I really love trying new food.', correct: false },
              { id: 'c', text: 'Menus can be very confusing sometimes.', correct: false },
              { id: 'b', text: 'Restaurants are nice on the weekend.', correct: false }
            ],
            explanation: 'The speaker is asking if the listener is ready to order food.',
            points: 1
          },
          {
            id: 'lt8-m2e-cr4',
            type: 'choose_response',
            audio: '/audio/listening/test-8/m2e-cr04.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Would you mind taking our picture?',
            options: [
              { id: 'd', text: 'I do not photograph well.', correct: false },
              { id: 'b', text: 'Sure, just push this button.', correct: true },
              { id: 'a', text: 'I have a nice camera.', correct: false },
              { id: 'c', text: 'Photos are fun to take.', correct: false }
            ],
            explanation: 'The speaker is making a request, so the correct response agrees.',
            points: 1
          },
          {
            id: 'lt8-m2e-cr5',
            type: 'choose_response',
            audio: '/audio/listening/test-8/m2e-cr05.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'How was the bus ride home?',
            options: [
              { id: 'd', text: 'Driving is usually a lot faster.', correct: false },
              { id: 'a', text: 'The bus was full but on time.', correct: true },
              { id: 'c', text: 'I take the bus pretty often.', correct: false },
              { id: 'b', text: 'Buses run all day on weekdays.', correct: false }
            ],
            explanation: 'The speaker is asking about a past experience.',
            points: 1
          },
    ],
    conversations: [
          {
            id: 'lt8-m2e-conv1',
            title: 'Listen to a conversation.',
            audio: '/audio/listening/test-8/m2e-conv1.mp3',
            image: '/img/listening/two_people/people-1.webp',
            transcript: 'Woman: Hi Sam, are you ready for your driving test next week?\nMan: I am a little nervous. I have been practicing every day.\nWoman: Where do you usually practice?\nMan: My dad takes me to the empty parking lot near the mall.\nWoman: That sounds like a good place to learn.\nMan: Yes, but I also need to practice on the highway.\nWoman: Maybe you can take a few lessons with a driving school.\nMan: That is a good idea. I will look into it tonight.',
            questions: [
              {
                id: 'lt8-m2e-conv1-q1',
                stem: 'What is the man preparing for?',
                options: [
                  { id: 'b', text: 'A driving test.', correct: true },
                  { id: 'a', text: 'A job interview.', correct: false },
                  { id: 'c', text: 'A school exam.', correct: false },
                  { id: 'd', text: 'A road trip.', correct: false }
                ],
                explanation: 'The man is preparing for his driving test next week.',
                points: 1
              },
              {
                id: 'lt8-m2e-conv1-q2',
                stem: 'How does he feel?',
                options: [
                  { id: 'd', text: 'Disappointed and discouraged.', correct: false },
                  { id: 'c', text: 'Excited and eager.', correct: false },
                  { id: 'a', text: 'Calm and confident.', correct: false },
                  { id: 'b', text: 'A little nervous.', correct: true }
                ],
                explanation: 'He says he is a little nervous.',
                points: 1
              }
            ]
          },
        {
          id: 'lt8-m2e-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-8/m2e-conv2.mp3',
          image: '/img/listening/two_people/people-1.webp',
          transcript: 'Man: Hi Lily, how is your part-time job going?\nWoman: It is fun, but the hours are a bit long.\nMan: Where are you working again?\nWoman: At the coffee shop near the library.\nMan: That is convenient. Do you get free drinks?\nWoman: Yes, one free drink per shift. That is the best part.',
          questions: [
          {
            id: 'lt8-m2e-conv2-q1',
            stem: 'Where does the woman work?',
            options: [
                  { id: 'a', text: 'At the campus library help desk.', correct: false },
                  { id: 'd', text: 'At a clothing store in the mall.', correct: false },
                  { id: 'b', text: 'At the coffee shop near the library.', correct: true },
                  { id: 'c', text: 'At a restaurant in the downtown area.', correct: false }
            ],
            explanation: 'The woman says she works at the coffee shop near the library.',
            points: 1
          },
          {
            id: 'lt8-m2e-conv2-q2',
            stem: 'What is the best part of the job, according to the woman?',
            options: [
                  { id: 'd', text: 'Working shorter hours each shift.', correct: false },
                  { id: 'b', text: 'Getting one free drink per shift.', correct: true },
                  { id: 'a', text: 'Meeting new friends at work.', correct: false },
                  { id: 'c', text: 'Earning a high hourly wage.', correct: false }
            ],
            explanation: 'The woman says the best part is one free drink per shift.',
            points: 1
          }
          ]
        }
    ],
    announcements: [
          {
            id: 'lt8-m2e-ann1',
            title: 'Listen to an announcement at a university.',
            audio: '/audio/listening/test-8/m2e-ann1.mp3',
            image: '/img/listening/announcement/male-1.webp',
            speakerGender: 'male',
            transcript: 'Good afternoon, students. Just a quick reminder that the campus pool will be closed all day this Saturday for the swim meet. The meet starts at nine in the morning and ends around four in the afternoon. All students and staff are welcome to come and watch. Tickets are not needed. The pool will reopen for normal use on Sunday. The fitness center next to the pool will stay open as usual on Saturday.',
            questions: [
              {
                id: 'lt8-m2e-ann1-q1',
                stem: 'What is the announcement about?',
                options: [
                  { id: 'c', text: 'Free swimming lessons for new students.', correct: false },
                  { id: 'd', text: 'A pool safety class for students.', correct: false },
                  { id: 'b', text: 'A new pool schedule for the semester.', correct: false },
                  { id: 'a', text: 'A pool closure for a swim meet.', correct: true }
                ],
                explanation: 'The announcement is about the pool being closed for a swim meet.',
                points: 1
              },
              {
                id: 'lt8-m2e-ann1-q2',
                stem: 'When does the swim meet start?',
                options: [
                  { id: 'b', text: 'Ten a.m.', correct: false },
                  { id: 'a', text: 'Nine a.m.', correct: true },
                  { id: 'd', text: 'One p.m.', correct: false },
                  { id: 'c', text: 'Twelve p.m.', correct: false }
                ],
                explanation: 'The meet starts at nine in the morning.',
                points: 1
              }
            ]
          },
        {
          id: 'lt8-m2e-ann2',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-8/m2e-ann2.mp3',
          image: '/img/listening/announcement/male-1.webp',
          speakerGender: 'male',
          transcript: 'Hello students. The campus career office will host a resume review day next Wednesday from ten a.m. to two p.m. Bring a printed copy of your current resume, and a counselor will give you feedback in about fifteen minutes. No appointment is needed. The office is located on the second floor of the Student Center, room 210.',
          questions: [
          {
            id: 'lt8-m2e-ann2-q1',
            stem: 'What should students bring to the resume review day?',
            options: [
                  { id: 'b', text: 'A printed copy of their current resume.', correct: true },
                  { id: 'd', text: 'Two copies of a recent photograph.', correct: false },
                  { id: 'a', text: 'A laptop with their resume file.', correct: false },
                  { id: 'c', text: 'A list of three professional references.', correct: false }
            ],
            explanation: 'The announcement says to bring a printed copy of your current resume.',
            points: 1
          },
          {
            id: 'lt8-m2e-ann2-q2',
            stem: 'How long does each review take?',
            options: [
                  { id: 'b', text: 'About fifteen minutes.', correct: true },
                  { id: 'c', text: 'About thirty minutes.', correct: false },
                  { id: 'a', text: 'About five minutes.', correct: false },
                  { id: 'd', text: 'About an hour.', correct: false }
            ],
            explanation: 'The announcement says a counselor will give feedback in about fifteen minutes.',
            points: 1
          }
          ]
        }
    ],
    academicTalks: [
          {
            id: 'lt8-m2e-talk1',
            title: 'Listen to a talk in a literature class.',
            audio: '/audio/listening/test-8/m2e-talk1.mp3',
            image: '/img/listening/announcement/female-1.webp',
            speakerGender: 'female',
            transcript: 'Today let us talk about why people read fiction. Fiction is a story that the writer creates from imagination. People have been reading and telling fictional stories for thousands of years. Reading fiction has many benefits. First, it can help you understand the feelings of other people. When you read about characters, you see the world through their eyes. Second, fiction can teach you new words and ideas. Third, fiction is fun and helps you relax. Some people read fiction to escape from their daily worries. Others enjoy thinking about the deep questions that good stories raise. Whatever the reason, reading fiction is a wonderful habit at any age.',
            questions: [
              {
                id: 'lt8-m2e-talk1-q1',
                stem: 'What is the main idea of the talk?',
                options: [
                  { id: 'd', text: 'Writers should focus on real events.', correct: false },
                  { id: 'b', text: 'Fiction is more important than nonfiction.', correct: false },
                  { id: 'a', text: 'Reading fiction has many benefits.', correct: true },
                  { id: 'c', text: 'Most people do not read enough.', correct: false }
                ],
                explanation: 'The talk explains the various benefits of reading fiction.',
                points: 1
              },
              {
                id: 'lt8-m2e-talk1-q2',
                stem: 'Why do some people read fiction, according to the speaker?',
                options: [
                  { id: 'b', text: 'To escape from daily worries.', correct: true },
                  { id: 'c', text: 'To improve their memory skills.', correct: false },
                  { id: 'd', text: 'To finish required school assignments.', correct: false },
                  { id: 'a', text: 'To impress their close friends.', correct: false }
                ],
                explanation: 'The speaker says some people read fiction to escape from their daily worries.',
                points: 1
              },
              {
                id: 'lt8-m2e-talk1-q3',
                stem: 'What is the speaker\'s definition of fiction?',
                options: [
                  { id: 'c', text: 'A type of factual news article.', correct: false },
                  { id: 'a', text: 'A true story about real people\'s lives.', correct: false },
                  { id: 'b', text: 'A story the writer creates from imagination.', correct: true },
                  { id: 'd', text: 'A short poem written in verse.', correct: false }
                ],
                explanation: 'The speaker defines fiction as a story the writer creates from imagination.',
                points: 1
              },
              {
                id: 'lt8-m2e-talk1-q4',
                stem: 'What second benefit of reading fiction does the speaker mention?',
                options: [
                  { id: 'b', text: 'It can teach you new words and ideas.', correct: true },
                  { id: 'c', text: 'It helps you sleep better at night.', correct: false },
                  { id: 'a', text: 'It improves your memory of names and dates.', correct: false },
                  { id: 'd', text: 'It is required for most school courses.', correct: false }
                ],
                explanation: 'The speaker says fiction can teach you new words and ideas.',
                points: 1
              }
            ]
          }
    ]
  },
};

// Alias for full-test loader, which reads window.LISTENING_TEST_8
window.LISTENING_TEST_8 = window.LISTENING_SECTION_8;
