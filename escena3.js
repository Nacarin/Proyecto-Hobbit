import { Escena1 } from "./escena1.js";
import { Escena2 } from "./escena2.js";
import { Escena } from "./escenas.js"

export class Escena3 extends Escena {

    constructor(aventura) {
        const titulo = "Escena 3: La partida"
        const desc = "Descripción escena 3"
        super(titulo, desc,aventura);
    }

    iniciarEscena(personajes) {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()

        document.getElementById('cambiarEscena').onclick = () => this.decision();
        
        //diálogo
        this.aventura.thorin.hablar("Bilbo, tenemos un largo viaje por delante. La Montaña Solitaria es nuestro destino.");
        this.aventura.bilbo.hablar("No sé si estoy preparado para esto. Aventuras no son lo mío.");
        this.aventura.gloin.hablar("Pero amigo Bilbo, has demostrado ser valiente en el bosque.");
        this.aventura.bilbo.hablar("Sí, tal vez tenga un poco de coraje después de todo.");
    }

    decision(personajes){
        //realiza un confirm con una pregunta para aceptar o cancelar
        let escenaElegida = super.confirmacion("Si pulsas aceptar vas a la escena 1, sino a la 2")
        //Si aceptas va a una opción si cancelas a la otra
        if(escenaElegida){
            let escena1 = new Escena1(this.aventura);
            escena1.iniciarEscena();
        } 
        else{
            let escena2 = new Escena2(this.aventura);
            escena2.iniciarEscena();
        }
    }
}