// Respuestas coherentes centralizadas para todo el servidor

const success = (res, message, data, status = 200) => {
    res.status(status).json({ message, data });
};

const error = (res, message, details, status = 500) => {
    console.error(details);
    res.status(status).json({ error: message });
};

module.exports = { success, error };
