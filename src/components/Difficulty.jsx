const LEVELS = [
  { value: 0, label: "Base", stars: 1 },
  { value: 1, label: "Facile", stars: 2 },
  { value: 2, label: "Medio", stars: 3 },
  { value: 3, label: "Difficile", stars: 4 },
  { value: 4, label: "Esperto", stars: 5 },
];

export default function Difficulty({ value, onChange, max = 4 }) {
  const levels = LEVELS.slice(0, Math.min(max + 1, LEVELS.length));

  return (
    <fieldset className="setting-group">
      <legend>Difficoltà</legend>
      <div
        className="difficulty-grid"
        style={{ "--level-count": levels.length }}
      >
        {levels.map((level) => (
          <button
            key={level.value}
            type="button"
            className="difficulty-btn"
            aria-pressed={value === level.value}
            onClick={() => onChange(level.value)}
          >
            <span className="difficulty-stars" aria-hidden="true">
              {"★".repeat(level.stars)}
            </span>
            <span className="difficulty-label">{level.label}</span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}
