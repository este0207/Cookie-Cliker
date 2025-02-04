//  🗒️ - Constantes du Code : 

// ------Constantes HTML--------\\
const countDiv = document.getElementById('count');
const secDiv = document.getElementById('sec');
const image = document.querySelector('.image');
const button = document.querySelector('.container #add1');
const button2 = document.querySelector('.container #add2');
const casebox = document.querySelector('.case');
// ----------------------------------------\\

// -------Objets et Class-------------\\
let allButtons = [
    button,
    button2,
];
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
let cps = 0; // Cookie Par Secondes

// ------------------------------------------\\


// -------- Fonctions GagneTemps \\
function updateAddCookie(nombre){
    count += nombre;
    countDiv.innerText = count;
    document.getElementById('title').innerText = count + cookieTitleCount;
}
function updateRmCookie(nombre){
    count -= nombre;
    countDiv.innerText = count;
    document.getElementById('title').innerText = count + cookieTitleCount;
}


// 🚦- Début du jeu et checkup nécessaires
if(count === 0){
    document.getElementById('title').innerText = cookieNone
    
}

// Switch pour les prix des améliorations
switch(count){
    case count<10:
        button.style.background = 'gray';
        button2.style.background = 'gray';
    case count === 10:
        button.style.background = 'white';
    case count === 100:
        button2.style.background = 'white';
};

// 🧪 -  Main Et Fonctions principales du jeu :

// 🍪 - Bouton Main Cookie +1;
image.addEventListener('click', () => {
    image.classList.toggle('active');
    updateAddCookie(1);
   
});

// 💞 - Bouton Bonus + Millisec 0.1

button.addEventListener('click', () => {
        sec = 0.1 ;
        secDiv.innerText = secTitle + sec;
    if (!interval) {
        interval = setInterval(() => {
            updateAddCookie(1);
        }, 10000);
    }
});

// 💞 - Bouton Bonus + Millisec 0.2
button2.addEventListener('click', () => {
    sec = 0.1 ;
    secDiv.innerText = secTitle + sec;
    interval = setInterval(() => {
        updateAddCookie(1);
    }, 10000);
    
});
