// quiz-questions-plants.js
// Export one array of questions for a Vue quiz (plants).
// Each question: { id, plantName, question, answers: [...], correctIndex }
// correctIndex is 0-based. Answers and questions are in English.

export const PlantQuestions = [
  {
    id: 1,
    plantName: "Rainforest stratification",
    question: "Which layer of the tropical rainforest forms the continuous canopy of tree crowns?",
    answers: ["Canopy", "Emergent layer (tallest trees above canopy)", "Understory", "Forest floor"],
    correctIndex: 0
  },
  {
    id: 2,
    plantName: "Climbers (Lianas)",
    question: "What is a common strategy of climbers (lianas) in tropical rainforests?",
    answers: ["They grow only on the ground", "They climb trees to reach light high in the canopy", "They are parasitic and kill host trees", "They live entirely underwater"],
    correctIndex: 1
  },
  {
    id: 3,
    plantName: "Epiphytes",
    question: "Epiphytes (plants that live on trees) obtain nutrients mainly by:",
    answers: ["Rooting in forest soil", "Growing on other plants without being parasitic and collecting moisture/nutrients", "Killing their host plant", "Growing underwater in swamps"],
    correctIndex: 2
  },
  {
    id: 4,
    plantName: "Carnivorous plants",
    question: "Why have some tropical plants evolved carnivory (trapping insects)?",
    answers: [
      "Because they are night-flying predators",
      "Because rainforest soils are often low in minerals like nitrogen so they trap insects for nutrients",
      "Because they need meat to pollinate",
      "Because they live only in saltwater"
    ],
    correctIndex: 3
  },
  {
    id: 5,
    plantName: "Cocoa tree (Theobroma cacao)",
    question: "Cocoa trees are cultivated mainly for which product?",
    answers: [
      "Timber for construction",
      "Leaves used for tea",
      "Latex for rubber production",
      "Cocoa beans used to make chocolate"
    ],
    correctIndex: 0
  },
  {
    id: 6,
    plantName: "Pineapple (Ananas comosus)",
    question: "A pineapple plant is botanically best described as:",
    answers: [
      "A climbing vine",
      "A terrestrial herbaceous plant (a bromeliad) that grows near the ground",
      "A woody tree",
      "A cactus"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    plantName: "Rubber tree (Hevea brasiliensis)",
    question: "What is tapped from the rubber tree for commercial rubber production?",
    answers: ["Aromatic flowers", "Edible fruit", "Latex (milky sap)", "Bark used as spice"],
    correctIndex: 2
  },
  {
    id: 8,
    plantName: "Date palm (Phoenix dactylifera)",
    question: "Date palms are primarily cultivated for:",
    answers: [
      "Their edible leaves",
      "Their rubber-rich sap",
      "Their ornamental flowers",
      "Their sweet edible dates (fruit)"
    ],
    correctIndex: 3
  },
  {
    id: 9,
    plantName: "Coffee (Coffea species)",
    question: "Coffee 'beans' are actually which part of the plant?",
    answers: ["Leaves", "Roots", "Seeds inside the red fruit (coffee cherries)", "Bark"],
    correctIndex: 2
  },
  {
    id: 10,
    plantName: "Cinnamon (Cinnamomum verum / C. cassia)",
    question: "Which part of the cinnamon tree is used as the spice 'cinnamon'?",
    answers: ["Fruit", "Roots", "Inner bark (rolled into quills)", "Leaves"],
    correctIndex: 2
  },
  {
    id: 11,
    plantName: "Mango (Mangifera indica)",
    question: "Where is the mango tree native to?",
    answers: ["Australia", "The Amazon basin", "South Asia (Indian subcontinent)", "Mediterranean region"],
    correctIndex: 2
  },
  {
    id: 12,
    plantName: "Banana (Musa species)",
    question: "Botanically, banana plants are classified as:",
    answers: [
      "Shrubs",
      "Large herbaceous flowering plants (often called giant herbs)",
      "Trees",
      "Succulent cacti"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    plantName: "Black pepper (Piper nigrum)",
    question: "Black peppercorns are harvested from which part of the pepper plant?",
    answers: ["Leaves", "Stem bark", "Roots", "Dried fruits/berries (peppercorns)"],
    correctIndex: 3
  },
  {
    id: 14,
    plantName: "Coconut palm (Cocos nucifera)",
    question: "Coconut palms are commonly associated with which habitat?",
    answers: ["High mountain cloud forest", "Coastal tropical beaches and islands", "Temperate woodlands", "Arid deserts"],
    correctIndex: 1
  },
  {
    id: 15,
    plantName: "Ebony (Diospyros spp.)",
    question: "Ebony wood is prized mainly for its:",
    answers: [
      "Dense, very dark heartwood used in fine furniture and musical instruments",
      "Edible fruits",
      "Latex production",
      "Fragrant essential oils"
    ],
    correctIndex: 0
  },
  {
    id: 16,
    plantName: "Sandalwood (Santalum spp.)",
    question: "Sandalwood is harvested primarily for its:",
    answers: [
      "Construction timber only",
      "Rubber",
      "Fragrant heartwood and essential oils used in perfumes and incense",
      "Edible nuts"
    ],
    correctIndex: 2
  },
  {
    id: 17,
    plantName: "Cola (Cola spp.)",
    question: "Cola trees produce nuts that are traditionally known for:",
    answers: [
      "Caffeine-containing nuts used as stimulant and flavoring (cola)",
      "Edible leaves used as salad",
      "Aromatic resin",
      "Timber for shipbuilding"
    ],
    correctIndex: 0
  },
  {
    id: 18,
    plantName: "Rotang / Rattan palm",
    question: "Rattan (rotang) is harvested mainly for:",
    answers: [
      "Flexible canes used for furniture, baskets and weaving",
      "Aromatic oils",
      "Spice production",
      "Edible fruit widely consumed fresh"
    ],
    correctIndex: 0
  },
  {
    id: 19,
    plantName: "Strophanthus",
    question: "Strophanthus species are historically notable because they produce compounds that were used as:",
    answers: [
      "Timber for heavy construction",
      "Cardiac-active glycosides used as arrow poison and investigated in medicine",
      "Natural dyes only",
      "Edible sweeteners"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    plantName: "Vriesea (Pikkelyvirág)",
    question: "Vriesea (commonly called 'pikkelyvirág' in Hungarian) belongs to which plant family?",
    answers: ["Bromeliad family (Bromeliaceae)", "Orchid family (Orchidaceae)", "Legume family (Fabaceae)", "Grass family (Poaceae)"],
    correctIndex: 0
  },
  {
    id: 21,
    plantName: "Victoria amazonica (Amazonian water lily)",
    question: "What is a striking feature of the giant Amazonian water lily (Victoria amazonica)?",
    answers: [
      "It is a type of climbing vine",
      "It grows only in deserts",
      "It has enormous floating leaves (pads) that can support heavy weight",
      "It is a tall emergent tree"
    ],
    correctIndex: 2
  },
  {
    id: 22,
    plantName: "Heliconia",
    question: "In tropical Americas, many Heliconia species are primarily pollinated by:",
    answers: ["Wind", "Fish", "Large grazing mammals", "Hummingbirds"],
    correctIndex: 3
  }
];

export default PlantQuestions;
