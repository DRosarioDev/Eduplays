import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-eduplays.svg";
import { useSoundSettings } from "../hooks/useSoundSettings";
import { useNotification } from "./NotificationContext";

export default function Header() {
  const { soundEnabled, toggleSound } = useSoundSettings();
  const { setMessage } = useNotification();

  const handleSoundToggle = () => {
    const nextState = !soundEnabled;
    toggleSound();
    setMessage(nextState ? "Suoni attivati" : "Suoni disattivati");
  };

  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Eduplays, torna alla home">
        <img
          src={logo}
          alt="Eduplays"
          className="brand-logo"
          width="180"
          height="46"
        />
      </Link>

      <nav className="header-actions" aria-label="Azioni">
        <button
          type="button"
          className="icon-btn"
          onClick={handleSoundToggle}
          aria-pressed={soundEnabled}
          aria-label="Effetti sonori"
          title={soundEnabled ? "Disattiva i suoni" : "Attiva i suoni"}
        >
          <i
            className={`fa-solid ${
              soundEnabled ? "fa-volume-high" : "fa-volume-xmark"
            }`}
            aria-hidden="true"
          />
        </button>

        <Link
          to="/didattica"
          className="header-materials"
          aria-label="Materiali didattici da scaricare"
        >
          <i className="fa-solid fa-download" aria-hidden="true" />
          <span>Materiali</span>
        </Link>

        <Link to="/aiuto" className="header-help" aria-label="Aiuto">
          <i className="fa-regular fa-circle-question" aria-hidden="true" />
          <span>Aiuto</span>
        </Link>
      </nav>
    </header>
  );
}
