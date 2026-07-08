import StartComponent from "./StartComponent";
import Timer from "./Timer";
import Score from "./Score";

export default function GameScreen({
  title,
  start,
  first,
  points,
  timeEnabled,
  isDifficulty = false,
  bgColor = "#f4fafd",
  onStart,
  onTimerOver,
  isPoint = true,
  children,
}) {
  return (
    <div className="container-color" style={{ backgroundColor: bgColor }}>
      {start && first ? (
        <StartComponent
          title={title}
          isTime={true}
          isDifficulty={isDifficulty}
          onStart={onStart}
        />
      ) : !start ? (
        <div>
          <div className="game-header">
            <Timer onTimeOver={onTimerOver} isTimer={timeEnabled} />
            <div className="points">Score: {points}</div>
          </div>
          <div className="game-container">{children}</div>
        </div>
      ) : (
        <Score points={points} isPoint={isPoint} onStart={onStart} />
      )}
    </div>
  );
}