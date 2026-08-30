const db = require('../config/db');

class User {
    static async createUser(data){
        const [result] = await db.query(
            "INSERT INTO User (email, password_hash, first_name, last_name) VALUES (?,?,?,?)",
            [data.email, data.passwordHash, data.firstName, data.lastName]
        );
        return result.insertId;
    }

    static async findByEmail(email) {
        const [rows] = await db.query('SELECT * FROM User WHERE email = ?', [email]);
        return rows[0] || null;
    }

    static async findById(userId) {
    const [rows] = await db.query(
      `SELECT u.user_id, u.email, u.first_name, u.last_name
       FROM User u
       WHERE u.user_id = ?`,
      [userId]
    );
    return rows[0] || null;
  }

}

module.exports = User;