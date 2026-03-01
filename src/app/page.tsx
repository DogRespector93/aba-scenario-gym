import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-10">
      <div className="space-y-6">
        <section className="rounded-xl border border-zinc-300 bg-white p-6 shadow-sm">
          <nav className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Navigation
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
              >
                Home
              </Link>
              <Link
                href="/practice"
                className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Practice
              </Link>
            </div>
          </nav>

          <div className="pt-5">
            <h1 className="text-2xl font-bold text-zinc-900">
              ABA Scenario Learning App
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-700">
              This app is focused on one learning loop: read a scenario, answer
              questions, review feedback, and keep practicing. Use the Practice
              page to start your first scenario.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-zinc-300 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
            Quick Start
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-700">
            <li>Open the Practice page.</li>
            <li>Read the vignette and answer each question.</li>
            <li>Submit and review feedback when you wire grading.</li>
          </ol>
          <Link
            href="/practice"
            className="mt-5 inline-flex rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Go To Practice
          </Link>
        </section>
      </div>
    </main>
  );
}
