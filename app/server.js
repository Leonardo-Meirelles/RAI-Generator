const express = require('express');
const app = express();
const path = require('path');

//how to get access to static files (css, images..)
app.use(express.static(__dirname + '/public'));



//set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('pages/home')
});

app.get('/form', (req, res) => {
    res.render('pages/form')
});

app.get('/about', (req, res) => {
    res.render('pages/about')
});

const port = 3000;
app.listen(port, () => {
console.log('Deu certo na porta:', port);
})