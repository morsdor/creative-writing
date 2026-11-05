// Sanity checks for both tracks' curriculum data. Run: npm run check
import { TRACKS, weekHours } from "../src/data/tracks.ts";

let errors = 0;
const fail = (msg: string) => {
  errors++;
  console.error("✗", msg);
};
const DEVANAGARI = /[ऀ-ॿ]/;

for (const track of TRACKS) {
  const T = `[${track.id}]`;
  const ids = new Set<string>();
  const bookIds = new Set(track.books.map((b) => b.id));
  if (bookIds.size !== track.books.length) fail(`${T} duplicate book ids`);

  if (track.months.length !== 12) fail(`${T} expected 12 months, got ${track.months.length}`);
  const budget = track.budget.reduce((s, b) => s + b.hours, 0);
  if (Math.abs(budget - 10) > 1e-9) fail(`${T} weekly budget sums to ${budget} h`);
  const budgetCats = new Set(track.budget.map((b) => b.category));

  for (const m of track.months) {
    if (m.weeks.length !== 4) fail(`${T} Month ${m.n}: expected 4 weeks, got ${m.weeks.length}`);
    for (const w of m.weeks) {
      const h = weekHours(w);
      if (Math.abs(h - 10) > 1e-9) fail(`${T} Month ${m.n} week ${w.n}: ${h} h (expected 10)`);
      for (const t of w.tasks) {
        if (ids.has(t.id)) fail(`${T} duplicate task id ${t.id}`);
        ids.add(t.id);
        if (!budgetCats.has(t.category)) fail(`${T} ${t.id}: category "${t.category}" is not in this track's budget`);
      }
    }
    for (const d of m.deliverables) {
      if (ids.has(d.id)) fail(`${T} duplicate deliverable id ${d.id}`);
      ids.add(d.id);
    }
    for (const s of m.shelves)
      for (const r of s.items) if (r.bookId && !bookIds.has(r.bookId)) fail(`${T} Month ${m.n}: unknown bookId ${r.bookId}`);
  }

  // Each track stays in its own language.
  const blob = JSON.stringify({ months: track.months, books: track.books });
  if (track.id === "english" && DEVANAGARI.test(blob)) fail(`${T} contains Devanagari text`);
  if (track.id === "hindi") {
    for (const banned of ["Sanderson", "Writing Excuses", "Saunders' ", "Le Guin", "Burroway", "Browne & King", "Scofield"])
      if (blob.includes(banned)) fail(`${T} mentions English-track resource "${banned}"`);
    for (const b of track.books) if (b.id !== "hi-free-choice") {
      if (!DEVANAGARI.test(b.title)) fail(`${T} book "${b.title}" has no Devanagari title`);
    }
  }

  const tasks = track.months.flatMap((m) => m.weeks.flatMap((w) => w.tasks));
  const byCat: Record<string, number> = {};
  for (const t of tasks) byCat[t.category] = (byCat[t.category] ?? 0) + t.hours;
  console.log(`${T} ${track.months.length} months · ${tasks.length} tasks · ${tasks.reduce((s, t) => s + t.hours, 0)} h ·`, byCat);
}

if (errors) {
  console.error(`\n${errors} problem(s)`);
  process.exit(1);
}
console.log("✓ every week is exactly 10 hours; ids unique; book refs valid; each track in its own language");
