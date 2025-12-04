const express = require("express");
const router = express.Router();
const breathingController = require("../controllers/breathingController");
const { authenticateToken } = require("../Middleware/auth"); 

// ----------------------------
// @route   GET /api/breathing
// @desc    Get all breathing sessions for logged-in user
// @access  Private
// ----------------------------
router.get("/", authenticateToken, breathingController.getAllSessions);

// ----------------------------
// @route   POST /api/breathing
// @desc    Add a new breathing session
// @access  Private
// ----------------------------
router.post("/", authenticateToken, breathingController.createSession);

// ----------------------------
// @route   DELETE /api/breathing/:id
// @desc    Delete a breathing session
// @access  Private
// ----------------------------
router.delete("/:id", authenticateToken, breathingController.deleteSession);

module.exports = router;
