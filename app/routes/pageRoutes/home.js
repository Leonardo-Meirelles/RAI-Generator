import { getHome } from '../../controllers/homeController.js';

//como essa  rota só tem dentro dela um middleware, ela passa a ser o próprio middleware.
//caso houvesse outras coisas, o middleware seria uma parte dessa rota.
export default routerHome => {
    routerHome.route('/')
        .get(getHome)

}   