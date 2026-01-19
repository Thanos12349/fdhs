import { motion as Motion } from "framer-motion";
import { Heart, Shield, Leaf, Users, Activity, Home } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./TuhituBliss.css";

export default function TuhituBlissPage() {
    return (
        <>
            <Navbar />
            <div className="tuhitu-page">
                {/* Hero */}
                <section className="hero">
                    <Motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        TUHITU BLISS
                    </Motion.h1>
                    <h2>TOGETHER, WE CARE BETTER</h2>
                    <p className="hero-text">
                        Compassion. Commitment. Collaboration. Care.<br />
                        These are not just words at Tuhitu Bliss — they guide every decision we make.
                    </p>
                </section>

                {/* Intro */}
                <section className="section">
                    <p>
                        From recovery to restoration, from assisted living to lifelong wellness, every journey at Tuhitu Bliss
                        is shaped by a shared purpose: to offer safety, comfort, dignity, and hope.
                    </p>
                    <p>
                        Residents, families, doctors, caregivers, therapists, volunteers, and partners move forward as one —
                        because true wellbeing is never delivered alone; it is created together.
                    </p>
                    <p className="highlight">At Tuhitu Bliss, care is not a service. It is a way of life.</p>
                </section>

                {/* Core Pillars */}
                <section className="section light">
                    <h2 className="center">OUR CORE PILLARS</h2>
                    <div className="pillars">
                        <Pillar icon={<Shield />} title="Care" text="Professional nursing, monitored recovery, clinical oversight, and trust-driven medical safety." />
                        <Pillar icon={<Heart />} title="Comfort" text="Emotional ease, dignity in daily living, respect for individuality, and homelike environments." />
                        <Pillar icon={<Leaf />} title="Wellness" text="Preventive, balanced, and holistic healing through Ayurveda, therapy, and lifestyle alignment." />
                        <Pillar icon={<Users />} title="Thriving" text="Mobility, purpose, independence, engagement, and a life filled with meaning." />
                    </div>
                </section>

                {/* Care Evolution */}
                <section className="section">
                    <h2>CARE THAT EVOLVES WITH LIFE</h2>
                    <p>
                        Care should evolve with life — not interrupt it. Born from years of experience in healthcare,
                        rehabilitation, and wellness, Tuhitu Bliss bridges critical gaps:
                    </p>
                    <ul>
                        <li>Between hospitals and home</li>
                        <li>Between treatment and living</li>
                        <li>Between longevity and vitality</li>
                    </ul>
                    <p>
                        We have seen recoveries end too soon, elders navigate disconnected systems, and families struggle to
                        find solutions that are both clinically safe and emotionally nurturing. Tuhitu Bliss is our answer.
                    </p>
                </section>

                {/* Integrated Care */}
                <section className="section light">
                    <h2>AN INTEGRATED APPROACH TO CARE</h2>
                    <div className="integrated">
                        <div><Activity /> Physiotherapy & Rehabilitation</div>
                        <div><Home /> Assisted Living Support</div>
                        <div><Leaf /> Ayurveda & Wellness Therapies</div>
                        <div><Shield /> Preventive & Restorative Healthcare</div>
                    </div>
                    <p className="mt">
                        Whether transitioning from hospital recovery, seeking long-term wellness, or moving into assisted
                        living — care at Tuhitu Bliss never breaks. It continues, adapts, and grows.
                    </p>
                    <p className="philosophy">Care • Comfort • Wellness • Thriving</p>
                </section>

                {/* Lifelong Care */}
                <section className="section">
                    <h2>A LIFELONG CARE MODEL</h2>
                    <p>
                        Health is not a moment — it is a journey. Wellbeing is not only clinical; it is emotional, social,
                        and purposeful.
                    </p>
                    <ul>
                        <li>Continuity of care across life stages</li>
                        <li>Integrated medical, therapeutic, emotional, and social support</li>
                        <li>Prevention, healing, recovery, and thriving</li>
                    </ul>
                    <p>
                        Because healthspan — living stronger, better, and more meaningfully — matters more than simply
                        adding years.
                    </p>
                </section>

                {/* Community */}
                <section className="section light">
                    <h2>MORE THAN CARE — A LIVING COMMUNITY</h2>
                    <p>
                        Engagement is about healthspan, not age. Our communities foster connection, movement, confidence,
                        purpose, and joy.
                    </p>
                    <p>
                        Aging is not limitation. It is wisdom, resilience, and strength.
                    </p>
                </section>

                {/* Belief & Promise */}
                <section className="section light">
                    <h2>BUILT BY PEOPLE, POWERED BY PURPOSE</h2>
                    <p>
                        Care is only as strong as the people delivering it. At Tuhitu Bliss, doctors, therapists, caregivers,
                        nurses, Ayurvedic practitioners, volunteers, and families work together as one ecosystem.
                    </p>
                    <p>
                        Every service, space, and protocol is guided by one defining question:
                    </p>
                    <p className="highlight">Does this improve quality of life?</p>
                    <ul>
                        <li>Long-term relationships, not transactional services</li>
                        <li>Continuous training, accountability, and ethical care</li>
                        <li>Teams invested, supported, and aligned with purpose</li>
                    </ul>
                    <p>
                        Because intentions matter — but outcomes matter more.
                    </p>
                </section>


                {/* Our Belief */}
                <section className="section">
                    <h2>OUR BELIEF</h2>
                    <ul>
                        <li>Every stage of life carries strength, wisdom, and purpose</li>
                        <li>Experiences gathered over time deserve dignity and understanding</li>
                        <li>No phase of life should be reduced to limitation</li>
                        <li>Aging is about adding life to years, not just years to life</li>
                    </ul>
                    <p>
                        True wellbeing is never achieved in isolation. It is shaped through collective care where families,
                        caregivers, doctors, therapists, volunteers, and communities support the individual as a whole.
                    </p>
                </section>


                {/* Philosophy */}
                <section className="section light">
                    <h2>PHILOSOPHY: LIFE, NOT AGE</h2>
                    <p>
                        Life is defined by how well it is lived — not by age. Aging is a transition, not a decline. Every
                        stage deserves connection, respect, and compassionate support.
                    </p>
                    <p>
                        We focus on extending healthspan — strength, mobility, clarity, and meaning — by asking:
                    </p>
                    <ul>
                        <li>Can they move confidently?</li>
                        <li>Do they feel safe and valued?</li>
                        <li>Are their days purposeful and joyful?</li>
                    </ul>
                </section>


                {/* Promise */}
                <section className="section center">
                    <div className="promise-box">
                        <h2>OUR PROMISE</h2>
                        <p>
                            To walk alongside every individual and family through recovery, care,
                            wellness, and living — with respect, responsibility, and heart.
                        </p>
                        <p className="closing">
                            When care is continuous, compassionate, and connected,
                            people don’t just live longer — they live better.
                        </p>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}

function Pillar({ icon, title, text }) {
    return (
        <Motion.div whileHover={{ y: -6 }} className="pillar">
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{text}</p>
        </Motion.div>
    );
}
