const express = require('express');
const router = express.Router();
const breathingController = require('../controllers/breathingController');
const auth = require('../Middleware/auth');

// @route   GET /api/breathing
// @desc    Get all breathing sessions for user
// @access  Private
router.get('/', auth, breathingController.getAllSessions);

// @route   POST /api/breathing
// @desc    Create a new breathing session log
// @access  Private
router.post('/', auth, breathingController.createSession);

// @route   DELETE /api/breathing/:id
// @desc    Delete a breathing session
// @access  Private
router.delete('/:id', auth, breathingController.deleteSession);

module.exports = router;
