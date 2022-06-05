function openNav() {
  document.getElementById("myNav").style.height = "100%"; //expand from 0% to 100%
  document.getElementById("myNav").style.overflow = "hidden"; //prevents scorlling
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%"; //reduce from 100% to 0%
}

var features =  document.querySelector(".features");
var download =  document.querySelector(".download");

features.onclick = function() {
document.getElementById("myNav").style.height = "0%"; //reduce from 100% to 0%
};

download.onclick = function() {
document.getElementById("myNav").style.height = "0%"; //reduce from 100% to 0%
};
