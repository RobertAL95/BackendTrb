// services/login/index.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const loginRoutes = require('./network/routes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((err) => console.error('Error conectando a MongoDB:', err));

// Rutas
app.use('/api/login', loginRoutes);

// Inicia el servidor
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Servicio de login corriendo en el puerto ${PORT}`);
});
