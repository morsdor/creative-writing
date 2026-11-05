import type { Book } from "../../lib/types.ts";
import { HINDWI } from "../helpers.ts";

const PRATINIDHI = "अक्सर हिन्दवी पर; नहीं तो लेखक की चुनी हुई कहानियों में (जैसे राजकमल की प्रतिनिधि कहानियाँ शृंखला)।";

export const BOOKS: Book[] = [
  /* --------------------- शिल्प: निबंध, आलोचना, डायरी --------------------- */
  { id: "hi-yadav", title: "कहानी : स्वरूप और संवेदना", author: "राजेंद्र यादव", kind: "craft", months: [2, 3, 11], priority: "buy-first", length: "≈240 पृष्ठ (एक बार में एक अध्याय)", note: "नई कहानी के एक संस्थापक की आलोचना: कहानी क्या है और कैसे काम करती है। यह निर्देश-पुस्तिका नहीं है: शिल्प आपको ख़ुद निकालना होगा। वाणी प्रकाशन।" },
  { id: "hi-samanantar", title: "एक दुनिया समानांतर", author: "सं. राजेंद्र यादव", kind: "craft", months: [5, 6], priority: "buy-first", length: "≈380 पृष्ठ", note: "नई कहानी की कहानियों का संकलन, यादव की लंबी भूमिका के साथ कि उनमें नया क्या था। शिल्प और कथा, दोनों में गिनिए।" },
  { id: "hi-namvar", title: "कहानी : नई कहानी", author: "नामवर सिंह", kind: "craft", months: [4], priority: "buy-later", length: "चुने हुए लेख", note: "वह आलोचना जिसने नई कहानी की पहचान गढ़ने में मदद की। निर्मल वर्मा पर उनके लेख परिंदे पढ़ने के बाद पढ़िए। राजकमल।" },
  { id: "hi-premchand-essays", title: "साहित्य का उद्देश्य · कहानी-कला (निबंध)", author: "प्रेमचंद", kind: "craft", months: [1], priority: "free-online", length: "दो-तीन निबंध", note: "साहित्य और कहानी किसलिए हैं, प्रेमचंद की नज़र से। सार्वजनिक क्षेत्र में; कुछ विचार में संकलित और ऑनलाइन आसानी से उपलब्ध।", url: HINDWI },
  { id: "hi-rakesh-diary", title: "मोहन राकेश की डायरी", author: "मोहन राकेश", kind: "craft", months: [7, 8], priority: "buy-later", length: "हफ़्ते में कुछ प्रविष्टियाँ", note: "एक लेखक की कामकाजी डायरी: संदेह, पैसा, अटके दिन, अचानक खुलते रास्ते। मसौदे के महीनों का साथी।" },
  { id: "hi-mannu-memoir", title: "एक कहानी यह भी", author: "मन्नू भंडारी", kind: "craft", months: [3, 10], priority: "buy-later", length: "संस्मरण", note: "एक लेखिका का अपने जीवन और आसपास के लोगों का बयान: कथा का कच्चा माल कहाँ से आता है।" },
  { id: "hi-chekhov", title: "चेख़व की कहानियाँ (हिंदी अनुवाद)", author: "अंतोन चेख़व", kind: "craft", months: [1], priority: "optional", length: "एक-दो कहानियाँ", note: "कोई भी हिंदी अनुवाद। आधुनिक कहानी को हिंदी में भी चेख़व ने गढ़ा।" },

  /* ------------------------------- कथा ------------------------------- */
  { id: "hi-premchand", title: "प्रेमचंद की कहानियाँ", author: "प्रेमचंद", kind: "fiction", months: [1, 9], priority: "free-online", length: "≈8 कहानियाँ", note: "कफ़न, पूस की रात, ईदगाह, ठाकुर का कुआँ, सद्गति, नमक का दारोगा, बड़े भाई साहब, शतरंज के खिलाड़ी। सार्वजनिक क्षेत्र में; हिन्दवी पर मुफ़्त।", url: HINDWI },
  { id: "hi-guleri", title: "उसने कहा था", author: "चंद्रधर शर्मा गुलेरी", kind: "fiction", months: [2, 9], priority: "free-online", length: "कहानी", note: "1915। फ़्लैशबैक का ढाँचा और दशकों में पकता एक फल।", url: HINDWI },
  { id: "hi-prasad", title: "आकाशदीप", author: "जयशंकर प्रसाद", kind: "fiction", months: [2], priority: "free-online", length: "कहानी", note: "एक मोड़ तक बनी रूमानी कहानी। सार्वजनिक क्षेत्र में।", url: HINDWI },
  { id: "hi-renu", title: "पंचलाइट · मारे गए गुलफ़ाम · लाल पान की बेगम", author: "फणीश्वरनाथ रेणु", kind: "fiction", months: [2, 5], priority: "optional", length: "3 कहानियाँ", note: PRATINIDHI, url: HINDWI },
  { id: "hi-parsai", title: "भोलाराम का जीव", author: "हरिशंकर परसाई", kind: "fiction", months: [2], priority: "optional", length: "कहानी", note: "साफ़ कथानक-इंजन वाला व्यंग्य। " + PRATINIDHI, url: HINDWI },
  { id: "hi-shekhar-joshi", title: "कोसी का घटवार", author: "शेखर जोशी", kind: "fiction", months: [2, 9], priority: "optional", length: "कहानी", note: "हिंदी के सबसे अच्छे अंतों में से एक वाली एक शांत कहानी। " + PRATINIDHI, url: HINDWI },
  { id: "hi-tyagpatra", title: "त्यागपत्र", author: "जैनेंद्र कुमार", kind: "fiction", months: [3], priority: "buy-first", length: "≈100 पृष्ठ", note: "एक भतीजे और उस बुआ का लघु उपन्यास जिसका साथ उसने नहीं दिया। चरित्र, अपराध-बोध और एक अविश्वसनीय अंतरात्मा।" },
  { id: "hi-sahni", title: "चीफ़ की दावत · अमृतसर आ गया है · वाङ्चू", author: "भीष्म साहनी", kind: "fiction", months: [3, 8], priority: "optional", length: "3 कहानियाँ", note: PRATINIDHI, url: HINDWI },
  { id: "hi-amarkant", title: "दोपहर का भोजन", author: "अमरकांत", kind: "fiction", months: [3], priority: "optional", length: "कहानी", note: "एक भोजन में पूरे परिवार की ग़रीबी। " + PRATINIDHI, url: HINDWI },
  { id: "hi-verma", title: "परिंदे · लंदन की एक रात", author: "निर्मल वर्मा", kind: "fiction", months: [4, 10], priority: "optional", length: "2 लंबी कहानियाँ", note: "अंतर्मन, मौन, मुक्त अप्रत्यक्ष शैली। " + PRATINIDHI, url: HINDWI },
  { id: "hi-mannu-stories", title: "यही सच है · अकेली", author: "मन्नू भंडारी", kind: "fiction", months: [4, 5], priority: "optional", length: "2 कहानियाँ", note: PRATINIDHI, url: HINDWI },
  { id: "hi-rakesh", title: "मिस पाल · मलबे का मालिक", author: "मोहन राकेश", kind: "fiction", months: [4, 5], priority: "optional", length: "2 कहानियाँ", note: PRATINIDHI, url: HINDWI },
  { id: "hi-sobti", title: "मित्रो मरजानी (+ कहानी सिक्का बदल गया)", author: "कृष्णा सोबती", kind: "fiction", months: [4, 5], priority: "buy-first", length: "≈90 पृष्ठ + 1 कहानी", note: "हिंदी कथा की सबसे जीवंत आवाज़ों में से एक, बेबाक और ठेठ संवादों पर टिकी।" },
  { id: "hi-gyanranjan", title: "पिता", author: "ज्ञानरंजन", kind: "fiction", months: [5], priority: "optional", length: "कहानी", note: "पिता और पुत्र, लगभग कोई कथानक नहीं, भारी दबाव। " + PRATINIDHI, url: HINDWI },
  { id: "hi-suraj", title: "सूरज का सातवाँ घोड़ा", author: "धर्मवीर भारती", kind: "fiction", months: [6], priority: "buy-first", length: "≈100 पृष्ठ", note: "कथा के भीतर कथा, जिसमें एक कथावाचक कई दोपहरों में कहानियाँ सुनाता है। खुलकर इस बारे में कि कहानियाँ कैसे बनती हैं।" },
  { id: "hi-kamleshwar", title: "राजा निरबंसिया", author: "कमलेश्वर", kind: "fiction", months: [6], priority: "optional", length: "लंबी कहानी", note: "एक लोक-कथा और एक आधुनिक कहानी आपस में गुँथी हुई: रचना का एक पाठ। " + PRATINIDHI, url: HINDWI },
  { id: "hi-mahabhoj", title: "महाभोज", author: "मन्नू भंडारी", kind: "fiction", months: [7], priority: "buy-later", length: "≈170 पृष्ठ", note: "गाँव की एक मौत राजनीतिक पूँजी बन जाती है। परिवेश और सत्ता, दबाव के रूप में।" },
  { id: "hi-priyamvada", title: "वापसी", author: "उषा प्रियंवदा", kind: "fiction", months: [8, 9], priority: "optional", length: "कहानी", note: "एक रिटायर आदमी घर लौटता है और पाता है कि अब वह यहाँ का नहीं रहा। " + PRATINIDHI, url: HINDWI },
  { id: "hi-uday", title: "तिरिछ · और अंत में प्रार्थना", author: "उदय प्रकाश", kind: "fiction", months: [8, 10], priority: "buy-later", length: "2 लंबी कहानियाँ", note: "बढ़ती हुई दहशत; लघु उपन्यास जैसे अनुपात वाली एक लंबी कहानी।" },
  { id: "hi-deewar", title: "दीवार में एक खिड़की रहती थी", author: "विनोद कुमार शुक्ल", kind: "fiction", months: [9], priority: "buy-later", length: "≈170 पृष्ठ", note: "देखने के ढंग और बहुत सरल वाक्यों से असाधारण बना साधारण। इसे पढ़िए; इसकी नक़ल मत कीजिए।" },
  { id: "hi-free-choice", title: "अपनी पसंद — टोह लेने वाला एक उपन्यास", author: "आप चुनिए", kind: "fiction", months: [11], priority: "optional", length: "एक उपन्यास", note: "माई (गीतांजलि श्री) · कसप (मनोहर श्याम जोशी) · राग दरबारी (श्रीलाल शुक्ल) · नौकर की कमीज़ (विनोद कुमार शुक्ल)। वह अलमारी चुनिए जिसके लिए आप दूसरे साल लिखना चाहें।" },

  /* ------------------------------- भाषा ------------------------------- */
  { id: "hi-achhi-hindi", title: "अच्छी हिंदी", author: "रामचंद्र वर्मा", kind: "language", months: [2, 3, 5, 6, 8, 10, 12], priority: "buy-first", length: "एक बार में एक अध्याय", note: "हिंदी की सबसे क़रीबी प्रयोग-निर्देशिका: आम ग़लतियाँ, और सधा हुआ गद्य उनसे कैसे बचता है। कहीं-कहीं पुराने ढंग की है। सिद्धांत लीजिए, हर नियम नहीं।" },
  { id: "hi-samantar", title: "समांतर कोश / अरविंद लैक्सिकन", author: "अरविंद कुमार", kind: "language", months: [6, 11, 12], priority: "free-online", length: "थिसॉरस", note: "हिंदी का पहला थिसॉरस। ऑनलाइन अरविंद लैक्सिकन (खोजकर) सबसे आसान रास्ता है; इसे सटीक शब्द के लिए बरतिए, भारी-भरकम शब्द के लिए नहीं।", url: "https://www.google.com/search?q=Arvind+Lexicon+Hindi+thesaurus" },
  { id: "hi-vartani", title: "देवनागरी लिपि तथा हिंदी वर्तनी का मानकीकरण", author: "केंद्रीय हिंदी निदेशालय", kind: "language", months: [1, 12], priority: "free-online", length: "छोटी पुस्तिका", note: "वर्तनी का आधिकारिक मानक (अनुस्वार, चंद्रबिंदु, नुक़्ता, योजक-चिह्न)। केंद्रीय हिंदी निदेशालय की साइट पर मुफ़्त PDF। अपने नियम एक बार चुनिए और उन पर टिके रहिए।" },
];
