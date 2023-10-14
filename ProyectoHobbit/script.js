console.log('Script cargado correctamente.');

import { Escena1 } from "./escena1.js";
import { Escena2 } from "./escena2.js";
import { Escena3 } from "./escena3.js";
import { Personaje } from "./personaje.js";

let bilbo = new Personaje('Bilbo', 'Hobbit');
let gandalf = new Personaje('Gandalf', 'Humano', 'Mago');
let thorin = new Personaje('Thorin', 'Humano', 'Mago');
let gloin = new Personaje('Gloin', 'Humano', 'Mago');

const escena1 = new Escena1();
const escena2 = new Escena2();
const escena3 = new Escena3();
let escenas = [escena1, escena2, escena3];
let escenaIndex = 0;

// Función para cambiar de escena de manera asíncrona
function cambiarEscena() {
    if (escenaIndex < escenas.length) {
        const escenaActual = escenas[escenaIndex];
        escenaActual.iniciarEscena(bilbo, gandalf, thorin, gloin);
        escenaIndex++;
    }
}

document.getElementById('cambiarEscena').addEventListener('click', cambiarEscena);
cambiarEscena();
