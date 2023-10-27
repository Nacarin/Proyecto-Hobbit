import { Escena } from './escenas.js'
import { Escena8 } from './escena8.js'
import { Escena7 } from './escena7.js'

export class Escena6 extends Escena {
  constructor (aventura) {
    const titulo = '¿Y si volvemos?'
    const desc = ''
    super(titulo, desc, aventura)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    document.getElementById('cambiarEscena').onclick = () => this.decision()

    // diálogo
    this.aventura.gandalf.hablar('Bilbo, ¿puedes encontrar una forma de cruzar de manera más rápida y segura?')
    this.aventura.thorin.hablar('¿Y si volvemos a Rivendel? Esto es peligroso.')
    this.aventura.gandalf.hablar('No podemos regresar ahora. ')
    this.aventura.bilbo.hablar('Tal vez Gandalf tiene razón. Quizás debamos volver a Rivendel.')
  }

  decision () {
    // realiza un prompt con una indicación de la respuesta esperada
    const escenaElegida = super.hacerPregunta('Cruzar el rio(1) o volver a casa(2)')
    // Si coincide la respuesta con una de las opciones cambiamos de escena, si no alertamos de respuesta inválida
    switch (escenaElegida) {
      case '1':{
        const escena7 = new Escena7(this.aventura)
        escena7.iniciarEscena()
        break
      }
      case '2':{
        const escena8 = new Escena8(this.aventura)
        escena8.iniciarEscena()
        break
      }
      default:
        alert('Respuesta inválida')
    }
  }
}
