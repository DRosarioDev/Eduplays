import { useState, useCallback } from "react";
import GameScreen from "../components/GameScreen";
import { useGameEngine } from "../hooks/useGameEngine";
import { useSound } from "../hooks/useSound";

export default function MathOperations() {
  const [calculus, setCalculus] = useState("0 + 0");
  const [textBtn1, setTextBtn1] = useState("0");
  const [textBtn2, setTextBtn2] = useState("0");
  const [result, setResult] = useState(0);

  const { playCorrect } = useSound();

  const changeOperation = useCallback(() => {
    const operations = ["+", "-", "*", "/"];
    const newOperation = operations[Math.floor(Math.random() * operations.length)];

    let firstNum, secondNum;
    if (newOperation === "/") {
      secondNum = Math.floor(Math.random() * 9) + 1;
      const multiplier = Math.floor(Math.random() * 9) + 1;
      firstNum = secondNum * multiplier;
    } else {
      firstNum = Math.floor(Math.random() * 10) + 1;
      secondNum = Math.floor(Math.random() * 10) + 1;
    }
    setCalculus(`${firstNum} ${newOperation} ${secondNum}`);

    let correct = eval(firstNum + newOperation + secondNum);
    if (newOperation === "-" && correct < 0) {
      correct = secondNum - firstNum;
      setCalculus(`${secondNum} ${newOperation} ${firstNum}`);
    }

    let wrong = correct;
    while (wrong === correct) {
      wrong = correct + (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);
    }
    const arr = [correct, wrong].sort(() => Math.random() - 0.5);
    setResult(correct);
    setTextBtn1(String(arr[0]));
    setTextBtn2(String(arr[1]));
  }, []);

  const { points, start, first, timeEnabled, handleStart, handleTimerOver, addPoint } =
    useGameEngine(changeOperation);

  const handleClick = (e) => {
    if (Number(e.target.value) === result) {
      playCorrect();
      addPoint();
    }
  };

  return (
    <GameScreen
      title="Operazioni Matematiche"
      start={start}
      first={first}
      points={points}
      timeEnabled={timeEnabled}
      onStart={handleStart}
      onTimerOver={handleTimerOver}
    >
      <h2>{calculus}</h2>
      <div className="buttons-container">
        <button value={textBtn1} className="btn" onClick={(e) => { changeOperation(); handleClick(e); }}>
          {textBtn1}
        </button>
        <button value={textBtn2} className="btn" onClick={(e) => { changeOperation(); handleClick(e); }}>
          {textBtn2}
        </button>
      </div>
    </GameScreen>
  );
}