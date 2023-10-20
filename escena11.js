import { Escena } from "./escenas.js"

export class Escena11 extends Escena {

    constructor(aventura) {
        const titulo = "La Reivindicación de Erebor"
        const desc = ""
        super(titulo, desc,aventura);
    }

    iniciarEscena() {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()

        document.getElementById('cambiarEscena').remove()
        
        this.aventura.thorin.hablar(" Lo hemos logrado, gracias a la valentía de todos. Erebor es nuevamente nuestro.")
        this.aventura.bilbo.hablar("Y todo gracias a la valentía y astucia de nuestros aliados")
        this.aventura.gandalf.hablar("Esta alianza demuestra que juntos somos más fuertes.")
        this.aventura.thorin.hablar("¿Que pasará con el tesoro de Smaug?")
        this.aventura.elrond.hablar(" Será distribuido de manera justa entre todos los que lucharon en esta batalla.")
        this.aventura.thorin.hablar("La paz ha regresado a la Tierra Media. Erebor vuelve a brillar, y la esperanza prevalece.")
    }
}