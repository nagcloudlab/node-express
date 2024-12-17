

const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {

    // HTTT Method
    // HTTP URL
    // HTTP Headers
    // HTTP Body

    const httpMethod = req.method;
    const httpUrl = req.url;
    // const httpHeaders = req.headers;
    // const httpBody = [];

    if (httpMethod == 'GET' && httpUrl == '/') {
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write('<h1>Welcome to Home Page</h1>');
        // res.end();

        const readStream = fs.createReadStream('./public/index.html');
        readStream.pipe(res);

    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Page Not Found</h1>');
        res.end();
    }

});

server.listen(4000, () => {
    console.log('Server is running on port 3000');
});