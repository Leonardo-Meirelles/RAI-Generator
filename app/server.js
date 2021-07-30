import Express from 'express';
import Path from 'path';
// import ejs from 'ejs'

const app = Express();
const __dirname = Path.resolve();

//set view engine to ejs
app.set('view engine', 'ejs');

//how to get access to static files (css, images..)
app.use(Express.static (Path.join(__dirname + '/app','/public')));
app.set('views', Path.join(__dirname + '/app', 'views'));

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
})