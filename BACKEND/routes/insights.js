const express = require('express');
const router = express.Router();
const insightController = require('../controllers/insightController');
const auth = require('../Middleware/auth');

// @route   GET /api/insights
// @desc    Get all insights for user
// @access  Private
router.get('/', auth, insightController.getAllInsights);

// @route   POST /api/insights
// @desc    Create a new insight
// @access  Private
router.post('/', auth, insightController.createInsight);

// @route   DELETE /api/insights/:id
// @desc    Delete an insight
// @access  Private
router.delete('/:id', auth, insightController.deleteInsight);

module.exports = router;
