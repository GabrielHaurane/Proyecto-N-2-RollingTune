import { funcionScroll } from "./navbar.js";
funcionScroll;
import { loguear, validateEmailFormat } from "./login.js";
loguear;
validateEmailFormat;
const paramId = new URLSearchParams(window.location.search).get('id');  
const listaCanciones = JSON.parse(localStorage.getItem('agendaKey')) || [];
const cancionBuscada = listaCanciones.find((cancion)=>cancion.id === paramId);






const dibujarCancion = ()=>{
    const contenedor = document.querySelector(".contenedorCancion")
    
    contenedor.innerHTML = `<div class="container w-75 sectionDetalles mt-5 card mb-3">
            <div class=" row g-0">
                <div class="w-25 justify-content-center d-flex flex-column col-md-4">
                    <img class="w-100" src="${cancionBuscada.imgCancion}" alt="${cancionBuscada.nombre}">
                </div>
                <div class="col-md-8">
                    <div class="ms-5 card-body">
                        <h2 class="mt-3 card-title">Titulo:${cancionBuscada.nombre}</h2>
                        <h2 class="mt-3 card-text">Artista:${cancionBuscada.artista}</h2>
                        <h2 class="mt-3 card-text">Categoria:${cancionBuscada.categoria}</h2>
                        <h2 class="mt-3 card-text">Duracion:${cancionBuscada.duracion}</h2>
                        <h2 class="mt-3 card-text">Cancion: ${cancionBuscada.audio} </h2>
                        
                    </div>
                </div>
            </div>
        </div>`
}




dibujarCancion();