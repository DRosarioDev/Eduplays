import CardGame from "../components/CardGame";
import mascotte from "../assets/thumbnails/mascotte.png";
import mathGame from "../assets/thumbnails/math_game.webp";
import colorGame from "../assets/thumbnails/color_game.webp";
import memoryGame from "../assets/thumbnails/memory_game.webp";
import flagGame from "../assets/thumbnails/flag_game.webp";
import multiplicationGame from "../assets/thumbnails/multiplication_game.webp";
import greaterOrLesser from "../assets/thumbnails/greater_or_lesser.webp";
import worldCapital from "../assets/thumbnails/world_capital.webp";
import synonymIta from "../assets/thumbnails/synonym_ita.webp";
import antonymIta from "../assets/thumbnails/antonym_ita.webp";
import memoryFlag from "../assets/thumbnails/memory_flag.webp";
import anagramGame from "../assets/thumbnails/anagram_game.webp";

import { usePreloadImages } from "../hooks/usePreloadImages.js";

export default function Home() {
  usePreloadImages([
    mascotte,
    mathGame,
    colorGame,
    memoryGame,
    flagGame,
    multiplicationGame,
    greaterOrLesser,
    worldCapital,
    synonymIta,
    antonymIta,
    memoryFlag,
  ]);

  return (
    <>
      <section className="first-section">
        <div className="container">
          <div className="content-left">
            <h2>Ciao! A cosa giochiamo oggi?</h2>
            <p>Scegli un gioco per iniziare il divertimento!</p>
          </div>
          <div className="content-right">
            <img className="mascotte" src={mascotte} alt="Mascotte" />
          </div>
        </div>
      </section>

      <section className="second-section">
        <h2>Matematica</h2>
        <div className="cards-container">
          <CardGame
            imgGame={mathGame}
            title="Matematica facile"
            desc="Allenati con operazioni e quiz matematici"
            link="/math/operations"
            btnColor="#FFD200"
          />
          <CardGame
            imgGame={multiplicationGame}
            title="Tabelline"
            desc="Impara e ripassa le moltiplicazioni in modo divertente"
            link="/math/multiplication"
            btnColor="#FFD200"
          />
          <CardGame
            imgGame={greaterOrLesser}
            title="Maggiore o minore"
            desc="Confronta numeri e scopri il valore corretto"
            link="/math/greater-or-lesser"
            btnColor="#FFD200"
          />
        </div>
      </section>
      <section className="second-section">
        <h2>Italiano</h2>
        <div className="cards-container">
          <CardGame
            imgGame={synonymIta}
            title="Sinonimi italiani"
            desc="Trova i sinonimi giusti e amplia il vocabolario"
            link="/italian/synonym"
            btnColor="#ff8686"
          />
          <CardGame
            imgGame={antonymIta}
            title="Contrari italiani"
            desc="Scopri i contrari perfetti con un gioco semplice"
            link="/italian/antonym"
            btnColor="#ff8686"
          />
          <CardGame
            imgGame={anagramGame}
            title="Anagrammi"
            desc="Ricomponi la parola nascosta tra le lettere mescolate."
            link="/italian/anagram"
            btnColor="#ff8686"
          />
        </div>
      </section>

      <section className="second-section">
        <h2>Geografia</h2>
        <div className="cards-container">
          <CardGame
            imgGame={flagGame}
            title="Indovina le bandiere"
            desc="Riconosci le bandiere e scopri i paesi"
            link="/geography/flag"
            btnColor="#86bfff"
          />
          <CardGame
            imgGame={worldCapital}
            title="Capitali del mondo"
            desc="Impara le capitali divertendoti"
            link="/geography/world-capital"
            btnColor="#86bfff"
          />
          <CardGame
            imgGame={memoryFlag}
            title="Memory bandiere"
            desc="Trova le coppie di bandiere"
            link="/memory/flag"
            btnColor="#86bfff"
          />
        </div>
      </section>

      <section className="second-section">
        <h2>Colori</h2>
        <div className="cards-container">
          <CardGame
            imgGame={colorGame}
            title="Indovina i colori"
            desc="Associa il colore alla giusta tonalità"
            link="/color"
            btnColor="#A8E6CF"
          />
          <CardGame
            imgGame={memoryGame}
            title="Memory colori"
            desc="Trova le coppie di colori giuste"
            link="/memory/color"
            btnColor="#A8E6CF"
          />
        </div>
      </section>
    </>
  );
}
