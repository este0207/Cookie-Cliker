import { global } from "../../scope/global/globalVar.js";
import { Update } from "../../view/ui/update/update.js";
import { Cookies } from "../cookies/Cookies.js";
import { Images } from "../../view/ui/images.js";
class Start {
    game() {
        if(global.count === 0){
            document.getElementById('title').innerText = cookieNone;
        }
        Cookies.load();
        Update.cookieAddUpdate();
        Update.Ui.price();
        Update.Ui.power();

        Images.mainCookie.addEventListener('click', () => {
            Images.mainCookie.classList.toggle('active');
            Update.cookieAddUpdate(0);
        });

    }

}


export {Start}