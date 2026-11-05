export type TrackId = "english" | "hindi";

export type Category =
  | "craft"
  | "lecture"
  | "fiction"
  | "writing"
  | "language"
  | "reflect";

export interface Task {
  id: string;
  category: Category;
  hours: number;
  title: string;
  detail?: string;
}

export interface Week {
  /** 1–4 within the month */
  n: number;
  focus: string;
  tasks: Task[];
}

export interface Resource {
  title: string;
  author?: string;
  /** Which part to read / watch */
  what: string;
  /** Why it is here — what to learn from it */
  why: string;
  url?: string;
  /** Matches an id in the track's books, if this resource is a tracked book */
  bookId?: string;
}

/** A labelled group of resources on a month page (craft books, lectures, fiction…). */
export interface Shelf {
  label: string;
  items: Resource[];
}

export interface Concept {
  term: string;
  explain: string;
}

export interface Deliverable {
  id: string;
  text: string;
}

export interface Month {
  n: number;
  quarter: 1 | 2 | 3 | 4;
  title: string;
  /** Optional title in the track's language, shown under the main title */
  altTitle?: string;
  question: string;
  summary: string;
  concepts: Concept[];
  shelves: Shelf[];
  readingQuestions: string[];
  weeks: Week[];
  deliverables: Deliverable[];
  selfCheck: string[];
  pitfalls: string[];
  /** Running word-count target for the novella, if relevant this month */
  wordTarget?: string;
}

export interface Quarter {
  n: 1 | 2 | 3 | 4;
  title: string;
  months: string;
  goal: string;
}

export type BookKind = "craft" | "fiction" | "language";
export type BookPriority = "buy-first" | "buy-later" | "optional" | "free-online";

export interface Book {
  id: string;
  title: string;
  author: string;
  kind: BookKind;
  months: number[];
  priority: BookPriority;
  length: string;
  note: string;
  url?: string;
}

export interface BudgetLine {
  category: Category;
  hours: number;
  label: string;
  note: string;
}

export interface Track {
  id: TrackId;
  /** "English" / "Hindi" */
  name: string;
  /** Name in its own script, e.g. "हिंदी" */
  nativeName: string;
  tagline: string;
  /** Shown on the dashboard before anything is ticked */
  intro: string;
  budget: BudgetLine[];
  rhythm: { day: string; hours: string; what: string }[];
  quarters: Quarter[];
  months: Month[];
  books: Book[];
  bookGroups: { kind: BookKind; title: string; blurb: string }[];
  guide: {
    headline: string;
    intro: string;
    outcomes: [string, string][];
    rules: { title: string; body: string }[];
    cards: { eyebrow: string; body: string; sub?: string }[];
  };
}
