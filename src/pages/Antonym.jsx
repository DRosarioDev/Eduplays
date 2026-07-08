import { useState } from "react";
import StartComponent from "../components/StartComponent";
import Timer from "../components/Timer";
import Score from "../components/Score";
import { useSound } from "../hooks/useSound";
import italianWords from "../assets/words_it.json";

export default function Synonym() {
  const [result, setResult] = useState(null);
  const [points, setPoints] = useState(0);
  const [start, setStart] = useState(true);
  const [first, setFirst] = useState(true);
  const [currentWord, setCurrentWord] = useState(null);
  const [btn1, setBtn1] = useState(null);
  const [btn2, setBtn2] = useState(null);
  const [timeEnabled, setTimeEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState(true);

  const words = italianWords.filter((w) => w.difficulty <= difficulty);

  const { playCorrect } = useSound();

  const changeWord = () => {
    const correct = words[Math.floor(Math.random() * words.length)];

    const arr =
      Math.random() < 0.5
        ? [correct.antonym, correct.synonym]
        : [correct.synonym, correct.antonym];
    setCurrentWord(correct);
    setResult(correct.antonym);
    setBtn1(arr[0]);
    setBtn2(arr[1]);
    console.log(btn1);
    console.log(btn1);
  };

  const handleStart = (timeEnabled, diff) => {
    changeWord();
    setPoints(0);
    setStart(false);
    setFirst(false);
    setTimeEnabled(timeEnabled);
    setDifficulty(diff);
  };

  const handleTimerOver = () => {
    setStart(true);
  };

  const handleClick = (value) => {
    if (value === result) {
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
            onStart={(timeEnabled, difficulty) => {
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
              <h2>
                {currentWord?.word[0].toUpperCase() +
                  currentWord?.word.slice(1, currentWord.length)}
              </h2>
              <div className="buttons-container">
                <button
                  className="btn"
                  onClick={() => {
                    handleClick(btn1);
                    changeWord();
                  }}
                >
                  {btn1}
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    handleClick(btn2);
                    changeWord();
                  }}
                >
                  {btn2}
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
