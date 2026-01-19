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
        <section className="hero">
          <Motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <FaCloud className="hero-icon" />
            <h1>CLOUD ICU</h1>
            <h2>Intelligent Critical Care. Connected in Real Time.</h2>
            <p>
              A smart, technology-driven critical care platform delivering
              consistent, high-quality ICU care anytime, anywhere.
            </p>
          </Motion.div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="section glass">
          <h3>CORE CAPABILITIES</h3>
          <div className="grid">
            <div className="card">
              <FaHeartbeat />
              <h4>Real-Time Monitoring</h4>
              <p>Continuous ICU monitoring with device integration.</p>
            </div>

            <div className="card">
              <FaUserMd />
              <h4>Tele-ICU Command Center</h4>
              <p>Expert clinicians supervising care remotely.</p>
            </div>

            <div className="card">
              <FaBell />
              <h4>Intelligent Alerts</h4>
              <p>Early warning systems for rapid intervention.</p>
            </div>

            <div className="card">
              <FaDatabase />
              <h4>EMR / HIS Integration</h4>
              <p>Seamless data flow with hospital systems.</p>
            </div>

            <div className="card">
              <FaHospital />
              <h4>Remote Clinical Support</h4>
              <p>24/7 guidance for ICU teams.</p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="section dark">
          <h3>HOW CLOUD ICU HELPS</h3>
          <div className="grid">
            <div className="highlight-card">
              <FaChartLine />
              <h4>Better Outcomes</h4>
              <p>Faster detection, fewer complications.</p>
            </div>

            <div className="highlight-card">
              <FaShieldAlt />
              <h4>Enhanced Safety</h4>
              <p>Consistent ICU standards & oversight.</p>
            </div>

            <div className="highlight-card">
              <FaUserMd />
              <h4>Higher Efficiency</h4>
              <p>Reduced clinician workload.</p>
            </div>

            <div className="highlight-card">
              <FaCloud />
              <h4>Lower Costs</h4>
              <p>Smarter utilization without compromising care.</p>
            </div>
          </div>
        </section>

        {/* PROMISE */}
        <section className="section promise">
          <h3>THE CLOUD ICU PROMISE</h3>
          <p>
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
