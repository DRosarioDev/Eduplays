export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-title">Eduplays v0.6.2-alpha</p>
        <p className="footer-desc">Sfida la tua mente con giochi di logica e velocità.</p>
      </div>
      <div className="footer-links">
        <a className="footer-link" href="/aiuto">Aiuto</a>
        <span className="footer-divider">|</span>
        <a
          className="footer-link iubenda-noiframe iubenda-embed"
          href="https://www.iubenda.com/privacy-policy/29612354"
          title="Privacy Policy"
        >
          Privacy Policy
        </a>
        <span className="footer-divider">|</span>
        <a
          className="footer-link iubenda-noiframe iubenda-embed"
          href="https://www.iubenda.com/privacy-policy/29612354/cookie-policy"
          title="Cookie Policy"
        >
          Cookie Policy
        </a>
      </div>
      <p className="footer-copy">© 2026 Eduplays. Tutti i diritti riservati.</p>
    </footer>
  );
}