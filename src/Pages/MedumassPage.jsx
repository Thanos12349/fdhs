import React from "react";
import "./MedumassPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MedumassPage = () => {
    return (
        <>
            <Navbar />
            <div className="medumass-page">
                
                {/* Hero Section */}
                <header className="medumass-hero">
                    <h1>MEDUMASS</h1>
                    <h2>Learning Knowledge. Practicing Care. Building Competence.</h2>
                    <p>
                        Together, MEDIKSHA and MEDEXCEL HUB form an integrated medical education and clinical training ecosystem, bridging the gap between academic learning and real world clinical practice.
                    </p>
                </header>

                {/* MEDIKSHA Section */}
                <section className="medumass-section medumass-mediksha">
                    <h3>MEDIKSHA</h3>
                    <p><strong>CBME Aligned Digital Learning for Medical Education</strong></p>
                    <p>
                        MEDIKSHA is a competency based medical education (CBME) aligned digital platform designed for:
                    </p>
                    <ul className="medumass-list">
                        <li>MBBS students</li>
                        <li>FMGE aspirants</li>
                        <li>Medical institutions</li>
                    </ul>
                    <p>
                        It delivers structured, exam focused learning through modern digital tools that enhance understanding and retention.
                    </p>
                    <h4>KEY FEATURES</h4>
                    <ul className="medumass-list">
                        <li>CBME-aligned curriculum mapping</li>
                        <li>Structured subject wise content</li>
                        <li>3D learning tools for anatomy and concepts</li>
                        <li>Integrated assessments and evaluations</li>
                        <li>Exam-oriented resources for FMGE and university preparation</li>
                    </ul>
                    <p>MEDIKSHA ensures students learn with clarity, structure, and confidence.</p>
                </section>

                {/* MEDEXCEL HUB Section */}
                <section className="medumass-section medumass-medexcel">
                    <h3>MEDEXCEL HUB</h3>
                    <p><strong>Hands On Clinical Skills & Simulation Training</strong></p>
                    <p>
                        MEDEXCEL HUB is a modular clinical training platform focused on skill development, simulation, and certification for:
                    </p>
                    <ul className="medumass-list">
                        <li>Doctors</li>
                        <li>Nurses</li>
                        <li>Paramedics</li>
                        <li>Healthcare professionals in training</li>
                    </ul>
                    <p>
                        It emphasizes learning by doing, preparing professionals for real clinical environments.
                    </p>
                    <h4>CORE OFFERINGS</h4>
                    <ul className="medumass-list">
                        <li>Clinical skills workshops</li>
                        <li>Simulation based training modules</li>
                        <li>OSCE assessments</li>
                        <li>Structured certifications</li>
                        <li>Institution-ready training programs</li>
                    </ul>
                    <p>MEDEXCEL HUB transforms theoretical knowledge into clinical competence.</p>
                </section>

                {/* Ecosystem Section */}
                <section className="medumass-section medumass-ecosystem">
                    <h3>ONE ECOSYSTEM. COMPLETE TRAINING.</h3>
                    <p>
                        Together, MEDIKSHA and MEDEXCEL HUB deliver:
                    </p>
                    <ul className="medumass-list">
                        <li>Academic excellence through digital learning</li>
                        <li>Practical readiness through hands-on training</li>
                        <li>Standardized assessments and outcomes</li>
                        <li>Scalable solutions for institutions and individuals</li>
                    </ul>
                    <p>
                        From classroom to clinic, learning becomes continuous, connected, and outcome driven.
                    </p>
                </section>

                {/* Who this ecosystem is for */}
                <section className="medumass-section medumass-who">
                    <h3>WHO THIS ECOSYSTEM IS FOR</h3>
                    <ul className="medumass-list">
                        <li>Medical students and FMGE aspirants</li>
                        <li>Teaching hospitals and medical colleges</li>
                        <li>Nursing and paramedical institutes</li>
                        <li>Healthcare organizations focused on skill quality</li>
                    </ul>
                </section>

                {/* The Promise */}
                <section className="medumass-section medumass-promise">
                    <h3>THE PROMISE</h3>
                    <p>
                        Education should not stop at theory, and training should not begin without foundation.
                    </p>
                    <ul className="medumass-list1">
                        <li>Knowledge ready</li>
                        <li>Skill competent</li>
                        <li>Clinically confident</li>
                    </ul>
                    <p>Learn better. Train smarter. Practice safer.</p>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default MedumassPage;
