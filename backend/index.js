const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost', // Your database host (use environment variables in production)
  user: 'root',      // Your database username
  password: 'password', // Your database password
  database: 'mydatabase' // Your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// API endpoint for login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and Password are required' });
  }

  // Query MySQL to check if the user exists
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed' });
    }

    if (result.length > 0) {
      // User found, return success response
      res.json({ message: 'Login successful', user: result[0] });
    } else {
      // User not found
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

// API endpoint for registration
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and Password are required' });
  }

  // Query to insert a new user
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(query, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error registering new user' });
    }

    res.json({ message: 'User registered successfully', userId: result.insertId });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
