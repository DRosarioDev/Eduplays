/**
 * Vocabolario inglese di base per bambini.
 * Ogni modalità è divisa in tre livelli: Base, Facile e Medio.
 * Le parole sono volutamente semplici e vicine all'esperienza quotidiana.
 *
 * Animali e oggetti di scuola hanno 25 elementi per livello: insieme alle
 * quattro direzioni di gioco (italiano→inglese, inglese→italiano,
 * emoji→inglese, emoji→italiano) ogni difficoltà supera le 100 domande.
 * I colori crescono per difficoltà: il livello Base usa i colori comuni con
 * le varianti chiaro/scuro (light blue, dark green...), il livello Facile
 * aggiunge nomi meno comuni e il livello Medio introduce anche le sfumature
 * pale/deep (pale moss, deep lagoon...).
 */

const BASIC_COLOR_FAMILIES = [
  { english: "red", italian: "rosso", value: "#E53935" },
  { english: "blue", italian: "blu", value: "#1E5BD6" },
  { english: "green", italian: "verde", value: "#2E9E4F" },
  { english: "yellow", italian: "giallo", value: "#FFD200" },
  { english: "orange", italian: "arancione", value: "#F28C28" },
  { english: "purple", italian: "viola", value: "#7B3FA0" },
  { english: "violet", italian: "violetto", value: "#8A2BE2" },
  { english: "pink", italian: "rosa", value: "#F28CB1" },
  { english: "brown", italian: "marrone", value: "#8B5A2B" },
  { english: "grey", italian: "grigio", value: "#808080" },
];

const INTERMEDIATE_COLOR_FAMILIES = [
  { english: "tangerine", italian: "mandarino", value: "#F28500" },
  { english: "lilac", italian: "lilla", value: "#C8A2C8" },
  { english: "blush", italian: "rosa cipria", value: "#DE5D83" },
  { english: "umber", italian: "terra d'ombra", value: "#8A5A3B" },
  { english: "cyan", italian: "ciano", value: "#00CED1" },
  { english: "magenta", italian: "magenta", value: "#D81B8C" },
  { english: "gold", italian: "oro", value: "#D4AF37" },
  { english: "lime", italian: "lime", value: "#7CCB3A" },
  { english: "navy", italian: "blu navy", value: "#1B2A6B" },
  { english: "teal", italian: "verde acqua", value: "#008B8B" },
  { english: "olive", italian: "oliva", value: "#6B8E23" },
  { english: "maroon", italian: "bordeaux", value: "#800000" },
  { english: "coral", italian: "corallo", value: "#FF6F61" },
  { english: "salmon", italian: "salmone", value: "#FA8072" },
  { english: "turquoise", italian: "turchese", value: "#40E0D0" },
  { english: "lavender", italian: "lavanda", value: "#B57EDC" },
  { english: "beige", italian: "beige", value: "#D9C7A7" },
  { english: "ivory", italian: "avorio", value: "#E8E4C9" },
  { english: "khaki", italian: "cachi", value: "#C3B091" },
  { english: "tan", italian: "abbronzato", value: "#D2B48C" },
  { english: "plum", italian: "prugna", value: "#B565A7" },
  { english: "orchid", italian: "orchidea", value: "#DA70D6" },
  { english: "crimson", italian: "cremisi", value: "#DC143C" },
  { english: "emerald", italian: "smeraldo", value: "#2E9E6B" },
  { english: "sapphire", italian: "zaffiro", value: "#0F52BA" },
  { english: "ruby", italian: "rubino", value: "#9B111E" },
  { english: "amber", italian: "ambra", value: "#FFBF00" },
  { english: "mint", italian: "menta", value: "#7FD8A8" },
  { english: "peach", italian: "pesca", value: "#FFB07C" },
  { english: "apricot", italian: "albicocca", value: "#E9967A" },
  { english: "indigo", italian: "indaco", value: "#4B0082" },
  { english: "aqua", italian: "acqua", value: "#2ED9D9" },
  { english: "fuchsia", italian: "fucsia", value: "#E63BC7" },
  { english: "periwinkle", italian: "pervinca", value: "#8C9EFF" },
  { english: "cerulean", italian: "ceruleo", value: "#1E90FF" },
  { english: "azure", italian: "azzurro", value: "#2C7BE5" },
  { english: "vermilion", italian: "vermiglio", value: "#D94B2B" },
  { english: "scarlet", italian: "scarlatto", value: "#C62828" },
  { english: "burgundy", italian: "borgogna", value: "#7B1E3A" },
];

