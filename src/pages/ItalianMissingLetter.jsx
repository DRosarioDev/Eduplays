import ChoiceQuiz from "../components/ChoiceQuiz";
import {
  filterWordsByMissingLevel,
  italianPracticeWords,
} from "../assets/italianPracticeWords";
import { shuffleArray } from "../utils/memoryDeck";
import { createWeightedDeck } from "../utils/questionDeck";
import { randomTone } from "../utils/tones";

const ALPHABET = "abcdefghilmnopqrstuvz".split("");

function samePattern(word, position, other) {
  if (other.length !== word.length) return false;
  for (let index = 0; index < word.length; index += 1) {
    if (index !== position && other[index] !== word[index]) return false;
  }
  return true;
}

function isUniquePosition(word, position) {
  return !italianPracticeWords.some(
    (entry) =>
      entry.word !== word && samePattern(word, position, entry.word)
  );
}

/**
 * Ogni livello supera le 100 domande. Per ogni parola usiamo tutte le
 * posizioni che hanno una sola risposta possibile: così la stessa parola
 * può comparire con buchi diversi e il gioco resta vario.
 */
function buildWordBank(level) {
  return filterWordsByMissingLevel(italianPracticeWords, level).flatMap(
    (entry) =>
      Array.from({ length: entry.word.length }, (_, index) => index)
        .filter((index) => isUniquePosition(entry.word, index))
        .map((position) => ({
          word: entry.word,
          position,
          key: `${entry.word}-${position}`,
        }))
  );
}

const WORD_BANKS = [0, 1, 2].map(buildWordBank);
const drawWord = createWeightedDeck(WORD_BANKS);

function buildRound(difficulty = 0) {
  const item = drawWord(difficulty);
  const correctLetter = item.word[item.position].toUpperCase();
  const wrongLetters = shuffleArray(
    ALPHABET.filter((letter) => letter.toUpperCase() !== correctLetter)
  )
    .slice(0, 2)
    .map((letter) => letter.toUpperCase());

  return {
    word: item.word,
    position: item.position,
    answer: correctLetter,
    options: shuffleArray([correctLetter, ...wrongLetters]),
    tone: randomTone(),
    key: `${item.word}-${item.position}`,
  };
}

function renderPrompt(round) {
  const spelled = round.word
    .split("")
    .map((letter, index) =>
      index === round.position ? "lettera mancante" : letter
    )
    .join(", ");

  return (
    <>
      <p className="prompt-hint">Quale lettera manca?</p>
      <p className="missing-word" aria-label={`${spelled}. Quale lettera manca?`}>
        {round.word.split("").map((letter, index) =>
          index === round.position ? (
            <span className="missing-blank" key={index} aria-hidden="true" />
          ) : (
            <span key={index} aria-hidden="true">
              {letter}
            </span>
          )
        )}
      </p>
    </>
  );
}

export default function ItalianMissingLetter() {
  return (
    <ChoiceQuiz
      gameId="italian-missing-letter"
      buildRound={buildRound}
      renderPrompt={renderPrompt}
      renderOption={(option) => (
        <span className="letter-answer">{option}</span>
      )}
      getOptionLabel={(option) => `Lettera ${option}`}
      answersClassName="answers--three answers--short"
      feedbackDelay={{ correct: 1200, wrong: 1900 }}
      renderReveal={(round) => (
        <span>
          La parola è <strong>{round.word}</strong>.
        </span>
      )}
      wrongFeedback="Ops! Guarda bene la parola e riprova."
    />
  );
}
