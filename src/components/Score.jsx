import { Link } from "react-router-dom";

export default function Score({ points, onStart }) {
  return (
    <div className="game-not-started">
      <h2>Punteggio: {points}</h2>
      <div className="buttons-row">
        <button className="btn" onClick={onStart}>
          Gioca ancora
        </button>
        <Link to="/" className="link-prop">
          <button className="btn">Menu principale</button>
        </Link>
      </div>
    </div>
  );
}
