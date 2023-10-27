/**
 * Clase que representa una escena relacionada con Gundam.
 * @extends Escena
 */
import { Escena } from '../escenas.js'

export class EscenaGundam extends Escena {
  /**
     * Crea una instancia de la clase EscenaGundam.
     * @param {string} titulo - El título de la escena.
     * @param {string} desc - La descripción de la escena.
     * @param {Aventura} aventura - La aventura principal a la que pertenece la escena.
     * @param {AventuraGundam} aventuraGundam - La aventura específica de Gundam relacionada con la escena.
     */
  constructor (titulo, desc, aventura, aventuraGundam) {
    super(titulo, desc, aventura)
    this.aventuraGundam = aventuraGundam
  }
}
