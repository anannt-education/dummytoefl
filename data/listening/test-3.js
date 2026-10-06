// TOEFL iBT 2026 Listening Practice — Test 3
// Module 1 (Router): 30 questions | Module 2: 17 questions | Total: 47
// Audio: pre-recorded MP3 files in /audio/listening/test-3/

window.LISTENING_SECTION_3 = {
  id: 'listening-test-3',
  title: 'Listening Practice Test 3',
  format: '2026',
  timeLimit: 1740,

  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      introAudio: 'audio/listening/test-3/m1-intro.mp3',

      chooseResponse: [
    {
      id: 'lt3-m1-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m1-cr01.mp3',
      image: '/img/listening/stock_modal/male-1.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m going to grab some coffee before my next class. Want anything?',
      options: [
        { id: 'b', text: 'Coffee shops have grown popular near the main quad.', correct: false },
        { id: 'a', text: 'I usually drink tea more often than coffee.', correct: false },
        { id: 'c', text: 'A small black coffee would be great, thanks.', correct: true },
        { id: 'd', text: 'Coffee can keep you alert for hours.', correct: false }
      ],
      explanation: 'Direct order in response to offer.',
      points: 1
    },
    {
      id: 'lt3-m1-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m1-cr02.mp3',
      image: '/img/listening/stock_modal/female-2.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Do you have any idea why the elevator is out of service today?',
      options: [
        { id: 'a', text: 'Some people around here prefer to take the stairs.', correct: false },
        { id: 'c', text: 'Maintenance posted a notice. They\'re replacing a motor.', correct: true },
        { id: 'b', text: 'The building is only six floors tall.', correct: false },
        { id: 'd', text: 'Elevators are convenient when you\'re carrying things.', correct: false }
      ],
      explanation: 'Provides the actual reason.',
      points: 1
    },
    {
      id: 'lt3-m1-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m1-cr03.mp3',
      image: '/img/listening/stock_modal/male-3.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m starving. Is the dining hall still open this late?',
      options: [
        { id: 'c', text: 'Dining halls offer many options.', correct: false },
        { id: 'd', text: 'The grill closes at eight.', correct: true },
        { id: 'a', text: 'I always eat dinner at six.', correct: false },
        { id: 'b', text: 'Late-night snacks are popular.', correct: false }
      ],
      explanation: 'Specific operational information.',
      points: 1
    },
    {
      id: 'lt3-m1-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m1-cr04.mp3',
      image: '/img/listening/stock_modal/female-4.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I lost my student ID card somewhere on campus.',
      options: [
        { id: 'a', text: 'I always keep mine in a holder clipped to my backpack.', correct: false },
        { id: 'c', text: 'The campus is fairly large, so that happens a lot here.', correct: false },
        { id: 'd', text: 'Student IDs have your photo and a barcode you use at the dining hall.', correct: false },
        { id: 'b', text: 'You can get a replacement at the security office on the first floor.', correct: true }
      ],
      explanation: 'Tells listener exactly where to go.',
      points: 1
    },
    {
      id: 'lt3-m1-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m1-cr05.mp3',
      image: '/img/listening/stock_modal/male-5.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Did you finish the lab report for biology yet?',
      options: [
        { id: 'a', text: 'Lab reports are required in every science course.', correct: false },
        { id: 'b', text: 'I usually do all my homework in the morning.', correct: false },
        { id: 'c', text: 'Biology has interesting topics, but the lab section is demanding.', correct: false },
        { id: 'd', text: 'Almost. I just need to write the conclusion tonight.', correct: true }
      ],
      explanation: 'Specific status update.',
      points: 1
    },
    {
      id: 'lt3-m1-cr6',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m1-cr06.mp3',
      image: '/img/listening/stock_modal/female-6.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Could you watch my bag for a minute while I run to the restroom?',
      options: [
        { id: 'a', text: 'Restrooms are down the hall, past the lounge.', correct: false },
        { id: 'd', text: 'Sure, no problem. Take your time.', correct: true },
        { id: 'c', text: 'I\'ll be right here studying my notes.', correct: false },
        { id: 'b', text: 'Bags can hold a lot of things.', correct: false }
      ],
      explanation: 'Agrees and reassures.',
      points: 1
    },
    {
      id: 'lt3-m1-cr7',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m1-cr07.mp3',
      image: '/img/listening/stock_modal/male-1.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I heard the campus shuttle is running on a reduced schedule today.',
      options: [
        { id: 'a', text: 'Yeah, the driver\'s union is in negotiations. It should resume tomorrow.', correct: true },
        { id: 'd', text: 'Shuttles are really useful, especially when the weather turns bad.', correct: false },
        { id: 'c', text: 'The campus is spread out, so shuttle changes really affect commuter students.', correct: false },
        { id: 'b', text: 'I drive my own car to campus most days anyway.', correct: false }
      ],
      explanation: 'Adds context with a return-to-normal estimate.',
      points: 1
    },
    {
      id: 'lt3-m1-cr8',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m1-cr08.mp3',
      image: '/img/listening/stock_modal/female-2.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I forgot my umbrella and it\'s pouring outside.',
      options: [
        { id: 'a', text: 'Umbrellas come in many sizes, and the compact ones fold up small.', correct: false },
        { id: 'd', text: 'The weather around here is unpredictable this time of year.', correct: false },
        { id: 'c', text: 'You can borrow mine. I have a hood on my jacket.', correct: true },
        { id: 'b', text: 'Rain is good for the plants out in the garden.', correct: false }
      ],
      explanation: 'Offers practical help.',
      points: 1
    },
    {
      id: 'lt3-m1-cr9',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m1-cr09.mp3',
      image: '/img/listening/stock_modal/male-3.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Have you signed up for the campus tour leader position yet?',
      options: [
        { id: 'b', text: 'Applications take time to review, but the coordinator usually replies within two weeks.', correct: false },
        { id: 'c', text: 'Tour leaders give campus tours to groups of visiting prospective students.', correct: false },
        { id: 'a', text: 'I sent in my application last week. Still waiting to hear back.', correct: true },
        { id: 'd', text: 'Tours are usually scheduled on weekends and early in the afternoon.', correct: false }
      ],
      explanation: 'Direct status answer.',
      points: 1
    },
    {
      id: 'lt3-m1-cr10',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m1-cr10.mp3',
      image: '/img/listening/stock_modal/female-4.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Do you know whether the bookstore will price-match online prices?',
      options: [
        { id: 'a', text: 'They will, but only for textbooks.', correct: true },
        { id: 'c', text: 'Bookstores carry a lot of products besides textbooks.', correct: false },
        { id: 'd', text: 'Prices can vary quite a bit online.', correct: false },
        { id: 'b', text: 'Online shopping is convenient for most students.', correct: false }
      ],
      explanation: 'Detailed practical answer.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt3-m1-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-3/m1-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Man: I really need to find a part-time job this semester.\nWoman: Have you checked the postings at the student employment office?\nMan: Not yet. I was hoping to find something off campus.\nWoman: Off-campus jobs pay more, but the schedule can be hard to balance. My roommate spends half of every Tuesday commuting downtown.\nMan: That\'s true. And my labs run late three days a week.\nWoman: Then campus makes more sense. Supervisors there work around your class schedule.\nMan: Maybe I should start with on-campus, then.\nWoman: It would also save you commuting time. New postings go up there every Monday.',
      questions: [
        {
          id: 'lt3-m1-conv1-q1',
          stem: 'What is the man trying to find?',
          options: [
        { id: 'c', text: 'A part-time job for the semester.', correct: true },
        { id: 'b', text: 'An academic advisor for his major.', correct: false },
        { id: 'd', text: 'A study group for his lab classes.', correct: false },
        { id: 'a', text: 'A new place to live off campus.', correct: false }
          ],
          explanation: 'He needs a part-time job.',
          points: 1
        },        {
          id: 'lt3-m1-conv1-q2',
          stem: 'Why does the woman suggest considering an on-campus job?',
          options: [
        { id: 'a', text: 'The hours are longer than at off-campus jobs.', correct: false },
        { id: 'c', text: 'It comes with health insurance for all student workers.', correct: false },
        { id: 'b', text: 'The schedule is easier and saves commuting time.', correct: true },
        { id: 'd', text: 'It pays more than the off-campus jobs downtown.', correct: false }
          ],
          explanation: 'Easier balance and saves commute time.',
          points: 1
        }
      ]
    },
    {
      id: 'lt3-m1-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-3/m1-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Woman: Did the math professor announce when the next quiz will be?\nMan: Yes, it\'s a week from Wednesday.\nWoman: That\'s sooner than I expected. What chapters does it cover?\nMan: Three through five, plus the practice problems at the end of each one.\nWoman: I\'ve barely started chapter four. I\'d better get going.\nMan: The determinant part of chapter five is what slowed everyone down last year.\nWoman: Of course it is. That\'s exactly the part I keep putting off.\nMan: I\'m putting together a study group on Sunday if you want to join. We\'re meeting in the library basement at two.',
      questions: [
        {
          id: 'lt3-m1-conv2-q1',
          stem: 'When is the next math quiz?',
          options: [
        { id: 'd', text: 'A week from Wednesday.', correct: true },
        { id: 'c', text: 'A week from Monday.', correct: false },
        { id: 'b', text: 'Two weeks from Wednesday.', correct: false },
        { id: 'a', text: 'This Friday afternoon.', correct: false }
          ],
          explanation: 'A week from Wednesday.',
          points: 1
        },        {
          id: 'lt3-m1-conv2-q2',
          stem: 'What does the man invite the woman to do?',
          options: [
        { id: 'c', text: 'Join a study group on Sunday.', correct: true },
        { id: 'd', text: 'Switch to a different math section.', correct: false },
        { id: 'a', text: 'Attend the professor\'s office hours together.', correct: false },
        { id: 'b', text: 'Borrow his lecture notes from last class.', correct: false }
          ],
          explanation: 'Study group on Sunday.',
          points: 1
        }
      ]
    },
    {
      id: 'lt3-m1-conv3',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-3/m1-conv3.mp3',
      image: '/img/listening/two_people/people-3.webp',
      transcript: 'Man: I noticed the cafeteria added a new vegetarian section.\nWoman: I tried it yesterday. The veggie chili was actually delicious.\nMan: Really? I\'m not usually a fan of vegetarian food.\nWoman: This was different. It tasted hearty, not bland. They use smoked paprika and three kinds of beans.\nMan: Huh. When is that section open?\nWoman: All through lunch. The line moves fast, since most people head to the grill.\nMan: Maybe I\'ll give it a try at lunch today.\nWoman: They also have a tofu dish that\'s worth trying if you\'re feeling adventurous. Get there before one, though, since it sells out.',
      questions: [
        {
          id: 'lt3-m1-conv3-q1',
          stem: 'What did the cafeteria recently add?',
          options: [
        { id: 'c', text: 'A new vegetarian section.', correct: true },
        { id: 'a', text: 'A new salad bar.', correct: false },
        { id: 'b', text: 'A new breakfast menu.', correct: false },
        { id: 'd', text: 'A new coffee station.', correct: false }
          ],
          explanation: 'A vegetarian section.',
          points: 1
        },        {
          id: 'lt3-m1-conv3-q2',
          stem: 'What does the woman recommend the man try?',
          options: [
        { id: 'c', text: 'The new dessert counter by the grill.', correct: false },
        { id: 'b', text: 'The salad bar in the vegetarian section.', correct: false },
        { id: 'a', text: 'The vegetarian cooking class offered on weekends.', correct: false },
        { id: 'd', text: 'The veggie chili and the tofu dish.', correct: true }
          ],
          explanation: 'She recommends the chili and tofu.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt3-m1-ann1',
      title: 'Listen to an announcement at the registrar\'s office.',
      audio: '/audio/listening/test-3/m1-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good morning. The deadline for adding or dropping classes without academic penalty is this Friday at five p.m. After Friday, course changes will require an instructor\'s signature and may affect your academic record, since a late drop appears on your transcript as a W. If you\'re unsure about your schedule, please consult your academic advisor before the deadline. Advisors are taking walk-in appointments all week in Hutchins Hall, room two ten. The registrar\'s office is open from nine to five on weekdays.',
      questions: [
        {
          id: 'lt3-m1-ann1-q1',
          stem: 'What is the announcement reminding students about?',
          options: [
        { id: 'd', text: 'The add/drop deadline this Friday.', correct: true },
        { id: 'a', text: 'Registration for next term\'s classes.', correct: false },
        { id: 'c', text: 'A change in registrar office hours.', correct: false },
        { id: 'b', text: 'Tuition payment due dates this term.', correct: false }
          ],
          explanation: 'Add/drop deadline Friday.',
          points: 1
        },        {
          id: 'lt3-m1-ann1-q2',
          stem: 'What happens after the deadline?',
          options: [
        { id: 'd', text: 'Students must pay a fee for every change.', correct: false },
        { id: 'c', text: 'Course changes require an instructor signature.', correct: true },
        { id: 'b', text: 'No changes are allowed at all.', correct: false },
        { id: 'a', text: 'Changes can only be made online.', correct: false }
          ],
          explanation: 'Require instructor signature.',
          points: 1
        }
      ]
    },
    {
      id: 'lt3-m1-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-3/m1-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Hello, everyone. The campus shuttle will operate on a holiday schedule this Monday in observance of the federal holiday. Shuttles will run every thirty minutes instead of every fifteen, and only the main loop will be in service. The east campus branch is suspended for the day, so riders headed to the athletic complex should allow extra time. Service ends at eight p.m. instead of midnight. Regular service will resume Tuesday morning at six. Plan accordingly if you have early-morning commitments.',
      questions: [
        {
          id: 'lt3-m1-ann2-q1',
          stem: 'What is changing about the shuttle on Monday?',
          options: [
        { id: 'c', text: 'Shuttle fares will be temporarily increased for the holiday weekend.', correct: false },
        { id: 'a', text: 'New routes will be added to the main loop.', correct: false },
        { id: 'b', text: 'The shuttle will not operate at all on Monday.', correct: false },
        { id: 'd', text: 'The shuttle will run on a reduced holiday schedule.', correct: true }
          ],
          explanation: 'Reduced holiday schedule.',
          points: 1
        },        {
          id: 'lt3-m1-ann2-q2',
          stem: 'When does regular service resume?',
          options: [
        { id: 'a', text: 'Wednesday morning at nine.', correct: false },
        { id: 'b', text: 'Next weekend, on Saturday.', correct: false },
        { id: 'c', text: 'Tuesday morning at six.', correct: true },
        { id: 'd', text: 'Monday evening at eight.', correct: false }
          ],
          explanation: 'Tuesday morning at six.',
          points: 1
        }
      ]
    },
    {
      id: 'lt3-m1-ann3',
      title: 'Listen to an announcement at a campus event.',
      audio: '/audio/listening/test-3/m1-ann3.mp3',
      image: '/img/listening/announcement/female-3.webp',
      speakerGender: 'female',
      transcript: 'Good evening, alumni and current students. Welcome to the annual fall reception. We\'ll begin with brief remarks from the dean, followed by a panel discussion with three distinguished alumni: a hospital administrator, a documentary producer, and a civil engineer. The panel runs about forty minutes, and the last ten are reserved for questions from the floor. After the panel, please join us for a networking reception with coffee, tea, and cold refreshments in the atrium. Business cards are encouraged but not required.',
      questions: [
        {
          id: 'lt3-m1-ann3-q1',
          stem: 'What event is being announced?',
          options: [
        { id: 'd', text: 'A spring graduation ceremony for seniors.', correct: false },
        { id: 'b', text: 'An annual fall reception with alumni.', correct: true },
        { id: 'c', text: 'A career fair for current students.', correct: false },
        { id: 'a', text: 'A class reunion dinner for former students.', correct: false }
          ],
          explanation: 'Annual fall reception.',
          points: 1
        },        {
          id: 'lt3-m1-ann3-q2',
          stem: 'What will follow the dean\'s remarks?',
          options: [
        { id: 'a', text: 'A panel discussion with alumni.', correct: true },
        { id: 'b', text: 'A guided tour of the campus.', correct: false },
        { id: 'c', text: 'A reception with hot food and drinks.', correct: false },
        { id: 'd', text: 'A live music performance by students.', correct: false }
          ],
          explanation: 'Panel discussion with alumni.',
          points: 1
        }
      ]
    },
      ],

      academicTalks: [
    {
      id: 'lt3-m1-talk1',
      title: 'Listen to a talk in an economics class.',
      audio: '/audio/listening/test-3/m1-talk1.mp3',
      image: '/img/listening/announcement/male-3.webp',
      speakerGender: 'male',
      transcript: 'Today we\'ll discuss opportunity cost, one of the most important concepts in economic thinking. I\'ll define it, work through a number, and warn you about the most common mistake. Opportunity cost refers to the value of the next-best alternative that is given up when a choice is made. Let\'s put numbers on that. Imagine you have two hours of free time. You could study for an exam, or you could earn fifteen dollars an hour at a part-time job. If you choose to study, the opportunity cost of that decision is the thirty dollars you could have earned. Now the mistake. Students often assume it means adding up everything they didn\'t do, the job plus the movie plus the sleep. It doesn\'t. Opportunity cost is not the total of every option you did not pick. It is only the value of the single best alternative. These costs rarely appear on a receipt or a balance sheet, which is why people overlook them. Economists use this idea to understand how individuals, businesses, and governments handle scarce resources such as time, money, or land. A farmer choosing to plant corn instead of soybeans, a city deciding whether to build a park or a parking lot, a student selecting one major over another: all of these are trade-offs that economists analyze in terms of opportunity cost. Recognizing opportunity costs forces us to state plainly what we are giving up. Next time, we\'ll look at how opportunity cost connects to the broader concept of comparative advantage in trade.',
      questions: [
        {
          id: 'lt3-m1-talk1-q1',
          stem: 'What is the main topic of the talk?',
          options: [
        { id: 'c', text: 'How wages are determined in part-time jobs.', correct: false },
        { id: 'd', text: 'The history of agricultural choices in the United States.', correct: false },
        { id: 'b', text: 'The concept of opportunity cost in economic decisions.', correct: true },
        { id: 'a', text: 'A formula for calculating profit margins.', correct: false }
          ],
          explanation: 'The lecture centers on opportunity cost.',
          points: 1
        },        {
          id: 'lt3-m1-talk1-q2',
          stem: 'In the example, what is the opportunity cost of studying instead of working?',
          options: [
        { id: 'c', text: 'Two hours of leisure time.', correct: false },
        { id: 'b', text: 'Thirty dollars in unearned wages.', correct: true },
        { id: 'a', text: 'A grade on the upcoming exam.', correct: false },
        { id: 'd', text: 'Fifteen dollars per hour.', correct: false }
          ],
          explanation: 'Two hours at $15/hr = $30 in unearned wages.',
          points: 1
        },        {
          id: 'lt3-m1-talk1-q3',
          stem: 'According to the speaker, opportunity cost is best understood as:',
          options: [
        { id: 'b', text: 'The value of the next-best alternative given up.', correct: true },
        { id: 'd', text: 'The total cost of every option not chosen.', correct: false },
        { id: 'c', text: 'The dollar amount that a choice ultimately produces.', correct: false },
        { id: 'a', text: 'The time it takes to make a complex decision.', correct: false }
          ],
          explanation: 'The speaker emphasizes it is only the next-best alternative.',
          points: 1
        },        {
          id: 'lt3-m1-talk1-q4',
          stem: 'What will the speaker most likely discuss next?',
          options: [
        { id: 'c', text: 'Different methods for calculating annual income.', correct: false },
        { id: 'a', text: 'Specific cases of city planning around the country.', correct: false },
        { id: 'b', text: 'Modern critiques of classical economic theory.', correct: false },
        { id: 'd', text: 'How comparative advantage builds on opportunity cost.', correct: true }
          ],
          explanation: 'The speaker previews comparative advantage in trade.',
          points: 1
        }
      ]
    },
        {
          id: 'lt3-m1-talk2',
          title: 'Listen to a talk in a history of science class.',
          audio: '/audio/listening/test-3/m1-talk2.mp3',
          image: '/img/listening/announcement/male-1.webp',
          speakerGender: 'male',
          transcript: 'Today let\'s talk about the discovery of the X-ray, and I want you to notice how much of it depended on one scientist taking an odd observation seriously. The X-ray was discovered by Wilhelm Roentgen, a German physicist, in 1895. Roentgen was experimenting with electricity passing through gas in a glass tube, which was fairly ordinary work for a physicist at the time. He had wrapped the tube in black cardboard to block any visible light. Even so, he noticed that a special screen across the room began to glow, even though the light from his experiment should not have reached it. Plenty of people might have written that off as a flaw in the equipment. Roentgen didn\'t. He realized that some kind of unknown ray was passing through the air, and through the cardboard as well. He called these rays X-rays, because the letter X stands for something unknown in math. Over the next several weeks he tested what the rays would pass through: paper, wood, thin sheets of metal. Then he asked his wife to hold her hand in front of a photographic plate, and the image showed the bones of her fingers and her wedding ring. That single picture is what convinced the world. Within months, doctors began using X-rays to look at broken bones inside the body. Roentgen received the very first Nobel Prize in Physics in 1901, and he refused to patent the discovery. The discovery changed medicine forever and led to many other technologies we use today.',
          questions: [
          {
            id: 'lt3-m1-talk2-q1',
            stem: 'What is the talk mainly about?',
            options: [
                  { id: 'd', text: 'The dangers of X-rays in the early years of medicine.', correct: false },
                  { id: 'c', text: 'Why physicists experiment with electricity in sealed glass tubes.', correct: false },
                  { id: 'b', text: 'How modern hospitals use medical imaging to diagnose their patients today.', correct: false },
                  { id: 'a', text: 'The discovery of the X-ray and its impact on medicine.', correct: true }
            ],
            explanation: 'The talk is about Roentgen\'s discovery of the X-ray and how it changed medicine.',
            points: 1
          },
          {
            id: 'lt3-m1-talk2-q2',
            stem: 'Why did Roentgen choose the name "X-ray"?',
            options: [
                  { id: 'a', text: 'He simply liked the sound of the letter X.', correct: false },
                  { id: 'c', text: 'He wanted to honor his physics teacher from university.', correct: false },
                  { id: 'd', text: 'It was the name of his laboratory back in Germany.', correct: false },
                  { id: 'b', text: 'The letter X stands for something unknown in math.', correct: true }
            ],
            explanation: 'The speaker says X stands for something unknown in math.',
            points: 1
          },
              {
                id: 'lt3-m1-talk2-q3',
                stem: 'What was Roentgen doing when he discovered X-rays?',
                options: [
                  { id: 'd', text: 'Building a new telescope for observing the night sky.', correct: false },
                  { id: 'b', text: 'Experimenting with electricity passing through gas in a glass tube.', correct: true },
                  { id: 'c', text: 'Trying to invent a new medicine in his university laboratory.', correct: false },
                  { id: 'a', text: 'Studying the human body and the structure of its bones.', correct: false }
                ],
                explanation: 'The talk says Roentgen was experimenting with electricity passing through gas in a glass tube.',
                points: 1
              },
              {
                id: 'lt3-m1-talk2-q4',
                stem: 'How quickly did doctors begin using X-rays after the discovery?',
                options: [
                  { id: 'a', text: 'Several decades later.', correct: false },
                  { id: 'c', text: 'Only after Roentgen died.', correct: false },
                  { id: 'b', text: 'Within months.', correct: true },
                  { id: 'd', text: 'Doctors never adopted them.', correct: false }
                ],
                explanation: 'The talk says within months, doctors began using X-rays to look at broken bones.',
                points: 1
              }
          ]
        }
      ]
    },

    {
      id: 'module-2',
      title: 'Module 2',
      introAudio: 'audio/listening/test-3/m2-intro.mp3',

      chooseResponse: [
    {
      id: 'lt3-m2-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m2-cr01.mp3',
      image: '/img/listening/stock_modal/male-1.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m trying to decide between the Spanish and French language requirement.',
      options: [
        { id: 'd', text: 'Both languages are difficult to learn well at first.', correct: false },
        { id: 'c', text: 'A lot of students study languages here at this university.', correct: false },
        { id: 'b', text: 'I picked Spanish because it\'s used widely in this region.', correct: true },
        { id: 'a', text: 'Languages are interesting, especially when you can study them abroad.', correct: false }
      ],
      explanation: 'Personal reasoning that helps.',
      points: 1
    },
    {
      id: 'lt3-m2-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m2-cr02.mp3',
      image: '/img/listening/stock_modal/female-2.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I noticed the gym was closed this morning. Do you know why?',
      options: [
        { id: 'd', text: 'Mornings are good for exercise, but the cardio machines get packed.', correct: false },
        { id: 'a', text: 'A pipe burst overnight. They\'re hoping to reopen by Friday.', correct: true },
        { id: 'c', text: 'The gym has a lot of new equipment upstairs.', correct: false },
        { id: 'b', text: 'Gyms are usually busy first thing in the morning.', correct: false }
      ],
      explanation: 'Explanation plus reopening estimate.',
      points: 1
    },
    {
      id: 'lt3-m2-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m2-cr03.mp3',
      image: '/img/listening/stock_modal/male-3.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you planning to attend the open house for prospective students?',
      options: [
        { id: 'd', text: 'I really love showing people around the campus.', correct: false },
        { id: 'b', text: 'I signed up to give two tours that morning.', correct: true },
        { id: 'c', text: 'Open houses are a good way to showcase campus.', correct: false },
        { id: 'a', text: 'Prospective students visit often, usually with their parents on weekends.', correct: false }
      ],
      explanation: 'Direct involvement answer.',
      points: 1
    },
    {
      id: 'lt3-m2-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m2-cr04.mp3',
      image: '/img/listening/stock_modal/female-4.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I can\'t believe how much my textbooks cost this semester.',
      options: [
        { id: 'c', text: 'You should check the library reserves. A lot of them are available there.', correct: true },
        { id: 'b', text: 'Textbook costs have really risen a lot over the last few years.', correct: false },
        { id: 'a', text: 'Books are essential for learning, though many professors still use older editions in class.', correct: false },
        { id: 'd', text: 'I try to buy used copies whenever I can find them online.', correct: false }
      ],
      explanation: 'Suggests a money-saving alternative.',
      points: 1
    },
    {
      id: 'lt3-m2-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-3/m2-cr05.mp3',
      image: '/img/listening/stock_modal/male-5.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Do you know whether the new gym hours are posted online?',
      options: [
        { id: 'c', text: 'They are; the schedule went up on the rec center site this morning.', correct: true },
        { id: 'b', text: 'The hours can vary quite a bit from one season to another.', correct: false },
        { id: 'd', text: 'Online posting is standard now for most facilities, including the library and gym schedules.', correct: false },
        { id: 'a', text: 'The gym is over on the north side of the main campus.', correct: false }
      ],
      explanation: 'Confirms availability and source.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt3-m2-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-3/m2-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Woman: I just signed up for the writing tutor program.\nMan: I didn\'t know there was one. How does it work?\nWoman: You bring a draft and a tutor reads it with you, page by page.\nMan: Do they help with grammar or just structure?\nWoman: Both, actually. They can focus on whatever you need.\nMan: Huh. How long is a session?\nWoman: Fifty minutes, and you can book two a week.\nMan: Is there a fee?\nWoman: No, it\'s covered by student services. You just book a slot online.\nMan: That\'s exactly what I\'ve been looking for. I\'ll sign up too.',
      questions: [
        {
          id: 'lt3-m2-conv1-q1',
          stem: 'What does the writing tutor program offer?',
          options: [
        { id: 'a', text: 'One-on-one feedback on student drafts.', correct: true },
        { id: 'c', text: 'Online quizzes for grammar and punctuation.', correct: false },
        { id: 'b', text: 'Lecture recordings that students can download.', correct: false },
        { id: 'd', text: 'Free copies of the required textbooks.', correct: false }
          ],
          explanation: 'Tutors review drafts with students.',
          points: 1
        },        {
          id: 'lt3-m2-conv1-q2',
          stem: 'What does the man plan to do at the end of the conversation?',
          options: [
        { id: 'a', text: 'Buy a grammar handbook at the bookstore.', correct: false },
        { id: 'c', text: 'Email his English professor about the draft.', correct: false },
        { id: 'd', text: 'Drop his writing class for the semester.', correct: false },
        { id: 'b', text: 'Sign up for the tutor program.', correct: true }
          ],
          explanation: 'He plans to sign up.',
          points: 1
        }
      ]
    },
    {
      id: 'lt3-m2-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-3/m2-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Man: Are you going to the alumni networking dinner tonight?\nWoman: I\'m planning to. Did you sign up?\nMan: I did, but I\'m not sure what to wear.\nWoman: Business casual is the standard, no jeans.\nMan: Got it. Do you know who\'s coming?\nWoman: Mostly graduates from the business and engineering programs, about forty of them.\nMan: That\'s a good crowd. What time does it start?\nWoman: Seven, in the faculty dining room, though people show up early for coffee.\nMan: Should I bring anything else?\nWoman: Bring a few resumes. Some alumni like to take one home.',
      questions: [
        {
          id: 'lt3-m2-conv2-q1',
          stem: 'What event are the speakers discussing?',
          options: [
        { id: 'd', text: 'A career fair on campus.', correct: false },
        { id: 'a', text: 'An alumni networking dinner.', correct: true },
        { id: 'c', text: 'A guest lecture by an alumnus.', correct: false },
        { id: 'b', text: 'A graduation celebration.', correct: false }
          ],
          explanation: 'An alumni networking dinner.',
          points: 1
        },        {
          id: 'lt3-m2-conv2-q2',
          stem: 'What does the woman tell the man to bring?',
          options: [
        { id: 'c', text: 'A few copies of his resume.', correct: true },
        { id: 'b', text: 'His student ID card for entry tonight.', correct: false },
        { id: 'd', text: 'A small gift for the visiting alumni.', correct: false },
        { id: 'a', text: 'A short formal speech to give afterward.', correct: false }
          ],
          explanation: 'A few resumes.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt3-m2-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-3/m2-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Hi, everyone. The Office of Sustainability is launching a new recycling competition between residence halls. Halls that recycle the most over the next month will win a pizza party and bragging rights. Recycling bins are clearly marked in every common area. Please rinse containers and flatten cardboard, because a bin with food waste in it will not count toward your hall\'s total. Weekly standings go up by the front desk. Help your hall win by sorting your recyclables properly. The competition starts Monday.',
      questions: [
        {
          id: 'lt3-m2-ann1-q1',
          stem: 'What competition is being announced?',
          options: [
        { id: 'a', text: 'A recycling competition between residence halls.', correct: true },
        { id: 'b', text: 'An athletic competition between halls for charity.', correct: false },
        { id: 'c', text: 'A talent show for campus student groups.', correct: false },
        { id: 'd', text: 'A trivia contest between the residence halls.', correct: false }
          ],
          explanation: 'Recycling competition.',
          points: 1
        },        {
          id: 'lt3-m2-ann1-q2',
          stem: 'What is the prize?',
          options: [
        { id: 'c', text: 'A pizza party and bragging rights.', correct: true },
        { id: 'a', text: 'A trip to a local sustainability fair.', correct: false },
        { id: 'd', text: 'Free laundry for a month.', correct: false },
        { id: 'b', text: 'A scholarship for the winning hall.', correct: false }
          ],
          explanation: 'Pizza party and bragging rights.',
          points: 1
        }
      ]
    },
    {
      id: 'lt3-m2-ann2',
      title: 'Listen to an announcement at a campus event.',
      audio: '/audio/listening/test-3/m2-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Good morning, students. The Health Services office will host an information session about the upcoming flu shot clinic this Wednesday at noon. It meets in the Wellness Center lounge on the second floor and runs about thirty minutes. Staff will explain who is eligible, how to schedule an appointment, and what to expect afterward. Walk-in shots will also be available throughout the week at no cost to students, so nobody will be turned away. Bring your student ID, and call the front desk with any questions.',
      questions: [
        {
          id: 'lt3-m2-ann2-q1',
          stem: 'What is the information session about?',
          options: [
        { id: 'a', text: 'A new health insurance plan.', correct: false },
        { id: 'c', text: 'The upcoming flu shot clinic.', correct: true },
        { id: 'd', text: 'Required wellness checks for students.', correct: false },
        { id: 'b', text: 'Mental health services on campus.', correct: false }
          ],
          explanation: 'Flu shot clinic.',
          points: 1
        },        {
          id: 'lt3-m2-ann2-q2',
          stem: 'What is true about the flu shots themselves?',
          options: [
        { id: 'c', text: 'They are by appointment only.', correct: false },
        { id: 'd', text: 'They cost a small co-pay.', correct: false },
        { id: 'a', text: 'They are limited to fifty students.', correct: false },
        { id: 'b', text: 'They are free for students.', correct: true }
          ],
          explanation: 'Free for students.',
          points: 1
        }
      ]
    }
      ],

      academicTalks: [
        {
          id: 'lt3-m2-talk1',
          title: 'Listen to a talk in a behavioral economics class.',
          audio: '/audio/listening/test-3/m2-talk1.mp3',
          image: '/img/listening/announcement/female-3.webp',
          speakerGender: 'female',
          transcript: 'In recent years, governments and companies have become interested in what behavioral economists call nudges. So let\'s define the term, look at the evidence, and then ask whether the whole approach is defensible. A nudge is a small change in how a choice is presented to people, designed to encourage a particular decision without restricting their freedom to choose otherwise. Nothing is banned, required, or taxed. A classic example involves organ donation. In countries where citizens must explicitly opt in to be donors, participation rates are typically low. In countries where everyone is presumed to be a donor unless they opt out, rates are dramatically higher, in some comparisons above ninety percent against under twenty. The actual effort required is similar in both cases, a single form either way. But the default option, meaning what happens if you do nothing, turns out to matter enormously. Once you notice defaults, you see them everywhere. Nudges have been used to encourage retirement saving, by enrolling employees automatically and letting them withdraw later. They\'ve been used for healthier eating, by placing fruit at eye level in a cafeteria, and for energy conservation, by printing a neighbor\'s average usage on your electricity bill. These measures are cheap to run, which is part of their appeal to policymakers. Critics argue that even well-intentioned nudges raise ethical questions about who decides what choices people should be steered toward. The influence is quiet by design, so people may end up making choices they would not endorse if they saw the steering.',
          questions: [
            {
              id: 'lt3-m2-talk1-q1',
              stem: 'According to the speaker, what is a nudge?',
              options: [
                { id: 'b', text: 'A small change in how a choice is presented that encourages a particular decision without restricting freedom', correct: true },
                { id: 'c', text: 'A financial reward paid to people who choose the option that benefits them the most', correct: false },
                { id: 'a', text: 'A legal requirement that forces people to make a particular decision and punishes those who refuse to comply', correct: false },
                { id: 'd', text: 'A market-based incentive, such as a tax or a subsidy, designed to change consumer behavior', correct: false }
              ],
              explanation: 'The speaker defines a nudge as a small change in choice presentation that encourages a particular decision without restricting freedom.',
              points: 1
            },
            {
              id: 'lt3-m2-talk1-q2',
              stem: 'What does the speaker imply about the ethics of nudges?',
              options: [
                { id: 'c', text: 'They have no significant ethical implications worth debating in public policy', correct: false },
                { id: 'a', text: 'They are universally praised by economists and raise no serious objections', correct: false },
                { id: 'd', text: 'They should always be implemented by governments rather than by private companies or employers', correct: false },
                { id: 'b', text: 'They raise concerns about who decides what choices people should be steered toward', correct: true }
              ],
              explanation: 'The speaker notes that critics argue even well-intentioned nudges raise ethical questions about who decides what to steer people toward.',
              points: 1
            },
                            {
                id: 'lt3-m2-talk1-q3',
                stem: 'Why does the speaker compare opt-in and opt-out donation systems?',
                options: [
                  { id: 'a', text: 'To argue that organ donation should be made mandatory', correct: false },
                  { id: 'c', text: 'To compare the paperwork required in different countries', correct: false },
                  { id: 'b', text: 'To show how strongly the default option shapes behavior', correct: true },
                  { id: 'd', text: 'To show that donation rates have fallen in recent years', correct: false }
                ],
                explanation: 'The speaker points out that the effort involved is the same either way, so the large gap in donation rates comes from what happens when a person does nothing.',
                points: 1
              },
                            {
                id: 'lt3-m2-talk1-q4',
                stem: 'According to the speaker, why do policymakers find nudges appealing?',
                options: [
                  { id: 'c', text: 'They have been approved directly by most voters', correct: false },
                  { id: 'a', text: 'They are inexpensive to put into practice', correct: true },
                  { id: 'd', text: 'They give employees a larger retirement payment immediately', correct: false },
                  { id: 'b', text: 'They remove the need for citizens to choose at all', correct: false }
                ],
                explanation: 'The speaker says these measures are cheap to run, and that low cost is part of why policymakers like them.',
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
    introAudio: '/audio/listening/test-3/m2-intro.mp3',
    chooseResponse: [
          {
            id: 'lt3-m2e-cr1',
            type: 'choose_response',
            audio: '/audio/listening/test-3/m2e-cr01.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Could you tell me when the next bus arrives?',
            options: [
              { id: 'c', text: 'I usually just drive my own car.', correct: false },
              { id: 'b', text: 'Buses are a popular way to travel around here.', correct: false },
              { id: 'd', text: 'The bus station is pretty far from here.', correct: false },
              { id: 'a', text: 'It should be here in about ten minutes.', correct: true }
            ],
            explanation: 'The speaker is asking about arrival time, so the correct response gives a time.',
            points: 1
          },
          {
            id: 'lt3-m2e-cr2',
            type: 'choose_response',
            audio: '/audio/listening/test-3/m2e-cr02.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Did you find the book you were looking for?',
            options: [
              { id: 'a', text: 'I read three books just last month.', correct: false },
              { id: 'c', text: 'Books here are organized by author\'s last name.', correct: false },
              { id: 'd', text: 'The library has a lot of books.', correct: false },
              { id: 'b', text: 'Yes, it was on the second floor.', correct: true }
            ],
            explanation: 'The speaker is asking if the book was found, so the correct response confirms and gives info.',
            points: 1
          },
          {
            id: 'lt3-m2e-cr3',
            type: 'choose_response',
            audio: '/audio/listening/test-3/m2e-cr03.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Are you ready for the test on Friday?',
            options: [
              { id: 'c', text: 'Friday is always a really busy day.', correct: false },
              { id: 'd', text: 'The teacher is very strict about deadlines.', correct: false },
              { id: 'a', text: 'I have been studying every night.', correct: true },
              { id: 'b', text: 'Tests in that class are usually difficult.', correct: false }
            ],
            explanation: 'The speaker is asking about test preparation, so the correct response describes preparation.',
            points: 1
          },
          {
            id: 'lt3-m2e-cr4',
            type: 'choose_response',
            audio: '/audio/listening/test-3/m2e-cr04.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Would you like some coffee or tea?',
            options: [
              { id: 'a', text: 'Coffee shops are really popular around here.', correct: false },
              { id: 'c', text: 'Tea, please, with a little sugar.', correct: true },
              { id: 'd', text: 'I drink coffee almost every single morning.', correct: false },
              { id: 'b', text: 'Tea is supposed to be healthier than coffee.', correct: false }
            ],
            explanation: 'The speaker is offering a choice, so the correct response makes a selection.',
            points: 1
          },
          {
            id: 'lt3-m2e-cr5',
            type: 'choose_response',
            audio: '/audio/listening/test-3/m2e-cr05.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Have you ever been to that new restaurant?',
            options: [
              { id: 'b', text: 'Restaurants around here are getting expensive.', correct: false },
              { id: 'c', text: 'I usually prefer cooking at home.', correct: false },
              { id: 'd', text: 'The restaurant just opened last month.', correct: false },
              { id: 'a', text: 'I went there last weekend.', correct: true }
            ],
            explanation: 'The speaker is asking about past experience, so the correct response shares it.',
            points: 1
          },
    ],
    conversations: [
          {
            id: 'lt3-m2e-conv1',
            title: 'Listen to a conversation.',
            audio: '/audio/listening/test-3/m2e-conv1.mp3',
            image: '/img/listening/two_people/people-1.webp',
            transcript: 'Man: Hi, I want to sign up for the cooking class.\nWoman: Sure. We have classes on Tuesday and Thursday evenings.\nMan: Which class would you recommend for a beginner?\nWoman: The Tuesday class is better for beginners. We start with basic skills.\nMan: That sounds good. How much does it cost?\nWoman: It is sixty dollars for the whole semester. That includes all the ingredients.\nMan: Great, I can pay today. When does the class start?\nWoman: The first class is next Tuesday at six in the evening.',
            questions: [
              {
                id: 'lt3-m2e-conv1-q1',
                stem: 'Why is the man speaking with the woman?',
                options: [
                  { id: 'd', text: 'To apply for a job at the school.', correct: false },
                  { id: 'a', text: 'To buy a cookbook for the class.', correct: false },
                  { id: 'c', text: 'To order a meal from the kitchen.', correct: false },
                  { id: 'b', text: 'To sign up for a cooking class.', correct: true }
                ],
                explanation: 'The man wants to sign up for the cooking class.',
                points: 1
              },
              {
                id: 'lt3-m2e-conv1-q2',
                stem: 'Which class does the woman recommend for the man?',
                options: [
                  { id: 'a', text: 'The Monday class.', correct: false },
                  { id: 'd', text: 'The Saturday class.', correct: false },
                  { id: 'b', text: 'The Tuesday class.', correct: true },
                  { id: 'c', text: 'The Thursday class.', correct: false }
                ],
                explanation: 'The woman recommends the Tuesday class because it is better for beginners.',
                points: 1
              }
            ]
          },
        {
          id: 'lt3-m2e-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-3/m2e-conv2.mp3',
          image: '/img/listening/two_people/people-1.webp',
          transcript: 'Woman: Hey Mike, did you finish your portfolio for the design class?\nMan: Almost. I just need to add two more drawings.\nWoman: When is it due?\nMan: Friday at five p.m. The professor said no late submissions.\nWoman: That is strict. Do you need any help?\nMan: Actually, could you take a look at one of my sketches tomorrow?\nWoman: Sure, just bring it by my dorm.',
          questions: [
          {
            id: 'lt3-m2e-conv2-q1',
            stem: 'What does Mike still need to do?',
            options: [
                  { id: 'a', text: 'Buy new pencils for the design class.', correct: false },
                  { id: 'c', text: 'Find a different professor for the class.', correct: false },
                  { id: 'd', text: 'Pay a fee for the design portfolio.', correct: false },
                  { id: 'b', text: 'Add two more drawings to his portfolio.', correct: true }
            ],
            explanation: 'Mike says he just needs to add two more drawings.',
            points: 1
          },
          {
            id: 'lt3-m2e-conv2-q2',
            stem: 'What does Mike ask the woman to do?',
            options: [
                  { id: 'c', text: 'Drive him to class on Friday morning.', correct: false },
                  { id: 'b', text: 'Take a look at one of his sketches.', correct: true },
                  { id: 'd', text: 'Submit his portfolio to the professor for him.', correct: false },
                  { id: 'a', text: 'Lend him her notes from the design class.', correct: false }
            ],
            explanation: 'Mike asks if she can take a look at one of his sketches tomorrow.',
            points: 1
          }
          ]
        }
    ],
    announcements: [
          {
            id: 'lt3-m2e-ann1',
            title: 'Listen to an announcement at a university.',
            audio: '/audio/listening/test-3/m2e-ann1.mp3',
            image: '/img/listening/announcement/female-1.webp',
            speakerGender: 'female',
            transcript: 'Attention students. The dining hall will close one hour early tonight, at seven instead of eight. This is because the kitchen staff need extra time to prepare for tomorrow\'s big event. Tomorrow we will host a special dinner for international students. The dinner is free and starts at five-thirty. All students are welcome. Please bring your friends. We will serve food from many different countries.',
            questions: [
              {
                id: 'lt3-m2e-ann1-q1',
                stem: 'Why is the dining hall closing early tonight?',
                options: [
                  { id: 'b', text: 'There is a problem with the kitchen equipment.', correct: false },
                  { id: 'd', text: 'The dining hall is being painted this evening.', correct: false },
                  { id: 'c', text: 'Not enough students are coming for dinner tonight.', correct: false },
                  { id: 'a', text: 'Kitchen staff need to prepare for an event.', correct: true }
                ],
                explanation: 'The kitchen staff need extra time to prepare for tomorrow\'s event.',
                points: 1
              },
              {
                id: 'lt3-m2e-ann1-q2',
                stem: 'What time does the dining hall close tonight?',
                options: [
                  { id: 'd', text: 'Nine p.m.', correct: false },
                  { id: 'a', text: 'Six p.m.', correct: false },
                  { id: 'b', text: 'Seven p.m.', correct: true },
                  { id: 'c', text: 'Eight p.m.', correct: false }
                ],
                explanation: 'It will close at seven instead of eight.',
                points: 1
              }
            ]
          },
        {
          id: 'lt3-m2e-ann2',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-3/m2e-ann2.mp3',
          image: '/img/listening/announcement/female-1.webp',
          speakerGender: 'female',
          transcript: 'Attention students. The university is offering a free study skills workshop next Tuesday at three p.m. in the library conference room. Topics will include time management, note taking, and exam preparation. The workshop will last about ninety minutes. No sign-up is needed, but please arrive a few minutes early to find a seat.',
          questions: [
          {
            id: 'lt3-m2e-ann2-q1',
            stem: 'What is the topic of the workshop?',
            options: [
                  { id: 'a', text: 'Communication skills like public speaking and presentations.', correct: false },
                  { id: 'd', text: 'Cooking skills like meal planning and healthy eating.', correct: false },
                  { id: 'b', text: 'Study skills like time management and note taking.', correct: true },
                  { id: 'c', text: 'Career skills like resume writing and interviews.', correct: false }
            ],
            explanation: 'The announcement says the workshop covers study skills topics like time management, note taking, and exam preparation.',
            points: 1
          },
          {
            id: 'lt3-m2e-ann2-q2',
            stem: 'How long will the workshop last?',
            options: [
                  { id: 'a', text: 'About thirty minutes.', correct: false },
                  { id: 'b', text: 'About one hour.', correct: false },
                  { id: 'c', text: 'About ninety minutes.', correct: true },
                  { id: 'd', text: 'About three hours.', correct: false }
            ],
            explanation: 'The announcement says the workshop will last about ninety minutes.',
            points: 1
          }
          ]
        }
    ],
    academicTalks: [
          {
            id: 'lt3-m2e-talk1',
            title: 'Listen to a talk in a history class.',
            audio: '/audio/listening/test-3/m2e-talk1.mp3',
            image: '/img/listening/announcement/male-1.webp',
            speakerGender: 'male',
            transcript: 'Let us discuss the early history of the printing press. Before the printing press, books were written by hand. Each book took weeks or months to make. This meant that books were very expensive, and only rich people could afford them. In the year 1440, a German man named Johannes Gutenberg invented a new kind of printing press in Europe. His machine could print many copies of a page very quickly. Within fifty years, books became much cheaper. Many more people learned to read. The printing press helped spread new ideas across Europe. Some historians say it changed the world more than any other invention of its time.',
            questions: [
              {
                id: 'lt3-m2e-talk1-q1',
                stem: 'What is the main topic of the talk?',
                options: [
                  { id: 'd', text: 'The high cost of books in the modern world.', correct: false },
                  { id: 'b', text: 'The personal life and early education of Johannes Gutenberg.', correct: false },
                  { id: 'a', text: 'The early history of the printing press and its effects.', correct: true },
                  { id: 'c', text: 'The way modern printing machines work in large commercial factories today.', correct: false }
                ],
                explanation: 'The talk is about the early history of the printing press and its effects.',
                points: 1
              },
              {
                id: 'lt3-m2e-talk1-q2',
                stem: 'Why were books expensive before the printing press?',
                options: [
                  { id: 'd', text: 'Only one company in Europe was allowed to sell them.', correct: false },
                  { id: 'b', text: 'They were written by hand and took a long time.', correct: true },
                  { id: 'c', text: 'They were printed on rare materials that were hard to find.', correct: false },
                  { id: 'a', text: 'They were imported from other countries far away from Europe.', correct: false }
                ],
                explanation: 'Books were written by hand, taking weeks or months, so they were expensive.',
                points: 1
              },
              {
                id: 'lt3-m2e-talk1-q3',
                stem: 'When was Gutenberg\'s printing press invented?',
                options: [
                  { id: 'c', text: 'In the year 1700.', correct: false },
                  { id: 'd', text: 'In the year 1900.', correct: false },
                  { id: 'b', text: 'In the year 1440.', correct: true },
                  { id: 'a', text: 'Around the year 1000.', correct: false }
                ],
                explanation: 'The talk says in the year 1440, Johannes Gutenberg invented the printing press.',
                points: 1
              },
              {
                id: 'lt3-m2e-talk1-q4',
                stem: 'What happened within fifty years of the printing press being invented?',
                options: [
                  { id: 'd', text: 'Hand-written books were banned.', correct: false },
                  { id: 'a', text: 'Books became much cheaper.', correct: true },
                  { id: 'c', text: 'People stopped reading books.', correct: false },
                  { id: 'b', text: 'Most books were lost.', correct: false }
                ],
                explanation: 'The talk says within fifty years, books became much cheaper.',
                points: 1
              }
            ]
          }
    ]
  },
};

// Alias for full-test loader, which reads window.LISTENING_TEST_3
window.LISTENING_TEST_3 = window.LISTENING_SECTION_3;
