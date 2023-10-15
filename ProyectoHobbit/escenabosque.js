import { Escena } from "./escenas.js"

export class EscenaBosque extends Escena {
    constructor() {
        const titulo1 = "Escena Bosque"
        const desc = "Escena Bosque"
        super(titulo1, desc)
    }

    iniciarEscena(gandalf,gloin,elrond,thranduil) {
        super.mostrarTitulo()
        super.mostrarDescripcion()

        // Diálogo y narración
        gandalf.hablar("Hemos entrado en el Bosque Negro. No será fácil navegar aquí.")
        elrond.hablar("Quizás Thranduil y sus elfos puedan ayudarnos.")
        thranduil.hablar("Está bien, pero solo si prometen no causar problemas.")
        gloin.hablar("¿Qué podría salir mal?")

        
    }
    
    
}