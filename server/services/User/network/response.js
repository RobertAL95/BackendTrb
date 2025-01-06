// services/user/network/response.js
const success = (res, data, status = 200) => {
    res.status(status).json({
        success: true,
        data,
    });
};

const error = (res, message, status = 500) => {
    res.status(status).json({
        success: false,
        error: message,
    });
};

module.exports = { success, error };
