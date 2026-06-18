import { useState } from "react";
import StartComponent from "../components/StartComponent";
import Timer from "../components/Timer";
import Score from "../components/Score";

import { useSound } from "../hooks/useSound";

export default function Maths() {
  // const selectedColor = [
  //   "#B0C4DE",
  //   "9DC183",
  //   "#E6E6FA",
  //   "#F5F5DC",
  //   "#D3D3D3",
  //   "#AFEEEE",
  //   "#FFE5B4",
  //   "#caffcaff",
  //   "#87CEEB",
  //   "#FFFDD0",
  // ];

  //const [bgColor, setBgColor] = useState(selectedColor[0]);
  const [calculus, setCalculus] = useState("0 + 0");
  const [textBtn1, setTextBtn1] = useState("0");
  const [textBtn2, setTextBtn2] = useState("0");
  const [result, setResult] = useState(0);
  const [points, setPoints] = useState(0);
  const [start, setStart] = useState(true);
  const [first, setFirst] = useState(true);
  const [timeEnabled, setTimeEnabled] = useState(true);
  
  const { playCorrect } = useSound();

  // const changeColor = () => {
  //   const nuovoColore =
  //     selectedColor[Math.floor(Math.random() * selectedColor.length)];
  //   setBgColor(nuovoColore);
  // };

  const changeOperation = () => {
    const operations = ["+", "-", "*", "/"];
    const newOperation =
      operations[Math.floor(Math.random() * operations.length)];

    let firstNum, secondNum;

    if (newOperation == "/") {
      secondNum = Math.floor(Math.random() * 9) + 1; // From 1 to 9
      const multiplier = Math.floor(Math.random() * 9) + 1;
      firstNum = secondNum * multiplier;
      setCalculus(`${firstNum} ${newOperation} ${secondNum}`);
    } else {
      firstNum = Math.floor(Math.random() * 10) + 1;
      secondNum = Math.floor(Math.random() * 10) + 1;
      setCalculus(`${firstNum} ${newOperation} ${secondNum}`);
    }

    let correct = eval(firstNum + newOperation + secondNum);

    if (newOperation == "-" && correct < 0) {
      correct = secondNum - firstNum;
      setCalculus(`${secondNum} ${newOperation} ${firstNum}`);
    }

    let wrong = correct;
    while (wrong === correct) {
      wrong =
        correct +
        (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);
    }
    const arr = [correct, wrong].sort(() => Math.random() - 0.5);
    setResult(correct);
    setTextBtn1(String(arr[0]));
    setTextBtn2(String(arr[1]));
  };

  const handleTimerOver = () => {
    setStart(true);
  };

  const handleStart = (timeEnable) => {
    //changeColor();
    changeOperation();
    setPoints(0);
    setStart(false);
    setFirst(false);
    setTimeEnabled(timeEnable);
  };

  const handleClick = (e) => {
    const valore = e.target.value;
    if (Number(valore) === result) {
      playCorrect();
      setPoints(points + 1);
    }
  };
  return (
    <>
      <div className="container-color" style={{ backgroundColor: "#f4fafd" }}>
        {start && first ? (
          <StartComponent
            title="Math Game"
            onStart={(timeEnable) => {
              handleStart();
              setTimeEnabled(timeEnable);
            }}
            isTime={true}
          />
        ) : !start ? (
          <div>
            <div className="game-header">
              <Timer onTimeOver={handleTimerOver} isTimer={timeEnabled} />
              <div className="points">Score: {points}</div>
            </div>
            <div className="game-container">
              <h2>{calculus}</h2>
              <div className="buttons-container">
                <button
                  value={textBtn1}
                  className="btn"
                  onClick={(e) => {
                    //changeColor();
                    changeOperation();
                    handleClick(e);
                  }}
                >
                  {textBtn1}
                </button>
                <button
                  value={textBtn2}
                  className="btn"
                  onClick={(e) => {
                    //changeColor();
                    changeOperation();
                    handleClick(e);
                  }}
                >
                  {textBtn2}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Score points={points} isPoint={true} onStart={handleStart} />
        )}
      </div>
    </>
  );
}
