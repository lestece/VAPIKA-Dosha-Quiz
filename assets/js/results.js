// JavaScript for quiz-results.html


/**
 * Get the dosha result and username stored in the local
 * and session storage and store their values in variables
 */
 let dosha = localStorage.getItem('dosha');
 let userName = sessionStorage.getItem('userName');
 //DOM access
 let doshaSpan = document.getElementById('dosha-result');
 let userNameSpan = document.getElementById('user-name');
 let resultsHeading = document.getElementById('results-heading');
 
 //Display dosha result in the heading
 doshaSpan.textContent = dosha;
 /**
  * If the user has completed the sign up form and 
  * a name is stored and found, display it along with the dosha results.
  * Otherwise, display the string below with the result only
  */
 if (userName) {
     userNameSpan.textContent = `${userName}, `;
 } else {
     resultsHeading.innerHTML = `Your Dosha is <span id="dosha-result">${dosha} </span>!`;
 }
 
 /**
  * Google charts implementation:
  * Instructions followed on
  * https://developers-dot-devsite-v2-prod.appspot.com/chart/interactive/docs/gallery/piechart
  */
 
 // Load the Visualization API and the corechart package.
 google.charts.load('current', {
     'packages': ['corechart']
 });
 
 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(drawChart);
 
 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function drawChart() {
 
     // Create the data table.
     var data = new google.visualization.DataTable();
     //Get the doshas points and store them in variables
     let vataPoints = parseInt(localStorage.getItem('vataPoints'));
     let pittaPoints = parseInt(localStorage.getItem('pittaPoints'));
     let kaphaPoints = parseInt(localStorage.getItem('kaphaPoints'));
     data.addColumn('string', 'Dosha');
     data.addColumn('number', 'Percentage');
     /**
      * Dosha name and corresponding points and percentages
      * that get displayed in each pie chart slice
      */
     data.addRows([
         ['Vata', vataPoints],
         ['Pitta', pittaPoints],
         ['Kapha', kaphaPoints],
     ]);
 
     // Set chart options
     var options = {
         width: '100%',
         height: '100%',
         chartArea: {
             left: 0,
             top: 0,
             width: '100%',
             height: '100%'
         },
         backgroundColor: '#9f7e74',
         legend: {
             position: 'none'
         },
         tooltip: {
             textStyle: {
                 fontSize: 22
             },
             showColorCode: true
         },
         sliceVisibilityTreshold: .0,
         slices: [{
             color: '#8accf2',
             textStyle: {
                 color: 'black'
             }
         }, {
             color: '#f7cf97',
             textStyle: {
                 color: 'black'
             }
         }, {
             color: '#c3fabb',
             textStyle: {
                 color: 'black'
             }
         }],
     };
 
     // Instantiate and draw our chart, passing in some options.
     var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
     chart.draw(data, options);
     /**
      * Add event listeners to the pie chart slices
      * so that when they are selected
      * a modal window containing the dosha specifics
      * is displayed
      */
     /**
      * Followed the instructions relating methods
      * at https://developers-dot-devsite-v2-prod.appspot.com/chart/interactive/docs/gallery/piechart#Methods
      * and this example found on Stack Overflow:
      * https://stackoverflow.com/questions/14768507/google-pie-chart-onclick-issue
      */
     google.visualization.events.addListener(chart, 'select', function(e) {
         var selection = chart.getSelection();
         //If the selected pie chart slice has index 0 (vata)
         if (selection[0].row === 0) {
             // Get the modal
             let vataModal = document.getElementById("vata-modal");
             //Open the modal
             vataModal.style.display = "block";
             // Get the <span> element that closes the modal
             let closeVata = document.getElementsByClassName("close-vata")[0];
             // When the user clicks on <span> (x), close the modal
             closeVata.onclick = function() {
                 vataModal.style.display = "none";
             };
             //If the selected pie chart slice has index 1 (pitta)
         } else if (selection[0].row === 1) {
             // Get the modal
             let pittaModal = document.getElementById("pitta-modal");
             //Open the modal
             pittaModal.style.display = "block";
             // Get the <span> element that closes the modal
             let closePitta = document.getElementsByClassName("close-pitta")[0];
             // When the user clicks on <span> (x), close the modal
             closePitta.onclick = function() {
                 pittaModal.style.display = "none";
             };
             //By exlusion, if the selected pie chart slice has index 2 (kapha)
         } else {
             // Get the modal
             let kaphaModal = document.getElementById("kapha-modal");
             //Open the modal
             kaphaModal.style.display = "block";
             // Get the <span> element that closes the modal
             let closeKapha = document.getElementsByClassName("close-kapha")[0];
             // When the user clicks on <span> (x), close the modal
             closeKapha.onclick = function() {
                 kaphaModal.style.display = "none";
             };
         }
 
     });
 }