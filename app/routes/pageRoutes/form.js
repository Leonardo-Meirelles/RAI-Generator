import { getForm } from '../../controllers/formController.js';

//isso é o middleware
export default routerForm => {
    routerForm.route('/form')
        .get(getForm)

}   