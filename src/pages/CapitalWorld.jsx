import { useState } from "react";
import StartComponent from "../components/StartComponent";
import Timer from "../components/Timer";
import Score from "../components/Score";
import { useSound } from "../hooks/useSound";
import countryFlags from "../assets/flags/country-flag.json";

export default function CapitalWorld() {
  const [result, setResult] = useState(null);
  const [points, setPoints] = useState(0);
  const [start, setStart] = useState(true);
  const [first, setFirst] = useState(true);
  const [currentFlag, setCurrentFlag] = useState(null);
  const [btn1, setBtn1] = useState(null);
  const [btn2, setBtn2] = useState(null);
  const [timeEnabled, setTimeEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState(true);

  const flags = countryFlags.filter((f) => f.difficulty <= difficulty);

  const { playCorrect } = useSound();

  const changeFlag = () => {
    const correct = flags[Math.floor(Math.random() * flags.length)];

    let wrong = correct;
    while (wrong.id === correct.id) {
      wrong = flags[Math.floor(Math.random() * flags.length)];
    }

    const arr = [correct, wrong].sort(() => Math.random() - 0.5);
    setCurrentFlag(correct);
    setResult(correct.id);
    setBtn1(arr[0]);
    setBtn2(arr[1]);
    console.log(btn1);
    console.log(btn1);
  };

  const handleStart = (timeEnabled, diff) => {
    changeFlag();
    setPoints(0);
    setStart(false);
    setFirst(false);
    setTimeEnabled(timeEnabled);
    setDifficulty(diff);
  };

  const handleTimerOver = () => {
    setStart(true);
  };

  const handleClick = (id) => {
    if (id === result) {
      playCorrect();
      setPoints(points + 1);
    }
  };

  return (
    <>
      <div className="container-color" style={{ backgroundColor: "#f4fafd" }}>
        {start && first ? (
          <StartComponent
            title="Indovina il colore"
            isTime={true}
            isDifficulty={true}
            onStart={(timeEnabled,difficulty ) => {
              handleStart(timeEnabled, difficulty);
            }}
          />
        ) : !start ? (
          <div>
            <div className="game-header">
              <Timer onTimeOver={handleTimerOver} isTimer={timeEnabled} />
              <div className="points">Score: {points}</div>
            </div>
            <div className="game-container">
              <img
                src={currentFlag?.flag}
                alt="Bandiera"
                style={{ width: "180px", height: "auto", borderRadius: "8px" }}
              />
              <div className="buttons-container">
                <button
                  className="btn"
                  onClick={() => {
                    handleClick(btn1?.id);
                    changeFlag();
                  }}
                >
                  {btn1?.capital_it}
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    handleClick(btn2?.id);
                    changeFlag();
                  }}
                >
                  {btn2?.capital_it}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Score points={points} onStart={handleStart} isPoint={true} />
        )}
      </div>
    </>
  );
}
