const express = require('express');
const { createAccount, getAccount } = require('../controller');

const router = express.Router();

// Routes
router.post('/', createAccount); // Endpoint para crear una nueva cuenta
router.get('/:userId', getAccount); // Endpoint para obtener la cuenta por usuario

module.exports = router;
