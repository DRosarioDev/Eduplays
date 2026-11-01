/**
 * Parole con le doppie.
 *
 * Per ogni parola c'è una versione sbagliata con una sola consonante.
 * Il gioco chiede di riconoscere la scrittura corretta; l'indizio aiuta
 * a capire il significato senza rendere la risposta troppo ovvia.
 */

function firstDouble(word) {
  for (let index = 0; index < word.length - 1; index += 1) {
    const letter = word[index];
    if (
      letter === word[index + 1] &&
      "bcdfglmnpqrstvz".includes(letter)
    ) {
      return letter + letter;
    }
  }
  return "";
}

const LEVEL_0 = [
  { word: "mamma", wrong: "mama", clue: "La mamma" },
  { word: "babbo", wrong: "babo", clue: "Il papà" },
  { word: "gatto", wrong: "gato", clue: "Animale che miagola" },
  { word: "tazza", wrong: "taza", clue: "Si usa per bere" },
  { word: "pizza", wrong: "piza", clue: "Cibo tondo e gustoso" },
  { word: "pazzo", wrong: "pazo", clue: "Chi fa cose strane" },
  { word: "pozzo", wrong: "pozo", clue: "Buco nel terreno con l'acqua" },
  { word: "pezzo", wrong: "pezo", clue: "Una parte di qualcosa" },
  { word: "mazzo", wrong: "mazo", clue: "Insieme di carte o fiori" },
  { word: "tappo", wrong: "tapo", clue: "Chiude la bottiglia" },
  { word: "zappa", wrong: "zapa", clue: "Attrezzo per la terra" },
  { word: "bocca", wrong: "boca", clue: "Si usa per parlare e mangiare" },
  { word: "ricco", wrong: "rico", clue: "Chi ha molti soldi" },
  { word: "vacca", wrong: "vaca", clue: "Animale che dà il latte" },
  { word: "zucca", wrong: "zuca", clue: "Ortaggio arancione" },
  { word: "giacca", wrong: "giaca", clue: "Indumento con le maniche" },
  { word: "roccia", wrong: "rocia", clue: "Pietra molto dura" },
  { word: "faccia", wrong: "facia", clue: "La parte davanti della testa" },
  { word: "braccio", wrong: "bracio", clue: "Parte del corpo" },
  { word: "goccia", wrong: "gocia", clue: "Piccola quantità di acqua" },
  { word: "stella", wrong: "stela", clue: "Brilla nel cielo di notte" },
  { word: "biscotto", wrong: "biscoto", clue: "Dolce da inzuppare" },
  { word: "forchetta", wrong: "forcheta", clue: "Si usa per mangiare" },
  { word: "coltello", wrong: "coltelo", clue: "Serve per tagliare" },
  { word: "chitarra", wrong: "chitara", clue: "Strumento con le corde" },
  { word: "marrone", wrong: "marone", clue: "Colore del cioccolato" },
  { word: "campanella", wrong: "campanela", clue: "Suona a scuola" },
  { word: "gallina", wrong: "galina", clue: "Animale che fa le uova" },
  { word: "cavallo", wrong: "cavalo", clue: "Animale che galoppa" },
  { word: "castello", wrong: "castelo", clue: "Costruzione con le torri" },
];

const LEVEL_1 = [
  { word: "doccia", wrong: "docia", clue: "Si fa per lavarsi" },
  { word: "cuccia", wrong: "cucia", clue: "La casa del cane" },
  { word: "buccia", wrong: "bucia", clue: "La parte esterna della frutta" },
  { word: "coccinella", wrong: "cocinella", clue: "Insetto rosso con i puntini" },
  { word: "zucchero", wrong: "zuchero", clue: "Rende dolce il caffè" },
  { word: "piccione", wrong: "picione", clue: "Uccello che vive in città" },
  { word: "riccio", wrong: "ricio", clue: "Animale con gli aculei" },
  { word: "ciccia", wrong: "cicia", clue: "La parte morbida del corpo" },
  { word: "sacchetto", wrong: "sachetto", clue: "Si usa per la spesa" },
  { word: "pacchetto", wrong: "pachetto", clue: "Un pacco piccolo" },
  { word: "accendere", wrong: "acendere", clue: "Accendere la luce" },
  { word: "acciaio", wrong: "aciaio", clue: "Metallo molto resistente" },
  { word: "caccia", wrong: "cacia", clue: "Andare a cercare animali" },
  { word: "cacciatore", wrong: "caciatore", clue: "Chi va a caccia" },
  { word: "ricciolo", wrong: "riciolo", clue: "Ciocca di capelli arrotolata" },
  { word: "addome", wrong: "adome", clue: "La pancia" },
  { word: "addestrare", wrong: "adestrare", clue: "Insegnare a fare qualcosa" },
  { word: "affidare", wrong: "afidare", clue: "Dare in custodia" },
  { word: "arredare", wrong: "aredare", clue: "Mettere i mobili in casa" },
  { word: "corredo", wrong: "coredo", clue: "Insieme di cose per la scuola" },
  { word: "bicicletta", wrong: "bicicleta", clue: "Veicolo con due ruote" },
  { word: "trattore", wrong: "tratore", clue: "Macchina per la campagna" },
  { word: "lettera", wrong: "letera", clue: "Si scrive e si spedisce" },
  { word: "racconto", wrong: "raconto", clue: "Una storia da leggere" },
  { word: "pennello", wrong: "penello", clue: "Serve per dipingere" },
  { word: "caramella", wrong: "caramela", clue: "Dolce da succhiare" },
  { word: "galleria", wrong: "galeria", clue: "Passaggio lungo e coperto" },
  { word: "giocattolo", wrong: "giocatolo", clue: "Serve per giocare" },
  { word: "marmellata", wrong: "marmelata", clue: "Si spalma sul pane" },
  { word: "motocicletta", wrong: "motocicleta", clue: "Veicolo a due ruote con il motore" },
];

