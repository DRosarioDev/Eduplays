import italianWords from "./words_it.json";
import { italianPracticeWords } from "./italianPracticeWords";

/**
 * Parole per il gioco degli anagrammi.
 *
 * Uniamo il dizionario dei sinonimi/contrari (che ha anche un indizio)
 * alle parole di pratica di italiano. La difficoltà dipende dalla lunghezza:
 * le parole corte sono più facili da ricomporre, quelle lunghe richiedono
 * più memoria e attenzione.
 */
function buildEntries() {
  const seen = new Set();
  const entries = [];

  for (const item of italianWords) {
    if (seen.has(item.word)) continue;
    seen.add(item.word);
    entries.push({ word: item.word, synonym: item.synonym });
  }

  for (const item of italianPracticeWords) {
    if (seen.has(item.word)) continue;
    seen.add(item.word);
    entries.push({ word: item.word, synonym: null });
  }

  return entries;
}

const ALL_WORDS = buildEntries();

function buildBank(minLength, maxLength) {
  return ALL_WORDS.filter(
    (entry) =>
      entry.word.length >= minLength && entry.word.length <= maxLength
  ).map((entry) => ({ ...entry, key: entry.word }));
}

/**
 * Base: 4-6 lettere, Facile: 7-8 lettere, Medio: 8 o più lettere.
 * Ogni livello supera le 100 parole disponibili.
 */
export const anagramWordBanks = [
  buildBank(4, 6),
  buildBank(7, 8),
  buildBank(8, Number.POSITIVE_INFINITY),
];
