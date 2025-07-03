const express = require('express');
const router = express.Router();

// Example /register
router.post('/register', (req, res) => {
  res.json({ message: 'Register route' });
});

// Example /login
router.post('/login', (req, res) => {
  res.json({ message: 'Login route' });
});

// Example /me
router.get('/me', (req, res) => {
  res.json({ user: 'your user data' });
});

module.exports = router;
