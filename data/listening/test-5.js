// TOEFL iBT 2026 Listening Practice — Test 5
// Module 1 (Router): 30 questions | Module 2: 17 questions | Total: 47
// Audio: pre-recorded MP3 files in /audio/listening/test-5/

window.LISTENING_SECTION_5 = {
  id: 'listening-test-5',
  title: 'Listening Practice Test 5',
  format: '2026',
  timeLimit: 1740,

  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      introAudio: 'audio/listening/test-5/m1-intro.mp3',

      chooseResponse: [
    {
      id: 'lt5-m1-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m1-cr01.mp3',
      image: '/img/listening/stock_modal/male-1.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Do you know if the library has those old census records?',
      options: [
        { id: 'b', text: 'Records like that can be really helpful for a research project.', correct: false },
        { id: 'd', text: 'Old records from that era are pretty interesting to read.', correct: false },
        { id: 'a', text: 'Libraries store all kinds of things, like campus newspapers and old yearbooks.', correct: false },
        { id: 'c', text: 'The reference desk on the third floor keeps a microfiche collection.', correct: true }
      ],
      explanation: 'Specific resource info.',
      points: 1
    },
    {
      id: 'lt5-m1-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m1-cr02.mp3',
      image: '/img/listening/stock_modal/female-2.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did anyone tell you the seminar room got moved?',
      options: [
        { id: 'b', text: 'I just heard. We\'re meeting in room 215 instead of 110.', correct: true },
        { id: 'c', text: 'Buildings have many rooms, but the seminar rooms are usually upstairs.', correct: false },
        { id: 'a', text: 'Rooms change sometimes, especially at the start of a new semester.', correct: false },
        { id: 'd', text: 'Seminars are pretty common in the department this time of year.', correct: false }
      ],
      explanation: 'Specific room change details.',
      points: 1
    },
    {
      id: 'lt5-m1-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m1-cr03.mp3',
      image: '/img/listening/stock_modal/male-3.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I haven\'t decided which professor to ask for a recommendation.',
      options: [
        { id: 'a', text: 'Professors usually get a lot of these requests near the end of every semester.', correct: false },
        { id: 'd', text: 'Recommendations matter a great deal for most graduate school applications these days.', correct: false },
        { id: 'c', text: 'Pick the one who knows your strongest work, not just your highest grade.', correct: true },
        { id: 'b', text: 'Letters like that take quite a lot of time to write properly.', correct: false }
      ],
      explanation: 'Solid advice on selection.',
      points: 1
    },
    {
      id: 'lt5-m1-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m1-cr04.mp3',
      image: '/img/listening/stock_modal/female-4.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Do you happen to know where the lost and found is located?',
      options: [
        { id: 'd', text: 'Things get lost around this building almost every day.', correct: false },
        { id: 'c', text: 'It\'s by the security desk near the main entrance.', correct: true },
        { id: 'a', text: 'I lose pens and notebooks around campus all the time.', correct: false },
        { id: 'b', text: 'Found items are kept somewhere central, but I\'m not sure where.', correct: false }
      ],
      explanation: 'Direct location info.',
      points: 1
    },
    {
      id: 'lt5-m1-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m1-cr05.mp3',
      image: '/img/listening/stock_modal/male-5.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did the professor mention what would be on the midterm?',
      options: [
        { id: 'c', text: 'Midterms can be really stressful, especially when two land in the same week.', correct: false },
        { id: 'a', text: 'She said it covers chapters one through five and the lab work.', correct: true },
        { id: 'b', text: 'Professors give hints, but you usually have to read between the lines.', correct: false },
        { id: 'd', text: 'Studying for a midterm really takes more time than most people expect.', correct: false }
      ],
      explanation: 'Specific scope information.',
      points: 1
    },
    {
      id: 'lt5-m1-cr6',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m1-cr06.mp3',
      image: '/img/listening/stock_modal/female-6.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m thinking of applying for a campus job. Where do I look?',
      options: [
        { id: 'c', text: 'Campuses hire a lot of students every semester for different jobs.', correct: false },
        { id: 'b', text: 'Jobs help with money, and they look good on a resume.', correct: false },
        { id: 'd', text: 'Applications take time, so it\'s worth starting on them early.', correct: false },
        { id: 'a', text: 'Student employment posts openings on the careers portal under part-time.', correct: true }
      ],
      explanation: 'Concrete resource location.',
      points: 1
    },
    {
      id: 'lt5-m1-cr7',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m1-cr07.mp3',
      image: '/img/listening/stock_modal/male-1.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m so sleepy after that long lecture.',
      options: [
        { id: 'c', text: 'Caffeine helps some people, though it never really does much for me.', correct: false },
        { id: 'b', text: 'Why don\'t we grab coffee at the kiosk before our next class?', correct: true },
        { id: 'd', text: 'Lectures can be long, especially the ones scheduled late in the afternoon.', correct: false },
        { id: 'a', text: 'Sleep is important, especially during midterms when most students don\'t get enough rest.', correct: false }
      ],
      explanation: 'Practical sympathetic suggestion.',
      points: 1
    },
    {
      id: 'lt5-m1-cr8',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m1-cr08.mp3',
      image: '/img/listening/stock_modal/female-2.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you sign up for the fall career fair?',
      options: [
        { id: 'c', text: 'Not yet. Is there still space, do you know?', correct: true },
        { id: 'd', text: 'Career fairs are really useful for meeting recruiters in person.', correct: false },
        { id: 'a', text: 'Fall is recruiting season for most of the big firms.', correct: false },
        { id: 'b', text: 'Many companies attend, including some that only come in spring.', correct: false }
      ],
      explanation: 'Honest status with relevant follow-up.',
      points: 1
    },
    {
      id: 'lt5-m1-cr9',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m1-cr09.mp3',
      image: '/img/listening/stock_modal/male-3.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you planning on staying on campus over winter break?',
      options: [
        { id: 'd', text: 'Winter is cold here, colder than anywhere I have lived before.', correct: false },
        { id: 'b', text: 'Breaks are restful, which is exactly what everyone needs by December.', correct: false },
        { id: 'c', text: 'Travel gets expensive, especially during the winter holiday peak when airfares double.', correct: false },
        { id: 'a', text: 'Just for the first week. I\'ll fly home on the twentieth.', correct: true }
      ],
      explanation: 'Specific itinerary.',
      points: 1
    },
    {
      id: 'lt5-m1-cr10',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m1-cr10.mp3',
      image: '/img/listening/stock_modal/female-4.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I noticed the laundry room has new machines.',
      options: [
        { id: 'c', text: 'Machines wear out eventually, no matter how well they are maintained.', correct: false },
        { id: 'b', text: 'Laundry is necessary, though I always put it off too long.', correct: false },
        { id: 'a', text: 'New equipment helps; the old washers broke down almost every month.', correct: false },
        { id: 'd', text: 'They take a card now instead of coins. Much easier.', correct: true }
      ],
      explanation: 'Detail explaining the change.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt5-m1-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-5/m1-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Man: I\'m thinking about joining a research lab this semester.\nWoman: That sounds great. Do you have any in mind?\nMan: Professor Lin\'s biology lab is doing interesting plant work.\nWoman: How do you apply to join?\nMan: You email the professor and explain your interest.\nWoman: I\'d start with a resume attached. Makes a stronger first impression.\nMan: Good point. Should I mention which courses I\'ve taken?\nWoman: Definitely, and say how many hours a week you can commit.\nMan: I can manage about ten, mostly on Tuesdays and Thursdays.\nWoman: Then put that in the email. Professors care more about reliability than experience.',
      questions: [
        {
          id: 'lt5-m1-conv1-q1',
          stem: 'What is the man planning to do this semester?',
          options: [
        { id: 'd', text: 'Switch his major to biology.', correct: false },
        { id: 'c', text: 'Join a research lab.', correct: true },
        { id: 'b', text: 'Apply for a teaching position.', correct: false },
        { id: 'a', text: 'Take an extra biology class.', correct: false }
          ],
          explanation: 'Join a research lab.',
          points: 1
        },        {
          id: 'lt5-m1-conv1-q2',
          stem: 'What does the woman suggest?',
          options: [
        { id: 'd', text: 'Visiting the lab in person first.', correct: false },
        { id: 'a', text: 'Including a resume with his email.', correct: true },
        { id: 'c', text: 'Waiting until next year to apply.', correct: false },
        { id: 'b', text: 'Choosing a different professor to contact instead.', correct: false }
          ],
          explanation: 'She suggests attaching a resume.',
          points: 1
        }
      ]
    },
    {
      id: 'lt5-m1-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-5/m1-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Woman: Are you going to the science fair on Saturday?\nMan: I\'d like to. What time does it start?\nWoman: It opens at ten with student presentations all day.\nMan: Are there any special speakers?\nWoman: A guest researcher from the university is giving a talk at noon.\nMan: Do you know her topic?\nWoman: Something about water quality in the river near campus.\nMan: That\'s useful for my environmental science class. Is the talk free?\nWoman: The whole fair is free, but the room fills up fast.\nMan: Sounds great. I\'ll meet you at the entrance at quarter to ten.',
      questions: [
        {
          id: 'lt5-m1-conv2-q1',
          stem: 'What event are the speakers discussing?',
          options: [
        { id: 'b', text: 'A research conference for graduate students.', correct: false },
        { id: 'd', text: 'A campus science fair on Saturday.', correct: true },
        { id: 'a', text: 'A faculty awards ceremony.', correct: false },
        { id: 'c', text: 'A field trip to a research center.', correct: false }
          ],
          explanation: 'A campus science fair Saturday.',
          points: 1
        },        {
          id: 'lt5-m1-conv2-q2',
          stem: 'What is happening at noon?',
          options: [
        { id: 'c', text: 'A poster session for student researchers.', correct: false },
        { id: 'a', text: 'An awards ceremony for the best presentations.', correct: false },
        { id: 'd', text: 'A guest researcher will give a talk.', correct: true },
        { id: 'b', text: 'A break for lunch in the courtyard.', correct: false }
          ],
          explanation: 'Guest researcher gives a talk at noon.',
          points: 1
        }
      ]
    },
    {
      id: 'lt5-m1-conv3',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-5/m1-conv3.mp3',
      image: '/img/listening/two_people/people-3.webp',
      transcript: 'Man: Did you sign up for the lab partner exchange this semester?\nWoman: I haven\'t yet. I usually just stick with the same person.\nMan: Not this year. They pair you up randomly with a different partner every session.\nWoman: Every session? That sounds intimidating. Why the change?\nMan: They want students to learn to work with new people, so it\'s better practice for real lab work later.\nWoman: I guess in an actual research lab you don\'t get to pick your team.\nMan: Right. And the sign-up form is on the department page.\nWoman: Fair enough. I\'ll sign up tonight, before Friday\'s deadline.',
      questions: [
        {
          id: 'lt5-m1-conv3-q1',
          stem: 'What is new about lab partners this semester?',
          options: [
        { id: 'd', text: 'Pairs are assigned randomly each session.', correct: true },
        { id: 'b', text: 'Students can request specific partners.', correct: false },
        { id: 'a', text: 'Students choose their own partners.', correct: false },
        { id: 'c', text: 'Partners are graded as a team.', correct: false }
          ],
          explanation: 'Random pairing each session.',
          points: 1
        },        {
          id: 'lt5-m1-conv3-q2',
          stem: 'Why did the program make the change?',
          options: [
        { id: 'c', text: 'To prepare students for real lab teamwork.', correct: true },
        { id: 'a', text: 'To balance grades across the different sections.', correct: false },
        { id: 'b', text: 'To save the professor time during lab sessions.', correct: false },
        { id: 'd', text: 'To prevent cheating between friends in class.', correct: false }
          ],
          explanation: 'Prepare for real lab work with diverse people.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt5-m1-ann1',
      title: 'Listen to an announcement at the science building.',
      audio: '/audio/listening/test-5/m1-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good morning. The Department of Biology will host a guest lecture by Dr. Patel on coral reef research this Thursday at three p.m. The lecture is open to all students, and no ticket or advance sign-up is required. Please note the room: it will be held in lecture hall two, on the second floor of the science building. Dr. Patel will discuss her recent fieldwork in the Pacific and answer questions afterward. Light refreshments will be served in the hallway outside.',
      questions: [
        {
          id: 'lt5-m1-ann1-q1',
          stem: 'What is the lecture about?',
          options: [
        { id: 'd', text: 'Animal behavior research.', correct: false },
        { id: 'b', text: 'Marine pollution research.', correct: false },
        { id: 'a', text: 'Plant genetics research.', correct: false },
        { id: 'c', text: 'Coral reef research.', correct: true }
          ],
          explanation: 'Coral reef research.',
          points: 1
        },        {
          id: 'lt5-m1-ann1-q2',
          stem: 'Where will the lecture be held?',
          options: [
        { id: 'd', text: 'The biology lab.', correct: false },
        { id: 'a', text: 'The main auditorium.', correct: false },
        { id: 'b', text: 'Lecture hall two.', correct: true },
        { id: 'c', text: 'The campus library.', correct: false }
          ],
          explanation: 'Lecture hall two.',
          points: 1
        }
      ]
    },
    {
      id: 'lt5-m1-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-5/m1-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Attention biology majors. Registration for fall research projects opens next Monday at nine a.m. through the department portal. Each project has a limited number of spots, usually three or four students, so please review the descriptions on the department site beforehand and rank at least two choices. Remember that you will need a faculty member\'s approval before you can be assigned to a project, so email the supervising professor this week. Questions can be directed to the department coordinator in room one fourteen.',
      questions: [
        {
          id: 'lt5-m1-ann2-q1',
          stem: 'What is the announcement about?',
          options: [
        { id: 'c', text: 'A change in faculty office hours.', correct: false },
        { id: 'd', text: 'Fall course registration.', correct: false },
        { id: 'a', text: 'A new biology requirement.', correct: false },
        { id: 'b', text: 'Registration for fall research projects.', correct: true }
          ],
          explanation: 'Fall research project registration.',
          points: 1
        },        {
          id: 'lt5-m1-ann2-q2',
          stem: 'What is required to be assigned to a project?',
          options: [
        { id: 'c', text: 'A high GPA in biology.', correct: false },
        { id: 'd', text: 'Completion of an interview.', correct: false },
        { id: 'b', text: 'Faculty member approval.', correct: true },
        { id: 'a', text: 'Submission of a research proposal.', correct: false }
          ],
          explanation: 'Faculty member approval.',
          points: 1
        }
      ]
    },
    {
      id: 'lt5-m1-ann3',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-5/m1-ann3.mp3',
      image: '/img/listening/announcement/female-3.webp',
      speakerGender: 'female',
      transcript: 'Hello, everyone. The Wellness Center will offer free workshops on stress management throughout the semester. The first session is next Wednesday from four to five p.m. in the wellness room. We\'ll cover breathing techniques, time management strategies, and simple ways to handle exam pressure. No registration is needed and there is no fee; just show up. Seating is limited to thirty, so come a few minutes early. Later sessions will run on the same day and at the same time each week.',
      questions: [
        {
          id: 'lt5-m1-ann3-q1',
          stem: 'What is the focus of the workshop?',
          options: [
        { id: 'c', text: 'Healthy eating habits.', correct: false },
        { id: 'a', text: 'Sleep hygiene strategies.', correct: false },
        { id: 'd', text: 'Time management only.', correct: false },
        { id: 'b', text: 'Stress management techniques.', correct: true }
          ],
          explanation: 'Stress management.',
          points: 1
        },        {
          id: 'lt5-m1-ann3-q2',
          stem: 'What is required to attend?',
          options: [
        { id: 'd', text: 'Just showing up.', correct: true },
        { id: 'b', text: 'Signing up online first.', correct: false },
        { id: 'a', text: 'Paying a small fee.', correct: false },
        { id: 'c', text: 'Reserving a seat first.', correct: false }
          ],
          explanation: 'Just show up.',
          points: 1
        }
      ]
    },
      ],

      academicTalks: [
    {
      id: 'lt5-m1-talk1',
      title: 'Listen to a talk in a biology class.',
      audio: '/audio/listening/test-5/m1-talk1.mp3',
      image: '/img/listening/announcement/male-1.webp',
      speakerGender: 'male',
      transcript: 'Today we will discuss photosynthesis, the process by which plants convert sunlight into chemical energy. I want to cover three things: where it happens, what the chemistry does, and why the process is less efficient than you would expect. Almost all life on Earth depends, directly or indirectly, on this one process. Photosynthesis takes place mainly in the leaves, inside small structures called chloroplasts. Chloroplasts contain a green pigment named chlorophyll. Chlorophyll absorbs red and blue light from the sun and reflects green light back to our eyes, and that reflected light is the reason leaves look green to us. Now the chemistry. When sunlight strikes the chlorophyll, that energy is used to split water molecules into hydrogen and oxygen. The oxygen is released into the air. The hydrogen is combined with carbon dioxide drawn from the atmosphere to form a simple sugar called glucose, and that sugar provides the energy the plant needs to grow. So we can summarize the whole thing in one sentence: water plus carbon dioxide, in the presence of sunlight, produces glucose plus oxygen. Here is the part students find surprising. A typical crop plant converts only about one or two percent of the sunlight falling on it into stored chemical energy. The rest is reflected, transmitted, or lost as heat. Behind that tidy sentence sits a long chain of reactions, and every step leaks a little energy. Next class, we will look at how temperature and light intensity affect the rate of photosynthesis, and what that means for crop production.',
      questions: [
        {
          id: 'lt5-m1-talk1-q1',
          stem: 'What is the main topic of the talk?',
          options: [
        { id: 'c', text: 'How plants absorb water and minerals through their root systems.', correct: false },
        { id: 'b', text: 'The process by which plants convert sunlight into chemical energy.', correct: true },
        { id: 'd', text: 'The history of farming practices in different parts of the world.', correct: false },
        { id: 'a', text: 'How leaf color varies among the different species of plants.', correct: false }
          ],
          explanation: 'The lecture is about photosynthesis.',
          points: 1
        },        {
          id: 'lt5-m1-talk1-q2',
          stem: 'Why do leaves appear green according to the speaker?',
          options: [
        { id: 'c', text: 'Plants release small green particles into the air.', correct: false },
        { id: 'd', text: 'Chlorophyll reflects green light back to the eye.', correct: true },
        { id: 'b', text: 'Leaves contain a pigment that produces green by mixing colors.', correct: false },
        { id: 'a', text: 'Sunlight contains more green wavelengths than other colors.', correct: false }
          ],
          explanation: 'Chlorophyll absorbs red/blue and reflects green.',
          points: 1
        },        {
          id: 'lt5-m1-talk1-q3',
          stem: 'What is produced when sunlight splits water inside the chloroplast?',
          options: [
        { id: 'd', text: 'Hydrogen and oxygen.', correct: true },
        { id: 'b', text: 'Glucose and water vapor.', correct: false },
        { id: 'a', text: 'Carbon dioxide and energy.', correct: false },
        { id: 'c', text: 'Pure chlorophyll and carbon.', correct: false }
          ],
          explanation: 'Sunlight splits water into hydrogen and oxygen.',
          points: 1
        },        {
          id: 'lt5-m1-talk1-q4',
          stem: 'What will the speaker most likely discuss next?',
          options: [
        { id: 'b', text: 'Famous botanists from the early nineteenth century.', correct: false },
        { id: 'c', text: 'The chemical structure of various plant pigments.', correct: false },
        { id: 'd', text: 'Plant species that survive in extreme climates.', correct: false },
        { id: 'a', text: 'How temperature and light affect photosynthesis rates.', correct: true }
          ],
          explanation: 'He previews factors affecting photosynthesis and crop production.',
          points: 1
        }
      ]
    },
        {
          id: 'lt5-m1-talk2',
          title: 'Listen to a talk in a microbiology class.',
          audio: '/audio/listening/test-5/m1-talk2.mp3',
          image: '/img/listening/announcement/male-1.webp',
          speakerGender: 'male',
          transcript: 'Today let us discuss the discovery of penicillin, one of the most important medicines ever discovered. I want you to notice something as we go: how much of it came down to luck, and how little of the hard work was the lucky part. Penicillin was discovered by accident in 1928 by a British scientist named Alexander Fleming. Fleming was studying bacteria in his laboratory, and when he came back to his dishes he noticed that mold had grown in one of them. Here is the detail that mattered. Around that mold, the bacteria had died. Fleming realized the mold was producing something that killed bacteria, and he named that substance penicillin. Now, the discovery was one man noticing one dish. Turning it into a medicine was an entirely different job, and it took more than ten years for other scientists to work out how. The reason was practical. The mold produced only tiny quantities, and the substance was unstable and very difficult to purify. By the 1940s, though, penicillin was being given to patients, and it was saving lives. Why does it work so well? Penicillin attacks the cell wall that bacteria build around themselves. Our own cells have no such wall, so the drug can destroy the bacteria while leaving the patient unharmed. Before this, an infected cut could genuinely kill a healthy adult. Penicillin and the medicines modeled on it have saved millions of lives worldwide. Fleming gave us a warning along with the cure: use it carelessly, and bacteria will adapt.',
          questions: [
          {
            id: 'lt5-m1-talk2-q1',
            stem: 'What is the main idea of the talk?',
            options: [
                  { id: 'a', text: 'Penicillin was discovered by accident and changed medicine.', correct: true },
                  { id: 'c', text: 'Mold is harmful and should be avoided.', correct: false },
                  { id: 'b', text: 'Bacteria are dangerous and must be destroyed.', correct: false },
                  { id: 'd', text: 'Most medical discoveries take more than ten years.', correct: false }
            ],
            explanation: 'The talk explains how penicillin was discovered by accident and became an important medicine.',
            points: 1
          },
          {
            id: 'lt5-m1-talk2-q2',
            stem: 'What did Fleming notice in his laboratory?',
            options: [
                  { id: 'a', text: 'Bacteria had died around mold growing in a dish.', correct: true },
                  { id: 'c', text: 'A new type of bacteria had appeared in his dish.', correct: false },
                  { id: 'd', text: 'The mold was growing very quickly across the dish.', correct: false },
                  { id: 'b', text: 'His students had cleaned all of the laboratory dishes.', correct: false }
            ],
            explanation: 'Fleming noticed that the bacteria around the mold had died.',
            points: 1
          },
                            {
                id: 'lt5-m1-talk2-q3',
                stem: 'What does the speaker imply about careless use of penicillin?',
                options: [
                  { id: 'a', text: 'Bacteria could change and survive the drug.', correct: true },
                  { id: 'b', text: 'The drug would grow too costly to produce.', correct: false },
                  { id: 'c', text: 'Human cells would begin to be damaged too.', correct: false },
                  { id: 'd', text: 'The mold would stop making the useful substance.', correct: false }
                ],
                explanation: 'The closing warning is that using the drug carelessly gives bacteria the chance to adapt until it no longer kills them.',
                points: 1
              },
              {
                id: 'lt5-m1-talk2-q4',
                stem: 'What did it take more than ten years to do, according to the speaker?',
                options: [
                  { id: 'a', text: 'Convince doctors and hospitals that penicillin actually worked.', correct: false },
                  { id: 'c', text: 'Find other natural sources of the same kind of mold.', correct: false },
                  { id: 'b', text: 'Learn how to make penicillin into a useful medicine.', correct: true },
                  { id: 'd', text: 'Build the first hospital that used penicillin regularly.', correct: false }
                ],
                explanation: 'The speaker says it took more than ten years to learn how to make penicillin into a useful medicine.',
                points: 1
              }
          ]
        }
      ]
    },

    {
      id: 'module-2',
      title: 'Module 2',
      introAudio: 'audio/listening/test-5/m2-intro.mp3',

      chooseResponse: [
    {
      id: 'lt5-m2-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m2-cr01.mp3',
      image: '/img/listening/stock_modal/male-1.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Do you know if the bus to the train station runs on weekends?',
      options: [
        { id: 'd', text: 'Weekends affect the schedules quite a bit.', correct: false },
        { id: 'c', text: 'Train stations are always pretty busy.', correct: false },
        { id: 'b', text: 'Buses are usually convenient and cheap.', correct: false },
        { id: 'a', text: 'The 24 runs hourly on Saturdays.', correct: true }
      ],
      explanation: 'Detailed schedule information.',
      points: 1
    },
    {
      id: 'lt5-m2-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m2-cr02.mp3',
      image: '/img/listening/stock_modal/female-2.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m worried about the math placement test next week.',
      options: [
        { id: 'a', text: 'The tutoring center has free practice sessions Monday afternoons.', correct: true },
        { id: 'b', text: 'Tests cause stress, especially the ones that decide placement.', correct: false },
        { id: 'd', text: 'Math takes practice, and that placement test is famously hard.', correct: false },
        { id: 'c', text: 'Placement really matters more than most first-year students realize.', correct: false }
      ],
      explanation: 'Specific resource for preparation.',
      points: 1
    },
    {
      id: 'lt5-m2-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m2-cr03.mp3',
      image: '/img/listening/stock_modal/male-3.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Do you happen to know who delivers the pizza near campus?',
      options: [
        { id: 'c', text: 'Delivery is convenient, but the wait times can stretch on a Friday or Saturday night.', correct: false },
        { id: 'd', text: 'Ordering through an app is a lot simpler than calling the place.', correct: false },
        { id: 'b', text: 'The shop on Maple Street is the fastest. Their app is easy to use.', correct: true },
        { id: 'a', text: 'Pizza is popular around here, especially late at night on the weekends.', correct: false }
      ],
      explanation: 'Specific recommendation with detail.',
      points: 1
    },
    {
      id: 'lt5-m2-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m2-cr04.mp3',
      image: '/img/listening/stock_modal/female-4.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you hear the international club is holding a cooking night?',
      options: [
        { id: 'a', text: 'Clubs host events all the time during the fall semester.', correct: false },
        { id: 'c', text: 'I saw the flyer. Are you planning to bring something?', correct: true },
        { id: 'b', text: 'Cooking is fun, at least when someone else cleans up.', correct: false },
        { id: 'd', text: 'International foods are diverse, and the spring festival features many cuisines.', correct: false }
      ],
      explanation: 'Acknowledges and asks relevant question.',
      points: 1
    },
    {
      id: 'lt5-m2-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-5/m2-cr05.mp3',
      image: '/img/listening/stock_modal/male-5.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m thinking about taking a film studies course next semester.',
      options: [
        { id: 'b', text: 'Films are entertaining, but writing about them is real work.', correct: false },
        { id: 'd', text: 'Studies take effort, more than people expect from an elective.', correct: false },
        { id: 'c', text: 'Professor Larson\'s introduction class is excellent. Definitely consider it.', correct: true },
        { id: 'a', text: 'Semesters fill quickly, especially the popular electives outside your major.', correct: false }
      ],
      explanation: 'Specific recommendation.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt5-m2-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-5/m2-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Woman: I noticed they put out new microscopes in the lab.\nMan: I used one yesterday. The image quality is so much better at high magnification.\nWoman: Do they have the same controls as the old ones?\nMan: Mostly, but there\'s a digital camera attachment now, right where the eyepiece used to be.\nWoman: Oh, that would be great for capturing images for our lab reports.\nMan: Exactly. The lab tech showed me how to save the pictures straight to the cloud.\nWoman: Do we need to reserve one first?\nMan: No, there are eight of them, so you shouldn\'t have to wait.',
      questions: [
        {
          id: 'lt5-m2-conv1-q1',
          stem: 'What is new in the lab?',
          options: [
        { id: 'c', text: 'A larger workspace was added.', correct: false },
        { id: 'a', text: 'Additional safety equipment was installed.', correct: false },
        { id: 'b', text: 'A new graduate teaching assistant.', correct: false },
        { id: 'd', text: 'New microscopes with digital cameras.', correct: true }
          ],
          explanation: 'New microscopes with digital cameras.',
          points: 1
        },        {
          id: 'lt5-m2-conv1-q2',
          stem: 'What benefit does the woman mention?',
          options: [
        { id: 'c', text: 'Easier to share with multiple students.', correct: false },
        { id: 'a', text: 'Cleaner equipment for experiments.', correct: false },
        { id: 'd', text: 'Capturing images for lab reports.', correct: true },
        { id: 'b', text: 'Faster setup time for experiments.', correct: false }
          ],
          explanation: 'Useful for capturing images for reports.',
          points: 1
        }
      ]
    },
    {
      id: 'lt5-m2-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-5/m2-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Man: I\'m thinking of presenting at the undergraduate research symposium.\nWoman: That would be excellent for your applications. Have you started?\nMan: I have a draft poster, but the deadline feels close, and I can\'t print something that big.\nWoman: The library\'s media center can help you print it. Large format posters are free for students.\nMan: Good to know. How long does printing usually take?\nWoman: A few hours normally, but everyone rushes in the last week. Submit it the day before to be safe.\nMan: Then I\'ll upload it Thursday. Do they need a particular format?\nWoman: A PDF works best.',
      questions: [
        {
          id: 'lt5-m2-conv2-q1',
          stem: 'What is the man planning to do?',
          options: [
        { id: 'c', text: 'Present at the research symposium.', correct: true },
        { id: 'b', text: 'Submit a paper to a journal.', correct: false },
        { id: 'a', text: 'Apply for a research grant.', correct: false },
        { id: 'd', text: 'Switch research advisors.', correct: false }
          ],
          explanation: 'Present at the symposium.',
          points: 1
        },        {
          id: 'lt5-m2-conv2-q2',
          stem: 'What does the woman recommend?',
          options: [
        { id: 'a', text: 'Hiring a professional designer to lay out the poster.', correct: false },
        { id: 'c', text: 'Co-presenting the poster with another student from his own research group.', correct: false },
        { id: 'd', text: 'Skipping the poster and giving a short talk instead.', correct: false },
        { id: 'b', text: 'Asking the library to print his poster the day before.', correct: true }
          ],
          explanation: 'Submit poster to library to print early.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt5-m2-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-5/m2-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good afternoon, students. The science library has updated its lending policies for journals. Current issues can now be checked out for one week instead of staying in the reading room. Bring your student ID to the service desk to borrow them. Older bound volumes remain available for longer loans of up to three weeks. Reference sets still cannot leave the building. Please return materials on time so others can use them, since an overdue journal blocks your account until it comes back.',
      questions: [
        {
          id: 'lt5-m2-ann1-q1',
          stem: 'What change has been made?',
          options: [
        { id: 'c', text: 'Library hours have been extended into the late evening.', correct: false },
        { id: 'b', text: 'Late fees have been eliminated for all borrowers.', correct: false },
        { id: 'd', text: 'Current journal issues can now be checked out.', correct: true },
        { id: 'a', text: 'A new science library is opening on campus.', correct: false }
          ],
          explanation: 'Current journals can be checked out.',
          points: 1
        },        {
          id: 'lt5-m2-ann1-q2',
          stem: 'How long can current issues be checked out?',
          options: [
        { id: 'c', text: 'Three days.', correct: false },
        { id: 'd', text: 'Two weeks.', correct: false },
        { id: 'a', text: 'One month.', correct: false },
        { id: 'b', text: 'One week.', correct: true }
          ],
          explanation: 'One week.',
          points: 1
        }
      ]
    },
    {
      id: 'lt5-m2-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-5/m2-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Good morning. The botany department is recruiting volunteers for its spring planting project. Volunteers will help plant native wildflowers and grasses in the campus garden over two weekends in April, working in shifts of about three hours. No experience is needed, just enthusiasm; staff will demonstrate everything on site, and tools and gloves are provided. Wear closed shoes and clothes you don\'t mind getting muddy. Sign up at the department office or on its website by March 30th, because the seedlings are ordered that week.',
      questions: [
        {
          id: 'lt5-m2-ann2-q1',
          stem: 'What are volunteers needed for?',
          options: [
        { id: 'd', text: 'Designing a new garden layout.', correct: false },
        { id: 'c', text: 'Planting native species in spring.', correct: true },
        { id: 'a', text: 'Cleaning up the campus garden.', correct: false },
        { id: 'b', text: 'Conducting research on plant growth.', correct: false }
          ],
          explanation: 'Planting native species.',
          points: 1
        },        {
          id: 'lt5-m2-ann2-q2',
          stem: 'When do volunteers need to sign up by?',
          options: [
        { id: 'a', text: 'This Friday.', correct: false },
        { id: 'b', text: 'Whenever they wish.', correct: false },
        { id: 'c', text: 'March 30th.', correct: true },
        { id: 'd', text: 'End of April.', correct: false }
          ],
          explanation: 'March 30th.',
          points: 1
        }
      ]
    }
      ],

      academicTalks: [
        {
          id: 'lt5-m2-talk1',
          title: 'Listen to a talk in an environmental science class.',
          audio: '/audio/listening/test-5/m2-talk1.mp3',
          image: '/img/listening/announcement/female-3.webp',
          speakerGender: 'female',
          transcript: 'The nitrogen cycle is one of the most important processes that keeps ecosystems functioning, and it does almost all of its work out of sight. I want to trace nitrogen through the cycle, then look at what we have done to it. Start with the atmosphere. Nitrogen makes up about seventy-eight percent of the air around us, so there is no shortage. The problem is the form. Atmospheric nitrogen is a gas, and plants cannot absorb it in that state. Its two atoms are locked together by one of the strongest bonds in nature, and breaking that bond takes an enormous amount of energy. Certain bacteria can do it. Many of them live in the roots of legume plants, beans and peas for instance, and they convert atmospheric nitrogen into compounds that plants can absorb. It is a trade: the plant supplies sugars, the bacteria supply usable nitrogen. That is why farmers have rotated legumes through their fields for centuries. From there the path is straightforward. When animals eat plants, they incorporate this nitrogen into their own tissues, mostly as protein. When plants and animals die, decomposers break their bodies down and release nitrogen back into the soil. Eventually, other bacteria convert it back into atmospheric nitrogen, completing the cycle. Modern agriculture has dramatically altered this by manufacturing synthetic fertilizers. Yields went up, no question. But the excess nitrogen that runs off into rivers and oceans causes serious environmental problems, feeding algal blooms that strip the water of oxygen and leave dead zones behind.',
          questions: [
            {
              id: 'lt5-m2-talk1-q1',
              stem: 'According to the speaker, why can plants not use atmospheric nitrogen directly?',
              options: [
                { id: 'a', text: 'Plants lack the special chlorophyll they would need to absorb nitrogen', correct: false },
                { id: 'b', text: 'Atmospheric nitrogen is in a gaseous form that plants cannot absorb', correct: true },
                { id: 'd', text: 'Plants are only able to absorb nitrogen during the night', correct: false },
                { id: 'c', text: 'There is far too little nitrogen present in the earth\'s atmosphere', correct: false }
              ],
              explanation: 'The speaker explains that nitrogen is in the atmosphere as a gas, which plants cannot use; bacteria convert it into a usable form.',
              points: 1
            },
            {
              id: 'lt5-m2-talk1-q2',
              stem: 'What environmental problem does the speaker associate with synthetic fertilizers?',
              options: [
                { id: 'd', text: 'Decreased bacterial activity in the surrounding farm soil', correct: false },
                { id: 'b', text: 'Increased levels of nitrogen in the atmosphere', correct: false },
                { id: 'a', text: 'Reduced crop yields over the long term', correct: false },
                { id: 'c', text: 'Excess nitrogen runoff into rivers and oceans', correct: true }
              ],
              explanation: 'The speaker notes that excess nitrogen running off into rivers and oceans causes serious environmental problems.',
              points: 1
            },
                            {
                id: 'lt5-m2-talk1-q3',
                stem: 'Why does the speaker call the legume relationship a trade?',
                options: [
                  { id: 'c', text: 'Because plants must be rotated between different fields yearly', correct: false },
                  { id: 'a', text: 'Because farmers sell legume crops to other regions', correct: false },
                  { id: 'b', text: 'Because the bacteria take nutrients without giving anything back', correct: false },
                  { id: 'd', text: 'Because each side supplies something the other cannot make', correct: true }
                ],
                explanation: 'The speaker calls it a trade because the plant provides sugars while the bacteria provide nitrogen in a form the plant could never obtain on its own.',
                points: 1
              },
                            {
                id: 'lt5-m2-talk1-q4',
                stem: 'According to the speaker, why do algal blooms create dead zones?',
                options: [
                  { id: 'b', text: 'They remove the oxygen that other water life needs', correct: true },
                  { id: 'a', text: 'They feed larger fish populations near the coastline', correct: false },
                  { id: 'd', text: 'They release nitrogen gas back into the open air', correct: false },
                  { id: 'c', text: 'They make the water too salty for young fish', correct: false }
                ],
                explanation: 'The speaker says the blooms strip the water of oxygen, which is what leaves dead zones behind.',
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
    introAudio: '/audio/listening/test-5/m2-intro.mp3',
    chooseResponse: [
          {
            id: 'lt5-m2e-cr1',
            type: 'choose_response',
            audio: '/audio/listening/test-5/m2e-cr01.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Could you pass me the salt, please?',
            options: [
              { id: 'b', text: 'Salt is good for cooking.', correct: false },
              { id: 'c', text: 'I do not use much salt.', correct: false },
              { id: 'a', text: 'Sure, here it is.', correct: true },
              { id: 'd', text: 'The kitchen is small.', correct: false }
            ],
            explanation: 'The speaker is making a request, so the correct response complies.',
            points: 1
          },
          {
            id: 'lt5-m2e-cr2',
            type: 'choose_response',
            audio: '/audio/listening/test-5/m2e-cr02.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'How was your math test?',
            options: [
              { id: 'b', text: 'It was harder than I expected.', correct: true },
              { id: 'a', text: 'Math is hard for most people.', correct: false },
              { id: 'c', text: 'Tests are always stressful for me.', correct: false },
              { id: 'd', text: 'I have another math test on Friday.', correct: false }
            ],
            explanation: 'The speaker is asking about test experience, so the correct response describes it.',
            points: 1
          },
          {
            id: 'lt5-m2e-cr3',
            type: 'choose_response',
            audio: '/audio/listening/test-5/m2e-cr03.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Are you free for lunch tomorrow?',
            options: [
              { id: 'c', text: 'The cafeteria has really good food.', correct: false },
              { id: 'd', text: 'I had a sandwich for lunch yesterday.', correct: false },
              { id: 'b', text: 'Yes, I am free at noon.', correct: true },
              { id: 'a', text: 'Lunch is easily my favorite meal.', correct: false }
            ],
            explanation: 'The speaker is asking about availability, so the correct response confirms it.',
            points: 1
          },
          {
            id: 'lt5-m2e-cr4',
            type: 'choose_response',
            audio: '/audio/listening/test-5/m2e-cr04.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Did you bring your textbook today?',
            options: [
              { id: 'c', text: 'I bought it online just last week.', correct: false },
              { id: 'a', text: 'Books are heavy to carry around.', correct: false },
              { id: 'd', text: 'Textbooks are very expensive this year.', correct: false },
              { id: 'b', text: 'Yes, it is in my backpack.', correct: true }
            ],
            explanation: 'The speaker is asking a yes/no question about bringing a book.',
            points: 1
          },
          {
            id: 'lt5-m2e-cr5',
            type: 'choose_response',
            audio: '/audio/listening/test-5/m2e-cr05.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Could you please speak a little louder?',
            options: [
              { id: 'a', text: 'Sorry, can you hear me now?', correct: true },
              { id: 'd', text: 'The room is very large and noisy.', correct: false },
              { id: 'c', text: 'I have a very quiet voice.', correct: false },
              { id: 'b', text: 'Speaking well is a real art.', correct: false }
            ],
            explanation: 'The speaker is making a request to be louder, so the correct response complies and checks.',
            points: 1
          },
    ],
    conversations: [
          {
            id: 'lt5-m2e-conv1',
            title: 'Listen to a conversation.',
            audio: '/audio/listening/test-5/m2e-conv1.mp3',
            image: '/img/listening/two_people/people-1.webp',
            transcript: 'Man: Excuse me, I am looking for the biology textbook for class 101.\nWoman: Sure. We have new ones and used ones. Which would you like?\nMan: How much do they cost?\nWoman: New books are eighty dollars. Used books are forty.\nMan: I will take a used one to save money.\nWoman: Good choice. Let me check if we have any in stock.\nMan: Thank you. I also need a notebook and some pens.\nWoman: Those are in aisle three. I can show you when I come back.',
            questions: [
              {
                id: 'lt5-m2e-conv1-q1',
                stem: 'What is the man trying to buy?',
                options: [
                  { id: 'b', text: 'A history textbook.', correct: false },
                  { id: 'a', text: 'A biology textbook.', correct: true },
                  { id: 'c', text: 'A short novel.', correct: false },
                  { id: 'd', text: 'A study guide.', correct: false }
                ],
                explanation: 'The man is looking for the biology textbook for class 101.',
                points: 1
              },
              {
                id: 'lt5-m2e-conv1-q2',
                stem: 'How much does a used book cost?',
                options: [
                  { id: 'd', text: 'One hundred dollars.', correct: false },
                  { id: 'c', text: 'Twenty dollars.', correct: false },
                  { id: 'b', text: 'Forty dollars.', correct: true },
                  { id: 'a', text: 'Eighty dollars.', correct: false }
                ],
                explanation: 'The woman says used books are forty dollars.',
                points: 1
              }
            ]
          },
        {
          id: 'lt5-m2e-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-5/m2e-conv2.mp3',
          image: '/img/listening/two_people/people-1.webp',
          transcript: 'Woman: Hi Jack, are you free this evening?\nMan: I have some homework to do, but I should be free after eight.\nWoman: Want to join me at the new bookstore on Pine Street?\nMan: Sure, I have been meaning to check it out. What time does it close?\nWoman: It is open until ten on Thursdays.\nMan: Perfect. I will meet you there at eight thirty.',
          questions: [
          {
            id: 'lt5-m2e-conv2-q1',
            stem: 'When can the man go out?',
            options: [
                  { id: 'c', text: 'Only on weekends, not during the week.', correct: false },
                  { id: 'a', text: 'After dinner, sometime around six o\'clock.', correct: false },
                  { id: 'b', text: 'After eight, once his homework is done.', correct: true },
                  { id: 'd', text: 'In the morning, before his classes.', correct: false }
            ],
            explanation: 'The man says he should be free after eight, once his homework is done.',
            points: 1
          },
          {
            id: 'lt5-m2e-conv2-q2',
            stem: 'What time does the bookstore close on Thursdays?',
            options: [
                  { id: 'b', text: 'Nine p.m.', correct: false },
                  { id: 'a', text: 'Eight p.m.', correct: false },
                  { id: 'd', text: 'Twelve a.m.', correct: false },
                  { id: 'c', text: 'Ten p.m.', correct: true }
            ],
            explanation: 'The woman says the bookstore is open until ten on Thursdays.',
            points: 1
          }
          ]
        }
    ],
    announcements: [
          {
            id: 'lt5-m2e-ann1',
            title: 'Listen to an announcement at a university.',
            audio: '/audio/listening/test-5/m2e-ann1.mp3',
            image: '/img/listening/announcement/female-1.webp',
            speakerGender: 'female',
            transcript: 'Good morning. The student health insurance enrollment period begins next Monday. All full-time students must have health insurance. If you have your own insurance, please show proof at the health office. If you need university insurance, you can sign up online. The deadline to enroll is the last day of this month. After that, you will pay a late fee. If you have questions, the health office is open Monday through Friday from nine to five.',
            questions: [
              {
                id: 'lt5-m2e-ann1-q1',
                stem: 'Who must have health insurance?',
                options: [
                  { id: 'c', text: 'Students who play sports.', correct: false },
                  { id: 'd', text: 'Only international students.', correct: false },
                  { id: 'b', text: 'All full-time students.', correct: true },
                  { id: 'a', text: 'Only first-year students.', correct: false }
                ],
                explanation: 'The announcement says all full-time students must have health insurance.',
                points: 1
              },
              {
                id: 'lt5-m2e-ann1-q2',
                stem: 'What should students do if they have their own insurance?',
                options: [
                  { id: 'd', text: 'Talk to a financial advisor.', correct: false },
                  { id: 'a', text: 'Show proof at the health office.', correct: true },
                  { id: 'b', text: 'Cancel their previous insurance policy.', correct: false },
                  { id: 'c', text: 'Apply for the university plan anyway.', correct: false }
                ],
                explanation: 'The announcement says to show proof at the health office.',
                points: 1
              }
            ]
          },
        {
          id: 'lt5-m2e-ann2',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-5/m2e-ann2.mp3',
          image: '/img/listening/announcement/female-1.webp',
          speakerGender: 'female',
          transcript: 'Hello everyone. The campus dining hall will be serving a special international food night next Wednesday from five p.m. to eight p.m. Dishes from over ten countries will be available. The price is the same as a regular meal. Please arrive early because the most popular dishes tend to run out quickly. Vegetarian options will be clearly marked.',
          questions: [
          {
            id: 'lt5-m2e-ann2-q1',
            stem: 'What is special about next Wednesday\'s dinner?',
            options: [
                  { id: 'a', text: 'It will be completely free of charge.', correct: false },
                  { id: 'c', text: 'Only vegetarian food will be served that entire evening.', correct: false },
                  { id: 'b', text: 'Dishes from over ten countries will be served.', correct: true },
                  { id: 'd', text: 'Famous chefs are visiting the dining hall.', correct: false }
            ],
            explanation: 'The announcement says dishes from over ten countries will be available.',
            points: 1
          },
          {
            id: 'lt5-m2e-ann2-q2',
            stem: 'Why should students arrive early?',
            options: [
                  { id: 'd', text: 'Because seating in the dining hall is very limited.', correct: false },
                  { id: 'b', text: 'Because the most popular dishes run out quickly.', correct: true },
                  { id: 'a', text: 'To get a free t-shirt at the door.', correct: false },
                  { id: 'c', text: 'To meet the visiting chefs before the meal.', correct: false }
            ],
            explanation: 'The announcement says students should arrive early because the most popular dishes tend to run out quickly.',
            points: 1
          }
          ]
        }
    ],
    academicTalks: [
          {
            id: 'lt5-m2e-talk1',
            title: 'Listen to a talk in an astronomy class.',
            audio: '/audio/listening/test-5/m2e-talk1.mp3',
            image: '/img/listening/announcement/male-1.webp',
            speakerGender: 'male',
            transcript: 'Today let us talk about the moon. The moon is the closest object in space to the Earth. It moves around our planet, taking about twenty-eight days to complete one full trip. The moon does not make its own light. The light we see at night comes from the sun and bounces off the moon\'s surface. The moon also affects our oceans. Its gravity pulls on the water, which causes the tides to rise and fall every day. People have been studying the moon for thousands of years. In 1969, astronauts walked on the moon for the first time. Since then, scientists have learned a lot about its surface and history.',
            questions: [
              {
                id: 'lt5-m2e-talk1-q1',
                stem: 'What is the talk mainly about?',
                options: [
                  { id: 'd', text: 'Why the moon has craters.', correct: false },
                  { id: 'a', text: 'Basic facts about the moon.', correct: true },
                  { id: 'c', text: 'The history of space exploration.', correct: false },
                  { id: 'b', text: 'How astronauts traveled to the moon.', correct: false }
                ],
                explanation: 'The talk gives basic facts about the moon: its motion, its light, its effect on tides, and human exploration.',
                points: 1
              },
              {
                id: 'lt5-m2e-talk1-q2',
                stem: 'What does the moon\'s gravity cause?',
                options: [
                  { id: 'c', text: 'Earthquakes on the Earth\'s surface.', correct: false },
                  { id: 'b', text: 'The tides to rise and fall.', correct: true },
                  { id: 'a', text: 'Stronger winds over the ocean.', correct: false },
                  { id: 'd', text: 'Changes in the seasons throughout the year.', correct: false }
                ],
                explanation: 'The talk says the moon\'s gravity pulls on the water, causing tides.',
                points: 1
              },
              {
                id: 'lt5-m2e-talk1-q3',
                stem: 'How long does the moon take to travel around the Earth?',
                options: [
                  { id: 'c', text: 'About twenty-eight days.', correct: true },
                  { id: 'd', text: 'About one year.', correct: false },
                  { id: 'b', text: 'About a week.', correct: false },
                  { id: 'a', text: 'About one day.', correct: false }
                ],
                explanation: 'The talk says the moon takes about twenty-eight days to complete one full trip around the Earth.',
                points: 1
              },
              {
                id: 'lt5-m2e-talk1-q4',
                stem: 'Where does the light we see from the moon come from?',
                options: [
                  { id: 'b', text: 'From the sun, bouncing off the moon\'s surface.', correct: true },
                  { id: 'd', text: 'From the Earth itself, not the sun.', correct: false },
                  { id: 'a', text: 'From inside the moon, which makes its own light.', correct: false },
                  { id: 'c', text: 'From distant stars far beyond our solar system.', correct: false }
                ],
                explanation: 'The talk says the moon does not make its own light; the light comes from the sun and bounces off the moon\'s surface.',
                points: 1
              }
            ]
          }
    ]
  },
};

// Alias for full-test loader, which reads window.LISTENING_TEST_5
window.LISTENING_TEST_5 = window.LISTENING_SECTION_5;
