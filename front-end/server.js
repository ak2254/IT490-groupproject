const express = require('express');

const PORT = 3000;
const HOST = 'localhost';

const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);