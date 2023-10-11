console.log('Script cargado correctamente.')

import { Personaje } from "./personaje.js";
import { Objeto } from "./objeto.js";
import { claseClerigo, claseGuerrero, claseMago, claseSaqueador, razaElfo, razaEnano, razaHobbit, razaHumano } from "./clase_raza.js";
import { Enano } from "./enano.js";

let bilbo = new Personaje('Bilbo Bolsón',razaHobbit)
let gandalf = new Personaje('Gandalf El Gris', razaHumano, claseMago)

gandalf.hablar('Buenos días mi viejo amigo')
bilbo.hablar('¡Gandalf! Me alegro de verte')

let lampara = new Objeto('Lámpara de mesa azul')
let  reloj = new Objeto('Reloj del abuelo')

let thorin = new Enano('Thorin Escudo de Roble', claseGuerrero)
let kili = new Enano('Kili')
let fili = new Enano('Fili')
let dwalin = new Enano('Dwalin')

gandalf.hablar('¡Ya están aquí! Bienvenidos a la casa de Bilbo')

document.getElementById('divHistoria').innerHTML += 'De pronto en la casa aparecieron ...' //Lista de enanos

kili.coger(lampara)
bilbo.hablar('¡Deja eso en su sitio!')
kili.hablar('¡Cógelo Fili')
kili.pasar(lampara, fili)
fili.hablar('¡Ya la tengo!')
fili.coger(reloj)

// fili.pasar(reloj, 'Bob Esponja')
dwalin.hablar('Viva nuestro rey ' + Enano.rey)
kili.hablar(Enano.alabarAlRey());