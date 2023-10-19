import { Escena } from "./escenas.js"
import { Flags } from "./flags.js";
import { AventuraGundam } from "./gundam/aventura_gundam.js";

//Importad vuestra escena aqui

export class EscenaNexo extends Escena {

    constructor(aventura) {
        const titulo = "Escena Nexo: Aquí se bifurcan las rutas"
        const desc = "Descripcion escena nexo"
        super(titulo, desc, aventura);
    }

    iniciarEscena(personajes) {
        this.limpiarPantalla()
        this.mostrarTitulo()
        this.mostrarDescripcion()

        //para preguntar con un prompt (decicisiones con multiples escenas posibles)
        document.getElementById('cambiarEscena').onclick = () => this.decision();

        
        // AQUI VA EL CONTENIDO
        
    }

    decision(){
        /**
         * Aquí ofreceremos opciones que nos permitan ir a distintas rutas, por ahora serán 1, 2, 3 y 4 
         * pero cambiadlo por la opción que queráis para vuestra ruta, podemos añadir más o menos, no preocuparse por eso
         */
        let escenaElegida = super.hacerPregunta("1(sueño gundam), 2, 3") 
        switch (escenaElegida) {
            case '1':  
            //Cambiad esto por vuestra escena
                let aventuraGundam = new AventuraGundam();
                aventuraGundam.iniciarSuenho(this.aventura)
                break;
            case '2':  
            //Cambiad esto por vuestra escena
                let escenaX = new EscenaX(this.aventura);
                escenaX.iniciarEscena();
                break;
            case '3':  
            //Cambiad esto por vuestra escena
                if(Flags.flagGundam&&Flags.flagIsekai){
                    let escenaY = new EscenaY(this.aventura);
                    escenaY.iniciarEscena();
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

