const express = require('express');
const router = express.Router();
const db = require('../models/db');
const { requireSuperadmin } = require('../middlewares/auth');

// Get all users (Superadmin only)
router.get('/', requireSuperadmin, async (req, res) => {
  const result = await db.query('SELECT * FROM users');
  res.json(result.rows);
});

// Create new user (Superadmin only)
router.post('/add', requireSuperadmin, async (req, res) => {
  const { bank_id, name, email, phone, role, password_hash } = req.body;
  if (!name || !role || !password_hash) return res.status(400).json({ error: 'Missing required fields' });
  const result = await db.query(
    'INSERT INTO users (bank_id, name, email, phone, role, password_hash) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [bank_id, name, email, phone, role, password_hash]
  );
  res.status(201).json(result.rows[0]);
});

module.exports = router;