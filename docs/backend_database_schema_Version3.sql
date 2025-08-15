CREATE TABLE banks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT,
    contact TEXT,
    logo_url TEXT,
    branding_colors TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    bank_id INTEGER,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    role TEXT NOT NULL,
    password_hash TEXT,
    account_number TEXT,
    FOREIGN KEY(bank_id) REFERENCES banks(id)
);

CREATE TABLE loan_types (
    id SERIAL PRIMARY KEY,
    bank_id INTEGER,
    name TEXT NOT NULL,
    interest_rate REAL,
    duration_months INTEGER,
    max_amount REAL,
    active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY(bank_id) REFERENCES banks(id)
);

CREATE TABLE kyc_documents (
    id SERIAL PRIMARY KEY,
    loan_type_id INTEGER,
    name TEXT NOT NULL,
    required BOOLEAN DEFAULT TRUE,
    FOREIGN KEY(loan_type_id) REFERENCES loan_types(id)
);

CREATE TABLE loan_applications (
    id SERIAL PRIMARY KEY,
    applicant_id INTEGER,
    bank_id INTEGER,
    loan_type_id INTEGER,
    status TEXT,
    submitted_at TIMESTAMP,
    reviewed_by INTEGER,
    review_comment TEXT,
    skip_kyc BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(applicant_id) REFERENCES users(id),
    FOREIGN KEY(bank_id) REFERENCES banks(id),
    FOREIGN KEY(loan_type_id) REFERENCES loan_types(id),
    FOREIGN KEY(reviewed_by) REFERENCES users(id)
);

CREATE TABLE uploaded_documents (
    id SERIAL PRIMARY KEY,
    application_id INTEGER,
    document_type TEXT,
    file_url TEXT,
    ocr_text TEXT,
    verified BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(application_id) REFERENCES loan_applications(id)
);

CREATE TABLE audit_trail (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    action TEXT,
    target_type TEXT,
    target_id INTEGER,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    details TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE notification_preferences (
    id SERIAL PRIMARY KEY,
    bank_id INTEGER,
    sms_enabled BOOLEAN,
    email_enabled BOOLEAN,
    whatsapp_enabled BOOLEAN,
    FOREIGN KEY(bank_id) REFERENCES banks(id)
);

CREATE TABLE backups (
    id SERIAL PRIMARY KEY,
    bank_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    restored BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(bank_id) REFERENCES banks(id)
);