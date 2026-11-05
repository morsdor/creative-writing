import type { Book } from "../lib/types";

const HINDWI = "https://www.hindwi.org/";

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

  /* ----------------------------- Hindi ----------------------------- */
  { id: "premchand", title: "कफ़न · पूस की रात · ईदगाह · बड़े भाई साहब", author: "प्रेमचंद", kind: "hindi", months: [1], priority: "free-online", length: "4 short stories", note: "Free on Hindwi.", url: HINDWI },
  { id: "guleri", title: "उसने कहा था", author: "चंद्रधर शर्मा गुलेरी", kind: "hindi", months: [2], priority: "free-online", length: "Short story", note: "Flashback structure, 1915.", url: HINDWI },
  { id: "renu-stories", title: "पंचलाइट", author: "फणीश्वरनाथ रेणु", kind: "hindi", months: [2], priority: "free-online", length: "Short story", note: "Comic plot around one object.", url: HINDWI },
  { id: "sahni-stories", title: "चीफ़ की दावत", author: "भीष्म साहनी", kind: "hindi", months: [3], priority: "free-online", length: "Short story", note: "Character revealed through choices.", url: HINDWI },
  { id: "verma-parinde", title: "परिंदे", author: "निर्मल वर्मा", kind: "hindi", months: [4], priority: "free-online", length: "Long short story", note: "Interiority and silence.", url: HINDWI },
  { id: "rakesh-stories", title: "मिस पाल · मलबे का मालिक", author: "मोहन राकेश", kind: "hindi", months: [4, 8], priority: "free-online", length: "2 short stories", note: "Outsider POV; Partition and memory.", url: HINDWI },
  { id: "suraj", title: "सूरज का सातवाँ घोड़ा", author: "धर्मवीर भारती", kind: "hindi", months: [5, 6], priority: "buy-first", length: "≈100 pp", note: "A frame narrative about how stories are built." },
  { id: "mitro", title: "मित्रो मरजानी", author: "कृष्णा सोबती", kind: "hindi", months: [7], priority: "buy-later", length: "≈90 pp", note: "Voice and dialogue." },
  { id: "priyamvada", title: "वापसी", author: "उषा प्रियंवदा", kind: "hindi", months: [8], priority: "free-online", length: "Short story", note: "Family and belonging.", url: HINDWI },
  { id: "uday-prakash", title: "तिरिछ", author: "उदय प्रकाश", kind: "hindi", months: [8], priority: "buy-later", length: "Long story", note: "Escalating dread. In his collection तिरिछ." },
  { id: "deewar", title: "दीवार में एक खिड़की रहती थी", author: "विनोद कुमार शुक्ल", kind: "hindi", months: [9, 10, 11], priority: "buy-later", length: "≈170 pp", note: "The ordinary made extraordinary. Study it; don't imitate it." },
  { id: "contemporary-hindi", title: "Contemporary Hindi scouting", author: "Geetanjali Shree · Manav Kaul · Divya Prakash Dubey", kind: "hindi", months: [12], priority: "optional", length: "One story or chapter", note: "How Hindi fiction sounds now. Groundwork for Year 2." },
];

export const PRIORITY_LABEL: Record<Book["priority"], string> = {
  "buy-first": "Buy first",
  "buy-later": "Buy during the year",
  optional: "Optional",
  "free-online": "Free online",
};
