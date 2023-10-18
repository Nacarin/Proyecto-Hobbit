// personaje.js
import { Objeto } from "./objeto.js";

export class Personaje {
    nombre = null;
    #raza = null;
    #clase = null;
    #inventario = null;

    constructor(nombre, raza, clase = null) {
        this.nombre = nombre;
        this.#raza = raza;
        this.#clase = clase;
        this.#inventario = new Set();
    }

    hablar(texto) {
        let textoMejorado = `<br/><b>${this.nombre}:</b> "${texto}"`;
        document.getElementById('divHistoria').innerHTML += textoMejorado;
    }

    coger(objeto) {
        this.#inventario.add(objeto);
    }

    pasar(objeto, personaje) {
        if (!(objeto instanceof Objeto)) {
            throw 'Objeto inválido';
        }
        if (!(personaje instanceof Personaje)) {
            throw 'Personaje inválido';
        }

        this.#inventario.delete(objeto);
        personaje.coger(objeto);
    }
}

