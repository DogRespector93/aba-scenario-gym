export interface GradedQuestionResult {
  questionId: string;
  isCorrect: boolean;
  pointsEarned: number;
  pointsPossible: number;
  feedback: string[];
  errorTags: string[];
}

export interface GradeResult {
  scenarioId: string;
  totalPointsEarned: number;
  totalPointsPossible: number;
  percent: number;
  questionResults: GradedQuestionResult[];
  summaryFeedback: string[];
  recommendedTopics: string[];
}