import { GradeResult } from './grading';

export type UserAnswer =
  | {
      questionId: string;
      type: 'multiple-choice';
      selectedIndex: number;
    }
  | {
      questionId: string;
      type: 'short-answer';
      response: string;
    };

export interface Attempt {
  id: string;
  scenarioId: string;
  createdAt: string;
  answers: UserAnswer[];
  results: GradeResult;
}
