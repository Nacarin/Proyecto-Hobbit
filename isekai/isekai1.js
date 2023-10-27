import { EscenaIsekai } from './escena_isekai.js'
import { EscenaIsekai2 } from './isekai2.js'

export class EscenaIsekai1 extends EscenaIsekai {
  constructor (aventura, aventuraIsekai) {
    const titulo = 'Un mundo desconocido'
    const desc = 'Bilbo, Gandalf y Thorin se encuentran en la actualidad, rodeados de rascacielos y coches. En la distancia, ven un edificio escolar.'
    super(titulo, desc, aventura, aventuraIsekai)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    // Para avanzar a una escena concreta al pulsar el botón sin opciones
    document.getElementById('cambiarEscena').onclick = () => {
      const escenaIsekai2 = new EscenaIsekai2(this.aventura, this.aventuraIsekai)
      escenaIsekai2.iniciarEscena()
    }

    this.aventura.gandalf.hablar('¿Dónde se supone que estamos?')
    this.aventura.bilbo.hablar('Miren eso, parece una escuela, y esos edificios, ¿por qué son tan altos? Además, ¿qué es esta ropa tan rara que tengo? ¡No entiendo nada!')
    this.aventura.gandalf.hablar('Debemos encontrar respuestas. Sigamos adelante.')
  }
}
