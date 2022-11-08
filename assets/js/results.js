/**
 * Access the doshas points from the local storage and 
 * assignes variables to them
 */
let vataPoints = localStorage.getItem('vataPoints');
let pittapoints = localStorage.getItem('pittaPoints');
let kaphaPoints = localStorage.getItem('kaphaPoints');
let dosha = localStorage.getItem('dosha');

//DOM access and initial conditions
document.getElementById('dosha-result').textContent = dosha;

