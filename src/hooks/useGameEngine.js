import { useCallback, useEffect, useRef, useState } from "react";
import { readRecord, saveIfBetter } from "../utils/storage";

/**
 * Motore condiviso dei giochi a risposta rapida.
 *
 * - Gestisce punteggio, serie, record, timer e difficoltà.
 * - Mostra un feedback per ~1,6s prima di passare alla domanda successiva.
 * - "Senza tempo" è la modalità predefinita; il tempo resta una scelta.
 */
export function useGameEngine({
  onRound,
  storageKey,
  recordType = "points",
  feedbackDelay,
} = {}) {
  const recordMode = recordType === "moves" ? "min" : "max";

  const [points, setPoints] = useState(0);
  const [start, setStart] = useState(true);
  const [first, setFirst] = useState(true);
  const [timeEnabled, setTimeEnabled] = useState(false);
  const [difficulty, setDifficulty] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(() => readRecord(storageKey));
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [gameKey, setGameKey] = useState(0);

  const pointsRef = useRef(0);
  const timeoutRef = useRef(null);
  const lockedRef = useRef(false);
  const settingsRef = useRef({ timeEnabled: false, difficulty: 0 });
  const onRoundRef = useRef(onRound);
  const feedbackDelayRef = useRef(feedbackDelay);

  useEffect(() => {
    onRoundRef.current = onRound;
  }, [onRound]);

  useEffect(() => {
    feedbackDelayRef.current = feedbackDelay;
  }, [feedbackDelay]);

  useEffect(() => {
    onRoundRef.current = onRound;
  }, [onRound]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleStart = useCallback((nextTimeEnabled, nextDifficulty) => {
    const time =
      typeof nextTimeEnabled === "boolean"
        ? nextTimeEnabled
        : settingsRef.current.timeEnabled;
    const diff =
      typeof nextDifficulty === "number"
        ? nextDifficulty
        : settingsRef.current.difficulty;

    settingsRef.current = { timeEnabled: time, difficulty: diff };
    clearTimeout(timeoutRef.current);
    lockedRef.current = false;
    pointsRef.current = 0;

    setPoints(0);
    setStreak(0);
    setFeedback(null);
    setIsNewRecord(false);
    setTimeEnabled(time);
    setDifficulty(diff);
    setStart(false);
    setFirst(false);
    setGameKey((key) => key + 1);
    onRoundRef.current?.(diff);
  }, []);

  const finishGame = useCallback(() => {
    clearTimeout(timeoutRef.current);
    lockedRef.current = false;

    const finalPoints = pointsRef.current;
    if (finalPoints > 0 && saveIfBetter(storageKey, finalPoints, recordMode)) {
      setBest(finalPoints);
      setIsNewRecord(true);
    }

    setFeedback(null);
    setStart(true);
    setFirst(false);
  }, [recordMode, storageKey]);

  const submitAnswer = useCallback((isCorrect, chosen, nextRound) => {
    if (lockedRef.current) return;
    lockedRef.current = true;

    setFeedback({ type: isCorrect ? "correct" : "wrong", chosen });

    if (isCorrect) {
      pointsRef.current += 1;
      setPoints(pointsRef.current);
      setStreak((current) => current + 1);
    } else {
      setStreak(0);
    }

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () => {
        lockedRef.current = false;
        setFeedback(null);
        nextRound?.();
      },
      isCorrect
        ? (feedbackDelayRef.current?.correct ?? 900)
        : (feedbackDelayRef.current?.wrong ?? 1600)
    );
  }, []);

  return {
    points,
    start,
    first,
    timeEnabled,
    difficulty,
    feedback,
    streak,
    best,
    isNewRecord,
    gameKey,
    handleStart,
    handleTimerOver: finishGame,
    finishGame,
    submitAnswer,
  };
}
