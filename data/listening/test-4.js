// TOEFL iBT 2026 Listening Practice — Test 4
// Module 1 (Router): 30 questions | Module 2: 17 questions | Total: 47
// Audio: pre-recorded MP3 files in /audio/listening/test-4/

window.LISTENING_SECTION_4 = {
  id: 'listening-test-4',
  title: 'Listening Practice Test 4',
  format: '2026',
  timeLimit: 1740,

  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      introAudio: 'audio/listening/test-4/m1-intro.mp3',

      chooseResponse: [
    {
      id: 'lt4-m1-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m1-cr01.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you ever get that printer in the dorm to work?',
      options: [
        { id: 'c', text: 'I print for my classes pretty much every single week.', correct: false },
        { id: 'd', text: 'Yes, the IT person fixed it after I described the issue.', correct: true },
        { id: 'b', text: 'Dorms have shared printers, but they\'re usually out of paper by now.', correct: false },
        { id: 'a', text: 'Printers can be tricky, especially the older models on campus.', correct: false }
      ],
      explanation: 'Direct yes plus detail.',
      points: 1
    },
    {
      id: 'lt4-m1-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m1-cr02.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Excuse me, is this the line for graduation tickets?',
      options: [
        { id: 'a', text: 'Graduation is in May, but the ceremony runs across three different days.', correct: false },
        { id: 'b', text: 'No, this line is for course registration. Tickets are at window three.', correct: true },
        { id: 'c', text: 'I\'ll be graduating soon, so I\'ve been thinking about the ceremony.', correct: false },
        { id: 'd', text: 'Lines around here can be long at this time of year.', correct: false }
      ],
      explanation: 'Corrects misunderstanding and redirects.',
      points: 1
    },
    {
      id: 'lt4-m1-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m1-cr03.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I can\'t seem to focus on my study group anymore. Everyone just chats.',
      options: [
        { id: 'c', text: 'Chatting is pretty normal once a group has gotten comfortable with each other.', correct: false },
        { id: 'b', text: 'Study groups can help, but only if everyone shows up with the reading done.', correct: false },
        { id: 'd', text: 'Focus takes practice, and it usually gets harder later in the semester.', correct: false },
        { id: 'a', text: 'Maybe you should try studying with one of the quieter students one on one.', correct: true }
      ],
      explanation: 'Practical alternative.',
      points: 1
    },
    {
      id: 'lt4-m1-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m1-cr04.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Have you decided where to go for spring break yet?',
      options: [
        { id: 'b', text: 'I\'m staying on campus and catching up on coursework.', correct: true },
        { id: 'c', text: 'Travel can be expensive, especially during the busy break weeks.', correct: false },
        { id: 'd', text: 'Beaches are popular with a lot of students every year.', correct: false },
        { id: 'a', text: 'Spring break is fun, especially if you travel somewhere new.', correct: false }
      ],
      explanation: 'Direct plan answer.',
      points: 1
    },
    {
      id: 'lt4-m1-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m1-cr05.mp3',
      image: '/img/listening/stock_modal/female-5.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Do you know how to apply for the new study abroad program?',
      options: [
        { id: 'd', text: 'I went abroad last year and had a really good time.', correct: false },
        { id: 'c', text: 'Study abroad is rewarding for almost everyone who tries it.', correct: false },
        { id: 'b', text: 'The application opens next Monday on the international office page.', correct: true },
        { id: 'a', text: 'Travel broadens horizons, especially if you stay long enough to adjust.', correct: false }
      ],
      explanation: 'Specific actionable info.',
      points: 1
    },
    {
      id: 'lt4-m1-cr6',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m1-cr06.mp3',
      image: '/img/listening/stock_modal/male-6.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I think I\'m coming down with something. I should probably skip class today.',
      options: [
        { id: 'c', text: 'Definitely rest. I can take notes for you and send them tonight.', correct: true },
        { id: 'b', text: 'Getting sick is pretty common around this time of the year.', correct: false },
        { id: 'd', text: 'Classes happen daily, but most professors record their lectures and post them online.', correct: false },
        { id: 'a', text: 'Notes are important, especially in a class that moves this quickly.', correct: false }
      ],
      explanation: 'Sympathetic and offers concrete help.',
      points: 1
    },
    {
      id: 'lt4-m1-cr7',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m1-cr07.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Do you know whether the writing center accepts walk-ins?',
      options: [
        { id: 'd', text: 'Walk-ins can be unpredictable.', correct: false },
        { id: 'a', text: 'They do.', correct: true },
        { id: 'b', text: 'Writing helps in many fields.', correct: false },
        { id: 'c', text: 'Centers are common.', correct: false }
      ],
      explanation: 'Detailed practical answer.',
      points: 1
    },
    {
      id: 'lt4-m1-cr8',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m1-cr08.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Has the new dining option opened on the east side of campus yet?',
      options: [
        { id: 'b', text: 'Dining is a big part of campus life here.', correct: false },
        { id: 'd', text: 'Options are growing on campus almost every single year.', correct: false },
        { id: 'a', text: 'Variety is always welcome after a long semester.', correct: false },
        { id: 'c', text: 'It opens this Monday for breakfast service.', correct: true }
      ],
      explanation: 'Specific opening date.',
      points: 1
    },
    {
      id: 'lt4-m1-cr9',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m1-cr09.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Did you remember our group meeting this evening?',
      options: [
        { id: 'a', text: 'Evenings usually work better for me than mornings do these days.', correct: false },
        { id: 'b', text: 'Groups have advantages, at least when everyone actually contributes something useful.', correct: false },
        { id: 'd', text: 'Yes, I\'ll be there at six in the second-floor study room.', correct: true },
        { id: 'c', text: 'Meetings happen weekly, although our group sometimes moves them when assignments overlap.', correct: false }
      ],
      explanation: 'Confirms time and place.',
      points: 1
    },
    {
      id: 'lt4-m1-cr10',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m1-cr10.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'I\'m thinking about going to office hours, but I don\'t really know what to ask.',
      options: [
        { id: 'a', text: 'Bring a copy of your last assignment and ask for general feedback.', correct: true },
        { id: 'd', text: 'Asking takes courage, and plenty of students never get around to it.', correct: false },
        { id: 'b', text: 'Professors enjoy questions but they prefer when you\'ve at least read the chapter beforehand.', correct: false },
        { id: 'c', text: 'Office hours are useful for almost every class you end up taking.', correct: false }
      ],
      explanation: 'Concrete preparation suggestion.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt4-m1-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-4/m1-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Woman: I just heard the lecture hall was changed for tomorrow\'s class.\nMan: Where is it being held now?\nWoman: They moved it to the auditorium in the science building.\nMan: That\'s a bigger space. Why the change?\nWoman: The professor opened it to other students who wanted to attend.\nMan: Interesting. The topic must be popular.\nWoman: It is. She\'s presenting the results of her fieldwork in Peru.\nMan: Same time as usual, then?\nWoman: Same time, ten o\'clock. Just give yourself ten extra minutes to walk over.\nMan: Good thinking. I\'ll head over early and find a seat near the front.',
      questions: [
        {
          id: 'lt4-m1-conv1-q1',
          stem: 'What change is the woman explaining?',
          options: [
        { id: 'c', text: 'The exam was postponed.', correct: false },
        { id: 'a', text: 'The professor was replaced.', correct: false },
        { id: 'd', text: 'The class time was moved.', correct: false },
        { id: 'b', text: 'The lecture hall was changed.', correct: true }
          ],
          explanation: 'The lecture hall changed.',
          points: 1
        },        {
          id: 'lt4-m1-conv1-q2',
          stem: 'Why was the change made?',
          options: [
        { id: 'd', text: 'The original room was being repaired this week.', correct: false },
        { id: 'b', text: 'Most of the students had requested the change.', correct: false },
        { id: 'c', text: 'The professor opened the lecture to more students.', correct: true },
        { id: 'a', text: 'There was a scheduling conflict with another class.', correct: false }
          ],
          explanation: 'Professor opened it to additional students.',
          points: 1
        }
      ]
    },
    {
      id: 'lt4-m1-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-4/m1-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Man: I think I need to drop my chemistry course. The pace is too fast.\nWoman: Have you talked to the professor about it?\nMan: Not yet. I was thinking of just dropping it.\nWoman: She might offer extra help during office hours.\nMan: I didn\'t know she held them. When are they?\nWoman: Tuesdays and Thursdays, right after the afternoon lab. She\'s usually free the whole hour.\nMan: That\'s a good point. Maybe I\'m being too quick to give up.\nWoman: Try office hours first. Then decide based on how that goes.\nMan: All right. I have two weeks before I\'d have to decide.',
      questions: [
        {
          id: 'lt4-m1-conv2-q1',
          stem: 'What is the man considering doing?',
          options: [
        { id: 'c', text: 'Dropping his chemistry course entirely.', correct: true },
        { id: 'b', text: 'Asking for a deadline extension.', correct: false },
        { id: 'a', text: 'Switching to a different chemistry section.', correct: false },
        { id: 'd', text: 'Hiring a private tutor.', correct: false }
          ],
          explanation: 'He is considering dropping the course.',
          points: 1
        },        {
          id: 'lt4-m1-conv2-q2',
          stem: 'What does the woman suggest?',
          options: [
        { id: 'c', text: 'Talking to the professor during office hours first.', correct: true },
        { id: 'b', text: 'Joining a chemistry study group that meets weekly.', correct: false },
        { id: 'a', text: 'Looking for a tutor at the learning center.', correct: false },
        { id: 'd', text: 'Switching to a less difficult major next term.', correct: false }
          ],
          explanation: 'She suggests trying office hours first.',
          points: 1
        }
      ]
    },
    {
      id: 'lt4-m1-conv3',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-4/m1-conv3.mp3',
      image: '/img/listening/two_people/people-3.webp',
      transcript: 'Woman: Did you finish your assigned reading for tomorrow?\nMan: Almost. The last chapter is taking longer than I expected.\nWoman: I felt the same way. The author\'s writing style is dense.\nMan: He spends four pages defining terms he already defined.\nWoman: And the footnotes. I lost an hour flipping back.\nMan: Did you find any of it interesting, though?\nWoman: The middle section about urbanization was actually fascinating.\nMan: What made it stand out?\nWoman: He follows one factory town for sixty years, and the numbers are surprising.\nMan: I\'ll keep that in mind when I get there tonight.',
      questions: [
        {
          id: 'lt4-m1-conv3-q1',
          stem: 'What problem are the speakers discussing?',
          options: [
        { id: 'c', text: 'The reading is harder than expected.', correct: true },
        { id: 'd', text: 'The book is out of stock.', correct: false },
        { id: 'b', text: 'The deadline was moved up a week.', correct: false },
        { id: 'a', text: 'The professor changed the assignment again.', correct: false }
          ],
          explanation: 'Reading is dense and slow.',
          points: 1
        },        {
          id: 'lt4-m1-conv3-q2',
          stem: 'Which part of the reading does the woman find interesting?',
          options: [
        { id: 'd', text: 'The author\'s short biography section.', correct: false },
        { id: 'a', text: 'The middle section about urbanization.', correct: true },
        { id: 'c', text: 'The conclusion about future trends.', correct: false },
        { id: 'b', text: 'The introduction about historical context.', correct: false }
          ],
          explanation: 'The middle section about urbanization.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt4-m1-ann1',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-4/m1-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Good afternoon. The Cultural Center will host a Lunar New Year celebration next Friday at six p.m. in the main hall, on the first floor of the student union. Activities include traditional music, calligraphy demonstrations, and a sampling of festival foods prepared by student clubs. All students, faculty, and staff are welcome, and you may bring one off-campus guest. Admission is free, but please register online by Wednesday so we can plan refreshments. Volunteers are needed for setup, so email the Cultural Center.',
      questions: [
        {
          id: 'lt4-m1-ann1-q1',
          stem: 'What event is being announced?',
          options: [
        { id: 'b', text: 'A cooking class on Asian cuisine.', correct: false },
        { id: 'c', text: 'A music concert by international students.', correct: false },
        { id: 'd', text: 'A Lunar New Year celebration.', correct: true },
        { id: 'a', text: 'A documentary screening.', correct: false }
          ],
          explanation: 'Lunar New Year celebration.',
          points: 1
        },        {
          id: 'lt4-m1-ann1-q2',
          stem: 'Why are attendees asked to register?',
          options: [
        { id: 'a', text: 'To reserve one of the limited seats.', correct: false },
        { id: 'b', text: 'To receive a study guide ahead of time.', correct: false },
        { id: 'd', text: 'To pay an entry fee in advance.', correct: false },
        { id: 'c', text: 'To help organizers plan refreshments.', correct: true }
          ],
          explanation: 'Help plan refreshments.',
          points: 1
        }
      ]
    },
    {
      id: 'lt4-m1-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-4/m1-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Hi, everyone. The Office of International Students will host a town hall on visa updates next Tuesday at four p.m. Staff will explain recent policy changes and answer your questions. Bring any documents you\'d like to discuss, such as your I-20 or a pending renewal notice. The session will be in the conference room next to the international office. Seating is limited to forty people, so please arrive early. If you cannot attend, email the office and staff will send you a summary.',
      questions: [
        {
          id: 'lt4-m1-ann2-q1',
          stem: 'What is the town hall about?',
          options: [
        { id: 'd', text: 'Recent visa policy updates.', correct: true },
        { id: 'a', text: 'Cultural exchange opportunities.', correct: false },
        { id: 'b', text: 'Travel arrangements for spring break.', correct: false },
        { id: 'c', text: 'New international student admissions.', correct: false }
          ],
          explanation: 'Visa updates.',
          points: 1
        },        {
          id: 'lt4-m1-ann2-q2',
          stem: 'Where will the town hall take place?',
          options: [
        { id: 'b', text: 'The conference room next to the international office.', correct: true },
        { id: 'd', text: 'The main auditorium in the student center.', correct: false },
        { id: 'a', text: 'The reading room on the library\'s second floor.', correct: false },
        { id: 'c', text: 'The upper floor of the campus cafeteria.', correct: false }
          ],
          explanation: 'Conference room next to international office.',
          points: 1
        }
      ]
    },
    {
      id: 'lt4-m1-ann3',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-4/m1-ann3.mp3',
      image: '/img/listening/announcement/female-3.webp',
      speakerGender: 'female',
      transcript: 'Good morning. The campus museum is opening a new exhibit on indigenous art this Friday. The collection features over fifty pieces from communities across the region, including woven textiles and carved masks. Free guided tours will run every hour from ten a.m. to four p.m. on the opening weekend. No reservation is needed, and each tour lasts about forty minutes. The museum is open to all students and faculty with valid ID. The east entrance is closed for repairs, so use the courtyard doors.',
      questions: [
        {
          id: 'lt4-m1-ann3-q1',
          stem: 'What is the new exhibit about?',
          options: [
        { id: 'a', text: 'Ancient pottery from several different cultures.', correct: false },
        { id: 'c', text: 'Modern photography taken by student artists.', correct: false },
        { id: 'b', text: 'European painting from the Renaissance period.', correct: false },
        { id: 'd', text: 'Indigenous art from regional communities.', correct: true }
          ],
          explanation: 'Indigenous art.',
          points: 1
        },        {
          id: 'lt4-m1-ann3-q2',
          stem: 'How often will free guided tours run on the opening weekend?',
          options: [
        { id: 'c', text: 'Twice a day, morning and afternoon.', correct: false },
        { id: 'a', text: 'Every hour from 10 to 4.', correct: true },
        { id: 'b', text: 'Only by advance reservation each morning.', correct: false },
        { id: 'd', text: 'Three times during the morning hours.', correct: false }
          ],
          explanation: 'Hourly from 10 to 4.',
          points: 1
        }
      ]
    },
      ],

      academicTalks: [
    {
      id: 'lt4-m1-talk1',
      title: 'Listen to a talk in an anthropology class.',
      audio: '/audio/listening/test-4/m1-talk1.mp3',
      image: '/img/listening/announcement/female-4.webp',
      speakerGender: 'female',
      transcript: 'Today we\'ll look at participant observation, the method that defines much of cultural anthropology. I want to cover what it is, where it came from, and why it\'s hard. When anthropologists conduct fieldwork, they rarely study a culture from a distance. Instead, they live inside the community for a year or more, taking part in daily life while recording careful notes. The method was popularized in the early twentieth century by Bronislaw Malinowski, who lived for years among the Trobriand Islanders in the South Pacific. By eating the same food, learning the local language, and joining ceremonies, Malinowski argued, a researcher could understand a culture from the inside, in ways that interviews alone could not reveal. Here\'s an example. Trobriand men made long, risky canoe voyages to exchange shell necklaces and armbands with no practical use, which were usually passed on again. From outside, the system looked pointless. From inside, after years of watching, he could see that the exchanges built alliances and reputation between islands with little other reason to trust each other. Participant observation has obvious benefits, but it raises challenges. Researchers must balance involvement with objectivity. They have to be careful not to disturb the practices they\'re trying to document. And no observer is fully neutral; every researcher brings assumptions into the field. Modern anthropologists often address this by making their own role in the community part of the published work. In our next session, we\'ll look at a few classic ethnographies and see how participant observation shaped the conclusions those authors drew.',
      questions: [
        {
          id: 'lt4-m1-talk1-q1',
          stem: 'What is the main idea of the talk?',
          options: [
        { id: 'a', text: 'Modern researchers no longer use ethnographic methods.', correct: false },
        { id: 'd', text: 'Most fieldwork takes place in the South Pacific region.', correct: false },
        { id: 'b', text: 'Anthropology relies on long-distance survey methods.', correct: false },
        { id: 'c', text: 'Participant observation is central to cultural anthropology.', correct: true }
          ],
          explanation: 'The talk introduces participant observation as a defining method.',
          points: 1
        },        {
          id: 'lt4-m1-talk1-q2',
          stem: 'Why does the speaker mention Malinowski?',
          options: [
        { id: 'c', text: 'To compare him with another anthropologist of the period.', correct: false },
        { id: 'b', text: 'To explain the structure of South Pacific languages.', correct: false },
        { id: 'a', text: 'To illustrate how participant observation began in practice.', correct: true },
        { id: 'd', text: 'To show that fieldwork is best done in groups.', correct: false }
          ],
          explanation: 'Malinowski popularized the method through his Trobriand fieldwork.',
          points: 1
        },        {
          id: 'lt4-m1-talk1-q3',
          stem: 'What challenge of participant observation does the speaker emphasize?',
          options: [
        { id: 'd', text: 'The unpredictability of weather at remote field sites.', correct: false },
        { id: 'b', text: 'The difficulty of staying objective while being involved.', correct: true },
        { id: 'c', text: 'The shortage of trained interpreters in remote communities.', correct: false },
        { id: 'a', text: 'The high cost of funding long-term travel abroad.', correct: false }
          ],
          explanation: 'The lecture stresses balancing involvement and objectivity.',
          points: 1
        },        {
          id: 'lt4-m1-talk1-q4',
          stem: 'What will the speaker most likely discuss next?',
          options: [
        { id: 'c', text: 'Quantitative survey methods used by modern anthropologists.', correct: false },
        { id: 'd', text: 'Famous ethnographies that used participant observation.', correct: true },
        { id: 'b', text: 'A timeline of nineteenth-century scientific expeditions.', correct: false },
        { id: 'a', text: 'Government policies regulating overseas research.', correct: false }
          ],
          explanation: 'She announces classic ethnographies for next session.',
          points: 1
        }
      ]
    },
        {
          id: 'lt4-m1-talk2',
          title: 'Listen to a talk in a biology class.',
          audio: '/audio/listening/test-4/m1-talk2.mp3',
          image: '/img/listening/announcement/female-1.webp',
          speakerGender: 'female',
          transcript: 'Let\'s discuss why some animals migrate, and then how they manage the journey at all. Migration is when animals travel long distances from one place to another, usually with the seasons. Many birds, fish, and even some butterflies migrate. The main reason is to find food. In winter, food becomes scarce in many cold regions, so animals move to warmer places where food is more available. The Arctic tern is the extreme case. It flies from the Arctic down to the Antarctic and back every year, roughly forty thousand kilometers, so it spends nearly the whole year in summer conditions where feeding is good. Some animals migrate to find safer places to have their young. Salmon, for example, return to the rivers where they were born to lay their eggs. A shallow gravel riverbed holds far fewer predators than the open ocean. So how do they find the way? Most migrating animals use more than one cue. Birds read the position of the sun during the day and the pattern of stars at night, and many species can also sense the Earth\'s magnetic field. Salmon appear to recognize the chemical smell of the stream they came from. The timing is usually triggered by changing day length rather than by temperature, which is why departure dates stay fairly steady from year to year. Migration is hard work and dangerous. Many animals do not survive the journey. But for those that do, migration is a successful way to take advantage of resources in different parts of the world.',
          questions: [
          {
            id: 'lt4-m1-talk2-q1',
            stem: 'What is the main reason animals migrate?',
            options: [
                  { id: 'a', text: 'To find food.', correct: true },
                  { id: 'b', text: 'To escape from people.', correct: false },
                  { id: 'd', text: 'To learn new behaviors.', correct: false },
                  { id: 'c', text: 'To meet new species.', correct: false }
            ],
            explanation: 'The speaker says the main reason animals migrate is to find food.',
            points: 1
          },
          {
            id: 'lt4-m1-talk2-q2',
            stem: 'What example does the speaker use to show migration for breeding?',
            options: [
                  { id: 'a', text: 'Birds returning to the same nests they built earlier.', correct: false },
                  { id: 'd', text: 'Whales swimming toward warmer water in the winter.', correct: false },
                  { id: 'c', text: 'Butterflies finding new flowers along the migration route.', correct: false },
                  { id: 'b', text: 'Salmon returning to the rivers where they were born.', correct: true }
            ],
            explanation: 'The speaker mentions salmon returning to their birth rivers to lay eggs.',
            points: 1
          },
              {
                id: 'lt4-m1-talk2-q3',
                stem: 'What other reason for migration does the speaker mention besides food?',
                options: [
                  { id: 'b', text: 'To compete with other species for limited territory.', correct: false },
                  { id: 'd', text: 'To learn new songs from other bird populations.', correct: false },
                  { id: 'a', text: 'To find safer places to have their young.', correct: true },
                  { id: 'c', text: 'To escape from human activity in their habitats.', correct: false }
                ],
                explanation: 'The speaker says some animals migrate to find safer places to have their young.',
                points: 1
              },
              {
                id: 'lt4-m1-talk2-q4',
                stem: 'What does the speaker say about the difficulty of migration?',
                options: [
                  { id: 'c', text: 'It only takes a few hours.', correct: false },
                  { id: 'd', text: 'It is required by law in some countries.', correct: false },
                  { id: 'b', text: 'Many animals do not survive the journey.', correct: true },
                  { id: 'a', text: 'It is easy for most animals.', correct: false }
                ],
                explanation: 'The speaker says migration is hard work and dangerous, and many animals do not survive.',
                points: 1
              }
          ]
        }
      ]
    },

    {
      id: 'module-2',
      title: 'Module 2',
      introAudio: 'audio/listening/test-4/m2-intro.mp3',

      chooseResponse: [
    {
      id: 'lt4-m2-cr1',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m2-cr01.mp3',
      image: '/img/listening/stock_modal/female-1.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'I\'m not sure if my essay topic is too narrow for the assignment.',
      options: [
        { id: 'b', text: 'Email a quick paragraph to the professor and ask for a yes or no.', correct: true },
        { id: 'a', text: 'Narrow can be good or bad, depending on how the assignment rubric is graded.', correct: false },
        { id: 'd', text: 'Topics matter more than most people realize when they start a paper.', correct: false },
        { id: 'c', text: 'Essays take planning, usually a lot more than people expect at first.', correct: false }
      ],
      explanation: 'Practical way to verify.',
      points: 1
    },
    {
      id: 'lt4-m2-cr2',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m2-cr02.mp3',
      image: '/img/listening/stock_modal/male-2.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Are you going to apply for the summer research grant?',
      options: [
        { id: 'd', text: 'Grants are competitive, especially the summer ones with limited departmental funding available.', correct: false },
        { id: 'b', text: 'I started the application but I need a faculty sponsor still.', correct: true },
        { id: 'a', text: 'Research is rewarding once you find a project you actually like.', correct: false },
        { id: 'c', text: 'Summer offers more time than the rest of the year does.', correct: false }
      ],
      explanation: 'Specific status with what is needed.',
      points: 1
    },
    {
      id: 'lt4-m2-cr3',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m2-cr03.mp3',
      image: '/img/listening/stock_modal/female-3.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Could you cover my shift at the help desk on Thursday?',
      options: [
        { id: 'd', text: 'Help desks are there for students.', correct: false },
        { id: 'c', text: 'I could do the morning.', correct: true },
        { id: 'b', text: 'Shifts are sometimes traded around here.', correct: false },
        { id: 'a', text: 'Schedules can clash pretty easily sometimes.', correct: false }
      ],
      explanation: 'Partial help with specific limit.',
      points: 1
    },
    {
      id: 'lt4-m2-cr4',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m2-cr04.mp3',
      image: '/img/listening/stock_modal/male-4.webp',
      speakerGender: 'male',
      stem: 'Choose the best response.',
      transcript: 'Do you know if the museum on campus is free for students?',
      options: [
        { id: 'd', text: 'Campuses have facilities.', correct: false },
        { id: 'c', text: 'Museums are educational.', correct: false },
        { id: 'a', text: 'Yes.', correct: true },
        { id: 'b', text: 'Free things are nice.', correct: false }
      ],
      explanation: 'Direct yes with how-to detail.',
      points: 1
    },
    {
      id: 'lt4-m2-cr5',
      type: 'choose_response',
      audio: '/audio/listening/test-4/m2-cr05.mp3',
      image: '/img/listening/stock_modal/female-5.webp',
      speakerGender: 'female',
      stem: 'Choose the best response.',
      transcript: 'Have you finished the recommended reading for tomorrow?',
      options: [
        { id: 'd', text: 'Just the first two chapters. I\'ll do the rest tonight.', correct: true },
        { id: 'b', text: 'I prefer audiobooks whenever I have a long bus commute.', correct: false },
        { id: 'a', text: 'Reading takes time, usually more than the syllabus ever admits.', correct: false },
        { id: 'c', text: 'Tomorrow is class day, and the professor usually asks a reading-check question.', correct: false }
      ],
      explanation: 'Honest progress report.',
      points: 1
    },
      ],

      conversations: [
    {
      id: 'lt4-m2-conv1',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-4/m2-conv1.mp3',
      image: '/img/listening/two_people/people-1.webp',
      transcript: 'Man: Did you sign up for the volunteer trip to the food bank?\nWoman: I want to, but I have a paper due that week.\nMan: It\'s just Saturday morning, eight to eleven. That leaves you time.\nWoman: True. And I do need a break from writing.\nMan: We sort donations and pack boxes. It\'s fun in a group.\nWoman: Do they train you first?\nMan: A staff member walks you through it in ten minutes.\nWoman: And how many are going?\nMan: Fifteen so far, but they want twenty for the holiday drive.\nWoman: Okay, I\'ll sign up tonight when I get home.',
      questions: [
        {
          id: 'lt4-m2-conv1-q1',
          stem: 'Why is the woman hesitant about volunteering?',
          options: [
        { id: 'c', text: 'She is not interested in the cause.', correct: false },
        { id: 'a', text: 'She has a paper due that week.', correct: true },
        { id: 'd', text: 'She doesn\'t have transportation to the food bank.', correct: false },
        { id: 'b', text: 'She doesn\'t know how to volunteer there.', correct: false }
          ],
          explanation: 'She has a paper due.',
          points: 1
        },        {
          id: 'lt4-m2-conv1-q2',
          stem: 'What activity will the volunteers do?',
          options: [
        { id: 'a', text: 'Serve hot meals to the homeless.', correct: false },
        { id: 'b', text: 'Lead workshops on nutrition and cooking.', correct: false },
        { id: 'd', text: 'Drive donations out to local schools.', correct: false },
        { id: 'c', text: 'Sort donations and pack boxes.', correct: true }
          ],
          explanation: 'Sort donations and pack boxes.',
          points: 1
        }
      ]
    },
    {
      id: 'lt4-m2-conv2',
      title: 'Listen to a conversation.',
      audio: '/audio/listening/test-4/m2-conv2.mp3',
      image: '/img/listening/two_people/people-2.webp',
      transcript: 'Woman: I noticed there\'s a new study room booking system.\nMan: I tried it yesterday. The interface is much simpler now.\nWoman: Can you book a room ahead of time?\nMan: Up to a week in advance. It really helps during exam weeks.\nWoman: That\'s perfect. The old system always felt like a competition.\nMan: Now you can plan ahead instead of racing for a room.\nWoman: Is there a limit on how long you can stay?\nMan: Two hours per booking, and you check in with your ID.\nWoman: What if you\'re late?\nMan: After fifteen minutes it opens up for someone else.',
      questions: [
        {
          id: 'lt4-m2-conv2-q1',
          stem: 'What change has been made to study rooms?',
          options: [
        { id: 'a', text: 'A new booking system has been introduced.', correct: true },
        { id: 'd', text: 'Capacity has been increased in every room.', correct: false },
        { id: 'c', text: 'Rooms have been moved to a new building.', correct: false },
        { id: 'b', text: 'Hours of operation have been extended on weekends.', correct: false }
          ],
          explanation: 'A new booking system was introduced.',
          points: 1
        },        {
          id: 'lt4-m2-conv2-q2',
          stem: 'What advantage does the new system offer?',
          options: [
        { id: 'c', text: 'Multiple users can book the same room simultaneously.', correct: false },
        { id: 'a', text: 'Rooms are now completely free of any charge.', correct: false },
        { id: 'd', text: 'Booking can be done a week in advance.', correct: true },
        { id: 'b', text: 'Rooms can now be locked from the inside.', correct: false }
          ],
          explanation: 'Booking up to a week in advance.',
          points: 1
        }
      ]
    }
      ],

      announcements: [
    {
      id: 'lt4-m2-ann1',
      title: 'Listen to an announcement at a residence hall.',
      audio: '/audio/listening/test-4/m2-ann1.mp3',
      image: '/img/listening/announcement/female-1.webp',
      speakerGender: 'female',
      transcript: 'Hello, residents. We will be hosting a community potluck dinner this Saturday at six p.m. in the common room. Please sign up at the front desk by Thursday evening and indicate the dish you plan to bring. We\'d love to celebrate the variety of cultures in our hall, so bring something your family makes at home. Please bring enough for about eight people. Plates and utensils will be provided. If you\'d rather not cook, you\'re still welcome to come and eat with us.',
      questions: [
        {
          id: 'lt4-m2-ann1-q1',
          stem: 'What is being organized in the residence hall?',
          options: [
        { id: 'b', text: 'A study group meeting.', correct: false },
        { id: 'c', text: 'A residence hall election.', correct: false },
        { id: 'd', text: 'A community potluck dinner.', correct: true },
        { id: 'a', text: 'A weekend movie night.', correct: false }
          ],
          explanation: 'Potluck dinner.',
          points: 1
        },        {
          id: 'lt4-m2-ann1-q2',
          stem: 'Why does the speaker mention cultural variety?',
          options: [
        { id: 'a', text: 'To advertise an upcoming campus cultural fair.', correct: false },
        { id: 'd', text: 'To explain new rules about cooking indoors.', correct: false },
        { id: 'b', text: 'To celebrate the diversity of the residents.', correct: true },
        { id: 'c', text: 'To recruit members for the cultural club.', correct: false }
          ],
          explanation: 'Celebrate cultural diversity.',
          points: 1
        }
      ]
    },
    {
      id: 'lt4-m2-ann2',
      title: 'Listen to an announcement.',
      audio: '/audio/listening/test-4/m2-ann2.mp3',
      image: '/img/listening/announcement/male-2.webp',
      speakerGender: 'male',
      transcript: 'Good morning, everyone. The campus is starting a new mentorship program pairing first-year students with seniors. Mentors will provide guidance on academics, campus life, and career planning. Each pair is expected to meet for an hour twice a month, in person or online. First-year students can apply for a mentor through the student services portal. The form asks about your major so we can match you well. Applications close at the end of the month, and matches will be announced two weeks later.',
      questions: [
        {
          id: 'lt4-m2-ann2-q1',
          stem: 'What new program is being introduced?',
          options: [
        { id: 'c', text: 'A peer tutoring service for science courses.', correct: false },
        { id: 'd', text: 'A career counseling service for recent alumni.', correct: false },
        { id: 'a', text: 'A mentorship program for first-year students.', correct: true },
        { id: 'b', text: 'A leadership training course for club officers.', correct: false }
          ],
          explanation: 'Mentorship program.',
          points: 1
        },        {
          id: 'lt4-m2-ann2-q2',
          stem: 'When do applications close?',
          options: [
        { id: 'c', text: 'Next Monday at noon.', correct: false },
        { id: 'b', text: 'End of the month.', correct: true },
        { id: 'a', text: 'This Friday at midnight.', correct: false },
        { id: 'd', text: 'End of the term.', correct: false }
          ],
          explanation: 'End of the month.',
          points: 1
        }
      ]
    }
      ],

      academicTalks: [
        {
          id: 'lt4-m2-talk1',
          title: 'Listen to a talk in an anthropology class.',
          audio: '/audio/listening/test-4/m2-talk1.mp3',
          image: '/img/listening/announcement/male-3.webp',
          speakerGender: 'male',
          transcript: 'Different cultures organize family relationships in strikingly different ways, and today I want to show you why anthropologists pay such close attention to the words people use for their relatives. Start with English. We use the same word, uncle, for our father\'s brother and for our mother\'s brother. Aunt works the same way. Many other languages refuse to blur that line. They keep two separate words, because a paternal uncle and a maternal uncle may have very different roles in a person\'s life. In some societies, it is the mother\'s brother who trains a boy and passes property down to him. In others, the father\'s brother takes that part. Neither side is more important as a rule. What matters is that the two positions are genuinely distinct, so the language keeps them apart. These patterns are not random. Some systems group all of one\'s parents\' siblings under a single term, and others separate them by the gender of the connecting parent. Either way, the terms track the underlying social structure: who inherits property, who performs ceremonial duties, and who is responsible for raising the children. Notice too that English is not consistent about gender. Cousin covers male and female alike, while uncle and aunt do not. So when we study kinship terminology, we get a window into how a society is organized, even when the people using those words have never consciously thought about the distinctions. Next time you meet an unfamiliar kin term, ask what job that relative actually does in that society.',
          questions: [
            {
              id: 'lt4-m2-talk1-q1',
              stem: 'According to the speaker, why do many languages use different words for paternal and maternal uncles?',
              options: [
                { id: 'b', text: 'These uncles often have very different social roles in the family', correct: true },
                { id: 'a', text: 'The two relationships sound similar but actually mean quite different things', correct: false },
                { id: 'c', text: 'Languages tend to add extra words simply for emphasis and rhythm', correct: false },
                { id: 'd', text: 'Maternal uncles are always considered more important than paternal ones are', correct: false }
              ],
              explanation: 'The speaker explains that the distinction reflects different social roles, such as inheritance and ceremonial duties.',
              points: 1
            },
            {
              id: 'lt4-m2-talk1-q2',
              stem: 'What can anthropologists learn from studying kinship terminology?',
              options: [
                { id: 'a', text: 'Which language family a given society originally belongs to', correct: false },
                { id: 'c', text: 'How quickly a culture has changed over the last century', correct: false },
                { id: 'd', text: 'The historical migration patterns followed by ancient peoples across continents', correct: false },
                { id: 'b', text: 'How a society is organized, including inheritance and child-raising responsibilities', correct: true }
              ],
              explanation: 'The speaker says studying kinship terminology gives anthropologists a window into how a society is organized.',
              points: 1
            },
                            {
                id: 'lt4-m2-talk1-q3',
                stem: 'How does the speaker view societies that assign uncles different roles?',
                options: [
                  { id: 'a', text: 'He treats the maternal arrangement as the older pattern', correct: false },
                  { id: 'd', text: 'He regards such systems as confusing for outsiders', correct: false },
                  { id: 'b', text: 'He considers inheritance of property the family\'s most important duty', correct: false },
                  { id: 'c', text: 'He presents neither arrangement as better than the other', correct: true }
                ],
                explanation: 'The speaker states that neither the maternal nor the paternal arrangement ranks above the other, and that what matters is only that the two positions are distinct.',
                points: 1
              },
                            {
                id: 'lt4-m2-talk1-q4',
                stem: 'Why does the speaker mention that cousin covers both genders?',
                options: [
                  { id: 'a', text: 'To argue that English should borrow terms from other languages', correct: false },
                  { id: 'b', text: 'To show that English separates every single relative by gender', correct: false },
                  { id: 'd', text: 'To show that English marks gender unevenly across kin terms', correct: true },
                  { id: 'c', text: 'To show which cousins are expected to inherit family property', correct: false }
                ],
                explanation: 'The speaker uses cousin to show that English separates uncle from aunt by gender but makes no such split for cousins.',
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
    introAudio: '/audio/listening/test-4/m2-intro.mp3',
    chooseResponse: [
          {
            id: 'lt4-m2e-cr1',
            type: 'choose_response',
            audio: '/audio/listening/test-4/m2e-cr01.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'What time is the movie tonight?',
            options: [
              { id: 'b', text: 'Movies are fun to watch.', correct: false },
              { id: 'a', text: 'It starts at eight thirty.', correct: true },
              { id: 'd', text: 'Tickets cost about ten dollars.', correct: false },
              { id: 'c', text: 'I saw it last week.', correct: false }
            ],
            explanation: 'The speaker is asking about a time, so the correct response gives a time.',
            points: 1
          },
          {
            id: 'lt4-m2e-cr2',
            type: 'choose_response',
            audio: '/audio/listening/test-4/m2e-cr02.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Did you remember to call the dentist?',
            options: [
              { id: 'b', text: 'Dentists are usually very busy this month.', correct: false },
              { id: 'a', text: 'Yes, I made an appointment for Friday.', correct: true },
              { id: 'c', text: 'I have pretty good teeth, actually.', correct: false },
              { id: 'd', text: 'The dentist\'s office is way downtown.', correct: false }
            ],
            explanation: 'The speaker is asking if a call was made, so the correct response confirms and gives info.',
            points: 1
          },
          {
            id: 'lt4-m2e-cr3',
            type: 'choose_response',
            audio: '/audio/listening/test-4/m2e-cr03.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'Are these seats taken?',
            options: [
              { id: 'b', text: 'I like sitting near the window.', correct: false },
              { id: 'd', text: 'The chairs are comfortable.', correct: false },
              { id: 'c', text: 'Theaters have many seats.', correct: false },
              { id: 'a', text: 'No, please sit down.', correct: true }
            ],
            explanation: 'The speaker is asking if the seats are available, so the correct response addresses that.',
            points: 1
          },
          {
            id: 'lt4-m2e-cr4',
            type: 'choose_response',
            audio: '/audio/listening/test-4/m2e-cr04.mp3',
            image: '/img/listening/stock_modal/female-1.webp',
            speakerGender: 'female',
            stem: 'Choose the best response.',
            transcript: 'Would you mind closing the window?',
            options: [
              { id: 'c', text: 'I bought new curtains last weekend.', correct: false },
              { id: 'd', text: 'Windows let in a lot of light.', correct: false },
              { id: 'a', text: 'The window is quite large, actually.', correct: false },
              { id: 'b', text: 'Not at all, it is too cold.', correct: true }
            ],
            explanation: 'The speaker is making a request, so the correct response agrees to it.',
            points: 1
          },
          {
            id: 'lt4-m2e-cr5',
            type: 'choose_response',
            audio: '/audio/listening/test-4/m2e-cr05.mp3',
            image: '/img/listening/stock_modal/male-1.webp',
            speakerGender: 'male',
            stem: 'Choose the best response.',
            transcript: 'How long have you been studying English?',
            options: [
              { id: 'd', text: 'My teacher is from Canada.', correct: false },
              { id: 'b', text: 'For about three years now.', correct: true },
              { id: 'a', text: 'English is a global language.', correct: false },
              { id: 'c', text: 'I study at the university.', correct: false }
            ],
            explanation: 'The speaker is asking about duration, so the correct response gives a time period.',
            points: 1
          },
    ],
    conversations: [
          {
            id: 'lt4-m2e-conv1',
            title: 'Listen to a conversation.',
            audio: '/audio/listening/test-4/m2e-conv1.mp3',
            image: '/img/listening/two_people/people-1.webp',
            transcript: 'Woman: I am thinking about getting a part-time job. Do you have any advice?\nMan: That is a good idea. What kind of job are you looking for?\nWoman: Maybe something at a coffee shop or a bookstore. I want flexible hours.\nMan: Both are good choices. The bookstore on Main Street is hiring right now.\nWoman: Really? How did you hear about that?\nMan: They have a sign in the window. You should bring your resume.\nWoman: Thank you. I will go there tomorrow afternoon.\nMan: Good luck. Let me know how it goes.',
            questions: [
              {
                id: 'lt4-m2e-conv1-q1',
                stem: 'What is the woman thinking about?',
                options: [
                  { id: 'a', text: 'Changing her major.', correct: false },
                  { id: 'c', text: 'Moving to a new apartment.', correct: false },
                  { id: 'd', text: 'Joining a club.', correct: false },
                  { id: 'b', text: 'Getting a part-time job.', correct: true }
                ],
                explanation: 'The woman says she is thinking about getting a part-time job.',
                points: 1
              },
              {
                id: 'lt4-m2e-conv1-q2',
                stem: 'What kind of job does she want?',
                options: [
                  { id: 'a', text: 'A job with high pay.', correct: false },
                  { id: 'd', text: 'A job at a school.', correct: false },
                  { id: 'c', text: 'A job that requires travel.', correct: false },
                  { id: 'b', text: 'A job with flexible hours.', correct: true }
                ],
                explanation: 'She says she wants flexible hours.',
                points: 1
              }
            ]
          },
        {
          id: 'lt4-m2e-conv2',
          title: 'Listen to a conversation.',
          audio: '/audio/listening/test-4/m2e-conv2.mp3',
          image: '/img/listening/two_people/people-1.webp',
          transcript: 'Man: Hi Kate, did you sign up for the camping trip?\nWoman: Yes, I am really looking forward to it.\nMan: I heard the weather might be cold at night.\nWoman: I packed a warm sleeping bag and an extra jacket.\nMan: Smart. Did the organizers mention what we should bring for food?\nWoman: They said dinner will be provided, but we should bring snacks for the hike.',
          questions: [
          {
            id: 'lt4-m2e-conv2-q1',
            stem: 'What is the woman packing for the cold weather?',
            options: [
                  { id: 'a', text: 'Just a light jacket and nothing else.', correct: false },
                  { id: 'd', text: 'Heavy boots and a thick pair of gloves.', correct: false },
                  { id: 'c', text: 'A small umbrella and a rain poncho.', correct: false },
                  { id: 'b', text: 'A warm sleeping bag and an extra jacket.', correct: true }
            ],
            explanation: 'The woman says she packed a warm sleeping bag and an extra jacket.',
            points: 1
          },
          {
            id: 'lt4-m2e-conv2-q2',
            stem: 'What food should each person bring?',
            options: [
                  { id: 'a', text: 'Lunch and dinner.', correct: false },
                  { id: 'c', text: 'Nothing, all meals provided.', correct: false },
                  { id: 'b', text: 'Snacks for the hike.', correct: true },
                  { id: 'd', text: 'Bread and water only.', correct: false }
            ],
            explanation: 'The woman says dinner will be provided, but they should bring snacks for the hike.',
            points: 1
          }
          ]
        }
    ],
    announcements: [
          {
            id: 'lt4-m2e-ann1',
            title: 'Listen to an announcement at a university.',
            audio: '/audio/listening/test-4/m2e-ann1.mp3',
            image: '/img/listening/announcement/male-1.webp',
            speakerGender: 'male',
            transcript: 'Good afternoon. The university computer lab on the third floor will be closed for repairs this Saturday from eight in the morning until five in the evening. During this time, please use the computer lab in the library. The library lab is open all day on Saturday. The third floor lab will reopen on Sunday morning. We are sorry for any trouble. The repairs are needed to install new computers and update the software. Thank you for your patience.',
            questions: [
              {
                id: 'lt4-m2e-ann1-q1',
                stem: 'What is the announcement about?',
                options: [
                  { id: 'c', text: 'Software training sessions.', correct: false },
                  { id: 'b', text: 'A new computer course.', correct: false },
                  { id: 'd', text: 'A change in printing prices.', correct: false },
                  { id: 'a', text: 'A computer lab closure.', correct: true }
                ],
                explanation: 'The announcement is about a computer lab being closed for repairs.',
                points: 1
              },
              {
                id: 'lt4-m2e-ann1-q2',
                stem: 'When will the lab be closed?',
                options: [
                  { id: 'c', text: 'Sunday from morning until evening.', correct: false },
                  { id: 'd', text: 'Monday morning until early afternoon.', correct: false },
                  { id: 'b', text: 'Saturday from eight to five.', correct: true },
                  { id: 'a', text: 'Friday evening after five o\'clock.', correct: false }
                ],
                explanation: 'The lab is closed Saturday from eight in the morning until five in the evening.',
                points: 1
              }
            ]
          },
        {
          id: 'lt4-m2e-ann2',
          title: 'Listen to an announcement at a university.',
          audio: '/audio/listening/test-4/m2e-ann2.mp3',
          image: '/img/listening/announcement/male-1.webp',
          speakerGender: 'male',
          transcript: 'Good afternoon. The campus health center is now offering free counseling sessions for any student who would like to talk to a professional. Sessions are available Monday through Friday between ten a.m. and four p.m. To schedule an appointment, please call the health center or visit our website. All conversations are confidential.',
          questions: [
          {
            id: 'lt4-m2e-ann2-q1',
            stem: 'What is the campus health center now offering for free?',
            options: [
                  { id: 'a', text: 'Flu vaccinations.', correct: false },
                  { id: 'b', text: 'Counseling sessions.', correct: true },
                  { id: 'c', text: 'Eye exams.', correct: false },
                  { id: 'd', text: 'Dental cleanings.', correct: false }
            ],
            explanation: 'The announcement says the health center is offering free counseling sessions.',
            points: 1
          },
          {
            id: 'lt4-m2e-ann2-q2',
            stem: 'When are sessions available?',
            options: [
                  { id: 'b', text: 'Monday through Friday between ten a.m. and four p.m.', correct: true },
                  { id: 'd', text: 'Tuesdays only, between nine a.m. and one p.m.', correct: false },
                  { id: 'c', text: 'Anytime, day or night, including weekends and public holidays', correct: false },
                  { id: 'a', text: 'Weekends only, between ten a.m. and six p.m.', correct: false }
            ],
            explanation: 'The announcement says sessions are available Monday through Friday between ten a.m. and four p.m.',
            points: 1
          }
          ]
        }
    ],
    academicTalks: [
          {
            id: 'lt4-m2e-talk1',
            title: 'Listen to a talk in a geography class.',
            audio: '/audio/listening/test-4/m2e-talk1.mp3',
            image: '/img/listening/announcement/female-1.webp',
            speakerGender: 'female',
            transcript: 'Today we will look at deserts. A desert is a place that gets very little rain. Some people think all deserts are hot, but that is not true. There are also cold deserts, like the one in Antarctica. Hot deserts can reach very high temperatures during the day, but they often become cold at night. Plants and animals that live in deserts have special ways to survive with little water. For example, cactus plants store water inside their thick stems. Many desert animals stay underground during the hot day and come out only at night. Despite the difficult conditions, deserts are home to many interesting living things.',
            questions: [
              {
                id: 'lt4-m2e-talk1-q1',
                stem: 'What is the main idea of the talk?',
                options: [
                  { id: 'a', text: 'Deserts have very different climates and many living things adapted to them.', correct: true },
                  { id: 'd', text: 'Deserts are far too dangerous for most animals and plants to survive.', correct: false },
                  { id: 'b', text: 'All deserts are hot and dry places all through the entire year.', correct: false },
                  { id: 'c', text: 'Most desert plants cannot store any water inside their thick stems.', correct: false }
                ],
                explanation: 'The talk explains that deserts vary and that plants and animals have adapted to live there.',
                points: 1
              },
              {
                id: 'lt4-m2e-talk1-q2',
                stem: 'How do many desert animals stay cool during the day?',
                options: [
                  { id: 'a', text: 'They drink large amounts of water.', correct: false },
                  { id: 'd', text: 'They sleep on rocks.', correct: false },
                  { id: 'b', text: 'They stay underground.', correct: true },
                  { id: 'c', text: 'They live in trees.', correct: false }
                ],
                explanation: 'The talk says many desert animals stay underground during the hot day.',
                points: 1
              },
              {
                id: 'lt4-m2e-talk1-q3',
                stem: 'Why do many birds fly south in the autumn?',
                options: [
                  { id: 'b', text: 'To find warmer weather and more food.', correct: true },
                  { id: 'd', text: 'To learn new flight skills from older birds.', correct: false },
                  { id: 'c', text: 'To meet new types of birds elsewhere.', correct: false },
                  { id: 'a', text: 'To find safer skies for the journey.', correct: false }
                ],
                explanation: 'The speaker explains birds fly south to find warmer weather and more food.',
                points: 1
              },
              {
                id: 'lt4-m2e-talk1-q4',
                stem: 'What helps young birds learn migration routes?',
                options: [
                  { id: 'c', text: 'They are born knowing the route.', correct: false },
                  { id: 'b', text: 'They follow older birds.', correct: true },
                  { id: 'a', text: 'They use a special map.', correct: false },
                  { id: 'd', text: 'They learn it from humans.', correct: false }
                ],
                explanation: 'The speaker says young birds often learn routes by following older birds.',
                points: 1
              }
            ]
          }
    ]
  },
};

// Alias for full-test loader, which reads window.LISTENING_TEST_4
window.LISTENING_TEST_4 = window.LISTENING_SECTION_4;
