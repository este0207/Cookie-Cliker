// GAME CODE : COOKIE CLICKER
// LANGAGE : JAVASCRIPT
// LANGUE : FRANCAIS ANGLAIS / FR / EN (0 IA UTILISEE ON EST JUSTE BILINGUE)



//  🗒️ - Constantes du Code : 


// ------Constantes HTML--------\\
const countDiv = document.getElementById('count');
const secDiv = document.getElementById('sec');
const image = document.querySelector('.image');
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
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
let shovelPower = 1; // shovel 1
let axePower = 2; // axe 2
let pickaxePower = 5; // Pickaxe 5
let swordPower = 15; // sword  15

// Amélioration Niveau prix
let cavePrice = 15000;
let mine1Price = 30000;
let mine2Price = 120000;
let filonMinePrice = 240000;
let netherPrice= 480000;


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

// let cps = 0; // Clique par seconde

// ------------------------------------------\\


// --- Fonctions GagneTemps --- \\

function updateAddCookie(nombre){ // Ajoute un Nombre de Cookie et Update le compteur
    count += nombre;
    countDiv.innerText = count;
    document.getElementById('title').innerText = count + cookieTitleCount;
}

function updateRmCookie(nombre){ // Enleve un Nombre de Cookie et Update le compteur
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




// 🍪 - Bouton Main Cookie +1;
image.addEventListener('click', () => {
    image.classList.toggle('active');
    updateAddCookie(1);
   
});

// 💞 - Bouton Bonus +1/s
button.addEventListener('click', () => {
    if(count>=shovelPrice){ // Si Nombre de Cookies est supérieur ou égal au prix du bouton
        shovel = true;
        updateRmCookie(shovelPrice)
        sec += 1.0;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click();
            updateAddCookie(0);
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
        sec += 2.0;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click(); // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(1);// [2] - Ajouter 1 cookies pour Matcher avec la Valeur de Sec (1+1=2)
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
        sec += 5.0;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click(); // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(4); // [2] - Ajouter 4 cookies pour Matcher avec la Valeur de Sec (1+4=5)
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
        sec += 15.0;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click();  // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(14); // [2] - Ajouter 14 cookies pour Matcher avec la Valeur de Sec (1+14=15)
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
                caveBool=false;

                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;

                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                // Update visuel
                updateBackground();
                updateTools();
                // Change Price Outils
                shovelPrice*2;
                axePrice*2;
                pickaxePrice*2;
                swordPrice*2;
                // x2 sur les gains des outils !! :
                shovelPower*2;
                axePower*2;
                pickaxePower*2;
                swordPower*2;
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