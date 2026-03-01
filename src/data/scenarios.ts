import type { Scenario } from '@/types/scenario';

export const scenarios: Scenario[] = [
  {
    id: 'sd-mo-001',
    title: 'Snack Before Dinner',
    topic: 'sd-vs-mo',
    difficulty: 1,
    vignette:
      'A child has not eaten for several hours. Their parent places crackers on the table and says, "If you ask nicely, you can have one." The child says, "Cracker please," and receives a cracker.',
    learningObjectives: [
      'Distinguish Sd from MO',
      'Identify relevant antecedents and consequences',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt:
          'What is the most likely motivating operation in this scenario?',
        options: [
          'The parent statement',
          'Food deprivation',
          'Receiving the cracker',
          'The child saying please',
        ],
        correctIndex: 1,
        rationale:
          'Food deprivation increases the value of food as reinforcement and evokes relevant behavior.',
        errorTags: ['confused-sd-with-mo'],
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        prompt: 'What is the Sd for asking politely?',
        options: [
          'The parent statement',
          'Food deprivation',
          'The cracker itself',
          'The consequence',
        ],
        correctIndex: 0,
        rationale:
          'The parent statement signals reinforcement is available for the polite request.',
        errorTags: ['confused-sd-with-mo'],
      },
    ],
    explanation:
      'The MO is deprivation of food; the Sd is the parent statement indicating reinforcement is available for a specific response.',
    tags: ['antecedents', 'motivating-operations', 'discriminative-stimulus'],
  },
  {
    id: 'sd-mo-002',
    title: 'Tablet Time in Sight',
    topic: 'sd-vs-mo',
    difficulty: 2,
    vignette:
      'A learner has had limited tablet access all day. During session, the therapist places the tablet on a shelf in view and says, "You can have two minutes if you request with your AAC device." The learner uses AAC to request tablet and gets access.',
    learningObjectives: [
      'Differentiate value-altering and availability-signaling variables',
      'Identify the evocative effect of an MO',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'Which event most clearly serves as the Sd for AAC requesting?',
        options: [
          'Limited tablet access all day',
          'Tablet visible on the shelf',
          'Therapist statement about earning two minutes',
          'Receiving tablet access',
        ],
        correctIndex: 2,
        rationale:
          'The statement explicitly signals that reinforcement is available contingent on the AAC request.',
        errorTags: ['sd-vs-mo-mixup'],
      },
      {
        id: 'q2',
        type: 'short-answer',
        prompt:
          'Name the MO and explain how it affects behavior in this scenario.',
        rubric: {
          requiredConcepts: [
            'restricted/limited tablet access as EO',
            'increases value of tablet',
            'evokes requesting behavior',
          ],
          commonMistakes: [
            'labeling therapist statement as MO',
            'describing consequence as antecedent variable',
          ],
        },
        sampleAnswer:
          'The MO is reduced tablet access before session. That deprivation functions as an EO, increasing tablet value and making AAC requesting more likely.',
      },
    ],
    explanation:
      'Limited access establishes tablet as more valuable (MO), while the therapist statement functions as Sd because it indicates reinforcement availability for a specific response.',
    tags: ['aac', 'establishing-operation', 'antecedent-discrimination'],
  },
  {
    id: 'func-001',
    title: 'Math Worksheet Refusal',
    topic: 'function',
    difficulty: 1,
    vignette:
      'When independent math worksheets begin, a student rips the paper. The teacher removes the worksheet and lets the student sit quietly for five minutes.',
    learningObjectives: [
      'Identify likely function based on consequence patterns',
      'Distinguish topography from function',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt:
          'What is the most likely maintaining function of paper ripping?',
        options: [
          'Attention',
          'Escape from task demands',
          'Access to tangibles',
          'Automatic reinforcement',
        ],
        correctIndex: 1,
        rationale:
          'Task removal contingent on behavior suggests negative reinforcement via escape.',
        errorTags: ['function-identification'],
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        prompt: 'Which intervention best matches this hypothesized function?',
        options: [
          'Planned ignoring after ripping',
          'Teach break request and honor it on an appropriate schedule',
          'Provide free access to toys all day',
          'Increase social praise during transitions only',
        ],
        correctIndex: 1,
        rationale:
          'A function-based plan should provide an alternative response for obtaining breaks while reducing escape for problem behavior.',
        errorTags: ['intervention-function-mismatch'],
      },
    ],
    explanation:
      'Because the worksheet is removed after ripping, the behavior is likely maintained by escape. A function-based replacement behavior is requesting a break appropriately.',
    tags: ['escape', 'negative-reinforcement', 'function-based-treatment'],
  },
  {
    id: 'func-002',
    title: 'Calling Out During Group',
    topic: 'function',
    difficulty: 2,
    vignette:
      'During circle time, a learner shouts random jokes. Peers laugh and the teacher delivers repeated verbal corrections and eye contact each time.',
    learningObjectives: [
      'Analyze socially mediated reinforcement patterns',
      'Select data-informed function hypotheses',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'Most likely function of shouting in this context?',
        options: [
          'Escape',
          'Automatic',
          'Attention',
          'Access to activity materials',
        ],
        correctIndex: 2,
        rationale:
          'The behavior reliably contacts peer and adult attention contingent on shouting.',
        errorTags: ['function-identification'],
      },
      {
        id: 'q2',
        type: 'short-answer',
        prompt:
          'Describe one antecedent strategy and one consequence strategy consistent with an attention function.',
        rubric: {
          requiredConcepts: [
            'antecedent strategy (e.g., NCR attention, active engagement)',
            'consequence strategy (e.g., DRA for appropriate bids)',
            'minimize attention following problem behavior',
          ],
          forbiddenConcepts: ['punishment-only plan'],
          commonMistakes: ['strategy not tied to attention function'],
        },
        sampleAnswer:
          'An antecedent strategy is scheduled noncontingent attention before circle starts. A consequence strategy is to reinforce raised-hand comments while providing minimal attention to shouting.',
      },
    ],
    explanation:
      'High-quality social responses occur after shouting, supporting an attention hypothesis. Effective intervention should shift reinforcement to appropriate participation.',
    tags: ['attention', 'differential-reinforcement', 'classroom'],
  },
  {
    id: 'rein-001',
    title: 'Token Board for On-Task Behavior',
    topic: 'reinforcement',
    difficulty: 1,
    vignette:
      'A learner earns one token every two minutes of on-task behavior. Five tokens can be exchanged for three minutes of drawing. On-task behavior increases over the week.',
    learningObjectives: [
      'Identify reinforcement contingencies',
      'Recognize conditioned reinforcer systems',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'What best describes the function of the token in this setup?',
        options: [
          'Unconditioned reinforcer',
          'Conditioned reinforcer linked to backup reinforcers',
          'Motivating operation',
          'Punisher',
        ],
        correctIndex: 1,
        rationale:
          'Tokens acquire value through exchange with drawing time (backup reinforcer).',
        errorTags: ['reinforcement-concepts'],
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        prompt: 'The observed increase in on-task behavior suggests:',
        options: [
          'Positive reinforcement may be strengthening on-task responding',
          'Extinction is occurring',
          'Response cost is reducing behavior',
          'No functional relation can ever be inferred',
        ],
        correctIndex: 0,
        rationale:
          'Contingent token delivery followed by behavior increase is consistent with reinforcement effects.',
        errorTags: ['contingency-analysis'],
      },
    ],
    explanation:
      'Tokens serve as conditioned reinforcers, and contingent delivery appears to strengthen on-task behavior through positive reinforcement.',
    tags: ['token-economy', 'conditioned-reinforcement', 'on-task'],
  },
  {
    id: 'rein-002',
    title: 'DRA for Functional Communication',
    topic: 'reinforcement',
    difficulty: 3,
    vignette:
      'A client previously yelled to get snacks. The team teaches a picture-card request. Snack delivery now follows picture requests immediately, while yelling no longer produces snacks.',
    learningObjectives: [
      'Analyze differential reinforcement procedures',
      'Relate extinction plus reinforcement of alternatives',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'Which procedure is primarily being used?',
        options: ['DRO', 'DRA', 'DRL', 'NCR'],
        correctIndex: 1,
        rationale:
          'An alternative response (picture request) is reinforced while problem behavior is not.',
        errorTags: ['dr-procedures'],
      },
      {
        id: 'q2',
        type: 'short-answer',
        prompt:
          'Why is immediacy of reinforcement important when teaching the picture-card request?',
        rubric: {
          requiredConcepts: [
            'strengthens response-reinforcer relation',
            'supports rapid acquisition',
            'competes with problem behavior history',
          ],
          commonMistakes: [
            'focuses only on motivation and ignores contingency timing',
          ],
        },
        sampleAnswer:
          'Immediate snack delivery makes the contingency clear and strengthens the new communication response quickly, helping it replace yelling.',
      },
    ],
    explanation:
      'This plan uses DRA: reinforce functional communication and withhold reinforcement for yelling, shifting response allocation toward the replacement behavior.',
    tags: ['dra', 'fct', 'replacement-behavior'],
  },
  {
    id: 'meas-001',
    title: 'Tracking Out-of-Seat Behavior',
    topic: 'measurement',
    difficulty: 1,
    vignette:
      'A para records each time a student leaves their seat during a 30-minute lesson. Data are reported as 12, 9, 7, and 5 incidents across four days.',
    learningObjectives: [
      'Select appropriate basic measurement dimensions',
      'Interpret count and rate trends',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'Which measurement system is being used directly?',
        options: [
          'Duration',
          'Frequency count',
          'Latency',
          'Permanent product',
        ],
        correctIndex: 1,
        rationale:
          'The observer is counting occurrences of out-of-seat events.',
        errorTags: ['measurement-system'],
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        prompt:
          'If lesson length stays constant, what additional metric could improve comparability across staff?',
        options: [
          'Rate per minute',
          'Topography checklist only',
          'IOA eliminated',
          'Scatterplot without counts',
        ],
        correctIndex: 0,
        rationale:
          'Rate standardizes frequency by observation time and supports cleaner comparisons.',
        errorTags: ['rate-vs-frequency'],
      },
    ],
    explanation:
      'The current data use frequency, and because session duration is known, converting to rate can support clearer interpretation across observers or days.',
    tags: ['frequency', 'rate', 'classroom-data'],
  },
  {
    id: 'meas-002',
    title: 'Partial-Interval Recording Debate',
    topic: 'measurement',
    difficulty: 3,
    vignette:
      'A team uses 15-second partial-interval recording for stereotypy and reports 80% intervals with behavior. Another analyst argues this overestimates occurrence compared with duration recording.',
    learningObjectives: [
      'Understand trade-offs among discontinuous measures',
      'Choose measures aligned with decision needs',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'What is a known limitation of partial-interval recording?',
        options: [
          'It always underestimates high-rate behavior',
          'It can overestimate total occurrence because any occurrence scores the interval',
          'It cannot be used in natural settings',
          'It directly measures response magnitude',
        ],
        correctIndex: 1,
        rationale:
          'Any brief instance marks the full interval as an occurrence, which can inflate estimates.',
        errorTags: ['discontinuous-measurement'],
      },
      {
        id: 'q2',
        type: 'short-answer',
        prompt:
          'When might duration recording be preferable to partial-interval recording for stereotypy?',
        rubric: {
          requiredConcepts: [
            'need precise estimate of total time engaged',
            'sufficient resources for continuous timing',
            'decision-making requires sensitivity to change in duration',
          ],
          commonMistakes: [
            'describes interval systems without comparison rationale',
          ],
        },
        sampleAnswer:
          'Duration is preferable when the team needs accurate total engagement time and can continuously observe, because it is more sensitive than partial-interval estimates.',
      },
    ],
    explanation:
      'Partial-interval can bias estimates upward for some behavior patterns; duration is preferable when precise time-allocation data are needed for treatment decisions.',
    tags: ['partial-interval', 'duration', 'measurement-bias'],
  },
  {
    id: 'exp-001',
    title: 'ABAB for Hand Raising',
    topic: 'experimental-design',
    difficulty: 2,
    vignette:
      'A BCBA collects baseline hand-raising data, introduces a differential reinforcement intervention, withdraws it, then reintroduces it. Hand raising increases only when intervention is present.',
    learningObjectives: [
      'Identify reversal design logic',
      'Interpret prediction, verification, and replication',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'Which single-case design is described?',
        options: [
          'Multiple baseline',
          'Changing criterion',
          'Reversal (ABAB)',
          'Alternating treatments',
        ],
        correctIndex: 2,
        rationale:
          'The sequence baseline-intervention-withdrawal-reintroduction is an ABAB reversal.',
        errorTags: ['design-identification'],
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        prompt: 'What feature strengthens internal validity in this design?',
        options: [
          'Using only one phase change',
          'Replication of effect across intervention phases',
          'Collecting social validity only',
          'Random assignment to classrooms',
        ],
        correctIndex: 1,
        rationale:
          'Demonstrating repeated covariation with phase changes supports a functional relation.',
        errorTags: ['internal-validity'],
      },
    ],
    explanation:
      'ABAB reversal demonstrates experimental control by showing behavior changes systematically with intervention withdrawal and reintroduction.',
    tags: ['abab', 'single-case', 'functional-relation'],
  },
  {
    id: 'exp-002',
    title: 'Multiple Baseline Across Skills',
    topic: 'experimental-design',
    difficulty: 3,
    vignette:
      'A clinician teaches three social skills. Intervention is introduced to Skill A first, then B, then C, while untreated skills remain at baseline levels until intervention begins for each.',
    learningObjectives: [
      'Differentiate multiple baseline from reversal',
      'Evaluate staggered intervention logic',
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        prompt: 'What design is this?',
        options: [
          'Multiple baseline across behaviors/skills',
          'Withdrawal design',
          'Alternating treatments',
          'Parametric analysis',
        ],
        correctIndex: 0,
        rationale:
          'Intervention is staggered across independent tiers with replicated effect at each introduction.',
        errorTags: ['design-identification'],
      },
      {
        id: 'q2',
        type: 'short-answer',
        prompt:
          'Give one reason to choose multiple baseline instead of reversal in applied settings.',
        rubric: {
          requiredConcepts: [
            'ethical/practical concern withdrawing effective treatment',
            'irreversibility of skill acquisition',
            'experimental control via staggered starts',
          ],
          commonMistakes: ['states preference without design rationale'],
        },
        sampleAnswer:
          'Multiple baseline is useful when withdrawing treatment would be unethical or impossible after skills are learned, while still allowing replicated demonstrations of control.',
      },
    ],
    explanation:
      'A multiple baseline design can establish a functional relation without withdrawing effective treatment, especially when behaviors are likely irreversible.',
    tags: ['multiple-baseline', 'ethics', 'staggered-introduction'],
  },
];
