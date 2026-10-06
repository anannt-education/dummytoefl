window.READING_SECTION_2 = {
  id: 'reading-section-2',
  title: 'Reading Practice Test 2',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-2',
      type: 'complete_the_words',
      paragraph: 'Photosynthesis is the funda____ process by which plants con____ sunlight into chemical ene____. Chlor____ molecules in the leaves abs____ light and use it to tran____ carbon dioxide and water into glu____. This remar____ reaction also rele____ oxygen as a bypr____, sustaining most life on Earth.',
      words: [
        { id: 'ctw-2-w1', position: 0, displayText: 'funda', answer: 'mental', fullWord: 'fundamental' },
        { id: 'ctw-2-w2', position: 1, displayText: 'con', answer: 'vert', fullWord: 'convert' },
        { id: 'ctw-2-w3', position: 2, displayText: 'ene', answer: 'rgy', fullWord: 'energy' },
        { id: 'ctw-2-w4', position: 3, displayText: 'Chlor', answer: 'ophyll', fullWord: 'Chlorophyll' },
        { id: 'ctw-2-w5', position: 4, displayText: 'abs', answer: 'orb', fullWord: 'absorb' },
        { id: 'ctw-2-w6', position: 5, displayText: 'tran', answer: 'sform', fullWord: 'transform' },
        { id: 'ctw-2-w7', position: 6, displayText: 'glu', answer: 'cose', fullWord: 'glucose' },
        { id: 'ctw-2-w8', position: 7, displayText: 'remar', answer: 'kable', fullWord: 'remarkable' },
        { id: 'ctw-2-w9', position: 8, displayText: 'rele', answer: 'ases', fullWord: 'releases' },
        { id: 'ctw-2-w10', position: 9, displayText: 'bypr', answer: 'oduct', fullWord: 'byproduct' }
      ],
      points: 10
    },
    {
      id: 'ctw-2b',
      type: 'complete_the_words',
      paragraph: 'Honey bees demonstrate one of the most sophis____ communication systems in the animal kin____. When a forager disc____ a rich food source, she returns to the hive and perf____ a precise figure-eight movement called the wag____ dance. The angle of her dance indi____ the direction of the food rela____ to the sun, while the dura____ of the waggle phase commun____ the distance. Other bees decode this perfo____ and fly directly to the location.',
      words: [
        { id: 'ctw-2b-w1', position: 0, displayText: 'sophis', answer: 'ticated', fullWord: 'sophisticated' },
        { id: 'ctw-2b-w2', position: 1, displayText: 'kin', answer: 'gdom', fullWord: 'kingdom' },
        { id: 'ctw-2b-w3', position: 2, displayText: 'disc', answer: 'overs', fullWord: 'discovers' },
        { id: 'ctw-2b-w4', position: 3, displayText: 'perf', answer: 'orms', fullWord: 'performs' },
        { id: 'ctw-2b-w5', position: 4, displayText: 'wag', answer: 'gle', fullWord: 'waggle' },
        { id: 'ctw-2b-w6', position: 5, displayText: 'indi', answer: 'cates', fullWord: 'indicates' },
        { id: 'ctw-2b-w7', position: 6, displayText: 'rela', answer: 'tive', fullWord: 'relative' },
        { id: 'ctw-2b-w8', position: 7, displayText: 'dura', answer: 'tion', fullWord: 'duration' },
        { id: 'ctw-2b-w9', position: 8, displayText: 'commun', answer: 'icates', fullWord: 'communicates' },
        { id: 'ctw-2b-w10', position: 9, displayText: 'perfo', answer: 'rmance', fullWord: 'performance' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-2',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Library Database Maintenance',
      to: 'All Registered Library Users',
      from: 'library.services@oakridgeuniv.edu',
      date: '03/18/2026',
      subject: 'Scheduled Database Maintenance - March 22',
      body: 'Dear Library Users,\n\nPlease be advised that our online research databases, including JSTOR and Academic Search Complete, will be unavailable on Sunday, March 22, from 2:00 A.M. to 8:00 A.M. due to scheduled server maintenance. We recommend downloading any articles you need before Saturday evening. Physical library services, including book checkouts and study room reservations, will not be affected.\n\nWe apologize for any inconvenience.',
      signoff: 'Sincerely,',
      senderName: 'Maria Chen\nDigital Services Librarian',
      questions: [
        {
          id: 'rdl-email-2-q1',
          stem: 'What is the purpose of this email?',
          options: [
            { id: 'a', text: 'To announce the addition of new research databases', correct: false },
            { id: 'c', text: 'To remind students about their overdue library books', correct: false },
            { id: 'd', text: 'To advertise the library\'s new website for students', correct: false },
            { id: 'b', text: 'To inform users about a temporary service disruption', correct: true }
          ],
          explanation: 'The email informs users that online research databases will be temporarily unavailable due to scheduled maintenance on March 22.',
          points: 1
        },
        {
          id: 'rdl-email-2-q2',
          stem: 'What does the email recommend users do before the maintenance?',
          options: [
            { id: 'd', text: 'Reserve a study room in advance', correct: false },
            { id: 'b', text: 'Register for a new library account', correct: false },
            { id: 'a', text: 'Return all borrowed materials', correct: false },
            { id: 'c', text: 'Download any articles they need', correct: true }
          ],
          explanation: 'The email recommends downloading any needed articles before Saturday evening since the databases will be unavailable on Sunday morning.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-2',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Group Presentation Preparation',
      messages: [
        { sender: 'Marcus Johnson', time: '3:10 P.M.', text: 'Hey everyone, our group presentation for Sociology 220 is next Wednesday. We need to divide the sections. I can do the introduction and conclusion.' },
        { sender: 'Priya Sharma', time: '3:14 P.M.', text: 'I will take the section on research methodology. I already started collecting data from the survey we ran last week.' },
        { sender: 'Tomoko Saito', time: '3:17 P.M.', text: 'That leaves the literature review and the findings section. I can handle the literature review since I have been reading the sources.' },
        { sender: 'Elena Vasquez', time: '3:20 P.M.', text: 'I will do the findings section then. Should we use PowerPoint or Google Slides?' },
        { sender: 'Marcus Johnson', time: '3:23 P.M.', text: 'Google Slides would be easier so we can all edit at the same time. I will create the shared file and send the link tonight.' },
        { sender: 'Priya Sharma', time: '3:26 P.M.', text: 'Sounds good. Should we do a practice run before Wednesday? Maybe Monday evening?' },
        { sender: 'Marcus Johnson', time: '3:29 P.M.', text: 'Monday at 6 P.M. in the library study room works. I will book Room 3B. Everyone please have your slides done by Sunday night.' }
      ],
      questions: [
        {
          id: 'rdl-tc-2-q1',
          stem: 'Which section of the presentation will Tomoko be responsible for?',
          options: [
            { id: 'd', text: 'The findings section', correct: false },
            { id: 'a', text: 'The introduction section', correct: false },
            { id: 'c', text: 'The literature review', correct: true },
            { id: 'b', text: 'The research methodology', correct: false }
          ],
          explanation: 'Tomoko says she can handle the literature review since she has been reading the sources.',
          points: 1
        },
        {
          id: 'rdl-tc-2-q2',
          stem: 'Why does Marcus suggest using Google Slides?',
          options: [
            { id: 'd', text: 'It is free for all students', correct: false },
            { id: 'b', text: 'It allows everyone to edit simultaneously', correct: true },
            { id: 'c', text: 'The professor requires it for this assignment', correct: false },
            { id: 'a', text: 'It has better design templates available', correct: false }
          ],
          explanation: 'Marcus says Google Slides would be easier because they can all edit at the same time.',
          points: 1
        },
        {
          id: 'rdl-tc-2-q3',
          stem: 'By when must all slides be completed?',
          options: [
            { id: 'a', text: 'Wednesday morning', correct: false },
            { id: 'd', text: 'Tuesday afternoon', correct: false },
            { id: 'c', text: 'Sunday night', correct: true },
            { id: 'b', text: 'Monday at 6 P.M.', correct: false }
          ],
          explanation: 'Marcus asks everyone to have their slides done by Sunday night so they can do a practice run on Monday.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-2',
      type: 'academic_passage',
      title: 'Urban Heat Islands',
      text: 'Anyone who has walked from a shaded park into a downtown area on a summer afternoon has likely noticed a sharp rise in temperature. This phenomenon, known as the urban heat island effect, occurs when cities experience significantly higher temperatures than surrounding rural areas. The difference can be as great as five to ten degrees Celsius, particularly after sunset.\n\nSeveral factors contribute to urban heat islands. Buildings, roads, and parking lots are constructed from materials such as concrete and asphalt, which absorb and retain solar radiation far more effectively than natural surfaces like soil and vegetation. Additionally, the tall, closely spaced structures in city centers trap heat by reducing airflow and reflecting radiation between surfaces, a process sometimes called the urban canyon effect. The waste heat generated by vehicles, air conditioning units, and industrial activity further amplifies the warming.\n\nThe consequences of elevated urban temperatures are both environmental and social. Higher temperatures increase energy demand for cooling, which in turn raises greenhouse gas emissions from power plants. Heat islands also degrade air quality by accelerating the formation of ground-level ozone, a harmful pollutant. From a public health perspective, prolonged exposure to extreme heat can cause heat exhaustion, heatstroke, and cardiovascular stress, disproportionately affecting elderly residents and low-income communities with limited access to air conditioning.\n\nUrban planners have developed several strategies to mitigate the heat island effect. Increasing tree cover and green spaces provides shade and promotes evaporative cooling. Installing reflective or cool roofing materials reduces the amount of solar energy absorbed by buildings. Permeable pavements allow rainwater to seep through and evaporate, lowering surface temperatures. While no single intervention can eliminate urban heat islands entirely, a combination of these approaches can meaningfully reduce their intensity and protect vulnerable populations.',
      questions: [
        {
          id: 'ap-2-q1',
          type: 'factual',
          stem: 'According to the passage, how much warmer can cities be compared to surrounding rural areas?',
          highlightText: null,
          options: [
            { id: 'a', text: 'One to three degrees Celsius', correct: false },
            { id: 'd', text: 'Fifteen to twenty degrees Celsius', correct: false },
            { id: 'c', text: 'Ten to fifteen degrees Celsius', correct: false },
            { id: 'b', text: 'Five to ten degrees Celsius', correct: true }
          ],
          explanation: 'The passage states that the temperature difference can be as great as five to ten degrees Celsius, particularly after sunset.',
          points: 1
        },
        {
          id: 'ap-2-q2',
          type: 'vocabulary',
          stem: 'The word "amplifies" in paragraph 2 is closest in meaning to:',
          highlightText: 'amplifies',
          options: [
            { id: 'd', text: 'Distributes or disperses', correct: false },
            { id: 'c', text: 'Increases or intensifies', correct: true },
            { id: 'b', text: 'Measures or calculates', correct: false },
            { id: 'a', text: 'Reduces or weakens', correct: false }
          ],
          explanation: '"Amplifies" means to make something greater or stronger. In this context, waste heat intensifies or increases the warming effect in urban areas.',
          points: 1
        },
        {
          id: 'ap-2-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that elderly and low-income residents are more vulnerable to heat islands because they:',
          highlightText: null,
          options: [
            { id: 'b', text: 'Are more likely to lack adequate cooling resources', correct: true },
            { id: 'd', text: 'Have higher average body temperatures than other adults', correct: false },
            { id: 'c', text: 'Spend more time outdoors than other city residents', correct: false },
            { id: 'a', text: 'Live farther from hospitals and emergency medical care', correct: false }
          ],
          explanation: 'The passage mentions that these groups have "limited access to air conditioning," implying they lack adequate cooling resources to cope with extreme heat.',
          points: 1
        },
        {
          id: 'ap-2-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 2 and paragraph 4?',
          highlightText: null,
          options: [
            { id: 'b', text: 'Paragraph 2 describes the problem in cities, and paragraph 4 discusses the same problem in rural areas.', correct: false },
            { id: 'c', text: 'Both paragraphs focus mainly on the environmental consequences of rapid urban development in modern cities.', correct: false },
            { id: 'd', text: 'Paragraph 2 presents a scientific hypothesis, and paragraph 4 tests it with experimental field data.', correct: false },
            { id: 'a', text: 'Paragraph 2 explains the causes of urban heat islands, and paragraph 4 presents solutions to address them.', correct: true }
          ],
          explanation: 'Paragraph 2 identifies the factors that cause urban heat islands (materials, canyon effect, waste heat), while paragraph 4 describes mitigation strategies such as green spaces, cool roofs, and permeable pavements.',
          points: 1
        },
        {
          id: 'ap-2-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'c', text: 'Planting trees is the only effective way to lower temperatures, and other methods have failed completely.', correct: false },
            { id: 'd', text: 'Urban heat islands primarily affect developing countries in tropical regions, and wealthy nations remain largely unaffected.', correct: false },
            { id: 'a', text: 'Urban heat islands are caused solely by vehicle emissions, and no truly effective solution has yet been found.', correct: false },
            { id: 'b', text: 'Cities are significantly warmer than rural areas due to human-made factors, but various strategies can reduce this effect.', correct: true }
          ],
          explanation: 'The passage explains that urban heat islands result from human-made materials and activities, details their consequences, and presents multiple strategies to mitigate them.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-2',
        type: 'complete_the_words',
        paragraph: 'Archa____ is the study of human his____ through the excavation of sites and the anal____ of artifacts. Resea____ carefully uncover buried rema____ using precise tools and method____. Each disc____ provides valuable ins____ into how ancient civili____ lived, traded, and commun____ with one another.',
        words: [
          { id: 'ctw-m2-2-w1', position: 0, displayText: 'Archa', answer: 'eology', fullWord: 'Archaeology' },
          { id: 'ctw-m2-2-w2', position: 1, displayText: 'his', answer: 'tory', fullWord: 'history' },
          { id: 'ctw-m2-2-w3', position: 2, displayText: 'anal', answer: 'ysis', fullWord: 'analysis' },
          { id: 'ctw-m2-2-w4', position: 3, displayText: 'Resea', answer: 'rchers', fullWord: 'Researchers' },
          { id: 'ctw-m2-2-w5', position: 4, displayText: 'rema', answer: 'ins', fullWord: 'remains' },
          { id: 'ctw-m2-2-w6', position: 5, displayText: 'method', answer: 'ology', fullWord: 'methodology' },
          { id: 'ctw-m2-2-w7', position: 6, displayText: 'disc', answer: 'overy', fullWord: 'discovery' },
          { id: 'ctw-m2-2-w8', position: 7, displayText: 'ins', answer: 'ight', fullWord: 'insight' },
          { id: 'ctw-m2-2-w9', position: 8, displayText: 'civili', answer: 'zations', fullWord: 'civilizations' },
          { id: 'ctw-m2-2-w10', position: 9, displayText: 'commun', answer: 'icated', fullWord: 'communicated' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-2',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Parking Garage Closure',
        text: 'The West Campus Parking Garage will be closed for structural repairs from April 3 through April 17. During this period, permit holders may use the South Lot at no additional charge. A temporary shuttle service will run between the South Lot and the main campus every fifteen minutes from 7:00 AM to 9:00 PM. Please display your valid parking permit when using the South Lot. We apologize for the inconvenience.',
        questions: [
          {
            id: 'rdl-notice-m2-2-q1',
            stem: 'Why is the parking garage closing?',
            options: [
              { id: 'b', text: 'It needs structural repairs', correct: true },
              { id: 'd', text: 'It is reserved for a special event', correct: false },
              { id: 'a', text: 'It is being demolished', correct: false },
              { id: 'c', text: 'A new garage is being built nearby', correct: false }
            ],
            explanation: 'The notice states the garage will be closed for structural repairs.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-2-q2',
            stem: 'How often will the temporary shuttle run?',
            options: [
              { id: 'c', text: 'Every fifteen minutes', correct: true },
              { id: 'b', text: 'Every sixty minutes', correct: false },
              { id: 'a', text: 'Every thirty minutes', correct: false },
              { id: 'd', text: 'Every ten minutes', correct: false }
            ],
            explanation: 'The notice says the shuttle will run every fifteen minutes from 7:00 AM to 9:00 PM.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-2',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Biology Department Graduate Students',
        from: 'Dr. Robert Haines',
        date: 'March 3, 2026',
        subject: 'Research Assistant Position Available',
        body: 'I am seeking a research assistant for my marine ecology lab beginning this summer semester. The position involves collecting water samples from coastal sites, maintaining laboratory equipment, and assisting with data analysis. Candidates should have completed at least two semesters of graduate coursework in biology or a related field. The position offers a stipend of $1,800 per month and flexible hours. Interested students should send a brief statement of interest and their CV to my office by March 20. Interviews will be scheduled during the last week of March.',
        signoff: 'Sincerely,',
        senderName: 'Dr. Robert Haines, Associate Professor of Biology',
        questions: [
          {
            id: 'rdl-email-m2-2-q1',
            stem: 'What is one responsibility of the research assistant?',
            options: [
              { id: 'd', text: 'Supervising other assistants in the lab', correct: false },
              { id: 'a', text: 'Teaching undergraduate classes in the department', correct: false },
              { id: 'b', text: 'Collecting water samples from coastal sites', correct: true },
              { id: 'c', text: 'Writing grant proposals for the lab', correct: false }
            ],
            explanation: 'The email lists collecting water samples from coastal sites as one of the responsibilities.',
            points: 1
          },
          {
            id: 'rdl-email-m2-2-q2',
            stem: 'What is the minimum academic requirement for applicants?',
            options: [
              { id: 'c', text: 'A completed master\'s degree in marine science or a closely related field', correct: false },
              { id: 'a', text: 'A completed bachelor\'s degree in any academic field of study', correct: false },
              { id: 'b', text: 'At least two semesters of graduate coursework in biology or related field', correct: true },
              { id: 'd', text: 'At least one full year of previous laboratory research experience in biology', correct: false }
            ],
            explanation: 'The email states candidates should have completed at least two semesters of graduate coursework in biology or a related field.',
            points: 1
          },
          {
            id: 'rdl-email-m2-2-q3',
            stem: 'When will interviews take place?',
            options: [
              { id: 'c', text: 'The last week of March', correct: true },
              { id: 'a', text: 'The first week of March', correct: false },
              { id: 'b', text: 'The second week of April', correct: false },
              { id: 'd', text: 'The beginning of the summer semester', correct: false }
            ],
            explanation: 'The email says interviews will be scheduled during the last week of March.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-2',
        type: 'academic_passage',
        title: 'The Origins of Paper Money',
        text: 'For most of human history, valuable objects such as gold, silver, shells, and grain served as the primary forms of money. The transition to paper currency, an arrangement that requires participants to trust an unbacked promise, was neither sudden nor universally welcomed. The earliest paper money appeared in China during the Tang Dynasty in the seventh century, when merchants began using paper certificates to avoid carrying heavy strings of copper coins on long journeys.\n\nThese certificates initially functioned as private bills of exchange between trusted parties, but the practice eventually attracted government interest. By the eleventh century, the Song Dynasty had created what historians consider the first state-issued paper currency, called jiaozi. Officials limited the total amount that could be printed and required that each note be redeemable for coins or precious metals at designated treasury offices. This redemption guarantee was essential for public confidence.\n\nIn Europe, paper money emerged much later and followed a different path. Goldsmiths in seventeenth-century England held customers\' precious metals for safekeeping and issued written receipts. Merchants soon discovered that these receipts could be exchanged for goods just as easily as the gold itself, and gradually the receipts began circulating as currency. Banks of issue developed from these informal practices, eventually leading to centralized banking systems that issued standardized notes.\n\nThe shift away from commodity-backed currency to fiat money, where governments declare paper notes legal tender without any obligation to redeem them for metal, occurred only in the twentieth century. The change required citizens to place their trust not in the intrinsic value of the currency itself but in the stability and credibility of the issuing institution. Despite occasional crises that have tested this trust, fiat currency now underpins virtually every modern economy.',
        questions: [
          {
            id: 'ap-m2-2-q1',
            type: 'factual',
            stem: 'According to the passage, what was jiaozi?',
            highlightText: null,
            options: [
              { id: 'a', text: 'A type of merchant who traveled during the Tang Dynasty', correct: false },
              { id: 'd', text: 'A treasury office where coins and precious metals were exchanged', correct: false },
              { id: 'b', text: 'A private bill of exchange used between merchants and lenders', correct: false },
              { id: 'c', text: 'The first state-issued paper currency, created by the Song Dynasty', correct: true }
            ],
            explanation: 'The passage states the Song Dynasty created jiaozi, considered the first state-issued paper currency.',
            points: 1
          },
          {
            id: 'ap-m2-2-q2',
            type: 'vocabulary',
            stem: 'The word "redemption" in paragraph 2 is closest in meaning to:',
            highlightText: 'redemption',
            options: [
              { id: 'c', text: 'The government\'s policy of issuing more paper currency than before', correct: false },
              { id: 'a', text: 'The ability to exchange something for something else of equivalent value', correct: true },
              { id: 'd', text: 'The official destruction of damaged or worn-out notes by the treasury', correct: false },
              { id: 'b', text: 'A formal apology offered by officials for past financial mistakes', correct: false }
            ],
            explanation: 'In context, "redemption guarantee" refers to the promise that notes could be exchanged for coins or precious metals at treasury offices.',
            points: 1
          },
          {
            id: 'ap-m2-2-q3',
            type: 'inference',
            stem: 'It can be inferred from paragraph 3 that goldsmiths in seventeenth-century England:',
            highlightText: null,
            options: [
              { id: 'd', text: 'Refused to allow their receipts to circulate as currency', correct: false },
              { id: 'b', text: 'Operated as informal early bankers before formal banks existed', correct: true },
              { id: 'a', text: 'Were forbidden by law from issuing receipts', correct: false },
              { id: 'c', text: 'Issued currency that was officially backed by the English government', correct: false }
            ],
            explanation: 'The passage describes goldsmiths holding precious metals and issuing receipts that circulated as currency, with banks of issue developing from these informal practices, indicating they functioned as early informal bankers.',
            points: 1
          },
          {
            id: 'ap-m2-2-q4',
            type: 'paragraph_relationships',
            stem: 'How does paragraph 4 relate to the rest of the passage?',
            highlightText: null,
            options: [
              { id: 'b', text: 'It describes the next major step in the evolution of paper money beyond the historical periods discussed earlier.', correct: true },
              { id: 'c', text: 'It repeats the discussion of early Chinese paper currency that appeared in the first paragraph of the passage.', correct: false },
              { id: 'd', text: 'It explains why governments eventually stopped issuing paper currency and returned to precious metal coins.', correct: false },
              { id: 'a', text: 'It directly contradicts the historical examples of paper money given in the three earlier paragraphs.', correct: false }
            ],
            explanation: 'Paragraph 4 describes the twentieth-century shift to fiat money, which is the next chronological development after the seventeenth-century English practices in paragraph 3.',
            points: 1
          },
          {
            id: 'ap-m2-2-q5',
            type: 'important_idea',
            stem: 'Which of the following best summarizes the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'c', text: 'The development of paper currency followed different paths in different regions but consistently required public trust in an issuing authority.', correct: true },
              { id: 'b', text: 'Paper money has always been deeply controversial and is unlikely to survive much longer in modern economies.', correct: false },
              { id: 'a', text: 'Paper money was invented by European goldsmiths and later spread eastward to China and other Asian regions.', correct: false },
              { id: 'd', text: 'Fiat currency is fundamentally identical to the earliest forms of Chinese paper money issued by officials during the Song Dynasty', correct: false }
            ],
            explanation: 'The passage traces paper money from Tang Dynasty China through Song Dynasty regulation, English goldsmiths, and modern fiat currency, with trust in issuing institutions being a recurring theme.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-2',
        type: 'complete_the_words',
        paragraph: 'Many people enjoy walking in the pa___ on weekends. The fresh air and open spaces help them rel___ after a busy week. Some people br___ their dogs along for exercise. Children often play games on the green gr___. Park benches give visitors a place to sit and re___. There are usually pa___ that lead through trees and flowers. The local council ta___ care of the park all year long. They cut the gr___ and water the plants regularly. In summer, families bring picnics and enjoy meals out___. Walking in nature is a simple way to feel hap___.',
        words: [
          { id: 'ctw-m2e-2-w1', position: 0, displayText: 'pa', answer: 'rk', fullWord: 'park' },
          { id: 'ctw-m2e-2-w2', position: 1, displayText: 'rel', answer: 'ax', fullWord: 'relax' },
          { id: 'ctw-m2e-2-w3', position: 2, displayText: 'br', answer: 'ing', fullWord: 'bring' },
          { id: 'ctw-m2e-2-w4', position: 3, displayText: 'gr', answer: 'ass', fullWord: 'grass' },
          { id: 'ctw-m2e-2-w5', position: 4, displayText: 're', answer: 'st', fullWord: 'rest' },
          { id: 'ctw-m2e-2-w6', position: 5, displayText: 'pa', answer: 'ths', fullWord: 'paths' },
          { id: 'ctw-m2e-2-w7', position: 6, displayText: 'ta', answer: 'kes', fullWord: 'takes' },
          { id: 'ctw-m2e-2-w8', position: 7, displayText: 'gr', answer: 'ass', fullWord: 'grass' },
          { id: 'ctw-m2e-2-w9', position: 8, displayText: 'out', answer: 'side', fullWord: 'outside' },
          { id: 'ctw-m2e-2-w10', position: 9, displayText: 'hap', answer: 'pier', fullWord: 'happier' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-2',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Cafeteria Menu Changes',
        text: 'Starting next Monday, the student cafeteria will offer new vegetarian options every day. Two new salads, three soups, and a daily hot vegetarian dish will be available. The cafeteria will also extend its breakfast hours by thirty minutes. Breakfast will now be served from 6:30 AM until 10:00 AM. Prices will not change. Comments and suggestions can be left in the box near the main entrance.',
        questions: [
          {
            id: 'rdl-notice-m2e-2-q1',
            stem: 'What is the new breakfast end time?',
            options: [
              { id: 'd', text: '10:30 AM', correct: false },
              { id: 'a', text: '9:00 AM', correct: false },
              { id: 'b', text: '9:30 AM', correct: false },
              { id: 'c', text: '10:00 AM', correct: true }
            ],
            explanation: 'The notice states breakfast will now be served until 10:00 AM.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-2-q2',
            stem: 'Where can students leave comments?',
            options: [
              { id: 'a', text: 'At the cashier\'s counter inside the cafeteria', correct: false },
              { id: 'c', text: 'On the student cafeteria\'s official web page', correct: false },
              { id: 'b', text: 'In a box near the main entrance', correct: true },
              { id: 'd', text: 'With the cafeteria manager during serving hours', correct: false }
            ],
            explanation: 'The notice says comments and suggestions can be left in the box near the main entrance.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-2',
        type: 'read_daily_life',
        textType: 'email',
        to: 'All Dormitory Residents',
        from: 'Housing Office',
        date: 'September 12, 2026',
        subject: 'Laundry Room Closure',
        body: 'Hello everyone,\n\nThe laundry room on the third floor will be closed for repairs from September 18 to September 22. During this time, please use the laundry room on the second floor or the one in the basement. The basement laundry room is open 24 hours a day. We are sorry for any inconvenience. The repairs are needed to fix the dryers and replace two broken washing machines. Thank you for your patience.',
        signoff: 'Best regards,',
        senderName: 'Housing Office Staff',
        questions: [
          {
            id: 'rdl-email-m2e-2-q1',
            stem: 'Why is the third-floor laundry room closing?',
            options: [
              { id: 'c', text: 'For repairs', correct: true },
              { id: 'd', text: 'To save energy', correct: false },
              { id: 'b', text: 'For cleaning', correct: false },
              { id: 'a', text: 'To install new lighting', correct: false }
            ],
            explanation: 'The email says the laundry room is closing for repairs.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-2-q2',
            stem: 'Which laundry room is open 24 hours?',
            options: [
              { id: 'd', text: 'First floor', correct: false },
              { id: 'c', text: 'Basement', correct: true },
              { id: 'b', text: 'Third floor', correct: false },
              { id: 'a', text: 'Second floor', correct: false }
            ],
            explanation: 'The email mentions the basement laundry room is open 24 hours a day.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-2-q3',
            stem: 'When will the third-floor laundry room reopen?',
            options: [
              { id: 'b', text: 'September 20', correct: false },
              { id: 'c', text: 'September 22', correct: true },
              { id: 'd', text: 'September 25', correct: false },
              { id: 'a', text: 'September 18', correct: false }
            ],
            explanation: 'The closure runs from September 18 to September 22, so the room reopens after September 22.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-2',
        type: 'academic_passage',
        title: 'How Plants Use Sunlight',
        text: 'Plants need sunlight to make food. This process is called photosynthesis. During photosynthesis, plants take in carbon dioxide from the air and water from the soil. Using energy from sunlight, the plant turns these materials into a kind of sugar that it uses for growth. As a result of this process, plants release oxygen into the air, which animals and people need to breathe.\n\nThe green color of leaves comes from a substance called chlorophyll. Chlorophyll is what allows plants to capture sunlight. Without enough light, plants cannot make food and may grow weak or die. This is why most plants grow best in places with plenty of sunshine. Some plants, however, have adapted to live in shaded areas like forest floors. They have wider leaves to catch as much light as possible.',
        questions: [
          {
            id: 'ap-m2e-2-q1',
            type: 'factual',
            stem: 'What is the name of the process plants use to make food?',
            highlightText: null,
            options: [
              { id: 'c', text: 'Pollination', correct: false },
              { id: 'a', text: 'Respiration', correct: false },
              { id: 'b', text: 'Photosynthesis', correct: true },
              { id: 'd', text: 'Germination', correct: false }
            ],
            explanation: 'The passage explains that the process is called photosynthesis.',
            points: 1
          },
          {
            id: 'ap-m2e-2-q2',
            type: 'vocabulary',
            stem: 'The word "chlorophyll" in paragraph 2 refers to:',
            highlightText: 'chlorophyll',
            options: [
              { id: 'a', text: 'A type of root that absorbs water underground', correct: false },
              { id: 'b', text: 'A green substance that lets plants capture sunlight', correct: true },
              { id: 'c', text: 'The sugar that plants make using sunlight energy', correct: false },
              { id: 'd', text: 'A gas that plants release into the air', correct: false }
            ],
            explanation: 'The passage defines chlorophyll as the substance that allows plants to capture sunlight.',
            points: 1
          },
          {
            id: 'ap-m2e-2-q3',
            type: 'factual',
            stem: 'What gas do plants release during photosynthesis?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Nitrogen', correct: false },
              { id: 'a', text: 'Carbon dioxide', correct: false },
              { id: 'c', text: 'Oxygen', correct: true },
              { id: 'd', text: 'Hydrogen', correct: false }
            ],
            explanation: 'The passage states that plants release oxygen into the air.',
            points: 1
          },
          {
            id: 'ap-m2e-2-q4',
            type: 'inference',
            stem: 'Why do some plants have wider leaves?',
            highlightText: null,
            options: [
              { id: 'a', text: 'To attract more insects for pollination in shaded forest areas', correct: false },
              { id: 'b', text: 'To catch as much light as possible in shaded areas', correct: true },
              { id: 'd', text: 'To protect themselves from animals that might eat their leaves', correct: false },
              { id: 'c', text: 'To store more water during long dry seasons each year', correct: false }
            ],
            explanation: 'The passage says plants in shaded areas have wider leaves to catch as much light as possible.',
            points: 1
          },
          {
            id: 'ap-m2e-2-q5',
            type: 'important_idea',
            stem: 'Which of the following best summarizes the passage?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Plants use sunlight to make food, and they release oxygen as a result.', correct: true },
              { id: 'd', text: 'Chlorophyll is the only substance that plants need in order to survive.', correct: false },
              { id: 'a', text: 'Plants need water from the soil much more than they need sunlight.', correct: false },
              { id: 'c', text: 'All plants grow best in shaded forest areas rather than in direct sunlight.', correct: false }
            ],
            explanation: 'The passage explains how plants use sunlight to make food and release oxygen, with adaptations for different light conditions.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader
window.READING_TEST_2 = window.READING_SECTION_2;
