import ChoiceQuiz from "../components/ChoiceQuiz";
import { PATTERN_SYMBOLS, patternBanks } from "../assets/logicPatterns";
import { shuffleArray } from "../utils/memoryDeck";
import { createWeightedDeck } from "../utils/questionDeck";
import { randomTone } from "../utils/tones";

const drawPattern = createWeightedDeck(patternBanks);

function buildOptions(item) {
  const pool =
    item.palette.length > 2 ? item.palette : PATTERN_SYMBOLS;
  const distractors = shuffleArray(
    pool.filter((symbol) => symbol.emoji !== item.answerSymbol.emoji)
  ).slice(0, 2);

  return shuffleArray([item.answerSymbol, ...distractors]);
}

function buildRound(difficulty = 0) {
  const item = drawPattern(difficulty);

  return {
    pattern: item.pattern,
    answer: item.answerSymbol.emoji,
    answerLabel: item.answerSymbol.label,
    options: buildOptions(item),
    tone: randomTone(),
    key: item.key,
  };
}

function renderPrompt(round) {
  const spokenPattern = round.pattern
    .map((symbol) => symbol.label)
    .join(", ");

  return (
    <>
      <p className="prompt-hint">Quale simbolo viene dopo?</p>
      <p className="visually-hidden">
        Sequenza: {spokenPattern}. Quale simbolo viene dopo?
      </p>
      <div className="pattern-row" aria-hidden="true">
        {round.pattern.map((symbol, index) => (
          <span className="pattern-chip" key={`${symbol.emoji}-${index}`}>
            {symbol.emoji}
          </span>
        ))}
        <span className="pattern-chip pattern-chip--blank">?</span>
      </div>
    </>
  );
}

export default function LogicPatterns() {
  return (
    <ChoiceQuiz
      gameId="logic-shape-patterns"
      buildRound={buildRound}
      renderPrompt={renderPrompt}
      renderOption={(option) => (
        <span className="pattern-option" aria-hidden="true">
          {option.emoji}
        </span>
      )}
      getOptionKey={(option) => option.emoji}
      getOptionValue={(option) => option.emoji}
      getOptionLabel={(option) => option.label}
      answersClassName="answers--three"
      optionClassName="answer-btn--pattern"
      feedbackDelay={{ correct: 1200, wrong: 1900 }}
      renderReveal={(round) => (
        <span>
          La sequenza continua con: <strong>{round.answerLabel}</strong>.
        </span>
      )}
      wrongFeedback="Ops! Guarda il ritmo della sequenza."
    />
  );
}
