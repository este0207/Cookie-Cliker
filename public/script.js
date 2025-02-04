//  🗒️ - Constantes du Code : 

// ------Constantes HTML--------\\
const countDiv = document.getElementById('count');
const secDiv = document.getElementById('sec');
const image = document.querySelector('.image');
const button = document.querySelector('.container #add1');
const button2 = document.querySelector('.container #add2');
// ----------------------------------------\\


// ------Constantes Strings---------\\
const secTitle = "🍪 - par seconde : ";
const cookieTitleCount = " Cookies - Cookie-Cliker";
const cookieNone = "Cookies : none";
// -----------------------------------------\\


// ------Variables Globales----------\\
let count = 0;
let sec = 0;
let interval;
// ------------------------------------------\\


// -------- Fonctions GagneTemps \\
function updateAddCookie(nombre){
    count += nombre;
    countDiv.innerText = count;
    document.getElementById('title').innerText = count + cookieTitleCount;
}


// 🚦- Début du jeu et checkup nécessaires
if(count === 0){
    document.getElementById('title').innerText = cookieNone
}

// Attendre que count > a 10 pour afficher button
if (count < 10) {
    button.style.display = 'none';
}


// 🧪 -  Main Et Fonctions principales du jeu :


// 🍪 - Bouton Main Cookie +1;
image.addEventListener('click', () => {
    image.classList.toggle('active');
    updateAddCookie(1);
    if (count >= 15) {
        button.style.display = 'block';
        button2.style.display = 'block';
    }
});

// 💞 - Bouton Bonus + Millisec 0.1
button.addEventListener('click', () => {
    sec = 0.1 ;
    secDiv.innerText = secTitle + sec;
    setInterval(() => {
        updateAddCookie(1);
    }, 10000);

});

// 💞 - Bouton Bonus + Millisec 0.2
button2.addEventListener('click', () => {
    sec = 0.1 ;
    secDiv.innerText = secTitle + sec;
    interval = setInterval(() => {
        updateAddCookie(1);
    }, 10000);
    
});


