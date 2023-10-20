import { Escena4 } from "./escena4.js";
import { Escena } from "./escenas.js"

export class Escena3 extends Escena {

    constructor(aventura) {
        const titulo = "La montaña Solitaria"
        const desc = ""
        super(titulo, desc,aventura);
    }

    iniciarEscena() {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()

        document.getElementById('cambiarEscena').onclick = () => {
            let escena4 = new Escena4(this.aventura);
            escena4.iniciarEscena();
        };
        
        //diálogo
        this.aventura.gandalf.hablar("Hemos sobrevivido a muchas pruebas en nuestro viaje. Pero ahora debemos decidir nuestro próximo paso");
        this.aventura.thorin.hablar("¿A qué te refieres, Gandalf?.");
        this.aventura.gandalf.hablar("A lo que me refiero, Thorin, es que debemos discutir nuestro plan para entrar en la Montaña Solitaria y reclamar el tesoro que tanto anhelamos. ");
        this.aventura.thorin.hablar("Sí, debemos ir a la por el dragon Smaug.");
        this.aventura.bilbo.hablar("Pero ¿cómo podemos hacer eso? Smaug es un dragón temible, y no somos guerreros.");
        this.aventura.gloin.hablar("Y si encontramos la piedra del Arca de Thrain, que hemos estado buscando, podría ser una ventaja adicional")
        this.aventura.gandalf.hablar("¡Vamos a ellos a por la busqueda del dragon!")
    }
}