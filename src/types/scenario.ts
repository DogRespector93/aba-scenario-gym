export type Topic =
  | 'sd-vs-mo'
  | 'function'
  | 'reinforcement'
  | 'measurement'
  | 'experimental-design';

export type Difficulty = 1 | 2 | 3;

export type Question = MultipleChoiceQuestion | ShortAnswerQuestion;

export interface Scenario {
  id: string;
  title: string;
  topic: Topic;
  difficulty: Difficulty;
  vignette: string;
  learningObjectives: string[];
  questions: Question[];
  explanation: string;
  tags: string[];
}

export interface ShortAnswerQuestion {
  id: string;
  type: 'short-answer';
  prompt: string;
  rubric: {
    requiredConcepts: string[];
    forbiddenConcepts?: string[];
    commonMistakes?: string[];
  };
  sampleAnswer: string;
}
export interface MultipleChoiceQuestion {
  id: string;
  type: 'multiple-choice';
  prompt: string;
  options: string[];
  correctIndex: number;
  rationale: string;
  errorTags?: string[];
}
