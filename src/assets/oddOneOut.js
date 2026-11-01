/**
 * Categorie per "Trova l'intruso".
 *
 * Invece di avere poche domande fisse, costruiamo 100 gruppi diversi per
 * difficoltà scegliendo 3 elementi da una categoria e 1 elemento da un'altra.
 * Le categorie di livello 2 sono più vicine tra loro (per esempio animali che
 * volano / animali che nuotano), così il gioco richiede più attenzione.
 */
export const oddOneOutCategories = [
  {
    id: "frutta",
    level: 0,
    label: "Frutta",
    items: [
      { emoji: "🍎", label: "Mela" },
      { emoji: "🍌", label: "Banana" },
      { emoji: "🍇", label: "Uva" },
      { emoji: "🍓", label: "Fragola" },
      { emoji: "🍊", label: "Arancia" },
      { emoji: "🍐", label: "Pera" },
      { emoji: "🍑", label: "Pesca" },
      { emoji: "🍒", label: "Ciliegia" },
    ],
  },
  {
    id: "colori",
    level: 0,
    label: "Colori",
    items: [
      { emoji: "🔴", label: "Rosso" },
      { emoji: "🔵", label: "Blu" },
      { emoji: "🟡", label: "Giallo" },
      { emoji: "🟢", label: "Verde" },
      { emoji: "🟣", label: "Viola" },
      { emoji: "🟠", label: "Arancione" },
      { emoji: "🟤", label: "Marrone" },
      { emoji: "⚫", label: "Nero" },
    ],
  },
  {
    id: "forme",
    level: 0,
    label: "Forme",
    items: [
      { emoji: "⚪", label: "Cerchio" },
      { emoji: "⬛", label: "Quadrato" },
      { emoji: "🔺", label: "Triangolo" },
      { emoji: "🔷", label: "Rombo" },
      { emoji: "⭐", label: "Stella" },
      { emoji: "❤️", label: "Cuore" },
    ],
  },
  {
    id: "vestiti",
    level: 0,
    label: "Vestiti",
    items: [
      { emoji: "👕", label: "Maglietta" },
      { emoji: "👖", label: "Pantaloni" },
      { emoji: "👗", label: "Vestito" },
      { emoji: "🧥", label: "Giacca" },
      { emoji: "🧦", label: "Calzini" },
      { emoji: "👟", label: "Scarpe" },
      { emoji: "🧢", label: "Cappello" },
      { emoji: "🧣", label: "Sciarpa" },
    ],
  },
  {
    id: "veicoli",
    level: 0,
    label: "Veicoli",
    items: [
      { emoji: "🚗", label: "Auto" },
      { emoji: "🚌", label: "Autobus" },
      { emoji: "🚲", label: "Bicicletta" },
      { emoji: "🚂", label: "Treno" },
      { emoji: "✈️", label: "Aereo" },
      { emoji: "🚢", label: "Nave" },
      { emoji: "🏍️", label: "Moto" },
      { emoji: "🚚", label: "Camion" },
    ],
  },
  {
    id: "animali-comuni",
    level: 0,
    label: "Animali comuni",
    items: [
      { emoji: "🐶", label: "Cane" },
      { emoji: "🐱", label: "Gatto" },
      { emoji: "🐰", label: "Coniglio" },
      { emoji: "🐹", label: "Criceto" },
      { emoji: "🐦", label: "Uccellino" },
      { emoji: "🐢", label: "Tartaruga" },
      { emoji: "🐸", label: "Rana" },
      { emoji: "🐍", label: "Serpente" },
    ],
  },
  {
    id: "scuola",
    level: 0,
    label: "Scuola",
    items: [
      { emoji: "✏️", label: "Matita" },
      { emoji: "🖊️", label: "Penna" },
      { emoji: "📏", label: "Righello" },
      { emoji: "📓", label: "Quaderno" },
      { emoji: "🎒", label: "Zaino" },
      { emoji: "🧽", label: "Gomma" },
      { emoji: "✂️", label: "Forbici" },
      { emoji: "📚", label: "Libri" },
    ],
  },
  {
    id: "sport",
    level: 0,
    label: "Sport",
    items: [
      { emoji: "🏊", label: "Nuoto" },
      { emoji: "🏃", label: "Corsa" },
      { emoji: "🚴", label: "Ciclismo" },
      { emoji: "⛷️", label: "Sci" },
      { emoji: "🏂", label: "Snowboard" },
      { emoji: "🏄", label: "Surf" },
      { emoji: "🚣", label: "Canottaggio" },
      { emoji: "🧗", label: "Arrampicata" },
    ],
  },
  {
    id: "cose-del-mare",
    level: 1,
    label: "Cose del mare",
    items: [
      { emoji: "🐚", label: "Conchiglia" },
      { emoji: "⭐", label: "Stella marina" },
      { emoji: "🪸", label: "Corallo" },
      { emoji: "🌊", label: "Onda" },
      { emoji: "🏖️", label: "Spiaggia" },
      { emoji: "🏝️", label: "Isola" },
      { emoji: "⛱️", label: "Ombrellone" },
      { emoji: "🏰", label: "Castello di sabbia" },
    ],
  },
  {
    id: "cielo",
    level: 1,
    label: "Cielo",
    items: [
      { emoji: "☀️", label: "Sole" },
      { emoji: "🌙", label: "Luna" },
      { emoji: "☁️", label: "Nuvola" },
      { emoji: "🌈", label: "Arcobaleno" },
      { emoji: "🪐", label: "Pianeta" },
      { emoji: "☄️", label: "Cometa" },
      { emoji: "🛰️", label: "Satellite" },
      { emoji: "🪁", label: "Aquilone" },
    ],
  },
  {
    id: "cucina",
    level: 1,
    label: "Cose di cucina",
    items: [
      { emoji: "🍳", label: "Padella" },
      { emoji: "🥘", label: "Pentola" },
      { emoji: "🔪", label: "Coltello" },
      { emoji: "🥄", label: "Cucchiaino" },
      { emoji: "🍴", label: "Forchetta" },
      { emoji: "🍽️", label: "Piatto" },
      { emoji: "🥛", label: "Bicchiere" },
      { emoji: "🧂", label: "Sale" },
    ],
  },
  {
    id: "strumenti",
    level: 1,
    label: "Strumenti musicali",
    items: [
      { emoji: "🎸", label: "Chitarra" },
      { emoji: "🥁", label: "Tamburo" },
      { emoji: "🎺", label: "Tromba" },
      { emoji: "🎻", label: "Violino" },
      { emoji: "🎹", label: "Pianoforte" },
      { emoji: "🎷", label: "Sassofono" },
      { emoji: "🪕", label: "Banjo" },
      { emoji: "🪘", label: "Conga" },
    ],
  },
  {
    id: "piante",
    level: 1,
    label: "Piante",
    items: [
      { emoji: "🌳", label: "Albero" },
      { emoji: "🌷", label: "Tulipano" },
      { emoji: "🌵", label: "Cactus" },
      { emoji: "🌿", label: "Felce" },
      { emoji: "🌴", label: "Palma" },
      { emoji: "🌹", label: "Rosa" },
      { emoji: "🌻", label: "Girasole" },
      { emoji: "🪴", label: "Pianta grassa" },
    ],
  },
  {
    id: "giocattoli",
    level: 1,
    label: "Giocattoli",
    items: [
      { emoji: "🧸", label: "Orsetto" },
      { emoji: "🪀", label: "Yo-yo" },
      { emoji: "🧩", label: "Puzzle" },
      { emoji: "🎲", label: "Dado" },
      { emoji: "🚂", label: "Trenino" },
      { emoji: "🪃", label: "Boomerang" },
      { emoji: "🎯", label: "Bersaglio" },
      { emoji: "🪄", label: "Bacchetta magica" },
    ],
  },
  {
    id: "cibo",
    level: 1,
    label: "Cibo",
    items: [
      { emoji: "🍕", label: "Pizza" },
      { emoji: "🍝", label: "Pasta" },
      { emoji: "🍦", label: "Gelato" },
      { emoji: "🍞", label: "Pane" },
      { emoji: "🧀", label: "Formaggio" },
      { emoji: "🍪", label: "Biscotto" },
      { emoji: "🍰", label: "Torta" },
      { emoji: "🍚", label: "Riso" },
    ],
  },
  {
    id: "mobili",
    level: 1,
    label: "Mobili",
    items: [
      { emoji: "🪑", label: "Sedia" },
      { emoji: "🛋️", label: "Divano" },
      { emoji: "🛏️", label: "Letto" },
      { emoji: "🗄️", label: "Armadio" },
      { emoji: "📚", label: "Scaffale" },
      { emoji: "🪞", label: "Specchio" },
      { emoji: "🧺", label: "Cestino" },
    ],
  },
  {
    id: "animali-volano",
    level: 2,
    label: "Animali che volano",
    items: [
      { emoji: "🦅", label: "Aquila" },
      { emoji: "🦋", label: "Farfalla" },
      { emoji: "🐝", label: "Ape" },
      { emoji: "🦉", label: "Gufo" },
      { emoji: "🦜", label: "Pappagallo" },
      { emoji: "🕊️", label: "Colomba" },
      { emoji: "🐞", label: "Coccinella" },
      { emoji: "🦇", label: "Pipistrello" },
    ],
  },
  {
    id: "animali-nuotano",
    level: 2,
    label: "Animali che nuotano",
    items: [
      { emoji: "🐟", label: "Pesce" },
      { emoji: "🐬", label: "Delfino" },
      { emoji: "🦈", label: "Squalo" },
      { emoji: "🐋", label: "Balena" },
      { emoji: "🐳", label: "Capodoglio" },
      { emoji: "🦞", label: "Aragosta" },
      { emoji: "🐠", label: "Pesce tropicale" },
      { emoji: "🐢", label: "Tartaruga marina" },
      { emoji: "🦀", label: "Granchio" },
      { emoji: "🐙", label: "Polpo" },
      { emoji: "🦑", label: "Calamaro" },
    ],
  },
  {
    id: "animali-fattoria",
    level: 2,
    label: "Animali della fattoria",
    items: [
      { emoji: "🐄", label: "Mucca" },
      { emoji: "🐖", label: "Maiale" },
      { emoji: "🐔", label: "Gallina" },
      { emoji: "🐑", label: "Pecora" },
      { emoji: "🐐", label: "Capra" },
      { emoji: "🐴", label: "Cavallo" },
      { emoji: "🦆", label: "Anatra" },
      { emoji: "🐓", label: "Gallo" },
    ],
  },
  {
    id: "animali-selvatici",
    level: 2,
    label: "Animali selvatici",
    items: [
      { emoji: "🦁", label: "Leone" },
      { emoji: "🐯", label: "Tigre" },
      { emoji: "🐘", label: "Elefante" },
      { emoji: "🦒", label: "Giraffa" },
      { emoji: "🦓", label: "Zebra" },
      { emoji: "🐻", label: "Orso" },
      { emoji: "🦊", label: "Volpe" },
      { emoji: "🐺", label: "Lupo" },
    ],
  },
  {
    id: "verdura",
    level: 2,
    label: "Verdura",
    items: [
      { emoji: "🥕", label: "Carota" },
      { emoji: "🥦", label: "Broccolo" },
      { emoji: "🍆", label: "Melanzana" },
      { emoji: "🥒", label: "Zucchina" },
      { emoji: "🧅", label: "Cipolla" },
      { emoji: "🥔", label: "Patata" },
      { emoji: "🌽", label: "Mais" },
      { emoji: "🫑", label: "Peperone" },
    ],
  },
  {
    id: "attrezzi",
    level: 2,
    label: "Attrezzi da lavoro",
    items: [
      { emoji: "🔨", label: "Martello" },
      { emoji: "🪛", label: "Cacciavite" },
      { emoji: "🔧", label: "Chiave inglese" },
      { emoji: "🪚", label: "Sega" },
      { emoji: "🛠️", label: "Pinza" },
      { emoji: "🪓", label: "Ascia" },
      { emoji: "⚒️", label: "Incudine" },
      { emoji: "🧰", label: "Cassetta attrezzi" },
    ],
  },
  {
    id: "elettrodomestici",
    level: 2,
    label: "Elettrodomestici",
    items: [
      { emoji: "🧊", label: "Frigorifero" },
      { emoji: "🧺", label: "Lavatrice" },
      { emoji: "🔥", label: "Forno" },
      { emoji: "🍞", label: "Tostapane" },
      { emoji: "🥤", label: "Frullatore" },
      { emoji: "☕", label: "Macchina caffè" },
      { emoji: "🍽️", label: "Lavastoviglie" },
      { emoji: "🌀", label: "Microonde" },
    ],
  },
  {
    id: "sport-palla",
    level: 2,
    label: "Sport con la palla",
    items: [
      { emoji: "⚽", label: "Calcio" },
      { emoji: "🏀", label: "Basket" },
      { emoji: "🎾", label: "Tennis" },
      { emoji: "🏐", label: "Pallavolo" },
      { emoji: "🏈", label: "Football" },
      { emoji: "⚾", label: "Baseball" },
      { emoji: "🏉", label: "Rugby" },
      { emoji: "🤾", label: "Pallamano" },
    ],
  },
  {
    id: "bagno",
    level: 2,
    label: "Cose del bagno",
    items: [
      { emoji: "🧼", label: "Sapone" },
      { emoji: "🪥", label: "Spazzolino" },
      { emoji: "🧴", label: "Shampoo" },
      { emoji: "🧻", label: "Carta igienica" },
      { emoji: "🚿", label: "Doccia" },
      { emoji: "🛁", label: "Vasca" },
      { emoji: "🪒", label: "Rasoio" },
      { emoji: "🧽", label: "Spugna" },
    ],
  },
];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * index);
    const current = index - 1;
    [result[current], result[randomIndex]] = [
      result[randomIndex],
      result[current],
    ];
  }
  return result;
}

