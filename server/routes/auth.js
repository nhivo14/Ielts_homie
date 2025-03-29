const express = require('express');
const router = express.Router();

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  res.send('Register route');
});

// @route   POST api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', (req, res) => {
  res.send('Login route');
});

module.exports = router; 