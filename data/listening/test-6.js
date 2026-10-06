// TOEFL iBT 2026 Listening Practice — Test 6
// Module 1 (Router): 30 questions | Module 2: 17 questions | Total: 47
// Audio: pre-recorded MP3 files in /audio/listening/test-6/

window.LISTENING_SECTION_6 = {
  id: 'listening-test-6',
  title: 'Listening Practice Test 6',
  format: '2026',
  timeLimit: 1740,

  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      introAudio: 'audio/listening/test-6/m1-intro.mp3',

      chooseResponse: [
    {
      id: 'lt6-m1-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m1-cr01.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m not used to studying with a roommate. It\'s a bit distracting.',
      options: [
        { id: 'b', text: 'Roommates really do vary a lot from one person to the next.', correct: false },
        { id: 'c', text: 'Studying really does take a lot of focus, especially at night.', correct: false },
        { id: 'd', text: 'You could try the quiet floor of the library in the evenings.', correct: true },
        { id: 'a', text: 'Distractions are common in shared rooms, especially when one roommate keeps a different schedule.', correct: false }
      ],
      explanation: 'Practical alternative.',
      points: 1
    },
    {
      id: 'lt6-m1-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m1-cr02.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you go to the open lecture last night?',
      options: [
        { id: 'b', text: 'Last night was pretty busy for me.', correct: false },
        { id: 'd', text: 'I missed it. Was it worth attending?', correct: true },
        { id: 'a', text: 'Open events on campus are poorly publicized in advance.', correct: false },
        { id: 'c', text: 'Lectures are usually pretty informative, I guess.', correct: false }
      ],
      explanation: 'Honest answer with follow-up question.',
      points: 1
    },
    {
      id: 'lt6-m1-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m1-cr03.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Have you ever taken a class with Professor Williams?',
      options: [
        { id: 'a', text: 'Classes can be hard depending on the subject matter.', correct: false },
        { id: 'c', text: 'Last spring. He\'s tough but really fair with grading.', correct: true },
        { id: 'b', text: 'Williams is a common name on the faculty roster here.', correct: false },
        { id: 'd', text: 'Professors differ a lot from one department to another.', correct: false }
      ],
      explanation: 'Specific opinion based on experience.',
      points: 1
    },
    {
      id: 'lt6-m1-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m1-cr04.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m not sure where to recycle these batteries.',
      options: [
        { id: 'c', text: 'Bins are pretty much everywhere on campus these days.', correct: false },
        { id: 'a', text: 'There\'s a special bin near the science building entrance.', correct: true },
        { id: 'b', text: 'Batteries are common, but most bins do not accept them.', correct: false },
        { id: 'd', text: 'Recycling helps the campus cut down on waste.', correct: false }
      ],
      explanation: 'Specific location info.',
      points: 1
    },
    {
      id: 'lt6-m1-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m1-cr05.mp3',
      image: '/img/listening/stock_modal/female-5.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Do you have any tips for handling an oral presentation?',
      options: [
        { id: 'd', text: 'Public speaking takes practice, especially if the audience asks questions afterward.', correct: false },
        { id: 'a', text: 'Presentations are pretty common in most of the upper level courses.', correct: false },
        { id: 'b', text: 'Tips can help, but everyone handles these things a bit differently.', correct: false },
        { id: 'c', text: 'Practice with a friend at least twice before you go up.', correct: true }
      ],
      explanation: 'Specific actionable tip.',
      points: 1
    },
    {
      id: 'lt6-m1-cr6',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m1-cr06.mp3',
      image: '/img/listening/stock_modal/male-6.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you happen to find an extra desk lamp in the dorm storage?',
      options: [
        { id: 'a', text: 'Dorms have items in storage but you usually need permission from the residence advisor to access them.', correct: false },
        { id: 'b', text: 'The storage room is shared with the whole building, so it fills up fast.', correct: false },
        { id: 'd', text: 'Lamps are really useful, especially if you like to study late in your room.', correct: false },
        { id: 'c', text: 'I think there are a few in the basement. Ask the resident assistant for the key.', correct: true }
      ],
      explanation: 'Specific procedure to follow.',
      points: 1
    },
    {
      id: 'lt6-m1-cr7',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m1-cr07.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Are you joining the trip to the science museum on Saturday?',
      options: [
        { id: 'd', text: 'I always enjoy a good field trip.', correct: false },
        { id: 'b', text: 'I heard they change out the special exhibit every couple of weeks.', correct: false },
        { id: 'a', text: 'I\'d love to. Is the bus leaving from the student center?', correct: true },
        { id: 'c', text: 'Saturday\'s the first game of the season.', correct: false }
      ],
      explanation: 'Confirms interest with logistics question.',
      points: 1
    },
    {
      id: 'lt6-m1-cr8',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m1-cr08.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m not sure what to wear to the career fair.',
      options: [
        { id: 'd', text: 'Business casual works fine. Just avoid jeans and sneakers.', correct: true },
        { id: 'c', text: 'Clothes matter more than people realize at those events.', correct: false },
        { id: 'a', text: 'Comfort helps when you are standing around for hours.', correct: false },
        { id: 'b', text: 'Career fairs vary in formality depending on which companies show up.', correct: false }
      ],
      explanation: 'Specific dress guidance.',
      points: 1
    },
    {
      id: 'lt6-m1-cr9',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m1-cr09.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you hear that the college pool will be closed for repairs?',
      options: [
        { id: 'b', text: 'Repairs like that usually take quite a while.', correct: false },
        { id: 'a', text: 'Yes, three weeks starting Monday. Frustrating timing.', correct: true },
        { id: 'd', text: 'Swimming is enjoyable when the water is warm.', correct: false },
        { id: 'c', text: 'Pools need maintenance more often than most people realize.', correct: false }
      ],
      explanation: 'Detail with mild reaction.',
      points: 1
    },
    {
      id: 'lt6-m1-cr10',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m1-cr10.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you taking notes on the lecture or just listening today?',
      options: [
        { id: 'a', text: 'Just listening. The professor said she\'ll post the slides afterward.', correct: true },
        { id: 'b', text: 'Her lectures are always packed with detail.', correct: false },
        { id: 'c', text: 'I could barely hear him from the back.', correct: false },
        { id: 'd', text: 'She grades us on how well we tie the readings together.', correct: false }
      ],
      explanation: 'Reasoning behind the choice.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt6-m1-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-6/m1-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Woman: Did you order your textbooks for the new term yet?\nMan: Not yet. I was waiting to see which classes I actually keep.\nWoman: Smart. I bought one last term for a class I dropped.\nMan: That\'s what I want to avoid.\nWoman: Well, the bookstore has a return policy now too.\nMan: Really? How long do you have?\nWoman: Two weeks from purchase, as long as the book is unused. Write in it and they won\'t take it back.\nMan: That\'s helpful. I\'ll order mine once my schedule is locked in on Friday.\nWoman: Get the used copies early. Those sell out first.',
      questions: [
        {
          id: 'lt6-m1-conv1-q1',
          stem: 'Why has the man not ordered textbooks?',
          options: [
        { id: 'd', text: 'The bookstore is closed temporarily for inventory.', correct: false },
        { id: 'b', text: 'He has not received his financial aid yet.', correct: false },
        { id: 'a', text: 'He is using only digital books this term.', correct: false },
        { id: 'c', text: 'He is waiting to confirm his classes.', correct: true }
          ],
          explanation: 'Waiting to confirm classes.',
          points: 1
        },        {
          id: 'lt6-m1-conv1-q2',
          stem: 'What is the bookstore\'s return policy?',
          options: [
        { id: 'b', text: 'Returns within seven days of purchase, no questions asked.', correct: false },
        { id: 'c', text: 'No returns accepted on textbooks under any circumstance.', correct: false },
        { id: 'd', text: 'Returns within two weeks if the book is unused.', correct: true },
        { id: 'a', text: 'Returns only with a doctor\'s note from the clinic.', correct: false }
          ],
          explanation: 'Two weeks if unused.',
          points: 1
        }
      ]
    },
    {
      id: 'lt6-m1-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-6/m1-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Man: I just realized I forgot to add my chemistry course.\nWoman: Is the registration period still open?\nMan: It closes at midnight tonight.\nWoman: Then don\'t wait. You should add it right now from your phone.\nMan: Right now? I\'m nowhere near my laptop.\nWoman: You can use the registrar app. It\'s faster than the website, and it doesn\'t time out the way the browser does.\nMan: Good idea. Hold on while I do that.\nWoman: Check that the lab section goes through too. Labs are listed separately.\nMan: Got it. There\'s a Tuesday lab at two, and both are in.',
      questions: [
        {
          id: 'lt6-m1-conv2-q1',
          stem: 'What did the man forget to do?',
          options: [
        { id: 'a', text: 'Submit a financial aid form.', correct: false },
        { id: 'b', text: 'Pay his tuition bill.', correct: false },
        { id: 'd', text: 'Add a chemistry course.', correct: true },
        { id: 'c', text: 'Sign up for office hours.', correct: false }
          ],
          explanation: 'Forgot to add chemistry course.',
          points: 1
        },        {
          id: 'lt6-m1-conv2-q2',
          stem: 'What does the woman suggest he use?',
          options: [
        { id: 'b', text: 'An email message to the professor.', correct: false },
        { id: 'c', text: 'The registrar app on his phone.', correct: true },
        { id: 'a', text: 'His academic advisor for emergency help.', correct: false },
        { id: 'd', text: 'A public computer in the library.', correct: false }
          ],
          explanation: 'The registrar app.',
          points: 1
        }
      ]
    },
    {
      id: 'lt6-m1-conv3',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-6/m1-conv3.mp3',
      image: '/img/listening/two_people/people-3.webp',
      transcript: 'Woman: Are you going to the open house for prospective students?\nMan: I signed up to give a tour. I need to brush up on the campus history.\nWoman: How much do they expect you to know?\nMan: Enough to answer questions about the older buildings. Parents always ask.\nWoman: Then the library has a small archive on the building histories. It\'s written records, mostly construction dates and who each hall was named for.\nMan: That\'s perfect. I\'ll stop by today.\nWoman: Get there before five. The archive closes earlier than the library.\nMan: Thanks for the tip. I\'ll head over after my afternoon class.',
      questions: [
        {
          id: 'lt6-m1-conv3-q1',
          stem: 'What is the man planning to do?',
          options: [
        { id: 'a', text: 'Photograph the campus for a marketing brochure.', correct: false },
        { id: 'd', text: 'Attend the open house as a guest.', correct: false },
        { id: 'c', text: 'Submit feedback about the open house afterward.', correct: false },
        { id: 'b', text: 'Give a tour during the open house.', correct: true }
          ],
          explanation: 'Give a tour.',
          points: 1
        },        {
          id: 'lt6-m1-conv3-q2',
          stem: 'Why does the woman mention the library archive?',
          options: [
        { id: 'b', text: 'It has information about building histories.', correct: true },
        { id: 'd', text: 'It is showing a film about the campus.', correct: false },
        { id: 'a', text: 'It has photos of the architecture.', correct: false },
        { id: 'c', text: 'It is the meeting point for tours.', correct: false }
          ],
          explanation: 'Has building histories he can study.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt6-m1-ann1',
      title: 'Listen to an announcement at the chemistry building.',
      audio: '/audio/listening/test-6/m1-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Attention chemistry students. The lab safety training will be offered three times next week: Monday at noon, Wednesday at three, and Friday at one. All students enrolled in lab courses must complete one session, whether this is your first lab course or your fourth. Sessions last about an hour and meet in room 210. Bring your student ID and a pen, because you will sign a written safety agreement at the end. If all three times conflict, email the lab coordinator before Thursday.',
      questions: [
        {
          id: 'lt6-m1-ann1-q1',
          stem: 'Who must attend the training?',
          options: [
        { id: 'a', text: 'All chemistry majors in the department.', correct: false },
        { id: 'c', text: 'Only students in graduate programs.', correct: false },
        { id: 'b', text: 'All students in lab courses.', correct: true },
        { id: 'd', text: 'Only students new to chemistry courses.', correct: false }
          ],
          explanation: 'Students in lab courses.',
          points: 1
        },        {
          id: 'lt6-m1-ann1-q2',
          stem: 'How long does each session last?',
          options: [
        { id: 'd', text: 'About half a day.', correct: false },
        { id: 'a', text: 'About thirty minutes.', correct: false },
        { id: 'c', text: 'About an hour.', correct: true },
        { id: 'b', text: 'About two hours.', correct: false }
          ],
          explanation: 'About an hour.',
          points: 1
        }
      ]
    },
    {
      id: 'lt6-m1-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-6/m1-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Hi, everyone. The chemistry department will host a guest lecturer next Friday at four p.m. Dr. Reyes will speak about her research on green chemistry, which focuses on designing environmentally friendly chemical processes. She will present two projects from her own lab that replaced petroleum based materials with plant based ones. The talk is open to all students, not only those in the department, and will be held in lecture hall A. Seating is first come, first served. Refreshments will follow in the atrium.',
      questions: [
        {
          id: 'lt6-m1-ann2-q1',
          stem: 'What is the lecture about?',
          options: [
        { id: 'd', text: 'Green chemistry research.', correct: true },
        { id: 'c', text: 'Chemical safety procedures.', correct: false },
        { id: 'b', text: 'Career opportunities in chemistry.', correct: false },
        { id: 'a', text: 'Industrial pollution.', correct: false }
          ],
          explanation: 'Green chemistry research.',
          points: 1
        },        {
          id: 'lt6-m1-ann2-q2',
          stem: 'Who can attend the lecture?',
          options: [
        { id: 'c', text: 'All students.', correct: true },
        { id: 'd', text: 'Only invited guests.', correct: false },
        { id: 'b', text: 'Only chemistry majors.', correct: false },
        { id: 'a', text: 'Only graduate students.', correct: false }
          ],
          explanation: 'All students.',
          points: 1
        }
      ]
    },
    {
      id: 'lt6-m1-ann3',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-6/m1-ann3.mp3',
      image: '/img/listening/announcement/female-3.webp',
      speakerGender: 'female',
      transcript: 'Good morning. The campus parking permits for next semester are now available for purchase. Permits can be ordered online through the transportation office page and will be mailed to your campus address within five business days. Prices have increased slightly this year to fund repairs to the parking lots, several of which need resurfacing. Order before the December 15 deadline, since permits requested after that date will not arrive before classes begin. Students who live off campus may pick theirs up in person instead.',
      questions: [
        {
          id: 'lt6-m1-ann3-q1',
          stem: 'What is the announcement about?',
          options: [
        { id: 'a', text: 'Construction of a new parking lot.', correct: false },
        { id: 'd', text: 'New parking restrictions on campus streets.', correct: false },
        { id: 'b', text: 'Free parking on campus during holidays.', correct: false },
        { id: 'c', text: 'Parking permit purchases for next semester.', correct: true }
          ],
          explanation: 'Parking permit purchases.',
          points: 1
        },        {
          id: 'lt6-m1-ann3-q2',
          stem: 'Why have prices increased?',
          options: [
        { id: 'd', text: 'To cover rising insurance costs.', correct: false },
        { id: 'a', text: 'To pay for new staff.', correct: false },
        { id: 'b', text: 'To fund parking lot repairs.', correct: true },
        { id: 'c', text: 'To keep up with general inflation.', correct: false }
          ],
          explanation: 'Fund parking lot repairs.',
          points: 1
        }
      ]
    },
      ],

      academicTalks: [
    {
      id: 'lt6-m1-talk1',
      title: 'Listen to a talk in a chemistry class.',
      audio: '/audio/listening/test-6/m1-talk1.mp3',
      image: '/img/listening/announcement/female-2.webp',
      speakerGender: 'female',
      transcript: 'Today we\'ll discuss chemical bonding, focusing on the difference between ionic and covalent bonds. Let\'s start with why atoms bond at all. An atom is most stable when its outer shell of electrons is full. The noble gases already have full outer shells, which is why they hardly react with anything. Every other atom gets there another way: by giving up electrons, accepting them, or sharing them with a neighbor. Those interactions create the bonds that hold molecules together. An ionic bond forms when one atom transfers an electron to another. Sodium chloride, ordinary table salt, is the classic example. Sodium gives up one electron to chlorine, and the resulting positively and negatively charged ions attract each other strongly. Notice that salt isn\'t built from separate molecules at all. It\'s a repeating lattice of ions. A covalent bond, on the other hand, forms when atoms share electrons rather than transfer them. Water is the familiar example: each hydrogen atom shares its single electron with the oxygen atom in the middle. Atoms can share more than one pair, too. In an oxygen molecule, two identical oxygen atoms share two pairs between them. So what decides which bond you get? Largely it\'s how strongly each atom pulls on shared electrons, a property chemists call electronegativity. Atoms with very different electronegativities tend to form ionic bonds, while atoms with similar electronegativities form covalent bonds. Next session, we\'ll look at how molecular shape, which these bonds influence, determines many of the physical properties we observe in everyday substances.',
      questions: [
        {
          id: 'lt6-m1-talk1-q1',
          stem: 'What is the main idea of the talk?',
          options: [
        { id: 'b', text: 'The structure of the periodic table of elements.', correct: false },
        { id: 'c', text: 'How chemical bonds hold molecules together.', correct: true },
        { id: 'd', text: 'How sodium and chlorine were first discovered.', correct: false },
        { id: 'a', text: 'The history of atomic theory in modern chemistry.', correct: false }
          ],
          explanation: 'The lecture is about chemical bonding.',
          points: 1
        },        {
          id: 'lt6-m1-talk1-q2',
          stem: 'What distinguishes an ionic bond from a covalent bond?',
          options: [
        { id: 'd', text: 'Ionic bonds transfer electrons; covalent bonds share them.', correct: true },
        { id: 'c', text: 'Ionic bonds form between atoms of the same element.', correct: false },
        { id: 'b', text: 'Covalent bonds are always weaker than ionic bonds.', correct: false },
        { id: 'a', text: 'Ionic bonds occur only in metals.', correct: false }
          ],
          explanation: 'Ionic = transfer of electrons, covalent = sharing.',
          points: 1
        },        {
          id: 'lt6-m1-talk1-q3',
          stem: 'Why does the speaker mention electronegativity?',
          options: [
        { id: 'd', text: 'To show what determines whether a bond is ionic or covalent.', correct: true },
        { id: 'c', text: 'To compare the relative sizes of atoms in different elements.', correct: false },
        { id: 'a', text: 'To explain why some atoms break apart at very high temperatures.', correct: false },
        { id: 'b', text: 'To describe how atoms move within a solid crystal structure.', correct: false }
          ],
          explanation: 'Electronegativity differences determine bond type.',
          points: 1
        },        {
          id: 'lt6-m1-talk1-q4',
          stem: 'What will the speaker most likely discuss next?',
          options: [
        { id: 'a', text: 'The discovery of new chemical elements in laboratories.', correct: false },
        { id: 'c', text: 'The behavior of gases at very low temperatures.', correct: false },
        { id: 'd', text: 'Industrial processes used for purifying table salt.', correct: false },
        { id: 'b', text: 'How molecular shape affects the properties of substances.', correct: true }
          ],
          explanation: 'She previews molecular shape and physical properties.',
          points: 1
        }
      ]
    },
        {
          id: 'lt6-m1-talk2',
          title: 'Listen to a talk in an economics class.',
          audio: '/audio/listening/test-6/m1-talk2.mp3',
          image: '/img/listening/announcement/female-1.webp',
          speakerGender: 'female',
          transcript: 'Today we\'ll look at how money was first used, and how it got from there to what\'s in your pocket now. Long ago, people did not use money at all. They traded goods directly. A farmer might hand over some grain in exchange for a goat. This system is called barter, and it works when both people happen to have something the other wants. That\'s the catch. If you have grain and you want a goat, you have to find someone who owns a goat and wants grain, on the same day. That was often inconvenient. Barter never disappeared, by the way. People still swap goods and favors today, but only in small circles. About three thousand years ago, people in very different parts of the world began using objects like shells, beads, and metal pieces as a form of money. Cowrie shells, for instance, circulated across parts of Africa and Asia for centuries. What made such objects work is that they were durable, easy to carry, hard to counterfeit, and, above all, valued by everyone. That shared agreement about value is what made trade much easier. Eventually, governments began making coins out of metals like silver and gold, stamping each one to guarantee its weight. Paper money came later, appearing first in China roughly a thousand years ago. Today, we are moving toward digital money that exists only on computers. Notice the pattern across all of it. Each step keeps the shared agreement about value and sheds more of the physical object.',
          questions: [
          {
            id: 'lt6-m1-talk2-q1',
            stem: 'What is the talk mainly about?',
            options: [
                  { id: 'd', text: 'How the first banks began operating in Europe.', correct: false },
                  { id: 'c', text: 'Why governments stopped making coins out of metal.', correct: false },
                  { id: 'a', text: 'How money developed from trade to digital currency.', correct: true },
                  { id: 'b', text: 'Why barter was always a bad system.', correct: false }
            ],
            explanation: 'The talk traces how money developed from barter to digital money.',
            points: 1
          },
          {
            id: 'lt6-m1-talk2-q2',
            stem: 'What problem does the speaker say barter often had?',
            options: [
                  { id: 'c', text: 'It often required help from the government to settle each individual trade.', correct: false },
                  { id: 'd', text: 'It often led to arguments between the two people trying to make a trade.', correct: false },
                  { id: 'a', text: 'It was often inconvenient because both people had to want what the other had.', correct: true },
                  { id: 'b', text: 'It was usually too slow for the big trades between distant towns.', correct: false }
            ],
            explanation: 'The speaker says barter worked only when both people had something the other wanted, which was often inconvenient.',
            points: 1
          },
              {
                id: 'lt6-m1-talk2-q3',
                stem: 'What did people use before money, according to the speaker?',
                options: [
                  { id: 'd', text: 'They did not trade goods at all.', correct: false },
                  { id: 'c', text: 'They wrote IOUs on pieces of paper.', correct: false },
                  { id: 'b', text: 'They traded goods directly through barter.', correct: true },
                  { id: 'a', text: 'They exchanged objects they believed were magic.', correct: false }
                ],
                explanation: 'The speaker says people traded goods directly, in a system called barter.',
                points: 1
              },
              {
                id: 'lt6-m1-talk2-q4',
                stem: 'What is the speaker\'s observation about the future of money?',
                options: [
                  { id: 'a', text: 'Coins will return to common everyday use.', correct: false },
                  { id: 'c', text: 'Paper money will be banned in every country.', correct: false },
                  { id: 'd', text: 'All money will be replaced by gold again.', correct: false },
                  { id: 'b', text: 'We are moving toward digital money on computers.', correct: true }
                ],
                explanation: 'The speaker says today we are moving toward digital money that exists only on computers.',
                points: 1
              }
          ]
        }
      ]
    },

    {
      id: 'module-2',
      title: 'Module 2',
      introAudio: 'audio/listening/test-6/m2-intro.mp3',

      chooseResponse: [
    {
      id: 'lt6-m2-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m2-cr01.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m trying to figure out how to get from the airport to campus.',
      options: [
        { id: 'c', text: 'Public transit helps in most cities.', correct: false },
        { id: 'b', text: 'The shuttle van is cheapest.', correct: true },
        { id: 'a', text: 'Airports are usually far from campus.', correct: false },
        { id: 'd', text: 'The shuttle and taxis use different lots.', correct: false }
      ],
      explanation: 'Practical comparison.',
      points: 1
    },
    {
      id: 'lt6-m2-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m2-cr02.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you sign up for the new yoga session in the gym?',
      options: [
        { id: 'b', text: 'Gyms host classes.', correct: false },
        { id: 'a', text: 'Yoga relaxes people.', correct: false },
        { id: 'd', text: 'Sessions fill quickly.', correct: false },
        { id: 'c', text: 'I tried.', correct: true }
      ],
      explanation: 'Honest status with reason.',
      points: 1
    },
    {
      id: 'lt6-m2-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m2-cr03.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Are you joining the volunteer trip during reading week?',
      options: [
        { id: 'b', text: 'Volunteering helps.', correct: false },
        { id: 'c', text: 'I want to.', correct: true },
        { id: 'a', text: 'Reading week is busy.', correct: false },
        { id: 'd', text: 'Trips are scheduled.', correct: false }
      ],
      explanation: 'Mixed answer with reason.',
      points: 1
    },
    {
      id: 'lt6-m2-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m2-cr04.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m trying to decide between taking history or political science next term.',
      options: [
        { id: 'd', text: 'History fits better with your major requirements, doesn\'t it?', correct: true },
        { id: 'c', text: 'Both topics interest students, so the choice comes down to scheduling.', correct: false },
        { id: 'a', text: 'Each term has a lot of options to choose from.', correct: false },
        { id: 'b', text: 'Choices like that vary from one student to another.', correct: false }
      ],
      explanation: 'Asks helpful clarifying question.',
      points: 1
    },
    {
      id: 'lt6-m2-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-6/m2-cr05.mp3',
      image: '/img/listening/stock_modal/female-5.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you remember to bring your calculator to class?',
      options: [
        { id: 'b', text: 'I have it in my bag.', correct: true },
        { id: 'c', text: 'Every class needs the right tools.', correct: false },
        { id: 'd', text: 'Bags hold more than people expect.', correct: false },
        { id: 'a', text: 'The professor said open-note questions need no calculation.', correct: false }
      ],
      explanation: 'Honest answer with practical concern.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt6-m2-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-6/m2-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Man: I noticed they\'re starting a new compost program.\nWoman: Yes, the dining halls are all involved. They\'re trying to cut how much food gets thrown out.\nMan: Do students need to do anything different?\nWoman: Just put food scraps in the green bins instead of trash. Paper napkins can go in too, but nothing plastic.\nMan: That seems easy enough. Where do the scraps go?\nWoman: A local farm picks them up twice a week to use as fertilizer.\nMan: Huh, so it actually turns into something useful.\nWoman: Right. Dining staff will be at the bins all month to help people sort.',
      questions: [
        {
          id: 'lt6-m2-conv1-q1',
          stem: 'What is the new program about?',
          options: [
        { id: 'b', text: 'Switching dining halls to reusable utensils.', correct: false },
        { id: 'a', text: 'Donating uneaten food to a charity.', correct: false },
        { id: 'c', text: 'Reducing food waste through composting.', correct: true },
        { id: 'd', text: 'Recycling plastic bottles and nothing else.', correct: false }
          ],
          explanation: 'Composting program in dining halls.',
          points: 1
        },        {
          id: 'lt6-m2-conv1-q2',
          stem: 'What happens to the food scraps?',
          options: [
        { id: 'c', text: 'They are sent to the city dump with the trash.', correct: false },
        { id: 'b', text: 'They are processed in a composting facility on campus.', correct: false },
        { id: 'd', text: 'They are picked up by a local farm for fertilizer.', correct: true },
        { id: 'a', text: 'They are burned for energy at a power plant.', correct: false }
          ],
          explanation: 'Local farm uses them as fertilizer.',
          points: 1
        }
      ]
    },
    {
      id: 'lt6-m2-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-6/m2-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Woman: Have you tried the new cafe by the library?\nMan: Not yet. Is the coffee good?\nWoman: It\'s excellent, and they have study booths in the back.\nMan: Booths sound great. I get distracted at open tables. I end up watching everyone walk past.\nWoman: Then you\'d like these. Each booth has its own outlet too, so you\'re not hunting for a plug.\nMan: That\'s the part that always gets me at the library.\nWoman: The line moves fast in the afternoon, but mornings are slow.\nMan: I\'m definitely going there to study tonight.',
      questions: [
        {
          id: 'lt6-m2-conv2-q1',
          stem: 'What is special about the new cafe?',
          options: [
        { id: 'c', text: 'It offers free wifi all day.', correct: false },
        { id: 'a', text: 'It serves hot food until midnight.', correct: false },
        { id: 'b', text: 'Students get a discount with ID.', correct: false },
        { id: 'd', text: 'It has study booths with outlets.', correct: true }
          ],
          explanation: 'Study booths with outlets.',
          points: 1
        },        {
          id: 'lt6-m2-conv2-q2',
          stem: 'Why does the man like the booths?',
          options: [
        { id: 'b', text: 'He gets distracted at open tables.', correct: true },
        { id: 'a', text: 'He prefers the quieter sound level.', correct: false },
        { id: 'c', text: 'He has problems with his back.', correct: false },
        { id: 'd', text: 'He likes the lighting setup better.', correct: false }
          ],
          explanation: 'He gets distracted at open tables.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt6-m2-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-6/m2-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good afternoon. The chemistry lab will be closed for equipment maintenance from Tuesday to Thursday next week. The fume hoods are being serviced, and that work cannot be done while students are in the room. All scheduled experiments will be moved to the alternative lab in the science annex. Please check your course schedule for the new room number, since sections have been split across two rooms there. Bring your own goggles, since the annex keeps few spares. Regular use resumes Friday morning at eight.',
      questions: [
        {
          id: 'lt6-m2-ann1-q1',
          stem: 'Why is the lab closing?',
          options: [
        { id: 'a', text: 'For staff vacation.', correct: false },
        { id: 'd', text: 'Due to safety violations.', correct: false },
        { id: 'c', text: 'For a special event.', correct: false },
        { id: 'b', text: 'For equipment maintenance.', correct: true }
          ],
          explanation: 'Equipment maintenance.',
          points: 1
        },        {
          id: 'lt6-m2-ann1-q2',
          stem: 'Where will experiments take place during the closure?',
          options: [
        { id: 'a', text: 'In the alternative lab in the science annex.', correct: true },
        { id: 'd', text: 'In a temporary tent behind the science building.', correct: false },
        { id: 'b', text: 'Nowhere, since all sessions are canceled until reopening.', correct: false },
        { id: 'c', text: 'Online, in a simulation instead of the lab.', correct: false }
          ],
          explanation: 'Alternative lab in science annex.',
          points: 1
        }
      ]
    },
    {
      id: 'lt6-m2-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-6/m2-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Good morning, everyone. The student center will renovate its dining area starting next month. The project will take about six weeks and includes new seating and a longer counter. During construction, the food court will move to the basement level of the same building. All vendors will continue to operate, just from a different location. Tables down there are limited, so take your meal to go between classes. Signs will be posted to direct you, and the north elevator is the quickest way down.',
      questions: [
        {
          id: 'lt6-m2-ann2-q1',
          stem: 'What is being renovated?',
          options: [
        { id: 'b', text: 'The library reading room upstairs.', correct: false },
        { id: 'a', text: 'The main campus gym building.', correct: false },
        { id: 'd', text: 'The bookstore entrance and lobby.', correct: false },
        { id: 'c', text: 'The student center dining area.', correct: true }
          ],
          explanation: 'Student center dining area.',
          points: 1
        },        {
          id: 'lt6-m2-ann2-q2',
          stem: 'Where will the food court temporarily move?',
          options: [
        { id: 'c', text: 'To the gymnasium next door.', correct: false },
        { id: 'd', text: 'To another building on campus.', correct: false },
        { id: 'b', text: 'To the outdoor patio area.', correct: false },
        { id: 'a', text: 'To the basement level.', correct: true }
          ],
          explanation: 'Basement level.',
          points: 1
        }
      ]
    }
      ],

      academicTalks: [
        {
          id: 'lt6-m2-talk1',
          title: 'Listen to a talk in a chemistry class.',
          audio: '/audio/listening/test-6/m2-talk1.mp3',
          image: '/img/listening/announcement/male-3.webp',
          speakerGender: 'male',
          transcript: 'Let\'s talk about catalysts today: what they do, where industry relies on them, and why chemists are still hunting for better ones. A catalyst is a substance that speeds up a chemical reaction without being consumed in the process, so in principle you can recover it at the end and use it again. It works by providing an alternative pathway with lower activation energy, allowing more molecules to react at a given temperature. One point to be clear about: a catalyst changes how quickly you arrive, not how much product is possible. Industrial chemistry depends heavily on catalysts. The production of ammonia for fertilizers, the refining of petroleum into useful fuels, and the manufacture of countless plastics and pharmaceuticals all rely on carefully designed catalysts. Living things use them as well. Every enzyme in your body is a catalyst, and some of them accelerate a reaction by a factor of millions. Now the practical problem. Some of the most important catalysts are made from rare and expensive metals like platinum and palladium, which is why catalytic converters in cars are sometimes targeted by thieves. Those metals are also easily poisoned. A trace of the wrong impurity can shut a working catalyst down completely. So researchers continue to search for cheaper and more abundant alternatives. Recent work has explored using common iron compounds and even simple organic molecules as catalysts, though performance often falls short of the metals they aim to replace. That gap is the reason the expensive metals are still sitting in our reactors.',
          questions: [
            {
              id: 'lt6-m2-talk1-q1',
              stem: 'According to the speaker, how do catalysts speed up reactions?',
              options: [
                { id: 'b', text: 'By providing an alternative pathway with lower activation energy', correct: true },
                { id: 'a', text: 'By raising the overall temperature of the reaction mixture', correct: false },
                { id: 'c', text: 'By becoming part of the final chemical product', correct: false },
                { id: 'd', text: 'By increasing the concentration of the reactants involved', correct: false }
              ],
              explanation: 'The speaker says catalysts work by providing an alternative pathway with lower activation energy.',
              points: 1
            },
            {
              id: 'lt6-m2-talk1-q2',
              stem: 'Why are catalytic converters in cars sometimes targeted by thieves?',
              options: [
                { id: 'd', text: 'They can be sold to gas stations for fuel credits', correct: false },
                { id: 'b', text: 'They contain rare and expensive metals like platinum and palladium', correct: true },
                { id: 'a', text: 'They are easy to remove from almost any vehicle', correct: false },
                { id: 'c', text: 'They are difficult for police to trace or identify', correct: false }
              ],
              explanation: 'The speaker mentions catalytic converters being targeted because they contain rare metals like platinum and palladium.',
              points: 1
            },
                            {
                id: 'lt6-m2-talk1-q3',
                stem: 'Why does the speaker mention enzymes in the body?',
                options: [
                  { id: 'd', text: 'To explain why certain catalysts are poisoned by impurities.', correct: false },
                  { id: 'a', text: 'To argue that enzymes outperform the best industrial catalysts.', correct: false },
                  { id: 'b', text: 'To explain why enzymes need rare metals to function.', correct: false },
                  { id: 'c', text: 'To show that catalysts also operate inside living organisms.', correct: true }
                ],
                explanation: 'The speaker turns to enzymes to make the point that catalysis is not only an industrial technique but something living bodies rely on constantly.',
                points: 1
              },
                            {
                id: 'lt6-m2-talk1-q4',
                stem: 'What does the speaker suggest about the proposed alternative catalysts?',
                options: [
                  { id: 'c', text: 'They are more easily poisoned than the rare metals.', correct: false },
                  { id: 'a', text: 'They have not yet matched the metals they target.', correct: true },
                  { id: 'd', text: 'They are always recovered unchanged after each industrial reaction.', correct: false },
                  { id: 'b', text: 'They have already replaced platinum in most industrial reactors.', correct: false }
                ],
                explanation: 'The speaker says work on iron compounds and simple organic molecules still falls short of the metals it aims to replace, which is why those metals are still in use.',
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
    introAudio: '/audio/listening/test-6/m2-intro.mp3',
    chooseResponse: [
          {
            id: 'lt6-m2e-cr1',
            type: 'choose_response',
            audio: '/audio/listening/test-6/m2e-cr01.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'What did you do over the weekend?',
            options: [
              { id: 'b', text: 'Weekends are too short.', correct: false },
              { id: 'c', text: 'I usually sleep late.', correct: false },
              { id: 'd', text: 'My family is large.', correct: false },
              { id: 'a', text: 'I visited my grandmother.', correct: true }
            ],
            explanation: 'The speaker asks about past activities, so the correct response shares one.',
            points: 1
          },
          {
            id: 'lt6-m2e-cr2',
            type: 'choose_response',
            audio: '/audio/listening/test-6/m2e-cr02.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Could you show me how to use this machine?',
            options: [
              { id: 'd', text: 'The instructions are in the box.', correct: false },
              { id: 'a', text: 'Of course, it is very simple.', correct: true },
              { id: 'c', text: 'I bought it just last year.', correct: false },
              { id: 'b', text: 'Machines like this one can break.', correct: false }
            ],
            explanation: 'The speaker is asking for help, so the correct response agrees to help.',
            points: 1
          },
          {
            id: 'lt6-m2e-cr3',
            type: 'choose_response',
            audio: '/audio/listening/test-6/m2e-cr03.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Are there any tickets left for the show?',
            options: [
              { id: 'a', text: 'The tickets cost twenty dollars each.', correct: false },
              { id: 'd', text: 'The theater seats about two hundred.', correct: false },
              { id: 'b', text: 'Yes, we have a few left.', correct: true },
              { id: 'c', text: 'Shows here are popular with students.', correct: false }
            ],
            explanation: 'The speaker is asking about ticket availability.',
            points: 1
          },
          {
            id: 'lt6-m2e-cr4',
            type: 'choose_response',
            audio: '/audio/listening/test-6/m2e-cr04.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Would you like to come to my birthday party?',
            options: [
              { id: 'b', text: 'I would love to, when is it?', correct: true },
              { id: 'c', text: 'Parties can be very loud at night.', correct: false },
              { id: 'd', text: 'I like cake more than most desserts.', correct: false },
              { id: 'a', text: 'Birthdays are special days for most people.', correct: false }
            ],
            explanation: 'The speaker is inviting them to a party, so the correct response accepts and asks details.',
            points: 1
          },
          {
            id: 'lt6-m2e-cr5',
            type: 'choose_response',
            audio: '/audio/listening/test-6/m2e-cr05.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Did you have a good vacation?',
            options: [
              { id: 'a', text: 'Vacations are always much too short.', correct: false },
              { id: 'c', text: 'I packed very light this time.', correct: false },
              { id: 'b', text: 'Yes, I went to the beach.', correct: true },
              { id: 'd', text: 'Hotels can be very expensive now.', correct: false }
            ],
            explanation: 'The speaker is asking about a past vacation.',
            points: 1
          },
    ],
    conversations: [
          {
            id: 'lt6-m2e-conv1',
            title: 'Listen to a conversation.',
            audio: '/audio/listening/test-6/m2e-conv1.mp3',
            image: '/img/listening/two_people/people-1.webp',
            transcript: 'Woman: Hi Jake, are you going to the talent show tonight?\nMan: Yes, I bought my ticket last week. I heard it is going to be great.\nWoman: I am performing in it. I am singing a song.\nMan: That is wonderful. What time do you go on stage?\nWoman: I think I am the third performance. So maybe around seven thirty.\nMan: I will be there to cheer for you.\nWoman: Thanks. I am a little nervous, but also excited.\nMan: You will do great. I have heard you sing before.',
            questions: [
              {
                id: 'lt6-m2e-conv1-q1',
                stem: 'What is the woman doing tonight?',
                options: [
                  { id: 'b', text: 'Singing in a talent show.', correct: true },
                  { id: 'a', text: 'Going on a dinner date.', correct: false },
                  { id: 'd', text: 'Watching a movie at home.', correct: false },
                  { id: 'c', text: 'Studying in the main library.', correct: false }
                ],
                explanation: 'The woman is performing. She is singing a song in the talent show.',
                points: 1
              },
              {
                id: 'lt6-m2e-conv1-q2',
                stem: 'What time will the woman perform?',
                options: [
                  { id: 'c', text: 'Around eight p.m. tonight.', correct: false },
                  { id: 'd', text: 'Around nine p.m. tonight.', correct: false },
                  { id: 'b', text: 'Around seven thirty p.m.', correct: true },
                  { id: 'a', text: 'Around six p.m. tonight.', correct: false }
                ],
                explanation: 'She thinks she will go on stage around seven thirty.',
                points: 1
              }
            ]
          },
        {
          id: 'lt6-m2e-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-6/m2e-conv2.mp3',
          image: '/img/listening/two_people/people-1.webp',
          transcript: 'Man: Hi Emma, did your computer get fixed?\nWoman: Yes, the technician replaced the keyboard yesterday.\nMan: How much did it cost?\nWoman: Surprisingly only forty dollars. Much less than I expected.\nMan: That is reasonable. Where did you take it?\nWoman: To the small repair shop near the post office. They are quick and friendly.',
          questions: [
          {
            id: 'lt6-m2e-conv2-q1',
            stem: 'What did the technician fix on the woman\'s computer?',
            options: [
                  { id: 'a', text: 'The screen.', correct: false },
                  { id: 'b', text: 'The keyboard.', correct: true },
                  { id: 'd', text: 'The hard drive.', correct: false },
                  { id: 'c', text: 'The battery.', correct: false }
            ],
            explanation: 'The woman says the technician replaced the keyboard yesterday.',
            points: 1
          },
          {
            id: 'lt6-m2e-conv2-q2',
            stem: 'How much did the repair cost?',
            options: [
                  { id: 'a', text: 'Twenty dollars.', correct: false },
                  { id: 'd', text: 'One hundred dollars.', correct: false },
                  { id: 'c', text: 'Eighty dollars.', correct: false },
                  { id: 'b', text: 'Forty dollars.', correct: true }
            ],
            explanation: 'The woman says it cost only forty dollars.',
            points: 1
          }
          ]
        }
    ],
    announcements: [
          {
            id: 'lt6-m2e-ann1',
            title: 'Listen to an announcement at a university.',
            audio: '/audio/listening/test-6/m2e-ann1.mp3',
            image: '/img/listening/announcement/male-1.webp',
            speakerGender: 'male',
            transcript: 'Hello everyone. The library will start a new program this semester to help students with research papers. Library staff will hold workshops every Wednesday afternoon from three to four. The workshops are free, and no sign-up is needed. You will learn how to find good sources, organize your notes, and avoid common mistakes. The first workshop is next Wednesday. Please bring your laptop or notebook. Whether you are working on a small assignment or a major paper, these workshops can save you a lot of time.',
            questions: [
              {
                id: 'lt6-m2e-ann1-q1',
                stem: 'What is the announcement about?',
                options: [
                  { id: 'b', text: 'A change in the library\'s opening hours.', correct: false },
                  { id: 'a', text: 'A new library program for research papers.', correct: true },
                  { id: 'd', text: 'New computers in the library\'s computer lab.', correct: false },
                  { id: 'c', text: 'A book sale at the library entrance.', correct: false }
                ],
                explanation: 'The announcement is about a new program to help students with research papers.',
                points: 1
              },
              {
                id: 'lt6-m2e-ann1-q2',
                stem: 'When are the workshops held?',
                options: [
                  { id: 'd', text: 'Saturday morning.', correct: false },
                  { id: 'c', text: 'Wednesday afternoon.', correct: true },
                  { id: 'a', text: 'Monday morning.', correct: false },
                  { id: 'b', text: 'Tuesday evening.', correct: false }
                ],
                explanation: 'Workshops are held every Wednesday afternoon from three to four.',
                points: 1
              }
            ]
          },
        {
          id: 'lt6-m2e-ann2',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-6/m2e-ann2.mp3',
          image: '/img/listening/announcement/male-1.webp',
          speakerGender: 'male',
          transcript: 'Attention students. The university swim team will host an open swimming session this Sunday from one p.m. to four p.m. The pool will be open to all students who would like to swim or learn basic strokes. Lifeguards will be on duty. Please bring your own swimsuit and towel. Lockers are available, but please bring your own lock.',
          questions: [
          {
            id: 'lt6-m2e-ann2-q1',
            stem: 'What is happening at the pool this Sunday?',
            options: [
                  { id: 'd', text: 'A pool cleaning event for volunteers.', correct: false },
                  { id: 'b', text: 'An open swimming session for students.', correct: true },
                  { id: 'c', text: 'A lifeguard training and certification course.', correct: false },
                  { id: 'a', text: 'A swim race between two teams.', correct: false }
            ],
            explanation: 'The announcement says the swim team will host an open swimming session for students.',
            points: 1
          },
          {
            id: 'lt6-m2e-ann2-q2',
            stem: 'What should students bring?',
            options: [
                  { id: 'b', text: 'A snack and water bottle.', correct: false },
                  { id: 'd', text: 'Pool floats and beach toys.', correct: false },
                  { id: 'a', text: 'Their own swimsuit and towel.', correct: true },
                  { id: 'c', text: 'Their student ID card only.', correct: false }
            ],
            explanation: 'The announcement asks students to bring their own swimsuit and towel.',
            points: 1
          }
          ]
        }
    ],
    academicTalks: [
          {
            id: 'lt6-m2e-talk1',
            title: 'Listen to a talk in a science class.',
            audio: '/audio/listening/test-6/m2e-talk1.mp3',
            image: '/img/listening/announcement/female-1.webp',
            speakerGender: 'female',
            transcript: 'Today we are going to learn about how the human body uses water. Water is the most important substance in the body. About sixty percent of an adult\'s body weight is water. We need water for many reasons. First, water helps move nutrients to all parts of the body. Second, it helps remove waste. Third, water keeps us cool by making us sweat when we are hot. People can live without food for several weeks, but only a few days without water. Doctors recommend drinking about eight cups of water each day. You can also get water from fruits, vegetables, and other foods.',
            questions: [
              {
                id: 'lt6-m2e-talk1-q1',
                stem: 'What is the main idea of the talk?',
                options: [
                  { id: 'c', text: 'Sweating is bad for the health of the body.', correct: false },
                  { id: 'a', text: 'Water is essential for the body in many ways.', correct: true },
                  { id: 'b', text: 'Most people drink too much water every day.', correct: false },
                  { id: 'd', text: 'Food is more important for the body than water.', correct: false }
                ],
                explanation: 'The talk explains that water is essential for the body in many ways.',
                points: 1
              },
              {
                id: 'lt6-m2e-talk1-q2',
                stem: 'How much of an adult\'s body weight is water?',
                options: [
                  { id: 'b', text: 'About sixty percent.', correct: true },
                  { id: 'a', text: 'About thirty percent.', correct: false },
                  { id: 'c', text: 'About eighty percent.', correct: false },
                  { id: 'd', text: 'Almost all of it.', correct: false }
                ],
                explanation: 'The talk says about sixty percent of an adult\'s body weight is water.',
                points: 1
              },
              {
                id: 'lt6-m2e-talk1-q3',
                stem: 'What is one specific way water helps the body, according to the speaker?',
                options: [
                  { id: 'd', text: 'It helps the body store extra fat for energy.', correct: false },
                  { id: 'c', text: 'It makes the skin darker after a few weeks.', correct: false },
                  { id: 'a', text: 'It makes hair on the head grow longer and faster.', correct: false },
                  { id: 'b', text: 'It helps move nutrients to all parts of the body.', correct: true }
                ],
                explanation: 'The speaker says water helps move nutrients to all parts of the body.',
                points: 1
              },
              {
                id: 'lt6-m2e-talk1-q4',
                stem: 'How does water help cool the body when we are hot?',
                options: [
                  { id: 'b', text: 'It makes us sweat.', correct: true },
                  { id: 'c', text: 'It makes us breathe faster.', correct: false },
                  { id: 'd', text: 'It thickens our blood.', correct: false },
                  { id: 'a', text: 'It changes our temperature directly.', correct: false }
                ],
                explanation: 'The speaker says water keeps us cool by making us sweat when we are hot.',
                points: 1
              }
            ]
          }
    ]
  },
};

// Alias for full-test loader, which reads window.LISTENING_TEST_6
window.LISTENING_TEST_6 = window.LISTENING_SECTION_6;
