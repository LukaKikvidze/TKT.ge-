// Translations for Georgian and English
const translations = {
    "english": {
        "search-placeholder": "Search",
        "categories": "Categories",
        "flight": "Flight",
        "signin": "Sign In",
        "music-concert": "Music/Concert",
        "cinema": "Cinema",
        "railway": "Railway",
        "transport": "Transport",
        "theater": "Theater",
        "opera": "Opera",
        "sport": "Sport",
        "sea": "Sea",
        "festival": "Festival",
        "children": "Children",
        "conference": "Conference",
        "standup": "Stand-up",
        "tourism": "Tourism",
        "hobby": "Hobby",
        "masterclass": "Masterclass",
        "museum": "Museum",
        "international": "International",
        "car-commercial": "Car / Commercial",
        "real-estate": "Real Estate",
        "office": "Office",
        "industrial": "Industrial"
    },
    "georgian": {
        "search-placeholder": "ძებნა",
        "categories": "კატეგორიები",
        "flight": "ფრენა",
        "signin": "შესვლა",
        "music-concert": "მუსიკა/კონცერტი",
        "cinema": "კინო",
        "railway": "რკინიგზა",
        "transport": "ტრანსპორტი",
        "theater": "თეატრი",
        "opera": "ოპერა",
        "sport": "სპორტი",
        "sea": "ზღვა",
        "festival": "ფესტივალი",
        "children": "საბავშვო",
        "conference": "კონფერენცია",
        "standup": "სტენდაფი",
        "tourism": "ტურიზმი",
        "hobby": "ჰობი",
        "masterclass": "მასტერკლასი",
        "museum": "მუზეუმი",
        "international": "საერთაშორისო",
        "car-commercial": "მანქანა / კომერციული",
        "real-estate": "უძრავი",
        "office": "ოფისი",
        "industrial": "სამრეწველო"
    }
};

let currentLanguage = "georgian"; // default language is Georgian

// Toggle language function
function toggleLanguage() {
    currentLanguage = currentLanguage === "english" ? "georgian" : "english";
    
    // Update button text
    const button = document.getElementById("language");
    if (currentLanguage === "english") {
        button.innerHTML = `<i class="fa-solid fa-globe"></i>English`;
    } else {
        button.innerHTML = `<i class="fa-solid fa-globe"></i>ქარ`;
    }

    // Update page content based on the current language
    updateTextContent();
}

// Function to update the text content based on the selected language
function updateTextContent() {
    const elements = document.querySelectorAll('[data-translate-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[currentLanguage][key]) {
            element.innerText = translations[currentLanguage][key];
        }
    });
}

// Initially update the text content when the page loads
document.addEventListener("DOMContentLoaded", function() {
    updateTextContent();
});
