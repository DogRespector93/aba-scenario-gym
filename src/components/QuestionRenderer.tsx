import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion";
import ShortAnswerQuestion from "@/components/ShortAnswerQuestion";
import type { UserAnswer } from "@/types/attempt";
import type { Question } from "@/types/scenario";

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
  disabled = false,
  showFeedback = false,
}: QuestionRendererProps) {
  // TODO: Use this signal later to decide when feedback should appear.
  void showFeedback;
  void onAnswerChange;

  switch (question.type) {
    case "multiple-choice": {
      // TODO: Keep this branch focused on extracting and forwarding MC state.
      const selectedIndex =
        answer?.type === "multiple-choice" ? answer.selectedIndex : undefined;

      return (
        <MultipleChoiceQuestion
          question={question}
          selectedIndex={selectedIndex}
          disabled={disabled}
          onChange={
            // TODO: Forward MC changes upstream as the app-level answer payload.
            () => {}
          }
        />
      );
    }
    case "short-answer": {
      // TODO: Keep this branch focused on extracting and forwarding text response state.
      const response = answer?.type === "short-answer" ? answer.response : "";

      return (
        <ShortAnswerQuestion
          question={question}
          response={response}
          disabled={disabled}
          onChange={
            // TODO: Forward short-answer changes upstream as the app-level answer payload.
            () => {}
          }
        />
      );
    }
    default:
      return null;
  }
}
