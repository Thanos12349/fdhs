import React from "react";
import "./TuhituSevaMed.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TuhituSevaMed() {
    return (
        <>
            <Navbar />
            <div className="seva-page">

                {/* HERO */}
                <section className="seva-hero">
                    <h1>TUHITU SEVA MED</h1>
                    <h2>Smart Access to Essential Medicines. Anytime. Anywhere.</h2>
                    <p>
                        TuhiTu Seva Med is a smart, automated medicine dispensing system designed
                        to ensure round-the-clock access to essential medicines and wellness products.
                    </p>
                    <p>
                        Built for accessibility, safety, and scale, Seva Med bridges critical gaps
                        in healthcare delivery especially where physical pharmacies are limited or unavailable.
                    </p>
                </section>

                {/* WHY IT MATTERS */}
                <section className="seva-section">
                    <h2>WHY TUHITU SEVA MED MATTERS</h2>
                    <p>Access to medicines should not be limited by:</p>
                    <ul>
                        <li>Time of day</li>
                        <li>Location</li>
                        <li>Mobility challenges</li>
                        <li>Pharmacy availability</li>
                    </ul>
                    <p>
                        Yet for many individuals especially in remote, semi-urban, or high footfall
                        areas medicine access remains inconsistent.
                    </p>
                    <p>
                        TuhiTu Seva Med addresses this gap by delivering last-mile healthcare access,
                        reducing dependency on physical pharmacies and improving continuity of care.
                    </p>
                </section>

                {/* FEATURES */}
                <section className="seva-section light">
                    <h2>KEY FEATURES</h2>

                    <div className="feature-block">
                        <strong>24/7 Automated Access</strong>
                        <p>Medicines and wellness essentials available anytime, without waiting or queues.</p>
                    </div>

                    <div className="feature-block">
                        <strong>Multilingual Interface</strong>
                        <p>Designed for inclusivity, ensuring ease of use across diverse populations.</p>
                    </div>

                    <div className="feature-block">
                        <strong>Secure & Cashless Dispensing</strong>
                        <p>UPI and digital payments enable safe, contactless transactions.</p>
                    </div>

                    <div className="feature-block">
                        <strong>Intelligent Inventory Management</strong>
                        <p>Real-time stock tracking ensures availability, accuracy, and timely refills.</p>
                    </div>

                    <div className="feature-block">
                        <strong>Smart & Reliable Design</strong>
                        <p>Built for durability, hygiene, and uninterrupted operation in varied environments.</p>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="seva-section">
                    <h2>HOW IT WORKS</h2>
                    <ol>
                        <li><strong>Browse</strong><br />Users access the intuitive, multilingual touchscreen interface.</li>
                        <li><strong>Select</strong><br />Medicines and wellness products are displayed with clear information.</li>
                        <li><strong>Pay Digitally</strong><br />Secure cashless payment via UPI or card.</li>
                        <li><strong>Dispense</strong><br />The selected product is safely and instantly dispensed.</li>
                    </ol>
                    <p className="simple">Simple. Reliable. Efficient.</p>
                </section>

                {/* IMPACT */}
                <section className="seva-section light">
                    <h2>IMPACT ON HEALTHCARE DELIVERY</h2>
                    <ul>
                        <li><strong>Improves Medication Adherence</strong><br />Easy, consistent access encourages timely medication intake.</li>
                        <li><strong>Reduces Healthcare Gaps</strong><br />Ensures medicine availability in areas with limited pharmacy presence.</li>
                        <li><strong>Supports Preventive Care</strong><br />Wellness products and essentials help promote early and regular care.</li>
                        <li><strong>Minimizes Operational Dependency</strong><br />No continuous staffing required, reducing logistical challenges.</li>
                    </ul>
                </section>

                {/* DIGITAL HEALTH */}
                <section className="seva-section">
                    <h2>ALIGNED WITH DIGITAL HEALTH ECOSYSTEMS</h2>
                    <p>TuhiTu Seva Med is designed to integrate seamlessly with national digital health frameworks, supporting India’s vision for:</p>
                    <ul>
                        <li>Digitized healthcare delivery</li>
                        <li>Technology-driven access</li>
                        <li>Scalable public health infrastructure</li>
                    </ul>
                    <p>
                        The system supports transparency, traceability, and data-led healthcare planning.
                    </p>
                </section>

                {/* WHERE IT FITS */}
                <section className="seva-section light">
                    <h2>WHERE TUHITU SEVA MED FITS BEST</h2>
                    <ul>
                        <li>Hospitals and clinics</li>
                        <li>Assisted living and senior care communities</li>
                        <li>Corporate campuses and industrial zones</li>
                        <li>Railway stations, bus terminals, and public spaces</li>
                        <li>Rural, semi-urban, and underserved areas</li>
                        <li>Educational institutions and hostels</li>
                    </ul>
                    <p>Anywhere medicine access matters Seva Med delivers.</p>
                </section>

                {/* BENEFITS */}
                <section className="seva-section">
                    <h2>BENEFITS FOR COMMUNITIES & ORGANIZATIONS</h2>

                    <h3>For Communities</h3>
                    <ul>
                        <li>Reliable medicine access</li>
                        <li>Reduced travel and wait times</li>
                        <li>Improved health outcomes</li>
                    </ul>

                    <h3>For Institutions & Authorities</h3>
                    <ul>
                        <li>Scalable healthcare solution</li>
                        <li>Minimal operational burden</li>
                        <li>Strong public health impact</li>
                    </ul>
                </section>

                {/* SUSTAINABILITY */}
                <section className="seva-section light">
                    <h2>SUSTAINABILITY & RESPONSIBILITY</h2>
                    <ul>
                        <li>Optimized stock management</li>
                        <li>Reduced wastage</li>
                        <li>Efficient energy use</li>
                        <li>Responsible healthcare delivery</li>
                    </ul>
                    <p>Technology that serves people thoughtfully and ethically.</p>
                </section>

                {/* PROMISE */}
                <section className="cloud-icu-section cloud-icu-promise">
                    <h2 className="cloud-icu-section-title">THE TUHITU SEVA MED PROMISE</h2>
                    <p>Healthcare access should be continuous, dignified, and dependable.</p>
                    <p>With TuhiTu Seva Med, we are building a future where essential medicines are:</p>
                    <ul className="seva-promise">
                        <li>Accessible without barriers</li>
                        <li>Delivered through smart technology</li>
                        <li>Available when people need them most</li>
                    </ul>
                    <p className="cloud-icu-section-title">Because healthcare should not wait.</p>
                </section>

            </div>
            <Footer />
        </>
    );
}
