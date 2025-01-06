// services/user/network/routes.js
const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const { success, error } = require('./response');
const controller = require('../controller');

const router = express.Router();
const upload = multer();

// Ruta para crear usuario
router.post('/', upload.single('photo'), async (req, res) => {
    try {
        const { name, lastname, taxNumber, email, password } = req.body;

        if (!req.file) {
            throw new Error('La foto es obligatoria');
        }

        // Generar una miniatura con sharp
        const thumbnail = await sharp(req.file.buffer)
            .resize(100, 100) // Tamaño de la miniatura
            .toBuffer();

        const user = await controller.createUser({
            name,
            lastname,
            taxNumber,
            email,
            password,
            photo: thumbnail,
        });

        success(res, user, 201);
    } catch (err) {
        error(res, err.message, 400);
    }
});

module.exports = router;
