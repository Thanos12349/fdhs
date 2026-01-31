import React from "react";
import "./SEyRAYA.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SEyRAYA() {
    return (
        <>
            <Navbar />
            <div className="seyraya-page">

                {/* HERO */}
                <section className="seyraya-hero">
                    <h1>SEyRAYA</h1>
                    <h2>Wellness, Designed for Life</h2>
                    <p>
                        SEyRAYA is a wellness brand rooted in prevention, restoration, and
                        balance helping individuals build strength, clarity, and calm into
                        everyday living.
                    </p>
                    <p>
                        We believe wellness is not a retreat from life, but a way to live it
                        better.
                    </p>
                </section>

                {/* PHILOSOPHY */}
                <section className="seyraya-section">
                    <h2>OUR PHILOSOPHY</h2>
                    <p>True wellness is sustainable when it is:</p>
                    <ul className="seyraya-list">
                        <li>Preventive, not reactive</li>
                        <li>Integrated, not occasional</li>
                        <li>Balanced across body, mind, and emotions</li>
                    </ul>
                    <p>
                        SEyRAYA focuses on long-term harmony, supporting health that evolves
                        with life.
                    </p>
                </section>

                {/* OFFERINGS */}
                <section className="seyraya-section seyraya-section-light">
                    <h2>WHAT SEyRAYA OFFERS</h2>

                    <h3>SEyRAYA | Wellness Programmes</h3>
                    <p>
                        At SEyRAYA, our offerings are designed as structured wellness
                        programmes, combining therapy, movement, mindfulness, and
                        restoration—tailored for sustainable balance and long-term wellbeing.
                    </p>

                    <div className="seyraya-program">
                        <h4>Ayurveda & Panchkarma</h4>
                        <p>Minimum Duration: 14 Days</p>
                        <p>Therapy Hours: 30–45 hrs</p>
                        <p>
                            A deep restorative programme focused on detoxification and balance
                            through Panchkarma therapies, herbal oil treatments, guided detox
                            rituals, and lifestyle and diet alignment.
                        </p>
                    </div>

                    <div className="seyraya-program">
                        <h4>Yoga & Yogic Wellness</h4>
                        <p>Minimum Duration: 7 Days</p>
                        <p>Therapy Hours: 15–25 hrs</p>
                        <p>
                            A holistic yoga programme integrating asana practice, pranayama,
                            meditation, yoga nidra, and posture and flexibility support for
                            mind–body harmony.
                        </p>
                    </div>

                    <div className="seyraya-program">
                        <h4>Physiotherapy & Body Alignment Care</h4>
                        <p>Minimum Duration: 7 Days</p>
                        <p>Therapy Hours: 18–30 hrs</p>
                        <p>
                            Targeted physiotherapy-led care focusing on guided movement, posture
                            correction, mobility enhancement, and muscle relaxation for
                            functional balance.
                        </p>
                    </div>

                    <div className="seyraya-program">
                        <h4>Fitness & Functional Wellness</h4>
                        <p>Minimum Duration: 7 Days</p>
                        <p>Therapy Hours: 15–25 hrs</p>
                        <p>
                            A strength and endurance-based programme designed to improve
                            balance, mobility, and functional fitness through structured
                            conditioning routines.
                        </p>
                    </div>

                    <div className="seyraya-program">
                        <h4>Facial & Skin Wellness</h4>
                        <p>Minimum Duration: 7 Days</p>
                        <p>Therapy Hours: 10–18 hrs</p>
                        <p>
                            Natural facial and skin therapies supporting circulation,
                            hydration, rejuvenation, and glow enhancement through mindful
                            wellness rituals.
                        </p>
                    </div>

                    <div className="seyraya-program">
                        <h4>Emotional & Mindfulness Wellness</h4>
                        <p>Minimum Duration: 7 Days</p>
                        <p>Therapy Hours: 12–20 hrs</p>
                        <p>
                            A calming programme centered on emotional wellbeing, incorporating
                            mindfulness practices, breathwork, and sound-based relaxation
                            techniques.
                        </p>
                    </div>

                    <div className="seyraya-program">
                        <h4>Comprehensive Wellness Programme</h4>
                        <p>Minimum Duration: 14 Days</p>
                        <p>Therapy Hours: 60–90 hrs</p>
                        <p>
                            A fully integrated wellness journey combining Ayurveda, Panchkarma,
                            yoga, physiotherapy, fitness, emotional wellness, and skin care
                            designed for complete restoration and balance.
                        </p>
                    </div>
                </section>

                {/* APPROACH */}
                <section className="seyraya-section">
                    <h2>OUR APPROACH</h2>
                    <p>SEyRAYA blends:</p>
                    <ul className="seyraya-list">
                        <li>Structured therapeutic practices</li>
                        <li>Mindful, restorative techniques</li>
                    </ul>
                    <p>
                        This integrative approach ensures wellness that is practical,
                        consistent, and effective, not overwhelming or disruptive.
                    </p>
                </section>

                {/* WAY OF LIFE */}
                <section className="seyraya-section seyraya-section-light">
                    <h2>WELLNESS AS A WAY OF LIFE</h2>
                    <ul className="seyraya-list">
                        <li>Lifestyle integration over short-term fixes</li>
                        <li>Balance over extremes</li>
                        <li>Continuity over isolated interventions</li>
                    </ul>
                    <p>Wellness at SEyRAYA is not an event — it’s a daily practice.</p>
                </section>

                {/* WHO IT IS FOR */}
                <section className="seyraya-section">
                    <h2>WHO SEyRAYA IS FOR</h2>
                    <ul className="seyraya-list">
                        <li>Individuals seeking preventive, long-term wellbeing</li>
                        <li>Professionals managing stress and lifestyle imbalance</li>
                        <li>Anyone looking to restore physical and emotional harmony</li>
                        <li>Communities and ecosystems focused on holistic health</li>
                    </ul>
                </section>

                {/* PROMISE */}
                <section className="cloud-icu-section cloud-icu-promise">
                    <h2>THE SEyRAYA PROMISE</h2>
                    <p>Wellness should feel natural, achievable, and lasting.</p>
                    <p>
                        With SEyRAYA, balance becomes routine, restoration becomes
                        consistent, and wellbeing becomes part of everyday life.
                    </p>
                    <p className="seyraya-closing">
                        SEyRAYA — Where wellness finds its rhythm.
                    </p>
                </section>

            </div>
            <Footer />
        </>
    );
}
