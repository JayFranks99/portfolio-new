var main = document.querySelector("main");
// FADE IN ANIMATION
$( document ).ready(function() {
     main.style.opacity = 1;
});


//DOCUMENT FADES OUT BEFORE IT ENTERS ANOTHER PAGE
$(window).on('beforeunload', function() {
  $('body').css({"opacity":"0","transition":"1s"});
});


function diceGame () {
  //Random number between 1 - 6;
  var randomNumber1 = Math.floor(Math.random() * 6) + 1
  //images/dice1.png - images/dice6.png
  var randomDiceImage = "images/dice" + randomNumber1 + ".png";
  //set the source to the randomDiceImage
  var image1 = document.querySelectorAll("img") [0].setAttribute("src", randomDiceImage);

  //image 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

  var image2 = document.querySelectorAll("img") [1].setAttribute("src", randomDiceImage2);


  //h1 messages
  var win = "Player 1 wins!";
  var draw = "It's a tie!";
  var loss = "Player 2 wins!";


  //Player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = win;
  }
  //Draw
  else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = draw;
  }
  //Player 2 wins
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = loss;
  }
}

//Calling the function diceGame;
diceGame();

//REFRESH PAGE FUNCTION ON CLICK
document.querySelector(".refresh").addEventListener("click", function () {
window.location.reload();
});
