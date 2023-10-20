import { Escena5 } from "./escena5.js";
import { Escena } from "./escenas.js"

export class Escena4 extends Escena {

    constructor(aventura) {
        const titulo = "Conflicto con los Trolls"
        const desc = ""
        super(titulo, desc,aventura);
    }

    iniciarEscena() {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()

        document.getElementById('cambiarEscena').onclick = () => {
            let escena5 = new Escena5(this.aventura);
            escena5.iniciarEscena();
        };
        
        //diálogo
        this.aventura.bilbo.hablar("Trolls. Debemos ser sigilosos.");
        this.aventura.thorin.hablar("Observemos, pero estemos listos para actuar.");
        this.aventura.tom.hablar("¡Eh, chico! ¿Qué crees que estás haciendo aquí?");
        this.aventura.bilbo.hablar("Oh, yo... estaba solo dando un paseo. No quería molestarlos.");
        this.aventura.tom.hablar("¡A por ellos!.");
        this.aventura.thorin.hablar("¡Las armas! Protejamos a Bilbo")
        this.aventura.gloin.hablar("¡Esos tontos trolls nunca deberían haber subestimado a los enanos!")
        this.aventura.bilbo.hablar("¡Por fin! Los trolls han sido derrotados")
    }
}