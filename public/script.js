//  🗒️ - Constantes du Code : 

// ------Constantes HTML--------\\
const countDiv = document.getElementById('count');
const secDiv = document.getElementById('sec');
const image = document.querySelector('.image');
const button = document.querySelector('.container #add1');
const button2 = document.querySelector('.container #add2');
// ----------------------------------------\\

// -------Objets et Class-------------\\
let allButtons = [
    button,
    button2,
];
// ----------------------------------------\\
// ------Constantes Strings---------\\
const secTitle = "🍪/s";
const cookieTitleCount = " Cookies - Cookie-Cliker";
const cookieNone = "Cookies : none";
// -----------------------------------------\\


// ------Variables Globales----------\\
let count = 0;
let sec = 0.0;
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
    if(count>=10){
        updateRmCookie(10)
        sec += 0.1;
        secDiv.innerText = sec +secTitle;
        
        interval = setInterval(() => {
            image.click();
            updateAddCookie(0);
        }, 10000);
    }
    else if(count<10){
        window.alert("Pas assez de Cookies !");
    }
});

// 💞 - Bouton Bonus + Millisec 0.2
button2.addEventListener('click', () => {
    if(count>=100){
        updateRmCookie(100)
        sec += 1.0;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click();
            updateAddCookie(1);
        }, 1000);
    }
    else if(count<100){
        window.alert("Pas assez de Cookies !");
    }
});

if(sec === 0.30000000000000004){
    sec-=0.00000000000000004;
}


