export class Escena {
    #titulo = null
    #descripcion = null

    constructor(titulo, descripcion) {
        this.#titulo = titulo;
        this.#descripcion = descripcion;
    }

    mostrarTitulo() {
        document.getElementById('divTitulo').innerHTML = this.#titulo
    }

    mostrarDescripcion() {
        document.getElementById('divDescripcion').innerHTML = this.#descripcion
    }
}