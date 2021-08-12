import { getAbout } from '../../controllers/aboutController.js';

export default routerAbout => {
    routerAbout.route('/about')
        .get(getAbout)

}   