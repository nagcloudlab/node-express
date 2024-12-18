

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World');
    res.end();
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});