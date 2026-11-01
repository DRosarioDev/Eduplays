/**
 * Verbi per il gioco dei tempi verbali.
 *
 * Ogni verbo genera tre domande: presente, passato prossimo e futuro.
 * Il soggetto è fisso per ogni verbo, così le forme del passato prossimo
 * restano sempre corrette (per esempio "Giulia è andata", "Marco ha mangiato").
 */

const TENSES = [
  { id: "present", label: "presente", clue: "Oggi" },
  { id: "past", label: "passato prossimo", clue: "Ieri" },
  { id: "future", label: "futuro", clue: "Domani" },
];

const BASE_VERB_BANKS = [
  // Base: verbi regolari e molto comuni.
  [
    {
      infinitive: "mangiare",
      subject: "Marco",
      present: "mangia",
      past: "ha mangiato",
      future: "mangerà",
      complement: "una mela",
    },
    {
      infinitive: "parlare",
      subject: "Giulia",
      present: "parla",
      past: "ha parlato",
      future: "parlerà",
      complement: "con il maestro",
    },
    {
      infinitive: "studiare",
      subject: "Luca",
      present: "studia",
      past: "ha studiato",
      future: "studierà",
      complement: "matematica",
    },
    {
      infinitive: "giocare",
      subject: "Sara",
      present: "gioca",
      past: "ha giocato",
      future: "giocherà",
      complement: "in giardino",
    },
    {
      infinitive: "cantare",
      subject: "Marco",
      present: "canta",
      past: "ha cantato",
      future: "canterà",
      complement: "una canzone",
    },
    {
      infinitive: "ballare",
      subject: "Giulia",
      present: "balla",
      past: "ha ballato",
      future: "ballerà",
      complement: "in salotto",
    },
    {
      infinitive: "lavorare",
      subject: "Luca",
      present: "lavora",
      past: "ha lavorato",
      future: "lavorerà",
      complement: "in ufficio",
    },
    {
      infinitive: "comprare",
      subject: "Sara",
      present: "compra",
      past: "ha comprato",
      future: "comprerà",
      complement: "il pane",
    },
    {
      infinitive: "cucinare",
      subject: "Marco",
      present: "cucina",
      past: "ha cucinato",
      future: "cucinerà",
      complement: "la cena",
    },
    {
      infinitive: "disegnare",
      subject: "Giulia",
      present: "disegna",
      past: "ha disegnato",
      future: "disegnerà",
      complement: "un gatto",
    },
    {
      infinitive: "ascoltare",
      subject: "Luca",
      present: "ascolta",
      past: "ha ascoltato",
      future: "ascolterà",
      complement: "la musica",
    },
    {
      infinitive: "guardare",
      subject: "Sara",
      present: "guarda",
      past: "ha guardato",
      future: "guarderà",
      complement: "un film",
    },
  ],

  // Facile: verbi comuni con qualche participio irregolare.
  [
    {
      infinitive: "leggere",
      subject: "Giulia",
      present: "legge",
      past: "ha letto",
      future: "leggerà",
      complement: "un libro",
    },
    {
      infinitive: "scrivere",
      subject: "Marco",
      present: "scrive",
      past: "ha scritto",
      future: "scriverà",
      complement: "una lettera",
    },
    {
      infinitive: "prendere",
      subject: "Luca",
      present: "prende",
      past: "ha preso",
      future: "prenderà",
      complement: "il treno",
    },
    {
      infinitive: "vedere",
      subject: "Sara",
      present: "vede",
      past: "ha visto",
      future: "vedrà",
      complement: "un uccellino",
    },
    {
      infinitive: "correre",
      subject: "Marco",
      present: "corre",
      past: "ha corso",
      future: "correrà",
      complement: "nel parco",
    },
    {
      infinitive: "vendere",
      subject: "Giulia",
      present: "vende",
      past: "ha venduto",
      future: "venderà",
      complement: "la bicicletta",
    },
    {
      infinitive: "ricevere",
      subject: "Luca",
      present: "riceve",
      past: "ha ricevuto",
      future: "riceverà",
      complement: "un regalo",
    },
    {
      infinitive: "chiedere",
      subject: "Sara",
      present: "chiede",
      past: "ha chiesto",
      future: "chiederà",
      complement: "un favore",
    },
    {
      infinitive: "rispondere",
      subject: "Marco",
      present: "risponde",
      past: "ha risposto",
      future: "risponderà",
      complement: "alla domanda",
    },
    {
      infinitive: "mettere",
      subject: "Giulia",
      present: "mette",
      past: "ha messo",
      future: "metterà",
      complement: "lo zaino in camera",
    },
    {
      infinitive: "dormire",
      subject: "Luca",
      present: "dorme",
      past: "ha dormito",
      future: "dormirà",
      complement: "fino a tardi",
    },
    {
      infinitive: "partire",
      subject: "Sara",
      present: "parte",
      past: "è partita",
      future: "partirà",
      complement: "per Roma",
    },
  ],

  // Medio: verbi irregolari e forme meno prevedibili.
  [
    {
      infinitive: "andare",
      subject: "Giulia",
      present: "va",
      past: "è andata",
      future: "andrà",
      complement: "a scuola",
    },
    {
      infinitive: "fare",
      subject: "Marco",
      present: "fa",
      past: "ha fatto",
      future: "farà",
      complement: "i compiti",
    },
    {
      infinitive: "dire",
      subject: "Luca",
      present: "dice",
      past: "ha detto",
      future: "dirà",
      complement: "la verità",
    },
    {
      infinitive: "essere",
      subject: "Sara",
      present: "è",
      past: "è stata",
      future: "sarà",
      complement: "felice",
    },
    {
      infinitive: "avere",
      subject: "Marco",
      present: "ha",
      past: "ha avuto",
      future: "avrà",
      complement: "un cane",
    },
    {
      infinitive: "venire",
      subject: "Giulia",
      present: "viene",
      past: "è venuta",
      future: "verrà",
      complement: "a casa",
    },
    {
      infinitive: "uscire",
      subject: "Luca",
      present: "esce",
      past: "è uscito",
      future: "uscirà",
      complement: "con gli amici",
    },
    {
      infinitive: "rimanere",
      subject: "Sara",
      present: "rimane",
      past: "è rimasta",
      future: "rimarrà",
      complement: "a casa",
    },
    {
      infinitive: "bere",
      subject: "Marco",
      present: "beve",
      past: "ha bevuto",
      future: "berrà",
      complement: "un succo",
    },
    {
      infinitive: "sapere",
      subject: "Giulia",
      present: "sa",
      past: "ha saputo",
      future: "saprà",
      complement: "la risposta",
    },
    {
      infinitive: "volere",
      subject: "Luca",
      present: "vuole",
      past: "ha voluto",
      future: "vorrà",
      complement: "un gelato",
    },
    {
      infinitive: "potere",
      subject: "Sara",
      present: "può",
      past: "ha potuto",
      future: "potrà",
      complement: "aiutare",
    },
  ],
];

