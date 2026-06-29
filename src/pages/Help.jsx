import { Link } from "react-router-dom";

export default function Help() {
  return (
    <>
      <section className="first-section">
        <div className="container">
          <div className="content-left">
            <h2>Aiuto</h2>
            <p>Trova qui le regole dei giochi e i contatti per supporto.</p>
          </div>
        </div>
      </section>

      <section className="first-section">
        <h2>Regole dei giochi</h2>
        <div className="cards-container">
          <div
            className="game-card"
            style={{ height: "auto", padding: "20px" }}
          >
            <div className="card-top">
              <i
                className="fa-solid fa-calculator"
                style={{ fontSize: "40px", margin: "10px 0" }}
              ></i>
              <div className="text-prop">
                <p className="card-title">Math Game</p>
                <p className="card-desc">
                  Ti viene mostrata un'operazione aritmetica e due possibili
                  risultati. Scegli quello corretto prima che il tempo finisca!
                  Ogni risposta giusta vale 1 punto.
                </p>
              </div>
            </div>
          </div>

          <div
            className="game-card"
            style={{ height: "auto", padding: "20px" }}
          >
            <div className="card-top">
              <i
                className="fa-solid fa-palette"
                style={{ fontSize: "40px", margin: "10px 0" }}
              ></i>
              <div className="text-prop">
                <p className="card-title">Indovina il colore</p>
                <p className="card-desc">
                  Ti viene mostrato il nome di un colore e due riquadri
                  colorati. Seleziona il riquadro con il colore corretto prima
                  che il tempo scada! Ogni risposta giusta vale 1 punto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="first-section">
        <h2>Contatti</h2>
        <div
          className="container"
          style={{ alignItems: "center", textAlign: "center" }}
        >
          <p>Hai trovato un bug o vuoi darci un feedback? Contattaci!</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <a
              className="btn"
              href="mailto:domenicorosario.alberti5@gmail.com"
              style={{
                backgroundColor: "#FFD200",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              <i
                className="fa-regular fa-envelope"
                style={{ marginRight: "8px" }}
              ></i>
              supporto@eduplays.it
            </a>
            <a
              className="btn"
              href="https://github.com/DRosarioDev/MindRush"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: "#fff",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              <i
                className="fa-brands fa-github"
                style={{ marginRight: "8px" }}
              ></i>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
