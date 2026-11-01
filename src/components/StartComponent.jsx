import { useState } from "react";
import { Link } from "react-router-dom";
import Difficulty from "./Difficulty";
import { formatCount } from "../utils/formatCount";

export default function StartComponent({
  meta,
  best = 0,
  onStart,
  isTime = true,
  isDifficulty = false,
  maxDifficulty = 4,
}) {
  const [timeEnabled, setTimeEnabled] = useState(false);
  const [difficulty, setDifficulty] = useState(0);

  return (
    <section className="start-card" aria-labelledby="start-title">
      <Link to="/" className="start-back">
        <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Torna ai giochi
      </Link>

      <div className="start-head">
        <span className="start-emoji" aria-hidden="true">
          {meta.emoji}
        </span>
        <div>
          <p className="start-kicker">Prima di iniziare</p>
          <h1 id="start-title">{meta.title}</h1>
        </div>
      </div>

      <p className="start-instructions">
        <i className="fa-solid fa-circle-info" aria-hidden="true" />
        <span>{meta.instructions}</span>
      </p>

      {(isTime || isDifficulty) && (
        <div className="start-settings">
          {isTime && (
            <fieldset className="setting-group">
              <legend>Tempo</legend>
              <div className="segmented">
                <button
                  type="button"
                  className="segmented-btn"
                  aria-pressed={!timeEnabled}
                  onClick={() => setTimeEnabled(false)}
                >
                  <i className="fa-solid fa-infinity" aria-hidden="true" />
                  <span>
                    Senza tempo
                    <small>Con calma</small>
                  </span>
                </button>
                <button
                  type="button"
                  className="segmented-btn"
                  aria-pressed={timeEnabled}
                  onClick={() => setTimeEnabled(true)}
                >
                  <i className="fa-solid fa-stopwatch" aria-hidden="true" />
                  <span>
                    30 secondi
                    <small>Metti alla prova la velocità</small>
                  </span>
                </button>
              </div>
            </fieldset>
          )}

          {isDifficulty && (
            <Difficulty
              value={difficulty}
              onChange={setDifficulty}
              max={maxDifficulty}
            />
          )}
        </div>
      )}

      <button
        type="button"
        className="btn btn-start"
        onClick={() => onStart(timeEnabled, difficulty)}
      >
        <i className="fa-solid fa-play" aria-hidden="true" /> Inizia a giocare
      </button>

      {best > 0 && (
        <p className="start-best">
          <i className="fa-solid fa-trophy" aria-hidden="true" /> Il tuo record:{" "}
          <strong>
            {meta.recordType === "moves"
              ? formatCount(best, "mossa", "mosse")
              : formatCount(best, "punto", "punti")}
          </strong>
        </p>
      )}
    </section>
  );
}
