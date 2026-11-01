import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import StartComponent from "./StartComponent";
import Timer from "./Timer";
import Score from "./Score";
import { getCategory } from "../data/games";

function Feedback({ type, wrongText }) {
  return (
    <div
      className={`game-feedback ${type ? `game-feedback--${type}` : ""}`}
      role="status"
      aria-live="polite"
    >
      {type === "correct" && (
        <>
          <i className="fa-solid fa-circle-check" aria-hidden="true" />
          <span>Bravo! +1 punto</span>
        </>
      )}
      {type === "wrong" && (
        <>
          <i className="fa-solid fa-circle-xmark" aria-hidden="true" />
          <span>{wrongText || "Ops! Guarda la risposta giusta."}</span>
        </>
      )}
    </div>
  );
}

export default function GameScreen({
  meta,
  start,
  first,
  points = 0,
  timeEnabled = false,
  feedback = undefined,
  streak = 0,
  best = 0,
  isNewRecord = false,
  timerKey,
  showScore = true,
  showQuit = true,
  tone,
  wrongFeedback,
  scoreVariant = "quiz",
  scoreStats,
  onStart,
  onTimerOver,
  onQuit,
  children,
}) {
  const category = getCategory(meta);
  const playTitleRef = useRef(null);
  const style = {
    "--category": category.color,
    "--category-ink": category.ink,
  };

  useEffect(() => {
    if (!start) playTitleRef.current?.focus({ preventScroll: true });
  }, [start]);

  if (start && first) {
    return (
      <div className="start-page" style={style}>
        <StartComponent
          meta={meta}
          best={best}
          onStart={onStart}
          isTime={meta.timer}
          isDifficulty={meta.maxDifficulty !== null}
          maxDifficulty={meta.maxDifficulty ?? 0}
        />
      </div>
    );
  }

  if (!start) {
    return (
      <section className="play-page" style={style} aria-labelledby="game-title">
        <div className="play-topbar">
          <Link to="/" className="back-btn">
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            Giochi
          </Link>
          <h1 id="game-title" className="play-title" ref={playTitleRef} tabIndex={-1}>
            {meta.title}
          </h1>
          {showQuit ? (
            <button type="button" className="quit-btn" onClick={onQuit}>
              Fine
            </button>
          ) : (
            <span className="topbar-spacer" aria-hidden="true" />
          )}
        </div>

        {timeEnabled !== null && (
          <div className="play-status">
            <Timer
              key={timerKey}
              onTimeOver={onTimerOver}
              isTimer={timeEnabled}
            />
            {showScore && (
              <div className="score-chip" aria-live="polite">
                <i className="fa-solid fa-star" aria-hidden="true" />
                <span>
                  <span className="visually-hidden">Punteggio: </span>
                  {points}
                </span>
              </div>
            )}
            {streak >= 2 && (
              <div className="streak-chip">
                <span aria-hidden="true">🔥</span>
                <span>
                  <span className="visually-hidden">Serie di risposte giuste: </span>
                  {streak}
                </span>
              </div>
            )}
          </div>
        )}

        {feedback !== undefined && (
          <Feedback type={feedback?.type} wrongText={wrongFeedback} />
        )}

        <div
          className={`play-board ${
            scoreVariant === "memory" ? "play-board--memory" : ""
          }`}
          style={tone ? { "--board-tone": tone } : undefined}
        >
          {children}
        </div>
      </section>
    );
  }

  return (
    <div className="end-page" style={style}>
      <Score
        meta={meta}
        points={points}
        best={best}
        isNewRecord={isNewRecord}
        onStart={onStart}
        variant={scoreVariant}
        stats={scoreStats}
      />
    </div>
  );
}
