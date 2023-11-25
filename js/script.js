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