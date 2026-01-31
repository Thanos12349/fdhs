import { motion as Motion } from "framer-motion";
import "./Dietin.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundSketches from "../components/BackgroundSketches";

export default function Dietin() {
  return (
    <>
      <Navbar />

      <div className="dietin-page-root">
        {/* Background sketches */}
        <div className="dietin-background-container">
          <BackgroundSketches />
        </div>

        <div className="dietin-page-content">
          <div className="dietin-page">

            {/* HERO */}
            <section className="dietin-hero">
              <h1 className="dietin-title">DIETIN</h1>
              <h2 className="dietin-subtitle">Wellness, On Demand</h2>

              <p className="dietin-tagline">
                Healthy food. Anytime. Anywhere.
              </p>

              <p className="dietin-hero-text">
                Dietin is a modern nutrition ecosystem designed for today’s
                fast-paced lifestyles at workplaces, homes, and on the move.
                From smart vending solutions to clean, ready-to-eat meals,
                Dietin makes healthy eating simple, accessible, and sustainable.
              </p>
            </section>

            {/* SMART VENDING */}
            <section className="dietin-section dietin-section-light">
              <h2 className="dietin-section-title">
                SMART VENDING FOR SMARTER WORKPLACES
              </h2>

              <h3 className="dietin-section-subtitle">
                Dietin Club Chiller
              </h3>

              <p>
                The Dietin Club Chiller is an IoT enabled smart fridge that
                delivers fresh, chef-crafted, nutrition-approved meals
                directly to your workplace.
              </p>

              <ul className="dietin-list">
                <li>No canteen dependency.</li>
                <li>No operational burden.</li>
                <li>Just nutritious meals available 24/7.</li>
              </ul>
            </section>

            {/* WHY DIETIN */}
              <h2 className="dietin-section-title">
                WHY WORKPLACES CHOOSE DIETIN
              </h2>
            <section className="dietin-section1">
            

              <div><p>Modern teams face modern health challenges.</p>

                <ul className="dietin-list">
                  <li>A majority of professionals skip meals or rely on junk food</li>
                  <li>Lifestyle diseases are driving rising healthcare costs</li>
                  <li>Employee wellness is now a priority for progressive organizations</li>
                </ul>

                <p>
                  Dietin bridges the gap between convenience and nutrition,
                  making workplace wellness effortless and scalable.
                </p>
              </div>
              <div>
                <img src="./Images/fdhs4.png" alt="" />
              </div>
            </section>

            {/* BENEFITS */}
            <section className="dietin-section dietin-section-light">
              <h2 className="dietin-section-title">
                BENEFITS FOR YOUR TEAM
              </h2>

              <div className="dietin-benefits-grid">
                <div className="dietin-benefit-card">
                  <strong>More Energy, Better Focus</strong>
                  <p>Balanced meals that support productivity and sustained performance.</p>
                </div>

                <div className="dietin-benefit-card">
                  <strong>Reduced Absenteeism</strong>
                  <p>Healthier eating habits lead to fewer sick days.</p>
                </div>

                <div className="dietin-benefit-card">
                  <strong>24/7 Access</strong>
                  <p>Meals available anytime day or night.</p>
                </div>

                <div className="dietin-benefit-card">
                  <strong>Zero Operational Hassle</strong>
                  <p>We handle restocking, sanitization, and maintenance.</p>
                </div>

                <div className="dietin-benefit-card">
                  <strong>Sustainable by Design</strong>
                  <p>Reusable jars and bottles with a circular return reward system.</p>
                </div>
              </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="dietin-section">
              <h2 className="dietin-section-title">HOW IT WORKS</h2>

              <ol className="dietin-steps">
                <li>
                  <strong>Tap & Browse</strong> – Use the intuitive touchscreen
                  to explore available meals.
                </li>
                <li>
                  <strong>Choose Your Meal</strong> – View complete nutritional
                  information before selecting.
                </li>
                <li>
                  <strong>Grab & Go</strong> – Pay instantly via UPI or card.
                  Fresh meals, instantly vended.
                </li>
              </ol>
            </section>

            {/* WHAT'S INSIDE */}
            <section className="dietin-section dietin-section-light">
              <h2 className="dietin-section-title">
                WHAT’S INSIDE THE DIETIN CHILLER
              </h2>

              <ul className="dietin-list">
                <li>15+ healthy options refreshed daily</li>
                <li>Salads, smoothies, detox water, sandwiches, fruit bowls</li>
                <li>Chef crafted, nutrition balanced meals</li>
                <li>No preservatives</li>
                <li>IoT-enabled, touchless access</li>
                <li>Temperature-controlled and sanitized for food safety</li>
              </ul>
            </section>

            {/* PROMISE */}
            <section className="dietin-section dietin-section-center">
              <div className="dietin-promise-box">
                <h2 className="dietin-section-title">
                  THE DIETIN PROMISE
                </h2>

                <div className="dietin-promise-lines">
                  Healthy meals.<br />
                  Happy teams.<br />
                  A sustainable future.
                </div>

                <p className="dietin-promise-desc">
                  Dietin makes workplace wellness practical, measurable,
                  and impactful.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
