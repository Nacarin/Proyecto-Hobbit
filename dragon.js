import { dragon as raza} from "./clase_raza.js";
import { Personaje } from "./personaje.js";

export class Dragon extends Personaje{

    constructor(nombre, clase=null, tipo=null){
        super(nombre, raza, clase)
    }
    
}