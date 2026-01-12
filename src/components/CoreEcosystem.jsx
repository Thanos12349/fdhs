import React from "react";
import "../Styles/CoreEcosystem.css";

const CoreEcosystem = () => {
  return (
    <section className="ecosystem">
      <div className="ecosystem-container">

        {/* Core Verticals */}
        <div className="ecosystem-header">
          <h2>Our Core Verticals</h2>
          <p>Focused platforms driving holistic, life-stage health outcomes.</p>
        </div>

        <div className="verticals-grid">
          <div className="vertical-card">
            <span className="vertical-tag">Wellness</span>
            <p>
              Preventive health, lifestyle balance, recovery support, and
              long-term well-being solutions.
            </p>
          </div>

          <div className="vertical-card">
            <span className="vertical-tag">Education</span>
            <p>
              Future-ready healthcare education, training, and capability
              building for professionals.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="ecosystem-vision">
          <h3>One Vision. Many Solutions.</h3>
          <p>
            Each FDHS platform operates independently yet integrates seamlessly
            within the broader ecosystem. Together, they represent a unified
            commitment to continuous care, preventive living, and improved
            quality of life across every stage of health.
          </p>
        </div>

        {/* Get Involved */}
        <div className="get-involved">
          <h3>Get Involved</h3>
          <p className="get-involved-sub">
            FDHS invites collaboration across multiple dimensions
          </p>

          <div className="involvement-grid">
            <div className="involvement-card">
              <h4>Healthcare Providers</h4>
              <p>
                Hospitals, clinics, and specialists seeking to integrate
                digital, connected, and preventive care solutions.
              </p>
            </div>

            <div className="involvement-card">
              <h4>Educators & Institutions</h4>
              <p>
                Universities, colleges, and training centers enhancing medical
                and allied health education.
              </p>
            </div>

            <div className="involvement-card">
              <h4>Technology Partners</h4>
              <p>
                Healthtech, AI, IoT, and smart system innovators contributing
                to a unified ecosystem.
              </p>
            </div>

            <div className="involvement-card">
              <h4>Investors & Philanthropists</h4>
              <p>
                Individuals and organizations passionate about building
                sustainable health systems.
              </p>
            </div>

            <div className="involvement-card">
              <h4>Volunteers & Community Leaders</h4>
              <p>
                Champions of senior wellness, preventive care, and community
                engagement.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreEcosystem;
