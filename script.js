const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let index = 0;

function updateSlider() {
  slider.style.transform = `translateX(${-index * 100}px)`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slider.children.length - 5;
}

nextBtn.addEventListener('click', () => {
  index++;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  index--;
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

//Language
const translations = {
        ka: {
            "language": "ქარ",
            "sign-in": "შესვლა",
        },
        en: {
            "language": "EN",
            "sign-in": "Sign In",
        }
    };

    // Get all elements to translate
    const elementsToTranslate = {
        "language": document.getElementById("language"),
        "sign-in": document.getElementById("sign-in"),
    };

    function changeLanguage() {
        const currentLang = document.documentElement.lang === 'ka' ? 'ka' : 'en';
        const newLang = currentLang === 'ka' ? 'en' : 'ka';
        document.documentElement.lang = newLang;
        
        for (let i in elementsToTranslate) {
            const element = elementsToTranslate[i];
            if (element) {
                element.textContent = translations[newLang][i];
            }
        }
    }

    document.documentElement.lang = 'ka';
    changeLanguage();