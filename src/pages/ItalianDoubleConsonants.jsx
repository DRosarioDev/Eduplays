import ChoiceQuiz from "../components/ChoiceQuiz";
import { doubleConsonantBanks } from "../assets/italianDoubleConsonants";
import { shuffleArray } from "../utils/memoryDeck";
import { createWeightedDeck } from "../utils/questionDeck";
import { randomTone } from "../utils/tones";

const drawDouble = createWeightedDeck(doubleConsonantBanks);

function buildRound(difficulty = 0) {
  const item = drawDouble(difficulty);

  return {
    ...item,
    answer: item.word,
    options: shuffleArray([item.word, item.wrong]),
    tone: randomTone(),
  };
}

function renderPrompt(round) {
  return (
    <>
      <p className="prompt-hint">Quale parola è scritta correttamente?</p>
      <p className="spelling-clue">{round.clue}</p>
    </>
  );
}

export default function ItalianDoubleConsonants() {
  return (
    <ChoiceQuiz
      gameId="italian-double-consonants"
      buildRound={buildRound}
      renderPrompt={renderPrompt}
      renderOption={(option) => <span className="spelling-answer">{option}</span>}
      answersClassName="answers--two"
      stackOnMobile
      optionClassName={(round, option) =>
        option.length > 10 ? "answer-btn--long" : ""
      }
      feedbackDelay={{ correct: 1500, wrong: 2300 }}
      renderReveal={(round) => (
        <span>
          Si scrive <strong>{round.word}</strong> con la doppia{" "}
          <strong>{round.double.toUpperCase()}</strong>.
        </span>
      )}
      wrongFeedback="Ops! Una delle due parole ha una consonante doppia."
    />
  );
}
