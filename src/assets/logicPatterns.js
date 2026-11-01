import { shuffleArray } from "../utils/memoryDeck.js";

/**
 * Banche delle sequenze di forme.
 *
 * Le strutture ritmiche sono le stesse per difficoltà, ma ogni banca usa
 * diverse combinazioni di simboli: così ogni livello supera le 100 domande
 * senza rendere i ritmi più complicati.
 */
export const PATTERN_SYMBOLS = [
  { emoji: "🔴", label: "Cerchio rosso" },
  { emoji: "🔵", label: "Cerchio blu" },
  { emoji: "⭐", label: "Stella gialla" },
  { emoji: "⬛", label: "Quadrato nero" },
  { emoji: "🔺", label: "Triangolo rosso" },
  { emoji: "🟢", label: "Cerchio verde" },
];

const GROUPS = [
  {
    paletteSize: 2,
    units: [
      [0, 1],
      [0, 0, 1],
      [0, 1, 1],
      [0, 0, 1, 1],
      [0, 1, 1, 1],
      [0, 0, 0, 1],
    ],
  },
  {
    paletteSize: 3,
    units: [
      [0, 1, 2],
      [0, 1, 1],
      [0, 0, 1],
      [0, 1, 0, 2],
      [0, 1, 2, 0],
      [0, 0, 1, 2],
      [0, 1, 2, 1],
    ],
  },
  {
    paletteSize: 4,
    units: [
      [0, 1, 2, 3],
      [0, 0, 1, 2],
      [0, 1, 2, 1],
      [0, 1, 0, 2],
      [0, 1, 2, 0],
      [0, 1, 2, 2],
      [0, 1, 3, 2],
      [0, 0, 1, 3],
    ],
  },
];

const SHOWN_LENGTHS = [4, 5, 6, 7];

function combinations(items, size) {
  const result = [];
  const current = [];

  function walk(start) {
    if (current.length === size) {
      result.push([...current]);
      return;
    }

    for (let index = start; index < items.length; index += 1) {
      current.push(items[index]);
      walk(index + 1);
      current.pop();
    }
  }

  walk(0);
  return result;
}

function buildPatternBank(level) {
  const group = GROUPS[level];
  const palettes = combinations(PATTERN_SYMBOLS, group.paletteSize);
  const candidates = [];
  const seen = new Set();

  for (const palette of palettes) {
    for (const unit of group.units) {
      for (let offset = 0; offset < unit.length; offset += 1) {
        for (const shown of SHOWN_LENGTHS) {
          if (shown < unit.length + 1) continue;

          const pattern = Array.from({ length: shown }, (_, index) => {
            return palette[unit[(offset + index) % unit.length]];
          });
          const key = pattern.map((symbol) => symbol.emoji).join("|");
          if (seen.has(key)) continue;
          seen.add(key);

          const answerSymbol = palette[unit[(offset + shown) % unit.length]];
          candidates.push({
            pattern,
            answerSymbol,
            palette,
            paletteSize: group.paletteSize,
            key,
          });
        }
      }
    }
  }

  return shuffleArray(candidates).slice(0, 100);
}

export const patternBanks = [0, 1, 2].map((level) =>
  buildPatternBank(level)
);
