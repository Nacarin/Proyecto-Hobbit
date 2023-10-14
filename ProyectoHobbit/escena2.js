import { Escena } from "./escenas.js"

export class Escena2 extends Escena {
    constructor() {
        const titulo1 = "Escena 2: Un inesperado encuentro"
        const desc = "Descripcion escena 2"
        super(titulo1, desc)
    }

    iniciarEscena(bilbo, gandalf, thorin, gloin) {
        super.mostrarTitulo()
        super.mostrarDescripcion()

        // Diálogo y narración
        gandalf.hablar("Bilbo, permíteme presentarte a Thorin Escudo de Roble y su compañía de enanos.");
        bilbo.hablar("¡Enanos! ¿Qué hacen aquí?");
        thorin.hablar("Hemos venido en busca de un ladrón valiente y astuto.");
        bilbo.hablar("Pero yo no soy un ladrón.");
    }
}

