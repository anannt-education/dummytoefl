window.READING_SECTION_11 = {
  id: 'reading-section-11',
  title: 'Reading Practice Test 11',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-11',
      type: 'complete_the_words',
      paragraph: 'Volcanoes are openings in the Earth\'s crust through which molten rock, or ma____, reaches the surface. When magma eru____ above ground, it is called la____. Volc____ activity is concentrated along tect____ plate boundaries, particularly around the so-called Ring of Fire in the Pac____ Ocean. These erup____ can be both destr____ and beneficial, as volcanic ash enri____ soil and supports agricu____ growth over time.',
      words: [
        { id: 'ctw-11-w1', position: 0, displayText: 'ma', answer: 'gma', fullWord: 'magma' },
        { id: 'ctw-11-w2', position: 1, displayText: 'eru', answer: 'pts', fullWord: 'erupts' },
        { id: 'ctw-11-w3', position: 2, displayText: 'la', answer: 'va', fullWord: 'lava' },
        { id: 'ctw-11-w4', position: 3, displayText: 'Volc', answer: 'anic', fullWord: 'Volcanic' },
        { id: 'ctw-11-w5', position: 4, displayText: 'tect', answer: 'onic', fullWord: 'tectonic' },
        { id: 'ctw-11-w6', position: 5, displayText: 'Pac', answer: 'ific', fullWord: 'Pacific' },
        { id: 'ctw-11-w7', position: 6, displayText: 'erup', answer: 'tions', fullWord: 'eruptions' },
        { id: 'ctw-11-w8', position: 7, displayText: 'destr', answer: 'uctive', fullWord: 'destructive' },
        { id: 'ctw-11-w9', position: 8, displayText: 'enri', answer: 'ches', fullWord: 'enriches' },
        { id: 'ctw-11-w10', position: 9, displayText: 'agricu', answer: 'ltural', fullWord: 'agricultural' }
      ],
      points: 10
    },
    {
      id: 'ctw-11b',
      type: 'complete_the_words',
      paragraph: 'Hot springs are nat____ pools of warm water that emerge where the Earth\'s geothermal heat reaches the sur____. Most occur in reg____ with active volcanic activity, where groundwater is hea____ by underlying magma chambers. The water often diss____ minerals as it travels through layers of rock, prod____ distinctive colors and chem____ compositions. Some species of bacteria and archaea thr____ in extreme temper____ that would kill most other orga____. These microbes are studied for clues about life\'s adaptability.',
      words: [
        { id: 'ctw-11b-w1', position: 0, displayText: 'nat', answer: 'ural', fullWord: 'natural' },
        { id: 'ctw-11b-w2', position: 1, displayText: 'sur', answer: 'face', fullWord: 'surface' },
        { id: 'ctw-11b-w3', position: 2, displayText: 'reg', answer: 'ions', fullWord: 'regions' },
        { id: 'ctw-11b-w4', position: 3, displayText: 'hea', answer: 'ted', fullWord: 'heated' },
        { id: 'ctw-11b-w5', position: 4, displayText: 'diss', answer: 'olves', fullWord: 'dissolves' },
        { id: 'ctw-11b-w6', position: 5, displayText: 'prod', answer: 'ucing', fullWord: 'producing' },
        { id: 'ctw-11b-w7', position: 6, displayText: 'chem', answer: 'ical', fullWord: 'chemical' },
        { id: 'ctw-11b-w8', position: 7, displayText: 'thr', answer: 'ive', fullWord: 'thrive' },
        { id: 'ctw-11b-w9', position: 8, displayText: 'temper', answer: 'atures', fullWord: 'temperatures' },
        { id: 'ctw-11b-w10', position: 9, displayText: 'orga', answer: 'nisms', fullWord: 'organisms' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-11',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Library Book Recall Notice',
      to: 'student2847@birchwooduniv.edu',
      from: 'circulation@birchwooduniv.edu',
      date: '04/06/2026',
      subject: 'Recall Notice: Requested Item Due April 13',
      body: 'Dear Student,\n\nA book currently checked out to your account has been requested by another library patron. The item, "Principles of Microeconomics" (3rd edition), must be returned to the circulation desk by April 13. Failure to return the recalled item by this date will result in a daily fine of $1.00 and suspension of your borrowing privileges until the item is returned.\n\nIf you still need the book, you may place a hold and will be notified when it becomes available again.',
      signoff: 'Thank you,',
      senderName: 'Circulation Services\nBirchwood University Library',
      questions: [
        {
          id: 'rdl-email-11-q1',
          stem: 'Why has the student received this email?',
          options: [
            { id: 'b', text: 'A book they checked out has been requested by someone else', correct: true },
            { id: 'd', text: 'The library is closing for scheduled renovations later in the month', correct: false },
            { id: 'a', text: 'Their library card will expire at the end of the term', correct: false },
            { id: 'c', text: 'They already have an unpaid overdue fine on their library account', correct: false }
          ],
          explanation: 'The email states that a book currently checked out has been requested by another library patron and must be returned.',
          points: 1
        },
        {
          id: 'rdl-email-11-q2',
          stem: 'What penalty will the student face for not returning the book on time?',
          options: [
            { id: 'a', text: 'A one-time fee of ten dollars per item', correct: false },
            { id: 'd', text: 'A hold placed on their official academic transcript', correct: false },
            { id: 'c', text: 'Automatic withdrawal from their course for the term', correct: false },
            { id: 'b', text: 'A daily fine and suspension of borrowing privileges', correct: true }
          ],
          explanation: 'The email warns of a daily fine of $1.00 and suspension of borrowing privileges if the item is not returned by April 13.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-11',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Charity Run Planning',
      messages: [
        { sender: 'Tyrone Jackson', time: '7:00 P.M.', text: 'The 5K charity run for the children\'s hospital is April 26. Registration closes April 20. How many people do we have signed up from our group so far?' },
        { sender: 'Emma Walsh', time: '7:04 P.M.', text: 'I counted twelve from our club, including the four of us. I will post the registration link on our social media page again tonight.' },
        { sender: 'Ravi Gupta', time: '7:08 P.M.', text: 'Nice. I talked to the campus store, and they will donate water bottles for the runners. They asked us to put their logo on the event T-shirts.' },
        { sender: 'Tyrone Jackson', time: '7:11 P.M.', text: 'That sounds like a fair deal. Emma, can you update the T-shirt design to include their logo before we send it to the printer?' },
        { sender: 'Emma Walsh', time: '7:14 P.M.', text: 'Sure. I will update the design tomorrow and send a proof to the group before printing. What color shirts are we going with?' },
        { sender: 'Ravi Gupta', time: '7:17 P.M.', text: 'The hospital suggested bright blue to match their branding. I think that works well for visibility during the run too.' },
        { sender: 'Tyrone Jackson', time: '7:20 P.M.', text: 'Bright blue it is. Let us aim to have everything finalized by April 18 so we have a week to handle any last-minute issues.' }
      ],
      questions: [
        {
          id: 'rdl-tc-11-q1',
          stem: 'What will the campus store donate in exchange for their logo on the T-shirts?',
          options: [
            { id: 'c', text: 'Snacks and energy bars for runners', correct: false },
            { id: 'b', text: 'Water bottles for the runners', correct: true },
            { id: 'd', text: 'Running shoes for the event organizers', correct: false },
            { id: 'a', text: 'Prize money for the race winners', correct: false }
          ],
          explanation: 'Ravi says the campus store will donate water bottles for the runners and asked for their logo on the event T-shirts in return.',
          points: 1
        },
        {
          id: 'rdl-tc-11-q2',
          stem: 'Why was bright blue chosen as the T-shirt color?',
          options: [
            { id: 'd', text: 'The group voted on it earlier', correct: false },
            { id: 'c', text: 'It was the least expensive option', correct: false },
            { id: 'a', text: 'It is the university\'s official color', correct: false },
            { id: 'b', text: 'It matches the hospital\'s branding', correct: true }
          ],
          explanation: 'Ravi says the hospital suggested bright blue to match their branding, and the group agrees it works well for visibility.',
          points: 1
        },
        {
          id: 'rdl-tc-11-q3',
          stem: 'By what date does Tyrone want everything finalized?',
          options: [
            { id: 'a', text: 'April 15', correct: false },
            { id: 'b', text: 'April 18', correct: true },
            { id: 'c', text: 'April 20', correct: false },
            { id: 'd', text: 'April 26', correct: false }
          ],
          explanation: 'Tyrone says they should aim to have everything finalized by April 18 to leave a week for handling last-minute issues before the April 26 event.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-11',
      type: 'academic_passage',
      title: 'The Economics of Space Exploration',
      text: 'Space exploration has long been viewed as a pursuit driven by scientific curiosity and national prestige, but in recent decades its economic dimensions have attracted increasing attention. Governments and private companies alike are investing billions of dollars in space technology, raising important questions about the costs and potential returns of venturing beyond Earth. Understanding the economics of space exploration requires examining both its direct financial demands and its broader contributions to technological innovation and industry.\n\nThe cost of launching payloads into orbit has historically been one of the greatest barriers to space activity. For much of the late twentieth century, sending one kilogram of material into low Earth orbit cost upward of twenty thousand dollars. However, the emergence of private aerospace companies has driven costs down dramatically through innovations such as reusable rocket boosters. This reduction has opened the door to commercial applications that were previously economically unviable, including satellite internet constellations and orbital manufacturing experiments.\n\nBeyond direct commercial ventures, space exploration generates substantial indirect economic benefits through technology transfer. Many technologies originally developed for space missions have found widespread civilian applications. Advances in materials science, miniaturized electronics, water purification systems, and medical imaging can all trace portions of their development to space research programs. These spillover effects multiply the economic value of space investment well beyond the aerospace sector itself.\n\nLooking ahead, proponents of space exploration point to the potential for asteroid mining, lunar resource extraction, and space-based solar power as future industries that could generate enormous economic returns. Critics, however, argue that the enormous upfront costs and technical uncertainties make these ventures speculative at best. The debate over whether space exploration represents a wise investment or an expensive indulgence is likely to intensify as both governmental and private spending on space activities continues to grow.',
      questions: [
        {
          id: 'ap-11-q1',
          type: 'factual',
          stem: 'According to the passage, what was the approximate cost of launching one kilogram into low Earth orbit in the late twentieth century?',
          highlightText: null,
          options: [
            { id: 'a', text: 'Five thousand dollars', correct: false },
            { id: 'c', text: 'Twenty thousand dollars', correct: true },
            { id: 'd', text: 'Fifty thousand dollars', correct: false },
            { id: 'b', text: 'Ten thousand dollars', correct: false }
          ],
          explanation: 'The passage states that sending one kilogram into low Earth orbit cost upward of twenty thousand dollars for much of the late twentieth century.',
          points: 1
        },
        {
          id: 'ap-11-q2',
          type: 'vocabulary',
          stem: 'The word "spillover" in paragraph 3 is closest in meaning to:',
          highlightText: 'spillover',
          options: [
            { id: 'd', text: 'Careful planning of future activity', correct: false },
            { id: 'b', text: 'Excessive waste of limited resources', correct: false },
            { id: 'a', text: 'Unintended spread to other areas', correct: true },
            { id: 'c', text: 'Rapid decline in overall value', correct: false }
          ],
          explanation: '"Spillover" refers to effects that spread beyond their original area. Here it describes how technologies developed for space have spread to benefit civilian industries.',
          points: 1
        },
        {
          id: 'ap-11-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that reusable rocket technology has been significant because it:',
          highlightText: null,
          options: [
            { id: 'c', text: 'Allowed the first crewed missions to Mars', correct: false },
            { id: 'd', text: 'Replaced satellite technology with cheaper ground-based alternatives', correct: false },
            { id: 'a', text: 'Eliminated the need for government funding entirely', correct: false },
            { id: 'b', text: 'Made previously uneconomical commercial space activities feasible', correct: true }
          ],
          explanation: 'The passage states that cost reductions from reusable rockets opened the door to commercial applications that were previously economically unviable.',
          points: 1
        },
        {
          id: 'ap-11-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 2 and paragraph 3?',
          highlightText: null,
          options: [
            { id: 'a', text: 'Paragraph 2 discusses the direct costs and revenues of space activity, while paragraph 3 describes its indirect economic benefits.', correct: true },
            { id: 'c', text: 'Paragraph 2 discusses space programs funded by governments, while paragraph 3 describes the achievements of modern private aerospace companies.', correct: false },
            { id: 'b', text: 'Both paragraphs focus on the financial obstacles that make space exploration difficult for governments and private companies to sustain.', correct: false },
            { id: 'd', text: 'Paragraph 2 presents an optimistic view of space spending, while paragraph 3 presents a much more pessimistic assessment.', correct: false }
          ],
          explanation: 'Paragraph 2 focuses on the direct economics of launch costs and commercial ventures, while paragraph 3 examines the indirect benefits through technology transfer to civilian applications.',
          points: 1
        },
        {
          id: 'ap-11-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'b', text: 'Space exploration involves significant costs but also generates direct and indirect economic benefits, with its future value still debated.', correct: true },
            { id: 'd', text: 'The only convincing justification for space exploration is scientific curiosity, because it has produced no real economic returns.', correct: false },
            { id: 'c', text: 'Asteroid mining will soon become the most profitable industry on Earth, generating enormous returns within the next decade.', correct: false },
            { id: 'a', text: 'Private companies have completely replaced government agencies as the main source of funding and innovation in space exploration today.', correct: false }
          ],
          explanation: 'The passage examines the economics of space exploration from multiple angles: costs, direct commercial returns, indirect technology transfer benefits, and future potential, while noting ongoing debate about whether the investment is worthwhile.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-11',
        type: 'complete_the_words',
        paragraph: 'Cloud form____ begins when warm, moist air rises and cools at higher alti____. As the air reaches its satur____ point, water vapor cond____ around tiny particles called conden____ nuclei. The resulting drop____ cluster together to form visible clouds. Different atmos____ conditions produce distinct cloud types, from thin cirrus clouds at high eleva____ to dense cumulo____ clouds associated with thunder____.',
        words: [
          { id: 'ctw-m2-11-w1', position: 0, displayText: 'form', answer: 'ation', fullWord: 'formation' },
          { id: 'ctw-m2-11-w2', position: 1, displayText: 'alti', answer: 'tudes', fullWord: 'altitudes' },
          { id: 'ctw-m2-11-w3', position: 2, displayText: 'satur', answer: 'ation', fullWord: 'saturation' },
          { id: 'ctw-m2-11-w4', position: 3, displayText: 'cond', answer: 'enses', fullWord: 'condenses' },
          { id: 'ctw-m2-11-w5', position: 4, displayText: 'conden', answer: 'sation', fullWord: 'condensation' },
          { id: 'ctw-m2-11-w6', position: 5, displayText: 'drop', answer: 'lets', fullWord: 'droplets' },
          { id: 'ctw-m2-11-w7', position: 6, displayText: 'atmos', answer: 'pheric', fullWord: 'atmospheric' },
          { id: 'ctw-m2-11-w8', position: 7, displayText: 'eleva', answer: 'tions', fullWord: 'elevations' },
          { id: 'ctw-m2-11-w9', position: 8, displayText: 'cumulo', answer: 'nimbus', fullWord: 'cumulonimbus' },
          { id: 'ctw-m2-11-w10', position: 9, displayText: 'thunder', answer: 'storms', fullWord: 'thunderstorms' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-11',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Campus Map Update',
        text: 'An updated campus map reflecting recent construction and building name changes is now available. The new map includes the recently completed Innovation Center and the renamed Harper Auditorium, formerly known as Building C. Printed copies can be picked up at the Welcome Center or the Student Services desk. A digital version is also accessible through the campus mobile app. Visitors and new students are encouraged to download the app for real-time navigation assistance.',
        questions: [
          {
            id: 'rdl-notice-m2-11-q1',
            stem: 'What was Harper Auditorium previously called?',
            options: [
              { id: 'c', text: 'The Welcome Center', correct: false },
              { id: 'd', text: 'The Student Services building', correct: false },
              { id: 'b', text: 'Building C', correct: true },
              { id: 'a', text: 'The Innovation Center', correct: false }
            ],
            explanation: 'The notice states Harper Auditorium was formerly known as Building C.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-11-q2',
            stem: 'Where can printed maps be obtained?',
            options: [
              { id: 'd', text: 'The Facilities Management office in the administration building', correct: false },
              { id: 'a', text: 'The campus bookstore or the nearby print shop', correct: false },
              { id: 'b', text: 'The library reference desk on the first floor', correct: false },
              { id: 'c', text: 'The Welcome Center or the Student Services desk', correct: true }
            ],
            explanation: 'The notice says printed copies can be picked up at the Welcome Center or the Student Services desk.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-11',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Senior Class Students',
        from: 'Alumni Relations Office',
        date: 'October 12, 2026',
        subject: 'Alumni Mentorship Program Application',
        body: 'The Alumni Relations Office is accepting applications for the Spring Alumni Mentorship Program. This program pairs graduating seniors with accomplished alumni working in their field of interest. Mentors and mentees will meet virtually twice a month from January through April. Past participants have reported significant benefits, including networking opportunities, career guidance, and increased confidence during their job search. To apply, submit a short essay describing your career goals and preferred industry through the Alumni Portal by November 15. Accepted students will be notified by December 1 and matched with a mentor based on their interests and career objectives.',
        signoff: 'We look forward to your application,',
        senderName: 'Alumni Relations Office',
        questions: [
          {
            id: 'rdl-email-m2-11-q1',
            stem: 'How often will mentors and mentees meet?',
            options: [
              { id: 'b', text: 'Twice a month', correct: true },
              { id: 'c', text: 'Once a month', correct: false },
              { id: 'a', text: 'Once a week', correct: false },
              { id: 'd', text: 'Every other week for one hour', correct: false }
            ],
            explanation: 'The email states mentors and mentees will meet virtually twice a month.',
            points: 1
          },
          {
            id: 'rdl-email-m2-11-q2',
            stem: 'What must applicants submit?',
            options: [
              { id: 'c', text: 'A video introduction describing their background and career interests', correct: false },
              { id: 'b', text: 'A short essay describing career goals and preferred industry', correct: true },
              { id: 'd', text: 'An academic transcript showing all completed coursework and grades', correct: false },
              { id: 'a', text: 'A resume and three references from faculty or employers', correct: false }
            ],
            explanation: 'The email asks students to submit a short essay describing their career goals and preferred industry.',
            points: 1
          },
          {
            id: 'rdl-email-m2-11-q3',
            stem: 'When will accepted students be notified?',
            options: [
              { id: 'c', text: 'December 1', correct: true },
              { id: 'd', text: 'January 1', correct: false },
              { id: 'b', text: 'November 30', correct: false },
              { id: 'a', text: 'November 15', correct: false }
            ],
            explanation: 'The email says accepted students will be notified by December 1.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-11',
        type: 'academic_passage',
        title: 'The Bicycle and Social Change',
        text: 'When the modern bicycle emerged in the late nineteenth century, few inventors could have predicted how thoroughly the new machine would alter daily life. Earlier two-wheeled vehicles had existed for decades, but they were uncomfortable, dangerous, or impractical for ordinary use. The introduction of the safety bicycle in the 1880s, with its two equally sized wheels, chain drive, and pneumatic tires, suddenly made cycling accessible to almost anyone who could afford one.\n\nThe immediate appeal of the bicycle was practical. For working-class commuters, a bicycle provided a faster alternative to walking and a cheaper alternative to keeping a horse. Doctors, postal workers, and tradespeople adopted bicycles for their daily rounds. By the turn of the twentieth century, millions of bicycles were in use across Europe and North America, and a substantial industry had grown up around manufacturing, repair, and the construction of better road surfaces to accommodate them.\n\nThe bicycle\'s social impact, however, extended far beyond transportation. For women, in particular, cycling represented an unprecedented expansion of freedom of movement. Riding required clothing that allowed practical motion, and the impractical layered dresses of the era gave way to simpler, more functional designs. Women cyclists could travel independently, visit friends without a chaperone, and participate in athletic activities that had previously been considered inappropriate. Many social commentators of the period explicitly credited the bicycle with advancing women\'s rights.\n\nThe automobile eventually displaced the bicycle as the dominant form of personal transportation in many wealthy countries, but bicycles never disappeared. In some places, including parts of Europe and Asia, they remained essential to daily life, and in recent decades cycling has experienced a substantial revival. Cities now invest in dedicated bicycle infrastructure not just for transportation but for public health, environmental, and economic reasons. The same machine that transformed daily life over a century ago continues to shape how cities are organized today.',
        questions: [
          {
            id: 'ap-m2-11-q1',
            type: 'factual',
            stem: 'According to the passage, what features made the safety bicycle different from earlier two-wheeled vehicles?',
            highlightText: null,
            options: [
              { id: 'b', text: 'Two equally sized wheels, a chain drive, and pneumatic tires', correct: true },
              { id: 'c', text: 'A motorized engine, a heavy metal frame, and electric headlights', correct: false },
              { id: 'd', text: 'Folding handlebars, a wooden frame, and reinforced leather straps', correct: false },
              { id: 'a', text: 'Solid metal wheels, a leather seat, and hand brakes', correct: false }
            ],
            explanation: 'The passage names two equally sized wheels, chain drive, and pneumatic tires as the key features of the safety bicycle.',
            points: 1
          },
          {
            id: 'ap-m2-11-q2',
            type: 'vocabulary',
            stem: 'The word "displaced" in paragraph 4 most nearly means:',
            highlightText: 'displaced',
            options: [
              { id: 'd', text: 'Repaired and modified over time', correct: false },
              { id: 'c', text: 'Worked alongside in equal numbers', correct: false },
              { id: 'b', text: 'Took the place of', correct: true },
              { id: 'a', text: 'Improved upon and refined', correct: false }
            ],
            explanation: 'In context, the automobile "displaced" the bicycle as the dominant form of transportation, meaning it took the bicycle\'s place.',
            points: 1
          },
          {
            id: 'ap-m2-11-q3',
            type: 'inference',
            stem: 'Why does the author specifically mention women in paragraph 3?',
            highlightText: null,
            options: [
              { id: 'd', text: 'To contrast European and American attitudes toward women during the period', correct: false },
              { id: 'a', text: 'To argue that women cycled more than men in the nineteenth century', correct: false },
              { id: 'b', text: 'To illustrate the bicycle\'s broader social effects, particularly on personal freedom', correct: true },
              { id: 'c', text: 'To suggest that cycling clothing was the era\'s most important fashion change', correct: false }
            ],
            explanation: 'The author uses women cyclists as a primary example of how the bicycle expanded freedom of movement and contributed to broader social change.',
            points: 1
          },
          {
            id: 'ap-m2-11-q4',
            type: 'paragraph_relationships',
            stem: 'How does paragraph 4 connect to the rest of the passage?',
            highlightText: null,
            options: [
              { id: 'b', text: 'It contradicts the earlier claim that the bicycle changed society in lasting ways', correct: false },
              { id: 'c', text: 'It introduces an entirely different invention that has no connection to cycling', correct: false },
              { id: 'a', text: 'It moves the discussion from the bicycle\'s historical impact to its present-day relevance.', correct: true },
              { id: 'd', text: 'It returns to the earlier topic of transportation before the bicycle existed', correct: false }
            ],
            explanation: 'Paragraph 4 traces the bicycle from its dominance through automobile competition to its modern revival, connecting historical and contemporary perspectives.',
            points: 1
          },
          {
            id: 'ap-m2-11-q5',
            type: 'important_idea',
            stem: 'Which best summarizes the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'd', text: 'The automobile permanently replaced the bicycle in most parts of the world, ending its usefulness as a form of everyday transportation.', correct: false },
              { id: 'b', text: 'The bicycle has had a far broader and more lasting impact on society than the simple invention of a vehicle would suggest.', correct: true },
              { id: 'a', text: 'Bicycles were the single direct cause of the women\'s rights movement that developed in Europe and North America during the nineteenth century.', correct: false },
              { id: 'c', text: 'Modern cycling infrastructure should be expanded immediately in every city in the world, regardless of cost or local transportation needs.', correct: false }
            ],
            explanation: 'The passage describes the bicycle\'s practical, social, and continuing impact across more than a century, framing it as a transformative invention.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-11',
        type: 'complete_the_words',
        paragraph: 'Last weekend my friend and I went to a film fest___ downtown. We watched three short films from different coun___. Each film told a unique st___ about everyday life. Some were funny, while others were ser___ and emotional. We bought pop___ and drinks at the snack ba___. The festival also had ques___ sessions with the film dire___ after each show. It was interesting to hear them talk about their crea___ process. The whole event lasted about four ho___. We left feeling inspired to make our own short film someday.',
        words: [
          { id: 'ctw-m2e-11-w1', position: 0, displayText: 'fest', answer: 'ival', fullWord: 'festival' },
          { id: 'ctw-m2e-11-w2', position: 1, displayText: 'coun', answer: 'tries', fullWord: 'countries' },
          { id: 'ctw-m2e-11-w3', position: 2, displayText: 'st', answer: 'ory', fullWord: 'story' },
          { id: 'ctw-m2e-11-w4', position: 3, displayText: 'ser', answer: 'ious', fullWord: 'serious' },
          { id: 'ctw-m2e-11-w5', position: 4, displayText: 'pop', answer: 'corn', fullWord: 'popcorn' },
          { id: 'ctw-m2e-11-w6', position: 5, displayText: 'ba', answer: 'r', fullWord: 'bar' },
          { id: 'ctw-m2e-11-w7', position: 6, displayText: 'ques', answer: 'tion', fullWord: 'question' },
          { id: 'ctw-m2e-11-w8', position: 7, displayText: 'dire', answer: 'ctors', fullWord: 'directors' },
          { id: 'ctw-m2e-11-w9', position: 8, displayText: 'crea', answer: 'tive', fullWord: 'creative' },
          { id: 'ctw-m2e-11-w10', position: 9, displayText: 'ho', answer: 'urs', fullWord: 'hours' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-11',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Pool Closure for Swim Meet',
        text: 'The university swimming pool will be closed for general use this Saturday, November 4, from 8:00 AM to 6:00 PM. The pool will be hosting the regional college swim meet during this time. Students and staff are welcome to attend the meet as spectators. Tickets are not required. The pool will reopen for normal hours on Sunday morning. The fitness center and locker rooms will remain open as usual.',
        questions: [
          {
            id: 'rdl-notice-m2e-11-q1',
            stem: 'Why is the pool closed on Saturday?',
            options: [
              { id: 'c', text: 'For a scheduled school holiday', correct: false },
              { id: 'a', text: 'For routine pool maintenance', correct: false },
              { id: 'd', text: 'For a swim team practice', correct: false },
              { id: 'b', text: 'For a swim meet', correct: true }
            ],
            explanation: 'The notice says the pool will be closed because it is hosting the regional college swim meet.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-11-q2',
            stem: 'Are tickets needed to watch the meet?',
            options: [
              { id: 'b', text: 'Yes, but only on weekends', correct: false },
              { id: 'c', text: 'No, tickets are not required', correct: true },
              { id: 'd', text: 'Yes, but only for non-students', correct: false },
              { id: 'a', text: 'Yes, five dollars per person', correct: false }
            ],
            explanation: 'The notice states that tickets are not required.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-11',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Sarah Kim',
        from: 'Apartment Manager',
        date: 'September 18, 2026',
        subject: 'Building Maintenance',
        body: 'Dear Sarah,\n\nI am writing to inform you that the water in your building will be turned off on Tuesday, September 26, from 9:00 AM to 1:00 PM. This is necessary so we can replace some old pipes in the basement. Please plan to do laundry, dishes, and showers before or after this time. We will post additional notices in the lobby on Monday. Thank you for your patience and cooperation.',
        signoff: 'Sincerely,',
        senderName: 'Building Manager',
        questions: [
          {
            id: 'rdl-email-m2e-11-q1',
            stem: 'When will the water be turned off?',
            options: [
              { id: 'b', text: 'Tuesday morning', correct: true },
              { id: 'd', text: 'Thursday evening', correct: false },
              { id: 'a', text: 'Monday morning', correct: false },
              { id: 'c', text: 'Wednesday afternoon', correct: false }
            ],
            explanation: 'The email states the water will be turned off on Tuesday from 9:00 AM to 1:00 PM.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-11-q2',
            stem: 'Why is the water being turned off?',
            options: [
              { id: 'd', text: 'To install new appliances', correct: false },
              { id: 'c', text: 'Because of a leak', correct: false },
              { id: 'b', text: 'To replace old pipes', correct: true },
              { id: 'a', text: 'To clean the water tank', correct: false }
            ],
            explanation: 'The email says the water is being turned off so old pipes in the basement can be replaced.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-11-q3',
            stem: 'Where will additional notices be posted?',
            options: [
              { id: 'a', text: 'On apartment doors', correct: false },
              { id: 'c', text: 'In the laundry room', correct: false },
              { id: 'b', text: 'In the lobby', correct: true },
              { id: 'd', text: 'On a public website', correct: false }
            ],
            explanation: 'The email says additional notices will be posted in the lobby on Monday.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-11',
        type: 'academic_passage',
        title: 'How Salt Has Shaped History',
        text: 'Today salt is an inexpensive item that anyone can buy at a grocery store, but for most of human history, salt was extremely valuable. People needed salt not only to season their food but also to preserve meat and fish in the days before refrigeration. Salt allowed communities to store food during the winter and to travel long distances without their food spoiling.\n\nBecause salt was so important, it influenced trade and even wars. Ancient Roman soldiers were sometimes paid in salt, and the English word "salary" comes from the Latin word for salt. Several major roads in Europe were originally built to carry salt between cities. In some regions, governments controlled the salt supply and charged high taxes on it. Today, salt has lost much of its old importance, but its long history still shapes the way we cook and the words we use.',
        questions: [
          {
            id: 'ap-m2e-11-q1',
            type: 'factual',
            stem: 'Why was salt valuable in the past?',
            highlightText: null,
            options: [
              { id: 'a', text: 'It was used mainly as decoration in homes and public temples', correct: false },
              { id: 'b', text: 'It was used to season food and preserve meat and fish', correct: true },
              { id: 'c', text: 'It was used as medicine to treat wounds and common illnesses', correct: false },
              { id: 'd', text: 'It was used to make jewelry and other costly personal ornaments', correct: false }
            ],
            explanation: 'The passage says salt was used to season food and to preserve meat and fish.',
            points: 1
          },
          {
            id: 'ap-m2e-11-q2',
            type: 'factual',
            stem: 'Where does the English word "salary" come from?',
            highlightText: null,
            options: [
              { id: 'c', text: 'The Latin word for salt', correct: true },
              { id: 'a', text: 'A French word meaning "money"', correct: false },
              { id: 'd', text: 'An old English word for soldier', correct: false },
              { id: 'b', text: 'A Greek word meaning "payment"', correct: false }
            ],
            explanation: 'The passage states the word "salary" comes from the Latin word for salt.',
            points: 1
          },
          {
            id: 'ap-m2e-11-q3',
            type: 'vocabulary',
            stem: 'The word "preserve" in paragraph 1 most likely means:',
            highlightText: 'preserve',
            options: [
              { id: 'd', text: 'Buy and sell for profit', correct: false },
              { id: 'b', text: 'Keep in good condition', correct: true },
              { id: 'c', text: 'Cook using high heat', correct: false },
              { id: 'a', text: 'Throw away after use', correct: false }
            ],
            explanation: 'In context, salt was used to preserve meat, that is, to keep it from spoiling.',
            points: 1
          },
          {
            id: 'ap-m2e-11-q4',
            type: 'inference',
            stem: 'What can be inferred about the importance of salt in the past?',
            highlightText: null,
            options: [
              { id: 'd', text: 'It was less valuable than gold or silver in every region', correct: false },
              { id: 'b', text: 'It was used mainly by wealthy families living in large cities', correct: false },
              { id: 'c', text: 'It was easy to obtain nearly everywhere in the ancient world', correct: false },
              { id: 'a', text: 'It was important enough to influence pay, trade routes, and taxes', correct: true }
            ],
            explanation: 'The passage describes salt influencing soldier pay, road building, and government taxes, all signs of high importance.',
            points: 1
          },
          {
            id: 'ap-m2e-11-q5',
            type: 'important_idea',
            stem: 'Which sentence best summarizes the passage?',
            highlightText: null,
            options: [
              { id: 'a', text: 'Salt is unhealthy and should be avoided entirely in modern cooking', correct: false },
              { id: 'c', text: 'Most salt sold today comes from large underground mines and deposits', correct: false },
              { id: 'd', text: 'Roman soldiers preferred to be paid in salt rather than money', correct: false },
              { id: 'b', text: 'Salt was once extremely valuable and shaped trade, language, and history.', correct: true }
            ],
            explanation: 'The passage explains how salt was once highly valuable and how it influenced many aspects of history.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader, which reads window.READING_TEST_11
window.READING_TEST_11 = window.READING_SECTION_11;
