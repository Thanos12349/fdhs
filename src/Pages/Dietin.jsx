import { motion as Motion } from "framer-motion";
import "./Dietin.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

export default function Dietin() {
  return (
    <>
      <Navbar />
      <div className="dietin-page">
        <section className="dietin-hero">
          <h1>DIETIN</h1>
          <h2>Wellness, On Demand</h2>
          <p className="tagline">Healthy food. Anytime. Anywhere.</p>
          <p>
            Dietin is a modern nutrition ecosystem designed for today’s fast-paced lifestyles at workplaces, homes, and on the move.
            From smart vending solutions to clean, ready-to-eat meals, Dietin makes healthy eating simple, accessible, and sustainable.
          </p>
        </section>

        <section className="dietin-section light">
          <h2>SMART VENDING FOR SMARTER WORKPLACES</h2>
          <h3>Dietin Club Chiller</h3>
          <p>
            The Dietin Club Chiller is an IoT enabled smart fridge that delivers fresh, chef-crafted, nutrition-approved meals directly to your workplace.
          </p>
          <ul>
            <li>No canteen dependency.</li>
            <li>No operational burden.</li>
            <li>Just nutritious meals available 24/7.</li>
          </ul>
        </section>

        <section className="dietin-section">
          <h2>WHY WORKPLACES CHOOSE DIETIN</h2>
          <p>Modern teams face modern health challenges.</p>
          <ul>
            <li>A majority of professionals skip meals or rely on junk food</li>
            <li>Lifestyle diseases are driving rising healthcare costs</li>
            <li>Employee wellness is now a priority for progressive organizations</li>
          </ul>
          <p>
            Dietin bridges the gap between convenience and nutrition, making workplace wellness effortless and scalable.
          </p>
        </section>

        <section className="dietin-section light">
          <h2>BENEFITS FOR YOUR TEAM</h2>
          <div className="benefits">
            <div><strong>More Energy, Better Focus</strong><p>Balanced meals that support productivity and sustained performance.</p></div>
            <div><strong>Reduced Absenteeism</strong><p>Healthier eating habits lead to fewer sick days.</p></div>
            <div><strong>24/7 Access</strong><p>Meals available anytime day or night.</p></div>
            <div><strong>Zero Operational Hassle</strong><p>We handle restocking, sanitization, and maintenance.</p></div>
            <div><strong>Sustainable by Design</strong><p>Reusable jars and bottles with a circular return reward system.</p></div>
          </div>
        </section>

        <section className="dietin-section">
          <h2>HOW IT WORKS</h2>
          <ol>
            <li><strong>Tap & Browse</strong> – Use the intuitive touchscreen to explore available meals.</li>
            <li><strong>Choose Your Meal</strong> – View complete nutritional information before selecting.</li>
            <li><strong>Grab & Go</strong> – Pay instantly via UPI or card. Fresh meals, instantly vended.</li>
          </ol>
        </section>

        <section className="dietin-section light">
          <h2>WHAT’S INSIDE THE DIETIN CHILLER</h2>
          <ul>
            <li>15+ healthy options refreshed daily</li>
            <li>Salads, smoothies, detox water, sandwiches, fruit bowls</li>
            <li>Chef crafted, nutrition balanced meals</li>
            <li>No preservatives</li>
            <li>IoT-enabled, touchless access</li>
            <li>Temperature-controlled and sanitized for food safety</li>
          </ul>
        </section>

        <section className="dietin-section center">
          <div className="promise-box">
            <h2>THE DIETIN PROMISE</h2>

            <div className="promise-lines">
              Healthy meals.<br />
              Happy teams.<br />
              A sustainable future.
            </div>

            <p className="promise-desc">
              Dietin makes workplace wellness practical, measurable, and impactful.
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
