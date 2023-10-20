import { Escena3 } from "./escena3.js";
import { Escena4 } from "./escena4.js";
import { Escena } from "./escenas.js"

export class Escena1 extends Escena {

    constructor(aventura) {
        const titulo = "La reunión en Rivendel";
        const desc = "";
        super(titulo, desc, aventura);
    }

    iniciarEscena() {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()
        
        //Para avanzar a una escena concreta al pulsar el botón sin opciones
        document.getElementById('cambiarEscena').onclick = () => this.decision();


        this.aventura.gandalf.hablar("Tenemos que encontrar la manera de cruzar las Montañas Nubladas");
        this.aventura.thorin.hablar(" Deberíamos buscar el consejo de Elrond. Él conoce estos senderos.");
        this.aventura.bilbo.hablar("¿De verdad? Bueno, supongo que podríamos preguntarle.");
        this.aventura.thranduil.hablar("Espera un momento. ¿Por qué deberíamos confiar en ellos?");
        this.aventura.gloin.hablar("Tenemos un problema más grande. Los trolls han robado nuestras provisiones.");
        this.aventura.elrond.hablar("Los trolls son un peligro, pero no más que la Gran Montaña Solitaria. Debemos unir fuerzas.");
        this.aventura.bilbo.hablar("¡Vamos a la aventura!");
    }
    decision(){
        //realiza un prompt con una indicación de la respuesta esperada
        let escenaElegida = super.hacerPregunta("Deseas pelear con los trolls (1) o ir la montaña SOlitaria (2)")
        //Si coincide la respuesta con una de las opciones cambiamos de escena, si no alertamos de respuesta inválida
        switch (escenaElegida) {
            case '1':  
                let escena4 = new Escena4(this.aventura);
                escena4.iniciarEscena();
                break;
            case '2':  
                let escena3 = new Escena3(this.aventura);
                escena3.iniciarEscena();
                break;
        
            default:
                alert("Respuesta inválida")
        }
    }
}

