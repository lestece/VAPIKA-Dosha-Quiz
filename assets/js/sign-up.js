//Signup page js
// Connect to my EmailJS account using my Public Key
(function() {
    emailjs.init(
        "-nc1aZVdy7YoJikvg");
})();
// Function to call the emailjs.sendForm method
function sendMail() {
    document.getElementById(
            'signup-form')
        .addEventListener('submit',
            function(event) {
                let userName = document
                    .getElementById(
                        'user-name')
                    .value;
                event.preventDefault();
                //Method provided within the emailJS documentation at https://www.emailjs.com/docs/sdk/send-form/
                emailjs.sendForm(
                        'service_6z74g5e',
                        "template_h7twzk8",
                        '#signup-form')
                    .then(function() {
                        console.log(
                            'SUCCESS'
                        );
                        //Get the button element
                        let subscribe =
                            document
                            .getElementById(
                                'signup-btn'
                            );
                        //Get the sign up form
                        let signupForm =
                            document
                            .getElementById(
                                'signup-form'
                            );
                        //reset will clear the form
                        signupForm
                            .reset();
                        //If the form is successfully sent:
                        // 1. Store the user name 
                        sessionStorage
                            .setItem(
                                'userName',
                                userName
                            );
                        // 2. Show a sweetalert sign up confirmation with timer pop up window
                        //Instructions taken from https://sweetalert2.github.io/          
                        let
                            timerInterval;
                        Swal.fire({
                            title: 'You have successfully signed up!',
                            html: `Check your Inbox for a confirmation email.
                        You're now being redirected to the results page!`,
                            // 4secs timer
                            timer: 4000,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal
                                    .showLoading();
                                const
                                    b =
                                    Swal
                                    .getHtmlContainer()
                                    .querySelector(
                                        'b'
                                    );
                                timerInterval
                                    =
                                    setInterval(
                                        () => {
                                            b.textContent =
                                                Swal
                                                .getTimerLeft();
                                        },
                                        100
                                    );
                            },
                            willClose: () => {
                                clearInterval
                                    (
                                        timerInterval
                                    );
                            }
                        }).then(
                            (
                                result
                            ) => {
                                // When the timer time has run off, go to the results page
                                if (result
                                    .dismiss ===
                                    Swal
                                    .DismissReason
                                    .timer
                                ) {
                                    window
                                        .location =
                                        "./quiz-results.html";
                                }
                            });
                        //If there's an error, it will log "Failed..." and console log the error
                    }, function(
                        error) {
                        console.log(
                            'FAILED...',
                            error
                        );
                    });
            });
}
// Go to results page at skip sign up button onclick
document.getElementById("results-btn")
    .addEventListener("click",
        function() {
            window.location =
                "./quiz-results.html";
        });