import Express from 'express';
import RouterHome from './pageRoutes/home.js'
import RouterForm from './pageRoutes/form.js'
import RouterAbout from './pageRoutes/about.js'


export default routes => {
    const router = Express.Router();
    RouterHome(router);
    RouterForm(router);
    RouterAbout(router);

    routes.use('', router)
}