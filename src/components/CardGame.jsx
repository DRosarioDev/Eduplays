import { Link } from "react-router-dom";
import GameArt from "./GameArt";
import { getCategory } from "../data/games";
import { formatCount } from "../utils/formatCount";

export default function CardGame({ game, record = 0 }) {
  const category = getCategory(game);
  const recordLabel =
    game.recordType === "moves"
      ? formatCount(record, "mossa", "mosse")
      : formatCount(record, "punto", "punti");

  return (
    <Link
      to={game.link}
      className="game-card"
      style={{
        "--category": category.color,
        "--category-ink": category.ink,
      }}
      aria-label={`${game.title}: ${game.description}${
        record > 0 ? `. Il tuo record: ${recordLabel}` : ""
      } — Gioca`}
    >
      <div className="card-media">
        <GameArt game={game} />
      </div>

      <div className="card-body">
        <h3 className="card-title">{game.title}</h3>
        <p className="card-desc">{game.description}</p>

        <div className="card-footer">
          {record > 0 && (
            <span className="card-record" title="Il tuo record">
              <i className="fa-solid fa-trophy" aria-hidden="true" />{" "}
              {recordLabel}
            </span>
          )}
          <span className="card-play">
            <i className="fa-solid fa-play" aria-hidden="true" /> Gioca
          </span>
        </div>
      </div>
    </Link>
  );
}
