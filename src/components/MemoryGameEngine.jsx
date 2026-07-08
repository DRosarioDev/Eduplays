import { useEffect, useState } from "react";
import CardMemoryGame from "./CardMemoryGame";
import Score from "./Score";
import StartComponent from "./StartComponent";
import { useSound } from "../hooks/useSound";
import { buildMemoryDeck } from "../utils/memoryDeck";
import { usePreloadImages } from "../hooks/usePreloadImages";

function defaultRenderCard(item) {
  if (item.type === "color") return null;
  if (item.type === "image")
    return <img src={item.value} alt={item.label || ""} className="card-memory-img" />;
  return <p>{item.value}</p>;
}

function defaultCardBgColor(item) {
  return item.type === "color" ? item.value : "#fff";
}

export default function MemoryGameEngine({
  title,
  items,
  bgColor = "#f4fafd",
  renderCard = defaultRenderCard,
  cardBgColor = defaultCardBgColor,
}) {
  const [start, setStart] = useState(true);
  const [first, setFirst] = useState(true);
  const [cards, setCards] = useState(() => buildMemoryDeck(items));
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  const { playFlip, playMatch, playWin } = useSound();

  const handleStart = () => {
    setCards(buildMemoryDeck(items));
    setFirstCard(null);
    setSecondCard(null);
    setIsLocked(false);
    setStart(false);
    setFirst(false);
  };

  usePreloadImages(
    items.filter((item) => item.type === "image").map((item) => item.value)
  )

  useEffect(() => {
    if (firstCard === null || secondCard === null) return;
    const isMatch = cards[firstCard].id === cards[secondCard].id;
    if (isMatch) return;
    const timer = setTimeout(() => {
      setCards((prev) =>
        prev.map((card, i) =>
          i === firstCard || i === secondCard ? { ...card, isFlipped: false } : card
        )
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

    playFlip();

    const newCards = cards.map((card, i) => (i === index ? { ...card, isFlipped: true } : card));

    if (firstCard === null) {
      setCards(newCards);
      setFirstCard(index);
    } else {
      const isMatch = cards[firstCard].id === cards[index].id;
      if (isMatch) {
        playMatch();
        setCards(newCards);
        setIsLocked(true);
        setTimeout(() => {
          const matchedCards = newCards.map((card, i) =>
            i === firstCard || i === index ? { ...card, isMatched: true } : card
          );
          const allMatched = matchedCards.every((card) => card.isMatched);
          setCards(matchedCards);
          setFirstCard(null);
          setSecondCard(null);
          setIsLocked(false);
          if (allMatched) {
            playWin();
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
    <div className="container-color" style={{ backgroundColor: bgColor }}>
      {start && first ? (
        <StartComponent title={title} onStart={handleStart} isTime={false} />
      ) : !start ? (
        <div>
          <h1 style={{ display: "flex", justifyContent: "center" }}>{title}</h1>
          <div className="game-container memory">
            <div className="memory-game">
              {cards.map((card, index) => (
                <CardMemoryGame
                  key={card.uid}
                  index={index}
                  isFlipped={card.isFlipped}
                  isMatched={card.isMatched}
                  clickHandle={clickHandle}
                  bgColor={cardBgColor(card)}
                  renderFace={renderCard(card)}
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