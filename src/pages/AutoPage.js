import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/global.css';

const AutoPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="auto-page">
      {/* Hero Section */}
      <section className="hero auto-hero" data-aos="fade-up">
        <h1>Auto Insurance</h1>
        <p>Protect your car and drive with peace of mind.</p>
      </section>

      {/* Coverage Tiers */}
      <section className="coverage-section" data-aos="fade-up">
        <h2>Coverage Options</h2>
        <div className="coverage-cards">
          <div className="coverage-card" data-aos="fade-right">
            <h3>Basic Cover</h3>
            <ul>
              <li>Third-party damage</li>
              <li>Fire & theft protection</li>
              <li>Roadside assistance</li>
            </ul>
          </div>
          <div className="coverage-card" data-aos="fade-up">
            <h3>Full Cover</h3>
            <ul>
              <li>All Basic Cover benefits</li>
              <li>Personal accident protection</li>
              <li>Windscreen & towing cover</li>
            </ul>
          </div>
          <div className="coverage-card" data-aos="fade-left">
            <h3>Premium Cover</h3>
            <ul>
              <li>All Full Cover benefits</li>
              <li>Courtesy car</li>
              <li>International protection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section" data-aos="fade-up">
        <h2>Why Choose Our Auto Insurance?</h2>
        <ul>
          <li>✅ Fast claims process</li>
          <li>✅ Flexible payment plans</li>
          <li>✅ 24/7 customer support</li>
        </ul>
      </section>

      {/* Quote Form */}
      <section className="quote-form-section" data-aos="fade-up">
        <h2>Get a Quote</h2>
        <form className="quote-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Vehicle Make & Model" required />
          <input type="text" placeholder="Year of Manufacture" required />
          <select required>
            <option value="">Select Cover Type</option>
            <option value="basic">Basic</option>
            <option value="full">Full</option>
            <option value="premium">Premium</option>
          </select>
          <button type="submit">Request Quote</button>
        </form>
      </section>

      {/* Premium Factors */}
      <section className="premium-factors" data-aos="fade-up">
        <h2>What Affects Your Premium?</h2>
        <ul>
          <li>📍 Location & usage frequency</li>
          <li>🚗 Vehicle age and model</li>
          <li>👤 Driver’s age and record</li>
        </ul>
      </section>
    </div>
  );
};

export default AutoPage;
