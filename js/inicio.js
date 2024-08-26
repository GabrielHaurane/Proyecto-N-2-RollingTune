

const listaCanciones = JSON.parse(localStorage.getItem("cancionKey")) || [];

const usuarioLogueado = false;
const card = document.querySelector("#cardInicio")
const btnMass = document.querySelectorAll(".btn-escuchar-mas")




// Redirigir al archivo de detalles al hacer clic en la imagen de la tarjeta
window.verImg = (id) =>{
  
  const buscarIndiceCancion = listaCanciones.findIndex((canciones)=> canciones.id === id)
  
 window.location.href = `/pages/detalles.html?id=${listaCanciones[buscarIndiceCancion].id}`
}

// Mostrar el botón cuando el usuario se desplaza hacia abajo más de 200px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// Función para desplazarse hacia arriba al hacer clic en el botón
document.getElementById("backToTopBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const cargaInicial = ()=>{
  if(listaCanciones.length!==0){
      listaCanciones.map((canciones)=>dibujarCanciones(canciones))
      
  }
}

const dibujarCanciones = (canciones)=>{
  
  card.innerHTML += ` 
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="card my-2">
                <img onclick= "verImg('${canciones.id}')" src="${canciones.imgcancion}"
                  class="card-img-top" alt="Imagen 1" />
                <div>
                  <h5 class="card-title text-black">
                    ${canciones.nombre} <br />${canciones.artista}
                  </h5>
                  <p>${canciones.categoria}</p>
                  <audio controls id="audio1"
                    src="${canciones.audio}"></audio>
                    <button onclick="btnMas()" class='btn-escuchar-mas'>Escuchar más</button>
                </div>
              </div>
            </div>
            
`

}


cargaInicial()

document.querySelectorAll("audio").forEach(function (audioElement) {
  audioElement.addEventListener("play", function () {
    document.querySelectorAll("audio").forEach(function (audio) {
      if (audio !== audioElement) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const timeoutId = setTimeout(function () {
      if (!audioElement.paused) {
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.setAttribute("disabled", "true"); 
        alert(
          "El audio se ha detenido después de 30 segundos y no se puede reproducir nuevamente."
        );
      }
    }, 30000); 

    audioElement.setAttribute("data-timeout-id", timeoutId);
  });

  audioElement.addEventListener("pause", function () {
    const timeoutId = audioElement.getAttribute("data-timeout-id");
    if (timeoutId) {
      clearTimeout(timeoutId);
      audioElement.removeAttribute("data-timeout-id");
    }
  });
});


// Función para "Escuchar más"
window.btnMas = () =>{
  if (!usuarioLogueado) {
    if (confirm("¿Quieres iniciar sesión?")) {
      window.location.href = "login.html";
    }
  } else {
    var audioElement = btn.previousElementSibling;
    if (audioElement.paused && audioElement.currentTime >= 30) {
      audioElement.play();
    } else {
      alert("El audio no está pausado o no ha alcanzado los 30 segundos.");
    }
}
}