import ChoiceQuiz from "../components/ChoiceQuiz";
import { doubleHalfBanks } from "../assets/mathDoubleHalf";
import { shuffleArray } from "../utils/memoryDeck";
import { createWeightedDeck } from "../utils/questionDeck";
import { randomTone } from "../utils/tones";

const drawDoubleHalf = createWeightedDeck(doubleHalfBanks);

function buildDistractors(item) {
  const values = [
    item.answer + 1,
    item.answer - 1,
    item.answer + 2,
    item.answer - 2,
    item.number,
    item.number + 2,
    item.number - 2,
  ];
  const unique = [];

  for (const value of values) {
    if (value > 0 && value !== item.answer && !unique.includes(value)) {
      unique.push(value);
    }
  }

  return shuffleArray(unique).slice(0, 1);
}

function buildRound(difficulty = 0) {
  const item = drawDoubleHalf(difficulty);
  const distractors = buildDistractors(item);

  return {
    operation: item.operation,
    number: item.number,
    answer: item.answer,
    options: shuffleArray([item.answer, ...distractors]),
    tone: randomTone(),
    key: item.key,
  };
}

function renderPrompt(round) {
  const isDouble = round.operation === "double";

  return (
    <>
      <p className="prompt-hint">
        {isDouble ? "Calcola il doppio" : "Calcola la metà"}
      </p>
      <div
        className="double-prompt"
        role="img"
        aria-label={`${isDouble ? "Il doppio" : "La metà"} di ${
          round.number
        }. Qual è il risultato?`}
      >
        <span className="double-badge" aria-hidden="true">
          {isDouble ? "×2" : "÷2"}
        </span>
        <span className="double-label">
          {isDouble ? "Il doppio di" : "La metà di"}
        </span>
        <span className="double-number">{round.number}</span>
      </div>
    </>
  );
}

export default function MathDoubleHalf() {
  return (
    <ChoiceQuiz
      gameId="math-double-half"
      buildRound={buildRound}
      renderPrompt={renderPrompt}
      renderOption={(option) => (
        <span className="double-answer">{option}</span>
      )}
      getOptionLabel={(option) => String(option)}
      answersClassName="answers--two"
      wrongFeedback="Ops! Il doppio si calcola ×2, la metà ÷2."
    />
  );
}
