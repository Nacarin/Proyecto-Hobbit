import { troll as raza} from "./clase_raza.js";
import { Personaje } from "./personaje.js";

export class Troll extends Personaje{

    constructor(nombre, clase=null){
        super(nombre, raza, clase)
    }
}    