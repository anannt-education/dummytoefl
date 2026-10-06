window.READING_SECTION_4 = {
  id: 'reading-section-4',
  title: 'Reading Practice Test 4',
  timeLimit: 1800000,
  format: '2026',

  completeTheWords: [
    {
      id: 'ctw-4',
      type: 'complete_the_words',
      paragraph: 'Human memory is a comp____ system that allows individuals to enc____, store, and retr____ information. Short-term memory holds data bri____ before it is either disc____ or transferred to long-term sto____. Emot____ experiences tend to form stron____ memories, which is why trau____ events are often viv____ recalled years later.',
      words: [
        { id: 'ctw-4-w1', position: 0, displayText: 'comp', answer: 'lex', fullWord: 'complex' },
        { id: 'ctw-4-w2', position: 1, displayText: 'enc', answer: 'ode', fullWord: 'encode' },
        { id: 'ctw-4-w3', position: 2, displayText: 'retr', answer: 'ieve', fullWord: 'retrieve' },
        { id: 'ctw-4-w4', position: 3, displayText: 'bri', answer: 'efly', fullWord: 'briefly' },
        { id: 'ctw-4-w5', position: 4, displayText: 'disc', answer: 'arded', fullWord: 'discarded' },
        { id: 'ctw-4-w6', position: 5, displayText: 'sto', answer: 'rage', fullWord: 'storage' },
        { id: 'ctw-4-w7', position: 6, displayText: 'Emot', answer: 'ional', fullWord: 'Emotional' },
        { id: 'ctw-4-w8', position: 7, displayText: 'stron', answer: 'ger', fullWord: 'stronger' },
        { id: 'ctw-4-w9', position: 8, displayText: 'trau', answer: 'matic', fullWord: 'traumatic' },
        { id: 'ctw-4-w10', position: 9, displayText: 'viv', answer: 'idly', fullWord: 'vividly' }
      ],
      points: 10
    },
    {
      id: 'ctw-4b',
      type: 'complete_the_words',
      paragraph: 'Sleep is divided into several dist____ stages that cycle throu____ the night. During deep non-REM sleep, the body repa____ tissues and stren____ the immune system. REM sleep, when most dre____ occur, is charac____ by rapid eye movements and intense brain acti____. Most adults need se____ to nine hours per night to maintain optim____ memory consol____ and emotional regulation.',
      words: [
        { id: 'ctw-4b-w1', position: 0, displayText: 'dist', answer: 'inct', fullWord: 'distinct' },
        { id: 'ctw-4b-w2', position: 1, displayText: 'throu', answer: 'ghout', fullWord: 'throughout' },
        { id: 'ctw-4b-w3', position: 2, displayText: 'repa', answer: 'irs', fullWord: 'repairs' },
        { id: 'ctw-4b-w4', position: 3, displayText: 'stren', answer: 'gthens', fullWord: 'strengthens' },
        { id: 'ctw-4b-w5', position: 4, displayText: 'dre', answer: 'ams', fullWord: 'dreams' },
        { id: 'ctw-4b-w6', position: 5, displayText: 'charac', answer: 'terized', fullWord: 'characterized' },
        { id: 'ctw-4b-w7', position: 6, displayText: 'acti', answer: 'vity', fullWord: 'activity' },
        { id: 'ctw-4b-w8', position: 7, displayText: 'se', answer: 'ven', fullWord: 'seven' },
        { id: 'ctw-4b-w9', position: 8, displayText: 'optim', answer: 'al', fullWord: 'optimal' },
        { id: 'ctw-4b-w10', position: 9, displayText: 'consol', answer: 'idation', fullWord: 'consolidation' }
      ],
      points: 10
    }
  ],

  dailyLife: [
    {
      id: 'rdl-email-4',
      type: 'read_daily_life',
      textType: 'email',
      title: 'Scholarship Application Reminder',
      to: 'Undergraduate Students',
      from: 'financialaid@pinewooduniv.edu',
      date: '04/01/2026',
      subject: 'Merit Scholarship Applications Due April 18',
      body: 'Dear Students,\n\nThis is a reminder that applications for the annual Pinewood Merit Scholarship are due by April 18. Eligible students must have a cumulative GPA of 3.5 or higher and be enrolled full-time for the upcoming academic year. Applications should include a personal statement of no more than 500 words and one letter of recommendation from a faculty member. Submit all materials through the Financial Aid portal.\n\nPlease do not hesitate to contact our office with questions.',
      signoff: 'Best wishes,',
      senderName: 'Dr. Rachel Simmons\nDirector of Financial Aid',
      questions: [
        {
          id: 'rdl-email-4-q1',
          stem: 'What is the minimum GPA required for the scholarship?',
          options: [
            { id: 'd', text: '4.0', correct: false },
            { id: 'c', text: '3.7', correct: false },
            { id: 'a', text: '3.0', correct: false },
            { id: 'b', text: '3.5', correct: true }
          ],
          explanation: 'The email states that eligible students must have a cumulative GPA of 3.5 or higher.',
          points: 1
        },
        {
          id: 'rdl-email-4-q2',
          stem: 'How many letters of recommendation are required?',
          options: [
            { id: 'b', text: 'One', correct: true },
            { id: 'a', text: 'None', correct: false },
            { id: 'c', text: 'Two', correct: false },
            { id: 'd', text: 'Three', correct: false }
          ],
          explanation: 'The email specifies that applications should include one letter of recommendation from a faculty member.',
          points: 1
        }
      ]
    },
    {
      id: 'rdl-tc-4',
      type: 'read_daily_life',
      textType: 'text_chain',
      title: 'Volunteer Coordination',
      messages: [
        { sender: 'Maya Torres', time: '11:00 A.M.', text: 'Hi everyone! The community food drive is this Saturday from 9 A.M. to 3 P.M. at the recreation center. We need at least ten volunteers.' },
        { sender: 'James Park', time: '11:04 A.M.', text: 'I can be there the whole day. Do we need to bring anything specific?' },
        { sender: 'Maya Torres', time: '11:07 A.M.', text: 'Just comfortable shoes and a water bottle. The organizers are providing gloves and sorting bins. Also, wear the green volunteer shirts from last time if you still have them.' },
        { sender: 'Olivia Becker', time: '11:12 A.M.', text: 'I can only come in the morning, from 9 to noon. Is that okay?' },
        { sender: 'Maya Torres', time: '11:14 A.M.', text: 'That is perfectly fine. Any help is appreciated. We will have two shifts: morning and afternoon.' },
        { sender: 'Daniel Osei', time: '11:19 A.M.', text: 'Count me in for the afternoon shift. I have a dentist appointment in the morning but can be there by 12:30.' },
        { sender: 'Maya Torres', time: '11:22 A.M.', text: 'Great, that works. So we have James for the full day, Olivia for the morning, and Daniel for the afternoon. I will keep recruiting more people this week.' }
      ],
      questions: [
        {
          id: 'rdl-tc-4-q1',
          stem: 'What are volunteers NOT required to bring?',
          options: [
            { id: 'c', text: 'Sorting bins', correct: true },
            { id: 'd', text: 'Green volunteer shirts', correct: false },
            { id: 'a', text: 'Comfortable shoes', correct: false },
            { id: 'b', text: 'A water bottle', correct: false }
          ],
          explanation: 'Maya says the organizers are providing gloves and sorting bins, so volunteers do not need to bring sorting bins themselves.',
          points: 1
        },
        {
          id: 'rdl-tc-4-q2',
          stem: 'Why can Daniel only attend the afternoon shift?',
          options: [
            { id: 'b', text: 'He has a dentist appointment', correct: true },
            { id: 'a', text: 'He has a class in the morning', correct: false },
            { id: 'd', text: 'He lives far from the recreation center', correct: false },
            { id: 'c', text: 'He needs to pick up supplies', correct: false }
          ],
          explanation: 'Daniel says he has a dentist appointment in the morning but can be there by 12:30 for the afternoon shift.',
          points: 1
        },
        {
          id: 'rdl-tc-4-q3',
          stem: 'How many volunteers has Maya confirmed so far?',
          options: [
            { id: 'd', text: 'Ten', correct: false },
            { id: 'b', text: 'Three', correct: true },
            { id: 'c', text: 'Five', correct: false },
            { id: 'a', text: 'Two', correct: false }
          ],
          explanation: 'Maya summarizes that she has James for the full day, Olivia for the morning, and Daniel for the afternoon, which is three confirmed volunteers.',
          points: 1
        }
      ]
    }
  ],

  academicPassages: [
    {
      id: 'ap-4',
      type: 'academic_passage',
      title: 'The History of Antibiotics',
      text: 'Before the twentieth century, even minor bacterial infections could prove fatal. A simple cut or a routine surgical procedure carried the risk of deadly sepsis, and physicians had few effective tools to combat such infections. The discovery of antibiotics in the early 1900s marked one of the most significant advances in the history of medicine, transforming what had once been death sentences into treatable conditions.\n\nThe story of antibiotics began in 1928, when the Scottish bacteriologist Alexander Fleming noticed that a mold called Penicillium notatum had contaminated one of his bacterial cultures and was killing the surrounding bacteria. Fleming identified the antibacterial substance produced by the mold and named it penicillin. However, it was not until the early 1940s that Howard Florey and Ernst Boris Chain developed methods to purify and mass-produce the drug, making it available for widespread clinical use during World War II.\n\nThe success of penicillin spurred the discovery of numerous other antibiotics throughout the mid-twentieth century, a period sometimes referred to as the golden age of antibiotic discovery. Drugs such as streptomycin, tetracycline, and erythromycin were introduced, each targeting different types of bacteria. For several decades, it seemed as though infectious diseases might be conquered entirely. Public health officials and scientists expressed growing optimism that bacterial infections would become a concern of the past.\n\nThat optimism has since been tempered by the emergence of antibiotic-resistant bacteria. The overuse and misuse of antibiotics in human medicine and agriculture have accelerated the evolution of resistant strains, including methicillin-resistant Staphylococcus aureus, commonly known as MRSA. Today, antibiotic resistance is considered one of the most serious threats to global public health, prompting urgent research into new treatments, including bacteriophage therapy and antimicrobial peptides.',
      questions: [
        {
          id: 'ap-4-q1',
          type: 'factual',
          stem: 'According to the passage, who developed methods to mass-produce penicillin?',
          highlightText: null,
          options: [
            { id: 'c', text: 'A team of British military physicians', correct: false },
            { id: 'a', text: 'Alexander Fleming and his laboratory assistants', correct: false },
            { id: 'd', text: 'A group of Scottish university researchers', correct: false },
            { id: 'b', text: 'Howard Florey and Ernst Boris Chain', correct: true }
          ],
          explanation: 'The passage states that Howard Florey and Ernst Boris Chain developed methods to purify and mass-produce penicillin in the early 1940s.',
          points: 1
        },
        {
          id: 'ap-4-q2',
          type: 'vocabulary',
          stem: 'The word "tempered" in paragraph 4 is closest in meaning to:',
          highlightText: 'tempered',
          options: [
            { id: 'a', text: 'Strengthened or reinforced', correct: false },
            { id: 'c', text: 'Moderated or restrained', correct: true },
            { id: 'd', text: 'Completely eliminated or erased', correct: false },
            { id: 'b', text: 'Replaced or substituted', correct: false }
          ],
          explanation: '"Tempered" means made less extreme or restrained. In this context, the earlier optimism about defeating infections has been moderated by the rise of antibiotic-resistant bacteria.',
          points: 1
        },
        {
          id: 'ap-4-q3',
          type: 'inference',
          stem: 'It can be inferred from the passage that the "golden age of antibiotic discovery" ended because:',
          highlightText: null,
          options: [
            { id: 'b', text: 'All known antibiotics had already been discovered', correct: false },
            { id: 'd', text: 'Governments withdrew their funding for medical research', correct: false },
            { id: 'a', text: 'Scientists gradually lost interest in studying bacteria', correct: false },
            { id: 'c', text: 'Bacteria began developing resistance to existing drugs', correct: true }
          ],
          explanation: 'The passage describes the golden age as a period of optimism that was followed by the emergence of antibiotic-resistant bacteria, implying that resistance effectively ended that era of progress.',
          points: 1
        },
        {
          id: 'ap-4-q4',
          type: 'paragraph_relationships',
          stem: 'What is the relationship between paragraph 3 and paragraph 4?',
          highlightText: null,
          options: [
            { id: 'b', text: 'Paragraph 3 describes the early optimism about antibiotics, while paragraph 4 presents the challenges that followed.', correct: true },
            { id: 'a', text: 'Both paragraphs describe the laboratory process by which new antibiotic drugs are developed and then tested.', correct: false },
            { id: 'c', text: 'Paragraph 3 discusses antibiotics used in animals, while paragraph 4 discusses antibiotics used in human patients.', correct: false },
            { id: 'd', text: 'Paragraph 3 presents a scientific theory, and paragraph 4 provides the experimental evidence that supports it.', correct: false }
          ],
          explanation: 'Paragraph 3 describes the golden age of antibiotic discovery and the optimism it generated, while paragraph 4 contrasts this with the serious challenge of antibiotic resistance.',
          points: 1
        },
        {
          id: 'ap-4-q5',
          type: 'important_idea',
          stem: 'Which of the following best expresses the most important idea of the passage?',
          highlightText: null,
          options: [
            { id: 'a', text: 'Alexander Fleming\'s discovery of penicillin in 1928 was an entirely accidental event.', correct: false },
            { id: 'd', text: 'World War II was the primary reason for advances in antibiotic research.', correct: false },
            { id: 'b', text: 'Antibiotics revolutionized medicine but now face the serious challenge of bacterial resistance.', correct: true },
            { id: 'c', text: 'MRSA is now the most dangerous bacterial infection in the world today.', correct: false }
          ],
          explanation: 'The passage traces the development of antibiotics from a major medical breakthrough to the current crisis of antibiotic resistance, emphasizing both the achievement and the challenge.',
          points: 1
        }
      ]
    }
  ],

  module2Hard: {
    completeTheWords: [
      {
        id: 'ctw-m2-4',
        type: 'complete_the_words',
        paragraph: 'Weather forec____ relies on the collection of atmos____ data from satellites, radar stations, and ground-based observ____. Meteoro____ use computer models to predict tempe____ changes, precip____ levels, and wind patterns. Accu____ predictions help communities prepare for severe condi____ such as hurricanes and bliz____. Advances in techno____ continue to improve the reliability of these forecasts.',
        words: [
          { id: 'ctw-m2-4-w1', position: 0, displayText: 'forec', answer: 'asting', fullWord: 'forecasting' },
          { id: 'ctw-m2-4-w2', position: 1, displayText: 'atmos', answer: 'pheric', fullWord: 'atmospheric' },
          { id: 'ctw-m2-4-w3', position: 2, displayText: 'observ', answer: 'atories', fullWord: 'observatories' },
          { id: 'ctw-m2-4-w4', position: 3, displayText: 'Meteoro', answer: 'logists', fullWord: 'Meteorologists' },
          { id: 'ctw-m2-4-w5', position: 4, displayText: 'tempe', answer: 'rature', fullWord: 'temperature' },
          { id: 'ctw-m2-4-w6', position: 5, displayText: 'precip', answer: 'itation', fullWord: 'precipitation' },
          { id: 'ctw-m2-4-w7', position: 6, displayText: 'Accu', answer: 'rate', fullWord: 'Accurate' },
          { id: 'ctw-m2-4-w8', position: 7, displayText: 'condi', answer: 'tions', fullWord: 'conditions' },
          { id: 'ctw-m2-4-w9', position: 8, displayText: 'bliz', answer: 'zards', fullWord: 'blizzards' },
          { id: 'ctw-m2-4-w10', position: 9, displayText: 'techno', answer: 'logy', fullWord: 'technology' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2-4',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Lost and Found Policy',
        text: 'All lost items found on campus should be brought to the Security Office in Room 104 of the Administration Building. Items will be held for thirty days. Owners may claim their belongings by presenting a valid student or staff ID and describing the item. After thirty days, unclaimed items will be donated to local charities. For high-value items such as electronics and wallets, please contact campus security directly at extension 2200.',
        questions: [
          {
            id: 'rdl-notice-m2-4-q1',
            stem: 'How long are lost items kept before being donated?',
            options: [
              { id: 'b', text: 'Thirty days', correct: true },
              { id: 'd', text: 'Ninety days', correct: false },
              { id: 'a', text: 'Two weeks', correct: false },
              { id: 'c', text: 'Sixty days', correct: false }
            ],
            explanation: 'The notice states items will be held for thirty days before being donated to local charities.',
            points: 1
          },
          {
            id: 'rdl-notice-m2-4-q2',
            stem: 'What must owners present to claim their belongings?',
            options: [
              { id: 'b', text: 'A police report about the loss', correct: false },
              { id: 'c', text: 'A valid student or staff ID', correct: true },
              { id: 'a', text: 'A receipt showing the item\'s purchase', correct: false },
              { id: 'd', text: 'A written letter requesting the item', correct: false }
            ],
            explanation: 'The notice says owners may claim their belongings by presenting a valid student or staff ID and describing the item.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2-4',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Economics 201 Study Group Members',
        from: 'Kevin Park',
        date: 'March 10, 2026',
        subject: 'Study Group Room Booking Confirmed',
        body: 'I wanted to let everyone know that I have reserved Study Room 3B in the Pearson Library for our midterm review sessions. The room is booked for every Tuesday and Thursday from 5:00 PM to 7:00 PM starting March 17 and continuing through April 3. The room has a whiteboard, projector, and seating for up to eight people. Please bring your textbooks and any practice problems you would like to work through together. If you cannot attend a session, just let the group know in advance so we can adjust the agenda.',
        signoff: 'Thanks,',
        senderName: 'Kevin Park',
        questions: [
          {
            id: 'rdl-email-m2-4-q1',
            stem: 'Where is the study room located?',
            options: [
              { id: 'b', text: 'The student center', correct: false },
              { id: 'd', text: 'The campus conference hall', correct: false },
              { id: 'a', text: 'The Economics Department building', correct: false },
              { id: 'c', text: 'The Pearson Library', correct: true }
            ],
            explanation: 'The email states Kevin reserved Study Room 3B in the Pearson Library.',
            points: 1
          },
          {
            id: 'rdl-email-m2-4-q2',
            stem: 'On which days are the sessions scheduled?',
            options: [
              { id: 'b', text: 'Tuesday and Thursday', correct: true },
              { id: 'a', text: 'Monday and Wednesday', correct: false },
              { id: 'c', text: 'Wednesday and Friday', correct: false },
              { id: 'd', text: 'Saturday and Sunday', correct: false }
            ],
            explanation: 'The email says the room is booked for every Tuesday and Thursday.',
            points: 1
          },
          {
            id: 'rdl-email-m2-4-q3',
            stem: 'What should members do if they cannot attend a session?',
            options: [
              { id: 'a', text: 'Cancel the reservation for that session', correct: false },
              { id: 'b', text: 'Find a replacement member to attend', correct: false },
              { id: 'd', text: 'Submit their notes by email afterward', correct: false },
              { id: 'c', text: 'Let the group know in advance', correct: true }
            ],
            explanation: 'The email asks that anyone who cannot attend should let the group know in advance so they can adjust the agenda.',
            points: 1
          }
        ]
      }
    ],

    academicPassages: [
      {
        id: 'ap-m2-4',
        type: 'academic_passage',
        title: 'The Development of Writing Systems',
        text: 'Writing was not invented in a single moment but emerged gradually in several civilizations as societies grew complex enough to require permanent records. The earliest known writing system, cuneiform, appeared in Mesopotamia around 3200 BCE. It originated as a record-keeping tool for trade and taxation, with merchants pressing wedge-shaped marks into wet clay tablets to track quantities of grain, livestock, and goods.\n\nEgyptian hieroglyphs developed independently around the same period and combined pictorial signs with symbols representing sounds. Unlike cuneiform, which gradually became more abstract, hieroglyphs retained their visual character for thousands of years and were used primarily for monumental inscriptions and religious texts. Daily Egyptian writing eventually shifted to a simpler cursive form better suited to writing on papyrus.\n\nA major leap occurred with the invention of the alphabet, generally credited to Semitic speakers in the eastern Mediterranean around 1800 BCE. Earlier writing systems required learning hundreds or even thousands of signs, limiting literacy to a small class of professional scribes. By contrast, an alphabet uses a small set of characters that represent individual sounds, making it possible for far more people to learn to read and write. Phoenician traders carried the alphabet across the Mediterranean, where Greeks adapted it by adding vowel symbols.\n\nThe spread of writing systems has rarely been neutral. Each new script tended to displace existing ones, sometimes by deliberate policy and sometimes through commercial dominance. Scholars have learned a great deal about lost cultures by deciphering their scripts, but many ancient writing systems, including the script of the Indus Valley civilization, remain undeciphered. Each successful translation requires both linguistic insight and a piece of luck, often in the form of a bilingual inscription.',
        questions: [
          {
            id: 'ap-m2-4-q1',
            type: 'factual',
            stem: 'According to the passage, what was the original purpose of cuneiform?',
            highlightText: null,
            options: [
              { id: 'a', text: 'Religious ceremonies in Mesopotamian temples', correct: false },
              { id: 'c', text: 'Personal letters between merchants', correct: false },
              { id: 'b', text: 'Recording trade and taxation', correct: true },
              { id: 'd', text: 'Documenting historical events for future generations', correct: false }
            ],
            explanation: 'The passage states cuneiform originated as a record-keeping tool for trade and taxation.',
            points: 1
          },
          {
            id: 'ap-m2-4-q2',
            type: 'vocabulary',
            stem: 'The word "deciphering" in paragraph 4 most nearly means:',
            highlightText: 'deciphering',
            options: [
              { id: 'a', text: 'Translating an ancient text word for word into one of the modern languages', correct: false },
              { id: 'c', text: 'Reproducing the shapes of ancient writing in modern printed books and articles', correct: false },
              { id: 'd', text: 'Determining the historical date and location at which an inscription was carved', correct: false },
              { id: 'b', text: 'Working out the meaning of something written in code or an unknown script', correct: true }
            ],
            explanation: 'In context, deciphering scripts refers to working out their meaning when the writing system is unknown.',
            points: 1
          },
          {
            id: 'ap-m2-4-q3',
            type: 'inference',
            stem: 'It can be inferred from paragraph 3 that one major advantage of an alphabet over earlier writing systems is that:',
            highlightText: null,
            options: [
              { id: 'a', text: 'It is far more visually beautiful than the older pictographic scripts were', correct: false },
              { id: 'd', text: 'It is much easier to carve into wet clay tablets than cuneiform', correct: false },
              { id: 'b', text: 'It allows wider literacy by reducing the number of signs to learn', correct: true },
              { id: 'c', text: 'It can record spoken sounds that the older writing systems could not represent', correct: false }
            ],
            explanation: 'The passage notes earlier systems required learning hundreds of signs, limiting literacy to professional scribes, while alphabets use few characters and allow far more people to learn.',
            points: 1
          },
          {
            id: 'ap-m2-4-q4',
            type: 'paragraph_relationships',
            stem: 'How does paragraph 2 relate to paragraph 1?',
            highlightText: null,
            options: [
              { id: 'b', text: 'It presents a parallel example of an early writing system that developed independently.', correct: true },
              { id: 'c', text: 'It explains why cuneiform gradually spread from Mesopotamia into Egypt and other regions', correct: false },
              { id: 'a', text: 'It directly contradicts the claim about gradual development made in paragraph 1.', correct: false },
              { id: 'd', text: 'It describes how Egyptian writing gradually replaced the earlier Mesopotamian writing system', correct: false }
            ],
            explanation: 'Paragraph 2 introduces Egyptian hieroglyphs as a parallel writing system that developed independently around the same time as cuneiform.',
            points: 1
          },
          {
            id: 'ap-m2-4-q5',
            type: 'important_idea',
            stem: 'Which best summarizes the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'd', text: 'Writing emerged solely from the religious practices of priests and temples in a few early civilizations.', correct: false },
              { id: 'a', text: 'Egyptian hieroglyphs were by far the most influential of all the ancient writing systems ever created.', correct: false },
              { id: 'b', text: 'Writing systems developed independently in multiple civilizations and evolved in ways that shaped who could become literate.', correct: true },
              { id: 'c', text: 'Most of the ancient scripts have now been fully deciphered through decades of patient international scholarly work.', correct: false }
            ],
            explanation: 'The passage describes the independent development of cuneiform, hieroglyphs, and the alphabet, and discusses how each shaped literacy access.',
            points: 1
          }
        ]
      }
    ]
  },
  module2Easy: {
    completeTheWords: [
      {
        id: 'ctw-m2e-4',
        type: 'complete_the_words',
        paragraph: 'My bro___ loves to cook simple meals at home. He gets his recipes from a cooking web___. Last night he made pasta with tom___ sauce and gar___ bread. He chopped onions and cooked them with ol___ oil in a large p___. The kit___ smelled wonderful while the food was cooking. My family ate together at the dining ta___. Everyone agreed that the food was deli___. After dinner, my brother washed the dis___ while I dried them. Cooking at home is a great way to save money and try new things.',
        words: [
          { id: 'ctw-m2e-4-w1', position: 0, displayText: 'bro', answer: 'ther', fullWord: 'brother' },
          { id: 'ctw-m2e-4-w2', position: 1, displayText: 'web', answer: 'site', fullWord: 'website' },
          { id: 'ctw-m2e-4-w3', position: 2, displayText: 'tom', answer: 'ato', fullWord: 'tomato' },
          { id: 'ctw-m2e-4-w4', position: 3, displayText: 'gar', answer: 'lic', fullWord: 'garlic' },
          { id: 'ctw-m2e-4-w5', position: 4, displayText: 'ol', answer: 'ive', fullWord: 'olive' },
          { id: 'ctw-m2e-4-w6', position: 5, displayText: 'p', answer: 'an', fullWord: 'pan' },
          { id: 'ctw-m2e-4-w7', position: 6, displayText: 'kit', answer: 'chen', fullWord: 'kitchen' },
          { id: 'ctw-m2e-4-w8', position: 7, displayText: 'ta', answer: 'ble', fullWord: 'table' },
          { id: 'ctw-m2e-4-w9', position: 8, displayText: 'deli', answer: 'cious', fullWord: 'delicious' },
          { id: 'ctw-m2e-4-w10', position: 9, displayText: 'dis', answer: 'hes', fullWord: 'dishes' }
        ],
        points: 10
      }
    ],
    dailyLife: [
      {
        id: 'rdl-notice-m2e-4',
        type: 'read_daily_life',
        textType: 'notice',
        title: 'Tutoring Center New Hours',
        text: 'The Math Tutoring Center has new hours this semester. The center will be open Monday through Friday from 9:00 AM to 8:00 PM. Saturday hours are 11:00 AM to 4:00 PM. The center is closed on Sundays. Walk-in tutoring is available for all undergraduate math classes. Students can also schedule one-on-one sessions through the online booking system. There is no fee for any tutoring service.',
        questions: [
          {
            id: 'rdl-notice-m2e-4-q1',
            stem: 'When is the tutoring center closed?',
            options: [
              { id: 'c', text: 'Monday', correct: false },
              { id: 'd', text: 'Friday', correct: false },
              { id: 'a', text: 'Saturday', correct: false },
              { id: 'b', text: 'Sunday', correct: true }
            ],
            explanation: 'The notice states the center is closed on Sundays.',
            points: 1
          },
          {
            id: 'rdl-notice-m2e-4-q2',
            stem: 'How can students schedule one-on-one sessions?',
            options: [
              { id: 'd', text: 'By emailing the math department office', correct: false },
              { id: 'c', text: 'Through the online booking system', correct: true },
              { id: 'b', text: 'By visiting the center in person', correct: false },
              { id: 'a', text: 'By calling the tutoring center directly', correct: false }
            ],
            explanation: 'The notice says students can schedule one-on-one sessions through the online booking system.',
            points: 1
          }
        ]
      },
      {
        id: 'rdl-email-m2e-4',
        type: 'read_daily_life',
        textType: 'email',
        to: 'Anna Lee',
        from: 'David Chen',
        date: 'September 22, 2026',
        subject: 'Camera Borrowing',
        body: 'Hi Anna,\n\nThanks for offering to lend me your camera for the photography project. I will be working on the project this weekend, so could I pick it up on Friday afternoon? I will return it on Monday morning before class. I promise to be very careful with it. Let me know what time works best for you. We can meet at the library or at your dorm, whichever is easier.',
        signoff: 'Thanks again,',
        senderName: 'David',
        questions: [
          {
            id: 'rdl-email-m2e-4-q1',
            stem: 'When does David want to pick up the camera?',
            options: [
              { id: 'a', text: 'Thursday morning', correct: false },
              { id: 'b', text: 'Friday afternoon', correct: true },
              { id: 'd', text: 'Sunday afternoon', correct: false },
              { id: 'c', text: 'Saturday evening', correct: false }
            ],
            explanation: 'David asks if he can pick up the camera on Friday afternoon.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-4-q2',
            stem: 'When will David return the camera?',
            options: [
              { id: 'c', text: 'Monday evening', correct: false },
              { id: 'b', text: 'Monday morning', correct: true },
              { id: 'a', text: 'Sunday night', correct: false },
              { id: 'd', text: 'Tuesday morning', correct: false }
            ],
            explanation: 'David says he will return it on Monday morning before class.',
            points: 1
          },
          {
            id: 'rdl-email-m2e-4-q3',
            stem: 'Where does David suggest they meet?',
            options: [
              { id: 'd', text: 'At his own apartment on campus', correct: false },
              { id: 'a', text: 'At a coffee shop or restaurant', correct: false },
              { id: 'b', text: 'At the library or her dorm', correct: true },
              { id: 'c', text: 'At the photography studio on campus', correct: false }
            ],
            explanation: 'David suggests they meet at the library or at Anna’s dorm.',
            points: 1
          }
        ]
      }
    ],
    academicPassages: [
      {
        id: 'ap-m2e-4',
        type: 'academic_passage',
        title: 'How Birds Find Their Way Home',
        text: 'Many birds travel long distances every year. They fly south in the autumn to find warmer weather and more food, then return north in the spring. Scientists have wondered for a long time how birds find their way over thousands of kilometers without getting lost.\n\nResearch shows that birds use several methods to find their way. Some birds follow the position of the sun during the day and the stars at night. Others recognize landmarks like rivers, mountains, and coastlines. Many birds can also feel the Earth\'s magnetic field, which acts like a built-in compass. Young birds often learn migration routes by following older birds. Even when conditions are difficult, birds usually find their way to the same areas year after year. This skill remains one of the most amazing abilities in the natural world.',
        questions: [
          {
            id: 'ap-m2e-4-q1',
            type: 'factual',
            stem: 'Why do many birds fly south in the autumn?',
            highlightText: null,
            options: [
              { id: 'b', text: 'To find warmer weather and more food', correct: true },
              { id: 'a', text: 'To escape predators found in the north', correct: false },
              { id: 'd', text: 'To learn new skills from older birds', correct: false },
              { id: 'c', text: 'To meet other species of birds there', correct: false }
            ],
            explanation: 'The passage states that birds fly south to find warmer weather and more food.',
            points: 1
          },
          {
            id: 'ap-m2e-4-q2',
            type: 'vocabulary',
            stem: 'The word "landmarks" in paragraph 2 most likely means:',
            highlightText: 'landmarks',
            options: [
              { id: 'a', text: 'Older birds that lead the group during migration', correct: false },
              { id: 'b', text: 'Features of the land that birds can recognize', correct: true },
              { id: 'd', text: 'Places along the route where birds rest at night', correct: false },
              { id: 'c', text: 'Special signals that come from the other birds', correct: false }
            ],
            explanation: 'In context, "landmarks" refers to recognizable features like rivers, mountains, and coastlines.',
            points: 1
          },
          {
            id: 'ap-m2e-4-q3',
            type: 'factual',
            stem: 'How do birds use the Earth\'s magnetic field?',
            highlightText: null,
            options: [
              { id: 'd', text: 'To call to other birds', correct: false },
              { id: 'b', text: 'To find food in the dark', correct: false },
              { id: 'c', text: 'Like a built-in compass', correct: true },
              { id: 'a', text: 'To rest while flying', correct: false }
            ],
            explanation: 'The passage says the magnetic field acts like a built-in compass.',
            points: 1
          },
          {
            id: 'ap-m2e-4-q4',
            type: 'inference',
            stem: 'Why is it helpful for young birds to fly with older birds?',
            highlightText: null,
            options: [
              { id: 'a', text: 'Older birds can protect them from predators during flight', correct: false },
              { id: 'c', text: 'Young birds get tired very easily on long flights', correct: false },
              { id: 'b', text: 'They can learn migration routes from the older birds', correct: true },
              { id: 'd', text: 'Older birds are much better at finding safe nests', correct: false }
            ],
            explanation: 'The passage says young birds often learn migration routes by following older birds.',
            points: 1
          },
          {
            id: 'ap-m2e-4-q5',
            type: 'important_idea',
            stem: 'Which sentence best states the main idea of the passage?',
            highlightText: null,
            options: [
              { id: 'd', text: 'Scientists are still completely uncertain about how birds manage to travel such long distances without getting lost each year.', correct: false },
              { id: 'b', text: 'Birds use several methods, such as the sun, stars, landmarks, and the Earth’s magnetic field, to find their way during long migrations.', correct: true },
              { id: 'c', text: 'Migration is extremely dangerous, and many birds die from exhaustion or bad weather during the long journey south in the autumn.', correct: false },
              { id: 'a', text: 'Birds fly south every autumn mainly to escape the cold weather and then return north again in the following spring.', correct: false }
            ],
            explanation: 'The passage explains how birds use multiple methods to navigate during migration.',
            points: 1
          }
        ]
      }
    ]
  },
};

// Alias for full-test loader, which reads window.READING_TEST_4
window.READING_TEST_4 = window.READING_SECTION_4;