const LEVEL_2 = [
  { word: "soffitto", wrong: "sofitto", clue: "La parte alta della stanza" },
  { word: "soffice", wrong: "sofice", clue: "Morbido come un cuscino" },
  { word: "giraffa", wrong: "girafa", clue: "Animale con il collo lungo" },
  { word: "graffio", wrong: "grafio", clue: "Segno sulla pelle" },
  { word: "muffa", wrong: "mufa", clue: "Cresce nei posti umidi" },
  { word: "raffreddore", wrong: "rafreddore", clue: "Malanno del naso" },
  { word: "scaffale", wrong: "scafale", clue: "Mobile con i ripiani" },
  { word: "staffa", wrong: "stafa", clue: "Si usa per salire a cavallo" },
  { word: "zuffa", wrong: "zufa", clue: "Rissa confusa" },
  { word: "aggettivo", wrong: "agettivo", clue: "Parola che descrive il nome" },
  { word: "agguato", wrong: "aguato", clue: "Imboscata" },
  { word: "aggiornare", wrong: "agiornare", clue: "Rendere più recente" },
  { word: "leggero", wrong: "legero", clue: "Che pesa poco" },
  { word: "maggio", wrong: "magio", clue: "Mese con le rose" },
  { word: "peggio", wrong: "pegio", clue: "Più brutto" },
  { word: "raggio", wrong: "ragio", clue: "Filo di luce" },
  { word: "soggetto", wrong: "sogetto", clue: "Chi compie l'azione" },
  { word: "traghetto", wrong: "tragheto", clue: "Nave che porta da una riva all'altra" },
  { word: "viaggio", wrong: "viagio", clue: "Andare in un posto lontano" },
  { word: "viaggiatore", wrong: "viagiatore", clue: "Chi viaggia" },
  { word: "pattinaggio", wrong: "patinaggio", clue: "Sport con i pattini" },
  { word: "scoiattolo", wrong: "scoiatolo", clue: "Animale con la coda folta" },
  { word: "elicottero", wrong: "elicotero", clue: "Velivolo con le eliche" },
  { word: "fattoria", wrong: "fatoria", clue: "Casa di campagna con gli animali" },
  { word: "fiammifero", wrong: "fiamifero", clue: "Serve per accendere il fuoco" },
  { word: "ginnastica", wrong: "ginastica", clue: "Attività fisica" },
  { word: "grammatica", wrong: "gramatica", clue: "Regole della lingua" },
  { word: "avventura", wrong: "aventura", clue: "Storia emozionante" },
  { word: "cioccolato", wrong: "ciocolato", clue: "Dolce marrone" },
  { word: "cucchiaio", wrong: "cuchiaio", clue: "Si usa per mangiare la minestra" },
];

const EXTRA_LEVEL_0 = [
  { word: "palla", clue: "Si gioca a calcio" },
  { word: "penna", clue: "Si usa per scrivere" },
  { word: "nonno", clue: "Il papà del papà" },
  { word: "nonna", clue: "La mamma della mamma" },
  { word: "tetto", clue: "Copre la casa" },
];

const EXTRA_LEVEL_1 = [
  { word: "spiaggia", clue: "Dove c'è la sabbia" },
  { word: "secchio", clue: "Contiene l'acqua" },
  { word: "gomma", clue: "Serve per cancellare" },
  { word: "pettine", clue: "Serve per i capelli" },
  { word: "salsiccia", clue: "Cibo di carne" },
];

const EXTRA_LEVEL_2 = [
  { word: "spettacolo", clue: "Si guarda a teatro" },
  { word: "soggiorno", clue: "Stanza della casa" },
  { word: "sollievo", clue: "Sensazione di benessere" },
  { word: "trottola", clue: "Giocattolo che gira" },
  { word: "trappola", clue: "Serve per catturare" },
];

/**
 * Parole "innocenti": la risposta corretta NON ha la doppia, mentre la
 * risposta sbagliata è una parola vera che si scrive con la doppia.
 * L'indizio aiuta a scegliere il significato giusto, per esempio
 * "Cosa c'è dopo l'ottava?" -> nona, non nonna.
 */
