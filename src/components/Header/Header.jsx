import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <span className="header__logo-bracket">{"<"}</span>
          SC
          <span className="header__logo-bracket">{"/>"}</span>
        </Link>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `header__link ${isActive ? "header__link--active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://linkedin.com/in/shreyas-chigurupati"
            target="_blank"
            rel="noreferrer"
            className="header__open-to-work"
          >
            <span className="header__dot" />
            Open to Work
          </a>
        </nav>

        <button
          className={`header__burger ${menuOpen ? "header__burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
