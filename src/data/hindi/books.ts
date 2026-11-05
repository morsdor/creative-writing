import type { Book } from "../../lib/types.ts";
import { HINDWI } from "../helpers.ts";

const PRATINIDHI = "Often on Hindwi; otherwise in the author's selected stories (e.g. Rajkamal's प्रतिनिधि कहानियाँ series).";

export const BOOKS: Book[] = [
  /* --------------------- Craft: essays, criticism, diaries --------------------- */
  { id: "hi-yadav", title: "कहानी : स्वरूप और संवेदना", author: "राजेंद्र यादव", kind: "craft", months: [2, 3, 11], priority: "buy-first", length: "≈240 pp (a chapter at a time)", note: "Criticism by one of the founders of the नई कहानी, on what a story is and how it works. It isn't a how-to: pull the craft out yourself. Vani Prakashan." },
  { id: "hi-samanantar", title: "एक दुनिया समानांतर", author: "सं. राजेंद्र यादव", kind: "craft", months: [5, 6], priority: "buy-first", length: "≈380 pp", note: "An anthology of नई कहानी stories with Yadav's long introduction on what was new about them. Counts as craft and fiction." },
  { id: "hi-namvar", title: "कहानी : नई कहानी", author: "नामवर सिंह", kind: "craft", months: [4], priority: "buy-later", length: "Selected essays", note: "The criticism that helped define the नई कहानी. Read his essays on Nirmal Verma after you've read परिंदे. Rajkamal." },
  { id: "hi-premchand-essays", title: "साहित्य का उद्देश्य · कहानी-कला (निबंध)", author: "प्रेमचंद", kind: "craft", months: [1], priority: "free-online", length: "Two or three essays", note: "Premchand on what literature and the short story are for. Public domain; collected in कुछ विचार and widely online.", url: HINDWI },
  { id: "hi-rakesh-diary", title: "मोहन राकेश की डायरी", author: "मोहन राकेश", kind: "craft", months: [7, 8], priority: "buy-later", length: "Read a few entries a week", note: "A writer's working diary: doubt, money, blocked days, breakthroughs. Company for the drafting months." },
  { id: "hi-mannu-memoir", title: "एक कहानी यह भी", author: "मन्नू भंडारी", kind: "craft", months: [3, 10], priority: "buy-later", length: "Memoir", note: "A writer's account of her life and the people around her: where fiction's raw material comes from." },
  { id: "hi-chekhov", title: "चेख़व की कहानियाँ (हिंदी अनुवाद)", author: "अंतोन चेख़व", kind: "craft", months: [1], priority: "optional", length: "One or two stories", note: "Any Hindi translation. Chekhov shaped the modern short story in Hindi too." },

  /* ------------------------------- Fiction ------------------------------- */
  { id: "hi-premchand", title: "प्रेमचंद की कहानियाँ", author: "प्रेमचंद", kind: "fiction", months: [1, 9], priority: "free-online", length: "≈8 stories", note: "कफ़न, पूस की रात, ईदगाह, ठाकुर का कुआँ, सद्गति, नमक का दारोगा, बड़े भाई साहब, शतरंज के खिलाड़ी. Public domain; free on Hindwi.", url: HINDWI },
  { id: "hi-guleri", title: "उसने कहा था", author: "चंद्रधर शर्मा गुलेरी", kind: "fiction", months: [2, 9], priority: "free-online", length: "Short story", note: "1915. Flashback structure and a payoff decades in the making.", url: HINDWI },
  { id: "hi-prasad", title: "आकाशदीप", author: "जयशंकर प्रसाद", kind: "fiction", months: [2], priority: "free-online", length: "Short story", note: "A romantic story built to one turn. Public domain.", url: HINDWI },
  { id: "hi-renu", title: "पंचलाइट · मारे गए गुलफ़ाम · लाल पान की बेगम", author: "फणीश्वरनाथ रेणु", kind: "fiction", months: [2, 5], priority: "optional", length: "3 stories", note: PRATINIDHI, url: HINDWI },
  { id: "hi-parsai", title: "भोलाराम का जीव", author: "हरिशंकर परसाई", kind: "fiction", months: [2], priority: "optional", length: "Short story", note: "Satire with a clean plot engine. " + PRATINIDHI, url: HINDWI },
  { id: "hi-shekhar-joshi", title: "कोसी का घटवार", author: "शेखर जोशी", kind: "fiction", months: [2, 9], priority: "optional", length: "Short story", note: "A quiet story with one of Hindi's great endings. " + PRATINIDHI, url: HINDWI },
  { id: "hi-tyagpatra", title: "त्यागपत्र", author: "जैनेंद्र कुमार", kind: "fiction", months: [3], priority: "buy-first", length: "≈100 pp", note: "A short novel about a nephew and the aunt he failed. Character, guilt and an unreliable conscience." },
  { id: "hi-sahni", title: "चीफ़ की दावत · अमृतसर आ गया है · वाङ्चू", author: "भीष्म साहनी", kind: "fiction", months: [3, 8], priority: "optional", length: "3 stories", note: PRATINIDHI, url: HINDWI },
  { id: "hi-amarkant", title: "दोपहर का भोजन", author: "अमरकांत", kind: "fiction", months: [3], priority: "optional", length: "Short story", note: "A whole family's poverty in one meal. " + PRATINIDHI, url: HINDWI },
  { id: "hi-verma", title: "परिंदे · लंदन की एक रात", author: "निर्मल वर्मा", kind: "fiction", months: [4, 10], priority: "optional", length: "2 long stories", note: "Interiority, silence, free indirect style. " + PRATINIDHI, url: HINDWI },
  { id: "hi-mannu-stories", title: "यही सच है · अकेली", author: "मन्नू भंडारी", kind: "fiction", months: [4, 5], priority: "optional", length: "2 stories", note: PRATINIDHI, url: HINDWI },
  { id: "hi-rakesh", title: "मिस पाल · मलबे का मालिक", author: "मोहन राकेश", kind: "fiction", months: [4, 5], priority: "optional", length: "2 stories", note: PRATINIDHI, url: HINDWI },
  { id: "hi-sobti", title: "मित्रो मरजानी (+ कहानी सिक्का बदल गया)", author: "कृष्णा सोबती", kind: "fiction", months: [4, 5], priority: "buy-first", length: "≈90 pp + 1 story", note: "One of the most alive voices in Hindi fiction, built on bold, earthy dialogue." },
  { id: "hi-gyanranjan", title: "पिता", author: "ज्ञानरंजन", kind: "fiction", months: [5], priority: "optional", length: "Short story", note: "A father and son, almost no plot, enormous pressure. " + PRATINIDHI, url: HINDWI },
  { id: "hi-suraj", title: "सूरज का सातवाँ घोड़ा", author: "धर्मवीर भारती", kind: "fiction", months: [6], priority: "buy-first", length: "≈100 pp", note: "A frame narrative in which a narrator tells stories over several afternoons. Openly about how stories are built." },
  { id: "hi-kamleshwar", title: "राजा निरबंसिया", author: "कमलेश्वर", kind: "fiction", months: [6], priority: "optional", length: "Long story", note: "A folk tale and a modern story braided together: a design lesson. " + PRATINIDHI, url: HINDWI },
  { id: "hi-mahabhoj", title: "महाभोज", author: "मन्नू भंडारी", kind: "fiction", months: [7], priority: "buy-later", length: "≈170 pp", note: "A village death becomes political capital. Setting and power as pressure." },
  { id: "hi-priyamvada", title: "वापसी", author: "उषा प्रियंवदा", kind: "fiction", months: [8, 9], priority: "optional", length: "Short story", note: "A retired man comes home and no longer belongs. " + PRATINIDHI, url: HINDWI },
  { id: "hi-uday", title: "तिरिछ · और अंत में प्रार्थना", author: "उदय प्रकाश", kind: "fiction", months: [8, 10], priority: "buy-later", length: "2 long stories", note: "Escalating dread; a long story with novella proportions." },
  { id: "hi-deewar", title: "दीवार में एक खिड़की रहती थी", author: "विनोद कुमार शुक्ल", kind: "fiction", months: [9], priority: "buy-later", length: "≈170 pp", note: "The ordinary made extraordinary through perception and very simple sentences. Study it; don't imitate it." },
  { id: "hi-free-choice", title: "Free choice — a scouting novel", author: "You choose", kind: "fiction", months: [11], priority: "optional", length: "One novel", note: "माई (गीतांजलि श्री) · कसप (मनोहर श्याम जोशी) · राग दरबारी (श्रीलाल शुक्ल) · नौकर की कमीज़ (विनोद कुमार शुक्ल). Pick the shelf you might write for in Year 2." },

  /* ------------------------------- Language ------------------------------- */
  { id: "hi-achhi-hindi", title: "अच्छी हिंदी", author: "रामचंद्र वर्मा", kind: "language", months: [2, 3, 5, 6, 8, 10, 12], priority: "buy-first", length: "A chapter at a time", note: "The closest Hindi has to a usage guide: common mistakes and how careful prose avoids them. Old-fashioned in places. Take the principles, not every rule." },
  { id: "hi-samantar", title: "समांतर कोश / अरविंद लैक्सिकन", author: "अरविंद कुमार", kind: "language", months: [6, 11, 12], priority: "free-online", length: "Thesaurus", note: "The first Hindi thesaurus. The online Arvind Lexicon is the easiest way in; use it to find the exact word, not a grander one.", url: "https://arvindlexicon.com/" },
  { id: "hi-vartani", title: "देवनागरी लिपि तथा हिंदी वर्तनी का मानकीकरण", author: "केंद्रीय हिंदी निदेशालय", kind: "language", months: [1, 12], priority: "free-online", length: "Short booklet", note: "The official spelling standard (anusvar, chandrabindu, nukta, hyphens). Free PDF from the Central Hindi Directorate. Pick your rules once and stick to them." },
];
