import type { Month, Resource } from "../../lib/types.ts";
import { WRITING_EXCUSES, gutenberg, week, yt } from "../helpers.ts";

/** English-track months are written with four fixed resource groups, then mapped to shelves. */
type EnMonth = Omit<Month, "shelves"> & {
  craft: Resource[];
  lectures: Resource[];
  fiction: Resource[];
  stories: Resource[];
};

const RAW: EnMonth[] = [
  /* ============================ MONTH 1 ============================ */
  {
    n: 1,
    quarter: 1,
    title: "Reading Like a Writer",
    question: "What makes a story a story — and why does a reader keep turning the page?",
    summary:
      "This month you learn to read with a writer's attention and you write your first two complete short stories. They do not have to be good. They have to be finished. Finishing is a skill, and you start practising it now.",
    concepts: [
      { term: "Situation vs. story", explain: "A situation is a state of affairs (a lonely old fisherman). A story is a change under pressure (he hooks a fish too big to land, and it costs him everything). If nothing changes, you have a sketch, not a story." },
      { term: "Premise", explain: "The engine in one sentence: who wants what, what stands in the way, and why it matters. Form to practise: “A [character] wants [goal], but [obstacle], so [what they risk].”" },
      { term: "Conflict and stakes", explain: "Conflict is opposition to desire. Stakes are what's lost if the character fails. Low stakes can still be high for the character, and that's what counts." },
      { term: "Causality: “therefore / but”, not “and then”", explain: "Events joined by “and then” feel episodic. Events joined by “therefore” or “but” feel inevitable and surprising at once. Test every story you read and write this way." },
      { term: "Escalation", explain: "Each section should raise the pressure or deepen the meaning. Saunders asks of every page: what does the reader expect now, and is the story honouring or subverting it?" },
      { term: "The reader's mind", explain: "A story happens in the reader's head, moment by moment. Track your own reading: where you leaned in, where you got bored, what questions kept you going. That is your raw data as a writer." },
      { term: "Showing vs. telling (first pass)", explain: "Showing renders a moment in scene (action, dialogue, detail). Telling summarises. Both are tools. Beginners usually tell the emotional moments and show the boring ones; reverse that." },
    ],
    craft: [
      { title: "A Swim in a Pond in the Rain", author: "George Saunders", what: "Introduction, “In the Cart” (Chekhov), “The Singers” (Turgenev), “The Darling” (Chekhov), with Saunders' essays on each.", why: "The best book there is on reading short stories as a writer. Saunders takes you through a story a page at a time and asks what the writer is doing to your mind.", bookId: "saunders" },
    ],
    lectures: [
      { title: "Brandon Sanderson — BYU 2020, Lecture 1: Introduction", what: "Watch across weeks 1–2 (≈75 min).", why: "How a working novelist thinks about the craft, and the 'outliner vs. discovery writer' spectrum you'll test on yourself in Month 2.", url: yt("Brandon Sanderson lecture 2020 introduction") },
      { title: "Writing Excuses (podcast)", what: "2–3 short episodes on ideas and premise (search the archive).", why: "Fifteen-minute craft conversations. Easy to fit around work.", url: WRITING_EXCUSES },
    ],
    fiction: [
      { title: "The Old Man and the Sea", author: "Ernest Hemingway", what: "Whole novella (≈110 pages).", why: "A one-line premise sustained for a hundred pages. Study escalation and how much emotion plain sentences can carry.", bookId: "old-man" },
      { title: "Saunders' stories", author: "Chekhov, Turgenev", what: "Read inside A Swim in a Pond in the Rain.", why: "These count as fiction reading as well as craft study.", bookId: "saunders" },
    ],
    stories: [
      { title: "“The Lottery”", author: "Shirley Jackson", what: "Week 1. Widely anthologised; often online.", why: "Note the exact sentence where you first felt something was wrong. How early was the ending planted?" },
      { title: "“Araby”", author: "James Joyce", what: "Week 2. Free on Project Gutenberg.", why: "A boy's crush, a trip to a bazaar, one sentence of self-knowledge at the end. What changed?", url: gutenberg("dubliners joyce") },
      { title: "“The Story of an Hour”", author: "Kate Chopin", what: "Week 3. Free on Project Gutenberg.", why: "Barely two pages, two reversals. Mark both.", url: gutenberg("kate chopin") },
      { title: "“An Astrologer's Day”", author: "R.K. Narayan", what: "Week 4. Widely anthologised; often online.", why: "A twist set up from the first paragraph. Find every setup." },
    ],
    readingQuestions: [
      "What does the protagonist want, and when did you first know it?",
      "On which page did you become invested? What caused it?",
      "Where did your attention dip? Why?",
      "What is different between the first page and the last?",
      "Which single moment would you keep if you could keep only one?",
    ],
    weeks: [
      week(1, 1, "Set up and start reading like a writer", [
        ["craft", 0.75, "Saunders: Introduction + first page of “In the Cart”", "Do his page-at-a-time exercise: after page 1, write down what you expect and what you're curious about."],
        ["lecture", 0.75, "Sanderson 2020 Lecture 1 — first half"],
        ["reflect", 0.5, "Set up a simple writing notebook", "One folder or doc with: Ideas · Exercises · Stories · Reading notes. 30 minutes max — don't build a system, build a habit."],
        ["fiction", 2.5, "Finish “In the Cart”; begin The Old Man and the Sea (≈40 pages)"],
        ["writing", 2, "Premise sprint: write 10 premises", "Use the form “A ___ wants ___, but ___.” Draw from things you've seen, overheard or can't stop thinking about."],
        ["writing", 2.5, "Free-write 500 words each on your two favourite premises", "No editing. You're looking for the one with energy."],
        ["fiction", 1, "Story of the week: “The Lottery” (Shirley Jackson)", "Note the exact sentence where you first felt something was wrong. How early was the ending planted?"],
      ]),
      week(1, 2, "Your first complete story", [
        ["craft", 0.75, "Saunders: essay on “In the Cart”"],
        ["lecture", 0.75, "Sanderson 2020 Lecture 1 — second half"],
        ["reflect", 0.5, "Five-line breakdown of “In the Cart”", "Want · obstacle · turn · change · why it worked on you."],
        ["fiction", 2.5, "The Old Man and the Sea to ≈p. 90", "Mark where the tension rises. Where does Hemingway summarise, and where does he slow down?"],
        ["writing", 2, "Draft Story #1: opening and middle (1,000–1,500 words total)"],
        ["writing", 2.5, "Finish Story #1, even if the ending is weak", "A weak ending you can revise beats a perfect beginning you abandoned."],
        ["fiction", 1, "Story of the week: “Araby” (James Joyce)", "A boy's crush, a trip to a bazaar, one sentence of self-knowledge at the end. What changed?"],
      ]),
      week(1, 3, "Your second story", [
        ["craft", 0.75, "Saunders: “The Singers” + essay"],
        ["lecture", 0.75, "Writing Excuses: 2–3 episodes on ideas & premise"],
        ["reflect", 0.5, "Compare “In the Cart” and The Old Man and the Sea", "Both follow one tired person through one ordeal. How does each ending make you feel, and how is that done?"],
        ["fiction", 2.5, "Finish The Old Man and the Sea"],
        ["writing", 2.5, "Draft Story #2 from your second premise"],
        ["writing", 2, "Finish Story #2"],
        ["fiction", 1, "Story of the week: “The Story of an Hour” (Kate Chopin)", "Barely two pages, two reversals. Mark both."],
      ]),
      week(1, 4, "First revision and first look back", [
        ["craft", 0.75, "Saunders: “The Darling” essay"],
        ["lecture", 0.75, "Writing Excuses: episodes on story beginnings"],
        ["reflect", 0.5, "Month 1 reflection", "What was easiest? Hardest? Which of your two stories has more life, and why?"],
        ["fiction", 2.5, "Read “The Darling” (Chekhov) via Saunders"],
        ["writing", 2.5, "Revise Story #1 once", "Read it aloud. Cut 10%. Make the ending land on an image or action, not an explanation."],
        ["writing", 2, "Read Story #2 Saunders-style, a page at a time; write 3 new premises from daily observation"],
        ["fiction", 1, "Story of the week: “An Astrologer's Day” (R.K. Narayan)", "A twist set up from the first paragraph. Find every setup."],
      ]),
    ],
    deliverables: [
      { id: "m1d1", text: "10 premises in your notebook" },
      { id: "m1d2", text: "Story #1 drafted and revised once" },
      { id: "m1d3", text: "Story #2 drafted" },
      { id: "m1d4", text: "Reading notes on three Saunders stories and The Old Man and the Sea" },
      { id: "m1d5", text: "Four story-of-the-week notes (one line each: what the story withholds)" },
    ],
    selfCheck: [
      "Can you state each of your stories' premise in one sentence?",
      "Can you point to the moment each story turns?",
      "Can you explain the difference between a situation and a story using an example from your reading?",
    ],
    pitfalls: [
      "Spending week one designing the perfect Notion/Obsidian system. A plain folder is fine.",
      "Editing while drafting. Draft forward; fix on the revision pass.",
      "Waiting for an idea you think is good enough. Finish the one you have.",
    ],
  },

  /* ============================ MONTH 2 ============================ */
  {
    n: 2,
    quarter: 1,
    title: "Plot: Cause, Effect, Escalation",
    question: "How do events become a plot that pulls the reader forward?",
    summary:
      "You'll take stories apart beat by beat, outline a story before writing it, write another with no outline at all, and find out which way of working suits you. You'll also line up the readers who'll start giving you feedback next month.",
    concepts: [
      { term: "Story vs. plot", explain: "E.M. Forster: “The king died and then the queen died” is a story. “The king died, and then the queen died of grief” is a plot. Plot is causality plus meaning." },
      { term: "Inciting incident", explain: "The event that knocks the protagonist's life off balance and sets the story's question. In a short story it often comes in the first paragraph." },
      { term: "Promise → progress → payoff", explain: "Sanderson's model. The opening makes promises about what kind of story this is; the middle shows measurable progress (or regression); the ending pays off the promise, ideally in an unexpected way." },
      { term: "Try–fail cycles", explain: "The character tries, fails (or succeeds at a cost), and tries again with more at stake. Each failure should teach the character, or the reader, something." },
      { term: "Turning points and reversals", explain: "Moments where the situation flips: a value goes from positive to negative or the reverse. A scene with no turn is usually summary pretending to be a scene." },
      { term: "Three-act shape: a description, not a formula", explain: "Setup → confrontation → resolution describes most stories after the fact. Use it to diagnose problems, not as a template to fill in." },
      { term: "Setup and payoff", explain: "Anything that matters at the end has to be planted earlier. Anything planted prominently has to matter (Chekhov's gun)." },
      { term: "Outliner vs. discovery writer", explain: "Some writers plan, some find the story by writing it. Most are somewhere in between. You'll test both this month instead of guessing." },
    ],
    craft: [
      { title: "A Swim in a Pond in the Rain", author: "George Saunders", what: "“Master and Man” (Tolstoy), “Gooseberries” (Chekhov), “The Nose” (Gogol), “Alyosha the Pot” (Tolstoy) + essays + afterword.", why: "“Master and Man” is a textbook in escalation and a character's transformation. “The Nose” shows a story that breaks the rules on purpose.", bookId: "saunders" },
      { title: "Writing Fiction (optional)", author: "Janet Burroway", what: "The story structure / plot chapter.", why: "If you bought Burroway as a reference, this is its plot chapter. Optional.", bookId: "burroway" },
    ],
    lectures: [
      { title: "Brandon Sanderson — BYU 2020, Plot lectures", what: "Promises, progress, payoff. Spread across the month.", why: "The clearest practical model of plot you'll find in a lecture.", url: yt("Brandon Sanderson lecture 2020 plot") },
      { title: "Writing Excuses — try/fail cycles", what: "1–2 episodes.", why: "How to structure the middle of a story.", url: WRITING_EXCUSES },
    ],
    fiction: [
      { title: "Saunders' Russian stories", what: "As listed under craft.", why: "Counts as fiction reading too.", bookId: "saunders" },
      { title: "Interpreter of Maladies", author: "Jhumpa Lahiri", what: "“A Temporary Matter”, “When Mr. Pirzada Came to Dine”, “Interpreter of Maladies”, “A Real Durwan”, “Sexy”.", why: "Quiet, contemporary, Indian and diaspora stories with precise plotting. Small events with big consequences.", bookId: "interpreter" },
    ],
    stories: [
      { title: "“A Good Man Is Hard to Find”", author: "Flannery O'Connor", what: "Week 1. Widely anthologised; often online.", why: "Track how each small decision (the cat, the detour) pushes the family toward catastrophe." },
      { title: "“Bullet in the Brain”", author: "Tobias Wolff", what: "Week 2. Widely anthologised; often online.", why: "Write its timeline vs. its telling order. Why does Wolff stop time where he does?" },
      { title: "“The Necklace”", author: "Guy de Maupassant", what: "Week 3. Free on Project Gutenberg.", why: "Setup and payoff in its purest form. Would the ending work without the first page?", url: gutenberg("maupassant") },
      { title: "“The Gift of the Magi”", author: "O. Henry", what: "Week 4. Free on Project Gutenberg.", why: "An ironic reversal. Is it earned, or just clever?", url: gutenberg("gift of the magi") },
    ],
    readingQuestions: [
      "What is the inciting incident, and on which page does it happen?",
      "List the story's events. Are they joined by “therefore/but” or by “and then”?",
      "Where is the biggest reversal?",
      "What was set up early that pays off at the end?",
    ],
    weeks: [
      week(2, 1, "Taking stories apart", [
        ["craft", 0.75, "Saunders: essay on “Master and Man”, part 1"],
        ["lecture", 0.75, "Sanderson 2020 Plot lecture, part 1"],
        ["reflect", 0.5, "Beat-map “Master and Man”", "One line per scene; mark each place the stakes rise."],
        ["fiction", 2.5, "Read “Master and Man” (Tolstoy)"],
        ["writing", 2, "Reverse-engineer a film you love", "One-sentence premise, 12–15 beats, turning points, climax. From memory, no online breakdowns."],
        ["writing", 2.5, "Three outlines for ONE premise", "Take a Month 1 premise. Write three different 12-beat outlines: different ending, different inciting incident, different protagonist."],
        ["fiction", 1, "Story of the week: “A Good Man Is Hard to Find” (Flannery O'Connor)", "Track how each small decision (the cat, the detour) pushes the family toward catastrophe."],
      ]),
      week(2, 2, "The outlined story", [
        ["craft", 0.75, "Saunders: finish the “Master and Man” essay"],
        ["lecture", 0.75, "Sanderson 2020 Plot lecture, part 2"],
        ["reflect", 0.5, "Choose your strongest outline and note why", "Which outline makes the biggest promise?"],
        ["fiction", 2.5, "Lahiri: “A Temporary Matter” + “When Mr. Pirzada Came to Dine”", "Mark the turning points in each."],
        ["writing", 2, "Draft Story #3 from your chosen outline (1,500–2,000 words), part 1"],
        ["writing", 2.5, "Finish Story #3"],
        ["fiction", 1, "Story of the week: “Bullet in the Brain” (Tobias Wolff)", "Write its timeline vs. its telling order. Why does Wolff stop time where he does?"],
      ]),
      week(2, 3, "The discovered story", [
        ["craft", 0.75, "Saunders: “Gooseberries” essay"],
        ["lecture", 0.75, "Sanderson 2020 Plot lecture, part 3 (or Q&A)"],
        ["reflect", 0.5, "Notes on “The Nose”: how does a story that breaks the rules still work?"],
        ["fiction", 2.5, "“Gooseberries”, “The Nose” + Lahiri's “Interpreter of Maladies”"],
        ["writing", 2.5, "Story #4, discovery-written: no outline at all", "Start with a character in a place with a problem. Follow it."],
        ["writing", 2, "Continue Story #4"],
        ["fiction", 1, "Story of the week: “The Necklace” (Guy de Maupassant)", "Setup and payoff in its purest form. Would the ending work without the first page?"],
      ]),
      week(2, 4, "Compare your methods; line up readers", [
        ["craft", 0.75, "Saunders: “Alyosha the Pot” + afterword"],
        ["lecture", 0.75, "Writing Excuses: try/fail cycles"],
        ["reflect", 0.5, "Outliner or discovery writer? + recruit 2 readers", "Write half a page on which process felt more alive. Ask two people who read fiction to read your work from next month."],
        ["fiction", 2.5, "Lahiri: “A Real Durwan” + “Sexy”"],
        ["writing", 2, "Finish Story #4"],
        ["writing", 2.5, "Revise Story #3 for causality", "Every scene should connect to the next with “therefore” or “but”. Cut or fix any that don't."],
        ["fiction", 1, "Story of the week: “The Gift of the Magi” (O. Henry)", "An ironic reversal. Is it earned, or just clever?"],
      ]),
    ],
    deliverables: [
      { id: "m2d1", text: "Beat maps of one film and “Master and Man”" },
      { id: "m2d2", text: "Three different outlines for one premise" },
      { id: "m2d3", text: "Story #3 (outlined), drafted and revised for causality" },
      { id: "m2d4", text: "Story #4 (discovery-written), drafted" },
      { id: "m2d5", text: "Half-page note on your process preference" },
      { id: "m2d6", text: "Two readers lined up" },
    ],
    selfCheck: [
      "Can you name the inciting incident, the main reversal and the climax of Story #3?",
      "Did the outlined or the discovered story come out stronger? Do you know why?",
      "Can you explain promise → progress → payoff using one of the Lahiri stories?",
    ],
    pitfalls: [
      "Treating three-act structure or beat sheets as rules. They're diagnostic tools.",
      "Skipping the discovery-written story because outlining feels safer. You need the comparison.",
    ],
  },

  /* ============================ MONTH 3 ============================ */
  {
    n: 3,
    quarter: 1,
    title: "Character: Desire, Fear, Choice",
    question: "What makes invented people feel like real human beings?",
    summary:
      "Characters become real when what they want, what they fear and what they believe force them into choices. You'll build characters, test them in pressure scenes, write a character-driven story, get your first outside feedback, and try a flash story.",
    concepts: [
      { term: "Want vs. need", explain: "The want is conscious and external (the promotion, the girl, the house). The need is what they actually lack, often invisible to them. The best stories set the two against each other." },
      { term: "The belief (or lie) the character lives by", explain: "Stevens in The Remains of the Day believes dignity means suppressing feeling. Every choice he makes comes from that belief, and the story tests it." },
      { term: "Contradiction", explain: "Real people contain opposites: the generous miser, the cruel idealist. A contradiction makes a character feel alive rather than designed." },
      { term: "Character is revealed by choice under pressure", explain: "Not by description and not by backstory. What a person does when every option costs something tells the reader who they are." },
      { term: "Iceberg backstory", explain: "Know far more than you show. Backstory belongs in the story only when it changes the meaning of a present moment." },
      { term: "Sanderson's three sliders", explain: "Sympathy, competence, proactivity. A character can be low on one if they're high on another. Readers follow capable or proactive people even when they're unpleasant." },
      { term: "Methods of characterisation", explain: "Appearance, action, speech, thought, and how others react to them. Action and speech carry the most weight. A narrator's summary carries the least." },
      { term: "Arc types", explain: "Positive (overcomes the belief), negative (doubles down, falls), flat (stays true and changes the world around them). Stevens's arc is one of literature's great near-misses." },
    ],
    craft: [
      { title: "Writing Fiction", author: "Janet Burroway", what: "The two characterisation chapters (any recent edition; older used copies are fine).", why: "A clear, example-rich explanation of how characterisation works on the page.", bookId: "burroway" },
      { title: "Alternative if you skip Burroway: Creating Character Arcs", author: "K.M. Weiland", what: "Part 1 (positive arc).", why: "Practical, more commercial in outlook. Use one or the other, not both." },
    ],
    lectures: [
      { title: "Brandon Sanderson — BYU 2020, Character lectures", what: "Includes the three sliders. Across weeks 1–2.", why: "A practical toolkit for making readers care.", url: yt("Brandon Sanderson lecture 2020 character") },
      { title: "Writing Excuses — character & receiving critique", what: "1–2 episodes each.", why: "You'll receive your first feedback this month.", url: WRITING_EXCUSES },
    ],
    fiction: [
      { title: "The Remains of the Day", author: "Kazuo Ishiguro", what: "Whole novel (≈250 pages) across the month.", why: "Character, self-deception and an unreliable narrator. Everything important happens in what Stevens doesn't say.", bookId: "remains" },
    ],
    stories: [
      { title: "“Miss Brill”", author: "Katherine Mansfield", what: "Week 1. Free on Project Gutenberg.", why: "Self-deception from inside. When do you see what she can't?", url: gutenberg("mansfield garden party") },
      { title: "“Everyday Use”", author: "Alice Walker", what: "Week 2. Widely anthologised; often online.", why: "List each choice the mother makes and what it reveals." },
      { title: "“Bartleby, the Scrivener”", author: "Herman Melville", what: "Week 3. Free on Project Gutenberg.", why: "A character who refuses. How does the narrator's reaction make Bartleby vivid?", url: gutenberg("bartleby") },
      { title: "“Sonny's Blues”", author: "James Baldwin", what: "Week 4. Widely anthologised; often online.", why: "Two brothers, one long reconciliation. How does the final scene carry everything before it?" },
    ],
    readingQuestions: [
      "What does Stevens want, and what does he need?",
      "Find three moments where Stevens chooses duty over feeling. What does each one cost him?",
      "What does Ishiguro let you understand that Stevens himself doesn't?",
      "In “Everyday Use”, how is Dee characterised without the narrator judging her outright?",
    ],
    weeks: [
      week(3, 1, "Building characters", [
        ["craft", 0.75, "Burroway: characterisation, part I"],
        ["lecture", 0.75, "Sanderson 2020 Character lecture, part 1"],
        ["reflect", 0.5, "Note: three moments where Stevens doesn't say what he feels"],
        ["fiction", 2.5, "The Remains of the Day, ≈70 pages"],
        ["writing", 2, "Three character sketches, one page each", "Protagonist, antagonist, a secondary character. For each: want, fear, contradiction, a secret, what they'd never do, and what would make them do it. One page each, no encyclopedias."],
        ["writing", 2.5, "Scene: a character lies", "The reader should know it's a lie; the other character shouldn't."],
        ["fiction", 1, "Story of the week: “Miss Brill” (Katherine Mansfield)", "Self-deception from inside. When do you see what she can't?"],
      ]),
      week(3, 2, "Pressure scenes", [
        ["craft", 0.75, "Burroway: characterisation, part II"],
        ["lecture", 0.75, "Sanderson 2020 Character lecture, part 2"],
        ["reflect", 0.5, "Find where your scenes rely on telling instead of choice"],
        ["fiction", 2.5, "The Remains of the Day to ≈p. 160"],
        ["writing", 2, "Scene: a moral choice that costs something either way"],
        ["writing", 2.5, "Scene: two characters want opposite things and neither says so directly"],
        ["fiction", 1, "Story of the week: “Everyday Use” (Alice Walker)", "List each choice the mother makes and what it reveals."],
      ]),
      week(3, 3, "The character-driven story", [
        ["craft", 0.75, "Check your three scenes against Burroway's methods of characterisation"],
        ["lecture", 0.75, "Writing Excuses: character episode"],
        ["reflect", 0.5, "Pick the sketch with the strongest contradiction for Story #5"],
        ["fiction", 2.5, "Finish The Remains of the Day"],
        ["writing", 2, "Draft Story #5 (≈2,000 words), part 1", "Build it from one of your sketches. The plot should come from the character's want against their belief."],
        ["writing", 2.5, "Finish Story #5"],
        ["fiction", 1, "Story of the week: “Bartleby, the Scrivener” (Herman Melville)", "A character who refuses. How does the narrator's reaction make Bartleby vivid?"],
      ]),
      week(3, 4, "First feedback and a flash story", [
        ["craft", 0.75, "Re-read all five stories; rank them and write why"],
        ["lecture", 0.75, "Writing Excuses: receiving critique"],
        ["reflect", 0.5, "Quarter 1 review", "What can you do now that you couldn't in Month 1? What is your biggest weakness?"],
        ["fiction", 2.5, "Two contemporary short stories of your choice", "Try a recent anthology or a literary magazine online."],
        ["writing", 2.5, "Revise Story #5, then send your two best stories to your readers", "Ask three questions: Where were you bored? Where were you confused? What stayed with you?"],
        ["writing", 2, "Flash story: 750–1,000 words in a single scene", "One room, one conversation, one turn. Practise compression before next month's POV work."],
        ["fiction", 1, "Story of the week: “Sonny's Blues” (James Baldwin)", "Two brothers, one long reconciliation. How does the final scene carry everything before it?"],
      ]),
    ],
    deliverables: [
      { id: "m3d1", text: "Three one-page character sketches" },
      { id: "m3d2", text: "Three pressure scenes (lie, moral choice, opposing wants)" },
      { id: "m3d3", text: "Story #5, character-driven, ≈2,000 words, revised" },
      { id: "m3d4", text: "Two stories sent to readers with your three questions" },
      { id: "m3d5", text: "Flash story (750–1,000 words) written" },
      { id: "m3d6", text: "Quarter 1 review written" },
    ],
    selfCheck: [
      "Can you state your protagonist's want, need and belief, and show where they collide?",
      "In each scene, does the character make a choice that reveals them?",
      "Which of your five stories surprised you most while writing it? Why?",
    ],
    pitfalls: [
      "Ten-page character questionnaires. They feel productive and rarely are.",
      "Putting backstory in the first pages. Bring it in when it changes a present moment.",
      "Defending your work to your readers. Just listen and take notes.",
    ],
  },

  /* ============================ MONTH 4 ============================ */
  {
    n: 4,
    quarter: 2,
    title: "Point of View & Voice",
    question: "Who is telling this, how close are we, and what does the reader get to know?",
    summary:
      "The same event becomes a different story depending on who tells it and from how close. You'll write one incident four ways, study Le Guin on person and voice, read Gatsby as a lesson in narrator design, and start collecting candidate premises for your novella.",
    concepts: [
      { term: "First person", explain: "Intimate and voiced, but limited to what the narrator knows and will admit. Watch the gap between the narrating “I” (looking back) and the experiencing “I” (living it)." },
      { term: "Third person limited", explain: "Locked to one character's perceptions, told as he/she. The most flexible default in modern fiction." },
      { term: "Omniscient", explain: "A narrator who knows everything and can move between minds and comment. Powerful, and old-fashioned only when done timidly." },
      { term: "Psychic (narrative) distance", explain: "John Gardner's scale from far (“It was winter of the year 1853. A large man stepped out of a doorway.”) to very close (“Snow. Under your collar, in your boots.”). Control the zoom deliberately." },
      { term: "Free indirect style", explain: "Third person coloured by the character's own words and judgments: “She would not cry. Not here, not in front of him.” Most literary fiction lives here." },
      { term: "Unreliable narrator", explain: "A narrator whose account the reader learns to doubt, through self-deception (Stevens), limited understanding, or deliberate lies." },
      { term: "Voice", explain: "The sum of the narrator's choices: vocabulary, sentence rhythm, what they notice, what they skip, what they joke about. Voice is attention made audible." },
      { term: "POV as information control", explain: "Choosing a narrator decides what the reader can know and when. It's your main tool for suspense and irony." },
    ],
    craft: [
      { title: "Steering the Craft", author: "Ursula K. Le Guin", what: "Chapters on person & tense, point of view & voice, changing point of view, and indirect narration. Do the exercises.", why: "Short, exercise-driven, and written by a master. The exercises are the point.", bookId: "leguin" },
    ],
    lectures: [
      { title: "Writing Excuses — point of view episodes", what: "Several short episodes across the month.", why: "Practical takes on first vs. third, head-hopping and multiple POV.", url: WRITING_EXCUSES },
      { title: "John Gardner's “psychic distance”", what: "Look up a short explainer (from his book The Art of Fiction).", why: "The single most useful POV concept for controlling intimacy.", url: yt("John Gardner psychic distance explained") },
    ],
    fiction: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", what: "Whole novel (≈180 pages).", why: "Nick is an observer-narrator telling someone else's story. Study what he can't know and how Fitzgerald works around it.", bookId: "gatsby" },
      { title: "“Cathedral”", author: "Raymond Carver", what: "Short story (week 4).", why: "A first-person voice that reveals more than the narrator intends.", bookId: "cathedral" },
    ],
    stories: [
      { title: "“Girl”", author: "Jamaica Kincaid", what: "Week 1. Widely anthologised; often online.", why: "One sentence, one voice. Copy out the first ten lines and notice the rhythm." },
      { title: "“A Rose for Emily”", author: "William Faulkner", what: "Week 2. Widely anthologised; often online.", why: "Told by “we”, the town. What can a collective narrator know that a single one can't?" },
      { title: "“The Ones Who Walk Away from Omelas”", author: "Ursula K. Le Guin", what: "Week 3. Widely anthologised; often online.", why: "A narrator who talks to you directly and asks you to build the city. Why does it work?" },
      { title: "“Why I Live at the P.O.”", author: "Eudora Welty", what: "Week 4. Widely anthologised; often online.", why: "A comic unreliable narrator. Where do you stop believing her?" },
    ],
    readingQuestions: [
      "What does Nick know, and what does he only guess?",
      "Where does Fitzgerald move closer to or farther from a character?",
      "Is Nick reliable? Find one passage that makes you doubt him.",
      "In “A Rose for Emily”, why is the story told by “we”?",
    ],
    weeks: [
      week(4, 1, "One incident, two ways", [
        ["craft", 0.75, "Le Guin: person & tense chapter + exercise"],
        ["lecture", 0.75, "Writing Excuses: first vs. third person"],
        ["reflect", 0.5, "Choose a small, charged incident to use all month", "E.g. a phone falls and shatters at a family wedding; a ring found in the wrong pocket."],
        ["fiction", 2.5, "The Great Gatsby, chapters 1–3"],
        ["writing", 2, "The incident in first person, from the protagonist (≈700 words)"],
        ["writing", 2.5, "The same incident in third limited, from a bystander"],
        ["fiction", 1, "Story of the week: “Girl” (Jamaica Kincaid)", "One sentence, one voice. Copy out the first ten lines and notice the rhythm."],
      ]),
      week(4, 2, "Omniscient and unreliable", [
        ["craft", 0.75, "Le Guin: point of view & voice chapter + exercise"],
        ["lecture", 0.75, "Gardner's psychic distance explainer"],
        ["reflect", 0.5, "Write Gardner's five-step zoom for one moment of your incident"],
        ["fiction", 2.5, "The Great Gatsby, chapters 4–6", "Note every time Nick reports something he didn't witness. How does he justify knowing it?"],
        ["writing", 2, "The same incident, omniscient"],
        ["writing", 2.5, "The same incident, from an unreliable first-person narrator", "Let the reader see the truth around the narrator's version."],
        ["fiction", 1, "Story of the week: “A Rose for Emily” (William Faulkner)", "Told by “we”, the town. What can a collective narrator know that a single one can't?"],
      ]),
      week(4, 3, "Story #6 in your hardest POV", [
        ["craft", 0.75, "Le Guin: changing point of view chapter"],
        ["lecture", 0.75, "Writing Excuses: multiple POV / head-hopping"],
        ["reflect", 0.5, "Which of your four versions was strongest, and why?"],
        ["fiction", 2.5, "Finish The Great Gatsby"],
        ["writing", 2, "Draft Story #6 (≈2,000 words) in the POV you found hardest"],
        ["writing", 2.5, "Continue Story #6"],
        ["fiction", 1, "Story of the week: “The Ones Who Walk Away from Omelas” (Ursula K. Le Guin)", "A narrator who talks to you directly and asks you to build the city. Why does it work?"],
      ]),
      week(4, 4, "Process feedback; novella seeds", [
        ["craft", 0.75, "Le Guin: indirect narration chapter"],
        ["lecture", 0.75, "Sanderson 2020 — any lecture on outlining/ideas", "Prep for choosing your novella."],
        ["reflect", 0.5, "Triage your readers' feedback", "List patterns, not fixes. If both readers stumbled at the same place, that's real."],
        ["fiction", 2.5, "“Cathedral” (Carver) + one more story of your choice"],
        ["writing", 2, "Finish Story #6"],
        ["writing", 2.5, "Novella seeds: three one-paragraph novella premises", "Bigger than a short story: more time, more people, a deeper change."],
        ["fiction", 1, "Story of the week: “Why I Live at the P.O.” (Eudora Welty)", "A comic unreliable narrator. Where do you stop believing her?"],
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
      "Can you name your current default voice, and one way to stretch it?",
    ],
    pitfalls: [
      "Head-hopping within a scene without meaning to.",
      "Picking first person for every story because it feels natural. Earn it.",
    ],
  },

  /* ============================ MONTH 5 ============================ */
  {
    n: 5,
    quarter: 2,
    title: "Scene, Dialogue & the Sentence",
    question: "How do words on the page become an experience for the reader?",
    summary:
      "This is the line-level month: scene construction, dialogue and subtext, sensory detail, rhythm. You'll write five pressure scenes, revise them for mechanics, and by the end of the month choose the premise for your novella.",
    concepts: [
      { term: "Scene vs. summary", explain: "A scene happens in real time on the page; summary compresses time. Put your important moments in scene and move through the transitions with summary." },
      { term: "Scene structure", explain: "Goal → conflict → outcome (often a disaster or a complication). Every scene should change something: a relationship, a piece of knowledge, a power balance." },
      { term: "Enter late, leave early", explain: "Start the scene as close as possible to the turn; leave as soon as it lands. Cut the hellos and the goodbyes." },
      { term: "Subtext", explain: "What characters mean but don't say. People rarely state their feelings; they argue about the dishes. Let the reader do that work." },
      { term: "Dialogue mechanics", explain: "Use “said” and stay invisible. Use action beats to set rhythm and show behaviour. Avoid adverbs propping up weak lines." },
      { term: "Exposition", explain: "Information the reader needs. Smuggle it in through conflict, and never write “As you know, Bob…”." },
      { term: "Specific detail", explain: "“A dog” is nothing. “A three-legged pariah dog asleep on the warm bonnet” is a world. Choose the one detail that implies the rest." },
      { term: "Rhythm", explain: "Vary sentence length. Short sentences hit. Long ones, winding through clauses, carry the reader somewhere they didn't expect to go." },
      { term: "Filter words", explain: "“She saw the door open” → “The door opened.” Cut the seeing, feeling, noticing and hearing that stand between reader and moment." },
    ],
    craft: [
      { title: "Self-Editing for Fiction Writers", author: "Renni Browne & Dave King", what: "Chapters: Show and Tell, Dialogue Mechanics, Interior Monologue, Easy Beats.", why: "Practical line-level craft with before/after examples.", bookId: "browne-king" },
      { title: "Steering the Craft", author: "Ursula K. Le Guin", what: "Chapters on sound, punctuation, sentence length, repetition, adjectives & adverbs, crowding & leaping. Do the exercises.", why: "Trains your ear for prose rhythm.", bookId: "leguin" },
    ],
    lectures: [
      { title: "Writing Excuses — dialogue, description, exposition", what: "One or two episodes per week.", why: "Short and practical, matched to each week's focus.", url: WRITING_EXCUSES },
      { title: "Brandon Sanderson — BYU 2020, outlining (week 4)", what: "Re-watch the relevant section before choosing your novella.", why: "You'll design your novella next month.", url: yt("Brandon Sanderson lecture 2020 outlining") },
    ],
    fiction: [
      { title: "“Hills Like White Elephants”", author: "Ernest Hemingway", what: "Short story. Read it twice.", why: "The best short lesson in subtext: a whole conversation about something never named.", bookId: "hills" },
      { title: "“The Lady with the Dog”", author: "Anton Chekhov", what: "Short story (free on Project Gutenberg).", why: "Scene, summary and precise detail in balance.", url: gutenberg("lady with the dog chekhov"), bookId: "lady-dog" },
      { title: "Interpreter of Maladies (remaining stories)", author: "Jhumpa Lahiri", what: "“This Blessed House”, “The Treatment of Bibi Haldar”, “The Third and Final Continent”.", why: "Scenes built from small domestic details.", bookId: "interpreter" },
    ],
    stories: [
      { title: "“A Clean, Well-Lighted Place”", author: "Ernest Hemingway", what: "Week 1. Widely anthologised; often online.", why: "Almost all dialogue. Who speaks each line, and how do you know?" },
      { title: "“Cat Person”", author: "Kristen Roupenian", what: "Week 2. Widely anthologised; often online.", why: "Scenes built from tiny shifts in attraction and dread. Mark each shift." },
      { title: "“Emergency”", author: "Denis Johnson", what: "Week 3. Widely anthologised; often online.", why: "Strange, exact detail and unpredictable rhythm. Pick three sentences and say why they're shaped that way." },
      { title: "“The Garden Party”", author: "Katherine Mansfield", what: "Week 4. Free on Project Gutenberg.", why: "Sensory detail that carries class and death. Which details imply the most?", url: gutenberg("mansfield garden party") },
    ],
    readingQuestions: [
      "In “Hills Like White Elephants”, what is the conversation really about? How do you know?",
      "Find a scene that enters late. Where would a weaker writer have started it?",
      "Pick one paragraph and mark long vs. short sentences. What does the rhythm do?",
      "Which single detail in Chekhov's story implies the most?",
    ],
    weeks: [
      week(5, 1, "Dialogue and subtext", [
        ["craft", 0.75, "Browne & King: Show and Tell + Dialogue Mechanics"],
        ["lecture", 0.75, "Writing Excuses: dialogue episode"],
        ["reflect", 0.5, "Write out what's unsaid in “Hills Like White Elephants”"],
        ["fiction", 2.5, "“Hills Like White Elephants” (twice) + “The Lady with the Dog”"],
        ["writing", 2, "Scene: two people meet for the first time", "Each has a hidden agenda."],
        ["writing", 2.5, "Scene: an argument about something important, fought over something trivial"],
        ["fiction", 1, "Story of the week: “A Clean, Well-Lighted Place” (Ernest Hemingway)", "Almost all dialogue. Who speaks each line, and how do you know?"],
      ]),
      week(5, 2, "Sentences and detail", [
        ["craft", 0.75, "Le Guin: sound, punctuation, sentence length + exercises"],
        ["lecture", 0.75, "Writing Excuses: description & sensory detail"],
        ["reflect", 0.5, "Collect five specific details from your own week that imply a whole story"],
        ["fiction", 2.5, "Lahiri: “This Blessed House” + “The Treatment of Bibi Haldar”"],
        ["writing", 2, "Scene: a character hides a secret from someone who almost discovers it"],
        ["writing", 2.5, "Scene: a moment of grief, with no tears and no word for the feeling"],
        ["fiction", 1, "Story of the week: “Cat Person” (Kristen Roupenian)", "Scenes built from tiny shifts in attraction and dread. Mark each shift."],
      ]),
      week(5, 3, "Interior and mechanics", [
        ["craft", 0.75, "Browne & King: Interior Monologue + Easy Beats"],
        ["lecture", 0.75, "Writing Excuses: exposition"],
        ["reflect", 0.5, "Note your own dialogue habits (tags, adverbs, beats)"],
        ["fiction", 2.5, "Lahiri: “The Third and Final Continent”"],
        ["writing", 2, "Scene: a conversation where neither person says what they mean"],
        ["writing", 2.5, "Revise all five scenes for mechanics", "Use “said”, cut adverbs, add beats, enter later, leave earlier, remove filter words."],
        ["fiction", 1, "Story of the week: “Emergency” (Denis Johnson)", "Strange, exact detail and unpredictable rhythm. Pick three sentences and say why they're shaped that way."],
      ]),
      week(5, 4, "Choose your novella", [
        ["craft", 0.75, "Le Guin: repetition, adjectives & adverbs, crowding & leaping"],
        ["lecture", 0.75, "Sanderson 2020 — outlining section"],
        ["reflect", 0.5, "Which premise do you keep thinking about when you're not writing?"],
        ["fiction", 2.5, "One story of your choice + copywork", "Copy out by hand one page you admire. Feel the rhythm from inside."],
        ["writing", 2.5, "Test-drive each novella premise: write its opening page"],
        ["writing", 2, "Choose one; write its one-sentence and one-paragraph versions"],
        ["fiction", 1, "Story of the week: “The Garden Party” (Katherine Mansfield)", "Sensory detail that carries class and death. Which details imply the most?"],
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
      "Read a page aloud. Does it have rhythm, or does every sentence have the same shape?",
    ],
    pitfalls: [
      "Polishing sentences in scenes that don't work structurally.",
      "Dialogue in which characters explain their feelings to each other.",
      "Choosing the novella premise that sounds impressive over the one you can't stop thinking about.",
    ],
  },

  /* ============================ MONTH 6 ============================ */
  {
    n: 6,
    quarter: 2,
    title: "Designing the Novella",
    question: "How do you design a long story before writing it, without killing it?",
    summary:
      "You build the blueprint for a 20,000–30,000-word novella: premise, theme, a web of characters, the seven key steps, setting, a beat outline and a chapter plan. Then you write chapter 1. The blueprint is a map, not a cage. It will change once you draft.",
    concepts: [
      { term: "What a novella is", explain: "Usually 20,000–40,000 words. One main line, few POVs, compressed time, a single deep change. Long enough to sustain a world, short enough to finish and revise in a year." },
      { term: "Designing principle", explain: "Truby's idea: the organising concept that makes this story unique. Not just what happens, but the shape it happens in (a single day, a journey, letters, a countdown)." },
      { term: "Theme as a question", explain: "Not “greed is bad” but “what does it cost to want more?” Your characters argue the question through their actions; the ending answers it without a speech." },
      { term: "Character web", explain: "Characters are defined against each other. Each supporting character should show a different answer to the protagonist's problem." },
      { term: "The seven key steps (Truby)", explain: "Weakness/need, desire, opponent, plan, battle, self-revelation, new equilibrium. A diagnostic spine for any story." },
      { term: "Opponent", explain: "The best opponent wants the same thing as the protagonist, or attacks their exact weakness. An opponent can be a person, a family, a system or the self." },
      { term: "Beat outline → chapter plan", explain: "First list 20–25 key beats (events that change things). Then group them into 8–12 chapters with a purpose and an ending hook for each." },
      { term: "Room for discovery", explain: "Outline the load-bearing walls (inciting incident, midpoint, climax, ending) and leave the rooms to be furnished while you draft." },
    ],
    craft: [
      { title: "The Anatomy of Story", author: "John Truby", what: "Chapters: Premise, Seven Key Steps, Character, and (skim) Moral Argument.", why: "The most rigorous book on how character, theme and plot lock together. Dense, so read it with your own story open beside it.", bookId: "truby" },
    ],
    lectures: [
      { title: "Brandon Sanderson — BYU 2020, Plot & outlining (revisit)", what: "Re-watch the parts on promises and outlining.", why: "You'll understand them differently now that you're designing something long.", url: yt("Brandon Sanderson lecture 2020 plot") },
      { title: "Writing Excuses — outlining & novellas", what: "1–2 episodes.", url: WRITING_EXCUSES, why: "Ideas on scale and structure." },
    ],
    fiction: [
      { title: "The Stranger", author: "Albert Camus", what: "Whole novella (≈120 pages). Matthew Ward or Sandra Smith translation.", why: "Detached narration, a two-part structure, and a crime at the exact centre.", bookId: "stranger" },
      { title: "Chronicle of a Death Foretold", author: "Gabriel García Márquez", what: "Whole novella (≈120 pages).", why: "The ending is given in the first line, and tension still builds. A lesson that suspense is about how, not what.", bookId: "chronicle" },
    ],
    stories: [
      { title: "“The Swimmer”", author: "John Cheever", what: "Week 1. Widely anthologised; often online.", why: "A journey across suburban pools is the whole design. When did you realise what it meant?" },
      { title: "“The Things They Carried”", author: "Tim O'Brien", what: "Week 2. Widely anthologised; often online.", why: "A list as structure. Could your novella have an organising device like this?" },
      { title: "“Signs and Symbols”", author: "Vladimir Nabokov", what: "Week 3. Widely anthologised; often online.", why: "Pattern and dread. Notice what the story never says outright." },
      { title: "“The School”", author: "Donald Barthelme", what: "Week 4. Widely anthologised; often online.", why: "Repetition that escalates into absurdity. A design idea in a few pages." },
    ],
    readingQuestions: [
      "How does The Stranger's two-part structure shape its meaning?",
      "Chronicle gives away its ending. What keeps you reading?",
      "What is each novella's designing principle?",
      "How is a novella different in shape from a short story and from a novel?",
    ],
    weeks: [
      week(6, 1, "Premise and people", [
        ["craft", 0.75, "Truby: Premise chapter"],
        ["lecture", 0.75, "Sanderson — plot/outlining revisit"],
        ["reflect", 0.5, "Write your theme as a question, not a statement"],
        ["fiction", 2.5, "The Stranger, Part 1"],
        ["writing", 2, "Premise work: designing principle + one-line premise + theme question"],
        ["writing", 2.5, "Character web: protagonist, opponent, 2–3 supporting, one page each", "For each supporting character: how do they answer the protagonist's problem differently?"],
        ["fiction", 1, "Story of the week: “The Swimmer” (John Cheever)", "A journey across suburban pools is the whole design. When did you realise what it meant?"],
      ]),
      week(6, 2, "Spine and world", [
        ["craft", 0.75, "Truby: Seven Key Steps chapter"],
        ["lecture", 0.75, "Writing Excuses: outlining episode"],
        ["reflect", 0.5, "Check that your opponent attacks your protagonist's exact weakness"],
        ["fiction", 2.5, "The Stranger, Part 2"],
        ["writing", 2, "Write your novella's seven key steps", "Weakness/need · desire · opponent · plan · battle · self-revelation · new equilibrium."],
        ["writing", 2.5, "Setting sheet (2 pages)", "Place, time, social world, money, who has power, and the sounds and smells. Only what puts pressure on your characters."],
        ["fiction", 1, "Story of the week: “The Things They Carried” (Tim O'Brien)", "A list as structure. Could your novella have an organising device like this?"],
      ]),
      week(6, 3, "Beats and chapters", [
        ["craft", 0.75, "Truby: Character chapter (+ skim Moral Argument)"],
        ["lecture", 0.75, "Writing Excuses: novella-length structure"],
        ["reflect", 0.5, "Mark the load-bearing beats: inciting incident, midpoint, climax, ending"],
        ["fiction", 2.5, "Chronicle of a Death Foretold, first half", "The ending is known. Where does the tension come from?"],
        ["writing", 2.5, "Beat outline: 20–25 beats"],
        ["writing", 2, "Chapter plan: 8–12 chapters, each with a purpose and an ending hook"],
        ["fiction", 1, "Story of the week: “Signs and Symbols” (Vladimir Nabokov)", "Pattern and dread. Notice what the story never says outright."],
      ]),
      week(6, 4, "Chapter 1", [
        ["craft", 0.75, "Check your blueprint against Truby's seven steps"],
        ["lecture", 0.75, "Any episode on beginnings / first chapters"],
        ["reflect", 0.5, "Mid-year review", "What's working, what's not, and is 10 hours a week realistic? Adjust honestly."],
        ["fiction", 2.5, "Finish Chronicle of a Death Foretold"],
        ["writing", 2.5, "Draft chapter 1 of the novella"],
        ["writing", 2, "Finish chapter 1; sketch the first scene of chapter 2", "Stop mid-scene so drafting starts easily next month."],
        ["fiction", 1, "Story of the week: “The School” (Donald Barthelme)", "Repetition that escalates into absurdity. A design idea in a few pages."],
      ]),
    ],
    deliverables: [
      { id: "m6d1", text: "Premise, designing principle and theme question" },
      { id: "m6d2", text: "Character web: protagonist, opponent, 2–3 supporting" },
      { id: "m6d3", text: "Seven key steps written for your novella" },
      { id: "m6d4", text: "Setting sheet (≈2 pages)" },
      { id: "m6d5", text: "Beat outline (20–25 beats) and chapter plan (8–12 chapters)" },
      { id: "m6d6", text: "Chapter 1 drafted" },
      { id: "m6d7", text: "First scene of chapter 2 sketched" },
      { id: "m6d8", text: "Mid-year review written" },
    ],
    selfCheck: [
      "Can you pitch the novella in one sentence that makes someone ask “and then what?”",
      "Does your opponent attack your protagonist's weakness?",
      "Do you know your ending? (It can change, but aim for something.)",
    ],
    pitfalls: [
      "Endless world-building instead of drafting. The blueprint should take a month, not a quarter.",
      "A theme you could put on a poster. Make it a real question you don't know the answer to.",
    ],
  },

  /* ============================ MONTH 7 ============================ */
  {
    n: 7,
    quarter: 3,
    title: "Drafting I: Beginnings, World & Momentum",
    question: "How do you start a long project and keep going?",
    summary:
      "The draft begins. The target is about 2,000 words a week: a short session on Tuesday and Thursday and a long one on Saturday. Craft study gets lighter and supports the draft. Rule for the quarter: don't revise, keep moving, and put everything you want to fix in a “fix later” list.",
    wordTarget: "≈8,000–9,000 words by month end",
    concepts: [
      { term: "Drafting mindset", explain: "A first draft is for finding out what the story is. Permission to be bad is permission to finish." },
      { term: "The “fix later” list", explain: "When you notice a problem in an earlier chapter, write it in the list and keep moving. Never go back during the draft." },
      { term: "Openings", explain: "The first pages set the voice, introduce a character the reader wants to follow, and plant a question. Readers forgive slowness if they trust the voice." },
      { term: "Setting as pressure", explain: "Setting matters when it pushes on characters: heat, money, gossip, caste, traffic, a landlord. Show the world through what your POV character notices and wants." },
      { term: "Research as needed", explain: "Research the specific fact when the scene needs it. Mark [CHECK] and keep drafting rather than stopping for an hour." },
      { term: "Continuity bible", explain: "A running page of names, ages, places, timeline and small facts so the draft stays consistent." },
    ],
    craft: [
      { title: "The Anatomy of Story", author: "John Truby", what: "Story World chapter.", why: "How setting expresses character and theme.", bookId: "truby" },
    ],
    lectures: [
      { title: "Brandon Sanderson — BYU 2020, Worldbuilding lectures", what: "Across the month.", why: "Useful for realist fiction too: culture, economics and how a world creates conflict.", url: yt("Brandon Sanderson lecture 2020 worldbuilding") },
    ],
    fiction: [
      { title: "The Guide", author: "R.K. Narayan", what: "Whole novel (≈220 pages).", why: "Malgudi as a living setting, a dual timeline, and a clear Indian English voice. A model for how plain prose can carry a world.", bookId: "guide" },
    ],
    stories: [
      { title: "“Brokeback Mountain”", author: "Annie Proulx", what: "Week 1. Widely anthologised; often online.", why: "Landscape pressing on two people. How does the setting shape what they can't say?" },
      { title: "“The Overcoat”", author: "Nikolai Gogol", what: "Week 2. Free on Project Gutenberg.", why: "A city and an office as pressure on one small man.", url: gutenberg("gogol overcoat") },
      { title: "“Brownies”", author: "ZZ Packer", what: "Week 3. Widely anthologised; often online.", why: "A whole social world (a summer camp, race, class) built in a few pages." },
      { title: "“Hunters in the Snow”", author: "Tobias Wolff", what: "Week 4. Widely anthologised; often online.", why: "Cold, distance and menace. How does the setting turn against the characters?" },
    ],
    readingQuestions: [
      "How does Narayan alternate past and present? Why does each switch happen where it does?",
      "How does Malgudi put pressure on Raju?",
      "In this month's stories of the week, how does each setting put pressure on its people?",
    ],
    weeks: [
      week(7, 1, "Start the engine", [
        ["craft", 0.75, "Truby: Story World, first half"],
        ["lecture", 0.75, "Sanderson worldbuilding lecture, part 1"],
        ["reflect", 0.5, "Set up the “fix later” list and continuity bible; log words"],
        ["fiction", 2.5, "The Guide, ≈60 pages"],
        ["writing", 2, "Draft ≈900 words (Tue + Thu)"],
        ["writing", 2.5, "Saturday deep session: draft ≈1,100 words"],
        ["fiction", 1, "Story of the week: “Brokeback Mountain” (Annie Proulx)", "Landscape pressing on two people. How does the setting shape what they can't say?"],
      ]),
      week(7, 2, "Keep going", [
        ["craft", 0.75, "Truby: Story World, second half"],
        ["lecture", 0.75, "Sanderson worldbuilding lecture, part 2"],
        ["reflect", 0.5, "Log words; one line on what surprised you"],
        ["fiction", 2.5, "The Guide, to ≈p. 120", "Track the timeline switches."],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words"],
        ["fiction", 1, "Story of the week: “The Overcoat” (Nikolai Gogol)", "A city and an office as pressure on one small man."],
      ]),
      week(7, 3, "Setting under pressure", [
        ["craft", 0.75, "Re-read your setting sheet; add three pressures you've discovered while drafting"],
        ["lecture", 0.75, "Writing Excuses: setting / sense of place"],
        ["reflect", 0.5, "Log words; update the continuity bible"],
        ["fiction", 2.5, "The Guide, to ≈p. 180"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words"],
        ["fiction", 1, "Story of the week: “Brownies” (ZZ Packer)", "A whole social world (a summer camp, race, class) built in a few pages."],
      ]),
      week(7, 4, "Momentum check", [
        ["craft", 0.75, "Compare your chapter plan with what you've actually drafted; adjust the plan, not the draft"],
        ["lecture", 0.75, "Writing Excuses: maintaining momentum / productivity"],
        ["reflect", 0.5, "Month 7 reflection: words so far, what's alive, what's dead"],
        ["fiction", 2.5, "Finish The Guide"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words"],
        ["fiction", 1, "Story of the week: “Hunters in the Snow” (Tobias Wolff)", "Cold, distance and menace. How does the setting turn against the characters?"],
      ]),
    ],
    deliverables: [
      { id: "m7d1", text: "≈8,000–9,000 words of the novella drafted" },
      { id: "m7d2", text: "“Fix later” list and continuity bible started" },
      { id: "m7d3", text: "Chapter plan updated to match the draft" },
    ],
    selfCheck: [
      "Did you resist going back to revise?",
      "Is your weekly word count holding? If not, is it time or fear?",
    ],
    pitfalls: [
      "Rewriting chapter 1 five times. Leave it.",
      "Stopping to research. Mark [CHECK] and move on.",
      "Comparing your draft with the published novel you're reading. You're comparing a first draft with a twentieth.",
    ],
  },

  /* ============================ MONTH 8 ============================ */
  {
    n: 8,
    quarter: 3,
    title: "Drafting II: The Middle — Escalation & Suspense",
    question: "How do you keep a long middle alive?",
    summary:
      "The middle is where most drafts die. This month's craft study is about escalation, suspense and how to manage information, and it goes straight into your draft. Keep up about 2,000 words a week.",
    wordTarget: "≈16,000–17,000 words cumulative",
    concepts: [
      { term: "The sagging middle", explain: "When the middle repeats the same kind of conflict at the same intensity. Fix it by escalating stakes, complicating relationships or reversing the situation." },
      { term: "Midpoint reversal", explain: "Around halfway, something changes the nature of the story: a revelation, a false victory, a betrayal. The protagonist stops reacting and starts acting, or the reverse." },
      { term: "Suspense vs. surprise", explain: "Hitchcock: a bomb that suddenly explodes under a table is a surprise (seconds of shock). Show the bomb first and let people talk over it, and you get minutes of suspense. Let the reader know more than the characters." },
      { term: "Managing information", explain: "Decide what the reader knows, what they suspect and what they don't know, and change all three on purpose. Never withhold something the POV character knows just to create a twist." },
      { term: "Setup/payoff ledger", explain: "Track every planted object, promise and question, and whether it pays off. Payoffs are where readers feel the design." },
      { term: "Subplots", explain: "A subplot should mirror or contrast the main line's theme, and its crisis should collide with the main climax." },
      { term: "Chapter endings", explain: "End on a question, a decision, a reversal or an image that pulls forward. Not on everyone going to sleep." },
    ],
    craft: [
      { title: "The Anatomy of Story", author: "John Truby", what: "Plot chapter + Scene Weave chapter (selected sections).", why: "How reveals and the order of scenes drive a long story.", bookId: "truby" },
    ],
    lectures: [
      { title: "Brandon Sanderson — BYU 2020, Plot (progress)", what: "Re-watch the progress / middle section.", why: "Measurable progress is how a middle stays alive.", url: yt("Brandon Sanderson lecture 2020 plot") },
      { title: "Writing Excuses — middles, suspense, reveals", what: "One episode a week.", url: WRITING_EXCUSES, why: "Matched to this month's problems." },
    ],
    fiction: [
      { title: "Never Let Me Go", author: "Kazuo Ishiguro", what: "Whole novel (≈290 pages).", why: "The most controlled release of information in modern literary fiction. The reader learns the truth before the narrator says it plainly.", bookId: "never-let" },
    ],
    stories: [
      { title: "“Where Are You Going, Where Have You Been?”", author: "Joyce Carol Oates", what: "Week 1. Widely anthologised; often online.", why: "Suspense from a stranger at the door. How long does Oates make you wait, and how?" },
      { title: "“The Monkey's Paw”", author: "W.W. Jacobs", what: "Week 2. Free on Project Gutenberg.", why: "Suspense when you know what's coming: Hitchcock's bomb under the table.", url: gutenberg("monkey's paw jacobs") },
      { title: "“Bloodchild”", author: "Octavia E. Butler", what: "Week 3. Widely anthologised; often online.", why: "Information released in a careful order. What do you know, suspect and not know on each page?" },
      { title: "“The Tell-Tale Heart”", author: "Edgar Allan Poe", what: "Week 4. Free on Project Gutenberg.", why: "Escalation inside a narrator's head.", url: gutenberg("poe tell-tale heart") },
    ],
    readingQuestions: [
      "At each point in Never Let Me Go, what do you know, suspect and not know?",
      "Where is the novel's midpoint, and what changes there?",
      "How does Ishiguro end chapters?",
      "How does “The Monkey's Paw” make you dread what you already expect?",
    ],
    weeks: [
      week(8, 1, "Escalate", [
        ["craft", 0.75, "Truby: Plot chapter, first part"],
        ["lecture", 0.75, "Sanderson: progress / middles"],
        ["reflect", 0.5, "Log words; start a setup/payoff ledger"],
        ["fiction", 2.5, "Never Let Me Go, ≈70 pages"],
        ["writing", 2, "Draft ≈900 words", "Before writing, ask: how can this chapter make things worse?"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words"],
        ["fiction", 1, "Story of the week: “Where Are You Going, Where Have You Been?” (Joyce Carol Oates)", "Suspense from a stranger at the door. How long does Oates make you wait, and how?"],
      ]),
      week(8, 2, "Midpoint", [
        ["craft", 0.75, "Truby: Plot chapter, reveals"],
        ["lecture", 0.75, "Writing Excuses: midpoints / reveals"],
        ["reflect", 0.5, "Log words; is your midpoint reversal on the page yet?"],
        ["fiction", 2.5, "Never Let Me Go, to ≈p. 150", "Map know / suspect / don't know at three points."],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words — aim at the midpoint"],
        ["fiction", 1, "Story of the week: “The Monkey's Paw” (W.W. Jacobs)", "Suspense when you know what's coming: Hitchcock's bomb under the table."],
      ]),
      week(8, 3, "Suspense and subplot", [
        ["craft", 0.75, "Truby: Scene Weave (selected)"],
        ["lecture", 0.75, "Writing Excuses: suspense vs. surprise"],
        ["reflect", 0.5, "Log words; update the ledger"],
        ["fiction", 2.5, "Never Let Me Go, to ≈p. 220"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words — let the subplot collide with the main line"],
        ["fiction", 1, "Story of the week: “Bloodchild” (Octavia E. Butler)", "Information released in a careful order. What do you know, suspect and not know on each page?"],
      ]),
      week(8, 4, "Chapter endings", [
        ["craft", 0.75, "Review your chapter endings so far against Ishiguro's (notes only, no rewriting)"],
        ["lecture", 0.75, "Writing Excuses: chapter endings / hooks"],
        ["reflect", 0.5, "Month 8 reflection; log words"],
        ["fiction", 2.5, "Finish Never Let Me Go"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words"],
        ["fiction", 1, "Story of the week: “The Tell-Tale Heart” (Edgar Allan Poe)", "Escalation inside a narrator's head."],
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
    question: "How do you land a long story and finish the draft?",
    summary:
      "You write the climax and the ending and type “The End.” If the draft comes in at 18,000 words instead of 25,000, that's fine. A finished short draft is worth more than an unfinished long one. Use the buffer week if you need it.",
    wordTarget: "Complete first draft (≈20,000–30,000 words)",
    concepts: [
      { term: "Climax as the hardest choice", explain: "The climax isn't the loudest scene. It's the moment the protagonist makes the choice that decides the story's question, under maximum pressure." },
      { term: "Earned endings", explain: "An ending feels inevitable when it was set up and surprising when it arrives from an unexpected angle. Check your ledger: what pays off here?" },
      { term: "Self-revelation", explain: "What the protagonist finally understands (or fails to understand) about themselves. The more specific, the stronger." },
      { term: "New equilibrium", explain: "The world after the change. Show it in an image or action rather than a summary of lessons learned." },
      { term: "Open vs. closed endings", explain: "Open endings leave the outcome uncertain but must still resolve the story's emotional question. Ambiguity isn't the same as vagueness." },
      { term: "Echo the opening", explain: "A final image that rhymes with the first lets the reader feel the distance travelled." },
    ],
    craft: [
      { title: "The Anatomy of Story", author: "John Truby", what: "Revisit Seven Key Steps (self-revelation, new equilibrium) + The Never-Ending Story chapter.", why: "Endings that open outward.", bookId: "truby" },
    ],
    lectures: [
      { title: "Brandon Sanderson — BYU 2020, Plot (payoff)", what: "Re-watch the payoff section.", why: "Delivering on your promises.", url: yt("Brandon Sanderson lecture 2020 plot payoff") },
      { title: "Writing Excuses — endings", what: "1–2 episodes.", url: WRITING_EXCUSES, why: "Different ways to land a story." },
    ],
    fiction: [
      { title: "The Death of Ivan Ilyich", author: "Leo Tolstoy", what: "Novella (≈90 pages). Free on Project Gutenberg.", why: "The ending is announced on page one, and it's still one of the most powerful endings in literature.", url: gutenberg("death of ivan ilyich"), bookId: "ivan" },
      { title: "Endings revisited", what: "Re-read the last chapters of The Remains of the Day and The Great Gatsby.", why: "Compare a restrained ending with a lyrical one. What does each leave in you?", bookId: "remains" },
    ],
    stories: [
      { title: "“The Dead”", author: "James Joyce", what: "Week 1. Free on Project Gutenberg.", why: "One of the great endings. Read the final section twice.", url: gutenberg("dubliners joyce") },
      { title: "“Tenth of December”", author: "George Saunders", what: "Week 2. Widely anthologised; often online.", why: "A climax that hinges on a choice to help." },
      { title: "“The Paper Menagerie”", author: "Ken Liu", what: "Week 3. Widely anthologised; often online.", why: "An ending that makes you re-read the whole story." },
      { title: "“Car Crash While Hitchhiking”", author: "Denis Johnson", what: "Week 4. Widely anthologised; often online.", why: "The last line turns the story back on the narrator." },
    ],
    readingQuestions: [
      "Ivan Ilyich's ending is known from the start. Why does it still hit?",
      "What is the protagonist's final choice in each book you've read this year?",
      "Which of this month's endings echoes its own opening?",
    ],
    weeks: [
      week(9, 1, "Toward the climax", [
        ["craft", 0.75, "Truby: revisit self-revelation & new equilibrium"],
        ["lecture", 0.75, "Sanderson: payoff"],
        ["reflect", 0.5, "Log words; list what your ledger says must pay off"],
        ["fiction", 2.5, "The Death of Ivan Ilyich, first half"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft ≈1,100 words"],
        ["fiction", 1, "Story of the week: “The Dead” (James Joyce)", "One of the great endings. Read the final section twice."],
      ]),
      week(9, 2, "The climax", [
        ["craft", 0.75, "Truby: The Never-Ending Story chapter"],
        ["lecture", 0.75, "Writing Excuses: endings"],
        ["reflect", 0.5, "Log words; write your protagonist's final choice in one sentence"],
        ["fiction", 2.5, "Finish The Death of Ivan Ilyich"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft the climax"],
        ["fiction", 1, "Story of the week: “Tenth of December” (George Saunders)", "A climax that hinges on a choice to help."],
      ]),
      week(9, 3, "The ending", [
        ["craft", 0.75, "Re-read your opening chapter (read only, don't edit). What should the last image echo?"],
        ["lecture", 0.75, "Writing Excuses: another episode on endings or finishing"],
        ["reflect", 0.5, "Log words"],
        ["fiction", 2.5, "Re-read the endings of The Remains of the Day and The Great Gatsby"],
        ["writing", 2, "Draft ≈900 words"],
        ["writing", 2.5, "Saturday: draft the resolution"],
        ["fiction", 1, "Story of the week: “The Paper Menagerie” (Ken Liu)", "An ending that makes you re-read the whole story."],
      ]),
      week(9, 4, "Type “The End”", [
        ["craft", 0.75, "Skim your “fix later” list. Don't act on it yet."],
        ["lecture", 0.75, "Rest — or one episode you enjoy"],
        ["reflect", 0.5, "Celebrate. Record the final word count and how it felt to finish."],
        ["fiction", 2.5, "Read anything you like, for pleasure"],
        ["writing", 2, "Draft the final pages"],
        ["writing", 2.5, "Finish the draft. Back it up in two places. Don't re-read it."],
        ["fiction", 1, "Story of the week: “Car Crash While Hitchhiking” (Denis Johnson)", "The last line turns the story back on the narrator."],
      ]),
    ],
    deliverables: [
      { id: "m9d1", text: "Climax drafted" },
      { id: "m9d2", text: "Complete first draft of the novella — “The End” typed" },
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

  /* ============================ MONTH 10 ============================ */
  {
    n: 10,
    quarter: 4,
    title: "Rest, Re-read, Diagnose",
    question: "How do you see your own draft clearly enough to fix it?",
    summary:
      "The draft sits in a drawer for a week while you write a new short story. Then you read it as a reader, outline it backwards, diagnose the big problems, and write a revision plan. Big problems come before small ones: never polish a scene you might cut.",
    concepts: [
      { term: "Drawer time", explain: "Distance turns you from author into reader. Even one or two weeks helps." },
      { term: "The reader read-through", explain: "Read the whole draft in one or two sittings without fixing anything. Note in the margin where you're bored, confused or moved." },
      { term: "Reverse outline", explain: "One line per scene: what happens, what changes, POV, word count. The draft's real structure appears, as opposed to the one you planned." },
      { term: "Levels of revision", explain: "Developmental (story, character, structure) → scene (purpose, order) → line (sentences) → copy (grammar, consistency). Work top-down." },
      { term: "The scene function test", explain: "Does each scene change something? If you removed it, would anything break? If not, cut or merge it." },
      { term: "Motivation audit", explain: "For each major choice: would this person, with this belief and this fear, really do this here? If not, fix the setup, not the choice." },
    ],
    craft: [
      { title: "The Last Draft", author: "Sandra Scofield", what: "First half.", why: "A practical, writer-friendly guide to revising a novel-length draft.", bookId: "scofield" },
    ],
    lectures: [
      { title: "Writing Excuses — revision episodes", what: "One a week.", url: WRITING_EXCUSES, why: "Different writers' revision processes." },
      { title: "Brandon Sanderson — on revision", what: "Search his lectures and talks on revision.", why: "How a prolific novelist revises in passes.", url: yt("Brandon Sanderson revision lecture") },
    ],
    fiction: [
      { title: "Unaccustomed Earth", author: "Jhumpa Lahiri", what: "Title story + “Hell-Heaven”.", why: "Long stories that are nearly novellas. Study their proportions.", bookId: "unaccustomed" },
    ],
    stories: [
      { title: "“In the Cemetery Where Al Jolson Is Buried”", author: "Amy Hempel", what: "Week 1. Widely anthologised; often online.", why: "Grief through compression and omission. What did she cut?" },
      { title: "“Revelation”", author: "Flannery O'Connor", what: "Week 2. Widely anthologised; often online.", why: "A character's self-image cracked by one encounter." },
      { title: "“Sticks”", author: "George Saunders", what: "Week 3. Widely anthologised; often online.", why: "A whole life in under 400 words. A lesson in proportion." },
      { title: "“The Husband Stitch”", author: "Carmen Maria Machado", what: "Week 4. Widely anthologised; often online.", why: "Old forms and folk tales reworked. Notice the structure." },
    ],
    readingQuestions: [
      "How do Lahiri's long stories pace themselves differently from her short ones?",
      "Reading your own draft: where did you skim?",
    ],
    weeks: [
      week(10, 1, "Drawer week", [
        ["craft", 0.75, "Scofield: opening chapters"],
        ["lecture", 0.75, "Writing Excuses: revision episode"],
        ["reflect", 0.5, "Don't open the draft. Write down what you remember as its strongest and weakest parts."],
        ["fiction", 2.5, "Lahiri: “Unaccustomed Earth”"],
        ["writing", 2.5, "Story #7: draft a new short story (≈2,000 words)", "Keep your hand in while the draft rests."],
        ["writing", 2, "Story #7: finish the draft", "Done beats good. You'll revise it in Month 11."],
        ["fiction", 1, "Story of the week: “In the Cemetery Where Al Jolson Is Buried” (Amy Hempel)", "Grief through compression and omission. What did she cut?"],
      ]),
      week(10, 2, "Read as a reader", [
        ["craft", 0.75, "Scofield: on the first read-through"],
        ["lecture", 0.75, "Sanderson or Writing Excuses on revision"],
        ["reflect", 0.5, "Write a one-page “reader's report” on your own draft"],
        ["fiction", 2.5, "Lahiri: “Hell-Heaven”"],
        ["writing", 3, "Read the whole draft in one or two sittings", "Margin marks only: B = bored, C = confused, ! = alive. No fixing."],
        ["writing", 1.5, "Read Story #7 aloud; fix only its ending"],
        ["fiction", 1, "Story of the week: “Revelation” (Flannery O'Connor)", "A character's self-image cracked by one encounter."],
      ]),
      week(10, 3, "Reverse outline and diagnosis", [
        ["craft", 0.75, "Scofield: diagnosing structure"],
        ["lecture", 0.75, "Writing Excuses: revision episode"],
        ["reflect", 0.5, "Run the scene function test on every scene"],
        ["fiction", 2.5, "A story or novella of your choice"],
        ["writing", 2.5, "Reverse outline: one line per scene (what changes, POV, words)"],
        ["writing", 2, "Diagnosis: list the top five problems, biggest first", "Typical ones: weak motivation, saggy middle, unclear stakes, unearned climax, too much backstory."],
        ["fiction", 1, "Story of the week: “Sticks” (George Saunders)", "A whole life in under 400 words. A lesson in proportion."],
      ]),
      week(10, 4, "Revision plan", [
        ["craft", 0.75, "Scofield: making a revision plan"],
        ["lecture", 0.75, "Writing Excuses: revision episode"],
        ["reflect", 0.5, "Month 10 reflection"],
        ["fiction", 2.5, "A story or novella of your choice"],
        ["writing", 2, "Write the revision plan", "For each of the five problems: what will change, in which scenes, in what order."],
        ["writing", 2.5, "Begin structural revision: cut, merge or add scenes per the plan"],
        ["fiction", 1, "Story of the week: “The Husband Stitch” (Carmen Maria Machado)", "Old forms and folk tales reworked. Notice the structure."],
      ]),
    ],
    deliverables: [
      { id: "m10d1", text: "Four story-of-the-week notes on compression and proportion" },
      { id: "m10d2", text: "Story #7 drafted" },
      { id: "m10d3", text: "Reader's report on your own draft" },
      { id: "m10d4", text: "Reverse outline of the whole novella" },
      { id: "m10d5", text: "Revision plan (top five problems → changes)" },
    ],
    selfCheck: [
      "Can you name your draft's single biggest problem?",
      "Do you know which scenes you're cutting?",
    ],
    pitfalls: [
      "Starting with sentence polishing. It feels like progress and isn't.",
      "Despair on the first read. Every first draft reads like this.",
    ],
  },

  /* ============================ MONTH 11 ============================ */
  {
    n: 11,
    quarter: 4,
    title: "Draft 2 & Beta Readers",
    question: "How do you turn a first draft into something other people can read?",
    summary:
      "You carry out the revision plan, producing Draft 2, and send it to two or three beta readers with specific questions. While they read, you revise a short story and start a free-choice novel in the direction you're leaning, as a scouting trip for Year 2.",
    concepts: [
      { term: "Structural revision", explain: "Moving, cutting and adding scenes; rebuilding the middle; making the climax hinge on the protagonist's choice. Do this before any line editing." },
      { term: "Proportion", explain: "Does each part get the space it deserves? Important moments should be long; transitions short. Cut over-written beginnings." },
      { term: "Beta reader questions", explain: "Ask specific questions: Where did you stop wanting to read? What confused you? What did you believe about X at the midpoint? Which character stayed with you?" },
      { term: "Receiving feedback", explain: "Readers are usually right that something is wrong and often wrong about how to fix it. Look for patterns across readers. Say thank you, not “but”." },
      { term: "Exposition and characterisation at revision", explain: "Cut explanations the scenes already make clear. Trust the reader." },
    ],
    craft: [
      { title: "The Last Draft", author: "Sandra Scofield", what: "Second half.", why: "Scene-level revision.", bookId: "scofield" },
      { title: "Self-Editing for Fiction Writers", author: "Renni Browne & Dave King", what: "Chapters: Characterization and Exposition, Point of View, Proportion.", why: "Revision-stage craft.", bookId: "browne-king" },
    ],
    lectures: [
      { title: "Writing Excuses — beta readers & critique", what: "1–2 episodes.", url: WRITING_EXCUSES, why: "How to use outside readers." },
    ],
    fiction: [
      { title: "Free choice — a scouting novel", what: "Pick one in the direction you're leaning. Literary: The God of Small Things (Arundhati Roy). Psychological/crime: In the Woods (Tana French). Speculative: Stories of Your Life and Others (Ted Chiang).", why: "Read the shelf you might want to write for in Year 2.", bookId: "free-choice" },
    ],
    stories: [
      { title: "“The Yellow Wallpaper”", author: "Charlotte Perkins Gilman", what: "Week 1. Free on Project Gutenberg.", why: "A narrator's mind coming apart, told in journal entries.", url: gutenberg("yellow wallpaper") },
      { title: "“In a Grove”", author: "Ryūnosuke Akutagawa", what: "Week 2. Widely anthologised; often online.", why: "Several testimonies, no verdict. How much can a reader assemble alone?" },
      { title: "“Lamb to the Slaughter”", author: "Roald Dahl", what: "Week 3. Widely anthologised; often online.", why: "Plot and dark comedy in a few pages. Every object pays off." },
      { title: "“The Rocking-Horse Winner”", author: "D.H. Lawrence", what: "Week 4. Widely anthologised; often online.", why: "A fable's design with a realist surface." },
    ],
    readingQuestions: [
      "Your scouting novel: what does this kind of book promise its readers?",
      "Which story of the week from this year would you most like to have written? Why?",
    ],
    weeks: [
      week(11, 1, "Structural revision", [
        ["craft", 0.75, "Scofield: scene-level revision"],
        ["lecture", 0.75, "Writing Excuses: revision episode"],
        ["reflect", 0.5, "Tick off the problems from your plan as you fix them"],
        ["fiction", 2.5, "Scouting novel — begin"],
        ["writing", 2, "Draft 2: rebuild per the plan"],
        ["writing", 2.5, "Saturday: Draft 2 — the biggest structural change first"],
        ["fiction", 1, "Story of the week: “The Yellow Wallpaper” (Charlotte Perkins Gilman)", "A narrator's mind coming apart, told in journal entries."],
      ]),
      week(11, 2, "Motivation and proportion", [
        ["craft", 0.75, "Browne & King: Characterization and Exposition + Proportion"],
        ["lecture", 0.75, "Writing Excuses: revision episode"],
        ["reflect", 0.5, "Motivation audit: for each major choice, is the setup there?"],
        ["fiction", 2.5, "Scouting novel — continue"],
        ["writing", 2, "Draft 2: strengthen setups for each major choice"],
        ["writing", 2.5, "Saturday: Draft 2 — fix proportion (cut over-long beginnings and transitions)"],
        ["fiction", 1, "Story of the week: “In a Grove” (Ryūnosuke Akutagawa)", "Several testimonies, no verdict. How much can a reader assemble alone?"],
      ]),
      week(11, 3, "Finish Draft 2", [
        ["craft", 0.75, "Browne & King: Point of View chapter (check POV consistency)"],
        ["lecture", 0.75, "Writing Excuses: beta readers"],
        ["reflect", 0.5, "Write 5–6 specific questions for beta readers"],
        ["fiction", 2.5, "Scouting novel — continue"],
        ["writing", 2, "Draft 2: continuity pass with your bible"],
        ["writing", 2.5, "Saturday: finish Draft 2"],
        ["fiction", 1, "Story of the week: “Lamb to the Slaughter” (Roald Dahl)", "Plot and dark comedy in a few pages. Every object pays off."],
      ]),
      week(11, 4, "Send it out", [
        ["craft", 0.75, "Read Draft 2's first chapter aloud and fix only what makes you wince"],
        ["lecture", 0.75, "Writing Excuses: receiving critique"],
        ["reflect", 0.5, "Send Draft 2 to 2–3 beta readers with your questions and a deadline (3 weeks)"],
        ["fiction", 2.5, "Scouting novel — finish or continue"],
        ["writing", 2, "Revise Story #7"],
        ["writing", 2.5, "Revise your best Month 1–4 story with everything you now know"],
        ["fiction", 1, "Story of the week: “The Rocking-Horse Winner” (D.H. Lawrence)", "A fable's design with a realist surface."],
      ]),
    ],
    deliverables: [
      { id: "m11d1", text: "Draft 2 of the novella complete" },
      { id: "m11d2", text: "Draft 2 sent to 2–3 beta readers with specific questions" },
      { id: "m11d3", text: "Story #7 and one earlier story revised" },
      { id: "m11d4", text: "Four story-of-the-week notes" },
    ],
    selfCheck: [
      "Are the top five problems from your plan actually fixed?",
      "Are your beta-reader questions specific enough to get useful answers?",
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
    question: "How do you finish the year as a working writer?",
    summary:
      "You triage the beta feedback, produce Draft 3, line-edit your two best short stories and submit them to magazines. Then you look back at the year and decide Year 2.",
    concepts: [
      { term: "Feedback triage", explain: "Sort notes into: everyone said it (fix), one person said it and you agree (fix), one person said it and you don't (note it), and taste (ignore)." },
      { term: "Line editing", explain: "Rhythm, word choice, repetition, filter words, clichés. Cut 10% if you can. Read it aloud." },
      { term: "Submissions", explain: "Literary magazines take short stories. Read what a magazine publishes before you submit. Track every submission. Simultaneous submissions are usually allowed, but check each magazine's guidelines." },
      { term: "Rejection is the default", explain: "Most good stories are rejected many times. Treat submission as a numbers process, not a verdict." },
      { term: "Paths to publication", explain: "Traditional (agents → publishers), independent presses, magazines and contests, self-publishing. Novellas are hard to sell to big publishers but suit contests, small presses and indie routes. Learn the landscape before choosing." },
      { term: "Year 2 decisions", explain: "Novel or more short fiction? Which genre? Add the Hindi track? Make the decision from your actual work, not from wishes." },
    ],
    craft: [
      { title: "Self-Editing for Fiction Writers", author: "Renni Browne & Dave King", what: "Chapters: Breaking Up Is Easy to Do, Once Is Usually Enough, Sophistication, Voice.", why: "The final line-level polish.", bookId: "browne-king" },
    ],
    lectures: [
      { title: "Brandon Sanderson — BYU 2020, Business of writing lectures", what: "Publishing, agents, self-publishing.", why: "The business side, from someone who has done it every way.", url: yt("Brandon Sanderson lecture 2020 publishing business") },
    ],
    fiction: [
      { title: "Magazines you'll submit to", what: "Read 3–4 recently published stories from each magazine you're considering.", why: "Submitting blind wastes your work." },
    ],
    stories: [
      { title: "“A Small, Good Thing”", author: "Raymond Carver", what: "Week 1. Widely anthologised; often online.", why: "A long story about grief that ends with bread. How does it earn that?" },
      { title: "“Gimpel the Fool”", author: "Isaac Bashevis Singer", what: "Week 2. Widely anthologised; often online.", why: "A voice so particular it carries the whole story." },
      { title: "Your favourite story of the year", what: "Week 3. Widely anthologised; often online.", why: "Re-read the one that stayed with you most and write down why." },
      { title: "The Lottery (re-read)", author: "Shirley Jackson", what: "Week 4. Widely anthologised; often online.", why: "Your first story of the week. What do you see now that you couldn't in Month 1?" },
    ],
    readingQuestions: [
      "What do the magazines you like publish? Does your work belong there?",
      "Re-reading your first story of the week, what do you notice now?",
    ],
    weeks: [
      week(12, 1, "Feedback triage", [
        ["craft", 0.75, "Browne & King: Breaking Up + Once Is Usually Enough"],
        ["lecture", 0.75, "Sanderson: business lecture, part 1"],
        ["reflect", 0.5, "Triage beta feedback into fix / consider / ignore"],
        ["fiction", 2.5, "Research 5 magazines; read their recent stories"],
        ["writing", 2, "Draft 3: fix what everyone flagged"],
        ["writing", 2.5, "Saturday: Draft 3 continued"],
        ["fiction", 1, "Story of the week: “A Small, Good Thing” (Raymond Carver)", "A long story about grief that ends with bread. How does it earn that?"],
      ]),
      week(12, 2, "Draft 3 and line edit", [
        ["craft", 0.75, "Browne & King: Sophistication + Voice"],
        ["lecture", 0.75, "Sanderson: business lecture, part 2"],
        ["reflect", 0.5, "Shortlist 3–5 magazines for your two best stories"],
        ["fiction", 2.5, "Read more from your shortlisted magazines"],
        ["writing", 2, "Draft 3: line edit (read aloud, cut 10%)"],
        ["writing", 2.5, "Saturday: finish Draft 3"],
        ["fiction", 1, "Story of the week: “Gimpel the Fool” (Isaac Bashevis Singer)", "A voice so particular it carries the whole story."],
      ]),
      week(12, 3, "Polish and prepare", [
        ["craft", 0.75, "Read submission guidelines for your shortlist; draft a short cover letter"],
        ["lecture", 0.75, "Sanderson: business lecture, part 3"],
        ["reflect", 0.5, "Set up a submissions tracker (story · magazine · date · result)"],
        ["fiction", 2.5, "Free reading"],
        ["writing", 2.5, "Line-edit your two best short stories for submission"],
        ["writing", 2, "Write a short bio and cover letter; format both stories for submission", "Standard manuscript format, with your name and word count on page 1."],
        ["fiction", 1, "Re-read your favourite story of the week", "Re-read the one that stayed with you most and write down why."],
      ]),
      week(12, 4, "Submit and look back", [
        ["craft", 0.75, "Year review", "Re-read Story #1, then your best recent story. Write down what changed."],
        ["lecture", 0.75, "Year 2 plan", "Novel or short fiction? Which genre? Weekly hours? Add the Hindi track?"],
        ["reflect", 0.5, "Write a one-page letter to yourself to open in a year"],
        ["fiction", 2.5, "Read for pleasure. You've earned it."],
        ["writing", 1, "Submit two stories"],
        ["writing", 3.5, "Start something new: the first pages of Year 2's project"],
        ["fiction", 1, "Re-read “The Lottery”, your first story of the week", "Your first story of the week. What do you see now that you couldn't in Month 1?"],
      ]),
    ],
    deliverables: [
      { id: "m12d1", text: "Draft 3 of the novella" },
      { id: "m12d2", text: "Two short stories submitted to magazines" },
      { id: "m12d3", text: "Submissions tracker set up" },
      { id: "m12d4", text: "Bio, cover letter and formatted manuscripts ready" },
      { id: "m12d5", text: "Year review + Year 2 plan" },
    ],
    selfCheck: [
      "Can you write a story now that you couldn't have written in Month 1?",
      "Do you know what you want to write next?",
      "Is there a reason to add the Hindi track in Year 2? Decide from what you want to write, not from guilt.",
    ],
    pitfalls: [
      "Holding back submissions until the stories are perfect. They never will be.",
      "Treating a rejection as a verdict on you.",
    ],
  },
];

export const MONTHS: Month[] = RAW.map(({ craft, lectures, fiction, stories, ...m }) => ({
  ...m,
  shelves: [
    { label: "Craft books", items: craft },
    { label: "Lectures & podcasts", items: lectures },
    { label: "Fiction", items: fiction },
    { label: "Story of the week · 1 h", items: stories },
  ],
}));
