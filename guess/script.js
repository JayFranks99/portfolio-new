"use strict";

// Setting up variables
let message = document.querySelector(".message");
let scoreElem = document.querySelector(".score");
console.log(scoreElem);
let highScoreElem = document.querySelector(".highscore");
// Setting defualt score values
let score = 20;
let highScore = 0;

// Random number function - set min, max values as inputs when calling
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Creating a random number between 1 and 20
let number = document.querySelector(".number").textContent;
number = randomIntFromInterval(1, 20);
console.log(number);

// Check button event listnener - comparing the guess value to the random number
const checkBtn = document.querySelector(".check");
checkBtn.addEventListener("click", function () {
  // Grab the guess value
  let guessValue = Number(document.querySelector(".guess").value);
  console.log(guessValue, typeof guessValue);
  // if guessValue is zero, 0 is a falsy value, invert this = true
  if (!guessValue || guessValue > 21 || guessValue < 0) {
    message.textContent = "Between 1 and 20!";
  } else if (guessValue !== number) {
    // if guess vlaue is greater than the random number, display "Too high!" otherwise, display "Too low!"
    message.textContent = guessValue > number ? "Too high!" : "Too low!";
    // Lower score by 1
    score--;
    scoreElem.textContent = score;
  } else {
    message.textContent = "Correct Number!";
    document.body.style.backgroundColor = "#36bb36";
    // Revealing the number
    document.querySelector(".number").textContent = number;
    // Setting highscore
    if (score > highScore) {
      highScore = score;
      highScoreElem.textContent = highScore;
    }
  }
});

// Resetting values on again button click
const againBtn = document.querySelector(".again");
againBtn.addEventListener("click", function () {
  score = 20;
  scoreElem.textContent = score;
  number = randomIntFromInterval(1, 20);
  console.log(number);
  document.querySelector(".number").textContent = "?";
  document.body.style.backgroundColor = "#2f2f2f";
  message.textContent = "Start guessing...";
});