const INNOCENT_LEVEL_0 = [
  { word: "nona", wrong: "nonna", clue: "Cosa c'è dopo l'ottava?" },
  { word: "nono", wrong: "nonno", clue: "Cosa c'è dopo l'ottavo?" },
  { word: "pala", wrong: "palla", clue: "Serve per scavare la terra" },
  { word: "casa", wrong: "cassa", clue: "Dove si abita" },
  { word: "caro", wrong: "carro", clue: "Costa molto" },
  { word: "capello", wrong: "cappello", clue: "Cresce sulla testa" },
  { word: "cane", wrong: "canne", clue: "Animale che abbaia" },
  { word: "note", wrong: "notte", clue: "Si scrivono per ricordare le cose" },
  { word: "sete", wrong: "sette", clue: "Voglia di bere" },
  { word: "sera", wrong: "serra", clue: "Arriva dopo il pomeriggio" },
  { word: "rosa", wrong: "rossa", clue: "Fiore profumato con le spine" },
  { word: "pena", wrong: "penna", clue: "Si prova quando si è tristi" },
  { word: "dona", wrong: "donna", clue: "Regala qualcosa" },
  { word: "eco", wrong: "ecco", clue: "Il suono che rimbalza tra le montagne" },
];

const INNOCENT_LEVEL_1 = [
  { word: "copia", wrong: "coppia", clue: "Si fa con la fotocopiatrice" },
  { word: "camino", wrong: "cammino", clue: "Sul tetto: da lì esce il fumo" },
  { word: "moto", wrong: "motto", clue: "Veicolo a due ruote con il motore" },
  { word: "spesa", wrong: "spessa", clue: "Si fa al supermercato" },
  { word: "tori", wrong: "torri", clue: "Animali con le corna" },
  { word: "basi", wrong: "bassi", clue: "I piedi delle colonne" },
  { word: "osa", wrong: "ossa", clue: "Ha il coraggio di provare" },
  { word: "sono", wrong: "sonno", clue: "Lo dice chi si presenta: «Io ... Luca»" },
  { word: "vano", wrong: "vanno", clue: "Spazio vuoto dentro un mobile" },
  { word: "sano", wrong: "sanno", clue: "Chi non è malato" },
  { word: "pale", wrong: "palle", clue: "Servono per scavare" },
  { word: "polo", wrong: "pollo", clue: "Sport con la palla e i cavalli" },
];

const INNOCENT_LEVEL_2 = [
  { word: "fato", wrong: "fatto", clue: "Il destino" },
  { word: "mola", wrong: "molla", clue: "Pietra che macina il grano" },
  { word: "velo", wrong: "vello", clue: "La sposa se lo mette sul viso" },
  { word: "seta", wrong: "setta", clue: "Filato morbido e lucido" },
  { word: "rito", wrong: "ritto", clue: "Cerimonia solenne" },
  { word: "vile", wrong: "ville", clue: "Chi non ha coraggio" },
  { word: "fumo", wrong: "fummo", clue: "Esce dal camino" },
  { word: "vero", wrong: "verro", clue: "Corrisponde alla realtà" },
  { word: "papa", wrong: "pappa", clue: "È il capo della Chiesa cattolica" },
];

function doublePositions(word) {
  const positions = [];

  for (let index = 0; index < word.length - 1; index += 1) {
    if (
      word[index] === word[index + 1] &&
      "bcdfglmnpqrstvz".includes(word[index])
    ) {
      positions.push(index);
    }
  }

  return positions;
}

/**
 * L'unico errore proposto è la consonante singola al posto della doppia.
 * La scelta è quindi sempre tra 2 e 1 consonante (per esempio "pizza" o
 * "piza"), senza consonanti triple e senza doppie aggiunte a inizio parola.
 */
function spellingVariants(word) {
  const positions = doublePositions(word);
  if (positions.length === 0) return [];

  const position = positions[0];
  const variant = word.slice(0, position) + word.slice(position + 1);

  return variant !== word ? [variant] : [];
}

function expandBank(bank) {
  return bank.flatMap((item) => {
    // Le coppie "innocenti" hanno già la parola sbagliata con la doppia:
    // la risposta corretta è quella senza doppia.
    if (item.wrong) {
      return [
        {
          ...item,
          trap: true,
          key: `${item.word}-trap`,
          double: firstDouble(item.wrong),
        },
      ];
    }

    return spellingVariants(item.word).map((wrong, index) => ({
      ...item,
      wrong,
      key: `${item.word}-${index}`,
      double: firstDouble(item.word),
    }));
  });
}

export const doubleConsonantBanks = [
  [...LEVEL_0, ...EXTRA_LEVEL_0, ...INNOCENT_LEVEL_0],
  [...LEVEL_1, ...EXTRA_LEVEL_1, ...INNOCENT_LEVEL_1],
  [...LEVEL_2, ...EXTRA_LEVEL_2, ...INNOCENT_LEVEL_2],
].map(expandBank);
