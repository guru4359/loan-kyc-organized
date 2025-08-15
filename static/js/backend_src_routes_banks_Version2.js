const express = require('express');
const router = express.Router();
const { requireSuperadmin } = require('../middlewares/auth');
const db = require('../models/db');

// Create new bank (Superadmin only)
router.post('/add', requireSuperadmin, async (req, res) => {
  const { name, address, contact, logo_url, branding_colors } = req.body;
  if (!name) return res.status(400).json({ error: 'Bank name required' });

  try {
    const result = await db.query(
      'INSERT INTO banks (name, address, contact, logo_url, branding_colors) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, address, contact, logo_url, JSON.stringify(branding_colors)]
    );
    res.status(201).json(result.rows[0]);
  } catch (e) {
    res.status(500).json({ error: 'Failed to add bank', details: e.message });
  }
});

module.exports = router;