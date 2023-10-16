export class Escena {
    #titulo = null
    #descripcion = null
    aventura = null;
    constructor(titulo, descripcion, aventura) {
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.aventura = aventura
    }

    limpiarPantalla(){
        document.getElementById('divTitulo').innerHTML = ''
        document.getElementById('divDescripcion').innerHTML = ''
        document.getElementById('divHistoria').innerHTML = ''
    }

    mostrarTitulo() {
        document.getElementById('divTitulo').innerHTML = this.#titulo;
    }

    mostrarDescripcion() {
        document.getElementById('divDescripcion').innerHTML = this.#descripcion
    }
    
    hacerPregunta (pregunta){
        let decision = prompt(pregunta);
        return decision;
    }

    confirmacion (pregunta){
        let decision = confirm(pregunta);
        return decision;
    }
    
}