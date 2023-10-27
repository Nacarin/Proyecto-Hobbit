import { Enano } from './enano.js'
import { fiel } from './clase_raza.js'

export class Fiel extends Enano {
  constructor (nombre, clase = null, colorBarba = 'Blanca') {
    super(nombre, clase, colorBarba, fiel)
  }
}
