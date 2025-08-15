const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Get all loan types for a bank
router.get('/:bank_id', async (req, res) => {
  const result = await db.query('SELECT * FROM loan_types WHERE bank_id = $1', [req.params.bank_id]);
  res.json(result.rows);
});

module.exports = router;