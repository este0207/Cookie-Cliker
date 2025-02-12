import { global } from "../../scope/global/globalVar.js";
import { Shovel } from "../../model/tools/class/Shovel.js";
import { Axe } from "../../model/tools/class/Axe.js";
import { Images } from "../ui/images.js";
import { Update } from "../ui/update/update.js";
import { counters } from "./counters.js";
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
    init(){
        Buttons.shovel.addEventListener('click', () => {
            if(global.count>=Shovel.properties.price){ 
                Shovel.properties.status = true;
                Update.cookieRmCount(Shovel.properties.price);
                global.cookiePerSec += Shovel.properties.power;
                counters.cookiePerSec.innerText = global.cookiePerSec + counters.title;
                Shovel.properties.count +=1;
                interval = setInterval(() => {
                    Images.mainCookie.click();
                    Update.cookieAddCount(Shovel.properties.power-=1);
                }, 1000);
            }
            else if(global.count<Shovel.properties.price){
                window.alert("Pas assez de Cookies !");
            }
        });
    }
    
}
export {Buttons}



