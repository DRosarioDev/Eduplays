import { useCallback, useState } from "react";
import GameScreen from "./GameScreen";
import AnswerButton from "./AnswerButton";
import { useGameEngine } from "../hooks/useGameEngine";
import { useSound } from "../hooks/useSound";
import { getAnswerState } from "../utils/answerState";
import { getGame } from "../data/games";

const SYMBOLS = {
  add: "+",
  sub: "−",
  mul: "×",
  div: "÷",
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildWrongAnswer(answer) {
  let wrong = answer;
  while (wrong === answer || wrong < 0) {
    const offset = randomInt(1, 5);
    wrong = Math.random() < 0.5 ? answer + offset : answer - offset;
  }
  return wrong;
}

function buildRound(mode) {
  let a;
  let b;
  let symbol;
  let answer;

  if (mode === "tables") {
    a = randomInt(1, 10);
    b = randomInt(1, 10);
    symbol = SYMBOLS.mul;
    answer = a * b;
  } else {
    const operation = ["add", "sub", "mul", "div"][randomInt(0, 3)];
    symbol = SYMBOLS[operation];

    if (operation === "div") {
      b = randomInt(1, 10);
      answer = randomInt(1, 10);
      a = b * answer;
    } else if (operation === "mul") {
      a = randomInt(1, 10);
      b = randomInt(1, 10);
      answer = a * b;
    } else {
      a = randomInt(1, 50);
      b = randomInt(1, 50);
      if (operation === "sub" && b > a) {
        [a, b] = [b, a];
      }
      answer = operation === "add" ? a + b : a - b;
    }
  }

  const wrong = buildWrongAnswer(answer);
  const options = Math.random() < 0.5 ? [answer, wrong] : [wrong, answer];

  return {
    prompt: `${a} ${symbol} ${b}`,
    answer,
    options,
    key: `${a}-${symbol}-${b}-${options.join("-")}`,
  };
}

export default function MathQuiz({ gameId, mode = "mixed" }) {
  const game = getGame(gameId);
  const [round, setRound] = useState(() => buildRound(mode));

  const { playCorrect, playWrong } = useSound();

  const nextRound = useCallback(() => {
    setRound(buildRound(mode));
  }, [mode]);

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
    onRound: () => setRound(buildRound(mode)),
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
      <p className="question" key={round.key}>
        {round.prompt}
      </p>

      <div className="answers answers--two answers--short">
        {round.options.map((option) => (
          <AnswerButton
            key={option}
            state={getAnswerState(feedback, option, round.answer)}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </AnswerButton>
        ))}
      </div>
    </GameScreen>
  );
}
