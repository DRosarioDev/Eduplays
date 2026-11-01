import { useCallback } from "react";
import ChoiceQuiz from "../components/ChoiceQuiz";
import { ENGLISH_VOCABULARY } from "../assets/englishVocabulary";
import { createWeightedDeck } from "../utils/questionDeck";
import { shuffleArray } from "../utils/memoryDeck";
import { randomTone } from "../utils/tones";

const DIRECTIONAL_MODES = new Set(["animals", "school"]);
const DIRECTIONS = ["it-en", "en-it", "emoji-en", "emoji-it"];

function withDirectionalQuestions(mode, tiers) {
  if (!DIRECTIONAL_MODES.has(mode)) {
    return tiers.map((tier) =>
      tier.map((item) => ({ ...item, direction: "it-en", key: item.id }))
    );
  }

  return tiers.map((tier) =>
    tier.flatMap((item) =>
      DIRECTIONS.map((direction) => ({
        ...item,
        direction,
        key: `${item.id}-${direction}`,
      }))
    )
  );
}

const BANKS = Object.fromEntries(
  Object.entries(ENGLISH_VOCABULARY).map(([mode, tiers]) => [
    mode,
    withDirectionalQuestions(mode, tiers),
  ])
);

const ALL_ITEMS = Object.fromEntries(
  Object.entries(BANKS).map(([mode, tiers]) => [mode, tiers.flat()])
);

/**
 * Per i colori i distrattori arrivano solo dai livelli già affrontati: al
 * livello Base non compaiono nomi come "pale moss" o "cerulean".
 */
function candidatePool(mode, difficulty) {
  if (mode !== "colors") return ALL_ITEMS[mode];
  return BANKS[mode].slice(0, difficulty + 1).flat();
}

const DECKS = Object.fromEntries(
  Object.entries(BANKS).map(([mode, tiers]) => [
    mode,
    createWeightedDeck(tiers),
  ])
);

const HINTS = {
  animals: "Scegli il nome inglese dell'animale.",
  colors: "Scegli il nome inglese del colore.",
  numbers: "Scegli la parola inglese del numero.",
  school: "Scegli il nome inglese dell'oggetto.",
};

function targetLanguage(direction) {
  return direction.endsWith("-it") ? "italian" : "english";
}

function buildRound(mode, difficulty = 0) {
  const item = DECKS[mode](difficulty);
  const direction = item.direction || "it-en";
  const language = targetLanguage(direction);
  const answer = item[language];
  const optionCount = difficulty === 0 ? 2 : 3;

  const candidates = [
    ...new Map(
      candidatePool(mode, difficulty)
        .filter((candidate) => candidate[language] !== answer)
        .map((candidate) => [candidate[language], candidate])
    ).values(),
  ];
  const wrongItems = shuffleArray(candidates).slice(0, optionCount - 1);

  const options = shuffleArray([
    answer,
    ...wrongItems.map((candidate) => candidate[language]),
  ]);

  return {
    item,
    direction,
    language,
    answer,
    options,
    tone: randomTone(),
    key: `${item.id}-${direction}-${options.join("-")}`,
  };
}

function renderPrompt(mode, round) {
  const { item, direction } = round;

  if (DIRECTIONAL_MODES.has(mode)) {
    if (direction === "en-it") {
      return (
        <>
          <p className="prompt-hint">Scegli il nome italiano.</p>
          <div className="english-prompt">
            <span className="english-word">{item.english}</span>
          </div>
        </>
      );
    }

    if (direction === "emoji-en" || direction === "emoji-it") {
      return (
        <>
          <p className="prompt-hint">
            {direction === "emoji-en"
              ? HINTS[mode]
              : "Scegli il nome italiano."}
          </p>
          <div className="english-prompt">
            <span className="english-emoji" aria-hidden="true">
              {item.emoji}
            </span>
            {direction === "emoji-it" && (
              <span className="english-word">{item.english}</span>
            )}
          </div>
        </>
      );
    }

    return (
      <>
        <p className="prompt-hint">{HINTS[mode]}</p>
        <div className="english-prompt">
          <span className="english-emoji" aria-hidden="true">
            {item.emoji}
          </span>
          <span className="english-word">{item.italian}</span>
        </div>
      </>
    );
  }

  if (mode === "colors") {
    return (
      <>
        <p className="prompt-hint">{HINTS.colors}</p>
        <div className="english-prompt">
          <span
            className="english-color-swatch"
            style={{ backgroundColor: item.value }}
            aria-hidden="true"
          />
          <span className="english-word">{item.italian}</span>
        </div>
      </>
    );
  }

  if (mode === "numbers") {
    return (
      <>
        <p className="prompt-hint">{HINTS.numbers}</p>
        <div className="english-prompt">
          <span className="english-number" aria-hidden="true">
            {item.value}
          </span>
          <span className="english-word">{item.italian}</span>
        </div>
      </>
    );
  }

  return (
    <>
      <p className="prompt-hint">{HINTS[mode]}</p>
      <div className="english-prompt">
        <span className="english-emoji" aria-hidden="true">
          {item.emoji}
        </span>
        <span className="english-word">{item.italian}</span>
      </div>
    </>
  );
}

export default function EnglishQuiz({ mode }) {
  const buildRoundForMode = useCallback(
    (difficulty) => buildRound(mode, difficulty),
    [mode]
  );

  return (
    <ChoiceQuiz
      gameId={`english-${mode}`}
      buildRound={buildRoundForMode}
      renderPrompt={(round) => renderPrompt(mode, round)}
      getOptionLabel={(option) => `Risposta: ${option}`}
      answersClassName={(round) =>
        round.options.length === 2 ? "answers--two" : "answers--three"
      }
      stackOnMobile
      feedbackDelay={{ correct: 1400, wrong: 2200 }}
      renderReveal={(round) => (
        <span>
          {mode === "numbers" ? round.item.value : round.item.italian} ={" "}
          <strong>{round.item.english}</strong>
        </span>
      )}
      wrongFeedback="Ops! Guarda bene e riprova."
    />
  );
}
