// Servidor principal que gestiona las rutas hacia los microservicios

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

// Middleware para procesar JSON
app.use(bodyParser.json());

// Importar rutas de microservicios
const loginRoute = require('./routes/loginRoute');

// Usar las rutas
app.use('/api/login', loginRoute);

// Servidor principal escucha en el puerto especificado
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
