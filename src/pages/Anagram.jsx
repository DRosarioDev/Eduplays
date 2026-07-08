/* eslint-disable react-hooks/purity */
import StartComponent from "../components/StartComponent";
import Timer from "../components/Timer";
import Score from "../components/Score";
import { useSound } from "../hooks/useSound";
import italianWords from "../assets/words_it.json";
import { useState } from "react";

// Fisher-Yates shuffle
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
  return arr;
}

function buildLetterTiles(word) {
  let tiles = word.word.split("").map((char, i) => ({
    id: `${i}-${char}-${Math.random().toString(36).slice(2, 7)}`,
    char,
    used: false,
  }));

  tiles = shuffleArray(tiles);

  let attempts = 0;
  while (
    tiles.length > 1 &&
    tiles.map((t) => t.char).join("") === word.word &&
    attempts < 10
  ) {
    tiles = shuffleArray(tiles);
    attempts++;
  }

  return tiles;
}

export default function Anagram() {
  const [start, setStart] = useState(true);
  const [first, setFirst] = useState(true);
  const [timeEnabled, setTimeEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState(0);
  const [points, setPoints] = useState(0);

  const [currentWord, setCurrentWord] = useState(null);
  const [letters, setLetters] = useState([]);
  const [selected, setSelected] = useState([]);
  const [feedback, setFeedback] = useState(null); // "correct" | "wrong" | null
  const [showHint, setShowHint] = useState(false);

  const { playCorrect } = useSound();

  const pickWord = (diff) => {
    const filtered = italianWords.filter((w) => w.difficulty <= diff);
    const pool = filtered.length > 0 ? filtered : italianWords;
    return pool[Math.floor(Math.random() * pool.length)];
  };

  const changeWord = (diff = difficulty) => {
    const word = pickWord(diff);
    setCurrentWord(word);
    setLetters(buildLetterTiles(word));
    setSelected([]);
    setFeedback(null);
    setShowHint(false);
  };

  const handleTimerOver = () => {
    setStart(true);
  };

  const handleStart = (timeEnable, diff) => {
    setPoints(0);
    setDifficulty(diff);
    setTimeEnabled(timeEnable);
    changeWord(diff);
    setStart(false);
    setFirst(false);
  };

const handleLetterClick = (tileId) => {
  if (feedback) return;
  const tile = letters.find((t) => t.id === tileId && !t.used);
  if (!tile) return;

  const newLetters = letters.map((t) =>
    t.id === tileId ? { ...t, used: true } : t
  );
  const newSelected = [...selected, tile];

  setLetters(newLetters);
  setSelected(newSelected);

  if (newSelected.length === newLetters.length) {
    const attempt = newSelected.map((t) => t.char).join("");

    if (attempt === currentWord.word) {
      playCorrect();
      setFeedback("correct");
      setPoints((p) => p + 1);
      setTimeout(() => changeWord(difficulty), 900);
    } else {
      setFeedback("wrong");
      setTimeout(() => {
        setSelected([]);
        setLetters((prev) => prev.map((t) => ({ ...t, used: false })));
        setFeedback(null);
      }, 900);
    }
  }
};
  const handleRemoveLast = () => {
    if (feedback || selected.length === 0) return;
    const last = selected[selected.length - 1];
    setSelected((prev) => prev.slice(0, -1));
    setLetters((prev) =>
      prev.map((t) => (t.id === last.id ? { ...t, used: false } : t))
    );
  };
  return (
    <div className="container-color" style={{ backgroundColor: "#f4fafd" }}>
      {start && first ? (
        <StartComponent
          title="Anagrammi"
          isTime={true}
          isDifficulty={true}
          onStart={(timeEnable, diff) => handleStart(timeEnable, diff)}
        />
      ) : !start ? (
        <div>
          <div className="game-header">
            <Timer onTimeOver={handleTimerOver} isTimer={timeEnabled} />
            <div className="points">Score: {points}</div>
          </div>

          <div className="game-container anagram">
            <div
              className={`anagram-slots ${feedback ? feedback : ""}`}
            >
              {letters.map((tile, i) => (
                <div key={`slot-${i}`} className="letter-slot">
                  {selected[i] ? selected[i].char.toUpperCase() : ""}
                </div>
              ))}
            </div>

            <div className="anagram-letters">
              {letters.map((tile) => (
                <button
                  key={tile.id}
                  className={`letter-tile ${tile.used ? "used" : ""}`}
                  onClick={() => handleLetterClick(tile.id)}
                  disabled={tile.used || !!feedback}
                >
                  {tile.char.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="anagram-controls">
              <button className="btn" onClick={handleRemoveLast}>
                <i className="fa-solid fa-delete-left" style={{ marginRight: "8px" }}></i>
                Cancella
              </button>
              <button className="btn" onClick={() => setShowHint(true)}>
                <i className="fa-regular fa-lightbulb" style={{ marginRight: "8px" }}></i>
                Aiuto
              </button>
            </div>

            {showHint && currentWord && (
              <p className="hint-text">
                Suggerimento: significa come "{currentWord.synonym}"
              </p>
            )}
          </div>
        </div>
      ) : (
        <Score points={points} isPoint={true} onStart={handleStart} />
      )}
    </div>
  );
}