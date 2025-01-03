// services/login/network/response.js

/**
 * Envía una respuesta exitosa al cliente.
 * @param {Object} res - El objeto de respuesta de Express.
 * @param {any} data - Los datos que se retornarán.
 * @param {number} status - Código de estado HTTP.
 */
const success = (res, data, status = 200) => {
    res.status(status).json({
        success: true,
        data,
    });
};

/**
 * Envía una respuesta de error al cliente.
 * @param {Object} res - El objeto de respuesta de Express.
 * @param {string} message - Mensaje de error.
 * @param {number} status - Código de estado HTTP.
 */
const error = (res, message, status = 500) => {
    res.status(status).json({
        success: false,
        error: message,
    });
};

module.exports = { success, error };
