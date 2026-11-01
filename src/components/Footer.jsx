import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-eduplays.svg";
import { APP_VERSION, APP_TAGLINE } from "../constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img
              src={logo}
              alt="Eduplays"
              className="footer-logo"
              width="146"
              height="37"
            />
            <span className="footer-version">v{APP_VERSION}</span>
          </div>
          <p className="footer-desc">{APP_TAGLINE}</p>
        </div>

        <nav className="footer-links" aria-label="Link utili">
          <Link className="footer-link" to="/didattica">
            Materiali
          </Link>
          <span className="footer-divider" aria-hidden="true">
            ·
          </span>
          <Link className="footer-link" to="/aiuto">
            Aiuto
          </Link>
          <span className="footer-divider" aria-hidden="true">
            ·
          </span>
          <a
            className="footer-link iubenda-noiframe iubenda-embed"
            href="https://www.iubenda.com/privacy-policy/29612354"
            title="Privacy Policy"
          >
            Privacy Policy
          </a>
          <span className="footer-divider" aria-hidden="true">
            ·
          </span>
          <a
            className="footer-link iubenda-noiframe iubenda-embed"
            href="https://www.iubenda.com/privacy-policy/29612354/cookie-policy"
            title="Cookie Policy"
          >
            Cookie Policy
          </a>
        </nav>

        <p className="footer-copy">Contiene immagini generate dall&apos;AI.</p>
        <p className="footer-copy">
          © 2026 Eduplays. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
