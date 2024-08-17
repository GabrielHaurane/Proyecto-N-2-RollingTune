import { funcionScroll } from "./navbar.js";
funcionScroll;
import { cancion } from "./claseCancion.js";
const modalAdminCancion = new bootstrap.Modal(
    document.querySelector("#modalCancion")
  );
//BOTONES
const btnAgregarCancion = document.querySelector('#btnAgregarCancion')
const formCanciones = document.querySelector("form")
const tabla = document.querySelector(".table")

//VARIABLES
const listaCanciones = JSON.parse(localStorage.getItem("cancionKey")) || [];
const nombre = document.querySelector("#nombrecancion")
const artista = document.querySelector("#artista")
const album = document.querySelector("#album")
const fecha = document.querySelector("#fecha")
const categoria = document.querySelector("#categoria")
const duracion = document.querySelector("#duracion")
const audio = document.querySelector("#audio")



//FUNCIONES
const mostrarModal = ()=>{
    modalAdminCancion.show()
}
const guardarEnLocalStorage = ()=>{
    localStorage.setItem("cancionKey", JSON.stringify(listaCanciones))
}
const limpiarModal = ()=>{
    modalAdminCancion.reset()
}
//AGREGAR NUEVA CANCION
const agregarNuevaCancion = (e)=>{
    
    e.preventDefault()
    const nuevaCancion = new cancion(
        nombre.value,
        artista.value,
        album.value,
        fecha.value,
        categoria.value,
        duracion.value,
        audio.value
    )
    listaCanciones.push(nuevaCancion)
    guardarEnLocalStorage()
    formCanciones.reset()
    
}

//READ LOCALSTORAGE
const cargaInicial = ()=>{
    if(listaCanciones.length!==0){
        listaCanciones.map((canciones)=>dibujarFila(canciones))
        
    }
}
const dibujarFila = (canciones)=>{
  
tabla.innerHTML += ` <tr>
<th scope="row">1</th>
<td>${canciones.nombre}</td>
<td>${canciones.artista}</td>
<td>${canciones.fecha}</td>
<td>
    <button class="btn btn-warning" onclick="editarContacto('')">E</button>
    <button class="btn btn-danger" onclick="borrarContacto('')">B</button>
</td>
</tr>
`
}




//ACCIONES PARA EJECUTARSE DE INMEDIATO
cargaInicial()


//MANEJADORES DE EVENTOS

btnAgregarCancion.addEventListener('click',mostrarModal)
formCanciones.addEventListener('submit',agregarNuevaCancion)