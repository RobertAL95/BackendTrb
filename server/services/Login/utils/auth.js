// Utilidades para generar y validar JWT y bcrypt

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateJWT = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const validatePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = { generateJWT, validatePassword };
