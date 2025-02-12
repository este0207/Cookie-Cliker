import { counters } from "../../components/counters.js";
import { strings } from "../../../scope/constants/strings.js";
import { Images } from "../images.js";
import {Statistics} from "../../components/Statistics.js";
import { Axe } from "../../../model/tools/class/Axe.js";
import { Pickaxe } from "../../../model/tools/class/Pickaxe.js";
import { Sword } from "../../../model/tools/class/Sword.js";
import { Shovel } from "../../../model/tools/class/Shovel.js";

class Update {
    displayCount;
    cookieCountAdd(nombre=0) {
        count+=nombre;
        if (count >= 1000000000) { // MILLIARDS
            let millions = Math.floor(count / 1000000000); 
            let temp = Math.floor((count % 10000000) / 100000); 
            this.displayCount = millions + "Md" + temp; 
        } 
        else if (count >= 1000000) { // MILLIONS
            let millions = Math.floor(count / 1000000); 
            let temp = Math.floor((count % 1000000) / 10000); 
            this.displayCount = millions + "M" + temp; 
        } 
        else if(count<999999){ // BASIC
            this.displayCount = count; 
        }
        counters.cookie.innerText = this.displayCount;
        counters.title.innerText = this.displayCount + strings.cookieTitleCount;
        // save progression !!!!!!!!!!!!!!   
    }
    cookieCountRm(nombre=0) {
        count-=nombre;
        if (count >= 1000000000) { // MILLIARDS
            let millions = Math.floor(count / 1000000000); 
            let temp = Math.floor((count % 10000000) / 100000);
            this.displayCount = millions + "Md" + temp; 
        } 
        else if (count >= 1000000) { // MILLIONS
            let millions = Math.floor(count / 1000000); 
            let temp = Math.floor((count % 1000000) / 10000); 
            this.displayCount = millions + "M" + temp; 
        } 
        else if(count<999999){ // BASIC
            this.displayCount = count; 
        }
        counters.cookie.innerText = this.displayCount;
        counters.title.innerText = this.displayCount + strings.cookieTitleCount;
        // save progression !!!!!!!!!!!!!!   
    }
}

Update.Ui = class {
    background() {
        Images.imageElement.cookieBackground.backgroundColor = '#808080';
        Images.imageElement.boutiqueContainer.background = 'url(./images/stonetxt.jpg)';
        Images.imageElement.cookieBackground.background = 'url(./images/cave.png)';
        Images.imageElement.cookieBackground.backgroundRepeat = 'no-repeat'
        Images.imageElement.cookieBackground.backgroundPosition = 'center',
        Images.imageElement.cookieBackground.backgroundSize = 'cover',
        Images.imageElement.boutiqueContainer.style.background = 'url(./images/stonetxt.jpg)';
    }
    price() {
        Statistics.price.shovelTag.innerText = Shovel.properties.price + cookieEmoji;
        Statistics.price.axeTag.innerText = Axe.properties.price + cookieEmoji;
        Statistics.price.pickaxeTag.innerText = Pickaxe.properties.price + cookieEmoji;
        Statistics.price.swordTag.innerText = Sword.properties.price + cookieEmoji;
    }
    tools(material){
        if(material==="stone"){
        Images.imageElement.shovel.setAttribute("src", "../../../public/images/Stone-Shovel.webp")
        Images.imageElement.axe.setAttribute("src", "./images/Stone-Axe.webp")
        Images.imageElement.pickaxe.setAttribute("src", "./images/Stone-Pickaxe.webp")
        Images.imageElement.sword.setAttribute("src", "./images/Stone-Sword.webp")
    }
    if(material==="stone"){
        Images.imageElement.shovel.setAttribute("src", "./images/Stone-Shovel.webp")
        Images.imageElement.axe.setAttribute("src", "./images/Stone-Axe.webp")
        Images.imageElement.pickaxe.setAttribute("src", "./images/Stone-Pickaxe.webp")
        Images.imageElement.sword.setAttribute("src", "./images/Stone-Sword.webp")
    }
    if(material==="stone"){
        Images.imageElement.shovel.setAttribute("src", "./images/Stone-Shovel.webp")
        Images.imageElement.axe.setAttribute("src", "./images/Stone-Axe.webp")
        Images.imageElement.pickaxe.setAttribute("src", "./images/Stone-Pickaxe.webp")
        Images.imageElement.sword.setAttribute("src", "./images/Stone-Sword.webp")
    }
    if(material==="stone"){
        Images.imageElement.shovel.setAttribute("src", "./images/Stone-Shovel.webp")
        Images.imageElement.axe.setAttribute("src", "./images/Stone-Axe.webp")
        Images.imageElement.pickaxe.setAttribute("src", "./images/Stone-Pickaxe.webp")
        Images.imageElement.sword.setAttribute("src", "./images/Stone-Sword.webp")
    }
}
    power() {
        Statistics.power.shovelTag.innerText = Shovel.properties.power + cookiePerSec;
        Statistics.power.axeTag.innerText = Axe.properties.power + cookiePerSec;
        Statistics.power.pickaxeTag.innerText = Pickaxe.properties.power + cookiePerSec;
        Statistics.power.swordTag.innerText = Sword.properties.power + cookiePerSec;
    }


}

export {Update}