import type { Month } from "../../lib/types.ts";
import { HINDWI, week, yt } from "../helpers.ts";
import { HINDWI_PODCAST, SANGAT } from "./q1.ts";

export const Q4: Month[] = [
  /* ============================ MONTH 10 ============================ */
  {
    n: 10,
    quarter: 4,
    title: "Rest, Re-read, Diagnose",
    altTitle: "विश्राम, पुनर्पाठ, निदान",
    question: "How do you see your own draft clearly enough to fix it?",
    summary:
      "The draft sits in a drawer for a week while you write a new short story. Then you read it as a reader, outline it backwards, diagnose the big problems, and write a revision plan. Big problems come before small ones: never polish a scene you might cut. Language problems go on a list for Month 12.",
    concepts: [
      { term: "Drawer time", explain: "Distance turns you from author into reader. Even one or two weeks helps." },
      { term: "The reader read-through", explain: "Read the whole draft in one or two sittings without fixing anything. Mark the margin where you're bored, confused or moved." },
      { term: "Reverse outline", explain: "One line per scene: what happens, what changes, POV, word count. The draft's real structure appears, as opposed to the one you planned." },
      { term: "Levels of revision", explain: "Story and structure → scenes → sentences → spelling and consistency. Work top-down. In Hindi, the last level is big (nukta, spelling, English words, sentence endings), which is exactly why it comes last." },
      { term: "The scene function test", explain: "Does each scene change something? If you removed it, would anything break? If not, cut or merge it." },
      { term: "Motivation audit", explain: "For each major choice: would this person, with this belief and this fear, really do this here? If not, fix the setup, not the choice." },
    ],
    shelves: [
      {
        label: "Craft · method & memoir",
        items: [
          { title: "The revision method on this page", what: "The concept cards above, applied week by week.", why: "I don't know a Hindi book on revising a long draft that I can recommend with confidence, so the method lives here: read-through, reverse outline, function test, motivation audit, plan." },
          { title: "एक कहानी यह भी", author: "मन्नू भंडारी", what: "Drawer week: more chapters.", why: "A writer's life between books, while yours rests.", bookId: "hi-mannu-memoir" },
        ],
      },
      {
        label: "Talks & adaptations",
        items: [
          { title: "सारा आकाश (1969)", author: "बासु चटर्जी, from राजेंद्र यादव's novel", what: "Weeks 1–2, in two parts.", why: "An adaptation is a revision. What did the film cut from the novel, and why did the story survive?", url: yt("सारा आकाश 1969 फ़िल्म") },
          { ...SANGAT, what: "Week 3: a writer talking about rewriting." },
          HINDWI_PODCAST,
        ],
      },
      {
        label: "Fiction",
        items: [
          { title: "लंदन की एक रात", author: "निर्मल वर्मा", what: "Long story, week 1.", why: "A long story with novella proportions. Study how it paces itself.", url: HINDWI, bookId: "hi-verma" },
          { title: "और अंत में प्रार्थना", author: "उदय प्रकाश", what: "Long story, weeks 2–3.", why: "Nearly a novella. Notice what gets space and what gets a sentence.", bookId: "hi-uday" },
        ],
      },
      {
        label: "Language · 1 h",
        items: [
          { title: "The language-problem list", what: "Week 2: while reading your draft, list language problems separately. Fix none of them yet.", why: "Spelling, nukta, stiff sentences, English intrusions: all real, all for Month 12." },
        ],
      },
    ],
    readingQuestions: [
      "How do these long stories pace themselves differently from short ones?",
      "Reading your own draft: where did you skim?",
      "Watching सारा आकाश: what was cut, and did you miss it?",
    ],
    weeks: [
      week(10, 1, "Drawer week", [
        ["craft", 0.75, "एक कहानी यह भी — more chapters"],
        ["lecture", 0.75, "सारा आकाश — first half"],
        ["reflect", 0.5, "Don't open the draft. Write down what you remember as its strongest and weakest parts."],
        ["fiction", 2.5, "लंदन की एक रात"],
        ["writing", 2.5, "Story #7: draft a new short story (≈2,000 words)", "Keep your hand in while the draft rests."],
        ["writing", 2, "Story #7: finish the draft", "Done beats good. You'll revise it in Month 11."],
        ["language", 1, "Word diary review: which words did you actually use this year?"],
      ]),
      week(10, 2, "Read as a reader", [
        ["craft", 0.75, "Re-read the concept cards; plan your two reading sittings"],
        ["lecture", 0.75, "सारा आकाश — second half", "List three things the film cut."],
        ["reflect", 0.5, "Write a one-page “reader's report” on your own draft"],
        ["fiction", 2.5, "और अंत में प्रार्थना — first half"],
        ["writing", 3, "Read the whole draft in one or two sittings", "Margin marks only: B = bored, C = confused, ! = alive. No fixing."],
        ["writing", 1.5, "Read Story #7 aloud; fix only its ending"],
        ["language", 1, "Write the language-problem list from your read-through", "Spelling, nukta, stiff sentences, English words, repeated था endings. For Month 12, not now."],
      ]),
      week(10, 3, "Reverse outline and diagnosis", [
        ["craft", 0.75, "Motivation audit: for each major choice, is the setup there?"],
        ["lecture", 0.75, "हिन्दवी संगत: a writer on rewriting"],
        ["reflect", 0.5, "Run the scene function test on every scene"],
        ["fiction", 2.5, "Finish और अंत में प्रार्थना"],
        ["writing", 2.5, "Reverse outline: one line per scene (what changes, POV, words)"],
        ["writing", 2, "Diagnosis: list the top five problems, biggest first", "Typical: weak motivation, saggy middle, unclear stakes, unearned climax, too much backstory."],
        ["language", 1, "अच्छी हिंदी — next chapter"],
      ]),
      week(10, 4, "Revision plan", [
        ["craft", 0.75, "Compare your diagnosis with your readers' notes from Month 4"],
        ["lecture", 0.75, "हिन्दवी पॉडकास्ट — one episode"],
        ["reflect", 0.5, "Month 10 reflection"],
        ["fiction", 2.5, "A Hindi story or novella of your choice"],
        ["writing", 2, "Write the revision plan", "For each of the five problems: what will change, in which scenes, in what order."],
        ["writing", 2.5, "Begin structural revision: cut, merge or add scenes per the plan"],
        ["language", 1, "Word diary"],
      ]),
    ],
    deliverables: [
      { id: "m10d1", text: "Story #7 drafted" },
      { id: "m10d2", text: "Reader's report on your own draft" },
      { id: "m10d3", text: "Reverse outline of the whole novella" },
      { id: "m10d4", text: "Revision plan (top five problems → changes)" },
      { id: "m10d5", text: "Language-problem list for Month 12" },
    ],
    selfCheck: [
      "Can you name your draft's single biggest problem?",
      "Do you know which scenes you're cutting?",
    ],
    pitfalls: [
      "Starting with spelling and polishing. It feels like progress and isn't.",
      "Despair on the first read. Every first draft reads like this.",
    ],
  },

  /* ============================ MONTH 11 ============================ */
  {
    n: 11,
    quarter: 4,
    title: "Draft 2 & Beta Readers",
    altTitle: "दूसरा मसौदा और पहले पाठक",
    question: "How do you turn a first draft into something other people can read?",
    summary:
      "You carry out the revision plan, producing Draft 2, and send it to two or three readers with specific questions. While they read, you revise two short stories and read a novel in the direction you're leaning, as a scouting trip for Year 2.",
    concepts: [
      { term: "Structural revision", explain: "Moving, cutting and adding scenes; rebuilding the middle; making the climax hinge on the protagonist's choice. Do this before any line editing." },
      { term: "Proportion", explain: "Does each part get the space it deserves? Important moments long; transitions short. Cut over-written beginnings." },
      { term: "Finding Hindi readers", explain: "You need people who read Hindi fiction regularly, not just people who speak Hindi. Your two readers from Month 2, plus one more if you can: a Hindi writing group, a literature teacher, a fellow writer." },
      { term: "Beta-reader questions", explain: "Ask specific questions: Where did you stop wanting to read? What confused you? What did you believe about X at the midpoint? Did any character's Hindi sound false?" },
      { term: "Receiving feedback", explain: "Readers are usually right that something is wrong and often wrong about how to fix it. Look for patterns across readers. Say धन्यवाद, not “लेकिन”." },
    ],
    shelves: [
      {
        label: "Craft · criticism, revisited",
        items: [
          { title: "कहानी : स्वरूप और संवेदना", author: "राजेंद्र यादव", what: "Re-read the chapters you marked in Months 2–3.", why: "You'll read them differently with a whole draft behind you.", bookId: "hi-yadav" },
        ],
      },
      {
        label: "Talks",
        items: [{ ...SANGAT, what: "One interview, any writer you admire." }, HINDWI_PODCAST],
      },
      {
        label: "Fiction",
        items: [
          { title: "Free choice — a scouting novel", what: "माई (गीतांजलि श्री) · कसप (मनोहर श्याम जोशी) · राग दरबारी (श्रीलाल शुक्ल) · नौकर की कमीज़ (विनोद कुमार शुक्ल).", why: "Read the shelf you might want to write for in Year 2.", bookId: "hi-free-choice" },
        ],
      },
      {
        label: "Language · 1 h",
        items: [
          { title: "Register and spelling passes", what: "Weeks 2–3.", why: "Two cheap passes that make a draft feel finished to Hindi readers." },
        ],
      },
    ],
    readingQuestions: [
      "Your scouting novel: what does this kind of book promise its readers?",
      "Which of your seven stories would you most want a stranger to read? Why?",
    ],
    weeks: [
      week(11, 1, "Structural revision", [
        ["craft", 0.75, "Re-read the Yadav chapters you marked"],
        ["lecture", 0.75, "One हिन्दवी संगत interview"],
        ["reflect", 0.5, "Tick off the problems from your plan as you fix them"],
        ["fiction", 2.5, "Scouting novel — begin"],
        ["writing", 2, "Draft 2: rebuild per the plan"],
        ["writing", 2.5, "Saturday: Draft 2 — the biggest structural change first"],
        ["language", 1, "Word diary"],
      ]),
      week(11, 2, "Motivation and proportion", [
        ["craft", 0.75, "Proportion check: list each chapter's word count against its importance"],
        ["lecture", 0.75, "हिन्दवी संगत — continue"],
        ["reflect", 0.5, "Motivation audit: for each major choice, is the setup there?"],
        ["fiction", 2.5, "Scouting novel — continue"],
        ["writing", 2, "Draft 2: strengthen setups for each major choice"],
        ["writing", 2.5, "Saturday: Draft 2 — fix proportion (cut over-long beginnings and transitions)"],
        ["language", 1, "Register pass: does each character keep their way of speaking across the draft?"],
      ]),
      week(11, 3, "Finish Draft 2", [
        ["craft", 0.75, "POV check: any slips in point of view, वह/वे or forms of address?"],
        ["lecture", 0.75, "हिन्दवी पॉडकास्ट — one episode"],
        ["reflect", 0.5, "Write 5–6 specific questions for your readers"],
        ["fiction", 2.5, "Scouting novel — continue"],
        ["writing", 2, "Draft 2: continuity pass with your bible"],
        ["writing", 2.5, "Saturday: finish Draft 2"],
        ["language", 1, "Spelling pass: apply your Month 1 rules with find-and-replace"],
      ]),
      week(11, 4, "Send it out", [
        ["craft", 0.75, "Read Draft 2's first chapter aloud and fix only what makes you wince"],
        ["lecture", 0.75, "हिन्दवी संगत: a writer on feedback or editors"],
        ["reflect", 0.5, "Send Draft 2 to 2–3 readers with your questions and a deadline (3 weeks)"],
        ["fiction", 2.5, "Scouting novel — finish or continue"],
        ["writing", 2, "Revise Story #7"],
        ["writing", 2.5, "Revise your best Month 1–4 story with everything you now know"],
        ["language", 1, "Copywork: one page from your scouting novel"],
      ]),
    ],
    deliverables: [
      { id: "m11d1", text: "Draft 2 of the novella complete" },
      { id: "m11d2", text: "Draft 2 sent to 2–3 Hindi readers with specific questions" },
      { id: "m11d3", text: "Story #7 and one earlier story revised" },
      { id: "m11d4", text: "Register and spelling passes done" },
    ],
    selfCheck: [
      "Are the top five problems from your plan actually fixed?",
      "Are your reader questions specific enough to get useful answers?",
    ],
    pitfalls: [
      "Sending it out with a page of apologies. Let the work speak.",
      "Waiting for feedback idly. Keep writing short stories.",
    ],
  },

  /* ============================ MONTH 12 ============================ */
  {
    n: 12,
    quarter: 4,
    title: "Polish, Submit, Plan Year Two",
    altTitle: "निखार, प्रकाशन के लिए भेजना, दूसरा साल",
    question: "How do you finish the year as a working writer?",
    summary:
      "You triage your readers' feedback, produce Draft 3, do the two Hindi language passes you've been saving, and submit your two best stories to Hindi literary magazines. Then you look back at the year and decide Year 2.",
    concepts: [
      { term: "Feedback triage", explain: "Sort notes into: everyone said it (fix), one person said it and you agree (fix), one person said it and you don't (note it), and taste (ignore)." },
      { term: "Line editing in Hindi", explain: "Vary sentence endings (not every line on था). Break “कि” chains. Cut repeated “उसने… उसने…”. Keep English words only where your characters would really use them. Make nukta and spelling consistent. Read it aloud." },
      { term: "Where Hindi stories are published", explain: "Print and online literary magazines such as हंस, कथादेश, तद्भव, वागर्थ and नया ज्ञानोदय, and online journals such as समालोचन and सदानीरा. Read recent issues first. Guidelines and addresses change, so check each one's current instructions." },
      { term: "One story, one place, unless told otherwise", explain: "Policies on simultaneous submission vary and aren't always stated. If a magazine doesn't say, send each story to one place at a time, and keep a tracker." },
      { term: "Rejection is the default", explain: "Most good stories are rejected many times, and many magazines never reply. Treat submission as a numbers process, not a verdict." },
      { term: "Year 2 decisions", explain: "Novel or more short fiction? Which genre? Add the English track? Make the decision from your actual work, not from wishes." },
    ],
    shelves: [
      {
        label: "Craft · usage",
        items: [
          { title: "अच्छी हिंदी", author: "रामचंद्र वर्मा", what: "Weeks 1–2: skim the chapters you haven't read, as a checklist.", why: "Final line-level polish.", bookId: "hi-achhi-hindi" },
        ],
      },
      {
        label: "Talks",
        items: [
          { title: "Writers on publishing a first book", what: "One or two talks or interviews.", why: "How Hindi publishing actually works, from people inside it.", url: yt("हिंदी लेखक पहली किताब प्रकाशन बातचीत") },
          SANGAT,
        ],
      },
      {
        label: "Fiction",
        items: [
          { title: "Magazines you'll submit to", what: "Read 3–4 recently published stories from each magazine you're considering.", why: "Submitting blind wastes your work." },
        ],
      },
      {
        label: "Language · 1 h",
        items: [
          { title: "Two language passes", what: "Week 1: spelling and nukta. Week 2: sentence endings and English words.", why: "The passes you saved from Month 10's list." },
          { title: "देवनागरी लिपि तथा हिंदी वर्तनी का मानकीकरण", author: "केंद्रीय हिंदी निदेशालय", what: "Check anything you're unsure of.", why: "Your spelling reference.", bookId: "hi-vartani" },
        ],
      },
    ],
    readingQuestions: [
      "What do the magazines you like publish? Does your work belong there?",
      "Re-reading Story #1, what can you see now that you couldn't then?",
    ],
    weeks: [
      week(12, 1, "Feedback triage", [
        ["craft", 0.75, "अच्छी हिंदी — skim remaining chapters as a checklist"],
        ["lecture", 0.75, "A writer on publishing a first book"],
        ["reflect", 0.5, "Triage your readers' feedback into fix / consider / ignore"],
        ["fiction", 2.5, "Research 5 Hindi magazines; read their recent stories"],
        ["writing", 2, "Draft 3: fix what everyone flagged"],
        ["writing", 2.5, "Saturday: Draft 3 continued"],
        ["language", 1, "Language pass 1: spelling and nukta consistency"],
      ]),
      week(12, 2, "Draft 3 and line edit", [
        ["craft", 0.75, "Line-edit checklist from this month's concept card"],
        ["lecture", 0.75, "हिन्दवी संगत — one interview"],
        ["reflect", 0.5, "Shortlist 3–5 magazines for your two best stories"],
        ["fiction", 2.5, "Read more from your shortlisted magazines"],
        ["writing", 2, "Draft 3: line edit (read aloud, cut 10%)"],
        ["writing", 2.5, "Saturday: finish Draft 3"],
        ["language", 1, "Language pass 2: sentence endings and English words"],
      ]),
      week(12, 3, "Polish and prepare", [
        ["craft", 0.75, "Read submission guidelines for your shortlist; draft a short covering letter in Hindi"],
        ["lecture", 0.75, "हिन्दवी पॉडकास्ट — one episode"],
        ["reflect", 0.5, "Set up a submissions tracker (story · magazine · date · result)"],
        ["fiction", 2.5, "Free reading"],
        ["writing", 2.5, "Line-edit your two best short stories for submission"],
        ["writing", 2, "Write a short author note (परिचय) and format both stories", "Your name, contact and word count on page 1; a clean, consistent font."],
        ["language", 1, "Final read-aloud of both stories"],
      ]),
      week(12, 4, "Submit and look back", [
        ["craft", 0.75, "Year review", "Re-read Story #1, then your best recent story. Write down what changed."],
        ["lecture", 0.75, "Year 2 plan", "Novel or short fiction? Which genre? Weekly hours? Add the English track?"],
        ["reflect", 0.5, "Write a one-page letter to yourself to open in a year"],
        ["fiction", 2.5, "Read for pleasure. You've earned it."],
        ["writing", 1, "Submit two stories"],
        ["writing", 3.5, "Start something new: the first pages of Year 2's project"],
        ["language", 1, "Count your word diary. Keep it going."],
      ]),
    ],
    deliverables: [
      { id: "m12d1", text: "Draft 3 of the novella" },
      { id: "m12d2", text: "Two short stories submitted to Hindi magazines" },
      { id: "m12d3", text: "Submissions tracker set up" },
      { id: "m12d4", text: "Both language passes done" },
      { id: "m12d5", text: "Year review + Year 2 plan" },
    ],
    selfCheck: [
      "Can you write a story now that you couldn't have written in Month 1?",
      "Does written Hindi feel like your instrument now, or still like a tool you're fighting?",
      "Do you know what you want to write next?",
    ],
    pitfalls: [
      "Holding back submissions until the stories are perfect. They never will be.",
      "Treating a rejection, or silence, as a verdict on you.",
    ],
  },
];
