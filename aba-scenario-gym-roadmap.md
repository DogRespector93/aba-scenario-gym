# ABA Scenario Gym - Project Roadmap

## Project Goal
Build a small, usable web app that helps behavior analysis students practice applying core concepts to short scenarios.

The app should do one thing well:

**show a scenario -> collect an answer -> grade it -> explain it -> track mistakes -> repeat**

This is a learning project first and an app second. The point is not to maximize output by delegating everything to AI. The point is to rebuild fluency in TypeScript, React, Next.js, and basic application structure while still producing something people could actually use.

---

## Constraints and Design Rules

### Core constraints
- Build the MVP without a database first.
- Build the MVP without AI grading first.
- Use hardcoded scenario data first.
- Keep architecture boring.
- Prefer pure functions over clever abstractions.
- Do not let AI generate major subsystems wholesale.

### Allowed AI use
Use AI for:
- syntax reminders
- debugging help
- type design suggestions
- small refactors
- explaining errors
- comparing implementation options

Do not use AI for:
- generating whole pages end-to-end
- generating the full app architecture for you
- creating entire file trees with implementation filled in
- writing major grading logic without you understanding it
- building the whole UI in one shot

### Product rules
This is a **practice tool**, not an assignment-completion tool.
- Require an answer before showing feedback.
- Do not output paste-ready homework text.
- Focus on feedback, not answer laundering.
- Keep scenarios fictional and educational.

---

## MVP Scope

### The app should support
1. selecting or loading a scenario
2. showing the vignette and questions
3. collecting user answers
4. grading those answers
5. showing per-question feedback
6. moving to another scenario
7. storing attempt history locally or in simple app state later

### The MVP should not include
- auth
- payments
- team features
- chat tutor
- database-backed authoring tools
- scenario generation by AI
- polished analytics dashboard
- mobile app version
- adaptive scheduling logic beyond a simple recommendation

---

## Tech Stack
- **Next.js** with App Router
- **TypeScript**
- **React**
- **pnpm**
- optional **Tailwind** if already selected during scaffold

### Initial file structure

```text
src/
  app/
    page.tsx
    practice/
      page.tsx
    history/
      page.tsx
    api/
      grade/
        route.ts
  components/
    QuestionRenderer.tsx
    MultipleChoiceQuestion.tsx
    ShortAnswerQuestion.tsx
    FeedbackPanel.tsx
    ScoreSummary.tsx
  data/
    scenarios.ts
  lib/
    grading/
      gradeMultipleChoice.ts
      gradeShortAnswer.ts
      gradeScenario.ts
    progress/
      analyzeAttempts.ts
  types/
    scenario.ts
    grading.ts
    attempt.ts
```

This is enough. Do not add extra architecture until the current layer hurts.

---

## Development Phases

## Phase 0 - Workspace and Project Setup

### Goal
Get a clean project running locally and understand the basic file layout.

### Tasks
- scaffold the app with `pnpm create next-app@latest .`
- confirm the dev server runs
- remove default junk you do not need
- create the initial folder structure manually
- make sure imports work with `@/*`
- optionally add Prettier if you want stable formatting

### Definition of done
- app runs locally
- folder structure exists
- you can edit `src/app/page.tsx` and see changes
- there are no setup errors you do not understand

---

## Phase 1 - Type System and Scenario Data

### Goal
Define the shape of the data before building the UI.

### Why this phase matters
This is where the project gets its spine. If the types are clear, the rest of the app gets easier.

### Files
- `src/types/scenario.ts`
- `src/types/grading.ts`
- `src/types/attempt.ts`
- `src/data/scenarios.ts`

### Tasks
- create a `Topic` type
- create a `Difficulty` type
- create a `Scenario` interface
- create question types for:
  - multiple choice
  - short answer
- create user answer types
- create grading result types
- seed 3-5 scenarios in local data

### Initial topics to support
Pick only 2 or 3 to start:
- Sd vs MO
- function of behavior
- reinforcement / punishment
- measurement selection

