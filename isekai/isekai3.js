import { EscenaIsekai } from './escena_isekai.js'
import { EscenaIsekai4 } from './isekai4.js'

export class EscenaIsekai3 extends EscenaIsekai {
  constructor (aventura, aventuraIsekai) {
    const titulo = 'Un giro inesperado'
    const desc = 'Mientras exploraban, los aventureros empiezan a manipular el arma que tiene Bilbo.'
    super(titulo, desc, aventura, aventuraIsekai)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    // Avanzar a la EscenaIsekai4 al hacer clic en el botón
    document.getElementById('cambiarEscena').onclick = () => {
      const escenaIsekai4 = new EscenaIsekai4(this.aventura, this.aventuraIsekai)
      escenaIsekai4.iniciarEscena()
    }

    this.aventura.bilbo.hablar('¿Qué es esta cosa de hierro tan rara? Pesa mucho y parece hecha para sujetarse con una mano.')
    this.aventura.narrador.hablar('Mientras Bilbo manipulaba el arma, esta se dispara contra el suelo accidentalmente.')
    this.aventura.gandalf.hablar('¡Cuidado, Bilbo! Parece ser algún tipo de magia extraña.')
    this.aventura.bilbo.hablar('¡Repampano! Tendré más cuidado. ¿Qué clase de mundo es este en el que alguien como yo hace magia sin ser un mago?')
    this.aventura.gandalf.hablar('Tengamos cuidado, si tú has podido, cualquiera podría hacerlo.')
    this.aventura.thorin.hablar('A mí me impresionan más esos extraños caballos metálicos. Van muy rápido. Deberíamos salir de este sitio e ir a algún lugar más protegido.')
  }
}
