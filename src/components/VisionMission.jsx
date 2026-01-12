import React from "react";
import "../Styles/VisionMission.css";

const VisionMission = () => {
  return (
    <section className="vision-mission">
      <div className="container">
        <div className="card">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-text">
            To create a future where access to care is simple, systems are
            reliable, and support is continuous across every stage of life.
            A future where people feel supported not just during illness,
            but throughout their lifelong health journey through learning,
            prevention, care, recovery, and sustained well-being.
          </p>
        </div>

        <div className="card">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            To build a connected, ethical, and scalable life-stage health
            ecosystem that integrates:
          </p>

          <ul className="mission-list">
            <li>Digital & Connected Healthcare Systems</li>
            <li>Wellness Living, Recovery, Assisted & Independent Living</li>
            <li>Education, Training & Capability Building</li>
            <li>Nutrition, Lifestyle & Preventive Health Solutions</li>
          </ul>

          <p className="section-text highlight">
            FDHS is committed to enabling access, coordination, recovery,
            dignity, independence, and long-term wellness across every stage
            of life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
