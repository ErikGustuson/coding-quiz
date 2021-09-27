// starting screen with button to select start
var startButton = document.querySelector(".start-button");
var startingPage = document.querySelector(".starting-page");

// have listener to watch for button press to start timer and display first question
var time = document.querySelector(".time");
var secondsLeft = 60;

function setTimer() {
  var timerCount = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds and times up!";

    if (secondsLeft <= 0) {
      clearInterval(timerCount);
      displayResults();
    }
  }, 1000);
}

// write at least 5 different question with 4 possible answers ?data strings so that i can update ordered list in html
var question = document.getElementById("question");
var firstAnswer = document.getElementById("first-answer");
var secondAnswer = document.getElementById("second-answer");
var thirdAnswer = document.getElementById("third-answer");
var forthAnswer = document.getElementById("forth-answer");

startButton.addEventListener("click", function firstQuestion() {
  score = 0;
  document.getElementById("starting-page").style.display = "none";
  document.getElementById("question-page").style.display = "block";
  setTimer();

  question.textContent = question.getAttribute("data-q1");
  firstAnswer.textContent = firstAnswer.getAttribute("data-a1");
  secondAnswer.textContent = secondAnswer.getAttribute("data-a1");
  thirdAnswer.textContent = thirdAnswer.getAttribute("data-a1");
  forthAnswer.textContent = forthAnswer.getAttribute("data-a1");

  for (let i = 0; i < answers.length; i++) {
    $("#answers").on("click", function(event) {
      let answer = event.target;
      let correct = answer.getAttribute("data-a1");
  
      if (correct === "3. Mocha") {
        score++;
        secondQuestion();
        $("#answers").on("click", function(event) {
            let answer = event.target;
            let correct = answer.getAttribute("data-a1");
        
            if (correct === "3. Mocha") {
              score++;
              secondQuestion();
      } else {
        secondsLeft = secondsLeft - 5;
        alert("Oh no!!!\nWhere did those 5 seconds go!!!");
      }
    });
  }
});

// depending on the answer it will either add to score or remove time from counter
// have listener on container to look for button press of answer
// when correct answers are selected have score added to running total
// when incorrect have time subtracted from timer
// TODO: if possible i would like to get an alert sound here or at least change color to indicate time is removed
var score = 0;
var answers = document.querySelectorAll(".answers");
console.log(answers);



// Question number 2
function secondQuestion() {
  question.textContent = question.getAttribute("data-q2");
  firstAnswer.textContent = firstAnswer.getAttribute("data-a2");
  secondAnswer.textContent = secondAnswer.getAttribute("data-a2");
  thirdAnswer.textContent = thirdAnswer.getAttribute("data-a2");
  forthAnswer.textContent = forthAnswer.getAttribute("data-a2");

  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function (event) {
      let answer = event.target;
      let correct = answer.getAttribute("data-a2");

      if (correct === "1. ( )") {
        score++;
        answers[i].removeEventListener("click", event, {capture: false});
        thirdQuestion();
      } else {
        secondsLeft = secondsLeft - 5;
        alert("Oh no!!!\nWhere did those 5 seconds go");
      }
    });
  }
}

// Question number 3
function thirdQuestion() {
  question.textContent = question.getAttribute("data-q3");
  firstAnswer.textContent = firstAnswer.getAttribute("data-a3");
  secondAnswer.textContent = secondAnswer.getAttribute("data-a3");
  thirdAnswer.textContent = thirdAnswer.getAttribute("data-a3");
  forthAnswer.textContent = forthAnswer.getAttribute("data-a3");

  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function (event) {
      let answer = event.target;
      let correct = answer.getAttribute("data-a3");

      if (correct === "4. Brendan Eich") {
        score++;
        answers[i].removeEventListener("click", event);
        forthQuestion();
      } else {
        secondsLeft = secondsLeft - 5;
        alert("Oh no!!!\nWhere did those 5 seconds go");
      }
    });
  }
}

// TODO: end game condition leads to score screen when initials can be stored
// TODO: log initials and score to string and save to local storage so they can return to game
// TODO: auto go to high score screen, pull from local storage to display records
// TODO: have link that can view high score at any time (optional) also button that clears high score (optional)
// TODO: on high score screen have button to start quiz which will start function to repeat quiz
//
// make sure that correct answers are not in same location on list ?possible set values of different answers to true or false
// (create a class for each answer and each display could have true or false value)
// Ended up setting up data- attributs and then selecting which attributes i need to select
/