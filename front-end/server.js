/* const express = require('express');

const PORT = 3000;
const HOST = 'localhost';

const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`); */

var http = require("http");  
var server = http.createServer(function(request, response) {  
    response.writeHead(200, {  
        'Content-Type': 'text/plain'  
    });  
    response.write("Hello World");  
    response.end();  
});  
server.listen(3000);
