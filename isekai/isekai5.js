import { EscenaIsekai } from "./escena_isekai.js";
import { EscenaIsekai6 } from "./isekai6.js"; // Ajusta la importación de la siguiente escena según tu estructura

export class EscenaIsekai5 extends EscenaIsekai {

    constructor(aventura, aventuraIsekai) {
        const titulo = "Enfrentamiento con la Mafia Clandestina";
        const desc = "Nuestros aventureros se ven atrapados en un enfrentamiento con la mafia clandestina que los ha descubierto.";
        super(titulo, desc, aventura, aventuraIsekai);
    }

    iniciarEscena() {
        this.limpiarPantalla();
        this.mostrarTitulo();
        this.mostrarDescripcion();

        // Avanzar a la siguiente escena
        document.getElementById('cambiarEscena').onclick = () => this.avanzarEscenaSiguiente();

        this.aventura.bilbo.hablar("Mirad,tienes cosas metalicas como la mia,les voy a preguntar a ver si saben lo que es.");
        this.aventura.gandalf.hablar("Espera Bilbo,recuerda que esa cosa es peli...");
        this.aventura.narrador.hablar("Pero era tarde,Bilbo habia hechado a correr hacia ellos con la pistola en la mano")

        this.simularEnfrentamiento();
    }

    simularEnfrentamiento() {
        this.aventura.bilbo.hablar("!Perdonen,un momento¡");
        this.aventura.narrador.hablar("Los mafiosos al girarse vieron a un policia ridiculamente pequeño yendo hacia ellos con una pistola sacada");
        this.aventura.narrador.hablar("En ese momento uno de ellos saco su propia pistola y le pego un tiro entre los ojos a Bilbo");

        this.aventura.thorin.hablar("¡BILBOOOOO!");
        this.aventura.narrador.hablar("Thorin se lanzo hacia ellos pero Gandalf lo cogio de la chaqueta y lo puso a salvo detras de la esquina,mientras los mafiosos empezaron a dispararles");

        this.aventura.thorin.hablar("!Que haces Gandalf,hay que ir a por Bilbo,esa magia extraña le ha dado de lleno y no se mueve¡");
        this.aventura.gandalf.hablar("!Tranquilizate¡,si corremos hacia ellos asi sin mas nos ocurrira lo mismo")
    }

    avanzarEscenaSiguiente() {
        let escenaSiguiente = new EscenaIsekai6(this.aventura, this.aventuraIsekai);
        escenaSiguiente.iniciarEscena();
    }
}


