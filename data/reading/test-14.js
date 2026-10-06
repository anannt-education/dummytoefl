window.READING_SECTION_14 = {
  id: 'reading-section-14',
  title: 'Reading Practice Test 14',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-14',
      type: 'complete_the_words',
      paragraph: 'The Earth\'s atmosphere is divided into several dist____ layers, each with unique charact____. The troposphere, the lowest layer, contains most of the atmos____ water vapor and is where wea____ phenomena occur. Above it lies the strato____, which houses the ozone layer that abs____ harmful ultraviolet radi____. Higher layers, including the mesos____ and thermo____, become progressively thin____ as altitude increases.',
      words: [
        { id: 'ctw-14-w1', position: 0, displayText: 'dist', answer: 'inct', fullWord: 'distinct' },
        { id: 'ctw-14-w2', position: 1, displayText: 'charact', answer: 'eristics', fullWord: 'characteristics' },
        { id: 'ctw-14-w3', position: 2, displayText: 'atmos', answer: 'pheric', fullWord: 'atmospheric' },
        { id: 'ctw-14-w4', position: 3, displayText: 'wea', answer: 'ther', fullWord: 'weather' },
        { id: 'ctw-14-w5', position: 4, displayText: 'strato', answer: 'sphere', fullWord: 'stratosphere' },
        { id: 'ctw-14-w6', position: 5, displayText: 'abs', answer: 'orbs', fullWord: 'absorbs' },
        { id: 'ctw-14-w7', position: 6, displayText: 'radi', answer: 'ation', fullWord: 'radiation' },
        { id: 'ctw-14-w8', position: 7, displayText: 'mesos', answer: 'phere', fullWord: 'mesosphere' },
        { id: 'ctw-14-w9', position: 8, displayText: 'thermo', answer: 'sphere', fullWord: 'thermosphere' },
        { id: 'ctw-14-w10', position: 9, displayText: 'thin', answer: 'ner', fullWord: 'thinner' }
      ],
      points: 10
    },
    {
      id: 'ctw-14b',
      type: 'complete_the_words',
      paragraph: 'Jet streams are narrow bands of fast-moving air that flow high in the atmos____ at altitudes between seven and twelve kilom____. They form along boundaries where warm tropical air meets cold polar air, and their winds can exceed three hundred kilometers per hour. Aircraft pilots take adva____ of jet streams to reduce flight times and fuel consu____ when traveling east. The position and inte____ of jet streams infl____ weather patterns across vast areas, including the formation of storm sys____ and prol____ cold or warm spells. Climate scientists monitor changes in jet stream behavior as one indi____ of broader atmospheric shi____.',
      words: [
        { id: 'ctw-14b-w1', position: 0, displayText: 'atmos', answer: 'phere', fullWord: 'atmosphere' },
        { id: 'ctw-14b-w2', position: 1, displayText: 'kilom', answer: 'eters', fullWord: 'kilometers' },
        { id: 'ctw-14b-w3', position: 2, displayText: 'adva', answer: 'ntage', fullWord: 'advantage' },
        { id: 'ctw-14b-w4', position: 3, displayText: 'consu', answer: 'mption', fullWord: 'consumption' },
        { id: 'ctw-14b-w5', position: 4, displayText: 'inte', answer: 'nsity', fullWord: 'intensity' },
        { id: 'ctw-14b-w6', position: 5, displayText: 'infl', answer: 'uence', fullWord: 'influence' },
        { id: 'ctw-14b-w7', position: 6, displayText: 'sys', answer: 'tems', fullWord: 'systems' },
        { id: 'ctw-14b-w8', position: 7, displayText: 'prol', answer: 'onged', fullWord: 'prolonged' },
        { id: 'ctw-14b-w9', position: 8, displayText: 'indi', answer: 'cator', fullWord: 'indicator' },
        { id: 'ctw-14b-w10', position: 9, displayText: 'shi', answer: 'fts', fullWord: 'shifts' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-14',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Graduation Ceremony Details',
      to: 'All Graduating Seniors',
      from: 'commencement@silverbrookuniv.edu',
      date: '04/12/2026',
      subject: 'Spring 2026 Commencement Ceremony Information',
      body: 'Dear Graduates,\n\nThe Spring 2026 Commencement Ceremony will take place on Saturday, May 16, at 10:00 A.M. in the Silverbrook Arena. Graduates must arrive by 8:30 A.M. for lineup and processing. Each graduate will receive four guest tickets, which can be picked up at the Registrar\'s Office starting May 5. Academic regalia, including cap and gown, must be ordered through the campus bookstore by April 24.\n\nAdditional details, including the ceremony program and parking instructions, will be emailed next week.',
      signoff: 'Congratulations,',
      senderName: 'Commencement Committee\nSilverbrook University',
      questions: [
        {
          id: 'rdl-email-14-q1',
          stem: 'By what time must graduates arrive at the ceremony?',
          options: [
            { id: 'b', text: '8:30 A.M.', correct: true },
            { id: 'a', text: '8:00 A.M.', correct: false },
            { id: 'd', text: '10:00 A.M.', correct: false },
            { id: 'c', text: '9:00 A.M.', correct: false }
          ],
          explanation: 'The email states that graduates must arrive by 8:30 A.M. for lineup and processing, even though the ceremony begins at 10:00 A.M.',
          points: 1
        },
        {
          id: 'rdl-email-14-q2',
          stem: 'How many guest tickets does each graduate receive?',
          options: [
            { id: 'a', text: 'Two', correct: false },
            { id: 'c', text: 'Four', correct: true },
            { id: 'd', text: 'Six', correct: false },
            { id: 'b', text: 'Three', correct: false }
          ],
          explanation: 'The email specifies that each graduate will receive four guest tickets, available at the Registrar\'s Office starting May 5.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-14',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Apartment Search Coordination',
      messages: [
        { sender: 'Alex Romero', time: '4:30 P.M.', text: 'Now that we decided to room together next year, we should start looking at apartments. Our budget is $800 per person, right?' },
        { sender: 'Taylor Kim', time: '4:34 P.M.', text: 'That works for me. I have been looking at places near campus. There is a two-bedroom on Oak Street for $1,500 total. It includes water and trash.' },
        { sender: 'Alex Romero', time: '4:37 P.M.', text: 'That is within budget. Does it allow pets? I want to bring my cat.' },
        { sender: 'Taylor Kim', time: '4:40 P.M.', text: 'The listing says cats are allowed with a $200 pet deposit. Dogs are not permitted though.' },
        { sender: 'Alex Romero', time: '4:43 P.M.', text: 'That is fine. When can we schedule a tour?' },
        { sender: 'Taylor Kim', time: '4:46 P.M.', text: 'The landlord said she has availability this Thursday at 5 P.M. or Saturday morning at 10. Which works better?' },
        { sender: 'Alex Romero', time: '4:49 P.M.', text: 'Thursday at 5 works for me. Let us lock that in. I want to check the condition of the appliances and see how much closet space there is.' }
      ],
      questions: [
        {
          id: 'rdl-tc-14-q1',
          stem: 'What is the total monthly rent for the apartment on Oak Street?',
          options: [
            { id: 'd', text: '$1,600', correct: false },
            { id: 'c', text: '$1,500', correct: true },
            { id: 'b', text: '$1,200', correct: false },
            { id: 'a', text: '$800', correct: false }
          ],
          explanation: 'Taylor says the two-bedroom apartment on Oak Street costs $1,500 total, which fits within the $800 per person budget.',
          points: 1
        },
        {
          id: 'rdl-tc-14-q2',
          stem: 'What is required to bring a cat to the apartment?',
          options: [
            { id: 'b', text: 'A $200 pet deposit', correct: true },
            { id: 'a', text: 'A certificate from a veterinarian', correct: false },
            { id: 'd', text: 'An extra $50 in monthly rent', correct: false },
            { id: 'c', text: 'Written permission from the other tenants', correct: false }
          ],
          explanation: 'Taylor says the listing allows cats with a $200 pet deposit.',
          points: 1
        },
        {
          id: 'rdl-tc-14-q3',
          stem: 'When will Alex and Taylor tour the apartment?',
          options: [
            { id: 'd', text: 'Friday at 6 P.M.', correct: false },
            { id: 'c', text: 'Saturday at 10 A.M.', correct: false },
            { id: 'a', text: 'Wednesday at 3 P.M.', correct: false },
            { id: 'b', text: 'Thursday at 5 P.M.', correct: true }
          ],
          explanation: 'Alex says Thursday at 5 works for him, and they agree to lock in that time for the tour.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-14',
      type: 'academic_passage',
      title: 'Symbiotic Relationships in Nature',
      text: 'In ecology, symbiosis refers to a close and prolonged interaction between two different species. While the term is popularly used to imply mutual benefit, biologists recognize several distinct types of symbiotic relationships, each characterized by a different balance of costs and benefits for the organisms involved. Understanding these relationships is essential for appreciating the complexity of ecological communities.\n\nMutualism is the form of symbiosis in which both species benefit from the interaction. A well-known example is the relationship between flowering plants and their pollinators. Bees obtain nectar as a food source while simultaneously transferring pollen between flowers, enabling plant reproduction. Another example is the partnership between certain species of ants and acacia trees, in which the tree provides food and shelter for the ants, and the ants defend the tree against herbivores and competing plants.\n\nParasitism represents the opposite end of the spectrum, where one organism benefits at the expense of another. Parasites such as tapeworms, ticks, and certain fungi derive nutrition or other resources from their hosts, often weakening them in the process. Unlike predators, parasites typically do not kill their hosts outright, as doing so would eliminate the resource on which they depend. Instead, parasites tend to cause chronic harm that reduces the host\'s fitness over time.\n\nCommensalism occupies a middle ground in which one species benefits while the other is neither helped nor significantly harmed. Barnacles that attach themselves to whale skin, for instance, gain access to nutrient-rich waters as the whale swims, while the whale is largely unaffected by their presence. However, some ecologists argue that true commensalism is rare in nature, since even seemingly neutral interactions often impose small costs or confer subtle benefits that are difficult to measure. The boundaries between these categories are not always sharp, and many real-world symbioses shift along the spectrum depending on environmental conditions.',
      questions: [
        {
          id: 'ap-14-q1',
          type: 'factual',
          stem: 'According to the passage, what do ants receive from acacia trees in their mutualistic relationship?',
          highlightText: null,
          options: [
            { id: 'd', text: 'Water and minerals', correct: false },
            { id: 'a', text: 'Pollen and nectar', correct: false },
            { id: 'c', text: 'Protection from predators', correct: false },
            { id: 'b', text: 'Food and shelter', correct: true }
          ],
          explanation: 'The passage states that the acacia tree provides food and shelter for the ants, while the ants defend the tree.',
          points: 1
        },
        {
          id: 'ap-14-q2',
          type: 'vocabulary',
          stem: 'The word "fitness" in paragraph 3 is closest in meaning to:',
          highlightText: 'fitness',
          options: [
            { id: 'b', text: 'Ability to survive and reproduce', correct: true },
            { id: 'c', text: 'Speed of movement and reaction', correct: false },
            { id: 'a', text: 'Outward physical appearance and coloring', correct: false },
            { id: 'd', text: 'Overall body size and weight', correct: false }
          ],
          explanation: 'In biology, "fitness" refers to an organism\'s ability to survive and reproduce in its environment. The passage uses it to describe how parasites reduce the host\'s capacity to thrive.',
          points: 1
        },
        {
          id: 'ap-14-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that parasites do not typically kill their hosts because:',
          highlightText: null,
          options: [
            { id: 'a', text: 'Parasites lack the physical ability to cause the death of their host', correct: false },
            { id: 'd', text: 'Parasites eventually evolve into mutualistic partners that benefit the host', correct: false },
            { id: 'b', text: 'Killing the host would eliminate the resource the parasite depends on', correct: true },
            { id: 'c', text: 'Host immune systems always prevent the infection from becoming fatal', correct: false }
          ],
          explanation: 'The passage states that parasites typically do not kill their hosts outright because doing so would eliminate the resource on which they depend.',
          points: 1
        },
        {
          id: 'ap-14-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 2 and paragraph 3?',
          highlightText: null,
          options: [
            { id: 'a', text: 'Paragraph 2 describes a beneficial symbiotic relationship, while paragraph 3 describes a harmful one.', correct: true },
            { id: 'c', text: 'Paragraph 2 discusses relationships among animal species, while paragraph 3 discusses relationships among plant species.', correct: false },
            { id: 'd', text: 'Paragraph 2 introduces a general concept, and paragraph 3 provides detailed evidence against it.', correct: false },
            { id: 'b', text: 'Both paragraphs describe different examples of mutualism that occur widely in natural communities.', correct: false }
          ],
          explanation: 'Paragraph 2 describes mutualism where both species benefit, while paragraph 3 describes parasitism where one species benefits at the other\'s expense. They represent contrasting types of symbiosis.',
          points: 1
        },
        {
          id: 'ap-14-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'a', text: 'Mutualism is the most common type of symbiotic relationship, and it explains most interactions between different species found in nature.', correct: false },
            { id: 'b', text: 'Symbiotic relationships take several forms with varying costs and benefits, and the boundaries between them are not always clear.', correct: true },
            { id: 'c', text: 'Parasites are the most harmful organisms in any ecosystem, and limiting their spread should be a priority for ecologists.', correct: false },
            { id: 'd', text: 'Barnacles and whales demonstrate the only true commensalistic relationship that ecologists have so far been able to confirm.', correct: false }
          ],
          explanation: 'The passage describes mutualism, parasitism, and commensalism as distinct but overlapping categories of symbiosis, emphasizing that the boundaries shift depending on conditions.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-14',
        type: 'complete_the_words',
        paragraph: 'Light refra____ occurs when a beam of light passes from one medium to another and changes dire____. This pheno____ explains why objects submerged in water appear disp____ from their actual position. Prisms separate white light into its compo____ colors by refracting each wavel____ at a slightly different angle. Opt____ engineers use refraction princ____ to design lenses for cameras, teles____, and corrective eyew____.',
        words: [
          { id: 'ctw-m2-14-w1', position: 0, displayText: 'refra', answer: 'ction', fullWord: 'refraction' },
          { id: 'ctw-m2-14-w2', position: 1, displayText: 'dire', answer: 'ction', fullWord: 'direction' },
          { id: 'ctw-m2-14-w3', position: 2, displayText: 'pheno', answer: 'menon', fullWord: 'phenomenon' },
          { id: 'ctw-m2-14-w4', position: 3, displayText: 'disp', answer: 'laced', fullWord: 'displaced' },
          { id: 'ctw-m2-14-w5', position: 4, displayText: 'compo', answer: 'nent', fullWord: 'component' },
          { id: 'ctw-m2-14-w6', position: 5, displayText: 'wavel', answer: 'ength', fullWord: 'wavelength' },
          { id: 'ctw-m2-14-w7', position: 6, displayText: 'Opt', answer: 'ical', fullWord: 'Optical' },
          { id: 'ctw-m2-14-w8', position: 7, displayText: 'princ', answer: 'iples', fullWord: 'principles' },
          { id: 'ctw-m2-14-w9', position: 8, displayText: 'teles', answer: 'copes', fullWord: 'telescopes' },
          { id: 'ctw-m2-14-w10', position: 9, displayText: 'eyew', answer: 'ear', fullWord: 'eyewear' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-14',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Meal Plan Adjustment',
        text: 'Students wishing to change their meal plan for the spring semester must submit a request through the Dining Services Portal by January 10. Options include the Standard Plan with 14 meals per week, the Premium Plan with unlimited meals, and the Flex Plan offering 10 meals plus $200 in dining dollars. Changes cannot be made after the deadline, and no refunds will be issued for downgrades after the second week of classes. For questions, visit the Dining Services office in the basement of Carter Hall.',
        questions: [
          {
            id: 'rdl-notice-m2-14-q1',
            stem: 'How many meals per week does the Standard Plan include?',
            options: [
              { id: 'c', text: '14 meals', correct: true },
              { id: 'a', text: '10 meals', correct: false },
              { id: 'd', text: 'Unlimited meals', correct: false },
              { id: 'b', text: '12 meals', correct: false }
            ],
            explanation: 'The notice states the Standard Plan includes 14 meals per week.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-14-q2',
            stem: 'What is the deadline to submit a meal plan change request?',
            options: [
              { id: 'd', text: 'January 20', correct: false },
              { id: 'a', text: 'December 15', correct: false },
              { id: 'b', text: 'January 5', correct: false },
              { id: 'c', text: 'January 10', correct: true }
            ],
            explanation: 'The notice says requests must be submitted by January 10.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-14',
        type: 'read_daily_life',
        textType: 'email',
        to: 'All Students and Faculty',
        from: 'University Library',
        date: 'November 28, 2026',
        subject: 'Library Extended Hours During Finals',
        body: 'To support your preparation for final exams, the main library will extend its hours beginning December 1 through December 15. During this period, the library will remain open until 2:00 AM Sunday through Thursday and until midnight on Friday and Saturday. The quiet study floors on levels three and four will be strictly enforced during extended hours. Free coffee and tea will be available at the first-floor lobby station from 8:00 PM to closing. Please remember to bring your student ID, as it is required for entry after 10:00 PM. Group study rooms may be reserved for up to four hours during finals period.',
        signoff: 'Happy studying,',
        senderName: 'University Library',
        questions: [
          {
            id: 'rdl-email-m2-14-q1',
            stem: 'Until what time will the library be open on weeknights during finals?',
            options: [
              { id: 'd', text: 'Open 24 hours', correct: false },
              { id: 'b', text: '1:00 AM', correct: false },
              { id: 'c', text: '2:00 AM', correct: true },
              { id: 'a', text: 'Midnight', correct: false }
            ],
            explanation: 'The email states the library will remain open until 2:00 AM Sunday through Thursday.',
            points: 1
          },
          {
            id: 'rdl-email-m2-14-q2',
            stem: 'What is required for entry after 10:00 PM?',
            options: [
              { id: 'a', text: 'A library card', correct: false },
              { id: 'd', text: 'A room reservation', correct: false },
              { id: 'c', text: 'A faculty recommendation', correct: false },
              { id: 'b', text: 'A student ID', correct: true }
            ],
            explanation: 'The email says a student ID is required for entry after 10:00 PM.',
            points: 1
          },
          {
            id: 'rdl-email-m2-14-q3',
            stem: 'Where is the free coffee and tea station located?',
            options: [
              { id: 'd', text: 'The basement lounge', correct: false },
              { id: 'b', text: 'The library cafe', correct: false },
              { id: 'a', text: 'The third-floor study area', correct: false },
              { id: 'c', text: 'The first-floor lobby', correct: true }
            ],
            explanation: 'The email states free coffee and tea will be available at the first-floor lobby station.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-14',
        type: 'academic_passage',
        title: 'The Long History of Board Games',
        text: 'Board games are one of the most ancient and persistent forms of human entertainment. Archaeologists have unearthed game boards and pieces from civilizations that flourished thousands of years ago, suggesting that the impulse to compete within agreed rules across a defined playing surface arose very early in human history. Some of the oldest known games, including Senet from Egypt and the Royal Game of Ur from Mesopotamia, date back roughly four to five thousand years.\n\nThese ancient games served social, ritual, and educational purposes that often extended well beyond simple amusement. Senet appears in Egyptian tombs alongside grave goods, suggesting it had religious significance and may have represented the soul\'s journey through the afterlife. In other cultures, board games were used to teach strategy to young rulers or to settle disputes through symbolic competition rather than physical conflict. The fact that similar games developed independently in different parts of the world suggests that abstract strategic play meets a deep human need.\n\nGames have continued to evolve in response to changing technology and culture. The introduction of printed game boards and standardized pieces during the early modern era made board games widely accessible for the first time. Chess, which had spread from India through the Islamic world to Europe in earlier centuries, became increasingly codified and analyzed, eventually developing an extensive theoretical literature. The nineteenth and twentieth centuries saw a flowering of new commercial games, often designed to teach moral lessons or simulate economic transactions.\n\nThe digital revolution challenged but did not eliminate board gaming. While video games captured much of the entertainment market, traditional board games experienced an unexpected revival in the early twenty-first century, with new designs that emphasize rich themes, intricate strategy, and social interaction. Game designers now experiment with cooperative play, where players work together against the game itself, and with games that explore complex topics from epidemics to climate change. The persistence of board gaming across millennia suggests that gathering around a shared physical surface to play satisfies something that screens alone cannot replace.',
        questions: [
          {
            id: 'ap-m2-14-q1',
            type: 'factual',
            stem: 'According to the passage, approximately how old are the oldest known board games?',
            highlightText: null,
            options: [
              { id: 'd', text: 'Twenty to thirty thousand years', correct: false },
              { id: 'a', text: 'One to two thousand years', correct: false },
              { id: 'b', text: 'Four to five thousand years', correct: true },
              { id: 'c', text: 'Ten to twelve thousand years', correct: false }
            ],
            explanation: 'The passage notes Senet and the Royal Game of Ur date back roughly four to five thousand years.',
            points: 1
          },
          {
            id: 'ap-m2-14-q2',
            type: 'vocabulary',
            stem: 'The word "codified" in paragraph 3 most nearly means:',
            highlightText: 'codified',
            options: [
              { id: 'd', text: 'Gradually reduced in popularity over several centuries', correct: false },
              { id: 'b', text: 'Organized into a formal system of rules', correct: true },
              { id: 'c', text: 'Translated into many of the world\'s major languages', correct: false },
              { id: 'a', text: 'Kept secret and hidden from ordinary people', correct: false }
            ],
            explanation: 'In context, chess becoming "increasingly codified" describes its rules being organized into a formal system.',
            points: 1
          },
          {
            id: 'ap-m2-14-q3',
            type: 'inference',
            stem: 'Why does the author note that similar games developed independently in different cultures?',
            highlightText: null,
            options: [
              { id: 'd', text: 'To explain why digital games have completely replaced traditional board games', correct: false },
              { id: 'b', text: 'To prove that ancient civilizations communicated with each other more than previously thought', correct: false },
              { id: 'c', text: 'To argue that a single ancient civilization invented all early board games', correct: false },
              { id: 'a', text: 'To suggest that abstract strategic play meets a deep human need', correct: true }
            ],
            explanation: 'The passage explicitly draws this conclusion, using independent invention as evidence that strategic play addresses a universal human need.',
            points: 1
          },
          {
            id: 'ap-m2-14-q4',
            type: 'paragraph_relationships',
            stem: 'How does paragraph 4 relate to the rest of the passage?',
            highlightText: null,
            options: [
              { id: 'b', text: 'It connects the long historical narrative to the contemporary state of board gaming.', correct: true },
              { id: 'c', text: 'It introduces an entirely different type of game that is unrelated to earlier paragraphs.', correct: false },
              { id: 'd', text: 'It returns to the discussion of Egyptian games introduced in the first paragraph.', correct: false },
              { id: 'a', text: 'It contradicts several of the historical claims made earlier in the passage.', correct: false }
            ],
            explanation: 'Paragraph 4 brings the historical narrative up to the present, discussing the digital challenge and recent revival of board gaming.',
            points: 1
          },
          {
            id: 'ap-m2-14-q5',
            type: 'important_idea',
            stem: 'Which best expresses the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Senet was the most influential board game in human history, and nearly every game invented since then descends from its original design.', correct: false },
              { id: 'c', text: 'Digital games will eventually eliminate traditional board games, since players increasingly prefer screens to gathering around a shared physical surface to play.', correct: false },
              { id: 'a', text: 'Board games have endured for thousands of years because they meet enduring social and intellectual needs that change over time but never disappear.', correct: true },
              { id: 'd', text: 'Modern board games are inferior to their ancient predecessors, which served far deeper social and ritual purposes than any modern commercial game does today.', correct: false }
            ],
            explanation: 'The passage traces board games from antiquity to today, framing them as enduring forms that adapt while satisfying lasting human needs.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-14',
        type: 'complete_the_words',
        paragraph: 'My older sister works as a nurse at the local hosp___. She helps patients with many different health prob___. Her shift usually starts early in the mor___ and lasts ten hours. She wears a clean uni___ and comfortable shoes every day. The job is challenging but very rewa___. She often comes home tired but pr___ of the work she does. Many people are alive today bec___ of nurses like her. She studied nur___ for four years in college. She always says that helping others is the best fee___ in the world. I am very pr___ of her career.',
        words: [
          { id: 'ctw-m2e-14-w1', position: 0, displayText: 'hosp', answer: 'ital', fullWord: 'hospital' },
          { id: 'ctw-m2e-14-w2', position: 1, displayText: 'prob', answer: 'lems', fullWord: 'problems' },
          { id: 'ctw-m2e-14-w3', position: 2, displayText: 'mor', answer: 'ning', fullWord: 'morning' },
          { id: 'ctw-m2e-14-w4', position: 3, displayText: 'uni', answer: 'form', fullWord: 'uniform' },
          { id: 'ctw-m2e-14-w5', position: 4, displayText: 'rewa', answer: 'rding', fullWord: 'rewarding' },
          { id: 'ctw-m2e-14-w6', position: 5, displayText: 'pr', answer: 'oud', fullWord: 'proud' },
          { id: 'ctw-m2e-14-w7', position: 6, displayText: 'bec', answer: 'ause', fullWord: 'because' },
          { id: 'ctw-m2e-14-w8', position: 7, displayText: 'nur', answer: 'sing', fullWord: 'nursing' },
          { id: 'ctw-m2e-14-w9', position: 8, displayText: 'fee', answer: 'ling', fullWord: 'feeling' },
          { id: 'ctw-m2e-14-w10', position: 9, displayText: 'pr', answer: 'oud', fullWord: 'proud' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-14',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Snow Day Procedures',
        text: 'The university follows specific procedures during heavy snow storms. If classes are canceled, students will receive an email and text message by 6:00 AM. The information will also be posted on the university website. Even when classes are canceled, the dining halls and library will remain open. Snow days are usually announced the night before when possible. Please make sure your contact information in the student portal is up to date.',
        questions: [
          {
            id: 'rdl-notice-m2e-14-q1',
            stem: 'How will students learn about canceled classes?',
            options: [
              { id: 'a', text: 'From a story in the local newspaper', correct: false },
              { id: 'c', text: 'From printed posters placed around campus', correct: false },
              { id: 'd', text: 'Only by checking the university website', correct: false },
              { id: 'b', text: 'By email and text message', correct: true }
            ],
            explanation: 'The notice says students will receive an email and text message by 6:00 AM.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-14-q2',
            stem: 'What stays open during snow days?',
            options: [
              { id: 'a', text: 'All academic buildings and classrooms', correct: false },
              { id: 'c', text: 'The dining halls and library', correct: true },
              { id: 'b', text: 'The campus bookstore and mailroom', correct: false },
              { id: 'd', text: 'The athletic center and gym only', correct: false }
            ],
            explanation: 'The notice mentions the dining halls and library remain open even when classes are canceled.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-14',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Mike Johnson',
        from: 'Roommate Services',
        date: 'September 5, 2026',
        subject: 'Roommate Match',
        body: 'Hi Mike,\n\nWe have matched you with a roommate for the school year. Your new roommate is Alex Brown, a sophomore studying engineering. Alex enjoys music, sports, and reading. Both of you will move into Room 302 in Park Hall on September 10. Please contact each other before move-in day to discuss things like furniture, shared items, and study habits. Alex\'s email address is included below. We hope you have a great year together.',
        signoff: 'Welcome to campus,',
        senderName: 'Roommate Services',
        questions: [
          {
            id: 'rdl-email-m2e-14-q1',
            stem: 'What is Alex\'s major?',
            options: [
              { id: 'd', text: 'Sports management', correct: false },
              { id: 'b', text: 'Engineering', correct: true },
              { id: 'c', text: 'Literature', correct: false },
              { id: 'a', text: 'Music', correct: false }
            ],
            explanation: 'The email states that Alex is studying engineering.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-14-q2',
            stem: 'Where will Mike and Alex live?',
            options: [
              { id: 'd', text: 'Room 102 in Lake Hall', correct: false },
              { id: 'c', text: 'Room 302 in Main Hall', correct: false },
              { id: 'a', text: 'Room 302 in Park Hall', correct: true },
              { id: 'b', text: 'Room 203 in Park Hall', correct: false }
            ],
            explanation: 'The email says they will live in Room 302 in Park Hall.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-14-q3',
            stem: 'What does the email recommend they do before move-in day?',
            options: [
              { id: 'b', text: 'Contact each other to discuss shared items and habits', correct: true },
              { id: 'a', text: 'Buy new furniture for the room before arriving', correct: false },
              { id: 'd', text: 'Sign a roommate agreement and return it to the office', correct: false },
              { id: 'c', text: 'Visit the campus together to see the room', correct: false }
            ],
            explanation: 'The email asks them to contact each other to discuss furniture, shared items, and study habits.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-14',
        type: 'academic_passage',
        title: 'Why We Have Seasons',
        text: 'The Earth has four seasons: spring, summer, autumn, and winter. Many people believe seasons happen because the Earth moves closer to or farther from the sun, but this is not the real reason. Seasons happen because the Earth is tilted on its axis. As the Earth moves around the sun during the year, different parts of the world receive different amounts of sunlight.\n\nWhen the part of the Earth where you live is tilted toward the sun, you get more direct sunlight and longer days. This is summer. When your part of the Earth is tilted away from the sun, you get less sunlight and shorter days, and this is winter. Spring and autumn are the seasons in between, when the tilt is more balanced. Areas near the equator have less change between seasons because the tilt makes a smaller difference there.',
        questions: [
          {
            id: 'ap-m2e-14-q1',
            type: 'factual',
            stem: 'What is the real reason for the seasons?',
            highlightText: null,
            options: [
              { id: 'b', text: 'The Earth is tilted on its axis', correct: true },
              { id: 'd', text: 'The direction of the wind changes throughout the year', correct: false },
              { id: 'a', text: 'The Earth moves closer to and farther from the sun', correct: false },
              { id: 'c', text: 'The sun changes its brightness during the year', correct: false }
            ],
            explanation: 'The passage states that seasons happen because the Earth is tilted on its axis.',
            points: 1
          },
          {
            id: 'ap-m2e-14-q2',
            type: 'factual',
            stem: 'When is it summer in your part of the Earth?',
            highlightText: null,
            options: [
              { id: 'a', text: 'When your part is tilted away from the sun', correct: false },
              { id: 'b', text: 'When your part is tilted toward the sun', correct: true },
              { id: 'c', text: 'When the Earth is closest to the sun', correct: false },
              { id: 'd', text: 'When the wind blows from the south', correct: false }
            ],
            explanation: 'The passage says it is summer when your part of the Earth is tilted toward the sun.',
            points: 1
          },
          {
            id: 'ap-m2e-14-q3',
            type: 'vocabulary',
            stem: 'The word "tilted" in paragraph 1 most likely means:',
            highlightText: 'tilted',
            options: [
              { id: 'c', text: 'Made larger over time', correct: false },
              { id: 'd', text: 'Slowed down while turning', correct: false },
              { id: 'b', text: 'Leaning to one side', correct: true },
              { id: 'a', text: 'Moved quickly in a circle', correct: false }
            ],
            explanation: 'In context, "tilted" means leaning to one side. The Earth\'s axis is not straight up and down.',
            points: 1
          },
          {
            id: 'ap-m2e-14-q4',
            type: 'inference',
            stem: 'Why do areas near the equator have less seasonal change?',
            highlightText: null,
            options: [
              { id: 'd', text: 'They are much closer to the moon', correct: false },
              { id: 'a', text: 'They get no direct sunlight at all', correct: false },
              { id: 'b', text: 'The tilt makes a smaller difference there', correct: true },
              { id: 'c', text: 'They are located far away from the ocean', correct: false }
            ],
            explanation: 'The passage says areas near the equator have less change because the tilt makes a smaller difference.',
            points: 1
          },
          {
            id: 'ap-m2e-14-q5',
            type: 'important_idea',
            stem: 'Which sentence best summarizes the passage?',
            highlightText: null,
            options: [
              { id: 'a', text: 'The four seasons feel very different from one another in every single part of the world.', correct: false },
              { id: 'b', text: 'Seasons are caused by the tilt of the Earth, not by changes in distance from the sun.', correct: true },
              { id: 'd', text: 'Spring is by far the most pleasant season for everyone who lives away from the equator.', correct: false },
              { id: 'c', text: 'Most places on Earth experience only one season, which lasts through the entire year without any real change.', correct: false }
            ],
            explanation: 'The passage corrects the common misunderstanding and explains how the Earth\'s tilt creates seasons.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader, which reads window.READING_TEST_14
window.READING_TEST_14 = window.READING_SECTION_14;
