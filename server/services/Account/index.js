const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./db');
const accountRoutes = require('./network/routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4002;

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/api/accounts', accountRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Account service running on port ${PORT}`);
});

// Database connection
connectDB();
