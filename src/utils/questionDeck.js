import { shuffleArray } from "./memoryDeck.js";

/**
 * Percentuale di domande pescate da ogni livello.
 * Indice 0 = Base, 1 = Facile, 2 = Medio.
 *
 * Base:   100% Base
 * Facile: 90% Facile + 10% Base
 * Medio:  85% Medio + 10% Facile + 5% Base
 *
 * Le domande facili non scompaiono mai del tutto: servono a mantenere
 * il ritmo e a dare ogni tanto una piccola conferma a chi sta giocando.
 */
export const DIFFICULTY_DISTRIBUTION = [
  [1, 0, 0],
  [0.1, 0.9, 0],
  [0.05, 0.1, 0.85],
];

function pickTier(weights) {
  const roll = Math.random();
  let cumulative = 0;

  for (let index = 0; index < weights.length; index += 1) {
    cumulative += weights[index];
    if (roll < cumulative) return index;
  }

  return Math.max(0, weights.length - 1);
}

function keyOf(item) {
  if (item && typeof item === "object" && "key" in item) return item.key;
  return String(item);
}

/**
 * Crea un mazzo pescato senza ripetizioni immediate.
 *
 * Ogni livello ha la propria coda mescolata: quando finisce viene rimescolata.
 * In più teniamo traccia delle domande già viste in tutti i livelli, così una
 * domanda facile non ricompare identica dopo essere stata pescata in una
 * difficoltà superiore.
 */
export function createWeightedDeck(
  banks,
  distribution = DIFFICULTY_DISTRIBUTION
) {
  const queues = new Map();
  const lastIndex = new Map();
  const seen = new Set();

  const refill = (tier) => {
    const indices = shuffleArray(banks[tier].map((_, index) => index));
    const previous = lastIndex.get(tier);

    if (
      indices.length > 1 &&
      previous !== undefined &&
      indices[indices.length - 1] === previous
    ) {
      [indices[0], indices[indices.length - 1]] = [
        indices[indices.length - 1],
        indices[0],
      ];
    }

    queues.set(tier, indices);
    return indices;
  };

  return function draw(difficulty = 0) {
    const safeDifficulty = Math.min(
      Math.max(difficulty, 0),
      distribution.length - 1
    );
    const tier = pickTier(distribution[safeDifficulty]);
    const bank = banks[tier];

    if (!bank || bank.length === 0) {
      throw new Error(`Mazzo domande vuoto per il livello ${tier}`);
    }

    let queue = queues.get(tier);

    if (!queue || queue.length === 0) {
      queue = refill(tier);
    }

    let item = null;

    while (queue.length > 0) {
      const index = queue.pop();
      const candidate = bank[index];

      if (!seen.has(keyOf(candidate))) {
        item = candidate;
        lastIndex.set(tier, index);
        break;
      }
    }

    if (!item) {
      // Abbiamo già visto tutte le domande di questo livello.
      // Ricominciamo solo con questo livello, senza toccare gli altri.
      for (const candidate of bank) seen.delete(keyOf(candidate));
      queue = refill(tier);
      const index = queue.pop();
      item = bank[index];
      lastIndex.set(tier, index);
    }

    seen.add(keyOf(item));
    return item;
  };
}
