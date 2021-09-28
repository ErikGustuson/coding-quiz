// write at least 5 different question with 4 possible answers ?data strings so that i can update ordered list in html
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

startButton.addEventListener("click", runQuiz);
startButton.addEventListener("click", setTimer);

var questionNumber = 0
var allQuestions = [firstQuestion, secondQuestion, thirdQuestion, forthQuestion, fifthQuestion];

allQuestions[questionNumber];

var displayQuestion = document.getElementById("question");
var firstPossible = document.getElementById("first-possible");
var secondPossible = document.getElementById("second-possible");
var thirdPossible = document.getElementById("third-possible");
var fourthPossible = document.getElementById("fourth-possible");


function showQuestionAndAnswers(currentQuestion) {
    displayQuestion.textContent = currentQuestion[0]
    firstPossible.textContent = currentQuestion[1]
    secondPossible.textContent = currentQuestion[2]
    thirdPossible.textContent = currentQuestion[3]
    fourthPossible.textContent = currentQuestion[4]
}

showQuestionAndAnswers(allQuestions[questionNumber])

firstPossible.addEventListener("click", selectAnswer)
secondPossible.addEventListener("click", selectAnswer)
thirdPossible.addEventListener("click", selectAnswer)
fourthPossible.addEventListener("click", selectAnswer)

function runQuiz() {
  startingPage.style.display = "none";
  questionPage.style.display = "block";
  resultsPage.style.display = "none";
  highscorePage.style.display = "none";
}



function selectAnswer(event) {
    var currentId = event.target.id
    console.log(currentId);
    var correctAnswer = allQuestions[questionNumber][5]
        if (currentId == correctAnswer) {
            console.log("correct");
            score++;
            console.log(score)
            questionNumber++;
            showQuestionAndAnswers(allQuestions[questionNumber]);
        } else {
            secondsLeft = secondsLeft - 5;
            alert("Oh no!!!\nWhere did those 5 seconds go!!!");
        }
}



// startButton.addEventListener("click", function firstQuestion() {


//   for (let i = 0; i < answers.length; i++) {
//     $("#answers").on("click", function(event) {
//       let answer = event.target;
//       let correct = answer.getAttribute("data-a1");

//       if (correct === "3. Mocha") {
//         score++;
//         secondQuestion();
//         $("#answers").on("click", function(event) {
//             let answer = event.target;
//             let correct = answer.getAttribute("data-a1");

//             if (correct === "3. Mocha") {
//               score++;
//               secondQuestion();
//       } else {
//         secondsLeft = secondsLeft - 5;
//         alert("Oh no!!!\nWhere did those 5 seconds go!!!");
//       }
//     });
//   }
// });

// // depending on the answer it will either add to score or remove time from counter
// // have listener on container to look for button press of answer
// // when correct answers are selected have score added to running total
// // when incorrect have time subtracted from timer
// // TODO: if possible i would like to get an alert sound here or at least change color to indicate time is removed
// var score = 0;
// var answers = document.querySelectorAll(".answers");
// console.log(answers);

// // Question number 2
// function secondQuestion() {
//   question.textContent = question.getAttribute("data-q2");
//   firstAnswer.textContent = firstAnswer.getAttribute("data-a2");
//   secondAnswer.textContent = secondAnswer.getAttribute("data-a2");
//   thirdAnswer.textContent = thirdAnswer.getAttribute("data-a2");
//   forthAnswer.textContent = forthAnswer.getAttribute("data-a2");

//   for (let i = 0; i < answers.length; i++) {
//     answers[i].addEventListener("click", function (event) {
//       let answer = event.target;
//       let correct = answer.getAttribute("data-a2");

//       if (correct === "1. ( )") {
//         score++;
//         answers[i].removeEventListener("click", event, {capture: false});
//         thirdQuestion();
//       } else {
//         secondsLeft = secondsLeft - 5;
//         alert("Oh no!!!\nWhere did those 5 seconds go");
//       }
//     });
//   }
// }

// TODO: end game condition leads to score screen when initials can be stored
// TODO: log initials and score to string and save to local storage so they can return to game
// TODO: auto go to high score screen, pull from local storage to display records
// TODO: have link that can view high score at any time (optional) also button that clears high score (optional)
// TODO: on high score screen have button to start quiz which will start function to repeat quiz
//
// make sure that correct answers are not in same location on list ?possible set values of different answers to true or false
// (create a class for each answer and each display could have true or false value)
// Ended up setting up data- attributs and then selecting which attributes i need to select
