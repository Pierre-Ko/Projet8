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

let currentSlideIndex = 0;
const totalSlides = slides.length;

// Sélectionnez les éléments du DOM
const carouselImage = document.querySelector('#banner .banner-img');
const tagLine = document.querySelector('#banner p');
const leftArrow = document.querySelector('#banner .arrow_left');
const rightArrow = document.querySelector('#banner .arrow_right');

// Fonction pour mettre à jour le carrousel avec la slide actuelle
function updateCarousel() {
    const currentSlide = slides[currentSlideIndex];
    carouselImage.src = `./assets/images/slideshow/${currentSlide.image}`;
    tagLine.innerHTML = currentSlide.tagLine;
}

// Écouteurs d'événements pour les flèches
leftArrow.addEventListener('click', function () {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
    updateDots(); // Ajoutez cette ligne pour mettre à jour les points
});

rightArrow.addEventListener('click', function () {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateCarousel();
    updateDots(); // Ajoutez cette ligne pour mettre à jour les points
});

// Chargez la première slide au chargement de la page
updateCarousel();
// Sélectionnez l'élément du DOM pour les points
const dotsContainer = document.querySelector('#banner .dots');

// Créez les points en fonction du nombre de slides
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
}

// Sélectionnez tous les points
const dots = document.querySelectorAll('#banner .dot');

// Fonction pour mettre à jour les points
function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentSlideIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Écouteurs d'événements pour les points
dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
        currentSlideIndex = index;
        updateCarousel();
        updateDots();
    });
});

// Chargez les points initiaux
updateDots();