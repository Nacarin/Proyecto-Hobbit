import { Maquina } from "./maquina.js";
import { nave as tipoMaquina } from "./tipos_maquinas.js";
export class Nave extends Maquina{
    #tipoNave = null;
    constructor(nombre, tipoNave = null){
        super(nombre, tipoMaquina)
        this.#tipoNave = tipoNave
    }
}