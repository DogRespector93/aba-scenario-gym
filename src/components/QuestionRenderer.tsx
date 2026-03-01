import MultipleChoiceQuestion from '@/components/MultipleChoiceQuestion';
import ShortAnswerQuestion from '@/components/ShortAnswerQuestion';
import type { UserAnswer } from '@/types/attempt';
import type { Question } from '@/types/scenario';

type QuestionRendererProps = {
  question: Question;
  answer?: UserAnswer;
  onAnswerChange: (answer: UserAnswer) => void;
  disabled?: boolean;
  showFeedback?: boolean;
};

export default function QuestionRenderer({
  question,
  answer,
  onAnswerChange,
  disabled,
  showFeedback,
}: QuestionRendererProps) {
  void showFeedback;
  switch (question.type) {
    case 'multiple-choice': {
      const selectedIndex =
        answer?.type === 'multiple-choice' ? answer.selectedIndex : undefined;

      return (
        <MultipleChoiceQuestion
          question={question}
          selectedIndex={selectedIndex}
          disabled={disabled}
          onChange={(selectedIndex) =>
            onAnswerChange({
              questionId: question.id,
              type: 'multiple-choice',
              selectedIndex: selectedIndex,
            })
          }
        />
      );
    }
    case 'short-answer': {
      const response =
        answer?.type === 'short-answer' ? answer.response : undefined;

      return (
        <ShortAnswerQuestion
          question={question}
          response={response}
          disabled={disabled}
          onChange={(response) =>
            onAnswerChange({
              questionId: question.id,
              type: 'short-answer',
              response: response,
            })
          }
        />
      );
    }
    default:
      return null;
  }
}
