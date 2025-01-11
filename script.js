const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let currentPosition = 0; // Track the current slide position

function updateSlider() {
  // Move the slider
  slider.style.transform = `translateX(${-currentPosition * 100}px)`;

  // Enable/disable buttons
  prevBtn.disabled = currentPosition === 0;
  nextBtn.disabled = currentPosition === slider.children.length - 4; // Show 4 items at a time
}

nextBtn.addEventListener('click', () => {
  currentPosition++;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentPosition--;
  updateSlider();
});

// Initialize the slider
updateSlider();



//main slider js 
const sliderContainer = document.getElementById('sliderContainer');
const slides = document.querySelectorAll('.main-slider-item');
const slideWidth = slides[0].offsetWidth + 20; // Slide width + 20px gap
let currentIndex = 1; // Start at 1 for cloned slides

// Clone the first and last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

// Append and prepend cloned slides
sliderContainer.appendChild(firstClone);
sliderContainer.insertBefore(lastClone, slides[0]);

// Update the slider container's position to start at the first real slide
sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

// Update slider position
function updateSliderPosition() {
    sliderContainer.style.transition = 'transform 0.5s ease-in-out';
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Handle transition end for seamless looping
sliderContainer.addEventListener('transitionend', () => {
    if (currentIndex === 0) {
        sliderContainer.style.transition = 'none'; // Disable animation
        currentIndex = slides.length; // Jump to the last real slide
        sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    if (currentIndex === slides.length + 1) {
        sliderContainer.style.transition = 'none'; // Disable animation
        currentIndex = 1; // Jump to the first real slide
        sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});

// Move to the next slide
function nextSlide() {
    if (currentIndex < slides.length + 1) {
        currentIndex++;
        updateSliderPosition();
    }
}

// Move to the previous slide
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
}
