import type { Month } from "../../lib/types.ts";
import { HINDWI, week, yt } from "../helpers.ts";

export const SANGAT = { title: "हिन्दवी — संगत (interviews)", what: "Long conversations with Hindi writers. Pick one per month; watch in 45-minute pieces.", why: "Writers talking about how they work. The nearest Hindi equivalent of a craft lecture series.", url: yt("हिन्दवी संगत") };
export const HINDWI_PODCAST = { title: "हिन्दवी पॉडकास्ट", what: "Short episodes, for weeks when you can only listen.", why: "Poets, critics and fiction writers in conversation.", url: "https://podcasts.apple.com/us/podcast/hindwi-podcast/id1647326074" };

export const Q1: Month[] = [
  /* ============================ MONTH 1 ============================ */
  {
    n: 1,
    quarter: 1,
    title: "Reading Like a Writer",
    altTitle: "लेखक की तरह पढ़ना",
    question: "What makes a story a story — and why does a reader keep turning the page?",
    summary:
      "You learn to read Hindi fiction with a writer's attention, starting with Premchand, and you write your first two complete stories in Hindi. They don't have to be good. They have to be finished. You also set up your tools: a Hindi keyboard you can type fast on, and a word diary you'll keep all year.",
    concepts: [
      { term: "Situation vs. story", explain: "A situation is a state of affairs: two poor men, a woman dying in the hut. The story is the change under pressure: in कफ़न, they're given money for her shroud and drink it away. If nothing changes, you have a sketch, not a story." },
      { term: "Premise", explain: "The engine in one sentence: who wants what, what stands in the way, and why it matters. Practise it in Hindi: “___ चाहता/चाहती है ___, लेकिन ___, इसलिए ___ दाँव पर है।”" },
      { term: "Conflict and stakes", explain: "Conflict is opposition to desire. Stakes are what's lost if the character fails. In पूस की रात the stake is a crop, but what Halku actually loses is something harder to name." },
      { term: "Causality: “इसलिए / लेकिन”, not “और फिर”", explain: "Events joined by “and then” feel episodic. Events joined by “therefore” or “but” feel inevitable and surprising at once. Test every story you read and write this way." },
      { term: "The reader's mind", explain: "A story happens in the reader's head, moment by moment. Track your own reading: where you leaned in, where you got bored, what questions kept you going. That is your raw data as a writer." },
      { term: "Showing vs. telling", explain: "Showing renders a moment in scene; telling summarises. Early Premchand often tells you what to think. कफ़न shows and refuses to comment. Watch that shift across his stories." },
      { term: "Written Hindi is its own skill", explain: "Speaking Hindi fluently doesn't mean writing it well. Literary Hindi has its own rhythm, vocabulary and spelling. You build it the way you build any skill: reading closely, copying out good prose, and reading your own pages aloud." },
    ],
    shelves: [
      {
        label: "Craft · close reading",
        items: [
          { title: "Close reading, page by page", what: "Each week, read one Premchand story a page at a time. After each page, stop and write: what do I expect now? What am I curious about?", why: "There's no Hindi book that walks you through stories the way Saunders does in English, so you use his method on Hindi stories yourself. The method is the textbook." },
          { title: "साहित्य का उद्देश्य · कहानी-कला", author: "प्रेमचंद", what: "Weeks 3–4.", why: "The master of the Hindi short story on what literature and the story are for.", url: HINDWI, bookId: "hi-premchand-essays" },
          { title: "चेख़व की कहानियाँ (हिंदी अनुवाद)", author: "अंतोन चेख़व", what: "Optional, week 4: one story in any Hindi translation.", why: "Chekhov shaped the modern short story everywhere, Hindi included.", bookId: "hi-chekhov" },
        ],
      },
      {
        label: "Talks & adaptations",
        items: [
          { title: "सद्गति (1981)", author: "सत्यजित राय, from Premchand's story", what: "A short TV film. Weeks 1–2.", why: "Read the story, then watch the film. What does the camera show that the story only tells, and what does it lose?", url: yt("सद्गति सत्यजित राय") },
          { title: "तहरीर मुंशी प्रेमचंद की", author: "गुलज़ार (Doordarshan)", what: "One or two episodes from stories you've read. Week 4.", why: "Another reader's interpretation of the same stories.", url: yt("तहरीर मुंशी प्रेमचंद की") },
          SANGAT,
        ],
      },
      {
        label: "Fiction",
        items: [
          { title: "कफ़न · पूस की रात · ईदगाह · ठाकुर का कुआँ", author: "प्रेमचंद", what: "Weeks 1–2. Free on Hindwi.", why: "Moral horror without commentary; one night, one field, one decision; tenderness; injustice in a single scene.", url: HINDWI, bookId: "hi-premchand" },
          { title: "सद्गति · नमक का दारोगा · बड़े भाई साहब · शतरंज के खिलाड़ी", author: "प्रेमचंद", what: "Weeks 3–4.", why: "The range of one writer: tragedy, idealism, comedy, satire.", url: HINDWI, bookId: "hi-premchand" },
        ],
      },
      {
        label: "Language · 1 h",
        items: [
          { title: "A Hindi keyboard you can type fast on", what: "macOS: Settings → Keyboard → Input Sources → Hindi – Transliteration.", why: "If typing is slow, writing will be slow. Fix it in week 1." },
          { title: "शब्द-डायरी (word diary)", what: "Word, meaning, the sentence it came from. About 10 a week, all year.", why: "Your active literary vocabulary grows only if you collect it on purpose." },
          { title: "देवनागरी लिपि तथा हिंदी वर्तनी का मानकीकरण", author: "केंद्रीय हिंदी निदेशालय", what: "Week 4: the sections on anusvar, chandrabindu and nukta.", why: "Pick your spelling rules once and stick to them.", bookId: "hi-vartani" },
        ],
      },
    ],
    readingQuestions: [
      "What does the protagonist want, and when did you first know it?",
      "On which page did you become invested? What caused it?",
      "Where does Premchand comment, and where does he stay silent? Which is stronger?",
      "What is different between the first page and the last?",
      "Which single moment would you keep if you could keep only one?",
    ],
    weeks: [
      week(1, 1, "Set up and start reading like a writer", [
        ["craft", 0.75, "Close reading: कफ़न, a page at a time", "After each page write: what do I expect now? What am I curious about?"],
        ["lecture", 0.75, "Watch सद्गति — first half"],
        ["reflect", 0.5, "Set up a simple writing notebook", "One folder or doc with: Ideas · Exercises · Stories · Reading notes. 30 minutes max — don't build a system, build a habit."],
        ["fiction", 2.5, "Read कफ़न twice, then पूस की रात"],
        ["writing", 2, "Premise sprint: write 10 premises in Hindi", "Use the form “___ चाहता/चाहती है ___, लेकिन ___।” Draw from things you've seen, overheard or can't stop thinking about."],
        ["writing", 2.5, "Free-write 500 words each on your two favourite premises", "In Hindi, no editing. Don't stop to hunt for a word: write [?] and keep going."],
        ["language", 1, "Set up a Hindi keyboard; type out one page of कफ़न", "macOS: Settings → Keyboard → Input Sources → Hindi – Transliteration. Typing a master's page builds speed and ear at once."],
      ]),
      week(1, 2, "Your first complete story", [
        ["craft", 0.75, "Close reading: पूस की रात — where exactly does the story turn?"],
        ["lecture", 0.75, "Watch सद्गति — second half", "Note one thing the film adds and one thing it loses."],
        ["reflect", 0.5, "Five-line breakdown of कफ़न", "Want · obstacle · turn · change · why it worked on you."],
        ["fiction", 2.5, "ईदगाह + ठाकुर का कुआँ", "Mark where the tension rises. Where does Premchand summarise, and where does he slow down?"],
        ["writing", 2, "Draft Story #1: opening and middle (1,000–1,500 words in all)"],
        ["writing", 2.5, "Finish Story #1, even if the ending is weak", "A weak ending you can revise beats a perfect beginning you abandoned."],
        ["language", 1, "Start your शब्द-डायरी", "Every word from this week's reading you'd like to own: word, meaning, the sentence it came from."],
      ]),
      week(1, 3, "Your second story", [
        ["craft", 0.75, "Premchand's essay साहित्य का उद्देश्य"],
        ["lecture", 0.75, "One हिन्दवी संगत interview — first 45 minutes"],
        ["reflect", 0.5, "Compare कफ़न and ईदगाह", "One brutal, one tender, same writer. How does each ending make you feel, and how is that done?"],
        ["fiction", 2.5, "सद्गति + नमक का दारोगा"],
        ["writing", 2.5, "Draft Story #2 from your second premise"],
        ["writing", 2, "Finish Story #2"],
        ["language", 1, "Read Story #1 aloud", "Mark every sentence where you stumble. That's where spoken and written Hindi part ways."],
      ]),
      week(1, 4, "First revision and first look back", [
        ["craft", 0.75, "Premchand on the story (कहानी-कला) + one Chekhov story in Hindi"],
        ["lecture", 0.75, "तहरीर मुंशी प्रेमचंद की — one episode"],
        ["reflect", 0.5, "Month 1 reflection", "Easiest? Hardest? Which story has more life? Where did Hindi itself slow you down: vocabulary, spelling, typing?"],
        ["fiction", 2.5, "बड़े भाई साहब + शतरंज के खिलाड़ी"],
        ["writing", 2.5, "Revise Story #1 once", "Read it aloud. Cut 10%. Make the ending land on an image or action, not an explanation."],
        ["writing", 2, "Read Story #2 a page at a time; write 3 new premises from daily life"],
        ["language", 1, "Spelling: read the वर्तनी standard on anusvar, chandrabindu and nukta", "Decide your rules (हिंदी or हिन्दी? ज़ or ज?) and write them on one page. Keep them all year."],
      ]),
    ],
    deliverables: [
      { id: "m1d1", text: "10 premises in Hindi in your notebook" },
      { id: "m1d2", text: "Story #1 drafted and revised once" },
      { id: "m1d3", text: "Story #2 drafted" },
      { id: "m1d4", text: "Reading notes on eight Premchand stories" },
      { id: "m1d5", text: "Hindi keyboard working, word diary started, spelling rules written down" },
    ],
    selfCheck: [
      "Can you state each story's premise in one Hindi sentence?",
      "Can you point to the moment each story turns?",
      "Can you explain the difference between a situation and a story, using कफ़न?",
    ],
    pitfalls: [
      "Thinking in English and translating. If a sentence arrives in English, rewrite the thought, not the words.",
      "Over-formal, तत्सम-heavy Hindi because it feels “literary”. Write how your characters would think and speak.",
      "Editing while drafting. Draft forward; fix on the revision pass.",
    ],
  },

  /* ============================ MONTH 2 ============================ */
  {
    n: 2,
    quarter: 1,
    title: "Plot: Cause, Effect, Escalation",
    altTitle: "कथानक: कारण, परिणाम, चढ़ाव",
    question: "How do events become a plot that pulls the reader forward?",
    summary:
      "You take Hindi stories apart beat by beat, outline a story before writing it, write another with no outline at all, and find out which way of working suits you. You'll also line up two readers who read Hindi fiction, for feedback from next month.",
    concepts: [
      { term: "Story vs. plot", explain: "“राजा मरा, फिर रानी मरी” is a sequence. “राजा मरा, और शोक में रानी भी मर गई” is a plot. (The example is E.M. Forster's.) Plot is causality plus meaning." },
      { term: "Inciting incident", explain: "The event that knocks the protagonist's life off balance and sets the story's question. In पंचलाइट it's the moment the new lantern arrives and nobody knows how to light it." },
      { term: "Promise → progress → payoff", explain: "The opening makes promises about what kind of story this is; the middle shows measurable progress or regression; the ending pays off the promise, ideally from an unexpected angle." },
      { term: "Try–fail cycles", explain: "The character tries, fails (or succeeds at a cost), and tries again with more at stake. Each failure should teach the character, or the reader, something." },
      { term: "Setup and payoff", explain: "In उसने कहा था, a boy's teasing question in an Amritsar bazaar — “तेरी कुड़माई हो गई?” — pays off decades later on a battlefield. Anything that matters at the end must be planted earlier." },
      { term: "Order of events vs. order of telling", explain: "उसने कहा था opens in the past and jumps forward. The telling order is a choice. List any story's events in time order, then in telling order, and ask why the writer chose the second." },
      { term: "Outliner vs. discovery writer", explain: "Some writers plan, some find the story by writing it. Most sit in between. You'll test both this month instead of guessing." },
    ],
    shelves: [
      {
        label: "Craft · criticism",
        items: [
          { title: "कहानी : स्वरूप और संवेदना", author: "राजेंद्र यादव", what: "One chapter a week, Months 2–3.", why: "A नई कहानी founder on what a story is. It's criticism, not a manual: after each chapter, write down one thing you can use.", bookId: "hi-yadav" },
          { title: "Close reading: उसने कहा था", what: "Week 2: its timeline vs. its telling order.", why: "The best Hindi lesson in structure and payoff." , bookId: "hi-guleri" },
        ],
      },
      {
        label: "Talks & adaptations",
        items: [
          { title: "तीसरी कसम (1966)", author: "बासु भट्टाचार्य, from रेणु's मारे गए गुलफ़ाम", what: "Weeks 2–4, in three parts.", why: "A short story stretched into a feature film. What did the film have to invent? Where did it add plot, and where did it slow down?", url: yt("तीसरी कसम 1966 फ़िल्म") },
          SANGAT,
        ],
      },
      {
        label: "Fiction",
        items: [
          { title: "उसने कहा था", author: "चंद्रधर शर्मा गुलेरी", what: "Week 1.", why: "Flashback structure; a promise kept to the death.", url: HINDWI, bookId: "hi-guleri" },
          { title: "पंचलाइट · मारे गए गुलफ़ाम", author: "फणीश्वरनाथ रेणु", what: "Week 2.", why: "A comic plot around one object; a long story built from a cart journey.", url: HINDWI, bookId: "hi-renu" },
          { title: "आकाशदीप · भोलाराम का जीव", author: "जयशंकर प्रसाद · हरिशंकर परसाई", what: "Week 3.", why: "One romantic, one satirical: how does each build to its turn?", url: HINDWI, bookId: "hi-prasad" },
          { title: "कोसी का घटवार", author: "शेखर जोशी", what: "Week 4.", why: "Small events, a large past, a quiet devastating ending.", url: HINDWI, bookId: "hi-shekhar-joshi" },
        ],
      },
      {
        label: "Language · 1 h",
        items: [
          { title: "अच्छी हिंदी", author: "रामचंद्र वर्मा", what: "A chapter every other week, all year.", why: "A usage guide to careful Hindi prose. Take the principles, not every rule.", bookId: "hi-achhi-hindi" },
          { title: "Copywork", what: "Copy one page of a master by hand.", why: "You feel the rhythm of a sentence from inside when you copy it." },
        ],
      },
    ],
    readingQuestions: [
      "What is the inciting incident, and where does it happen?",
      "List the story's events. Are they joined by “इसलिए/लेकिन” or by “और फिर”?",
      "Where is the biggest reversal?",
      "What was planted early that pays off at the end?",
    ],
    weeks: [
      week(2, 1, "Taking stories apart", [
        ["craft", 0.75, "राजेंद्र यादव, कहानी : स्वरूप और संवेदना — first chapter", "Write one usable idea from it in a line."],
        ["lecture", 0.75, "One हिन्दवी संगत interview"],
        ["reflect", 0.5, "Beat-map उसने कहा था", "One line per scene; mark each place the stakes rise."],
        ["fiction", 2.5, "Read उसने कहा था twice"],
        ["writing", 2, "Reverse-engineer a film you love", "One-sentence premise, 12–15 beats, turning points, climax. From memory, in Hindi."],
        ["writing", 2.5, "Three outlines for ONE premise", "Take a Month 1 premise. Write three different 12-beat outlines: a different ending, inciting incident or protagonist each time."],
        ["language", 1, "अच्छी हिंदी — first chapter; 10 words into the diary"],
      ]),
      week(2, 2, "The outlined story", [
        ["craft", 0.75, "Close reading: उसने कहा था — its timeline vs. its telling order"],
        ["lecture", 0.75, "तीसरी कसम — first part"],
        ["reflect", 0.5, "Choose your strongest outline and note why", "Which outline makes the biggest promise?"],
        ["fiction", 2.5, "पंचलाइट + मारे गए गुलफ़ाम", "Mark the turning points in each."],
        ["writing", 2, "Draft Story #3 from your outline (1,500–2,000 words), part 1"],
        ["writing", 2.5, "Finish Story #3"],
        ["language", 1, "Copywork: copy one page of रेणु by hand", "Notice how dialect and narration sit side by side."],
      ]),
      week(2, 3, "The discovered story", [
        ["craft", 0.75, "राजेंद्र यादव — next chapter"],
        ["lecture", 0.75, "तीसरी कसम — second part"],
        ["reflect", 0.5, "What did the film invent that the story didn't need?"],
        ["fiction", 2.5, "आकाशदीप + भोलाराम का जीव"],
        ["writing", 2.5, "Story #4, discovery-written: no outline at all", "Start with a character in a place with a problem. Follow it."],
        ["writing", 2, "Continue Story #4"],
        ["language", 1, "अच्छी हिंदी — next chapter; check Story #3 against it"],
      ]),
      week(2, 4, "Compare your methods; line up readers", [
        ["craft", 0.75, "राजेंद्र यादव — next chapter"],
        ["lecture", 0.75, "तीसरी कसम — finish"],
        ["reflect", 0.5, "Outliner or discovery writer? + recruit 2 readers", "Half a page on which process felt more alive. Ask two people who actually read Hindi fiction (not just speak Hindi) to read your work from next month."],
        ["fiction", 2.5, "कोसी का घटवार", "Read the last page twice."],
        ["writing", 2, "Finish Story #4"],
        ["writing", 2.5, "Revise Story #3 for causality", "Every scene should connect to the next with “इसलिए” or “लेकिन”. Cut or fix any that don't."],
        ["language", 1, "Word diary: use five new words in one paragraph", "Naturally, or not at all. A word that sticks out is worse than a plain one."],
      ]),
    ],
    deliverables: [
      { id: "m2d1", text: "Beat maps of one film and उसने कहा था" },
      { id: "m2d2", text: "Three different outlines for one premise" },
      { id: "m2d3", text: "Story #3 (outlined), drafted and revised for causality" },
      { id: "m2d4", text: "Story #4 (discovery-written), drafted" },
      { id: "m2d5", text: "Half-page note on your process preference" },
      { id: "m2d6", text: "Two readers of Hindi fiction lined up" },
    ],
    selfCheck: [
      "Can you name the inciting incident, the main reversal and the climax of Story #3?",
      "Did the outlined or the discovered story come out stronger? Do you know why?",
      "Can you explain setup and payoff using उसने कहा था?",
    ],
    pitfalls: [
      "Treating structure as a rulebook. It's a diagnostic tool.",
      "Skipping the discovery-written story because outlining feels safer. You need the comparison.",
      "Reading criticism instead of writing. Yadav is 45 minutes a week, no more.",
    ],
  },

  /* ============================ MONTH 3 ============================ */
  {
    n: 3,
    quarter: 1,
    title: "Character: Desire, Fear, Choice",
    altTitle: "चरित्र: चाह, डर, चुनाव",
    question: "What makes invented people feel like real human beings?",
    summary:
      "Characters become real when what they want, what they fear and what they believe force them into choices. You build characters, test them in pressure scenes, write a character-driven story and a flash story, and get your first outside feedback.",
    concepts: [
      { term: "Want vs. need", explain: "The want is conscious and external (respectability, a job, a marriage). The need is what they actually lack, often invisible to them. The best stories set the two against each other." },
      { term: "The belief the character lives by", explain: "In त्यागपत्र, the narrator believes in respectability and duty. Every choice he makes comes from that belief, and the novel tests what it cost the aunt he abandoned." },
      { term: "Character is revealed by choice under pressure", explain: "In चीफ़ की दावत, Shamnath's every decision about where to hide his mother during the dinner tells you who he is. No narrator has to judge him." },
      { term: "Contradiction", explain: "Real people contain opposites: the generous miser, the cruel idealist. A contradiction makes a character feel alive rather than designed." },
      { term: "Iceberg backstory", explain: "Know far more than you show. Backstory belongs in the story only when it changes the meaning of a present moment." },
      { term: "Register is character", explain: "Hindi gives you tools English doesn't: आप / तुम / तू, तत्सम vs. everyday words, Urdu vocabulary, English words, dialect. Who says “मालूम नहीं”, who says “पता नहीं”, who says “I don't know”? Register tells the reader class, age, region and mood before content does." },
      { term: "Methods of characterisation", explain: "Appearance, action, speech, thought, and how others react. Action and speech carry the most weight. A narrator's summary carries the least." },
    ],
    shelves: [
      {
        label: "Craft · criticism & memoir",
        items: [
          { title: "कहानी : स्वरूप और संवेदना", author: "राजेंद्र यादव", what: "Weeks 1–2: continue a chapter a week.", why: "Keep pulling out one usable idea per chapter.", bookId: "hi-yadav" },
          { title: "एक कहानी यह भी", author: "मन्नू भंडारी", what: "Weeks 3–4: the opening chapters.", why: "A writer's account of the people around her: where characters come from.", bookId: "hi-mannu-memoir" },
        ],
      },
      {
        label: "Talks & adaptations",
        items: [
          { title: "शतरंज के खिलाड़ी (1977)", author: "सत्यजित राय, from Premchand's story", what: "Weeks 1–2, in two parts.", why: "Two noblemen defined by one obsession while their kingdom falls. Compare how film and story reveal character.", url: yt("शतरंज के खिलाड़ी 1977") },
          SANGAT,
          HINDWI_PODCAST,
        ],
      },
      {
        label: "Fiction",
        items: [
          { title: "त्यागपत्र", author: "जैनेंद्र कुमार", what: "Whole short novel (≈100 pp), weeks 1–3.", why: "Character, guilt and self-deception. Everything important happens in what the narrator avoids saying.", bookId: "hi-tyagpatra" },
          { title: "चीफ़ की दावत", author: "भीष्म साहनी", what: "Week 2.", why: "Character revealed entirely through choices.", url: HINDWI, bookId: "hi-sahni" },
          { title: "दोपहर का भोजन", author: "अमरकांत", what: "Week 4.", why: "A mother, a meal, and everything she doesn't say.", url: HINDWI, bookId: "hi-amarkant" },
        ],
      },
      {
        label: "Language · 1 h",
        items: [
          { title: "Register map", what: "Week 1: how each of your characters would say the same sentence.", why: "Register is the cheapest, strongest characterisation tool in Hindi." },
          { title: "अच्छी हिंदी", author: "रामचंद्र वर्मा", what: "Next chapter.", why: "Keep going.", bookId: "hi-achhi-hindi" },
        ],
      },
    ],
    readingQuestions: [
      "What does the narrator of त्यागपत्र want, and what does he need?",
      "Find three moments where he chooses respectability over feeling. What does each cost?",
      "In चीफ़ की दावत, how is Shamnath characterised without the narrator judging him?",
      "How does each character's way of speaking tell you who they are?",
    ],
    weeks: [
      week(3, 1, "Building characters", [
        ["craft", 0.75, "राजेंद्र यादव — next chapter"],
        ["lecture", 0.75, "शतरंज के खिलाड़ी — first half"],
        ["reflect", 0.5, "Note three moments in त्यागपत्र where the narrator doesn't say what he feels"],
        ["fiction", 2.5, "त्यागपत्र, first third"],
        ["writing", 2, "Three character sketches, one page each", "Protagonist, antagonist, a secondary character. For each: want, fear, contradiction, a secret, what they'd never do, and what would make them do it."],
        ["writing", 2.5, "Scene: a character lies", "The reader should know it's a lie; the other character shouldn't."],
        ["language", 1, "Register map for your three characters", "Write how each would say: “I don't know”, “sit down”, “I'm sorry”. Who uses आप, who uses तू? Who drops English words?"],
      ]),
      week(3, 2, "Pressure scenes", [
        ["craft", 0.75, "Close reading: चीफ़ की दावत — list each choice Shamnath makes and what it reveals"],
        ["lecture", 0.75, "शतरंज के खिलाड़ी — second half"],
        ["reflect", 0.5, "Find where your scenes rely on telling instead of choice"],
        ["fiction", 2.5, "त्यागपत्र, second third + चीफ़ की दावत"],
        ["writing", 2, "Scene: a moral choice that costs something either way"],
        ["writing", 2.5, "Scene: two characters want opposite things and neither says so directly"],
        ["language", 1, "अच्छी हिंदी — next chapter; word diary"],
      ]),
      week(3, 3, "The character-driven story", [
        ["craft", 0.75, "एक कहानी यह भी — opening chapters"],
        ["lecture", 0.75, "One हिन्दवी संगत interview"],
        ["reflect", 0.5, "Pick the sketch with the strongest contradiction for Story #5"],
        ["fiction", 2.5, "Finish त्यागपत्र"],
        ["writing", 2, "Draft Story #5 (≈2,000 words), part 1", "Build it from one of your sketches. The plot should come from the character's want against their belief."],
        ["writing", 2.5, "Finish Story #5"],
        ["language", 1, "Read Story #5 aloud; fix register slips", "A character who would never say “परंतु” shouldn't say it."],
      ]),
      week(3, 4, "First feedback and a flash story", [
        ["craft", 0.75, "Re-read all five stories; rank them and write why"],
        ["lecture", 0.75, "हिन्दवी पॉडकास्ट — one episode"],
        ["reflect", 0.5, "Quarter 1 review", "What can you do now that you couldn't in Month 1? Biggest weakness? Has written Hindi got easier?"],
        ["fiction", 2.5, "दोपहर का भोजन + one contemporary Hindi story", "Try Hindwi or a recent issue of a Hindi literary magazine."],
        ["writing", 2.5, "Revise Story #5, then send your two best stories to your readers", "Ask three questions: Where were you bored? Where were you confused? What stayed with you?"],
        ["writing", 2, "Flash story: 750–1,000 words in a single scene", "One room, one conversation, one turn."],
        ["language", 1, "Copywork: one page of भीष्म साहनी"],
      ]),
    ],
    deliverables: [
      { id: "m3d1", text: "Three one-page character sketches, with a register map" },
      { id: "m3d2", text: "Three pressure scenes (lie, moral choice, opposing wants)" },
      { id: "m3d3", text: "Story #5, character-driven, ≈2,000 words, revised" },
      { id: "m3d4", text: "Two stories sent to readers with your three questions" },
      { id: "m3d5", text: "Flash story (750–1,000 words) written" },
      { id: "m3d6", text: "Quarter 1 review written" },
    ],
    selfCheck: [
      "Can you state your protagonist's want, need and belief, and show where they collide?",
      "In each scene, does the character make a choice that reveals them?",
      "Could a reader tell your characters apart by their speech alone?",
    ],
    pitfalls: [
      "Ten-page character questionnaires. They feel productive and rarely are.",
      "Every character speaking the narrator's Hindi.",
      "Defending your work to your readers. Just listen and take notes.",
    ],
  },
];
