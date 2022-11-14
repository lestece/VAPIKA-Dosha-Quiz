# Vapika Dosha Quiz Testing

## TABLE OF CONTENTS

1) [Manual Testing](TESTING.md/#1-manual-testing)
    - [Internal events/links](TESTING.md/#internal-eventslinks)
    - [External links](TESTING.md/#external-links)
    - [Signup page](TESTING.md/#signup-page)
    - [Quiz result](TESTING.md/#quiz-result)
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

- #### MANDATORY ANSWER
![Mandatory answer testing](docs/TESTING-images/mandatory-answer-testing.gif)

The quiz requires all of the questions to be answered:
the go to the next question button click correctly triggers the check for an answer to be selected and perfectly displays the SweetAlert window if not.

### EXTERNAL LINKS
![Social external links testing](docs/TESTING-images//social-external-links-testing.gif)

All social media icon links open on a new page.

### SIGNUP PAGE

### QUIZ RESULT

## 2) CODE VALIDATION

### W3C HTML VALIDATION

### W3C (JIGSAW) CSS VALIDATION

### JSHINT JAVASCRIPT VALIDATION

## 3) RESPONSIVENESS TESTING

### HOMEPAGE RESPONSIVENESS

### QUIZ RESPONSIVENESS

### SIGNUP PAGE RESPONSIVENESS

### QUIZ RESULT RESPONSIVENESS

### MODAL WINDOW RESPONSIVENESS

## 4) BROWSER COMPATIBILITY

## 5) BUGS AND FIXES

## 6) LIGTHOUSE REPORTS

## 7) USER TESTING