window.READING_SECTION_3 = {
  id: 'reading-section-3',
  title: 'Reading Practice Test 3',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-3',
      type: 'complete_the_words',
      paragraph: 'Every year, bill____ of animals undertake migr____ journeys across vast dist____. Birds navi____ using the Earth\'s magn____ field, while marine crea____ rely on ocean curr____ and tempe____ gradients. These seas____ movements are esse____ for finding food and breeding grounds.',
      words: [
        { id: 'ctw-3-w1', position: 0, displayText: 'bill', answer: 'ions', fullWord: 'billions' },
        { id: 'ctw-3-w2', position: 1, displayText: 'migr', answer: 'atory', fullWord: 'migratory' },
        { id: 'ctw-3-w3', position: 2, displayText: 'dist', answer: 'ances', fullWord: 'distances' },
        { id: 'ctw-3-w4', position: 3, displayText: 'navi', answer: 'gate', fullWord: 'navigate' },
        { id: 'ctw-3-w5', position: 4, displayText: 'magn', answer: 'etic', fullWord: 'magnetic' },
        { id: 'ctw-3-w6', position: 5, displayText: 'crea', answer: 'tures', fullWord: 'creatures' },
        { id: 'ctw-3-w7', position: 6, displayText: 'curr', answer: 'ents', fullWord: 'currents' },
        { id: 'ctw-3-w8', position: 7, displayText: 'tempe', answer: 'rature', fullWord: 'temperature' },
        { id: 'ctw-3-w9', position: 8, displayText: 'seas', answer: 'onal', fullWord: 'seasonal' },
        { id: 'ctw-3-w10', position: 9, displayText: 'esse', answer: 'ntial', fullWord: 'essential' }
      ],
      points: 10
    },
    {
      id: 'ctw-3b',
      type: 'complete_the_words',
      paragraph: 'Birds possess an extrao____ visual system far surpa____ that of humans. Their ret____ contain four types of color rece____, allowing them to perc____ ultraviolet wavelengths invi____ to people. This expanded color vis____ helps birds locate ripe fruit, identify suit____ mates, and detect subtle markings on prey. Some species can also detect pola____ light patterns, which ass____ them in navigating during long-distance flights.',
      words: [
        { id: 'ctw-3b-w1', position: 0, displayText: 'extrao', answer: 'rdinary', fullWord: 'extraordinary' },
        { id: 'ctw-3b-w2', position: 1, displayText: 'surpa', answer: 'ssing', fullWord: 'surpassing' },
        { id: 'ctw-3b-w3', position: 2, displayText: 'ret', answer: 'inas', fullWord: 'retinas' },
        { id: 'ctw-3b-w4', position: 3, displayText: 'rece', answer: 'ptors', fullWord: 'receptors' },
        { id: 'ctw-3b-w5', position: 4, displayText: 'perc', answer: 'eive', fullWord: 'perceive' },
        { id: 'ctw-3b-w6', position: 5, displayText: 'invi', answer: 'sible', fullWord: 'invisible' },
        { id: 'ctw-3b-w7', position: 6, displayText: 'vis', answer: 'ion', fullWord: 'vision' },
        { id: 'ctw-3b-w8', position: 7, displayText: 'suit', answer: 'able', fullWord: 'suitable' },
        { id: 'ctw-3b-w9', position: 8, displayText: 'pola', answer: 'rized', fullWord: 'polarized' },
        { id: 'ctw-3b-w10', position: 9, displayText: 'ass', answer: 'ists', fullWord: 'assists' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-3',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Dormitory Fire Drill Notice',
      to: 'All Residents of Harper Hall',
      from: 'housing@crestviewuniv.edu',
      date: '03/25/2026',
      subject: 'Mandatory Fire Drill - March 28',
      body: 'Dear Residents,\n\nA mandatory fire drill will take place on Saturday, March 28, at 10:00 A.M. When the alarm sounds, please exit the building immediately using the nearest stairwell. Do not use the elevators. Gather at the designated assembly point in the east parking lot. Resident advisors will take attendance, and you will be allowed back inside once the drill is complete. Failure to participate may result in a housing policy violation.\n\nThank you for your cooperation.',
      signoff: 'Regards,',
      senderName: 'Office of Residential Life\nCrestview University',
      questions: [
        {
          id: 'rdl-email-3-q1',
          stem: 'What are residents instructed to do when the alarm sounds?',
          options: [
            { id: 'b', text: 'Exit the building using the nearest stairwell', correct: true },
            { id: 'd', text: 'Proceed to the lobby and wait for an escort', correct: false },
            { id: 'c', text: 'Call the fire department and wait for instructions', correct: false },
            { id: 'a', text: 'Stay in their rooms and close the doors', correct: false }
          ],
          explanation: 'The email instructs residents to exit the building immediately using the nearest stairwell when the alarm sounds.',
          points: 1
        },
        {
          id: 'rdl-email-3-q2',
          stem: 'What consequence might residents face if they do not participate?',
          options: [
            { id: 'c', text: 'A housing policy violation', correct: true },
            { id: 'd', text: 'Eviction from the dormitory', correct: false },
            { id: 'b', text: 'Loss of their meal plan', correct: false },
            { id: 'a', text: 'A fine of fifty dollars', correct: false }
          ],
          explanation: 'The email states that failure to participate may result in a housing policy violation.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-3',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Campus Newspaper Deadlines',
      messages: [
        { sender: 'Jordan Lee', time: '9:00 A.M.', text: 'Reminder: all articles for the spring edition of The Campus Voice are due by Friday at noon. No exceptions this time.' },
        { sender: 'Natalie Brooks', time: '9:05 A.M.', text: 'My feature on the new dining hall is almost done. I just need one more interview with the head chef. Hoping to get that today.' },
        { sender: 'Carlos Medina', time: '9:12 A.M.', text: 'I finished my sports column last night. I will send it to you for editing by lunchtime.' },
        { sender: 'Jordan Lee', time: '9:15 A.M.', text: 'Perfect, Carlos. Natalie, if the interview falls through, can you submit what you have and add a follow-up note?' },
        { sender: 'Natalie Brooks', time: '9:18 A.M.', text: 'Yes, I can do that. Worst case, I will include a quote from the dining services website instead.' },
        { sender: 'Ava Richardson', time: '9:25 A.M.', text: 'I still need photos for the front page. Can someone cover the outdoor concert tonight?' },
        { sender: 'Carlos Medina', time: '9:28 A.M.', text: 'I can bring my camera. I will be there for my review anyway, so I can take some shots during the show.' }
      ],
      questions: [
        {
          id: 'rdl-tc-3-q1',
          stem: 'What is the deadline for submitting articles?',
          options: [
            { id: 'b', text: 'Friday at noon', correct: true },
            { id: 'd', text: 'Saturday morning', correct: false },
            { id: 'c', text: 'Friday at 5 P.M.', correct: false },
            { id: 'a', text: 'Thursday at midnight', correct: false }
          ],
          explanation: 'Jordan states that all articles are due by Friday at noon with no exceptions.',
          points: 1
        },
        {
          id: 'rdl-tc-3-q2',
          stem: 'What will Natalie do if she cannot complete her interview?',
          options: [
            { id: 'b', text: 'Request an extension on the Friday noon deadline', correct: false },
            { id: 'd', text: 'Drop the dining hall article from the spring edition', correct: false },
            { id: 'c', text: 'Include a quote from the dining services website', correct: true },
            { id: 'a', text: 'Ask Jordan to finish writing the article for her', correct: false }
          ],
          explanation: 'Natalie says that in the worst case, she will include a quote from the dining services website as a substitute for the interview.',
          points: 1
        },
        {
          id: 'rdl-tc-3-q3',
          stem: 'Why is Carlos able to take photos at the concert?',
          options: [
            { id: 'd', text: 'He lives just a short walk from the venue', correct: false },
            { id: 'c', text: 'Jordan assigned him to cover the concert for photos', correct: false },
            { id: 'a', text: 'He works as a professional photographer for the paper', correct: false },
            { id: 'b', text: 'He will already be attending for his own review', correct: true }
          ],
          explanation: 'Carlos mentions he will be at the concert for his review anyway, so he can take photos while he is there.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-3',
      type: 'academic_passage',
      title: 'Plate Tectonics and the Reshaping of Earth',
      text: 'The theory of plate tectonics, developed in the mid-twentieth century, fundamentally transformed our understanding of Earth\'s geological processes. According to this theory, the outermost layer of the planet, known as the lithosphere, is divided into large, rigid plates that float on a semi-fluid layer called the asthenosphere. These plates are in constant, though extremely slow, motion, driven by heat currents rising from deep within the Earth\'s interior.\n\nThe boundaries where plates interact are sites of intense geological activity. At divergent boundaries, plates move apart, allowing magma to rise and create new oceanic crust, a process visible along mid-ocean ridges such as the Mid-Atlantic Ridge. At convergent boundaries, one plate is forced beneath another in a process called subduction, which can generate deep ocean trenches and volcanic mountain ranges. Transform boundaries, where plates slide horizontally past one another, produce frequent earthquakes, as seen along the San Andreas Fault in California.\n\nPlate tectonics provides a unifying explanation for many previously puzzling phenomena. The matching shapes of the coastlines of South America and Africa, for example, are explained by the breakup of the ancient supercontinent Pangaea roughly 200 million years ago. Similarly, the distribution of identical fossil species on continents now separated by wide oceans becomes comprehensible when those landmasses are understood to have once been connected. Mountain ranges like the Himalayas are explained by the ongoing collision between the Indian and Eurasian plates.\n\nDespite its explanatory power, the theory continues to evolve as new evidence emerges. Recent studies using seismic imaging have revealed complex structures deep within the mantle that may influence plate movement in ways not yet fully understood. Researchers are also investigating how plate tectonics may have played a role in regulating Earth\'s climate over geological timescales by controlling the carbon cycle through volcanic emissions and the weathering of exposed rock.',
      questions: [
        {
          id: 'ap-3-q1',
          type: 'factual',
          stem: 'According to the passage, what drives the movement of tectonic plates?',
          highlightText: null,
          options: [
            { id: 'a', text: 'Gravitational pull from the Moon and nearby planets', correct: false },
            { id: 'b', text: 'Heat currents rising from Earth\'s interior', correct: true },
            { id: 'd', text: 'Magnetic forces generated by the planet\'s metallic core', correct: false },
            { id: 'c', text: 'Wind patterns and the movement of ocean waves', correct: false }
          ],
          explanation: 'The passage states that the plates are driven by heat currents rising from deep within the Earth\'s interior.',
          points: 1
        },
        {
          id: 'ap-3-q2',
          type: 'vocabulary',
          stem: 'The word "comprehensible" in paragraph 3 is closest in meaning to:',
          highlightText: 'comprehensible',
          options: [
            { id: 'c', text: 'Controversial', correct: false },
            { id: 'b', text: 'Understandable', correct: true },
            { id: 'a', text: 'Debatable', correct: false },
            { id: 'd', text: 'Insignificant', correct: false }
          ],
          explanation: '"Comprehensible" means able to be understood. The passage uses it to indicate that fossil distribution makes sense when we understand that the continents were once joined.',
          points: 1
        },
        {
          id: 'ap-3-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that the Himalayas are still growing because:',
          highlightText: null,
          options: [
            { id: 'd', text: 'Repeated earthquakes push the mountain range higher each year', correct: false },
            { id: 'b', text: 'The Indian and Eurasian plates continue to collide', correct: true },
            { id: 'a', text: 'Volcanic eruptions continuously add new rock to the summits', correct: false },
            { id: 'c', text: 'Erosion steadily deposits new material at the highest peaks', correct: false }
          ],
          explanation: 'The passage describes the Himalayas as resulting from the "ongoing collision" between the Indian and Eurasian plates, implying the process is still occurring and the mountains are still growing.',
          points: 1
        },
        {
          id: 'ap-3-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 1 and paragraph 2?',
          highlightText: null,
          options: [
            { id: 'd', text: 'Paragraph 1 discusses the movement of oceanic plates, while paragraph 2 focuses on the behavior of continental plates.', correct: false },
            { id: 'c', text: 'Both paragraphs describe the same geological process, viewing it from two different periods in Earth\'s distant history.', correct: false },
            { id: 'a', text: 'Paragraph 1 introduces the theory of plate tectonics, and paragraph 2 describes what happens at plate boundaries.', correct: true },
            { id: 'b', text: 'Paragraph 1 presents an older historical view, and paragraph 2 refutes that view with modern seismic evidence.', correct: false }
          ],
          explanation: 'Paragraph 1 introduces plate tectonics and describes the basic structure (lithosphere, asthenosphere), while paragraph 2 details the three types of plate boundaries and the geological activity that occurs at each.',
          points: 1
        },
        {
          id: 'ap-3-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'c', text: 'All continents were once joined together as part of Pangaea and will eventually come back together into a single landmass.', correct: false },
            { id: 'd', text: 'Volcanic activity at plate boundaries is the primary and most significant consequence of the constant movement of tectonic plates.', correct: false },
            { id: 'a', text: 'The San Andreas Fault in California is the most dangerous and most closely studied plate boundary on Earth today.', correct: false },
            { id: 'b', text: 'Plate tectonics is a comprehensive theory that explains many of Earth\'s geological features and continues to develop with new research.', correct: true }
          ],
          explanation: 'The passage presents plate tectonics as a unifying theory that explains coastline shapes, fossil distribution, mountain formation, and other phenomena, while noting that research continues to expand our understanding.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-3',
        type: 'complete_the_words',
        paragraph: 'Ocean tides are caused primarily by the gravit____ pull of the moon and the sun on Earth\'s water. The rota____ of the planet creates predi____ patterns of high and low tides along coast____. Tidal varia____ depend on geog____ and the alignment of cele____ bodies. Marine orga____ have adapted their beha____ to these rhythmic fluctu____ over millions of years.',
        words: [
          { id: 'ctw-m2-3-w1', position: 0, displayText: 'gravit', answer: 'ational', fullWord: 'gravitational' },
          { id: 'ctw-m2-3-w2', position: 1, displayText: 'rota', answer: 'tion', fullWord: 'rotation' },
          { id: 'ctw-m2-3-w3', position: 2, displayText: 'predi', answer: 'ctable', fullWord: 'predictable' },
          { id: 'ctw-m2-3-w4', position: 3, displayText: 'coast', answer: 'lines', fullWord: 'coastlines' },
          { id: 'ctw-m2-3-w5', position: 4, displayText: 'varia', answer: 'tions', fullWord: 'variations' },
          { id: 'ctw-m2-3-w6', position: 5, displayText: 'geog', answer: 'raphy', fullWord: 'geography' },
          { id: 'ctw-m2-3-w7', position: 6, displayText: 'cele', answer: 'stial', fullWord: 'celestial' },
          { id: 'ctw-m2-3-w8', position: 7, displayText: 'orga', answer: 'nisms', fullWord: 'organisms' },
          { id: 'ctw-m2-3-w9', position: 8, displayText: 'beha', answer: 'vior', fullWord: 'behavior' },
          { id: 'ctw-m2-3-w10', position: 9, displayText: 'fluctu', answer: 'ations', fullWord: 'fluctuations' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-3',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Computer Lab Upgrade',
        text: 'The Hoffman Computer Lab on the second floor of the Science Building will be closed from January 15 through January 22 for a complete hardware and software upgrade. All workstations will receive new monitors and updated operating systems. During the closure, students may use the computer lab in the basement of the Library. We recommend saving any files stored locally on lab computers before January 14, as hard drives will be reformatted.',
        questions: [
          {
            id: 'rdl-notice-m2-3-q1',
            stem: 'What should students do before January 14?',
            options: [
              { id: 'b', text: 'Save any files stored locally on lab computers', correct: true },
              { id: 'a', text: 'Register for new accounts on the upgraded lab computers', correct: false },
              { id: 'd', text: 'Install the updated operating system on their personal laptops', correct: false },
              { id: 'c', text: 'Return all borrowed equipment to the lab front desk', correct: false }
            ],
            explanation: 'The notice recommends saving any files stored locally on lab computers before January 14 because hard drives will be reformatted.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-3-q2',
            stem: 'Where can students access computers during the closure?',
            options: [
              { id: 'a', text: 'The first floor of the Science Building', correct: false },
              { id: 'b', text: 'The campus student center', correct: false },
              { id: 'd', text: 'The engineering department office', correct: false },
              { id: 'c', text: 'The basement of the Library', correct: true }
            ],
            explanation: 'The notice states students may use the computer lab in the basement of the Library during the closure.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-3',
        type: 'read_daily_life',
        textType: 'email',
        to: 'All Environmental Science Students',
        from: 'Professor Linda Torres',
        date: 'February 20, 2026',
        subject: 'Guest Lecture Announcement: Urban Sustainability',
        body: 'I am pleased to announce that Dr. James Whitfield from the National Institute of Urban Planning will deliver a guest lecture titled "Designing Sustainable Cities" on March 6 at 3:00 PM in Auditorium B of the Davidson Center. Dr. Whitfield has published extensively on green infrastructure and urban resilience. Attendance is mandatory for students enrolled in ENV 302, and all other students are welcome. Light refreshments will be served after the lecture. Please arrive ten minutes early to find seating, as the auditorium is expected to be full.',
        signoff: 'Warm regards,',
        senderName: 'Professor Linda Torres, Department of Environmental Science',
        questions: [
          {
            id: 'rdl-email-m2-3-q1',
            stem: 'Who is the guest speaker?',
            options: [
              { id: 'd', text: 'A local city council member', correct: false },
              { id: 'c', text: 'The Environmental Science department dean', correct: false },
              { id: 'b', text: 'Dr. James Whitfield', correct: true },
              { id: 'a', text: 'Professor Linda Torres', correct: false }
            ],
            explanation: 'The email states that Dr. James Whitfield from the National Institute of Urban Planning will deliver the guest lecture.',
            points: 1
          },
          {
            id: 'rdl-email-m2-3-q2',
            stem: 'For which students is attendance mandatory?',
            options: [
              { id: 'd', text: 'All first-year students in the department', correct: false },
              { id: 'c', text: 'Students enrolled in ENV 302', correct: true },
              { id: 'a', text: 'All environmental science majors in the department', correct: false },
              { id: 'b', text: 'Only graduate students in the department', correct: false }
            ],
            explanation: 'The email states that attendance is mandatory for students enrolled in ENV 302.',
            points: 1
          },
          {
            id: 'rdl-email-m2-3-q3',
            stem: 'Why are students asked to arrive early?',
            options: [
              { id: 'd', text: 'The lecture will start earlier than announced', correct: false },
              { id: 'b', text: 'The speaker will greet students before the lecture', correct: false },
              { id: 'a', text: 'Students must complete a registration form first', correct: false },
              { id: 'c', text: 'The auditorium is expected to be full', correct: true }
            ],
            explanation: 'The email asks students to arrive ten minutes early to find seating because the auditorium is expected to be full.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-3',
        type: 'academic_passage',
        title: 'Music and the Developing Brain',
        text: 'Researchers have long suspected that musical training shapes the brain in measurable ways, but the past two decades have produced increasingly detailed evidence about how this happens. Modern imaging techniques allow scientists to compare the brains of trained musicians with those of non-musicians, and the differences extend far beyond what was once expected.\n\nOne of the most consistent findings is that musicians who began training in childhood show greater development in the corpus callosum, the bundle of nerve fibers connecting the two halves of the brain. This enhanced connectivity is thought to result from the demands of coordinating both hands during instrumental practice, particularly on instruments like the piano or violin. Children who study an instrument also tend to show stronger development in regions associated with auditory processing and motor control.\n\nThe benefits of musical training appear to extend beyond skills directly related to music itself. Studies have linked early musical instruction with improved verbal memory, mathematical reasoning, and the ability to recognize subtle differences in spoken language. Some researchers argue that learning to read music sharpens the same cognitive systems used for processing written language, while the discipline of practice may strengthen attention and executive function more generally.\n\nNot all questions are settled, however. Scientists continue to debate whether musical training causes these cognitive enhancements directly or whether children who pursue music differ in other important ways, such as family environment or motivation. Recent longitudinal studies that follow children over many years have begun to provide clearer answers, suggesting that meaningful cognitive changes do appear to follow sustained musical practice rather than the reverse.',
        questions: [
          {
            id: 'ap-m2-3-q1',
            type: 'factual',
            stem: 'According to the passage, what is the corpus callosum?',
            highlightText: null,
            options: [
              { id: 'd', text: 'The region of the brain that controls verbal memory and mathematical reasoning', correct: false },
              { id: 'c', text: 'A muscle that is used in coordinating finger movements during practice', correct: false },
              { id: 'b', text: 'The bundle of nerve fibers connecting the two halves of the brain', correct: true },
              { id: 'a', text: 'A region of the brain responsible for auditory processing and motor control', correct: false }
            ],
            explanation: 'The passage defines the corpus callosum as "the bundle of nerve fibers connecting the two halves of the brain."',
            points: 1
          },
          {
            id: 'ap-m2-3-q2',
            type: 'vocabulary',
            stem: 'The word "longitudinal" in paragraph 4 most nearly means:',
            highlightText: 'longitudinal',
            options: [
              { id: 'c', text: 'Following the same subjects over an extended period of time', correct: true },
              { id: 'a', text: 'Conducted in many different countries around the world', correct: false },
              { id: 'd', text: 'Comparing brain images taken from a variety of different angles', correct: false },
              { id: 'b', text: 'Carried out by multiple researchers working at the same time', correct: false }
            ],
            explanation: 'In context, "longitudinal studies that follow children over many years" indicates studies that track the same individuals over a long period.',
            points: 1
          },
          {
            id: 'ap-m2-3-q3',
            type: 'inference',
            stem: 'Why might piano and violin training particularly affect the corpus callosum?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Both instruments produce especially complex and layered sounds', correct: false },
              { id: 'd', text: 'Both instruments require students to read written music', correct: false },
              { id: 'a', text: 'These instruments require coordination between both hands', correct: true },
              { id: 'c', text: 'These instruments are most often taught to children', correct: false }
            ],
            explanation: 'The passage notes that enhanced connectivity in the corpus callosum results from coordinating both hands during practice, particularly on instruments like piano or violin.',
            points: 1
          },
          {
            id: 'ap-m2-3-q4',
            type: 'paragraph_relationships',
            stem: 'How does paragraph 4 differ in tone from the earlier paragraphs?',
            highlightText: null,
            options: [
              { id: 'd', text: 'It compares the effects of musical training with those of athletic training.', correct: false },
              { id: 'b', text: 'It introduces caveats and acknowledges that not all questions are resolved.', correct: true },
              { id: 'c', text: 'It shifts the focus from young children to adult professional musicians.', correct: false },
              { id: 'a', text: 'It dismisses the findings discussed in the earlier paragraphs as unreliable.', correct: false }
            ],
            explanation: 'Paragraph 4 explicitly notes that "Not all questions are settled" and discusses ongoing debate, presenting a more cautious tone than the earlier confident findings.',
            points: 1
          },
          {
            id: 'ap-m2-3-q5',
            type: 'important_idea',
            stem: 'What is the central claim of the passage?',
            highlightText: null,
            options: [
              { id: 'a', text: 'Children who study a musical instrument become better mathematicians than children who do not study music.', correct: false },
              { id: 'd', text: 'Only training on the piano and the violin produces significant cognitive benefits in young children.', correct: false },
              { id: 'c', text: 'Sustained musical training appears to produce measurable changes in the brain that extend beyond music-specific skills.', correct: true },
              { id: 'b', text: 'Modern brain imaging is the most important research tool available in the field of neuroscience today.', correct: false }
            ],
            explanation: 'The passage describes brain changes from musical training, broader cognitive benefits, and longitudinal evidence that practice produces these changes, supporting this central claim.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-3',
        type: 'complete_the_words',
        paragraph: 'Last weekend my class visited the local mus___ to learn about ancient Egypt. The exhi___ included statues, pottery, and gold jewel___. Our gu___ explained how people lived thousands of years ago. We saw a real mu___ inside a glass case. The class took many phot___ to use for our reports. The gift sh___ sold small models of pyramids. I bought a postc___ for my grandmother. The visit was educa___ and very exciting. We will go ag___ next month to see a new exhibition. Everyone agreed that learning by visiting places is much more fun than reading from a book.',
        words: [
          { id: 'ctw-m2e-3-w1', position: 0, displayText: 'mus', answer: 'eum', fullWord: 'museum' },
          { id: 'ctw-m2e-3-w2', position: 1, displayText: 'exhi', answer: 'bit', fullWord: 'exhibit' },
          { id: 'ctw-m2e-3-w3', position: 2, displayText: 'jewel', answer: 'ry', fullWord: 'jewelry' },
          { id: 'ctw-m2e-3-w4', position: 3, displayText: 'gu', answer: 'ide', fullWord: 'guide' },
          { id: 'ctw-m2e-3-w5', position: 4, displayText: 'mu', answer: 'mmy', fullWord: 'mummy' },
          { id: 'ctw-m2e-3-w6', position: 5, displayText: 'phot', answer: 'os', fullWord: 'photos' },
          { id: 'ctw-m2e-3-w7', position: 6, displayText: 'sh', answer: 'op', fullWord: 'shop' },
          { id: 'ctw-m2e-3-w8', position: 7, displayText: 'postc', answer: 'ard', fullWord: 'postcard' },
          { id: 'ctw-m2e-3-w9', position: 8, displayText: 'educa', answer: 'tional', fullWord: 'educational' },
          { id: 'ctw-m2e-3-w10', position: 9, displayText: 'ag', answer: 'ain', fullWord: 'again' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-3',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Free Bicycle Repair Day',
        text: 'The Student Union is hosting a free bicycle repair day on Saturday, October 14, from 10:00 AM to 4:00 PM. Trained volunteers will help students fix flat tires, adjust brakes, and oil chains. All repairs are free, but students must bring their own bicycles. The event will take place in the parking lot behind the Student Union building. No appointment is needed, but service may take longer in the afternoon.',
        questions: [
          {
            id: 'rdl-notice-m2e-3-q1',
            stem: 'How long is the repair event?',
            options: [
              { id: 'a', text: 'Two hours', correct: false },
              { id: 'd', text: 'Eight hours', correct: false },
              { id: 'b', text: 'Four hours', correct: false },
              { id: 'c', text: 'Six hours', correct: true }
            ],
            explanation: 'The event runs from 10:00 AM to 4:00 PM, which is six hours.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-3-q2',
            stem: 'Where will the event take place?',
            options: [
              { id: 'a', text: 'In the main gym of the athletic center', correct: false },
              { id: 'b', text: 'In the parking lot behind the Student Union', correct: true },
              { id: 'c', text: 'At the campus bookstore near the main entrance', correct: false },
              { id: 'd', text: 'In the student cafeteria on the first floor', correct: false }
            ],
            explanation: 'The notice states the event will be in the parking lot behind the Student Union building.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-3',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Tom Wilson',
        from: 'Sara Park',
        date: 'November 3, 2026',
        subject: 'Group Project Meeting',
        body: 'Hi Tom,\n\nI hope your week is going well. I wanted to confirm our meeting for the history group project. We agreed to meet on Wednesday at 4:00 PM in the third-floor study room of the library. Please bring your notes from the chapter on the Industrial Revolution. I will bring my laptop so we can work on the slides together. If anything changes, please send me a message before Tuesday evening.',
        signoff: 'Thanks,',
        senderName: 'Sara',
        questions: [
          {
            id: 'rdl-email-m2e-3-q1',
            stem: 'When is the group meeting?',
            options: [
              { id: 'd', text: 'Friday at 4:00 PM', correct: false },
              { id: 'b', text: 'Wednesday at 4:00 PM', correct: true },
              { id: 'c', text: 'Thursday at 4:00 PM', correct: false },
              { id: 'a', text: 'Tuesday at 4:00 PM', correct: false }
            ],
            explanation: 'The email confirms the meeting for Wednesday at 4:00 PM.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-3-q2',
            stem: 'What does Sara ask Tom to bring?',
            options: [
              { id: 'd', text: 'A copy of the history textbook from class', correct: false },
              { id: 'a', text: 'His own laptop for working on the slides', correct: false },
              { id: 'b', text: 'Snacks for the group to share during the meeting', correct: false },
              { id: 'c', text: 'His notes from the chapter on the Industrial Revolution', correct: true }
            ],
            explanation: 'The email asks Tom to bring his notes from the chapter on the Industrial Revolution.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-3-q3',
            stem: 'Where will they meet?',
            options: [
              { id: 'c', text: 'In Sara’s dorm room in the north building', correct: false },
              { id: 'd', text: 'In the history classroom on the second floor', correct: false },
              { id: 'a', text: 'At a coffee shop near the campus center', correct: false },
              { id: 'b', text: 'In the third-floor study room of the library', correct: true }
            ],
            explanation: 'The email states they will meet in the third-floor study room of the library.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-3',
        type: 'academic_passage',
        title: 'The History of the Bicycle',
        text: 'The bicycle is one of the most popular forms of transportation in the world. The first bicycle was invented in Germany in 1817, but it had no pedals. Riders had to push it along the ground with their feet. About fifty years later, French engineers added pedals to the front wheel, and the bicycle became much easier to ride.\n\nIn the late 1800s, the modern bicycle with two equal-sized wheels and a chain drive was developed. This design was much safer and faster than earlier models. Soon, bicycles became common in cities all over Europe and the United States. Today, bicycles are used for exercise, sport, and daily transportation. They are popular because they are cheap, healthy, and good for the environment. In some countries, more people travel by bicycle than by car.',
        questions: [
          {
            id: 'ap-m2e-3-q1',
            type: 'factual',
            stem: 'Where was the first bicycle invented?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Germany', correct: true },
              { id: 'a', text: 'France', correct: false },
              { id: 'c', text: 'England', correct: false },
              { id: 'd', text: 'The United States', correct: false }
            ],
            explanation: 'The passage says the first bicycle was invented in Germany in 1817.',
            points: 1
          },
          {
            id: 'ap-m2e-3-q2',
            type: 'factual',
            stem: 'What did the first bicycles lack?',
            highlightText: null,
            options: [
              { id: 'c', text: 'Pedals', correct: true },
              { id: 'a', text: 'Wheels', correct: false },
              { id: 'd', text: 'Handlebars', correct: false },
              { id: 'b', text: 'A seat', correct: false }
            ],
            explanation: 'The passage states that the first bicycle had no pedals, so riders had to push it with their feet.',
            points: 1
          },
          {
            id: 'ap-m2e-3-q3',
            type: 'vocabulary',
            stem: 'The phrase "chain drive" in paragraph 2 refers to:',
            highlightText: 'chain drive',
            options: [
              { id: 'b', text: 'A system that uses a chain to move the wheels', correct: true },
              { id: 'a', text: 'A type of bicycle race that became popular in Europe', correct: false },
              { id: 'd', text: 'The system of brakes used to stop a bicycle', correct: false },
              { id: 'c', text: 'A safety device that protects the rider from falls', correct: false }
            ],
            explanation: 'In context, "chain drive" describes the mechanism that uses a chain to make the bicycle move.',
            points: 1
          },
          {
            id: 'ap-m2e-3-q4',
            type: 'inference',
            stem: 'Why does the writer say bicycles are popular today?',
            highlightText: null,
            options: [
              { id: 'd', text: 'They are very fashionable among young city riders', correct: false },
              { id: 'b', text: 'They are cheap, healthy, and good for the environment', correct: true },
              { id: 'a', text: 'They are faster than cars in most large cities', correct: false },
              { id: 'c', text: 'They are required by law in many cities', correct: false }
            ],
            explanation: 'The passage gives three reasons for the popularity of bicycles: they are cheap, healthy, and environmentally friendly.',
            points: 1
          },
          {
            id: 'ap-m2e-3-q5',
            type: 'important_idea',
            stem: 'What is the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'd', text: 'Cycling races have become far more competitive in recent years.', correct: false },
              { id: 'a', text: 'Bicycles are still dangerous and need to be completely redesigned.', correct: false },
              { id: 'b', text: 'The bicycle has a long history and is still important today.', correct: true },
              { id: 'c', text: 'Cars have replaced bicycles in almost every part of the world.', correct: false }
            ],
            explanation: 'The passage describes the history of the bicycle and explains why it remains popular today.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader, which reads window.READING_TEST_3
window.READING_TEST_3 = window.READING_SECTION_3;
