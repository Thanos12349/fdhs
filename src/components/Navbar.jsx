import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
        <img src="/Images/logo.png" className="logo" alt="FDHS Logo" />
      </Link>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        <li className={isActive("/TuhituBlissPage") ? "active" : ""}>
          <Link to="/TuhituBlissPage" onClick={closeMenu}>Tuhitu Bliss</Link>
        </li>

        <li className={isActive("/TuhituOneLifeCircle") ? "active" : ""}>
          <Link to="/TuhituOneLifeCircle" onClick={closeMenu}>One Life Circle</Link>
        </li>

        <li className={isActive("/Dietin") ? "active" : ""}>
          <Link to="/Dietin" onClick={closeMenu}>Dietin</Link>
        </li>

        <li className={isActive("/TuhituSevaMed") ? "active" : ""}>
          <Link to="/TuhituSevaMed" onClick={closeMenu}>SevaMed</Link>
        </li>

        <li className={isActive("/DoctorSahib") ? "active" : ""}>
          <Link to="/DoctorSahib" onClick={closeMenu}>DoctorSahib</Link>
        </li>

        <li className={isActive("/SEyRAYA") ? "active" : ""}>
          <Link to="/SEyRAYA" onClick={closeMenu}>SEYRAYA</Link>
        </li>

        <li className={isActive("/CloudICUPage") ? "active" : ""}>
          <Link to="/CloudICUPage" onClick={closeMenu}>Cloud ICU</Link>
        </li>

        <li className={isActive("/Medumass") ? "active" : ""}>
          <Link to="/Medumass" onClick={closeMenu}>Medumass</Link>
        </li>

        <li className={isActive("/Physiovera") ? "active" : ""}>
          <Link to="/Physiovera" onClick={closeMenu}>PhysioVera</Link>
        </li>
      </ul>
    </nav>
  );
}
