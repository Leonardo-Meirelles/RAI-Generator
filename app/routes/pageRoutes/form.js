import { getForm, postForm, postFormSchema } from '../../controllers/formController.js';
import validateMiddlewareDTO from '../../utils/validateMiddlewareDTO.js';

//como essa  rota só tem dentro dela um middleware, ela passa a ser o próprio middleware.
//caso houvesse outras coisas, o middleware seria uma parte dessa rota.
export default routerForm => {

    routerForm.route('/form')
        .get(getForm)
        .post(validateMiddlewareDTO('body', postFormSchema), postForm)

}   