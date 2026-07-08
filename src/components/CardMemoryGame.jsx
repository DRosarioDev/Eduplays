export default function CardMemoryGame({
  isFlipped,
  isMatched,
  clickHandle,
  index,
  bgColor = "#fff",   
  renderFace,          
}) {
  return (
    <div
      className={`card-memory-game ${isFlipped ? "flipped" : ""} ${isMatched ? "matched" : ""}`}
      onClick={() => clickHandle(index)}
      style={{
        backgroundColor: !isFlipped ? "#ffd200" : bgColor,
        boxShadow: !isFlipped ? "inset 0 0 7px 7px #cea800" : "",
      }}
    >
      {isFlipped && renderFace}
    </div>
  );
}