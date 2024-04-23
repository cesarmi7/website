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
    "ntr": {
        "en": "NRT to Tokyo!",
        "es": "¡De NRT a Tokio!"
    },
    "wherestay": {
        "en": "Where to stay?",
        "es": "¿Dónde alojarse?"
    },
    "edogawa": {
        "en": "Edogawa!",
        "es": "¡Edogawa!"
    },
    "asakusa": {
        "en": "Asakusa!",
        "es": "¡Asakusa!"
    },
    "ueno": {
        "en": "Ueno!",
        "es": "¡Ueno!"
    },
    "shibuya": {
        "en": "Shibuya!",
        "es": "¡Shibuya!"
    },
    "shinjuku": {
        "en": "Shinjuku!",
        "es": "¡Shinjuku!"
    },
    "shiba": {
        "en": "Shiba!",
        "es": "¡Shiba!"
    },
    "akihabara": {
        "en": "Akihabara!",
        "es": "¡Akihabara!"
    },
    "chiyoda": {
        "en": "Chiyoda!",
        "es": "¡Chiyoda!"
    },
    "ginza": {
        "en": "Ginza!",
        "es": "¡Ginza!"
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
    "homeTitle": {
        "en": "TOKYO!",
        "es": "¡TOKIO!"
    },
    "homeDescription": {
        "en": "Here, every corner tells a story, from the serene beauty of historic temples <br>to the frenzy districts like Shibuya.",
        "es": "Aquí, cada esquina cuenta una historia, desde la bella serenidad de los templos históricos <br>hasta la frenética bulla de distritos como Shibuya."
    },
    "airport": {
        "en": "Tokyo has two main airports,",
        "es": "Tokio tiene dos aeropuertos principales,"
    },
    "airportand": {
        "en": "and",
        "es": "y"
    },
    "airport2": {
        "en": ". I arrived at Narita Airport, which is approximately an hour away from the metropolitan area of Tokyo. After exiting immigration, on the ground floor, you'll find bus agencies where you can purchase tickets for destinations around Narita and the Tokyo metropolitan area. The bus ticket from Narita to Tokyo costs around 17 to 25 US dollars.",
        "es": ". Llegué al Aeropuerto de Narita, que está aproximadamente a una hora de distancia del área metropolitana de Tokio. Después de salir de la inmigración, en la planta baja, encontrarás agencias de autobuses donde puedes comprar boletos para destinos alrededor de Narita y el área metropolitana de Tokio. El boleto de autobús de Narita a Tokio cuesta alrededor de 17 a 25 dólares estadounidenses."
    },
    "escaleras": {
        "en": "Additionally, if you go downstairs, you'll find the train station where you can take multiple trains. Don't worry about getting lost; you'll see a big sign saying 'Train.' Don't be afraid to ask for help if you need it. The most popular ones are the Narita Express or the Skyliner to",
        "es": "Además, si bajas las escaleras, encontrarás la estación de tren donde puedes tomar múltiples trenes. No te preocupes por perderte; verás un gran cartel que dice 'Tren'. No tengas miedo de pedir ayuda si lo necesitas. Los más populares son el Narita Express o el Skyliner hacia"
    },
    "escaleras2": {
        "en": "Tokyo Central Station",
        "es": "La Estación Central de Tokio"
    },
    "escaleras3": {
        "en": "In my case, with the",
        "es": "En mi caso, con el"
    },
    "escaleras4": {
        "en": "I chose to take the Narita Express.",
        "es": "opté por tomar el Narita Express."
    },
    "interests": {
        "en": "There are innumerable neighborhoods in Tokyo where you might want to stay. Where to stay can vary depending on your main interests, with options ranging from opulent hotels to reasonably priced hostels such as:",
        "es": "Hay innumerables barrios en Tokio donde te encantaria alojarte. Y esto puede variar dependiendo de tus intereses principales, con opciones que van desde hoteles caros hasta hostales a precios razonables como:"
    },
    "interests2": {
        "en": "Personally, as a solo traveler, I prefer staying in hostels because I know that in such places, I'll always encounter people who may become friends for a lifetime. During my time in Tokyo, I made the decision to stay at",
        "es": "Personalmente, como solo traveler, prefiero alojarme en hostales porque sé que en este tipo de lugares siempre encontraré personas que pueden convertirse en amigos para toda la vida. Durante mi estancia en Tokio, tomé la decisión de alojarme en"
    },
    "interests3": {
        "en": "a beautifully renovated guesthouse with a century-old history.",
        "es": "una casa de huéspedes bellamente renovada con una historia de un siglo."
    },
    "interests4": {
        "en": "The moment one walks into this gorgeous place, a friendly bar invites guests and visitors to strike up conversations, fostering a cozy atmosphere. This draws the attention of people from all over the world.",
        "es": "En el momento en que uno entra en este hermoso lugar, un bar amigable te recibe y te invita a entablar conversaciones, fomentando un ambiente acogedor. Esto atrae la atencion muchas personas alrededor de todo el mundo."
    },
    "interests5": {
        "en": "The unique space provides a genuine experience of staying in an old-fashioned Japanese house. The staff at Guesthouse Toco are very friendly, and the overall ambiance is pleasant. I personally enjoyed my time chilling and chatting with other travelers in the charming garden. The location is convenient, just a few minutes' walk from the station and a short distance from",
        "es": "El espacio único ofrece una experiencia auténtica al alojarse en una casa japonesa con estilo antiguo. El personal de la Guesthouse Toco es muy amigable y el ambiente general es agradable. Personalmente disfruté mi tiempo relajándome y charlando con otros viajeros en el encantador jardín. La ubicación es conveniente, a solo unos minutos a pie de la estación y a poca distancia de"
    },
    "interests6": {
        "en": "and",
        "es": "y"
    },
    "interests7": {
        "en": "Staying here was a wonderful experience as it was the first place I stayed in Japan, offering a peak of the beauty created by the contrast of temples, shrines, and homes side by side. The hostel also provides a breakfast option for 500 yen, approximately 3.35 US dollars. What can I say? It was delicious. <br><br>I know you're wondering, why are the chopsticks in the miso soup?! I don't know either; my brain wasn't thinking at that moment.",
        "es": "Alojarme aquí fue una experiencia maravillosa ya que fue el primer lugar en el que me alojé en Japón, ofreciendome un vistazo de la belleza creada por el contraste de templos, santuarios y casas uno al lado del otro. El hostal también ofrece una opción de desayuno por 500 yenes, aproximadamente 3.35 dólares estadounidenses. ¿Qué puedo decir? Estaba delicioso. <br><br>Sé que te estaras preguntando, ¿por qué los palillos están en la sopa?! Tampoco lo sé; mi cerebro no estaba pensando en ese momento."
    },
    "edogawa1": {
        "en": "I also had the opportunity to stay for about 3 days in",
        "es": "También tuve la oportunidad de alojarme por unos 3 días en"
    },
    "edogawaLink1": {
        "en": "Edogawa City",
        "es": "Ciudad de Edogawa"
    },
    "edogawa2": {
        "en": "because I wanted to experience life in a place not too far nor too close to the main metropolis. To be honest, I was very curious about the place with the same name like the famous author and critic",
        "es": "porque quería experimentar la vida en un lugar ni muy lejos ni muy cerca de la metrópolis principal. Para ser honesto, tenía mucha curiosidad por el lugar con el mismo nombre que el famoso autor y crítico"
    },
    "edogawaLink2": {
        "en": "Edogawa Ranpo",
        "es": "Edogawa Ranpo"
    },
    "edogawa3": {
        "en": "and one of my childhood heroes,",
        "es": "y uno de los héroes de mi infancia,"
    },
    "edogawaLink3": {
        "en": "Conan Edogawa",
        "es": "Conan Edogawa"
    },
    "edogawa4": {
        "en": "That, too, was one of the reasons why I decided to stay here. <br><br>I felt amazing staying around here, it's a peaceful place that gave me a lot of peace throughout the day, from the morning when kids leave for school until the evening when adults come home from work. Its understatedly beautiful streets constantly brought to mind TV shows like",
        "es": "Esa también fue una de las razones por las que decidí quedarme aquí. <br><br>Me sentí increíble al quedarme por aquí, es un lugar pacífico que me dio mucha paz durante todo el día, desde la mañana cuando los niños salen de la escuela hasta la noche cuando los adultos regresan del trabajo. Sus calles bellamente modestas me recordaban constantemente programas de televisión como"
    },
    "edogawaLink4": {
        "en": "Detective Conan",
        "es": "Detective Conan"
    },
    "edogawa5": {
        "en": "and",
        "es": "y"
    },
      "edogawaLink5": {
        "en": "Doraemon",
        "es": "Doraemon"
    },
    "edogawa6": {
        "en": "One of my favorite activities was having breakfast and dinner in the park in front of the apartment where I stayed. I always bought a salmon onigiri, another one with tuna and mayonnaise, and a coffee. I sat and appreciated the serenity of the place, listening to the birds in the morning, and in the evenings, the cats would come out to chat.",
        "es": "Una de mis actividades favoritas era desayunar y cenar en el parque enfrente del apartamento donde me alojaba. Siempre compraba un onigiri de salmón, otro de atún con mayonesa y un café. Me sentaba y apreciaba la serenidad del lugar, escuchando a los pájaros por la mañana y, por las tardes, los gatos salían a charlar."
    },
    "edogawa7": {
        "en": "But undoubtedly, what surprised me was how children, young people, and adults of all ages used their bicycles to get to everywhere, the store, and the train station, where I assume they headed to the metropolitan area.",
        "es": "Pero sin duda, lo que me sorprendió fue cómo niños, jóvenes y adultos de todas las edades usaban sus bicicletas para ir a todas partes, la tienda y la estación de tren, donde supongo que se dirigían a la zona metropolitana."
    },
    "edogawa8": {
        "en": "Without a doubt, Edogawa City is full of hidden gems and incredibly beautiful temples like",
        "es": "Sin duda, la Ciudad de Edogawa está llena de tesoros ocultos y templos increíblemente hermosos como"
    },
    "edogawa9": {
        "en": "and",
        "es": "y"
    },
    "edogawa10": {
        "en": "Walking beside the Edo River is also a lovely experience. And if you happen to be here in early August, don't forget about the fireworks festival that happens every year on the first Saturday of August.",
        "es": "Caminar junto al río Edo también es una experiencia encantadora. Y si te encuentras aquí a principios de agosto, no te olvides del festival de fuegos artificiales que tiene lugar cada año el primer sábado de agosto."
    },
    "asakusa1": {
        "en": "Asakusa is a district located in the ward of",
        "es": "Asakusa es un distrito ubicado en el barrio de"
    },
    "taitoLink": {
        "en": "Taito City",
        "es": "Ciudad de Taito"
    },
    "asakusa2": {
        "en": "It is mostly known for its famous Buddhist temple,",
        "es": "Es mayormente conocido por su famoso templo budista,"
    },
    "sensojiLink": {
        "en": "Senso-ji",
        "es": "Senso-ji"
    },
    "asakusa3": {
        "en": "which is the oldest temple in Tokyo. Asakusa itself is a very touristy and popular place due to its traditional shopping streets, such as",
        "es": "que es el templo más antiguo de Tokio. Asakusa en sí es un lugar muy turístico y popular debido a sus calles comerciales tradicionales, como"
    },
    "nakamiseLink": {
        "en": "Nakamise-dori",
        "es": "Nakamise-dori"
    },
    "asakusa4": {
        "en": "where you can find numerous souvenir shops and food stalls. That's why it's very common to see a lot of people in this area, but despite that, it is very colorful and has an incredible atmosphere. In this area, you will often see people wearing traditional clothing, and I love that some locals go there just to practice their English with foreigners.",
        "es": "donde puedes encontrar numerosas tiendas de souvenirs y puestos de comida. Es por eso que es muy común ver a mucha gente en esta área, pero a pesar de eso, es muy colorido y tiene un ambiente increíble. En esta área, a menudo verás personas vistiendo ropa tradicional, y me encanta que algunos locales van allí solo para practicar su inglés con los extranjeros."
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