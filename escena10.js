import { Escena11 } from './escena11.js'
import { Escena } from './escenas.js'

export class Escena10 extends Escena {
  constructor (aventura) {
    const titulo = 'La batalla con el dragon'
    const desc = 'El grupo de Bilbo, Thorin y Gandalf avanzó con cautela por los túneles oscuros de la Montaña Solitaria. El aire se volvió más caliente y cargado de un olor a humo, y el sonido del suave retumbar del dragón Smaug resonó en sus oídos.'
    super(titulo, desc, aventura)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    document.getElementById('cambiarEscena').onclick = () => {
      const escena11 = new Escena11(this.aventura)
      escena11.iniciarEscena()
    }

    // diálogo
    this.aventura.smaug.hablar('¿Quiénes se atreven a entrar en mi dominio?')
    this.aventura.thorin.hablar('Somos los herederos de Erebor. Hemos venido a reclamar lo que nos pertenece.')
    this.aventura.bilbo.hablar('¡Herederos, dices! Erebor es mío por derecho, y nadie me lo quitará.')
    this.aventura.narrador.hablar('La batalla fue épica, con Thorin enfrentando al dragón valientemente, mientras Bilbo usaba su astucia y el Anillo Único para moverse con sigilo y encontrar una debilidad en el dragón. Gandalf desató hechizos poderosos para debilitar a Smaug. Finalmente, Bilbo logró encontrar una escama suelta en el vientre del dragón y, con un golpe preciso, clavó una daga en ese punto vulnerable.')
  }
}
