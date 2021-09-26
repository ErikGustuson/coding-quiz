// starting screen with button to select start
var startButton = document.querySelector(".start-button")
var startingPage = document.querySelector(".starting-page")


// have listener to watch for button press to start timer and display first question
var time = document.querySelector(".time");
var secondsLeft = 60;

function setTimer() {
    var timerCount = setInterval(function() {
        secondsLeft--;
        time.textContent = secondsLeft + " seconds and times up!";

        if(secondsLeft === 0) {
            clearInterval(timerCount);
            displayResults();
        }
    }, 1000);
}


startButton.addEventListener("click", function() {
    document.getElementById("starting-page").style.display = "none";
    document.getElementById("question-page").style.display = "block";
    setTimer()
})

// TODO: write at least 5 different question with 4 possible answers ?data strings so that i can update ordered list in html

// TODO: make sure that correct answers are not in same location on list ?possible set values of different answers to ture or false
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