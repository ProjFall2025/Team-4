const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');
const auth = require('../Middleware/auth');
const role = require('../Middleware/role');

// @route   GET /api/quotes/random
// @desc    Get a random motivational quote
// @access  Public
router.get('/random', quoteController.getAllQuotes);

// @route   POST /api/quotes
// @desc    Add a new quote (Admin only)
// @access  Private
router.post('/', auth, role('admin'), quoteController.createQuote);
router.delete('/:id', auth, role('admin'), quoteController.deleteQuote);

// @route   DELETE /api/quotes/:id
// @desc    Delete a quote (Admin only)
// @access  Private
router.delete('/:id', auth, role('admin'), quoteController.deleteQuote);

module.exports = router;
