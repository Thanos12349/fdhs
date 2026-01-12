import React from "react";
import "../Styles/AboutSection.css";

export default function AboutSection() {
  return (
    <div className="about-container">
      <div className="about-left">
        <h2>
          About <span>FDHS</span>
        </h2>
        <p>
         The Federation of Digital Health Sciences (FDHS) is a purpose-driven organization building an integrated, future-ready ecosystem across healthcare delivery, intelligent health systems, wellness living, education, and nourishment. Founded and led by seasoned practitioners with decades of hands-on experience across hospitals, health systems, digital health platforms, and community care models, FDHS is designed to solve real, systemic gaps rather than create isolated services. 
        </p>
        <button className="read-btn">Read More</button>
      </div>

      <div className="about-right">
        <div className="img-grid">
          <img src="/Images/img.webp" alt="img1" />
          <img src="/Images/img.webp" alt="img2" />
          <img src="/Images/img.webp" alt="img3" />
          <img src="/Images/img.webp" alt="img4" />
        </div>
      </div>
    </div>
  );
}