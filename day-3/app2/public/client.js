const socket = io(); // Connect to the server

// Handle form submission
const form = document.getElementById('message-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = input.value;
    if (message.trim()) {
        socket.emit('chat message', message);
        input.value = '';
    }
});

// Display new messages
socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});
