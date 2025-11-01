const express = require('express');
const cors = require('cors');
require('dotenv').config();

// ============================
// Import all route files
// ============================
const authRoutes = require('./routes/auth');
const moodRoutes = require('./routes/moods');
const journalRoutes = require('./routes/journals');
const quoteRoutes = require('./routes/quotes');
const breathingRoutes = require('./routes/breathing');
const insightRoutes = require('./routes/insights');

const app = express();

// ============================
// Middleware
// ============================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================
// Mount Routes
// ============================
app.use('/api/auth', authRoutes);
app.use('/api/moods', moodRoutes);
app.use('/api/journals', journalRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/breathing', breathingRoutes);
app.use('/api/insights', insightRoutes);

// ============================
// Home route
// ============================
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the MindMate API',
    description: 'A mental wellness platform for mood tracking, journaling, breathing, and insights.',
    endpoints: {
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login',
        profile: 'GET /api/auth/profile'
      },
      moods: {
        getAll: 'GET /api/moods',
        getOne: 'GET /api/moods/:id',
        create: 'POST /api/moods',
        update: 'PUT /api/moods/:id',
        delete: 'DELETE /api/moods/:id'
      },
      journals: {
        getAll: 'GET /api/journals',
        create: 'POST /api/journals',
        update: 'PUT /api/journals/:id',
        delete: 'DELETE /api/journals/:id'
      },
      quotes: {
        random: 'GET /api/quotes/random',
        create: 'POST /api/quotes (Admin only)',
        delete: 'DELETE /api/quotes/:id (Admin only)'
      },
      breathing: {
        getAll: 'GET /api/breathing',
        create: 'POST /api/breathing',
        delete: 'DELETE /api/breathing/:id'
      },
      insights: {
        getAll: 'GET /api/insights',
        create: 'POST /api/insights',
        delete: 'DELETE /api/insights/:id'
      }
    }
  });
});

// ============================
// Error handling middleware
// ============================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// ============================
// 404 handler
// ============================
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ============================
// Start the server
// ============================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`MindMate API running on port ${PORT}`);
  console.log(`Connected to MySQL database`);
});

module.exports = app;
