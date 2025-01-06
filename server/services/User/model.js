// services/user/model.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    taxNumber: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: Buffer, required: true }, // Miniatura en Buffer
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
