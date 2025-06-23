import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <header className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">
          <Link to="/">SecureLife</Link>
        </h1>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/auto" onClick={() => setIsMenuOpen(false)}>Auto</Link>
          <Link to="/health" onClick={() => setIsMenuOpen(false)}>Health</Link>
          <Link to="/policies" onClick={() => setIsMenuOpen(false)}>Policies</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/login">Login</Link> 
          <Link to="/register">Register</Link>

        </nav>

        <div className="nav-icons">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="dark-toggle">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
