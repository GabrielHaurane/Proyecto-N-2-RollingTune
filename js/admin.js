import { funcionScroll } from "./navbar.js";
funcionScroll;
const modalAdminContacto = new bootstrap.Modal(
    document.querySelector("#modalCancion")
  );
const btnAgregarCancion = document.querySelector('#btnAgregarCancion')

//clase cancion
class cancion {
    constructor(nombre,artista,album,fecha,categoria,duracion,audio,imgcancion){
        this.nombre=nombre
        this.artista=artista
        this.album=album
        this.fecha=fecha
        this.categoria=categoria
        this.duracion=duracion
        this.audio=audio
        this.imgcancion=imgcancion

    }
    
}

//FUNCIONES
const mostrarModal = ()=>{
    modalAdminContacto.show()
}


//MANEJADORES DE EVENTOS

btnAgregarCancion.addEventListener('click',mostrarModal)