
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "show-navbar" : ""}`}>
      <div className="nav-container">

        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="brand-logo">BV</div>

          <div className="brand-name">
            <h2>BRIGHT VALLEY</h2>
            <span>COLLEGE</span>
          </div>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/portal" onClick={closeMenu}>Portal</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/login" className="nav-login" onClick={closeMenu}>
            Login
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
