import { useEffect, useRef, useState } from "react";
import CardMemoryGame from "./CardMemoryGame";
import GameScreen from "./GameScreen";
import { useSound } from "../hooks/useSound";
import { buildMemoryDeck, shuffleArray } from "../utils/memoryDeck";
import { readRecord, saveIfBetter } from "../utils/storage";
import { formatCount } from "../utils/formatCount";
import { getGame } from "../data/games";

function defaultRenderCard(item) {
  if (item.type === "color") return null;
  if (item.type === "image") {
    return <img src={item.value} alt="" className="card-memory-img" />;
  }
  return <p>{item.value}</p>;
}

function defaultCardBgColor(item) {
  return item.type === "color" ? item.value : "#fff";
}

function pickItems(items, pairCount) {
  if (!pairCount || pairCount >= items.length) return items;
  return shuffleArray(items).slice(0, pairCount);
}

export default function MemoryGameEngine({
  gameId,
  items,
  pairCount,
  renderCard = defaultRenderCard,
  cardBgColor = defaultCardBgColor,
}) {
  const game = getGame(gameId);

  const [start, setStart] = useState(true);
  const [first, setFirst] = useState(true);
  const [activeItems, setActiveItems] = useState(() =>
    pickItems(items, pairCount)
  );
  const [cards, setCards] = useState(() => buildMemoryDeck(activeItems));
  const [firstCard, setFirstCard] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matched, setMatched] = useState(0);
  const [best, setBest] = useState(() => readRecord(game?.storageKey));
  const [isNewRecord, setIsNewRecord] = useState(false);

  const { playFlip, playMatch, playWin } = useSound();

  const cardsRef = useRef(cards);
  const timersRef = useRef([]);

  useEffect(() => {
    cardsRef.current = cards;
  }, [cards]);

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const later = (callback, delay) => {
    const timer = setTimeout(callback, delay);
    timersRef.current.push(timer);
    return timer;
  };

  const clearTimers = () => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];
  };

  const handleStart = () => {
    clearTimers();
    const nextItems = pickItems(items, pairCount);
    const deck = buildMemoryDeck(nextItems);
    setActiveItems(nextItems);
    cardsRef.current = deck;
    setCards(deck);
    setFirstCard(null);
    setIsLocked(false);
    setMoves(0);
    setMatched(0);
    setIsNewRecord(false);
    setStart(false);
    setFirst(false);
  };

  const handleCardClick = (index) => {
    if (isLocked || start) return;

    const currentCards = cardsRef.current;
    const card = currentCards[index];
    if (!card || card.isFlipped || card.isMatched) return;

    playFlip();

    if (firstCard === null) {
      const updated = currentCards.map((current, currentIndex) =>
        currentIndex === index ? { ...current, isFlipped: true } : current
      );
      cardsRef.current = updated;
      setCards(updated);
      setFirstCard(index);
      return;
    }

    if (firstCard === index) return;

    const firstIndex = firstCard;
    const updated = currentCards.map((current, currentIndex) =>
      currentIndex === index || currentIndex === firstIndex
        ? { ...current, isFlipped: true }
        : current
    );
    cardsRef.current = updated;
    setCards(updated);
    setFirstCard(null);
    setIsLocked(true);

    const nextMoves = moves + 1;
    setMoves(nextMoves);

    const isMatch = currentCards[firstIndex].id === currentCards[index].id;

    if (isMatch) {
      later(() => {
        const matchedCards = cardsRef.current.map((current, currentIndex) =>
          currentIndex === firstIndex || currentIndex === index
            ? { ...current, isMatched: true }
            : current
        );
        cardsRef.current = matchedCards;
        setCards(matchedCards);
        setIsLocked(false);

        const pairsFound = matchedCards.filter((current) => current.isMatched).length / 2;
        setMatched(pairsFound);
        playMatch();

        if (pairsFound === activeItems.length) {
          later(() => {
            if (saveIfBetter(game.storageKey, nextMoves, "min")) {
              setBest(nextMoves);
              setIsNewRecord(true);
            }
            playWin();
            setStart(true);
            setFirst(false);
          }, 900);
        }
      }, 450);
    } else {
      later(() => {
        const resetCards = cardsRef.current.map((current, currentIndex) =>
          currentIndex === firstIndex || currentIndex === index
            ? { ...current, isFlipped: false }
            : current
        );
        cardsRef.current = resetCards;
        setCards(resetCards);
        setIsLocked(false);
      }, 900);
    }
  };

  const totalPairs = activeItems.length;
  const progress = totalPairs > 0 ? (matched / totalPairs) * 100 : 0;

  return (
    <GameScreen
      meta={game}
      start={start}
      first={first}
      timeEnabled={null}
      feedback={undefined}
      showScore={false}
      showQuit={false}
      best={best}
      isNewRecord={isNewRecord}
      onStart={handleStart}
      scoreVariant="memory"
      scoreStats={{ moves }}
    >
      <div className="memory-summary">
        <div className="memory-stats">
          <span className="memory-chip">
            <span aria-hidden="true">🧩</span> {matched}/{totalPairs} coppie
          </span>
          <span className="memory-chip">
            <span aria-hidden="true">👆</span>{" "}
            {formatCount(moves, "mossa", "mosse")}
          </span>
        </div>
        <div
          className="memory-progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={totalPairs}
          aria-valuenow={matched}
          aria-label={`Coppie trovate: ${matched} su ${totalPairs}`}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="memory-grid">
        {cards.map((card, index) => (
          <CardMemoryGame
            key={card.uid}
            index={index}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            clickHandle={handleCardClick}
            bgColor={cardBgColor(card)}
            renderFace={renderCard(card)}
            label={card.label_it || card.label || ""}
          />
        ))}
      </div>
    </GameScreen>
  );
}
