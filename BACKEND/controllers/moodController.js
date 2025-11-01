const MoodEntry = require('../models/MoodEntry');

const moodController = {
  getAllMoods: async (req, res) => {
    try {
      const moods = await MoodEntry.findAllByUser(req.user.user_id);
      res.json(moods);
    } catch (err) {
      console.error('Fetch moods error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  getMoodById: async (req, res) => {
    try {
      const mood = await MoodEntry.findById(req.params.id);
      if (!mood) return res.status(404).json({ message: 'Mood not found' });
      res.json(mood);
    } catch (err) {
      console.error('Fetch mood error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  createMood: async (req, res) => {
    try {
      const { mood_type, emoji, note, mood_date } = req.body;
      const newMood = await MoodEntry.create({
        user_id: req.user.user_id,
        mood_type,
        emoji,
        note,
        mood_date
      });
      res.status(201).json({
        message: 'Mood created successfully',
        mood: newMood
      });
    } catch (err) {
      console.error('Create mood error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  updateMood: async (req, res) => {
    try {
      const updated = await MoodEntry.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ message: 'Mood not found' });
      res.json({ message: 'Mood updated successfully', mood: updated });
    } catch (err) {
      console.error('Update mood error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  deleteMood: async (req, res) => {
    try {
      const deleted = await MoodEntry.delete(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'Mood not found' });
      res.json({ message: 'Mood deleted successfully' });
    } catch (err) {
      console.error('Delete mood error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = moodController;
