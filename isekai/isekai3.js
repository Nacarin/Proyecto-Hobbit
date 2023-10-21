import { EscenaIsekai } from "./escena_isekai.js";
import {Narrador} from "../narrador.js"
import { EscenaIsekai4 } from "./isekai4.js";

export class EscenaIsekai3 extends EscenaIsekai {

    constructor(aventura, aventuraIsekai) {
        const titulo = "Un giro inesperado";
        const desc = "Mientras exploraban, los aventureros empiezan a manipular el arma que tiene Bilbo.";
        super(titulo, desc, aventura, aventuraIsekai);
    }

    iniciarEscena() {
        this.limpiarPantalla();
        this.mostrarTitulo();
        this.mostrarDescripcion();

        // Avanzar a la EscenaIsekai4 al hacer clic en el botón
        document.getElementById('cambiarEscena').onclick = () => {
            let escenaIsekai4 = new EscenaIsekai4(this.aventura, this.aventuraIsekai);
            escenaIsekai4.iniciarEscena();
        };

        this.aventura.bilbo.hablar("¿Que es esta cosa de hierro tan rara?pesa mucho y parece hecha para sujetarse con una mano.");
        this.aventura.narrador.hablar("Mientras Bilbo manipulaba el arma esta se dispara contra el suelo accidentalmente.")
        this.aventura.gandalf.hablar("¡Cuidado Bilbo parece ser algun tipo de magia extraña!");
        this.aventura.bilbo.hablar("¡Repampano!Tendre mas cuidado,¿Que clase de mundo es este que alguien como yo ha hecho magia sin ser un mago?");
        this.aventura.gandalf.hablar("Tengamos cuidado,si tu has podido cualquiera podria hacerlo.");
        this.aventura.thorin.hablar("A mi me impresionan mas esos extraños caballos metalicos,van muy rapido,deberiamos salir de este sitio e ir a algun lugar mas protegido.");


    }
}
