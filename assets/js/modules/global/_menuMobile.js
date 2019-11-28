class MobileMenu{
    constructor(){
        this.menuIcon = document.querySelector('.menu-icon');
        this.menu = document.querySelector('.nav');
        this.links = document.querySelectorAll('nav ul li a');
        this.events();
    }

    //link the events with the functions
    events(){
        this.menuIcon.addEventListener('click', this.toggleTheMenu.bind(this));
    }

    toggleTheMenu(){
        this.menu.classList.toggle('swing-out-top-bck');
        this.menu.classList.toggle('swing-in-top-bck');

        this.menuIcon.classList.toggle('menu-icon--close-x');
    }
}

export default MobileMenu;