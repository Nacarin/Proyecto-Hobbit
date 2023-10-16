import { Personaje } from "./personaje.js";
import { Escena1 } from "./escena1.js";
import * as clase_raza from "./clase_raza.js";

export class Aventura{
    bilbo = new Personaje('Bilbo', clase_raza.razaHobbit);
    gandalf = new Personaje('Gandalf', clase_raza.razaHumano, clase_raza.claseMago);
    thorin = new Personaje('Thorin', clase_raza.razaHumano, clase_raza.claseMago);
    gloin = new Personaje('Gloin', clase_raza.razaHumano, clase_raza.claseMago);

    iniciarAventura(){
        const escena1 = new Escena1(this);
        escena1.iniciarEscena();
    }
}