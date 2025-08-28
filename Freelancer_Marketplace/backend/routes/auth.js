const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {
    const { name, email, password, role, skills } = req.body;
    try {
        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ msg: 'User exists' });

        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashed, role, skills });
        const token = jwt.sign({ id: user._id }, 'secret123');
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, 'secret123');
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

module.exports = router;
