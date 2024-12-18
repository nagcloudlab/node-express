const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes');

const app = express();

// Middleware
// app.use(helmet()); // Secure HTTP headers
app.use(express.json()); // Parse JSON requests
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })); // Rate limiting
// denies requests if the number of requests exceeds 100 in 15 minutes

// Routes
app.use('/api', authRoutes); // Use routes from `routes.js`

// Start server
app.listen(5000, () => console.log('Server is running on port 5000'));
