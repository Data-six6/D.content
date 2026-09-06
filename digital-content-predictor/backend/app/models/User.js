const db = require('../config/db');

class User {
    static async createUser(data){
        const [result] = await db.query(
            "INSERT INTO users (email, password_hash, first_name, last_name) VALUES (?,?,?,?)",
            [data.email, data.passwordHash, data.firstName, data.lastName]
        );
        return result.insertId;
    }

    static async findByEmail(email) {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0] || null;
    }

    static async findById(userId) {
    const [rows] = await db.query(
      `SELECT u.user_id, u.email, u.first_name, u.last_name
       FROM users u
       WHERE u.user_id = ?`,
      [userId]
    );
    return rows[0] || null;
  }

}

module.exports = User;