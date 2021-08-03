import { getAbout } from '../../controllers/aboutController.js';

//isso é o middleware
export default routerAbout => {
    routerAbout.route('/about')
        .get(getAbout)

}   