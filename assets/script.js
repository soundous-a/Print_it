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

const arrow_left	= document.getElementById("arrow_left"); // flèhe gauche
const arrow_right	= document.getElementById("arrow_right"); // flèche droite
let	image 		= document.querySelector(".banner-img"); // image qui doit slider
let	tagLine		= document.getElementById("tagLine"); // texte de l'image
let index 		= 0; 
const dots = document.querySelectorAll(".dot"); // points de pagincation
dots[0].classList.add("dot_selected"); // Le premier slide est actif

function changeSilde_updateDots($index, $dots){
	let	current_slide = slides[index]; // je récupère le slide courant
	// Je récupère me chemin de l'image précédente et le tagLine pour les afficher
	image.src = `./assets/images/slideshow/${current_slide.image}`; 
	tagLine.innerHTML = current_slide.tagLine;
	// update de la pagination
	for(let i = 0; i < dots.length; i++) {
		if (dots[i].classList.contains("dot_selected"))
			dots[i].classList.remove("dot_selected");
	}
	dots[index].classList.add("dot_selected");
}

arrow_left.addEventListener("click", (event) => { // flèche gauche
	if(--index < 0)
		index = slides.length - 1;  // -1 pour le '\0'
	changeSilde_updateDots(index, dots);
})

arrow_right.addEventListener("click", (event) => { // flèche droite
	if(++index > slides.length - 1)
		index = 0;
	changeSilde_updateDots(index, dots);
})
