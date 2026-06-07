import { Link } from "react-router-dom";

export default function CardGame({ imgGame, title, desc, link, btnColor = "#FFD200" }) {
  return (
    <a href={link} className="link-prop">
      <div className="game-card">
        <div className="card-top">         
          <div className="img-prop">
            {imgGame && <img src={imgGame} alt={title} />}
          </div>
          <div className="text-prop">
            <p className="card-title">{title}</p>
            <p className="card-desc">{desc}</p>
          </div>
        </div>
        <button className="btn" style={{ backgroundColor: btnColor, gap: "10px" }}>
          <i class="fa-solid fa-play" style={{ fontSize: "12px" }}></i> Gioca
        </button>
      </div>
    </a>
  );
}
