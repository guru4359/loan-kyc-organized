const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const banksRouter = require('./routes/banks');
const usersRouter = require('./routes/users');
const loansRouter = require('./routes/loans');
const applicationsRouter = require('./routes/applications');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/banks', banksRouter);
app.use('/api/users', usersRouter);
app.use('/api/loans', loansRouter);
app.use('/api/applications', applicationsRouter);

app.get('/', (req, res) => {
  res.send('Bank Loan KYC MVP Backend Running');
});

// Add auto-seed logic here if first run (see seed.sql)
module.exports = app;