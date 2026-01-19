// import React, { useState } from "react";
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import HeroStats from '../components/HeroStats'
import Card from '../components/Card'
import Footer from '../components/Footer'
import ModernSlider from '../components/ModernSlider'
import TestimonialCard from '../components/TestimonialCard'
import VisionMission from "../components/VisionMission";
import CoreEcosystem from "../components/CoreEcosystem";
import WhyPartnerFDHS from "../components/WhyPartnerFDHS";
import './Home.css'
export default function Home() {
    // const testimonials = [
    //     {
    //         image: "/Images/user1.jpg",
    //         name: "Rohit Kumar",
    //         role: "Software Engineer",
    //         review:
    //             "This platform transformed my learning experience. Highly recommended!",
    //     },
    //     {
    //         image: "/Images/user2.jpg",
    //         name: "Anjali Verma",
    //         role: "UI/UX Designer",
    //         review:
    //             "Amazing service with great support. The UI is clean and modern.",
    //     },
    //     {
    //         image: "/Images/user3.jpg",
    //         name: "Amit Singh",
    //         role: "Developer",
    //         review:
    //             "Loved the simplicity and ease of use. Premium quality!",
    //     },
    // ];
    // const [index, setIndex] = useState(0);

    // const goToSlide = (i) => {
    //     setIndex(i);
    // };


    return (

        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <VisionMission />
            <CoreEcosystem />
            <WhyPartnerFDHS />
            {/* <HeroStats /> */}
            <div className="carddiv">
                <Card
                    image="/Images/tuhutu_bliss.png"
                    title="TUHITU BLISS"
                    desc="An integrated assisted living and wellness ecosystem combining medical care, rehabilitation, and holistic support for dignified living."
                    bgColor="#3478f6"
                    textColor="#ffffff"
                />

                <Card
                    image="/Images/tuhituOne.png"
                    title="TUHITU – OneLife Circle"
                    desc="A membership-based community for connection, wellbeing, and belonging with curated social, wellness, and inter-generational experiences."
                    bgColor="#ffffff"
                    textColor="#3478f6"
                />

                <Card
                    image="/Images/dietin.png"
                    title="DIETIN"
                    desc="Wellness, on demand. Smart nutrition for workplaces and modern lifestyles—clean, convenient, and sustainable."
                    bgColor="#3478f6"
                    textColor="#ffffff"
                />

                <Card
                    image="/Images/cloudicu.png"
                    title="SEVAMED"
                    desc="Medicines, anytime, anywhere. Automated, cashless access to essential healthcare services available 24/7."
                    bgColor="#ffffff"
                    textColor="#3478f6"
                />

                <Card
                    image="/Images/cloudicu.png"
                    title="Doctor Sahib"
                    desc="Consult. Prescribe. Connect. Digital consultations and e-prescriptions seamlessly linked to care delivery."
                    bgColor="#3478f6"
                    textColor="#ffffff"
                />

                <Card
                    image="/Images/cloudicu.png"
                    title="SEyRAYA"
                    desc="Balance, built into life. Preventive wellness solutions for body, mind, and emotional clarity."
                    bgColor="#ffffff"
                    textColor="#3478f6"
                />

                <Card
                    image="/Images/cloudicu.png"
                    title="CLOUD ICU"
                    desc="Critical care, connected. Real-time ICU monitoring with expert oversight anytime, anywhere."
                    bgColor="#3478f6"
                    textColor="#ffffff"
                />

                <Card
                    image="/Images/physiovera.png"
                    title="PHYSIOVERA"
                    desc="Move better. Live stronger. Personalized physiotherapy for pain relief, recovery, and long-term mobility."
                    bgColor="#ffffff"
                    textColor="#3478f6"
                />

                <Card
                    image="/Images/medumass.png"
                    title="MEDUMASS"
                    desc="From learning medicine to practicing it. CBME-aligned digital education combined with hands-on clinical skills and simulation training."
                    bgColor="#3478f6"
                    textColor="#ffffff"
                />
            </div>

            {/* <ModernSlider /> */}
            <div className="ts-wrapper">
                {/* <div
                    className="ts-slider"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {testimonials.map((t, i) => (
                        <div key={i} className="ts-slide">
                            <TestimonialCard
                                image={t.image}
                                name={t.name}
                                role={t.role}
                                review={t.review}
                            />
                            <TestimonialCard
                                image={t.image}
                                name={t.name}
                                role={t.role}
                                review={t.review}
                            />
                            <TestimonialCard
                                image={t.image}
                                name={t.name}
                                role={t.role}
                                review={t.review}
                            />
                        </div>
                        
                    ))}
                </div> */}

                {/* Dots */}
                {/* <div className="ts-dots">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className={`ts-dot ${index === i ? "active" : ""}`}
                            onClick={() => goToSlide(i)}
                        ></div>
                    ))}
                </div> */}
            </div>
            <Footer />
        </>
    )
}