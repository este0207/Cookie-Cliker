//  🗒️ - Constantes du Code : 

// ------Constantes HTML--------\\
const body = document.getElementById('.bodyy')
const countDiv = document.getElementById('count');
const secDiv = document.getElementById('sec');
const image = document.querySelector('.image');
const main = document.querySelector('.main .cookie');
const title = document.querySelector('.add .case-title')
const container = document.querySelector('.main .container');
const button = document.querySelector('.container #add1');
const button2 = document.querySelector('.container #add2');
const button3 = document.querySelector('.container #add3');
const button4 = document.querySelector('.container #add4');
const buttonDev = document.querySelector('.container #stone-world');
// ----------------------------------------\\

// -------Objets et Class-------------\\

// Button Price
let buttonPrice = 10; // shovel 0.1
let button2Price = 100; // axe 1
let button3Price = 500; // Pickaxe 5
let button4Price = 1000; // sword  10

let forest1 = false;
let forest2 = false;
let forest3 = false;
let forest4 = false;




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
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");

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

function updateBackground(){
        document.body.style.backgroundColor = '#808080';
        title.style.background = 'url(./images/stonetxt.jpg)';
        main.style.background = 'url(./images/cave.png)';
        main.style.backgroundRepeat = 'no-repeat'
        main.style.backgroundPosition = 'center',
        main.style.backgroundSize = 'cover',
        container.style.background = 'url(./images/stonetxt.jpg)';
}

function updateTools(){
        image1.setAttribute("src", "./images/stone-shovel.png")
        image2.setAttribute("src", "./images/Stone-Axe.webp")
        image3.setAttribute("src", "./images/Stone-Pickaxe.webp")
        image4.setAttribute("src", "./images/Stone-Sword.webp")
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
    if(count>=buttonPrice){
        forest1 = true;
        updateRmCookie(buttonPrice)
        sec += 1.0;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click();
            updateAddCookie(0);
        }, 1000);
    }
    else if(count<buttonPrice){
        window.alert("Pas assez de Cookies !");
    }
});

// 💞 - Bouton Bonus + Millisec 0.2
button2.addEventListener('click', () => {
    if(count>=button2Price){
        forest2 = true;
        updateRmCookie(button2Price)
        sec += 2.0;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click();
            updateAddCookie(1);
        }, 1000);
    }
    else if(count<button2Price){
        window.alert("Pas assez de Cookies !");
    }
});

button3.addEventListener('click', () => {
    if(count>=button3Price){
        forest3 = true;
        updateRmCookie(button3Price)
        sec += 5.0;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click();
            updateAddCookie(4);
        }, 1000);
    }
    else if(count<button3Price){
        window.alert("Pas assez de Cookies !");
    }
});

button4.addEventListener('click', () => {
    if(count>=button4Price){
        forest4 = true;
        updateRmCookie(button4Price)
        sec += 15.0;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click();
            updateAddCookie(14);
        }, 1000);
    }
    else if(count<button4Price){
        window.alert("Pas assez de Cookies !");
    }
});

// Stone World

buttonDev.addEventListener('click', () => {
        updateBackground();
        updateTools();
});