// Variable para simular si el usuario está logueado
const usuarioLogueado = false;

// Reproducción y pausa de audio después de 30 segundos
document.querySelectorAll("audio").forEach(function (audioElement) {
  audioElement.addEventListener("play", function () {
    // Pausar todos los audios antes de reproducir el nuevo
    document.querySelectorAll("audio").forEach(function (audio) {
      if (audio !== audioElement) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    // Pausar el audio después de 30 segundos
    const timeoutId = setTimeout(function () {
      if (!audioElement.paused) {
        audioElement.pause();
        alert(
          "El audio se ha detenido después de 30 segundos. Haz clic en 'Escuchar más' para seguir escuchando."
        );
      }
    }, 30000); // 30 segundos = 30000 milisegundos

    // Asociar el timeoutId con el elemento de audio
    audioElement.setAttribute("data-timeout-id", timeoutId);
  });

  // Limpiar el timeout si el usuario pausa manualmente
  audioElement.addEventListener("pause", function () {
    clearTimeout(audioElement.getAttribute("data-timeout-id"));
  });
});

// Función para "Escuchar más"
document.querySelectorAll(".btn-escuchar-mas").forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (!usuarioLogueado) {
      if (confirm("¿Quieres iniciar sesión?")) {
        window.location.href = "login.html"; // Redirige a la página de login
      }
    } else {
      var audioElement = btn.previousElementSibling;
      if (audioElement.paused && audioElement.currentTime >= 30) {
        // Continuar la reproducción si el audio se ha detenido después de 30 segundos
        audioElement.play();
      } else {
        alert("El audio no está pausado o no ha alcanzado los 30 segundos.");
      }
    }
  });
});

// Simulación de si el usuario está logueado
/*let usuarioLogueado = false;

// Función para pausar el iframe y mostrar alerta después de 30 segundos
function pausarIframeYMostrarAlerta() {
  const iframes = document.querySelectorAll('iframe');
  for (const iframe of iframes) {
    iframe.contentWindow.postMessage('pausa', '*');
  }
  setTimeout(() => {
    if (!usuarioLogueado) {
      alert("Debes iniciar sesión para seguir escuchando.");
    }
  }, 30000); // 30 segundos
}

// Evento para cuando se carguen los iframes
window.addEventListener('message', (event) => {
  if (event.data === 'play') {
    pausarIframeYMostrarAlerta();
  }
});

// Iniciar control de reproducción para cada botón "Escuchar más"
document.querySelectorAll('.btn-escuchar-mas').forEach(button => {
  button.addEventListener('click', () => {
    if (!usuarioLogueado) {
      alert("Debes iniciar sesión para seguir escuchando. ¿Deseas iniciar sesión ahora?");
      window.location.href = 'login.html'; // Redirigir a la página de inicio de sesión
    } else {
      const iframe = button.parentNode.querySelector('iframe');
      iframe.contentWindow.postMessage('play', '*');
    }
  });
});*/