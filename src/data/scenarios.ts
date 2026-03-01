import type { Scenario } from '@/types/scenario';

export const scenarios: Scenario[] = [
  {
    id: 'sd-mo-001',
    title: 'Snack Request Before Lunch',
    topic: 'sd-vs-mo',
    difficulty: 1,
    vignette:
      'A student has not had lunch yet and is sitting in class before the lunch period. The teacher places a bag of pretzels on the desk and says, "If you ask appropriately, you can have one." The student says, "Can I have a pretzel?" and the teacher gives them one.',
    learningObjectives: [
      'Distinguish Sd from MO',
      'Identify relevant antecedent and consequence variables',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt:
          'What is the most likely motivating operation in this scenario?',
        options: [
          'The teacher statement',
          'The pretzels being visible',
          'Being hungry before lunch',
          'Receiving the pretzel',
        ],
        correctIndex: 2,
        rationale:
          'Hunger increases the value of food as reinforcement and makes food-seeking behavior more likely.',
        errorTags: ['confused-sd-with-mo'],
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        prompt: 'What is the Sd for asking appropriately?',
        options: [
          'Being hungry before lunch',
          'The teacher statement',
          'Eating the pretzel',
          'The student response',
        ],
        correctIndex: 1,
        rationale:
          'The teacher statement signals that reinforcement is available for a specific response: asking appropriately.',
        errorTags: ['confused-sd-with-mo'],
      },
    ],
    explanation:
      'Hunger functions as the MO because it increases the value of food. The teacher statement is the Sd because it signals that a pretzel is available if the student emits the correct response.',
    tags: ['antecedents', 'motivating-operations', 'discriminative-stimulus'],
  },
  {
    id: 'func-001',
    title: 'Worksheet Pushed Away',
    topic: 'function',
    difficulty: 2,
    vignette:
      'Each time independent writing begins, a learner pushes the worksheet onto the floor and groans loudly. Staff usually remove the worksheet for several minutes and tell the learner to calm down before trying again.',
    learningObjectives: [
      'Identify likely behavioral function from consequence patterns',
      'Match intervention ideas to function hypotheses',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt:
          'What is the most likely maintaining function of pushing the worksheet away?',
        options: [
          'Attention',
          'Escape from task demands',
          'Access to tangibles',
          'Automatic reinforcement',
        ],
        correctIndex: 1,
        rationale:
          'The worksheet is removed contingent on the behavior, suggesting escape from demands.',
        errorTags: ['function-identification'],
      },
      {
        id: 'q2',
        type: 'short-answer',
        prompt:
          'Describe one replacement behavior and one consequence strategy that would fit this function.',
        rubric: {
          requiredConcepts: [
            'replacement behavior such as break request/help request',
            'reinforce appropriate alternative response',
            'do not allow worksheet removal to continue following problem behavior alone',
          ],
          commonMistakes: [
            'replacement behavior not related to escape',
            'strategy relies only on punishment',
            'consequence plan does not match function',
          ],
        },
        sampleAnswer:
          'A good replacement behavior would be teaching the learner to request a break or help. Staff could reinforce that appropriate request while making sure problem behavior does not keep producing the same escape outcome by itself.',
      },
    ],
    explanation:
      'Because task removal follows the behavior, escape is the strongest function hypothesis. A function-based plan would teach an appropriate way to access a break or help while reducing reinforcement for pushing the worksheet away.',
    tags: ['escape', 'negative-reinforcement', 'function-based-treatment'],
  },
  {
    id: 'rein-001',
    title: 'Functional Communication for Toy Access',
    topic: 'reinforcement',
    difficulty: 2,
    vignette:
      'A child often screams when a preferred toy is out of reach. During intervention, staff teach the child to hand over a picture card for the toy. When the child uses the card, staff immediately provide the toy for 30 seconds. Screaming no longer results in toy access.',
    learningObjectives: [
      'Identify DRA / functional communication training logic',
      'Analyze reinforcement of alternative behavior',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'Which procedure is best described in this scenario?',
        options: ['DRO', 'DRA', 'DRL', 'Response cost'],
        correctIndex: 1,
        rationale:
          'An alternative appropriate response is reinforced while the problem behavior no longer produces reinforcement.',
        errorTags: ['dr-procedures'],
      },
      {
        id: 'q2',
        type: 'short-answer',
        prompt:
          'Why is immediate toy delivery important when the child uses the picture card?',
        rubric: {
          requiredConcepts: [
            'strengthens response-reinforcer relation',
            'supports acquisition of communication response',
            'helps alternative response compete with screaming history',
          ],
          commonMistakes: [
            'focuses only on motivation and not contingency timing',
            'describes punishment instead of reinforcement',
          ],
        },
        sampleAnswer:
          'Immediate delivery makes the contingency clear, strengthens the picture-card response quickly, and helps that response compete with the child’s prior history of screaming for toys.',
      },
    ],
    explanation:
      'This is DRA/FCT: reinforce the communication alternative and withhold toy access for screaming. Immediate reinforcement matters because it strengthens the new response efficiently and makes the contingency obvious.',
    tags: ['dra', 'fct', 'replacement-behavior', 'positive-reinforcement'],
  },
  {
    id: 'meas-001',
    title: 'Measuring Out-of-Seat Behavior',
    topic: 'measurement',
    difficulty: 1,
    vignette:
      'A teacher aide records each time a student leaves their seat during a 20-minute lesson. The recorded counts across four sessions are 10, 8, 7, and 5.',
    learningObjectives: [
      'Identify basic direct measurement systems',
      'Differentiate frequency from rate',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'What measurement system is being used directly?',
        options: [
          'Duration',
          'Latency',
          'Frequency',
          'Whole-interval recording',
        ],
        correctIndex: 2,
        rationale:
          'The aide is counting the number of times the behavior occurs.',
        errorTags: ['measurement-system'],
      },
      {
        id: 'q2',
        type: 'short-answer',
        prompt:
          'Why might rate be more useful than raw frequency if different staff observe for different lesson lengths?',
        rubric: {
          requiredConcepts: [
            'rate accounts for time',
            'improves comparability across observation periods',
            'frequency alone can be misleading when durations differ',
          ],
          commonMistakes: [
            'defines rate incorrectly',
            'fails to mention differing observation length',
          ],
        },
        sampleAnswer:
          'Rate would be more useful because it accounts for observation time. If sessions differ in length, raw frequency alone could be misleading, while rate allows better comparison across staff and sessions.',
      },
    ],
    explanation:
      'The current measure is frequency. If observation times vary, converting to rate provides a more standardized and interpretable metric.',
    tags: ['frequency', 'rate', 'classroom-data', 'direct-measurement'],
  },
  {
    id: 'exp-001',
    title: 'Staggered Social Skills Instruction',
    topic: 'experimental-design',
    difficulty: 3,
    vignette:
      'A clinician targets three social skills: greeting peers, asking to join a game, and giving compliments. Baseline data are collected on all three skills. Intervention begins for greeting peers first while the other two remain in baseline. Later, intervention is introduced to asking to join a game, and finally to giving compliments. Each skill improves only after intervention begins for that specific skill.',
    learningObjectives: [
      'Identify multiple baseline logic',
      'Explain why staggered introduction supports experimental control',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'Which single-case design is described?',
        options: [
          'Reversal (ABAB)',
          'Multiple baseline across behaviors',
          'Alternating treatments',
          'Changing criterion',
        ],
        correctIndex: 1,
        rationale:
          'Intervention is introduced in a staggered way across separate skills while untreated skills remain in baseline.',
        errorTags: ['design-identification'],
      },
      {
        id: 'q2',
        type: 'short-answer',
        prompt:
          'Give one reason a clinician might choose this design instead of a reversal design.',
        rubric: {
          requiredConcepts: [
            'withdrawing treatment may be impractical or unethical',
            'some learned skills may not reverse cleanly',
            'staggered starts still permit replicated demonstrations of control',
          ],
          commonMistakes: [
            'states personal preference without design logic',
            'confuses multiple baseline with simple repeated measurement',
          ],
        },
        sampleAnswer:
          'A clinician might choose multiple baseline because withdrawing an effective intervention may be impractical or unethical, and some social skills may not reverse once learned. The staggered introduction still allows repeated demonstrations of control.',
      },
    ],
    explanation:
      'This is a multiple baseline across behaviors/skills design. It is often preferred when withdrawal would be impractical, unethical, or unlikely to produce reversal after learning has occurred.',
    tags: ['multiple-baseline', 'single-case-design', 'experimental-control'],
  },
];
