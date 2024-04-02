const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
        // This assumes you have a 'menu-icon' id on your burger menu and 'navbar' class on your nav
        const navbar = document.querySelector('.navbar');
        const menuIcon = document.querySelector('#menu-icon');
        const isOpen = navbar.classList.contains('open');

        // Check if navbar is open and if the menu icon is visible
        if (isOpen && window.getComputedStyle(menuIcon).display !== 'none') {
            // Close the navbar by removing 'open' class
            navbar.classList.remove('open');
            // If you're toggling the icon to an 'X' or similar, toggle this back
            menuIcon.classList.remove('bx-x');
        }
    });
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

let currentLanguage = 'en'; 

function toggleLanguage(currentLanguage) {
    document.querySelectorAll("[data-key]").forEach(elem => {
        const key = elem.getAttribute("data-key");
        elem.innerHTML = translations[key][currentLanguage]; 
    });
}
function changeLanguageEn() {
    if(currentLanguage == 'es'){
        currentLanguage = 'en'; 
        toggleLanguage(currentLanguage);
    }
}
function changeLanguageEs() {
    if(currentLanguage == 'en'){
        currentLanguage = 'es'; 
        toggleLanguage(currentLanguage);
    }
}
const translations = {
    "home":{
        "en": "Home",
        "es": "Inicio"
    },
    "travels":{
        "en": "Travels",
        "es": "Viajes"
    },
    "cities":{
        "en": "Cities",
        "es": "Ciudades"
    },
    "contact": {
        "en": "Contact",
        "es": "Contacto"
    },
    "contactMe": {
        "en": "Contact Me",
        "es": "Contáctame"
    },
    "404info": {
        "en": "Sorry, this page is still under development.",
        "es": "Lo siento, esta página aún está en desarrollo."
    },
    "help": {
        "en": "Help",
        "es": "Ayuda"
    },
    "social": {
        "en": "Social",
        "es": "Redes"
    },
    "cambio": {
        "en": "Currency Exchange",
        "es": "Cambio de Divisas"
    },
    "travels":{
        "en": "Travels",
        "es": "Viajes"
    },
    "contact":{
        "en": "Contact",
        "es": "Contacto"
    },
    "cities":{
        "en": "Cities",
        "es": "Ciudades"
    },
};