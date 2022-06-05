//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

  var buttonClickedInnerHTML = this.innerHTML;

  makeSound(buttonClickedInnerHTML); // e.g "j" is the inner html for that particular button - this gets passed into the (keyValue) of makeSound

  buttonAnimation (buttonClickedInnerHTML);
  });

}

//Detecting KeyBoard Press

  document.addEventListener("keydown", function(event) { //(event) = event object - gives you access to the properties of the event that triggered the keydown property
    makeSound(event.key); // e.g event.key = "w" - this gets passed into (keyValue)

    buttonAnimation (event.key);

  });


function makeSound (keyValue) { // makeSound function created that allows an input

  switch (keyValue) {  // loops through until it finds the right keyValue e.g "j", and then runs that function
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "k":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "l":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    default: console.log(keyValue);
  }
}


//animation function - adding removing css styles 

function buttonAnimation (currentKey) {

  document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout (function () {
  document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);

}
