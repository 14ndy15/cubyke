import sal from 'sal.js'
import 'lazysizes';
import SmoothScroll from 'smooth-scroll';
import MobileMenu from "./modules/global/_menuMobile";
import '../css/app.scss';
import InfoUSCitizen from "./modules/global/_USCitizen";

new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
    offset: 75
});
new MobileMenu();
new InfoUSCitizen();
sal();


