import { getHome } from '../../controllers/homeController.js';

export default routerHome => {
    routerHome.route('/')
        .get(getHome)

}   