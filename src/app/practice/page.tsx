'use client';

export default function PracticePage() {
  // TODO: Bring back only the imports I actually use once I start wiring state and events.
  // TODO: Add local state for scenario, answers, submission status, and a future result object.
  // TODO: Add derived values for progress display (answered count vs total questions).
  // TODO: Implement three handlers: answer updates, submit flow, and next-scenario reset.

  // Temporary preview data so I can style the page first.
  const scenario = {
    title: 'Scenario Title Placeholder',
    topic: 'sd-vs-mo',
    difficulty: 1,
    learningObjectives: [
      'Learning objective placeholder A',
      'Learning objective placeholder B',
    ],
    vignette:
      'Scenario vignette placeholder. This box is intentionally styled now so I can focus on state wiring later.',
    questions: [{ id: 'q-1' }, { id: 'q-2' }],
  };
  const answerCount = 0;
  const questionCount = scenario.questions.length;
  const isSubmitted = false;
  const result = null;

  if (!scenario) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-4 py-10">
        <section className="w-full rounded-xl border border-zinc-300 bg-white p-8 text-center shadow-sm">
          <h1 className="text-xl font-semibold text-zinc-900">Practice</h1>
          <p className="mt-2 text-sm text-zinc-700">
            No scenarios available yet.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-8 md:py-10">
      <div className="space-y-6">
        <header className="rounded-xl border border-zinc-300 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
            ABA Scenario Gym
          </p>
          <h1 className="mt-2 text-2xl font-bold text-zinc-900">
            {scenario.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
              Topic: {scenario.topic}
            </span>
            <span className="rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
              Difficulty {scenario.difficulty}
            </span>
          </div>

          <div className="mt-5">
            <h2 className="text-sm font-semibold text-zinc-900">
              Learning objectives
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              {scenario.learningObjectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </div>
        </header>

        <section className="rounded-xl border border-zinc-300 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
            Vignette
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-800">
            {scenario.vignette}
          </p>
        </section>

        <section className="rounded-xl border border-zinc-300 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900">Questions</h2>
            <p className="text-xs text-zinc-600">
              {answerCount} of {questionCount} answered
            </p>
          </div>

          <div className="mt-4 space-y-6">
            {scenario.questions.map((question, index) => {
              // TODO: In real data flow, each question row should read and write its own answer entry.

              return (
                <article
                  key={question.id}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 p-4"
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Question {index + 1}
                  </p>

                  <div className="rounded-md border border-dashed border-zinc-300 bg-white p-4 text-sm text-zinc-600">
                    TODO: Render question input UI here and connect it to local
                    answer state.
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
          >
            Submit Answers
          </button>
          <button
            type="button"
            className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
          >
            Next Scenario
          </button>
        </section>

        {isSubmitted ? (
          <section className="rounded-xl border border-zinc-300 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-zinc-900">
              Submission status
            </h2>
            <p className="mt-2 text-sm text-zinc-700">
              Submission received. Grading hookup comes next phase.
            </p>
            {result ? null : (
              <p className="mt-1 text-xs text-zinc-500">
                Result state is reserved for upcoming grading integration.
              </p>
            )}
          </section>
        ) : null}
      </div>
    </main>
  );
}
