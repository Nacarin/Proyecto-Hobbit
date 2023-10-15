import { Escena } from "./escenas.js"

export class EscenaTrolls extends Escena {
    constructor() {
        const titulo1 = "Escena Trolls"
        const desc = "Escena Trolls"
        super(titulo1, desc)
    }

    iniciarEscena(bilbo,thorin,elrond,thranduil) {
        super.mostrarTitulo()
        super.mostrarDescripcion()

        // Diálogo y narración
        elrond.hablar("Tenemos que ser cautelosos. Los trolls son fuertes.")
        bilbo.hablar("¿Y si volvemos a Rivendel? Esto es peligroso.")
        thorin.hablar("No podemos regresar ahora. Debemos enfrentarlos.")
        thranduil.hablar("Tal vez Bilbo tiene razón. Quizás debamos volver a Rivendel.")


        
    }
    
    
    
}