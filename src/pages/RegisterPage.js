import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const BASE_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000'
      : 'https://secure-life-backend.onrender.com';
  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/');
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');

      localStorage.setItem('token', data.token);
      setSuccess('Registration successful! Redirecting...');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setError(`Registration failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <video src="/videos/7821854-hd_1920_1080_30fps.mp4" autoPlay loop muted style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1
      }} />
      <div style={{
        height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(0px)', padding: '20px',
      }}>
        <form onSubmit={handleSubmit} style={{
          background: '#fff', padding: '30px', borderRadius: '10px',
          width: '100%', maxWidth: '400px', boxShadow: '0 0 10px rgba(0,0,0,0.3)'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
          <input name="name" type="text" placeholder="Full Name" required
            value={formData.name} onChange={handleChange} style={inputStyle} />
          <input name="email" type="email" placeholder="Email" required
            value={formData.email} onChange={handleChange} style={inputStyle} />
          <input name="password" type="password" placeholder="Password" required
            value={formData.password} onChange={handleChange} style={inputStyle} />
          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? 'Registering...' : 'Register'}
          </button>
          {error && <p style={errorStyle}>{error}</p>}
          {success && <p style={successStyle}>{success}</p>}
          <p>Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%', padding: '10px', marginBottom: '15px',
  border: '1px solid #ccc', borderRadius: '5px'
};

const buttonStyle = {
  width: '100%', padding: '10px', backgroundColor: '#1b1b9f',
  color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer'
};

const errorStyle = { color: 'red', marginTop: '10px' };
const successStyle = { color: 'green', marginTop: '10px' };

export default RegisterPage;
