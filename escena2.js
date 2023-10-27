import { Escena1 } from './escena1.js'
import { Escena3 } from './escena3.js'
import { Escena } from './escenas.js'

export class Escena2 extends Escena {
  constructor (aventura) {
    const titulo = 'Vuelta a casa'
    const desc = ' '
    super(titulo, desc, aventura)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    // para preguntar con un prompt (decicisiones con multiples escenas posibles)
    document.getElementById('cambiarEscena').onclick = () => this.decision()

    // Diálogo y narración
    this.aventura.elrond.hablar('Tenemos que ser cautelosos. Los trolls son fuertes.')
    this.aventura.bilbo.hablar('¿Y si volvemos a Rivendel? Esto es peligroso.')
    this.aventura.thorin.hablar('No podemos regresar ahora. Debemos enfrentarlos.')
    this.aventura.thranduil.hablar('Tal vez Bilbo tiene razón. Quizás debamos volver a Rivendel.')
  }

  decision () {
    // realiza un prompt con una indicación de la respuesta esperada
    const escenaElegida = super.hacerPregunta('1 o 3')
    // Si coincide la respuesta con una de las opciones cambiamos de escena, si no alertamos de respuesta inválida
    switch (escenaElegida) {
      case '1':{
        const escena1 = new Escena1(this.aventura)
        escena1.iniciarEscena()
        break
      }
      case '3':{
        const escena3 = new Escena3(this.aventura)
        escena3.iniciarEscena()
        break
      }
      default:
        alert('Respuesta inválida')
    }
  }
}