/**
 * Coniuga un verbo regolare nelle tre persone usate dal gioco.
 * Serve per aggiungere molti verbi senza scrivere a mano ogni forma.
 */
function regularVerb(infinitive, subject, complement, { isc = false } = {}) {
  const stem = infinitive.slice(0, -3);
  const ending = infinitive.slice(-3);
  let present;
  let participle;
  let future;

  if (ending === "are") {
    present = `${stem}a`;
    participle = `${stem}ato`;
    let futureStem = stem;

    if (/[cg]i$/.test(futureStem)) {
      futureStem = futureStem.slice(0, -1);
    } else if (/[cg]$/.test(futureStem)) {
      futureStem = `${futureStem}h`;
    }

    future = `${futureStem}erà`;
  } else if (ending === "ere") {
    present = `${stem}e`;
    participle = `${stem}uto`;
    future = `${stem}erà`;
  } else {
    present = `${stem}${isc ? "isce" : "e"}`;
    participle = `${stem}ito`;
    future = `${stem}irà`;
  }

  return {
    infinitive,
    subject,
    present,
    past: `ha ${participle}`,
    future,
    complement,
  };
}

const EXTRA_VERB_BANKS = [
  [
    regularVerb("saltare", "Marco", "la corda"),
    regularVerb("nuotare", "Giulia", "in piscina"),
    regularVerb("cercare", "Luca", "le chiavi"),
    regularVerb("pagare", "Sara", "il gelato"),
    regularVerb("preparare", "Marco", "la cena"),
    regularVerb("riparare", "Giulia", "la bici"),
    regularVerb("salutare", "Luca", "gli amici"),
    regularVerb("telefonare", "Sara", "alla nonna"),
    regularVerb("visitare", "Marco", "il museo"),
    regularVerb("amare", "Giulia", "la musica"),
    regularVerb("imparare", "Luca", "la poesia"),
    regularVerb("lavare", "Sara", "i piatti"),
    regularVerb("portare", "Marco", "lo zaino"),
    regularVerb("tagliare", "Giulia", "la torta"),
    regularVerb("lasciare", "Luca", "il libro"),
    regularVerb("cominciare", "Sara", "il gioco"),
    regularVerb("sognare", "Marco", "il mare"),
    regularVerb("bagnare", "Giulia", "i fiori"),
    regularVerb("insegnare", "Luca", "matematica"),
    regularVerb("raccontare", "Sara", "una storia"),
    regularVerb("aspettare", "Marco", "il treno"),
    regularVerb("aiutare", "Giulia", "la mamma"),
  ],
  [
    regularVerb("credere", "Giulia", "alla storia"),
    regularVerb("temere", "Marco", "il buio"),
    regularVerb("godere", "Luca", "del sole"),
    regularVerb("ripetere", "Sara", "la frase"),
    regularVerb("cedere", "Marco", "il posto"),
    regularVerb("sentire", "Giulia", "la musica"),
    regularVerb("seguire", "Luca", "la strada"),
    regularVerb("servire", "Sara", "la cena"),
    regularVerb("mentire", "Marco", "alla maestra"),
    regularVerb("inghiottire", "Giulia", "la medicina"),
    regularVerb("riempire", "Luca", "il bicchiere"),
    regularVerb("capire", "Sara", "la lezione", { isc: true }),
    regularVerb("finire", "Marco", "i compiti", { isc: true }),
    regularVerb("pulire", "Giulia", "la camera", { isc: true }),
    regularVerb("costruire", "Luca", "una torre", { isc: true }),
    regularVerb("spedire", "Sara", "una lettera", { isc: true }),
    regularVerb("preferire", "Marco", "il gelato", { isc: true }),
    regularVerb("suggerire", "Giulia", "un'idea", { isc: true }),
    regularVerb("obbedire", "Luca", "ai genitori", { isc: true }),
    regularVerb("punire", "Sara", "il colpevole", { isc: true }),
    regularVerb("unire", "Marco", "due pezzi", { isc: true }),
    regularVerb("colpire", "Giulia", "il bersaglio", { isc: true }),
  ],
  [
    regularVerb("condire", "Marco", "l'insalata", { isc: true }),
    regularVerb("custodire", "Giulia", "il tesoro", { isc: true }),
    regularVerb("definire", "Luca", "la regola", { isc: true }),
    regularVerb("digerire", "Sara", "la cena", { isc: true }),
    regularVerb("eseguire", "Marco", "un compito"),
    regularVerb("ferire", "Giulia", "il ginocchio", { isc: true }),
    regularVerb("garantire", "Luca", "il risultato", { isc: true }),
    regularVerb("gestire", "Sara", "un negozio", { isc: true }),
    regularVerb("inserire", "Marco", "il numero", { isc: true }),
    regularVerb("istruire", "Giulia", "i bambini", { isc: true }),
    regularVerb("nutrire", "Luca", "il gatto"),
    regularVerb("patire", "Sara", "il freddo", { isc: true }),
    regularVerb("proibire", "Marco", "l'uso", { isc: true }),
    regularVerb("rapire", "Giulia", "il principe", { isc: true }),
    regularVerb("restituire", "Luca", "il libro", { isc: true }),
    regularVerb("riunire", "Sara", "gli amici", { isc: true }),
    regularVerb("riferire", "Marco", "la notizia", { isc: true }),
    regularVerb("scolpire", "Giulia", "il legno", { isc: true }),
    regularVerb("stabilire", "Luca", "la data", { isc: true }),
    regularVerb("stupire", "Sara", "tutti", { isc: true }),
    regularVerb("subire", "Marco", "un torto", { isc: true }),
    regularVerb("trasferire", "Giulia", "il tavolo", { isc: true }),
  ],
];

const VERB_BANKS = BASE_VERB_BANKS.map((bank, index) => [
  ...bank,
  ...EXTRA_VERB_BANKS[index],
]);

export const verbTenseBanks = VERB_BANKS.map((verbs) =>
  verbs.flatMap((verb) =>
    TENSES.map((tense) => ({
      key: `${verb.infinitive}-${tense.id}`,
      infinitive: verb.infinitive,
      subject: verb.subject,
      complement: verb.complement,
      tense: tense.label,
      clue: tense.clue,
      answer: verb[tense.id],
      distractors: TENSES.filter((other) => other.id !== tense.id).map(
        (other) => verb[other.id]
      ),
      sentence: `${tense.clue} ${verb.subject} ___ ${verb.complement}.`,
      fullSentence: `${tense.clue} ${verb.subject} ${verb[tense.id]} ${verb.complement}.`,
    }))
  )
);
