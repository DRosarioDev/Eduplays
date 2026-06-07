import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <div className="header-left">
        <Link to="/" className="link-home-prop">
            <h2>Eduplays</h2>
        </Link>
      </div>
      <nav className="header-right">
        <Link className="nav-btn help-btn" to="/aiuto"><i className="fa-regular fa-circle-question"></i> Aiuto</Link>
      </nav>
    </header>
  );
}
