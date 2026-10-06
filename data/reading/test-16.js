window.READING_SECTION_16 = {
  id: 'reading-section-16',
  title: 'Reading Practice Test 16',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-16',
      type: 'complete_the_words',
      paragraph: 'The rainforest canopy is the dense upper layer of veget____ that forms a contin____ roof over the forest floor. This layer inter____ most sunlight, creating a dim and humid envir____ below. Coun____ species of birds, insects, and mammals inh____ the canopy, many of which have adapted specif____ to life at great hei____. Scien____ often use rope systems and walkways to exp____ this largely inaccessible ecosystem.',
      words: [
        { id: 'ctw-16-w1', position: 0, displayText: 'veget', answer: 'ation', fullWord: 'vegetation' },
        { id: 'ctw-16-w2', position: 1, displayText: 'contin', answer: 'uous', fullWord: 'continuous' },
        { id: 'ctw-16-w3', position: 2, displayText: 'inter', answer: 'cepts', fullWord: 'intercepts' },
        { id: 'ctw-16-w4', position: 3, displayText: 'envir', answer: 'onment', fullWord: 'environment' },
        { id: 'ctw-16-w5', position: 4, displayText: 'Coun', answer: 'tless', fullWord: 'Countless' },
        { id: 'ctw-16-w6', position: 5, displayText: 'inh', answer: 'abit', fullWord: 'inhabit' },
        { id: 'ctw-16-w7', position: 6, displayText: 'specif', answer: 'ically', fullWord: 'specifically' },
        { id: 'ctw-16-w8', position: 7, displayText: 'hei', answer: 'ghts', fullWord: 'heights' },
        { id: 'ctw-16-w9', position: 8, displayText: 'Scien', answer: 'tists', fullWord: 'Scientists' },
        { id: 'ctw-16-w10', position: 9, displayText: 'exp', answer: 'lore', fullWord: 'explore' }
      ],
      points: 10
    },
    {
      id: 'ctw-16b',
      type: 'complete_the_words',
      paragraph: 'Mangrove forests grow along tropical and subtr____ coastlines, where freshwater rivers meet the salty ocean. The trees have evolved special____ root systems that anchor them in soft sediment and tolerate cycles of imme____ at high tide. These forests prov____ critical habitat for countless species of fish and shel____, many of which begin their lives in the prote____ shallows before moving into deeper water. Mangroves also defend coast____ from storm surges and absorb large amo____ of carbon, making their conser____ a priority for both biodiversity and climate adapt____.',
      words: [
        { id: 'ctw-16b-w1', position: 0, displayText: 'subtr', answer: 'opical', fullWord: 'subtropical' },
        { id: 'ctw-16b-w2', position: 1, displayText: 'special', answer: 'ized', fullWord: 'specialized' },
        { id: 'ctw-16b-w3', position: 2, displayText: 'imme', answer: 'rsion', fullWord: 'immersion' },
        { id: 'ctw-16b-w4', position: 3, displayText: 'prov', answer: 'ide', fullWord: 'provide' },
        { id: 'ctw-16b-w5', position: 4, displayText: 'shel', answer: 'lfish', fullWord: 'shellfish' },
        { id: 'ctw-16b-w6', position: 5, displayText: 'prote', answer: 'cted', fullWord: 'protected' },
        { id: 'ctw-16b-w7', position: 6, displayText: 'coast', answer: 'lines', fullWord: 'coastlines' },
        { id: 'ctw-16b-w8', position: 7, displayText: 'amo', answer: 'unts', fullWord: 'amounts' },
        { id: 'ctw-16b-w9', position: 8, displayText: 'conser', answer: 'vation', fullWord: 'conservation' },
        { id: 'ctw-16b-w10', position: 9, displayText: 'adapt', answer: 'ation', fullWord: 'adaptation' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-16',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Student Government Elections',
      to: 'All Undergraduate Students',
      from: 'studentgov@cedarvalleyuniv.edu',
      date: '04/14/2026',
      subject: 'Student Government Elections - Voting Opens April 20',
      body: 'Dear Students,\n\nVoting for the 2026-2027 Student Government Association elections will open on Monday, April 20, and close on Wednesday, April 22, at 11:59 P.M. Votes can be cast online through the Student Portal. All currently enrolled undergraduate students are eligible to vote. Candidates are running for the positions of president, vice president, treasurer, and four senate seats.\n\nCandidate profiles and platform statements are posted on the SGA website. A live debate will be held on April 18 at 7 P.M. in the auditorium.',
      signoff: 'Exercise your voice,',
      senderName: 'Student Government Association\nCedar Valley University',
      questions: [
        {
          id: 'rdl-email-16-q1',
          stem: 'How long is the voting period?',
          options: [
            { id: 'c', text: 'Five days', correct: false },
            { id: 'b', text: 'Three days', correct: true },
            { id: 'd', text: 'One week', correct: false },
            { id: 'a', text: 'One day', correct: false }
          ],
          explanation: 'Voting opens on Monday, April 20, and closes on Wednesday, April 22, which is a three-day period.',
          points: 1
        },
        {
          id: 'rdl-email-16-q2',
          stem: 'What event is scheduled before the voting period begins?',
          options: [
            { id: 'c', text: 'A live debate in the auditorium', correct: true },
            { id: 'a', text: 'A campus-wide rally on the quad', correct: false },
            { id: 'd', text: 'An online question-and-answer session with the candidates', correct: false },
            { id: 'b', text: 'A candidate meet-and-greet in the library', correct: false }
          ],
          explanation: 'The email mentions that a live debate will be held on April 18, two days before voting opens on April 20.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-16',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'End-of-Semester Party Planning',
      messages: [
        { sender: 'Chris Delgado', time: '3:00 P.M.', text: 'The end-of-semester party is set for May 8 at the rooftop lounge. Capacity is 80 people. I need everyone to pitch in with planning.' },
        { sender: 'Nadia Petrova', time: '3:04 P.M.', text: 'I can create a playlist and bring my portable speaker. Should I also handle the decorations?' },
        { sender: 'Chris Delgado', time: '3:07 P.M.', text: 'Yes, please. Keep the decorations simple, maybe some string lights and balloons. Our total budget is $300.' },
        { sender: 'Owen Park', time: '3:11 P.M.', text: 'I will order pizza and snacks. How much of the budget should I use for food?' },
        { sender: 'Chris Delgado', time: '3:14 P.M.', text: 'Plan for about $180 on food and drinks. That leaves $120 for decorations, plates, cups, and anything else we need.' },
        { sender: 'Nadia Petrova', time: '3:17 P.M.', text: 'I can keep decorations under $60 if I shop at the dollar store. That gives us $60 for supplies and a small buffer.' },
        { sender: 'Owen Park', time: '3:20 P.M.', text: 'Works for me. I will get a headcount by this Friday so I know how many pizzas to order. Everyone spread the word!' }
      ],
      questions: [
        {
          id: 'rdl-tc-16-q1',
          stem: 'What is the maximum number of people the venue can hold?',
          options: [
            { id: 'c', text: '100', correct: false },
            { id: 'd', text: '120', correct: false },
            { id: 'a', text: '50', correct: false },
            { id: 'b', text: '80', correct: true }
          ],
          explanation: 'Chris states that the rooftop lounge has a capacity of 80 people.',
          points: 1
        },
        {
          id: 'rdl-tc-16-q2',
          stem: 'How much of the budget is allocated for food and drinks?',
          options: [
            { id: 'd', text: '$300', correct: false },
            { id: 'c', text: '$180', correct: true },
            { id: 'a', text: '$120', correct: false },
            { id: 'b', text: '$150', correct: false }
          ],
          explanation: 'Chris tells Owen to plan for about $180 on food and drinks out of the total $300 budget.',
          points: 1
        },
        {
          id: 'rdl-tc-16-q3',
          stem: 'What does Owen plan to do by Friday?',
          options: [
            { id: 'a', text: 'Order the pizza from the restaurant', correct: false },
            { id: 'b', text: 'Buy decorations at the dollar store', correct: false },
            { id: 'c', text: 'Get a headcount of attendees', correct: true },
            { id: 'd', text: 'Set up the string lights at the venue', correct: false }
          ],
          explanation: 'Owen says he will get a headcount by Friday so he knows how many pizzas to order.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-16',
      type: 'academic_passage',
      title: 'Deep Ocean Ecosystems',
      text: 'For centuries, the deep ocean was assumed to be a barren wasteland, devoid of life and scientific interest. Early oceanographers believed that the crushing pressures, near-freezing temperatures, and complete absence of sunlight at depths below one thousand meters would make biological activity impossible. This assumption was dramatically overturned in 1977, when researchers aboard the submersible Alvin discovered thriving communities of organisms clustered around hydrothermal vents on the ocean floor near the Galapagos Islands.\n\nHydrothermal vents are fissures in the seafloor from which geothermally heated water, rich in dissolved minerals and chemicals, erupts into the surrounding ocean. Unlike surface ecosystems that depend on sunlight for energy through photosynthesis, vent communities are sustained by chemosynthesis. Specialized bacteria convert the chemical energy in hydrogen sulfide and other compounds into organic matter, forming the base of a food web that supports tube worms, giant clams, shrimp, and numerous other species found nowhere else on Earth.\n\nBeyond hydrothermal vents, other deep-sea environments support surprisingly diverse communities. Cold seeps, where methane and hydrogen sulfide leak slowly from the seafloor, host organisms that rely on similar chemosynthetic processes. Whale falls, the carcasses of large whales that sink to the ocean floor, create temporary ecosystems that can sustain specialized communities for decades as the remains are gradually consumed. These discoveries have expanded scientific understanding of the conditions under which life can exist.\n\nThe study of deep ocean ecosystems has implications beyond marine biology. The extreme conditions in the deep sea serve as analogs for environments on other planets and moons, such as the subsurface oceans believed to exist on Jupiter\'s moon Europa. Astrobiologists study deep-sea chemosynthetic organisms to develop hypotheses about what extraterrestrial life might look like. Meanwhile, deep-sea mining companies are eyeing mineral-rich vent sites for commercial extraction, raising concerns about the potential destruction of fragile ecosystems that scientists are still working to understand.',
      questions: [
        {
          id: 'ap-16-q1',
          type: 'factual',
          stem: 'According to the passage, when were thriving communities first discovered around hydrothermal vents?',
          highlightText: null,
          options: [
            { id: 'a', text: '1957', correct: false },
            { id: 'd', text: '1989', correct: false },
            { id: 'c', text: '1977', correct: true },
            { id: 'b', text: '1968', correct: false }
          ],
          explanation: 'The passage states that in 1977, researchers aboard the submersible Alvin discovered thriving communities around hydrothermal vents near the Galapagos Islands.',
          points: 1
        },
        {
          id: 'ap-16-q2',
          type: 'vocabulary',
          stem: 'The word "analogs" in paragraph 4 is closest in meaning to:',
          highlightText: 'analogs',
          options: [
            { id: 'c', text: 'Complete opposites', correct: false },
            { id: 'a', text: 'Exact copies', correct: false },
            { id: 'd', text: 'Historical records', correct: false },
            { id: 'b', text: 'Comparable counterparts', correct: true }
          ],
          explanation: '"Analogs" means things that are similar or comparable to something else. Here, deep-sea environments serve as comparable counterparts to conditions on other planets.',
          points: 1
        },
        {
          id: 'ap-16-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that astrobiologists are interested in deep-sea organisms because:',
          highlightText: null,
          options: [
            { id: 'b', text: 'They suggest that life could exist in similar extreme conditions on other worlds', correct: true },
            { id: 'd', text: 'Deep-sea bacteria can be used as a fuel source for future space travel', correct: false },
            { id: 'a', text: 'Deep-sea organisms have been shown to survive in the vacuum of outer space', correct: false },
            { id: 'c', text: 'Europa has already been shown to have hydrothermal vents identical to Earth\'s', correct: false }
          ],
          explanation: 'The passage explains that deep-sea conditions are analogs for environments on other moons and planets, and astrobiologists study chemosynthetic organisms to develop hypotheses about extraterrestrial life.',
          points: 1
        },
        {
          id: 'ap-16-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 2 and paragraph 3?',
          highlightText: null,
          options: [
            { id: 'b', text: 'Both paragraphs describe the same type of deep-sea vent community from two entirely different perspectives.', correct: false },
            { id: 'a', text: 'Paragraph 2 describes hydrothermal vent ecosystems, and paragraph 3 describes additional types of deep-sea ecosystems.', correct: true },
            { id: 'c', text: 'Paragraph 2 presents a hypothesis, and paragraph 3 provides evidence that directly contradicts it.', correct: false },
            { id: 'd', text: 'Paragraph 2 focuses only on bacteria, while paragraph 3 focuses on much larger organisms.', correct: false }
          ],
          explanation: 'Paragraph 2 explains how hydrothermal vent communities function through chemosynthesis, while paragraph 3 extends the discussion to other deep-sea ecosystems such as cold seeps and whale falls.',
          points: 1
        },
        {
          id: 'ap-16-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'd', text: 'Whale falls are the most important of all deep ocean ecosystems, far surpassing hydrothermal vents and cold seeps in scientific significance.', correct: false },
            { id: 'b', text: 'Deep ocean ecosystems have revealed diverse life in extreme conditions, with implications for both biology and the search for extraterrestrial life.', correct: true },
            { id: 'c', text: 'Deep-sea mining is the greatest current threat to marine biodiversity, outweighing every other concern that scientists have raised so far', correct: false },
            { id: 'a', text: 'The deep ocean remains completely inhospitable to all known forms of life, and no organisms have been found there', correct: false }
          ],
          explanation: 'The passage overturns the assumption that the deep ocean is lifeless, describes diverse chemosynthetic ecosystems, and highlights implications for astrobiology and concerns about mining.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-16',
        type: 'complete_the_words',
        paragraph: 'Tidal energy harnesses the power of ocean tides to gene____ electricity. Large turb____ installed in coastal areas capture the kin____ energy of moving water as tides rise and fall. Unlike fossil fuels, tidal power is a rene____ resource that produces no direct emis____. However, the high cost of constr____ and potential impacts on marine habi____ remain signi____ challenges. Resea____ are working to develop more effi____ turbine designs.',
        words: [
          { id: 'ctw-m2-16-w1', position: 0, displayText: 'gene', answer: 'rate', fullWord: 'generate' },
          { id: 'ctw-m2-16-w2', position: 1, displayText: 'turb', answer: 'ines', fullWord: 'turbines' },
          { id: 'ctw-m2-16-w3', position: 2, displayText: 'kin', answer: 'etic', fullWord: 'kinetic' },
          { id: 'ctw-m2-16-w4', position: 3, displayText: 'rene', answer: 'wable', fullWord: 'renewable' },
          { id: 'ctw-m2-16-w5', position: 4, displayText: 'emis', answer: 'sions', fullWord: 'emissions' },
          { id: 'ctw-m2-16-w6', position: 5, displayText: 'constr', answer: 'uction', fullWord: 'construction' },
          { id: 'ctw-m2-16-w7', position: 6, displayText: 'habi', answer: 'tats', fullWord: 'habitats' },
          { id: 'ctw-m2-16-w8', position: 7, displayText: 'signi', answer: 'ficant', fullWord: 'significant' },
          { id: 'ctw-m2-16-w9', position: 8, displayText: 'Resea', answer: 'rchers', fullWord: 'Researchers' },
          { id: 'ctw-m2-16-w10', position: 9, displayText: 'effi', answer: 'cient', fullWord: 'efficient' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-16',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Graduation Cap and Gown',
        text: 'All graduating seniors must order their cap and gown through the University Bookstore by April 1 to participate in the May 17 commencement ceremony. Orders can be placed online or in person at the bookstore. The rental fee is $45 and includes the cap, gown, and tassel. Graduates receiving honors will be provided with a special cord at no extra charge during the rehearsal on May 16. Late orders placed after April 1 will incur a $15 rush fee and may not arrive in time for the ceremony.',
        questions: [
          {
            id: 'rdl-notice-m2-16-q1',
            stem: 'What is the rental fee for the cap and gown?',
            options: [
              { id: 'a', text: '$35', correct: false },
              { id: 'd', text: '$60', correct: false },
              { id: 'c', text: '$55', correct: false },
              { id: 'b', text: '$45', correct: true }
            ],
            explanation: 'The notice states the rental fee is $45 and includes the cap, gown, and tassel.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-16-q2',
            stem: 'What happens to orders placed after April 1?',
            options: [
              { id: 'c', text: 'They are placed on a waiting list until earlier orders are filled', correct: false },
              { id: 'a', text: 'They are automatically canceled and must be submitted again in person', correct: false },
              { id: 'd', text: 'They cost double the regular rental price of forty-five dollars', correct: false },
              { id: 'b', text: 'They incur a $15 rush fee and may not arrive on time', correct: true }
            ],
            explanation: 'The notice says late orders after April 1 will incur a $15 rush fee and may not arrive in time for the ceremony.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-16',
        type: 'read_daily_life',
        textType: 'email',
        to: 'All Students',
        from: 'The Campus Chronicle Editorial Board',
        date: 'September 10, 2026',
        subject: 'Student Newspaper Submission Guidelines',
        body: 'The Campus Chronicle is accepting submissions for its October issue. We welcome opinion pieces, feature articles, creative writing, photography, and illustrations from all students. Opinion pieces should be between 500 and 800 words, while feature articles may be up to 1,200 words. All written submissions must be original and not previously published elsewhere. Please submit your work as a Word document or PDF to submissions@campuschronicle.edu by September 28. Selected contributors will be notified by October 3 and may be asked to make minor revisions before publication. Published authors will receive a byline and a complimentary copy of the issue.',
        signoff: 'We look forward to reading your work,',
        senderName: 'The Campus Chronicle Editorial Board',
        questions: [
          {
            id: 'rdl-email-m2-16-q1',
            stem: 'What is the maximum word count for feature articles?',
            options: [
              { id: 'c', text: '1,200 words', correct: true },
              { id: 'b', text: '1,000 words', correct: false },
              { id: 'd', text: '1,500 words', correct: false },
              { id: 'a', text: '800 words', correct: false }
            ],
            explanation: 'The email states feature articles may be up to 1,200 words.',
            points: 1
          },
          {
            id: 'rdl-email-m2-16-q2',
            stem: 'What is the submission deadline?',
            options: [
              { id: 'b', text: 'September 28', correct: true },
              { id: 'd', text: 'October 3', correct: false },
              { id: 'a', text: 'September 20', correct: false },
              { id: 'c', text: 'October 1', correct: false }
            ],
            explanation: 'The email says submissions are due by September 28.',
            points: 1
          },
          {
            id: 'rdl-email-m2-16-q3',
            stem: 'What will published authors receive?',
            options: [
              { id: 'c', text: 'A certificate of publication signed by the editorial board', correct: false },
              { id: 'd', text: 'Priority consideration for submissions to all future issues', correct: false },
              { id: 'a', text: 'A cash payment of $50 for each published piece', correct: false },
              { id: 'b', text: 'A byline and a complimentary copy of the issue', correct: true }
            ],
            explanation: 'The email states published authors will receive a byline and a complimentary copy of the issue.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-16',
        type: 'academic_passage',
        title: 'How Cities Became Punctual',
        text: 'For most of human history, the precise time of day was a matter of local approximation rather than fixed measurement. Each town and village kept its own time, generally based on the position of the sun above the local horizon, and adjacent communities might differ by a few minutes without anyone noticing or caring. The shift to standardized, synchronized time across entire regions and eventually entire continents was driven by economic and technological pressures that transformed daily life in the nineteenth century.\n\nMechanical clocks had existed in European cathedrals and town halls since the medieval period, but their accuracy was limited and their use was largely public rather than personal. As skilled clockmakers gradually improved precision and as smaller portable clocks and pocket watches became more widely available, time-keeping moved into private homes and workplaces. The decisive change, however, came with the railroad. Trains required schedules that could be coordinated across many stations, and a difference of a few minutes between local times could mean missed connections or, more dangerously, collisions on shared tracks.\n\nIn 1840, a railway in Britain became the first to adopt a single standard time across its entire network, regardless of local solar time at each station. Other railways quickly followed, and within a few decades the practice spread across continents. The international standardization of time zones, agreed upon at a conference in Washington in 1884, divided the globe into twenty-four zones based on lines of longitude. The system was not adopted overnight in every country, and some places held out for years against giving up their local time, but the economic logic of synchronization eventually overcame most resistance.\n\nThe consequences of standardized time extended far beyond railroads. Factories could schedule shifts more reliably, schools could coordinate classes, and broadcast media that emerged in the twentieth century, including radio and television, depended completely on synchronized time. Today, atomic clocks set the global standard with a precision unimaginable to nineteenth-century reformers, and digital networks rely on accurate time signals to function. The transformation from local approximate time to global precise time underpins much of modern life in ways that are easy to overlook precisely because the system works so well.',
        questions: [
          {
            id: 'ap-m2-16-q1',
            type: 'factual',
            stem: 'According to the passage, what year did a British railway first adopt a single standard time across its entire network?',
            highlightText: null,
            options: [
              { id: 'a', text: '1820', correct: false },
              { id: 'b', text: '1840', correct: true },
              { id: 'd', text: '1920', correct: false },
              { id: 'c', text: '1884', correct: false }
            ],
            explanation: 'The passage states that in 1840, a railway in Britain became the first to adopt a single standard time across its network.',
            points: 1
          },
          {
            id: 'ap-m2-16-q2',
            type: 'vocabulary',
            stem: 'The word "synchronization" in paragraph 3 most nearly means:',
            highlightText: 'synchronization',
            options: [
              { id: 'a', text: 'The process of making things happen at the same coordinated time', correct: true },
              { id: 'c', text: 'The gradual reduction of working hours in factories and other workplaces', correct: false },
              { id: 'd', text: 'The gradual decline of public timekeeping in towns and cathedrals', correct: false },
              { id: 'b', text: 'The replacement of mechanical clocks with more accurate electronic ones', correct: false }
            ],
            explanation: 'In context, "the economic logic of synchronization" refers to the value of having different places coordinate at the same time.',
            points: 1
          },
          {
            id: 'ap-m2-16-q3',
            type: 'inference',
            stem: 'It can be inferred from paragraph 2 that before the nineteenth century:',
            highlightText: null,
            options: [
              { id: 'd', text: 'Railroads operated on local solar time at every station without any real difficulty', correct: false },
              { id: 'a', text: 'No one anywhere in Europe used clocks of any kind at all', correct: false },
              { id: 'b', text: 'Most ordinary people did not need extremely precise time-keeping in their daily lives', correct: true },
              { id: 'c', text: 'Mechanical clocks were illegal in most towns and villages across medieval Europe', correct: false }
            ],
            explanation: 'The passage describes time as locally approximate before the nineteenth century, with neighboring towns differing by minutes "without anyone noticing or caring," supporting this inference.',
            points: 1
          },
          {
            id: 'ap-m2-16-q4',
            type: 'paragraph_relationships',
            stem: 'How does paragraph 4 connect to the earlier paragraphs?',
            highlightText: null,
            options: [
              { id: 'a', text: 'It contradicts the earlier claim that railroad standardization was important, arguing instead that it mattered very little', correct: false },
              { id: 'd', text: 'It argues that local solar time should be restored in towns and villages around the world', correct: false },
              { id: 'c', text: 'It returns to the earlier discussion of medieval cathedral clocks and the limits of their accuracy', correct: false },
              { id: 'b', text: 'It traces the consequences of synchronized time beyond railroads to factories, schools, broadcasting, and modern digital networks.', correct: true }
            ],
            explanation: 'Paragraph 4 follows the consequences of railroad-driven time standardization through other industries and into the present digital era.',
            points: 1
          },
          {
            id: 'ap-m2-16-q5',
            type: 'important_idea',
            stem: 'Which best expresses the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'd', text: 'Britain alone is responsible for the modern system of international time zones, which no other country helped to establish', correct: false },
              { id: 'b', text: 'The transformation from approximate local time to standardized global time, driven mainly by railroads, underlies many features of modern life.', correct: true },
              { id: 'a', text: 'Atomic clocks have completely eliminated all need for human timekeeping in factories, schools, and modern digital communication networks', correct: false },
              { id: 'c', text: 'Local solar time should be restored as the official basis of daily life in every country around the entire world', correct: false }
            ],
            explanation: 'The passage traces the shift from local approximate time to globally synchronized time, framing it as a foundation for modern life that is often taken for granted.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-16',
        type: 'complete_the_words',
        paragraph: 'My uncle owns a small bak___ in our neighborhood. He gets up at four in the mor___ to start preparing the bread and past___. The shop opens at six, and customers begin lining up bef___ then. The bread comes out of the oven wa___ and crispy. My favorite item is his choc___ croissant. The whole shop smells ama___ when fresh pastries are baking. My uncle has been a baker for twenty ye___. He learned the trade from his fat___, who was also a baker. Even though the work is hard, he says he loves see___ his customers happy.',
        words: [
          { id: 'ctw-m2e-16-w1', position: 0, displayText: 'bak', answer: 'ery', fullWord: 'bakery' },
          { id: 'ctw-m2e-16-w2', position: 1, displayText: 'mor', answer: 'ning', fullWord: 'morning' },
          { id: 'ctw-m2e-16-w3', position: 2, displayText: 'past', answer: 'ries', fullWord: 'pastries' },
          { id: 'ctw-m2e-16-w4', position: 3, displayText: 'bef', answer: 'ore', fullWord: 'before' },
          { id: 'ctw-m2e-16-w5', position: 4, displayText: 'wa', answer: 'rm', fullWord: 'warm' },
          { id: 'ctw-m2e-16-w6', position: 5, displayText: 'choc', answer: 'olate', fullWord: 'chocolate' },
          { id: 'ctw-m2e-16-w7', position: 6, displayText: 'ama', answer: 'zing', fullWord: 'amazing' },
          { id: 'ctw-m2e-16-w8', position: 7, displayText: 'ye', answer: 'ars', fullWord: 'years' },
          { id: 'ctw-m2e-16-w9', position: 8, displayText: 'fat', answer: 'her', fullWord: 'father' },
          { id: 'ctw-m2e-16-w10', position: 9, displayText: 'see', answer: 'ing', fullWord: 'seeing' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-16',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Free Movie Night',
        text: 'The Student Activities Office is hosting a free movie night this Friday, November 17, at 8:00 PM in the auditorium. The film for this week is a popular comedy from last summer. Free popcorn and drinks will be served starting at 7:30 PM. Seating is limited to 200 people, so please arrive early. The movie will end around 10:00 PM. All students are welcome, and no ticket is required.',
        questions: [
          {
            id: 'rdl-notice-m2e-16-q1',
            stem: 'When does the movie start?',
            options: [
              { id: 'c', text: '8:00 PM', correct: true },
              { id: 'd', text: '10:00 PM', correct: false },
              { id: 'a', text: '7:00 PM', correct: false },
              { id: 'b', text: '7:30 PM', correct: false }
            ],
            explanation: 'The notice says the movie starts at 8:00 PM.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-16-q2',
            stem: 'How many people can be seated?',
            options: [
              { id: 'c', text: '200', correct: true },
              { id: 'd', text: '250', correct: false },
              { id: 'a', text: '100', correct: false },
              { id: 'b', text: '150', correct: false }
            ],
            explanation: 'The notice states seating is limited to 200 people.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-16',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Rachel Green',
        from: 'Internship Office',
        date: 'October 30, 2026',
        subject: 'Internship Opportunity',
        body: 'Dear Rachel,\n\nThank you for visiting the internship office last week. I am writing to share a new opportunity that matches your interests. A local environmental organization is offering summer internships to students interested in conservation and sustainability. The internship is paid and lasts ten weeks, from June through August. The deadline to apply is January 15. Please visit our website to read the full job description and submit your application materials.',
        signoff: 'Best of luck,',
        senderName: 'Internship Coordinator',
        questions: [
          {
            id: 'rdl-email-m2e-16-q1',
            stem: 'How long is the internship?',
            options: [
              { id: 'a', text: 'Five weeks', correct: false },
              { id: 'c', text: 'Twelve weeks', correct: false },
              { id: 'b', text: 'Ten weeks', correct: true },
              { id: 'd', text: 'Three months', correct: false }
            ],
            explanation: 'The email states the internship lasts ten weeks.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-16-q2',
            stem: 'When is the application deadline?',
            options: [
              { id: 'a', text: 'December 15', correct: false },
              { id: 'b', text: 'January 15', correct: true },
              { id: 'c', text: 'February 1', correct: false },
              { id: 'd', text: 'March 1', correct: false }
            ],
            explanation: 'The email says the deadline to apply is January 15.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-16-q3',
            stem: 'What kind of organization is offering the internship?',
            options: [
              { id: 'a', text: 'A federal government agency', correct: false },
              { id: 'd', text: 'A public school district', correct: false },
              { id: 'b', text: 'A large technology company', correct: false },
              { id: 'c', text: 'A local environmental organization', correct: true }
            ],
            explanation: 'The email states a local environmental organization is offering the internship.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-16',
        type: 'academic_passage',
        title: 'How Glass Is Made',
        text: 'Glass is a material that has been used by humans for thousands of years. To make glass, workers heat sand to a very high temperature until it melts and becomes a thick liquid. Other materials, such as soda ash and limestone, are added to make the mixture easier to work with. Once the glass cools, it becomes hard and clear.\n\nIn ancient times, glass was made by hand and was very expensive. Only wealthy people could afford glass cups, jars, or windows. The invention of glass-blowing about two thousand years ago made it easier and faster to produce useful shapes. Today, most glass is made in large factories using modern machines. Glass is used to make many everyday items, including bottles, windows, light bulbs, and screens. Recycled glass can be melted and used again, which helps reduce waste.',
        questions: [
          {
            id: 'ap-m2e-16-q1',
            type: 'factual',
            stem: 'What is the main material used to make glass?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Sand', correct: true },
              { id: 'a', text: 'Clay', correct: false },
              { id: 'c', text: 'Plastic', correct: false },
              { id: 'd', text: 'Wood', correct: false }
            ],
            explanation: 'The passage says workers heat sand to a very high temperature to make glass.',
            points: 1
          },
          {
            id: 'ap-m2e-16-q2',
            type: 'factual',
            stem: 'Why was glass expensive in ancient times?',
            highlightText: null,
            options: [
              { id: 'd', text: 'It broke very easily', correct: false },
              { id: 'b', text: 'It was made by hand', correct: true },
              { id: 'c', text: 'Only kings were allowed to use it', correct: false },
              { id: 'a', text: 'It came from a faraway country', correct: false }
            ],
            explanation: 'The passage states that glass was made by hand in ancient times, which made it expensive.',
            points: 1
          },
          {
            id: 'ap-m2e-16-q3',
            type: 'vocabulary',
            stem: 'The phrase "glass-blowing" in paragraph 2 most likely refers to:',
            highlightText: 'glass-blowing',
            options: [
              { id: 'a', text: 'A technique for cooling hot glass very quickly', correct: false },
              { id: 'd', text: 'A technique for cleaning glass surfaces after use', correct: false },
              { id: 'b', text: 'A technique for shaping glass into useful forms', correct: true },
              { id: 'c', text: 'A method for recycling old glass bottles and jars', correct: false }
            ],
            explanation: 'In context, glass-blowing is described as making it easier and faster to produce useful shapes, that is, a shaping technique.',
            points: 1
          },
          {
            id: 'ap-m2e-16-q4',
            type: 'inference',
            stem: 'Why is recycled glass useful?',
            highlightText: null,
            options: [
              { id: 'c', text: 'It is much more colorful than newly made glass', correct: false },
              { id: 'a', text: 'It looks much better than newly made glass', correct: false },
              { id: 'b', text: 'It can be melted and used again, reducing waste', correct: true },
              { id: 'd', text: 'It cannot break under any conditions at all', correct: false }
            ],
            explanation: 'The passage says recycled glass can be melted and used again, which helps reduce waste.',
            points: 1
          },
          {
            id: 'ap-m2e-16-q5',
            type: 'important_idea',
            stem: 'What is the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'a', text: 'Glass is dangerous to use and should be replaced by plastic in most modern products', correct: false },
              { id: 'd', text: 'Glass-blowing is no longer used anywhere in the world to make useful glass objects', correct: false },
              { id: 'b', text: 'Glass has been useful for thousands of years and is now made in modern factories.', correct: true },
              { id: 'c', text: 'Only wealthy people can afford glass cups, jars, and windows in the modern world', correct: false }
            ],
            explanation: 'The passage describes the long history and modern production of glass.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader, which reads window.READING_TEST_16
window.READING_TEST_16 = window.READING_SECTION_16;
