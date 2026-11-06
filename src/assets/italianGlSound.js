/**
 * Parole con il suono GLI.
 *
 * Ogni domanda propone la parola corretta e una versione sbagliata senza G.
 * L'indizio aiuta a riconoscere il significato della parola.
 */

const LEVEL_0 = [
  { word: "figlio", wrong: "filio", clue: "Il bambino dei genitori" },
  { word: "figlia", wrong: "filia", clue: "La bambina dei genitori" },
  { word: "figlie", wrong: "filie", clue: "Le bambine dei genitori" },
  { word: "aglio", wrong: "alio", clue: "Serve per condire" },
  { word: "giglio", wrong: "gilio", clue: "Fiore bianco" },
  { word: "miglio", wrong: "milio", clue: "Unità di misura" },
  { word: "miglia", wrong: "milia", clue: "Tante unità di misura" },
  { word: "piglio", wrong: "pilio", clue: "Modo deciso" },
  { word: "voglio", wrong: "volio", clue: "Desidero" },
  { word: "voglia", wrong: "volia", clue: "Desiderio" },
  { word: "voglie", wrong: "volie", clue: "Tanti desideri" },
  { word: "cogliere", wrong: "coliere", clue: "Prendere un fiore" },
  { word: "coglie", wrong: "colie", clue: "Prende un fiore" },
  { word: "togliere", wrong: "toliere", clue: "Portare via" },
  { word: "toglie", wrong: "tolie", clue: "Porta via" },
  { word: "sciogliere", wrong: "scioliere", clue: "Rendere liquido" },
  { word: "scioglie", wrong: "sciolie", clue: "Rende liquido" },
  { word: "famiglia", wrong: "familia", clue: "Genitori e figli" },
  { word: "famiglie", wrong: "familie", clue: "Tante famiglie" },
  { word: "paglia", wrong: "palia", clue: "Fieno giallo" },
  { word: "paglie", wrong: "palie", clue: "Tanti fili di fieno" },
  { word: "coniglio", wrong: "conilio", clue: "Animale con le orecchie lunghe" },
  { word: "coniglia", wrong: "conilia", clue: "La femmina del coniglio" },
  { word: "coniglie", wrong: "conilie", clue: "Tante femmine di coniglio" },
  { word: "bottiglia", wrong: "bottilia", clue: "Contiene l'acqua" },
  { word: "bottiglie", wrong: "bottilie", clue: "Tante bottiglie" },
  { word: "soglia", wrong: "solia", clue: "Bordo della porta" },
  { word: "soglie", wrong: "solie", clue: "Tanti bordi" },
  { word: "meraviglia", wrong: "meravilia", clue: "Qualcosa di stupendo" },
  { word: "meraviglie", wrong: "meravilie", clue: "Tante cose stupende" },
];

