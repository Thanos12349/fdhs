import React from "react";
import "../Styles/WhyPartnerFDHS.css";
import imageOne from "/Images/t1.jpg";
import imageTwo from "/Images/image.png";

const WhyPartnerFDHS = () => {
  return (
    <section className="partner-section">
      <div className="partner-container">

        {/* Left Image */}
        <div className="partner-image">
          <img src={imageOne} alt="Healthcare Innovation Ecosystem" />
        </div>

        {/* Content */}
        <div className="partner-content">
          <h2>Why Partner with FDHS?</h2>

          <div className="partner-point">
            <h4>Impactful Innovation</h4>
            <p>
              Participate in initiatives that address systemic healthcare gaps
              rather than delivering isolated, incremental services.
            </p>
          </div>

          <div className="partner-point">
            <h4>Integrated Ecosystem</h4>
            <p>
              Be part of a fully connected care continuum spanning hospitals,
              recovery, wellness, and daily living.
            </p>
          </div>

          <div className="partner-point">
            <h4>Evidence-Based & Scalable Models</h4>
            <p>
              FDHS ventures are designed for measurable outcomes, replication,
              and long-term sustainability.
            </p>
          </div>

          <div className="partner-point highlight">
            <h4>Ethical & Human-Centered Design</h4>
            <p>
              Patient dignity, independence, and emotional well-being are core
              to every FDHS initiative.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="partner-image secondary">
          <img src={imageTwo} alt="Human Centered Care" />
        </div>

      </div>
    </section>
  );
};

export default WhyPartnerFDHS;
