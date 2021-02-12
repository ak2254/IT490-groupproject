/* const express = require('express');

const PORT = 3000;
const HOST = 'localhost';

const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`); */

const PORT = 3000;
const http = require("http");
const server = http.createServer((request, response) => {
    response.writeHead(200, {  
        'Content-Type': 'text/plain'  
    });  
    response.write("Hello World");  
    response.end();  
});

server.listen(PORT);

console.log(`Running on http://localhost:${PORT}`);