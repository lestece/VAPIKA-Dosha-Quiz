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
    - [Quiz responsiveness](TESTING.md/#quiz-responsiveness)
    - [Signup page responsiveness](TESTING.md/#signup-page-responsiveness)
    - [Quiz result responsiveness](TESTING.md/#quiz-result-responsiveness)
    - [Modal windows responsiveness](TESTING.md/#modal-window-responsiveness)
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
- - -
- #### SELECT AND DESELECT ANSWERS
![Select and deselect answers testing](docs/TESTING-images/select-deselect-answer-testing.gif)

-The "take quiz" button successfully links to the quiz page

-When selected, the answer acquires the right style 

-The previous answer correctly deselects if the user changes answer
- - - 
- #### MANDATORY ANSWER
![Mandatory answer testing](docs/TESTING-images/mandatory-answer-testing.gif)

The quiz requires all of the questions to be answered:
the go to the next question button click correctly triggers the check for an answer to be selected and perfectly displays the SweetAlert window if not.
- - - 
- #### SIGNUP FORM INPUTS VALIDATION
![Signup form inputs validation testing](docs/TESTING-images/signup-form-input-validation.gif)
The text and email inputs in the Newsletter signup form are validated
- - - 
- #### SIGNUP SWEETALERT WINDOW
![Signup SweetAlert window testing](docs/TESTING-images/signup-sweetalert-testing.gif)

If the signup form is correctly submitted, the SweetAlert window successfully shows up for the right amount of time set in the timer (4secs) and redirects to the results page.
- - - 
- #### PIE CHART
![Pie chart testing](docs/TESTING-images/pie-chart-testing.gif)
The Pie chart in the results page behaves as planned/as it's supposed to:

-On hover, the pie chart slices show the corresponding dosha name, number of answers scored and percentage.

-On click, the slice correctly opens the modal window containing the information for that specific dosha
- - - 
### EXTERNAL LINKS
![Social external links testing](docs/TESTING-images//social-external-links-testing.gif)

All social media icon links open on a new page.
- - - 
### EMAILJS
![EmailJS Testing](docs/README-images/newsletter-email.png)
The signup form submission successfully sends a confirmation email to the user based on the email address stated in the form.

Also the username is shown to be correctly stored and displayed in the email intro.

To make sure the feature is working, I tested it using various email addresses (mine or relative's/friend's) ones and different names.
- - -
### QUIZ & QUIZ RESULT
The quiz logic revolves around the concept that the user dominant doshas are the ones that get more answers: each question has three possible answers and each answer corresponds to a specific dosha. 
To make things easier, answer 1 [0] always corresponds to Vata, answer 2[1] to Pitta and answer 3 [2] to Kapha.

Knowing this, I manually tested all of the possible combinations, including a Tridoshic case (all doshas get equal points) to make sure the results are being calculated correctly.
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

All html pages are validated and come back with no errors or warnings.
- - - 
### W3C (JIGSAW) CSS VALIDATION
![CSS validation](docs/TESTING-images/css-validation.png)

CSS code passes through the JigSaw validator without issues.

### JSHINT JAVASCRIPT VALIDATION
- Script.js
![Script js validation](docs/TESTING-images/script-js-validation.png)

- Quiz.js
![Quiz js validation](docs/TESTING-images/quiz-js-validation.png)

- Sign-up.js
![Signup js validation](docs/TESTING-images/signup-js-validation.png)

- Results.js
![Results js validation](docs/TESTING-images/results-js-validation.png)

No significant issues come back when the JavaScript code is passed through JSHint.
- - - 
## 3) RESPONSIVENESS TESTING
 All of the responsiveness testing has been conducted using Google Chrome Developer Tools and its devices and "responsive" modality. 

- Homepage
![Homepage responsiveness](docs/TESTING-images/homepage-responsiveness.gif)

- Homepage modal windows responsiveness
![Homepage modal window responsiveness](docs/TESTING-images/modals-responsiveness.gif)

- Quiz page
![Quiz responsiveness](docs/TESTING-images/quiz-responsiveness.gif)

- Signup page
![Signup form responsiveness](docs/TESTING-images/signup-responsiveness.gif)

- Results page
![Results page responsiveness](docs/TESTING-images/results-responsiveness.gif)

- Dosha modal windows
![Dosha modal windows responsiveness](docs/TESTING-images/dosha-modal-responsiveness.gif)




### HOMEPAGE RESPONSIVENESS

### QUIZ RESPONSIVENESS

### SIGNUP PAGE RESPONSIVENESS

### QUIZ RESULT RESPONSIVENESS

### MODAL WINDOW RESPONSIVENESS

## 4) BROWSER COMPATIBILITY

## 5) BUGS AND FIXES

## 6) LIGTHOUSE REPORTS

## 7) USER TESTING