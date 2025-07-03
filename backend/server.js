// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

const authRoutes = require('./routes/auth');
const mpesaRoutes = require('./routes/mpesa'); // optional

dotenv.config();

const app = express();

// ✅ CORS configuration
const allowedOrigins = [
  'http://localhost:3000',            // React dev server
  'https://securelife.vercel.app'     // your deployed frontend
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// ✅ Middleware
app.use(express.json());
app.use(morgan('dev'));

// ✅ Health route (helps avoid 404 confusion)
app.get('/', (req, res) => {
  res.send('✅ Insurance API is running!');
});

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/mpesa', mpesaRoutes); // optional

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });
