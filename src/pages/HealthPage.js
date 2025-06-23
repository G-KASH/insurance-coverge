import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/global.css';

const HealthPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="health-page">
      {/* Hero */}
      <section className="hero health-hero" data-aos="fade-up">
        <h1>Health Insurance</h1>
        <p>Affordable coverage for your peace of mind and wellbeing.</p>
      </section>

      {/* Plan Options */}
      <section className="coverage-section" data-aos="fade-up">
        <h2>Health Plans</h2>
        <div className="coverage-cards">
          <div className="coverage-card" data-aos="fade-right">
            <h3>Individual Plan</h3>
            <ul>
              <li>✅ Annual checkups</li>
              <li>✅ Emergency coverage</li>
              <li>✅ Lab tests & prescriptions</li>
            </ul>
          </div>
          <div className="coverage-card" data-aos="fade-up">
            <h3>Family Plan</h3>
            <ul>
              <li>✅ Covers entire family</li>
              <li>✅ Pediatric & maternity</li>
              <li>✅ Priority appointments</li>
            </ul>
          </div>
          <div className="coverage-card" data-aos="fade-left">
            <h3>Senior Plan</h3>
            <ul>
              <li>✅ Chronic illness cover</li>
              <li>✅ 24/7 nurse hotline</li>
              <li>✅ Physiotherapy support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section" data-aos="fade-up">
        <h2>Why Choose Our Health Cover?</h2>
        <ul>
          <li>🏥 Access to top hospitals</li>
          <li>📋 Easy claims process</li>
          <li>💊 Covers chronic & acute illness</li>
        </ul>
      </section>

      {/* Health Quote Form */}
      <section className="quote-form-section" data-aos="fade-up">
        <h2>Get a Health Quote</h2>
        <form className="quote-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="number" placeholder="Age" required />
          <select required>
            <option value="">Select Plan</option>
            <option value="individual">Individual</option>
            <option value="family">Family</option>
            <option value="senior">Senior</option>
          </select>
          <button type="submit">Request Quote</button>
        </form>
      </section>

      {/* Premium Factors */}
      <section className="premium-factors" data-aos="fade-up">
        <h2>What Affects Your Premium?</h2>
        <ul>
          <li>🧬 Age & pre-existing conditions</li>
          <li>👪 Number of dependents</li>
          <li>📍 Area of residence</li>
        </ul>
      </section>
    </div>
  );
};

export default HealthPage;
