import { Elfo } from "./elfo.js";
import { tipoSilvano as tipo } from "./clase_raza.js";

export class Silvano extends Elfo{

    constructor(nombre, clase=null){
        super(nombre, clase, tipo)
    }
}