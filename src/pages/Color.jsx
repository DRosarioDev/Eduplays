import { useCallback, useState } from "react";
import GameScreen from "../components/GameScreen";
import { useGameEngine } from "../hooks/useGameEngine";
import { useSound } from "../hooks/useSound";
import { getAnswerState } from "../utils/answerState";
import { getGame } from "../data/games";
import { COLORS, COLOR_TONES } from "../assets/colors";

const game = getGame("color");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildRound() {
  const correct = COLORS[randomInt(0, COLORS.length - 1)];
  let wrong = correct;
  while (wrong.name === correct.name) {
    wrong = COLORS[randomInt(0, COLORS.length - 1)];
  }

  const options =
    Math.random() < 0.5
      ? [correct.value, wrong.value]
      : [wrong.value, correct.value];

  return {
    name: correct.name,
    answer: correct.value,
    options,
    tone: COLOR_TONES[randomInt(0, COLOR_TONES.length - 1)],
    key: `${correct.name}-${options.join("-")}`,
  };
}

export default function Color() {
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
      tone={round.tone}
      wrongFeedback="Ops! Guarda il riquadro giusto."
    >
      <p className="prompt-hint">Tocca il riquadro di questo colore:</p>

      <p className="color-name" key={round.key}>
        {round.name}
      </p>

      <div className="swatch-grid">
        {round.options.map((color, index) => {
          const state = getAnswerState(feedback, color, round.answer);
          return (
            <button
              key={color}
              type="button"
              className={`swatch swatch--${state}`}
              style={{ backgroundColor: color }}
              onClick={() => handleAnswer(color)}
              disabled={state !== "idle"}
              aria-label={`Riquadro colorato ${index + 1}${
                state === "correct" ? " — risposta giusta" : ""
              }${state === "wrong" ? " — risposta scelta, sbagliata" : ""}`}
            >
              <span className="swatch-tag" aria-hidden="true">
                {index + 1}
              </span>
              {state === "correct" && (
                <span className="swatch-state swatch-state--correct">
                  <i className="fa-solid fa-check" aria-hidden="true" />
                </span>
              )}
              {state === "wrong" && (
                <span className="swatch-state swatch-state--wrong">
                  <i className="fa-solid fa-xmark" aria-hidden="true" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </GameScreen>
  );
}
