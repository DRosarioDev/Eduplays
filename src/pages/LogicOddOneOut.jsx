import ChoiceQuiz from "../components/ChoiceQuiz";
import { oddOneOutBanks } from "../assets/oddOneOut";
import { shuffleArray } from "../utils/memoryDeck";
import { createWeightedDeck } from "../utils/questionDeck";
import { randomTone } from "../utils/tones";

const drawOddOneOut = createWeightedDeck(oddOneOutBanks);

function buildRound(difficulty = 0) {
  const item = drawOddOneOut(difficulty);

  return {
    id: item.id,
    category: item.category,
    intruder: item.intruder,
    answer: item.intruder,
    options: shuffleArray(item.items),
    tone: randomTone(),
    key: item.key,
  };
}

function renderPrompt() {
  return (
    <>
      <p className="prompt-hint">Quale elemento non appartiene al gruppo?</p>
      <p className="odd-help">
        Osserva tutti e quattro e scegli quello che non c&apos;entra.
      </p>
    </>
  );
}

export default function LogicOddOneOut() {
  return (
    <ChoiceQuiz
      gameId="logic-odd-one-out"
      buildRound={buildRound}
      renderPrompt={renderPrompt}
      renderOption={(option) => (
        <>
          <span className="odd-emoji" aria-hidden="true">
            {option.emoji}
          </span>
          <span className="odd-label" aria-hidden="true">
            {option.label}
          </span>
        </>
      )}
      getOptionKey={(option) => option.label}
      getOptionValue={(option) => option.label}
      getOptionLabel={(option) => option.label}
      answersClassName="answers--four"
      optionClassName="answer-btn--odd"
      feedbackDelay={{ correct: 1200, wrong: 1900 }}
      renderReveal={(round) => (
        <span>
          L&apos;intruso è <strong>{round.intruder}</strong>: gli altri sono
          tutti elementi del gruppo <strong>{round.category}</strong>.
        </span>
      )}
      wrongFeedback="Ops! Uno degli elementi non c'entra con gli altri."
    />
  );
}
