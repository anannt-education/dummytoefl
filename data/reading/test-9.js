window.READING_SECTION_9 = {
  id: 'reading-section-9',
  title: 'Reading Practice Test 9',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-9',
      type: 'complete_the_words',
      paragraph: 'Pollination is a crit____ ecological process in which pollen grains are trans____ from the male part of a flower to the female part. Insects such as bees are among the most effi____ polli____, visiting thou____ of blossoms each day. Wind also facil____ pollination for many grass and tree spe____. Without this reprod____ mechanism, the vast majo____ of flowering plants would be unable to produce fru____ and seeds.',
      words: [
        { id: 'ctw-9-w1', position: 0, displayText: 'crit', answer: 'ical', fullWord: 'critical' },
        { id: 'ctw-9-w2', position: 1, displayText: 'trans', answer: 'ferred', fullWord: 'transferred' },
        { id: 'ctw-9-w3', position: 2, displayText: 'effi', answer: 'cient', fullWord: 'efficient' },
        { id: 'ctw-9-w4', position: 3, displayText: 'polli', answer: 'nators', fullWord: 'pollinators' },
        { id: 'ctw-9-w5', position: 4, displayText: 'thou', answer: 'sands', fullWord: 'thousands' },
        { id: 'ctw-9-w6', position: 5, displayText: 'facil', answer: 'itates', fullWord: 'facilitates' },
        { id: 'ctw-9-w7', position: 6, displayText: 'spe', answer: 'cies', fullWord: 'species' },
        { id: 'ctw-9-w8', position: 7, displayText: 'reprod', answer: 'uctive', fullWord: 'reproductive' },
        { id: 'ctw-9-w9', position: 8, displayText: 'majo', answer: 'rity', fullWord: 'majority' },
        { id: 'ctw-9-w10', position: 9, displayText: 'fru', answer: 'its', fullWord: 'fruits' }
      ],
      points: 10
    },
    {
      id: 'ctw-9b',
      type: 'complete_the_words',
      paragraph: 'Plants have evolved many strat____ for dispe____ their seeds far from the parent plant. Some species produce light, feathery seeds that travel on wind curr____, while others rely on water to carry them downstream. Still other plants prod____ tasty fruits that animals con____ and later deposit elsewhere with their wast____. A few species even employ expl____ mechanisms that fling seeds outward when the seed pod mat____. These strategies reduce compe____ between offspring and the parent plant for sunlight, water, and nutri____.',
      words: [
        { id: 'ctw-9b-w1', position: 0, displayText: 'strat', answer: 'egies', fullWord: 'strategies' },
        { id: 'ctw-9b-w2', position: 1, displayText: 'dispe', answer: 'rsing', fullWord: 'dispersing' },
        { id: 'ctw-9b-w3', position: 2, displayText: 'curr', answer: 'ents', fullWord: 'currents' },
        { id: 'ctw-9b-w4', position: 3, displayText: 'prod', answer: 'uce', fullWord: 'produce' },
        { id: 'ctw-9b-w5', position: 4, displayText: 'con', answer: 'sume', fullWord: 'consume' },
        { id: 'ctw-9b-w6', position: 5, displayText: 'wast', answer: 'e', fullWord: 'waste' },
        { id: 'ctw-9b-w7', position: 6, displayText: 'expl', answer: 'osive', fullWord: 'explosive' },
        { id: 'ctw-9b-w8', position: 7, displayText: 'mat', answer: 'ures', fullWord: 'matures' },
        { id: 'ctw-9b-w9', position: 8, displayText: 'compe', answer: 'tition', fullWord: 'competition' },
        { id: 'ctw-9b-w10', position: 9, displayText: 'nutri', answer: 'ents', fullWord: 'nutrients' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-9',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Student Health Insurance Enrollment',
      to: 'All Full-Time Students',
      from: 'healthservices@lakewooduniv.edu',
      date: '04/08/2026',
      subject: 'Health Insurance Enrollment Deadline - April 30',
      body: 'Dear Students,\n\nAll full-time students are required to have health insurance coverage for the upcoming academic year. If you are covered under a parent or employer plan, you must submit a waiver form by April 30 to opt out of the university plan. Students who do not submit a waiver will be automatically enrolled in the Lakewood University Student Health Plan and charged the annual premium of $2,400 to their student account.\n\nWaiver forms are available on the Student Health Services website.',
      signoff: 'Best regards,',
      senderName: 'Student Health Services\nLakewood University',
      questions: [
        {
          id: 'rdl-email-9-q1',
          stem: 'What happens if a student does not submit a waiver by April 30?',
          options: [
            { id: 'b', text: 'They are automatically enrolled in the university plan', correct: true },
            { id: 'd', text: 'Their registration for the next semester is canceled', correct: false },
            { id: 'c', text: 'They receive a written warning from the registrar', correct: false },
            { id: 'a', text: 'They lose access to all campus health services', correct: false }
          ],
          explanation: 'The email states that students who do not submit a waiver will be automatically enrolled in the university health plan and charged the annual premium.',
          points: 1
        },
        {
          id: 'rdl-email-9-q2',
          stem: 'Who needs to submit a waiver form?',
          options: [
            { id: 'd', text: 'Only international students who are new this year', correct: false },
            { id: 'a', text: 'Students who want to enroll in the university plan', correct: false },
            { id: 'c', text: 'All students regardless of their current insurance status', correct: false },
            { id: 'b', text: 'Students who are already covered under another plan', correct: true }
          ],
          explanation: 'The email says students covered under a parent or employer plan must submit a waiver to opt out of the university plan.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-9',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Science Fair Preparation',
      messages: [
        { sender: 'Claire Dubois', time: '6:00 P.M.', text: 'The campus science fair is in two weeks. Has everyone finished their project boards? We need to submit our abstracts by Friday.' },
        { sender: 'Noah Patel', time: '6:04 P.M.', text: 'My experiment on plant growth under different light conditions is done. I just need to print my graphs and glue them to the board.' },
        { sender: 'Mei Lin', time: '6:08 P.M.', text: 'I am still running my last trial on water filtration. I should have results by Wednesday. Is there a printer in the science building I can use?' },
        { sender: 'Claire Dubois', time: '6:11 P.M.', text: 'Yes, the color printer in Room 108 is free for students. You just need to bring your own paper if you want glossy prints.' },
        { sender: 'Noah Patel', time: '6:14 P.M.', text: 'Also, do we need to prepare a spoken presentation or just the poster?' },
        { sender: 'Claire Dubois', time: '6:17 P.M.', text: 'Both. Judges will visit each display and ask questions for about five minutes. So practice explaining your methodology and results clearly.' },
        { sender: 'Mei Lin', time: '6:20 P.M.', text: 'Good to know. I will rehearse my explanation over the weekend after I finish assembling my board.' }
      ],
      questions: [
        {
          id: 'rdl-tc-9-q1',
          stem: 'What is the deadline for submitting abstracts?',
          options: [
            { id: 'c', text: 'Friday', correct: true },
            { id: 'b', text: 'Thursday', correct: false },
            { id: 'a', text: 'Wednesday', correct: false },
            { id: 'd', text: 'The following Monday', correct: false }
          ],
          explanation: 'Claire states that abstracts need to be submitted by Friday.',
          points: 1
        },
        {
          id: 'rdl-tc-9-q2',
          stem: 'What is Mei Lin\'s science fair project about?',
          options: [
            { id: 'c', text: 'Solar energy collection', correct: false },
            { id: 'b', text: 'Water filtration', correct: true },
            { id: 'a', text: 'Light and plant growth', correct: false },
            { id: 'd', text: 'Soil composition analysis', correct: false }
          ],
          explanation: 'Mei Lin mentions she is still running her last trial on water filtration.',
          points: 1
        },
        {
          id: 'rdl-tc-9-q3',
          stem: 'What will happen during the science fair judging?',
          options: [
            { id: 'b', text: 'Judges will visit each display and ask questions for about five minutes', correct: true },
            { id: 'a', text: 'Students will each give a formal ten-minute presentation to the whole audience', correct: false },
            { id: 'd', text: 'A panel of judges will score projects based only on the poster', correct: false },
            { id: 'c', text: 'Students will submit a written report and then leave their posters unattended', correct: false }
          ],
          explanation: 'Claire explains that judges will visit each display and ask questions for about five minutes, so students need to prepare spoken explanations.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-9',
      type: 'academic_passage',
      title: 'The Water Cycle and Global Climate',
      text: 'The water cycle, also known as the hydrological cycle, describes the continuous movement of water through the Earth\'s atmosphere, surface, and subsurface. Driven primarily by solar energy and gravity, this cycle involves the processes of evaporation, condensation, precipitation, and runoff. Though the basic mechanics of the water cycle have been understood for centuries, modern research has revealed its intricate connections to global climate regulation.\n\nEvaporation, the conversion of liquid water to vapor, occurs mainly over the oceans, which cover roughly 71 percent of the Earth\'s surface. As water vapor rises into the atmosphere, it cools and condenses around tiny particles called condensation nuclei, forming clouds. When these water droplets or ice crystals grow heavy enough, they fall to the surface as precipitation in the form of rain, snow, sleet, or hail. Most precipitation returns directly to the oceans, while the remainder falls on land, where it feeds rivers, replenishes groundwater, or is absorbed by soil and vegetation.\n\nThe water cycle plays a central role in distributing heat around the planet. When water evaporates, it absorbs thermal energy from the surface, effectively cooling the area where evaporation occurs. This stored energy, called latent heat, is released back into the atmosphere when the vapor condenses into clouds. This transfer of energy from the tropics to higher latitudes is a key mechanism in regulating global temperatures, and disruptions to this process can have far-reaching climatic consequences.\n\nHuman activities are increasingly altering the natural water cycle. Deforestation reduces the capacity of landscapes to return moisture to the atmosphere through transpiration. Urbanization replaces permeable soils with impervious surfaces, increasing runoff and reducing groundwater recharge. Climate change itself intensifies the cycle by raising evaporation rates and increasing the frequency of extreme precipitation events. Understanding these disruptions is essential for managing water resources and preparing for the environmental challenges ahead.',
      questions: [
        {
          id: 'ap-9-q1',
          type: 'factual',
          stem: 'According to the passage, where does most evaporation occur?',
          highlightText: null,
          options: [
            { id: 'a', text: 'Over lakes and rivers', correct: false },
            { id: 'b', text: 'Over the oceans', correct: true },
            { id: 'c', text: 'In tropical rainforests', correct: false },
            { id: 'd', text: 'In polar ice regions', correct: false }
          ],
          explanation: 'The passage states that evaporation occurs mainly over the oceans, which cover roughly 71 percent of the Earth\'s surface.',
          points: 1
        },
        {
          id: 'ap-9-q2',
          type: 'vocabulary',
          stem: 'The word "impervious" in paragraph 4 is closest in meaning to:',
          highlightText: 'impervious',
          options: [
            { id: 'b', text: 'Not allowing water to pass through', correct: true },
            { id: 'c', text: 'Not harmful to the surrounding environment', correct: false },
            { id: 'd', text: 'Able to withstand very heavy daily use', correct: false },
            { id: 'a', text: 'Able to bend without breaking apart', correct: false }
          ],
          explanation: '"Impervious" means not allowing fluid to pass through. In context, urban surfaces like concrete and asphalt prevent water from seeping into the ground.',
          points: 1
        },
        {
          id: 'ap-9-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that deforestation disrupts the water cycle because trees:',
          highlightText: null,
          options: [
            { id: 'd', text: 'Prevent clouds from forming over the surrounding forests', correct: false },
            { id: 'a', text: 'Block most rainfall from ever reaching the forest ground', correct: false },
            { id: 'c', text: 'Absorb nearly all of the nearby groundwater reserves', correct: false },
            { id: 'b', text: 'Help return moisture to the atmosphere through transpiration', correct: true }
          ],
          explanation: 'The passage states that deforestation reduces the capacity of landscapes to return moisture through transpiration, implying trees play an important role in this process.',
          points: 1
        },
        {
          id: 'ap-9-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 3 and paragraph 4?',
          highlightText: null,
          options: [
            { id: 'c', text: 'Paragraph 3 presents a problem with the water cycle, and paragraph 4 offers several practical solutions to that problem.', correct: false },
            { id: 'b', text: 'Both paragraphs describe the natural processes of the water cycle in careful scientific detail without mentioning any human influence at all.', correct: false },
            { id: 'a', text: 'Paragraph 3 explains the water cycle\'s role in climate regulation, and paragraph 4 discusses how human activities disrupt this process.', correct: true },
            { id: 'd', text: 'Paragraph 3 focuses entirely on the world\'s oceans, while paragraph 4 focuses on rivers and other freshwater sources instead.', correct: false }
          ],
          explanation: 'Paragraph 3 explains how the water cycle distributes heat and regulates climate, while paragraph 4 describes how human activities such as deforestation and urbanization are disrupting these natural processes.',
          points: 1
        },
        {
          id: 'ap-9-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'a', text: 'Evaporation over the oceans is by far the most important process in the entire water cycle.', correct: false },
            { id: 'b', text: 'The water cycle is a vital climate-regulating system that is being increasingly disrupted by human activities.', correct: true },
            { id: 'd', text: 'Scientists have only recently discovered that there is any connection between water and global climate at all.', correct: false },
            { id: 'c', text: 'Urbanization has become the primary cause of severe water shortages in cities around the world.', correct: false }
          ],
          explanation: 'The passage describes the water cycle as essential for climate regulation and then highlights how human activities are disrupting it, emphasizing the need to understand these changes.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-9',
        type: 'complete_the_words',
        paragraph: 'Forest fires, though destr____, play a natural role in many ecosy____. Controlled burns remove accum____ dead vegetation and return nutri____ to the soil. Some tree species, such as certain pines, require the intense heat of fire to release seeds from their prote____ cones. However, prolonged drou____ and climate change have increased the seve____ and freq____ of uncontrolled wild____. Fire manag____ strategies aim to balance ecological benefits with public safety.',
        words: [
          { id: 'ctw-m2-9-w1', position: 0, displayText: 'destr', answer: 'uctive', fullWord: 'destructive' },
          { id: 'ctw-m2-9-w2', position: 1, displayText: 'ecosy', answer: 'stems', fullWord: 'ecosystems' },
          { id: 'ctw-m2-9-w3', position: 2, displayText: 'accum', answer: 'ulated', fullWord: 'accumulated' },
          { id: 'ctw-m2-9-w4', position: 3, displayText: 'nutri', answer: 'ents', fullWord: 'nutrients' },
          { id: 'ctw-m2-9-w5', position: 4, displayText: 'prote', answer: 'ctive', fullWord: 'protective' },
          { id: 'ctw-m2-9-w6', position: 5, displayText: 'drou', answer: 'ght', fullWord: 'drought' },
          { id: 'ctw-m2-9-w7', position: 6, displayText: 'seve', answer: 'rity', fullWord: 'severity' },
          { id: 'ctw-m2-9-w8', position: 7, displayText: 'freq', answer: 'uency', fullWord: 'frequency' },
          { id: 'ctw-m2-9-w9', position: 8, displayText: 'wild', answer: 'fires', fullWord: 'wildfires' },
          { id: 'ctw-m2-9-w10', position: 9, displayText: 'manag', answer: 'ement', fullWord: 'management' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-9',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Emergency Drill Schedule',
        text: 'A campus-wide emergency evacuation drill will be conducted on Thursday, October 10, at 2:00 PM. When the alarm sounds, all building occupants must exit through the nearest marked exit and proceed to their designated assembly points. Do not use elevators during the drill. Faculty and staff should ensure all individuals in their areas evacuate promptly. The drill is expected to last approximately twenty minutes. Failure to participate may result in a safety citation.',
        questions: [
          {
            id: 'rdl-notice-m2-9-q1',
            stem: 'What should people avoid using during the drill?',
            options: [
              { id: 'a', text: 'Stairwells', correct: false },
              { id: 'd', text: 'Emergency exits', correct: false },
              { id: 'c', text: 'Elevators', correct: true },
              { id: 'b', text: 'Mobile phones', correct: false }
            ],
            explanation: 'The notice instructs occupants not to use elevators during the drill.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-9-q2',
            stem: 'How long is the drill expected to last?',
            options: [
              { id: 'd', text: 'Thirty minutes', correct: false },
              { id: 'a', text: 'Ten minutes', correct: false },
              { id: 'c', text: 'Twenty minutes', correct: true },
              { id: 'b', text: 'Fifteen minutes', correct: false }
            ],
            explanation: 'The notice states the drill is expected to last approximately twenty minutes.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-9',
        type: 'read_daily_life',
        textType: 'email',
        to: 'All Graduate Students',
        from: 'Graduate Studies Office',
        date: 'November 1, 2026',
        subject: 'Thesis Submission Deadline Reminder',
        body: 'This is a reminder that the final thesis submission deadline for the fall semester is December 5. All theses must be uploaded to the Graduate Studies Portal in PDF format. Before submitting, ensure your document has been reviewed and approved by your thesis committee. A formatting checklist is available on the portal to help you verify that your thesis meets university guidelines. Students who miss the deadline will need to register for the following semester to complete their degree requirements. If you have questions about formatting or the submission process, the Writing Center offers drop-in thesis consultations every Wednesday from 1:00 PM to 4:00 PM.',
        signoff: 'Best,',
        senderName: 'Graduate Studies Office',
        questions: [
          {
            id: 'rdl-email-m2-9-q1',
            stem: 'What format must the thesis be submitted in?',
            options: [
              { id: 'c', text: 'A printed hard copy', correct: false },
              { id: 'b', text: 'PDF format', correct: true },
              { id: 'a', text: 'Microsoft Word document', correct: false },
              { id: 'd', text: 'Any digital format', correct: false }
            ],
            explanation: 'The email states all theses must be uploaded in PDF format.',
            points: 1
          },
          {
            id: 'rdl-email-m2-9-q2',
            stem: 'What happens if a student misses the December 5 deadline?',
            options: [
              { id: 'b', text: 'They will have to pay a late submission fee', correct: false },
              { id: 'a', text: 'They will automatically receive an extension of two more weeks', correct: false },
              { id: 'c', text: 'They will need to register for the following semester', correct: true },
              { id: 'd', text: 'Their thesis will be reviewed during the following month', correct: false }
            ],
            explanation: 'The email says students who miss the deadline will need to register for the following semester to complete their degree requirements.',
            points: 1
          },
          {
            id: 'rdl-email-m2-9-q3',
            stem: 'When are thesis consultations available at the Writing Center?',
            options: [
              { id: 'a', text: 'Monday through Friday, from 9:00 AM to 5:00 PM', correct: false },
              { id: 'c', text: 'By appointment only during weekday afternoon hours', correct: false },
              { id: 'd', text: 'Every afternoon during regular Writing Center office hours', correct: false },
              { id: 'b', text: 'Every Wednesday from 1:00 PM to 4:00 PM', correct: true }
            ],
            explanation: 'The email states the Writing Center offers drop-in thesis consultations every Wednesday from 1:00 PM to 4:00 PM.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-9',
        type: 'academic_passage',
        title: 'Ancient Methods of Food Preservation',
        text: 'Long before refrigeration, every human society faced the same challenge: how to keep food edible during the months between harvests. The solutions developed over thousands of years reflect remarkable ingenuity and have shaped many of the foods we still eat today. Drying, salting, smoking, fermentation, and pickling all emerged in different regions, often independently, as ways to extend the useful life of seasonal abundance.\n\nDrying is probably the oldest method. Removing water from food deprives microorganisms of the moisture they need to multiply, allowing meats, fruits, and grains to be stored for months. Many ancient civilizations, including the Egyptians and the Inca, developed sophisticated drying techniques that took advantage of their hot climates and dry winds. The transition from raw food to dried food sometimes also concentrated flavor, transforming inexpensive ingredients into prized delicacies.\n\nFermentation is a more chemically complex form of preservation in which beneficial microbes consume sugars and produce acids, alcohol, or carbon dioxide. The acidic environment they create makes it difficult for harmful bacteria to grow. Fermented foods such as cheese, yogurt, sauerkraut, and kimchi developed independently across many cultures and have unique nutritional properties beyond preservation, including improved digestibility and the introduction of beneficial gut bacteria.\n\nSalting and smoking exploit different principles. Salt draws moisture out of food and creates conditions hostile to most microbes. Smoking exposes food to compounds in wood smoke that have antimicrobial properties while also adding distinctive flavors. These methods were particularly important for preserving fish and meat in regions with cold winters or limited access to other resources. Together, these traditional preservation techniques represent some of humanity\'s earliest and most successful applications of practical microbiology, even though their inventors had no understanding of the microorganisms they were controlling.',
        questions: [
          {
            id: 'ap-m2-9-q1',
            type: 'factual',
            stem: 'According to the passage, why does drying preserve food?',
            highlightText: null,
            options: [
              { id: 'c', text: 'It triggers a chemical reaction with the food itself', correct: false },
              { id: 'd', text: 'It converts the food into a different substance entirely', correct: false },
              { id: 'b', text: 'It removes the moisture microorganisms need to multiply', correct: true },
              { id: 'a', text: 'It kills bacteria by exposing them to heat', correct: false }
            ],
            explanation: 'The passage states drying removes water, depriving microorganisms of the moisture they need to multiply.',
            points: 1
          },
          {
            id: 'ap-m2-9-q2',
            type: 'vocabulary',
            stem: 'The word "ingenuity" in paragraph 1 most nearly means:',
            highlightText: 'ingenuity',
            options: [
              { id: 'b', text: 'Cleverness and inventive skill', correct: true },
              { id: 'a', text: 'Honesty and open communication', correct: false },
              { id: 'c', text: 'Patience and steady discipline', correct: false },
              { id: 'd', text: 'Geographical isolation from other cultures', correct: false }
            ],
            explanation: 'In context, "remarkable ingenuity" describes the cleverness and inventive skill humans showed in developing preservation methods.',
            points: 1
          },
          {
            id: 'ap-m2-9-q3',
            type: 'inference',
            stem: 'Why does the author note that fermentation methods developed independently across many cultures?',
            highlightText: null,
            options: [
              { id: 'b', text: 'To support the claim that humans repeatedly arrived at similar effective solutions to a universal problem', correct: true },
              { id: 'c', text: 'To argue that East Asian fermentation methods are far superior to those developed in other regions', correct: false },
              { id: 'd', text: 'To explain why fermentation eventually replaced drying as the most common method of preserving meat and fish', correct: false },
              { id: 'a', text: 'To suggest that distant cultures must have communicated with each other to share these preservation techniques', correct: false }
            ],
            explanation: 'The passage frames preservation as a universal challenge with similar solutions emerging independently, supporting this point about ingenuity across cultures.',
            points: 1
          },
          {
            id: 'ap-m2-9-q4',
            type: 'paragraph_relationships',
            stem: 'What is the function of the final paragraph?',
            highlightText: null,
            options: [
              { id: 'b', text: 'It contradicts the earlier claims about how effective these traditional preservation methods really were in practice.', correct: false },
              { id: 'c', text: 'It introduces the modern industrial preservation techniques that eventually replaced all of these older household methods.', correct: false },
              { id: 'a', text: 'It compares salting and smoking to fermentation, then frames all preservation methods as early applied microbiology.', correct: true },
              { id: 'd', text: 'It returns to the topic of drying from paragraph 2 and expands on it in more detail.', correct: false }
            ],
            explanation: 'The final paragraph describes salting and smoking, then unifies all the preservation methods under the label of practical microbiology.',
            points: 1
          },
          {
            id: 'ap-m2-9-q5',
            type: 'important_idea',
            stem: 'Which best expresses the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'a', text: 'Modern refrigeration has rendered these traditional preservation methods completely obsolete in nearly every part of the world today.', correct: false },
              { id: 'b', text: 'Different cultures developed varied but effective ways of preserving food long before they understood the microbiology behind their methods.', correct: true },
              { id: 'd', text: 'Egyptian and Incan drying techniques were the foundation for all of the preservation methods that were developed later.', correct: false },
              { id: 'c', text: 'Fermentation is the only preservation method that adds real nutritional value beyond simply keeping the food edible for longer.', correct: false }
            ],
            explanation: 'The passage describes diverse methods of preservation across cultures and notes their inventors lacked microbiological knowledge but still arrived at effective techniques.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-9',
        type: 'complete_the_words',
        paragraph: 'Modern phones can do many things besides making ca___. People use them to take phot___, send messages, and look up infor___. You can listen to music and watch vid___ on a phone. Many phones have ap___ that show maps or count steps. Students often use their phones to take no___ in class or check assig___. Phones also allow us to talk with peo___ in other countries through video calls. However, spending too much time on a phone can cause prob___ like eye strain and poor sl___. Many doctors recommend taking regular breaks from screens to stay healthy.',
        words: [
          { id: 'ctw-m2e-9-w1', position: 0, displayText: 'ca', answer: 'lls', fullWord: 'calls' },
          { id: 'ctw-m2e-9-w2', position: 1, displayText: 'phot', answer: 'os', fullWord: 'photos' },
          { id: 'ctw-m2e-9-w3', position: 2, displayText: 'infor', answer: 'mation', fullWord: 'information' },
          { id: 'ctw-m2e-9-w4', position: 3, displayText: 'vid', answer: 'eos', fullWord: 'videos' },
          { id: 'ctw-m2e-9-w5', position: 4, displayText: 'ap', answer: 'ps', fullWord: 'apps' },
          { id: 'ctw-m2e-9-w6', position: 5, displayText: 'no', answer: 'tes', fullWord: 'notes' },
          { id: 'ctw-m2e-9-w7', position: 6, displayText: 'assig', answer: 'nments', fullWord: 'assignments' },
          { id: 'ctw-m2e-9-w8', position: 7, displayText: 'peo', answer: 'ple', fullWord: 'people' },
          { id: 'ctw-m2e-9-w9', position: 8, displayText: 'prob', answer: 'lems', fullWord: 'problems' },
          { id: 'ctw-m2e-9-w10', position: 9, displayText: 'sl', answer: 'eep', fullWord: 'sleep' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-9',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Volunteer Sign-Up',
        text: 'The Community Service Office is looking for student volunteers for a beach cleanup on Saturday, October 21. Volunteers will help collect trash and recyclable items from the local beach from 9:00 AM until noon. Bus transportation from campus will be provided, leaving at 8:00 AM. Lunch will be provided after the cleanup. Please sign up at the Community Service Office by Wednesday, October 18.',
        questions: [
          {
            id: 'rdl-notice-m2e-9-q1',
            stem: 'When does the cleanup begin?',
            options: [
              { id: 'a', text: '8:00 AM', correct: false },
              { id: 'b', text: '9:00 AM', correct: true },
              { id: 'd', text: '12:00 PM', correct: false },
              { id: 'c', text: '10:00 AM', correct: false }
            ],
            explanation: 'The notice says the cleanup runs from 9:00 AM until noon.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-9-q2',
            stem: 'What is provided after the cleanup?',
            options: [
              { id: 'a', text: 'A T-shirt', correct: false },
              { id: 'd', text: 'Volunteer hours certificate only', correct: false },
              { id: 'b', text: 'Lunch', correct: true },
              { id: 'c', text: 'A small payment', correct: false }
            ],
            explanation: 'The notice mentions that lunch will be provided after the cleanup.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-9',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Diana White',
        from: 'Coffee Shop Manager',
        date: 'October 5, 2026',
        subject: 'Job Interview',
        body: 'Dear Diana,\n\nThank you for applying for the part-time barista position at Sunrise Coffee. We would like to invite you to an interview on Friday, October 10, at 2:00 PM. The interview will take about thirty minutes and will be at our shop on Main Street. Please bring a printed copy of your resume. Comfortable clothing is fine; no formal dress is required. If this time does not work, please reply to suggest another day.',
        signoff: 'Looking forward to meeting you,',
        senderName: 'Sunrise Coffee Manager',
        questions: [
          {
            id: 'rdl-email-m2e-9-q1',
            stem: 'When is the interview?',
            options: [
              { id: 'd', text: 'Monday at 3:00 PM', correct: false },
              { id: 'b', text: 'Friday at 2:00 PM', correct: true },
              { id: 'c', text: 'Saturday at 10:00 AM', correct: false },
              { id: 'a', text: 'Friday at 12:00 PM', correct: false }
            ],
            explanation: 'The email schedules the interview for Friday, October 10 at 2:00 PM.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-9-q2',
            stem: 'Where will the interview be?',
            options: [
              { id: 'd', text: 'Online through a shared video call link', correct: false },
              { id: 'b', text: 'At the main company headquarters office', correct: false },
              { id: 'a', text: 'At a hotel near the campus', correct: false },
              { id: 'c', text: 'At the shop on Main Street', correct: true }
            ],
            explanation: 'The email says the interview will be at the shop on Main Street.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-9-q3',
            stem: 'What should Diana bring?',
            options: [
              { id: 'd', text: 'A short written essay about her goals', correct: false },
              { id: 'a', text: 'A passport or other photo identification', correct: false },
              { id: 'c', text: 'A signed list of professional references', correct: false },
              { id: 'b', text: 'A printed copy of her resume', correct: true }
            ],
            explanation: 'The email asks Diana to bring a printed copy of her resume.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-9',
        type: 'academic_passage',
        title: 'Why We Yawn',
        text: 'Yawning is something that everyone does, but scientists are still not entirely sure why we do it. For a long time, people believed that yawning was simply a way to bring more oxygen into the body when we are tired. However, recent studies suggest that this idea is probably not correct.\n\nOne newer theory is that yawning helps cool down the brain. When we yawn, we take in a deep breath of cool air, which may lower the temperature of the blood in our heads. Another interesting fact about yawning is that it appears to be contagious. When we see someone else yawn, we often yawn too. Researchers think this happens because yawning may help groups of people stay alert together. Even though scientists have many ideas about yawning, there is still much to discover about this everyday habit.',
        questions: [
          {
            id: 'ap-m2e-9-q1',
            type: 'factual',
            stem: 'What did people once believe about yawning?',
            highlightText: null,
            options: [
              { id: 'd', text: 'It is something only done by adults and never by very young children', correct: false },
              { id: 'b', text: 'It is a way to bring more oxygen into the body when tired', correct: true },
              { id: 'c', text: 'It is caused by an upset stomach or another minor digestive problem', correct: false },
              { id: 'a', text: 'It is a way to help us fall asleep faster at night', correct: false }
            ],
            explanation: 'The passage states the older idea that yawning brings oxygen into the body when tired.',
            points: 1
          },
          {
            id: 'ap-m2e-9-q2',
            type: 'factual',
            stem: 'What does a newer theory suggest about yawning?',
            highlightText: null,
            options: [
              { id: 'a', text: 'It exercises and expands the lungs', correct: false },
              { id: 'd', text: 'It strengthens the muscles in the face', correct: false },
              { id: 'c', text: 'It improves vision and hearing briefly', correct: false },
              { id: 'b', text: 'It helps cool down the brain', correct: true }
            ],
            explanation: 'The passage says one newer theory is that yawning helps cool down the brain.',
            points: 1
          },
          {
            id: 'ap-m2e-9-q3',
            type: 'vocabulary',
            stem: 'The word "contagious" in paragraph 2 most likely means:',
            highlightText: 'contagious',
            options: [
              { id: 'b', text: 'Easily passed from one person to another', correct: true },
              { id: 'c', text: 'Done only when a person is completely alone', correct: false },
              { id: 'd', text: 'Very difficult for a person to control', correct: false },
              { id: 'a', text: 'Caused by a disease or an infection', correct: false }
            ],
            explanation: 'In context, "contagious" means yawning passes easily from one person to another. When we see someone yawn, we yawn too.',
            points: 1
          },
          {
            id: 'ap-m2e-9-q4',
            type: 'inference',
            stem: 'Why might yawning together help groups of people?',
            highlightText: null,
            options: [
              { id: 'b', text: 'It helps them stay alert together', correct: true },
              { id: 'c', text: 'It makes them all feel sleepy at once', correct: false },
              { id: 'd', text: 'It helps them remember information', correct: false },
              { id: 'a', text: 'It teaches them to communicate', correct: false }
            ],
            explanation: 'The passage suggests yawning together may help groups stay alert.',
            points: 1
          },
          {
            id: 'ap-m2e-9-q5',
            type: 'important_idea',
            stem: 'What is the main point of the passage?',
            highlightText: null,
            options: [
              { id: 'a', text: 'Yawning is bad for your health and should always be avoided when possible.', correct: false },
              { id: 'c', text: 'Yawning only happens when you are tired and needs no further explanation.', correct: false },
              { id: 'd', text: 'Children yawn much more often than adults do during the school day.', correct: false },
              { id: 'b', text: 'Yawning is a common behavior that scientists are still trying to understand.', correct: true }
            ],
            explanation: 'The passage describes different theories about yawning and notes that much is still unknown.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader, which reads window.READING_TEST_9
window.READING_TEST_9 = window.READING_SECTION_9;
