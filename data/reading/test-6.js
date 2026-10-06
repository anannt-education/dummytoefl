window.READING_SECTION_6 = {
  id: 'reading-section-6',
  title: 'Reading Practice Test 6',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-6',
      type: 'complete_the_words',
      paragraph: 'Renewable energy sources are beco____ increasingly vital as the world seeks altern____ to fossil fuels. Solar panels harv____ sunlight and convert it into elect____ through photovoltaic cells. Wind turb____ generate power by capt____ kinetic energy from moving air. These susta____ technologies reduce carbon emis____ and help miti____ the effects of global war____.',
      words: [
        { id: 'ctw-6-w1', position: 0, displayText: 'beco', answer: 'ming', fullWord: 'becoming' },
        { id: 'ctw-6-w2', position: 1, displayText: 'altern', answer: 'atives', fullWord: 'alternatives' },
        { id: 'ctw-6-w3', position: 2, displayText: 'harv', answer: 'est', fullWord: 'harvest' },
        { id: 'ctw-6-w4', position: 3, displayText: 'elect', answer: 'ricity', fullWord: 'electricity' },
        { id: 'ctw-6-w5', position: 4, displayText: 'turb', answer: 'ines', fullWord: 'turbines' },
        { id: 'ctw-6-w6', position: 5, displayText: 'capt', answer: 'uring', fullWord: 'capturing' },
        { id: 'ctw-6-w7', position: 6, displayText: 'susta', answer: 'inable', fullWord: 'sustainable' },
        { id: 'ctw-6-w8', position: 7, displayText: 'emis', answer: 'sions', fullWord: 'emissions' },
        { id: 'ctw-6-w9', position: 8, displayText: 'miti', answer: 'gate', fullWord: 'mitigate' },
        { id: 'ctw-6-w10', position: 9, displayText: 'war', answer: 'ming', fullWord: 'warming' }
      ],
      points: 10
    },
    {
      id: 'ctw-6b',
      type: 'complete_the_words',
      paragraph: 'Battery storage has become a crit____ technology for managing elect____ from renewable sources. Solar and wind energy gene____ power only when conditions are favor____, so storing surplus energy is esse____ for a stable grid. Modern lit____ batteries can charge and disc____ thousands of times before signi____ degra____. Researchers are developing new chemistries that promise greater capac____ and faster recharging while reducing the use of rare materials.',
      words: [
        { id: 'ctw-6b-w1', position: 0, displayText: 'crit', answer: 'ical', fullWord: 'critical' },
        { id: 'ctw-6b-w2', position: 1, displayText: 'elect', answer: 'ricity', fullWord: 'electricity' },
        { id: 'ctw-6b-w3', position: 2, displayText: 'gene', answer: 'rate', fullWord: 'generate' },
        { id: 'ctw-6b-w4', position: 3, displayText: 'favor', answer: 'able', fullWord: 'favorable' },
        { id: 'ctw-6b-w5', position: 4, displayText: 'esse', answer: 'ntial', fullWord: 'essential' },
        { id: 'ctw-6b-w6', position: 5, displayText: 'lit', answer: 'hium', fullWord: 'lithium' },
        { id: 'ctw-6b-w7', position: 6, displayText: 'disc', answer: 'harge', fullWord: 'discharge' },
        { id: 'ctw-6b-w8', position: 7, displayText: 'signi', answer: 'ficant', fullWord: 'significant' },
        { id: 'ctw-6b-w9', position: 8, displayText: 'degra', answer: 'dation', fullWord: 'degradation' },
        { id: 'ctw-6b-w10', position: 9, displayText: 'capac', answer: 'ity', fullWord: 'capacity' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-6',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Course Registration Changes',
      to: 'All Undergraduate Students',
      from: 'registrar@ridgemontuniv.edu',
      date: '04/05/2026',
      subject: 'Important Changes to Fall Course Registration',
      body: 'Dear Students,\n\nPlease note that the Fall 2026 course registration system has been updated. Starting this semester, students must meet with their academic advisor and obtain an advising hold release before registering for courses. Registration opens by class standing: seniors on April 20, juniors on April 22, sophomores on April 24, and freshmen on April 26. Students who do not clear their advising hold will be unable to register until the open enrollment period begins on May 1.\n\nPlease schedule your advising appointment promptly.',
      signoff: 'Regards,',
      senderName: 'Office of the Registrar\nRidgemont University',
      questions: [
        {
          id: 'rdl-email-6-q1',
          stem: 'What must students do before they can register for courses?',
          options: [
            { id: 'd', text: 'Submit their course preferences through an online survey form', correct: false },
            { id: 'a', text: 'Pay their tuition balance in full before the deadline', correct: false },
            { id: 'b', text: 'Complete an online orientation module before the term begins', correct: false },
            { id: 'c', text: 'Meet with their academic advisor for a hold release', correct: true }
          ],
          explanation: 'The email states that students must meet with their academic advisor and obtain an advising hold release before registering.',
          points: 1
        },
        {
          id: 'rdl-email-6-q2',
          stem: 'When does registration open for sophomores?',
          options: [
            { id: 'b', text: 'April 22', correct: false },
            { id: 'a', text: 'April 20', correct: false },
            { id: 'd', text: 'April 26', correct: false },
            { id: 'c', text: 'April 24', correct: true }
          ],
          explanation: 'The email specifies the registration schedule: seniors on April 20, juniors on April 22, sophomores on April 24, and freshmen on April 26.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-6',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Sports Tournament Scheduling',
      messages: [
        { sender: 'Kenji Watanabe', time: '2:30 P.M.', text: 'The intramural basketball tournament bracket just came out. Our first game is Saturday at 11 A.M. in Gym B.' },
        { sender: 'Amir Hassan', time: '2:34 P.M.', text: 'Nice! Who are we playing first?' },
        { sender: 'Kenji Watanabe', time: '2:36 P.M.', text: 'The Engineering Department team. They were runners-up last year, so it will be a tough opener.' },
        { sender: 'Grace Liu', time: '2:40 P.M.', text: 'We should probably have a practice session before then. How about Thursday evening at 7?' },
        { sender: 'Amir Hassan', time: '2:43 P.M.', text: 'Thursday works for me. I can reserve the court for an hour.' },
        { sender: 'Kenji Watanabe', time: '2:46 P.M.', text: 'Perfect. Everyone remember to bring your student ID for the tournament check-in. They are strict about that.' },
        { sender: 'Grace Liu', time: '2:49 P.M.', text: 'Got it. I will also bring the team jerseys. I picked them up from the print shop yesterday.' }
      ],
      questions: [
        {
          id: 'rdl-tc-6-q1',
          stem: 'What is notable about the opposing team?',
          options: [
            { id: 'a', text: 'They have never played in the tournament before', correct: false },
            { id: 'b', text: 'They were runners-up in the previous year', correct: true },
            { id: 'd', text: 'They have the same coach as last season', correct: false },
            { id: 'c', text: 'They are from a rival university', correct: false }
          ],
          explanation: 'Kenji mentions that the Engineering Department team were runners-up last year, indicating they are a strong opponent.',
          points: 1
        },
        {
          id: 'rdl-tc-6-q2',
          stem: 'What does Amir offer to do for the practice session?',
          options: [
            { id: 'b', text: 'Reserve the court for an hour', correct: true },
            { id: 'a', text: 'Bring extra basketballs to the gym', correct: false },
            { id: 'c', text: 'Organize a scrimmage with another team', correct: false },
            { id: 'd', text: 'Invite a coach to observe the practice', correct: false }
          ],
          explanation: 'Amir says he can reserve the court for an hour for the Thursday practice session.',
          points: 1
        },
        {
          id: 'rdl-tc-6-q3',
          stem: 'What must team members bring to the tournament?',
          options: [
            { id: 'd', text: 'A medical clearance form', correct: false },
            { id: 'a', text: 'A signed waiver', correct: false },
            { id: 'c', text: 'Their student ID', correct: true },
            { id: 'b', text: 'Their own basketball shoes', correct: false }
          ],
          explanation: 'Kenji reminds everyone to bring their student ID for the tournament check-in, noting that the organizers are strict about it.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-6',
      type: 'academic_passage',
      title: 'Ancient Egyptian Agriculture',
      text: 'The civilization of ancient Egypt owed its remarkable longevity in large part to the agricultural system that sustained it. For more than three thousand years, Egyptian farmers relied on the annual flooding of the Nile River to deposit a layer of nutrient-rich silt across the floodplain, creating some of the most fertile land in the ancient world. This predictable cycle allowed the Egyptians to develop a highly productive farming economy without the need for complex irrigation technology in the earliest periods.\n\nThe agricultural calendar was closely tied to the behavior of the Nile. The Egyptian year was divided into three seasons: Akhet, the inundation season when the river flooded; Peret, the growing season when crops were planted in the moist, fertile soil; and Shemu, the harvest season. Farmers cultivated a variety of crops, including emmer wheat, barley, flax, and papyrus. Wheat and barley served as dietary staples and were also used to produce bread and beer, two of the most important food products in Egyptian society.\n\nAs the population grew and the demand for food increased, the Egyptians developed more sophisticated water management techniques. Canals and basins were constructed to direct floodwaters to fields farther from the riverbank, extending the area of cultivable land. A device called a shaduf, consisting of a counterweighted pole with a bucket, was introduced to lift water from the river for irrigation. These innovations allowed farmers to grow crops during the dry season and substantially increased overall agricultural output.\n\nThe agricultural surplus generated by these methods had profound effects on Egyptian society. It supported a large non-farming population of artisans, priests, soldiers, and administrators who built the temples, tombs, and monuments for which Egypt is famous. In this way, the productivity of Egyptian agriculture was not merely an economic achievement but the foundation upon which one of history\'s greatest civilizations was constructed.',
      questions: [
        {
          id: 'ap-6-q1',
          type: 'factual',
          stem: 'According to the passage, what did the annual flooding of the Nile deposit on the floodplain?',
          highlightText: null,
          options: [
            { id: 'd', text: 'Volcanic ash', correct: false },
            { id: 'c', text: 'Clay and limestone', correct: false },
            { id: 'b', text: 'Nutrient-rich silt', correct: true },
            { id: 'a', text: 'Sand and gravel', correct: false }
          ],
          explanation: 'The passage states that the annual flooding deposited a layer of nutrient-rich silt across the floodplain.',
          points: 1
        },
        {
          id: 'ap-6-q2',
          type: 'vocabulary',
          stem: 'The word "cultivable" in paragraph 3 is closest in meaning to:',
          highlightText: 'cultivable',
          options: [
            { id: 'c', text: 'Suitable for growing crops', correct: true },
            { id: 'b', text: 'Protected from seasonal flooding', correct: false },
            { id: 'd', text: 'Owned by the government', correct: false },
            { id: 'a', text: 'Visible from a distance', correct: false }
          ],
          explanation: '"Cultivable" means able to be cultivated or farmed. In context, canals extended the area of land that was suitable for growing crops.',
          points: 1
        },
        {
          id: 'ap-6-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that without the Nile\'s annual floods, ancient Egypt would most likely have:',
          highlightText: null,
          options: [
            { id: 'a', text: 'Developed sea-based trade routes sooner', correct: false },
            { id: 'd', text: 'Focused primarily on livestock rather than crops', correct: false },
            { id: 'c', text: 'Imported all of its food from neighboring regions', correct: false },
            { id: 'b', text: 'Been unable to sustain a large civilization', correct: true }
          ],
          explanation: 'The passage emphasizes that the flooding created the fertile land essential for agriculture, which in turn supported the entire civilization. Without it, the agricultural base would have been insufficient.',
          points: 1
        },
        {
          id: 'ap-6-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 3 and paragraph 4?',
          highlightText: null,
          options: [
            { id: 'b', text: 'Paragraph 3 discusses farming techniques, and paragraph 4 describes the decline of those techniques.', correct: false },
            { id: 'd', text: 'Paragraph 3 presents a problem, and paragraph 4 offers a solution.', correct: false },
            { id: 'a', text: 'Paragraph 3 describes agricultural innovations, and paragraph 4 explains their broader societal impact.', correct: true },
            { id: 'c', text: 'Both paragraphs focus on the construction of canals and irrigation systems.', correct: false }
          ],
          explanation: 'Paragraph 3 describes how Egyptians developed canals, basins, and the shaduf to increase agricultural output, while paragraph 4 explains how the resulting surplus supported a complex civilization with artisans, priests, and builders.',
          points: 1
        },
        {
          id: 'ap-6-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'b', text: 'Egyptian agriculture, powered by the Nile and later innovations, was the foundation of one of history\'s greatest civilizations.', correct: true },
            { id: 'c', text: 'Ancient Egyptians grew wheat and barley primarily so that they could produce bread and beer for daily meals.', correct: false },
            { id: 'a', text: 'The shaduf was by far the most important technological invention in all of recorded ancient Egyptian history.', correct: false },
            { id: 'd', text: 'The three agricultural seasons of the Nile determined every single aspect of daily life in Egypt.', correct: false }
          ],
          explanation: 'The passage traces how the Nile\'s floods and subsequent agricultural innovations created surpluses that enabled the development of Egyptian civilization, making agriculture the foundational achievement.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-6',
        type: 'complete_the_words',
        paragraph: 'Bird navig____ is one of nature\'s most remar____ abilities. Many species migrate thou____ of kilometers between bree____ and wintering grounds each year. Scien____ believe birds use a combi____ of the Earth\'s magnetic field, star posi____, and visual landm____ to orient themselves. Some rese____ suggests that certain birds can even detect polarized sunl____ to aid in navigation.',
        words: [
          { id: 'ctw-m2-6-w1', position: 0, displayText: 'navig', answer: 'ation', fullWord: 'navigation' },
          { id: 'ctw-m2-6-w2', position: 1, displayText: 'remar', answer: 'kable', fullWord: 'remarkable' },
          { id: 'ctw-m2-6-w3', position: 2, displayText: 'thou', answer: 'sands', fullWord: 'thousands' },
          { id: 'ctw-m2-6-w4', position: 3, displayText: 'bree', answer: 'ding', fullWord: 'breeding' },
          { id: 'ctw-m2-6-w5', position: 4, displayText: 'Scien', answer: 'tists', fullWord: 'Scientists' },
          { id: 'ctw-m2-6-w6', position: 5, displayText: 'combi', answer: 'nation', fullWord: 'combination' },
          { id: 'ctw-m2-6-w7', position: 6, displayText: 'posi', answer: 'tions', fullWord: 'positions' },
          { id: 'ctw-m2-6-w8', position: 7, displayText: 'landm', answer: 'arks', fullWord: 'landmarks' },
          { id: 'ctw-m2-6-w9', position: 8, displayText: 'rese', answer: 'arch', fullWord: 'research' },
          { id: 'ctw-m2-6-w10', position: 9, displayText: 'sunl', answer: 'ight', fullWord: 'sunlight' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-6',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Water Fountain Maintenance',
        text: 'Several water fountains and bottle refill stations across campus will be temporarily out of service from March 24 through March 28 for filter replacement and sanitation. Affected locations include the ground floors of Jenkins Hall, the Science Center, and the Gymnasium. Bottled water will be available at the front desk of each building during this period. Students and staff are encouraged to carry reusable water bottles and refill them at unaffected stations in the Library and Student Union.',
        questions: [
          {
            id: 'rdl-notice-m2-6-q1',
            stem: 'What is the reason for the water fountain shutdown?',
            options: [
              { id: 'b', text: 'Filter replacement and sanitation', correct: true },
              { id: 'c', text: 'Water quality testing by the city', correct: false },
              { id: 'a', text: 'A plumbing emergency', correct: false },
              { id: 'd', text: 'Installation of new fountain models', correct: false }
            ],
            explanation: 'The notice states the fountains will be out of service for filter replacement and sanitation.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-6-q2',
            stem: 'Where can people still refill water bottles during the maintenance?',
            options: [
              { id: 'a', text: 'Jenkins Hall and the Science Center', correct: false },
              { id: 'c', text: 'The Library and Student Union', correct: true },
              { id: 'd', text: 'The Gymnasium lobby', correct: false },
              { id: 'b', text: 'The cafeteria only', correct: false }
            ],
            explanation: 'The notice says unaffected stations in the Library and Student Union are still available.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-6',
        type: 'read_daily_life',
        textType: 'email',
        to: 'All First-Year Students',
        from: 'Academic Support Center',
        date: 'September 8, 2026',
        subject: 'Peer Tutoring Signup Now Open',
        body: 'The Academic Support Center is pleased to offer free peer tutoring for first-year students in mathematics, writing, chemistry, and introductory physics. Tutoring sessions are held in small groups of three to five students and meet twice a week for fifty minutes. All tutors are upper-division students who have excelled in these subjects and received specialized training. To sign up, visit the Academic Support Center website and complete the online request form by September 15. You will be matched with a tutor and receive your schedule within five business days of registering.',
        signoff: 'Best wishes,',
        senderName: 'Sarah Kim, Peer Tutoring Coordinator',
        questions: [
          {
            id: 'rdl-email-m2-6-q1',
            stem: 'How large are the tutoring groups?',
            options: [
              { id: 'c', text: 'Ten to fifteen students', correct: false },
              { id: 'a', text: 'One-on-one sessions', correct: false },
              { id: 'd', text: 'The size varies each week', correct: false },
              { id: 'b', text: 'Three to five students', correct: true }
            ],
            explanation: 'The email states tutoring sessions are held in small groups of three to five students.',
            points: 1
          },
          {
            id: 'rdl-email-m2-6-q2',
            stem: 'Who serves as tutors in this program?',
            options: [
              { id: 'd', text: 'Faculty members volunteering their own time', correct: false },
              { id: 'c', text: 'Upper-division students with specialized training', correct: true },
              { id: 'a', text: 'Graduate teaching assistants from each department', correct: false },
              { id: 'b', text: 'Professional tutors hired from an agency', correct: false }
            ],
            explanation: 'The email says all tutors are upper-division students who have excelled in these subjects and received specialized training.',
            points: 1
          },
          {
            id: 'rdl-email-m2-6-q3',
            stem: 'How long after registering will students receive their schedule?',
            options: [
              { id: 'a', text: 'Within twenty-four hours of signing up', correct: false },
              { id: 'c', text: 'At the beginning of the following month', correct: false },
              { id: 'b', text: 'Within five business days', correct: true },
              { id: 'd', text: 'Within two weeks of signing up', correct: false }
            ],
            explanation: 'The email states students will be matched with a tutor and receive their schedule within five business days of registering.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-6',
        type: 'academic_passage',
        title: 'The Origins of Public Parks',
        text: 'Although green spaces have existed in cities for thousands of years, the modern public park, designed for use by ordinary citizens regardless of social class, is a surprisingly recent invention. Throughout most of history, large landscaped grounds belonged to royalty, nobility, or religious institutions, and access was restricted to a privileged few. The idea that a city should set aside land specifically for the rest and recreation of its general population emerged only in the nineteenth century.\n\nThe pressure for public parks grew alongside the rapid industrial expansion of European and North American cities. As factories, dense housing, and crowded streets transformed urban life, reformers warned that working-class residents were losing access to fresh air, sunlight, and natural surroundings. Outbreaks of cholera and other diseases in the early industrial era reinforced the argument that healthy cities needed open green spaces for both physical and moral well-being.\n\nLondon\'s Victoria Park, opened in 1845, is often cited as one of the earliest deliberately public parks designed for working-class neighborhoods. New York City\'s Central Park, which began construction in 1858, became enormously influential. Its designers, Frederick Law Olmsted and Calvert Vaux, believed parks should provide ordinary city dwellers with the experience of being in the countryside. Their winding paths, meadows, and carefully placed trees were intended to offer mental relief from the geometric grid of city streets.\n\nThe park movement spread quickly across continents, often combined with broader urban reforms in sanitation, transportation, and housing. Cities that built parks early often committed to maintaining them as permanent public assets, and many such parks remain central to urban life more than a century and a half later. Modern park designers continue to debate the original tension that shaped these spaces: whether parks should aim to recreate idealized rural landscapes or function as flexible spaces tailored to the actual needs of urban communities.',
        questions: [
          {
            id: 'ap-m2-6-q1',
            type: 'factual',
            stem: 'According to the passage, who designed New York\'s Central Park?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Frederick Law Olmsted and Calvert Vaux', correct: true },
              { id: 'a', text: 'The original architects of Victoria Park', correct: false },
              { id: 'd', text: 'New York City\'s public sanitation board', correct: false },
              { id: 'c', text: 'A team of anonymous European reformers', correct: false }
            ],
            explanation: 'The passage names Olmsted and Vaux as the designers of Central Park.',
            points: 1
          },
          {
            id: 'ap-m2-6-q2',
            type: 'vocabulary',
            stem: 'The word "deliberately" in paragraph 3 most nearly means:',
            highlightText: 'deliberately',
            options: [
              { id: 'b', text: 'Intentionally, with conscious purpose', correct: true },
              { id: 'c', text: 'Reluctantly, after much debate', correct: false },
              { id: 'a', text: 'Slowly, over many years', correct: false },
              { id: 'd', text: 'Privately, without public input', correct: false }
            ],
            explanation: 'In context, "deliberately public" means parks were designed with the intentional purpose of being public.',
            points: 1
          },
          {
            id: 'ap-m2-6-q3',
            type: 'inference',
            stem: 'Which of the following is suggested by paragraph 2?',
            highlightText: null,
            options: [
              { id: 'c', text: 'Working-class residents organized street protests demanding new parks in cities', correct: false },
              { id: 'd', text: 'European factories were considerably less harmful than the American ones', correct: false },
              { id: 'b', text: 'Cholera outbreaks were caused by a lack of green space', correct: false },
              { id: 'a', text: 'Public health concerns helped strengthen the case for building parks', correct: true }
            ],
            explanation: 'The passage notes disease outbreaks reinforced arguments that cities needed open green spaces, suggesting public health concerns supported the case for parks.',
            points: 1
          },
          {
            id: 'ap-m2-6-q4',
            type: 'paragraph_relationships',
            stem: 'How does paragraph 4 relate to paragraph 3?',
            highlightText: null,
            options: [
              { id: 'd', text: 'It explains why the building of new city parks stopped almost entirely in the late nineteenth century.', correct: false },
              { id: 'b', text: 'It describes how the model established by parks in paragraph 3 spread internationally and continues to influence design today.', correct: true },
              { id: 'a', text: 'It questions whether the parks described in paragraph 3 were genuinely successful for the ordinary residents of those cities.', correct: false },
              { id: 'c', text: 'It returns to the discussion of cholera outbreaks that paragraph 2 introduced earlier in the passage', correct: false }
            ],
            explanation: 'Paragraph 4 traces the spread of the park movement and notes that contemporary design debates trace back to those original tensions.',
            points: 1
          },
          {
            id: 'ap-m2-6-q5',
            type: 'important_idea',
            stem: 'Which best expresses the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'c', text: 'Modern cities have largely abandoned the original purposes for which their public parks were first created.', correct: false },
              { id: 'b', text: 'Olmsted and Vaux were by far the most important designers in the entire history of public space design.', correct: false },
              { id: 'd', text: 'Royal gardens across Europe were the direct ancestors of the modern public parks we know today.', correct: false },
              { id: 'a', text: 'Public parks are a relatively recent invention that arose from industrial-era pressures and continues to shape urban life.', correct: true }
            ],
            explanation: 'The passage explains parks are a recent invention driven by industrial-era reformers and remain central to urban life today.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-6',
        type: 'complete_the_words',
        paragraph: 'My friend Rachel just adopted a small d___ from the animal she___. The puppy is brown and white with long ea___. She named him Charlie because he looks frie___ and playful. Every morning, Rachel takes Charlie for a wa___ in the neighborhood. He loves to ch___ squirrels and play with other do___. Training a puppy takes a lot of time and pati___. Rachel is teaching him to s___ when she gives the command. She also feeds him twice a day and gives him fresh water. Having a pet is a big respons___, but it brings so much joy.',
        words: [
          { id: 'ctw-m2e-6-w1', position: 0, displayText: 'd', answer: 'og', fullWord: 'dog' },
          { id: 'ctw-m2e-6-w2', position: 1, displayText: 'she', answer: 'lter', fullWord: 'shelter' },
          { id: 'ctw-m2e-6-w3', position: 2, displayText: 'ea', answer: 'rs', fullWord: 'ears' },
          { id: 'ctw-m2e-6-w4', position: 3, displayText: 'frie', answer: 'ndly', fullWord: 'friendly' },
          { id: 'ctw-m2e-6-w5', position: 4, displayText: 'wa', answer: 'lk', fullWord: 'walk' },
          { id: 'ctw-m2e-6-w6', position: 5, displayText: 'ch', answer: 'ase', fullWord: 'chase' },
          { id: 'ctw-m2e-6-w7', position: 6, displayText: 'do', answer: 'gs', fullWord: 'dogs' },
          { id: 'ctw-m2e-6-w8', position: 7, displayText: 'pati', answer: 'ence', fullWord: 'patience' },
          { id: 'ctw-m2e-6-w9', position: 8, displayText: 's', answer: 'it', fullWord: 'sit' },
          { id: 'ctw-m2e-6-w10', position: 9, displayText: 'respons', answer: 'ibility', fullWord: 'responsibility' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-6',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Computer Lab Maintenance',
        text: 'The main computer lab in the science building will be closed for maintenance on Friday, October 27, from 8:00 AM to 5:00 PM. During this time, students may use the computer labs in the library or the engineering building. Both alternative labs will have extended hours that day. Printing services will not be available in the main lab during the maintenance. Normal hours will resume on Saturday morning.',
        questions: [
          {
            id: 'rdl-notice-m2e-6-q1',
            stem: 'How long will the main computer lab be closed?',
            options: [
              { id: 'd', text: 'Twelve hours', correct: false },
              { id: 'b', text: 'Five hours', correct: false },
              { id: 'a', text: 'Two hours', correct: false },
              { id: 'c', text: 'Nine hours', correct: true }
            ],
            explanation: 'The lab will be closed from 8:00 AM to 5:00 PM, a total of nine hours.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-6-q2',
            stem: 'When will normal hours resume?',
            options: [
              { id: 'a', text: 'Friday evening', correct: false },
              { id: 'd', text: 'Monday morning', correct: false },
              { id: 'b', text: 'Saturday morning', correct: true },
              { id: 'c', text: 'Sunday afternoon', correct: false }
            ],
            explanation: 'The notice says normal hours will resume on Saturday morning.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-6',
        type: 'read_daily_life',
        textType: 'email',
        to: 'James Park',
        from: 'Career Services',
        date: 'November 8, 2026',
        subject: 'Career Fair Reminder',
        body: 'Hi James,\n\nThis is a friendly reminder about the campus career fair on November 15. The event will run from 10:00 AM to 3:00 PM in the Student Union Ballroom. More than fifty companies will be there, including several from the technology and finance industries. Please remember to bring multiple copies of your resume and dress in business attire. Light refreshments will be served. Pre-registration is recommended but not required.',
        signoff: 'Best of luck,',
        senderName: 'Career Services Team',
        questions: [
          {
            id: 'rdl-email-m2e-6-q1',
            stem: 'When is the career fair?',
            options: [
              { id: 'b', text: 'November 10', correct: false },
              { id: 'd', text: 'November 22', correct: false },
              { id: 'c', text: 'November 15', correct: true },
              { id: 'a', text: 'November 8', correct: false }
            ],
            explanation: 'The email states the career fair is on November 15.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-6-q2',
            stem: 'What should students bring?',
            options: [
              { id: 'b', text: 'A notebook and several pens', correct: false },
              { id: 'c', text: 'Multiple copies of their resume', correct: true },
              { id: 'd', text: 'A copy of their photo ID', correct: false },
              { id: 'a', text: 'A laptop for online applications', correct: false }
            ],
            explanation: 'The email asks students to bring multiple copies of their resume.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-6-q3',
            stem: 'Is pre-registration required?',
            options: [
              { id: 'c', text: 'It is required only for first-year students', correct: false },
              { id: 'b', text: 'It is recommended but not required', correct: true },
              { id: 'a', text: 'Yes, it is required for all attendees', correct: false },
              { id: 'd', text: 'It is required only for engineering students', correct: false }
            ],
            explanation: 'The email states pre-registration is recommended but not required.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-6',
        type: 'academic_passage',
        title: 'The Importance of Sleep',
        text: 'Sleep is essential for good health. While we sleep, our bodies repair muscles, organize memories, and produce important hormones. Most adults need between seven and nine hours of sleep each night to feel their best. Children and teenagers need even more sleep because their bodies and minds are still growing.\n\nNot getting enough sleep can cause many problems. People who sleep too little often feel tired during the day, have trouble concentrating, and may get sick more easily. Long-term sleep loss has been linked to serious health issues like heart disease and diabetes. To sleep better, experts recommend going to bed at the same time every night, avoiding screens before bed, and keeping the bedroom cool and dark. Even small changes in sleep habits can make a big difference in how we feel.',
        questions: [
          {
            id: 'ap-m2e-6-q1',
            type: 'factual',
            stem: 'How many hours of sleep do most adults need each night?',
            highlightText: null,
            options: [
              { id: 'a', text: 'Five to six hours', correct: false },
              { id: 'c', text: 'Seven to nine hours', correct: true },
              { id: 'd', text: 'Ten to twelve hours', correct: false },
              { id: 'b', text: 'Six to seven hours', correct: false }
            ],
            explanation: 'The passage says most adults need between seven and nine hours.',
            points: 1
          },
          {
            id: 'ap-m2e-6-q2',
            type: 'factual',
            stem: 'Why do children and teenagers need more sleep?',
            highlightText: null,
            options: [
              { id: 'c', text: 'They eat more food than adults do', correct: false },
              { id: 'b', text: 'Their bodies and minds are still growing', correct: true },
              { id: 'a', text: 'They go to school almost every day', correct: false },
              { id: 'd', text: 'They have less stress in their lives', correct: false }
            ],
            explanation: 'The passage states that children and teenagers need more sleep because their bodies and minds are still growing.',
            points: 1
          },
          {
            id: 'ap-m2e-6-q3',
            type: 'vocabulary',
            stem: 'The phrase "concentrating" in paragraph 2 most likely means:',
            highlightText: 'concentrating',
            options: [
              { id: 'b', text: 'Focusing on something', correct: true },
              { id: 'a', text: 'Sleeping very deeply', correct: false },
              { id: 'c', text: 'Feeling extremely tired', correct: false },
              { id: 'd', text: 'Eating healthy food', correct: false }
            ],
            explanation: 'In context, having trouble "concentrating" means difficulty focusing, for example, on schoolwork or a task.',
            points: 1
          },
          {
            id: 'ap-m2e-6-q4',
            type: 'factual',
            stem: 'Which of the following is NOT mentioned as a way to sleep better?',
            highlightText: null,
            options: [
              { id: 'd', text: 'Keeping the bedroom cool and dark', correct: false },
              { id: 'b', text: 'Avoiding screen use right before bedtime', correct: false },
              { id: 'c', text: 'Drinking warm milk', correct: true },
              { id: 'a', text: 'Following the same bedtime every night', correct: false }
            ],
            explanation: 'The passage mentions same bedtime, avoiding screens, and keeping the bedroom cool and dark, but not warm milk.',
            points: 1
          },
          {
            id: 'ap-m2e-6-q5',
            type: 'important_idea',
            stem: 'Which sentence best summarizes the passage?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Sleep is important for health, and small habit changes can help us sleep better.', correct: true },
              { id: 'c', text: 'Children and teenagers do not actually need as much sleep as most adults do', correct: false },
              { id: 'd', text: 'Doctors still do not really understand why our bodies need to sleep at all', correct: false },
              { id: 'a', text: 'Most adults sleep far too much each night, which is bad for their health', correct: false }
            ],
            explanation: 'The passage explains the importance of sleep and gives simple ways to improve sleep quality.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader, which reads window.READING_TEST_6
window.READING_TEST_6 = window.READING_SECTION_6;
