/**
 * Access the doshas points from the local storage and 
 * assignes variables to them
 */
let vataPoints = localStorage.getItem('vataPoints');
let pittaPoints = localStorage.getItem('pittaPoints');
let kaphaPoints = localStorage.getItem('kaphaPoints');
let numOfQuestions = localStorage.getItem('numOfQuestions');
let dosha = localStorage.getItem('dosha');

//DOM access and initial conditions
document.getElementById('dosha-result').textContent = dosha;

//Function for calculating the percentage of the specific dosha based on the amount of questions contained in the quiz
function calculatePercentages(doshaPoints){
    return (doshaPoints * 100 ) / numOfQuestions; 
}

//Calculates each dosha percentages by calling the calculatePercentage() function and assigning the value to a variable
let vataPercentage = Math.trunc(calculatePercentages(vataPoints));
let pittaPercentage = Math.trunc(calculatePercentages(pittaPoints));
let kaphaPercentage = Math.trunc(calculatePercentages(kaphaPoints));
console.log(vataPercentage, pittaPercentage, kaphaPercentage);