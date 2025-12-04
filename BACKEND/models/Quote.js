const db = require('../config/database');

class Quote {
  static async findRandom() {
    const [rows] = await db.promise().query(
      'SELECT * FROM Quotes ORDER BY RAND() LIMIT 1'
    );
    return rows[0] || null;
  }

  static async findById(id) {
    const [rows] = await db.promise().query(
      'SELECT * FROM Quotes WHERE quote_id = ? LIMIT 1',
      [id]
    );
    return rows[0];
  }

  static async create({ quote_text, author = null }) {
    const [result] = await db.promise().query(
      'INSERT INTO Quotes (quote_text, author) VALUES (?, ?)',
      [quote_text, author]
    );
    return this.findById(result.insertId);
  }

  static async delete(id) {
    const [result] = await db.promise().query(
      'DELETE FROM Quotes WHERE quote_id = ?',
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = Quote;
