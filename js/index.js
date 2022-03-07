'use strict';

// Loader function

// $('body').append('<div id="loader"><img class="rotate" src="images/jf-logo.png" /></div>'); (APPEND CAUSES INITIAL SHOWING OF WEBPAGE, THEN SHOWS LOADER)

$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loader" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loader" ).remove(); //makes page more lightweight
  });
}
// End of loader function

$(document).ready(function() {
  $("#close-nav-btn").click(function(){
    $(".overlay").slideUp(400);
  });
});

$(document).ready(function() {
  $( "div.overlay-content > a" ).click(function(){
    $(".overlay").slideUp(400);
  });
});

$(document).ready(function() {
  $("#hamburger").click(function(){
    $(".overlay").slideDown(400);
    $('.overlay').css('display', 'flex');
    $('.overlay').css('align-items', 'center');
  });
});


// Slick slider toggle
$(document).ready(function(){

  $(".coding").show();
  $(".design").hide();
  $(".digital").hide();

  $("#coding-btn").click(function(){

    $("#coding-btn").removeClass("j-btn3");
    $("#design-btn").addClass("j-btn3");
    $("#digital-btn").addClass("j-btn3");

    $(".coding").fadeIn(1000, "swing");
    $(".design").hide();
    $(".digital").hide();
    $('.portfolio').slick('setPosition');
  });
  $("#design-btn").click(function(){

    $("#coding-btn").addClass("j-btn3");
    $("#design-btn").removeClass("j-btn3");
    $("#digital-btn").addClass("j-btn3");

    $(".design").fadeIn(1000, "swing");
    $(".coding").hide();
    $(".digital").hide();
    $('.portfolio').slick('setPosition');
  });
  $("#digital-btn").click(function(){

    $("#coding-btn").addClass("j-btn3");
    $("#design-btn").addClass("j-btn3");
    $("#digital-btn").removeClass("j-btn3");

    $(".digital").fadeIn(1000, "swing");
    $(".coding").hide();
    $(".design").hide();
    $('.portfolio').slick('setPosition');
  });
});


// Doesn't work due to slick, alternative way used
// let portfolioBtn = document.getElementsByClassName("portfolio-btn");
// let i;
// for (i = 0; i < portfolioBtn.length; i++) {
//     portfolioBtn[i].addEventListener("click", function () {
//         let portfolioContent = this.nextElementSibling;
//         if (portfolioContent.style.display === "flex") {
//             portfolioContent.style.display = "none";
//         } else {
//             portfolioContent.style.display = "flex";
//         }
//     });
// }


/////////////////START OF MODAL CODE ///////////////////

// MODAL CODE - ONE MODAL - ASSIGN BUTTON IDS - CHANGE IMAGE URL BASED ON BTN CLICK

// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal
var modalImg = document.getElementById("img01");
// Getting the video
var modalVideo = document.getElementById("video01");

var btn1 = document.getElementById("lifelab-button");
btn1.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/lifelab.jpg";
}

var btn2 = document.getElementById("tmi-button");
btn2.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/tmi-kit.jpg";
}

var btn3 = document.getElementById("avicenna");
btn3.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/avicenna.jpg";
  modalImg.style.maxWidth = "350px";
}

var btn4 = document.getElementById("hs-kits");
btn4.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/hs-kits.jpg";
}

var btn5 = document.getElementById("altitude");
btn5.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/altitude.png";
}

var btn6 = document.getElementById("awin");
btn6.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/awin.gif";
}

var btn7 = document.getElementById("absolut");
btn7.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/absolut.jpg";
  modalImg.style.maxWidth = "225px";
}

var btn8 = document.getElementById("lcfc");
btn8.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://drive.google.com/file/d/1UPNqAfNTzRtpq8L02L20Mtq43AxUurfU/preview";
}

var btn8 = document.getElementById("avicenna-video");
btn8.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  // modalVideo.style.maxWidth = "400px";
  modalVideo.src = "https://drive.google.com/file/d/1GhFz3qJ80N0znS4Sgaq6Nef-RwR9B47f/preview";
}

var btn9 = document.getElementById("hunter");
btn9.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://drive.google.com/file/d/1HY79NL3s3n1Xq8rNAOqsvQHg-MDTXxmS/preview";
}

var btn10 = document.getElementById("sonar");
btn10.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://drive.google.com/file/d/1vavev-heJP8kQCfoNb_fcKZ2EY3-ZSrL/preview";
}

var btn11 = document.getElementById("doctor");
btn11.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://drive.google.com/file/d/1UnBX-8b8Q2FFwWYzu9OUmS9vVZ5TanME/preview";
}

var btn12 = document.getElementById("boost");
btn12.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://drive.google.com/file/d/1jlQLpCLPOb3wUxKfdZH2TFsa7CGsClN_/preview";
}

var btn13 = document.getElementById("motive");
btn13.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://drive.google.com/file/d/1FhyVQKJvtWLuz6z2mNNkQkFiPCnVSbDE/preview";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalImg.style.display = "block";
  modalVideo.classList.remove("video");
  modalVideo.src = "";
  // Reseting  to defualt values due to resetting above based on image / video type
  modalImg.style.maxWidth = "450px";
  modalVideo.style.maxWidth = "70%";
  // Unloads video on modal close, otherwise sounds continues playing
  // $('#video01').get(0).pause();
  // $('#video01').get(0).unload();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalVideo.src = "";
  }
}

//////////////////// END OF MODAL CODE///////////////////


// If window is less than 600px, hide hamburger, show when scrolled to Why Me section
if($(window).width() <= 600){

  var aboutSection = document.getElementById('about-section');
  var hamburger = document.getElementById('hamburger');

  window.addEventListener("scroll", function() {
    if (window.scrollY > (aboutSection.offsetTop)) {
        hamburger.style.opacity = "1";
        hamburger.classList.add("nav-active");
    }
    else {
      hamburger.style.opacity = "0";
      hamburger.classList.remove("nav-active");
    }
  });
}
