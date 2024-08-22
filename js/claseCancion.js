//clase cancion

import { v4 as uid } from "https://jspm.dev/uuid";
export class cancion {
    constructor(id,nombre,artista,album,fecha,categoria,duracion,audio,imgcancion){
        this.id=uid()
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