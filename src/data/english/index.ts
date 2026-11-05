import type { Track } from "../../lib/types.ts";
import { SHARED_RULES } from "../helpers.ts";
import { BOOKS } from "./books.ts";
import { MONTHS } from "./months.ts";

export const ENGLISH: Track = {
  id: "english",
  name: "English",
  nativeName: "English",
  tagline: "Craft in English, from Saunders to submission.",
  intro:
    "Seven short stories, a 20–30k-word novella drafted and revised, 48 stories of the week read closely, and two stories submitted to magazines. Each week is planned down to the hour. Tick tasks off as you go.",
  budget: [
    { category: "writing", hours: 4.5, label: "Writing", note: "Drafting, exercises, revision. The core of the year." },
    { category: "fiction", hours: 3.5, label: "Reading fiction", note: "2.5 h of the month's novel or stories, plus a 1-hour story of the week." },
    { category: "craft", hours: 0.75, label: "Craft books", note: "One chapter at a time, tied to the month's subject." },
    { category: "lecture", hours: 0.75, label: "Lectures & podcasts", note: "Sanderson's BYU lectures, Writing Excuses." },
    { category: "reflect", hours: 0.5, label: "Notes & reflection", note: "Weekly log, reading notes, feedback triage." },
  ],
  rhythm: [
    { day: "Monday", hours: "1 h", what: "Craft book chapter (45 min) + notes (15 min)" },
    { day: "Tuesday", hours: "1 h", what: "Writing — short session" },
    { day: "Wednesday", hours: "1 h", what: "Fiction reading" },
    { day: "Thursday", hours: "1 h", what: "Writing — short session" },
    { day: "Friday", hours: "1 h", what: "Lecture / podcast (45 min) + reflection (15 min)" },
    { day: "Saturday", hours: "2.5 h", what: "Deep writing session — protect this one" },
    { day: "Sunday", hours: "2.5 h", what: "Fiction reading (1.5 h) + story of the week (1 h)" },
  ],
  quarters: [
    { n: 1, title: "Foundations", months: "Months 1–3", goal: "Learn to read like a writer and finish five short stories. Story, plot and character at short-story scale." },
    { n: 2, title: "The Page & the Blueprint", months: "Months 4–6", goal: "Control point of view, voice, scenes and dialogue — then design your novella before drafting it." },
    { n: 3, title: "The Draft", months: "Months 7–9", goal: "Write the whole novella, about 2,000 words a week, while studying the craft you need at each stage." },
    { n: 4, title: "Revision & Going Public", months: "Months 10–12", goal: "Rest the draft, diagnose it, revise it with beta readers, submit your best stories and plan Year 2." },
  ],
  months: MONTHS,
  books: BOOKS,
  bookGroups: [
    { kind: "craft", title: "Craft books", blurb: "Five core books plus one optional textbook. You read only the chapters each month calls for." },
    { kind: "fiction", title: "Fiction", blurb: "Mostly short novels and novellas, sized to 2.5 hours of reading a week, plus the stories of the week." },
  ],
  guide: {
    headline: "One language, one craft, one finished book.",
    intro:
      "This track teaches the craft entirely in English. Structure, character, point of view, scene and revision carry over to any language, so a year spent learning them here is a year spent learning them, full stop. If you later want to write in Hindi, the Hindi track on this site runs the same year with Hindi books, and you'll only need to spend effort on what is specific to Hindi.",
    outcomes: [
      ["7", "short stories finished, several revised"],
      ["1", "novella (20–30k words) drafted and revised to Draft 3"],
      ["2", "stories submitted to literary magazines"],
      ["≈15", "novels and novellas read like a writer"],
      ["48", "stories of the week, one a week, matched to the month"],
      ["≈30", "more short stories studied for craft"],
    ],
    rules: [
      ...SHARED_RULES,
      { title: "Don't choose your identity too early.", body: "Literary, psychological, speculative: let the answer come from your pages. Months 11–12 are built for that decision." },
    ],
    cards: [
      {
        eyebrow: "Story of the week",
        body: "One hour every week goes to a single short story chosen for that month's subject: endings in the endings month, suspense in the middle month. Read it once for pleasure, then once with a pen. Write one line: what does it withhold, and why?",
        sub: "Over a year that's 48 complete lessons in compression. If one is hard to find, swap in any story from the same anthology.",
      },
      {
        eyebrow: "Feedback",
        body: "Line up two readers in Month 2. They read your best stories in Month 3 and your novella draft in Month 11.",
        sub: "Want more? Online critique groups such as Critique Circle or Scribophile, or one paid online course, like Gotham Writers Workshop's Fiction I, taken around Months 2–4. Any course should replace lecture and craft hours, not add to them.",
      },
    ],
  },
};
