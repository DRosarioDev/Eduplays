import ChoiceQuiz from "../components/ChoiceQuiz";
import { sequenceBanks } from "../assets/mathSequences";
import { shuffleArray } from "../utils/memoryDeck";
import { createWeightedDeck } from "../utils/questionDeck";
import { randomTone } from "../utils/tones";

const drawSequence = createWeightedDeck(sequenceBanks);

function buildDistractors(answer, stepSize) {
  const values = [
    answer + stepSize,
    answer - stepSize,
    answer + 1,
    answer - 1,
    answer + 2,
    answer - 2,
    answer + 3,
    answer - 3,
  ];
  const unique = [];

  for (const value of values) {
    if (value >= 0 && value !== answer && !unique.includes(value)) {
      unique.push(value);
    }
  }

  return shuffleArray(unique).slice(0, 2);
}

function buildRound(difficulty = 0) {
  const item = drawSequence(difficulty);
  const distractors = buildDistractors(item.answer, item.stepSize);

  return {
    terms: item.terms,
    answer: item.answer,
    options: shuffleArray([item.answer, ...distractors]),
    tone: randomTone(),
    key: item.key,
  };
}

function renderPrompt(round) {
  return (
    <>
      <p className="prompt-hint">Quale numero viene dopo?</p>
      <div
        className="sequence-row"
        role="img"
        aria-label={`Sequenza di numeri: ${round.terms.join(
          ", "
        )}. Quale numero viene dopo?`}
      >
        {round.terms.map((number, index) => (
          <span className="sequence-chip" key={`${number}-${index}`}>
            {number}
          </span>
        ))}
        <span className="sequence-chip sequence-chip--blank">?</span>
      </div>
    </>
  );
}

export default function MathSequences() {
  return (
    <ChoiceQuiz
      gameId="math-sequences"
      buildRound={buildRound}
      renderPrompt={renderPrompt}
      renderOption={(option) => (
        <span className="sequence-answer">{option}</span>
      )}
      getOptionLabel={(option) => String(option)}
      answersClassName="answers--three"
      wrongFeedback="Ops! Guarda il passo della sequenza e riprova."
    />
  );
}
