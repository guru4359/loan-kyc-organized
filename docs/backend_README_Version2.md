# Backend for Bank Loan KYC MVP

## Usage

- Install dependencies:  
  `npm install`
- Start server:  
  `npm start`

## Structure

- `src/app.js`: Express app setup
- `src/routes/`: API routes for banks, users, loans, applications
- `src/models/db.js`: PostgreSQL connection
- `src/middlewares/auth.js`: Superadmin-only middleware
- `database/schema.sql`: DB schema
- `database/seed.sql`: Demo data

## Deployment

- Deploy to Render as a Web Service
- Connect to PostgreSQL DB (use `.env.example` for setup)