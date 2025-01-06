// services/user/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión a MongoDB exitosa');
    } catch (err) {
        console.error('Error conectando a la base de datos:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
