//clase cancion
import { v4 as uid } from "https://jspm.dev/uuid";
export class cancion {
    #id;
    #nombre;
    #artista;
    #album;
    #fecha;
    #categoria;
    #duracion;
    #audio;
    #imgcancion;
    constructor(id,nombre,artista,album,fecha,categoria,duracion,audio,imgcancion){
        this.#id=uid()
        this.#nombre=nombre
        this.#artista=artista
        this.#album=album
        this.#fecha=fecha
        this.#categoria=categoria
        this.#duracion=duracion
        this.#audio=audio
        this.#imgcancion=imgcancion
    }
    
    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }

    get artista() {
        return this.#artista;
    }

    get album() {
        return this.#album;
    }

    get fecha() {
        return this.#fecha;
    }

    get categoria() {
        return this.#categoria;
    }

    get duracion() {
        return this.#duracion;
    }

    get audio() {
        return this.#audio;
    }

    get imgcancion() {
        return this.#imgcancion;
    }

    // Setters
    set id(nuevoId) {
        this.#id = nuevoId;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    set artista(nuevoArtista) {
        this.#artista = nuevoArtista;
    }

    set album(nuevoAlbum) {
        this.#album = nuevoAlbum;
    }

    set fecha(nuevaFecha) {
        this.#fecha = nuevaFecha;
    }

    set categoria(nuevaCategoria) {
        this.#categoria = nuevaCategoria;
    }

    set duracion(nuevaDuracion) {
        this.#duracion = nuevaDuracion;
    }

    set audio(nuevoAudio) {
        this.#audio = nuevoAudio;
    }

    set imgcancion(nuevaImgcancion) {
        this.#imgcancion = nuevaImgcancion;
    }

    toJSON(){
        return{
            id: this.#id,
            nombre: this.#nombre,
            artista: this.#artista,
            album: this.#album,
            fecha: this.#fecha,
            categoria: this.#categoria,
            duracion: this.#duracion,
            audio: this.#audio,
            imgcancion: this.#imgcancion
        }
    }
}