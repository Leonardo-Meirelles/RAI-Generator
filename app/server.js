const express = require('express');
const server = express();
const port = 5000;

const methodController = (req, res, next) => {
    res.send('<h1>Rota Inicial</h1>')
}

server.get('/', methodController);

server.listen(5000, () => {
    console.log('Deu certo na porta:', port);
})