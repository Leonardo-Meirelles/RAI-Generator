import Express from 'express';
import Path from 'path';
import Routes from './routes/routes.js'

const app = Express();
const __dirname = Path.resolve();

app.use(Express.json())
app.use(Express.urlencoded({extended:true}))

//set view engine to ejs
app.set('view engine', 'ejs');

//how to get access to static files (css, images..)
app.use(Express.static(Path.join(__dirname + '/app','/public')));
app.set('views', Path.join(__dirname + '/app', 'views'));

Routes(app);

app.timeout= 60000
app.listen(process.env.PORT || 5000, () => {
})