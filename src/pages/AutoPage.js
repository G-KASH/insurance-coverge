import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/global.css';

const AutoPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [year, setYear] = useState('');
  const [coverage, setCoverage] = useState('');
  const [quote, setQuote] = useState(null);

  const calculateQuote = (e) => {
    e.preventDefault();
    if (!year || !coverage) return;

    let base = 0;
    const yearNum = parseInt(year);
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearNum;

    switch (coverage) {
      case 'basic':
        base = 5000;
        break;
      case 'full':
        base = 9000;
        break;
      case 'premium':
        base = 13000;
        break;
      default:
        base = 0;
    }

    if (age > 10) base += 3000;
    else if (age < 5) base += 1000;
    else base += 2000;

    setQuote(`Estimated Premium: KES ${base.toLocaleString()}`);
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('/images/pexels-artyom-kulakov-1190754-2265634.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          padding: '120px 20px',
          textAlign: 'center',
          position: 'relative',
        }}
        data-aos="fade-down"
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Drive Protected</h1>
          <p style={{ fontSize: '1.2rem' }}>Auto insurance that covers what matters most.</p>
        </div>
      </section>

      {/* Coverage Options */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f9f9f9' }} data-aos="fade-up">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Coverage Plans</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {[
            {
              title: 'Basic Cover',
              features: ['Third-party damage', 'Fire & theft protection', 'Roadside assistance'],
            },
            {
              title: 'Full Cover',
              features: ['All Basic Cover benefits', 'Personal accident protection', 'Windscreen & towing'],
            },
            {
              title: 'Premium Cover',
              features: ['All Full Cover benefits', 'Courtesy car', 'International protection'],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              style={{
                background: '#fff',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
              data-aos="zoom-in"
            >
              <h3 style={{ marginBottom: '15px' }}>{plan.title}</h3>
              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}>✅ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '60px 20px' }} data-aos="fade-up">
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Why Choose Us?</h2>
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center', fontSize: '1.1rem' }}>
          <li>⚡ Fast claims processing</li>
          <li>💳 Flexible payment plans</li>
          <li>📞 24/7 Customer Support</li>
        </ul>
      </section>

      {/* Quote Form */}
      <section
        style={{
          padding: '60px 20px',
          backgroundColor: 'white',
          color: 'black',
          textAlign: 'center',
        }}
        data-aos="fade-up"
      >
        <h2 style={{ marginBottom: '20px' }}>Get Your Auto Quote</h2>
        <form
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            display: 'grid',
            gap: '15px',
          }}
          onSubmit={calculateQuote}
        >
          <input type="text" placeholder="Full Name" required style={inputStyle} />
          <input type="email" placeholder="Email" required style={inputStyle} />
          <input type="text" placeholder="Vehicle Make & Model" required style={inputStyle} />
          <input
            type="text"
            placeholder="Year of Manufacture"
            required
            style={inputStyle}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <select
            required
            style={inputStyle}
            value={coverage}
            onChange={(e) => setCoverage(e.target.value)}
          >
            <option value="">Select Coverage</option>
            <option value="basic">Basic</option>
            <option value="full">Full</option>
            <option value="premium">Premium</option>
          </select>
          <button
            type="submit"
            style={{
              padding: '10px',
              background: '#fff',
              color: '#0d6efd',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            Calculate Quote
          </button>
        </form>
        {quote && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{quote}</p>}
      </section>

      {/* Premium Factors */}
      <section style={{ padding: '60px 20px' }} data-aos="fade-up">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Premium Factors</h2>
        <ul style={{ textAlign: 'center', fontSize: '1.1rem' }}>
          <li>📍 Location & vehicle usage</li>
          <li>🚗 Vehicle model & year</li>
          <li>👤 Driver’s age & history</li>
        </ul>
      </section>
    </div>
  );
};

export default AutoPage;
