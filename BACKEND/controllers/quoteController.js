const Quote = require('../models/Quote');

const quoteController = {
  getAllQuotes: async (req, res) => {
    try {
      const quote = await Quote.findRandom();
      res.json(quote);
    } catch (err) {
      console.error('Fetch quote error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  createQuote: async (req, res) => {
    try {
      const { quote_text, author } = req.body;
      const newQuote = await Quote.create({ quote_text, author });
      res.status(201).json({
        message: 'Quote created successfully',
        quote: newQuote
      });
    } catch (err) {
      console.error('Create quote error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  deleteQuote: async (req, res) => {
    try {
      const deleted = await Quote.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: 'Quote not found' });
      }
      res.json({ message: 'Quote deleted successfully' });
    } catch (err) {
      console.error('Delete quote error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = quoteController;
