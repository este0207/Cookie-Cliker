import { global } from "../../scope/global/globalVar.js";
import { Update } from "../../view/ui/update/update.js";
import { Cookies } from "../cookies/Cookies.js";
import { Images } from "../../view/ui/images.js";
import { Buttons } from "../../view/components/Buttons.js";
import { strings } from "../../scope/constants/strings.js";

class Start {
    static game() {
        if(global.count === 0){
            document.getElementById('title').innerText = strings.cookieNone;
        }
        Cookies.load();
        Update.cookieCountAdd(0);
        Update.Ui.price();
        Update.Ui.power();
        Images.imageElement.mainCookie.addEventListener('click', () => {
            Images.imageElement.mainCookie.classList.toggle('active');
            Update.cookieCountAdd(0);
        });
        Buttons.Event.init();
        Buttons.Event.world();

    }

}


export {Start}