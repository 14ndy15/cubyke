import axios from 'axios';

class SendContactMessage{

    constructor(){
        this.form = document.querySelector('.form-contact form');
        this.name = document.querySelector('#name');
        this.email = document.querySelector('#email');
        this.message = document.querySelector('#message');
        this.button = document.querySelector('#submit');

        this.notification = document.querySelector('.form-contact__sending');

        this.event();
    }

    event(){
        this.button.addEventListener('click', this.send.bind(this));
        this.notification.addEventListener('click', this.closeNotification.bind(this));
    }

    closeNotification(){
        this.notification.classList.remove('form-contact__sending--visible');
        this.notification.classList.remove('form-contact__sending--visible--error');
        this.notification.classList.remove('form-contact__sending--visible--sending');
        this.notification.classList.remove('form-contact__sending--visible--received');
    }

    send(event){

        if (this.form.checkValidity()){

            let name = this.name.value;
            let email = this.email.value;
            let message = this.message.value;

            const params = new URLSearchParams();
            params.append('name', name);
            params.append('email', email);
            params.append('message', message);

            let that = this;

            axios.post('/mail', params)
                .then(function (response) {
                    let serverCode = response.data.response;
                    if (serverCode === 'success'){

                        setTimeout(function(){
                            that.notification.classList.remove('form-contact__sending--visible--sending');
                            that.notification.classList.add('form-contact__sending--visible--received');
                            that.form.reset();
                        }, 1000);

                        setTimeout(function(){
                            that.closeNotification();
                            that.form.reset();
                        }, 5000);
                    }
                    else{
                        that.notification.classList.remove('form-contact__sending--visible--sending');
                        that.notification.classList.add('form-contact__sending--visible--error');
                    }

                })
                .catch(function (error) {
                    that.notification.classList.remove('form-contact__sending--visible--sending');
                    that.notification.classList.add('form-contact__sending--visible--error');
                });

            this.notification.classList.add('form-contact__sending--visible');
            this.notification.classList.add('form-contact__sending--visible--sending');
            event.preventDefault();
        }

    }
}

export default SendContactMessage;