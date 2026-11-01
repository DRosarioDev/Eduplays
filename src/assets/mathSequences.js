import { shuffleArray } from "../utils/memoryDeck.js";

/**
 * Banche delle sequenze numeriche.
 *
 * Ogni livello costruisce almeno 100 sequenze diverse. Al livello Base
 * alterniamo sequenze crescenti e calanti con numeri piccoli, così le
 * domande non girano sempre attorno agli stessi esempi.
 */
const SETTINGS = [
  { steps: [1, 2], maxStart: 30, descending: true },
  { steps: [2, 3, 5], maxStart: 30, descending: true },
  { steps: [3, 4, 5, 10], maxStart: 40, descending: true },
];

function buildSequenceBank(difficulty) {
  const setting = SETTINGS[difficulty];
  const candidates = [];
  const seen = new Set();

  for (const step of setting.steps) {
    const directions = setting.descending ? [1, -1] : [1];

    for (const direction of directions) {
      const signedStep = step * direction;
      const minStart = direction === -1 ? step * 4 + 1 : 1;
      const maxStart =
        direction === -1 ? minStart + setting.maxStart : setting.maxStart;

      for (let start = minStart; start <= maxStart; start += 1) {
        const terms = [0, 1, 2, 3].map(
          (index) => start + index * signedStep
        );
        const answer = start + 4 * signedStep;

        if (terms.some((number) => number < 0) || answer < 0) continue;

        const key = `${terms.join("-")}-${answer}`;
        if (seen.has(key)) continue;
        seen.add(key);
        candidates.push({
          terms,
          answer,
          stepSize: Math.abs(signedStep),
          key,
        });
      }
    }
  }

  return shuffleArray(candidates).slice(0, 100);
}

export const sequenceBanks = SETTINGS.map((_, index) =>
  buildSequenceBank(index)
);
