const db = require('../config/database');

class BreathingSession {
  static async findAllByUser(user_id) {
    const [rows] = await db.promise().query(
      'SELECT * FROM BreathingSessions WHERE user_id = ? ORDER BY session_date DESC, session_id DESC',
      [user_id]
    );
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.promise().query(
      'SELECT * FROM BreathingSessions WHERE session_id = ? LIMIT 1',
      [id]
    );
    return rows[0];
  }

  static async create({ user_id, duration, session_date = null }) {
    const [result] = await db.promise().query(
      'INSERT INTO BreathingSessions (user_id, duration, session_date) VALUES (?, ?, ?)',
      [user_id, duration, session_date]
    );
    return this.findById(result.insertId);
  }

  static async delete(id) {
    const [result] = await db.promise().query(
      'DELETE FROM BreathingSessions WHERE session_id = ?',
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = BreathingSession;
