// write at least 5 different question with 4 possible answers ?data strings so that i can update ordered list in html

// var questions = [
//     {
//         "question": "this is my question?",
//         "answers": ["1", "3", "4"]
//         "correct-answer": 2
//     }, {

//     }
// ]   Alternate way of storing questions and answers through objects

var firstQuestion = [
  "What was JavaScript initially called?",
  "Vanilla",
  "Caramel",
  "Mocha",
  "Latte",
  "third-possible",
];
var secondQuestion = [
  "In a function what do you put the parameters within?",
  "( )",
  "{ }",
  "[ ]",
  '" "',
  "first-possible",
];
var thirdQuestion = [
  "Who created JavaScript?",
  "James Gosling",
  "Erik Gustuson",
  'Yukihiro "Matz" Matsumoto',
  "Brendon Eich",
  "fourth-possible",
];
var forthQuestion = [
  "Which Method returns string to upper case?",
  "toUpper()",
  "toUpperCase()",
  "changeCase(upper)",
  "None of the above",
  "second-possible",
];
var fifthQuestion = [
  "Is JavaScript of frontend or backend Language?",
  "Frontend",
  "Backend",
  "Neither",
  "Both",
  "fourth-possible",
];

// var list for each page to bae able to display or hide
var startButton = document.getElementById("start-button");
var startingPage = document.getElementById("starting-page");
var questionPage = document.getElementById("question-page");
var resultsPage = document.getElementById("results-page");
var highscorePage = document.getElementById("highscore-page");

// have listener to watch for button press to start timer and display first question
var time = document.querySelector(".time");
var secondsLeft = 60;
var score = 0;
var timerCount;

function setTimer() {
  timerCount = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds and times up!";

    if (secondsLeft <= 0) {
      clearInterval(timerCount);
      gameOver();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerCount);
}

startButton.addEventListener("click", runQuiz);
startButton.addEventListener("click", setTimer);

var questionNumber = 0;
var allQuestions = [
  firstQuestion,
  secondQuestion,
  thirdQuestion,
  forthQuestion,
  fifthQuestion,
];

allQuestions[questionNumber];

var displayQuestion = document.getElementById("question");
var firstPossible = document.getElementById("first-possible");
var secondPossible = document.getElementById("second-possible");
var thirdPossible = document.getElementById("third-possible");
var fourthPossible = document.getElementById("fourth-possible");

function showQuestionAndAnswers(currentQuestion) {
  displayQuestion.textContent = currentQuestion[0];
  firstPossible.textContent = currentQuestion[1];
  secondPossible.textContent = currentQuestion[2];
  thirdPossible.textContent = currentQuestion[3];
  fourthPossible.textContent = currentQuestion[4];
}

showQuestionAndAnswers(allQuestions[questionNumber]);

// // have listener on container to look for button press of answer
firstPossible.addEventListener("click", selectAnswer);
secondPossible.addEventListener("click", selectAnswer);
thirdPossible.addEventListener("click", selectAnswer);
fourthPossible.addEventListener("click", selectAnswer);

function runQuiz() {
  questionNumber = 0;
  score = 0;
  startingPage.style.display = "none";
  questionPage.style.display = "block";
  resultsPage.style.display = "none";
  highscorePage.style.display = "none";
}

// // depending on the answer it will either add to score or remove time from counter
// // when correct answers are selected have score added to running total
// // when incorrect have time subtracted from timer
// // TODO: if possible i would like to get an alert sound here or at least change color to indicate time is removed
function selectAnswer(event) {
  var currentId = event.target.id;
  console.log(currentId);
  var correctAnswer = allQuestions[questionNumber][5];
  if (currentId == correctAnswer) {
    console.log("correct");
    score++;
    console.log(score);
    questionNumber++;
    if (questionNumber == allQuestions.length) {
      gameOver();
      return;
    }
    showQuestionAndAnswers(allQuestions[questionNumber]);
  } else {
    secondsLeft = secondsLeft - 5;
    alert("Oh no!!!\nWhere did those 5 seconds go!!!");
  }
}

// end game condition leads to score screen where initials can be stored
function gameOver() {
  displayResults();
  stopTimer();
}

function displayResults() {
  document.getElementById("round-score").innerHTML = score;
  startingPage.style.display = "none";
  questionPage.style.display = "none";
  resultsPage.style.display = "block";
  highscorePage.style.display = "none";
}

var submitInitials = document.getElementById("submit-initials");
var initials = document.getElementById("initials-input");

// log initials and score to string and save to local storage so they can return to game
submitInitials.addEventListener("click", function (event) {
  event.preventDefault();
  var lastScore = {
    initials: initials.value.trim(),
    score: score,
  };

  console.log(initials);
  console.log(score);
  localStorage.setItem("lastScore", JSON.stringify(lastScore));
  displayHighscore();
});

// auto go to high score screen, pull from local storage to display records
function displayHighscore() {
  startingPage.style.display = "none";
  questionPage.style.display = "none";
  resultsPage.style.display = "none";
  highscorePage.style.display = "block";
  var lastScore = JSON.parse(localStorage.getItem("lastScore"));
  if (lastScore !== null) {
    document.getElementById("saved-player").innerHTML = lastScore.initials;
    document.getElementById("saved-score").innerHTML = lastScore.score;
  } else {
    return;
  }
}

// TODO: have link that can view high score at any time (optional) also button that clears high score (optional)
// TODO: on high score screen have button to start quiz which will start function to repeat quiz (optional)
//
// make sure that correct answers are not in same location on list ?possible set values of different answers to true or false
// (create a class for each answer and each display could have true or false value)
// Ended up setting up data- attributs and then selecting which attributes i need to select (this did not work and had to start from scratch using arrays)
