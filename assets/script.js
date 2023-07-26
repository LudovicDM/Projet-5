import { slides } from "./data.js";
import { slideLeft } from "./fonction.js";
import { slideRight } from "./fonction.js";
import { position } from "./fonction.js";
// VARIABLES //


const left = document.querySelector(".arrowLeft");
const right = document.querySelector(".arrowRight");
const dots = document.querySelector(".dots");



// LOOP //

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


