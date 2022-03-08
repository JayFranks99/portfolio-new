// Multiple cards
const card = document.querySelectorAll(".card__inner");

function flipCard() {
  this.classList.toggle('is-flipped');
}

card.forEach((card) => card.addEventListener("click", flipCard));
