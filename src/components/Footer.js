import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/global.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Company */}
        <div className="footer-col">
          <h3>SecureLife Insurance</h3>
          <p>Your trusted partner in Auto, Health, and Life coverage.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/auto">Auto Insurance</NavLink></li>
            <li><NavLink to="/health">Health Insurance</NavLink></li>
            <li><NavLink to="/policies">Policies</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Email: info@securelife.com</p>
          <p>Phone: +254 712 345678</p>
          <p>Location: Nairobi, Kenya</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SecureLife Insurance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
