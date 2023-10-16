import { Escena1 } from "./escena1.js";
import { Escena3 } from "./escena3.js";
import { Escena } from "./escenas.js"

export class Escena2 extends Escena {

    constructor(aventura) {
        const titulo = "Escena 2: Un inesperado encuentro"
        const desc = "Descripcion escena 2"
        super(titulo, desc, aventura);
    }

    iniciarEscena(personajes) {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()

        //para preguntar con un prompt (decicisiones con multiples escenas posibles)
        document.getElementById('cambiarEscena').onclick = () => this.decision();

        // Diálogo y narración
        this.aventura.gandalf.hablar("Bilbo, permíteme presentarte a Thorin Escudo de Roble y su compañía de enanos.");
        this.aventura.bilbo.hablar("¡Enanos! ¿Qué hacen aquí?");
        this.aventura.thorin.hablar("Hemos venido en busca de un ladrón valiente y astuto.");
        this.aventura.bilbo.hablar("Pero yo no soy un ladrón.");
    }

    decision(){
        //realiza un prompt con una indicación de la respuesta esperada
        let escenaElegida = super.hacerPregunta("1 o 3")
        //Si coincide la respuesta con una de las opciones cambiamos de escena, si no alertamos de respuesta inválida
        switch (escenaElegida) {
            case '1':  
                let escena1 = new Escena1(this.aventura);
                escena1.iniciarEscena();
                break;
            case '3':  
                let escena3 = new Escena3(this.aventura);
                escena3.iniciarEscena();
                break;
        
            default:
                alert("Respuesta inválida")
        }
    }
}

