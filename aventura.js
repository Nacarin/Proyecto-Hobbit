import { Escena1 } from './escena1.js'
import * as claseRaza from './clase_raza.js'
import { Humano } from './humano.js'
import { Hobbit } from './hobbit.js'
import { Fiel } from './fiel.js'
import { Infiel } from './infiel.js'
import { DeLaLuz } from './de_la_luz.js'
import { Silvano } from './silvano.js'
import { Troll } from './troll.js'
import { Dragon } from './dragon.js'

export class Aventura {
  thorin = new Fiel('Thorin', claseRaza.claseGuerrero)
  gloin = new Infiel('Gloin', null, 'Roja')
  bilbo = new Hobbit('Bilbo', claseRaza.razaHobbit)
  dwalin = new Hobbit('Dwalin', claseRaza.razaHobbit)
  gandalf = new Humano('Gandalf', claseRaza.claseMago)
  habitante1 = new Humano('Habitante de la ciudad')
  liderCiudad = new Humano('Líder de la ciudad')
  bardo = new Humano('Bardo', claseRaza.claseArquero)
  elrond = new DeLaLuz('Elrond')
  thranduil = new Silvano('Thranduil')
  tom = new Troll('Tom')
  dori = new Fiel('Dori', claseRaza.claseClerigo)
  fili = new Humano('fili', claseRaza.claseGuerrero)
  smaug = new Dragon('Smaug', claseRaza.dragon)
  narrador = new Humano('Narrador', claseRaza.razaHumano)

  iniciarAventura () {
    const escena1 = new Escena1(this)
    escena1.iniciarEscena()
  }
}
