"use strict";

// VARS
const lowerBtn = document.querySelector("#lower-btn");
const higherBtn = document.querySelector("#higher-btn");
// Setting default player score
const score = document.querySelector("#score");
let playerScore = 0;
score.textContent = playerScore;
// Setting default player high score
const highScore = document.querySelector("#high-score");
let playerHighScore = 0;
highScore.textContent = playerHighScore;
// Setting current card number to default 7
const card = document.querySelector("#card");
let currentCard = 7;
// Setting the default card image
let cardImage = currentCard + "H.svg";
card.setAttribute("src", cardImage);

// Default number
let number = 0;

// Audio
const boo = new Audio("boo.mp3");
const woo = new Audio("woo.mp3");
const oo = new Audio("oo.mp3");

// GAME SOUND FUNCTIONS
const booNoise = function () {
  boo.play();
  oo.pause();
  oo.currentTime = 0;
  woo.pause();
  woo.currentTime = 0;
};

const wooNoise = function () {
  woo.currentTime = 0;
  woo.play();
  boo.pause();
  boo.currentTime = 0;
  oo.pause();
  oo.currentTime = 0;
};

const ooNoise = function () {
  oo.play();
  boo.pause();
  boo.currentTime = 0;
  woo.pause();
  woo.currentTime = 0;
};

const noNoise = function () {
  woo.pause();
  woo.currentTime = 0;
  oo.pause();
  oo.currentTime = 0;
  boo.pause();
  boo.currentTime = 0;
};

// Random number function - set min, max values as inputs when calling
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// New card function
const newCard = function () {
  // Creating new random number
  number = randomIntFromInterval(2, 14);
  console.log(`CARD Number is ${currentCard}`);
  console.log(`Number is ${number}`);
  // Setting image based on random number
  cardImage = number + "H.svg";
  card.setAttribute("src", cardImage);
};

// Guess again function
const guessAgain = function () {
  ooNoise();
  alert("Guess again!");
};

// Correct guess again function
const correctGuess = function () {
  wooNoise();
  // Correct guess - increase score
  playerScore = playerScore + 1;
  score.textContent = playerScore;
  console.log(playerScore);
  // Assign card number to random number
  currentCard = number;
};

// Resetting the game function
const resetGame = function () {
  booNoise();
  alert("Game over! Wrong guess, try again...");
  // Highscore function
  if (playerScore > playerHighScore) {
    playerHighScore = playerScore;
    highScore.textContent = playerHighScore;
  }
  // Reset score back to 0
  playerScore = 0;
  // Reset number
  number = 0;
  score.textContent = playerScore;
  // Resetting card image back to 7
  currentCard = 7;
  cardImage = currentCard + "H.svg";
  // Setting image based on random number
  card.setAttribute("src", cardImage);
  // No audio
  noNoise();
};

/////MAIN HIGHER LOWER FUNCTIONS   ////////

// Lower button click
lowerBtn.addEventListener("click", function () {
  newCard();
  if (number === currentCard) {
    guessAgain();
  } else if (number < currentCard) {
    correctGuess();
  } else {
    resetGame();
  }
});

// Lower button click
higherBtn.addEventListener("click", function () {
  newCard();
  if (number === currentCard) {
    guessAgain();
  } else if (number > currentCard) {
    correctGuess();
  } else {
    resetGame();
  }
});
