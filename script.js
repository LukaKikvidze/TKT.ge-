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

//Language


const translations = {
        ka: {
            "search-placeholder": "ძებნა",
            "language": "ქარ",
            "sign-in": "შესვლა",
            "categories": "კატეგორიები",
            "music-concert": "მუსიკა/კონცერტი",
            "cinema": "კინო",
            "railway": "რკინიგზა",
            "transport": "ტრანსპორტი",
            "theater": "თეატრი",
            "opera": "ოპერა",
            "sport": "სპორტი",
            "festival": "ფესტივალი",
            "childrens": "საბავშვო",
            "conference": "კონფერენცია",
            "standup": "სტენდაფი",
            "tourism": "ტურიზმი",
            "hobby": "ჰობი",
            "masterclass": "მასტერკლასი",
            "museum": "მუზეუმი",
            "international": "საერთაშორისო"
        },
        en: {
            "search-placeholder": "Search",
            "language": "EN",
            "sign-in": "Sign In",
            "categories": "Categories",
            "music-concert": "Music/Concert",
            "cinema": "Cinema",
            "railway": "Railway",
            "transport": "Transport",
            "theater": "Theater",
            "opera": "Opera",
            "sport": "Sport",
            "festival": "Festival",
            "childrens": "Children's",
            "conference": "Conference",
            "standup": "Standup",
            "tourism": "Tourism",
            "hobby": "Hobby",
            "masterclass": "Masterclass",
            "museum": "Museum",
            "international": "International"
        }
    };

    // Get all elements to translate
    const elementsToTranslate = {
        "search-placeholder": document.getElementById("search-placeholder"),
        "language": document.getElementById("language"),
        "sign-in": document.getElementById("sign-in"),
        "categories": document.querySelector('.categories-dropdown button p'),
        "music-concert": document.querySelector('.categories-dropdown-content a:nth-child(1)'),
        "cinema": document.querySelector('.categories-dropdown-content a:nth-child(2)'),
        "railway": document.querySelector('.categories-dropdown-content a:nth-child(3)'),
        "transport": document.querySelector('.categories-dropdown-content a:nth-child(4)'),
        "theater": document.querySelector('.categories-dropdown-content a:nth-child(5)'),
        "opera": document.querySelector('.categories-dropdown-content a:nth-child(6)'),
        "sport": document.querySelector('.categories-dropdown-content a:nth-child(7)'),
        "festival": document.querySelector('.categories-dropdown-content a:nth-child(8)'),
        "childrens": document.querySelector('.categories-dropdown-content a:nth-child(9)'),
        "conference": document.querySelector('.categories-dropdown-content a:nth-child(10)'),
        "standup": document.querySelector('.categories-dropdown-content a:nth-child(11)'),
        "tourism": document.querySelector('.categories-dropdown-content a:nth-child(12)'),
        "hobby": document.querySelector('.categories-dropdown-content a:nth-child(13)'),
        "masterclass": document.querySelector('.categories-dropdown-content a:nth-child(14)'),
        "museum": document.querySelector('.categories-dropdown-content a:nth-child(15)'),
        "international": document.querySelector('.categories-dropdown-content a:nth-child(16)')
    };

    // Function to toggle language
    function toggleLanguage() {
        const currentLang = document.documentElement.lang === 'ka' ? 'ka' : 'en';
        const newLang = currentLang === 'ka' ? 'en' : 'ka';
        document.documentElement.lang = newLang;
        
        // Update the text content of elements
        for (let key in elementsToTranslate) {
            const element = elementsToTranslate[key];
            if (element) {
                element.textContent = translations[newLang][key];
            }
        }
    }

    // Set the initial language
    document.documentElement.lang = 'ka'; // Default language is Georgian
    toggleLanguage(); // Load the initial language