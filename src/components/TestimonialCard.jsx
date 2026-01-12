import React from "react";
import "../Styles/TestimonialCard.css";

export default function TestimonialCard({ image, name, role, review }) {
  return (
    <div className="testimonial-card">
      <div className="profile-section">
        <img src={image} alt={name} className="profile-img" />
        <div>
          <h3 className="profile-name">{name}</h3>
          <p className="profile-role">{role}</p>
        </div>
      </div>

      <p className="review-text">“{review}”</p>

      <div className="stars">
        ⭐⭐⭐⭐⭐
      </div>
    </div>
  );
}
