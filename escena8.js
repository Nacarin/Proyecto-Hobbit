import { EscenaNexo } from './escena_nexo.js'
import { Escena } from './escenas.js'

export class Escena8 extends Escena {
  constructor (aventura) {
    const titulo = 'Vuelta a casa'
    const desc = ''
    super(titulo, desc, aventura)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    document.getElementById('cambiarEscena').onclick = () => {
      const escenaNexo = new EscenaNexo(this.aventura)
      escenaNexo.iniciarEscena()
    }

    // diálogo
    this.aventura.thorin.hablar('Las adversidades se han vuelto demasiado intensas. Tal vez sea hora de reconsiderar nuestro viaje.')
    this.aventura.bilbo.hablar('Estamos agotados y desanimados. Quizás volver a casa sea la mejor opción.')
    this.aventura.dwalin.hablar('No hemos llegado tan lejos para rendirnos, pero quizás necesitamos un nuevo enfoque.')
    this.aventura.gandalf.hablar('Entiendo sus preocupaciones. Tomemos un descanso y evaluemos nuestras opciones')
    this.aventura.bilbo.hablar('Podríamos replantear nuestro plan y encontrar una forma más segura de enfrentar a Smaug')
    this.aventura.gandalf.hablar('De acuerdo, volvamos a casa temporalmente y reorganicemos nuestro viaje hacia la Montaña Solitaria.')
  }
}
