import { EscenaGundam1 } from "./escena_gundam1.js";
import { Gundam } from "./gundam.js";
import { Nave } from "./nave.js";
import { Newtype } from "./newtype.js"

export class AventuraGundam{
    amuro = new Newtype("Amuro Ray")
    gundam = new Gundam("RX-78-2 Gundam", this.amuro)
    whiteBase = new Nave("SCV-70 White Base", "Pegasus")

    iniciarSuenho(aventura){
        let escenaGundam1 = new EscenaGundam1(aventura,this);
        escenaGundam1.iniciarEscena();
    }
}