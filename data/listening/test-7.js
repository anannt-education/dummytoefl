// TOEFL iBT 2026 Listening Practice — Test 7
// Module 1 (Router): 30 questions | Module 2: 17 questions | Total: 47
// Audio: pre-recorded MP3 files in /audio/listening/test-7/

window.LISTENING_SECTION_7 = {
  id: 'listening-test-7',
  title: 'Listening Practice Test 7',
  format: '2026',
  timeLimit: 1740,

  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      introAudio: 'audio/listening/test-7/m1-intro.mp3',

      chooseResponse: [
    {
      id: 'lt7-m1-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m1-cr01.mp3',
      image: '/img/listening/stock_modal/male-1.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you hear they updated the campus map app?',
      options: [
        { id: 'b', text: 'Updates can improve apps, though some older ones look pretty dated.', correct: false },
        { id: 'c', text: 'Maps help a lot when you\'re finding your way around campus.', correct: false },
        { id: 'd', text: 'Apps update pretty often these days, sometimes every couple of weeks.', correct: false },
        { id: 'a', text: 'I downloaded the new version last night. It\'s much clearer.', correct: true }
      ],
      explanation: 'Direct experience confirmation.',
      points: 1
    },
    {
      id: 'lt7-m1-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m1-cr02.mp3',
      image: '/img/listening/stock_modal/female-2.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Have you considered taking a summer language course?',
      options: [
        { id: 'c', text: 'Summer courses are usually pretty intensive.', correct: false },
        { id: 'a', text: 'I looked into French.', correct: true },
        { id: 'b', text: 'Schedules can clash pretty easily.', correct: false },
        { id: 'd', text: 'Languages are useful in most careers.', correct: false }
      ],
      explanation: 'Specific consideration with obstacle.',
      points: 1
    },
    {
      id: 'lt7-m1-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m1-cr03.mp3',
      image: '/img/listening/stock_modal/male-3.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m looking for a quiet place to make a phone call.',
      options: [
        { id: 'd', text: 'Libraries vary a lot in noise, but the engineering one is usually quieter.', correct: false },
        { id: 'a', text: 'Phone calls happen pretty often around here, especially right between classes.', correct: false },
        { id: 'c', text: 'Quiet spaces really matter when you need to concentrate on something.', correct: false },
        { id: 'b', text: 'The small lounge on the second floor of the library is usually empty.', correct: true }
      ],
      explanation: 'Specific location suggestion.',
      points: 1
    },
    {
      id: 'lt7-m1-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m1-cr04.mp3',
      image: '/img/listening/stock_modal/female-4.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you turn in the financial aid forms?',
      options: [
        { id: 'b', text: 'Forms always take time, especially the ones that need a parent\'s signature.', correct: false },
        { id: 'c', text: 'Financial aid helps a lot, though the timing of the disbursement matters too.', correct: false },
        { id: 'd', text: 'I submitted them yesterday. Now I just have to wait for the decision.', correct: true },
        { id: 'a', text: 'Decisions vary quite a bit depending on the year and the fund.', correct: false }
      ],
      explanation: 'Status with next step.',
      points: 1
    },
    {
      id: 'lt7-m1-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m1-cr05.mp3',
      image: '/img/listening/stock_modal/male-5.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m not sure I want to take the early-morning lab.',
      options: [
        { id: 'b', text: 'Class times do limit your options.', correct: false },
        { id: 'd', text: 'Labs take a lot of effort.', correct: false },
        { id: 'a', text: 'The 8 AM is brutal.', correct: true },
        { id: 'c', text: 'Mornings vary from person to person.', correct: false }
      ],
      explanation: 'Trade-off context.',
      points: 1
    },
    {
      id: 'lt7-m1-cr6',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m1-cr06.mp3',
      image: '/img/listening/stock_modal/female-6.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Have you tried the new bagel place downtown?',
      options: [
        { id: 'c', text: 'I went last weekend. Their everything bagel is amazing.', correct: true },
        { id: 'a', text: 'Downtown has plenty of options if you look around.', correct: false },
        { id: 'd', text: 'Bagels are tasty, especially when they come out warm.', correct: false },
        { id: 'b', text: 'New places are exciting, especially the cafes that opened downtown.', correct: false }
      ],
      explanation: 'Specific experience and recommendation.',
      points: 1
    },
    {
      id: 'lt7-m1-cr7',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m1-cr07.mp3',
      image: '/img/listening/stock_modal/male-1.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you going to apply for the residential advisor position?',
      options: [
        { id: 'b', text: 'Deadlines matter more than most people think.', correct: false },
        { id: 'c', text: 'Those positions are competitive since they include free housing.', correct: false },
        { id: 'd', text: 'I am. The deadline is next week.', correct: true },
        { id: 'a', text: 'Applications take a fair amount of effort.', correct: false }
      ],
      explanation: 'Direct yes with timeline.',
      points: 1
    },
    {
      id: 'lt7-m1-cr8',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m1-cr08.mp3',
      image: '/img/listening/stock_modal/female-2.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I haven\'t been able to focus on my reading lately.',
      options: [
        { id: 'c', text: 'Have you tried the timed Pomodoro method? It works wonders for me.', correct: true },
        { id: 'd', text: 'Study methods vary quite a lot from one person to another.', correct: false },
        { id: 'a', text: 'Reading takes real attention, especially when the chapter is more theoretical than usual.', correct: false },
        { id: 'b', text: 'Focus is elusive when there is far too much going on.', correct: false }
      ],
      explanation: 'Specific actionable suggestion.',
      points: 1
    },
    {
      id: 'lt7-m1-cr9',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m1-cr09.mp3',
      image: '/img/listening/stock_modal/male-3.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you submit your scholarship essay yet?',
      options: [
        { id: 'c', text: 'Revisions improve the work, but the second pass always takes longer.', correct: false },
        { id: 'd', text: 'I\'m doing one final revision tonight before sending it tomorrow.', correct: true },
        { id: 'a', text: 'Scholarships help a lot, especially with the cost of housing.', correct: false },
        { id: 'b', text: 'Essays matter more than the rest of the application does.', correct: false }
      ],
      explanation: 'Specific status and timeline.',
      points: 1
    },
    {
      id: 'lt7-m1-cr10',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m1-cr10.mp3',
      image: '/img/listening/stock_modal/female-4.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Do you happen to know if the meditation room is open?',
      options: [
        { id: 'a', text: 'Rooms vary.', correct: false },
        { id: 'd', text: 'It is.', correct: true },
        { id: 'b', text: 'Booking is common.', correct: false },
        { id: 'c', text: 'Meditation helps.', correct: false }
      ],
      explanation: 'Specific procedure info.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt7-m1-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-7/m1-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Man: I\'m having trouble adjusting to my class schedule this semester.\nWoman: What\'s the issue?\nMan: I have classes spread out from morning until late evening. There\'s a three hour gap every afternoon that I waste.\nWoman: Have you used the calendar tool to plan your study time?\nMan: Not really. I\'ve just been winging it, and by nine I\'m too tired to read.\nWoman: That\'s the problem. Try blocking out study chunks, an hour in each gap, and treat them like class.\nMan: So I\'d actually put them on the calendar?\nWoman: With a room and everything. It helped me last term.',
      questions: [
        {
          id: 'lt7-m1-conv1-q1',
          stem: 'What is the man\'s problem?',
          options: [
        { id: 'b', text: 'He doesn\'t get along with his new roommate this semester.', correct: false },
        { id: 'c', text: 'He can\'t get into the classes he wants this semester.', correct: false },
        { id: 'd', text: 'His class schedule is spread out and hard to manage.', correct: true },
        { id: 'a', text: 'His textbooks still haven\'t arrived from the campus bookstore yet.', correct: false }
          ],
          explanation: 'Schedule spread out, hard to manage.',
          points: 1
        },        {
          id: 'lt7-m1-conv1-q2',
          stem: 'What does the woman recommend?',
          options: [
        { id: 'd', text: 'Hiring a tutor to help him get organized.', correct: false },
        { id: 'b', text: 'Blocking out specific study time on a calendar.', correct: true },
        { id: 'c', text: 'Switching to a schedule with morning classes only.', correct: false },
        { id: 'a', text: 'Dropping one of his classes later this semester.', correct: false }
          ],
          explanation: 'Block out study time on calendar.',
          points: 1
        }
      ]
    },
    {
      id: 'lt7-m1-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-7/m1-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Woman: I just submitted my application for the summer research program.\nMan: That\'s great. When will you hear back?\nWoman: They said decisions come out in early March.\nMan: That\'s still a few weeks away. Try not to stress about it.\nWoman: I\'ll try. The personal statement was the hard part. I rewrote it four times.\nMan: That\'s more drafts than most people do. Did anyone read it?\nWoman: A friend in biology did, and she caught two vague spots. Did you apply for anything similar?\nMan: I applied for a teaching internship downtown. I hear back next week, so I\'m the nervous one now.',
      questions: [
        {
          id: 'lt7-m1-conv2-q1',
          stem: 'What did the woman just do?',
          options: [
        { id: 'd', text: 'Schedule an interview for a teaching internship.', correct: false },
        { id: 'a', text: 'Submit a research program application.', correct: true },
        { id: 'c', text: 'Email her faculty advisor for some guidance.', correct: false },
        { id: 'b', text: 'Drop a course for the summer.', correct: false }
          ],
          explanation: 'Submitted research program application.',
          points: 1
        },        {
          id: 'lt7-m1-conv2-q2',
          stem: 'When does the woman expect to hear back?',
          options: [
        { id: 'a', text: 'Early March.', correct: true },
        { id: 'b', text: 'This Friday.', correct: false },
        { id: 'c', text: 'End of the semester.', correct: false },
        { id: 'd', text: 'Next week.', correct: false }
          ],
          explanation: 'Early March.',
          points: 1
        }
      ]
    },
    {
      id: 'lt7-m1-conv3',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-7/m1-conv3.mp3',
      image: '/img/listening/two_people/people-3.webp',
      transcript: 'Man: I just joined the volunteer tutoring program.\nWoman: That\'s wonderful. What subjects will you tutor?\nMan: Math, mostly. I\'m placed at a local high school about ten minutes from campus.\nWoman: Did they make you train first?\nMan: There was a two hour orientation last week, and they gave us the students\' textbook.\nWoman: How often do you go?\nMan: Once a week, on Thursday afternoons. I\'m there from two until four, and the same four students come.\nWoman: That\'s manageable with classes. I might join too. Are they still taking people?\nMan: Yes, but only through the end of the month.',
      questions: [
        {
          id: 'lt7-m1-conv3-q1',
          stem: 'What did the man recently do?',
          options: [
        { id: 'c', text: 'Apply for a teaching license.', correct: false },
        { id: 'b', text: 'Switch his major to education.', correct: false },
        { id: 'd', text: 'Take a placement exam in math.', correct: false },
        { id: 'a', text: 'Join a volunteer tutoring program.', correct: true }
          ],
          explanation: 'Joined volunteer tutoring.',
          points: 1
        },        {
          id: 'lt7-m1-conv3-q2',
          stem: 'How often does he tutor?',
          options: [
        { id: 'a', text: 'Every weekday afternoon after his classes.', correct: false },
        { id: 'b', text: 'Once a week on Thursday afternoons.', correct: true },
        { id: 'd', text: 'Twice a week in the evenings.', correct: false },
        { id: 'c', text: 'Only on weekends, usually Saturday mornings.', correct: false }
          ],
          explanation: 'Once weekly on Thursdays.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt7-m1-ann1',
      title: 'Listen to an announcement at the observatory.',
      audio: '/audio/listening/test-7/m1-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good evening. The campus observatory will host a public viewing night this Saturday at eight p.m. Weather permitting, you\'ll be able to view the moon, several planets, and a few deep-sky objects. Saturn sits low in the west and will set by ten, so arrive early if that is what you came for. Telescopes will be available, and astronomy club members will be on hand to answer questions. The event is free and no registration is required. Dress warmly, since the dome is unheated.',
      questions: [
        {
          id: 'lt7-m1-ann1-q1',
          stem: 'What is the event about?',
          options: [
        { id: 'b', text: 'A planetarium show for the public.', correct: false },
        { id: 'd', text: 'A public observatory viewing night.', correct: true },
        { id: 'c', text: 'A telescope demonstration for students only.', correct: false },
        { id: 'a', text: 'An evening lecture on astronomy topics.', correct: false }
          ],
          explanation: 'Public observatory viewing.',
          points: 1
        },        {
          id: 'lt7-m1-ann1-q2',
          stem: 'What can attendees view?',
          options: [
        { id: 'b', text: 'Only deep-sky objects.', correct: false },
        { id: 'd', text: 'The moon, planets.', correct: true },
        { id: 'c', text: 'Specially observed comets.', correct: false },
        { id: 'a', text: 'Only the moon.', correct: false }
          ],
          explanation: 'Moon, planets, deep-sky objects.',
          points: 1
        }
      ]
    },
    {
      id: 'lt7-m1-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-7/m1-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Attention all students. The campus IT helpdesk is moving to a new location next Monday. Look for us on the second floor of the student services building, in room two eleven, just past the financial aid counter. Hours remain the same: nine to seven on weekdays, ten to five on weekends. We\'re easy to find with new signs throughout the building. If you need a laptop repair that first week, expect a longer wait, since the loaner machines are being moved too.',
      questions: [
        {
          id: 'lt7-m1-ann2-q1',
          stem: 'What change is being announced?',
          options: [
        { id: 'a', text: 'The IT helpdesk is moving to a new location.', correct: true },
        { id: 'b', text: 'The IT helpdesk is closing temporarily for building repairs.', correct: false },
        { id: 'c', text: 'A second IT helpdesk is opening in another building.', correct: false },
        { id: 'd', text: 'The IT helpdesk hours are changing starting next Monday.', correct: false }
          ],
          explanation: 'IT helpdesk moving locations.',
          points: 1
        },        {
          id: 'lt7-m1-ann2-q2',
          stem: 'What about the helpdesk is staying the same?',
          options: [
        { id: 'a', text: 'The hours.', correct: true },
        { id: 'd', text: 'The staff.', correct: false },
        { id: 'c', text: 'The location.', correct: false },
        { id: 'b', text: 'The phone number.', correct: false }
          ],
          explanation: 'Hours remain the same.',
          points: 1
        }
      ]
    },
    {
      id: 'lt7-m1-ann3',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-7/m1-ann3.mp3',
      image: '/img/listening/announcement/female-3.webp',
      speakerGender: 'female',
      transcript: 'Hello, everyone. The Office of Student Life is announcing the final round of grant applications for student organizations. Applications are due next Friday at five p.m. and can fund events up to a thousand dollars. Late forms will not be reviewed. Your group must be registered with our office and have a faculty advisor. Include a budget and your event date, and note that food and printing are covered but travel is not. Stop by the student life office for an application or download one online.',
      questions: [
        {
          id: 'lt7-m1-ann3-q1',
          stem: 'What is being announced?',
          options: [
        { id: 'c', text: 'Tuition assistance for students with financial need.', correct: false },
        { id: 'b', text: 'The final round of student organization grants.', correct: true },
        { id: 'd', text: 'A loan program for registered student groups.', correct: false },
        { id: 'a', text: 'A new scholarship for individual student applicants.', correct: false }
          ],
          explanation: 'Final grant round.',
          points: 1
        },        {
          id: 'lt7-m1-ann3-q2',
          stem: 'What is the maximum grant amount?',
          options: [
        { id: 'a', text: 'Two thousand dollars.', correct: false },
        { id: 'd', text: 'One thousand dollars.', correct: true },
        { id: 'c', text: 'Five thousand dollars.', correct: false },
        { id: 'b', text: 'Five hundred dollars.', correct: false }
          ],
          explanation: 'One thousand dollars.',
          points: 1
        }
      ]
    },
      ],

      academicTalks: [
    {
      id: 'lt7-m1-talk1',
      title: 'Listen to a talk in an astronomy class.',
      audio: '/audio/listening/test-7/m1-talk1.mp3',
      image: '/img/listening/announcement/male-3.webp',
      speakerGender: 'male',
      transcript: 'Today we\'ll look at how stars are born. Stars form inside enormous clouds of gas and dust called nebulae. These clouds are mostly made of hydrogen, the simplest and most common element in the universe. When part of a nebula becomes denser than its surroundings, gravity begins to pull material inward. As more gas accumulates, the cloud collapses on itself, and the temperature at the center rises sharply. That collapse is not quick. For a star like our Sun, it takes on the order of a hundred thousand years. Once the core reaches roughly ten million kelvin, hydrogen atoms begin to fuse into helium, releasing enormous amounts of energy. This is the moment a true star is born. The new star settles into a balance between two opposing forces: gravity pulling material inward, and the outward pressure created by fusion in the core. As long as that balance holds, the star is stable, and it can continue to shine for millions or even billions of years. A cloud rarely produces a single star. It fragments, so stars are usually born in groups. The Orion Nebula is the standard example, with hundreds of young stars forming inside it right now. Lifespan depends on mass. Massive stars burn through their fuel quickly and die in dramatic explosions, while smaller stars like our Sun live much longer and end their lives more quietly. Next class, we will trace what happens after a star runs out of hydrogen, including the formation of red giants, white dwarfs, and neutron stars.',
      questions: [
        {
          id: 'lt7-m1-talk1-q1',
          stem: 'What is the main topic of the talk?',
          options: [
        { id: 'd', text: 'How astronomers measure the distance to stars in our galaxy.', correct: false },
        { id: 'a', text: 'Why hydrogen is the most common element in the universe.', correct: false },
        { id: 'b', text: 'The brightness of different stars in the night sky.', correct: false },
        { id: 'c', text: 'How stars are formed inside clouds of gas and dust.', correct: true }
          ],
          explanation: 'The talk explains star formation.',
          points: 1
        },        {
          id: 'lt7-m1-talk1-q2',
          stem: 'According to the speaker, what causes a nebula to begin collapsing?',
          options: [
        { id: 'b', text: 'A region becoming denser than its surroundings, attracting more material by gravity.', correct: true },
        { id: 'c', text: 'A nearby supernova explosion compressing the cloud from the outside.', correct: false },
        { id: 'a', text: 'The sudden release of helium gas throughout the surrounding cloud.', correct: false },
        { id: 'd', text: 'The slow rotation of the entire galaxy around its own central axis.', correct: false }
          ],
          explanation: 'Gravity pulls material inward when part of the cloud is denser.',
          points: 1
        },        {
          id: 'lt7-m1-talk1-q3',
          stem: 'What two forces balance inside a stable star?',
          options: [
        { id: 'b', text: 'Gravity pulling inward and pressure from fusion pushing outward.', correct: true },
        { id: 'a', text: 'Heat from nearby stars and gravity from the galactic core.', correct: false },
        { id: 'd', text: 'Solar wind and radiation pressure from a black hole.', correct: false },
        { id: 'c', text: 'Magnetic force pushing outward and rotational momentum pulling inward.', correct: false }
          ],
          explanation: 'Gravity inward vs. outward fusion pressure.',
          points: 1
        },        {
          id: 'lt7-m1-talk1-q4',
          stem: 'What will the speaker most likely discuss next?',
          options: [
        { id: 'c', text: 'Recent missions sent to explore Mars and the outer planets.', correct: false },
        { id: 'd', text: 'How telescope technology has improved since the start of the 1990s.', correct: false },
        { id: 'b', text: 'What happens to a star after it runs out of hydrogen.', correct: true },
        { id: 'a', text: 'The mathematical equations that describe stellar physics in more detail.', correct: false }
          ],
          explanation: 'He previews red giants, white dwarfs, neutron stars.',
          points: 1
        }
      ]
    },
        {
          id: 'lt7-m1-talk2',
          title: 'Listen to a talk in an engineering class.',
          audio: '/audio/listening/test-7/m1-talk2.mp3',
          image: '/img/listening/announcement/male-1.webp',
          speakerGender: 'male',
          transcript: 'Today I want to cover the basics of how a solar panel works, why the material inside it matters, and what happens after dark. Solar panels turn sunlight into electricity. Each panel is built from many small cells, and those cells are usually made of a material called silicon. Silicon matters here because it\'s a semiconductor. Its electrons are held loosely enough that a little light energy shakes them free, but tightly enough that the material stays stable on a rooftop for decades. So here\'s the process. When sunlight hits one of these cells, it knocks tiny particles called electrons loose. The cell is built so those loose electrons all drift the same way instead of wandering at random, and that steady one-way movement is what we call an electric current. Now, what do you do with that current? There are two options. You can use it right away to power lights and appliances while the sun is out. Or you can send it into batteries, and then at night you draw the electricity back out of those batteries. That matters, because once it\'s dark a panel produces nothing at all. One last point about cost. Solar power has become much cheaper in recent years, mainly because manufacturers learned to produce silicon cells in enormous quantities. A panel today costs a small fraction of what the same panel cost thirty years ago. That\'s why so many homes and businesses now use solar panels to cut their energy bills and their pollution.',
          questions: [
          {
            id: 'lt7-m1-talk2-q1',
            stem: 'What is the talk mainly about?',
            options: [
                  { id: 'b', text: 'Why silicon is the most common material on Earth.', correct: false },
                  { id: 'a', text: 'How solar panels turn sunlight into electricity.', correct: true },
                  { id: 'c', text: 'How electricity travels through wires in a house.', correct: false },
                  { id: 'd', text: 'Why home batteries have been getting cheaper recently.', correct: false }
            ],
            explanation: 'The talk explains how solar panels work, turning sunlight into electricity.',
            points: 1
          },
          {
            id: 'lt7-m1-talk2-q2',
            stem: 'What happens when sunlight hits the cells in a solar panel?',
            options: [
                  { id: 'd', text: 'It causes the panel to vibrate.', correct: false },
                  { id: 'b', text: 'It produces heat that turns water into steam.', correct: false },
                  { id: 'a', text: 'It knocks electrons loose, creating an electric current.', correct: true },
                  { id: 'c', text: 'It changes color to indicate the level of charge.', correct: false }
            ],
            explanation: 'The speaker says sunlight knocks electrons loose, creating the electric current.',
            points: 1
          },
              {
                id: 'lt7-m1-talk2-q3',
                stem: 'What is silicon used for in a solar panel?',
                options: [
                  { id: 'c', text: 'It connects the panel to the home\'s electrical wiring.', correct: false },
                  { id: 'd', text: 'It stores the electricity until it is needed later.', correct: false },
                  { id: 'a', text: 'It coats the outside of the panel for protection.', correct: false },
                  { id: 'b', text: 'It is the material the cells are made of.', correct: true }
                ],
                explanation: 'The speaker says each panel is made up of small cells, usually made of silicon.',
                points: 1
              },
              {
                id: 'lt7-m1-talk2-q4',
                stem: 'What can be done with solar electricity at night, according to the speaker?',
                options: [
                  { id: 'c', text: 'It can be borrowed from neighbors on the same street.', correct: false },
                  { id: 'd', text: 'It cannot be used at night under any circumstances.', correct: false },
                  { id: 'a', text: 'It can still be generated from moonlight after dark.', correct: false },
                  { id: 'b', text: 'It can be drawn from batteries that stored it earlier.', correct: true }
                ],
                explanation: 'The speaker says electricity can be stored in batteries for use at night.',
                points: 1
              }
          ]
        }
      ]
    },

    {
      id: 'module-2',
      title: 'Module 2',
      introAudio: 'audio/listening/test-7/m2-intro.mp3',

      chooseResponse: [
    {
      id: 'lt7-m2-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m2-cr01.mp3',
      image: '/img/listening/stock_modal/male-1.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Have you been to the new coffee place on the third floor yet?',
      options: [
        { id: 'a', text: 'Coffee shops vary a lot in quality.', correct: false },
        { id: 'd', text: 'New places attract crowds early, but lines shorten later.', correct: false },
        { id: 'c', text: 'I went yesterday. Their lattes are excellent.', correct: true },
        { id: 'b', text: 'The third floor is always busy around noon.', correct: false }
      ],
      explanation: 'Specific experience.',
      points: 1
    },
    {
      id: 'lt7-m2-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m2-cr02.mp3',
      image: '/img/listening/stock_modal/female-2.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you sign up for the etiquette dinner the career office is hosting?',
      options: [
        { id: 'a', text: 'Dinners are social events, and this one sounds like a formal one.', correct: false },
        { id: 'c', text: 'Career offices help, though most students visit them only in the final semester.', correct: false },
        { id: 'b', text: 'I added my name to the wait list. I really want to go.', correct: true },
        { id: 'd', text: 'Etiquette matters a lot more in some situations than in others.', correct: false }
      ],
      explanation: 'Direct status with motivation.',
      points: 1
    },
    {
      id: 'lt7-m2-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m2-cr03.mp3',
      image: '/img/listening/stock_modal/male-3.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m thinking about volunteering with the local animal shelter.',
      options: [
        { id: 'c', text: 'Animals deserve care, especially the ones that nobody adopts.', correct: false },
        { id: 'a', text: 'Volunteering rewards both sides, and the staff appreciate regular helpers.', correct: false },
        { id: 'd', text: 'Shelters need help almost every single weekend of the year.', correct: false },
        { id: 'b', text: 'You should. Their volunteer training session is this Saturday.', correct: true }
      ],
      explanation: 'Encouragement with specific next step.',
      points: 1
    },
    {
      id: 'lt7-m2-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m2-cr04.mp3',
      image: '/img/listening/stock_modal/female-4.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I haven\'t been able to log into the wifi since this morning.',
      options: [
        { id: 'b', text: 'The IT desk had a bunch of complaints. They\'re working on it now.', correct: true },
        { id: 'c', text: 'Mornings can be busy on the network, especially right when classes start.', correct: false },
        { id: 'd', text: 'Wifi is essential these days, especially for anything related to class work.', correct: false },
        { id: 'a', text: 'Login issues are really annoying, especially when you are in a hurry.', correct: false }
      ],
      explanation: 'Context with reassurance.',
      points: 1
    },
    {
      id: 'lt7-m2-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-7/m2-cr05.mp3',
      image: '/img/listening/stock_modal/male-5.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you joining the trivia night on Friday?',
      options: [
        { id: 'b', text: 'Trivia is fun.', correct: false },
        { id: 'a', text: 'I am.', correct: true },
        { id: 'd', text: 'Friday is open.', correct: false },
        { id: 'c', text: 'Teams need players.', correct: false }
      ],
      explanation: 'Direct yes with specific need.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt7-m2-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-7/m2-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Woman: I heard the new gym equipment finally arrived.\nMan: I checked it out this morning. The treadmills are amazing.\nWoman: Are they easy to use?\nMan: There\'s a touch screen, but the basic controls are still simple.\nWoman: Good, I prefer the basics. Did they replace all the equipment?\nMan: Just the cardio machines, so treadmills, bikes and rowing machines. The weight section stayed the same.\nWoman: Did anyone say why they stopped there?\nMan: The cardio machines were almost ten years old, so those came first. Everything else waits for next year\'s budget.\nWoman: Fair enough. I\'ll try a treadmill after class.',
      questions: [
        {
          id: 'lt7-m2-conv1-q1',
          stem: 'What new equipment did the gym install?',
          options: [
        { id: 'c', text: 'Additional free weights and squat racks.', correct: false },
        { id: 'b', text: 'New treadmills and other cardio equipment.', correct: true },
        { id: 'a', text: 'A new ventilation and cooling system.', correct: false },
        { id: 'd', text: 'A second floor full of machines.', correct: false }
          ],
          explanation: 'New cardio equipment, including treadmills.',
          points: 1
        },        {
          id: 'lt7-m2-conv1-q2',
          stem: 'What didn\'t change at the gym?',
          options: [
        { id: 'c', text: 'The membership fees.', correct: false },
        { id: 'a', text: 'The locker room.', correct: false },
        { id: 'b', text: 'The weight section.', correct: true },
        { id: 'd', text: 'The hours of operation.', correct: false }
          ],
          explanation: 'Weight section stayed the same.',
          points: 1
        }
      ]
    },
    {
      id: 'lt7-m2-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-7/m2-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Man: Are you going to the campus theater production this weekend?\nWoman: I heard about it but haven\'t bought a ticket yet.\nMan: Tickets are free for students. You just reserve online.\nWoman: Free? That\'s great. What\'s the play about?\nMan: A modern adaptation of a classic Shakespeare comedy. The students set the whole story in a coffee shop.\nWoman: I love Shakespeare adaptations. Where is it?\nMan: The small theater behind the student union, Friday and Saturday at eight. There are only two hundred seats, so they go fast.\nWoman: Then I\'ll reserve tonight.',
      questions: [
        {
          id: 'lt7-m2-conv2-q1',
          stem: 'What event are the speakers discussing?',
          options: [
        { id: 'c', text: 'A music concert in the courtyard.', correct: false },
        { id: 'a', text: 'A campus film festival.', correct: false },
        { id: 'd', text: 'A guest lecture on literature.', correct: false },
        { id: 'b', text: 'A theater production by students.', correct: true }
          ],
          explanation: 'Campus theater production.',
          points: 1
        },        {
          id: 'lt7-m2-conv2-q2',
          stem: 'Why is the woman planning to attend?',
          options: [
        { id: 'c', text: 'Tickets are free and she likes the genre.', correct: true },
        { id: 'a', text: 'She knows one of the actors in the cast.', correct: false },
        { id: 'd', text: 'It\'s a class assignment for her theater course.', correct: false },
        { id: 'b', text: 'She heard the director speak on campus last week.', correct: false }
          ],
          explanation: 'Free tickets and she likes Shakespeare adaptations.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt7-m2-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-7/m2-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Attention students living in residence halls. We will be conducting maintenance checks in all rooms next week, Monday through Thursday, between nine and four. Maintenance staff will check smoke alarms, plumbing, and HVAC systems. You don\'t need to be present, but please ensure pathways to these areas are clear, and secure any pet during the visit. The check should take ten minutes per room. Because staff work floor by floor, we cannot arrange individual times. Questions go to the housing office in Building C.',
      questions: [
        {
          id: 'lt7-m2-ann1-q1',
          stem: 'What is being checked during the maintenance visits?',
          options: [
        { id: 'b', text: 'Furniture and fixtures only.', correct: false },
        { id: 'd', text: 'Internet and cable connections.', correct: false },
        { id: 'c', text: 'Just smoke alarms.', correct: false },
        { id: 'a', text: 'Smoke alarms, plumbing.', correct: true }
          ],
          explanation: 'Smoke alarms, plumbing, HVAC.',
          points: 1
        },        {
          id: 'lt7-m2-ann1-q2',
          stem: 'What should residents do?',
          options: [
        { id: 'a', text: 'Clear pathways to the areas being checked.', correct: true },
        { id: 'c', text: 'Move out of the room for the day.', correct: false },
        { id: 'b', text: 'Be present in the room during the check.', correct: false },
        { id: 'd', text: 'Schedule an individual time with the staff.', correct: false }
          ],
          explanation: 'Clear pathways.',
          points: 1
        }
      ]
    },
    {
      id: 'lt7-m2-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-7/m2-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Good afternoon. The campus athletic center is offering free fitness assessments throughout April. Trained staff will measure your fitness baseline, including resting heart rate, flexibility, and grip strength, and help you set goals. Sessions last about thirty minutes and can be scheduled online through the athletic center website. Please wear athletic shoes and check in at the front desk on the ground floor. Your results are emailed to you the same week. This is a great way to start a new fitness routine.',
      questions: [
        {
          id: 'lt7-m2-ann2-q1',
          stem: 'What is being offered for free?',
          options: [
        { id: 'd', text: 'Group exercise classes for beginners.', correct: false },
        { id: 'a', text: 'Personal training sessions with a coach.', correct: false },
        { id: 'b', text: 'Fitness equipment rentals for the month.', correct: false },
        { id: 'c', text: 'Fitness assessments with trained staff.', correct: true }
          ],
          explanation: 'Free fitness assessments.',
          points: 1
        },        {
          id: 'lt7-m2-ann2-q2',
          stem: 'How long are the sessions?',
          options: [
        { id: 'd', text: 'About two hours.', correct: false },
        { id: 'a', text: 'About fifteen minutes.', correct: false },
        { id: 'c', text: 'About thirty minutes.', correct: true },
        { id: 'b', text: 'About one hour.', correct: false }
          ],
          explanation: 'About thirty minutes.',
          points: 1
        }
      ]
    }
      ],

      academicTalks: [
        {
          id: 'lt7-m2-talk1',
          title: 'Listen to a talk in an astronomy class.',
          audio: '/audio/listening/test-7/m2-talk1.mp3',
          image: '/img/listening/announcement/female-3.webp',
          speakerGender: 'female',
          transcript: 'Black holes are among the strangest objects in the universe, and today I want to cover three things: how they form, what the event horizon actually is, and why astronomers care so much about them. Start with formation. When a very massive star runs out of fuel at the end of its life, it can no longer hold itself up against its own weight, and it collapses. Matter gets compressed into a region so dense that nothing, not even light, can escape its gravitational pull. That brings us to the key term. The boundary beyond which escape becomes impossible is called the event horizon. Think of it as a one-way surface. Cross it and there is no path back out, however fast you travel. Inside that boundary, the laws of physics as we understand them break down, which is exactly why theorists find these objects so interesting. For decades, black holes were entirely theoretical. They were predicted by Einstein\'s equations, and the mathematics was convincing, but no one had observed one directly. Some physicists doubted that anything so extreme could really exist in nature. That changed in 2019. An international collaboration of telescopes produced the first image of the shadow of a black hole at the center of a distant galaxy. A prediction on paper had become something astronomers could point at. Astronomers keep studying them for two reasons. Black holes reveal how physics behaves at its extremes, and supermassive black holes appear to play a critical role in shaping the galaxies that surround them.',
          questions: [
            {
              id: 'lt7-m2-talk1-q1',
              stem: 'According to the speaker, what is an event horizon?',
              options: [
                { id: 'b', text: 'The boundary beyond which not even light can escape a black hole', correct: true },
                { id: 'a', text: 'The single point at the very center of a black hole', correct: false },
                { id: 'c', text: 'The orbit followed by stars circling close to a black hole', correct: false },
                { id: 'd', text: 'The visible glow given off by matter falling into a black hole', correct: false }
              ],
              explanation: 'The speaker defines the event horizon as the boundary beyond which escape becomes impossible.',
              points: 1
            },
            {
              id: 'lt7-m2-talk1-q2',
              stem: 'Why does the speaker mention the 2019 image?',
              options: [
                { id: 'b', text: 'To illustrate the shift from theoretical prediction to direct observational evidence', correct: true },
                { id: 'd', text: 'To argue that telescopes need much further improvement in resolution', correct: false },
                { id: 'c', text: 'To suggest that the current black hole images are still inaccurate', correct: false },
                { id: 'a', text: 'To show that black holes were first discovered back in 2019', correct: false }
              ],
              explanation: 'The speaker contrasts decades of purely theoretical work with the 2019 observational image, marking a major shift in evidence.',
              points: 1
            },
                            {
                id: 'lt7-m2-talk1-q3',
                stem: 'According to the speaker, how do black holes form?',
                options: [
                  { id: 'c', text: 'A star expands outward until its gravity finally disappears.', correct: false },
                  { id: 'b', text: 'A massive star runs out of fuel and collapses.', correct: true },
                  { id: 'd', text: 'Light is compressed until it turns into ordinary matter.', correct: false },
                  { id: 'a', text: 'A star\'s core cools until light stops escaping it.', correct: false }
                ],
                explanation: 'The speaker says a very massive star that runs out of fuel can no longer hold itself up against its own weight and collapses into an extremely dense region.',
                points: 1
              },
                            {
                id: 'lt7-m2-talk1-q4',
                stem: 'What does the speaker suggest about supermassive black holes?',
                options: [
                  { id: 'b', text: 'They lie outside the galaxies whose shape they influence.', correct: false },
                  { id: 'c', text: 'They break down the laws of physics across entire galaxies.', correct: false },
                  { id: 'd', text: 'They help shape the galaxies that surround them.', correct: true },
                  { id: 'a', text: 'They were the black holes Einstein\'s equations predicted.', correct: false }
                ],
                explanation: 'The speaker credits supermassive black holes with a critical role in shaping the galaxies around them, which is one of the reasons astronomers keep studying them.',
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
    introAudio: '/audio/listening/test-7/m2-intro.mp3',
    chooseResponse: [
          {
            id: 'lt7-m2e-cr1',
            type: 'choose_response',
            audio: '/audio/listening/test-7/m2e-cr01.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'What is your favorite kind of music?',
            options: [
              { id: 'd', text: 'Concerts are fun.', correct: false },
              { id: 'c', text: 'I cannot play any instruments.', correct: false },
              { id: 'a', text: 'I really like jazz.', correct: true },
              { id: 'b', text: 'Music is everywhere.', correct: false }
            ],
            explanation: 'The speaker is asking about a preference, so the correct response gives one.',
            points: 1
          },
          {
            id: 'lt7-m2e-cr2',
            type: 'choose_response',
            audio: '/audio/listening/test-7/m2e-cr02.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Do you know if the package arrived?',
            options: [
              { id: 'b', text: 'Yes, it came this morning.', correct: true },
              { id: 'c', text: 'I usually order things online.', correct: false },
              { id: 'd', text: 'Mail can be pretty slow.', correct: false },
              { id: 'a', text: 'Packages are delivered here daily.', correct: false }
            ],
            explanation: 'The speaker is asking about a delivery, so the correct response confirms it.',
            points: 1
          },
          {
            id: 'lt7-m2e-cr3',
            type: 'choose_response',
            audio: '/audio/listening/test-7/m2e-cr03.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Could you save my seat for a minute?',
            options: [
              { id: 'a', text: 'No problem, I will watch your bag too.', correct: true },
              { id: 'd', text: 'The lecture starts in a few minutes.', correct: false },
              { id: 'c', text: 'I usually prefer standing near the back.', correct: false },
              { id: 'b', text: 'Seats are pretty limited in this room.', correct: false }
            ],
            explanation: 'The speaker is asking a favor, so the correct response agrees.',
            points: 1
          },
          {
            id: 'lt7-m2e-cr4',
            type: 'choose_response',
            audio: '/audio/listening/test-7/m2e-cr04.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'How long does the bus ride take?',
            options: [
              { id: 'c', text: 'I always sit by the window.', correct: false },
              { id: 'd', text: 'The bus stop is far away.', correct: false },
              { id: 'b', text: 'About forty minutes.', correct: true },
              { id: 'a', text: 'Buses run every twenty minutes.', correct: false }
            ],
            explanation: 'The speaker is asking about duration.',
            points: 1
          },
          {
            id: 'lt7-m2e-cr5',
            type: 'choose_response',
            audio: '/audio/listening/test-7/m2e-cr05.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Have you started your project yet?',
            options: [
              { id: 'a', text: 'Projects are always pretty stressful.', correct: false },
              { id: 'd', text: 'My partner is usually helpful.', correct: false },
              { id: 'b', text: 'I just finished the introduction.', correct: true },
              { id: 'c', text: 'I really love writing papers.', correct: false }
            ],
            explanation: 'The speaker is asking about progress.',
            points: 1
          },
    ],
    conversations: [
          {
            id: 'lt7-m2e-conv1',
            title: 'Listen to a conversation.',
            audio: '/audio/listening/test-7/m2e-conv1.mp3',
            image: '/img/listening/two_people/people-1.webp',
            transcript: 'Man: I am thinking about joining the running club. Have you been to a meeting?\nWoman: Yes, I joined last month. The members are very friendly.\nMan: How often do you meet?\nWoman: We run together three times a week, usually in the early morning.\nMan: Six in the morning sounds early.\nWoman: It is. But running before classes makes me feel great all day.\nMan: That sounds nice. Where do you meet?\nWoman: At the track behind the gym. I can show you tomorrow if you want.',
            questions: [
              {
                id: 'lt7-m2e-conv1-q1',
                stem: 'What is the man thinking about?',
                options: [
                  { id: 'a', text: 'Buying a pair of running shoes.', correct: false },
                  { id: 'b', text: 'Joining the running club.', correct: true },
                  { id: 'd', text: 'Quitting his intramural sport.', correct: false },
                  { id: 'c', text: 'Going to a weekend race.', correct: false }
                ],
                explanation: 'The man is thinking about joining the running club.',
                points: 1
              },
              {
                id: 'lt7-m2e-conv1-q2',
                stem: 'How often does the club meet?',
                options: [
                  { id: 'b', text: 'Three times a week.', correct: true },
                  { id: 'd', text: 'Only once a month.', correct: false },
                  { id: 'a', text: 'Every day of the week.', correct: false },
                  { id: 'c', text: 'Just once a week.', correct: false }
                ],
                explanation: 'They run together three times a week.',
                points: 1
              }
            ]
          },
        {
          id: 'lt7-m2e-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-7/m2e-conv2.mp3',
          image: '/img/listening/two_people/people-1.webp',
          transcript: 'Woman: Hi Ben, are you joining the chess club this semester?\nMan: I am thinking about it. Have you been to a meeting?\nWoman: Yes, I went last week. The members are very welcoming, even to beginners.\nMan: That is good. I am only a beginner.\nWoman: They have a beginners\' table where someone teaches the basics.\nMan: Perfect. When does the club meet?\nWoman: Tuesdays at six p.m. in the student lounge.',
          questions: [
          {
            id: 'lt7-m2e-conv2-q1',
            stem: 'What is the man worried about?',
            options: [
                  { id: 'a', text: 'Being a beginner at chess.', correct: true },
                  { id: 'c', text: 'Not having enough free time.', correct: false },
                  { id: 'b', text: 'The cost of joining the club.', correct: false },
                  { id: 'd', text: 'Losing every game he plays.', correct: false }
            ],
            explanation: 'The man mentions he is only a beginner.',
            points: 1
          },
          {
            id: 'lt7-m2e-conv2-q2',
            stem: 'When and where does the chess club meet?',
            options: [
                  { id: 'c', text: 'Wednesdays at four p.m. in the main library.', correct: false },
                  { id: 'd', text: 'Sundays at five p.m. in an online meeting.', correct: false },
                  { id: 'b', text: 'Mondays at noon in the campus cafeteria.', correct: false },
                  { id: 'a', text: 'Tuesdays at six p.m. in the student lounge.', correct: true }
            ],
            explanation: 'The woman says the club meets Tuesdays at six p.m. in the student lounge.',
            points: 1
          }
          ]
        }
    ],
    announcements: [
          {
            id: 'lt7-m2e-ann1',
            title: 'Listen to an announcement at a university.',
            audio: '/audio/listening/test-7/m2e-ann1.mp3',
            image: '/img/listening/announcement/female-1.webp',
            speakerGender: 'female',
            transcript: 'Attention students. The university bookstore is having a sale next week from Monday to Friday. All sweatshirts and t-shirts will be half off. School supplies are also discounted by twenty percent. The sale does not include textbooks. The bookstore will have extended hours during the sale, opening at eight a.m. and closing at nine p.m. Cash and credit cards are accepted. Stop by and check out the deals.',
            questions: [
              {
                id: 'lt7-m2e-ann1-q1',
                stem: 'What is the announcement about?',
                options: [
                  { id: 'c', text: 'A change in textbook prices.', correct: false },
                  { id: 'd', text: 'A book club meeting next week.', correct: false },
                  { id: 'a', text: 'A bookstore sale next week.', correct: true },
                  { id: 'b', text: 'A new bookstore opening on campus.', correct: false }
                ],
                explanation: 'The announcement is about a sale at the bookstore next week.',
                points: 1
              },
              {
                id: 'lt7-m2e-ann1-q2',
                stem: 'What is half off?',
                options: [
                  { id: 'd', text: 'Pens and pencils.', correct: false },
                  { id: 'b', text: 'Sweatshirts and t-shirts.', correct: true },
                  { id: 'a', text: 'All course textbooks.', correct: false },
                  { id: 'c', text: 'Backpacks and supplies.', correct: false }
                ],
                explanation: 'Sweatshirts and t-shirts are half off.',
                points: 1
              }
            ]
          },
        {
          id: 'lt7-m2e-ann2',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-7/m2e-ann2.mp3',
          image: '/img/listening/announcement/female-1.webp',
          speakerGender: 'female',
          transcript: 'Good morning. The library will host a writing center information session this Friday at three p.m. in room 204. Students can learn about the free writing services available, including help with essays, research papers, and creative writing. Tutors will be available to answer questions. Refreshments will be served. All majors are welcome.',
          questions: [
          {
            id: 'lt7-m2e-ann2-q1',
            stem: 'What is the topic of the information session?',
            options: [
                  { id: 'd', text: 'Job opportunities at the library.', correct: false },
                  { id: 'a', text: 'The new library borrowing rules.', correct: false },
                  { id: 'c', text: 'The online book reservation system.', correct: false },
                  { id: 'b', text: 'The free writing services available.', correct: true }
            ],
            explanation: 'The announcement says students can learn about free writing services like essay and research paper help.',
            points: 1
          },
          {
            id: 'lt7-m2e-ann2-q2',
            stem: 'Where will the session take place?',
            options: [
                  { id: 'd', text: 'In an online meeting.', correct: false },
                  { id: 'a', text: 'In room 102.', correct: false },
                  { id: 'c', text: 'In the auditorium.', correct: false },
                  { id: 'b', text: 'In room 204.', correct: true }
            ],
            explanation: 'The announcement says the session is in room 204.',
            points: 1
          }
          ]
        }
    ],
    academicTalks: [
          {
            id: 'lt7-m2e-talk1',
            title: 'Listen to a talk in a sociology class.',
            audio: '/audio/listening/test-7/m2e-talk1.mp3',
            image: '/img/listening/announcement/male-1.webp',
            speakerGender: 'male',
            transcript: 'Today let us discuss why people give gifts. Gift-giving is something humans have done for thousands of years. Gifts can show care, friendship, or respect. In many cultures, people give gifts on special days like birthdays, weddings, or holidays. The gift does not have to be expensive. What matters most is the thought behind it. A small homemade gift can mean a lot. In some cultures, the way you give a gift is also important. For example, in Japan, gifts are often wrapped very carefully. Gift-giving helps build and keep relationships between people. It is one way humans show that they care for one another.',
            questions: [
              {
                id: 'lt7-m2e-talk1-q1',
                stem: 'What is the main idea of the talk?',
                options: [
                  { id: 'd', text: 'When people should give each other gifts.', correct: false },
                  { id: 'c', text: 'Why expensive gifts are always best.', correct: false },
                  { id: 'b', text: 'How to choose the perfect gift.', correct: false },
                  { id: 'a', text: 'Why gift-giving is important to humans.', correct: true }
                ],
                explanation: 'The talk explains why gift-giving is important to humans.',
                points: 1
              },
              {
                id: 'lt7-m2e-talk1-q2',
                stem: 'According to the speaker, what matters most about a gift?',
                options: [
                  { id: 'c', text: 'How big it is.', correct: false },
                  { id: 'd', text: 'Whether it is wrapped.', correct: false },
                  { id: 'b', text: 'The thought behind it.', correct: true },
                  { id: 'a', text: 'How much it costs.', correct: false }
                ],
                explanation: 'The speaker says what matters most is the thought behind it.',
                points: 1
              },
              {
                id: 'lt7-m2e-talk1-q3',
                stem: 'What are tectonic plates?',
                options: [
                  { id: 'c', text: 'A type of mountain range found along the edges of continents.', correct: false },
                  { id: 'a', text: 'Hot melted rocks found deep underground beneath the Earth\'s surface.', correct: false },
                  { id: 'd', text: 'A measuring tool that geologists use to record earthquake activity.', correct: false },
                  { id: 'b', text: 'Large pieces of rock that make up the Earth\'s outer layer.', correct: true }
                ],
                explanation: 'The talk says tectonic plates are large pieces of rock that make up the Earth\'s outer layer.',
                points: 1
              },
              {
                id: 'lt7-m2e-talk1-q4',
                stem: 'Besides tectonic activity, what else can form mountains according to the speaker?',
                options: [
                  { id: 'a', text: 'Strong winds.', correct: false },
                  { id: 'b', text: 'Heavy rainstorms.', correct: false },
                  { id: 'd', text: 'Earthquakes alone.', correct: false },
                  { id: 'c', text: 'Volcanoes.', correct: true }
                ],
                explanation: 'The speaker says other mountains are formed by volcanoes.',
                points: 1
              }
            ]
          }
    ]
  },
};

// Alias for full-test loader, which reads window.LISTENING_TEST_7
window.LISTENING_TEST_7 = window.LISTENING_SECTION_7;
