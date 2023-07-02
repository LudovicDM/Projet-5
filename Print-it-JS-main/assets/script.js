const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Eléments HTML

const arrow = document.querySelector(".arrow");
const left = document.querySelector(".arrowLeft");
const right = document.querySelector(".arrowRight");
const image = document.querySelector(".banner-img");
const tagLine = document.getElementById("tagLine");
const dots = document.querySelector(".dots");

// Position

let position = 0;

//boucle

for(let i= 0; i<slides.length; i++){
	const dot =document.createElement("div")
	dot.classList.add("dot")
	if(i===position){
		dot.classList.add("dot_selected")
	}
	dots.appendChild(dot)

}
function dotChange(){
	const allDots = document.querySelectorAll(".dot")
	allDots.forEach((dot,index)=>{
		if(position===index){
			dot.classList.add("dot_selected")	
		}else{
			dot.classList.remove("dot_selected")
		}
	})
	
		console.log(allDots[position])
}

//event click
right.addEventListener('click', slideRight)
console.log('right ok')
function slideRight() {
	position++;
	if (position == slides.length) {
		position = 0;
	}
	image.src =`./assets/images/slideshow/${slides[position].image}`;
	tagLine.innerHTML = slides[position].tagLine;
	dotChange()
}

left.addEventListener('click', slideLeft);
console.log('left ok');
function slideLeft() {
	position--;
	if (position < 0) {
		position = slides.length - 1;
	}
	image.src = `./assets/images/slideshow/${slides[position].image}`;
	tagLine.innerHTML = slides[position].tagLine;
	dotChange()
}

