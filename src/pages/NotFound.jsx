import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container-color" style={{ backgroundColor: "#f4fafd" }}>
      <div className="game-not-started">
        <i
          className="fa-solid fa-face-frown"
          style={{ fontSize: "50px" }}
        ></i>
        <h1 style={{ margin: 0 }}>404</h1>
        <h2>Pagina non trovata</h2>
        <p style={{ margin: 0 }}>
          Ops! La pagina che cerchi non esiste o è stata spostata.
        </p>
        <div className="buttons-row">
          <button className="btn" onClick={() => navigate("/")}>
            Menu principale
          </button>
          <button className="btn" onClick={() => navigate("/aiuto")}>
            Aiuto
          </button>
        </div>
      </div>
    </div>
  );
}