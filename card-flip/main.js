// const card = document.querySelector(".card__inner");
//
// card.addEventListener("click", function (e) {
//   card.classList.toggle('is-flipped');
// });

// Multiple cards
const card = document.querySelectorAll(".card__inner");

function flipCard() {
  this.classList.toggle('is-flipped');
}

card.forEach((card) => card.addEventListener("click", flipCard));
