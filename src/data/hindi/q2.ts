import type { Month } from "../../lib/types.ts";
import { HINDWI, week, yt } from "../helpers.ts";
import { HINDWI_PODCAST, SANGAT } from "./q1.ts";

export const Q2: Month[] = [
  /* ============================ MONTH 4 ============================ */
  {
    n: 4,
    quarter: 2,
    title: "Point of View & Voice",
    altTitle: "दृष्टिकोण और आवाज़",
    question: "Who is telling this, how close are we, and what does the reader get to know?",
    summary:
      "The same event becomes a different story depending on who tells it and from how close. You write one incident four ways, study how परिंदे moves inside a mind, hear one of Hindi's great voices in मित्रो मरजानी, and start collecting premises for your novella.",
    concepts: [
      { term: "First person", explain: "Intimate and voiced, but limited to what the narrator knows and will admit. यही सच है is a diary: the narrator can't see what the reader sees about her." },
      { term: "Third person limited", explain: "Locked to one character's perceptions, told as वह. The most flexible default in modern fiction." },
      { term: "Omniscient", explain: "A narrator who knows everything, moves between minds and comments. Premchand's narrators often do this. Powerful, and old-fashioned only when done timidly." },
      { term: "Psychic distance", explain: "A scale (John Gardner's) from far — “1953 की सर्दियाँ थीं। एक आदमी दरवाज़े से निकला।” — to very close: “बर्फ़। कॉलर के अंदर तक।” Control the zoom deliberately." },
      { term: "Free indirect style", explain: "Third person coloured by the character's own words: in परिंदे, Latika's thoughts arrive in the narration without “उसने सोचा”. Most literary fiction lives here." },
      { term: "Honorifics are a point of view", explain: "English has no equivalent: whether the narrator writes “वह गया” or “वे गए” about a character, “माँ” or “माताजी”, tells the reader how the narrator stands toward them. Choose it on purpose and keep it consistent." },
      { term: "Voice", explain: "The sum of the narrator's choices: vocabulary, rhythm, what they notice and skip, what they joke about. Mitro's voice is so strong it almost makes a narrator unnecessary." },
      { term: "Unreliable narrator", explain: "A narrator whose account the reader learns to doubt, through self-deception, limited understanding or lies." },
    ],
    shelves: [
      {
        label: "Craft · criticism",
        items: [
          { title: "कहानी : नई कहानी", author: "नामवर सिंह", what: "Weeks 3–4: the essays on Nirmal Verma and परिंदे.", why: "The criticism that helped define the नई कहानी; परिंदे is often called its first story. Read it after the story, and test his reading against yours.", bookId: "hi-namvar" },
          { title: "Close reading: परिंदे", what: "Week 1: mark every sentence that is Latika's thought rather than the narrator's.", why: "The clearest Hindi lesson in free indirect style.", bookId: "hi-verma" },
        ],
      },
      {
        label: "Talks & adaptations",
        items: [
          { title: "रजनीगंधा (1974)", author: "बासु चटर्जी, from मन्नू भंडारी's यही सच है", what: "Weeks 2–3, in two parts.", why: "A first-person diary story turned into a film. How does a camera do interior monologue?", url: yt("रजनीगंधा 1974 फ़िल्म") },
          SANGAT,
          HINDWI_PODCAST,
        ],
      },
      {
        label: "Fiction",
        items: [
          { title: "परिंदे", author: "निर्मल वर्मा", what: "Long story, week 1.", why: "Interiority, silence and atmosphere: the inner life as the main event.", url: HINDWI, bookId: "hi-verma" },
          { title: "यही सच है", author: "मन्नू भंडारी", what: "Week 2.", why: "A diary narrator torn between two men, and between two versions of the truth.", url: HINDWI, bookId: "hi-mannu-stories" },
          { title: "मित्रो मरजानी", author: "कृष्णा सोबती", what: "Short novel, weeks 3–4.", why: "Voice, built almost entirely on bold, earthy dialogue.", bookId: "hi-sobti" },
          { title: "मिस पाल", author: "मोहन राकेश", what: "Week 4.", why: "Loneliness seen through an outsider's eyes.", url: HINDWI, bookId: "hi-rakesh" },
        ],
      },
      {
        label: "Language · 1 h",
        items: [
          { title: "Honorifics experiment", what: "Week 1: rewrite a paragraph switching वह ↔ वे for one character.", why: "Feel how the narrator's respect changes the reader's feeling." },
          { title: "Copywork: मित्रो मरजानी", what: "Week 3.", why: "Copy a page of dialogue to learn how Sobti makes speech sound spoken." },
        ],
      },
    ],
    readingQuestions: [
      "In परिंदे, which sentences are Latika's thoughts and which are the narrator's? How can you tell?",
      "In यही सच है, what does the narrator know about herself, and what does only the reader see?",
      "What does Mitro say that no narrator could?",
      "How does each writer use आप / तुम / तू, and वह / वे, for the main character?",
    ],
    weeks: [
      week(4, 1, "One incident, two ways", [
        ["craft", 0.75, "Close reading: परिंदे — whose thoughts are these?", "Mark every sentence that belongs to Latika rather than the narrator."],
        ["lecture", 0.75, "One हिन्दवी संगत interview"],
        ["reflect", 0.5, "Choose a small, charged incident to use all month", "E.g. a phone falls and shatters at a family wedding; a ring found in the wrong pocket."],
        ["fiction", 2.5, "परिंदे"],
        ["writing", 2, "The incident in first person, from the protagonist (≈700 words)"],
        ["writing", 2.5, "The same incident in third limited, from a bystander"],
        ["language", 1, "Honorifics experiment: rewrite one paragraph switching वह ↔ वे for your protagonist", "How does the narrator's respect change what the reader feels?"],
      ]),
      week(4, 2, "Omniscient and unreliable", [
        ["craft", 0.75, "Psychic distance: write the five-step zoom for one moment of your incident"],
        ["lecture", 0.75, "रजनीगंधा — first half"],
        ["reflect", 0.5, "Where does the narrator of यही सच है fool herself?"],
        ["fiction", 2.5, "यही सच है"],
        ["writing", 2, "The same incident, omniscient"],
        ["writing", 2.5, "The same incident, from an unreliable first-person narrator", "Let the reader see the truth around the narrator's version."],
        ["language", 1, "अच्छी हिंदी — next chapter; word diary"],
      ]),
      week(4, 3, "Story #6 in your hardest POV", [
        ["craft", 0.75, "नामवर सिंह on Nirmal Verma and परिंदे"],
        ["lecture", 0.75, "रजनीगंधा — second half", "What did the film do with the diary?"],
        ["reflect", 0.5, "Which of your four versions was strongest, and why?"],
        ["fiction", 2.5, "मित्रो मरजानी, first half", "Listen to the voice. Mark three lines only Mitro could say."],
        ["writing", 2, "Draft Story #6 (≈2,000 words) in the POV you found hardest"],
        ["writing", 2.5, "Continue Story #6"],
        ["language", 1, "Copywork: one page of मित्रो मरजानी's dialogue"],
      ]),
      week(4, 4, "Process feedback; novella seeds", [
        ["craft", 0.75, "नामवर सिंह — one more essay of your choice"],
        ["lecture", 0.75, "हिन्दवी पॉडकास्ट — one episode"],
        ["reflect", 0.5, "Triage your readers' feedback", "List patterns, not fixes. If both readers stumbled at the same place, that's real."],
        ["fiction", 2.5, "Finish मित्रो मरजानी + मिस पाल"],
        ["writing", 2, "Finish Story #6"],
        ["writing", 2.5, "Novella seeds: three one-paragraph premises", "Bigger than a short story: more time, more people, a deeper change."],
        ["language", 1, "Read Story #6 aloud; mark every place the voice slips"],
      ]),
    ],
    deliverables: [
      { id: "m4d1", text: "One incident in four POVs (first, third limited, omniscient, unreliable)" },
      { id: "m4d2", text: "Story #6 in your hardest POV" },
      { id: "m4d3", text: "Feedback patterns from your readers, written down" },
      { id: "m4d4", text: "Three one-paragraph novella premises" },
    ],
    selfCheck: [
      "Can you explain how changing the narrator changed what the reader knew, felt and believed?",
      "Can you hold one POV through a whole story without slipping?",
      "Is your use of वह/वे and forms of address consistent, and chosen?",
    ],
    pitfalls: [
      "Head-hopping within a scene without meaning to.",
      "Imitating Nirmal Verma's mood without his precision. Atmosphere isn't vagueness.",
    ],
  },

  /* ============================ MONTH 5 ============================ */
  {
    n: 5,
    quarter: 2,
    title: "Scene, Dialogue & the Sentence",
    altTitle: "दृश्य, संवाद और वाक्य",
    question: "How do words on the page become an experience for the reader?",
    summary:
      "This is the line-level month: scene construction, dialogue and subtext, detail, and the rhythm of the Hindi sentence. You write five pressure scenes, revise them for mechanics, and by the end of the month choose the premise for your novella.",
    concepts: [
      { term: "Scene vs. summary", explain: "A scene happens in real time on the page; summary compresses time. Put your important moments in scene and move through transitions with summary." },
      { term: "Scene structure", explain: "Goal → conflict → outcome. Every scene should change something: a relationship, a piece of knowledge, a balance of power." },
      { term: "Enter late, leave early", explain: "Start as close as possible to the turn; leave as soon as it lands. Cut the नमस्ते and the चलता हूँ." },
      { term: "Subtext", explain: "In मलबे का मालिक, an old man returns to the ruins of his house after Partition and talks to the man who knows what happened to his family. Almost nothing is said. Everything is understood." },
      { term: "Dialogue mechanics in Hindi", explain: "“कहा” is your invisible tag; most of the time it's all you need. Use action beats for rhythm. Pick one convention for dialogue (quotation marks or a dash) and keep it." },
      { term: "The Hindi sentence's rhythm problem", explain: "Hindi sentences end on the verb, so prose easily becomes “…था। …थी। …थे।” Vary it: move the verb forward, use fragments, start with the object, cut auxiliary verbs where the meaning survives." },
      { term: "Specific detail", explain: "“एक कुत्ता” is nothing. “गाड़ी के गर्म बोनट पर सोया एक तीन टाँग वाला कुत्ता” is a world. Choose the one detail that implies the rest." },
      { term: "Filter phrases", explain: "“उसने देखा कि दरवाज़ा खुला” → “दरवाज़ा खुला।” Cut the देखा कि, लगा कि, महसूस हुआ कि that stand between reader and moment." },
    ],
    shelves: [
      {
        label: "Craft · anthology & close reading",
        items: [
          { title: "एक दुनिया समानांतर", author: "सं. राजेंद्र यादव", what: "Weeks 2–4: the editor's introduction plus three or four stories.", why: "The नई कहानी generation in one book, with an argument about what was new: scenes, dialogue, city life.", bookId: "hi-samanantar" },
          { title: "Close reading: मलबे का मालिक", what: "Week 1: write out what is never said.", why: "Subtext in its purest Hindi form.", bookId: "hi-rakesh" },
        ],
      },
      {
        label: "Talks & adaptations",
        items: [
          { title: "उसकी रोटी (1969)", author: "मणि कौल, from मोहन राकेश's story", what: "Weeks 1–2, in two parts.", why: "A film made almost entirely of waiting. Notice how much is carried without words.", url: yt("उसकी रोटी मणि कौल") },
          SANGAT,
          HINDWI_PODCAST,
        ],
      },
      {
        label: "Fiction",
        items: [
          { title: "मलबे का मालिक · सिक्का बदल गया", author: "मोहन राकेश · कृष्णा सोबती", what: "Week 1.", why: "Two Partition stories built on what can't be said aloud.", url: HINDWI, bookId: "hi-rakesh" },
          { title: "पिता · लाल पान की बेगम", author: "ज्ञानरंजन · फणीश्वरनाथ रेणु", what: "Week 2.", why: "Pressure without plot; village dialogue full of life.", url: HINDWI, bookId: "hi-gyanranjan" },
          { title: "अकेली", author: "मन्नू भंडारी", what: "Week 3.", why: "An old woman's loneliness built from small domestic details.", url: HINDWI, bookId: "hi-mannu-stories" },
        ],
      },
      {
        label: "Language · 1 h",
        items: [
          { title: "Sentence-ending audit", what: "Week 2.", why: "The single most useful line-level habit in Hindi prose." },
          { title: "अच्छी हिंदी", author: "रामचंद्र वर्मा", what: "Next chapter.", why: "Keep going.", bookId: "hi-achhi-hindi" },
        ],
      },
    ],
    readingQuestions: [
      "In मलबे का मालिक, what is the conversation really about? How do you know?",
      "Find a scene that enters late. Where would a weaker writer have started it?",
      "Pick one paragraph and mark how each sentence ends. What does the rhythm do?",
      "Which single detail in अकेली implies the most?",
    ],
    weeks: [
      week(5, 1, "Dialogue and subtext", [
        ["craft", 0.75, "Close reading: मलबे का मालिक — write out what is never said"],
        ["lecture", 0.75, "उसकी रोटी — first half"],
        ["reflect", 0.5, "Note your own dialogue habits so far (tags, adverbs, speeches)"],
        ["fiction", 2.5, "मलबे का मालिक + सिक्का बदल गया"],
        ["writing", 2, "Scene: two people meet for the first time", "Each has a hidden agenda."],
        ["writing", 2.5, "Scene: an argument about something important, fought over something trivial"],
        ["language", 1, "Dialogue format: pick one convention and apply it to all your stories", "Quotation marks or a dash. Write the rule on your spelling page."],
      ]),
      week(5, 2, "Sentences and detail", [
        ["craft", 0.75, "एक दुनिया समानांतर — the introduction, first part"],
        ["lecture", 0.75, "उसकी रोटी — second half"],
        ["reflect", 0.5, "Collect five specific details from your own week that imply a whole story"],
        ["fiction", 2.5, "पिता + लाल पान की बेगम"],
        ["writing", 2, "Scene: a character hides a secret from someone who almost discovers it"],
        ["writing", 2.5, "Scene: a moment of grief, with no tears and no word for the feeling"],
        ["language", 1, "Sentence-ending audit", "Highlight every था/थी/थे that ends a sentence in one scene. Rewrite a third of them: move the verb, use a fragment, start with the object."],
      ]),
      week(5, 3, "Interior and mechanics", [
        ["craft", 0.75, "एक दुनिया समानांतर — two stories of your choice"],
        ["lecture", 0.75, "One हिन्दवी संगत interview"],
        ["reflect", 0.5, "Which of your scenes changes nothing? Mark it."],
        ["fiction", 2.5, "अकेली + one more story from एक दुनिया समानांतर"],
        ["writing", 2, "Scene: a conversation where neither person says what they mean"],
        ["writing", 2.5, "Revise all five scenes for mechanics", "Use कहा, cut adverbs, add beats, enter later, leave earlier, remove देखा कि / लगा कि."],
        ["language", 1, "अच्छी हिंदी — next chapter"],
      ]),
      week(5, 4, "Choose your novella", [
        ["craft", 0.75, "एक दुनिया समानांतर — finish the introduction"],
        ["lecture", 0.75, "हिन्दवी पॉडकास्ट — one episode"],
        ["reflect", 0.5, "Which premise do you keep thinking about when you're not writing?"],
        ["fiction", 2.5, "One story of your choice + copywork", "Copy out by hand one page you admire. Feel the rhythm from inside."],
        ["writing", 2.5, "Test-drive each novella premise: write its opening page"],
        ["writing", 2, "Choose one; write its one-sentence and one-paragraph versions"],
        ["language", 1, "Word diary: gather 20 words and phrases that belong to your novella's world"],
      ]),
    ],
    deliverables: [
      { id: "m5d1", text: "Five pressure scenes drafted" },
      { id: "m5d2", text: "All five scenes revised for dialogue and line-level mechanics" },
      { id: "m5d3", text: "Opening page written for each of the three novella premises" },
      { id: "m5d4", text: "Novella premise chosen: one sentence + one paragraph" },
    ],
    selfCheck: [
      "Does every one of your scenes change something?",
      "Could a reader say what each scene is “really” about, beneath the dialogue?",
      "Read a page aloud. Do the sentence endings vary, or does every line land on था?",
    ],
    pitfalls: [
      "Polishing sentences in scenes that don't work structurally.",
      "Dialogue in which characters explain their feelings to each other.",
      "Choosing the premise that sounds impressive over the one you can't stop thinking about.",
    ],
  },

  /* ============================ MONTH 6 ============================ */
  {
    n: 6,
    quarter: 2,
    title: "Designing the Novella",
    altTitle: "लघु उपन्यास की रूपरेखा",
    question: "How do you design a long story before writing it, without killing it?",
    summary:
      "You build the blueprint for a 20,000–30,000-word लघु उपन्यास: premise, theme, a web of characters, the seven key steps, setting and its language, a beat outline and a chapter plan. Then you write chapter 1. No Hindi book teaches story design step by step, so this month the concept cards are your manual and two Hindi novellas are your models.",
    concepts: [
      { term: "What a novella is", explain: "Usually 20,000–40,000 words: a लघु उपन्यास or a very long कहानी. One main line, few points of view, compressed time, a single deep change. Long enough to hold a world, short enough to finish and revise in a year." },
      { term: "Designing principle", explain: "The organising idea that makes this story unique. सूरज का सातवाँ घोड़ा: a narrator tells linked love stories over several afternoons. राजा निरबंसिया: a folk tale and a modern marriage braided together. Not just what happens, but the shape it happens in." },
      { term: "Theme as a question", explain: "Not “greed is bad” but “what does it cost to want more?” Your characters argue the question through their actions; the ending answers it without a speech." },
      { term: "Character web", explain: "Characters are defined against each other. Each supporting character should show a different answer to the protagonist's problem." },
      { term: "The seven key steps", explain: "A diagnostic spine (from John Truby): weakness/need, desire, opponent, plan, battle, self-revelation, new equilibrium. Write one sentence for each." },
      { term: "Opponent", explain: "The best opponent wants the same thing as the protagonist, or attacks their exact weakness. It can be a person, a family, a system or the self." },
      { term: "Beat outline → chapter plan", explain: "First list 20–25 key beats (events that change things). Then group them into 8–12 chapters with a purpose and an ending hook each." },
      { term: "Room for discovery", explain: "Outline the load-bearing walls (inciting incident, midpoint, climax, ending) and leave the rooms to be furnished while drafting." },
    ],
    shelves: [
      {
        label: "Craft · novellas as models",
        items: [
          { title: "सूरज का सातवाँ घोड़ा", author: "धर्मवीर भारती", what: "Weeks 1–2: read it as a design document.", why: "It's openly about how stories are built: who tells, in what order, and why.", bookId: "hi-suraj" },
          { title: "राजा निरबंसिया", author: "कमलेश्वर", what: "Week 3.", why: "Two stories braided into one. Could your novella have a second line that mirrors the first?", url: HINDWI, bookId: "hi-kamleshwar" },
          { title: "The concept cards on this page", what: "Every week.", why: "Your design manual this month. Apply each card to your own blueprint." },
        ],
      },
      {
        label: "Talks & adaptations",
        items: [
          { title: "सूरज का सातवाँ घोड़ा (1992)", author: "श्याम बेनेगल", what: "Weeks 1–2, in two parts.", why: "How a film handles a frame narrative. Compare its structure with the book's.", url: yt("सूरज का सातवाँ घोड़ा श्याम बेनेगल") },
          SANGAT,
          HINDWI_PODCAST,
        ],
      },
      {
        label: "Fiction",
        items: [
          { title: "सूरज का सातवाँ घोड़ा", author: "धर्मवीर भारती", what: "Short novel (≈100 pp), weeks 1–2.", why: "Counts as fiction too.", bookId: "hi-suraj" },
          { title: "राजा निरबंसिया + one story from एक दुनिया समानांतर", author: "कमलेश्वर", what: "Week 3.", why: "Long-story structure.", bookId: "hi-kamleshwar" },
        ],
      },
      {
        label: "Language · 1 h",
        items: [
          { title: "समांतर कोश / अरविंद लैक्सिकन", author: "अरविंद कुमार", what: "Set it up in week 1.", why: "For the exact word, not the grander one.", url: "https://arvindlexicon.com/", bookId: "hi-samantar" },
          { title: "Your novella's glossary", what: "Week 2: 20–30 words, idioms and forms of address from its world.", why: "Decide now which Hindi your novella speaks: which dialect, how much Urdu, how much English." },
        ],
      },
    ],
    readingQuestions: [
      "What is each novella's designing principle?",
      "In सूरज का सातवाँ घोड़ा, why are the stories told in that order?",
      "How does राजा निरबंसिया make its two stories comment on each other?",
      "How is a novella different in shape from a short story and from a novel?",
    ],
    weeks: [
      week(6, 1, "Premise and people", [
        ["craft", 0.75, "Apply this month's concept cards to सूरज का सातवाँ घोड़ा", "Designing principle, theme question, the seven steps. Can you find them?"],
        ["lecture", 0.75, "सूरज का सातवाँ घोड़ा (film) — first part"],
        ["reflect", 0.5, "Write your theme as a question, not a statement"],
        ["fiction", 2.5, "सूरज का सातवाँ घोड़ा, first half"],
        ["writing", 2, "Premise work: designing principle + one-line premise + theme question"],
        ["writing", 2.5, "Character web: protagonist, opponent, 2–3 supporting, one page each", "For each supporting character: how do they answer the protagonist's problem differently?"],
        ["language", 1, "Set up Arvind Lexicon; find three sharper words for your premise sentence"],
      ]),
      week(6, 2, "Spine and world", [
        ["craft", 0.75, "Map सूरज's frame: who tells which story, and why in that order?"],
        ["lecture", 0.75, "सूरज का सातवाँ घोड़ा (film) — second part"],
        ["reflect", 0.5, "Check that your opponent attacks your protagonist's exact weakness"],
        ["fiction", 2.5, "Finish सूरज का सातवाँ घोड़ा"],
        ["writing", 2, "Write your novella's seven key steps"],
        ["writing", 2.5, "Setting sheet (2 pages)", "Place, time, social world, money, who has power, sounds and smells — and which Hindi this world speaks. Only what puts pressure on your characters."],
        ["language", 1, "Build your novella's glossary", "20–30 words, idioms and forms of address. How much Urdu? How much English? Which dialect?"],
      ]),
      week(6, 3, "Beats and chapters", [
        ["craft", 0.75, "Close reading: राजा निरबंसिया — how are the two stories braided?"],
        ["lecture", 0.75, "One हिन्दवी संगत interview"],
        ["reflect", 0.5, "Mark the load-bearing beats: inciting incident, midpoint, climax, ending"],
        ["fiction", 2.5, "राजा निरबंसिया + one story from एक दुनिया समानांतर"],
        ["writing", 2.5, "Beat outline: 20–25 beats"],
        ["writing", 2, "Chapter plan: 8–12 chapters, each with a purpose and an ending hook"],
        ["language", 1, "अच्छी हिंदी — next chapter"],
      ]),
      week(6, 4, "Chapter 1", [
        ["craft", 0.75, "Check your blueprint against the seven steps"],
        ["lecture", 0.75, "हिन्दवी पॉडकास्ट — one episode"],
        ["reflect", 0.5, "Mid-year review", "What's working, what's not, and is 10 hours a week realistic? Adjust honestly."],
        ["fiction", 2.5, "Free Hindi reading — anything you like"],
        ["writing", 2.5, "Draft chapter 1 of the novella"],
        ["writing", 2, "Finish chapter 1; sketch the first scene of chapter 2", "Stop mid-scene so drafting starts easily next month."],
        ["language", 1, "Read chapter 1 aloud; note (don't fix) what sounds stiff"],
      ]),
    ],
    deliverables: [
      { id: "m6d1", text: "Premise, designing principle and theme question" },
      { id: "m6d2", text: "Character web: protagonist, opponent, 2–3 supporting" },
      { id: "m6d3", text: "Seven key steps written for your novella" },
      { id: "m6d4", text: "Setting sheet (≈2 pages) and the novella's glossary" },
      { id: "m6d5", text: "Beat outline (20–25 beats) and chapter plan (8–12 chapters)" },
      { id: "m6d6", text: "Chapter 1 drafted" },
      { id: "m6d7", text: "Mid-year review written" },
    ],
    selfCheck: [
      "Can you pitch the novella in one Hindi sentence that makes someone ask “फिर?”",
      "Does your opponent attack your protagonist's weakness?",
      "Do you know your ending? (It can change, but aim for something.)",
    ],
    pitfalls: [
      "Endless world-building instead of drafting. The blueprint should take a month, not a quarter.",
      "A theme you could put on a poster. Make it a real question you don't know the answer to.",
    ],
  },
];
