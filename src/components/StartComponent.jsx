import { useState } from "react";

const StartComponent = ({ title, onStart, isTime }) => {
  const [timeEnabled, setTimeEnabled] = useState(true);

  return (
    <div className="game-not-started">
      <h1>{title}</h1>
      {isTime ? (
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
      ) : (<div></div>)}
      <button className="btn" onClick={() => onStart(timeEnabled)}>
        Start Game
      </button>
    </div>
  );
};

export default StartComponent;
