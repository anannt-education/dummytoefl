window.READING_SECTION_8 = {
  id: 'reading-section-8',
  title: 'Reading Practice Test 8',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-8',
      type: 'complete_the_words',
      paragraph: 'Glaciers are massive bodies of compr____ ice that form over cent____ from accumulated snowfall. These slow-moving rivers of ice scu____ the landscape beneath them, carving out val____ and depositing sedi____ as they advance and ret____. Today, accel____ melting of polar and moun____ glaciers contributes signif____ to rising sea levels, threa____ coastal communities worldwide.',
      words: [
        { id: 'ctw-8-w1', position: 0, displayText: 'compr', answer: 'essed', fullWord: 'compressed' },
        { id: 'ctw-8-w2', position: 1, displayText: 'cent', answer: 'uries', fullWord: 'centuries' },
        { id: 'ctw-8-w3', position: 2, displayText: 'scu', answer: 'lpt', fullWord: 'sculpt' },
        { id: 'ctw-8-w4', position: 3, displayText: 'val', answer: 'leys', fullWord: 'valleys' },
        { id: 'ctw-8-w5', position: 4, displayText: 'sedi', answer: 'ment', fullWord: 'sediment' },
        { id: 'ctw-8-w6', position: 5, displayText: 'ret', answer: 'reat', fullWord: 'retreat' },
        { id: 'ctw-8-w7', position: 6, displayText: 'accel', answer: 'erated', fullWord: 'accelerated' },
        { id: 'ctw-8-w8', position: 7, displayText: 'moun', answer: 'tain', fullWord: 'mountain' },
        { id: 'ctw-8-w9', position: 8, displayText: 'signif', answer: 'icantly', fullWord: 'significantly' },
        { id: 'ctw-8-w10', position: 9, displayText: 'threa', answer: 'tening', fullWord: 'threatening' }
      ],
      points: 10
    },
    {
      id: 'ctw-8b',
      type: 'complete_the_words',
      paragraph: 'Permafrost is ground that remains continu____ frozen for at least two conse____ years. It underlies vast reg____ of the Arctic and stores enormous quantities of frozen organic mate____. As global temperatures rise, this once-stable layer is beginning to thaw, rele____ ancient carbon dioxide and methane into the atmos____. The process accel____ further warming and thre____ infrastructure built on previously stable found____. Scientists monitor permafrost using sate____ data and ground sensors.',
      words: [
        { id: 'ctw-8b-w1', position: 0, displayText: 'continu', answer: 'ously', fullWord: 'continuously' },
        { id: 'ctw-8b-w2', position: 1, displayText: 'conse', answer: 'cutive', fullWord: 'consecutive' },
        { id: 'ctw-8b-w3', position: 2, displayText: 'reg', answer: 'ions', fullWord: 'regions' },
        { id: 'ctw-8b-w4', position: 3, displayText: 'mate', answer: 'rial', fullWord: 'material' },
        { id: 'ctw-8b-w5', position: 4, displayText: 'rele', answer: 'asing', fullWord: 'releasing' },
        { id: 'ctw-8b-w6', position: 5, displayText: 'atmos', answer: 'phere', fullWord: 'atmosphere' },
        { id: 'ctw-8b-w7', position: 6, displayText: 'accel', answer: 'erates', fullWord: 'accelerates' },
        { id: 'ctw-8b-w8', position: 7, displayText: 'thre', answer: 'atens', fullWord: 'threatens' },
        { id: 'ctw-8b-w9', position: 8, displayText: 'found', answer: 'ations', fullWord: 'foundations' },
        { id: 'ctw-8b-w10', position: 9, displayText: 'sate', answer: 'llite', fullWord: 'satellite' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-8',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Tutoring Center Hours Update',
      to: 'All Enrolled Students',
      from: 'tutoring@summituniv.edu',
      date: '04/03/2026',
      subject: 'Extended Hours During Finals Period',
      body: 'Dear Students,\n\nThe Academic Tutoring Center will extend its hours during the finals period from April 20 through May 2. Our regular hours of 9 A.M. to 5 P.M. will be expanded to 8 A.M. to 10 P.M. on weekdays and 10 A.M. to 6 P.M. on weekends. Drop-in tutoring is available for math, writing, and chemistry. For all other subjects, appointments must be scheduled at least 24 hours in advance through our online booking system.\n\nWe wish you the best on your exams.',
      signoff: 'Sincerely,',
      senderName: 'Dr. Patricia Yoon\nDirector, Academic Tutoring Center',
      questions: [
        {
          id: 'rdl-email-8-q1',
          stem: 'What are the extended weekday hours during the finals period?',
          options: [
            { id: 'a', text: '9 A.M. to 5 P.M.', correct: false },
            { id: 'b', text: '8 A.M. to 10 P.M.', correct: true },
            { id: 'd', text: '7 A.M. to 11 P.M.', correct: false },
            { id: 'c', text: '10 A.M. to 6 P.M.', correct: false }
          ],
          explanation: 'The email states that weekday hours will be expanded to 8 A.M. to 10 P.M. during the finals period.',
          points: 1
        },
        {
          id: 'rdl-email-8-q2',
          stem: 'Which subjects offer drop-in tutoring without an appointment?',
          options: [
            { id: 'd', text: 'Only math and writing', correct: false },
            { id: 'b', text: 'Math, writing, and chemistry', correct: true },
            { id: 'a', text: 'Biology, physics, and history', correct: false },
            { id: 'c', text: 'All subjects during finals period', correct: false }
          ],
          explanation: 'The email specifies that drop-in tutoring is available for math, writing, and chemistry. All other subjects require advance appointments.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-8',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Music Festival Logistics',
      messages: [
        { sender: 'Ben Torres', time: '1:00 P.M.', text: 'The spring music festival is confirmed for April 25 on the quad. We have five bands and a DJ set. Let us finalize the logistics.' },
        { sender: 'Jasmine Wright', time: '1:04 P.M.', text: 'I confirmed the sound equipment rental. They will deliver at 8 A.M. and pick up by 11 P.M. The total cost is four hundred dollars.' },
        { sender: 'Marco Pellegrini', time: '1:08 P.M.', text: 'I reached out to campus dining. They can set up two food trucks for the event, but they need a confirmed headcount by April 18.' },
        { sender: 'Ben Torres', time: '1:12 P.M.', text: 'We have 320 RSVPs so far on the event page. I will send a final count to dining by the 18th.' },
        { sender: 'Jasmine Wright', time: '1:15 P.M.', text: 'What about a rain backup plan? The forecast is not looking great.' },
        { sender: 'Ben Torres', time: '1:19 P.M.', text: 'I reserved the student center ballroom as a backup. If we move indoors, capacity drops to 200, so we would need to limit entry.' },
        { sender: 'Marco Pellegrini', time: '1:22 P.M.', text: 'Let us decide by April 22 whether to move indoors. That gives us three days to adjust the setup.' }
      ],
      questions: [
        {
          id: 'rdl-tc-8-q1',
          stem: 'What does Marco need from Ben by April 18?',
          options: [
            { id: 'c', text: 'Payment for the food trucks', correct: false },
            { id: 'd', text: 'The sound equipment delivery schedule', correct: false },
            { id: 'a', text: 'A list of performing bands', correct: false },
            { id: 'b', text: 'A confirmed headcount for dining', correct: true }
          ],
          explanation: 'Marco says campus dining needs a confirmed headcount by April 18, and Ben agrees to send the final count by that date.',
          points: 1
        },
        {
          id: 'rdl-tc-8-q2',
          stem: 'What is the main concern about moving the event indoors?',
          options: [
            { id: 'b', text: 'The venue capacity is smaller than the number of RSVPs', correct: true },
            { id: 'c', text: 'The food trucks cannot be set up inside the ballroom', correct: false },
            { id: 'a', text: 'The rented sound equipment will not fit inside the ballroom', correct: false },
            { id: 'd', text: 'The DJ does not perform at events that are held indoors', correct: false }
          ],
          explanation: 'Ben notes that the indoor backup venue has a capacity of only 200, which is significantly less than the 320 RSVPs, so entry would need to be limited.',
          points: 1
        },
        {
          id: 'rdl-tc-8-q3',
          stem: 'By when does Marco suggest making a decision about the venue?',
          options: [
            { id: 'c', text: 'April 22', correct: true },
            { id: 'a', text: 'April 18', correct: false },
            { id: 'b', text: 'April 20', correct: false },
            { id: 'd', text: 'April 25', correct: false }
          ],
          explanation: 'Marco suggests deciding by April 22, which gives them three days before the April 25 event to adjust the setup.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-8',
      type: 'academic_passage',
      title: 'Social Media and Democratic Participation',
      text: 'The rapid spread of social media platforms over the past two decades has transformed the landscape of democratic participation. Supporters argue that platforms such as Twitter, Facebook, and newer services have democratized public discourse by giving ordinary citizens a direct channel to share opinions, organize movements, and hold leaders accountable. Events such as the Arab Spring uprisings in 2011 are frequently cited as evidence of social media\'s power to mobilize citizens for political change.\n\nHowever, critics point to a growing body of evidence suggesting that social media can also undermine democratic processes. Algorithmic content curation tends to create echo chambers, filtering information in ways that reinforce users\' existing beliefs and limit their exposure to opposing perspectives. This fragmentation of the public sphere can deepen political polarization, making constructive dialogue between opposing groups more difficult. Studies have found that misinformation spreads significantly faster on social media than verified news, partly because sensational content generates more engagement.\n\nThe problem of misinformation has prompted debates about platform responsibility and content moderation. Some argue that social media companies should more aggressively remove false content to protect democratic integrity. Others contend that aggressive moderation risks censorship and threatens free expression. Striking the right balance between these competing values remains one of the most challenging policy questions of the digital age. Government regulation has been slow to adapt, with lawmakers often struggling to keep pace with the speed of technological change.\n\nDespite these challenges, researchers note that social media is neither inherently beneficial nor harmful to democracy. Its effects depend largely on how platforms are designed, how content is regulated, and how users engage with political information. Promoting digital literacy, encouraging critical evaluation of online sources, and designing algorithms that prioritize accuracy over engagement are among the strategies proposed to harness social media\'s democratic potential while minimizing its risks.',
      questions: [
        {
          id: 'ap-8-q1',
          type: 'factual',
          stem: 'According to the passage, what event is frequently cited as evidence of social media\'s political mobilization power?',
          highlightText: null,
          options: [
            { id: 'c', text: 'The founding of Facebook in 2004', correct: false },
            { id: 'd', text: 'The global climate protests of 2019', correct: false },
            { id: 'b', text: 'The Arab Spring uprisings in 2011', correct: true },
            { id: 'a', text: 'The 2008 United States presidential election', correct: false }
          ],
          explanation: 'The passage specifically mentions the Arab Spring uprisings in 2011 as frequently cited evidence of social media\'s power to mobilize citizens.',
          points: 1
        },
        {
          id: 'ap-8-q2',
          type: 'vocabulary',
          stem: 'The word "fragmentation" in paragraph 2 is closest in meaning to:',
          highlightText: 'fragmentation',
          options: [
            { id: 'd', text: 'Improving slowly and steadily over time', correct: false },
            { id: 'c', text: 'Disrupting things for a short time', correct: false },
            { id: 'b', text: 'Breaking into separate parts', correct: true },
            { id: 'a', text: 'Growing larger and spreading outward', correct: false }
          ],
          explanation: '"Fragmentation" means the process of breaking into separate parts or groups. Here it describes how social media divides the public sphere into isolated groups with different information sources.',
          points: 1
        },
        {
          id: 'ap-8-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that misinformation spreads quickly on social media primarily because:',
          highlightText: null,
          options: [
            { id: 'b', text: 'Social media companies refuse to moderate any content', correct: false },
            { id: 'c', text: 'Sensational content generates more user engagement', correct: true },
            { id: 'a', text: 'People intentionally share content they know is false', correct: false },
            { id: 'd', text: 'Government regulations require platforms to share all content equally', correct: false }
          ],
          explanation: 'The passage states that misinformation spreads faster partly because sensational content generates more engagement, implying that platform algorithms promote it because it drives interaction.',
          points: 1
        },
        {
          id: 'ap-8-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 1 and paragraph 2?',
          highlightText: null,
          options: [
            { id: 'c', text: 'Paragraph 1 discusses the early history of social media, while paragraph 2 predicts what its future will likely hold.', correct: false },
            { id: 'a', text: 'Both paragraphs present arguments in favor of social media, praising the role it plays in democratic participation.', correct: false },
            { id: 'd', text: 'Paragraph 1 describes older social media platforms, while paragraph 2 describes the newer services that replaced them.', correct: false },
            { id: 'b', text: 'Paragraph 1 presents the positive view of social media in democracy, while paragraph 2 presents the negative view.', correct: true }
          ],
          explanation: 'Paragraph 1 highlights the argument that social media has democratized discourse and enabled political mobilization, while paragraph 2 presents the opposing view that it can undermine democracy through echo chambers and misinformation.',
          points: 1
        },
        {
          id: 'ap-8-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'b', text: 'Social media has both the potential to strengthen and weaken democracy, and its impact depends on design, regulation, and user behavior.', correct: true },
            { id: 'c', text: 'The Arab Spring uprisings of 2011 proved that social media is now essential for every successful modern democratic movement around the world.', correct: false },
            { id: 'a', text: 'Social media platforms should be banned by governments, since the misinformation they spread has already destroyed honest democratic debate everywhere.', correct: false },
            { id: 'd', text: 'Government regulation is the only real solution to the problems that social media has created for modern democratic societies today.', correct: false }
          ],
          explanation: 'The passage presents a balanced view, arguing that social media is neither inherently good nor bad for democracy, and that outcomes depend on platform design, content regulation, and digital literacy.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-8',
        type: 'complete_the_words',
        paragraph: 'Human dige____ is a complex process that begins in the mouth, where enzymes in sal____ start breaking down carboh____. Food then travels through the esop____ to the stomach, where hydroc____ acid further decomposes it. The small inte____ absorbs most nutri____ into the bloodstream. Benef____ bacteria in the large intestine assist with the final stages of dige____ and waste elimi____.',
        words: [
          { id: 'ctw-m2-8-w1', position: 0, displayText: 'dige', answer: 'stion', fullWord: 'digestion' },
          { id: 'ctw-m2-8-w2', position: 1, displayText: 'sal', answer: 'iva', fullWord: 'saliva' },
          { id: 'ctw-m2-8-w3', position: 2, displayText: 'carboh', answer: 'ydrates', fullWord: 'carbohydrates' },
          { id: 'ctw-m2-8-w4', position: 3, displayText: 'esop', answer: 'hagus', fullWord: 'esophagus' },
          { id: 'ctw-m2-8-w5', position: 4, displayText: 'hydroc', answer: 'hloric', fullWord: 'hydrochloric' },
          { id: 'ctw-m2-8-w6', position: 5, displayText: 'inte', answer: 'stine', fullWord: 'intestine' },
          { id: 'ctw-m2-8-w7', position: 6, displayText: 'nutri', answer: 'ents', fullWord: 'nutrients' },
          { id: 'ctw-m2-8-w8', position: 7, displayText: 'Benef', answer: 'icial', fullWord: 'Beneficial' },
          { id: 'ctw-m2-8-w9', position: 8, displayText: 'dige', answer: 'stion', fullWord: 'digestion' },
          { id: 'ctw-m2-8-w10', position: 9, displayText: 'elimi', answer: 'nation', fullWord: 'elimination' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-8',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Bike Registration',
        text: 'All bicycles parked on campus must be registered with the Campus Safety Office by October 1. Registration is free and helps recover stolen bicycles. To register, bring your bicycle to the Safety Office in Building 12 between 9:00 AM and 4:00 PM on weekdays. You will receive a registration sticker to place on your frame. Unregistered bicycles found after the deadline may be impounded. Locks are available for purchase at a discounted rate during registration.',
        questions: [
          {
            id: 'rdl-notice-m2-8-q1',
            stem: 'What is the deadline for bicycle registration?',
            options: [
              { id: 'a', text: 'September 15', correct: false },
              { id: 'b', text: 'October 1', correct: true },
              { id: 'd', text: 'November 1', correct: false },
              { id: 'c', text: 'October 15', correct: false }
            ],
            explanation: 'The notice states all bicycles must be registered by October 1.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-8-q2',
            stem: 'What happens to unregistered bicycles after the deadline?',
            options: [
              { id: 'b', text: 'Their owners will be fined', correct: false },
              { id: 'd', text: 'They will be placed in storage', correct: false },
              { id: 'a', text: 'They will be donated to charity', correct: false },
              { id: 'c', text: 'They may be impounded', correct: true }
            ],
            explanation: 'The notice says unregistered bicycles found after the deadline may be impounded.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-8',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Parents and Guardians of Geology 110 Students',
        from: 'Dr. Nathan Brooks',
        date: 'April 5, 2026',
        subject: 'Field Trip Permission Required',
        body: 'As part of the Geology 110 curriculum, students will participate in a field trip to Red Rock Canyon on April 26. We will depart campus at 7:30 AM by chartered bus and return by approximately 5:00 PM. Students should wear sturdy hiking shoes, bring sunscreen, and pack a lunch and water. Because the trip involves moderate hiking on uneven terrain, a signed permission form is required from each student. The form is attached to this email and must be returned to my office by April 18. Students who do not submit the form will remain on campus and complete an alternative assignment.',
        signoff: 'Thank you,',
        senderName: 'Dr. Nathan Brooks, Department of Geology',
        questions: [
          {
            id: 'rdl-email-m2-8-q1',
            stem: 'What time will the group leave campus?',
            options: [
              { id: 'd', text: '8:30 AM', correct: false },
              { id: 'b', text: '7:30 AM', correct: true },
              { id: 'c', text: '8:00 AM', correct: false },
              { id: 'a', text: '7:00 AM', correct: false }
            ],
            explanation: 'The email states the group will depart campus at 7:30 AM.',
            points: 1
          },
          {
            id: 'rdl-email-m2-8-q2',
            stem: 'What is the deadline for returning the permission form?',
            options: [
              { id: 'c', text: 'April 18', correct: true },
              { id: 'a', text: 'April 5', correct: false },
              { id: 'd', text: 'April 26', correct: false },
              { id: 'b', text: 'April 12', correct: false }
            ],
            explanation: 'The email says the form must be returned by April 18.',
            points: 1
          },
          {
            id: 'rdl-email-m2-8-q3',
            stem: 'What will happen to students who do not submit the form?',
            options: [
              { id: 'd', text: 'They will need to arrange their own transportation', correct: false },
              { id: 'a', text: 'They will receive a failing grade', correct: false },
              { id: 'b', text: 'They will complete an alternative assignment on campus', correct: true },
              { id: 'c', text: 'They will be allowed to attend without the form', correct: false }
            ],
            explanation: 'The email states students who do not submit the form will remain on campus and complete an alternative assignment.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-8',
        type: 'academic_passage',
        title: 'The Race to Explore Antarctica',
        text: 'In the early twentieth century, Antarctica was the last great unexplored region on Earth. Although whalers and seal hunters had glimpsed its coast for decades, no human had stood at the geographic South Pole. The decade between 1900 and 1912 saw a series of expeditions that captured the public imagination across Europe and the Americas. National pride, scientific curiosity, and personal ambition all played a role.\n\nThe most famous race for the South Pole pitted the Norwegian explorer Roald Amundsen against the British naval officer Robert Falcon Scott. Both expeditions departed for Antarctica in 1910, but their strategies differed sharply. Amundsen, who had originally planned to attempt the North Pole, used dogs to pull lightweight sleds over the snow and adopted clothing modeled on Arctic indigenous traditions. Scott relied on a mixture of motorized sledges, ponies, and ultimately human hauling.\n\nAmundsen reached the South Pole on December 14, 1911, with all members of his small team alive and in good condition. Scott\'s expedition arrived at the same spot more than a month later, only to find the Norwegian flag already flying. The disappointment of arriving second was followed by tragedy: Scott and his four companions all died on the return journey, defeated by storms, exhaustion, and the long distance between supply depots.\n\nThe contrast between the two expeditions has been studied for over a century. Many historians attribute Amundsen\'s success to his careful planning, willingness to learn from indigenous knowledge, and choice of more efficient transportation. Others note the role of luck and weather. What is clear is that polar exploration in this era was extraordinarily dangerous, and the heroic narratives that emerged from these journeys often obscured the practical lessons about logistics, equipment, and decision-making that later expeditions had to learn the hard way.',
        questions: [
          {
            id: 'ap-m2-8-q1',
            type: 'factual',
            stem: 'According to the passage, when did Amundsen reach the South Pole?',
            highlightText: null,
            options: [
              { id: 'd', text: 'November 14, 1911', correct: false },
              { id: 'a', text: 'December 14, 1910', correct: false },
              { id: 'b', text: 'December 14, 1911', correct: true },
              { id: 'c', text: 'January 14, 1912', correct: false }
            ],
            explanation: 'The passage states Amundsen reached the South Pole on December 14, 1911.',
            points: 1
          },
          {
            id: 'ap-m2-8-q2',
            type: 'vocabulary',
            stem: 'The word "obscured" in paragraph 4 most nearly means:',
            highlightText: 'obscured',
            options: [
              { id: 'c', text: 'Recorded and documented in great detail', correct: false },
              { id: 'a', text: 'Made hard to see or recognize', correct: true },
              { id: 'd', text: 'Translated for readers in other countries', correct: false },
              { id: 'b', text: 'Made famous and shared with many people', correct: false }
            ],
            explanation: 'In context, the heroic narratives "obscured" the practical lessons, meaning they made those lessons harder to see or recognize.',
            points: 1
          },
          {
            id: 'ap-m2-8-q3',
            type: 'inference',
            stem: 'It can be inferred from the passage that Amundsen made a strategic shift before reaching Antarctica because:',
            highlightText: null,
            options: [
              { id: 'd', text: 'The Norwegian government had ordered him to change his original plans', correct: false },
              { id: 'c', text: 'His original ship had been damaged and needed repairs', correct: false },
              { id: 'a', text: 'He had originally planned to attempt the North Pole instead', correct: true },
              { id: 'b', text: 'He wanted to compete directly against the British team', correct: false }
            ],
            explanation: 'The passage notes Amundsen had originally planned to attempt the North Pole but turned south, indicating a strategic shift.',
            points: 1
          },
          {
            id: 'ap-m2-8-q4',
            type: 'paragraph_relationships',
            stem: 'How does paragraph 4 differ from paragraphs 2 and 3?',
            highlightText: null,
            options: [
              { id: 'c', text: 'It contradicts the timeline that was established earlier in the passage.', correct: false },
              { id: 'd', text: 'It returns to the topic of whalers and seal hunters.', correct: false },
              { id: 'a', text: 'It introduces an entirely different expedition and its leader.', correct: false },
              { id: 'b', text: 'It moves from narrative description to historical analysis and interpretation.', correct: true }
            ],
            explanation: 'Paragraphs 2-3 narrate the events of the expeditions, while paragraph 4 analyzes the contrast between them and draws historical lessons.',
            points: 1
          },
          {
            id: 'ap-m2-8-q5',
            type: 'important_idea',
            stem: 'Which best expresses the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'b', text: 'The contrasting fates of the Amundsen and Scott expeditions illustrate how preparation and method shaped early polar exploration.', correct: true },
              { id: 'c', text: 'Antarctica was first reached by accident rather than through the careful planning of the expeditions that traveled there.', correct: false },
              { id: 'a', text: 'The race to the South Pole was a major turning point in the European politics of the twentieth century.', correct: false },
              { id: 'd', text: 'British naval training and expertise were the most important factors in the success of early polar exploration.', correct: false }
            ],
            explanation: 'The passage centers on the comparison between Amundsen and Scott and what their differing approaches reveal about polar exploration in that era.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-8',
        type: 'complete_the_words',
        paragraph: 'Many people enjoy reading books in their fr___ time. A good book can take you to a different pl___ or teach you something n___. Some readers prefer fic___, while others like history or sci___. Public libraries offer thousands of books that any___ can borrow for free. You can also buy books at a books___ or online. Reading every day is a go___ habit that improves both vocabulary and imagi___. Children who read often tend to do better in sch___. Many famous writers say that reading is the best way to learn how to write well.',
        words: [
          { id: 'ctw-m2e-8-w1', position: 0, displayText: 'fr', answer: 'ee', fullWord: 'free' },
          { id: 'ctw-m2e-8-w2', position: 1, displayText: 'pl', answer: 'ace', fullWord: 'place' },
          { id: 'ctw-m2e-8-w3', position: 2, displayText: 'n', answer: 'ew', fullWord: 'new' },
          { id: 'ctw-m2e-8-w4', position: 3, displayText: 'fic', answer: 'tion', fullWord: 'fiction' },
          { id: 'ctw-m2e-8-w5', position: 4, displayText: 'sci', answer: 'ence', fullWord: 'science' },
          { id: 'ctw-m2e-8-w6', position: 5, displayText: 'any', answer: 'one', fullWord: 'anyone' },
          { id: 'ctw-m2e-8-w7', position: 6, displayText: 'books', answer: 'tore', fullWord: 'bookstore' },
          { id: 'ctw-m2e-8-w8', position: 7, displayText: 'go', answer: 'od', fullWord: 'good' },
          { id: 'ctw-m2e-8-w9', position: 8, displayText: 'imagi', answer: 'nation', fullWord: 'imagination' },
          { id: 'ctw-m2e-8-w10', position: 9, displayText: 'sch', answer: 'ool', fullWord: 'school' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-8',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Drama Club Auditions',
        text: 'The campus drama club will hold auditions for its spring play on Tuesday and Wednesday, January 23 and 24. The play this year is "A Midsummer Night\'s Dream" by William Shakespeare. Auditions will take place in the theater from 5:00 PM to 8:00 PM both nights. Please prepare a one-minute monologue. No previous acting experience is required, and all students are welcome to try out. Performances will be in early April.',
        questions: [
          {
            id: 'rdl-notice-m2e-8-q1',
            stem: 'What play will the drama club perform?',
            options: [
              { id: 'a', text: 'Romeo and Juliet', correct: false },
              { id: 'c', text: 'The Merchant of Venice', correct: false },
              { id: 'b', text: 'A Midsummer Night\'s Dream', correct: true },
              { id: 'd', text: 'The Taming of the Shrew', correct: false }
            ],
            explanation: 'The notice states the play is "A Midsummer Night\'s Dream" by William Shakespeare.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-8-q2',
            stem: 'What should students prepare for the audition?',
            options: [
              { id: 'd', text: 'A short written essay', correct: false },
              { id: 'a', text: 'A memorized song', correct: false },
              { id: 'b', text: 'A short dance routine', correct: false },
              { id: 'c', text: 'A one-minute monologue', correct: true }
            ],
            explanation: 'The notice asks students to prepare a one-minute monologue.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-8',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Kevin Lee',
        from: 'Library Office',
        date: 'November 12, 2026',
        subject: 'Overdue Book Reminder',
        body: 'Dear Kevin,\n\nThis is a reminder that the book "Introduction to Economics" is now five days overdue. The current late fee is one dollar per day, so your fee is now five dollars. Please return the book to the front desk as soon as possible. If you need more time with the book, you can renew it online or by visiting the library, as long as no other student has requested it. Late fees can be paid online or at the library.',
        signoff: 'Thank you,',
        senderName: 'Library Staff',
        questions: [
          {
            id: 'rdl-email-m2e-8-q1',
            stem: 'How many days is the book overdue?',
            options: [
              { id: 'd', text: 'Ten days', correct: false },
              { id: 'c', text: 'Seven days', correct: false },
              { id: 'a', text: 'Three days', correct: false },
              { id: 'b', text: 'Five days', correct: true }
            ],
            explanation: 'The email states the book is now five days overdue.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-8-q2',
            stem: 'How much is the late fee per day?',
            options: [
              { id: 'c', text: 'Two dollars', correct: false },
              { id: 'b', text: 'One dollar', correct: true },
              { id: 'd', text: 'Five dollars', correct: false },
              { id: 'a', text: 'Fifty cents', correct: false }
            ],
            explanation: 'The email says the late fee is one dollar per day.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-8-q3',
            stem: 'What can Kevin do if he needs more time with the book?',
            options: [
              { id: 'b', text: 'Renew it online or in person', correct: true },
              { id: 'a', text: 'Pay an extra fee to keep it longer', correct: false },
              { id: 'd', text: 'Ask his teacher for permission', correct: false },
              { id: 'c', text: 'Buy the book from the library', correct: false }
            ],
            explanation: 'The email mentions that Kevin can renew the book online or by visiting the library.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-8',
        type: 'academic_passage',
        title: 'How Octopuses Solve Problems',
        text: 'Octopuses are among the most intelligent invertebrates in the world. They have large brains compared to their body size and are known for solving puzzles, opening jars, and even escaping from sealed containers. Researchers have studied octopuses in laboratories for many years to better understand how their minds work.\n\nOne reason octopuses are good at problem-solving is that they have nine "brains", one central brain and eight smaller ones, with one inside each arm. Each arm can move and respond to its surroundings independently, which gives the octopus great flexibility. Octopuses also use tools, such as carrying coconut shells to use as shelter. They can recognize different humans and remember which ones treated them well or badly. These remarkable abilities have changed how scientists think about intelligence in animals without backbones.',
        questions: [
          {
            id: 'ap-m2e-8-q1',
            type: 'factual',
            stem: 'How many brains does an octopus have?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Two', correct: false },
              { id: 'd', text: 'Nine', correct: true },
              { id: 'c', text: 'Eight', correct: false },
              { id: 'a', text: 'One', correct: false }
            ],
            explanation: 'The passage explains that octopuses have one central brain and eight smaller ones in their arms, nine in total.',
            points: 1
          },
          {
            id: 'ap-m2e-8-q2',
            type: 'factual',
            stem: 'What do octopuses sometimes use as shelter?',
            highlightText: null,
            options: [
              { id: 'c', text: 'Other animals\' nests', correct: false },
              { id: 'a', text: 'Plastic bottles', correct: false },
              { id: 'b', text: 'Coconut shells', correct: true },
              { id: 'd', text: 'Sea plants', correct: false }
            ],
            explanation: 'The passage says octopuses use coconut shells as shelter.',
            points: 1
          },
          {
            id: 'ap-m2e-8-q3',
            type: 'vocabulary',
            stem: 'The word "invertebrates" in paragraph 1 refers to:',
            highlightText: 'invertebrates',
            options: [
              { id: 'a', text: 'Animals without backbones', correct: true },
              { id: 'd', text: 'Animals that change color', correct: false },
              { id: 'b', text: 'Animals living in deep water', correct: false },
              { id: 'c', text: 'Very small ocean creatures', correct: false }
            ],
            explanation: 'In context, "invertebrates" means animals without backbones, confirmed by the final sentence.',
            points: 1
          },
          {
            id: 'ap-m2e-8-q4',
            type: 'inference',
            stem: 'What can be inferred about octopuses\' arms?',
            highlightText: null,
            options: [
              { id: 'b', text: 'They can act independently from the central brain', correct: true },
              { id: 'd', text: 'They are mostly used for swimming', correct: false },
              { id: 'a', text: 'They are too weak to lift heavy objects', correct: false },
              { id: 'c', text: 'They can grow back if they are cut off', correct: false }
            ],
            explanation: 'The passage says each arm can move and respond independently, suggesting they act with some independence from the central brain.',
            points: 1
          },
          {
            id: 'ap-m2e-8-q5',
            type: 'important_idea',
            stem: 'Which sentence best states the main idea?',
            highlightText: null,
            options: [
              { id: 'd', text: 'All ocean animals have similar levels of intelligence, including memory and problem-solving skills.', correct: false },
              { id: 'a', text: 'Octopuses are dangerous animals and should always be kept in special laboratory tanks.', correct: false },
              { id: 'c', text: 'Scientists have not yet discovered why octopuses are so intelligent or how they solve puzzles.', correct: false },
              { id: 'b', text: 'Octopuses are unusually intelligent for animals without backbones, with abilities like problem-solving and memory.', correct: true }
            ],
            explanation: 'The passage describes the various intelligent behaviors of octopuses and how they have changed scientific understanding.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader, which reads window.READING_TEST_8
window.READING_TEST_8 = window.READING_SECTION_8;
