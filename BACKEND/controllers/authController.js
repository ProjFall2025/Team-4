const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const db = require('../config/database');

const authController = {
  // ==============================
  // @desc    Register a new user
  // @route   POST /api/auth/register
  // @access  Public
  // ==============================
  register: async (req, res) => {
    try {
      const { username, email, password, role } = req.body;

      // Check if user already exists
      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create user (default role = 'user' if not provided)
      const newUser = await User.create({ username, email, password, role });

      // Generate JWT token including role
      const token = jwt.sign(
        { userId: newUser.user_id, role: newUser.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
      );

      res.status(201).json({
        message: 'User registered successfully',
        token,
        user: {
          id: newUser.user_id,
          username: newUser.username,
          email: newUser.email,
          role: newUser.role
        }
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Server error during registration' });
    }
  },

  // ==============================
  // @desc    Login existing user
  // @route   POST /api/auth/login
  // @access  Public
  // ==============================
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findByEmail(email);
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Validate password
      const isMatch = await bcrypt.compare(password, user.password_hash);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token including role
      const token = jwt.sign(
        { userId: user.user_id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
      );
   
      // Update last login timestamp
      await db.promise().query(
        'UPDATE Users SET last_login = NOW() WHERE user_id = ?',
        [user.user_id]
      );

      res.json({
        message: 'Login successful',
        token,
        user: {
          id: user.user_id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error during login' });
    }
  },

  // ==============================
  // @desc    Get current user profile
  // @route   GET /api/auth/profile
  // @access  Private
  // ==============================
  getProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user.user_id);
      res.json(user);
    } catch (error) {
      console.error('Profile error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = authController;
