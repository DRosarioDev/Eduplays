import fs from "node:fs";
import {
  filterWordsByDifficulty,
  filterWordsByMissingLevel,
  italianPracticeWords,
} from "../src/assets/italianPracticeWords.js";
import { verbTenseBanks } from "../src/assets/italianVerbTenses.js";
import { hSoundBanks } from "../src/assets/italianHSound.js";
import { doubleConsonantBanks } from "../src/assets/italianDoubleConsonants.js";
import { glSoundBanks } from "../src/assets/italianGlSound.js";
import { ENGLISH_VOCABULARY } from "../src/assets/englishVocabulary.js";
import { colorMixes } from "../src/assets/colorMixes.js";
import { oddOneOutBanks } from "../src/assets/oddOneOut.js";
import { patternBanks } from "../src/assets/logicPatterns.js";
import { sequenceBanks } from "../src/assets/mathSequences.js";
import { doubleHalfBanks } from "../src/assets/mathDoubleHalf.js";
import { italianRegions } from "../src/assets/italianRegions.js";
import { COLORS } from "../src/assets/colors.js";
import countryFlags from "../src/assets/flags/country-flag.json" with {
  type: "json",
};

const words = JSON.parse(
  fs.readFileSync(new URL("../src/assets/words_it.json", import.meta.url), "utf8")
);

const results = [];

function check(name, counts, included = true) {
  results.push({
    name,
    counts,
    included,
    ok: !included || counts.every((count) => count >= 100),
  });
}

check(
  "Sinonimi / Contrari",
  [0, 1, 2].map(
    (level) => words.filter((word) => word.difficulty <= level).length
  )
);

const anagramWords = new Set();
for (const entry of words) anagramWords.add(entry.word);
for (const entry of italianPracticeWords) anagramWords.add(entry.word);
const anagramList = [...anagramWords];
check("Anagrammi", [
  anagramList.filter((word) => word.length >= 4 && word.length <= 6).length,
  anagramList.filter((word) => word.length >= 7 && word.length <= 8).length,
  anagramList.filter((word) => word.length >= 8).length,
]);

function samePattern(word, position, other) {
  if (other.length !== word.length) return false;
  for (let index = 0; index < word.length; index += 1) {
    if (index !== position && other[index] !== word[index]) return false;
  }
  return true;
}

function uniquePositions(word) {
  return Array.from({ length: word.length }, (_, index) => index).filter(
    (position) =>
      !italianPracticeWords.some(
        (entry) =>
          entry.word !== word && samePattern(word, position, entry.word)
      )
  ).length;
}

check(
  "Lettera mancante",
  [0, 1, 2].map((level) =>
    filterWordsByMissingLevel(italianPracticeWords, level).reduce(
      (total, entry) => total + uniquePositions(entry.word),
      0
    )
  )
);

check(
  "Sillabe",
  [0, 1, 2].map(
    (level) => filterWordsByDifficulty(italianPracticeWords, level).length * 2
  )
);

check("Tempi verbali", verbTenseBanks.map((bank) => bank.length));
check("Il suono H", hSoundBanks.map((bank) => bank.length));
check("Le doppie", doubleConsonantBanks.map((bank) => bank.length));
check("Il suono GL", glSoundBanks.map((bank) => bank.length));

check(
  "Animali in inglese",
  ENGLISH_VOCABULARY.animals.map((tier) => tier.length * 4)
);
check(
  "Oggetti di scuola",
  ENGLISH_VOCABULARY.school.map((tier) => tier.length * 4)
);
check(
  "Colori in inglese (escluso)",
  ENGLISH_VOCABULARY.colors.map((tier) => tier.length),
  false
);
check(
  "Numeri in inglese (escluso)",
  ENGLISH_VOCABULARY.numbers.map((tier) => tier.length),
  false
);

const sortedFlags = [...countryFlags].sort(
  (first, second) =>
    first.difficulty - second.difficulty ||
    first.country_it.localeCompare(second.country_it)
);
const flagPoolSizes = [100, 130, 160, 190, 213];
check(
  "Bandiere / Capitali",
  flagPoolSizes.map((size) => Math.min(size, sortedFlags.length))
);

check(
  "Mescola i colori",
  [0, 1, 2].map(() => colorMixes.length * 2)
);

check("Trova l'intruso", oddOneOutBanks.map((bank) => bank.length));
check("Sequenze di forme", patternBanks.map((bank) => bank.length));
check("Sequenze numeriche", sequenceBanks.map((bank) => bank.length));
check("Doppio o metà", doubleHalfBanks.map((bank) => bank.length));

check(
  "Regioni / capoluoghi (escluso)",
  [0, 1, 2].map(() => italianRegions.length),
  false
);

check("Indovina i colori (escluso)", [COLORS.length], false);

/*
 * Giochi procedurali: non hanno una banca fissa né una difficoltà, ma
 * generano abbastanza combinazioni diverse da non ripetersi.
 */
check("Tabelline", [10 * 10]);
check("Matematica facile", [50 * 50 + (50 * 51) / 2 + 10 * 10 + 10 * 10]);
check("Maggiore o minore", [100 * 100]);

const width = Math.max(...results.map((result) => result.name.length));
for (const result of results) {
  const counts = result.counts.join(" / ");
  const status = !result.included
    ? "ESCLUSO"
    : result.ok
      ? "OK"
      : "SOTTO 100";
  console.log(`${result.name.padEnd(width)}  ${counts.padEnd(18)}  ${status}`);
}

if (results.some((result) => !result.ok)) {
  process.exitCode = 1;
}
