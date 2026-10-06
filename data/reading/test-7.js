window.READING_SECTION_7 = {
  id: 'reading-section-7',
  title: 'Reading Practice Test 7',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-7',
      type: 'complete_the_words',
      paragraph: 'The immune system is the body\'s primary def____ against harmful path____ such as bacteria and viruses. White blood cells iden____ foreign inva____ and launch a coord____ response to elim____ them. Vaccin____ work by stimu____ the immune system to prod____ antibodies, providing long-lasting prote____ against specific diseases.',
      words: [
        { id: 'ctw-7-w1', position: 0, displayText: 'def', answer: 'ense', fullWord: 'defense' },
        { id: 'ctw-7-w2', position: 1, displayText: 'path', answer: 'ogens', fullWord: 'pathogens' },
        { id: 'ctw-7-w3', position: 2, displayText: 'iden', answer: 'tify', fullWord: 'identify' },
        { id: 'ctw-7-w4', position: 3, displayText: 'inva', answer: 'ders', fullWord: 'invaders' },
        { id: 'ctw-7-w5', position: 4, displayText: 'coord', answer: 'inated', fullWord: 'coordinated' },
        { id: 'ctw-7-w6', position: 5, displayText: 'elim', answer: 'inate', fullWord: 'eliminate' },
        { id: 'ctw-7-w7', position: 6, displayText: 'Vaccin', answer: 'ations', fullWord: 'Vaccinations' },
        { id: 'ctw-7-w8', position: 7, displayText: 'stimu', answer: 'lating', fullWord: 'stimulating' },
        { id: 'ctw-7-w9', position: 8, displayText: 'prod', answer: 'uce', fullWord: 'produce' },
        { id: 'ctw-7-w10', position: 9, displayText: 'prote', answer: 'ction', fullWord: 'protection' }
      ],
      points: 10
    },
    {
      id: 'ctw-7b',
      type: 'complete_the_words',
      paragraph: 'The human gut hosts tril____ of microorganisms that play a vital role in dige____ and overall health. These microbes help break down comp____ carbohydrates, synth____ certain vitamins, and train the immune system to disti____ helpful from harmful organisms. Diet has a prof____ effect on which species flou____ in the intestines. Research suggests that disrup____ to the gut microbiome may infl____ conditions ranging from inflammatory bowel disea____ to mental health disorders.',
      words: [
        { id: 'ctw-7b-w1', position: 0, displayText: 'tril', answer: 'lions', fullWord: 'trillions' },
        { id: 'ctw-7b-w2', position: 1, displayText: 'dige', answer: 'stion', fullWord: 'digestion' },
        { id: 'ctw-7b-w3', position: 2, displayText: 'comp', answer: 'lex', fullWord: 'complex' },
        { id: 'ctw-7b-w4', position: 3, displayText: 'synth', answer: 'esize', fullWord: 'synthesize' },
        { id: 'ctw-7b-w5', position: 4, displayText: 'disti', answer: 'nguish', fullWord: 'distinguish' },
        { id: 'ctw-7b-w6', position: 5, displayText: 'prof', answer: 'ound', fullWord: 'profound' },
        { id: 'ctw-7b-w7', position: 6, displayText: 'flou', answer: 'rish', fullWord: 'flourish' },
        { id: 'ctw-7b-w8', position: 7, displayText: 'disrup', answer: 'tions', fullWord: 'disruptions' },
        { id: 'ctw-7b-w9', position: 8, displayText: 'infl', answer: 'uence', fullWord: 'influence' },
        { id: 'ctw-7b-w10', position: 9, displayText: 'disea', answer: 'se', fullWord: 'disease' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-7',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Campus Recycling Program',
      to: 'All Students and Staff',
      from: 'sustainability@greenfielduniv.edu',
      date: '03/30/2026',
      subject: 'New Campus Recycling Guidelines',
      body: 'Dear Campus Community,\n\nBeginning April 7, Greenfield University will implement an updated recycling program. New color-coded bins will be placed in all academic buildings: blue for paper, green for plastics and metals, and gray for non-recyclable waste. Please rinse all food containers before placing them in recycling bins. Contaminated items will be redirected to landfill, reducing the effectiveness of the program.\n\nVolunteer recycling ambassadors are needed to help educate the campus. Contact our office if interested.',
      signoff: 'Thank you for going green,',
      senderName: 'Office of Sustainability\nGreenfield University',
      questions: [
        {
          id: 'rdl-email-7-q1',
          stem: 'What color bin should be used for plastics?',
          options: [
            { id: 'b', text: 'Green', correct: true },
            { id: 'a', text: 'Blue', correct: false },
            { id: 'c', text: 'Gray', correct: false },
            { id: 'd', text: 'Yellow', correct: false }
          ],
          explanation: 'The email states that green bins are for plastics and metals.',
          points: 1
        },
        {
          id: 'rdl-email-7-q2',
          stem: 'What happens to contaminated recycling items?',
          options: [
            { id: 'c', text: 'They are redirected to landfill', correct: true },
            { id: 'b', text: 'They are sent to a specialized facility', correct: false },
            { id: 'd', text: 'They are returned to their owners', correct: false },
            { id: 'a', text: 'They are cleaned by staff and recycled', correct: false }
          ],
          explanation: 'The email warns that contaminated items will be redirected to landfill, reducing the effectiveness of the recycling program.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-7',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Study Abroad Trip Planning',
      messages: [
        { sender: 'Hannah Miller', time: '5:15 P.M.', text: 'The study abroad office just confirmed our group trip to Barcelona for the summer session. We need to submit our passport copies by April 10.' },
        { sender: 'Ryan Chen', time: '5:19 P.M.', text: 'Mine is expired. How long does a renewal take?' },
        { sender: 'Hannah Miller', time: '5:22 P.M.', text: 'The office said regular processing takes six to eight weeks, but you can pay extra for expedited service, which takes two to three weeks.' },
        { sender: 'Fatima Al-Rashid', time: '5:26 P.M.', text: 'Ryan, you should probably do the expedited option given the deadline. Also, does everyone have travel insurance?' },
        { sender: 'Ryan Chen', time: '5:29 P.M.', text: 'Good point. I will apply for the expedited renewal tomorrow. And no, I need to look into insurance.' },
        { sender: 'Hannah Miller', time: '5:33 P.M.', text: 'The university offers a group plan through the study abroad office. It covers medical emergencies and trip cancellation. I signed up already.' },
        { sender: 'Fatima Al-Rashid', time: '5:36 P.M.', text: 'I did too. Ryan, we can send you the link to the enrollment page. It only takes about ten minutes to complete.' }
      ],
      questions: [
        {
          id: 'rdl-tc-7-q1',
          stem: 'Why does Fatima suggest Ryan use the expedited passport service?',
          options: [
            { id: 'c', text: 'The study abroad office requires it for all students', correct: false },
            { id: 'b', text: 'The regular processing time would not meet the deadline', correct: true },
            { id: 'a', text: 'It is less expensive than the regular processing option', correct: false },
            { id: 'd', text: 'Expedited passports remain valid for a much longer period', correct: false }
          ],
          explanation: 'Regular processing takes six to eight weeks, but passports are due by April 10. Fatima suggests expedited service (two to three weeks) because the regular timeline would miss the deadline.',
          points: 1
        },
        {
          id: 'rdl-tc-7-q2',
          stem: 'What does the university\'s travel insurance cover?',
          options: [
            { id: 'd', text: 'Passport replacement and visa fees', correct: false },
            { id: 'b', text: 'Medical emergencies and trip cancellation', correct: true },
            { id: 'a', text: 'Lost luggage and flight delays only', correct: false },
            { id: 'c', text: 'Accommodation costs and meal expenses', correct: false }
          ],
          explanation: 'Hannah mentions the university group plan covers medical emergencies and trip cancellation.',
          points: 1
        },
        {
          id: 'rdl-tc-7-q3',
          stem: 'How many people in the chat have already signed up for travel insurance?',
          options: [
            { id: 'b', text: 'One', correct: false },
            { id: 'd', text: 'Three', correct: false },
            { id: 'a', text: 'None', correct: false },
            { id: 'c', text: 'Two', correct: true }
          ],
          explanation: 'Hannah says she signed up already, and Fatima confirms she did too, making two people who have enrolled in travel insurance.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-7',
      type: 'academic_passage',
      title: 'The Doppler Effect',
      text: 'Most people have experienced the Doppler effect without knowing its name. When an ambulance approaches with its siren blaring, the sound seems to rise in pitch; as the ambulance passes and moves away, the pitch appears to drop. This everyday observation reflects a fundamental principle of wave physics first described by the Austrian physicist Christian Doppler in 1842.\n\nThe Doppler effect occurs because the motion of a wave source relative to an observer changes the frequency of the waves the observer perceives. When the source moves toward the observer, the successive wave crests are compressed into shorter wavelengths, producing a higher frequency and thus a higher pitch. When the source moves away, the wave crests are spread apart, yielding a lower frequency and a lower pitch. Importantly, the actual frequency emitted by the source does not change; it is only the perceived frequency that shifts.\n\nAlthough the Doppler effect is most commonly associated with sound, it applies equally to all types of waves, including light. In astronomy, scientists use the Doppler effect to determine whether celestial objects are moving toward or away from Earth. Light from an approaching star is shifted toward shorter wavelengths, a phenomenon known as blueshift, while light from a receding star shifts toward longer wavelengths, called redshift. It was through observations of redshift that the astronomer Edwin Hubble provided evidence in the 1920s that the universe is expanding.\n\nThe Doppler effect also has practical applications in modern technology. Doppler radar systems measure the velocity of weather systems and are essential tools in meteorological forecasting. In medicine, Doppler ultrasound is used to assess blood flow and detect abnormalities in the circulatory system. From traffic speed enforcement to satellite communication, the principle Doppler identified nearly two centuries ago continues to shape science and daily life.',
      questions: [
        {
          id: 'ap-7-q1',
          type: 'factual',
          stem: 'According to the passage, who first described the Doppler effect?',
          highlightText: null,
          options: [
            { id: 'b', text: 'Isaac Newton', correct: false },
            { id: 'a', text: 'Edwin Hubble', correct: false },
            { id: 'c', text: 'Christian Doppler', correct: true },
            { id: 'd', text: 'Albert Einstein', correct: false }
          ],
          explanation: 'The passage states that the Doppler effect was first described by the Austrian physicist Christian Doppler in 1842.',
          points: 1
        },
        {
          id: 'ap-7-q2',
          type: 'vocabulary',
          stem: 'The word "receding" in paragraph 3 is closest in meaning to:',
          highlightText: 'receding',
          options: [
            { id: 'a', text: 'Rotating rapidly', correct: false },
            { id: 'c', text: 'Growing brighter', correct: false },
            { id: 'd', text: 'Becoming smaller', correct: false },
            { id: 'b', text: 'Moving away', correct: true }
          ],
          explanation: '"Receding" means moving back or away from the observer. In this context, it describes a star that is moving away from Earth, causing its light to shift toward longer wavelengths.',
          points: 1
        },
        {
          id: 'ap-7-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that Edwin Hubble\'s discovery of universal expansion relied on:',
          highlightText: null,
          options: [
            { id: 'c', text: 'Measuring changes in the pitch of ambulance sirens', correct: false },
            { id: 'a', text: 'Observing changes in the pitch of sound from stars', correct: false },
            { id: 'b', text: 'Detecting redshift in the light from distant galaxies', correct: true },
            { id: 'd', text: 'Using Doppler radar systems to track distant celestial objects', correct: false }
          ],
          explanation: 'The passage connects Hubble\'s evidence for an expanding universe to observations of redshift, which is the Doppler effect applied to light from objects moving away from Earth.',
          points: 1
        },
        {
          id: 'ap-7-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 2 and paragraph 3?',
          highlightText: null,
          options: [
            { id: 'c', text: 'Both paragraphs describe the same set of practical applications, presenting them as they appeared in two different historical periods.', correct: false },
            { id: 'd', text: 'Paragraph 2 discusses naturally occurring phenomena, and paragraph 3 shifts the focus entirely to technology built by human engineers.', correct: false },
            { id: 'a', text: 'Paragraph 2 explains the mechanism of the Doppler effect for sound, and paragraph 3 extends it to light and astronomy.', correct: true },
            { id: 'b', text: 'Paragraph 2 provides a theory of how waves behave, and paragraph 3 disproves that theory with new evidence from astronomy.', correct: false }
          ],
          explanation: 'Paragraph 2 explains the physics of the Doppler effect using sound waves, while paragraph 3 shows how the same principle applies to light waves and has been used in astronomy.',
          points: 1
        },
        {
          id: 'ap-7-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'c', text: 'Edwin Hubble was the single most important figure in the history of the Doppler effect.', correct: false },
            { id: 'a', text: 'The Doppler effect only matters for understanding the behavior of ordinary sound waves.', correct: false },
            { id: 'b', text: 'The Doppler effect is a wave principle with wide-ranging applications in science, medicine, and technology.', correct: true },
            { id: 'd', text: 'Doppler radar in weather forecasting is the primary reason the effect is studied today.', correct: false }
          ],
          explanation: 'The passage presents the Doppler effect as a fundamental wave principle that applies to sound, light, and technology, with applications ranging from astronomy to medicine.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-7',
        type: 'complete_the_words',
        paragraph: 'Sound waves are vibra____ that travel through a medium such as air, water, or solid mater____. The freq____ of a wave determines its pitch, while its ampl____ controls the perceived loud____. When sound encou____ a barrier, it may be reflected, abso____, or transmit____. Engi____ apply these principles to design concert halls, noise barr____, and audio equipment.',
        words: [
          { id: 'ctw-m2-7-w1', position: 0, displayText: 'vibra', answer: 'tions', fullWord: 'vibrations' },
          { id: 'ctw-m2-7-w2', position: 1, displayText: 'mater', answer: 'ials', fullWord: 'materials' },
          { id: 'ctw-m2-7-w3', position: 2, displayText: 'freq', answer: 'uency', fullWord: 'frequency' },
          { id: 'ctw-m2-7-w4', position: 3, displayText: 'ampl', answer: 'itude', fullWord: 'amplitude' },
          { id: 'ctw-m2-7-w5', position: 4, displayText: 'loud', answer: 'ness', fullWord: 'loudness' },
          { id: 'ctw-m2-7-w6', position: 5, displayText: 'encou', answer: 'nters', fullWord: 'encounters' },
          { id: 'ctw-m2-7-w7', position: 6, displayText: 'abso', answer: 'rbed', fullWord: 'absorbed' },
          { id: 'ctw-m2-7-w8', position: 7, displayText: 'transmit', answer: 'ted', fullWord: 'transmitted' },
          { id: 'ctw-m2-7-w9', position: 8, displayText: 'Engi', answer: 'neers', fullWord: 'Engineers' },
          { id: 'ctw-m2-7-w10', position: 9, displayText: 'barr', answer: 'iers', fullWord: 'barriers' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-7',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Quiet Hours Policy',
        text: 'Effective immediately, quiet hours in all residence halls are from 10:00 PM to 8:00 AM Sunday through Thursday and from midnight to 10:00 AM on Friday and Saturday nights. During quiet hours, noise must be kept to a level that does not disturb neighboring residents. Violations will be documented by resident advisors and may result in disciplinary action. Students are reminded that courtesy hours are in effect at all other times, meaning excessive noise is never acceptable.',
        questions: [
          {
            id: 'rdl-notice-m2-7-q1',
            stem: 'When do quiet hours begin on weeknights?',
            options: [
              { id: 'c', text: '10:00 PM', correct: true },
              { id: 'd', text: 'Midnight', correct: false },
              { id: 'a', text: '8:00 PM', correct: false },
              { id: 'b', text: '9:00 PM', correct: false }
            ],
            explanation: 'The notice states quiet hours are from 10:00 PM to 8:00 AM Sunday through Thursday.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-7-q2',
            stem: 'Who is responsible for documenting violations?',
            options: [
              { id: 'a', text: 'Campus police officers', correct: false },
              { id: 'd', text: 'Fellow students', correct: false },
              { id: 'b', text: 'Resident advisors', correct: true },
              { id: 'c', text: 'The housing director', correct: false }
            ],
            explanation: 'The notice says violations will be documented by resident advisors.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-7',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Current Residential Students',
        from: 'Office of Housing and Residence Life',
        date: 'March 15, 2026',
        subject: 'Summer Housing Application',
        body: 'Applications for summer housing are now available on the Housing Portal. Summer housing is offered from May 18 through August 8 in Greenfield Hall and Lakeside Apartments. Monthly rates are $650 for a shared room and $950 for a single room, with all utilities included. Priority is given to students enrolled in summer courses or completing internships. Applications must be submitted by April 15 to guarantee placement. Late applications will be placed on a waiting list. Please note that meal plans are not available during the summer term, but residents will have access to shared kitchen facilities.',
        signoff: 'Regards,',
        senderName: 'Office of Housing and Residence Life',
        questions: [
          {
            id: 'rdl-email-m2-7-q1',
            stem: 'What is the monthly cost for a single room?',
            options: [
              { id: 'c', text: '$950', correct: true },
              { id: 'b', text: '$750', correct: false },
              { id: 'a', text: '$650', correct: false },
              { id: 'd', text: '$1,100', correct: false }
            ],
            explanation: 'The email states the rate is $950 for a single room.',
            points: 1
          },
          {
            id: 'rdl-email-m2-7-q2',
            stem: 'Who receives priority for summer housing?',
            options: [
              { id: 'd', text: 'Students who submitted their housing applications the earliest', correct: false },
              { id: 'b', text: 'Students enrolled in summer courses or completing internships', correct: true },
              { id: 'a', text: 'Students with the highest overall grade point averages', correct: false },
              { id: 'c', text: 'International students, regardless of their summer enrollment status', correct: false }
            ],
            explanation: 'The email says priority is given to students enrolled in summer courses or completing internships.',
            points: 1
          },
          {
            id: 'rdl-email-m2-7-q3',
            stem: 'What happens to applications submitted after April 15?',
            options: [
              { id: 'b', text: 'They are placed on a waiting list', correct: true },
              { id: 'a', text: 'They are automatically rejected without further review', correct: false },
              { id: 'c', text: 'They incur an additional late processing fee', correct: false },
              { id: 'd', text: 'They are reviewed the following academic semester', correct: false }
            ],
            explanation: 'The email states late applications will be placed on a waiting list.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-7',
        type: 'academic_passage',
        title: 'How Calendars Were Invented',
        text: 'Every calendar is an attempt to reconcile two natural cycles that do not divide neatly into each other: the rotation of the Earth, which produces the day, and the orbit of the Earth around the sun, which produces the year. The lunar cycle, the basis of the month, adds further complexity, since twelve lunar months fall short of a solar year by about eleven days. How a society resolved these mismatches reveals much about its priorities and astronomical knowledge.\n\nThe earliest known calendars were lunar, tracking the phases of the moon to schedule rituals, agricultural tasks, and festivals. These calendars worked well for short-term planning but drifted out of sync with the seasons over time. Many ancient cultures, including the Babylonians and the Hebrews, addressed this problem by adding an extra month every few years, a process known as intercalation. Determining when to insert the extra month required careful observation of the sky and consistent record-keeping.\n\nThe Egyptians took a different approach by basing their civil calendar on the solar year alone. They divided the year into twelve months of thirty days each, plus five additional days at the end. Although this calendar was elegant, it gradually drifted because the actual solar year is closer to 365.25 days. Roman priests later attempted to correct similar drift, but the Roman calendar became increasingly disordered until Julius Caesar introduced reforms in 46 BCE based on Egyptian astronomical knowledge.\n\nThe Julian calendar that resulted, with its leap year every four years, served as the foundation of European timekeeping for more than fifteen centuries. By the late sixteenth century, however, accumulated drift had pushed the date of the spring equinox several days earlier than its proper position. Pope Gregory XIII commissioned a reform in 1582 that removed ten days from the calendar and adjusted the leap year rule. The Gregorian calendar that resulted has since spread worldwide as the standard for international civil and commercial use, although many cultures continue to maintain traditional calendars for religious purposes alongside it.',
        questions: [
          {
            id: 'ap-m2-7-q1',
            type: 'factual',
            stem: 'According to the passage, what is intercalation?',
            highlightText: null,
            options: [
              { id: 'd', text: 'The replacement of an established calendar system with an entirely different one after a major reform', correct: false },
              { id: 'c', text: 'The technique of measuring the exact length of the lunar cycle in days and hours', correct: false },
              { id: 'b', text: 'The process of adding an extra month to keep a lunar calendar aligned with the seasons', correct: true },
              { id: 'a', text: 'The practice of using several different calendars side by side at the same time', correct: false }
            ],
            explanation: 'The passage defines intercalation as the practice of adding an extra month every few years to address the lunar-solar mismatch.',
            points: 1
          },
          {
            id: 'ap-m2-7-q2',
            type: 'vocabulary',
            stem: 'The word "drifted" in paragraph 2 most nearly means:',
            highlightText: 'drifted',
            options: [
              { id: 'a', text: 'Completely disappeared from everyday use', correct: false },
              { id: 'b', text: 'Gradually moved out of alignment', correct: true },
              { id: 'd', text: 'Became increasingly accurate over time', correct: false },
              { id: 'c', text: 'Spread quickly to neighboring regions', correct: false }
            ],
            explanation: 'In context, "drifted out of sync with the seasons" indicates the calendar gradually moved out of alignment with the actual solar cycle.',
            points: 1
          },
          {
            id: 'ap-m2-7-q3',
            type: 'inference',
            stem: 'It can be inferred that the Egyptian civil calendar described in paragraph 3 was inaccurate because:',
            highlightText: null,
            options: [
              { id: 'd', text: 'Egyptian priests refused to adjust it even as the seasons shifted noticeably', correct: false },
              { id: 'b', text: 'It assumed a 365-day year, but the solar year is slightly longer', correct: true },
              { id: 'a', text: 'It used twelve months of thirty days instead of thirteen months', correct: false },
              { id: 'c', text: 'It ignored the lunar cycle that other early calendars had tracked', correct: false }
            ],
            explanation: 'The passage notes the Egyptian calendar drifted because the actual solar year is closer to 365.25 days, not the 365 days the calendar assumed.',
            points: 1
          },
          {
            id: 'ap-m2-7-q4',
            type: 'paragraph_relationships',
            stem: 'How does paragraph 4 build on paragraph 3?',
            highlightText: null,
            options: [
              { id: 'b', text: 'It traces how Egyptian astronomical knowledge influenced later Roman and European reforms.', correct: true },
              { id: 'a', text: 'It contradicts the earlier information about the Egyptian civil calendar\'s accuracy.', correct: false },
              { id: 'c', text: 'It returns to the earlier discussion of lunar calendars from paragraph 2.', correct: false },
              { id: 'd', text: 'It describes a return to older Egyptian methods after the Gregorian reform.', correct: false }
            ],
            explanation: 'Paragraph 4 follows the influence of Egyptian astronomy through Caesar\'s Julian calendar to the later Gregorian reform.',
            points: 1
          },
          {
            id: 'ap-m2-7-q5',
            type: 'important_idea',
            stem: 'Which best expresses the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'c', text: 'Calendar systems result from successive attempts to reconcile incompatible natural cycles, with each major reform building on earlier observations.', correct: true },
              { id: 'b', text: 'The Gregorian calendar is the only fully accurate timekeeping system ever devised, and it completely replaced all earlier systems.', correct: false },
              { id: 'd', text: 'Religious calendars are inherently more accurate than the civil calendars that societies use for daily commerce and government.', correct: false },
              { id: 'a', text: 'Calendars are arbitrary cultural constructs that societies invented for convenience, without any real basis in astronomical observation.', correct: false }
            ],
            explanation: 'The passage frames the calendar as a recurring problem of reconciling natural cycles, with civilizations building on each other\'s solutions over time.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-7',
        type: 'complete_the_words',
        paragraph: 'Last sum___ my family went on a road trip across the count___. We packed our c___ with clothes, snacks, and a tent. Each day we drove to a new ci___ and explored. We saw beautiful moun___ and crossed several large riv___. We slept in our tent at night and made meals over a small fi___. My little brother had never seen the oc___ before. He laughed and played in the wat___ for hours. We took hundreds of photos to remember the trip. The journey was tiring but unforgettable. We are already planning our next adve___.',
        words: [
          { id: 'ctw-m2e-7-w1', position: 0, displayText: 'sum', answer: 'mer', fullWord: 'summer' },
          { id: 'ctw-m2e-7-w2', position: 1, displayText: 'count', answer: 'ry', fullWord: 'country' },
          { id: 'ctw-m2e-7-w3', position: 2, displayText: 'c', answer: 'ar', fullWord: 'car' },
          { id: 'ctw-m2e-7-w4', position: 3, displayText: 'ci', answer: 'ty', fullWord: 'city' },
          { id: 'ctw-m2e-7-w5', position: 4, displayText: 'moun', answer: 'tains', fullWord: 'mountains' },
          { id: 'ctw-m2e-7-w6', position: 5, displayText: 'riv', answer: 'ers', fullWord: 'rivers' },
          { id: 'ctw-m2e-7-w7', position: 6, displayText: 'fi', answer: 're', fullWord: 'fire' },
          { id: 'ctw-m2e-7-w8', position: 7, displayText: 'oc', answer: 'ean', fullWord: 'ocean' },
          { id: 'ctw-m2e-7-w9', position: 8, displayText: 'wat', answer: 'er', fullWord: 'water' },
          { id: 'ctw-m2e-7-w10', position: 9, displayText: 'adve', answer: 'nture', fullWord: 'adventure' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-7',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Free Flu Shots Available',
        text: 'The Student Health Center will offer free flu shots to all students from October 16 to October 27. No appointment is necessary. Shots will be given Monday through Friday from 9:00 AM to 4:00 PM. Students should bring their student ID card. The shots are also available to faculty and staff for a small fee. Getting a flu shot helps prevent illness during the winter months.',
        questions: [
          {
            id: 'rdl-notice-m2e-7-q1',
            stem: 'Who can get free flu shots?',
            options: [
              { id: 'a', text: 'Faculty members', correct: false },
              { id: 'd', text: 'Family members of students', correct: false },
              { id: 'b', text: 'Staff members', correct: false },
              { id: 'c', text: 'All students', correct: true }
            ],
            explanation: 'The notice says free flu shots are offered to all students.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-7-q2',
            stem: 'What should students bring?',
            options: [
              { id: 'c', text: 'A signed permission form', correct: false },
              { id: 'a', text: 'Insurance information', correct: false },
              { id: 'd', text: 'Cash for the appointment fee', correct: false },
              { id: 'b', text: 'Their student ID card', correct: true }
            ],
            explanation: 'The notice asks students to bring their student ID card.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-7',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Lisa Brown',
        from: 'Mr. Carter',
        date: 'September 30, 2026',
        subject: 'Field Trip Permission',
        body: 'Dear Lisa,\n\nThank you for signing up for the geology field trip on October 14. We will leave from the science building at 7:00 AM and return by 5:00 PM. Please wear sturdy walking shoes and bring a water bottle, lunch, and a notebook. We will be hiking on rocky trails to look at different rock formations. The cost of the trip is twenty dollars to cover transportation. Please bring a signed permission form from your parents.',
        signoff: 'Looking forward to it,',
        senderName: 'Mr. Carter',
        questions: [
          {
            id: 'rdl-email-m2e-7-q1',
            stem: 'What time will the trip leave?',
            options: [
              { id: 'c', text: '8:00 AM', correct: false },
              { id: 'a', text: '6:00 AM', correct: false },
              { id: 'd', text: '9:00 AM', correct: false },
              { id: 'b', text: '7:00 AM', correct: true }
            ],
            explanation: 'The email says they will leave from the science building at 7:00 AM.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-7-q2',
            stem: 'What does the cost cover?',
            options: [
              { id: 'c', text: 'Park entry fees', correct: false },
              { id: 'b', text: 'Transportation', correct: true },
              { id: 'd', text: 'Camping equipment', correct: false },
              { id: 'a', text: 'Lunch and snacks', correct: false }
            ],
            explanation: 'The email says the cost covers transportation.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-7-q3',
            stem: 'What should Lisa wear?',
            options: [
              { id: 'a', text: 'Formal shoes and clothing', correct: false },
              { id: 'b', text: 'Open sandals or flip-flops', correct: false },
              { id: 'c', text: 'Sturdy walking shoes', correct: true },
              { id: 'd', text: 'The standard school uniform', correct: false }
            ],
            explanation: 'The email asks Lisa to wear sturdy walking shoes for hiking.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-7',
        type: 'academic_passage',
        title: 'Why Mountains Form',
        text: 'Mountains are some of the most impressive features on Earth. They form over millions of years through powerful natural processes. The Earth\'s outer layer is made up of large pieces of rock called tectonic plates, which slowly move across the surface of the planet. When two plates push against each other, the land at their edges is pressed upward, creating mountain ranges.\n\nMany of the world\'s most famous mountains, including the Himalayas and the Andes, formed in this way. Other mountains are formed by volcanoes, which build up over time as hot rock from inside the Earth rises and cools at the surface. Once formed, mountains are slowly worn down by wind, rain, and ice in a process called erosion. Some mountains that look very tall today were once even taller millions of years ago, before erosion changed their shape.',
        questions: [
          {
            id: 'ap-m2e-7-q1',
            type: 'factual',
            stem: 'What are tectonic plates?',
            highlightText: null,
            options: [
              { id: 'c', text: 'Mountains formed by volcanoes at the surface of the planet', correct: false },
              { id: 'b', text: 'Large pieces of rock that make up the Earth\'s outer layer', correct: true },
              { id: 'a', text: 'Hot rocks that rise up from deep inside the Earth', correct: false },
              { id: 'd', text: 'A slow type of erosion caused by wind, rain, and ice', correct: false }
            ],
            explanation: 'The passage defines tectonic plates as large pieces of rock making up the Earth\'s outer layer.',
            points: 1
          },
          {
            id: 'ap-m2e-7-q2',
            type: 'factual',
            stem: 'Which two mountain ranges are mentioned in the passage?',
            highlightText: null,
            options: [
              { id: 'a', text: 'The Alps and the Rockies', correct: false },
              { id: 'c', text: 'The Pyrenees and the Atlas Mountains', correct: false },
              { id: 'd', text: 'The Urals and the Caucasus', correct: false },
              { id: 'b', text: 'The Himalayas and the Andes', correct: true }
            ],
            explanation: 'The passage mentions the Himalayas and the Andes.',
            points: 1
          },
          {
            id: 'ap-m2e-7-q3',
            type: 'vocabulary',
            stem: 'The word "erosion" in paragraph 2 refers to:',
            highlightText: 'erosion',
            options: [
              { id: 'b', text: 'The process of being worn down by wind, rain, and ice', correct: true },
              { id: 'c', text: 'The process of volcanic rock slowly building up over time', correct: false },
              { id: 'd', text: 'The slow movement of tectonic plates across the Earth\'s surface', correct: false },
              { id: 'a', text: 'The formation of new mountain ranges at the edges of plates', correct: false }
            ],
            explanation: 'The passage explains that erosion is the process of being worn down by wind, rain, and ice.',
            points: 1
          },
          {
            id: 'ap-m2e-7-q4',
            type: 'inference',
            stem: 'What can be inferred about mountains over time?',
            highlightText: null,
            options: [
              { id: 'c', text: 'They eventually disappear completely within a few hundred years', correct: false },
              { id: 'b', text: 'They generally become shorter due to erosion', correct: true },
              { id: 'a', text: 'They become taller over millions of years', correct: false },
              { id: 'd', text: 'They move from place to place every year', correct: false }
            ],
            explanation: 'The passage suggests mountains become shorter over time as erosion wears them down.',
            points: 1
          },
          {
            id: 'ap-m2e-7-q5',
            type: 'important_idea',
            stem: 'What is the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'd', text: 'All mountains were formed by the movement of tectonic plates.', correct: false },
              { id: 'a', text: 'Mountains are dangerous places that people should always avoid.', correct: false },
              { id: 'c', text: 'Volcanic mountains are stronger than other types of mountains.', correct: false },
              { id: 'b', text: 'Mountains form through natural processes and slowly change over time.', correct: true }
            ],
            explanation: 'The passage explains how mountains form and how erosion changes them over time.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader, which reads window.READING_TEST_7
window.READING_TEST_7 = window.READING_SECTION_7;
