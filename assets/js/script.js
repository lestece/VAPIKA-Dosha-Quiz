// Homepage script

// When 'Start quiz' button is clicked, go to quiz page
document.getElementById("start-quiz").addEventListener("click", function () {
    window.location = "../dosha-quiz.html";
  });


//Learn more modal window

// Get the modal
var learnMoreModal = document.getElementById("learn-more-modal");

// Get the button that opens the modal
var learnMoreBtn = document.getElementById("learn-more-btn");

// Get the <span> element that closes the modal
var closeLearnMore = document.getElementsByClassName("close-learn-more")[0];

// When the user clicks on the button, open the modal
learnMoreBtn.onclick = function () {
  learnMoreModal.style.display = "block";
};



// When the user clicks on <span> (x), close the modal
closeLearnMore.onclick = function () {
  learnMoreModal.style.display = "none";
};



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == learnMoreModal) {
    learnMoreModal.style.display = "none";
  }
};
