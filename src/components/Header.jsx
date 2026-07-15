"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-main">ETRA</span>
          <span className="brand-sub">UNIVERSE</span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#universe" onClick={closeMenu}>
            Our Universe
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a href="#contact" className="header-cta" onClick={closeMenu}>
            Let&apos;s Connect
          </a>
        </nav>

        <button
          type="button"
          className="menu-button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}