import { useState, useCallback } from "react";
import GameScreen from "../components/GameScreen";
import { useGameEngine } from "../hooks/useGameEngine";
import { useSound } from "../hooks/useSound";

export default function GreaterOrLesser() {
  const [result, setResult] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const { playCorrect } = useSound();

  const changeOperation = useCallback(() => {
    let firstNum, secondNum;
    firstNum = Math.floor(Math.random() * 100) + 1;
    secondNum = Math.floor(Math.random() * 100) + 1;

    let correct;
    if (firstNum > secondNum) {
      correct = ">";
    } else if (firstNum < secondNum) {
      correct = "<";
    } else {
      correct = "=";
    }
    setFirstNumber(firstNum);
    setSecondNumber(secondNum);
    setResult(correct);
  }, []);

  const {
    points,
    start,
    first,
    timeEnabled,
    handleStart,
    handleTimerOver,
    addPoint,
  } = useGameEngine(changeOperation);

  const handleClick = (e) => {
    if (e.target.value === result) {
      playCorrect();
      addPoint();
    }
  };

  return (
    <GameScreen
      title="Maggiore o Minore?"
      start={start}
      first={first}
      points={points}
      timeEnabled={timeEnabled}
      onStart={handleStart}
      onTimerOver={handleTimerOver}
    >
      <h2>
        {firstNumber} ... {secondNumber}
      </h2>
      <div className="buttons-container">
        <button
          value={">"}
          className="btn"
          onClick={(e) => {
            changeOperation();
            handleClick(e);
          }}
        >
          {">"}
        </button>
        <button
          value={"<"}
          className="btn"
          onClick={(e) => {
            changeOperation();
            handleClick(e);
          }}
        >
          {"<"}
        </button>
        <button
          value={"="}
          className="btn"
          onClick={(e) => {
            changeOperation();
            handleClick(e);
          }}
        >
          {"="}
        </button>
      </div>
    </GameScreen>
  );
}
