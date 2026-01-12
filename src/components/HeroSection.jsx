import React, { useState } from "react";
import "../Styles/HeroSection.css";

const slides = [
  {
    img: "/Images/img.webp",
    title: "Healthcare Re Imagined, Powered By Technology",
    subtitle:
      "At FDHS, we're making healthcare accessible and future-ready — through tech-powered wellness programs that empower every professional.",
  },
  {
    img: "/Images/img1.webp",
    title: "Empowering Healthcare Professionals",
    subtitle: "Better tools. Better access. Better outcomes.",
  },
  {
    img: "/Images/img2.webp",
    title: "Revolutionizing Patient Care",
    subtitle: "Smart solutions for a healthier tomorrow.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  return (
    <div className="hero-container">
      <img src={slides[index].img} alt="slide" className="hero-img" />

      <div className="hero-content">
        <h1>{slides[index].title}</h1>
        <p>{slides[index].subtitle}</p>
        <button className="hero-btn">Get Certified Now</button>
      </div>

      <div className="dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={i === index ? "dot active-dot" : "dot"}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}
