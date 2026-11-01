import ChoiceQuiz from "../components/ChoiceQuiz";
import { hSoundBanks } from "../assets/italianHSound";
import { shuffleArray } from "../utils/memoryDeck";
import { createWeightedDeck } from "../utils/questionDeck";
import { randomTone } from "../utils/tones";

const H_FORMS = ["ho", "hai", "ha", "hanno", "o", "ai", "a", "anno"];
const drawH = createWeightedDeck(hSoundBanks);

function explanationFor(answer) {
  if (["ho", "hai", "ha", "hanno"].includes(answer)) {
    return `“${answer}” è il verbo avere e vuole la H.`;
  }
  if (answer === "anno") {
    return "“Anno” indica un periodo di tempo e non vuole la H.";
  }
  if (answer === "o") {
    return "“O” è una congiunzione e non vuole la H.";
  }
  if (answer === "ai") {
    return "“Ai” è una preposizione e non vuole la H.";
  }
  if (answer === "a") {
    return "“A” è una preposizione e non vuole la H.";
  }
  return "";
}

function buildRound(difficulty = 0) {
  const item = drawH(difficulty);
  const optionCount = difficulty === 0 ? 2 : 3;
  const extra = shuffleArray(
    H_FORMS.filter((form) => form !== item.answer && form !== item.other)
  ).slice(0, optionCount - 2);

  return {
    ...item,
    options: shuffleArray([item.answer, item.other, ...extra]),
    tone: randomTone(),
  };
}

function renderPrompt(round) {
  const [before, after] = round.text.split("___");

  return (
    <>
      <p className="prompt-hint">Scegli la parola giusta: con o senza H.</p>
      <p
        className="sentence-prompt"
        aria-label={`Completa la frase: ${round.text.replace(
          "___",
          "vuoto"
        )} Scegli la parola giusta.`}
      >
        {before}
        <span className="sentence-blank" aria-hidden="true" />
        {after}
      </p>
    </>
  );
}

export default function ItalianHSound() {
  return (
    <ChoiceQuiz
      gameId="italian-h-sound"
      buildRound={buildRound}
      renderPrompt={renderPrompt}
      renderOption={(option) => <span className="h-answer">{option}</span>}
      answersClassName={(round) =>
        round.options.length === 3
          ? "answers--three answers--short"
          : "answers--two answers--short"
      }
      stackOnMobile
      feedbackDelay={{ correct: 1300, wrong: 2100 }}
      renderReveal={(round) => (
        <span>
          <strong>{round.answer}</strong>: {explanationFor(round.answer)}
          <br />
          {round.text.replace("___", round.answer)}
        </span>
      )}
      wrongFeedback="Ops! Pensa se serve la H del verbo avere."
    />
  );
}
