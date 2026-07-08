export function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
  }
  return result;
}

/**
 * Generation of deck
 */
export function buildMemoryDeck(items) {
  const deck = items.flatMap((item) => [
    { ...item, uid: `${item.id}-a`, isFlipped: false, isMatched: false },
    { ...item, uid: `${item.id}-b`, isFlipped: false, isMatched: false },
  ]);
  return shuffleArray(deck);
}