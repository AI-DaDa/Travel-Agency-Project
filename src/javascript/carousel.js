const track = document.getElementById('carousel-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentSlide = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
