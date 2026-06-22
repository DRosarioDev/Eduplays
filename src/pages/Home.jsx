import CardGame from "../components/CardGame";
import mascotte from "../assets/mascotte.png";
import mathGame from "../assets/math_game.png";
import colorGame from "../assets/color_game.png";
import memoryGame from "../assets/memory_game.png";
import multiplicationGame from "../assets/multiplication_game.png";

export default function Home() {
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
        <h3>Giochi</h3>
        <div className="cards-container">
          <CardGame
            imgGame={mathGame}
            title="Giochi di matematica"
            desc="Risolvi operazioni aritmetiche il più veloce possibile."
            link="/math"
            btnColor="#FFD200"
          />

          <CardGame
            imgGame={multiplicationGame}
            title="Moltiplicazioni"
            desc="Risolvi le moltiplicazioni il più veloce possibile."
            link="/math/multiplication"
            btnColor="#FFD200"
          />
          <CardGame
            imgGame={colorGame}
            title="Indovina il colore"
            desc="Riconosci il colore giusto prima che il tempo finisca."
            link="/color"
            btnColor="#A8E6CF"
          />
          <CardGame
            imgGame={memoryGame}
            title="Giochi di memoria"
            desc="Trova la coppia di colori corretta"
            link="/memory"
            btnColor="#86bfff"
          />
        </div>
      </section>
    </>
  );
}
