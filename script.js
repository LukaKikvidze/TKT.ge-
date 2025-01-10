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
