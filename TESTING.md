# Vapika Dosha Quiz Testing

## TABLE OF CONTENTS

1) [Manual Testing](TESTING.md/#1-manual-testing)
    - [Internal events/links](TESTING.md/#internal-eventslinks)
    - [External links](TESTING.md/#external-links)
    - [EmailJS](TESTING.md/#emailjs)
    - [Quiz and quiz result](TESTING.md/#quiz--quiz-result)
2) [Code Validation](TESTING.md/#2-code-validation)
    - [W3C HTML Validation](TESTING.md/#w3c-html-validation)
    - [W3C (Jigsaw) CSS Validation](TESTING.md/#w3c-jigsaw-css-validation)
    - [JSHint JavaScript Validation](TESTING.md/#jshint-javascript-validation)
3) [Responsiveness testing](TESTING.md/#3-responsiveness-testing)
    - [Homepage responsiveness](TESTING.md/#homepage-responsiveness)
    - [Homepage modal windows responsiveness](TESTING.md/#homepage-modal-windows-responsiveness)
    - [Quiz responsiveness](TESTING.md/#quiz-responsiveness)
    - [Signup page responsiveness](TESTING.md/#signup-page-responsiveness)
    - [Quiz result responsiveness](TESTING.md/#quiz-result-responsiveness)
    - [Dosha modal windows responsiveness](TESTING.md/#dosha-modal-window-responsiveness)
4) [Browser compatibility](TESTING.md/#4-browser-compatibility)
5) [Bugs and fixes](TESTING.md/#5-bugs-and-fixes)
6) [Lighthouse reports](TESTING.md/#6-ligthouse-reports)
7) [User testing](TESTING.md/#7-user-testing)

[⬅ Back to the README.md file](README.md)
- - - 
## 1) MANUAL TESTING

### INTERNAL EVENTS/LINKS


- ##### LEARN MORE AND INSTRUCTIONS BUTTONS AND MODAL WINDOWS
![Learn more modal testing](docs/TESTING-images/learn-more-modal-testing.gif)
![Instructions modal testing](docs/TESTING-images/instructions-modal-testing.gif)

-The Learn More and Instructions buttons successfully open the modal windows

-The modal windows correctly close either triggered by the close x click or by clicking anywhere outside of the modal windows

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - -
- #### SELECT AND DESELECT ANSWERS
![Select and deselect answers testing](docs/TESTING-images/select-deselect-answer-testing.gif)

-The "take quiz" button successfully links to the quiz page

-When selected, the answer acquires the right style 

-The previous answer correctly deselects if the user changes answer

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
- #### MANDATORY ANSWER
![Mandatory answer testing](docs/TESTING-images/mandatory-answer-testing.gif)

The quiz requires all of the questions to be answered:
the go to the next question button click correctly triggers the check for an answer to be selected and perfectly displays the SweetAlert window if not.

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
- #### SIGNUP FORM INPUTS VALIDATION
![Signup form inputs validation testing](docs/TESTING-images/signup-form-input-validation.gif)
The text and email inputs in the Newsletter signup form are validated

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
- #### SIGNUP SWEETALERT WINDOW
![Signup SweetAlert window testing](docs/TESTING-images/signup-sweetalert-testing.gif)

If the signup form is correctly submitted, the SweetAlert window successfully shows up for the right amount of time set in the timer (4secs) and redirects to the results page.

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
- #### PIE CHART
![Pie chart testing](docs/TESTING-images/pie-chart-testing.gif)
The Pie chart in the results page behaves as planned/as it's supposed to:

-On hover, the pie chart slices show the corresponding dosha name, number of answers scored and percentage.

-On click, the slice correctly opens the modal window containing the information for that specific dosha

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
### EXTERNAL LINKS
![Social external links testing](docs/TESTING-images//social-external-links-testing.gif)

All social media icon links open on a new page.

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
### EMAILJS
![EmailJS Testing](docs/README-images/newsletter-email.png)
The signup form submission successfully sends a confirmation email to the user based on the email address stated in the form.

Also the username is shown to be correctly stored and displayed in the email intro.

To make sure the feature is working, I tested it using various email addresses (mine or relative's/friend's) ones and different names.

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - -
### QUIZ & QUIZ RESULT
The quiz logic revolves around the concept that the user dominant doshas are the ones that get more answers: each question has three possible answers and each answer corresponds to a specific dosha. 
To make things easier, answer 1 [0] always corresponds to Vata, answer 2[1] to Pitta and answer 3 [2] to Kapha.

Knowing this, I manually tested all of the possible combinations, including a Tridoshic case (all doshas get equal points) to make sure the results are being calculated correctly.

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
## 2) CODE VALIDATION

### W3C HTML VALIDATION
- Homepage
![Homepage html validation](docs/TESTING-images/homepage-validation.png)
- Quiz page
![Quiz page html validation](docs/TESTING-images/quiz-page-validation.png)
- Signup page
![Signup page html validation](docs/TESTING-images/signup-page-validation.png)
- Results page
![Results page html validation](docs/TESTING-images/results-page-validated.png)

All html pages are validated with [W3C HTML validator](https://validator.w3.org/)and come back with no errors or warnings.

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
### W3C (JIGSAW) CSS VALIDATION
![CSS validation](docs/TESTING-images/css-validation.png)

CSS code passes through the [JigSaw CSS validator](https://jigsaw.w3.org/css-validator/) without issues.

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
### JSHINT JAVASCRIPT VALIDATION
- Script.js
![Script js validation](docs/TESTING-images/script-js-validation.png)

- Quiz.js
![Quiz js validation](docs/TESTING-images/quiz-js-validation.png)

- Sign-up.js
![Signup js validation](docs/TESTING-images/signup-js-validation.png)

- Results.js
![Results js validation](docs/TESTING-images/results-js-validation.png)

No significant issues come back when the JavaScript code is passed through [JSHint validator](https://jshint.com/).

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
## 3) RESPONSIVENESS TESTING

All of the website pages are fully responsive.

The responsiveness testing has been conducted using Google Chrome Developer Tools, both on the devices available and on "responsive" modality. 

[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
- ### HOMEPAGE RESPONSIVENESS
![Homepage responsiveness](docs/TESTING-images/homepage-responsiveness.gif)
- - - 
- ### HOMEPAGE MODAL WINDOWS RESPONSIVENESS
![Homepage modal window responsiveness](docs/TESTING-images/modals-responsiveness.gif)
- - - 
- ### QUIZ RESPONSIVENESS
![Quiz responsiveness](docs/TESTING-images/quiz-responsiveness.gif)
- - - 
- ### SIGNUP PAGE RESPONSIVENESS
![Signup form responsiveness](docs/TESTING-images/signup-responsiveness.gif)
- - - 
- ### QUIZ RESULT RESPONSIVENESS
![Results page responsiveness](docs/TESTING-images/results-responsiveness.gif)
- - - 
- ### DOSHA MODAL WINDOW RESPONSIVENESS
![Dosha modal windows responsiveness](docs/TESTING-images/dosha-modal-responsiveness.gif)
[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
## 4) BROWSER COMPATIBILITY

VAPIKA Dosha Quiz has been tested for browser compatibility on:

 - Google Chrome
 ![Google Chrome compatibility testing](docs/TESTING-images/chrome-compatibility.gif)
- - - 
 - Firefox
![Firefox compatibility testing](docs/TESTING-images/firefox-compatibility.gif)
- - - 
 - Microsoft Edge
![Microsoft Edge compatibility testing](docs/TESTING-images/edge-compatibility.gif)
- - - 
 - Opera
 ![Opera compatibility testing](docs/TESTING-images/opera-compatibility.gif)
[Back to top ↑](TESTING.md/#vapika-dosha-quiz-testing)
- - - 
## 5) BUGS AND FIXES

## 6) LIGTHOUSE REPORTS

## 7) USER TESTING