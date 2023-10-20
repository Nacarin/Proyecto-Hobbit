import { Escena10 } from "./escena10.js";
import { Escena } from "./escenas.js"

export class Escena9 extends Escena {

    constructor(aventura) {
        const titulo = "Un nuevo dia"
        const desc = "En la busqueda del dragon"
        super(titulo, desc,aventura);
    }

    iniciarEscena() {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()

        document.getElementById('cambiarEscena').onclick = () => {
            let escena10 = new Escena10(this.aventura);
            escena10.iniciarEscena();
        };
        
        //diálogo
        this.aventura.gandalf.hablar("¡BUenos dias! Es hora de seguir adelante. Nuestro destino nos aguarda en las profundidades de la Montaña Solitaria.");
        this.aventura.thorin.hablar("Tienes razón, Gandalf. No podemos permitirnos más demoras. Smaug debe caer, y el tesoro de Erebor debe ser recuperado.");
        this.aventura.bilbo.hablar("Estoy listo para seguir adelante, pero debemos recordar que enfrentar a un dragón no será una tarea fácil. Necesitamos un plan sólido.");
        this.aventura.gandalf.hablar("No te preocupes, Bilbo. Tengo un plan. Nos acercaremos a la Montaña Solitaria sigilosamente, utilizando la ayuda de un antiguo amigo que vive en el bosque cercano.");
    }
}