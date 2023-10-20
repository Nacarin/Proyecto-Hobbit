import { Escena6 } from "./escena6.js";
import { Escena } from "./escenas.js"

export class Escena5 extends Escena {

    constructor(aventura) {
        const titulo = "Un rio en medio de nuestro camino"
        const desc = ""
        super(titulo, desc,aventura);
    }

    iniciarEscena() {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()

        document.getElementById('cambiarEscena').onclick = () => {
            let escena6 = new Escena6(this.aventura);
            escena6.iniciarEscena();
        };
        
        //diálogo
        this.aventura.gandalf.hablar("¡Sigamos con el camino!.");
        this.aventura.bilbo.hablar("Este bosque es peligroso y confuso. Debemos tener cuidado y mantenernos juntos para no perdernos.");
        this.aventura.thorin.hablar("No puedo evitar sentir que este lugar nos observa. ¿Algo o alguien más nos sigue?");
        this.aventura.dori.hablar("No estoy seguro, Bilbo, pero tenemos que seguir adelante.");
        this.aventura.bilbo.hablar("¡Mirar, ahi termina el bosque!.");
        this.aventura.thorin.hablar("Hay un rio, ¿Como lo cruzaremos?")
    }

   
}