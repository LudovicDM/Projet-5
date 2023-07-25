import { slides } from "./data.js";

const arrow = document.querySelector(".arrow");
const left = document.querySelector(".arrowLeft");
const right = document.querySelector(".arrowRight");
const image = document.querySelector(".banner-img");
const tagLine = document.getElementById("tagLine");
const dots = document.querySelector(".dots");

let position = 0;

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === position) {
    dot.classList.add("dot_selected");
  }
  dots.appendChild(dot);
}


right.addEventListener("click", slideRight);
left.addEventListener("click", slideLeft);

// FUNCTION //

function slideRight() {
  position++;
  if (position == slides.length) {
    position = 0;
  }
  image.src = `./assets/images/slideshow/${slides[position].image}`;
  tagLine.innerHTML = slides[position].tagLine;
  dotChange();
}

function slideLeft() {
  position--;
  if (position < 0) {
    position = slides.length - 1;
  }
  image.src = `./assets/images/slideshow/${slides[position].image}`;
  tagLine.innerHTML = slides[position].tagLine;
  dotChange();
}

function dotChange() {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot, index) => {
    if (position === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
