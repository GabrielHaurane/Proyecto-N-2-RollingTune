import { funcionScroll } from "./navbar.js";
funcionScroll;
import { cancion } from "./claseCancion.js";
const modalAdminCancion = new bootstrap.Modal(
    document.querySelector("#modalCancion")
  );
  const modalEditarCancion = new bootstrap.Modal(
    document.querySelector("#modalEditarCancion")
  );
//BOTONES
const btnAgregarCancion = document.querySelector('#btnAgregarCancion')
const formCanciones = document.querySelector("form")
const formEditarCanciones = document.querySelector("#formEditar")
const tabla = document.querySelector(".tablaPrincipal")


//VARIABLES
const listaCanciones = JSON.parse(localStorage.getItem("cancionKey")) || [];
const nombre = document.querySelector("#nombrecancion")
const artista = document.querySelector("#artista")
const album = document.querySelector("#album")
const fecha = document.querySelector("#fecha")
const categoria = document.querySelector("#categoria")
const duracion = document.querySelector("#duracion")
const audio = document.querySelector("#audio")
const imagen = document.querySelector("#imagen")
const Enombre = document.querySelector("#nombreEditarCancion")
const Eartista = document.querySelector("#editarArtista")
const Ealbum = document.querySelector("#editarAlbum")
const Efecha = document.querySelector("#editarFecha")
const Ecategoria = document.querySelector("#editarCategoria")
const Eduracion = document.querySelector("#editarDuracion")
const Eaudio = document.querySelector("#editarAudio")
const Eimagen = document.querySelector("#editarImagen")




//FUNCIONES
const mostrarModal = ()=>{
    modalAdminCancion.show()
}
const mostrarModalEditar = ()=>{
    modalEditarCancion.show()
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
        undefined,
        nombre.value,
        artista.value,
        album.value,
        fecha.value,
        categoria.value,
        duracion.value,
        audio.value,
        imagen.value
    )
    listaCanciones.push(nuevaCancion)
    guardarEnLocalStorage()
    formCanciones.reset()
    location.reload()

}

//BORRAR UNA CANCION
window.borrarCancion = (id)=>{
    
    Swal.fire({
        title: "¿Esta seguro de borrar la cancion?",
        text: "No puedes revertir  este proceso",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#7066E0",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            console.log(id)

            const posicionCancion = listaCanciones.findIndex((cancion) => cancion.id === id)

            console.log(posicionCancion)

            listaCanciones.splice(posicionCancion,1)

            guardarEnLocalStorage()

            tabla.removeChild(tabla.children[posicionCancion])
            
            Swal.fire({
                title: "Cancion borrada",
                text: "La cancion seleccionada fue borrada",
                icon: "success"
                
              });
              location.reload()
            }
          })
}
//EDITAR UNA CANCION
window.editarCancion = (id)=>{
    
   
    mostrarModalEditar()
    const buscarIndiceCancion = listaCanciones.findIndex((canciones)=> canciones.id === id)
    Enombre.value = `${listaCanciones[buscarIndiceCancion].nombre}`
    Eartista.value = `${listaCanciones[buscarIndiceCancion].artista}`
    Ealbum.value = `${listaCanciones[buscarIndiceCancion].album}`
    Efecha.value = `${listaCanciones[buscarIndiceCancion].fecha}`
    Ecategoria.value = `${listaCanciones[buscarIndiceCancion].categoria}`
    Eduracion.value = `${listaCanciones[buscarIndiceCancion].duracion}`
    Eaudio.value = `${listaCanciones[buscarIndiceCancion].audio}`
    Eimagen.value = `${listaCanciones[buscarIndiceCancion].imgcancion}`
    formEditarCanciones.addEventListener('submit', function (e){
        e.preventDefault()
        console.log(listaCanciones[buscarIndiceCancion].id)
        listaCanciones[buscarIndiceCancion].nombre=Enombre.value
        listaCanciones[buscarIndiceCancion].artista=Eartista.value
        listaCanciones[buscarIndiceCancion].album=Ealbum.value
        listaCanciones[buscarIndiceCancion].fecha=Efecha.value
        listaCanciones[buscarIndiceCancion].categoria=Ecategoria.value
        listaCanciones[buscarIndiceCancion].duracion=Eduracion.value
        listaCanciones[buscarIndiceCancion].audio=Eaudio.value
        listaCanciones[buscarIndiceCancion].imagen=Eimagen.value
        guardarEnLocalStorage()
        location.reload()
    })
    
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
    <button class="btn btn-warning" onclick="editarCancion('${canciones.id}')"><i class="bi bi-pen"></i></button>
    <button class="btn btn-danger" onclick="borrarCancion('${canciones.id}')"><i class="bi bi-trash3"></i></button>
</td>
</tr>
`
}




//ACCIONES PARA EJECUTARSE DE INMEDIATO
cargaInicial()


//MANEJADORES DE EVENTOS

btnAgregarCancion.addEventListener('click',mostrarModal)
formCanciones.addEventListener('submit',agregarNuevaCancion)
