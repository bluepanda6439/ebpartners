# EB Partners

## Working style

- Treat this repo as a single Next.js marketing site for EB Partners.
- Keep changes small and focused unless the user asks for a broader refactor.
- Prefer the existing app structure, components, and naming patterns.
- Do not introduce new production dependencies unless there is a clear payoff.

## Useful commands

- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Lint: `npm run lint`
- Production build: `npm run build`

## Verification

- After frontend changes, run `npm run lint`.
- When a change touches rendering, layout, or routing, also run `npm run build`.
- If the user asks for visual work, check the page in the Codex in-app browser on `localhost`.

## Codex workflow

- Use `Local` for normal day-to-day edits.
- Use `Worktree` for bigger experiments or parallel tasks so the main checkout stays clean.
- Use `/plan` when the request is vague, multi-step, or likely to need design decisions first.
- Use `/review` before handing off changes that touch shared UI or project-wide behavior.
- When a task is done, summarize what changed and mention any verification that was run.

## Project notes

- The app is built with Next.js, React, TypeScript, and Tailwind.
- Read the current Next.js guidance in `node_modules/next/dist/docs/` before making framework-level changes.
