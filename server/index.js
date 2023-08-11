// const express = require('express');
// const http = require('http');
// const socketIO = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server, {
//     cors: {
//         origin: "*",
//     }
// });
// const PORT = 3001;

// io.on('connection', (socket) => {
//     // console.log('Client connected.');

//     // Handle real-time like updates from PHP backend
//     socket.on('likeUpdate', (data) => {
//         // console.log('Like update received:', data);
//         // Broadcast the like update to all connected clients
//         io.emit('postLiked', data);
//     });
//     socket.on('newLike', (data) => {
//         console.log('New like received:', data);
//         // Broadcast the new like data to all connected clients
//         io.emit('newLike', data);
//     });
//     // Clean up on client disconnect
//     socket.on('disconnect', () => {
//         console.log('Client disconnected.');
//     });
// });

// server.listen(PORT, () => {
//     console.log(`WebSocket server running on port ${PORT}`);
// });
