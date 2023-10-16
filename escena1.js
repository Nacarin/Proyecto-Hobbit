import { Escena3 } from "./escena3.js";
import { Escena2 } from "./escena2.js";
import { Escena } from "./escenas.js"

export class Escena1 extends Escena {

    constructor(aventura) {
        const titulo = "Escena 1: Una inesperada fiesta de cumpleaños";
        const desc = "En la Comarca, Bilbo Bolsón estaba celebrando su undécimo undécimo cumpleaños";
        super(titulo, desc, aventura);
    }

    iniciarEscena() {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()
        
        //Para avanzar a una escena concreta al pulsar el botón sin opciones
        document.getElementById('cambiarEscena').onclick = () => {
            let escena2 = new Escena2(this.aventura);
            escena2.iniciarEscena();
        };

        this.aventura.bilbo.hablar("Otro día tranquilo, ¿qué más podría desear?");
        this.aventura.gandalf.hablar("Buenas tardes, señor Bolsón.");
        this.aventura.bilbo.hablar("¡Oh, disculpe mi malos modales! ¿Quién es usted y qué quiere?");
        this.aventura.gandalf.hablar("Soy Gandalf el Gris, y he oído que te consideras aventurero en secreto.");
        this.aventura.bilbo.hablar("¡Aventurero en secreto! ¡Nunca! Mi vida es lo más alejada de la aventura.");
        this.aventura.gandalf.hablar("Pero Bilbo, ¿no has soñado nunca con explorar el mundo más allá de la Comarca?");
    }



   

}

