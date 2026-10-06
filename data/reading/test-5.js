window.READING_SECTION_5 = {
  id: 'reading-section-5',
  title: 'Reading Practice Test 5',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-5',
      type: 'complete_the_words',
      paragraph: 'Ocean currents are contin____ flows of seawater that circu____ across the globe. Surface curr____ are primarily driven by preva____ winds, while deep-ocean circu____ depends on diffe____ in water den____ caused by varia____ in temperature and sali____. Together, these move____ regulate global climate patterns.',
      words: [
        { id: 'ctw-5-w1', position: 0, displayText: 'contin', answer: 'uous', fullWord: 'continuous' },
        { id: 'ctw-5-w2', position: 1, displayText: 'circu', answer: 'late', fullWord: 'circulate' },
        { id: 'ctw-5-w3', position: 2, displayText: 'curr', answer: 'ents', fullWord: 'currents' },
        { id: 'ctw-5-w4', position: 3, displayText: 'preva', answer: 'iling', fullWord: 'prevailing' },
        { id: 'ctw-5-w5', position: 4, displayText: 'circu', answer: 'lation', fullWord: 'circulation' },
        { id: 'ctw-5-w6', position: 5, displayText: 'diffe', answer: 'rences', fullWord: 'differences' },
        { id: 'ctw-5-w7', position: 6, displayText: 'den', answer: 'sity', fullWord: 'density' },
        { id: 'ctw-5-w8', position: 7, displayText: 'varia', answer: 'tions', fullWord: 'variations' },
        { id: 'ctw-5-w9', position: 8, displayText: 'sali', answer: 'nity', fullWord: 'salinity' },
        { id: 'ctw-5-w10', position: 9, displayText: 'move', answer: 'ments', fullWord: 'movements' }
      ],
      points: 10
    },
    {
      id: 'ctw-5b',
      type: 'complete_the_words',
      paragraph: 'Watersheds are land areas where all the surf____ water drains into a common river, lake, or ocean. The headw____ of a watershed often lie in mount____ regions, where rain and snow accum____ and gradually flow downhill. As water descends, it car____ sediment, mine____, and dissolved nutr____ that shape the landscape and support diverse ecosy____. Healthy watersheds prov____ drinking water for billions of people and regu____ the flow of rivers throughout the year.',
      words: [
        { id: 'ctw-5b-w1', position: 0, displayText: 'surf', answer: 'ace', fullWord: 'surface' },
        { id: 'ctw-5b-w2', position: 1, displayText: 'headw', answer: 'aters', fullWord: 'headwaters' },
        { id: 'ctw-5b-w3', position: 2, displayText: 'mount', answer: 'ainous', fullWord: 'mountainous' },
        { id: 'ctw-5b-w4', position: 3, displayText: 'accum', answer: 'ulate', fullWord: 'accumulate' },
        { id: 'ctw-5b-w5', position: 4, displayText: 'car', answer: 'ries', fullWord: 'carries' },
        { id: 'ctw-5b-w6', position: 5, displayText: 'mine', answer: 'rals', fullWord: 'minerals' },
        { id: 'ctw-5b-w7', position: 6, displayText: 'nutr', answer: 'ients', fullWord: 'nutrients' },
        { id: 'ctw-5b-w8', position: 7, displayText: 'ecosy', answer: 'stems', fullWord: 'ecosystems' },
        { id: 'ctw-5b-w9', position: 8, displayText: 'prov', answer: 'ide', fullWord: 'provide' },
        { id: 'ctw-5b-w10', position: 9, displayText: 'regu', answer: 'late', fullWord: 'regulate' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-5',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Parking Permit Renewal',
      to: 'All Student Permit Holders',
      from: 'parking@clearwateruniv.edu',
      date: '03/28/2026',
      subject: 'Parking Permit Renewal for Fall 2026',
      body: 'Dear Students,\n\nParking permits for the current academic year expire on May 31. If you wish to renew your permit for Fall 2026, please submit your renewal application through the Transportation Services portal by May 15. Returning students receive priority and a ten percent discount on the annual rate. After May 15, remaining permits will be offered to incoming students on a first-come, first-served basis.\n\nPlease ensure your vehicle registration information is up to date before applying.',
      signoff: 'Thank you,',
      senderName: 'Transportation Services Office\nClearwater University',
      questions: [
        {
          id: 'rdl-email-5-q1',
          stem: 'What benefit do returning students receive?',
          options: [
            { id: 'c', text: 'A reserved parking spot near their dormitory', correct: false },
            { id: 'b', text: 'Priority access and a ten percent discount', correct: true },
            { id: 'd', text: 'The ability to share their permit with a roommate', correct: false },
            { id: 'a', text: 'A free parking permit for one semester', correct: false }
          ],
          explanation: 'The email states that returning students receive priority and a ten percent discount on the annual rate.',
          points: 1
        },
        {
          id: 'rdl-email-5-q2',
          stem: 'What happens after the May 15 deadline?',
          options: [
            { id: 'b', text: 'Permit prices rise by twenty percent for everyone', correct: false },
            { id: 'a', text: 'All existing permits are canceled without exception', correct: false },
            { id: 'c', text: 'Remaining permits are offered to incoming students', correct: true },
            { id: 'd', text: 'A lottery is held for the available permits', correct: false }
          ],
          explanation: 'The email states that after May 15, remaining permits will be offered to incoming students on a first-come, first-served basis.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-5',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Film Club Movie Selection',
      messages: [
        { sender: 'Rachel Kim', time: '4:00 P.M.', text: 'Hey film club! We need to pick the movie for next Friday\'s screening. Any suggestions? It has to be something we can stream legally through the university license.' },
        { sender: 'Trevor Adams', time: '4:05 P.M.', text: 'How about a classic? I have been wanting to watch Rear Window. It is on the university streaming list.' },
        { sender: 'Zara Osman', time: '4:09 P.M.', text: 'I love that one, but we showed a Hitchcock film last month. Maybe something more recent?' },
        { sender: 'Luis Fernandez', time: '4:13 P.M.', text: 'What about Moonlight? It won Best Picture and it is definitely available through the license.' },
        { sender: 'Rachel Kim', time: '4:16 P.M.', text: 'Good choice. Any objections? We could also pair it with a short discussion on cinematography techniques afterward.' },
        { sender: 'Trevor Adams', time: '4:20 P.M.', text: 'I am good with Moonlight. The cinematography discussion is a great idea too.' },
        { sender: 'Zara Osman', time: '4:22 P.M.', text: 'Same here. Rachel, can you book the auditorium? I will handle the popcorn and snacks like last time.' }
      ],
      questions: [
        {
          id: 'rdl-tc-5-q1',
          stem: 'Why does Zara suggest against showing Rear Window?',
          options: [
            { id: 'a', text: 'It is not available on the university streaming service', correct: false },
            { id: 'd', text: 'The auditorium cannot play older films', correct: false },
            { id: 'c', text: 'She does not enjoy classic films', correct: false },
            { id: 'b', text: 'They already showed a Hitchcock film recently', correct: true }
          ],
          explanation: 'Zara says she loves Rear Window but notes they showed a Hitchcock film last month, suggesting they pick something different.',
          points: 1
        },
        {
          id: 'rdl-tc-5-q2',
          stem: 'What will happen after the film screening?',
          options: [
            { id: 'c', text: 'A meet-and-greet with a local filmmaker', correct: false },
            { id: 'b', text: 'A discussion on cinematography techniques', correct: true },
            { id: 'd', text: 'A writing workshop on film reviews', correct: false },
            { id: 'a', text: 'A vote on the next month\'s schedule', correct: false }
          ],
          explanation: 'Rachel suggests pairing the screening with a short discussion on cinematography techniques, and the others agree.',
          points: 1
        },
        {
          id: 'rdl-tc-5-q3',
          stem: 'What does Zara volunteer to do?',
          options: [
            { id: 'c', text: 'Handle popcorn and snacks', correct: true },
            { id: 'b', text: 'Lead the discussion afterward', correct: false },
            { id: 'd', text: 'Set up the streaming equipment', correct: false },
            { id: 'a', text: 'Book the auditorium', correct: false }
          ],
          explanation: 'Zara says she will handle the popcorn and snacks, noting she did the same thing last time.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-5',
      type: 'academic_passage',
      title: 'Cognitive Biases and Decision Making',
      text: 'Humans pride themselves on being rational decision makers, yet decades of research in psychology and behavioral economics have shown that our judgments are routinely shaped by cognitive biases. These systematic errors in thinking arise not from a lack of intelligence but from the brain\'s reliance on mental shortcuts, known as heuristics, that evolved to help us process information quickly in a complex world.\n\nOne of the most well-documented biases is confirmation bias, the tendency to seek out, interpret, and remember information that supports our existing beliefs while ignoring evidence that contradicts them. For instance, a person who believes a particular diet is effective may focus on success stories and dismiss studies showing no benefit. This bias can reinforce false beliefs and make people resistant to changing their minds even when presented with strong opposing evidence.\n\nAnother pervasive bias is the anchoring effect, which occurs when people rely too heavily on the first piece of information they encounter when making decisions. In negotiations, for example, the initial price offered tends to set the range for the entire discussion, regardless of whether that figure is reasonable. Experiments have demonstrated that even arbitrary numbers, such as the last two digits of a participant\'s social security number, can influence estimates of unrelated quantities.\n\nUnderstanding cognitive biases has practical implications far beyond academic psychology. In medicine, awareness of biases can help physicians avoid diagnostic errors caused by premature conclusions. In public policy, recognizing how biases influence voter behavior can lead to more transparent communication strategies. Some researchers advocate for structured decision-making frameworks and deliberate reflection as tools for reducing the influence of biases, though eliminating them entirely remains unlikely given that they are deeply embedded in human cognition.',
      questions: [
        {
          id: 'ap-5-q1',
          type: 'factual',
          stem: 'According to the passage, cognitive biases arise from the brain\'s reliance on:',
          highlightText: null,
          options: [
            { id: 'a', text: 'Emotional instincts developed in childhood', correct: false },
            { id: 'b', text: 'Mental shortcuts called heuristics', correct: true },
            { id: 'c', text: 'Formal education and cultural conditioning', correct: false },
            { id: 'd', text: 'Deliberate efforts to simplify problems', correct: false }
          ],
          explanation: 'The passage states that cognitive biases arise from the brain\'s reliance on mental shortcuts, known as heuristics, that evolved to help process information quickly.',
          points: 1
        },
        {
          id: 'ap-5-q2',
          type: 'vocabulary',
          stem: 'The word "pervasive" in paragraph 3 is closest in meaning to:',
          highlightText: 'pervasive',
          options: [
            { id: 'a', text: 'Rare and unusual', correct: false },
            { id: 'c', text: 'Difficult to detect', correct: false },
            { id: 'd', text: 'Only recently discovered', correct: false },
            { id: 'b', text: 'Widespread and common', correct: true }
          ],
          explanation: '"Pervasive" means existing in or spreading through every part of something, indicating the anchoring effect is widespread and commonly observed.',
          points: 1
        },
        {
          id: 'ap-5-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that cognitive biases are difficult to eliminate because they:',
          highlightText: null,
          options: [
            { id: 'a', text: 'Are taught in schools and reinforced from a young age', correct: false },
            { id: 'b', text: 'Are deeply rooted in how the human brain processes information', correct: true },
            { id: 'd', text: 'Have been reinforced by modern technology and constant media exposure', correct: false },
            { id: 'c', text: 'Only affect people who have not received a formal education', correct: false }
          ],
          explanation: 'The passage concludes that eliminating biases entirely remains unlikely because they are deeply embedded in human cognition, suggesting they are fundamental to brain function.',
          points: 1
        },
        {
          id: 'ap-5-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraphs 2 and 3?',
          highlightText: null,
          options: [
            { id: 'b', text: 'Paragraph 2 defines biases, while paragraph 3 explains avoiding them.', correct: false },
            { id: 'a', text: 'Both paragraphs provide specific examples of cognitive biases.', correct: true },
            { id: 'c', text: 'Paragraph 2 discusses positive biases and paragraph 3 negative ones.', correct: false },
            { id: 'd', text: 'Paragraph 2 presents history, while paragraph 3 covers current research.', correct: false }
          ],
          explanation: 'Paragraph 2 describes confirmation bias with an example, and paragraph 3 describes the anchoring effect with examples. Both serve as specific illustrations of cognitive biases.',
          points: 1
        },
        {
          id: 'ap-5-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'd', text: 'Doctors and politicians are the people most affected by cognitive biases in their professional decision making', correct: false },
            { id: 'a', text: 'Confirmation bias is the single most dangerous cognitive bias affecting personal and public decision making today', correct: false },
            { id: 'c', text: 'Heuristics are outdated evolutionary tools that no longer serve any useful purpose in today\'s complex world', correct: false },
            { id: 'b', text: 'Cognitive biases are systematic thinking errors with wide-ranging consequences, though they are difficult to fully overcome.', correct: true }
          ],
          explanation: 'The passage explains that cognitive biases are widespread, systematic errors rooted in brain function, with implications across many fields, and notes that while they can be managed, they cannot be fully eliminated.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-5',
        type: 'complete_the_words',
        paragraph: 'Soil compo____ varies greatly depending on climate, vegetation, and geolo____ factors. The upper layer, known as top____, contains decomp____ organic matter essential for plant nutri____. Beneath this lies sub____, which is denser and contains fewer nutr____. Farmers analyze soil sam____ to determine fertil____ levels and make informed deci____ about crop management.',
        words: [
          { id: 'ctw-m2-5-w1', position: 0, displayText: 'compo', answer: 'sition', fullWord: 'composition' },
          { id: 'ctw-m2-5-w2', position: 1, displayText: 'geolo', answer: 'gical', fullWord: 'geological' },
          { id: 'ctw-m2-5-w3', position: 2, displayText: 'top', answer: 'soil', fullWord: 'topsoil' },
          { id: 'ctw-m2-5-w4', position: 3, displayText: 'decomp', answer: 'osed', fullWord: 'decomposed' },
          { id: 'ctw-m2-5-w5', position: 4, displayText: 'nutri', answer: 'tion', fullWord: 'nutrition' },
          { id: 'ctw-m2-5-w6', position: 5, displayText: 'sub', answer: 'soil', fullWord: 'subsoil' },
          { id: 'ctw-m2-5-w7', position: 6, displayText: 'nutr', answer: 'ients', fullWord: 'nutrients' },
          { id: 'ctw-m2-5-w8', position: 7, displayText: 'sam', answer: 'ples', fullWord: 'samples' },
          { id: 'ctw-m2-5-w9', position: 8, displayText: 'fertil', answer: 'ity', fullWord: 'fertility' },
          { id: 'ctw-m2-5-w10', position: 9, displayText: 'deci', answer: 'sions', fullWord: 'decisions' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-5',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Cafeteria Renovation',
        text: 'The main campus cafeteria in Baker Hall will undergo renovation beginning May 1 and is expected to reopen by August 15. During this period, meals will be served at the temporary food court set up in the East Wing of the Student Union. Meal plan holders can use their cards at all temporary stations. The renovation will include expanded seating, new kitchen equipment, and improved ventilation. We appreciate your patience during this improvement project.',
        questions: [
          {
            id: 'rdl-notice-m2-5-q1',
            stem: 'Where will meals be served during the renovation?',
            options: [
              { id: 'b', text: 'At the East Wing of the Student Union', correct: true },
              { id: 'c', text: 'In the outdoor courtyard next to Baker Hall', correct: false },
              { id: 'a', text: 'In the main lobby area of Baker Hall', correct: false },
              { id: 'd', text: 'At nearby off-campus restaurants and local coffee shops', correct: false }
            ],
            explanation: 'The notice states meals will be served at the temporary food court set up in the East Wing of the Student Union.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-5-q2',
            stem: 'What improvement is NOT mentioned in the renovation plans?',
            options: [
              { id: 'd', text: 'Improved ventilation in the cafeteria', correct: false },
              { id: 'b', text: 'New equipment for the kitchen', correct: false },
              { id: 'c', text: 'A new outdoor dining patio', correct: true },
              { id: 'a', text: 'Expanded seating in the cafeteria', correct: false }
            ],
            explanation: 'The notice mentions expanded seating, new kitchen equipment, and improved ventilation, but does not mention a new outdoor dining patio.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-5',
        type: 'read_daily_life',
        textType: 'email',
        to: 'All Undergraduate Students',
        from: 'Campus Health Services',
        date: 'April 2, 2026',
        subject: 'Campus Wellness Workshop Series',
        body: 'Campus Health Services is excited to announce a four-part wellness workshop series starting April 14. Sessions will be held every Monday from 12:00 PM to 1:00 PM in Room 210 of the Wellness Center. Topics include stress management, healthy eating on a budget, sleep hygiene, and mindfulness techniques. Each session is led by a licensed counselor and is free of charge. Lunch will be provided for registered participants. Space is limited to forty students per session, so please register through the student health portal by April 10. Walk-ins will be accepted only if seats are available.',
        signoff: 'Stay well,',
        senderName: 'Dr. Angela Morrison, Director of Campus Health Services',
        questions: [
          {
            id: 'rdl-email-m2-5-q1',
            stem: 'How many workshops are in the series?',
            options: [
              { id: 'a', text: 'Two', correct: false },
              { id: 'c', text: 'Four', correct: true },
              { id: 'd', text: 'Six', correct: false },
              { id: 'b', text: 'Three', correct: false }
            ],
            explanation: 'The email announces a four-part wellness workshop series.',
            points: 1
          },
          {
            id: 'rdl-email-m2-5-q2',
            stem: 'What is the registration deadline?',
            options: [
              { id: 'a', text: 'April 2', correct: false },
              { id: 'c', text: 'April 14', correct: false },
              { id: 'b', text: 'April 10', correct: true },
              { id: 'd', text: 'April 21', correct: false }
            ],
            explanation: 'The email asks students to register through the student health portal by April 10.',
            points: 1
          },
          {
            id: 'rdl-email-m2-5-q3',
            stem: 'What will be provided for registered participants?',
            options: [
              { id: 'c', text: 'Lunch', correct: true },
              { id: 'd', text: 'Wellness kits', correct: false },
              { id: 'b', text: 'Course credit', correct: false },
              { id: 'a', text: 'Free textbooks', correct: false }
            ],
            explanation: 'The email states that lunch will be provided for registered participants.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-5',
        type: 'academic_passage',
        title: 'The Global Journey of Chocolate',
        text: 'Chocolate originated in Central and South America, where the cacao tree had been cultivated for at least three thousand years before European contact. The Maya and Aztec civilizations consumed cacao primarily as a bitter, frothy beverage flavored with chili peppers and corn. They valued cacao beans so highly that they served as currency, with prices recorded for everything from a turkey to a day of labor.\n\nWhen Spanish conquistadors brought cacao back to Europe in the sixteenth century, the drink underwent a dramatic transformation. European tastes preferred sweetness, so sugar and cinnamon replaced the chili and cornmeal of the original recipe. Hot chocolate became a luxury beverage at royal courts, served from elaborate porcelain pots and consumed primarily by the wealthy who could afford imported cacao and refined sugar.\n\nThe nineteenth century brought the changes that turned chocolate from a drink into the solid food familiar today. In 1828, a Dutch chemist invented a press that separated cocoa solids from cocoa butter, producing a less oily and more easily mixed powder. Decades later, Swiss innovators developed milk chocolate by adding condensed milk to the cocoa mixture, and a process called conching gave chocolate its smooth texture. These technical advances, combined with industrial manufacturing, made chocolate affordable to working-class consumers for the first time.\n\nToday, the chocolate industry is global in scale, but most cacao still comes from a relatively small number of tropical countries, particularly in West Africa. The economics of cacao farming have raised difficult questions about fair trade, labor practices, and the environmental impact of expanding cocoa production. Consumer awareness of these issues has grown, and a small but expanding market for ethically sourced chocolate now exists alongside the dominant mass-market producers.',
        questions: [
          {
            id: 'ap-m2-5-q1',
            type: 'factual',
            stem: 'According to the passage, how did the Maya and Aztec primarily consume cacao?',
            highlightText: null,
            options: [
              { id: 'c', text: 'As a bitter beverage flavored with chili and corn', correct: true },
              { id: 'd', text: 'As a thick paste applied to ceremonial stone objects', correct: false },
              { id: 'b', text: 'As a sweetened dessert served at important religious celebrations', correct: false },
              { id: 'a', text: 'As solid bars eaten as snacks during long journeys', correct: false }
            ],
            explanation: 'The passage states the Maya and Aztec consumed cacao as a bitter, frothy beverage flavored with chili peppers and corn.',
            points: 1
          },
          {
            id: 'ap-m2-5-q2',
            type: 'vocabulary',
            stem: 'The word "conching" in paragraph 3 most nearly refers to:',
            highlightText: 'conching',
            options: [
              { id: 'c', text: 'A method of packaging finished chocolate bars for shipment', correct: false },
              { id: 'd', text: 'A technique for shaping individual chocolate bars by hand', correct: false },
              { id: 'a', text: 'A method of mixing cocoa powder with refined sugar', correct: false },
              { id: 'b', text: 'A process used to give chocolate a smooth texture', correct: true }
            ],
            explanation: 'The passage describes conching as the process that gave chocolate its smooth texture.',
            points: 1
          },
          {
            id: 'ap-m2-5-q3',
            type: 'inference',
            stem: 'It can be inferred that one reason chocolate was a luxury in early modern Europe was that:',
            highlightText: null,
            options: [
              { id: 'a', text: 'European chefs lacked the training needed to prepare the drink properly', correct: false },
              { id: 'd', text: 'Most Europeans strongly disliked its flavor and refused to drink it', correct: false },
              { id: 'c', text: 'It was reserved by law for members of the royal courts', correct: false },
              { id: 'b', text: 'Both cacao and sugar had to be imported and were expensive', correct: true }
            ],
            explanation: 'The passage notes hot chocolate was consumed primarily by the wealthy who could afford imported cacao and refined sugar, supporting this inference.',
            points: 1
          },
          {
            id: 'ap-m2-5-q4',
            type: 'paragraph_relationships',
            stem: 'What is the role of paragraph 4 in the passage?',
            highlightText: null,
            options: [
              { id: 'c', text: 'It compares the flavor of modern chocolate with its original Aztec version.', correct: false },
              { id: 'd', text: 'It directly contradicts the claims made about industrial chocolate in paragraph 3.', correct: false },
              { id: 'b', text: 'It shifts focus from chocolate\'s history to its present-day economics and ethics.', correct: true },
              { id: 'a', text: 'It explains how Swiss innovators perfected the modern recipe for milk chocolate.', correct: false }
            ],
            explanation: 'Paragraph 4 moves from the historical narrative to discuss the current global industry, labor practices, and ethical sourcing.',
            points: 1
          },
          {
            id: 'ap-m2-5-q5',
            type: 'important_idea',
            stem: 'Which best expresses the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'a', text: 'Modern chocolate would be completely unrecognizable to the ancient Mesoamerican civilizations that first cultivated and drank the bitter beverage', correct: false },
              { id: 'd', text: 'The use of cacao beans as currency in Mesoamerica was the true foundation of the modern global chocolate trade', correct: false },
              { id: 'b', text: 'Chocolate has been transformed many times across history, from Mesoamerican drink to global industrial product, raising new questions today.', correct: true },
              { id: 'c', text: 'Industrial manufacturing has made modern chocolate worse in taste and quality than the handcrafted versions that came before it', correct: false }
            ],
            explanation: 'The passage traces chocolate from Mesoamerican beverage through European luxury and industrial transformation, ending with current ethical questions.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-5',
        type: 'complete_the_words',
        paragraph: 'Music is an important part of many people\'s li___. Some people listen to music while they wo___ or study. Others enjoy playing mus___ instruments like the piano or gui___. Concerts and live performances are very pop___ in cities around the world. Music can change how we fe___ and help us relax after a long day. Schools often teach mu___ classes to young children. Lear___ to play an instrument takes time and prac___. Many famous musicians started when they were yo___. Today, music is also used in films and advertising to create emotion.',
        words: [
          { id: 'ctw-m2e-5-w1', position: 0, displayText: 'li', answer: 'ves', fullWord: 'lives' },
          { id: 'ctw-m2e-5-w2', position: 1, displayText: 'wo', answer: 'rk', fullWord: 'work' },
          { id: 'ctw-m2e-5-w3', position: 2, displayText: 'mus', answer: 'ical', fullWord: 'musical' },
          { id: 'ctw-m2e-5-w4', position: 3, displayText: 'gui', answer: 'tar', fullWord: 'guitar' },
          { id: 'ctw-m2e-5-w5', position: 4, displayText: 'pop', answer: 'ular', fullWord: 'popular' },
          { id: 'ctw-m2e-5-w6', position: 5, displayText: 'fe', answer: 'el', fullWord: 'feel' },
          { id: 'ctw-m2e-5-w7', position: 6, displayText: 'mu', answer: 'sic', fullWord: 'music' },
          { id: 'ctw-m2e-5-w8', position: 7, displayText: 'Lear', answer: 'ning', fullWord: 'Learning' },
          { id: 'ctw-m2e-5-w9', position: 8, displayText: 'prac', answer: 'tice', fullWord: 'practice' },
          { id: 'ctw-m2e-5-w10', position: 9, displayText: 'yo', answer: 'ung', fullWord: 'young' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-5',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Recycling Program Update',
        text: 'The campus recycling program is adding new bins for glass and plastic across all academic buildings. Beginning Monday, students will see four bins in each main hallway: paper, plastic, glass, and general waste. Volunteers will be available next week to answer questions about which items go in which bin. Please rinse all containers before recycling. Items that are dirty or broken cannot be accepted.',
        questions: [
          {
            id: 'rdl-notice-m2e-5-q1',
            stem: 'How many bins will there be in each main hallway?',
            options: [
              { id: 'b', text: 'Three', correct: false },
              { id: 'd', text: 'Five', correct: false },
              { id: 'c', text: 'Four', correct: true },
              { id: 'a', text: 'Two', correct: false }
            ],
            explanation: 'The notice says students will see four bins: paper, plastic, glass, and general waste.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-5-q2',
            stem: 'What should students do before recycling containers?',
            options: [
              { id: 'b', text: 'Rinse them', correct: true },
              { id: 'c', text: 'Label them', correct: false },
              { id: 'a', text: 'Crush them', correct: false },
              { id: 'd', text: 'Tie them in bags', correct: false }
            ],
            explanation: 'The notice asks students to rinse all containers before recycling.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-5',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Maria Santos',
        from: 'Coach Williams',
        date: 'October 18, 2026',
        subject: 'Tennis Practice Schedule',
        body: 'Hi Maria,\n\nThank you for joining the tennis club. Practices are held on Tuesday and Thursday afternoons from 4:00 PM to 6:00 PM at the outdoor courts behind the gym. We also have an optional Saturday practice at 9:00 AM. Please bring your own racket and water bottle. Tennis balls are provided by the club. The first practice is this Tuesday. Please arrive ten minutes early so we can introduce new members.',
        signoff: 'See you soon,',
        senderName: 'Coach Williams',
        questions: [
          {
            id: 'rdl-email-m2e-5-q1',
            stem: 'What days are regular practices held?',
            options: [
              { id: 'c', text: 'Wednesday and Friday', correct: false },
              { id: 'b', text: 'Tuesday and Thursday', correct: true },
              { id: 'd', text: 'Friday and Saturday', correct: false },
              { id: 'a', text: 'Monday and Wednesday', correct: false }
            ],
            explanation: 'The email states practices are on Tuesday and Thursday.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-5-q2',
            stem: 'What item is provided by the club?',
            options: [
              { id: 'd', text: 'Tennis shoes', correct: false },
              { id: 'a', text: 'Tennis rackets', correct: false },
              { id: 'b', text: 'Water bottles', correct: false },
              { id: 'c', text: 'Tennis balls', correct: true }
            ],
            explanation: 'The email mentions that tennis balls are provided by the club.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-5-q3',
            stem: 'Why should new members arrive early?',
            options: [
              { id: 'c', text: 'So they can be introduced', correct: true },
              { id: 'd', text: 'To help set up the equipment', correct: false },
              { id: 'b', text: 'To pay the club fee', correct: false },
              { id: 'a', text: 'To warm up before practice', correct: false }
            ],
            explanation: 'The email asks new members to arrive ten minutes early so they can be introduced.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-5',
        type: 'academic_passage',
        title: 'The Story of Coffee',
        text: 'Coffee is one of the most popular drinks in the world. It comes from the seeds of the coffee plant, which grows in warm regions near the equator. According to legend, coffee was first discovered hundreds of years ago in Ethiopia, when a young goat herder noticed that his goats had more energy after eating berries from a certain plant.\n\nFrom Ethiopia, coffee spread to the Middle East, then to Europe, and finally to the rest of the world. Today, the largest coffee-producing countries include Brazil, Vietnam, and Colombia. The coffee industry employs millions of people, especially in tropical countries. Many small farmers depend on coffee sales to support their families. In recent years, more people have started buying "fair trade" coffee, which guarantees a fair price to the farmers who grow it.',
        questions: [
          {
            id: 'ap-m2e-5-q1',
            type: 'factual',
            stem: 'Where was coffee first discovered, according to the legend?',
            highlightText: null,
            options: [
              { id: 'd', text: 'Colombia', correct: false },
              { id: 'b', text: 'Ethiopia', correct: true },
              { id: 'c', text: 'Vietnam', correct: false },
              { id: 'a', text: 'Brazil', correct: false }
            ],
            explanation: 'The passage says coffee was first discovered in Ethiopia.',
            points: 1
          },
          {
            id: 'ap-m2e-5-q2',
            type: 'factual',
            stem: 'Who first noticed that goats had more energy after eating coffee berries?',
            highlightText: null,
            options: [
              { id: 'c', text: 'A young goat herder', correct: true },
              { id: 'a', text: 'A young plant scientist', correct: false },
              { id: 'd', text: 'A traveler from Europe', correct: false },
              { id: 'b', text: 'A local coffee farmer', correct: false }
            ],
            explanation: 'The passage states it was a young goat herder.',
            points: 1
          },
          {
            id: 'ap-m2e-5-q3',
            type: 'vocabulary',
            stem: 'The phrase "fair trade" in paragraph 2 means:',
            highlightText: 'fair trade',
            options: [
              { id: 'c', text: 'A label used for coffee grown in many different countries', correct: false },
              { id: 'd', text: 'A label given only to coffee grown without any chemicals', correct: false },
              { id: 'b', text: 'A system that guarantees a fair price to coffee farmers', correct: true },
              { id: 'a', text: 'A system that offers coffee at a specially discounted price', correct: false }
            ],
            explanation: 'The passage explains that fair trade guarantees a fair price to the farmers who grow the coffee.',
            points: 1
          },
          {
            id: 'ap-m2e-5-q4',
            type: 'inference',
            stem: 'Why is coffee important to many small farmers?',
            highlightText: null,
            options: [
              { id: 'c', text: 'They can drink as much coffee as they want', correct: false },
              { id: 'd', text: 'It grows very quickly and needs almost no care', correct: false },
              { id: 'a', text: 'It is the only crop that they can grow', correct: false },
              { id: 'b', text: 'They depend on coffee sales to support their families', correct: true }
            ],
            explanation: 'The passage says many small farmers depend on coffee sales to support their families.',
            points: 1
          },
          {
            id: 'ap-m2e-5-q5',
            type: 'important_idea',
            stem: 'What is the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Coffee has a long history and is now important to economies around the world.', correct: true },
              { id: 'c', text: 'Coffee is grown only in Ethiopia and Brazil, where the climate is very warm.', correct: false },
              { id: 'd', text: 'All coffee drinkers should buy fair trade coffee in order to help small farmers.', correct: false },
              { id: 'a', text: 'Coffee is a much healthier drink than most other popular drinks in the world.', correct: false }
            ],
            explanation: 'The passage describes the origin of coffee, its spread around the world, and its importance to many countries today.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader, which reads window.READING_TEST_5
window.READING_TEST_5 = window.READING_SECTION_5;
