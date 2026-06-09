import { useEffect, useState } from "react";
import CardMemoryGame from "../components/CardMemoryGame";
import Score from "../components/Score";
import StartComponent from "../components/StartComponent";

const colors = [
  {
    id: 1,
    colorName: "Bianco",
    colorValue: "#FFFFFF",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 2,
    colorName: "Bianco",
    colorValue: "#FFFFFF",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 3,
    colorName: "Nero",
    colorValue: "#000000",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 4,
    colorName: "Nero",
    colorValue: "#000000",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 5,
    colorName: "Rosso",
    colorValue: "#FF0000",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 6,
    colorName: "Rosso",
    colorValue: "#FF0000",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 7,
    colorName: "Verde",
    colorValue: "#00FF00",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 8,
    colorName: "Verde",
    colorValue: "#00FF00",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 9,
    colorName: "Blu",
    colorValue: "#0000FF",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 10,
    colorName: "Blu",
    colorValue: "#0000FF",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 11,
    colorName: "Giallo",
    colorValue: "#FFFF00",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 12,
    colorName: "Giallo",
    colorValue: "#FFFF00",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 13,
    colorName: "Viola",
    colorValue: "#800080",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 14,
    colorName: "Viola",
    colorValue: "#800080",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 15,
    colorName: "Azzurro",
    colorValue: "#00FFFF",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 16,
    colorName: "Azzurro",
    colorValue: "#00FFFF",
    isFlipped: false,
    isMatched: false,
  },
];

export default function MemoryGame() {
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [start, setStart] = useState(true);
  const [first, setFirst] = useState(true);

  // Fisher Yates Shuffle Algorithm

  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      swap(array, currentIndex, randomIndex);
    }
    return array;
  }

  const [cards, setCards] = useState(() => shuffleCards(colors));

  const handleStart = () => {
    setCards(shuffleCards(colors));
    setFirstCard(null);
    setSecondCard(null);
    setIsLocked(false);
    setStart(false);
    setFirst(false);
  };

  useEffect(() => {
    if (firstCard === null || secondCard === null) return;

    const isMatch =
      cards[firstCard].colorValue === cards[secondCard].colorValue;
    if (isMatch) return;

    const timer = setTimeout(() => {
      setCards((prev) =>
        prev.map((card, i) =>
          i === firstCard || i === secondCard
            ? { ...card, isFlipped: false }
            : card,
        ),
      );
      setFirstCard(null);
      setSecondCard(null);
      setIsLocked(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [firstCard, secondCard]);




function clickHandle(index) {
    if (isLocked) return;
    if (cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = cards.map((card, i) =>
      i === index ? { ...card, isFlipped: true } : card,
    );

    if (firstCard === null) {
      setCards(newCards);
      setFirstCard(index);
    } else {
      const isMatch = cards[firstCard].colorValue === cards[index].colorValue;

      if (isMatch) {
        setCards(newCards);
        setIsLocked(true);
        setTimeout(() => {
          const matchedCards = newCards.map((card, i) =>
            i === firstCard || i === index ? { ...card, isMatched: true } : card,
          );
          const allMatched = matchedCards.every((card) => card.isMatched);
          setCards(matchedCards);
          setFirstCard(null);
          setSecondCard(null);
          setIsLocked(false);
          if (allMatched) {
            setTimeout(() => setStart(true), 100);
          }
        }, 500);

      } else {
        setCards(newCards);
        setSecondCard(index);
        setIsLocked(true);
      }
    }
  }

  return (
    <div className="container-color" style={{ backgroundColor: "#f4fafd" }}>
      {start && first ? (
        <StartComponent title="Memory Game" onStart={handleStart} />
      ) : !start ? (
        <div>
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Memory Game
          </h1>
          <div className="game-container memory">
            <div className="memory-game">
              {cards.map((card, index) => (
                <CardMemoryGame
                  key={card.id}
                  color={card}
                  index={index}
                  isFlipped={card.isFlipped}
                  isMatched={card.isMatched}
                  clickHandle={clickHandle}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Score points={null} isPoint={false} onStart={handleStart} />
      )}
    </div>
  );
}
