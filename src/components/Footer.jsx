import React from "react";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Logo + About */}
        <div className="footer-section">
          <img src="./Images/logo.png" className="logo"></img>
          <p className="footer-about">
            Empowering learners with modern education, technology, 
            and innovative programs for a better future.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Course</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +91 98765-43210</p>
          <p>Location: India</p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social">
            <div className="social-icon">🌐</div>
            <div className="social-icon">📘</div>
            <div className="social-icon">📸</div>
            <div className="social-icon">▶️</div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} FDHS — All Rights Reserved.
      </div>
    </footer>
  );
}
