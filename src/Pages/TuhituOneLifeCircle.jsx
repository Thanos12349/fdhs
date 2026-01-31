import React from "react";
import "./TuhituOneLifeCircle.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TuhituOneLifeCircle() {
    return (
        <>
            <Navbar />
            <div className="onelife-wrapper">
                <section className="onelife-hero">
                    <h1>TUHITU - ONE LIFE CIRCLE</h1>
                </section>

                <section className="onelife-section light">
                    <h2>TUHITU ONELIFE CIRCLE</h2>
                    <h3 className="subtitle">A Community Where Generations Connect, Grow, and Thrive</h3>
                    <p>
                        Tuhitu OneLife Circle is a living, breathing community platform designed to bring people of all ages together elders, young adults, youth, middle-aged individuals, and homemakers into one welcoming, inclusive space.
                    </p>
                    <p>
                        It is built on a simple belief: Wellbeing flourishes when generations connect.
                    </p>
                </section>

                <section className="onelife-section1">
                    <div className="onelife-inner-section">
                        <h2>A Community Built on Connection</h2>
                        <p>
                            Tuhitu OneLife Circle is a membership based community platform designed to bring people together across generations elders, families, youngsters, and homemakers through shared experiences, engagement, and care.
                        </p>
                        <p>
                            We believe wellbeing grows stronger when people feel connected, included, and valued.
                        </p>
                    </div>
                    <div className="onelife-img">
                        <img src="./Images/fdhs2.png" alt="" />
                    </div>
                </section>

                <section className="onelife-section light">
                    <h2>MEMBERSHIP LED ENGAGEMENT</h2>
                    <p>
                        OneLife Circle operates through curated membership plans, each designed to offer continuity, belonging, and regular engagement. We are launching our card soon.
                    </p>
                    <p>Members gain access to:</p>
                    <ul>
                        <li>Community led social interactions</li>
                        <li>Wellness and healthcare focused activities</li>
                        <li>A consistent circle of connection and support</li>
                    </ul>
                    <p>
                        Membership ensures that engagement is not occasional, but ongoing.
                    </p>
                </section>

                <section className="onelife-section">
                    <h2>EVENTS THAT CREATE BELONGING</h2>
                    <p>
                        At the heart of OneLife Circle are regularly curated events that encourage participation, joy, and togetherness.
                    </p>
                    <p>Our events focus on:</p>
                    <ul>
                        <li>Social connection and shared experiences</li>
                        <li>Emotional wellbeing and reduced isolation</li>
                        <li>Light activities, games, creativity, and cultural bonding</li>
                        <li>Inclusive participation across age groups</li>
                    </ul>
                    <p>
                        Each event is designed to be simple, warm, and meaningful—where conversations flow naturally and relationships grow.
                    </p>
                </section>

                <section className="onelife-section light">
                    <h2>WHY ONELIFE CIRCLE</h2>
                    <ul>
                        <li>Reduces social isolation, especially among elders</li>
                        <li>Strengthens family and inter-generational bonds</li>
                        <li>Encourages emotional wellbeing and active participation</li>
                        <li>Builds a sense of community through continuity</li>
                    </ul>
                    <p>
                        OneLife Circle is not just about events it’s about belonging to something consistent and supportive.
                    </p>
                </section>

                <section className="cloud-icu-promise cloud-icu-section">
                    <h2 className="cloud-icu-section-title">OUR PROMISE</h2>
                    <p className="cloud-icu-promise-text">
                        Through thoughtful memberships and regular community events, Tuhitu OneLife Circle creates spaces where people feel connected, engaged, and supported at every stage of life.
                    </p>
                    <p className="cloud-icu-promise-text">Because wellbeing is better when it’s shared.</p>
                </section>
            </div>
            <Footer />
        </>
    );
}
