// quiz-questions-animals.js
// Export one array of questions for a Vue quiz (animals).
// Each question: { id, animalName, question, answers: [...], correctIndex }
// correctIndex is 0-based. All text is in English.
// Correct-answer positions are distributed to avoid repeating the same checkbox.

export const AnimalQuestions = [
  {
    id: 1,
    animalName: "Tarantula",
    question: "Where are large tarantulas (bird spiders) most commonly found?",
    answers: ["Tropical and subtropical warm regions", "High alpine meadows", "Open ocean", "Arctic tundra"],
    correctIndex: 0
  },
  {
    id: 2,
    animalName: "Goliath beetle",
    question: "What is the Goliath beetle best known for?",
    answers: ["It builds nests", "It is one of the largest beetles by size and weight", "It hunts mammals", "It migrates yearly"],
    correctIndex: 1
  },
  {
    id: 3,
    animalName: "Cicada",
    question: "What are cicadas famous for as adults?",
    answers: ["Glowing in the dark", "Herding behavior", "Producing very loud mating calls", "Swimming long distances"],
    correctIndex: 2
  },
  {
    id: 4,
    animalName: "Blue morpho (butterfly)",
    question: "Where are blue morpho butterflies mainly native to?",
    answers: ["Deserts", "Temperate Europe", "Arctic regions", "Tropical rainforests of Central and South America"],
    correctIndex: 3
  },
  {
    id: 5,
    animalName: "Nephila (golden orb-weaver)",
    question: "What are Nephila spiders especially noted for?",
    answers: ["Eating fish exclusively", "Making large, strong golden webs in trees", "Living only in caves", "Hunting in packs"],
    correctIndex: 1
  },
  {
    id: 6,
    animalName: "Stick insect",
    question: "What is the primary defense of stick insects?",
    answers: ["Fast running", "Camouflage that makes them look like sticks or leaves", "Bright warning coloration", "Poison spines"],
    correctIndex: 1
  },
  {
    id: 7,
    animalName: "Leaf insect",
    question: "Leaf insects mainly feed and live on:",
    answers: ["Open rock faces", "Freshwater ponds", "Underground burrows", "Tree leaves, blending with foliage"],
    correctIndex: 3
  },
  {
    id: 8,
    animalName: "Green anaconda",
    question: "The green anaconda is most associated with which habitat?",
    answers: ["Alpine meadows", "Open ocean", "River swamps and flooded forests of South America", "Desert dunes"],
    correctIndex: 2
  },
  {
    id: 9,
    animalName: "King cobra",
    question: "Where is the king cobra native to?",
    answers: ["North America", "Sub-Saharan Africa", "New Zealand", "South and Southeast Asia (forests and plains)"],
    correctIndex: 3
  },
  {
    id: 10,
    animalName: "Caiman",
    question: "Caimans are crocodilians native to which area?",
    answers: ["Europe", "Siberia", "South and Central America (freshwater rivers and wetlands)", "Australia only"],
    correctIndex: 2
  },
  {
    id: 11,
    animalName: "Chameleon",
    question: "Which lifestyle best describes most chameleons?",
    answers: ["Burrowing desert dwellers", "Deep-sea swimmers", "Arboreal, insect-eating, and color-changing skin", "Herding grassland grazers"],
    correctIndex: 2
  },
  {
    id: 12,
    animalName: "Dog-headed / Emerald tree boa",
    question: "Emerald tree boas are primarily:",
    answers: ["Desert burrowers", "High-altitude migratory snakes", "Marine reef hunters", "Arboreal ambush predators in trees"],
    correctIndex: 3
  },
  {
    id: 13,
    animalName: "Boa constrictor",
    question: "Which statement is true of the boa constrictor?",
    answers: ["It is venomous", "It only eats fruit", "It migrates annually long distances", "It is a non-venomous constrictor found in the Americas"],
    correctIndex: 3
  },
  {
    id: 14,
    animalName: "Tree frog",
    question: "Tree frogs are mainly adapted to live:",
    answers: ["On alpine snowfields", "On leaves and branches near water (arboreal)", "In dry deserts", "In open ocean"],
    correctIndex: 1
  },
  {
    id: 15,
    animalName: "Horned frog (Pacman frog)",
    question: "Pacman (horned) frogs are best described as:",
    answers: ["Tiny nectar feeders", "Arboreal fruit eaters", "Terrestrial ambush predators that eat insects and small vertebrates", "Large migratory herbivores"],
    correctIndex: 2
  },
  {
    id: 16,
    animalName: "Australian green tree frog",
    question: "The Australian green tree frog is native to:",
    answers: ["Northern Europe", "Antarctica", "Australia and nearby islands", "North Africa"],
    correctIndex: 2
  },
  {
    id: 17,
    animalName: "Red-eyed tree frog",
    question: "Red-eyed tree frogs use which feature to startle predators?",
    answers: ["Bright red eyes and cryptic green body", "Nocturnal songs", "Camouflage as bare rock", "Hard shell like a turtle"],
    correctIndex: 0
  },
  {
    id: 18,
    animalName: "Poison dart frog",
    question: "Poison dart frogs usually advertise their toxicity with:",
    answers: ["Building underground traps", "Loud night calls", "Bright aposematic colors", "Camouflage as tree bark"],
    correctIndex: 2
  },
  {
    id: 19,
    animalName: "Gecko",
    question: "What ability is common among many geckos?",
    answers: ["Diving deep underwater", "Flying between trees", "Herding in packs", "Climbing vertical surfaces using adhesive toe pads"],
    correctIndex: 3
  },
  {
    id: 20,
    animalName: "Fiery-throated hummingbird",
    question: "Hummingbirds primarily feed on:",
    answers: ["Large fish", "Wood fibers", "Roots and tubers", "Nectar and tiny insects while hovering"],
    correctIndex: 3
  },
  {
    id: 21,
    animalName: "Bronze sunbird",
    question: "Bronze sunbirds most closely resemble which New World birds in ecological role?",
    answers: ["Hummingbirds (nectar feeding and pollination)", "Penguins", "Ostriches", "Albatrosses"],
    correctIndex: 0
  },
  {
    id: 22,
    animalName: "Harpy eagle",
    question: "The harpy eagle is notable for being:",
    answers: ["A tiny migratory songbird", "A small nectar feeder", "A powerful forest eagle that can prey on monkeys and sloths", "A nocturnal seabird"],
    correctIndex: 2
  },
  {
    id: 23,
    animalName: "Toucan",
    question: "What is the toucan's most noticeable feature used for feeding and display?",
    answers: ["Webbed feet", "Hollow bones", "Night-vision crest", "A long colorful bill"],
    correctIndex: 3
  },
  {
    id: 24,
    animalName: "Macaw",
    question: "Macaws are large parrots famous for:",
    answers: ["Bright plumage, strong beaks, and seed/fruit diets", "Nocturnal fish hunting", "Building dams", "Living in deserts"],
    correctIndex: 0
  },
  {
    id: 25,
    animalName: "Philippine eagle (monkey-eating eagle)",
    question: "The Philippine eagle is especially known as:",
    answers: ["An underwater nest builder", "A tiny insect-eating bird", "A polar species", "A large forest eagle that can prey on arboreal mammals like monkeys"],
    correctIndex: 3
  },
  {
    id: 26,
    animalName: "Cassowary",
    question: "Cassowaries are large flightless birds native to:",
    answers: ["Central Europe", "New Guinea and northeastern Australia rainforests", "Sahara Desert", "Arctic tundra"],
    correctIndex: 1
  },
  {
    id: 27,
    animalName: "Bird-of-paradise",
    question: "Male birds-of-paradise are best known for:",
    answers: ["Herding other birds", "Nocturnal sea foraging", "Complex courtship displays and elaborate plumage", "Building underground burrows"],
    correctIndex: 2
  },
  {
    id: 28,
    animalName: "Congo peafowl",
    question: "The Congo peafowl is native to:",
    answers: ["Arctic ice", "Australia", "South Pole stations", "The Congo Basin rainforests of central Africa"],
    correctIndex: 3
  },
  {
    id: 29,
    animalName: "Velvet/golden forest bird",
    question: "Bright velvet or golden plumage in tropical birds is mainly used for:",
    answers: ["Courtship displays and species recognition", "Storing water", "Underground nesting", "Camouflage in snowy landscapes"],
    correctIndex: 0
  },
  {
    id: 30,
    animalName: "Howler monkey",
    question: "Howler monkeys are especially known for:",
    answers: ["Diving abilities", "Very loud calls that carry through the forest", "Being solitary desert dwellers", "Migratory flocking"],
    correctIndex: 1
  },
  {
    id: 31,
    animalName: "Gibbon",
    question: "Gibbons primarily move through the forest by:",
    answers: ["Burrowing underground", "Swimming between islands", "Running in herds", "Brachiation — swinging arm-over-arm through the canopy"],
    correctIndex: 3
  },
  {
    id: 32,
    animalName: "Gorilla",
    question: "Gorillas are primarily:",
    answers: ["Oceanic mammals", "Flying nocturnal hunters", "Desert specialists", "Terrestrial apes that live in family groups and mainly feed on vegetation"],
    correctIndex: 3
  },
  {
    id: 33,
    animalName: "Orangutan",
    question: "Orangutans spend most of their life:",
    answers: ["Underwater caves", "High in the trees (very arboreal) in Borneo and Sumatra", "In open savannas", "On polar ice"],
    correctIndex: 1
  },
  {
    id: 34,
    animalName: "Jaguar",
    question: "Jaguars are large cats primarily found in:",
    answers: ["Sahara Desert", "Australia", "The Amazon and Neotropical forests of Central and South America", "Arctic tundra"],
    correctIndex: 2
  },
  {
    id: 35,
    animalName: "Leopard",
    question: "Leopards are particularly known for:",
    answers: ["Being adaptable big cats that can live in forests, mountains, and savannas", "Specialized fish-only diet", "Being large herbivores", "Flying long distances"],
    correctIndex: 0
  },
  {
    id: 36,
    animalName: "Puma (cougar)",
    question: "Pumas have one of the widest ranges of any New World big cat. Where can they be found?",
    answers: ["Only Australia", "Only Europe", "Only Madagascar", "From Canada to South America in many habitats"],
    correctIndex: 3
  },
  {
    id: 37,
    animalName: "Okapi",
    question: "The okapi is related to which large African mammal and where is it native?",
    answers: ["Related to antelope; native to Arctic regions", "Related to the horse; native to South America", "Related to the elephant; native to Australia", "Related to the giraffe; native to the Congo rainforests of central Africa"],
    correctIndex: 3
  },
  {
    id: 38,
    animalName: "Mandrill",
    question: "Mandrills are distinctive primates native to:",
    answers: ["Northern Canada", "Central African rainforests", "Australia", "Iceland"],
    correctIndex: 1
  },
  {
    id: 39,
    animalName: "Sloth",
    question: "Sloths are characterized by:",
    answers: ["Very slow movement and spending most of their time hanging in trees", "Fast sprinting on the ground", "Living in the open ocean", "Building complex burrows"],
    correctIndex: 0
  },
  {
    id: 40,
    animalName: "Red-faced uakari",
    question: "Red-faced uakari monkeys are most often found in:",
    answers: ["Sahara dunes", "Urban centers only", "Arctic tundra", "Amazonian (riverine and flooded) forests of South America"],
    correctIndex: 3
  },
  {
    id: 41,
    animalName: "Anteater",
    question: "Giant anteaters feed mainly on:",
    answers: ["Fish and plankton", "Tree sap exclusively", "Large mammals like deer", "Ants and termites using a long sticky tongue"],
    correctIndex: 3
  },
  {
    id: 42,
    animalName: "Giant armadillo",
    question: "Giant armadillos are best described as:",
    answers: ["Flying fruit-eating mammals", "Marine mammals", "Large armored mammals that dig for insects in South America", "Desert reptiles"],
    correctIndex: 2
  },
  {
    id: 43,
    animalName: "Rhinoceros",
    question: "Which statement is true about many rhino species in forested areas?",
    answers: ["They are tiny birds", "They are aquatic filter-feeders", "They are microscopic", "They are large herbivores with one or two horns and are threatened by poaching"],
    correctIndex: 3
  },
  {
    id: 44,
    animalName: "Elephant",
    question: "Forest elephants differ from savanna elephants mainly by being generally:",
    answers: ["Able to fly short distances", "Nocturnal insectivores", "Smaller and more adapted to dense forest habitats", "Marine specialists"],
    correctIndex: 2
  }
];

export default AnimalQuestions;
