const usuarioLogueado = false;

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
        alert(
          "El audio se ha detenido después de 30 segundos. Haz clic en 'Escuchar más' para seguir escuchando."
        );
      }
    }, 30000);

    audioElement.setAttribute("data-timeout-id", timeoutId);
  });

  audioElement.addEventListener("pause", function () {
    clearTimeout(audioElement.getAttribute("data-timeout-id"));
  });
});

// Función para "Escuchar más"
document.querySelectorAll(".btn-escuchar-mas").forEach(function (btn) {
  btn.addEventListener("click", function () {
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
  });
});
