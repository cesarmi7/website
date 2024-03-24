function setFullHeight() {
    var viewportHeight = window.innerHeight;
    document.querySelector('.full-screen-element').style.height = viewportHeight + 'px';
}

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

window.onload = setFullHeight;
window.onresize = setFullHeight;

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

document.addEventListener("DOMContentLoaded", function() {
    const tripsLink = document.querySelector(".t");
    tripsLink.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSection = document.querySelector("#travels");
        targetSection.scrollIntoView({ behavior: "smooth"});
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const tripsLink = document.querySelector(".a");
    tripsLink.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSection = document.querySelector("#aboutme");
        targetSection.scrollIntoView({ behavior: "smooth"});
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const tripsLink = document.querySelector(".c");
    tripsLink.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSection = document.querySelector("#contact");
        targetSection.scrollIntoView({ behavior: "smooth"});
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const tripsLink = document.querySelector(".p");
    tripsLink.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSection = document.querySelector("#purpose");
        targetSection.scrollIntoView({ behavior: "smooth"});
    });
});

function toggleLanguage(currentLanguage) {
    // Assuming you have a data-key attribute for each translatable element
    document.querySelectorAll("[data-key]").forEach(elem => {
        const key = elem.getAttribute("data-key");
        elem.textContent = translations[key][currentLanguage];
    });
}

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
};