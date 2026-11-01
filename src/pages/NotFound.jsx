import { Link } from "react-router-dom";
import mascotte from "../assets/thumbnails/mascotte.png";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <section className="not-found-card">
        <img src={mascotte} alt="" className="not-found-mascot" width="160" height="160" />
        <p className="end-kicker">Errore 404</p>
        <h1>Pagina non trovata</h1>
        <p>
          Ops! La pagina che cerchi non esiste o è stata spostata. Torna ai
          giochi e riparti da lì.
        </p>
        <div className="end-actions">
          <Link to="/" className="btn btn-primary">
            <i className="fa-solid fa-house" aria-hidden="true" /> Torna ai giochi
          </Link>
          <Link to="/aiuto" className="btn btn-secondary">
            <i className="fa-regular fa-circle-question" aria-hidden="true" />{" "}
            Aiuto
          </Link>
        </div>
      </section>
    </div>
  );
}
