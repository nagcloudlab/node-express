const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app); // HTTP server
const io = new Server(server); // Socket.IO server ( WebSocket )

// Serve static files
app.use(express.static('public'));

// Socket.IO connection
io.on('connection', (socket) => { // Handle connection
    console.log('A user connected');
    // Broadcast messages
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Send message to all connected clients
    });
    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected'); // Log disconnection
    });
});

// Start server
server.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
