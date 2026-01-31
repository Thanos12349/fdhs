import React from "react";
import "./PhysioVeraPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PhysioVeraPage = () => {
  return (
    <>
      <Navbar />
      <div className="physiovera-page">

        {/* Hero Section */}
        <header className="physiovera-hero">
          <h1>PHYSIOVERA</h1>
          <h2>Restore Movement. Reclaim Independence.</h2>
          <p>
            PhysioVera is a specialized physiotherapy brand focused on injury recovery, pain management, and mobility enhancement helping individuals move better, stronger, and with confidence.
          </p>
          <p>
            We believe recovery is not just about healing pain, but about restoring function and quality of life.
          </p>
        </header>

        {/* What PhysioVera Does */}
        <section className="physiovera-section physiovera-section-light">
          <h3>WHAT PHYSIOVERA DOES</h3>
          <p>
            PhysioVera delivers personalized physiotherapy care designed around individual needs, conditions, and recovery goals.
          </p>
          <p>Our approach supports:</p>
          <ul className="physiovera-list">
            <li>Faster and safer recovery</li>
            <li>Reduced pain and stiffness</li>
            <li>Improved mobility and strength</li>
            <li>Long-term physical independence</li>
          </ul>
        </section>

        {/* Our Approach */}
        <section className="physiovera-section">
          <h3>OUR APPROACH</h3>

          <div className="physiovera-card">
            <h4>Expert Consultations</h4>
            <p>Every journey begins with a thorough assessment by experienced physiotherapists.</p>
          </div>

          <div className="physiovera-card">
            <h4>Tailored Treatment Plans</h4>
            <p>Personalized therapy programs designed for injury type, recovery stage, and lifestyle needs.</p>
          </div>

          <div className="physiovera-card">
            <h4>Sustainable Recovery Focus</h4>
            <p>Care plans aimed at long-term results not temporary relief.</p>
          </div>
        </section>

        {/* Conditions We Support */}
        <section className="physiovera-section physiovera-section-light">
          <h3>CONDITIONS WE SUPPORT</h3>
          <ul className="physiovera-list">
            <li>Musculoskeletal injuries</li>
            <li>Post-surgical rehabilitation</li>
            <li>Chronic pain and stiffness</li>
            <li>Mobility and balance challenges</li>
            <li>Lifestyle and posture-related issues</li>
          </ul>
          <p>
            Each treatment is structured to restore movement while preventing recurrence.
          </p>
        </section>

        {/* Why PhysioVera */}
        <section className="physiovera-section">
          <h3>WHY PHYSIOVERA</h3>
          <ul className="physiovera-list">
            <li>Patient-centric, goal oriented care</li>
            <li>Evidence-based physiotherapy techniques</li>
            <li>Focus on functional recovery and independence</li>
            <li>Designed for continuity, not short term fixes</li>
          </ul>
          <p>
            PhysioVera helps individuals move freely and live actively.
          </p>
        </section>

        {/* Who PhysioVera Is For */}
        <section className="physiovera-section physiovera-section-light">
          <h3>WHO PHYSIOVERA IS FOR</h3>
          <ul className="physiovera-list">
            <li>Individuals recovering from injuries or surgery</li>
            <li>People managing chronic pain</li>
            <li>Seniors aiming to maintain mobility and independence</li>
            <li>Anyone seeking long-term physical wellbeing</li>
          </ul>
        </section>

        {/* Promise */}
        <section className="physiovera-section physiovera-section-promise">
          <h3>THE PHYSIOVERA PROMISE</h3>
          <p>Recovery should be guided, personalized, and lasting.</p>
          <p>
            At PhysioVera, we support your journey toward strength, mobility, and a better quality of life every step of the way.
          </p>
          <p className="physiovera-tagline">PhysioVera - Care that helps you move forward.</p>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default PhysioVeraPage;
