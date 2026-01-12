import React, { useState } from "react";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item) => {
    setActive(item);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <img src="./Images/logo.png" className="logo" alt="FDHS Logo" />

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li className={active === "home" ? "active" : ""} onClick={() => handleClick("home")}>
          Home
        </li>
        <li className={active === "about" ? "active" : ""} onClick={() => handleClick("about")}>
          About
        </li>
        <li className={active === "course" ? "active" : ""} onClick={() => handleClick("course")}>
          Course
        </li>
        <li className={active === "contact" ? "active" : ""} onClick={() => handleClick("contact")}>
          Contact Us
        </li>
      </ul>
    </nav>
  );
}
