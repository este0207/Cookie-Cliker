import { counters } from "../../components/counters.js";
import { strings } from "../../../scope/constants/strings.js";
import { global } from "../../../scope/global/globalVar.js";
import { Images } from "../images.js";
import { Statistics } from "../../components/Statistics.js";
import { Axe } from "../../../model/tools/class/Axe.js";
import { Pickaxe } from "../../../model/tools/class/Pickaxe.js";
import { Sword } from "../../../model/tools/class/Sword.js";
import { Shovel } from "../../../model/tools/class/Shovel.js";

class Update {
    displayCount;
    
    static cookieCountAdd(nombre = 0) {
        global.count += nombre; // Updated to use global.count
        if (global.count >= 1000000000) { // MILLIARDS
            let millions = Math.floor(global.count / 1000000000); 
            let temp = Math.floor((global.count % 10000000) / 100000); 
            this.displayCount = millions + "Md" + temp; 
        } 
        else if (global.count >= 1000000) { // MILLIONS
            let millions = Math.floor(global.count / 1000000); 
            let temp = Math.floor((global.count % 1000000) / 10000); 
            this.displayCount = millions + "M" + temp; 
        } 
        else {
            this.displayCount = global.count; 
        }
        counters.cookie.innerText = this.displayCount;
        counters.title.innerText = this.displayCount + strings.cookieTitleCount;
    }

    static cookieCountRm(nombre = 0) {
        global.count -= nombre; // Updated to use global.count
        if (global.count >= 1000000000) { // MILLIARDS
            let millions = Math.floor(global.count / 1000000000); 
            let temp = Math.floor((global.count % 10000000) / 100000);
            this.displayCount = millions + "Md" + temp; 
        } 
        else if (global.count >= 1000000) { // MILLIONS
            let millions = Math.floor(global.count / 1000000); 
            let temp = Math.floor((global.count % 1000000) / 10000); 
            this.displayCount = millions + "M" + temp; 
        } 
        else {
            this.displayCount = global.count; 
        }
        counters.cookie.innerText = this.displayCount;
        counters.title.innerText = this.displayCount + strings.cookieTitleCount;
        // save progression !!!!!!!!!!!!!!   
    }
}

Update.Ui = class {
    static background() {
        Images.imageElement.cookieBackground.backgroundColor = '#808080';
        Images.imageElement.boutiqueContainer.background = 'url(./images/stonetxt.jpg)';
        Images.imageElement.cookieBackground.background = 'url(./images/cave.png)';
        Images.imageElement.cookieBackground.backgroundRepeat = 'no-repeat';
        Images.imageElement.cookieBackground.backgroundPosition = 'center';
        Images.imageElement.cookieBackground.backgroundSize = 'cover';
        Images.imageElement.boutiqueContainer.style.background = 'url(./images/stonetxt.jpg)';
    }

    static price() {
        Statistics.price.shovelTag.innerText = Shovel.properties.price + strings.cookieEmoji;
        Statistics.price.axeTag.innerText = Axe.properties.price + strings.cookieEmoji;
        Statistics.price.pickaxeTag.innerText = Pickaxe.properties.price + strings.cookieEmoji;
        Statistics.price.swordTag.innerText = Sword.properties.price + strings.cookieEmoji;
    }

    static tools(material) {
        if (material === "stone") {
            Images.imageElement.shovel.setAttribute("src", "./images/Stone-Shovel.webp");
            Images.imageElement.axe.setAttribute("src", "./images/Stone-Axe.webp");
            Images.imageElement.pickaxe.setAttribute("src", "./images/Stone-Pickaxe.webp");
            Images.imageElement.sword.setAttribute("src", "./images/Stone-Sword.webp");
        }
    }

    static power() {
        Statistics.power.shovelTag.innerText = Shovel.properties.power + strings.cookiePerSec;
        Statistics.power.axeTag.innerText = Axe.properties.power + strings.cookiePerSec;
        Statistics.power.pickaxeTag.innerText = Pickaxe.properties.power + strings.cookiePerSec;
        Statistics.power.swordTag.innerText = Sword.properties.power + strings.cookiePerSec;
    }
}

export { Update }
