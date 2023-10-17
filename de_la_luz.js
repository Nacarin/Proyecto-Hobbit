import { Elfo } from "./elfo.js";
import { tipoDeLaLuz as tipo } from "./clase_raza.js";

export class DeLaLuz extends Elfo{

    constructor(nombre, clase=null){
        super(nombre, clase, tipo)
    }
}