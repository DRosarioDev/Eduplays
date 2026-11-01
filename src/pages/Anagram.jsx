import { useCallback, useState } from "react";
import GameScreen from "../components/GameScreen";
import { useGameEngine } from "../hooks/useGameEngine";
import { useSound } from "../hooks/useSound";
import { getGame } from "../data/games";
import { anagramWordBanks } from "../assets/anagramWords";
import { createWeightedDeck } from "../utils/questionDeck";

const game = getGame("italian-anagram");
const drawWord = createWeightedDeck(anagramWordBanks);

function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex],
      result[currentIndex],
    ];
  }
  return result;
}

function buildLetterTiles(word) {
  let tiles = word.word.split("").map((char, index) => ({
    id: `${index}-${char}-${Math.random().toString(36).slice(2, 7)}`,
    char,
    used: false,
  }));

  tiles = shuffleArray(tiles);

  let attempts = 0;
  while (
    tiles.length > 1 &&
    tiles.map((tile) => tile.char).join("") === word.word &&
    attempts < 10
  ) {
    tiles = shuffleArray(tiles);
    attempts += 1;
  }

  return tiles;
}

function pickWord(difficulty) {
  return drawWord(difficulty);
}

export default function Anagram() {
  const [currentWord, setCurrentWord] = useState(null);
  const [letters, setLetters] = useState([]);
  const [selected, setSelected] = useState([]);
  const [showHint, setShowHint] = useState(false);

  const { playCorrect, playWrong } = useSound();

  const changeWord = useCallback((difficulty = 0) => {
    const word = pickWord(difficulty);
    setCurrentWord(word);
    setLetters(buildLetterTiles(word));
    setSelected([]);
    setShowHint(false);
  }, []);

  const {
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
    handleTimerOver,
    finishGame,
    submitAnswer,
  } = useGameEngine({
    onRound: (diff) => changeWord(diff),
    storageKey: game.storageKey,
  });

  const resetSelection = useCallback(() => {
    setSelected([]);
    setLetters((current) =>
      current.map((tile) => ({ ...tile, used: false }))
    );
  }, []);

  const handleLetterClick = (tile) => {
    if (feedback || !currentWord || tile.used) return;

    const nextSelected = [...selected, tile];
    setLetters((current) =>
      current.map((currentTile) =>
        currentTile.id === tile.id
          ? { ...currentTile, used: true }
          : currentTile
      )
    );
    setSelected(nextSelected);

    if (nextSelected.length === letters.length) {
      const attempt = nextSelected.map((item) => item.char).join("");
      const isCorrect = attempt === currentWord.word;
      if (isCorrect) playCorrect();
      else playWrong();

      submitAnswer(isCorrect, attempt, () => {
        if (isCorrect) {
          changeWord(difficulty);
        } else {
          resetSelection();
        }
      });
    }
  };

  const handleRemoveLast = () => {
    if (feedback || selected.length === 0) return;
    const last = selected[selected.length - 1];
    setSelected((current) => current.slice(0, -1));
    setLetters((current) =>
      current.map((tile) =>
        tile.id === last.id ? { ...tile, used: false } : tile
      )
    );
  };

  const selectedWord = selected.map((tile) => tile.char).join("");

  return (
    <GameScreen
      meta={game}
      start={start}
      first={first}
      points={points}
      timeEnabled={timeEnabled}
      timerKey={gameKey}
      feedback={feedback}
      streak={streak}
      best={best}
      isNewRecord={isNewRecord}
      onStart={handleStart}
      onTimerOver={handleTimerOver}
      onQuit={finishGame}
      wrongFeedback="Ops! Le lettere non sono nell'ordine giusto."
    >
      <p className="prompt-hint">Ricomponi la parola toccando le lettere.</p>

      <div
        className={`anagram-slots ${
          feedback ? `anagram-slots--${feedback.type}` : ""
        }`}
        role="status"
        aria-live="polite"
        aria-label={`Parola composta: ${
          selectedWord ? selectedWord.split("").join(" ") : "vuota"
        }`}
      >
        {letters.map((tile, index) => (
          <span className="letter-slot" key={`slot-${index}`}>
            {selected[index] ? selected[index].char.toUpperCase() : ""}
          </span>
        ))}
      </div>

      <div className="anagram-letters">
        {letters.map((tile) => (
          <button
            key={tile.id}
            type="button"
            className={`letter-tile ${tile.used ? "is-used" : ""}`}
            onClick={() => handleLetterClick(tile)}
            disabled={tile.used || Boolean(feedback)}
            aria-label={`Lettera ${tile.char.toUpperCase()}`}
          >
            {tile.char.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="anagram-controls">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleRemoveLast}
          disabled={selected.length === 0 || Boolean(feedback)}
        >
          <i className="fa-solid fa-delete-left" aria-hidden="true" />
          Cancella
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setShowHint(true)}
          disabled={showHint}
        >
          <i className="fa-regular fa-lightbulb" aria-hidden="true" />
          Indizio
        </button>
      </div>

      {showHint && currentWord && (
        <p className="hint-text" role="status">
          <i className="fa-solid fa-lightbulb" aria-hidden="true" />
          {currentWord.synonym ? (
            <>Significa come &ldquo;{currentWord.synonym}&rdquo;.</>
          ) : (
            <>
              Inizia con la lettera{" "}
              <strong>{currentWord.word[0].toUpperCase()}</strong>.
            </>
          )}
        </p>
      )}
    </GameScreen>
  );
}
