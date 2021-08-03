import { getHome } from '../../controllers/homeController.js';

//isso é o middleware
export default routerHome => {
    routerHome.route('/')
        .get(getHome)

}   