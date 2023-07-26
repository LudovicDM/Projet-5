import { slides } from "./data.js";

const image = document.querySelector(".banner-img");

export let position = 0;


export function slideRight() {
    position++;
    if (position == slides.length) {
      position = 0;
    }
    tagLine.innerHTML = slides[position].tagLine;
    image.src = `./assets/images/slideshow/${slides[position].image}`;
    dotChange();
  }
  
 export function slideLeft() {
    position--;
    if (position < 0) {
      position = slides.length - 1;
    }
    tagLine.innerHTML = slides[position].tagLine;
    image.src = `./assets/images/slideshow/${slides[position].image}`;
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