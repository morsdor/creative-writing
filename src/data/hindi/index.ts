import type { Track } from "../../lib/types.ts";
import { SHARED_RULES } from "../helpers.ts";
import { BOOKS } from "./books.ts";
import { Q1 } from "./q1.ts";
import { Q2 } from "./q2.ts";
import { Q3 } from "./q3.ts";
import { Q4 } from "./q4.ts";

export const HINDI: Track = {
  id: "hindi",
  name: "Hindi",
  nativeName: "हिंदी",
  tagline: "Read in Hindi, write in Hindi, from Premchand to submission.",
  intro:
    "Seven short stories and a 20–30k-word लघु उपन्यास, all written in Hindi, drafted and revised, with two stories submitted to Hindi magazines. You read about 40 Hindi stories and six novels, study ten film adaptations, and build your written Hindi one hour a week. Each week is planned down to the hour.",
  budget: [
    { category: "writing", hours: 4.5, label: "Writing in Hindi", note: "Drafting, exercises, revision. The core of the year." },
    { category: "fiction", hours: 2.5, label: "Reading Hindi fiction", note: "Stories and short novels, read like a writer. Hindi pages may go slower at first; the plan allows for it." },
    { category: "craft", hours: 0.75, label: "Craft", note: "Close reading, plus Hindi criticism, essays and a writer's diary." },
    { category: "lecture", hours: 0.75, label: "Talks & adaptations", note: "Film adaptations of Hindi fiction, Hindwi interviews and podcast." },
    { category: "language", hours: 1, label: "Language", note: "Typing, spelling, word diary, copywork, reading aloud, usage." },
    { category: "reflect", hours: 0.5, label: "Notes & reflection", note: "Weekly log, reading notes, feedback triage." },
  ],
  rhythm: [
    { day: "Monday", hours: "1 h", what: "Craft reading (45 min) + notes (15 min)" },
    { day: "Tuesday", hours: "1 h", what: "Writing — short session" },
    { day: "Wednesday", hours: "1 h", what: "Language hour" },
    { day: "Thursday", hours: "1 h", what: "Writing — short session" },
    { day: "Friday", hours: "1 h", what: "Talk or film (45 min) + reflection (15 min)" },
    { day: "Saturday", hours: "2.5 h", what: "Deep writing session — protect this one" },
    { day: "Sunday", hours: "2.5 h", what: "Hindi fiction reading" },
  ],
  quarters: [
    { n: 1, title: "Foundations", months: "Months 1–3", goal: "Read Hindi like a writer, get your written Hindi moving, and finish five stories and a flash piece." },
    { n: 2, title: "The Page & the Blueprint", months: "Months 4–6", goal: "Point of view, voice, scene, dialogue and the Hindi sentence — then design your लघु उपन्यास." },
    { n: 3, title: "The Draft", months: "Months 7–9", goal: "Write the whole novella, about 2,000 words a week, with [?] wherever the word won't come." },
    { n: 4, title: "Revision & Going Public", months: "Months 10–12", goal: "Diagnose, revise with Hindi readers, do the language passes, submit to Hindi magazines, plan Year 2." },
  ],
  months: [...Q1, ...Q2, ...Q3, ...Q4],
  books: BOOKS,
  bookGroups: [
    { kind: "craft", title: "Craft: criticism, essays, a diary", blurb: "Hindi has no step-by-step craft manuals like the English ones, so craft comes from close reading, writers' essays and criticism. Read a chapter at a time and pull out what you can use." },
    { kind: "fiction", title: "Hindi fiction", blurb: "Mostly short stories, many on Hindwi, plus six short novels sized to 2.5 hours of reading a week." },
    { kind: "language", title: "Language tools", blurb: "Usage, a thesaurus and the spelling standard. For the weekly language hour." },
  ],
  guide: {
    headline: "हिंदी में पढ़िए, हिंदी में लिखिए।",
    intro:
      "This track runs the same year in Hindi: every story you read and every word you write is Hindi. Hindi has no shelf of craft manuals like Saunders or Le Guin, so craft comes from five places: the concept cards on each month page, close reading of the masters, Hindi criticism and writers' essays, film adaptations of Hindi stories, and a weekly language hour. The instructions in this app are in English, the same as the English track.",
    outcomes: [
      ["7", "Hindi stories finished, several revised"],
      ["1", "लघु उपन्यास (20–30k words) drafted and revised to Draft 3"],
      ["2", "stories submitted to Hindi literary magazines"],
      ["≈40", "Hindi stories studied, from Premchand to Uday Prakash"],
      ["6", "short Hindi novels read like a writer"],
      ["≈10", "film adaptations compared with their stories"],
    ],
    rules: [
      ...SHARED_RULES,
      { title: "Write in Hindi; don't translate.", body: "If a sentence arrives in English, rewrite the thought, not the words. Use [?] for missing words and keep going. Fill them in at revision." },
    ],
    cards: [
      {
        eyebrow: "Why a language hour",
        body: "Speaking Hindi and writing literary Hindi are different skills. One hour a week goes to the second: a fast keyboard, a word diary, copying out masters by hand, reading your own pages aloud, consistent spelling, and the Hindi sentence's own problems (every line ending on था).",
        sub: "During the drafting months it gets lighter: you collect, copy and listen, but don't revise.",
      },
      {
        eyebrow: "Feedback",
        body: "Line up two readers in Month 2 who actually read Hindi fiction, not just people who speak Hindi. They read your best stories in Month 3 and your novella in Month 11.",
        sub: "For more: a Hindi writing group, a literature teacher, or fellow writers online. Don't post stories you plan to submit, since magazines want unpublished work.",
      },
    ],
  },
};
