import ChoiceQuiz from "../components/ChoiceQuiz";
import { colorMixes } from "../assets/colorMixes";
import { shuffleArray } from "../utils/memoryDeck";
import { createWeightedDeck } from "../utils/questionDeck";
import { randomTone } from "../utils/tones";

const RESULT_COLORS = [
  ...new Map(colorMixes.map((mix) => [mix.result.value, mix.result])).values(),
];

/**
 * Colori che un bambino può confondere tra loro. Escludiamo dalla stessa
 * domanda due tonalità della stessa famiglia: a difficoltà Base sarebbe
 * ingiusto dover distinguere, per esempio, "Marrone" da "Marrone scuro".
 */
const COLOR_FAMILIES = {
  Rosso: ["rosso"],
  "Rosso scuro": ["rosso"],
  "Rosso arancio": ["rosso", "arancio"],
  Arancione: ["arancio"],
  Pesca: ["arancio", "rosa"],
  Giallo: ["giallo"],
  "Giallo chiaro": ["giallo"],
  "Giallo arancio": ["giallo", "arancio"],
  Ocra: ["giallo", "marrone"],
  Verde: ["verde"],
  "Verde chiaro": ["verde"],
  "Verde oliva": ["verde", "marrone"],
  "Verde scuro": ["verde"],
  Blu: ["blu"],
  "Blu scuro": ["blu"],
  Azzurro: ["azzurro", "blu"],
  "Azzurro chiaro": ["azzurro", "blu"],
  Viola: ["viola"],
  "Viola blu": ["viola", "blu"],
  Lilla: ["viola", "rosa"],
  Rosa: ["rosa"],
  "Rosa chiaro": ["rosa"],
  Marrone: ["marrone"],
  "Marrone scuro": ["marrone"],
  Beige: ["marrone", "giallo", "grigio"],
  Grigio: ["grigio"],
  "Grigio chiaro": ["grigio"],
  "Grigio scuro": ["grigio"],
};

function sharesFamily(first, second) {
  const firstFamilies = COLOR_FAMILIES[first.name] || [first.name];
  const secondFamilies = COLOR_FAMILIES[second.name] || [second.name];
  return firstFamilies.some((family) => secondFamilies.includes(family));
}

function buildColorBank(level) {
  const optionCount = level === 0 ? 2 : 3;

  return colorMixes.flatMap((mix) => [
    {
      mode: "mix",
      mix,
      optionCount,
      key: `mix-${mix.id}`,
    },
    {
      mode: "reverse",
      mix,
      optionCount,
      key: `reverse-${mix.id}`,
    },
  ]);
}

const COLOR_BANKS = [0, 1, 2].map((level) => buildColorBank(level));
const drawColorQuestion = createWeightedDeck(COLOR_BANKS);

function buildMixOptions(mix, optionCount) {
  const excluded = new Set([mix.result.value, mix.a.value, mix.b.value]);
  const available = RESULT_COLORS.filter(
    (color) => !excluded.has(color.value)
  );
  const differentFamily = available.filter(
    (color) => !sharesFamily(color, mix.result)
  );
  const wrongColors = shuffleArray(
    differentFamily.length >= optionCount - 1 ? differentFamily : available
  ).slice(0, optionCount - 1);

  return {
    answer: mix.result.value,
    options: shuffleArray([mix.result, ...wrongColors]),
  };
}

function buildReverseOptions(mix, optionCount) {
  const candidates = colorMixes.filter(
    (entry) => entry.id !== mix.id && entry.result.value !== mix.result.value
  );
  const differentFamily = candidates.filter(
    (entry) => !sharesFamily(entry.result, mix.result)
  );
  const wrongMixes = shuffleArray(
    differentFamily.length >= optionCount - 1 ? differentFamily : candidates
  ).slice(0, optionCount - 1);

  return {
    answer: mix.id,
    options: shuffleArray([mix, ...wrongMixes]),
  };
}

function buildRound(difficulty = 0) {
  const item = drawColorQuestion(difficulty);
  const { mode, mix, optionCount } = item;
  const choice =
    mode === "mix"
      ? buildMixOptions(mix, optionCount)
      : buildReverseOptions(mix, optionCount);

  return {
    mode,
    a: mix.a,
    b: mix.b,
    result: mix.result,
    resultName: mix.result.name,
    answer: choice.answer,
    options: choice.options,
    tone: randomTone(),
    key: item.key,
  };
}

function MixColor({ color }) {
  return (
    <div className="mix-color">
      <span
        className="mix-color-dot"
        style={{ backgroundColor: color.value }}
        aria-hidden="true"
      />
      <span className="mix-color-name">{color.name}</span>
    </div>
  );
}

function MixPair({ mix }) {
  return (
    <span className="mix-pair" aria-hidden="true">
      <span
        className="mix-pair-dot"
        style={{ backgroundColor: mix.a.value }}
      />
      <span className="mix-pair-plus">+</span>
      <span
        className="mix-pair-dot"
        style={{ backgroundColor: mix.b.value }}
      />
    </span>
  );
}

function renderPrompt(round) {
  if (round.mode === "reverse") {
    return (
      <>
        <p className="prompt-hint">
          Quali due colori mescolati danno questo colore?
        </p>
        <div className="mix-result">
          <span
            className="mix-result-dot"
            style={{ backgroundColor: round.result.value }}
            aria-hidden="true"
          />
          <span className="mix-result-name">{round.result.name}</span>
        </div>
      </>
    );
  }

  return (
    <>
      <p className="prompt-hint">
        Che colore ottieni mescolando questi due colori?
      </p>
      <div className="mix-prompt">
        <MixColor color={round.a} />
        <span className="mix-symbol" aria-hidden="true">
          +
        </span>
        <MixColor color={round.b} />
        <span className="mix-symbol" aria-hidden="true">
          =
        </span>
        <span className="mix-question" aria-hidden="true">
          ?
        </span>
      </div>
    </>
  );
}

export default function ColorMixing() {
  return (
    <ChoiceQuiz
      gameId="color-mixing"
      buildRound={buildRound}
      renderPrompt={renderPrompt}
      renderOption={(option) =>
        option.a && option.b ? <MixPair mix={option} /> : null
      }
      getOptionKey={(option) => (option.a && option.b ? option.id : option.value)}
      getOptionValue={(option) =>
        option.a && option.b ? option.id : option.value
      }
      getOptionLabel={(option) =>
        option.a && option.b
          ? `${option.a.name} + ${option.b.name}`
          : `Colore ${option.name}`
      }
      getOptionStyle={(option) =>
        option.a && option.b ? undefined : { backgroundColor: option.value }
      }
      optionClassName={(round, option) =>
        option.a && option.b ? "answer-btn--pair" : "answer-btn--swatch"
      }
      answersClassName={(round) =>
        round.mode === "reverse"
          ? `answers--${round.options.length === 2 ? "two" : "three"} answers--pairs`
          : undefined
      }
      feedbackDelay={{ correct: 1200, wrong: 1900 }}
      renderReveal={(round) => (
        <span>
          {round.mode === "reverse" ? (
            <>
              <strong>{round.resultName}</strong> si ottiene mescolando{" "}
              {round.a.name} + {round.b.name}.
            </>
          ) : (
            <>
              {round.a.name} + {round.b.name} ={" "}
              <strong>{round.resultName}</strong>.
            </>
          )}
        </span>
      )}
      wrongFeedback="Ops! Pensa a come si mescolano i colori."
    />
  );
}
