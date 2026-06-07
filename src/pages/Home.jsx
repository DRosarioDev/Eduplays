import CardGame from "../components/CardGame";

export default function Home() {
  return (
    <>
      {/* <section className="first">
        <div className="text-home">
            <h1>Mind Rush</h1>
            <p >Sfida la tua mente con giochi di logica, memoria e velocità.</p>
          </div>
      </section>
      <section className="second">
        <div className="cards-section">
          <CardGame
            imgGame=""
            title="Math Game"
            desc="Risolvi operazioni aritmetiche il più veloce possibile."
            link="/math"
          />
          <CardGame
            imgGame=""
            title="Color Game"
            desc="Riconosci il colore giusto prima che il tempo finisca."
            link="/color"
          />
        </div>
      </section> */}

      <section className="first-section">
        <div className="container">
          <div className="content-left">
            <h2>Ciao! A cosa giochiamo oggi?</h2>
            <p>Scegli un gioco per iniziare il divertimento!</p>
          </div>
          <div className="content-right">
            <img className="mascotte" src="src/assets/mascotte.png" alt="Mascotte" />
          </div>
        </div>
      </section>

      <section className="second-section">
        <h3>Giochi</h3>
        <div className="cards-container">
          <CardGame
            imgGame="src/assets/math_game.png"
            title="Math Game"
            desc="Risolvi operazioni aritmetiche il più veloce possibile."
            link="/math"
            btnColor="#FFD200"
          />
          <CardGame
            imgGame="src/assets/color_game.png"
            title="Indovina il colore"
            desc="Riconosci il colore giusto prima che il tempo finisca."
            link="/color"
            btnColor="#A8E6CF"
          />
        </div>
      </section>
    </>
  );
}
