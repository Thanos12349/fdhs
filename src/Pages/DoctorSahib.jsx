import React from "react";
import "./DoctorSahib.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DoctorSahib() {
    return (
        <>
            <Navbar />
            <div className="doctor-page">

                {/* HERO */}
                <section className="doctor-hero">
                    <h1>Doctor SAHIB</h1>
                    <h2>Digital Care, Connected End-to-End</h2>
                    <p>
                        Doctor Sahib is the digital care extension of the TuhiTu Seva Med
                        ecosystem, completing the healthcare journey from access to
                        consultation to medication all within one connected platform.
                    </p>
                </section>

                {/* CORE FEATURES */}
                <section className="doctor-section">
                    <h2>CORE FEATURES</h2>

                    <div className="feature">
                        <strong>Digital Consultations</strong>
                        <p>Instant teleconsultations with qualified doctors.</p>
                    </div>

                    <div className="feature">
                        <strong>Smart Triage</strong>
                        <p>Guided symptom assessment for faster, appropriate care.</p>
                    </div>

                    <div className="feature">
                        <strong>ABHA Onboarding</strong>
                        <p>Seamless integration with national digital health systems.</p>
                    </div>

                    <div className="feature">
                        <strong>Digital OPD Workflows</strong>
                        <p>Streamlined patient intake, consultation, and documentation.</p>
                    </div>

                    <div className="feature">
                        <strong>E-Prescriptions</strong>
                        <p>Secure digital prescriptions linked to TuhiTu Seva Med dispensing.</p>
                    </div>

                    <div className="feature">
                        <strong>Appointment Routing</strong>
                        <p>Faster access with reduced waiting times.</p>
                    </div>
                </section>

                {/* HOW IT FITS */}
                <section className="doctor-section light">
                    <h2>HOW IT FITS</h2>
                    <p>Doctor Sahib works seamlessly with TuhiTu Seva Med, ensuring:</p>
                    <ul>
                        <li>Continuity from consultation to medicine access</li>
                        <li>Reduced dependency on physical OPDs</li>
                        <li>Faster, connected, and reliable care delivery</li>
                    </ul>
                </section>

                {/* WHERE IT WORKS */}
                <section className="doctor-section">
                    <h2>WHERE IT WORKS BEST</h2>
                    <ul>
                        <li>Hospitals and clinics</li>
                        <li>Community health centers</li>
                        <li>Assisted living and senior care facilities</li>
                        <li>Corporate campuses and public spaces</li>
                        <li>Rural and underserved regions</li>
                    </ul>
                </section>

                {/* PROMISE */}
                <section className="doctor-section center light">
                    <h2>THE DOCTOR SAHIB PROMISE</h2>
                    <p>Timely care. Structured workflows. Connected outcomes.</p>
                    <p className="closing">
                        Doctor Sahib brings digital healthcare closer simple, inclusive, and
                        always accessible.
                    </p>
                </section>

            </div>
            <Footer />
        </>
    );
}
