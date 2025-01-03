// Redirige las solicitudes al microservicio de login

const express = require('express');
const router = express.Router();
const axios = require('axios'); // Para comunicar con el microservicio

// Middleware para redirigir solicitudes
router.post('/', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:4000/login', req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Error interno del servidor' });
    }
});

module.exports = router;
