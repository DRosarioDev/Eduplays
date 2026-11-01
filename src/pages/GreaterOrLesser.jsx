import { useCallback, useState } from "react";
import GameScreen from "../components/GameScreen";
import AnswerButton from "../components/AnswerButton";
import { useGameEngine } from "../hooks/useGameEngine";
import { useSound } from "../hooks/useSound";
import { getAnswerState } from "../utils/answerState";
import { getGame } from "../data/games";

const game = getGame("math-greater-or-lesser");

const SYMBOLS = [
  { value: ">", label: "Maggiore di" },
  { value: "<", label: "Minore di" },
  { value: "=", label: "Uguale a" },
];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildRound() {
  const a = randomInt(1, 100);
  const b = Math.random() < 0.15 ? a : randomInt(1, 100);
  const answer = a > b ? ">" : a < b ? "<" : "=";
  return { a, b, answer, key: `${a}-${b}-${answer}` };
}

export default function GreaterOrLesser() {
  const [round, setRound] = useState(buildRound);
  const { playCorrect, playWrong } = useSound();

  const nextRound = useCallback(() => {
    setRound(buildRound());
  }, []);

  const {
    points,
    start,
    first,
    timeEnabled,
    feedback,
    streak,
    best,
    isNewRecord,
    gameKey,
    handleStart,
    handleTimerOver,
    finishGame,
    submitAnswer,
  } = useGameEngine({
    onRound: () => setRound(buildRound()),
    storageKey: game.storageKey,
  });

  const handleAnswer = (value) => {
    if (feedback) return;
    const isCorrect = value === round.answer;
    if (isCorrect) playCorrect();
    else playWrong();
    submitAnswer(isCorrect, value, nextRound);
  };

  return (
    <GameScreen
      meta={game}
      start={start}
      first={first}
      points={points}
      timeEnabled={timeEnabled}
      timerKey={gameKey}
      feedback={feedback}
      streak={streak}
      best={best}
      isNewRecord={isNewRecord}
      onStart={handleStart}
      onTimerOver={handleTimerOver}
      onQuit={finishGame}
    >
      <p className="prompt-hint">Quale simbolo va al posto del punto interrogativo?</p>

      <div className="compare-row" key={round.key}>
        <span className="compare-number">{round.a}</span>
        <span className="compare-slot" aria-hidden="true">
          ?
        </span>
        <span className="compare-number">{round.b}</span>
      </div>

      <div className="answers answers--three answers--short">
        {SYMBOLS.map((symbol) => (
          <AnswerButton
            key={symbol.value}
            state={getAnswerState(feedback, symbol.value, round.answer)}
            label={symbol.label}
            onClick={() => handleAnswer(symbol.value)}
          >
            {symbol.value}
          </AnswerButton>
        ))}
      </div>
    </GameScreen>
  );
}
