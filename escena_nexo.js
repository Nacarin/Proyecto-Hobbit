import { Escena } from "./escenas.js"
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
        let escenaElegida = super.hacerPregunta("1, 2, 3 o 4") 
        switch (escenaElegida) {
            case '1':  
            //Cambiad esto por vuestra escena
                let escenaW = new EscenaW(this.aventura);
                escenaW.iniciarEscena();
                break;
            case '2':  
            //Cambiad esto por vuestra escena
                let escenaX = new EscenaX(this.aventura);
                escenaX.iniciarEscena();
                break;
            case '3':  
            //Cambiad esto por vuestra escena
                let escenaY = new EscenaY(this.aventura);
                escenaY.iniciarEscena();
                break;
            case '4':  
            //Cambiad esto por vuestra escena
                let escenaZ = new EscenaZ(this.aventura);
                escenaZ.iniciarEscena();
                break;
            default:
                alert("Respuesta inválida")
        }
    }
}

