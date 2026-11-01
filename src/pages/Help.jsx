import { Link } from "react-router-dom";
import {
  CATEGORIES,
  CATEGORY_ORDER,
  GAMES,
  getGamesByCategory,
} from "../data/games";

const STEPS = [
  {
    emoji: "1",
    title: "Scegli un gioco",
    text: "Dalla home tocca la card del gioco che ti interessa.",
  },
  {
    emoji: "2",
    title: "Decidi il tempo",
    text: "Puoi giocare con calma, senza tempo, oppure metterti alla prova per 30 secondi.",
  },
  {
    emoji: "3",
    title: "Tocca la risposta",
    text: "Dopo ogni risposta vedi subito se è giusta. Poi arriva la domanda successiva.",
  },
];

function tagsFor(game) {
  const tags = [];
  if (game.kind === "memory") {
    tags.push("Trova le coppie");
  } else {
    tags.push(game.timer ? "Con o senza tempo" : "Senza tempo");
  }
  if (game.maxDifficulty !== null) {
    const levels = game.maxDifficulty + 1;
    tags.push(`${levels} ${levels === 1 ? "livello" : "livelli"}`);
  }
  return tags;
}

export default function Help() {
  return (
    <>
      <section className="help-hero">
        <div className="help-hero-card">
          <span className="hero-eyebrow">
            <i className="fa-regular fa-circle-question" aria-hidden="true" />{" "}
            Aiuto
          </span>
          <h1>Regole semplici, giochi alla portata di tutti</h1>
          <p>
            Ogni gioco dura quanto vuoi: scegli &ldquo;Senza tempo&rdquo; per
            giocare con calma, oppure 30 secondi per una sfida veloce. Ogni
            risposta giusta vale 1 punto.
          </p>
          <div className="hero-actions">
            <Link to="/" className="btn btn-primary">
              <i className="fa-solid fa-play" aria-hidden="true" /> Torna ai
              giochi
            </Link>
            <a href="mailto:supporto@eduplays.it" className="btn btn-secondary">
              <i className="fa-regular fa-envelope" aria-hidden="true" />{" "}
              Scrivici
            </a>
          </div>
        </div>
      </section>

      <section className="help-section" aria-labelledby="steps-title">
        <div className="help-section-head">
          <h2 id="steps-title">Come si gioca</h2>
          <p>Tre passi, sempre uguali in tutti i giochi.</p>
        </div>
        <div className="help-steps">
          {STEPS.map((step) => (
            <div className="help-step" key={step.title}>
              <span className="help-step-number" aria-hidden="true">
                {step.emoji}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="help-section" aria-labelledby="rules-title">
        <div className="help-section-head">
          <h2 id="rules-title">Regole dei giochi</h2>
          <p>
            Le regole di tutti i {GAMES.length} giochi, divise per categoria.
          </p>
        </div>

        <div className="rules-wrap">
          {CATEGORY_ORDER.map((categoryId) => {
            const category = CATEGORIES[categoryId];
            const games = getGamesByCategory(categoryId);

            return (
              <div
                className="rules-category"
                key={categoryId}
                style={{
                  "--category": category.color,
                  "--category-ink": category.ink,
                }}
              >
                <h3 className="rules-category-title">
                  <span aria-hidden="true">{category.emoji}</span>{" "}
                  {category.label}
                </h3>

                <div className="rules-grid">
                  {games.map((game) => (
                    <article className="rule-card" key={game.id}>
                      <div className="rule-head">
                        <span className="rule-icon" aria-hidden="true">
                          <i className={game.icon} />
                        </span>
                        <h4>{game.title}</h4>
                      </div>
                      <p className="rule-text">{game.rules}</p>
                      <div className="rule-tags">
                        {tagsFor(game).map((tag) => (
                          <span className="rule-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link to={game.link} className="rule-link">
                        Gioca <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="help-section" aria-labelledby="accessibility-title">
        <div className="help-section-head">
          <h2 id="accessibility-title">Giocare sereni</h2>
          <p>Piccoli accorgimenti pensati per chi ha bisogno di più calma.</p>
        </div>
        <div className="help-tips">
          <div className="help-tip">
            <span aria-hidden="true">⏳</span>
            <div>
              <h3>Senza tempo</h3>
              <p>Nessun conto alla rovescia: decidi tu quando fermarti con il pulsante Fine.</p>
            </div>
          </div>
          <div className="help-tip">
            <span aria-hidden="true">🔊</span>
            <div>
              <h3>Suoni controllabili</h3>
              <p>Il pulsante in alto a destra attiva o disattiva tutti gli effetti sonori.</p>
            </div>
          </div>
          <div className="help-tip">
            <span aria-hidden="true">✅</span>
            <div>
              <h3>Risposte chiare</h3>
              <p>Le risposte giuste sono evidenziate anche con icone e testo, non solo con il colore.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="help-section help-contact" aria-labelledby="contact-title">
        <div className="contact-card">
          <div>
            <h2 id="contact-title">Hai bisogno di una mano?</h2>
            <p>
              Scrivici per segnalare un problema, proporre un gioco o darci un
              suggerimento.
            </p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:supporto@eduplays.it">
              <i className="fa-regular fa-envelope" aria-hidden="true" />{" "}
              supporto@eduplays.it
            </a>
            <a
              className="btn btn-secondary"
              href="https://github.com/DRosarioDev/Eduplays"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github" aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
