const paramId = new URLSearchParams(window.location.search).get('id');  
const listaCanciones = JSON.parse(localStorage.getItem('cancionKey')) || [];
const cancionBuscada = listaCanciones.find((cancion)=>cancion.id === paramId);

const dibujarCancion = ()=>{
    const contenedor = document.querySelector(".contenedorCancion")
    console.log(contenedor);
    contenedor.innerHTML = `
    
    <div class="container-fluid w-50 sectionDetalles mt-5 card mb-3">
            <div class=" row g-0">
                <div class="w-25 justify-content-center d-flex flex-column col-md-4">
                    <img class="w-100" src="${cancionBuscada.imgcancion}" alt="${cancionBuscada.nombre}">
                </div>
                <div class="col-md-8">
                    <div class="ms-5 card-body">
                        <h2 class="mt-3 card-title">Titulo: ${cancionBuscada.nombre}</h2>
                        <h2 class="mt-3 card-text">Artista: ${cancionBuscada.artista}</h2>
                        <h2 class="mt-3 card-text">Categoria: ${cancionBuscada.categoria}</h2>
                        <audio controls id="audio1"src="${cancionBuscada.audio}"></audio>                        
                        
                    </div>
                </div>
            </div>
        </div>`
}

dibujarCancion();