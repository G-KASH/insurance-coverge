import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

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
          <Link to="/pay" onClick={() => setIsMenuOpen(false)}><button>Make Payment</button></Link>

          {!isLoggedIn ? (
            <>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
            </>
          ) : (
            <>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
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
