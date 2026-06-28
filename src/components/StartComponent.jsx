import { useState } from "react";
import Difficulty from "./Difficulty";

const StartComponent = ({ title, onStart, isTime, isDifficulty = false }) => {
  const [timeEnabled, setTimeEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState(0);

  return (
    <div className="game-not-started">
      <h1>{title}</h1>
      {isTime ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "90%" }}>
          <div className="general-section">
            <div className="timer-section">
              <p>Timer</p>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={timeEnabled}
                  onChange={(e) => setTimeEnabled(e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            {isDifficulty ? (
              <Difficulty value={difficulty} onChange={setDifficulty} />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <button className="btn" onClick={() => onStart(timeEnabled, difficulty)}>
        Start Game
      </button>
    </div>
  );
};

export default StartComponent;
