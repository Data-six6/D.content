
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const User = require('../models/User');
const { JWT_SECRET } = require('../middleware/auth');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => { 
  try {
    const { email, password_hash: password, first_name: firstName, last_name: lastName } = req.body;

    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ error: 'Email, Password and Name are required' });
    }

    const existing = await User.findByEmail(email);
    if (existing) {
      return res.status(409).json({ error: 'An account with this email already exists' });
    }

    const hashed = await bcrypt.hash(password, 10);

    const userId = await User.createUser({
      email,
      passwordHash: hashed,
      firstName,
      lastName
    });

    const token = jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, user: { userId, email, firstName, lastName } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to register user' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password_hash: password } = req.body;
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign(
      { userId: user.user_id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    

    res.json({
      token,
      user: { userId: user.user_id, email: user.email, firstName: user.first_name, lastName: user.last_name },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to log in' });
  }
};