import { shuffleArray } from "../utils/memoryDeck.js";

/**
 * Banche del gioco "Doppio o metà".
 *
 * I limiti crescono con la difficoltà e ogni livello mette a disposizione
 * almeno 100 domande diverse tra doppi e metà.
 */
const SETTINGS = [
  { maxDouble: 50, maxHalf: 100 },
  { maxDouble: 60, maxHalf: 120 },
  { maxDouble: 80, maxHalf: 160 },
];

function buildDoubleHalfBank(difficulty) {
  const { maxDouble, maxHalf } = SETTINGS[difficulty];
  const candidates = [];

  for (let number = 1; number <= maxDouble; number += 1) {
    candidates.push({
      operation: "double",
      number,
      answer: number * 2,
      key: `double-${number}`,
    });
  }

  for (let number = 2; number <= maxHalf; number += 2) {
    candidates.push({
      operation: "half",
      number,
      answer: number / 2,
      key: `half-${number}`,
    });
  }

  return shuffleArray(candidates).slice(0, 100);
}

export const doubleHalfBanks = SETTINGS.map((_, index) =>
  buildDoubleHalfBank(index)
);
