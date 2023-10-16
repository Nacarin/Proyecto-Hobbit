import { Personaje } from "./personaje.js";
import { Escena1 } from "./escena1.js";
import * as clase_raza from "./clase_raza.js";
import { Enano } from "./enano.js";

export class Aventura{
    bilbo = new Personaje('Bilbo', clase_raza.razaHobbit);
    gandalf = new Personaje('Gandalf', clase_raza.razaHumano, clase_raza.claseMago);
    thorin = new Enano('Thorin', clase_raza.claseGuerrero);
    gloin = new Enano('Gloin');

    iniciarAventura(){
        const escena1 = new Escena1(this);
        escena1.iniciarEscena();
    }
}