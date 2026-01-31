import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaBell,
  FaDatabase,
  FaHospital,
  FaShieldAlt,
  FaChartLine,
  FaCloud
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CloudICUPage.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const CloudICUPage = () => {
  return (
    <>
      <Navbar />

      <div className="cloud-icu-page">

        {/* HERO */}
        <section className="cloud-icu-hero">
          <Motion.div
            className="cloud-icu-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <FaCloud className="cloud-icu-hero-icon" />
            <h1 className="cloud-icu-title">CLOUD ICU</h1>
            <h2 className="cloud-icu-subtitle">
              Intelligent Critical Care. Connected in Real Time.
            </h2>
            <p className="cloud-icu-description">
              A smart, technology-driven critical care platform delivering
              consistent, high-quality ICU care anytime, anywhere.
            </p>
          </Motion.div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="cloud-icu-section cloud-icu-section-glass">
          <h3 className="cloud-icu-section-title">CORE CAPABILITIES</h3>

          <div className="cloud-icu-grid">
            <div className="cloud-icu-card">
              <FaHeartbeat className="cloud-icu-card-icon" />
              <h4>Real-Time Monitoring</h4>
              <p>Continuous ICU monitoring with device integration.</p>
            </div>

            <div className="cloud-icu-card">
              <FaUserMd className="cloud-icu-card-icon" />
              <h4>Tele-ICU Command Center</h4>
              <p>Expert clinicians supervising care remotely.</p>
            </div>

            <div className="cloud-icu-card">
              <FaBell className="cloud-icu-card-icon" />
              <h4>Intelligent Alerts</h4>
              <p>Early warning systems for rapid intervention.</p>
            </div>

            <div className="cloud-icu-card">
              <FaDatabase className="cloud-icu-card-icon" />
              <h4>EMR / HIS Integration</h4>
              <p>Seamless data flow with hospital systems.</p>
            </div>

            <div className="cloud-icu-card">
              <FaHospital className="cloud-icu-card-icon" />
              <h4>Remote Clinical Support</h4>
              <p>24/7 guidance for ICU teams.</p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="cloud-icu-section cloud-icu-section-dark">
          <h3 className="cloud-icu-section-title">HOW CLOUD ICU HELPS</h3>

          <div className="cloud-icu-grid">
            <div className="cloud-icu-highlight-card">
              <FaChartLine />
              <h4>Better Outcomes</h4>
              <p>Faster detection, fewer complications.</p>
            </div>

            <div className="cloud-icu-highlight-card">
              <FaShieldAlt />
              <h4>Enhanced Safety</h4>
              <p>Consistent ICU standards & oversight.</p>
            </div>

            <div className="cloud-icu-highlight-card">
              <FaUserMd />
              <h4>Higher Efficiency</h4>
              <p>Reduced clinician workload.</p>
            </div>

            <div className="cloud-icu-highlight-card">
              <FaCloud />
              <h4>Lower Costs</h4>
              <p>Smarter utilization without compromising care.</p>
            </div>
          </div>
        </section>

        {/* PROMISE */}
        <section className="cloud-icu-section cloud-icu-promise">
          <h3 className="cloud-icu-section-title">THE CLOUD ICU PROMISE</h3>
          <p className="cloud-icu-promise-text">
            Connected clinicians. Smarter systems. Better critical care.
            No ICU works in isolation anymore.
          </p>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default CloudICUPage;
