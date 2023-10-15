import { Escena } from "./escenas.js"

export class Escena4 extends Escena {
    constructor() {
        const titulo1 = "Escena 4: La reunión en Rivendel"
        const desc = "Escena 4"
        super(titulo1, desc)
    }

    iniciarEscena(bilbo,gandalf,thorin,elrond,gloin,thranduil) {
        super.mostrarTitulo()
        super.mostrarDescripcion()

        // Diálogo y narración
        gandalf.hablar("Tenemos que encontrar la manera de cruzar las Montañas Nubladas")
        thorin.hablar("Deberíamos buscar el consejo de Elrond. Él conoce estos senderos.")
        bilbo.hablar("¿De verdad? Bueno, supongo que podríamos preguntarle.")
        thranduil.hablar("Espera un momento. ¿Por qué deberíamos confiar en ellos?")
        gloin.hablar("Tenemos un problema más grande. Los trolls han robado nuestras provisiones.")
        elrond.hablar("Los trolls son un peligro, pero no más que la Gran Montaña Solitaria. Debemos unir fuerzas.")



    }
    
}