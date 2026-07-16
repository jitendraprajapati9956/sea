import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#work" },
  { label: "Blog", href: "#courses" },
  { label: "Contact", href: "/contact" }, 
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-mark">SE</span>
          <span className="navbar__logo-text">
            SHILP
            <small>ENGINEERS</small>
          </span>
        </a>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#enroll" className="btn btn-primary navbar__cta">
            Get A Quote
          </a>
        </nav>

        <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
