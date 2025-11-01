const express = require('express');
const router = express.Router();
const moodController = require('../controllers/moodController');
const auth = require('../Middleware/auth');

// @route   GET /api/moods
// @desc    Get all moods for logged-in user
// @access  Private
router.get('/', auth, moodController.getAllMoods);

// @route   GET /api/moods/:id
// @desc    Get single mood entry
// @access  Private
router.get('/:id', auth, moodController.getMoodById);

// @route   POST /api/moods
// @desc    Create a new mood entry
// @access  Private
router.post('/', auth, moodController.createMood);

// @route   PUT /api/moods/:id
// @desc    Update a mood entry
// @access  Private
router.put('/:id', auth, moodController.updateMood);

// @route   DELETE /api/moods/:id
// @desc    Delete a mood entry
// @access  Private
router.delete('/:id', auth, moodController.deleteMood);

module.exports = router;
