import { Axe } from "../../model/tools/class/Axe.js";
import { Shovel } from "../../model/tools/class/Shovel.js";
import { Pickaxe } from "../../model/tools/class/Pickaxe.js";
import { Sword } from "../../model/tools/class/Sword.js";
import { global } from "../../scope/global/globalVar.js";
import { Cave } from "../../model/worlds/class/Cave.js";
import { Mine1 } from "../../model/worlds/class/Mine1.js";
import { Mine2 } from "../../model/worlds/class/Mine2.js";
import { Filon } from "../../model/worlds/class/Filon.js";
import { Nether } from "../../model/worlds/class/Nether.js";
import { Buttons } from "../../view/components/Buttons.js";
import { Update } from "../../view/ui/update/update.js";

class Cookies {
    static save() {
        localStorage.setItem('cookieCount', global.count);
        localStorage.setItem('cookieSec', global.cookiePerSec);
        localStorage.setItem('AxeCount',Axe.properties.count);
        localStorage.setItem('ShovelCount', Shovel.properties.count);
        localStorage.setItem('PickaxeCount', Pickaxe.properties.count);
        localStorage.setItem('ShovelPrice',Shovel.properties.price);
        localStorage.setItem('AxePrice',Axe.properties.price);      
        localStorage.setItem('PickaxePrice',Pickaxe.properties.price);  
        localStorage.setItem('SwordPrice',Sword.properties.price);
        localStorage.setItem('ShovelPower', Shovel.properties.power);
        localStorage.setItem('AxePower', Axe.properties.power);
        localStorage.setItem('PickaxePower', Pickaxe.properties.power);
        localStorage.setItem('SwordPower', Sword.properties.power);
        localStorage.setItem('ShovelBool', Shovel.properties.status);
        localStorage.setItem('AxeBool', Axe.properties.status);
        localStorage.setItem('PickaxeBool', Pickaxe.properties.status);
        localStorage.setItem('SwordBool', Sword.properties.status);
        localStorage.setItem('CaveBool', Cave.properties.status);
        localStorage.setItem('Mine1Bool', Mine1.properties.status);
        localStorage.setItem('Mine2Bool', Mine2.properties.status);
        localStorage.setItem('FilonBool', Filon.properties.status);
        localStorage.setItem('NetherBool', Nether.properties.status);
    }
    static load(){
        global.count = parseInt(localStorage.getItem('cookieCount'), 10) || 0;
        global.cookiePerSec = parseInt(localStorage.getItem('cookieSec'), 10) || 0;
        Axe.properties.count = parseInt(localStorage.getItem('AxeCount'), 10) || 0;
        Shovel.properties.count = parseInt(localStorage.getItem('ShovelCount'), 10) || 0;
        Pickaxe.properties.count = parseInt(localStorage.getItem('PickaxeCount'), 10) || 0;
        Shovel.properties.price = parseInt(localStorage.getItem('ShovelPrice'), 10) || 10;
        Axe.properties.price = parseInt(localStorage.getItem('AxePrice'), 10) || 100;
        Pickaxe.properties.price = parseInt(localStorage.getItem('PickaxePrice'), 10) || 500;
        Sword.properties.price = parseInt(localStorage.getItem('SwordPrice'), 10) || 1000;
        Shovel.properties.power = parseInt(localStorage.getItem('ShovelPower'), 10) || 1;
        Axe.properties.power = parseInt(localStorage.getItem('AxePower'), 10) || 12;
        Pickaxe.properties.power = parseInt(localStorage.getItem('PickaxePower'), 10) || 77;
        Sword.properties.power = parseInt(localStorage.getItem('SwordPower'), 10) || 160;
        Shovel.properties.status = localStorage.getItem('ShovelBool') === 'true' || false;
        Axe.properties.status = localStorage.getItem('AxeBool') === 'true' || false;
        Pickaxe.properties.status = localStorage.getItem('PickaxeBool') === 'true' || false;
        Sword.properties.status = localStorage.getItem('SwordBool') === 'true' || false;
        Cave.properties.status = localStorage.getItem('CaveBool') === 'true' || false;
        Mine1.properties.status = localStorage.getItem('Mine1Bool') === 'true' || false;
        Mine2.properties.status = localStorage.getItem('Mine2Bool') === 'true' || false;
        Filon.properties.status = localStorage.getItem('FilonBool') === 'true' || false;
        Nether.properties.status = localStorage.getItem('NetherBool') === 'true' || false;
        let s;
        let a;
        let p;
        let sw;
        let total;
        // MULTIPLICATION DU COUT EN COOKIES
        s = Shovel.properties.count * Shovel.properties.price;
        a = Axe.properties.count * Axe.properties.price;
        p = Pickaxe.properties.count * Pickaxe.properties.price;
        sw = Sword.properties.count * Sword.properties.price;
        // TOTAL DES OUTILS EN COOKIES
        total = s + a + p + sw; 
        // AJOUTER A LA BALANCE "TEMPORAIREMENT"
        global.count += total;

        // SERIES DE BOUCLES FOR POUR SIMULER DES CLIQUES SUR LES BOUTONS
        for (let i = 0; i != Shovel.properties.count; i++) {
            Shovel.properties.count -= 1;  //ENLEVER 1 CAR +=1 DANS LES BOUTONS (SUITE AU AJOUT TEMPORAIRE DE COOKIES)
            global.cookiePerSec-=Shovel.properties.power;
            Buttons.shovel.click(); 
            console.log("Clique sur bouton 2")
        }
        for (let i = 0; i != Axe.properties.count; i++) {
            Axe.properties.count -= 1;  //ENLEVER 1 CAR +=1 DANS LES BOUTONS (SUITE AU AJOUT TEMPORAIRE DE COOKIES)
            global.cookiePerSec-=Axe.properties.power;
            Buttons.axe.click(); 
            console.log("Clique sur bouton 2")
        }
        for (let i = 0; i != Pickaxe.properties.count; i++) {
            Pickaxe.properties.count -= 1; //ENLEVER 1 CAR +=1 DANS LES BOUTONS (SUITE AU AJOUT TEMPORAIRE DE COOKIES)
            global.cookiePerSec-=Pickaxe.properties.power;
            Buttons.pickaxe.click(); 
            console.log("Clique sur bouton 3")
        }
        for (let i = 0; i != Sword.properties.count; i++) {
            Sword.properties.count -= 1; //ENLEVER 1 CAR +=1 DANS LES BOUTONS (SUITE AU AJOUT TEMPORAIRE DE COOKIES)
            global.cookiePerSec-=Sword.properties.power;
            Buttons.sword.click(); 
            console.log("Clique sur bouton 4")
        }
        Update.cookieCountAdd();
        Update.Ui.price();
    }
    
    
}

export {Cookies}

