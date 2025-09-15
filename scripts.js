const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const total = images.length;

// --- Función para mostrar la imagen ---
function showSlide(i) {
  if (i < 0) {
    index = total - 1;
  } else if (i >= total) {
    index = 0;
  } else {
    index = i;
  }
  slide.style.transform = `translateX(${-index * 100}%)`;
}

// --- Botones manuales ---
prevBtn.addEventListener('click', () => {
  showSlide(index - 1);
  resetInterval();
});

nextBtn.addEventListener('click', () => {
  showSlide(index + 1);
  resetInterval();
});

// --- Auto-play cada 3 segundos ---
let autoPlay = setInterval(() => {
  showSlide(index + 1);
}, 3000);

// --- Resetear autoplay al usar botones ---
function resetInterval() {
  clearInterval(autoPlay);
  autoPlay = setInterval(() => {
    showSlide(index + 1);
  }, 3000);
}

// --- Inicial ---
showSlide(index);