### Definition of done
- TypeScript types compile cleanly
- local scenario array is valid against your types
- each scenario contains enough information to render and grade

---

## Phase 2 - Build the Practice Page Skeleton

### Goal
Render one scenario on screen and collect answers.

### Files
- `src/app/practice/page.tsx`
- `src/components/QuestionRenderer.tsx`
- `src/components/MultipleChoiceQuestion.tsx`
- `src/components/ShortAnswerQuestion.tsx`

### Tasks
- load one scenario from `scenarios.ts`
- display:
  - title
  - topic
  - difficulty
  - vignette
  - question list
- create answer state using React state
- support selecting a multiple choice answer
- support typing a short answer response
- disable feedback until submit

### Important implementation rule
Do not worry about elegance yet. Make it work with explicit props and local state.

### Definition of done
- one scenario renders correctly
- answers can be entered
- answers persist on screen before submission
- no grading yet required for this phase

---

## Phase 3 - Deterministic Grading Engine

### Goal
Grade multiple choice answers and basic short answers with pure functions.

### Files
- `src/lib/grading/gradeMultipleChoice.ts`
- `src/lib/grading/gradeShortAnswer.ts`
- `src/lib/grading/gradeScenario.ts`

### Tasks
- create a pure function to grade multiple choice answers
- create a simple short answer grader based on required concepts
- create a top-level grader that:
  - loops through questions
  - finds matching answers
  - dispatches to the correct grading function
  - sums points
  - returns a single `GradeResult`

### Grading rules
#### Multiple choice
- exact match
- 1 point per correct answer
- return rationale when wrong

#### Short answer
Start simple.
- lowercase the response
- check for required concepts
- award partial credit if some concepts are present
- return missing concepts in feedback

### Important design rule
Keep grading logic out of React components.

### Definition of done
- you can pass a scenario and answers into `gradeScenario`
- the function returns a typed result
- you can log or inspect the result in the browser or terminal

---

## Phase 4 - Submission and Feedback UI

### Goal
Connect the practice page to the grading engine and show feedback.

### Files
- `src/app/practice/page.tsx`
- `src/components/FeedbackPanel.tsx`
- `src/components/ScoreSummary.tsx`

### Tasks
- add a submit button
- call `gradeScenario` on submit
- store the result in state
- show:
  - total score
  - percent
  - per-question feedback
  - correct / incorrect status
- add a next scenario button
- reset state for the next round

### UI order
The page should read like this:
1. scenario metadata
2. vignette
3. question list
4. submit
5. score summary
6. per-question feedback
7. next scenario

### Definition of done
- the practice loop works end to end
- render -> answer -> submit -> feedback -> next
- the app is usable for one full practice session

---

## Phase 5 - History and Attempt Tracking

### Goal
Store prior attempts so the app can do more than one isolated run.

### Files
- `src/types/attempt.ts`
- `src/app/history/page.tsx`
- local storage helper or temporary in-memory storage

### Tasks
- create an `Attempt` type
- store completed attempts after each submission
- start with local storage if you want persistence without a database
- build a basic history page that shows:
  - scenario title
  - date/time
  - score
  - topic

### Implementation note
You can keep this very simple at first.
- no database required
- no auth required
- local storage is good enough for MVP learning

### Definition of done
- attempts are stored and retrievable
- history page shows prior work

---

## Phase 6 - Progress Analysis

### Goal
Turn raw attempts into useful feedback patterns.

### Files
- `src/lib/progress/analyzeAttempts.ts`
- `src/app/history/page.tsx` or separate progress section later

### Tasks
- aggregate attempt data
- compute:
  - total attempts
  - average percent
  - most-missed topics
  - most common error tags
- show a simple summary

### What progress tracking should mean
Not a fake dashboard.
Track only what changes behavior:
- where the learner is weak
- what they confuse repeatedly
- what they should practice next

### Definition of done
- the app can identify repeated mistakes
- the user can see what they tend to miss

---

## Phase 7 - Add a Thin Backend Layer

### Goal
Practice basic API route structure without changing app behavior.

### Files
- `src/app/api/grade/route.ts`