const LEVEL_1 = [
  { word: "sveglia", wrong: "svelia", clue: "Serve per svegliarsi" },
  { word: "sveglie", wrong: "svelie", clue: "Tante sveglie" },
  { word: "sveglio", wrong: "svelio", clue: "Chi non dorme" },
  { word: "svegliare", wrong: "sveliare", clue: "Far alzare dal letto" },
  { word: "svegliato", wrong: "sveliato", clue: "Non più addormentato" },
  { word: "svegliarsi", wrong: "sveliarsi", clue: "Alzarsi dal letto" },
  { word: "maglione", wrong: "malione", clue: "Indumento caldo" },
  { word: "maglioncino", wrong: "malioncino", clue: "Maglione piccolo" },
  { word: "maglietta", wrong: "malietta", clue: "Maglia con le maniche corte" },
  { word: "magliette", wrong: "maliette", clue: "Tante magliette" },
  { word: "pagliaccio", wrong: "paliaccio", clue: "Chi fa ridere al circo" },
  { word: "pagliacciata", wrong: "paliacciata", clue: "Scherzo da pagliaccio" },
  { word: "paglietta", wrong: "palietta", clue: "Cappello di paglia" },
  { word: "pagliuzza", wrong: "paliuzza", clue: "Filo di paglia" },
  { word: "coniglietto", wrong: "conilietto", clue: "Piccolo coniglio" },
  { word: "coniglietta", wrong: "conilietta", clue: "Piccola coniglia" },
  { word: "conigliera", wrong: "coniliera", clue: "Gabbia per conigli" },
  { word: "bottiglietta", wrong: "bottilietta", clue: "Piccola bottiglia" },
  { word: "bottiglione", wrong: "bottilione", clue: "Bottiglia grande" },
  { word: "ciglione", wrong: "cilione", clue: "Bordo rialzato" },
  { word: "ciglioni", wrong: "cilioni", clue: "Tanti bordi rialzati" },
  { word: "meraviglioso", wrong: "meravilioso", clue: "Molto bello" },
  { word: "meravigliosa", wrong: "meraviliosa", clue: "Molto bella" },
  { word: "meravigliare", wrong: "meraviliare", clue: "Stupire" },
  { word: "sveglissimo", wrong: "svelissimo", clue: "Molto sveglio" },
  { word: "sveglina", wrong: "svelina", clue: "Sveglia piccola" },
  { word: "sveglietta", wrong: "svelietta", clue: "Sveglia da viaggio" },
  { word: "aglione", wrong: "alione", clue: "Aglio grande" },
  { word: "aglietto", wrong: "alietto", clue: "Aglio piccolo" },
  { word: "agliata", wrong: "aliata", clue: "Salsa all'aglio" },
];

const LEVEL_2 = [
  { word: "consigliere", wrong: "consiliere", clue: "Chi dà consigli" },
  { word: "consigliera", wrong: "consiliera", clue: "Donna che dà consigli" },
  { word: "consigliato", wrong: "consiliato", clue: "Suggerito" },
  { word: "consigliata", wrong: "consiliata", clue: "Suggerita" },
  { word: "consiglieri", wrong: "consilieri", clue: "Tanti consiglieri" },
  { word: "consiglierebbe", wrong: "consilierebbe", clue: "Darebbe un consiglio" },
  { word: "consiglierebbero", wrong: "consilierebbero", clue: "Darebbero un consiglio" },
  { word: "consiglieremo", wrong: "consilieremo", clue: "Daremo un consiglio" },
  { word: "consiglierete", wrong: "consilierete", clue: "Darete un consiglio" },
  { word: "consiglieranno", wrong: "consilieranno", clue: "Daranno un consiglio" },
  { word: "meravigliosamente", wrong: "meraviliosamente", clue: "In modo stupendo" },
  { word: "meravigliarsi", wrong: "meraviliarsi", clue: "Stupirsi" },
  { word: "meravigliato", wrong: "meraviliato", clue: "Stupito" },
  { word: "meravigliata", wrong: "meraviliata", clue: "Stupita" },
  { word: "sveglierà", wrong: "svelierà", clue: "Farà alzare" },
  { word: "sveglierò", wrong: "svelierò", clue: "Farò alzare" },
  { word: "sveglieranno", wrong: "svelieranno", clue: "Faranno alzare" },
  { word: "sveglieresti", wrong: "svelieresti", clue: "Faresti alzare" },
  { word: "toglierò", wrong: "tolierò", clue: "Porterò via" },
  { word: "toglierai", wrong: "tolierai", clue: "Porterai via" },
  { word: "toglierà", wrong: "tolierà", clue: "Porterà via" },
  { word: "toglieremo", wrong: "tolieremo", clue: "Porteremo via" },
  { word: "toglierete", wrong: "tolierete", clue: "Porterete via" },
  { word: "toglieranno", wrong: "tolieranno", clue: "Porteranno via" },
  { word: "scioglierò", wrong: "sciolierò", clue: "Renderò liquido" },
  { word: "scioglierai", wrong: "sciolierai", clue: "Rendererai liquido" },
  { word: "scioglierà", wrong: "sciolierà", clue: "Rendererà liquido" },
  { word: "scioglieremo", wrong: "sciolieremo", clue: "Rendereremo liquido" },
  { word: "scioglierete", wrong: "sciolierete", clue: "Rendererete liquido" },
  { word: "scioglieranno", wrong: "sciolieranno", clue: "Rendereranno liquido" },
];

