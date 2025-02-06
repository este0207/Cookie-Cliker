// GAME CODE : COOKIE CLICKER
// LANGAGE : JAVASCRIPT
// LANGUE : FRANCAIS ANGLAIS / FR / EN (0 IA UTILISEE ON EST JUSTE BILINGUE)



//  🗒️ - Constantes du Code : 


// ------Constantes HTML--------\\
const countDiv = document.getElementById('count');
const secDiv = document.getElementById('sec');

// Text :
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
// Text Power
const power1 = document.getElementById('power1');
const power2 = document.getElementById('power2');
const power3 = document.getElementById('power3');
const power4 = document.getElementById('power4');

// Images :
const image = document.querySelector('.image');
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
// Buttons :
const button = document.querySelector('.container #add1');
const button2 = document.querySelector('.container #add2');
const button3 = document.querySelector('.container #add3');
const button4 = document.querySelector('.container #add4');
const buttonWorld = document.querySelector('.container #levelup'); 

const main = document.querySelector('.main .cookie'); // divs pour Front End
const container = document.querySelector('.main .container'); // divs pour Front End

// ------Constantes Strings---------\\
const secTitle = "🍪/s";
const cookieEmoji = "🍪";
const cookieTitleCount = " Cookies - Cookie-Cliker";
const cookieNone = "Cookies : none";
// ----------------------------------------\\



// -------Variables Objets et Class-------------\\

// Amélioration Outils prix

let shovelPrice = 10;
let axePrice = 100; 
let pickaxePrice = 500; 
let swordPrice = 1000;

// Amélioration Cookies/s 
let shovelPower = 1; 
let axePower = 12; 
let pickaxePower = 77;
let swordPower = 160;

// Amélioration Niveau prix
let cavePrice = 300000;
let mine1Price = 1200000;
let mine2Price = 2400000;
let filonMinePrice = 4800000;
let netherPrice= 9600000;


// Boolean Activé ou non pour les améliorations
let shovel = false;
let axe = false;
let pickaxe = false;
let sword = false;


// Boolean pour les mondes : 
// let forestBool = false;
let caveBool = false;
let mine1Bool = false;
let mine2Bool = false;
let filonMineBool = false;

// ----------------------------------------\\




// ------Variables Globales----------\\
let count = 0; // COMPTEUR DES COOKIES
let sec = 0.0; // COMPTEUR DES COOKIES PAR SECONDES 
let interval; // Variable Interval

// --------Variables Unité De compatage-------\


// let cps = 0; // Clique par seconde

// ------------------------------------------\\


// --- Fonctions GagneTemps --- \\

function updateAddCookie(nombre) { // Ajoute un Nombre de Cookie et Update le compteur
    let displayCount;
    count+=nombre;
    if (count >= 10000000) {
        let millions = Math.floor(count / 10000000); 
        let temp = Math.floor((count % 10000000) / 100000); 
        displayCount = millions + "Md" + temp; 
    } 
    else if (count >= 1000000) {
        let millions = Math.floor(count / 1000000); 
        let temp = Math.floor((count % 1000000) / 10000); 
        displayCount = millions + "M" + temp; 
    } 
    else if(count<999999){
        displayCount = count; 
    }
    countDiv.innerText = displayCount; 
    document.getElementById('title').innerText = displayCount + cookieTitleCount; 
}

