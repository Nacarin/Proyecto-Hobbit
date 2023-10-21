import { EscenaNexo } from "../escena_nexo.js";
import { Flags } from "../flags.js";
import { EscenaIsekai } from "./escena_isekai.js";

export class EscenaIsekai6 extends EscenaIsekai {

    constructor(aventura, aventuraIsekai) {
        const titulo = "¿Será este el final del hombre araña, digo de nuestros héroes?";
        const desc = "Nuestros héroes luchan con valentía, pero el enfrentamiento con la mafia clandestina toma un giro trágico.";
        super(titulo, desc, aventura, aventuraIsekai);
    }

    iniciarEscena() {
        this.limpiarPantalla();
        this.mostrarTitulo();
        this.mostrarDescripcion();

        document.getElementById('cambiarEscena').onclick = () => {
            // Crea un nuevo elemento de imagen
            const gifImage = new Image();           
            // Asigna la fuente del GIF
            gifImage.src = './isekai/queen.gif';              
            // Agrega el elemento de imagen al documento
            document.body.appendChild(gifImage);      
            // Resto de tu código para cambiar la escena
            alert("Nah, era broma, todo es un sueño");
            Flags.activarFlagIsekai();
            let escenaNexo = new EscenaNexo(this.aventura);
            escenaNexo.iniciarEscena();
            
            setTimeout(function() {
                // Elimina el elemento de imagen después de 5 segundos
                document.body.removeChild(gifImage);
            }, 5000);
        };
        
        this.aventura.thorin.hablar("Gandalf, haz algo con tu magia, yo no tengo aquí mis armas.");
        this.aventura.gandalf.hablar("Eso es lo que me gustaría, pero no soy capaz.");
        this.aventura.narrador.hablar("Mientras Gandalf y Thorin discuten qué hacer, una granada cae a su lado.");
        this.aventura.gandalf.hablar("¿Qué es esa cosa tan extraña?");
        this.aventura.narrador.hablar("¡BOOOM!");
        this.aventura.thorin.hablar("Cof, cof, cof, ¿qué demonios ha sido eso? ¿Gandalf, dónde estás?");
        this.aventura.narrador.hablar("Cuando el polvo desaparece, Thorin se queda con los ojos abiertos al ver el cuerpo en pedazos de su querido amigo Gandalf. Intenta acercarse a él pero se da cuenta de que no tiene las piernas.");
        this.aventura.narrador.hablar("Uno de los mafiosos se acerca a él y le apunta con una escopeta.");
        this.aventura.thorin.hablar("Santa diosa, ¿en qué infierno hemos caído?");
        this.aventura.narrador.hablar("¡PUM!");
    }
}