const ADVANCED_COLOR_FAMILIES = [
  { english: "chestnut", italian: "castagna", value: "#8B4A32" },
  { english: "chocolate", italian: "cioccolato", value: "#6B3E26" },
  { english: "coffee", italian: "caffè", value: "#6F4E37" },
  { english: "caramel", italian: "caramello", value: "#C68E17" },
  { english: "mustard", italian: "senape", value: "#C9A227" },
  { english: "lemon", italian: "limone", value: "#D9DB3F" },
  { english: "forest green", italian: "verde bosco", value: "#1F6B3B" },
  { english: "sea green", italian: "verde mare", value: "#2E8B57" },
  { english: "sky blue", italian: "azzurro cielo", value: "#4FA3E3" },
  { english: "midnight blue", italian: "blu mezzanotte", value: "#1A1F4D" },
  { english: "royal blue", italian: "blu reale", value: "#2B4EBA" },
  { english: "bronze", italian: "bronzo", value: "#A97142" },
  { english: "rose", italian: "rosa antico", value: "#C76A7A" },
  { english: "denim", italian: "denim", value: "#3B5F8A" },
  { english: "jade", italian: "giada", value: "#2F9E7E" },
  { english: "copper", italian: "rame", value: "#B87333" },
  { english: "brick", italian: "mattone", value: "#A6462B" },
  { english: "moss", italian: "muschio", value: "#6B7F3A" },
  { english: "grape", italian: "uva", value: "#6F3B8A" },
  { english: "lagoon", italian: "laguna", value: "#2F8F9D" },
];

const COLOR_VARIANTS = [
  { prefix: "", suffix: "", amount: 0 },
  { prefix: "light ", suffix: " chiaro", amount: 0.35 },
  { prefix: "dark ", suffix: " scuro", amount: -0.35 },
];

const EXTENDED_COLOR_VARIANTS = [
  ...COLOR_VARIANTS,
  { prefix: "pale ", suffix: " pallido", amount: 0.6 },
  { prefix: "deep ", suffix: " intenso", amount: -0.55 },
];

function shadeColor(hex, amount) {
  if (amount === 0) return hex.toUpperCase();

  const numeric = parseInt(hex.slice(1), 16);
  const target = amount > 0 ? 255 : 0;
  const ratio = Math.abs(amount);
  const channels = [
    (numeric >> 16) & 255,
    (numeric >> 8) & 255,
    numeric & 255,
  ].map((channel) => {
    const mixed = Math.round(channel + (target - channel) * ratio);
    return mixed.toString(16).padStart(2, "0");
  });

  return `#${channels.join("").toUpperCase()}`;
}

function buildColorTier(families, variants = COLOR_VARIANTS) {
  return families.flatMap((family) =>
    variants.map(({ prefix, suffix, amount }) => {
      const english = `${prefix}${family.english}`;

      return {
        id: `color-${english.replace(/\s+/g, "-")}`,
        italian: `${family.italian}${suffix}`,
        english,
        value: shadeColor(family.value, amount),
      };
    })
  );
}

