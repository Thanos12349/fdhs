import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import "../Styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);
  const isActive = (path) => location.pathname === path;

  // List of ventures to map through for the dropdown
  const ventures = [
    { name: "Tuhitu Bliss", path: "/TuhituBlissPage" },
    { name: "One Life Circle", path: "/TuhituOneLifeCircle" },
    { name: "Dietin", path: "/Dietin" },
    { name: "SevaMed", path: "/TuhituSevaMed" },
    { name: "DoctorSahib", path: "/DoctorSahib" },
    { name: "SEYRAYA", path: "/SEyRAYA" },
    { name: "Cloud ICU", path: "/CloudICUPage" },
    { name: "Medumass", path: "/Medumass" },
    { name: "PhysioVera", path: "/Physiovera" },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
        <img src="/Images/logo.png" className="logo" alt="FDHS Logo" />
      </Link>

      {/* Hamburger for Mobile */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        {/* Our Ventures Dropdown */}
        <Dropdown as="li" className="venture-dropdown">
          <Dropdown.Toggle as="a" className="dropdown-link">
            Our Ventures
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {ventures.map((venture, index) => (
              <Dropdown.Item 
                as={Link} 
                to={venture.path} 
                key={index}
                onClick={closeMenu}
                className={isActive(venture.path) ? "active-item" : ""}
              >
                {venture.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}