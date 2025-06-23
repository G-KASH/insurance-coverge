import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/global.css';

const PoliciesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="policies-page">
      {/* Hero */}
      <section className="hero policies-hero" data-aos="fade-up">
        <h1>Insurance Policies</h1>
        <p>Explore and compare our comprehensive insurance coverage plans.</p>
      </section>

      {/* Policy Tiers */}
      <section className="coverage-section" data-aos="fade-up">
        <h2>Auto Insurance Plans</h2>
        <div className="coverage-cards">
          <div className="coverage-card" data-aos="fade-right">
            <h3>Basic Cover</h3>
            <ul>
              <li>✅ Third-party cover</li>
              <li>✅ Accident support</li>
              <li>✅ Theft protection</li>
            </ul>
          </div>
          <div className="coverage-card" data-aos="fade-up">
            <h3>Full Cover</h3>
            <ul>
              <li>✅ Includes basic cover</li>
              <li>✅ Fire & natural disaster</li>
              <li>✅ Windscreen and accessories</li>
            </ul>
          </div>
          <div className="coverage-card" data-aos="fade-left">
            <h3>Premium Cover</h3>
            <ul>
              <li>✅ Full cover benefits</li>
              <li>✅ Roadside assistance</li>
              <li>✅ Medical & legal support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section" data-aos="fade-up">
        <h2>Policy Benefits</h2>
        <ul>
          <li>✔️ No claim bonuses</li>
          <li>✔️ Flexible payment terms</li>
          <li>✔️ 24/7 support and claim tracking</li>
        </ul>
      </section>

      {/* Policy Quote Form */}
      <section className="quote-form-section" data-aos="fade-up">
        <h2>Get a Policy Quote</h2>
        <form className="quote-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Vehicle Type" required />
          <select required>
            <option value="">Select Cover</option>
            <option value="basic">Basic</option>
            <option value="full">Full</option>
            <option value="premium">Premium</option>
          </select>
          <button type="submit">Request Quote</button>
        </form>
      </section>

      {/* Premium Factors */}
      <section className="premium-factors" data-aos="fade-up">
        <h2>Premium Calculation Factors</h2>
        <ul>
          <li>🚗 Vehicle age and model</li>
          <li>🧍 Driver history and age</li>
          <li>📍 Coverage location</li>
        </ul>
      </section>
    </div>
  );
};

export default PoliciesPage;
