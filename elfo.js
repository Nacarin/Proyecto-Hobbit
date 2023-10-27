import { razaElfo as raza } from './clase_raza.js'
import { Personaje } from './personaje.js'

export class Elfo extends Personaje {
  #tipo = null
  constructor (nombre, clase = null, tipo = null) {
    super(nombre, raza, clase)
    this.#tipo = tipo
  }
}
