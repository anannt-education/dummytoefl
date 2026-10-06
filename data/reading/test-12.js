window.READING_SECTION_12 = {
  id: 'reading-section-12',
  title: 'Reading Practice Test 12',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-12',
      type: 'complete_the_words',
      paragraph: 'Desertification is the process by which fer____ land gradually becomes arid and unprod____. Overgrazing, defore____, and unsust____ farming practices strip the soil of its nutr____ and moisture. Prol____ drought conditions accel____ the degradation, leaving vast reg____ unable to support veget____. Combating desertification requires coord____ efforts in land management and conservation.',
      words: [
        { id: 'ctw-12-w1', position: 0, displayText: 'fer', answer: 'tile', fullWord: 'fertile' },
        { id: 'ctw-12-w2', position: 1, displayText: 'unprod', answer: 'uctive', fullWord: 'unproductive' },
        { id: 'ctw-12-w3', position: 2, displayText: 'defore', answer: 'station', fullWord: 'deforestation' },
        { id: 'ctw-12-w4', position: 3, displayText: 'unsust', answer: 'ainable', fullWord: 'unsustainable' },
        { id: 'ctw-12-w5', position: 4, displayText: 'nutr', answer: 'ients', fullWord: 'nutrients' },
        { id: 'ctw-12-w6', position: 5, displayText: 'Prol', answer: 'onged', fullWord: 'Prolonged' },
        { id: 'ctw-12-w7', position: 6, displayText: 'accel', answer: 'erate', fullWord: 'accelerate' },
        { id: 'ctw-12-w8', position: 7, displayText: 'reg', answer: 'ions', fullWord: 'regions' },
        { id: 'ctw-12-w9', position: 8, displayText: 'veget', answer: 'ation', fullWord: 'vegetation' },
        { id: 'ctw-12-w10', position: 9, displayText: 'coord', answer: 'inated', fullWord: 'coordinated' }
      ],
      points: 10
    },
    {
      id: 'ctw-12b',
      type: 'complete_the_words',
      paragraph: 'Beneath every healthy field and forest lies a hidden comm____ of bacteria, fungi, and other tiny organisms collec____ called the soil microbiome. These organisms break down dead plant and animal matter, recy____ nutrients into forms that plants can absorb. Many fungi form coope____ partnerships with plant roots, excha____ minerals for sugars produced through photosy____. When soils are degr____ by intensive farming or pollu____, the microbiome can collapse, redu____ both fertility and the land\'s ability to support fut____ crops.',
      words: [
        { id: 'ctw-12b-w1', position: 0, displayText: 'comm', answer: 'unity', fullWord: 'community' },
        { id: 'ctw-12b-w2', position: 1, displayText: 'collec', answer: 'tively', fullWord: 'collectively' },
        { id: 'ctw-12b-w3', position: 2, displayText: 'recy', answer: 'cling', fullWord: 'recycling' },
        { id: 'ctw-12b-w4', position: 3, displayText: 'coope', answer: 'rative', fullWord: 'cooperative' },
        { id: 'ctw-12b-w5', position: 4, displayText: 'excha', answer: 'nging', fullWord: 'exchanging' },
        { id: 'ctw-12b-w6', position: 5, displayText: 'photosy', answer: 'nthesis', fullWord: 'photosynthesis' },
        { id: 'ctw-12b-w7', position: 6, displayText: 'degr', answer: 'aded', fullWord: 'degraded' },
        { id: 'ctw-12b-w8', position: 7, displayText: 'pollu', answer: 'tion', fullWord: 'pollution' },
        { id: 'ctw-12b-w9', position: 8, displayText: 'redu', answer: 'cing', fullWord: 'reducing' },
        { id: 'ctw-12b-w10', position: 9, displayText: 'fut', answer: 'ure', fullWord: 'future' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-12',
      type: 'read_daily_life',
      textType: 'email',
      title: 'IT Security Alert',
      to: 'All University Email Users',
      from: 'itsecurity@ridgelineuniv.edu',
      date: '04/09/2026',
      subject: 'URGENT: Phishing Email Warning',
      body: 'Dear University Community,\n\nOur IT Security team has identified a phishing campaign targeting university email accounts. The fraudulent emails appear to come from the Registrar\'s Office and ask users to verify their login credentials through a link. Do not click any links in suspicious emails or provide your password. Legitimate university offices will never ask for your password by email.\n\nIf you have already clicked the link or entered your credentials, reset your password immediately at passwords.ridgelineuniv.edu and contact the IT Help Desk.',
      signoff: 'Stay safe,',
      senderName: 'IT Security Team\nRidgeline University',
      questions: [
        {
          id: 'rdl-email-12-q1',
          stem: 'What do the phishing emails pretend to be from?',
          options: [
            { id: 'c', text: 'The Registrar\'s Office', correct: true },
            { id: 'a', text: 'The IT Help Desk', correct: false },
            { id: 'd', text: 'The Campus Police Department', correct: false },
            { id: 'b', text: 'The Financial Aid Office', correct: false }
          ],
          explanation: 'The email states that the fraudulent emails appear to come from the Registrar\'s Office.',
          points: 1
        },
        {
          id: 'rdl-email-12-q2',
          stem: 'What should students do if they have already entered their credentials?',
          options: [
            { id: 'b', text: 'Reset their password immediately and contact the IT Help Desk', correct: true },
            { id: 'c', text: 'Create a new email account and stop using the old one', correct: false },
            { id: 'd', text: 'Report the incident to the campus police and wait for instructions', correct: false },
            { id: 'a', text: 'Delete the phishing email and simply ignore the whole matter', correct: false }
          ],
          explanation: 'The email advises affected users to reset their password immediately at the provided website and contact the IT Help Desk.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-12',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Cultural Festival Food Coordination',
      messages: [
        { sender: 'Amara Okafor', time: '12:00 P.M.', text: 'The international cultural festival is next Saturday! Each cultural club is responsible for their own food booth. We need to finalize our menu for the Nigerian booth by tomorrow.' },
        { sender: 'Chidi Eze', time: '12:05 P.M.', text: 'I was thinking jollof rice and fried plantain. They are popular and easy to serve in large quantities.' },
        { sender: 'Fatou Diallo', time: '12:09 P.M.', text: 'I agree. I can also make puff puff for a dessert option. How many servings should we plan for?' },
        { sender: 'Amara Okafor', time: '12:12 P.M.', text: 'Last year we served about 150 people. Let us plan for 180 this time since the festival is bigger. We have a budget of $200 from the club fund.' },
        { sender: 'Chidi Eze', time: '12:16 P.M.', text: 'I can get the rice and oil in bulk from the African market. That should save us some money. I estimate about $120 for the main ingredients.' },
        { sender: 'Fatou Diallo', time: '12:19 P.M.', text: 'The plantains and puff puff ingredients should be around $50. That leaves us $30 for plates and utensils.' },
        { sender: 'Amara Okafor', time: '12:22 P.M.', text: 'Perfect. Let us do the shopping on Thursday evening so everything is fresh. I will book the kitchen for Friday afternoon to start cooking.' }
      ],
      questions: [
        {
          id: 'rdl-tc-12-q1',
          stem: 'How many servings is the group planning for?',
          options: [
            { id: 'c', text: '180', correct: true },
            { id: 'd', text: '200', correct: false },
            { id: 'a', text: '100', correct: false },
            { id: 'b', text: '150', correct: false }
          ],
          explanation: 'Amara says they served 150 last year and should plan for 180 this time since the festival is bigger.',
          points: 1
        },
        {
          id: 'rdl-tc-12-q2',
          stem: 'Where will Chidi buy the main ingredients?',
          options: [
            { id: 'd', text: 'A wholesale warehouse', correct: false },
            { id: 'b', text: 'An online delivery service', correct: false },
            { id: 'a', text: 'The campus grocery store', correct: false },
            { id: 'c', text: 'The African market', correct: true }
          ],
          explanation: 'Chidi says he can get the rice and oil in bulk from the African market to save money.',
          points: 1
        },
        {
          id: 'rdl-tc-12-q3',
          stem: 'When will the group begin cooking?',
          options: [
            { id: 'a', text: 'Thursday evening', correct: false },
            { id: 'c', text: 'Saturday morning', correct: false },
            { id: 'd', text: 'Wednesday night', correct: false },
            { id: 'b', text: 'Friday afternoon', correct: true }
          ],
          explanation: 'Amara says she will book the kitchen for Friday afternoon to start cooking, with shopping planned for Thursday evening.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-12',
      type: 'academic_passage',
      title: 'Neuroplasticity: The Changing Brain',
      text: 'For much of the twentieth century, scientists believed that the adult brain was essentially fixed in its structure, incapable of forming new neural connections or adapting significantly after a critical period in early childhood. This view held that brain damage was largely irreversible and that cognitive decline with age was inevitable. However, research over the past several decades has overturned this assumption, revealing that the brain retains a remarkable capacity for change throughout life, a property known as neuroplasticity.\n\nNeuroplasticity refers to the brain\'s ability to reorganize itself by forming new neural pathways and strengthening or weakening existing connections in response to experience, learning, and injury. At the cellular level, repeated activation of specific neural circuits strengthens the synaptic connections between neurons, a process often summarized by the phrase "neurons that fire together wire together." This mechanism underlies the acquisition of new skills, the formation of memories, and the ability to adapt to changing environments.\n\nOne of the most compelling demonstrations of neuroplasticity comes from studies of recovery after brain injury. Patients who have suffered strokes, for example, sometimes regain lost functions through intensive rehabilitation. The undamaged regions of their brains gradually take over tasks previously performed by the injured areas. Similarly, research on musicians has shown that years of practice produce measurable structural changes in the brain regions associated with motor control and auditory processing.\n\nWhile neuroplasticity offers remarkable possibilities, it also has limitations. The brain\'s capacity for reorganization decreases with age, and not all functions can be fully recovered after severe damage. Moreover, neuroplasticity is not always beneficial. Chronic pain, for instance, can involve maladaptive neural changes that make the brain more sensitive to pain signals over time. Understanding both the potential and the boundaries of neuroplasticity is essential for developing effective therapies for neurological conditions and for designing educational strategies that optimize learning across the lifespan.',
      questions: [
        {
          id: 'ap-12-q1',
          type: 'factual',
          stem: 'According to the passage, what was the prevailing scientific belief about the adult brain for much of the twentieth century?',
          highlightText: null,
          options: [
            { id: 'c', text: 'It grew steadily larger throughout adulthood and later life', correct: false },
            { id: 'b', text: 'It was essentially fixed and incapable of significant adaptation', correct: true },
            { id: 'a', text: 'It could form unlimited new connections at any age', correct: false },
            { id: 'd', text: 'It became more efficient with each decade of life', correct: false }
          ],
          explanation: 'The passage states that scientists believed the adult brain was essentially fixed in structure, incapable of forming new neural connections after early childhood.',
          points: 1
        },
        {
          id: 'ap-12-q2',
          type: 'vocabulary',
          stem: 'The word "maladaptive" in paragraph 4 is closest in meaning to:',
          highlightText: 'maladaptive',
          options: [
            { id: 'a', text: 'Highly efficient or beneficial', correct: false },
            { id: 'c', text: 'Extremely slow or gradual', correct: false },
            { id: 'd', text: 'Completely reversible or temporary', correct: false },
            { id: 'b', text: 'Poorly adjusted or harmful', correct: true }
          ],
          explanation: '"Maladaptive" means not providing adequate or appropriate adjustment to the environment or situation, often resulting in harm. Here it describes neural changes that harmfully increase pain sensitivity.',
          points: 1
        },
        {
          id: 'ap-12-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that musicians\' brains differ structurally from non-musicians\' brains because:',
          highlightText: null,
          options: [
            { id: 'a', text: 'Musicians are born with larger brain regions for music', correct: false },
            { id: 'c', text: 'Music education permanently alters brain chemistry in early childhood', correct: false },
            { id: 'b', text: 'Years of practice cause measurable structural changes through neuroplasticity', correct: true },
            { id: 'd', text: 'Only certain people have brains capable of learning music', correct: false }
          ],
          explanation: 'The passage mentions that research on musicians shows years of practice produce measurable structural changes in brain regions for motor control and auditory processing, demonstrating neuroplasticity.',
          points: 1
        },
        {
          id: 'ap-12-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 3 and paragraph 4?',
          highlightText: null,
          options: [
            { id: 'a', text: 'Paragraph 3 provides evidence of neuroplasticity\'s benefits, while paragraph 4 discusses its limitations and potential drawbacks.', correct: true },
            { id: 'b', text: 'Both paragraphs describe the same gradual process of recovery from brain injury in adult stroke patients.', correct: false },
            { id: 'c', text: 'Paragraph 3 focuses entirely on brain development in children, while paragraph 4 focuses on older adults.', correct: false },
            { id: 'd', text: 'Paragraph 3 describes a theory of learning, and paragraph 4 provides the experimental evidence supporting it.', correct: false }
          ],
          explanation: 'Paragraph 3 showcases positive examples of neuroplasticity such as stroke recovery and musician brain changes, while paragraph 4 acknowledges limitations including age-related decline and harmful changes like chronic pain.',
          points: 1
        },
        {
          id: 'ap-12-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'a', text: 'Brain damage caused by strokes can always be fully reversed through enough intensive rehabilitation and practice.', correct: false },
            { id: 'b', text: 'The brain can reorganize and adapt throughout life, though this capacity has both benefits and limitations.', correct: true },
            { id: 'c', text: 'Chronic pain is by far the most significant consequence of neuroplasticity for most adults over time.', correct: false },
            { id: 'd', text: 'Only children\'s brains are capable of meaningful neuroplastic change, since the adult brain remains permanently fixed.', correct: false }
          ],
          explanation: 'The passage presents neuroplasticity as a fundamental property of the brain that enables adaptation and recovery, while also noting that it has limitations and can sometimes produce harmful changes.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-12',
        type: 'complete_the_words',
        paragraph: 'Antibiotic resis____ is a growing global health concern. When bact____ are exposed to antibiotics repea____, some develop muta____ that allow them to survive trea____. These resistant strains mult____ and spread, making common infec____ increasingly difficult to cure. Overpres____ of antibiotics and their widespread use in agric____ have accelerated this alarming pheno____.',
        words: [
          { id: 'ctw-m2-12-w1', position: 0, displayText: 'resis', answer: 'tance', fullWord: 'resistance' },
          { id: 'ctw-m2-12-w2', position: 1, displayText: 'bact', answer: 'eria', fullWord: 'bacteria' },
          { id: 'ctw-m2-12-w3', position: 2, displayText: 'repea', answer: 'tedly', fullWord: 'repeatedly' },
          { id: 'ctw-m2-12-w4', position: 3, displayText: 'muta', answer: 'tions', fullWord: 'mutations' },
          { id: 'ctw-m2-12-w5', position: 4, displayText: 'trea', answer: 'tment', fullWord: 'treatment' },
          { id: 'ctw-m2-12-w6', position: 5, displayText: 'mult', answer: 'iply', fullWord: 'multiply' },
          { id: 'ctw-m2-12-w7', position: 6, displayText: 'infec', answer: 'tions', fullWord: 'infections' },
          { id: 'ctw-m2-12-w8', position: 7, displayText: 'Overpres', answer: 'cription', fullWord: 'Overprescription' },
          { id: 'ctw-m2-12-w9', position: 8, displayText: 'agric', answer: 'ulture', fullWord: 'agriculture' },
          { id: 'ctw-m2-12-w10', position: 9, displayText: 'pheno', answer: 'menon', fullWord: 'phenomenon' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-12',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Study Room Reservation',
        text: 'The university library now offers an online reservation system for group study rooms on the third floor. Rooms may be booked up to seven days in advance for sessions of one to three hours. A minimum of two students is required for each reservation, and a valid student ID must be presented at check-in. Rooms not claimed within fifteen minutes of the reservation time will be released. To make a reservation, log in to the library portal using your student credentials.',
        questions: [
          {
            id: 'rdl-notice-m2-12-q1',
            stem: 'How far in advance can rooms be booked?',
            options: [
              { id: 'c', text: 'Seven days', correct: true },
              { id: 'd', text: 'Fourteen days', correct: false },
              { id: 'b', text: 'Five days', correct: false },
              { id: 'a', text: 'Three days', correct: false }
            ],
            explanation: 'The notice states rooms may be booked up to seven days in advance.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-12-q2',
            stem: 'What happens if a room is not claimed on time?',
            options: [
              { id: 'd', text: 'The student loses booking privileges for the semester', correct: false },
              { id: 'c', text: 'The reservation is automatically extended by thirty minutes', correct: false },
              { id: 'b', text: 'The room is released after fifteen minutes', correct: true },
              { id: 'a', text: 'The student is charged a small penalty fee', correct: false }
            ],
            explanation: 'The notice says rooms not claimed within fifteen minutes of the reservation time will be released.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-12',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Graduate Students in All Departments',
        from: 'Office of Research',
        date: 'January 20, 2026',
        subject: 'Conference Travel Grant Applications Open',
        body: 'The Office of Research is now accepting applications for the Spring Conference Travel Grant. This competitive grant provides up to $1,500 to support graduate students presenting original research at domestic or international academic conferences. Applicants must submit a copy of their conference acceptance letter, a budget estimate, and a brief abstract of their presentation. Applications are due by February 28 and should be submitted through the Research Portal. Award recipients will be announced by March 15. Priority is given to students who have not previously received a travel grant from this office.',
        signoff: 'Good luck,',
        senderName: 'Office of Research',
        questions: [
          {
            id: 'rdl-email-m2-12-q1',
            stem: 'What is the maximum amount the grant provides?',
            options: [
              { id: 'b', text: '$1,000', correct: false },
              { id: 'c', text: '$1,500', correct: true },
              { id: 'a', text: '$500', correct: false },
              { id: 'd', text: '$2,000', correct: false }
            ],
            explanation: 'The email states the grant provides up to $1,500.',
            points: 1
          },
          {
            id: 'rdl-email-m2-12-q2',
            stem: 'What document must accompany the application?',
            options: [
              { id: 'c', text: 'A completed copy of the conference registration form', correct: false },
              { id: 'd', text: 'Proof of previous attendance at an academic conference', correct: false },
              { id: 'b', text: 'A copy of the conference acceptance letter', correct: true },
              { id: 'a', text: 'A letter of recommendation from a faculty advisor', correct: false }
            ],
            explanation: 'The email requires a copy of the conference acceptance letter along with a budget estimate and abstract.',
            points: 1
          },
          {
            id: 'rdl-email-m2-12-q3',
            stem: 'Who receives priority for the grant?',
            options: [
              { id: 'd', text: 'Students who have maintained the highest grade point average in their department', correct: false },
              { id: 'c', text: 'Students who have not previously received a travel grant from this office', correct: true },
              { id: 'b', text: 'Students who are traveling to present at international conferences outside the country', correct: false },
              { id: 'a', text: 'Students who are completing the final year of their graduate degree program', correct: false }
            ],
            explanation: 'The email says priority is given to students who have not previously received a travel grant from this office.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-12',
        type: 'academic_passage',
        title: 'How Coffee Spread Around the World',
        text: 'Coffee, now one of the most widely traded commodities on the planet, originated in the highlands of Ethiopia. According to historical accounts, the stimulating effects of coffee beans were first observed by goat herders, who noticed their animals becoming unusually energetic after eating the bright red fruit of certain wild shrubs. The practice of drinking a brewed beverage made from roasted coffee beans appears to have developed gradually in the Arabian Peninsula in the fifteenth century, where coffee houses became important social institutions.\n\nFrom Arabia, coffee spread north into the Ottoman Empire and then into Europe through trade routes and travelers. By the seventeenth century, coffee houses had appeared in major European cities, where they served as gathering places for merchants, scholars, and political figures. London\'s coffee houses, in particular, became known as centers of news, debate, and business. Some historians argue that institutions ranging from the Royal Society to the Lloyd\'s insurance market had their origins in the discussions held in these establishments.\n\nThe demand for coffee in Europe drove the development of plantations in the European colonies. Dutch, French, Spanish, and Portuguese colonial powers each established coffee-growing operations in suitable climates around the world, particularly in the Caribbean and South America. By the nineteenth century, Brazil had become the world\'s leading coffee producer, a position it has retained ever since. The economic and social impact of these plantations was substantial and often deeply troubling, as coffee production depended heavily on enslaved labor in many regions.\n\nThe modern coffee industry remains globally significant, but its supply chains are complex and frequently controversial. Small farmers in many producing countries struggle with volatile prices and climate change, while consumers in wealthy countries pay relatively high prices for elaborate coffee preparations. Movements toward fair trade, direct trade, and specialty coffee aim to give producers a larger share of the value their crops generate, although these reforms remain a small fraction of the overall market.',
        questions: [
          {
            id: 'ap-m2-12-q1',
            type: 'factual',
            stem: 'According to the passage, where did coffee originate?',
            highlightText: null,
            options: [
              { id: 'b', text: 'The coastal regions of Brazil', correct: false },
              { id: 'c', text: 'The highlands of Ethiopia', correct: true },
              { id: 'a', text: 'The port cities of Arabia', correct: false },
              { id: 'd', text: 'The islands of the Caribbean', correct: false }
            ],
            explanation: 'The passage states coffee originated in the highlands of Ethiopia.',
            points: 1
          },
          {
            id: 'ap-m2-12-q2',
            type: 'vocabulary',
            stem: 'The word "volatile" in paragraph 4 most nearly means:',
            highlightText: 'volatile',
            options: [
              { id: 'c', text: 'Limited and confined to certain seasons', correct: false },
              { id: 'd', text: 'Heavily regulated and subject to government control', correct: false },
              { id: 'b', text: 'Unstable and prone to sudden changes', correct: true },
              { id: 'a', text: 'Steady and resistant to sudden changes', correct: false }
            ],
            explanation: 'In context, "volatile prices" describes prices that are unstable and prone to sudden changes, a common challenge for small coffee farmers.',
            points: 1
          },
          {
            id: 'ap-m2-12-q3',
            type: 'inference',
            stem: 'It can be inferred from paragraph 2 that European coffee houses:',
            highlightText: null,
            options: [
              { id: 'b', text: 'Played roles in society that went well beyond simply serving beverages', correct: true },
              { id: 'a', text: 'Were eventually banned by most European governments in the seventeenth century', correct: false },
              { id: 'd', text: 'Imported all of their coffee directly from Ethiopian growers each year', correct: false },
              { id: 'c', text: 'Were attended primarily by women rather than men in the seventeenth century', correct: false }
            ],
            explanation: 'The passage describes coffee houses as gathering places that gave rise to institutions like the Royal Society and Lloyd\'s, indicating broader social significance.',
            points: 1
          },
          {
            id: 'ap-m2-12-q4',
            type: 'paragraph_relationships',
            stem: 'How does paragraph 3 connect to paragraph 2?',
            highlightText: null,
            options: [
              { id: 'a', text: 'It directly contradicts the social significance of coffee houses that paragraph 2 describes in such great detail.', correct: false },
              { id: 'd', text: 'It describes a completely different beverage that has nothing at all to do with European coffee houses.', correct: false },
              { id: 'c', text: 'It returns to the original Ethiopian highlands and describes the traditional farming methods still used there today.', correct: false },
              { id: 'b', text: 'It explains how the European demand established in paragraph 2 led to the development of colonial plantations.', correct: true }
            ],
            explanation: 'Paragraph 3 follows the logic from European demand (paragraph 2) to the colonial plantation economy that supplied that demand.',
            points: 1
          },
          {
            id: 'ap-m2-12-q5',
            type: 'important_idea',
            stem: 'Which best expresses the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'd', text: 'Fair trade movements have already solved nearly all of the inequities found in the global coffee industry today.', correct: false },
              { id: 'c', text: 'Brazil owes its modern wealth entirely to coffee production and the plantations built during the colonial period.', correct: false },
              { id: 'a', text: 'Coffee\'s journey from Ethiopian highlands to global commodity reflects centuries of cultural exchange, colonial economics, and ongoing controversy.', correct: true },
              { id: 'b', text: 'Coffee houses were the most important political institutions in seventeenth-century Europe and shaped nearly every major decision.', correct: false }
            ],
            explanation: 'The passage traces coffee from its origins through European spread, colonial production, and modern controversy, framing it as a story of global exchange and ongoing inequities.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-12',
        type: 'complete_the_words',
        paragraph: 'Many cities are building more bi___ lanes to encourage cycling. Riding a bike to work is healthy and helps protect the envir___. Cyclists need to wear hel___ for safety. They also need to follow traffic ru___ just like cars do. In some countries, special tra___ lights show when cyclists can go. Some cities offer free bike-sha___ programs for residents and visi___. People can pick up a bike at one stat___ and return it at another. This service is conve___ for short trips around the city. Cycling is becoming an important part of mod___ city life.',
        words: [
          { id: 'ctw-m2e-12-w1', position: 0, displayText: 'bi', answer: 'ke', fullWord: 'bike' },
          { id: 'ctw-m2e-12-w2', position: 1, displayText: 'envir', answer: 'onment', fullWord: 'environment' },
          { id: 'ctw-m2e-12-w3', position: 2, displayText: 'hel', answer: 'mets', fullWord: 'helmets' },
          { id: 'ctw-m2e-12-w4', position: 3, displayText: 'ru', answer: 'les', fullWord: 'rules' },
          { id: 'ctw-m2e-12-w5', position: 4, displayText: 'tra', answer: 'ffic', fullWord: 'traffic' },
          { id: 'ctw-m2e-12-w6', position: 5, displayText: 'sha', answer: 'ring', fullWord: 'sharing' },
          { id: 'ctw-m2e-12-w7', position: 6, displayText: 'visi', answer: 'tors', fullWord: 'visitors' },
          { id: 'ctw-m2e-12-w8', position: 7, displayText: 'stat', answer: 'ion', fullWord: 'station' },
          { id: 'ctw-m2e-12-w9', position: 8, displayText: 'conve', answer: 'nient', fullWord: 'convenient' },
          { id: 'ctw-m2e-12-w10', position: 9, displayText: 'mod', answer: 'ern', fullWord: 'modern' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-12',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Lost and Found Items',
        text: 'Several items have been turned in to the Lost and Found office over the past two weeks. These include a black backpack, a silver watch, two pairs of glasses, and a set of keys. Students who have lost items should visit the Lost and Found office in the Student Center, Room 110, between 10:00 AM and 4:00 PM. Please be ready to describe the item you are looking for. Items not claimed within thirty days will be donated to charity.',
        questions: [
          {
            id: 'rdl-notice-m2e-12-q1',
            stem: 'Where is the Lost and Found office?',
            options: [
              { id: 'a', text: 'In the main library, Room 210', correct: false },
              { id: 'b', text: 'In the Student Center, Room 110', correct: true },
              { id: 'c', text: 'In the administration building, second floor', correct: false },
              { id: 'd', text: 'In the residence hall front office', correct: false }
            ],
            explanation: 'The notice says the office is in the Student Center, Room 110.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-12-q2',
            stem: 'What happens to items not claimed within thirty days?',
            options: [
              { id: 'c', text: 'They are sold at a yard sale', correct: false },
              { id: 'b', text: 'They are donated to charity', correct: true },
              { id: 'd', text: 'They are kept indefinitely', correct: false },
              { id: 'a', text: 'They are thrown away', correct: false }
            ],
            explanation: 'The notice states unclaimed items will be donated to charity.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-12',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Mark Davis',
        from: 'Academic Advisor',
        date: 'November 1, 2026',
        subject: 'Course Registration',
        body: 'Dear Mark,\n\nIt is time to register for spring semester courses. Registration begins next Monday and closes on November 30. Before registering, please make a list of the courses you want to take and any backup choices. Some popular classes fill up quickly, so register as early as possible. If you would like to discuss your schedule, you can book an appointment with me through the advising website. My next available time is Thursday at 11:00 AM.',
        signoff: 'Best regards,',
        senderName: 'Your Academic Advisor',
        questions: [
          {
            id: 'rdl-email-m2e-12-q1',
            stem: 'When does registration close?',
            options: [
              { id: 'b', text: 'November 15', correct: false },
              { id: 'd', text: 'December 15', correct: false },
              { id: 'a', text: 'November 1', correct: false },
              { id: 'c', text: 'November 30', correct: true }
            ],
            explanation: 'The email states registration closes on November 30.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-12-q2',
            stem: 'Why should Mark register early?',
            options: [
              { id: 'b', text: 'Because some popular classes fill up quickly', correct: true },
              { id: 'c', text: 'Because the registration website is often slow', correct: false },
              { id: 'd', text: 'Because the university charges a late registration fee', correct: false },
              { id: 'a', text: 'Because early registration earns a tuition discount', correct: false }
            ],
            explanation: 'The email says some popular classes fill up quickly, so registering early is recommended.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-12-q3',
            stem: 'How can Mark book an appointment with the advisor?',
            options: [
              { id: 'a', text: 'By calling the advisor', correct: false },
              { id: 'c', text: 'By emailing the dean', correct: false },
              { id: 'd', text: 'By visiting the office without an appointment', correct: false },
              { id: 'b', text: 'Through the advising website', correct: true }
            ],
            explanation: 'The email says appointments can be booked through the advising website.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-12',
        type: 'academic_passage',
        title: 'The Story of Paper',
        text: 'Paper is something we use every day, but its history goes back almost two thousand years. The first true paper was made in China around the year 105 by a man named Cai Lun. He mixed water with pieces of bark, hemp, and old fishing nets, then pressed the mixture into thin sheets and dried them. This new material was much cheaper and easier to write on than the bamboo strips that the Chinese had used before.\n\nPaper-making slowly spread to other parts of the world, reaching the Middle East and then Europe. By the late Middle Ages, large paper mills were operating in many European cities. The invention of the printing press in the 1400s greatly increased the demand for paper. Today, most paper is made from wood, but recycled paper is becoming more common as people try to protect forests and reduce waste.',
        questions: [
          {
            id: 'ap-m2e-12-q1',
            type: 'factual',
            stem: 'Where was the first paper made?',
            highlightText: null,
            options: [
              { id: 'b', text: 'China', correct: true },
              { id: 'c', text: 'Greece', correct: false },
              { id: 'd', text: 'Italy', correct: false },
              { id: 'a', text: 'Egypt', correct: false }
            ],
            explanation: 'The passage says the first true paper was made in China around the year 105.',
            points: 1
          },
          {
            id: 'ap-m2e-12-q2',
            type: 'factual',
            stem: 'What did Cai Lun mix with water to make paper?',
            highlightText: null,
            options: [
              { id: 'd', text: 'Wool, cotton, and old clothing scraps', correct: false },
              { id: 'c', text: 'Wood, leaves, and dried grass stems', correct: false },
              { id: 'b', text: 'Bark, hemp, and old fishing nets', correct: true },
              { id: 'a', text: 'Sand, clay, and finely crushed stone', correct: false }
            ],
            explanation: 'The passage describes the original paper recipe of bark, hemp, and old fishing nets.',
            points: 1
          },
          {
            id: 'ap-m2e-12-q3',
            type: 'vocabulary',
            stem: 'The word "demand" in paragraph 2 most likely means:',
            highlightText: 'demand',
            options: [
              { id: 'c', text: 'A type of payment or fee', correct: false },
              { id: 'a', text: 'A strong order from a leader', correct: false },
              { id: 'd', text: 'A formal written request for approval', correct: false },
              { id: 'b', text: 'The need or desire for something', correct: true }
            ],
            explanation: 'In context, "demand for paper" means the need or desire for paper increased.',
            points: 1
          },
          {
            id: 'ap-m2e-12-q4',
            type: 'inference',
            stem: 'Why is recycled paper becoming more common?',
            highlightText: null,
            options: [
              { id: 'a', text: 'Because wood is no longer available', correct: false },
              { id: 'c', text: 'Because it is cheaper to print on', correct: false },
              { id: 'b', text: 'To protect forests and reduce waste', correct: true },
              { id: 'd', text: 'Because it is required by law everywhere', correct: false }
            ],
            explanation: 'The passage says recycled paper is becoming more common as people try to protect forests and reduce waste.',
            points: 1
          },
          {
            id: 'ap-m2e-12-q5',
            type: 'important_idea',
            stem: 'What is the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'd', text: 'The invention of the printing press eventually destroyed the European paper mill industry.', correct: false },
              { id: 'b', text: 'Paper has a long history, from its invention in China to modern recycled paper.', correct: true },
              { id: 'a', text: 'Paper-making remains a difficult and expensive process in most parts of the world today.', correct: false },
              { id: 'c', text: 'Paper was first invented in Europe during the Middle Ages and later spread eastward.', correct: false }
            ],
            explanation: 'The passage describes the development of paper from its invention in China to today\'s recycled paper.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader, which reads window.READING_TEST_12
window.READING_TEST_12 = window.READING_SECTION_12;
