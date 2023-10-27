import { Escena } from '../escenas.js'

export class EscenaIsekai extends Escena {
  aventuraIsekai = null
  constructor (titulo, desc, aventura, aventuraIsekai) {
    super(titulo, desc, aventura)
    this.aventuraIsekai = aventuraIsekai
  }
}
