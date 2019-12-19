class Price {
    constructor(){
        this.labelPrice = document.querySelector('.build__price span');
        this.inputs = document.querySelectorAll('.form__item input[data-price]');
        this.discountInputs = document.querySelectorAll('.form__item input[name="prefered_member"]');
        this.discountDate = document.querySelector('.form__item input[name="datum"]');
        this.discountPhoto = document.querySelector('.form__item input[name="photo"]');

        this.events();
        this.computePrice();
    }

    events(){
        this.inputs.forEach((input)=>{
            input.addEventListener('click', this.computePrice.bind(this));
        });

        this.discountInputs.forEach((discountInput)=>{
            discountInput.addEventListener('click', this.computePrice.bind(this));
        });
    }

    computePrice(){
        let price = 0;
        this.inputs.forEach((input)=>{
            if(input.checked === true)
                price += parseInt(input.getAttribute('data-price'));
        });

        if (this.discountInputs[1].checked === true){
            price -= price/10;
            this.discountDate.removeAttribute('disabled');
            this.discountPhoto.removeAttribute('disabled');
        }
        else{
            this.discountDate.setAttribute('disabled', '');
            this.discountPhoto.setAttribute('disabled', '');
        }

        this.labelPrice.innerHTML = price.toFixed(2);
    }

}

export default Price;