import ChoiceQuiz from "../components/ChoiceQuiz";
import { glSoundBanks } from "../assets/italianGlSound";
import { shuffleArray } from "../utils/memoryDeck";
import { createWeightedDeck } from "../utils/questionDeck";
import { randomTone } from "../utils/tones";

const drawGl = createWeightedDeck(glSoundBanks);

function buildRound(difficulty = 0) {
  const item = drawGl(difficulty);

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

export default function ItalianGlSound() {
  return (
    <ChoiceQuiz
      gameId="italian-gl-sound"
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
          Si scrive <strong>{round.word}</strong> con <strong>GLI</strong>.
        </span>
      )}
      wrongFeedback="Ops! Una delle due parole si scrive con GLI."
    />
  );
}
