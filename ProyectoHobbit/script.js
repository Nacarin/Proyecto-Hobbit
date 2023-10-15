console.log('Script cargado correctamente.');

import { Escena1 } from "./escena1.js";
import { Escena2 } from "./escena2.js";
import { Escena3 } from "./escena3.js";
import { Escena4 } from "./escena4.js"
import { EscenaTrolls } from "./escenatrolls.js"
import { EscenaBosque } from "./escenabosque.js"
import { Personaje } from "./personaje.js"

let bilbo = new Personaje('Bilbo', 'Hobbit')
let gandalf = new Personaje('Gandalf', 'Humano', 'Mago')
let thorin = new Personaje('Thorin', 'Humano', 'Mago')
let gloin = new Personaje('Gloin', 'Humano', 'Mago')
let thranduil=new Personaje('Thranduil','Elfo')
let elrond=new Personaje('Elrond','Elfo')


const escena1 = new Escena1();
const escena2 = new Escena2();
const escena3 = new Escena3();
const escena4 = new Escena4();
const escenatrolls = new EscenaTrolls();
const escenabosque = new EscenaBosque();
let escenas = [escena1, escena2, escena3, escena4,escenatrolls,escenabosque]
let escenaIndex = 0;
let escenaAnteriorIndex = -1;
// ...

function cambiarEscena() {
    if (escenaIndex < escenas.length) {
        const escenaActual = escenas[escenaIndex];
        escenaActual.iniciarEscena(bilbo, gandalf, thorin, gloin, thranduil, elrond);

        // Comprueba si la escena actual es la Escena 4
        if (escenaIndex === 3) {
            // Muestra el menú de opciones y oculta el botón "Cambiar Escena"
            document.getElementById('opcionesMenu').style.display = 'block';
            document.getElementById('cambiarEscena').style.display = 'none';
        } else {
            // Oculta el menú de opciones en otras escenas y muestra el botón "Cambiar Escena"
            document.getElementById('opcionesMenu').style.display = 'none';
            document.getElementById('cambiarEscena').style.display = 'block';
        }

        if (escenaIndex === 4) {
            // Esta es la escena Trolls, muestra el botón "Volver Atrás" y oculta el menú de opciones
            document.getElementById('opcionesMenu').style.display = 'none';
            document.getElementById('volverAtras').style.display = 'block';

            // Agregar un evento para volver atrás
            document.getElementById('volverAtras').addEventListener('click', () => {

                    escenaIndex = escenaAnteriorIndex; // Configura la escena actual como la escena anterior
                    cambiarEscena();
                
            });


        } else {
            // Si no es la Escena Trolls, asegúrate de que el botón "Volver Atrás" esté oculto
            document.getElementById('volverAtras').style.display = 'none';
        }

        escenaIndex++;
    }
}

// ...

// Agrega un evento para manejar las opciones del menú
document.getElementById('opcionesSelect').addEventListener('change', function() {
    const selectedOption = this.value;

    // Redirigir a la escena correspondiente según la opción seleccionada
    switch (selectedOption) {
        case "escenatrolls":
            escenatrolls.iniciarEscena(bilbo, thorin, thranduil, elrond);
            break;
        case "escenabosque":
            escenabosque.iniciarEscena(bilbo, gloin, thranduil, elrond);
            break;
    }
});



document.getElementById('cambiarEscena').addEventListener('click', cambiarEscena);
cambiarEscena();


