function Tile({ children, blank = false }) {
  return (
    <span className={`card-art-tile ${blank ? "card-art-tile--blank" : ""}`}>
      {children}
    </span>
  );
}

function Mini({ children, className = "" }) {
  return <span className={`card-art-mini ${className}`}>{children}</span>;
}

/**
 * Illustrazioni leggere e coerenti per tutte le card dei giochi.
 * Usano gli stessi colori e gli stessi simboli dei giochi, senza caricare
 * immagini pesanti.
 */
export default function GameArt({ game }) {
  const { art, emoji } = game;
  let content;

  switch (art) {
    case "sequence":
      content = (
        <span className="card-art-row">
          <Tile>2</Tile>
          <Tile>4</Tile>
          <Tile>6</Tile>
          <Tile blank>?</Tile>
        </span>
      );
      break;
    case "double":
      content = (
        <span className="card-art-row">
          <span className="card-art-pill">×2</span>
          <span className="card-art-pill card-art-pill--alt">÷2</span>
        </span>
      );
      break;
    case "letter":
      content = (
        <span className="card-art-row">
          <Tile>C</Tile>
          <Tile>A</Tile>
          <Tile blank>?</Tile>
          <Tile>A</Tile>
        </span>
      );
      break;
    case "syllables":
      content = (
        <span className="card-art-row">
          <span className="card-art-chip">CA</span>
          <span className="card-art-sep">·</span>
          <span className="card-art-chip">SA</span>
          <Mini>👏</Mini>
        </span>
      );
      break;
    case "verb":
      content = (
        <span className="card-art-row">
          <span className="card-art-pill">oggi</span>
          <span className="card-art-op">→</span>
          <span className="card-art-pill card-art-pill--alt">domani</span>
        </span>
      );
      break;
    case "h-sound":
      content = (
        <span className="card-art-row">
          <Tile>H</Tile>
          <span className="card-art-chip">ho</span>
          <span className="card-art-op">/</span>
          <span className="card-art-chip">o</span>
        </span>
      );
      break;
    case "double-consonants":
      content = (
        <span className="card-art-row">
          <span className="card-art-pill">TT</span>
          <span className="card-art-chip">gatto</span>
        </span>
      );
      break;
    case "gl-sound":
      content = (
        <span className="card-art-row">
          <span className="card-art-pill">GLI</span>
          <span className="card-art-chip">figlio</span>
        </span>
      );
      break;
    case "operations":
      content = (
        <span className="card-art-row">
          <Tile>7</Tile>
          <span className="card-art-op">+</span>
          <Tile>5</Tile>
          <Tile blank>?</Tile>
        </span>
      );
      break;
    case "multiplication":
      content = (
        <span className="card-art-row">
          <Tile>6</Tile>
          <span className="card-art-op">×</span>
          <Tile>4</Tile>
          <Tile blank>?</Tile>
        </span>
      );
      break;
    case "compare":
      content = (
        <span className="card-art-row">
          <Tile>8</Tile>
          <span className="card-art-pill">&gt;</span>
          <Tile>5</Tile>
        </span>
      );
      break;
    case "synonym":
      content = (
        <span className="card-art-row">
          <span className="card-art-chip">felice</span>
          <span className="card-art-op">=</span>
          <span className="card-art-chip">contento</span>
        </span>
      );
      break;
    case "antonym":
      content = (
        <span className="card-art-row">
          <span className="card-art-chip">caldo</span>
          <span className="card-art-op">↔</span>
          <span className="card-art-chip">freddo</span>
        </span>
      );
      break;
    case "anagram":
      content = (
        <span className="card-art-row">
          <Tile>O</Tile>
          <Tile>L</Tile>
          <Tile>S</Tile>
          <Tile>E</Tile>
          <Mini>🔀</Mini>
        </span>
      );
      break;
    case "flag":
      content = (
        <span className="card-art-row">
          <span className="card-art-flag" />
          <span className="card-art-label">?</span>
        </span>
      );
      break;
    case "capital":
      content = (
        <span className="card-art-row">
          <Mini>🌍</Mini>
          <span className="card-art-label">Roma</span>
        </span>
      );
      break;
    case "memory-flag":
      content = (
        <span className="card-art-row">
          <Tile>🚩</Tile>
          <Tile blank>?</Tile>
        </span>
      );
      break;
    case "colors":
      content = (
        <span className="card-art-row">
          <span
            className="card-art-swatch"
            style={{ backgroundColor: "#E63946" }}
          />
          <span
            className="card-art-swatch"
            style={{ backgroundColor: "#FFD200" }}
          />
          <span
            className="card-art-swatch"
            style={{ backgroundColor: "#1E5BD6" }}
          />
        </span>
      );
      break;
    case "memory-colors":
      content = (
        <span className="card-art-row">
          <Tile>🔴</Tile>
          <Tile blank>?</Tile>
        </span>
      );
      break;
    case "region-capitals":
      content = (
        <span className="card-art-row">
          <span className="card-art-chip">Lazio</span>
          <span className="card-art-op">→</span>
          <span className="card-art-label">Roma</span>
        </span>
      );
      break;
    case "region-from-capital":
      content = (
        <span className="card-art-row">
          <span className="card-art-chip">Roma</span>
          <span className="card-art-op">→</span>
          <span className="card-art-label">Lazio</span>
        </span>
      );
      break;
    case "region-areas":
      content = (
        <span className="card-art-row">
          <span className="card-art-chip">Nord</span>
          <span className="card-art-chip">Centro</span>
          <span className="card-art-chip">Sud</span>
        </span>
      );
      break;
    case "mix":
      content = (
        <span className="card-art-row card-art-row--mix">
          <span
            className="card-art-swatch"
            style={{ backgroundColor: "#FFD200" }}
          />
          <span className="card-art-op">+</span>
          <span
            className="card-art-swatch"
            style={{ backgroundColor: "#1E5BD6" }}
          />
          <span className="card-art-op">=</span>
          <span
            className="card-art-swatch"
            style={{ backgroundColor: "#2E9E4F" }}
          />
        </span>
      );
      break;
    case "odd":
      content = (
        <span className="card-art-row">
          <span className="card-art-mini-grid">
            <Mini>🍎</Mini>
            <Mini>🍌</Mini>
            <Mini>🍇</Mini>
            <Mini>🥕</Mini>
          </span>
          <Mini className="card-art-magnifier">🔍</Mini>
        </span>
      );
      break;
    case "shapes":
      content = (
        <span className="card-art-row">
          <Mini>🔴</Mini>
          <Mini>⭐</Mini>
          <Mini>🔺</Mini>
          <span className="card-art-question">?</span>
        </span>
      );
      break;
    case "animals":
      content = (
        <span className="card-art-mini-grid card-art-mini-grid--animals">
          <Mini>🐶</Mini>
          <Mini>🐱</Mini>
          <Mini>🐼</Mini>
          <Mini>🦊</Mini>
        </span>
      );
      break;
    case "english-animals":
      content = (
        <span className="card-art-row">
          <Mini>🐶</Mini>
          <span className="card-art-op">→</span>
          <span className="card-art-chip">dog</span>
        </span>
      );
      break;
    case "english-colors":
      content = (
        <span className="card-art-row">
          <span
            className="card-art-swatch"
            style={{ backgroundColor: "#E53935" }}
          />
          <span className="card-art-op">→</span>
          <span className="card-art-chip">red</span>
        </span>
      );
      break;
    case "english-numbers":
      content = (
        <span className="card-art-row">
          <Tile>3</Tile>
          <span className="card-art-op">→</span>
          <span className="card-art-chip">three</span>
        </span>
      );
      break;
    case "english-school":
      content = (
        <span className="card-art-mini-grid">
          <Mini>📘</Mini>
          <Mini>✏️</Mini>
          <Mini>🎒</Mini>
          <Mini>📏</Mini>
        </span>
      );
      break;
    default:
      content = <span className="card-art-emoji">{emoji}</span>;
  }

  return (
    <div className={`card-art card-art--${art || "default"}`} aria-hidden="true">
      <span className="card-art-spark card-art-spark--one">✦</span>
      <span className="card-art-spark card-art-spark--two">✦</span>
      {content}
    </div>
  );
}
