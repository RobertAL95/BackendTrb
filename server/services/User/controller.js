// services/user/controller.js
const User = require('./model');
const bcrypt = require('bcrypt');

const createUser = async ({ name, lastname, taxNumber, email, password, photo }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('El correo ya está registrado');
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        lastname,
        taxNumber,
        email,
        password: hashedPassword,
        photo,
    });

    return await newUser.save();
};

module.exports = { createUser };
