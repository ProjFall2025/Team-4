const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController');
const auth = require('../Middleware/auth');

// @route   GET /api/journals
// @desc    Get all journals for logged-in user
// @access  Private
router.get('/', auth, journalController.getAllJournals);

// @route   POST /api/journals
// @desc    Create new journal entry
// @access  Private
router.post('/', auth, journalController.createJournal);

// @route   PUT /api/journals/:id
// @desc    Update a journal entry
// @access  Private
router.put('/:id', auth, journalController.updateJournal);

// @route   DELETE /api/journals/:id
// @desc    Delete a journal entry
// @access  Private
router.delete('/:id', auth, journalController.deleteJournal);

module.exports = router;
