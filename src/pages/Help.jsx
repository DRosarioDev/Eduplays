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
        <div className="cards-container rules-container">
          <div className="game-card rule-card">
            <div className="card-top">
              <i className="fa-solid fa-calculator"></i>
              <div className="text-prop">
                <p className="card-title">Operazioni Matematiche</p>
                <p className="card-desc">
                  Ti viene mostrata un'operazione aritmetica e due possibili
                  risultati. Scegli quello corretto prima che il tempo finisca!
                  Ogni risposta giusta vale 1 punto.
                </p>
              </div>
            </div>
          </div>

          <div className="game-card rule-card">
            <div className="card-top">
              <i className="fa-solid fa-xmark"></i>
              <div className="text-prop">
                <p className="card-title">Tabelline</p>
                <p className="card-desc">
                  Ti viene mostrata una moltiplicazione e due possibili
                  risultati. Scegli quello corretto prima che il tempo scada!
                  Ogni risposta giusta vale 1 punto.
                </p>
              </div>
            </div>
          </div>

          <div className="game-card rule-card">
            <div className="card-top">
              <i className="fa-solid fa-code-compare"></i>
              <div className="text-prop">
                <p className="card-title">Maggiore o Minore</p>
                <p className="card-desc">
                  Vengono mostrati due numeri: scegli il simbolo corretto
                  ({">"}, {"<"} o {"="}) prima che il tempo finisca. Ogni
                  risposta giusta vale 1 punto.
                </p>
              </div>
            </div>
          </div>

          <div className="game-card rule-card">
            <div className="card-top">
              <i className="fa-solid fa-palette"></i>
              <div className="text-prop">
                <p className="card-title">Indovina il colore</p>
                <p className="card-desc">
                  Ti viene mostrato il nome di un colore e due riquadri
                  colorati. Seleziona quello corretto prima che il tempo scada!
                  Ogni risposta giusta vale 1 punto.
                </p>
              </div>
            </div>
          </div>

          <div className="game-card rule-card">
            <div className="card-top">
              <i className="fa-solid fa-clone"></i>
              <div className="text-prop">
                <p className="card-title">Memory Colori</p>
                <p className="card-desc">
                  Una griglia di carte coperte: giranne due alla volta e
                  trova tutte le coppie di colori uguali per vincere.
                </p>
              </div>
            </div>
          </div>

          <div className="game-card rule-card">
            <div className="card-top">
              <i className="fa-solid fa-flag"></i>
              <div className="text-prop">
                <p className="card-title">Indovina le bandiere</p>
                <p className="card-desc">
                  Ti viene mostrata la bandiera di un paese e due possibili
                  nomi. Scegli quello corretto prima che il tempo scada!
                  Ogni risposta giusta vale 1 punto.
                </p>
              </div>
            </div>
          </div>

          <div className="game-card rule-card">
            <div className="card-top">
              <i className="fa-solid fa-earth-europe"></i>
              <div className="text-prop">
                <p className="card-title">Capitali del mondo</p>
                <p className="card-desc">
                  Ti viene mostrata la bandiera di un paese e due possibili
                  capitali. Scegli quella corretta prima che il tempo scada!
                  Ogni risposta giusta vale 1 punto.
                </p>
              </div>
            </div>
          </div>

          <div className="game-card rule-card">
            <div className="card-top">
              <i className="fa-solid fa-images"></i>
              <div className="text-prop">
                <p className="card-title">Memory Bandiere</p>
                <p className="card-desc">
                  Una griglia di carte coperte: giranne due alla volta e
                  trova tutte le coppie di bandiere uguali per vincere.
                </p>
              </div>
            </div>
          </div>

          <div className="game-card rule-card">
            <div className="card-top">
              <i className="fa-solid fa-equals"></i>
              <div className="text-prop">
                <p className="card-title">Sinonimi italiani</p>
                <p className="card-desc">
                  Ti viene mostrata una parola in italiano e due possibili
                  significati simili. Scegli il sinonimo corretto prima che
                  il tempo scada! Ogni risposta giusta vale 1 punto.
                </p>
              </div>
            </div>
          </div>

          <div className="game-card rule-card">
            <div className="card-top">
              <i className="fa-solid fa-not-equal"></i>
              <div className="text-prop">
                <p className="card-title">Contrari italiani</p>
                <p className="card-desc">
                  Ti viene mostrata una parola in italiano e due possibili
                  significati opposti. Scegli il contrario corretto prima che
                  il tempo scada! Ogni risposta giusta vale 1 punto.
                </p>
              </div>
            </div>
          </div>

          <div className="game-card rule-card">
            <div className="card-top">
              <i className="fa-solid fa-shuffle"></i>
              <div className="text-prop">
                <p className="card-title">Anagrammi</p>
                <p className="card-desc">
                  Le lettere di una parola sono mescolate: toccale nell'ordine
                  giusto per ricomporla. Usa "Aiuto" per un suggerimento. Ogni
                  parola indovinata vale 1 punto.
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
              href="mailto:supporto@eduplays.it"
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
