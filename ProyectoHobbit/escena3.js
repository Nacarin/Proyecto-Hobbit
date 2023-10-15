import { Escena } from "./escenas.js"

export class Escena3 extends Escena {
    constructor() {
        const titulo1 = "Escena 3: La partida"
        const desc = "Descripción escena 3"
        super(titulo1, desc)
    }

    iniciarEscena(bilbo, thorin, gloin) {
        super.mostrarTitulo()
        super.mostrarDescripcion()

        //diálogo
        thorin.hablar("Bilbo, tenemos un largo viaje por delante. La Montaña Solitaria es nuestro destino.");
        bilbo.hablar("No sé si estoy preparado para esto. Aventuras no son lo mío.");
        gloin.hablar("Pero amigo Bilbo, has demostrado ser valiente en el bosque.");
        bilbo.hablar("Sí, tal vez tenga un poco de coraje después de todo.");
    }
}
