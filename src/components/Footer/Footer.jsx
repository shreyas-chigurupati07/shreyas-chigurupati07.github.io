import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Shreyas Chigurupati · Built with React
        </p>
        <div className="footer__links">
          <a href="https://github.com/shreyas-chigurupati07" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/shreyas-chigurupati" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:shreyas.chigurupati07@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
