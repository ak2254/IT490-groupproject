/* const express = require('express');

const PORT = 3000;
const HOST = 'localhost';

const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`); */

var http = require('http');
var fs = require('fs');
var server = http.createServer((request, re) => {
    re.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('app/index.html').pipe(re)
})

server.listen(process.env.PORT || 3000);
