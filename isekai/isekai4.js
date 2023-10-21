import { EscenaIsekai } from "./escena_isekai.js";
import { EscenaIsekai5 } from "./isekai5.js";

export class EscenaIsekai4 extends EscenaIsekai {

    constructor(aventura, aventuraIsekai) {
        const titulo = "En territorio desconocido";
        const desc = "Nuestros aventureros siguen avanzando y se adentran en un barrio con una apariencia inusual y peligrosa.";
        super(titulo, desc, aventura, aventuraIsekai);
    }

    iniciarEscena() {
        this.limpiarPantalla();
        this.mostrarTitulo();
        this.mostrarDescripcion();

        // Avanzar a la EscenaIsekai5 al hacer clic en el botón
        document.getElementById('cambiarEscena').onclick = () => {
            let escenaIsekai5 = new EscenaIsekai5(this.aventura, this.aventuraIsekai);
            escenaIsekai5.iniciarEscena();
        };

        this.aventura.bilbo.hablar("Este sitio es muy extraño,huele muy mal,me recuerda a las guaridas de las ratas.");
        this.aventura.thorin.hablar("Parecen las catacumbas enanas");
        this.aventura.gandalf.hablar("En cada mundo hay lugares que deben explorarse con precaución. Sigamos avanzando, pero mantengámonos juntos.");
        this.aventura.bilbo.hablar("¡Miren eso! Parece que hay un grupo de personas reuniéndose en ese callejón. ¿Deberiamos preguntarles?.");
        this.aventura.thorin.hablar("Estoy de acuerdo.Pero vayamos con cuidado.");


    }
}
