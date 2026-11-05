# Fiction Year

**Live:** https://creative-writing-sigma.vercel.app/

A 12-month, 10-hours-a-week fiction-writing curriculum with a progress tracker, in two separate tracks:

- **English** (`/english`) — craft taught entirely in English: Saunders, Le Guin, Truby, Browne & King, Sanderson's lectures, a novel or stories each month, and a 1-hour "story of the week".
- **हिंदी** (`/hindi`) — every story read and every word written in Hindi: Premchand to Uday Prakash, Hindi criticism and writers' diaries, film adaptations of Hindi stories, Hindwi interviews, and a weekly language hour (typing, spelling, word diary, copywork, usage). Everything on the Hindi track, instructions and interface included, is in Hindi.

Both tracks run the same shape: five short stories in Q1, POV/scene/novella design in Q2, a 20–30k-word novella drafted in Q3, revised and two stories submitted in Q4. Every week is exactly 10 hours.

Each track has:

- **Dashboard** — this week's tasks, overall progress, pace against your start date, hours by category.
- **Months 1–12** — concepts to understand, what to read and watch, reading questions, 4 weekly plans, deliverables, a self-check, pitfalls and notes.
- **Reading** — every book with its priority (buy first / later / optional / free online) and your status.
- **Log** — actual hours and words written per week, with a chart.

**Settings** holds a start date per track, a reset per track, and export/import of both tracks in one backup file.

Progress is stored in the browser's `localStorage`, one key per track (`fiction-year:english:v1`, `fiction-year:hindi:v1`). No backend and no accounts. Use **Settings → Export** to back up or move to another device.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing the curriculum

All content lives in `src/data/`:

- `english/months.ts`, `english/books.ts`, `english/index.ts` — the English track
- `hindi/q1.ts` … `hindi/q4.ts`, `hindi/books.ts`, `hindi/index.ts` — the Hindi track
- `helpers.ts` — the `week()` builder, link helpers and shared labels
- `src/lib/i18n.ts` — interface labels for each track (English / Hindi)
- `tracks.ts` — the list of tracks

After editing, run:

```bash
npm run check
```

It verifies that every week adds up to exactly 10 hours, that ids are unique, that every book reference exists, and that each track stays in its own language (no Devanagari in the English track; every Hindi-track month, task and resource in Devanagari).

> Task ids are generated from position (`m{month}w{week}t{index}`). Reordering tasks inside a week after you've started ticking will shift which boxes show as done. Add new tasks at the end of a week instead.

## Deploy

The app is deployed on Vercel from the `main` branch, so every push to `main` redeploys it. Every page is pre-rendered; no environment variables are needed.

The old single-track URLs (`/month/:n`, `/guide`, `/reading`, `/log`) redirect to the English track.

### Syncing across devices (later)

Each browser keeps its own progress. To share progress between phone and laptop without export/import, add a small database on Vercel (e.g. a Postgres or Redis integration from the Vercel Marketplace) plus one API route that stores the same JSON that `exportAll()` in `src/lib/store.ts` already produces.
