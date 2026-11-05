import type { Book } from "../../lib/types.ts";

export const BOOKS: Book[] = [
  /* ----------------------------- Craft ----------------------------- */
  { id: "saunders", title: "A Swim in a Pond in the Rain", author: "George Saunders", kind: "craft", months: [1, 2], priority: "buy-first", length: "≈410 pp", note: "Your first textbook. Seven Russian stories with Saunders' essays on how each one works. It counts as craft study and fiction reading." },
  { id: "leguin", title: "Steering the Craft", author: "Ursula K. Le Guin", kind: "craft", months: [4, 5], priority: "buy-first", length: "≈150 pp", note: "Short and exercise-based. Do the exercises; they're the point." },
  { id: "truby", title: "The Anatomy of Story", author: "John Truby", kind: "craft", months: [6, 7, 8, 9], priority: "buy-first", length: "≈450 pp (selected chapters)", note: "Your novella design manual. Dense, so read only the chapter for the week." },
  { id: "browne-king", title: "Self-Editing for Fiction Writers (2nd ed.)", author: "Renni Browne & Dave King", kind: "craft", months: [5, 11, 12], priority: "buy-first", length: "≈280 pp", note: "Line-level craft and revision, with before/after examples." },
  { id: "scofield", title: "The Last Draft", author: "Sandra Scofield", kind: "craft", months: [10, 11], priority: "buy-later", length: "≈250 pp", note: "Revising a long draft. Buy around Month 9." },
  { id: "burroway", title: "Writing Fiction: A Guide to Narrative Craft", author: "Janet Burroway", kind: "craft", months: [2, 3], priority: "optional", length: "Textbook (selected chapters)", note: "Expensive new; an older used edition or a library copy is fine. Used mainly for the characterisation chapters in Month 3." },

  /* ---------------------------- Fiction ---------------------------- */
  { id: "old-man", title: "The Old Man and the Sea", author: "Ernest Hemingway", kind: "fiction", months: [1], priority: "buy-first", length: "≈110 pp", note: "Escalation and plain prose." },
  { id: "interpreter", title: "Interpreter of Maladies", author: "Jhumpa Lahiri", kind: "fiction", months: [2, 5], priority: "buy-first", length: "≈200 pp (stories)", note: "Contemporary short stories; precise plotting and domestic detail." },
  { id: "remains", title: "The Remains of the Day", author: "Kazuo Ishiguro", kind: "fiction", months: [3, 9], priority: "buy-first", length: "≈250 pp", note: "Character, self-deception and the unreliable narrator." },
  { id: "gatsby", title: "The Great Gatsby", author: "F. Scott Fitzgerald", kind: "fiction", months: [4, 9], priority: "buy-later", length: "≈180 pp", note: "Observer-narrator, symbolism, economy. Widely available cheaply." },
  { id: "cathedral", title: "“Cathedral” (story)", author: "Raymond Carver", kind: "fiction", months: [4], priority: "optional", length: "Short story", note: "A first-person voice that reveals more than the narrator intends. In the collection Cathedral or anthologies." },
  { id: "hills", title: "“Hills Like White Elephants” (story)", author: "Ernest Hemingway", kind: "fiction", months: [5], priority: "optional", length: "Short story", note: "The classic subtext lesson. Widely anthologised." },
  { id: "lady-dog", title: "“The Lady with the Dog” (story)", author: "Anton Chekhov", kind: "fiction", months: [5], priority: "free-online", length: "Short story", note: "Free on Project Gutenberg.", url: "https://www.gutenberg.org/ebooks/search/?query=lady+with+the+dog+chekhov" },
  { id: "stranger", title: "The Stranger", author: "Albert Camus", kind: "fiction", months: [6], priority: "buy-later", length: "≈120 pp", note: "Matthew Ward or Sandra Smith translation." },
  { id: "chronicle", title: "Chronicle of a Death Foretold", author: "Gabriel García Márquez", kind: "fiction", months: [6], priority: "buy-later", length: "≈120 pp", note: "Suspense when the ending is given in the first line." },
  { id: "guide", title: "The Guide", author: "R.K. Narayan", kind: "fiction", months: [7], priority: "buy-later", length: "≈220 pp", note: "Setting, dual timeline, Indian English voice." },
  { id: "never-let", title: "Never Let Me Go", author: "Kazuo Ishiguro", kind: "fiction", months: [8], priority: "buy-later", length: "≈290 pp", note: "Controlled release of information." },
  { id: "ivan", title: "The Death of Ivan Ilyich", author: "Leo Tolstoy", kind: "fiction", months: [9], priority: "free-online", length: "≈90 pp", note: "Free on Project Gutenberg.", url: "https://www.gutenberg.org/ebooks/search/?query=death+of+ivan+ilyich" },
  { id: "unaccustomed", title: "Unaccustomed Earth", author: "Jhumpa Lahiri", kind: "fiction", months: [10], priority: "buy-later", length: "Title story + “Hell-Heaven”", note: "Long stories with novella-like proportions." },
  { id: "free-choice", title: "Free choice — scouting novel", author: "You choose", kind: "fiction", months: [11], priority: "optional", length: "One novel", note: "Literary: The God of Small Things. Psychological/crime: In the Woods (Tana French). Speculative: Stories of Your Life and Others (Ted Chiang)." },
  { id: "anthology", title: "A big short-story anthology (for the story of the week)", author: "Any editor", kind: "fiction", months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], priority: "optional", length: "48 stories over the year", note: "Most stories of the week are online or in any large anthology (Norton, Oxford, Penguin). A library card covers the rest. If you can't find one, swap in any story from the same anthology." },
];
