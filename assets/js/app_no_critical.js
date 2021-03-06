import '../css/app_no_critical.scss';

import sal from 'sal.js';
import SmoothScroll from 'smooth-scroll';
import MobileMenu from "./modules/global/_menuMobile";

import InfoUSCitizen from "./modules/global/_USCitizen";
import SendContactMessage from "./modules/global/_message";

new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
    offset: 75
});
new MobileMenu();
new InfoUSCitizen();
new SendContactMessage();
sal();


// navigator.userAgent.includes('Firefox') ? this.rel="stylesheet"