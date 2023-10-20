import { razaSaiyan as raza} from "../clase_raza.js";
import { Personaje } from "../personaje.js";
import { claseGuerrero as clase } from "../clase_raza.js";

export class Saiyan extends Personaje{

    constructor(nombre){
        super(nombre, raza, clase)
    }
    
    genkiDama(){    
        let textoGenkiDama = `<br/><i>${this.nombre} lanza una Genki-dama y muere todo el mundo</i>`;
        document.getElementById('divHistoria').innerHTML += textoGenkiDama;
    }
}
