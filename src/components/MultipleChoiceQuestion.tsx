import type { MultipleChoiceQuestion as MultipleChoiceQuestionType } from '@/types/scenario';

type MultipleChoiceQuestionProps = {
  question: MultipleChoiceQuestionType;
  selectedIndex?: number;
  onChange: (selectedIndex: number) => void;
  disabled?: boolean;
};

export default function MultipleChoiceQuestion({
  question,
  selectedIndex,
  onChange,
  disabled = false,
}: MultipleChoiceQuestionProps) {
  return (
    <fieldset className="space-y-3" disabled={disabled}>
      <legend className="text-base font-semibold text-zinc-900">
        {question.prompt}
      </legend>

      <div className="space-y-2">
        {question.options.map((option, index) => {
          const optionId = `${question.id}-option-${index}`;
          const isSelected = selectedIndex === index;

          return (
            <label
              key={optionId}
              htmlFor={optionId}
              className={[
                'flex cursor-pointer items-start gap-3 rounded-md border p-3 transition',
                'focus-within:ring-2 focus-within:ring-zinc-500',
                isSelected
                  ? 'border-zinc-800 bg-zinc-100'
                  : 'border-zinc-300 bg-white hover:border-zinc-400',
                disabled ? 'cursor-not-allowed opacity-70' : '',
              ].join(' ')}
            >
              <input
                id={optionId}
                type="radio"
                name={question.id}
                checked={isSelected}
                onChange={
                  // TODO: Connect option selection to parent state updates.
                  () => {
                    if (typeof selectedIndex === 'number') {
                      console.log('selectedIndex :>> ', selectedIndex);
                      onChange(index);
                    }
                  }
                }
                disabled={disabled}
                className="mt-1 h-4 w-4 border-zinc-400 text-zinc-900 focus:ring-zinc-500"
              />
              <span className="text-sm text-zinc-800">{option}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
