const Insight = require('../models/Insight');

const insightController = {
  getAllInsights: async (req, res) => {
    try {
      const insights = await Insight.findAllByUser(req.user.user_id);
      res.json(insights);
    } catch (err) {
      console.error('Fetch insights error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  createInsight: async (req, res) => {
    try {
      const { week_start, summary } = req.body;
      const newInsight = await Insight.create({
        user_id: req.user.user_id,
        week_start,
        summary
      });
      res.status(201).json({
        message: 'Insight created successfully',
        insight: newInsight
      });
    } catch (err) {
      console.error('Create insight error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  deleteInsight: async (req, res) => {
    try {
      const deleted = await Insight.delete(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: 'Insight not found' });
      res.json({ message: 'Insight deleted successfully' });
    } catch (err) {
      console.error('Delete insight error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = insightController;
