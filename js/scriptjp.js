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
    "japan":{
        "en": "JAPAN!",
        "es": "¡JAPÓN!"
    },
    "japaninfo":{
        "en": "Are you interested in a particular city? Here, I will share everything I know about Japan, <br>including tips and recommendations.",
        "es": "¿Te interesa una ciudad en particular? Aquí compartiré todo lo que sé sobre Japón, <br>incluyendo consejos y recomendaciones."
    },
    "help": {
        "en": "Help",
        "es": "Ayuda"
    },
    "social": {
        "en": "Social",
        "es": "Redes"
    },
    "visa": {
        "en": "VISA POLICY",
        "es": "POLÍTICA DE VISAS"
    },
    "visabefore": {
        "en": "Before everything",
        "es": "Antes que nada"
    },
    "visainfo": {
        "en": "Depending on the country of your passport, you may or may not need to apply for a visa to enter Japan. For instance, many Western countries have visa exemption agreements allowing their citizens to stay in Japan for up to 90 days without a visa for tourism or business. However, if you are planning to stay longer, work, or engage in certain specific activities, a visa application might be necessary regardless of your nationality. It's essential to check the latest visa requirements from the nearest Japanese embassy or consulate or refer to Japan's official immigration website for the most up-to-date information.",
        "es": "Dependiendo del país de su pasaporte, puede que necesite o no solicitar una visa para entrar a Japón. Por ejemplo, muchos países occidentales tienen acuerdos de exención de visa que permiten a sus ciudadanos permanecer en Japón hasta 90 días sin visa para turismo o negocios. Sin embargo, si planea quedarse más tiempo, trabajar o participar en ciertas actividades específicas, podría ser necesario solicitar una visa independientemente de su nacionalidad. Es esencial verificar los últimos requisitos de visa en la embajada o consulado japonés más cercano o consultar el sitio web oficial de inmigración de Japón para obtener la información más actualizada."
    },
    "visasite": {
        "en": "Japan Visa site",
        "es": "Sitio de Visas de Japón"
    },
    "recommendation":{
        "en": "Recomendation",
        "es": "Recomendación"
    },
    "jrinfo": {
        "en": "In Japan, you'll often need to take the train, whether it's for local trips or if you're planning to travel outside the city. Therefore, I recommend purchasing a JR Pass that suits your needs and the length of your stay. Many Shinkansen (bullet train) rides can be expensive, so purchasing a rail pass is a good idea if you're planning to visit multiple cities and regions. You can buy it online or upon arrival in Japan at any major station in each city. This pass is a little green card that allows you to use all the trains in the JR family, including the Shinkansen. For more information, please check the link below.",
        "es": "En Japón, a menudo necesitarás tomar el tren, ya sea para viajes locales o si planeas viajar fuera de la ciudad. Por lo tanto, recomiendo comprar un JR Pass que se adapte a tus necesidades y a la duración de tu estancia. Muchos viajes en Shinkansen (tren bala) pueden ser costosos, por lo que comprar un pase de tren es una buena idea si planeas visitar varias ciudades y regiones. Puedes comprarlo en línea o a tu llegada a Japón en cualquier estación importante de cada ciudad. Este pase es una pequeña tarjeta verde que te permite usar todos los trenes de la familia JR, incluyendo el Shinkansen. Para más información, por favor consulta el enlace a continuación."
    },
    "jrsite": {
        "en": "JR Pass site",
        "es": "Sitio de JR Pass"
    },
    "currency":{
        "en": "Check the currency exchange",
        "es": "Verifica el cambio de divisas"
    },
    "currencyinfo" : {
        "en": "Make sure to check out the currency exchange rates every day. You will see a bunch of exchange machines all over Japan but don't just go for the first one you find. Each machine has its own rates, and some are definitely better than others. So, take a bit of time to compare and find a good deal. Also, I recommend exchanging some money upon arriving at the airport in Japan. You'll likely need to take trains or buses not covered by the JR Pass, which often requires payment in coins.",
        "es": "Asegúrate de verificar las tasas de cambio de divisas todos los días. Verás un montón de máquinas de cambio en todo Japón, pero no te conformes con la primera que encuentres. Cada máquina tiene sus propias tarifas, y algunas son definitivamente mejores que otras. Así que, tómate un poco de tiempo para comparar y encontrar una buena oferta. Además, recomiendo cambiar algo de dinero al llegar al aeropuerto en Japón. Probablemente necesitarás tomar trenes o autobuses no cubiertos por el JR Pass, los cuales a menudo requieren pago en monedas."
    },
    "currencysite": {
        "en": "Currency Exchange site",
        "es": "Sitio de Cambio de Divisas"
    },
    "cambio": {
        "en": "Currency Exchange",
        "es": "Cambio de Divisas"
    },
};