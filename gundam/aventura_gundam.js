import { Humano } from '../humano.js'
import { EscenaGundam1 } from './escena_gundam1.js'
import { Gundam } from './gundam.js'
import { Nave } from './nave.js'
import { Newtype } from './newtype.js'
import { Saiyan } from './saiyan.js'

/**
 * Clase que representa la aventura de Gundam.
 */
export class AventuraGundam {
  esperaCalabozo = 0
  esperaMax = Math.floor(Math.random() * 5) + 1
  goku = new Saiyan('Goku')
  amuro = new Newtype('Amuro Ray')
  bright = new Humano('Bright Noa')
  gundam = new Gundam('RX-78-2 Gundam', this.amuro)
  whiteBase = new Nave('SCV-70 White Base', 'Pegasus', this.bright)

  /**
     * Inicia la aventura.
     * @param {Aventura} aventura - La aventura principal a la que pertenece la aventura Gundam.
     */
  iniciarSuenho (aventura) {
    const escenaGundam1 = new EscenaGundam1(aventura, this)
    escenaGundam1.iniciarEscena()
  }
}
