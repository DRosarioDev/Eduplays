import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/games";
import { DIDATTICA, DIDATTICA_TOTALS } from "../data/didattica";

const TIPS = [
  {
    icon: "fa-solid fa-print",
    title: "Stampa la scheda",
    text: "La pagina 1 ha la teoria spiegata con parole semplici, la pagina 2 gli esercizi, la sfida finale e le soluzioni. Stampa solo ciò che ti serve.",
  },
  {
    icon: "fa-solid fa-display",
    title: "Proietta le slide",
    text: "Sette slide in formato 16:9 per la LIM, una lezione registrata o un ripasso di classe.",
  },
  {
    icon: "fa-solid fa-circle-check",
    title: "Correggi insieme",
    text: "Le soluzioni e la sfida finale sono in fondo alla scheda: puoi correggere con calma, senza mettere fretta.",
  },
];

function DownloadCard({ lesson }) {
  const category = CATEGORIES[lesson.category];

  return (
    <article
      id={lesson.id}
      className="download-card"
      style={{
        "--category": category.color,
        "--category-ink": category.ink,
      }}
    >
      <header className="download-card-head">
        <span className="download-card-emoji" aria-hidden="true">
          {lesson.emoji}
        </span>
        <div className="download-card-heading">
          <span className="download-card-area">{category.label}</span>
          <h3>{lesson.title}</h3>
        </div>
      </header>

      <p className="download-card-desc">{lesson.description}</p>

      <ul className="download-topics" aria-label="Argomenti della lezione">
        {lesson.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>

      <div className="download-files">
        {lesson.files.map((file) => (
          <a
            key={file.href}
            className="download-file"
            href={file.href}
            download
            type="application/pdf"
            aria-label={`Scarica ${file.label} di ${lesson.title} (PDF, ${file.size})`}
          >
            <span className="download-file-icon" aria-hidden="true">
              <i className="fa-solid fa-file-pdf" />
            </span>
            <span className="download-file-copy">
              <strong>{file.label}</strong>
              <span>{file.meta}</span>
            </span>
            <span className="download-file-size">{file.size}</span>
            <i
              className="fa-solid fa-arrow-down download-file-arrow"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>

      {lesson.game ? (
        <Link className="download-game" to={lesson.game.link}>
          <i className="fa-solid fa-play" aria-hidden="true" />
          Apri il gioco: {lesson.game.title}
        </Link>
      ) : null}
    </article>
  );
}

export default function Didattica() {
  return (
    <>
      <section className="didattica-hero">
        <div className="didattica-hero-card">
          <div className="didattica-hero-copy">
            <span className="hero-eyebrow">
              <i className="fa-solid fa-download" aria-hidden="true" /> Materiali
              gratuiti
            </span>
            <h1>Schede e slide pronte da scaricare</h1>
            <p>
              {DIDATTICA_TOTALS.lessons} lezioni di italiano, matematica e
              colori, con una scheda A4 da stampare e una presentazione 16:9 per
              la classe. Ogni scheda spiega la teoria in modo semplice, poi
              propone esercizi e una sfida finale con le soluzioni in fondo.
              Nessuna registrazione.
            </p>
            <div className="hero-actions">
              <a href="#download" className="btn btn-primary">
                <i className="fa-solid fa-file-pdf" aria-hidden="true" />
                Sfoglia i materiali
              </a>
              <Link to="/" className="btn btn-secondary">
                <i className="fa-solid fa-play" aria-hidden="true" /> Torna ai
                giochi
              </Link>
            </div>

            <ul className="didattica-facts">
              <li>
                <strong>{DIDATTICA_TOTALS.lessons}</strong> lezioni
              </li>
              <li>
                <strong>{DIDATTICA_TOTALS.files}</strong> PDF
              </li>
              <li>
                <strong>A4</strong> + <strong>16:9</strong>
              </li>
              <li>
                <strong>100%</strong> gratis
              </li>
            </ul>
          </div>

          <div className="didattica-hero-art" aria-hidden="true">
            <div className="paper-sheet paper-sheet--back">
              <span className="paper-tag">16:9</span>
              <span className="paper-line" />
              <span className="paper-line" />
              <span className="paper-line paper-line--short" />
            </div>
            <div className="paper-sheet paper-sheet--front">
              <span className="paper-tag">A4</span>
              <span className="paper-title">Scheda</span>
              <span className="paper-line paper-line--long" />
              <span className="paper-line" />
              <span className="paper-line" />
              <span className="paper-line paper-line--short" />
              <span className="paper-badge">PDF</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="download"
        className="didattica-section"
        aria-labelledby="download-title"
      >
        <div className="didattica-section-head">
          <h2 id="download-title">Scegli una lezione</h2>
          <p>
            Ogni lezione ha due PDF: la scheda per chi impara e le slide per chi
            insegna. Scaricali singolarmente, quando ti servono.
          </p>
        </div>

        <div className="download-grid">
          {DIDATTICA.map((lesson) => (
            <DownloadCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>

      <section
        className="didattica-section"
        aria-labelledby="uso-title"
      >
        <div className="didattica-section-head">
          <h2 id="uso-title">Come usarli</h2>
          <p>Tre modi semplici per portare i materiali in classe o a casa.</p>
        </div>

        <div className="didattica-tips">
          {TIPS.map((tip) => (
            <div className="didattica-tip" key={tip.title}>
              <span className="didattica-tip-icon" aria-hidden="true">
                <i className={tip.icon} />
              </span>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="didattica-section didattica-note">
        <div className="didattica-note-card">
          <span className="didattica-note-icon" aria-hidden="true">
            <i className="fa-solid fa-heart" />
          </span>
          <div>
            <h2>Materiali liberi per imparare</h2>
            <p>
              Puoi stamparli, proiettarli e condividerli con alunni e famiglie.
              Se ti servono altre lezioni, scrivici: le aggiungeremo volentieri.
            </p>
          </div>
          <div className="didattica-note-actions">
            <a className="btn btn-primary" href="mailto:supporto@eduplays.it">
              <i className="fa-regular fa-envelope" aria-hidden="true" />{" "}
              Scrivici
            </a>
            <Link to="/" className="btn btn-secondary">
              Gioca ora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
