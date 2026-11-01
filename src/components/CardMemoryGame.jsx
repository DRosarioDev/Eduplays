export default function CardMemoryGame({
  isFlipped,
  isMatched,
  clickHandle,
  index,
  bgColor = "#fff",
  renderFace,
  label = "",
}) {
  const accessibleLabel = isMatched
    ? `Coppia trovata${label ? `: ${label}` : ""}`
    : isFlipped
      ? `Carta scoperta${label ? `: ${label}` : ""}`
      : "Carta coperta";

  return (
    <button
      type="button"
      className={`memory-card ${isFlipped ? "is-flipped" : ""} ${
        isMatched ? "is-matched" : ""
      }`}
      onClick={() => clickHandle(index)}
      disabled={isFlipped || isMatched}
      aria-label={accessibleLabel}
      aria-pressed={isFlipped}
    >
      <span className="memory-card-inner" aria-hidden="true">
        <span className="memory-face memory-face--back">
          <span className="memory-back-mark">?</span>
        </span>
        <span
          className="memory-face memory-face--front"
          style={{ backgroundColor: bgColor }}
        >
          {renderFace}
          {isMatched && (
            <span className="memory-check">
              <i className="fa-solid fa-check" />
            </span>
          )}
        </span>
      </span>
    </button>
  );
}
