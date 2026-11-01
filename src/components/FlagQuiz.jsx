import { useCallback, useState } from "react";
import GameScreen from "./GameScreen";
import AnswerButton from "./AnswerButton";
import { useGameEngine } from "../hooks/useGameEngine";
import { useSound } from "../hooks/useSound";
import { getAnswerState } from "../utils/answerState";
import { getGame } from "../data/games";
import countryFlags from "../assets/flags/country-flag.json";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * I 213 paesi sono ordinati dal più noto al meno noto. Ogni difficoltà
 * usa un gruppo sempre più ampio, così anche Base ha almeno 100 domande.
 */
const POOL_SIZES = [100, 130, 160, 190, 213];
const SORTED_FLAGS = [...countryFlags].sort(
  (first, second) =>
    first.difficulty - second.difficulty ||
    first.country_it.localeCompare(second.country_it)
);

function poolFor(difficulty) {
  const level = Math.min(Math.max(difficulty, 0), POOL_SIZES.length - 1);
  return SORTED_FLAGS.slice(0, Math.min(POOL_SIZES[level], SORTED_FLAGS.length));
}

function buildRound(mode, difficulty) {
  const pool = poolFor(difficulty);

  const correct = pool[randomInt(0, pool.length - 1)];
  let wrong = correct;
  while (
    wrong.id === correct.id ||
    (mode === "capital" && wrong.capital_it === correct.capital_it)
  ) {
    wrong = pool[randomInt(0, pool.length - 1)];
  }

  const options = Math.random() < 0.5 ? [correct, wrong] : [wrong, correct];
  const answer =
    mode === "capital" ? correct.capital_it : correct.country_it;

  return {
    flag: correct.flag,
    country: correct.country_it,
    options,
    answer,
    key: `${correct.id}-${answer}-${wrong.id}`,
  };
}

export default function FlagQuiz({ gameId, mode = "country" }) {
  const game = getGame(gameId);
  const [round, setRound] = useState(() => buildRound(mode, 0));

  const { playCorrect, playWrong } = useSound();

  const nextRound = useCallback(
    (difficulty) => {
      setRound(buildRound(mode, difficulty));
    },
    [mode]
  );

  const {
    points,
    start,
    first,
    timeEnabled,
    difficulty,
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
    onRound: (diff) => setRound(buildRound(mode, diff)),
    storageKey: game.storageKey,
  });

  const optionValue = (country) =>
    mode === "capital" ? country.capital_it : country.country_it;

  const handleAnswer = (value) => {
    if (feedback) return;
    const isCorrect = value === round.answer;
    if (isCorrect) playCorrect();
    else playWrong();
    submitAnswer(isCorrect, value, () => nextRound(difficulty));
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
      <p className="prompt-hint">
        {mode === "capital"
          ? "Qual è la capitale di questo paese?"
          : "Di quale paese è questa bandiera?"}
      </p>

      <img
        key={round.flag}
        className="flag-image"
        src={round.flag}
        alt="Bandiera da riconoscere"
        width="320"
        height="240"
      />

      <div className="answers answers--two answers--stack-mobile">
        {round.options.map((country) => {
          const value = optionValue(country);
          return (
            <AnswerButton
              key={country.id}
              state={getAnswerState(feedback, value, round.answer)}
              onClick={() => handleAnswer(value)}
            >
              {value}
            </AnswerButton>
          );
        })}
      </div>
    </GameScreen>
  );
}
