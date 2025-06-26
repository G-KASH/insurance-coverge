const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const mpesaRoutes = require('./routes/mpesa');

dotenv.config();

const app = express();

// ✅ CORS configuration - must come before routes
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend.vercel.app'], // replace with your actual deployed frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// ✅ Logging (optional)
app.use((req, res, next) => {
  console.log('📥 Incoming request from:', req.headers.origin);
  next();
});

// ✅ Body parser
app.use(express.json());

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/mpesa', mpesaRoutes);

// ✅ Connect to DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const { MPESA_CONSUMER_KEY, MPESA_CONSUMER_SECRET, MPESA_SHORTCODE, MPESA_PASSKEY, MPESA_CALLBACK_URL } = process.env;

    if (!MPESA_CONSUMER_KEY || !MPESA_CONSUMER_SECRET || !MPESA_SHORTCODE || !MPESA_PASSKEY || !MPESA_CALLBACK_URL) {
      console.error('❌ Missing M-Pesa environment variables. Please check .env or Render config.');
    } else {
      console.log('✅ M-Pesa environment variables loaded.');
    }

    console.log('✅ MongoDB connected');
    app.listen(5000, () => console.log('🚀 Server running on port 5000'));
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });
