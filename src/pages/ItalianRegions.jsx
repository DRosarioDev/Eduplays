import ChoiceQuiz from "../components/ChoiceQuiz";
import {
  italianAreas,
  italianRegions,
} from "../assets/italianRegions";
import { shuffleArray } from "../utils/memoryDeck";
import { createWeightedDeck } from "../utils/questionDeck";
import { randomTone } from "../utils/tones";

const areaOfCapital = (capital) =>
  italianRegions.find((entry) => entry.capital === capital)?.area;
const areaOfRegion = (region) =>
  italianRegions.find((entry) => entry.region === region)?.area;

function pickOptions(correct, candidates, count, preferSameArea, getArea) {
  const shuffled = shuffleArray(
    candidates.filter((value) => value !== correct)
  );
  if (!preferSameArea) return shuffled.slice(0, count);

  const correctArea = getArea(correct);
  const sameArea = shuffled.filter((value) => getArea(value) === correctArea);
  const otherArea = shuffled.filter((value) => getArea(value) !== correctArea);
  return [...sameArea, ...otherArea].slice(0, count);
}

/**
 * I tre giochi delle regioni sono separati: ogni modalità ha la propria
 * pagina, il proprio record e il proprio mazzo di domande.
 */
const MODES = {
  "region-capital": {
    gameId: "geography-region-capitals",
    hint: "Qual è il capoluogo di questa regione?",
    kicker: "Regione",
    cardValue: (round) => round.region,
    answer: (region) => region.capital,
    options: (region, count, level) =>
      pickOptions(
        region.capital,
        italianRegions.map((entry) => entry.capital),
        count,
        level === 2,
        areaOfCapital
      ),
    reveal: (round) => (
      <span>
        <strong>{round.region}</strong>: capoluogo{" "}
        <strong>{round.capital}</strong>.
      </span>
    ),
    wrongFeedback: "Ops! Ripensa al capoluogo di questa regione.",
  },
  "capital-region": {
    gameId: "geography-region-from-capital",
    hint: "In quale regione si trova questo capoluogo?",
    kicker: "Capoluogo",
    cardValue: (round) => round.capital,
    answer: (region) => region.region,
    options: (region, count, level) =>
      pickOptions(
        region.region,
        italianRegions.map((entry) => entry.region),
        count,
        level === 2,
        areaOfRegion
      ),
    reveal: (round) => (
      <span>
        <strong>{round.capital}</strong> è il capoluogo della regione{" "}
        <strong>{round.region}</strong>.
      </span>
    ),
    wrongFeedback: "Ops! Ripensa alla regione di questo capoluogo.",
  },
  "region-area": {
    gameId: "geography-region-areas",
    hint: "In quale area d'Italia si trova questa regione?",
    kicker: "Regione",
    cardValue: (round) => round.region,
    answer: (region) => region.area,
    options: (region, count) =>
      pickOptions(region.area, italianAreas, count, false, () => ""),
    reveal: (round) => (
      <span>
        <strong>{round.region}</strong> si trova nella zona{" "}
        <strong>{round.area}</strong>.
      </span>
    ),
    wrongFeedback: "Ops! Ripensa alla posizione della regione in Italia.",
  },
};

function buildRegionBank(level, mode) {
  return italianRegions.map((region) => ({
    mode,
    region,
    level,
    key: `${mode}-${region.region}`,
  }));
}

const REGION_DECKS = Object.fromEntries(
  Object.keys(MODES).map((mode) => [
    mode,
    createWeightedDeck(
      [0, 1, 2].map((level) => buildRegionBank(level, mode))
    ),
  ])
);

function buildRound(mode, difficulty = 0) {
  const config = MODES[mode];
  const item = REGION_DECKS[mode](difficulty);
  const { region, level } = item;
  const optionCount = level === 0 ? 2 : 3;
  const answer = config.answer(region);
  const options = config.options(region, optionCount - 1, level);

  return {
    mode,
    region: region.region,
    capital: region.capital,
    area: region.area,
    answer,
    options: shuffleArray([answer, ...options]),
    tone: randomTone(),
    key: item.key,
  };
}

const BUILD_ROUNDS = Object.fromEntries(
  Object.keys(MODES).map((mode) => [
    mode,
    (difficulty = 0) => buildRound(mode, difficulty),
  ])
);

function renderPrompt(round) {
  const config = MODES[round.mode];

  return (
    <>
      <p className="prompt-hint">{config.hint}</p>
      <div className="region-card">
        <span className="region-kicker">{config.kicker}</span>
        <span className="region-name">{config.cardValue(round)}</span>
      </div>
    </>
  );
}

function renderReveal(round) {
  return MODES[round.mode].reveal(round);
}

function RegionsGame({ mode }) {
  const config = MODES[mode];

  return (
    <ChoiceQuiz
      gameId={config.gameId}
      buildRound={BUILD_ROUNDS[mode]}
      renderPrompt={renderPrompt}
      renderOption={(option) => (
        <span className="region-answer">{option}</span>
      )}
      getOptionLabel={(option) => option}
      stackOnMobile
      feedbackDelay={{ correct: 1300, wrong: 2000 }}
      renderReveal={renderReveal}
      wrongFeedback={config.wrongFeedback}
    />
  );
}

export function RegionCapitals() {
  return <RegionsGame mode="region-capital" />;
}

export function RegionFromCapital() {
  return <RegionsGame mode="capital-region" />;
}

export function RegionAreas() {
  return <RegionsGame mode="region-area" />;
}
