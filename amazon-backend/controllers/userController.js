const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "amazon_db",
});

// Register
const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save to database
    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Email already exists!" });
      }
      res.status(201).json({ message: "User registered successfully!" });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], async (err, results) => {
      if (err || results.length === 0) {
        return res.status(404).json({ message: "User not found!" });
      }

      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: "Wrong password!" });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
         "amazon_secret_key",
        { expiresIn: "1d" }
      );

      res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
};

module.exports = { register, login };