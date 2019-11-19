import sal from 'sal.js'
import 'lazysizes';
import SmoothScroll from 'smooth-scroll';

sal();
new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});
