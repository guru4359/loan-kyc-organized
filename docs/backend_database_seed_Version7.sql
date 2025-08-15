INSERT INTO banks (name, address, contact, logo_url, branding_colors)
VALUES (
  'Sahyadri Rural Co-Operative Bank',
  'Village Main Road, Satara, Maharashtra, 415001',
  '+91-212-1234567',
  'https://example.com/sahyadri-logo.png',
  '{"primary":"#1565c0","accent":"#43a047","background":"#e3f2fd"}'
);

INSERT INTO users (name, email, phone, role, password_hash)
VALUES (
  'Raj Kulkarni',
  'gururajk@hotmail.com',
  '+91-9000000000',
  'superadmin',
  '$2b$10$hZpW6GQ2q9CAxUeG0I6x1uxV9XUJ0wT9q7YwQ3x6M5VnUC8R6mN6nW'
);

INSERT INTO users (bank_id, name, email, phone, role, password_hash)
VALUES (
  1,
  'Priya Deshmukh',
  'priya@sahyadri-bank.in',
  '+91-9876543210',
  'admin',
  '$2b$10$samplehashvalueforpassword'
);

INSERT INTO loan_types (bank_id, name, interest_rate, duration_months, max_amount, active)
VALUES
  (1, 'Personal Loan', 10.5, 36, 200000, TRUE),
  (1, 'Agricultural Loan', 8.0, 48, 500000, TRUE);

INSERT INTO kyc_documents (loan_type_id, name, required)
VALUES
  (1, 'Aadhaar Card', TRUE),
  (1, 'PAN Card', TRUE),
  (2, 'Aadhaar Card', TRUE),
  (2, 'Land Ownership Certificate', TRUE);

INSERT INTO notification_preferences (bank_id, sms_enabled, email_enabled, whatsapp_enabled)
VALUES
  (1, TRUE, TRUE, TRUE);