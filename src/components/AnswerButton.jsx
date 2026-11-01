export default function AnswerButton({
  children,
  state = "idle",
  onClick,
  className = "",
  label,
  ...rest
}) {
  return (
    <button
      type="button"
      className={`answer-btn answer-btn--${state} ${className}`.trim()}
      onClick={onClick}
      disabled={state !== "idle"}
      aria-label={label}
      {...rest}
    >
      <span className="answer-text">{children}</span>
      {state === "correct" && (
        <i
          className="fa-solid fa-circle-check answer-icon"
          aria-hidden="true"
        />
      )}
      {state === "wrong" && (
        <i
          className="fa-solid fa-circle-xmark answer-icon"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
