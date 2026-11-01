import { useEffect, useRef, useState } from "react";

export default function Timer({ onTimeOver, isTimer, duration = 30 }) {
  const [time, setTime] = useState(duration);
  const firedRef = useRef(false);

  useEffect(() => {
    if (!isTimer) return undefined;
    const interval = setInterval(() => {
      setTime((current) => Math.max(0, current - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimer]);

  useEffect(() => {
    if (!isTimer || time > 0 || firedRef.current) return;
    firedRef.current = true;
    onTimeOver?.();
  }, [time, isTimer, onTimeOver]);

  if (!isTimer) {
    return (
      <div className="timer timer--off" role="timer" aria-label="Gioco senza tempo">
        <i className="fa-solid fa-infinity" aria-hidden="true" />
        <span>Senza tempo</span>
      </div>
    );
  }

  const low = time <= 10;
  const percentage = Math.max(0, Math.min(100, (time / duration) * 100));

  return (
    <div
      className={`timer ${low ? "timer--low" : ""}`}
      role="timer"
      aria-label={`Tempo rimasto: ${time} ${
        time === 1 ? "secondo" : "secondi"
      }`}
    >
      <span className="timer-value">
        <i className="fa-solid fa-stopwatch" aria-hidden="true" />
        {time}
        <span className="timer-unit">s</span>
      </span>
      <span className="timer-track" aria-hidden="true">
        <span className="timer-fill" style={{ width: `${percentage}%` }} />
      </span>
    </div>
  );
}
