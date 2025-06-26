import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/global.css';

const PoliciesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    tier: '',
  });
  const [quote, setQuote] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name || 'type']: e.target.value });
  };

  const calculateQuote = () => {
    let base = 0;
    switch (formData.type.toLowerCase()) {
      case 'auto':
        base = 5000;
        break;
      case 'health':
        base = 7000;
        break;
      case 'life':
        base = 10000;
        break;
      default:
        base = 0;
    }
    const multiplier =
      formData.tier === 'premium' ? 1.8 :
      formData.tier === 'full' ? 1.5 : 1;
    return base * multiplier;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = calculateQuote();
    setQuote(amount);
  };

  return (
    <div className="policies-page">
      {/* Hero Section with Background Image */}
      <section
        className="hero policies-hero"
        style={{
          backgroundImage: 'url("/images/pexels-rdne-7821915.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '60vh',
          position: 'relative',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
        data-aos="fade-up"
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1
          }}
        ></div>
        <div style={{ zIndex: 2 }}>
          <h1>Insurance Policies</h1>
          <p>Explore and compare our comprehensive coverage plans.</p>
        </div>
      </section>

      {/* Auto Insurance Section */}
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

      {/* Health Insurance Section */}
      <section className="coverage-section" data-aos="fade-up">
        <h2>Health Insurance Plans</h2>
        <div className="coverage-cards">
          <div className="coverage-card" data-aos="fade-right">
            <h3>Individual Plan</h3>
            <ul>
              <li>✅ Doctor visits</li>
              <li>✅ Emergency services</li>
              <li>✅ Lab tests</li>
            </ul>
          </div>
          <div className="coverage-card" data-aos="fade-up">
            <h3>Family Plan</h3>
            <ul>
              <li>✅ Pediatric & maternity</li>
              <li>✅ Family-wide coverage</li>
              <li>✅ Priority appointments</li>
            </ul>
          </div>
          <div className="coverage-card" data-aos="fade-left">
            <h3>Senior Plan</h3>
            <ul>
              <li>✅ Chronic illness cover</li>
              <li>✅ 24/7 nurse hotline</li>
              <li>✅ Physiotherapy sessions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Life Insurance Section */}
      <section className="coverage-section" data-aos="fade-up">
        <h2>Life Insurance Plans</h2>
        <div className="coverage-cards">
          <div className="coverage-card" data-aos="fade-right">
            <h3>Term Life</h3>
            <ul>
              <li>✅ Affordable premiums</li>
              <li>✅ Fixed term duration</li>
              <li>✅ Payout on death within term</li>
            </ul>
          </div>
          <div className="coverage-card" data-aos="fade-up">
            <h3>Whole Life</h3>
            <ul>
              <li>✅ Lifelong coverage</li>
              <li>✅ Cash value buildup</li>
              <li>✅ Fixed premiums</li>
            </ul>
          </div>
          <div className="coverage-card" data-aos="fade-left">
            <h3>Family Life</h3>
            <ul>
              <li>✅ Covers both parents</li>
              <li>✅ Education fund for kids</li>
              <li>✅ Tax benefits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Policy Benefits */}
      <section className="benefits-section" data-aos="fade-up">
        <h2>Policy Benefits</h2>
        <ul>
          <li>✔️ Flexible coverage options</li>
          <li>✔️ No claim bonuses</li>
          <li>✔️ 24/7 support and mobile tracking</li>
        </ul>
      </section>

      {/* Get a Quote Form */}
      <section className="quote-form-section" data-aos="fade-up">
        <h2>Request a Policy Quote</h2>
        <form className="quote-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="type"
            placeholder="Type of Coverage (Auto/Health/Life)"
            value={formData.type}
            onChange={handleChange}
            required
          />
          <select
            name="tier"
            value={formData.tier}
            onChange={handleChange}
            required
          >
            <option value="">Select Tier</option>
            <option value="basic">Basic</option>
            <option value="full">Full</option>
            <option value="premium">Premium</option>
          </select>
          <button type="submit">Get Quote</button>
        </form>
        {quote && (
          <div className="quote-result" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Estimated Premium: <span style={{ color: '#2d86ce' }}>KES {quote.toLocaleString()}</span>
          </div>
        )}
      </section>

      {/* Premium Factors */}
      <section className="premium-factors" data-aos="fade-up">
        <h2>Premium Calculation Factors</h2>
        <ul>
          <li>👤 Age and medical history</li>
          <li>📍 Coverage location</li>
          <li>🚗 Vehicle type or lifestyle</li>
        </ul>
      </section>
    </div>
  );
};

export default PoliciesPage;
