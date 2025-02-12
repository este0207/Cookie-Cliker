import { global } from "../../scope/global/globalVar.js";
import { Shovel } from "../../model/tools/class/Shovel.js";
import { Axe } from "../../model/tools/class/Axe.js";
import { Images } from "../ui/images.js";
import { Update } from "../ui/update/update.js";
import { counters } from "./counters.js";
import { showNotification } from "../components/notification.js"; // Importing from notification.js
import { Mine1 } from "../../model/worlds/class/Mine1.js";
import { Pickaxe } from "../../model/tools/class/Pickaxe.js";
import { Sword } from "../../model/tools/class/Sword.js";
import { Cave } from "../../model/worlds/class/Cave.js";
import { Mine2 } from "../../model/worlds/class/Mine2.js";

let interval = 1000;


class Buttons {
    static buy = { 
        shovel: document.querySelector('.container #add1'),
        axe: document.querySelector('.container #add2'),
        pickaxe: document.querySelector('.container #add3'),
        sword: document.querySelector('.container #add4'),
    }
    static worlds = {
        cave: document.querySelector('.container #levelup'),
    }
}

Buttons.Event = class {
    static init(){
        Buttons.buy.shovel.addEventListener('click', () => {
            if(global.count >= Shovel.properties.price){ 
                Shovel.properties.status = true;
                global.cookiePerSec += Shovel.properties.power;
                Update.cookieCountRm(Shovel.properties.price);
                global.cookiePerSec += Shovel.properties.power;
                counters.cookiePerSec.innerText = global.cookiePerSec + counters.title;
                Shovel.properties.count += 1;
                interval = setInterval(() => {
                    Images.imageElement.mainCookie.click();
                    Update.cookieCountAdd(Shovel.properties.power -= 1);
                }, 1000);
            }
            else {
                showNotification("Pas assez de Cookies !");
            }
        });
        Buttons.buy.axe.addEventListener('click', () => {
            if(global.count >= Axe.properties.price){ 
                Axe.properties.status = true;
                global.cookiePerSec += Axe.properties.power;
                Update.cookieCountRm(Axe.properties.price);
                global.cookiePerSec += Axe.properties.power;
                counters.cookiePerSec.innerText = global.cookiePerSec + counters.title;
                Axe.properties.count += 1;
                interval = setInterval(() => {
                    Images.imageElement.mainCookie.click();
                    Update.cookieCountAdd(Axe.properties.power -= 1);
                }, 1000);
            }
            else {
                showNotification("Pas assez de Cookies !");
            }
        });
        Buttons.buy.pickaxe.addEventListener('click', () => {
            if(global.count >= Pickaxe.properties.price){ 
                Pickaxe.properties.status = true;
                global.cookiePerSec += Pickaxe.properties.power;
                Update.cookieCountRm(Pickaxe.properties.price);
                global.cookiePerSec += Pickaxe.properties.power;
                counters.cookiePerSec.innerText = global.cookiePerSec + counters.title;
                Pickaxe.properties.count += 1;
                interval = setInterval(() => {
                    Images.imageElement.mainCookie.click();
                    Update.cookieCountAdd(Pickaxe.properties.power -= 1);
                }, 1000);
            }
            else {
                showNotification("Pas assez de Cookies !");
            }
        });
        Buttons.buy.sword.addEventListener('click', () => {
            if(global.count >= Sword.properties.price){ 
                Sword.properties.status = true;
                global.cookiePerSec += Sword.properties.power;
                Update.cookieCountRm(Sword.properties.price);
                global.cookiePerSec += Sword.properties.power;
                counters.cookiePerSec.innerText = global.cookiePerSec + counters.title;
                Sword.properties.count += 1;
                interval = setInterval(() => {
                    Images.imageElement.mainCookie.click();
                    Update.cookieCountAdd(Sword.properties.power -= 1);
                }, 1000);
            }
            else {
                showNotification("Pas assez de Cookies !");
            }
        });
    }
    static world(){
        Buttons.worlds.cave.addEventListener('click', () => { 
            // Function Pattern for Level Up 
            // Cave Level UP
            if(Cave.properties.status === false && Mine1.properties.status === false && Mine2.properties.status === false && Filon.properties.status === false){
                if(global.count >= Cave.properties.price){
                    if(Shovel.properties.status && Axe.properties.status && Pickaxe.properties.status && Sword.properties.status === true){
                        Cave.properties.price *= 2;
                        Shovel.properties.status = false;
                        Axe.properties.status = false;
                        Pickaxe.properties.status = false;
                        Sword.properties.status = false;
                        // Change Price Outils
                        Shovel.properties.price *= 2;
                        Axe.properties.price *= 2;
                        Pickaxe.properties.price *= 2;
                        Sword.properties.price *= 2;
                        // x2 sur les gains des outils !! :
                        Shovel.properties.power *= 2;
                        Axe.properties.price *= 2;
                        Pickaxe.properties.price *= 2;
                        Sword.properties.price *= 2;
                        // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                        Update.cookieRmCount(Cave.properties.price);
                        Update.Ui.background();
                    }
                    else {
                        showNotification("Vous Avez assez d'argent mais pas tout les outils !");
                    }
                }
                else {
                    showNotification("Pas assez de Cookies !");
                }
            }
            // Level Up for Mine
        });
    }
}

export { Buttons }
