import React from "react";
import "../Styles/HeroStats.css";

export default function HeroStats() {
  return (
    <div className="hero-stats-container">

     
      <div className="left-section">
        <video className="hero-video" autoPlay loop muted>
          <source src="/Images/FDHS.mp4" type="video/mp4" />
        </video>

        <div className="message-bubble">
          <p>
            Connecting generations, <br /> Enriching lives.
          </p>
        </div>
      </div>

      <div className="right-section">
        <div className="stat-card blue">
          <h3>AR/VR/MR</h3>
          <p>3D Technology Based</p>
        </div>

        <div className="stat-card1 white">
          <h2>125+</h2>
          <p>Educators and Trainer</p>
        </div>

        <div className="stat-card blue">
          <h3>30+</h3>
          <p>Institutions Validated</p>
        </div>

        <div className="stat-card1 white">
          <h3>4 Offices</h3>
          <p>PAN India & UK</p>
        </div>
      </div>
    </div>
  );
}
