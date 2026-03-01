import type { ShortAnswerQuestion as ShortAnswerQuestionType } from "@/types/scenario";

type ShortAnswerQuestionProps = {
  question: ShortAnswerQuestionType;
  response?: string;
  onChange: (response: string) => void;
  disabled?: boolean;
};

export default function ShortAnswerQuestion({
  question,
  response = "",
  onChange,
  disabled = false,
}: ShortAnswerQuestionProps) {
  // TODO: Remove this once textarea updates are connected.
  void onChange;

  return (
    <div className="space-y-3">
      <label
        htmlFor={question.id}
        className="block text-base font-semibold text-zinc-900"
      >
        {question.prompt}
      </label>

      <textarea
        id={question.id}
        value={response}
        onChange={
          // TODO: Connect typing changes to parent state updates.
          () => {}
        }
        disabled={disabled}
        rows={5}
        className="w-full rounded-md border border-zinc-300 bg-white p-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/30 disabled:cursor-not-allowed disabled:bg-zinc-100"
        placeholder="Type your response here..."
      />

      <p className="text-xs text-zinc-600">{response.length} characters</p>
    </div>
  );
}
