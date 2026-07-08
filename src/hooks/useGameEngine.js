import { useState, useCallback } from "react";

export function useGameEngine(onRound) {
  const [points, setPoints] = useState(0);
  const [start, setStart] = useState(true);
  const [first, setFirst] = useState(true);
  const [timeEnabled, setTimeEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState(0);

  const handleStart = useCallback(
    (timeEnable = true, diff = difficulty) => {
      onRound?.(diff);
      setPoints(0);
      setStart(false);
      setFirst(false);
      setTimeEnabled(timeEnable);
      setDifficulty(diff);
    },
    [onRound, difficulty]
  );

  const handleTimerOver = useCallback(() => {
    setStart(true);
  }, []);

  const addPoint = useCallback(() => {
    setPoints((p) => p + 1);
  }, []);

  return {
    points,
    start,
    first,
    timeEnabled,
    difficulty,
    handleStart,
    handleTimerOver,
    addPoint,
  };
}