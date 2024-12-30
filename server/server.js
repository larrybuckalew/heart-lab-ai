const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const { check, validationResult } = require('express-validator');
const pool = require('./database');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: 'Internal Server Error' });
});

app.post('/login', 
  [
    check('email', 'Email is required').notEmpty(),
    check('password', 'Password is required').notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const email = req.body.email;
    const password = req.body.password;

    const query = `SELECT * FROM users WHERE email = $1`;
    const results = await pool.query(query, [email]);

    if (results.rows.length === 0) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    const isValidPassword = await bcrypt.compare(password, results.rows[0].password);

    if (!isValidPassword) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    res.send({ message: 'Logged in successfully' });
  }
);

app.post('/register',
