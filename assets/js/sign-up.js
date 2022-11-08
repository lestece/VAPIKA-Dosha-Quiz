// Connect to my EmailJS account using my Public Key
(function () {
    emailjs.init("-nc1aZVdy7YoJikvg");
})();

//  Function to call the emailjs.sendForm method
function sendMail() {
    document.getElementById('signup-form').addEventListener('submit', function (event) {
        event.preventDefault();
        //Method provided within the emailJS documentation at https://www.emailjs.com/docs/sdk/send-form/
        emailjs.sendForm('service_6z74g5e', "template_h7twzk8", '#signup-form').then(function () {
            console.log('SUCCESS');
            //Get the button element
            let subscribe = document.getElementById('signup-btn');
            //Get the sign up form
            let signupForm = document.getElementById('signup-form');
            //reset will clear the form
            signupForm.reset();
            //Underneath will change the html of the button if successfully sent
            subscribe.innerHTML = "Successfully subscribed!";
            //If there's an error, it will log "Failed..." and console log the error
        }, function (error) {
            console.log('FAILED...', error)
        });
    });
}