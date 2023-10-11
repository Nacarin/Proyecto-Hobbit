import { razaEnano as raza} from "./clase_raza.js";
import { Personaje } from "./personaje.js";

export class Enano extends Personaje{

    static rey = 'Thorin Escudo de roble'
    // static listaEnanos = [];
    static alabarAlRey(){
        return 'Viva ' + Enano.rey
    }

    #colorBarba = null

    constructor(nombre, clase=null, colorBarba = 'Blanca'){
        super(nombre, raza, clase)
        this.#colorBarba = colorBarba
        // listaEnanos.push(nombre);
    }

    picar(){
    }
}