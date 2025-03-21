const express = require('express');
const app = express();
const db = require('./db');


app.get('/', (req, res) => {
    res.send('¡Servidor funcionando!');
});

app.listen(3000, () => {
    console.log('🚀 Servidor corriendo en http://localhost:3000');
});
