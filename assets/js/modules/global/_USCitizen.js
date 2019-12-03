import { setCookie, getCookie } from './_utils';

class InfoUSCitizen{
    constructor(){
        this.USCitizenContainer = document.querySelector('.US_Citizen');
        this.titleLink = document.querySelector('.US_Citizen .US_Citizen__info a');
        this.button = document.querySelector('.US_Citizen .US_Citizen__info button');


        this.events();
    }

    events(){
        if (this.USCitizenContainer !== null) {
            this.titleLink.addEventListener('click', this.showOrHideInfo.bind(this));
            this.button.addEventListener('click', this.showOrHideInfo.bind(this));
        }
    }

    showOrHideInfo(){
        if (getCookie('readUSCitizenInfo'))
            this.USCitizenContainer.classList.add('US_Citizen--hide');
        else{
            setCookie('true', 'readUSCitizenInfo');

            this.USCitizenContainer.classList.add('US_Citizen--expand');
            this.button.innerText = 'I Understood';
        }

    }
}

export default InfoUSCitizen;