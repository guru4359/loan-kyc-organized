const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Submit loan application
router.post('/submit', async (req, res) => {
  const { applicant_id, bank_id, loan_type_id, skip_kyc } = req.body;
  const result = await db.query(
    `INSERT INTO loan_applications (applicant_id, bank_id, loan_type_id, status, submitted_at, skip_kyc)
     VALUES ($1, $2, $3, $4, NOW(), $5) RETURNING *`,
    [applicant_id, bank_id, loan_type_id, 'submitted', !!skip_kyc]
  );
  res.status(201).json(result.rows[0]);
});

module.exports = router;