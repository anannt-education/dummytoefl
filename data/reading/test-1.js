window.READING_SECTION_1 = {
  id: 'reading-section-1',
  title: 'Reading Practice Test 1',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-1',
      type: 'complete_the_words',
      paragraph: 'Coral reefs are among the most diverse ecosystems on Earth. Mill____ of tiny organisms called polyps build mas____ structures over thou____ of years. These colo____ formations provide she____ and food for coun____ marine species. Ris____ ocean temperatures and poll____ threaten their surv____, causing widespread blea____ events that leave the reefs pale and lifeless.',
      words: [
        { id: 'ctw-1-w1', position: 0, displayText: 'Mill', answer: 'ions', fullWord: 'Millions' },
        { id: 'ctw-1-w2', position: 1, displayText: 'mas', answer: 'sive', fullWord: 'massive' },
        { id: 'ctw-1-w3', position: 2, displayText: 'thou', answer: 'sands', fullWord: 'thousands' },
        { id: 'ctw-1-w4', position: 3, displayText: 'colo', answer: 'rful', fullWord: 'colorful' },
        { id: 'ctw-1-w5', position: 4, displayText: 'she', answer: 'lter', fullWord: 'shelter' },
        { id: 'ctw-1-w6', position: 5, displayText: 'coun', answer: 'tless', fullWord: 'countless' },
        { id: 'ctw-1-w7', position: 6, displayText: 'Ris', answer: 'ing', fullWord: 'Rising' },
        { id: 'ctw-1-w8', position: 7, displayText: 'poll', answer: 'ution', fullWord: 'pollution' },
        { id: 'ctw-1-w9', position: 8, displayText: 'surv', answer: 'ival', fullWord: 'survival' },
        { id: 'ctw-1-w10', position: 9, displayText: 'blea', answer: 'ching', fullWord: 'bleaching' }
      ],
      points: 10
    },
    {
      id: 'ctw-2',
      type: 'complete_the_words',
      paragraph: 'Tide pools are remar____ small ecosystems found along rocky shore____. When the ocean retr____ at low tide, these shallow bas____ trap seawater and many marine crea____ inside. Sea anem____, hermit crabs, and tiny fish must end____ sudden shifts in temperature and sali____ every few hours. Scien____ study these communities to under____ how organisms cope with dramatic environmental variations.',
      words: [
        { id: 'ctw-2-w1', position: 0, displayText: 'remar', answer: 'kable', fullWord: 'remarkable' },
        { id: 'ctw-2-w2', position: 1, displayText: 'shore', answer: 'lines', fullWord: 'shorelines' },
        { id: 'ctw-2-w3', position: 2, displayText: 'retr', answer: 'eats', fullWord: 'retreats' },
        { id: 'ctw-2-w4', position: 3, displayText: 'bas', answer: 'ins', fullWord: 'basins' },
        { id: 'ctw-2-w5', position: 4, displayText: 'crea', answer: 'tures', fullWord: 'creatures' },
        { id: 'ctw-2-w6', position: 5, displayText: 'anem', answer: 'ones', fullWord: 'anemones' },
        { id: 'ctw-2-w7', position: 6, displayText: 'end', answer: 'ure', fullWord: 'endure' },
        { id: 'ctw-2-w8', position: 7, displayText: 'sali', answer: 'nity', fullWord: 'salinity' },
        { id: 'ctw-2-w9', position: 8, displayText: 'Scien', answer: 'tists', fullWord: 'Scientists' },
        { id: 'ctw-2-w10', position: 9, displayText: 'under', answer: 'stand', fullWord: 'understand' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-1',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Lab Equipment Return Notice',
      to: 'All Biology 301 Students',
      from: 'j.okafor@westlakeuniv.edu',
      date: '04/02/2026',
      subject: 'Lab Equipment Return Notice',
      body: 'Dear Students,\n\nAll borrowed lab equipment, including microscopes and slide kits, must be returned to Room 214 in the Science Building by April 15. Items returned after this date will incur a replacement fee. If any equipment has been damaged during the semester, please notify the lab coordinator before the return date so we can arrange an inspection.\n\nThank you for your cooperation.',
      signoff: 'Best regards,',
      senderName: 'Dr. James Okafor\nBiology Department',
      questions: [
        {
          id: 'rdl-email-1-q1',
          stem: 'What is the main purpose of this email?',
          options: [
            { id: 'b', text: 'To remind students to return borrowed lab equipment', correct: true },
            { id: 'd', text: 'To request volunteers for lab maintenance', correct: false },
            { id: 'c', text: 'To inform students about a change in lab hours', correct: false },
            { id: 'a', text: 'To announce new lab equipment for next semester', correct: false }
          ],
          explanation: 'The email reminds students that borrowed lab equipment must be returned to Room 214 by April 15.',
          points: 1
        },
        {
          id: 'rdl-email-1-q2',
          stem: 'What should students do if their equipment is damaged?',
          options: [
            { id: 'd', text: 'Bring it to the main office for repair', correct: false },
            { id: 'a', text: 'Pay for a replacement at their own expense', correct: false },
            { id: 'b', text: 'Return the item along with a written apology', correct: false },
            { id: 'c', text: 'Notify the lab coordinator before the return date', correct: true }
          ],
          explanation: 'The email states students should notify the lab coordinator before the return date so an inspection can be arranged.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-1',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Campus Fundraiser Planning',
      messages: [
        { sender: 'Aisha Patel', time: '10:15 A.M.', text: 'Hey team, the charity bake sale is this Friday. We still need to sort out who is bringing what. Can everyone confirm today?' },
        { sender: 'Derek Huang', time: '10:18 A.M.', text: 'I am making two batches of brownies and one tray of lemon bars. Already bought the ingredients yesterday.' },
        { sender: 'Sofia Reyes', time: '10:22 A.M.', text: 'I will bring cupcakes and some napkins. Should I also get paper plates?' },
        { sender: 'Aisha Patel', time: '10:24 A.M.', text: 'Yes, please. We also need someone to handle the cash box and make change for customers.' },
        { sender: 'Liam O\'Brien', time: '10:27 A.M.', text: 'I can bring a cash box from home and handle the money. I did it at the spring fair last year.' },
        { sender: 'Aisha Patel', time: '10:30 A.M.', text: 'Great, that covers everything. Let us all meet at the student lounge at 8 A.M. on Friday to set up. Thanks, everyone!' }
      ],
      questions: [
        {
          id: 'rdl-tc-1-q1',
          stem: 'What item is Sofia NOT planning to bring?',
          options: [
            { id: 'a', text: 'Cupcakes', correct: false },
            { id: 'c', text: 'Brownies', correct: true },
            { id: 'd', text: 'Paper plates', correct: false },
            { id: 'b', text: 'Napkins', correct: false }
          ],
          explanation: 'Sofia says she will bring cupcakes and napkins and asks about paper plates. Brownies are being made by Derek, not Sofia.',
          points: 1
        },
        {
          id: 'rdl-tc-1-q2',
          stem: 'Why does Liam volunteer to handle the cash box?',
          options: [
            { id: 'c', text: 'Aisha specifically asked him to do it', correct: false },
            { id: 'd', text: 'Nobody else wanted to take the responsibility', correct: false },
            { id: 'a', text: 'He is studying accounting at the university', correct: false },
            { id: 'b', text: 'He has experience from a previous event', correct: true }
          ],
          explanation: 'Liam mentions he did it at the spring fair last year, indicating he has prior experience with this task.',
          points: 1
        },
        {
          id: 'rdl-tc-1-q3',
          stem: 'What time should the team arrive on Friday?',
          options: [
            { id: 'c', text: '8:00 A.M.', correct: true },
            { id: 'b', text: '9:00 A.M.', correct: false },
            { id: 'a', text: '10:15 A.M.', correct: false },
            { id: 'd', text: '7:30 A.M.', correct: false }
          ],
          explanation: 'Aisha says they should all meet at the student lounge at 8 A.M. on Friday to set up.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-1',
      type: 'academic_passage',
      title: 'The Science of Sleep',
      text: 'Why do humans spend roughly one-third of their lives asleep? For centuries, sleep was viewed as a passive state, a mere absence of wakefulness. Modern neuroscience has revealed, however, that sleep is an active and highly organized process essential to physical health, cognitive performance, and emotional regulation.\n\nDuring sleep, the brain cycles through several distinct stages. The two broadest categories are non-rapid eye movement (NREM) sleep and rapid eye movement (REM) sleep. NREM sleep, which accounts for about 75 percent of a typical night, includes progressively deeper stages during which heart rate slows, body temperature drops, and the brain produces slow electrical waves. It is during deep NREM sleep that the body repairs tissues, strengthens the immune system, and consolidates declarative memories, the kind involved in recalling facts and events.\n\nREM sleep, by contrast, is characterized by rapid eye movements, increased brain activity, and temporary muscle paralysis. Most vivid dreaming occurs during this phase. Researchers believe REM sleep plays a critical role in processing emotions and forming procedural memories, such as learning to ride a bicycle or play a musical instrument. Studies have shown that people deprived of REM sleep struggle with creative problem-solving and have difficulty regulating their moods.\n\nThe consequences of chronic sleep deprivation extend well beyond daytime drowsiness. Prolonged insufficient sleep has been linked to an elevated risk of cardiovascular disease, obesity, diabetes, and weakened immune function. Cognitive effects include impaired attention, slower reaction times, and reduced capacity for learning. Given these findings, sleep scientists increasingly argue that adequate sleep should be regarded not as a luxury but as a fundamental pillar of health, comparable in importance to nutrition and exercise.',
      questions: [
        {
          id: 'ap-1-q1',
          type: 'factual',
          stem: 'According to the passage, which type of sleep accounts for approximately 75 percent of a typical night?',
          highlightText: null,
          options: [
            { id: 'a', text: 'Rapid eye movement (REM) sleep', correct: false },
            { id: 'b', text: 'Non-rapid eye movement (NREM) sleep', correct: true },
            { id: 'c', text: 'Deep dreaming sleep with vivid imagery', correct: false },
            { id: 'd', text: 'Light transitional sleep between stages', correct: false }
          ],
          explanation: 'The passage states that "NREM sleep, which accounts for about 75 percent of a typical night."',
          points: 1
        },
        {
          id: 'ap-1-q2',
          type: 'vocabulary',
          stem: 'The word "consolidated" in paragraph 2 is closest in meaning to:',
          highlightText: 'consolidates',
          options: [
            { id: 'c', text: 'Temporarily held in storage', correct: false },
            { id: 'b', text: 'Strengthened and made stable', correct: true },
            { id: 'd', text: 'Quickly reviewed in passing', correct: false },
            { id: 'a', text: 'Erased from memory completely', correct: false }
          ],
          explanation: '"Consolidates" means to make something stronger or more solid. In this context, it refers to the process of strengthening and stabilizing memories during sleep.',
          points: 1
        },
        {
          id: 'ap-1-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that a person deprived of REM sleep would most likely have difficulty:',
          highlightText: null,
          options: [
            { id: 'b', text: 'Remembering historical dates and facts', correct: false },
            { id: 'd', text: 'Falling asleep the following night', correct: false },
            { id: 'c', text: 'Finding creative solutions to problems', correct: true },
            { id: 'a', text: 'Breathing normally during physical exercise', correct: false }
          ],
          explanation: 'The passage states that people deprived of REM sleep "struggle with creative problem-solving and have difficulty regulating their moods."',
          points: 1
        },
        {
          id: 'ap-1-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 2 and paragraph 3?',
          highlightText: null,
          options: [
            { id: 'd', text: 'Paragraph 2 describes healthy sleep patterns, while paragraph 3 discusses common sleep disorders and their treatment.', correct: false },
            { id: 'c', text: 'Both paragraphs discuss the same stage of sleep, each one describing it from a different research perspective.', correct: false },
            { id: 'b', text: 'Paragraph 2 presents a theory about how sleep works, while paragraph 3 presents evidence that disproves it.', correct: false },
            { id: 'a', text: 'Paragraph 2 describes NREM sleep and its functions, while paragraph 3 describes REM sleep and its functions.', correct: true }
          ],
          explanation: 'Paragraph 2 focuses on NREM sleep and its role in physical repair and declarative memory, while paragraph 3 shifts to REM sleep and its role in emotions and procedural memory.',
          points: 1
        },
        {
          id: 'ap-1-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'c', text: 'Scientists have only recently begun to study the harmful effects of long-term sleep deprivation.', correct: false },
            { id: 'b', text: 'Sleep is an active, essential biological process with far-reaching effects on health and cognition.', correct: true },
            { id: 'd', text: 'Dreaming is the primary function of sleep and the single most important benefit it provides.', correct: false },
            { id: 'a', text: 'REM sleep is more important than NREM sleep for overall physical health and well-being.', correct: false }
          ],
          explanation: 'The passage argues that sleep is not passive but an active process essential to physical health, cognitive performance, and emotional regulation, with serious consequences when insufficient.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-1',
        type: 'complete_the_words',
        paragraph: 'Volcanic erup____ release enormous quantities of ash and mol____ rock into the surro____ environment. The expl____ force can flatten entire for____ and reshape lands____ within minutes. Pyroc____ flows travel at incredible speeds, destr____ everything in their path. Scien____ monitor seismic acti____ to predict when a volcano may become dangerous.',
        words: [
          { id: 'ctw-m2-1-w1', position: 0, displayText: 'erup', answer: 'tions', fullWord: 'eruptions' },
          { id: 'ctw-m2-1-w2', position: 1, displayText: 'mol', answer: 'ten', fullWord: 'molten' },
          { id: 'ctw-m2-1-w3', position: 2, displayText: 'surro', answer: 'unding', fullWord: 'surrounding' },
          { id: 'ctw-m2-1-w4', position: 3, displayText: 'expl', answer: 'osive', fullWord: 'explosive' },
          { id: 'ctw-m2-1-w5', position: 4, displayText: 'for', answer: 'ests', fullWord: 'forests' },
          { id: 'ctw-m2-1-w6', position: 5, displayText: 'lands', answer: 'capes', fullWord: 'landscapes' },
          { id: 'ctw-m2-1-w7', position: 6, displayText: 'Pyroc', answer: 'lastic', fullWord: 'Pyroclastic' },
          { id: 'ctw-m2-1-w8', position: 7, displayText: 'destr', answer: 'oying', fullWord: 'destroying' },
          { id: 'ctw-m2-1-w9', position: 8, displayText: 'Scien', answer: 'tists', fullWord: 'Scientists' },
          { id: 'ctw-m2-1-w10', position: 9, displayText: 'acti', answer: 'vity', fullWord: 'activity' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-1',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Student Art Exhibition',
        text: 'The Annual Student Art Exhibition will be held in the Morrison Gallery from March 10 through March 21. Submissions are now being accepted in all media, including painting, sculpture, photography, and digital art. Students wishing to participate must submit their work to the gallery office by March 5. A reception and awards ceremony will take place on opening night at 6:00 PM. All students and faculty are welcome to attend.',
        questions: [
          {
            id: 'rdl-notice-m2-1-q1',
            stem: 'What is the deadline for submitting artwork?',
            options: [
              { id: 'c', text: 'March 5', correct: true },
              { id: 'a', text: 'March 10', correct: false },
              { id: 'b', text: 'March 21', correct: false },
              { id: 'd', text: 'March 15', correct: false }
            ],
            explanation: 'The notice states that students must submit their work to the gallery office by March 5.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-1-q2',
            stem: 'What will happen on the opening night of the exhibition?',
            options: [
              { id: 'd', text: 'A lecture on art history', correct: false },
              { id: 'a', text: 'A guided tour of the campus', correct: false },
              { id: 'b', text: 'A reception and awards ceremony', correct: true },
              { id: 'c', text: 'A painting workshop for beginners', correct: false }
            ],
            explanation: 'The notice mentions that a reception and awards ceremony will take place on opening night at 6:00 PM.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-1',
        type: 'read_daily_life',
        textType: 'email',
        to: 'All Registered Students',
        from: 'Campus Transportation Office',
        date: 'February 14, 2026',
        subject: 'Shuttle Schedule Change Effective March 1',
        body: 'Due to construction along University Boulevard, the campus shuttle will follow a modified route beginning March 1. The North Campus stop will be temporarily relocated to the corner of Elm Street and 4th Avenue. Morning routes will depart ten minutes earlier than the current schedule to accommodate the longer route. Evening service will remain unchanged. Updated timetables are available at the transportation office and on the campus app. Please plan your commute accordingly and allow extra travel time during the first week of the transition.',
        signoff: 'Best regards,',
        senderName: 'Maria Chen, Transportation Coordinator',
        questions: [
          {
            id: 'rdl-email-m2-1-q1',
            stem: 'Why is the shuttle schedule being changed?',
            options: [
              { id: 'd', text: 'The shuttle drivers requested new hours', correct: false },
              { id: 'c', text: 'Student enrollment has increased', correct: false },
              { id: 'a', text: 'The university purchased new buses', correct: false },
              { id: 'b', text: 'Construction along University Boulevard', correct: true }
            ],
            explanation: 'The email states the change is due to construction along University Boulevard.',
            points: 1
          },
          {
            id: 'rdl-email-m2-1-q2',
            stem: 'What change will affect morning routes?',
            options: [
              { id: 'b', text: 'They will use smaller vehicles', correct: false },
              { id: 'c', text: 'They will depart ten minutes earlier', correct: true },
              { id: 'd', text: 'They will add two new stops', correct: false },
              { id: 'a', text: 'They will be canceled until further notice', correct: false }
            ],
            explanation: 'The email says morning routes will depart ten minutes earlier than the current schedule.',
            points: 1
          },
          {
            id: 'rdl-email-m2-1-q3',
            stem: 'Where can students find the updated timetables?',
            options: [
              { id: 'a', text: 'At the library front desk and the information counter', correct: false },
              { id: 'd', text: 'On the bulletin boards in each classroom building', correct: false },
              { id: 'c', text: 'At the transportation office and on the campus app', correct: true },
              { id: 'b', text: 'In the student newspaper and the weekly bulletin', correct: false }
            ],
            explanation: 'The email states updated timetables are available at the transportation office and on the campus app.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-1',
        type: 'academic_passage',
        title: 'How Vaccines Train the Immune System',
        text: 'Vaccines are among the most successful medical innovations in modern history, dramatically reducing the impact of diseases that once killed millions. Although the technology behind vaccines has advanced significantly, the basic principle has remained the same since Edward Jenner first demonstrated the smallpox vaccine in 1796. Vaccines work by exposing the immune system to a harmless version of a pathogen, allowing the body to learn how to defend itself without actually getting sick.\n\nWhen a vaccine is administered, it introduces antigens, which are molecules that the immune system recognizes as foreign. In response, specialized white blood cells called B cells produce antibodies designed to bind to those specific antigens. T cells, another type of immune cell, learn to identify and destroy infected cells. Together, these responses build immunological memory, a kind of biological archive that allows the body to react more quickly and effectively if it encounters the real pathogen later.\n\nModern vaccines use several different approaches to trigger this response. Traditional vaccines use weakened or inactivated forms of a virus or bacterium. Newer technologies, including mRNA vaccines, deliver genetic instructions that prompt cells to produce a harmless fragment of the pathogen, which then trains the immune system. Each approach has trade-offs in terms of safety, manufacturing complexity, and the duration of protection it provides.\n\nPublic health depends on widespread vaccination not only because vaccines protect individuals, but because they reduce the overall circulation of disease in a population. When a sufficient percentage of people are immune, even those who cannot be vaccinated, such as infants or immunocompromised individuals, gain a measure of protection. This effect is known as herd immunity, and it underpins many of the disease-control successes of the twentieth and twenty-first centuries.',
        questions: [
          {
            id: 'ap-m2-1-q1',
            type: 'factual',
            stem: 'According to the passage, in what year did Edward Jenner first demonstrate the smallpox vaccine?',
            highlightText: null,
            options: [
              { id: 'b', text: '1796', correct: true },
              { id: 'a', text: '1696', correct: false },
              { id: 'd', text: '1996', correct: false },
              { id: 'c', text: '1896', correct: false }
            ],
            explanation: 'The passage states that Edward Jenner first demonstrated the smallpox vaccine in 1796.',
            points: 1
          },
          {
            id: 'ap-m2-1-q2',
            type: 'vocabulary',
            stem: 'The word "antigens" in paragraph 2 refers to:',
            highlightText: 'antigens',
            options: [
              { id: 'd', text: 'Genetic instructions that are delivered by mRNA vaccines', correct: false },
              { id: 'c', text: 'A type of white blood cell in the body', correct: false },
              { id: 'b', text: 'Molecules that the immune system recognizes as foreign', correct: true },
              { id: 'a', text: 'Antibodies that bind to and destroy infected cells', correct: false }
            ],
            explanation: 'The passage defines antigens as "molecules that the immune system recognizes as foreign."',
            points: 1
          },
          {
            id: 'ap-m2-1-q3',
            type: 'inference',
            stem: 'It can be inferred that herd immunity is most important for protecting:',
            highlightText: null,
            options: [
              { id: 'a', text: 'People who have already been vaccinated against common infectious diseases', correct: false },
              { id: 'c', text: 'Individuals who cannot be vaccinated, such as infants or the immunocompromised', correct: true },
              { id: 'd', text: 'Healthcare workers who regularly treat patients with infectious diseases in hospitals', correct: false },
              { id: 'b', text: 'Adults who must travel frequently for work to other countries', correct: false }
            ],
            explanation: 'The passage explains that herd immunity gives a measure of protection to those who cannot be vaccinated, such as infants or immunocompromised individuals.',
            points: 1
          },
          {
            id: 'ap-m2-1-q4',
            type: 'paragraph_relationships',
            stem: 'What is the primary function of paragraph 3?',
            highlightText: null,
            options: [
              { id: 'd', text: 'It describes the historical development of vaccines from Jenner to the present day', correct: false },
              { id: 'c', text: 'It introduces the concept of herd immunity and explains its importance', correct: false },
              { id: 'a', text: 'It explains why mRNA vaccines are much safer than older traditional vaccines', correct: false },
              { id: 'b', text: 'It compares different approaches modern vaccines use to trigger an immune response.', correct: true }
            ],
            explanation: 'Paragraph 3 describes traditional and newer vaccine approaches and notes that each has trade-offs, presenting a comparison of methods.',
            points: 1
          },
          {
            id: 'ap-m2-1-q5',
            type: 'important_idea',
            stem: 'Which of the following best expresses the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'a', text: 'mRNA vaccines have now replaced older vaccine technologies and have become the standard approach in modern medicine.', correct: false },
              { id: 'c', text: 'Vaccination programs can only succeed when every single member of the population participates without exception.', correct: false },
              { id: 'd', text: 'Edward Jenner\'s smallpox vaccine remains the single most important medical achievement of the modern era.', correct: false },
              { id: 'b', text: 'Vaccines train the immune system to recognize and respond to specific pathogens, protecting both individuals and populations.', correct: true }
            ],
            explanation: 'The passage explains how vaccines work to build immunological memory in individuals and how widespread vaccination produces herd immunity, protecting both individuals and populations.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-1',
        type: 'complete_the_words',
        paragraph: 'My friend has a small gar___ behind her house. She grows toma___, carrots, and lettuce in neat rows. Every mor___ she waters the plants before going to school. The veget___ taste much better than the ones from the store. Her family eats them in salads and sandw___. Last summer she gave me a basket of fresh prod___. Now I want to start my own gar___ at home. My mother says we can use the small space near the kit___ window. I will plant herbs first because they are easy to gr___. Soon we will have fresh basil and par___ for cooking.',
        words: [
          { id: 'ctw-m2e-1-w1', position: 0, displayText: 'gar', answer: 'den', fullWord: 'garden' },
          { id: 'ctw-m2e-1-w2', position: 1, displayText: 'toma', answer: 'toes', fullWord: 'tomatoes' },
          { id: 'ctw-m2e-1-w3', position: 2, displayText: 'mor', answer: 'ning', fullWord: 'morning' },
          { id: 'ctw-m2e-1-w4', position: 3, displayText: 'veget', answer: 'ables', fullWord: 'vegetables' },
          { id: 'ctw-m2e-1-w5', position: 4, displayText: 'sandw', answer: 'iches', fullWord: 'sandwiches' },
          { id: 'ctw-m2e-1-w6', position: 5, displayText: 'prod', answer: 'uce', fullWord: 'produce' },
          { id: 'ctw-m2e-1-w7', position: 6, displayText: 'gar', answer: 'den', fullWord: 'garden' },
          { id: 'ctw-m2e-1-w8', position: 7, displayText: 'kit', answer: 'chen', fullWord: 'kitchen' },
          { id: 'ctw-m2e-1-w9', position: 8, displayText: 'gr', answer: 'ow', fullWord: 'grow' },
          { id: 'ctw-m2e-1-w10', position: 9, displayText: 'par', answer: 'sley', fullWord: 'parsley' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-1',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Library Hours During Finals Week',
        text: 'The Main Library will be open extended hours during finals week, from December 8 to December 15. The library will open at 7:00 AM and close at 2:00 AM each day. Free coffee and snacks will be available in the lobby every evening from 8:00 PM to 11:00 PM. Group study rooms can be reserved online up to one week in advance. Quiet study floors will be strictly enforced.',
        questions: [
          {
            id: 'rdl-notice-m2e-1-q1',
            stem: 'When does the library close during finals week?',
            options: [
              { id: 'b', text: '12:00 midnight', correct: false },
              { id: 'a', text: '11:00 PM', correct: false },
              { id: 'd', text: '7:00 AM', correct: false },
              { id: 'c', text: '2:00 AM', correct: true }
            ],
            explanation: 'The notice says the library will close at 2:00 AM each day during finals week.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-1-q2',
            stem: 'What is offered in the lobby in the evenings?',
            options: [
              { id: 'b', text: 'Free coffee and snacks', correct: true },
              { id: 'd', text: 'Free pens and notebooks', correct: false },
              { id: 'c', text: 'Free printing and copying', correct: false },
              { id: 'a', text: 'Free tutoring and advising', correct: false }
            ],
            explanation: 'The notice mentions free coffee and snacks in the lobby from 8:00 PM to 11:00 PM.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-1',
        type: 'read_daily_life',
        textType: 'email',
        to: 'All Biology Students',
        from: 'Professor Adams',
        date: 'October 5, 2026',
        subject: 'Lab Report Deadline Extended',
        body: 'Dear students,\n\nBecause the lab equipment was unavailable last Friday, I am extending the lab report deadline. Reports were due Monday at noon. The new deadline is Thursday at 5:00 PM. Please submit your reports through the course website. If you have already finished your report, you can still submit it early. Late submissions will lose ten points per day. Email me with any questions.',
        signoff: 'Best,',
        senderName: 'Professor Adams',
        questions: [
          {
            id: 'rdl-email-m2e-1-q1',
            stem: 'Why is the deadline being extended?',
            options: [
              { id: 'b', text: 'The lab equipment was unavailable', correct: true },
              { id: 'a', text: 'A campus holiday is approaching', correct: false },
              { id: 'd', text: 'The professor is traveling abroad', correct: false },
              { id: 'c', text: 'Many students were sick recently', correct: false }
            ],
            explanation: 'The email explains the extension is because the lab equipment was unavailable last Friday.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-1-q2',
            stem: 'What is the new deadline?',
            options: [
              { id: 'd', text: 'Friday at 12:00 noon', correct: false },
              { id: 'b', text: 'Wednesday at 5:00 PM', correct: false },
              { id: 'c', text: 'Thursday at 5:00 PM', correct: true },
              { id: 'a', text: 'Monday at 12:00 noon', correct: false }
            ],
            explanation: 'The new deadline is Thursday at 5:00 PM.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-1-q3',
            stem: 'How should students submit their reports?',
            options: [
              { id: 'c', text: 'Through the course website', correct: true },
              { id: 'd', text: 'In the lab classroom', correct: false },
              { id: 'a', text: 'By email to the professor', correct: false },
              { id: 'b', text: 'In person to the office', correct: false }
            ],
            explanation: 'The email says reports should be submitted through the course website.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-1',
        type: 'academic_passage',
        title: 'Why Bees Are Important',
        text: 'Bees are small insects that play a very important role in nature. They visit flowers to collect nectar, which they use to make honey. While they fly from flower to flower, they also carry pollen on their bodies. This process, called pollination, helps plants produce fruits and seeds. Without bees, many plants would not be able to grow new fruits.\n\nFarmers depend on bees to pollinate crops such as apples, oranges, and almonds. Scientists estimate that about one-third of the food humans eat depends on bee pollination. In recent years, bee populations have been declining in many countries. The reasons include disease, loss of habitat, and the use of certain chemicals on farms. Many people are now planting bee-friendly flowers and supporting local beekeepers to help protect these important insects.',
        questions: [
          {
            id: 'ap-m2e-1-q1',
            type: 'factual',
            stem: 'What do bees collect from flowers?',
            highlightText: null,
            options: [
              { id: 'c', text: 'Seeds', correct: false },
              { id: 'a', text: 'Pollen only', correct: false },
              { id: 'b', text: 'Nectar', correct: true },
              { id: 'd', text: 'Leaves', correct: false }
            ],
            explanation: 'The passage states that bees visit flowers to collect nectar.',
            points: 1
          },
          {
            id: 'ap-m2e-1-q2',
            type: 'vocabulary',
            stem: 'The word "pollination" in paragraph 1 refers to:',
            highlightText: 'pollination',
            options: [
              { id: 'd', text: 'A method farmers use to plant crops', correct: false },
              { id: 'b', text: 'The process of carrying pollen between flowers', correct: true },
              { id: 'a', text: 'A type of disease that affects flowers', correct: false },
              { id: 'c', text: 'The way bees make honey from nectar', correct: false }
            ],
            explanation: 'The passage defines pollination as the process by which bees carry pollen from flower to flower, helping plants produce fruits and seeds.',
            points: 1
          },
          {
            id: 'ap-m2e-1-q3',
            type: 'factual',
            stem: 'About what fraction of human food depends on bee pollination?',
            highlightText: null,
            options: [
              { id: 'a', text: 'One-tenth', correct: false },
              { id: 'c', text: 'One-half', correct: false },
              { id: 'b', text: 'One-third', correct: true },
              { id: 'd', text: 'Three-quarters', correct: false }
            ],
            explanation: 'Scientists estimate that about one-third of the food humans eat depends on bee pollination.',
            points: 1
          },
          {
            id: 'ap-m2e-1-q4',
            type: 'factual',
            stem: 'Which of the following is NOT mentioned as a reason bee populations are declining?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Loss of natural habitat', correct: false },
              { id: 'c', text: 'Climate change', correct: true },
              { id: 'd', text: 'Certain chemicals used on farms', correct: false },
              { id: 'a', text: 'Disease in bee colonies', correct: false }
            ],
            explanation: 'The passage mentions disease, loss of habitat, and chemicals, but not climate change.',
            points: 1
          },
          {
            id: 'ap-m2e-1-q5',
            type: 'important_idea',
            stem: 'What is the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Bees are important for nature and farming, but their numbers are falling.', correct: true },
              { id: 'a', text: 'Bees produce honey by visiting flowers and collecting nectar from them.', correct: false },
              { id: 'c', text: 'Farmers should stop using all chemicals on their crops as soon as possible.', correct: false },
              { id: 'd', text: 'Beekeepers need much more financial support from local and national governments.', correct: false }
            ],
            explanation: 'The passage explains that bees are essential for nature and farming, and that their populations are declining for several reasons.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader
window.READING_TEST_1 = window.READING_SECTION_1;