/**
 * Parole "innocenti": la risposta corretta NON ha GLI, mentre la
 * risposta sbagliata è una parola vera che si scrive con GLI.
 * L'indizio aiuta a scegliere il significato giusto, per esempio
 * "Si usa per cucire" -> fili, non figli.
 */
const INNOCENT_LEVEL_0 = [
  { word: "fili", wrong: "figli", clue: "Si usano per cucire" },
  { word: "ali", wrong: "agli", clue: "Gli uccelli le usano per volare" },
  { word: "li", wrong: "gli", clue: "Là: «Eccoli ... !»" },
  { word: "tali", wrong: "tagli", clue: "Così, come questi" },
  { word: "moli", wrong: "mogli", clue: "Costruzioni dove attraccano le navi" },
  { word: "malia", wrong: "maglia", clue: "Incantesimo della strega" },
  { word: "malie", wrong: "maglie", clue: "Tanti incantesimi" },
];

const INNOCENT_LEVEL_1 = [
  { word: "pali", wrong: "pagli", clue: "Servono a sostenere la recinzione" },
  { word: "veli", wrong: "vegli", clue: "Coprono il viso della sposa" },
  { word: "sveli", wrong: "svegli", clue: "Tu scopri un segreto: lo ..." },
  { word: "vali", wrong: "vagli", clue: "Quanto ... : tu hai un grande valore" },
];

const INNOCENT_LEVEL_2 = [
  { word: "scoli", wrong: "scogli", clue: "Canali dove scorre l'acqua" },
  { word: "bali", wrong: "bagli", clue: "Donne che allattano i bambini di altri" },
  { word: "cali", wrong: "cagli", clue: "Diminuzioni di peso o di prezzo" },
];

const EXTRA_LEVEL_0 = [
  { word: "foglia", clue: "Parte della pianta" },
  { word: "foglie", clue: "Tante parti della pianta" },
  { word: "maglia", clue: "Indumento di lana" },
  { word: "maglie", clue: "Tanti indumenti di lana" },
  { word: "battaglia", clue: "Scontro tra eserciti" },
];

const EXTRA_LEVEL_1 = [
  { word: "medaglia", clue: "Premio sportivo" },
  { word: "medaglie", clue: "Tanti premi sportivi" },
  { word: "caviglia", clue: "Parte della gamba" },
  { word: "caviglie", clue: "Tante parti della gamba" },
  { word: "scoglio", clue: "Roccia in mare" },
];

const EXTRA_LEVEL_2 = [
  { word: "conchiglia", clue: "Conchiglia del mare" },
  { word: "conchiglie", clue: "Tante conchiglie" },
  { word: "artiglio", clue: "Unghia del gatto" },
  { word: "artigli", clue: "Tante unghie del gatto" },
  { word: "ventaglio", clue: "Serve per fare aria" },
];

function glVariants(word) {
  const index = word.indexOf("gli");
  if (index === -1) return [];

  const before = word.slice(0, index);
  const after = word.slice(index + 3);
  const variant = `${before}li${after}`;

  return variant !== word ? [variant] : [];
}

function expandBank(bank) {
  return bank.flatMap((item) => {
    if (item.wrong) {
      return [{ ...item, trap: true, key: `${item.word}-trap` }];
    }

    return glVariants(item.word).map((wrong, index) => ({
      ...item,
      wrong,
      key: `${item.word}-${index}`,
    }));
  });
}

export const glSoundBanks = [
  [...LEVEL_0, ...EXTRA_LEVEL_0, ...INNOCENT_LEVEL_0],
  [...LEVEL_1, ...EXTRA_LEVEL_1, ...INNOCENT_LEVEL_1],
  [...LEVEL_2, ...EXTRA_LEVEL_2, ...INNOCENT_LEVEL_2],
].map(expandBank);
