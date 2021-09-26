// TODO: starting screen with button to select start
var startButton = document.querySelector(".start-button")
var startingPage = document.querySelector(".starting-page")

// TODO: have listener to watch for button press to start timer and display first question
startButton.addEventListener("click", function() {
    document.getElementById("starting-page").style.display = "none";
    document.getElementById("question-page").style.display = "block";
})





// TODO: write at least 10 different question with 4 possible answers ?data strings so that i can update ordered list in html
// TODO: make sure that correct answers are not in same location on list 
    // (create a class for each answer and each display could have true or false value)
    // depending on the answer it will either add to score or remove time from counter
// TODO: have listener on container to look for button press of answer
// TODO: when correct answers are selected have score added to running total
// TODO: when incorrect have time subtracted from timer
// TODO: end game condition leads to score screen when initials can be stored
// TODO: log initials and score to string and save to local storage so they can return to game
// TODO: auto go to high score screen, pull from local storage to display records
// TODO: have link that can view high score at any time (optional) also button that clears high score (optional)
// TODO: on high score screen have button to start quiz which will start function to repeat quiz