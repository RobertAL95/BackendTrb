// services/user/index.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./network/routes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch((err) => console.error('Error conectando a MongoDB:', err));

// Rutas
app.use('/api/users', userRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
    console.log(`Servicio de usuarios corriendo en el puerto ${PORT}`);
});
