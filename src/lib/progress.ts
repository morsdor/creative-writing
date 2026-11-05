import { MONTHS } from "@/data/curriculum";
import type { Category, Month, Week } from "@/lib/types";
import type { TrackerState } from "@/lib/store";

export interface Progress {
  done: number;
  total: number;
  pct: number;
  hoursDone: number;
  hoursTotal: number;
}

function pct(done: number, total: number) {
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

export function weekProgress(state: TrackerState, w: Week): Progress {
  let done = 0;
  let hoursDone = 0;
  let hoursTotal = 0;
  for (const t of w.tasks) {
    hoursTotal += t.hours;
    if (state.done[t.id]) {
      done++;
      hoursDone += t.hours;
    }
  }
  return { done, total: w.tasks.length, pct: pct(done, w.tasks.length), hoursDone, hoursTotal };
}

export function monthProgress(state: TrackerState, m: Month): Progress & { deliverablesDone: number } {
  const acc = { done: 0, total: 0, hoursDone: 0, hoursTotal: 0 };
  for (const w of m.weeks) {
    const p = weekProgress(state, w);
    acc.done += p.done;
    acc.total += p.total;
    acc.hoursDone += p.hoursDone;
    acc.hoursTotal += p.hoursTotal;
  }
  const deliverablesDone = m.deliverables.filter((d) => state.done[d.id]).length;
  return { ...acc, pct: pct(acc.done, acc.total), deliverablesDone };
}

export function overallProgress(state: TrackerState) {
  const acc = { done: 0, total: 0, hoursDone: 0, hoursTotal: 0, deliverablesDone: 0, deliverablesTotal: 0 };
  for (const m of MONTHS) {
    const p = monthProgress(state, m);
    acc.done += p.done;
    acc.total += p.total;
    acc.hoursDone += p.hoursDone;
    acc.hoursTotal += p.hoursTotal;
    acc.deliverablesDone += p.deliverablesDone;
    acc.deliverablesTotal += m.deliverables.length;
  }
  return { ...acc, pct: pct(acc.done, acc.total) };
}

export function categoryHours(state: TrackerState) {
  const out: Record<Category, { done: number; total: number }> = {
    writing: { done: 0, total: 0 },
    fiction: { done: 0, total: 0 },
    craft: { done: 0, total: 0 },
    lecture: { done: 0, total: 0 },
    hindi: { done: 0, total: 0 },
    reflect: { done: 0, total: 0 },
  };
  for (const m of MONTHS)
    for (const w of m.weeks)
      for (const t of w.tasks) {
        out[t.category].total += t.hours;
        if (state.done[t.id]) out[t.category].done += t.hours;
      }
  return out;
}

/** The first week that still has unfinished tasks. */
export function nextUp(state: TrackerState): { month: Month; week: Week; index: number } | null {
  let index = 0;
  for (const m of MONTHS)
    for (const w of m.weeks) {
      index++;
      if (w.tasks.some((t) => !state.done[t.id])) return { month: m, week: w, index };
    }
  return null;
}

export const logKey = (m: number, w: number) => `m${m}w${w}`;

export function logTotals(state: TrackerState) {
  let words = 0;
  let hours = 0;
  let weeksLogged = 0;
  for (const l of Object.values(state.logs)) {
    if (l.words) words += l.words;
    if (l.hours) hours += l.hours;
    if (l.hours || l.words || l.note) weeksLogged++;
  }
  return { words, hours, weeksLogged };
}

/** Calendar position since the start date (1-based week), or null if no start date. */
export function calendarWeek(startDate: string | null, now?: Date): number | null {
  // Only reads the clock once a start date exists, which is client-side only
  // (the server snapshot has no start date), so prerendering stays deterministic.
  if (!startDate) return null;
  const start = new Date(startDate + "T00:00:00");
  if (Number.isNaN(start.getTime())) return null;
  const days = Math.floor(((now ?? new Date()).getTime() - start.getTime()) / 86_400_000);
  return days < 0 ? 0 : Math.floor(days / 7) + 1;
}
