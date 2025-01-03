// db.js - Configuración de conexión a la base de datos
const mongoose = require('mongoose');
require('dotenv').config();

// Función para conectar a la base de datos
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Conexión exitosa a MongoDB en el host: ${mongoose.connection.host}`);
    } catch (error) {
        console.error('Error conectando a MongoDB:', error.message);
        process.exit(1); // Salir del proceso con error
    }
};

module.exports = connectDB;
