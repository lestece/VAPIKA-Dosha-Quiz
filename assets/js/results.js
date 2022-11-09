
let dosha = localStorage.getItem('dosha');
let userName = sessionStorage.getItem('userName');

let doshaSpan = document.getElementById('dosha-result');
let userNameSpan = document.getElementById('user-name');
let resultsHeading = document.getElementById('results-heading');

//DOM access and initial conditions
doshaSpan.textContent = dosha;

if (userName){
    userNameSpan.textContent = `${userName}, `;
} else {
resultsHeading.innerHTML = `Your Dosha is ${dosha}!`;
}




