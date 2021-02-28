const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'app')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});


app.get('/NewUserPage.html', (req, res) => {
    res.sendFile('NewUserPage.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

