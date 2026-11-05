import type { Month } from "../../lib/types.ts";
import { HINDWI, week, yt } from "../helpers.ts";
import { HINDWI_PODCAST, SANGAT } from "./q1.ts";

export const Q3: Month[] = [
  /* ============================ MONTH 7 ============================ */
  {
    n: 7,
    quarter: 3,
    title: "Drafting I: Beginnings, World & Momentum",
    altTitle: "मसौदा १: शुरुआत, संसार, गति",
    question: "How do you start a long project and keep going?",
    summary:
      "The draft begins. The target is about 2,000 words a week: a short session on Tuesday and Thursday and a long one on Saturday. Craft study gets lighter and keeps you company. Rule for the quarter: don't revise, keep moving, and put everything you want to fix in a “fix later” list.",
    wordTarget: "≈8,000–9,000 words by month end",
    concepts: [
      { term: "Drafting mindset", explain: "A first draft is for finding out what the story is. Permission to be bad is permission to finish." },
      { term: "The “fix later” list", explain: "When you notice a problem in an earlier chapter, write it in the list and keep moving. Never go back during the draft." },
      { term: "Don't stop for the word", explain: "When the right Hindi word won't come, write [?] or the English word in brackets and keep going. Hunting for words mid-sentence is how drafts stall. You'll fill them in at revision." },
      { term: "Openings", explain: "The first pages set the voice, introduce someone the reader wants to follow, and plant a question. Readers forgive slowness if they trust the voice." },
      { term: "Setting as pressure", explain: "In महाभोज, a death in a village becomes political capital, and the whole system — caste, police, press, party — closes in. Setting matters when it pushes on characters." },
      { term: "Continuity bible", explain: "A running page of names, ages, places, timeline, forms of address and small facts, so the draft stays consistent." },
    ],
    shelves: [
      {
        label: "Craft · a writer's diary",
        items: [
          { title: "मोहन राकेश की डायरी", author: "मोहन राकेश", what: "A few entries a week, Months 7–8.", why: "A writer's working life: doubt, money, blocked days, breakthroughs. Company for the drafting months, and proof that it's hard for everyone.", bookId: "hi-rakesh-diary" },
        ],
      },
      {
        label: "Talks",
        items: [
          { ...SANGAT, what: "This month, pick interviews where writers talk about how they draft." },
          HINDWI_PODCAST,
        ],
      },
      {
        label: "Fiction",
        items: [
          { title: "महाभोज", author: "मन्नू भंडारी", what: "Novel (≈170 pp) across the month.", why: "A village, a death and a political machine. Setting and power as pressure.", bookId: "hi-mahabhoj" },
        ],
      },
      {
        label: "Language · 1 h",
        items: [
          { title: "Light during drafting", what: "Word diary, copywork, and reading your week's pages aloud without fixing them.", why: "Keep your ear working without breaking the no-revision rule." },
        ],
      },
    ],
    readingQuestions: [
      "How does महाभोज set up its world in the first chapters?",
      "How does the setting put pressure on each character?",
      "Where does the novel use summary to move fast, and where does it slow down into scene?",
    ],
    weeks: [
      week(7, 1, "Start the engine", [
        ["craft", 0.75, "मोहन राकेश की डायरी — first entries"],
        ["lecture", 0.75, "हिन्दवी संगत: a writer on how they draft"],
        ["reflect", 0.5, "Set up the “fix later” list and continuity bible; log words"],
        ["fiction", 2.5, "महाभोज, ≈45 pages"],
        ["writing", 2, "Draft ≈900 words (Tue + Thu)"],
        ["writing", 2.5, "Saturday deep session: draft ≈1,100 words"],
        ["language", 1, "Word diary + agree with yourself on [?] for missing words"],
      ]),
      week(7, 2, "Keep going", [
        ["craft", 0.75, "मोहन राकेश की डायरी — continue"],
        ["lecture", 0.75, "हिन्दवी संगत — continue the interview"],
        ["reflect", 0.5, "Log words; one line on what surprised you"],
        ["fiction", 2.5, "महाभोज, to ≈p. 90"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words"],
        ["language", 1, "Copywork: one page of महाभोज"],
      ]),
      week(7, 3, "Setting under pressure", [
        ["craft", 0.75, "Re-read your setting sheet; add three pressures you've discovered while drafting"],
        ["lecture", 0.75, "हिन्दवी पॉडकास्ट — one episode"],
        ["reflect", 0.5, "Log words; update the continuity bible"],
        ["fiction", 2.5, "महाभोज, to ≈p. 135"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words"],
        ["language", 1, "Read this week's pages aloud — listen only, fix nothing"],
      ]),
      week(7, 4, "Momentum check", [
        ["craft", 0.75, "Compare your chapter plan with what you've drafted; adjust the plan, not the draft"],
        ["lecture", 0.75, "One हिन्दवी संगत interview"],
        ["reflect", 0.5, "Month 7 reflection: words so far, what's alive, what's dead"],
        ["fiction", 2.5, "Finish महाभोज"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words"],
        ["language", 1, "अच्छी हिंदी — next chapter; word diary"],
      ]),
    ],
    deliverables: [
      { id: "m7d1", text: "≈8,000–9,000 words of the novella drafted" },
      { id: "m7d2", text: "“Fix later” list and continuity bible started" },
      { id: "m7d3", text: "Chapter plan updated to match the draft" },
    ],
    selfCheck: [
      "Did you resist going back to revise?",
      "Is your weekly word count holding? If not, is it time, fear, or hunting for words?",
    ],
    pitfalls: [
      "Rewriting chapter 1 five times. Leave it.",
      "Stopping for the perfect Hindi word. Write [?] and move on.",
      "Comparing your first draft with a published novel's twentieth.",
    ],
  },

  /* ============================ MONTH 8 ============================ */
  {
    n: 8,
    quarter: 3,
    title: "Drafting II: The Middle — Escalation & Suspense",
    altTitle: "मसौदा २: बीच का हिस्सा",
    question: "How do you keep a long middle alive?",
    summary:
      "The middle is where most drafts die. This month's craft study is escalation, suspense and managing information, and it goes straight into your draft. Keep up about 2,000 words a week.",
    wordTarget: "≈16,000–17,000 words cumulative",
    concepts: [
      { term: "The sagging middle", explain: "When the middle repeats the same kind of conflict at the same intensity. Fix it by escalating stakes, complicating relationships or reversing the situation." },
      { term: "Escalation, station by station", explain: "In अमृतसर आ गया है, a train moves toward Amritsar during Partition, and at every station the mood in the compartment tightens. Each stop raises the pressure one notch. Use your chapters the same way." },
      { term: "Midpoint reversal", explain: "Around halfway, something changes the nature of the story: a revelation, a false victory, a betrayal. The protagonist stops reacting and starts acting, or the reverse." },
      { term: "Suspense vs. surprise", explain: "Hitchcock: a bomb that suddenly explodes under a table is a surprise (seconds of shock). Show the bomb first and let people chat over it, and you get minutes of suspense. Let the reader know more than the characters." },
      { term: "Managing information", explain: "Decide what the reader knows, suspects and doesn't know, and change all three on purpose. Never withhold something the POV character knows just to create a twist." },
      { term: "Setup/payoff ledger", explain: "Track every planted object, promise and question, and whether it pays off." },
      { term: "Chapter endings", explain: "End on a question, a decision, a reversal or an image that pulls forward. Not on everyone going to sleep." },
    ],
    shelves: [
      {
        label: "Craft · diary & close reading",
        items: [
          { title: "मोहन राकेश की डायरी", author: "मोहन राकेश", what: "Continue.", why: "Company for the hardest part of the draft.", bookId: "hi-rakesh-diary" },
          { title: "Close reading: अमृतसर आ गया है", what: "Week 1: mark each station and what changes there.", why: "Escalation you can map on a single page.", bookId: "hi-sahni" },
        ],
      },
      {
        label: "Talks & adaptations",
        items: [
          { title: "तमस (1988)", author: "गोविंद निहलानी, from भीष्म साहनी's novel", what: "The first four episodes, one a week.", why: "A town sliding toward a riot step by step: escalation at large scale.", url: yt("तमस गोविंद निहलानी") },
        ],
      },
      {
        label: "Fiction",
        items: [
          { title: "अमृतसर आ गया है · वाङ्चू", author: "भीष्म साहनी", what: "Weeks 1–2.", why: "Suspense on a train; a foreigner who slowly loses his place in history.", url: HINDWI, bookId: "hi-sahni" },
          { title: "वापसी", author: "उषा प्रियंवदा", what: "Week 1.", why: "A homecoming that turns quietly into exile.", url: HINDWI, bookId: "hi-priyamvada" },
          { title: "तिरिछ", author: "उदय प्रकाश", what: "Long story, weeks 3–4.", why: "Dream, dread and an escalating chain of misfortunes.", bookId: "hi-uday" },
        ],
      },
      {
        label: "Language · 1 h",
        items: [
          { title: "Light during drafting", what: "Word diary, copywork, reading aloud.", why: "Keep your ear working; don't revise." },
        ],
      },
    ],
    readingQuestions: [
      "In अमृतसर आ गया है, what changes at each station?",
      "In तिरिछ, what do you know, suspect and not know at the halfway point?",
      "How does each story end its sections?",
    ],
    weeks: [
      week(8, 1, "Escalate", [
        ["craft", 0.75, "Close reading: अमृतसर आ गया है — mark each station and how the tension rises"],
        ["lecture", 0.75, "तमस — episode 1"],
        ["reflect", 0.5, "Log words; start a setup/payoff ledger"],
        ["fiction", 2.5, "अमृतसर आ गया है + वापसी"],
        ["writing", 2, "Draft ≈900 words", "Before writing, ask: how can this chapter make things worse?"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words"],
        ["language", 1, "Word diary"],
      ]),
      week(8, 2, "Midpoint", [
        ["craft", 0.75, "मोहन राकेश की डायरी — continue"],
        ["lecture", 0.75, "तमस — episode 2"],
        ["reflect", 0.5, "Log words; is your midpoint reversal on the page yet?"],
        ["fiction", 2.5, "वाङ्चू", "Map know / suspect / don't know at three points."],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words — aim at the midpoint"],
        ["language", 1, "Copywork: one page of भीष्म साहनी"],
      ]),
      week(8, 3, "Suspense and subplot", [
        ["craft", 0.75, "मोहन राकेश की डायरी — continue"],
        ["lecture", 0.75, "तमस — episode 3"],
        ["reflect", 0.5, "Log words; update the ledger"],
        ["fiction", 2.5, "तिरिछ — first half"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words — let the subplot collide with the main line"],
        ["language", 1, "Read this week's pages aloud — listen only"],
      ]),
      week(8, 4, "Chapter endings", [
        ["craft", 0.75, "Review your chapter endings so far (notes only, no rewriting)"],
        ["lecture", 0.75, "तमस — episode 4"],
        ["reflect", 0.5, "Month 8 reflection; log words"],
        ["fiction", 2.5, "Finish तिरिछ"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words"],
        ["language", 1, "अच्छी हिंदी — next chapter"],
      ]),
    ],
    deliverables: [
      { id: "m8d1", text: "Draft at ≈16,000–17,000 words" },
      { id: "m8d2", text: "Midpoint reversal drafted" },
      { id: "m8d3", text: "Setup/payoff ledger up to date" },
    ],
    selfCheck: [
      "Is each chapter worse (for your protagonist) than the one before?",
      "Can you say what the reader knows, suspects and doesn't know at the end of each chapter?",
    ],
    pitfalls: [
      "Withholding something the POV character knows just to make a twist. Readers feel cheated.",
      "Starting a new novel because this one got hard. That's normal at this stage. Keep going.",
    ],
  },

  /* ============================ MONTH 9 ============================ */
  {
    n: 9,
    quarter: 3,
    title: "Drafting III: Climax, Ending & “The End”",
    altTitle: "मसौदा ३: चरम, अंत और “समाप्त”",
    question: "How do you land a long story and finish the draft?",
    summary:
      "You write the climax and the ending and type “समाप्त”. If the draft comes in at 18,000 words instead of 25,000, that's fine. A finished short draft is worth more than an unfinished long one. Use the buffer week if you need it.",
    wordTarget: "Complete first draft (≈20,000–30,000 words)",
    concepts: [
      { term: "Climax as the hardest choice", explain: "The climax isn't the loudest scene. It's the moment the protagonist makes the choice that decides the story's question, under maximum pressure." },
      { term: "Earned endings", explain: "The last line of उसने कहा था lands because a boy's question was planted decades earlier. An ending feels inevitable when set up and surprising when it arrives from an unexpected angle." },
      { term: "Self-revelation", explain: "What the protagonist finally understands, or fails to understand, about themselves. The more specific, the stronger." },
      { term: "New equilibrium", explain: "The world after the change. Show it in an image or action rather than a summary of lessons learned." },
      { term: "Open vs. closed endings", explain: "Open endings leave the outcome uncertain but still resolve the story's emotional question. Ambiguity isn't vagueness." },
      { term: "Echo the opening", explain: "A final image that rhymes with the first lets the reader feel the distance travelled." },
    ],
    shelves: [
      {
        label: "Craft · endings, close-read",
        items: [
          { title: "Four endings", what: "Re-read only the last page of कफ़न, उसने कहा था, वापसी and कोसी का घटवार.", why: "Four different ways to end a Hindi story: bitter irony, sacrifice, quiet exile, restraint.", bookId: "hi-premchand" },
        ],
      },
      {
        label: "Talks & adaptations",
        items: [
          { title: "नौकर की कमीज़ (1999)", author: "मणि कौल, from विनोद कुमार शुक्ल's novel", what: "Weeks 1–2, in two parts.", why: "See how a film translates Shukla's way of seeing before you read him this month.", url: yt("नौकर की कमीज़ मणि कौल") },
          { title: "An interview with विनोद कुमार शुक्ल", what: "Week 3.", why: "How he thinks about simple language and strange perception.", url: yt("विनोद कुमार शुक्ल साक्षात्कार") },
        ],
      },
      {
        label: "Fiction",
        items: [
          { title: "दीवार में एक खिड़की रहती थी", author: "विनोद कुमार शुक्ल", what: "Novel (≈170 pp) across the month.", why: "Ordinary domestic life made extraordinary through perception and very simple sentences. A counterweight to plot engineering. Study it; don't imitate it.", bookId: "hi-deewar" },
        ],
      },
      {
        label: "Language · 1 h",
        items: [
          { title: "Copywork: विनोद कुमार शुक्ल", what: "Week 3.", why: "Notice how plain the words are, and how strange the sentences." },
        ],
      },
    ],
    readingQuestions: [
      "How does each of the four endings make you feel, and what was planted to make it work?",
      "What is your protagonist's final choice? Can you say it in one sentence?",
      "How does Vinod Kumar Shukla make the ordinary feel strange with such simple words?",
    ],
    weeks: [
      week(9, 1, "Toward the climax", [
        ["craft", 0.75, "Endings: re-read the last pages of कफ़न and उसने कहा था"],
        ["lecture", 0.75, "नौकर की कमीज़ — first part"],
        ["reflect", 0.5, "Log words; list what your ledger says must pay off"],
        ["fiction", 2.5, "दीवार में एक खिड़की रहती थी — begin"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words"],
        ["language", 1, "Word diary"],
      ]),
      week(9, 2, "The climax", [
        ["craft", 0.75, "Endings: re-read the last pages of वापसी and कोसी का घटवार"],
        ["lecture", 0.75, "नौकर की कमीज़ — second part"],
        ["reflect", 0.5, "Log words; write your protagonist's final choice in one sentence"],
        ["fiction", 2.5, "दीवार में एक खिड़की रहती थी — continue"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft the climax"],
        ["language", 1, "Read this week's pages aloud — listen only"],
      ]),
      week(9, 3, "The ending", [
        ["craft", 0.75, "Re-read your opening chapter (read only, don't edit). What should the last image echo?"],
        ["lecture", 0.75, "An interview with विनोद कुमार शुक्ल"],
        ["reflect", 0.5, "Log words"],
        ["fiction", 2.5, "दीवार में एक खिड़की रहती थी — continue"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft the resolution"],
        ["language", 1, "Copywork: one page of विनोद कुमार शुक्ल"],
      ]),
      week(9, 4, "Type “समाप्त”", [
        ["craft", 0.75, "Skim your “fix later” list. Don't act on it yet."],
        ["lecture", 0.75, "Rest — or one हिन्दवी episode you enjoy"],
        ["reflect", 0.5, "Celebrate. Record the final word count and how it felt to finish."],
        ["fiction", 2.5, "Finish दीवार में एक खिड़की रहती थी"],
        ["writing", 2, "Draft the final pages"],
        ["writing", 2.5, "Finish the draft. Back it up in two places. Don't re-read it."],
        ["language", 1, "Rest: read anything in Hindi for pleasure"],
      ]),
    ],
    deliverables: [
      { id: "m9d1", text: "Climax drafted" },
      { id: "m9d2", text: "Complete first draft of the novella — “समाप्त” typed" },
      { id: "m9d3", text: "Draft backed up in two places" },
    ],
    selfCheck: [
      "Does the climax hinge on a choice, not just an event?",
      "Did you finish? (That's the only check this month.)",
    ],
    pitfalls: [
      "Re-reading from the start “to get back into it” and never reaching the end.",
      "Refusing to end because the draft feels flawed. It's meant to be flawed.",
    ],
  },
];
