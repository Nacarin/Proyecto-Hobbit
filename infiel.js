import { Enano } from "./enano.js";
import { infiel } from "./clase_raza.js";

export class Infiel extends Enano{

    constructor(nombre, clase=null, colorBarba = 'Blanca'){
        super(nombre, clase, colorBarba, infiel)
    }
}