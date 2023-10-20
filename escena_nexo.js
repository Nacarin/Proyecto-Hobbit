import { Escena } from "./escenas.js"
import { Escena9 } from "./escena9.js"
import { Flags } from "./flags.js";
import { AventuraGundam } from "./gundam/aventura_gundam.js";

//Importad vuestra escena aqui

export class EscenaNexo extends Escena {

    constructor(aventura) {
        const titulo = "Un Momento de Agotamiento en el Viaje Épico"
        const desc = "Agotados por la larga travesía, Bilbo, Dwalin y Gandalf se reúnen para discutir su situación."
        super(titulo, desc, aventura);
    }

    iniciarEscena(personajes) {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()

        //para preguntar con un prompt (decicisiones con multiples escenas posibles)
        document.getElementById('cambiarEscena').onclick = () => this.decision();

        
        // AQUI VA EL CONTENIDO
        this.aventura.bilbo.hablar("Estamos agotados y desanimados.")
        this.aventura.dwalin.hablar("No hemos llegado tan lejos para rendirnos.")
        this.aventura.gandalf.hablar("Tomemos un descanso y evaluemos nuestras opciones.")
        this.aventura.bilbo.hablar("Duermen todos...")
    }

    decision(){
        /**
         * Aquí ofreceremos opciones que nos permitan ir a distintas rutas, por ahora serán 1, 2, 3 y 4 
         * pero cambiadlo por la opción que queráis para vuestra ruta, podemos añadir más o menos, no preocuparse por eso
         */
        let escenaElegida = super.hacerPregunta("Deseas tener un sueño sobre gundam (1), un sueño en un isekai (2) o despertar (3)") 
        switch (escenaElegida) {
            case '1':  
                Flags.activarFlagGundam()
                let aventuraGundam = new AventuraGundam();
                aventuraGundam.iniciarSuenho(this.aventura)
                break;
            case '2':  
            //Cambiad esto por vuestra escena
                Flags.activarFlagIsekai()
                // let escenaX = new EscenaX(this.aventura);
                // escenaX.iniciarEscena();
                break;
            case '3':  
                if(Flags.flagGundam&&Flags.flagIsekai){
                    let escena9 = new Escena9(this.aventura);
                    escena9.iniciarEscena();
                }
                else{
                    alert("Debes pasar por los dos sueños antes de despertar")
                }
                break;
            default:
                alert("Respuesta inválida")
        }
    }
}

