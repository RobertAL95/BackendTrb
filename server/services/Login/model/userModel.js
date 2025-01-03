// Modelo del usuario en MongoDB

const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

module.exports = { findUserByEmail };
