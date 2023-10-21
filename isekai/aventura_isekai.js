import { EscenaIsekai1 } from "./isekai1.js";

export class AventuraIsekai {
    
    iniciarSuenho(aventura) {
        let escenaIsekai1 = new EscenaIsekai1(aventura, this);
        escenaIsekai1.iniciarEscena();
    }
}


