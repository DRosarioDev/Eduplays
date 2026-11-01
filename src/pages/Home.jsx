import { Link } from "react-router-dom";
import CardGame from "../components/CardGame";
import mascotte from "../assets/thumbnails/mascotte.png";
import { usePreloadImages } from "../hooks/usePreloadImages.js";
import {
  CATEGORIES,
  CATEGORY_ORDER,
  GAMES,
  getGamesByCategory,
} from "../data/games";
import { readRecord } from "../utils/storage";
import { DIDATTICA_TOTALS } from "../data/didattica";

export default function Home() {
  // Solo la mascotte viene precaricata.
  usePreloadImages([mascotte]);

  return (
    <>
      <section className="home-hero">
        <div className="hero-card">
          <div className="hero-copy">
            <span className="hero-eyebrow">
              <i className="fa-solid fa-star" aria-hidden="true" />{" "}
              {GAMES.length} mini-giochi gratuiti
            </span>
            <h1>Ciao! A cosa giochiamo oggi?</h1>
            <p>
              Scegli un gioco, decidi se vuoi il tempo e inizia subito. Non
              serve registrarsi.
            </p>
            <div className="hero-actions">
              <a href="#giochi" className="btn btn-primary">
                <i className="fa-solid fa-play" aria-hidden="true" /> Scegli un
                gioco
              </a>
              <Link to="/aiuto" className="btn btn-secondary">
                <i
                  className="fa-regular fa-circle-question"
                  aria-hidden="true"
                />{" "}
                Come si gioca
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <img
              className="mascotte"
              src={mascotte}
              alt="La mascotte di Eduplays"
              width="300"
              height="300"
            />
          </div>
        </div>

        <nav className="category-jump" aria-label="Vai a una categoria">
          {CATEGORY_ORDER.map((categoryId) => {
            const category = CATEGORIES[categoryId];
            return (
              <a
                key={categoryId}
                href={`#${categoryId}`}
                className="jump-pill"
                style={{ "--category": category.color }}
              >
                <span aria-hidden="true">{category.emoji}</span>
                {category.label}
              </a>
            );
          })}
        </nav>
      </section>

      <div id="giochi" className="games-wrap">
        {CATEGORY_ORDER.map((categoryId) => {
          const category = CATEGORIES[categoryId];
          const games = getGamesByCategory(categoryId);

          return (
            <section
              key={categoryId}
              id={categoryId}
              className="games-section"
              aria-labelledby={`section-${categoryId}`}
              style={{
                "--category": category.color,
                "--category-ink": category.ink,
              }}
            >
              <div className="section-heading">
                <span className="section-icon" aria-hidden="true">
                  {category.emoji}
                </span>
                <div className="section-copy">
                  <h2 id={`section-${categoryId}`}>{category.label}</h2>
                  <p>{category.description}</p>
                </div>
                <span className="section-count">
                  {games.length} {games.length === 1 ? "gioco" : "giochi"}
                </span>
              </div>

              <div className="cards-grid">
                {games.map((game) => (
                  <CardGame
                    key={game.id}
                    game={game}
                    record={readRecord(game.storageKey)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="home-materials" aria-labelledby="materials-title">
        <div className="materials-band">
          <span className="materials-icon" aria-hidden="true">
            <i className="fa-solid fa-file-pdf" />
          </span>
          <div className="materials-copy">
            <span className="materials-eyebrow">Materiali didattici</span>
            <h2 id="materials-title">Schede e slide da stampare</h2>
            <p>
              {DIDATTICA_TOTALS.lessons} lezioni di italiano, matematica e
              colori, con PDF pronti per la classe e per il ripasso a casa.
            </p>
          </div>
          <Link to="/didattica" className="btn btn-primary">
            <i className="fa-solid fa-download" aria-hidden="true" /> Scarica i
            PDF
          </Link>
        </div>
      </section>

      <section className="home-note" aria-labelledby="note-title">
        <div className="note-card">
          <span className="note-icon" aria-hidden="true">
            ⏳
          </span>
          <div>
            <h2 id="note-title">Hai bisogno di più calma?</h2>
            <p>
              All&apos;inizio di ogni gioco puoi scegliere{" "}
              <strong>Senza tempo</strong>. I suoni si attivano e disattivano
              dal pulsante in alto.
            </p>
          </div>
          <Link to="/aiuto" className="btn btn-secondary">
            Scopri come
          </Link>
        </div>
      </section>
    </>
  );
}
