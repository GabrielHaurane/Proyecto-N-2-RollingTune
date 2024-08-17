var usuarioLogueado = false;

document.querySelectorAll(".btn-play").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var audioId = btn.getAttribute("data-audio");
    var audioElement = document.getElementById(audioId);
    var escucharMasBtn = btn.nextElementSibling;

    document.querySelectorAll("audio").forEach(function (audio) {
      audio.pause();
      audio.currentTime = 0;

      var card = audio.closest(".card");
      card.querySelector(".btn-play").style.display = "inline-block";
      card.querySelector(".btn-escuchar-mas").style.display = "none";
    });

    audioElement.play();
    btn.style.display = "none";
    escucharMasBtn.style.display = "inline-block";

    var timeoutId = setTimeout(function () {
      if (!audioElement.paused) {
        audioElement.pause();
        escucharMasBtn.style.display = "inline-block";
      }
    }, 30000);

    audioElement.setAttribute("data-timeout-id", timeoutId);

    alert(
      "Estas escuchando nuestra Demo de 30 segundos. Haz clic en 'Escuchar más' para seguir escuchando."
    );
  });
});

// Función para escuchar más
document.querySelectorAll(".btn-escuchar-mas").forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (!usuarioLogueado) {
      if (confirm("¿Quieres iniciar sesión?")) {
        window.location.href = "login.html";
      }
    } else {
      var audioId = btn.previousElementSibling.getAttribute("data-audio");
      var audioElement = document.getElementById(audioId);

      // Reproduce el audio
      audioElement.play();
      btn.style.display = "none";
    }
  });
});
