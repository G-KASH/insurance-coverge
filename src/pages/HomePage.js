import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/global.css';

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{
        backgroundImage: `url('/images/pexels-mikhail-nilov-7735630.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="hero-overlay">
          <h1 data-aos="fade-down">Protect What Matters Most</h1>
          <p data-aos="fade-up">Auto, Health, and Life Insurance made simple.</p>
          <Link to="/policies" className="hero-btn" data-aos="zoom-in">Explore Policies</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 data-aos="fade-up">Our Insurance Services</h2>
        <div className="service-cards">
          <div className="card" data-aos="fade-up">
            <img src="/images/pexels-artyom-kulakov-1190754-2265634.jpg" alt="Auto Insurance" />
            <h3>Auto Insurance</h3>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <img src="/images/pexels-leeloothefirst-7163948.jpg" alt="Health Insurance" />
            <h3>Health Insurance</h3>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <img src="/images/pexels-brett-sayles-4734933.jpg" alt="Life Insurance" />
            <h3>Life Coverage</h3>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 data-aos="fade-up">What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial" data-aos="flip-left">
            <img src="/images/pexels-leeloothefirst-7163948.jpg" alt="Client 1" />
            <p>"SecureLife helped me find the best auto plan at a great price!"</p>
            <h4>– Alice, Nairobi</h4>
          </div>
          <div className="testimonial" data-aos="flip-left" data-aos-delay="150">
            <img src="/images/pexels-leeloothefirst-7163948.jpg" alt="Client 2" />
            <p>"Their health cover gave my family peace of mind."</p>
            <h4>– Brian, Kisumu</h4>
          </div>
          <div className="testimonial" data-aos="flip-left" data-aos-delay="300">
            <img src="/images/pexels-leeloothefirst-7163948.jpg" alt="Client 3" />
            <p>"Quick claims, friendly service, highly recommend!"</p>
            <h4>– Mary, Mombasa</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
