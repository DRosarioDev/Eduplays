/* eslint-disable no-unused-vars */
import { useState } from "react";
import StartComponent from "../components/StartComponent";
import Timer from "../components/Timer";
import Score from "../components/Score";
import { useSound } from "../hooks/useSound";

export default function Color() {
  const selectedBgColor = [
    "#B0C4DE",
    "9DC183",
    "#E6E6FA",
    "#F5F5DC",
    "#D3D3D3",
    "#AFEEEE",
    "#FFE5B4",
    "#caffcaff",
    "#87CEEB",
    "#FFFDD0",
  ];

  const colors = [
    { colorName: "Bianco", colorValue: "#FFFFFF" },
    { colorName: "Nero", colorValue: "#000000" },
    { colorName: "Rosso", colorValue: "#FF0000" },
    { colorName: "Verde", colorValue: "#00FF00" },
    { colorName: "Blu", colorValue: "#0000FF" },
    { colorName: "Giallo", colorValue: "#FFFF00" },
    { colorName: "Arancione", colorValue: "#FFA500" },
    { colorName: "Viola", colorValue: "#800080" },
    { colorName: "Rosa", colorValue: "#FFC0CB" },
    { colorName: "Grigio", colorValue: "#808080" },
    { colorName: "Azzurro", colorValue: "#00FFFF" },
    { colorName: "Magenta", colorValue: "#FF00FF" },
  ];

  const [result, setResult] = useState("#FFFFFF");
  const [points, setPoints] = useState(0);
  const [start, setStart] = useState(true);
  const [first, setFirst] = useState(true);
  const [bgColor, setBgColor] = useState(selectedBgColor[0]);
  const [color, setColour] = useState(() => {
    Math.floor(Math.random() * colors.length);
  });
  const [textBtn1, setTextBtn1] = useState("White");
  const [textBtn2, setTextBtn2] = useState("Blue");
  const [timeEnabled, setTimeEnabled] = useState(true);

  const { playCorrect } = useSound();

  const changeColor = () => {
    const nuovoColore =
      selectedBgColor[Math.floor(Math.random() * selectedBgColor.length)];
    setBgColor(nuovoColore);
  };

  const changeOperation = () => {
    const newColor =
      colors[Math.floor(Math.random() * colors.length)].colorName;
    let newIDColor = colors.findIndex((c) => c.colorName === newColor);
    newIDColor = colors[newIDColor].colorValue;
    setColour(newColor);
    randomButton(newIDColor);
  };

  const randomButton = (correctValue) => {
    let wrong = correctValue;
    while (wrong === correctValue) {
      wrong = colors[Math.floor(Math.random() * colors.length)].colorValue;
    }
    const arr = [correctValue, wrong].sort(() => Math.random() - 0.5);
    setResult(correctValue);
    setTextBtn1(arr[0]);
    setTextBtn2(arr[1]);
  };

  const handleStart = (timeEnabled) => {
    changeColor();
    changeOperation();
    setPoints(0);
    setStart(false);
    setFirst(false);
    setTimeEnabled(timeEnabled)
  };

  const handleTimerOver = () => {
    setStart(true);
  };

  const handleClick = (e) => {
    const value = e.target.value;
    if (value === result) {
      playCorrect();
      setPoints(points + 1);
    }
  };

  return (
    <>
      <div className="container-color" style={{ backgroundColor: "#f4fafd" }}>
        {start && first ? (
          <StartComponent title="Indovina il colore" isTime={true} onStart={(timeEnabled) => {
            handleStart(timeEnabled);
          }} />
        ) : !start ? (
          <div>
            <div className="game-header">
              <Timer onTimeOver={handleTimerOver} isTimer={timeEnabled}/>
              <div className="points">Score: {points}</div>
            </div>
            <div className="game-container">
              <h2>{color}</h2>
              <div className="buttons-container">
                <button
                  value={textBtn1}
                  className="btn-color"
                  style={{ backgroundColor: textBtn1 }}
                  onClick={(e) => {
                    changeColor();
                    changeOperation();
                    handleClick(e);
                  }}
                />
                <button
                  value={textBtn2}
                  className="btn-color"
                  style={{ backgroundColor: textBtn2 }}
                  onClick={(e) => {
                    changeColor();
                    changeOperation();
                    handleClick(e);
                  }}
                />
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
