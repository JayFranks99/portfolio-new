'use strict';

//-----Loader function-----//
// $('body').append('<div id="loader"><img class="rotate" src="images/jf-logo.png" /></div>'); (APPEND CAUSES INITIAL SHOWING OF WEBPAGE, THEN SHOWS LOADER)
$(window).on('load', function(){
  setTimeout(removeLoader, 1000); //wait for page load PLUS X seconds.
});
function removeLoader(){
    $( "#loader" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loader" ).remove(); //makes page more lightweight
  });
}

//-----Show hide nav-----//

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

//-----Portfolio button toggle-----//

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

// MODAL CODE - ONE MODAL - ASSIGN BUTTON IDS - CHANGE IMAGE / VIDEO URL BASED ON BTN CLICK

// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal
var modalImg = document.getElementById("imgModal");
// Getting the video
var modalVideo = document.getElementById("videoModal");

//CODING PORTFOLIO
var motive = document.getElementById("motive");
motive.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://www.youtube.com/embed/oRj7Dy6WQss";
}

//DESIGN PORTFOLIO
var avicennaPoster = document.getElementById("avicenna");
avicennaPoster.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/avicenna.jpg";
  modalImg.style.maxWidth = "350px";
}

var avicennaVid = document.getElementById("avicenna-video");
avicennaVid.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://www.youtube.com/embed/i4UVEiPaa28";
}

var lifelabAds = document.getElementById("lifelab-button");
lifelabAds.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/lifelab.jpg";
}

var tmiSales = document.getElementById("tmi-button");
tmiSales.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/tmi-sales.jpg";
  modalImg.style.maxWidth = "800px";
}

var hsKits = document.getElementById("hs-kits");
hsKits.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/hs-kits.jpg";
  modalImg.style.maxWidth = "600px";
}

var altitude = document.getElementById("altitude");
altitude.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio/altitude.svg";
  // modalImg.style.width = "80%";
}

var lcfc = document.getElementById("lcfc");
lcfc.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://www.youtube.com/embed/pg5yNVWRX24";
}

var absolut = document.getElementById("absolut");
absolut.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/absolut.svg";
  modalImg.style.maxWidth = "250px";
}

var awinTyi = document.getElementById("awin");
awinTyi.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = "images/portfolio-main/awin.gif";
}

// DIGITAL PORTFOLIO
var hunter = document.getElementById("hunter");
hunter.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://www.youtube.com/embed/fcC3tDAKYd8";
}

var sonar = document.getElementById("sonar");
sonar.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://www.youtube.com/embed/DPGW3aN-9hE";
}

var doctor = document.getElementById("doctor");
doctor.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://www.youtube.com/embed/hHDM5MB40Qo";
}

var boost = document.getElementById("boost");
boost.onclick = function() {
  modal.style.display = "flex";
  modal.classList.add("video-modal");
  modalImg.style.display = "none";
  modalVideo.classList.add("video");
  modalVideo.src = "https://www.youtube.com/embed/eA9PlVsHj3c";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalImg.style.display = "block";
  modalVideo.classList.remove("video");
  modalVideo.src = ""; //Stopping music from playing when closed
  // Reseting  to defualt values due to resetting above based on image / video type
  modalImg.style.maxWidth = "450px";
  modalVideo.style.maxWidth = "70%";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalImg.style.display = "block";
    modalVideo.classList.remove("video");
    modalVideo.src = "";
    modalImg.style.maxWidth = "450px";
    modalVideo.style.maxWidth = "70%";
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

  $(document).ready(function() {
    $("#close-nav-btn").click(function(){
      $('body').css('overflow', 'auto');
    });
    $("#hamburger").click(function(){
      $('body').css('overflow', 'hidden');
    });
  });

}

// Smooth scrolling fix for mobile / browsers that don't support
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
