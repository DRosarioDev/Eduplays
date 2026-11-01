import { useCallback, useRef, useState } from "react";
import GameScreen from "./GameScreen";
import AnswerButton from "./AnswerButton";
import { useGameEngine } from "../hooks/useGameEngine";
import { useSound } from "../hooks/useSound";
import { getAnswerState } from "../utils/answerState";
import { getGame } from "../data/games";

const ANSWERS_CLASS = {
  2: "answers--two",
  3: "answers--three",
  4: "answers--four",
};

function stateSuffix(state) {
  if (state === "correct") return " — risposta giusta";
  if (state === "wrong") return " — risposta scelta, sbagliata";
  return "";
}

/**
 * Motore condiviso per i giochi a scelta multipla.
 *
 * La pagina decide come costruire il round, come mostrare la domanda e come
 * disegnare le singole risposte. Punteggio, timer, feedback e record restano
 * gestiti dallo stesso motore degli altri giochi.
 */
export default function ChoiceQuiz({
  gameId,
  buildRound,
  renderPrompt,
  renderOption,
  getOptionKey = (option, index) => `${index}-${String(option)}`,
  getOptionValue = (option) => option,
  getOptionLabel,
  getOptionStyle,
  answersClassName,
  optionClassName = "",
  stackOnMobile = false,
  wrongFeedback,
  scoreVariant = "quiz",
  scoreStats,
  showScore = true,
  feedbackDelay,
  tone,
  renderReveal,
}) {
  const game = getGame(gameId);
  const [round, setRound] = useState(() => buildRound(0));
  const difficultyRef = useRef(0);
  const { playCorrect, playWrong } = useSound();

  const nextRound = useCallback(() => {
    setRound(buildRound(difficultyRef.current));
  }, [buildRound]);

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
    onRound: (difficulty) => {
      difficultyRef.current = difficulty;
      setRound(buildRound(difficulty));
    },
    storageKey: game.storageKey,
    recordType: game.recordType,
    feedbackDelay,
  });

  const handleAnswer = (option) => {
    if (feedback) return;

    const value = getOptionValue(option);
    const isCorrect = value === round.answer;

    if (isCorrect) playCorrect();
    else playWrong();

    submitAnswer(isCorrect, value, nextRound);
  };

  const answerGrid =
    (typeof answersClassName === "function"
      ? answersClassName(round)
      : answersClassName) ||
    ANSWERS_CLASS[round.options.length] ||
    "answers--two";
  const boardTone =
    typeof tone === "function" ? tone(round) : tone ?? round.tone;

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
      tone={boardTone}
      wrongFeedback={wrongFeedback}
      scoreVariant={scoreVariant}
      scoreStats={scoreStats}
      showScore={showScore}
    >
      <div className="choice-prompt" key={round.key}>
        {renderPrompt(round)}
      </div>

      <div
        className={`answers ${answerGrid} ${
          stackOnMobile ? "answers--stack-mobile" : ""
        }`}
      >
        {round.options.map((option, index) => {
          const value = getOptionValue(option);
          const state = getAnswerState(feedback, value, round.answer);
          const baseLabel = getOptionLabel?.(option, index, state);
          const label = baseLabel
            ? `${baseLabel}${stateSuffix(state)}`
            : state !== "idle"
              ? `${String(value)}${stateSuffix(state)}`
              : undefined;
          const content = renderOption
            ? renderOption(option, index, state)
            : value;

          return (
            <AnswerButton
              key={getOptionKey(option, index)}
              state={state}
              onClick={() => handleAnswer(option)}
              className={
                typeof optionClassName === "function"
                  ? optionClassName(round, option)
                  : optionClassName
              }
              label={label}
              style={getOptionStyle?.(option, index, state)}
            >
              {content}
            </AnswerButton>
          );
        })}
      </div>

      {feedback && renderReveal && (
        <div className="choice-reveal">{renderReveal(round, feedback)}</div>
      )}
    </GameScreen>
  );
}
