export type Category =
  | "craft"
  | "lecture"
  | "fiction"
  | "writing"
  | "hindi"
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
  /** Matches an id in books.ts, if this resource is a tracked book */
  bookId?: string;
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
  question: string;
  summary: string;
  concepts: Concept[];
  craft: Resource[];
  lectures: Resource[];
  fiction: Resource[];
  hindi: Resource[];
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

export type BookKind = "craft" | "fiction" | "hindi";
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
