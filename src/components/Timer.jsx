import { useState, useEffect } from "react";

export default function Timer({ onTimeOver, isTimer }) {
  const [time, setTime] = useState(30);

  useEffect(() => {
    if (isTimer) {
      if (time <= 0) {
        onTimeOver();
        return;
      }

      const interval = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  return (
    <div className="timer">
      {isTimer ? <h2>Tempo: {time}s</h2> : <h2>Tempo: Infinito</h2>}
    </div>
  );
}
