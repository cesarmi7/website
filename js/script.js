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
    "aboutMe":{
        "en": "About me",
        "es": "Sobre mi"
    },
    "travels":{
        "en": "Travels",
        "es": "Viajes"
    },
    "purpose":{
        "en": "Purpose",
        "es": "Propósito"
    },
    "welcomeMessage": {
        "en": "Let's explore this world together, documenting trips and planning new ones.<br>There is still a long way to go, mountains to climb, pictures to take, and food to try. <br>So come along with me.",
        "es": "Dame la mano y vamos a darle la vuelta al mundo, documentando viajes y <br>planificando nuevos. Todavía hay un largo camino por recorrer, montañas <br>por escalar, fotos que tomar y comida por probar. Así que acompáñame."
    },
    "photography": {
        "en": "Photography",
        "es": "Fotografías"
    },
    "food": {
        "en": "Food",
        "es": "Comida"
    },
    "art": {
        "en": "Art",
        "es": "Arte"
    },
    "secretSpots": {
        "en": "Secret Spots",
        "es": "Lugares Secretos"
    },
    "animals": {
        "en": "Animals",
        "es": "Animales"
    },
    "aboutMeHeader": {
        "en": "¡Hola! I'm Cesar",
        "es": "¡Hola! Soy Cesar"
    },
    "aboutMeContent": {
        "en": "Thanks for checking out my blog! Here, you'll find posts about my trips, travel tips, food, and lots of photos. I'm currently studying Computer Science and Math in New York and I'm originally from Peru. I speak Spanish, English, and Italian, so if you have any questions, feel free to ask me!",
        "es": "¡Gracias por visitar mi blog! Aquí encontrarás publicaciones sobre mis viajes, consejos de viaje, comida y muchas fotos. Actualmente estoy estudiando Ingenieria de Sistemas y Matemáticas en Nueva York y soy originario de Perú. Hablo español, inglés e italiano, así que si tienes alguna pregunta, ¡no dudes en preguntarme!"
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
    "questions": {
        "en": "Any questions?",
        "es": "¿Alguna pregunta?"
    },
    "questionsinfo": {
        "en": "You can reach me by my socials, or you can share your email with me, and I'll contact you as soon as possible.",
        "es": "Puedes contactarme a través de mis redes sociales, o puedes compartir tu correo electrónico conmigo y te contactaré lo antes posible."
    },
    "email": {
        "en": "Enter your email...",
        "es": "Ingrese tu correo electrónico..."
    },
    "sent": {
        "en": "Sent",
        "es": "Redes"
    },
    "purposehead": {
        "en": "PURPOSE",
        "es": "PROPÓSITO"
    },
    "life": {
        "en": "Life is beautiful but short",
        "es": "La vida es bella pero corta"
    },
    "purposeinfo": {
        "en": "My purpose in life is to inspire and encourage others to explore the beauty of our world. Experiencing cultures and explore new places, sharing knowledge, and continual learning are core aspects of travel that I'm passionate about. As long as I live, I will look for freedom.",
        "es": "Mi propósito en la vida es inspirar y animar a otros a explorar la belleza de nuestro mundo. Experimentar culturas y explorar nuevos lugares, compartir ideas y el aprendizaje continuo son aspectos fundamentales del viaje que me apasionan. Mientras siga vivo, buscaré la libertad."
    },
};
