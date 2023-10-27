import { razaHobbit as raza } from './clase_raza.js'
import { Personaje } from './personaje.js'

export class Hobbit extends Personaje {
  constructor (nombre, clase = null) {
    super(nombre, raza, clase)
  }
}
