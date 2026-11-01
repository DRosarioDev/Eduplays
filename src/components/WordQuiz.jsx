import { useCallback, useState } from "react";
import GameScreen from "./GameScreen";
import AnswerButton from "./AnswerButton";
import { useGameEngine } from "../hooks/useGameEngine";
import { useSound } from "../hooks/useSound";
import { getAnswerState } from "../utils/answerState";
import { getGame } from "../data/games";
import italianWords from "../assets/words_it.json";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildRound(mode, difficulty) {
  const pool = italianWords.filter((word) => word.difficulty <= difficulty);
  const words = pool.length > 1 ? pool : italianWords;
  const correct = words[randomInt(0, words.length - 1)];
  const answer = mode === "synonym" ? correct.synonym : correct.antonym;
  const other = mode === "synonym" ? correct.antonym : correct.synonym;
  const options = Math.random() < 0.5 ? [answer, other] : [other, answer];

  return {
    word: correct.word,
    answer,
    options,
    key: `${correct.id}-${answer}-${other}`,
  };
}

export default function WordQuiz({ gameId, mode }) {
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

  const handleAnswer = (value) => {
    if (feedback) return;
    const isCorrect = value === round.answer;
    if (isCorrect) playCorrect();
    else playWrong();
    submitAnswer(isCorrect, value, () => nextRound(difficulty));
  };

  const word = round.word
    ? round.word.charAt(0).toUpperCase() + round.word.slice(1)
    : "";

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
        {mode === "synonym"
          ? "Quale parola significa quasi la stessa cosa?"
          : "Quale parola significa il contrario?"}
      </p>

      <p className="word-prompt" key={round.key}>
        {word}
      </p>

      <div className="answers answers--two answers--stack-mobile">
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
