/*
classInfo: holds a list which holds info about each individual -listed- class
on curricullege
*/


/* TODO: 

- 6/13/20: create a list for each of our listed websites on the google doc

*/


/* INFO:

classList: a variable accessed by the webpage to display individualized class information

individual lists: every list variable should have a variable name as such:

info<classAcronym>

- classKEY: each of these variables MUST include their respective acronym at
  the first element of this list [this is for easier accessing on the website's end]
  < also bc idk how to make this better oops >

- length: these lists can be as long as required to hold all of the info

- url links: these must be embedded into the string with an HTML <a> tag to function
	
	ex: <a href='[insert full https link here]'>[shortened url]</a>

*/

/* EXAMPLE:

	const info<CLASSNAME> = [
	"classKEY", 
	"classNAME",
	"<a href='https://www.youtube.com'>YouTube</a>",
	];

*/


//individual lists: 

const infoCSA = [
	"csa", 
	"CSA",
	"<a href='https://www.codingbat.com/java'>- Java Practice - codingbat.com</a>", 
	"<a href='https://youtu.be/RRubcjpTkks'>- Alex Lee - Learn Java in 14 minutes (seriously)</a>",
	];

const infoCSP = [
	"csp", 
	"CSP",
	"<a href='https://www.codingbat.com/python'>- Python Practice - codingbat.com</a>", 
	"<a href='https://quizlet.com/207034674/ap-computer-science-principles-exam-quizlet-flash-cards/'>- Quizlet - CS Terminology</a>",
	];

const infocalcAB = [
	"calcAB",
	"Calculus AB",
	"<a href='https://www.math.ucdavis.edu/~kouba/ProblemsList.html'>- Kouba - Calculus Concepts and Practice</a>",
	"<a href='https://www.khanacademy.org/math/ap-calculus-ab'>- Khan Academy - Calculus AB</a>",
];

const infocalcBC = [
	"calcBC",
	"Calculus BC",
	"<a href='https://www.math.ucdavis.edu/~kouba/ProblemsList.html'>- Kouba - Calculus Concepts and Practice</a>",
	"<a href='https://www.khanacademy.org/math/ap-calculus-bc'>- Khan Academy - Calculus BC</a>",
];

const infoPhysics = [
	"physics",
	"Physics C: Mechanics",
	"<a href='https://www.khanacademy.org/science/physics'>- Khan Academy - Physics</a>",
	"<a href='http://www.bozemanscience.com/ap-physics'>- Bozeman Science - Concept Videos</a>",
	"<a href='https://apcentral.collegeboard.org/pdf/ap-physics-c-mechanics-practice-exam-2012.pdf?course=ap-physics-c-mechanics'>- CollegeBoard - 2012 Public Practice Exam</a>",
];

const infoChemistry = [
	"chemistry",
	"Chemistry",
	"<a href='http://www.bozemanscience.com/ap-chemistry'>- Bozeman Science - Concept Videos</a>",
	"<a href='https://www.khanacademy.org/science/ap-chemistry'>- Khan Academy - Chemistry</a>",
];

const infoBiology = [
	"biology",
	"Biology",
	"<a href='http://www.bozemanscience.com/ap-biology'>- Bozeman Science - Concept Videos</a>",
	"<a href='https://www.khanacademy.org/science/ap-biology'>- Khan Academy - Biology</a>",
];

const infoLang = [
	"lang",
	"English Language and Composition",
	"<a href='https://youtu.be/bUyzJ7RTzig'>- Ms. Peer Editor - How to Ace the AP Language Rhetorical Analysis Essay</a>",
	"<a href='https://www.youtube.com/watch?v=v_B5RdauS0w&list=PLoGgviqq4845w6_VxQLtAmVypmSMtTd0r'>- CollegeBoard - AP Lang Review Sessions</a>",
	"<a href='https://youtu.be/wL8SB0Z-aRA'>- Matthew Singleton - AP Synthesis Essay: Explaining the Sources</a>"
];

const infoHUG = [
	"hug",
	"Human Geography",
	"<a href='https://docushare.lps.org/docushare/dsweb/Get/Document-1469985/AP%20HuG%20MOTHERLOAD%20Packet.pdf'>- Varley - The Motherload Packet</a>",
	"<a href='https://www.youtube.com/watch?v=R2F5Vrw8f40&list=PLoGgviqq4847gGLvmfXPT5pYZRqBqsqLN'>- CollegeBoard - APHUG Review Sessions</a>"
];

const infoWorld = [
	"apwh",
	"World History: Modern",
	"<a href='https://www.freeman-pedia.com'>- Freeman-pedia - World History Review</a>",
	"<a href='https://fiveable.me/ap-world/ultimate-ap-world-timeline/'>- Fiveable - Ultimate World History Timeline</a>",
];

const infoUSH = [
	"ush",
	"US History",
	"<a href='https://www.youtube.com/watch?v=gTWi3Asm2xw&list=PLoGgviqq4847VRWTPXkDwxeVvNNfoKD7J'>- CollegeBoard - APUSH Review Sessions</a>",
	"<a href='https://quizlet.com/5271371/apush-exam-250-things-to-know-flash-cards/'>- Quizlet - Major US Events Review</a>",
];

const infoGov = [
	"gov",
	"US Government",
	"<a href='https://www.youtube.com/watch?v=lc5IBsLBOzE&list=PLoGgviqq4847dhi0SrQsNup5c76p7m3Ve'>- CollegeBoard - AP Gov Review Sessions</a>",
	"<a href='https://youtu.be/TsPzq48la7A'>- Adam Norris - AP Gov Final Exam Review</a>",
];

const infoAPES = [
	"apes",
	"Environmental Science",
	"<a href='https://www.youtube.com/watch?v=2swIzu3rzII&list=PLoGgviqq4847IAo58jX32INd_UxDVW0YJ'>- CollegeBoard - APES Review Sessions</a>",
	"<a href='http://www.bozemanscience.com/ap-environmental-science'>- Bozeman Science - AP Environmental Science</a>",
];

const infoLit = [
	"lit",
	"English Literature and Composition",
	"<a href='https://www.youtube.com/watch?v=tiV5v2c6T6Q&list=PLoGgviqq4845L7Yj9c1kkIfdskkaLOUzD'>- CollegeBoard - AP Lit Review Sessions</a>",
	"<a href='https://youtu.be/c4vq8aHv1Lc'>-Ms. Peer Editor - How to Ace the AP Literature Prose Essay</a>"
];

//classList: UPDATE the list with each class variable added
//keep this variable at the bottom of the file, js reads from top to bottom
const classList = [infoCSA, infoCSP, infocalcAB, infocalcBC, infoPhysics, infoChemistry, infoBiology, infoLang, infoHUG, infoWorld, infoUSH, infoGov, infoAPES, infoLit];
