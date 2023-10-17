import { EscenaGundam } from "./escena_gundam.js";
import { EscenaGundam1 } from "./escena_gundam1.js";

export class EscenaGundam2 extends EscenaGundam {

    constructor(aventura, aventuraGundam) {
        const titulo = "Sueño Gundam: Escena 1: Un extraño conflicto";
        const desc = "Bilbo y Frodo conocen a Amuro Ray, un joven piloto envuelto en una guerra.";
        super(titulo, desc, aventura, aventuraGundam);
    }

    iniciarEscena() {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()
        
        //Para avanzar a una escena concreta al pulsar el botón sin opciones
        document.getElementById('cambiarEscena').onclick = () => {
            let escenaGundam3 = new EscenaGundam3(this.aventura, this.aventuraGundam);
            escenaGundam3.iniciarEscena();
        };
        
    }

}

