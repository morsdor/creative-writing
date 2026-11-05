import type { Category, Task, Week } from "../lib/types.ts";

export type Row = [Category, number, string, string?];

/** Builds a week; task ids are positional: m{month}w{week}t{index}. */
export function week(m: number, n: number, focus: string, rows: Row[]): Week {
  const tasks: Task[] = rows.map(([category, hours, title, detail], i) => ({
    id: `m${m}w${n}t${i + 1}`,
    category,
    hours,
    title,
    detail,
  }));
  return { n, focus, tasks };
}

export const yt = (q: string) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
export const gutenberg = (q: string) => `https://www.gutenberg.org/ebooks/search/?query=${encodeURIComponent(q)}`;
export const HINDWI = "https://www.hindwi.org/";
export const WRITING_EXCUSES = "https://writingexcuses.com/";

export function weekHours(w: Week): number {
  return w.tasks.reduce((s, t) => s + t.hours, 0);
}

export const CATEGORY_LABEL: Record<Category, string> = {
  craft: "Craft",
  lecture: "Lecture",
  fiction: "Fiction",
  writing: "Writing",
  language: "Language",
  reflect: "Reflect",
};

/** Rules that hold for both tracks. */
export const SHARED_RULES = [
  { title: "Write from week one.", body: "You finish your first story in Month 1. It won't be good. That's the point: finishing is a skill, and it only grows by finishing." },
  { title: "Knowledge isn't ability.", body: "You can understand every idea in a craft book and still write a dull story. Writing gets 45% of the hours because writing is the only test." },
  { title: "Big problems first.", body: "Structure before scenes, scenes before sentences. Never polish a paragraph in a scene you might cut." },
];