/**
 * 100 gruppi unici per difficoltà. A ogni partita il mazzo viene rimescolato
 * e le domande non si ripetono finché non sono state viste tutte.
 */
export function buildOddOneOutBank(level) {
  const targetCategories = oddOneOutCategories.filter(
    (category) => category.level === level
  );
  const intruderCategories = oddOneOutCategories.filter((category) =>
    level === 2
      ? category.level === 2
      : category.level <= level
  );
  const groups = [];
  const seen = new Set();
  let attempts = 0;

  while (groups.length < 100 && attempts < 50000) {
    attempts += 1;
    const target =
      targetCategories[randomInt(0, targetCategories.length - 1)];
    const possibleIntruders = intruderCategories.filter(
      (category) => category.id !== target.id
    );
    const intruderCategory =
      possibleIntruders[randomInt(0, possibleIntruders.length - 1)];

    if (!intruderCategory) continue;

    const targetItems = shuffle(target.items).slice(0, 3);
    const intruder =
      intruderCategory.items[
        randomInt(0, intruderCategory.items.length - 1)
      ];

    if (targetItems.some((item) => item.label === intruder.label)) continue;

    const key = [...targetItems, intruder]
      .map((item) => item.label)
      .sort()
      .join("|");
    if (seen.has(key)) continue;
    seen.add(key);

    groups.push({
      id: `${target.id}-${groups.length}`,
      category: target.label,
      intruderCategory: intruderCategory.label,
      intruder: intruder.label,
      items: shuffle([...targetItems, intruder]),
      key,
    });
  }

  return groups;
}

export const oddOneOutBanks = [0, 1, 2].map((level) =>
  buildOddOneOutBank(level)
);
