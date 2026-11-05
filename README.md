# Fiction Year

A 12-month, 10-hours-a-week fiction-writing curriculum (English track, with a small Hindi "hedge") and a progress tracker.

- **Dashboard** — this week's tasks, overall progress, pace against your start date, hours by category.
- **Months 1–12** — concepts to understand, books, lectures and stories, 4 weekly plans of exactly 10 hours each, deliverables, a self-check, pitfalls and notes.
- **Reading** — every book with its priority (buy first / later / optional / free online) and your status.
- **Log** — actual hours and words written per week, with a words-per-week chart.
- **Settings** — start date, export/import backup, reset.

Progress is stored in the browser's `localStorage` (key `fiction-year:v1`). No backend and no accounts. Use **Settings → Export** to back up or move to another device.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing the curriculum

All content lives in two files:

- `src/data/curriculum.ts` — the 12 months, weekly tasks, budget and quarters
- `src/data/books.ts` — the reading list

After editing, run:

```bash
npm run check
```

It verifies that every week adds up to exactly 10 hours, that ids are unique, and that every book reference exists.

> Task ids are generated from position (`m{month}w{week}t{index}`). Reordering tasks inside a week after you've started ticking will shift which boxes show as done. Add new tasks at the end of a week instead.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com: **Add New → Project**, import the repo, and keep the defaults (Next.js is detected automatically).
3. Deploy. Every page is statically pre-rendered; no environment variables are needed.

Or from the terminal: `npx vercel` and follow the prompts.

### Syncing across devices (later)

Right now each browser keeps its own progress. If you want the same progress on phone and laptop without export/import, the simplest upgrade is a small database on Vercel (e.g. a Postgres or Redis integration from the Vercel Marketplace) plus a single API route that stores the same JSON blob `src/lib/store.ts` already produces.
