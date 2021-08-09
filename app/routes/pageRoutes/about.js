import { getAbout } from '../../controllers/aboutController.js';

//como essa  rota só tem dentro dela um middleware, ela passa a ser o próprio middleware.
//caso houvesse outras coisas, o middleware seria uma parte dessa rota.
export default routerAbout => {
    routerAbout.route('/about')
        .get(getAbout)

}   