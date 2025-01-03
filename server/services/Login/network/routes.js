// services/login/network/routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controller/loginController');
const { success, error } = require('./response');

// Ruta para login
router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await controller.login(email, password);
        success(res, { token }, 200); // Respuesta exitosa con token JWT
    } catch (err) {
        error(res, err.message, 401); // Error de credenciales
    }
});

module.exports = router;
