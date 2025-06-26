import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AutoPage from './pages/AutoPage';
import HealthPage from './pages/HealthPage';
import PoliciesPage from './pages/PoliciesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import PayWithMpesa from './pages/PayWithMpesa';
import PrivateRoute from './components/PrivateRoute';

import './styles/VideoHeader.css'; // Adjust path based on your structure

const AppContent = () => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('token');

  // Pages where we don't want navbar/footer
  const hideNavAndFooter = ['/login', '/register', '/forgot-password', '/reset-password'];

  const shouldHide = hideNavAndFooter.some(path => location.pathname.startsWith(path));

  return (
    <>
      {!shouldHide && isAuthenticated && <Navbar />}

      <Routes>
        {/* Public Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

        {/* Protected Routes */}
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/auto" element={<PrivateRoute><AutoPage /></PrivateRoute>} />
        <Route path="/health" element={<PrivateRoute><HealthPage /></PrivateRoute>} />
        <Route path="/policies" element={<PrivateRoute><PoliciesPage /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><ContactPage /></PrivateRoute>} />
        <Route path="/pay" element={<PrivateRoute><PayWithMpesa /></PrivateRoute>} />
      </Routes>

      {!shouldHide && isAuthenticated && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
