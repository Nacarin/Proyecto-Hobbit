import { Objeto } from './objeto.js'

/**
 * Representa un personaje de la aventura.
 */
export class Personaje {
  nombre = null
  #raza = null
  #clase = null
  #inventario = null

  /**
     * Constructor de la clase
     *
     * @desc inicializa los datos del personaje
     * @param {string} nombre El nombre del personaje.
     * @param {Symbol} raza La raza del personaje.
     * @param {Symbol} clase La clase del personaje.
     */
  constructor (nombre, raza, clase = null) {
    this.nombre = nombre
    this.#raza = raza
    this.#clase = clase
    this.#inventario = new Set()
  }

  hablar (texto) {
    const textoMejorado = `<br/><b>${this.nombre}:</b> "${texto}"`
    document.getElementById('divHistoria').innerHTML += textoMejorado
  }

  /**
     * Añade un objeto al inventario del Personaje.
     * @param {Objeto} objeto El objeto que se añadirá al inventario del personaje
     */
  coger (objeto) {
    this.#inventario.add(objeto)
  }

  pasar (objeto, personaje) {
    if (!(objeto instanceof Objeto)) {
      throw new Error('Objeto inválido')
    }
    if (!(personaje instanceof Personaje)) {
      throw new Error('Personaje inválido')
    }

    this.#inventario.delete(objeto)
    personaje.coger(objeto)
  }

  pegarBofetada (personaje) {
    if (!(personaje instanceof Personaje)) {
      throw new Error('Personaje inválido')
    }
    const texto = `<br/><i>${this.nombre} le pega una bofetada a ${personaje.nombre}</i>`
    document.getElementById('divHistoria').innerHTML += texto
  }
}
