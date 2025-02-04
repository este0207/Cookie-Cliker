// click count

const image = document.querySelector('.image');
const countDiv = document.getElementById('count');
const cookieTitleCount = "Cookies : ";
const cookieNone = "Cookies : none";

let count = 0;

 function addCookieUpdate(number){
        count+=number;
        countDiv.innerText = count;
        document.getElementById('title').innerText = cookieTitleCount + count;
 }

if(count === 0){
    document.getElementById('title').innerText = cookieNone
}


image.addEventListener('click', () => {
    image.classList.toggle('active');
    addCookieUpdate(1);
    
    if (count != 10) {
        button.style.display = 'block';
        button2.style.display = 'block';
    }
});

// Button add +1/s

const button = document.querySelector('.container #add1');
const button2 = document.querySelector('.container #add2');
let interval;

button.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(() => {
            count += 1;
            countDiv.innerText = count;
            document.getElementById('title').innerText = cookieTitleCount + count;
        }, 1000);
    }
});

// Button add +2/s

button2.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(() => {
            count += 2;
            countDiv.innerText = count;
            document.getElementById('title').innerText = cookieTitleCount + count;
        }, 1000);
    }
});



// Attendre que count > a 10 pour afficher button
if (count < 10) {
    button.style.display = 'none';
}