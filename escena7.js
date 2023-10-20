import { Escena8 } from "./escena8.js";
import { Escena } from "./escenas.js"

export class Escena7 extends Escena {

    constructor(aventura) {
        const titulo = "Cruzamos el rio"
        const desc = ""
        super(titulo, desc,aventura);
    }

    iniciarEscena() {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()

        document.getElementById('cambiarEscena').onclick = () => {
            let escena8 = new Escena8(this.aventura);
            escena8.iniciarEscena();
        };
        
        //diálogo
        this.aventura.fili.hablar("¡Sigamos con el camino!.");
        this.aventura.thorin.hablar("Bilbo, ¿puedes encontrar una forma de cruzar de manera más rápida y segura?");
        this.aventura.bilbo.hablar("Creo que he encontrado una forma. Aquellos troncos caídos pueden servir de puente improvisado.");
        this.aventura.fili.hablar("Los troncos caidos, nos pueden ayudar");
        this.aventura.bilbo.hablar("Bien hecho, fili. Sigamos adelante en nuestro viaje hacia la Montaña Solitaria.");
    }
}