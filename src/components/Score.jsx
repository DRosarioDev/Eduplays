import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import mascotte from "../assets/thumbnails/mascotte.png";
import { formatCount } from "../utils/formatCount";

function getStars(points, variant, stats) {
  if (variant === "memory") {
    const moves = stats?.moves ?? 0;
    if (moves > 0 && moves <= 12) return 3;
    if (moves > 0 && moves <= 18) return 2;
    return 1;
  }
  if (points >= 10) return 3;
  if (points >= 4) return 2;
  return 1;
}

const MESSAGES = {
  3: "Fantastico! Sei un vero campione.",
  2: "Molto bene! Continua così.",
  1: "Bravo! Ogni partita ti fa migliorare.",
};

export default function Score({
  meta,
  points = 0,
  best = 0,
  isNewRecord = false,
  onStart,
  variant = "quiz",
  stats,
}) {
  const stars = getStars(points, variant, stats);
  const titleRef = useRef(null);
  const recordLabel =
    meta.recordType === "moves"
      ? formatCount(best, "mossa", "mosse")
      : formatCount(best, "punto", "punti");

  useEffect(() => {
    titleRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <section className="end-card" aria-labelledby="end-title">
      <div className="end-mascot" aria-hidden="true">
        <img src={mascotte} alt="" width="140" height="140" />
      </div>

      <p className="end-kicker">Partita finita</p>

      {variant === "memory" ? (
        <>
          <h1 id="end-title" ref={titleRef} tabIndex={-1}>Hai vinto!</h1>
          <p className="end-score end-score--text">
            {stats?.moves ?? 0}
            <span>{(stats?.moves ?? 0) === 1 ? "mossa" : "mosse"}</span>
          </p>
        </>
      ) : (
        <>
          <h1 id="end-title" ref={titleRef} tabIndex={-1}>Punteggio</h1>
          <p className="end-score">
            {points}
            <span>{points === 1 ? "punto" : "punti"}</span>
          </p>
        </>
      )}

      <div
        className="end-stars"
        role="img"
        aria-label={`${stars} ${stars === 1 ? "stella" : "stelle"} su 3`}
      >
        {[0, 1, 2].map((index) => (
          <i
            key={index}
            className={`fa-solid fa-star ${index < stars ? "is-on" : ""}`}
            aria-hidden="true"
          />
        ))}
      </div>

      <p className="end-message">{MESSAGES[stars]}</p>

      {isNewRecord && (
        <p className="end-record end-record--new">
          <i className="fa-solid fa-trophy" aria-hidden="true" /> Nuovo record!
        </p>
      )}
      {!isNewRecord && best > 0 && (
        <p className="end-record">
          <i className="fa-solid fa-trophy" aria-hidden="true" /> Il tuo record:{" "}
          {recordLabel}
        </p>
      )}

      <div className="end-actions">
        <button type="button" className="btn btn-primary" onClick={onStart}>
          <i className="fa-solid fa-rotate-right" aria-hidden="true" /> Gioca
          ancora
        </button>
        <Link to="/" className="btn btn-secondary">
          <i className="fa-solid fa-house" aria-hidden="true" /> Torna ai giochi
        </Link>
      </div>
    </section>
  );
}
