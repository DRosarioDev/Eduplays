/**
 * Materiali didattici scaricabili.
 * I PDF vivono in `public/downloads/didattica/` e vengono serviti da Vite.
 * Ogni lezione ha una scheda A4 e una presentazione 16:9.
 */

export const DIDATTICA = [
  {
    id: "le-doppie",
    title: "Le doppie",
    category: "italian",
    emoji: "✌️",
    description:
      "Una consonante in più cambia il suono e il significato della parola. Impariamo a riconoscerla e a scriverla.",
    topics: ["pala · palla", "nona · nonna", "caro · carro"],
    game: { title: "Le doppie", link: "/italian/double-consonants" },
    files: [
      {
        label: "Scheda A4",
        meta: "2 pagine · da stampare",
        size: "134 KB",
        href: "/downloads/didattica/01-le-doppie-scheda.pdf",
      },
      {
        label: "Slide 16:9",
        meta: "7 slide · per la LIM",
        size: "571 KB",
        href: "/downloads/didattica/01-le-doppie-slides.pdf",
      },
    ],
  },
  {
    id: "il-suono-h",
    title: "Il suono H",
    category: "italian",
    emoji: "🔤",
    description:
      "Ho, hai, ha, hanno: la H del verbo avere. Impariamo a distinguerla dalle parole o, ai, a, anno.",
    topics: ["ho · o", "hai · ai", "hanno · anno"],
    game: { title: "Il suono H", link: "/italian/h-sound" },
    files: [
      {
        label: "Scheda A4",
        meta: "2 pagine · da stampare",
        size: "98 KB",
        href: "/downloads/didattica/02-il-suono-h-scheda.pdf",
      },
      {
        label: "Slide 16:9",
        meta: "7 slide · per la LIM",
        size: "537 KB",
        href: "/downloads/didattica/02-il-suono-h-slides.pdf",
      },
    ],
  },
  {
    id: "gli-e-li",
    title: "GLI e LI",
    category: "italian",
    emoji: "🔠",
    description:
      "GLI è un suono unico, LI è la lettera L seguita da I. Alleniamoci a scegliere la grafia giusta.",
    topics: ["figlio", "olio", "famiglia", "alice"],
    game: { title: "Il suono GL", link: "/italian/gl-sound" },
    files: [
      {
        label: "Scheda A4",
        meta: "2 pagine · da stampare",
        size: "98 KB",
        href: "/downloads/didattica/03-gli-e-li-scheda.pdf",
      },
      {
        label: "Slide 16:9",
        meta: "7 slide · per la LIM",
        size: "535 KB",
        href: "/downloads/didattica/03-gli-e-li-slides.pdf",
      },
    ],
  },
  {
    id: "i-tempi-verbali",
    title: "I tempi verbali",
    category: "italian",
    emoji: "⏳",
    description:
      "Presente, passato prossimo e futuro raccontati dalle parole indizio: oggi, ieri, domani.",
    topics: ["oggi · presente", "ieri · passato", "domani · futuro"],
    game: { title: "Tempi verbali", link: "/italian/verb-tenses" },
    files: [
      {
        label: "Scheda A4",
        meta: "2 pagine · da stampare",
        size: "125 KB",
        href: "/downloads/didattica/04-i-tempi-verbali-scheda.pdf",
      },
      {
        label: "Slide 16:9",
        meta: "7 slide · per la LIM",
        size: "565 KB",
        href: "/downloads/didattica/04-i-tempi-verbali-slides.pdf",
      },
    ],
  },
  {
    id: "le-tabelline",
    title: "Le tabelline",
    category: "math",
    emoji: "✖️",
    description:
      "Trucchi semplici per le tabelline del 6, 7, 8 e 9, per calcolare più in fretta e con sicurezza.",
    topics: ["6 × n = 5 × n + n", "9 × n = 10 × n − n", "7 × 8 = 56"],
    game: { title: "Tabelline", link: "/math/multiplication" },
    files: [
      {
        label: "Scheda A4",
        meta: "2 pagine · da stampare",
        size: "108 KB",
        href: "/downloads/didattica/05-le-tabelline-scheda.pdf",
      },
      {
        label: "Slide 16:9",
        meta: "7 slide · per la LIM",
        size: "551 KB",
        href: "/downloads/didattica/05-le-tabelline-slides.pdf",
      },
    ],
  },
  {
    id: "sinonimi-e-contrari",
    title: "Sinonimi e contrari",
    category: "italian",
    emoji: "🔄",
    description:
      "Parole che si somigliano e parole che dicono il contrario: un gioco per arricchire il vocabolario.",
    topics: ["bello · carino", "alto · basso", "giorno · notte"],
    game: { title: "Sinonimi", link: "/italian/synonym" },
    files: [
      {
        label: "Scheda A4",
        meta: "2 pagine · teoria + esercizi",
        size: "129 KB",
        href: "/downloads/didattica/06-sinonimi-e-contrari-scheda.pdf",
      },
      {
        label: "Slide 16:9",
        meta: "7 slide · per la LIM",
        size: "538 KB",
        href: "/downloads/didattica/06-sinonimi-e-contrari-slides.pdf",
      },
    ],
  },
  {
    id: "le-sillabe",
    title: "Le sillabe",
    category: "italian",
    emoji: "👏",
    description:
      "Un colpo di voce per ogni sillaba: impara a dividere le parole battendo le mani.",
    topics: ["ca-sa", "bam-bi-no", "pa-squa"],
    game: { title: "Le sillabe", link: "/italian/syllables" },
    files: [
      {
        label: "Scheda A4",
        meta: "2 pagine · teoria + esercizi",
        size: "169 KB",
        href: "/downloads/didattica/07-le-sillabe-scheda.pdf",
      },
      {
        label: "Slide 16:9",
        meta: "7 slide · per la LIM",
        size: "578 KB",
        href: "/downloads/didattica/07-le-sillabe-slides.pdf",
      },
    ],
  },
  {
    id: "mescola-i-colori",
    title: "Mescola i colori",
    category: "colors",
    emoji: "🎨",
    description:
      "Giallo + blu, rosso + giallo: scopri i colori secondari con una scheda piena di esperimenti.",
    topics: ["giallo + blu = verde", "rosso + blu = viola", "rosso + giallo = arancione"],
    game: { title: "Mescola i colori", link: "/colors/mixing" },
    files: [
      {
        label: "Scheda A4",
        meta: "2 pagine · teoria + esercizi",
        size: "194 KB",
        href: "/downloads/didattica/08-mescola-i-colori-scheda.pdf",
      },
      {
        label: "Slide 16:9",
        meta: "7 slide · per la LIM",
        size: "603 KB",
        href: "/downloads/didattica/08-mescola-i-colori-slides.pdf",
      },
    ],
  },
  {
    id: "l-apostrofo",
    title: "L’apostrofo",
    category: "italian",
    emoji: "✏️",
    description:
      "Una piccola virgola che unisce due parole: impara quando serve e quando non serve.",
    topics: ["l’amico", "un’amica", "d’oro"],
    files: [
      {
        label: "Scheda A4",
        meta: "2 pagine · teoria + esercizi",
        size: "130 KB",
        href: "/downloads/didattica/09-l-apostrofo-scheda.pdf",
      },
      {
        label: "Slide 16:9",
        meta: "7 slide · per la LIM",
        size: "538 KB",
        href: "/downloads/didattica/09-l-apostrofo-slides.pdf",
      },
    ],
  },
  {
    id: "l-accento",
    title: "L’accento",
    category: "italian",
    emoji: "🎵",
    description:
      "Quel segno sulla vocale che cambia il suono e il significato: città, caffè, perché.",
    topics: ["e · è", "da · dà", "perche · perché"],
    files: [
      {
        label: "Scheda A4",
        meta: "2 pagine · teoria + esercizi",
        size: "142 KB",
        href: "/downloads/didattica/10-l-accento-scheda.pdf",
      },
      {
        label: "Slide 16:9",
        meta: "7 slide · per la LIM",
        size: "551 KB",
        href: "/downloads/didattica/10-l-accento-slides.pdf",
      },
    ],
  },
  {
    id: "le-maiuscole",
    title: "Le maiuscole",
    category: "italian",
    emoji: "🅰️",
    description:
      "All'inizio di frase e nei nomi propri: scopri quando la lettera si veste da grande.",
    topics: ["Anna", "Roma", "lunedì"],
    files: [
      {
        label: "Scheda A4",
        meta: "2 pagine · teoria + esercizi",
        size: "129 KB",
        href: "/downloads/didattica/11-le-maiuscole-scheda.pdf",
      },
      {
        label: "Slide 16:9",
        meta: "7 slide · per la LIM",
        size: "537 KB",
        href: "/downloads/didattica/11-le-maiuscole-slides.pdf",
      },
    ],
  },
  {
    id: "doppio-e-meta",
    title: "Doppio e metà",
    category: "math",
    emoji: "✖️",
    description:
      "×2 e ÷2 spiegati con esempi e sfide: due operazioni che si tengono per mano.",
    topics: ["6 × 2 = 12", "12 ÷ 2 = 6", "7 + 7 = 14"],
    game: { title: "Doppio o metà", link: "/math/double-half" },
    files: [
      {
        label: "Scheda A4",
        meta: "2 pagine · teoria + esercizi",
        size: "139 KB",
        href: "/downloads/didattica/12-doppio-e-meta-scheda.pdf",
      },
      {
        label: "Slide 16:9",
        meta: "7 slide · per la LIM",
        size: "549 KB",
        href: "/downloads/didattica/12-doppio-e-meta-slides.pdf",
      },
    ],
  },
];

export const DIDATTICA_TOTALS = {
  lessons: DIDATTICA.length,
  files: DIDATTICA.reduce((total, lesson) => total + lesson.files.length, 0),
};