export const ENGLISH_VOCABULARY = {
  animals: [
    [
      { id: "dog", italian: "cane", english: "dog", emoji: "🐶" },
      { id: "cat", italian: "gatto", english: "cat", emoji: "🐱" },
      { id: "bird", italian: "uccello", english: "bird", emoji: "🐦" },
      { id: "fish", italian: "pesce", english: "fish", emoji: "🐟" },
      { id: "cow", italian: "mucca", english: "cow", emoji: "🐮" },
      { id: "pig", italian: "maiale", english: "pig", emoji: "🐷" },
      { id: "horse", italian: "cavallo", english: "horse", emoji: "🐴" },
      { id: "sheep", italian: "pecora", english: "sheep", emoji: "🐑" },
      { id: "duck", italian: "anatra", english: "duck", emoji: "🦆" },
      { id: "hen", italian: "gallina", english: "hen", emoji: "🐔" },
      { id: "rabbit", italian: "coniglio", english: "rabbit", emoji: "🐰" },
      { id: "mouse", italian: "topo", english: "mouse", emoji: "🐭" },
      { id: "frog", italian: "rana", english: "frog", emoji: "🐸" },
      { id: "bee", italian: "ape", english: "bee", emoji: "🐝" },
      { id: "ant", italian: "formica", english: "ant", emoji: "🐜" },
      { id: "bear", italian: "orso", english: "bear", emoji: "🐻" },
      { id: "lion", italian: "leone", english: "lion", emoji: "🦁" },
      { id: "tiger", italian: "tigre", english: "tiger", emoji: "🐯" },
      { id: "monkey", italian: "scimmia", english: "monkey", emoji: "🐵" },
      { id: "elephant", italian: "elefante", english: "elephant", emoji: "🐘" },
      { id: "giraffe", italian: "giraffa", english: "giraffe", emoji: "🦒" },
      { id: "zebra", italian: "zebra", english: "zebra", emoji: "🦓" },
      { id: "turtle", italian: "tartaruga", english: "turtle", emoji: "🐢" },
      { id: "snake", italian: "serpente", english: "snake", emoji: "🐍" },
      { id: "owl", italian: "gufo", english: "owl", emoji: "🦉" },
    ],
    [
      { id: "fox", italian: "volpe", english: "fox", emoji: "🦊" },
      { id: "wolf", italian: "lupo", english: "wolf", emoji: "🐺" },
      { id: "deer", italian: "cervo", english: "deer", emoji: "🦌" },
      { id: "squirrel", italian: "scoiattolo", english: "squirrel", emoji: "🐿️" },
      { id: "hedgehog", italian: "riccio", english: "hedgehog", emoji: "🦔" },
      { id: "bat", italian: "pipistrello", english: "bat", emoji: "🦇" },
      { id: "whale", italian: "balena", english: "whale", emoji: "🐋" },
      { id: "dolphin", italian: "delfino", english: "dolphin", emoji: "🐬" },
      { id: "shark", italian: "squalo", english: "shark", emoji: "🦈" },
      { id: "octopus", italian: "polpo", english: "octopus", emoji: "🐙" },
      { id: "crab", italian: "granchio", english: "crab", emoji: "🦀" },
      { id: "penguin", italian: "pinguino", english: "penguin", emoji: "🐧" },
      { id: "swan", italian: "cigno", english: "swan", emoji: "🦢" },
      { id: "eagle", italian: "aquila", english: "eagle", emoji: "🦅" },
      { id: "parrot", italian: "pappagallo", english: "parrot", emoji: "🦜" },
      { id: "peacock", italian: "pavone", english: "peacock", emoji: "🦚" },
      { id: "rooster", italian: "gallo", english: "rooster", emoji: "🐓" },
      { id: "goat", italian: "capra", english: "goat", emoji: "🐐" },
      { id: "camel", italian: "cammello", english: "camel", emoji: "🐫" },
      { id: "llama", italian: "lama", english: "llama", emoji: "🦙" },
      { id: "kangaroo", italian: "canguro", english: "kangaroo", emoji: "🦘" },
      { id: "koala", italian: "koala", english: "koala", emoji: "🐨" },
      { id: "panda", italian: "panda", english: "panda", emoji: "🐼" },
      { id: "crocodile", italian: "coccodrillo", english: "crocodile", emoji: "🐊" },
      { id: "hippo", italian: "ippopotamo", english: "hippo", emoji: "🦛" },
    ],
    [
      { id: "rhino", italian: "rinoceronte", english: "rhino", emoji: "🦏" },
      { id: "leopard", italian: "leopardo", english: "leopard", emoji: "🐆" },
      { id: "gorilla", italian: "gorilla", english: "gorilla", emoji: "🦍" },
      { id: "orangutan", italian: "orangotango", english: "orangutan", emoji: "🦧" },
      { id: "sloth", italian: "bradipo", english: "sloth", emoji: "🦥" },
      { id: "otter", italian: "lontra", english: "otter", emoji: "🦦" },
      { id: "seal", italian: "foca", english: "seal", emoji: "🦭" },
      { id: "buffalo", italian: "bufalo", english: "buffalo", emoji: "🐃" },
      { id: "ox", italian: "bue", english: "ox", emoji: "🐂" },
      { id: "chick", italian: "pulcino", english: "chick", emoji: "🐤" },
      { id: "turkey", italian: "tacchino", english: "turkey", emoji: "🦃" },
      { id: "flamingo", italian: "fenicottero", english: "flamingo", emoji: "🦩" },
      { id: "dove", italian: "colomba", english: "dove", emoji: "🕊️" },
      { id: "butterfly", italian: "farfalla", english: "butterfly", emoji: "🦋" },
      { id: "ladybug", italian: "coccinella", english: "ladybug", emoji: "🐞" },
      { id: "snail", italian: "lumaca", english: "snail", emoji: "🐌" },
      { id: "worm", italian: "verme", english: "worm", emoji: "🪱" },
      { id: "spider", italian: "ragno", english: "spider", emoji: "🕷️" },
      { id: "scorpion", italian: "scorpione", english: "scorpion", emoji: "🦂" },
      { id: "dinosaur", italian: "dinosauro", english: "dinosaur", emoji: "🦕" },
      { id: "trex", italian: "tirannosauro", english: "T-rex", emoji: "🦖" },
      { id: "boar", italian: "cinghiale", english: "boar", emoji: "🐗" },
      { id: "ram", italian: "montone", english: "ram", emoji: "🐏" },
      { id: "goose", italian: "oca", english: "goose", emoji: "🪿" },
      { id: "woodpecker", italian: "picchio", english: "woodpecker", emoji: "🐦" },
    ],
  ],
  colors: [
    [
      { id: "black", italian: "nero", english: "black", value: "#1A1A1A" },
      { id: "white", italian: "bianco", english: "white", value: "#FFFFFF" },
      ...buildColorTier(BASIC_COLOR_FAMILIES),
    ],
    buildColorTier(INTERMEDIATE_COLOR_FAMILIES),
    buildColorTier(ADVANCED_COLOR_FAMILIES, EXTENDED_COLOR_VARIANTS),
  ],
  numbers: [
    [
      { id: "one", italian: "uno", english: "one", value: 1 },
      { id: "two", italian: "due", english: "two", value: 2 },
      { id: "three", italian: "tre", english: "three", value: 3 },
      { id: "four", italian: "quattro", english: "four", value: 4 },
    ],
    [
      { id: "five", italian: "cinque", english: "five", value: 5 },
      { id: "six", italian: "sei", english: "six", value: 6 },
      { id: "seven", italian: "sette", english: "seven", value: 7 },
      { id: "eight", italian: "otto", english: "eight", value: 8 },
    ],
    [
      { id: "nine", italian: "nove", english: "nine", value: 9 },
      { id: "ten", italian: "dieci", english: "ten", value: 10 },
      { id: "eleven", italian: "undici", english: "eleven", value: 11 },
      { id: "twelve", italian: "dodici", english: "twelve", value: 12 },
    ],
  ],
  school: [
    [
      { id: "book", italian: "libro", english: "book", emoji: "📘" },
      { id: "pen", italian: "penna", english: "pen", emoji: "🖊️" },
      { id: "pencil", italian: "matita", english: "pencil", emoji: "✏️" },
      { id: "schoolbag", italian: "zaino", english: "schoolbag", emoji: "🎒" },
      { id: "ruler", italian: "righello", english: "ruler", emoji: "📏" },
      { id: "scissors", italian: "forbici", english: "scissors", emoji: "✂️" },
      { id: "notebook", italian: "quaderno", english: "notebook", emoji: "📓" },
      { id: "clock", italian: "orologio", english: "clock", emoji: "⏰" },
      { id: "chair", italian: "sedia", english: "chair", emoji: "🪑" },
      { id: "computer", italian: "computer", english: "computer", emoji: "💻" },
      { id: "map", italian: "mappa", english: "map", emoji: "🗺️" },
      { id: "crayon", italian: "pastello", english: "crayon", emoji: "🖍️" },
      { id: "exercisebook", italian: "quaderno degli esercizi", english: "exercise book", emoji: "📒" },
      { id: "textbook", italian: "libro di testo", english: "textbook", emoji: "📕" },
      { id: "dictionary", italian: "dizionario", english: "dictionary", emoji: "📖" },
      { id: "diary", italian: "diario", english: "diary", emoji: "📔" },
      { id: "calendar", italian: "calendario", english: "calendar", emoji: "📅" },
      { id: "folder", italian: "cartelletta", english: "folder", emoji: "📁" },
      { id: "paperclip", italian: "graffetta", english: "paperclip", emoji: "📎" },
      { id: "pushpin", italian: "puntina", english: "pushpin", emoji: "📌" },
      { id: "globe", italian: "globo", english: "globe", emoji: "🌍" },
      { id: "bell", italian: "campanella", english: "bell", emoji: "🔔" },
      { id: "abacus", italian: "abaco", english: "abacus", emoji: "🧮" },
      { id: "paintbrush", italian: "pennello", english: "paintbrush", emoji: "🖌️" },
      { id: "palette", italian: "tavolozza", english: "palette", emoji: "🎨" },
    ],
    [
      { id: "desk", italian: "banco", english: "desk", emoji: "🪑" },
      { id: "window", italian: "finestra", english: "window", emoji: "🪟" },
      { id: "door", italian: "porta", english: "door", emoji: "🚪" },
      { id: "wastebasket", italian: "cestino", english: "wastebasket", emoji: "🗑️" },
      { id: "setsquare", italian: "squadra", english: "set square", emoji: "📐" },
      { id: "fountainpen", italian: "penna stilografica", english: "fountain pen", emoji: "🖋️" },
      { id: "nib", italian: "pennino", english: "nib", emoji: "✒️" },
      { id: "openbook", italian: "libro aperto", english: "open book", emoji: "📖" },
      { id: "books", italian: "libri", english: "books", emoji: "📚" },
      { id: "redbook", italian: "libro rosso", english: "red book", emoji: "📕" },
      { id: "greenbook", italian: "libro verde", english: "green book", emoji: "📗" },
      { id: "orangebook", italian: "libro arancione", english: "orange book", emoji: "📙" },
      { id: "notepad", italian: "blocco note", english: "notepad", emoji: "🗒️" },
      { id: "cardindex", italian: "schedario", english: "card index", emoji: "📇" },
      { id: "filebox", italian: "scatola portadocumenti", english: "file box", emoji: "🗃️" },
      { id: "filecabinet", italian: "armadietto", english: "file cabinet", emoji: "🗄️" },
      { id: "chart", italian: "grafico", english: "chart", emoji: "📊" },
      { id: "barchart", italian: "istogramma", english: "bar chart", emoji: "📈" },
      { id: "microscope", italian: "microscopio", english: "microscope", emoji: "🔬" },
      { id: "telescope", italian: "telescopio", english: "telescope", emoji: "🔭" },
      { id: "testtube", italian: "provetta", english: "test tube", emoji: "🧪" },
      { id: "petridish", italian: "capsula di Petri", english: "petri dish", emoji: "🧫" },
      { id: "dna", italian: "DNA", english: "DNA", emoji: "🧬" },
      { id: "compass", italian: "bussola", english: "compass", emoji: "🧭" },
      { id: "graduationcap", italian: "tocco", english: "graduation cap", emoji: "🎓" },
    ],
    [
      { id: "school", italian: "scuola", english: "school", emoji: "🏫" },
      { id: "teacher", italian: "maestra", english: "teacher", emoji: "🧑‍🏫" },
      { id: "student", italian: "studente", english: "student", emoji: "🧑‍🎓" },
      { id: "schoolbag2", italian: "zaino", english: "backpack", emoji: "🎒" },
      { id: "map2", italian: "mappa", english: "map", emoji: "🗺️" },
      { id: "bell2", italian: "campanella", english: "bell", emoji: "🔔" },
      { id: "playground", italian: "cortile", english: "playground", emoji: "🛝" },
      { id: "calculator", italian: "calcolatrice", english: "calculator", emoji: "🧮" },
      { id: "tablet", italian: "tablet", english: "tablet", emoji: "📱" },
      { id: "headphones", italian: "cuffie", english: "headphones", emoji: "🎧" },
      { id: "microphone", italian: "microfono", english: "microphone", emoji: "🎤" },
      { id: "camera", italian: "macchina fotografica", english: "camera", emoji: "📷" },
      { id: "lamp", italian: "lampada", english: "lamp", emoji: "💡" },
      { id: "key", italian: "chiave", english: "key", emoji: "🔑" },
      { id: "lock", italian: "lucchetto", english: "lock", emoji: "🔒" },
      { id: "protractor", italian: "goniometro", english: "protractor", emoji: "📐" },
      { id: "pencilcase", italian: "astuccio", english: "pencil case", emoji: "👝" },
      { id: "glue", italian: "colla", english: "glue", emoji: "🧴" },
      { id: "eraser", italian: "gomma", english: "eraser", emoji: "🧽" },
      { id: "stapler", italian: "spillatrice", english: "stapler", emoji: "📎" },
      { id: "holepunch", italian: "perforatore", english: "hole punch", emoji: "⭕" },
      { id: "globe2", italian: "globo", english: "globe", emoji: "🌍" },
      { id: "books2", italian: "libri", english: "books", emoji: "📚" },
      { id: "art", italian: "arte", english: "art", emoji: "🎨" },
      { id: "science", italian: "scienze", english: "science", emoji: "🔬" },
    ],
  ],
};
