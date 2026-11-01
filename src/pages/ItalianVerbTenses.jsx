import ChoiceQuiz from "../components/ChoiceQuiz";
import { verbTenseBanks } from "../assets/italianVerbTenses";
import { shuffleArray } from "../utils/memoryDeck";
import { createWeightedDeck } from "../utils/questionDeck";
import { randomTone } from "../utils/tones";

const drawVerb = createWeightedDeck(verbTenseBanks);

function buildRound(difficulty = 0) {
  const item = drawVerb(difficulty);
  const optionCount = difficulty === 0 ? 2 : 3;
  const wrong = shuffleArray(item.distractors).slice(0, optionCount - 1);

  return {
    ...item,
    options: shuffleArray([item.answer, ...wrong]),
    tone: randomTone(),
  };
}

function renderPrompt(round) {
  const [before, after] = round.sentence.split("___");

  return (
    <>
      <p className="prompt-hint">Scegli la forma giusta del verbo.</p>
      <p
        className="sentence-prompt"
        aria-label={`Completa la frase: ${round.sentence.replace(
          "___",
          "vuoto"
        )} Verbo ${round.infinitive}.`}
      >
        {before}
        <span className="sentence-blank" aria-hidden="true" />
        {after}
      </p>
      <p className="verb-hint">
        Verbo: <strong>{round.infinitive}</strong>
      </p>
    </>
  );
}

export default function ItalianVerbTenses() {
  return (
    <ChoiceQuiz
      gameId="italian-verb-tenses"
      buildRound={buildRound}
      renderPrompt={renderPrompt}
      renderOption={(option) => <span className="verb-answer">{option}</span>}
      answersClassName={(round) =>
        round.options.length === 3 ? "answers--three" : "answers--two"
      }
      stackOnMobile
      optionClassName={(round, option) =>
        option.length > 10 ? "answer-btn--long" : ""
      }
      feedbackDelay={{ correct: 1600, wrong: 2500 }}
      renderReveal={(round) => (
        <span>
          La forma giusta è <strong>{round.answer}</strong> ({round.tense}).
          <br />
          {round.fullSentence}
        </span>
      )}
      wrongFeedback="Ops! Guarda la parola che indica il tempo: oggi, ieri o domani."
    />
  );
}
