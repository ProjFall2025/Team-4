const JournalEntry = require('../models/JournalEntry');

const journalController = {
  getAllJournals: async (req, res) => {
    try {
      const journals = await JournalEntry.findAllByUser(req.user.user_id);
      res.json(journals);
    } catch (err) {
      console.error('Fetch journals error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  createJournal: async (req, res) => {
    try {
      const { title, content, mood_id } = req.body;
      const newJournal = await JournalEntry.create({
        user_id: req.user.user_id,
        mood_id,
        title,
        content
      });
      res.status(201).json({
        message: 'Journal created successfully',
        journal: newJournal
      });
    } catch (err) {
      console.error('Create journal error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  updateJournal: async (req, res) => {
    try {
      const updated = await JournalEntry.update(req.params.id, req.body);
      if (!updated)
        return res.status(404).json({ message: 'Journal not found' });
      res.json({ message: 'Journal updated successfully', journal: updated });
    } catch (err) {
      console.error('Update journal error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  deleteJournal: async (req, res) => {
    try {
      const deleted = await JournalEntry.delete(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: 'Journal not found' });
      res.json({ message: 'Journal deleted successfully' });
    } catch (err) {
      console.error('Delete journal error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = journalController;