### Tasks
- move grading behind an API route if you want backend practice
- send `{ scenarioId, answers }` to the route
- look up scenario data on the server
- return `GradeResult` as JSON

### Why this phase exists
Not because you need it for MVP. You do not. This phase is for practicing request/response flow.

### Definition of done
- grading can happen through the API route
- frontend still works exactly the same

---

## Phase 8 - Better Content and More Scenarios

### Goal
Make the app actually useful by improving the scenario bank.

### Tasks
- write 20-30 good scenarios by hand or semi-manually
- tag them carefully
- vary difficulty deliberately
- vary context deliberately:
  - clinic
  - school
  - home
  - adult services
  - classroom
- add common confusions to the error tags

### Content quality rules
A scenario should:
- isolate the concept enough to be learnable
- still feel realistic enough to matter
- have one defensible best answer for MC
- have a clear rationale

### Definition of done
- the app is no longer just a demo
- someone could use it for repeated practice

---

## Phase 9 - Optional AI Features Later

### Goal
Use AI only after the structured app works without it.

### Good AI additions
- short-answer concept extraction
- hint generation after failed attempts
- generating alternate explanations
- proposing similar practice scenarios for instructor review

### Bad AI additions too early
- full scenario generation with no review
- freeform grading without a rubric
- chat-based tutoring replacing structured practice
- answer writing for assignments

### Rule for AI integration
AI should improve feedback quality, not replace the app's core logic.

---

## Recommended Build Order

If you want the shortest path to something real, do it in this order:

1. project setup
2. types
3. hardcoded scenarios
4. practice page UI
5. multiple choice grading
6. full scenario grading
7. feedback UI
8. next scenario flow
9. attempt storage
10. history page
11. progress analysis
12. optional API route
13. optional AI features

---

## First Milestone

### Milestone target
A working practice loop with hardcoded scenarios and multiple choice grading.

### Files needed for milestone 1
- `src/types/scenario.ts`
- `src/types/grading.ts`
- `src/data/scenarios.ts`
- `src/lib/grading/gradeMultipleChoice.ts`
- `src/lib/grading/gradeScenario.ts`
- `src/app/practice/page.tsx`
- `src/components/QuestionRenderer.tsx`
- `src/components/FeedbackPanel.tsx`

### What milestone 1 should do
- render a scenario
- let the user answer MC questions
- submit answers
- grade them
- show a score and feedback
- move to another scenario

If this milestone works, the project has a real spine.

---

## Suggested Weekly Progression

## Week 1
- scaffold project
- create folder structure
- define types
- create 3 scenarios

## Week 2
- render scenario page
- build question components
- implement answer state

## Week 3
- implement grading functions
- connect submit flow
- show score and feedback

## Week 4
- add history storage
- add history page
- compute basic progress summary

## Week 5+
- add more scenarios
- improve short-answer grading
- add backend route if desired
- consider careful AI integration

---

## Definitions of Success

### Success for the codebase
- you understand the major files
- you can explain the data flow
- you can modify behavior without asking AI to rewrite the subsystem
- you can add a new scenario without confusion

### Success for the product
- another student could use it for practice
- it gives useful corrective feedback
- it helps identify repeated mistakes
- it does not function as an assignment laundering tool

### Success for you personally
- you regain comfort with TypeScript types
- you regain comfort with React state and props
- you regain comfort with file structure and routing
- you can build features incrementally without panic

---

## Guardrails Against Overbuilding

If you catch yourself trying to add these too early, stop:
- database
- auth
- admin panel
- theming system
- global state library
- drag-and-drop content editing
- markdown rendering for scenarios
- export features
- polished dashboard UI
- AI tutor chat

The correct question is always:

**Does this make the practice loop better right now?**

If not, it can wait.

---

## Final Project Summary

This project should begin as a **typed scenario engine**.

That means:
- structured scenario data
- typed question rendering
- deterministic grading
- explainable feedback
- stored attempts
- simple progress analysis

If you build those bones first, everything else becomes optional improvement instead of compensatory complexity.
