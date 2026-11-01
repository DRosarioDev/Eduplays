import ChoiceQuiz from "../components/ChoiceQuiz";
import {
  filterWordsByDifficulty,
  italianPracticeWords,
} from "../assets/italianPracticeWords";
import { shuffleArray } from "../utils/memoryDeck";
import { createWeightedDeck } from "../utils/questionDeck";
import { randomTone } from "../utils/tones";

/**
 * Ogni parola genera due domande:
 * - "Quante sillabe ha questa parola?" (risposta numerica)
 * - "Quale parola ha N sillabe?" (risposta tra due parole)
 *
 * In questo modo ogni difficoltà supera le 100 domande anche senza
 * inventare parole nuove o divisioni in sillabe poco affidabili.
 */
const WORD_BANKS = [0, 1, 2].map((difficulty) =>
  filterWordsByDifficulty(italianPracticeWords, difficulty).flatMap((entry) => [
    { mode: "count", entry, key: `count-${entry.word}` },
    { mode: "word", entry, key: `word-${entry.word}` },
  ])
);

const drawWord = createWeightedDeck(WORD_BANKS);

function buildRound(difficulty = 0) {
  const item = drawWord(difficulty);
  const entry = item.entry;
  const count = entry.syllables.length;

  if (item.mode === "count") {
    const wrong = count === 2 ? 3 : count - 1;
    const options = shuffleArray([count, wrong]).map((value) => ({
      type: "count",
      value,
      label: `${value} ${value === 1 ? "sillaba" : "sillabe"}`,
    }));

    return {
      mode: "count",
      word: entry.word,
      syllables: entry.syllables,
      answer: count,
      options,
      tone: randomTone(),
      key: item.key,
    };
  }

  const wrongEntry = shuffleArray(
    italianPracticeWords.filter(
      (candidate) => candidate.syllables.length !== count
    )
  )[0];

  const options = shuffleArray([entry.word, wrongEntry.word]).map((value) => ({
    type: "word",
    value,
    label: `Parola: ${value}`,
  }));

  return {
    mode: "word",
    word: entry.word,
    syllables: entry.syllables,
    answer: entry.word,
    options,
    tone: randomTone(),
    key: item.key,
  };
}

function renderPrompt(round) {
  if (round.mode === "word") {
    return (
      <>
        <p className="prompt-hint">Quale parola ha questo numero di sillabe?</p>
        <p
          className="word-prompt syllable-word"
          aria-label={`Numero di sillabe: ${round.syllables.length}`}
        >
          {round.syllables.length}
        </p>
        <p className="prompt-hint">
          {round.syllables.length === 1 ? "sillaba" : "sillabe"}
        </p>
      </>
    );
  }

  return (
    <>
      <p className="prompt-hint">Quante sillabe ha questa parola?</p>
      <p
        className="word-prompt syllable-word"
        aria-label={`Parola: ${round.word}. Quante sillabe ha?`}
      >
        {round.word}
      </p>
    </>
  );
}

export default function ItalianSyllables() {
  return (
    <ChoiceQuiz
      gameId="italian-syllables"
      buildRound={buildRound}
      renderPrompt={renderPrompt}
      renderOption={(option) => (
        <span className="syllable-answer">{option.value}</span>
      )}
      getOptionKey={(option) => `${option.type}-${option.value}`}
      getOptionValue={(option) => option.value}
      getOptionLabel={(option) => option.label}
      answersClassName="answers--two"
      stackOnMobile
      feedbackDelay={{ correct: 1400, wrong: 2100 }}
      renderReveal={(round) => (
        <span>
          <strong>{round.word}</strong> si divide in{" "}
          {round.syllables.join(" · ")}: {round.syllables.length}{" "}
          {round.syllables.length === 1 ? "sillaba" : "sillabe"}.
        </span>
      )}
      wrongFeedback="Ops! Conta i gruppi di lettere della parola."
    />
  );
}
