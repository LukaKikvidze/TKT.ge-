const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let currentPosition = 0;

function updateSlider() {
  slider.style.transform = `translateX(${-currentPosition * 100}px)`;

  // Enable/disable buttons
  prevBtn.disabled = currentPosition === 0;
  nextBtn.disabled = currentPosition === slider.children.length - 4;
}

nextBtn.addEventListener('click', () => {
  currentPosition++;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentPosition--;
  updateSlider();
});

updateSlider();


//main slider js 
const sliderContainer = document.getElementById('sliderContainer');
const slides = document.querySelectorAll('.main-slider-item');
const slideWidth = slides[0].offsetWidth + 20;
let currentIndex = 1;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

sliderContainer.appendChild(firstClone);
sliderContainer.insertBefore(lastClone, slides[0]);


sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

function updateSliderPosition() {
    sliderContainer.style.transition = 'transform 0.5s ease-in-out';
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

sliderContainer.addEventListener('transitionend', () => {
    if (currentIndex === 0) {
        sliderContainer.style.transition = 'none'; 
        currentIndex = slides.length;
        sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    if (currentIndex === slides.length + 1) {
        sliderContainer.style.transition = 'none'; 
        currentIndex = 1; 
        sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});

function nextSlide() {
    if (currentIndex < slides.length + 1) {
        currentIndex++;
        updateSliderPosition();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
}


