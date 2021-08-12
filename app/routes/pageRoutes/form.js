import { getForm, postForm, postFormSchema } from '../../controllers/formController.js';
import validateMiddlewareDTO from '../../utils/validateMiddlewareDTO.js';

export default routerForm => {

    routerForm.route('/form')
        .get(getForm)
        .post(validateMiddlewareDTO('body', postFormSchema), postForm)

}   