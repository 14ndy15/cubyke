import sal from 'sal.js'
import 'lazysizes';
import SmoothScroll from 'smooth-scroll';
import MobileMenu from "./modules/global/_menuMobile";
import '../css/app.scss';

new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});
new MobileMenu();
sal();


