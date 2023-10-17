import { Escena1 } from "./escena1.js";
import * as clase_raza from "./clase_raza.js";
import { Humano } from "./humano.js";
import { Hobbit } from "./hobbit.js";
import { Fiel } from "./fiel.js";
import { Infiel } from "./infiel.js";
import { DeLaLuz } from "./de_la_luz.js";
import { Silvano } from "./silvano.js";

export class Aventura{
    thorin = new Fiel('Thorin', clase_raza.claseGuerrero);
    gloin = new Infiel('Gloin', null, "Roja");
    bilbo = new Hobbit('Bilbo', clase_raza.razaHobbit);
    gandalf = new Humano('Gandalf', clase_raza.claseMago);
    habitante1 = new Humano('Habitante de la ciudad');
    liderCiudad = new Humano('Líder de la ciudad');
    bardo = new Humano('Bardo', clase_raza.claseArquero)
    elrond = new DeLaLuz('Elrond')
    thranduil = new Silvano('Thranduil')
    
    iniciarAventura(){
        const escena1 = new Escena1(this);
        escena1.iniciarEscena();
    }
}