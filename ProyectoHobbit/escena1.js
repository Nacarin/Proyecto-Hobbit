import { Escena } from "./escenas.js"

export class Escena1 extends Escena {
    constructor() {
        const titulo1 = "Escena 1: Una inesperada fiesta de cumpleaños"
        const desc = "En la Comarca, Bilbo Bolsón estaba celebrando su undécimo undécimo cumpleaños"
        super(titulo1, desc)
    }

    iniciarEscena(bilbo, gandalf) {
        super.mostrarTitulo()
        super.mostrarDescripcion()

        // Diálogo y narración
        bilbo.hablar("Otro día tranquilo, ¿qué más podría desear?");
        gandalf.hablar("Buenas tardes, señor Bolsón.");
        bilbo.hablar("¡Oh, disculpe mi malos modales! ¿Quién es usted y qué quiere?");
        gandalf.hablar("Soy Gandalf el Gris, y he oído que te consideras aventurero en secreto.");
        bilbo.hablar("¡Aventurero en secreto! ¡Nunca! Mi vida es lo más alejada de la aventura.");
        gandalf.hablar("Pero Bilbo, ¿no has soñado nunca con explorar el mundo más allá de la Comarca?");
    }
}