function updateRmCookie(nombre){ // Enleve un Nombre de Cookie et Update le compteur
    let displayCount;
    count-=nombre;
    if (count >= 10000000) {
        let milliard = Math.floor(count / 10000000); 
        let reste = Math.floor((count % 10000000) / 100000); 
        displayCount = milliard + "Md" + reste; 
    } 
    else if (count >= 1000000) {
        let millions = Math.floor(count / 1000000); 
        let reste = Math.floor((count % 1000000) / 10000); 
        displayCount = millions + "M" + reste; 
    } 
    else if(count<999999){
        displayCount = count; 
    }
    countDiv.innerText = displayCount; 
    document.getElementById('title').innerText = displayCount + cookieTitleCount; 
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
function updatePrice(){
    text1.innerText = shovelPrice + cookieEmoji;
    text2.innerText = axePrice + cookieEmoji;
    text3.innerText = pickaxePrice + cookieEmoji;
    text4.innerText = swordPrice + cookieEmoji;
}
function updatePower(){
    power1.innerText = shovelPower + secTitle;
    power2.innerText = axePower + secTitle;
    power3.innerText = pickaxePower + secTitle;
    power4.innerText = swordPower + secTitle;
}




// 🚦- Début du jeu et checkup nécessaires

if(count === 0){ // Si compteur à 0 affiche 0 cookies sur le titre
    document.getElementById('title').innerText = cookieNone;
}


// Switch pour les prix des améliorations

// 🚨 FONCTION DEPRECIE POUR LE CODE ACTUEL 🚨
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
updateAddCookie(0);
updatePrice();
updatePower()



// 🍪 - Bouton Main Cookie +1;
image.addEventListener('click', () => {
    image.classList.toggle('active');
    console.log("Cookie clicked. Current count:", count);
    updateAddCookie(1);
   
});

// 💞 - Bouton Bonus +1/s
button.addEventListener('click', () => {
    if(count>=shovelPrice){ // Si Nombre de Cookies est supérieur ou égal au prix du bouton
        shovel = true;
        updateRmCookie(shovelPrice)
        sec += shovelPower;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click();
            updateAddCookie(shovelPower-1);
        }, 1000);
    }
    else if(count<shovelPrice){
        window.alert("Pas assez de Cookies !");
    }
});

// 💞 - Bouton Bonus +2/s
button2.addEventListener('click', () => {
    if(count>=axePrice){
        axe = true;
        updateRmCookie(axePrice)
        sec += axePower;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click(); // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(axePower-1);// [2] - Ajouter 1 cookies pour Matcher avec la Valeur de Sec (1+1=2)
        }, 1000);
    }
    else if(count<axePrice){
        window.alert("Pas assez de Cookies !");
    }
});

// 💞 - Bouton Bonus +5/s
button3.addEventListener('click', () => {
    if(count>=pickaxePrice){
        pickaxe = true;
        updateRmCookie(pickaxePrice)
        sec += pickaxePower;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click(); // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(pickaxePower-1); // [2] - Ajouter 4 cookies pour Matcher avec la Valeur de Sec (1+4=5)
        }, 1000);
    }
    else if(count<pickaxePrice){
        window.alert("Pas assez de Cookies !");
    }
});

// 💞 - Bouton Bonus +15/s
button4.addEventListener('click', () => {
    if(count>=swordPrice){
        sword = true;
        updateRmCookie(swordPrice)
        sec += swordPower;
        secDiv.innerText = sec + secTitle;
        interval = setInterval(() => {
            image.click();  // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(swordPower-1); // [2] - Ajouter 14 cookies pour Matcher avec la Valeur de Sec (1+14=15)
        }, 1000);
    }
    else if(count<swordPrice){
        window.alert("Pas assez de Cookies !");
    }
});


// Bouton Level Up
buttonWorld.addEventListener('click', () => { 
    // Function Pattern for Level Up 
    // Cave Level UP
    if(caveBool === false && mine1Bool === false && mine2Bool === false && filonMineBool === false){
        if(count>=cavePrice){
            if(shovel && axe && pickaxe && sword === true){
                cavePrice*=2;
                // caveBool=false;
                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;
                // Change Price Outils
                shovelPrice*=2;
                axePrice*=2;
                pickaxePrice*=2;
                swordPrice*=2;
                // x2 sur les gains des outils !! :
                shovelPower*=2;
                axePower*=2;
                pickaxePower*=2;
                swordPower*=2;
                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                  // Update visuel
                updateBackground();
                updateTools();
                updatePrice();
                updatePower()
            }
            else{
                window.alert("Vous Avez assez d'argent mais pas tout les outils !");
            };
        }
    else if(count<cavePrice){
        window.alert("Pas assez de Cookies !");
        }
    }
    // Level Up for Mine
    
});