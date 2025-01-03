// Configuración de WebSocket para respuestas en tiempo real

const WebSocket = require('ws');
const jwt = require('jsonwebtoken');

const createWebSocketServer = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
            try {
                const { token } = JSON.parse(message);
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                ws.send(JSON.stringify({ message: 'Autenticación exitosa', user: decoded }));
            } catch (error) {
                ws.send(JSON.stringify({ error: 'Token inválido' }));
            }
        });
    });

    console.log('WebSocket server configurado');
};

module.exports = { createWebSocketServer };
