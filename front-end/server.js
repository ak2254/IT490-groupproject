const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'app')));
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((request, re) => {
//     re.writeHead(200, { 'content-type': 'text/html' });
//     fs.createReadStream('app/index.html').pipe(re)
// })
//
// server.listen(process.env.PORT || 3000);

