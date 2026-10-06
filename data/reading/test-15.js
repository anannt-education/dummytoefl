window.READING_SECTION_15 = {
  id: 'reading-section-15',
  title: 'Reading Practice Test 15',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-15',
      type: 'complete_the_words',
      paragraph: 'DNA replication is the biolo____ process by which a cell dupli____ its genetic material before divi____. Special enzymes unw____ the double helix and sepa____ the two strands. Each strand then serves as a temp____ for constructing a complem____ copy. This mech____ ensures that daug____ cells receive iden____ genetic information.',
      words: [
        { id: 'ctw-15-w1', position: 0, displayText: 'biolo', answer: 'gical', fullWord: 'biological' },
        { id: 'ctw-15-w2', position: 1, displayText: 'dupli', answer: 'cates', fullWord: 'duplicates' },
        { id: 'ctw-15-w3', position: 2, displayText: 'divi', answer: 'sion', fullWord: 'division' },
        { id: 'ctw-15-w4', position: 3, displayText: 'unw', answer: 'ind', fullWord: 'unwind' },
        { id: 'ctw-15-w5', position: 4, displayText: 'sepa', answer: 'rate', fullWord: 'separate' },
        { id: 'ctw-15-w6', position: 5, displayText: 'temp', answer: 'late', fullWord: 'template' },
        { id: 'ctw-15-w7', position: 6, displayText: 'complem', answer: 'entary', fullWord: 'complementary' },
        { id: 'ctw-15-w8', position: 7, displayText: 'mech', answer: 'anism', fullWord: 'mechanism' },
        { id: 'ctw-15-w9', position: 8, displayText: 'daug', answer: 'hter', fullWord: 'daughter' },
        { id: 'ctw-15-w10', position: 9, displayText: 'iden', answer: 'tical', fullWord: 'identical' }
      ],
      points: 10
    },
    {
      id: 'ctw-15b',
      type: 'complete_the_words',
      paragraph: 'After a protein is synth____ from amino acids, it must fold into a precise three-dimen____ shape to perform its biological func____. The folding process happens in millis____ and is guided by the sequence of amino acids and the surro____ chemical environment. When proteins fold corr____, they can catalyze reactions, transport mole____, or build structural components of cells. Misfolded proteins, however, can clump toge____ and disrupt cellular func____. Several serious diseases, including some forms of dementia, are linked to defec____ in protein folding.',
      words: [
        { id: 'ctw-15b-w1', position: 0, displayText: 'synth', answer: 'esized', fullWord: 'synthesized' },
        { id: 'ctw-15b-w2', position: 1, displayText: 'dimen', answer: 'sional', fullWord: 'dimensional' },
        { id: 'ctw-15b-w3', position: 2, displayText: 'func', answer: 'tion', fullWord: 'function' },
        { id: 'ctw-15b-w4', position: 3, displayText: 'millis', answer: 'econds', fullWord: 'milliseconds' },
        { id: 'ctw-15b-w5', position: 4, displayText: 'surro', answer: 'unding', fullWord: 'surrounding' },
        { id: 'ctw-15b-w6', position: 5, displayText: 'corr', answer: 'ectly', fullWord: 'correctly' },
        { id: 'ctw-15b-w7', position: 6, displayText: 'mole', answer: 'cules', fullWord: 'molecules' },
        { id: 'ctw-15b-w8', position: 7, displayText: 'toge', answer: 'ther', fullWord: 'together' },
        { id: 'ctw-15b-w9', position: 8, displayText: 'func', answer: 'tion', fullWord: 'function' },
        { id: 'ctw-15b-w10', position: 9, displayText: 'defec', answer: 'ts', fullWord: 'defects' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-15',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Campus Construction Notice',
      to: 'All Students and Staff',
      from: 'facilities@edgewooduniv.edu',
      date: '04/11/2026',
      subject: 'Temporary Walkway Closure - Science Wing Renovation',
      body: 'Dear Campus Community,\n\nDue to renovation work on the Science Wing, the pedestrian walkway between the Science Building and the Student Center will be closed from April 15 through May 30. A temporary detour route has been marked with signs, adding approximately three minutes to the walk. Construction activity will occur between 7:00 A.M. and 5:00 P.M. on weekdays. Noise levels may be elevated during this time.\n\nWe appreciate your patience as we work to improve campus facilities. Questions may be directed to the Facilities Management Office.',
      signoff: 'Thank you,',
      senderName: 'Facilities Management Office\nEdgewood University',
      questions: [
        {
          id: 'rdl-email-15-q1',
          stem: 'How long will the walkway be closed?',
          options: [
            { id: 'd', text: 'The entire summer break', correct: false },
            { id: 'c', text: 'About three full months', correct: false },
            { id: 'b', text: 'About six weeks', correct: true },
            { id: 'a', text: 'About two weeks', correct: false }
          ],
          explanation: 'The walkway will be closed from April 15 through May 30, which is approximately six weeks.',
          points: 1
        },
        {
          id: 'rdl-email-15-q2',
          stem: 'How much extra time will the detour route add?',
          options: [
            { id: 'b', text: 'About three minutes', correct: true },
            { id: 'a', text: 'About one minute', correct: false },
            { id: 'c', text: 'About five minutes', correct: false },
            { id: 'd', text: 'About ten minutes', correct: false }
          ],
          explanation: 'The email states that the temporary detour route adds approximately three minutes to the walk.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-15',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Research Project Task Division',
      messages: [
        { sender: 'Diana Foster', time: '8:00 P.M.', text: 'Our research paper for Environmental Science is due in three weeks. Professor Hayes wants a 15-page paper with at least 20 sources. Let us divide the work tonight.' },
        { sender: 'Kevin Ortiz', time: '8:04 P.M.', text: 'I can handle the data collection and statistical analysis sections. I already have access to the environmental database through the library.' },
        { sender: 'Sana Mirza', time: '8:08 P.M.', text: 'I will write the literature review. How many sources should I cover in that section?' },
        { sender: 'Diana Foster', time: '8:11 P.M.', text: 'Aim for at least twelve sources in the literature review. Kevin and I can use the remaining eight across our sections. I will take the introduction, discussion, and conclusion.' },
        { sender: 'Kevin Ortiz', time: '8:15 P.M.', text: 'That sounds balanced. What citation format are we using? APA or Chicago?' },
        { sender: 'Diana Foster', time: '8:18 P.M.', text: 'Professor Hayes specified APA 7th edition. I will set up a shared document with the correct formatting tonight so we all start from the same template.' },
        { sender: 'Sana Mirza', time: '8:21 P.M.', text: 'Perfect. Let us set a checkpoint for next Friday so we can review each other\'s progress and make sure our sections fit together.' }
      ],
      questions: [
        {
          id: 'rdl-tc-15-q1',
          stem: 'How many sources must the paper include in total?',
          options: [
            { id: 'd', text: 'Twenty-five', correct: false },
            { id: 'b', text: 'Fifteen', correct: false },
            { id: 'a', text: 'Twelve', correct: false },
            { id: 'c', text: 'Twenty', correct: true }
          ],
          explanation: 'Diana states that Professor Hayes wants a paper with at least 20 sources total.',
          points: 1
        },
        {
          id: 'rdl-tc-15-q2',
          stem: 'What citation format will the group use?',
          options: [
            { id: 'a', text: 'MLA 9th edition', correct: false },
            { id: 'c', text: 'APA 7th edition', correct: true },
            { id: 'b', text: 'Chicago 17th edition', correct: false },
            { id: 'd', text: 'Harvard referencing style', correct: false }
          ],
          explanation: 'Diana says Professor Hayes specified APA 7th edition for the paper.',
          points: 1
        },
        {
          id: 'rdl-tc-15-q3',
          stem: 'What does Sana suggest doing next Friday?',
          options: [
            { id: 'b', text: 'Meeting at the library to write together', correct: false },
            { id: 'c', text: 'Reviewing each other\'s progress as a checkpoint', correct: true },
            { id: 'd', text: 'Presenting their research findings to the class', correct: false },
            { id: 'a', text: 'Submitting a complete draft to the professor', correct: false }
          ],
          explanation: 'Sana suggests setting a checkpoint for next Friday so they can review each other\'s progress and make sure their sections fit together.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-15',
      type: 'academic_passage',
      title: 'The Psychology of Color',
      text: 'Color influences human perception and behavior in ways that are both profound and often unconscious. From the design of consumer products to the layout of hospital rooms, the strategic use of color has become an important consideration in fields ranging from marketing to healthcare. While cultural associations with specific colors vary widely, research suggests that certain physiological and psychological responses to color are shared across populations.\n\nWarm colors such as red, orange, and yellow tend to stimulate arousal and heighten emotional intensity. Red, in particular, has been shown to increase heart rate and attract attention, which is why it is commonly used in warning signs and sales advertisements. Studies have found that diners in restaurants with red interiors tend to eat faster and spend more than those in cooler-toned environments. Yellow, while associated with optimism, can cause visual fatigue in large amounts due to its high reflectance.\n\nCool colors such as blue, green, and purple generally produce calming effects. Blue is frequently chosen for office environments and healthcare settings because research indicates it lowers blood pressure and promotes concentration. Green, strongly associated with nature, has been linked to reduced stress and enhanced creativity. Hospitals and rehabilitation centers often incorporate green elements in their design to support patient recovery and psychological well-being.\n\nDespite these general patterns, the psychology of color is far from a precise science. Individual responses to color are shaped by personal experiences, cultural background, and context. A color that feels energizing in one setting may feel oppressive in another. Moreover, much of the popular literature on color psychology oversimplifies research findings or extrapolates beyond what the evidence supports. Rigorous studies tend to show modest effects that interact with numerous other variables, cautioning against the assumption that color alone determines mood or behavior.',
      questions: [
        {
          id: 'ap-15-q1',
          type: 'factual',
          stem: 'According to the passage, why is red commonly used in warning signs and sales advertisements?',
          highlightText: null,
          options: [
            { id: 'b', text: 'It increases heart rate and attracts attention', correct: true },
            { id: 'c', text: 'It is universally associated with danger across all cultures', correct: false },
            { id: 'd', text: 'It has been shown to improve reading comprehension', correct: false },
            { id: 'a', text: 'It is the most visible color in low-light conditions', correct: false }
          ],
          explanation: 'The passage states that red increases heart rate and attracts attention, which is why it is used in warning signs and advertisements.',
          points: 1
        },
        {
          id: 'ap-15-q2',
          type: 'vocabulary',
          stem: 'The word "extrapolates" in paragraph 4 is closest in meaning to:',
          highlightText: 'extrapolates',
          options: [
            { id: 'd', text: 'Collects new data through original experiments', correct: false },
            { id: 'c', text: 'Contradicts findings established by earlier research', correct: false },
            { id: 'b', text: 'Summarizes research findings accurately and fully', correct: false },
            { id: 'a', text: 'Extends conclusions beyond the available data', correct: true }
          ],
          explanation: '"Extrapolates" means to extend the application of something beyond the known range. Here it describes how popular literature draws conclusions that go beyond what research actually supports.',
          points: 1
        },
        {
          id: 'ap-15-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that a hospital designer would most likely choose which color scheme for a patient recovery room?',
          highlightText: null,
          options: [
            { id: 'b', text: 'Green and blue tones', correct: true },
            { id: 'd', text: 'Black and white only', correct: false },
            { id: 'c', text: 'Large amounts of yellow', correct: false },
            { id: 'a', text: 'Bright red and orange walls', correct: false }
          ],
          explanation: 'The passage notes that green is linked to reduced stress and patient recovery, and blue promotes calmness and lowers blood pressure, making both ideal choices for healthcare settings.',
          points: 1
        },
        {
          id: 'ap-15-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 2 and paragraph 3?',
          highlightText: null,
          options: [
            { id: 'a', text: 'Paragraph 2 discusses the effects of warm colors, and paragraph 3 discusses the effects of cool colors.', correct: true },
            { id: 'd', text: 'Paragraph 2 describes the positive effects of color, and paragraph 3 describes the negative effects of color.', correct: false },
            { id: 'b', text: 'Paragraph 2 presents the results of scientific studies, and paragraph 3 presents anecdotal reports from individuals.', correct: false },
            { id: 'c', text: 'Both paragraphs discuss the same set of colors from different cultural perspectives around the world.', correct: false }
          ],
          explanation: 'Paragraph 2 focuses on warm colors (red, orange, yellow) and their stimulating effects, while paragraph 3 focuses on cool colors (blue, green, purple) and their calming effects.',
          points: 1
        },
        {
          id: 'ap-15-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'd', text: 'Cultural background alone determines how a person responds to color, and shared physical responses play no part.', correct: false },
            { id: 'b', text: 'Color has measurable effects on perception and behavior, but individual responses vary and popular claims often overstate the evidence.', correct: true },
            { id: 'a', text: 'Red is the most powerful color for influencing human behavior, and other colors have little measurable effect.', correct: false },
            { id: 'c', text: 'Hospitals should use only green and blue in their interior design, since warm colors would harm patient recovery.', correct: false }
          ],
          explanation: 'The passage explains that color does influence mood and behavior through general patterns but cautions that effects are modest, variable, and often overstated in popular literature.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-15',
        type: 'complete_the_words',
        paragraph: 'Genetic engin____ allows scientists to modify the DNA of orga____ for a variety of purp____. In agriculture, genetically modified crops have been deve____ to resist pests and tolerate harsh enviro____ conditions. Medical resea____ use gene-editing tools like CRISPR to inves____ potential treatments for hered____ diseases. However, ethical deb____ surround the long-term conseq____ of altering genetic material.',
        words: [
          { id: 'ctw-m2-15-w1', position: 0, displayText: 'engin', answer: 'eering', fullWord: 'engineering' },
          { id: 'ctw-m2-15-w2', position: 1, displayText: 'orga', answer: 'nisms', fullWord: 'organisms' },
          { id: 'ctw-m2-15-w3', position: 2, displayText: 'purp', answer: 'oses', fullWord: 'purposes' },
          { id: 'ctw-m2-15-w4', position: 3, displayText: 'deve', answer: 'loped', fullWord: 'developed' },
          { id: 'ctw-m2-15-w5', position: 4, displayText: 'enviro', answer: 'nmental', fullWord: 'environmental' },
          { id: 'ctw-m2-15-w6', position: 5, displayText: 'resea', answer: 'rchers', fullWord: 'researchers' },
          { id: 'ctw-m2-15-w7', position: 6, displayText: 'inves', answer: 'tigate', fullWord: 'investigate' },
          { id: 'ctw-m2-15-w8', position: 7, displayText: 'hered', answer: 'itary', fullWord: 'hereditary' },
          { id: 'ctw-m2-15-w9', position: 8, displayText: 'deb', answer: 'ates', fullWord: 'debates' },
          { id: 'ctw-m2-15-w10', position: 9, displayText: 'conseq', answer: 'uences', fullWord: 'consequences' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-15',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Flu Vaccination Clinic',
        text: 'The Campus Health Center will offer free flu vaccinations to all students, faculty, and staff on October 20 and October 21 from 10:00 AM to 3:00 PM in the lobby of the Wellness Building. No appointment is necessary. Please bring your student or employee ID card. Individuals with egg allergies should inform the nurse before receiving the vaccine. Those who have already received a flu shot this season do not need another one. For more information, contact the Health Center at extension 3100.',
        questions: [
          {
            id: 'rdl-notice-m2-15-q1',
            stem: 'Who is eligible to receive the free flu vaccination?',
            options: [
              { id: 'b', text: 'Faculty and staff only, not students', correct: false },
              { id: 'c', text: 'All students, faculty, and staff', correct: true },
              { id: 'd', text: 'Only those with a doctor\'s referral', correct: false },
              { id: 'a', text: 'Students only, not faculty or staff', correct: false }
            ],
            explanation: 'The notice states the free flu vaccinations are available to all students, faculty, and staff.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-15-q2',
            stem: 'What should individuals with egg allergies do?',
            options: [
              { id: 'a', text: 'Avoid getting the vaccination entirely this season', correct: false },
              { id: 'b', text: 'Inform the nurse before receiving the vaccine', correct: true },
              { id: 'c', text: 'Bring a written note from their doctor', correct: false },
              { id: 'd', text: 'Schedule a separate appointment with the nurse', correct: false }
            ],
            explanation: 'The notice says individuals with egg allergies should inform the nurse before receiving the vaccine.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-15',
        type: 'read_daily_life',
        textType: 'email',
        to: 'All Undergraduate and Graduate Students',
        from: 'Career Development Center',
        date: 'February 5, 2026',
        subject: 'Spring Career Fair Registration',
        body: 'The annual Spring Career Fair will take place on March 12 from 10:00 AM to 4:00 PM in the Convention Hall. Over eighty employers from industries including technology, healthcare, finance, and education will be present. Students must register online through the Career Portal by March 5 to receive a name badge and access the list of attending companies. Professional attire is required. We strongly recommend bringing at least twenty copies of your updated resume. Workshops on resume writing and interview skills will be offered the week before the fair. Check the Career Portal for the workshop schedule.',
        signoff: 'See you there,',
        senderName: 'Career Development Center',
        questions: [
          {
            id: 'rdl-email-m2-15-q1',
            stem: 'How many employers are expected to attend?',
            options: [
              { id: 'b', text: 'Over eighty', correct: true },
              { id: 'd', text: 'More than one hundred twenty', correct: false },
              { id: 'c', text: 'Approximately one hundred', correct: false },
              { id: 'a', text: 'Fewer than fifty', correct: false }
            ],
            explanation: 'The email states over eighty employers will be present.',
            points: 1
          },
          {
            id: 'rdl-email-m2-15-q2',
            stem: 'What is the registration deadline?',
            options: [
              { id: 'a', text: 'February 28', correct: false },
              { id: 'd', text: 'March 12', correct: false },
              { id: 'b', text: 'March 1', correct: false },
              { id: 'c', text: 'March 5', correct: true }
            ],
            explanation: 'The email says students must register by March 5.',
            points: 1
          },
          {
            id: 'rdl-email-m2-15-q3',
            stem: 'What will be offered the week before the career fair?',
            options: [
              { id: 'a', text: 'Information sessions on individual companies and industries', correct: false },
              { id: 'b', text: 'Networking dinners with visiting employers and alumni', correct: false },
              { id: 'd', text: 'Practice simulations of the career fair experience', correct: false },
              { id: 'c', text: 'Workshops on resume writing and interview skills', correct: true }
            ],
            explanation: 'The email states workshops on resume writing and interview skills will be offered the week before the fair.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-15',
        type: 'academic_passage',
        title: 'The Development of Public Postal Systems',
        text: 'For most of history, sending a written message over any significant distance was slow, expensive, and uncertain. Letters were carried by traveling merchants, paid couriers, or government messengers, and arrival often depended on the goodwill or financial circumstances of whoever happened to be heading in the right direction. The transition to systematic, government-supported postal services available to ordinary citizens transformed not just communication but also commerce, family life, and political participation.\n\nThe Roman Empire operated one of the earliest sophisticated postal systems, with stations along major roads where messengers could change horses and rest. This network allowed information and orders to travel across the vast empire with remarkable speed for the time. After the empire fragmented, organized postal systems largely disappeared in Europe, though private courier networks continued to serve merchants and political leaders willing to pay for them.\n\nThe modern public postal system, in which a government agency delivers mail to ordinary citizens at standardized rates, emerged in the nineteenth century. Britain led the way with the Penny Post reform in 1840, which introduced prepaid postage stamps and a flat rate for letters regardless of distance. The reform dramatically increased mail volume and made personal correspondence affordable for the first time for many working-class families. Other countries quickly adopted similar systems, and an international postal union established cooperation across borders by 1874.\n\nReliable mail had wider effects that historians have only recently begun to appreciate. Mail-order businesses brought a far wider range of goods within reach of rural consumers. Newspapers and magazines could be distributed at affordable prices, broadening political awareness. Family members separated by emigration could maintain regular contact across continents. The postal system also became a model for later public services, demonstrating that complex networks could be operated reliably for the general welfare. While the rise of digital communication has reduced the volume of physical mail, postal systems remain critical infrastructure for parcels, official documents, and the many people who lack reliable internet access.',
        questions: [
          {
            id: 'ap-m2-15-q1',
            type: 'factual',
            stem: 'According to the passage, what did the British Penny Post reform of 1840 introduce?',
            highlightText: null,
            options: [
              { id: 'a', text: 'The first organized postal system anywhere in recorded history', correct: false },
              { id: 'd', text: 'International cooperation between the postal systems of different countries', correct: false },
              { id: 'c', text: 'A completely free mail service for working-class families across Britain', correct: false },
              { id: 'b', text: 'Prepaid postage stamps and a flat rate regardless of distance', correct: true }
            ],
            explanation: 'The passage describes the Penny Post reform as introducing prepaid postage stamps and a flat rate for letters regardless of distance.',
            points: 1
          },
          {
            id: 'ap-m2-15-q2',
            type: 'vocabulary',
            stem: 'The word "fragmented" in paragraph 2 most nearly means:',
            highlightText: 'fragmented',
            options: [
              { id: 'a', text: 'Reorganized itself for greater efficiency', correct: false },
              { id: 'b', text: 'Broke apart into separate pieces', correct: true },
              { id: 'c', text: 'Adopted several new communication technologies', correct: false },
              { id: 'd', text: 'Expanded outward into new foreign territory', correct: false }
            ],
            explanation: 'In context, "the empire fragmented" describes the Roman Empire breaking apart into separate political pieces.',
            points: 1
          },
          {
            id: 'ap-m2-15-q3',
            type: 'inference',
            stem: 'What can be inferred about postal services before the nineteenth century?',
            highlightText: null,
            options: [
              { id: 'b', text: 'They were universally free for ordinary citizens everywhere in Europe', correct: false },
              { id: 'a', text: 'They served primarily the wealthy and powerful, not ordinary citizens', correct: true },
              { id: 'c', text: 'They had standardized rates across all regions and distances', correct: false },
              { id: 'd', text: 'They were operated entirely by agreement between national governments', correct: false }
            ],
            explanation: 'The passage describes pre-modern mail as expensive and uncertain, served by paid couriers, suggesting access was limited to those who could afford it.',
            points: 1
          },
          {
            id: 'ap-m2-15-q4',
            type: 'paragraph_relationships',
            stem: 'How does paragraph 4 relate to paragraph 3?',
            highlightText: null,
            options: [
              { id: 'd', text: 'It introduces a different communication technology that came to replace the postal system entirely.', correct: false },
              { id: 'a', text: 'It contradicts the account of the Penny Post\'s success given earlier in paragraph 3.', correct: false },
              { id: 'c', text: 'It returns to the topic of the Roman postal system introduced in paragraph 2.', correct: false },
              { id: 'b', text: 'It explores the broader social and economic effects of the postal reforms described in paragraph 3.', correct: true }
            ],
            explanation: 'Paragraph 4 traces the wider effects of the modern postal system established in paragraph 3, from commerce to family life to political awareness.',
            points: 1
          },
          {
            id: 'ap-m2-15-q5',
            type: 'important_idea',
            stem: 'Which best expresses the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'd', text: 'International cooperation between countries is the single most important feature of any modern postal system.', correct: false },
              { id: 'b', text: 'The Roman postal system was the most efficient network of its kind ever created anywhere.', correct: false },
              { id: 'a', text: 'The development of public postal systems transformed communication and had far-reaching effects on commerce, family life, and politics.', correct: true },
              { id: 'c', text: 'Digital communication has made postal services completely unnecessary for most people in modern daily life.', correct: false }
            ],
            explanation: 'The passage traces the postal system from limited courier networks to public infrastructure with broad social effects, framing this as a transformative development.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-15',
        type: 'complete_the_words',
        paragraph: 'Last winter my family rented a cabin in the moun___ for a week. We loved waking up to fresh snow on the gro___. Each morning we made hot choc___ and sat by the fire. During the day we went ski___ at a small res___ nearby. The slopes were perfect for begi___ like my younger sister. In the evenings we played board ga___ and read books. The cabin had a beau___ view of snow-covered tr___. We ate dinner together every night and talked about our day. It was the best vaca___ our family has ever taken together.',
        words: [
          { id: 'ctw-m2e-15-w1', position: 0, displayText: 'moun', answer: 'tains', fullWord: 'mountains' },
          { id: 'ctw-m2e-15-w2', position: 1, displayText: 'gro', answer: 'und', fullWord: 'ground' },
          { id: 'ctw-m2e-15-w3', position: 2, displayText: 'choc', answer: 'olate', fullWord: 'chocolate' },
          { id: 'ctw-m2e-15-w4', position: 3, displayText: 'ski', answer: 'ing', fullWord: 'skiing' },
          { id: 'ctw-m2e-15-w5', position: 4, displayText: 'res', answer: 'ort', fullWord: 'resort' },
          { id: 'ctw-m2e-15-w6', position: 5, displayText: 'begi', answer: 'nners', fullWord: 'beginners' },
          { id: 'ctw-m2e-15-w7', position: 6, displayText: 'ga', answer: 'mes', fullWord: 'games' },
          { id: 'ctw-m2e-15-w8', position: 7, displayText: 'beau', answer: 'tiful', fullWord: 'beautiful' },
          { id: 'ctw-m2e-15-w9', position: 8, displayText: 'tr', answer: 'ees', fullWord: 'trees' },
          { id: 'ctw-m2e-15-w10', position: 9, displayText: 'vaca', answer: 'tion', fullWord: 'vacation' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-15',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Bookstore Sale',
        text: 'The campus bookstore is holding a year-end sale from December 4 through December 15. All clothing items will be 30 percent off, and selected textbooks will be reduced by 50 percent. Used books are also available at lower prices. Sale items cannot be combined with other discounts. The bookstore will have extended hours during the sale, opening at 8:00 AM and closing at 9:00 PM. All sales are final.',
        questions: [
          {
            id: 'rdl-notice-m2e-15-q1',
            stem: 'How long does the sale last?',
            options: [
              { id: 'b', text: 'Ten days', correct: false },
              { id: 'a', text: 'Five days', correct: false },
              { id: 'c', text: 'Twelve days', correct: true },
              { id: 'd', text: 'Two weeks', correct: false }
            ],
            explanation: 'The sale runs from December 4 through December 15, which is twelve days.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-15-q2',
            stem: 'What is the discount on clothing?',
            options: [
              { id: 'a', text: '20 percent off', correct: false },
              { id: 'd', text: '50 percent off', correct: false },
              { id: 'c', text: '40 percent off', correct: false },
              { id: 'b', text: '30 percent off', correct: true }
            ],
            explanation: 'The notice states that all clothing items will be 30 percent off.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-15',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Olivia Martinez',
        from: 'Volunteer Coordinator',
        date: 'November 18, 2026',
        subject: 'Holiday Toy Drive',
        body: 'Dear Olivia,\n\nThank you for volunteering for the holiday toy drive this year. Donations will be collected from December 1 through December 18 in the lobby of the Student Union. As a volunteer, you will help sort the donated toys and pack them for delivery. We need volunteers for two-hour shifts, mostly on weekday afternoons. Please reply with three time slots that work for you. We will send you a final schedule by November 25.',
        signoff: 'Thanks again,',
        senderName: 'Volunteer Coordinator',
        questions: [
          {
            id: 'rdl-email-m2e-15-q1',
            stem: 'When are donations being collected?',
            options: [
              { id: 'd', text: 'November 1 to November 30', correct: false },
              { id: 'c', text: 'December 5 to December 25', correct: false },
              { id: 'b', text: 'December 1 to December 18', correct: true },
              { id: 'a', text: 'November 18 to December 1', correct: false }
            ],
            explanation: 'The email states donations are collected from December 1 to December 18.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-15-q2',
            stem: 'How long is each volunteer shift?',
            options: [
              { id: 'c', text: 'Three hours', correct: false },
              { id: 'b', text: 'Two hours', correct: true },
              { id: 'd', text: 'A full day', correct: false },
              { id: 'a', text: 'One hour', correct: false }
            ],
            explanation: 'The email says volunteers are needed for two-hour shifts.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-15-q3',
            stem: 'What does the coordinator ask Olivia to do?',
            options: [
              { id: 'd', text: 'Decorate the lobby of the Student Union for the event', correct: false },
              { id: 'a', text: 'Bring extra toys of her own to donate', correct: false },
              { id: 'b', text: 'Reply with three time slots that work for her', correct: true },
              { id: 'c', text: 'Recruit more student volunteers from her own dorm', correct: false }
            ],
            explanation: 'The email asks Olivia to reply with three time slots that work for her.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-15',
        type: 'academic_passage',
        title: 'How Bridges Are Designed',
        text: 'Bridges are essential for modern transportation, allowing people and vehicles to cross rivers, valleys, and other obstacles. Engineers must consider many factors when designing a bridge, including the weight it must carry, the materials available, and the conditions of the surrounding land.\n\nThere are several common types of bridges. Beam bridges are the simplest design, using straight horizontal supports between two points. Arch bridges use curved structures that push the weight outward to the supports on either end. Suspension bridges, like the Golden Gate Bridge in San Francisco, use long cables to hold up the road from above. Each type works best for different situations. For example, suspension bridges are useful for crossing very wide spaces, while beam bridges are practical for shorter crossings. Once a bridge is built, regular inspections are needed to make sure it remains safe for many years of use.',
        questions: [
          {
            id: 'ap-m2e-15-q1',
            type: 'factual',
            stem: 'What is the simplest type of bridge mentioned?',
            highlightText: null,
            options: [
              { id: 'a', text: 'Suspension bridge', correct: false },
              { id: 'c', text: 'Arch bridge', correct: false },
              { id: 'b', text: 'Beam bridge', correct: true },
              { id: 'd', text: 'Floating bridge', correct: false }
            ],
            explanation: 'The passage states that beam bridges are the simplest design.',
            points: 1
          },
          {
            id: 'ap-m2e-15-q2',
            type: 'factual',
            stem: 'What is the Golden Gate Bridge an example of?',
            highlightText: null,
            options: [
              { id: 'b', text: 'An arch bridge', correct: false },
              { id: 'd', text: 'A floating bridge', correct: false },
              { id: 'c', text: 'A suspension bridge', correct: true },
              { id: 'a', text: 'A beam bridge', correct: false }
            ],
            explanation: 'The passage uses the Golden Gate Bridge as an example of a suspension bridge.',
            points: 1
          },
          {
            id: 'ap-m2e-15-q3',
            type: 'vocabulary',
            stem: 'The word "obstacles" in paragraph 1 most likely means:',
            highlightText: 'obstacles',
            options: [
              { id: 'b', text: 'Things that block the way', correct: true },
              { id: 'c', text: 'Long roads between distant cities', correct: false },
              { id: 'a', text: 'Tall buildings along the road', correct: false },
              { id: 'd', text: 'Cars and trucks on the road', correct: false }
            ],
            explanation: 'In context, "obstacles" refers to things that block the way, like rivers and valleys.',
            points: 1
          },
          {
            id: 'ap-m2e-15-q4',
            type: 'inference',
            stem: 'Why might engineers choose a suspension bridge?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Because it can cross very wide spaces', correct: true },
              { id: 'a', text: 'Because it is the cheapest design available', correct: false },
              { id: 'c', text: 'Because it requires no maintenance or inspections', correct: false },
              { id: 'd', text: 'Because it can be built without engineers', correct: false }
            ],
            explanation: 'The passage says suspension bridges are useful for crossing very wide spaces.',
            points: 1
          },
          {
            id: 'ap-m2e-15-q5',
            type: 'important_idea',
            stem: 'What is the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Different bridges are designed for different situations, and inspections keep them safe.', correct: true },
              { id: 'a', text: 'Bridges are no longer needed for transportation in most modern cities.', correct: false },
              { id: 'c', text: 'Suspension bridges are the only type that can safely carry heavy weights.', correct: false },
              { id: 'd', text: 'All bridges are built from the same materials in the same way.', correct: false }
            ],
            explanation: 'The passage explains the different types of bridges, why each is used, and the need for ongoing inspections.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader, which reads window.READING_TEST_15
window.READING_TEST_15 = window.READING_SECTION_15;
