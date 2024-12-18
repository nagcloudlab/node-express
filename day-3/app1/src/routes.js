const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticateJWT, authorizeRole } = require('./auth');

const router = express.Router();

// Mock user database
const users = [
    {
        id: 1,
        username: 'admin',
        password: bcrypt.hashSync('admin123', 10),
        role: 'admin'
    },
    {
        id: 2,
        username: 'user',
        password: bcrypt.hashSync('user123', 10),
        role: 'user'
    }
];

// Login Route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find((u) => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({ token });
});

// Protected Route
router.get('/admin', authenticateJWT, authorizeRole('admin'), (req, res) => {
    res.json({ message: 'Welcome Admin!' });
});

module.exports = router;
