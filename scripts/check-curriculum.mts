// Sanity checks for the curriculum data. Run: npm run check
import { MONTHS, weekHours } from "../src/data/curriculum.ts";
import { BOOKS } from "../src/data/books.ts";

let errors = 0;
const fail = (msg: string) => {
  errors++;
  console.error("✗", msg);
};

const ids = new Set<string>();
const bookIds = new Set(BOOKS.map((b) => b.id));

if (MONTHS.length !== 12) fail(`expected 12 months, got ${MONTHS.length}`);

for (const m of MONTHS) {
  if (m.weeks.length !== 4) fail(`Month ${m.n}: expected 4 weeks, got ${m.weeks.length}`);
  for (const w of m.weeks) {
    const h = weekHours(w);
    if (Math.abs(h - 10) > 1e-9) fail(`Month ${m.n} week ${w.n}: ${h} h (expected 10)`);
    for (const t of w.tasks) {
      if (ids.has(t.id)) fail(`duplicate task id ${t.id}`);
      ids.add(t.id);
    }
  }
  for (const d of m.deliverables) {
    if (ids.has(d.id)) fail(`duplicate deliverable id ${d.id}`);
    ids.add(d.id);
  }
  for (const r of [...m.craft, ...m.fiction, ...m.hindi, ...m.lectures]) {
    if (r.bookId && !bookIds.has(r.bookId)) fail(`Month ${m.n}: unknown bookId ${r.bookId}`);
  }
}

const tasks = MONTHS.flatMap((m) => m.weeks.flatMap((w) => w.tasks));
const byCat: Record<string, number> = {};
for (const t of tasks) byCat[t.category] = (byCat[t.category] ?? 0) + t.hours;

console.log(`${MONTHS.length} months · ${tasks.length} tasks · ${tasks.reduce((s, t) => s + t.hours, 0)} planned hours`);
console.log("Hours by category:", byCat);

if (errors) {
  console.error(`\n${errors} problem(s)`);
  process.exit(1);
}
console.log("✓ every week is exactly 10 hours; ids unique; book refs valid");
