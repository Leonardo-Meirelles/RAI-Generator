import Express from 'express';
import Path from 'path';
import Routes from './routes/routes.js'
// import ejs from 'ejs'

const app = Express();
const __dirname = Path.resolve();

//set view engine to ejs
app.set('view engine', 'ejs');

//how to get access to static files (css, images..)
app.use(Express.static (Path.join(__dirname + '/app','/public')));
app.set('views', Path.join(__dirname + '/app', 'views'));

Routes(app);

//     //req.body.telefone - forma de buscar todos os name dentro do html(telefone nesse caso seria de uma tag html)


const port = 3000;
app.listen(port, () => {
})