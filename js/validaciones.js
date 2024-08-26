document
  .getElementById("formCancion")
  .addEventListener("submit", function (event) {
    // Previene el envío del formulario si hay errores
    event.preventDefault();

    let isValid = true;

    //Aqui se obtiene los elemnts del form
    const nombreCancion = document.getElementById("nombrecancion");
    const artista = document.getElementById("artista");
    const fecha = document.getElementById("fecha");
    const duracion = document.getElementById("duracion");
    const audio = document.getElementById("audio");

    //validacion primer campo
    if (nombreCancion.value.trim() === "") {
      isValid = false;
      nombreCancion.classList.add("is-invalid");
    } else {
      nombreCancion.classList.remove("is-invalid");
      nombreCancion.classList.add("is-valid");
    }

    // Validacion seg campo"
    if (artista.value.trim() === "") {
      isValid = false;
      artista.classList.add("is-invalid");
    } else {
      artista.classList.remove("is-invalid");
      artista.classList.add("is-valid");
    }

    // Validacion tercer campo
    if (fecha.value.trim() === "") {
      isValid = false;
      fecha.classList.add("is-invalid");
    } else {
      fecha.classList.remove("is-invalid");
      fecha.classList.add("is-valid");
    }

    // Validacion cuarto campo
    if (duracion.value.trim() === "" || duracion.value <= 0) {
      isValid = false;
      duracion.classList.add("is-invalid");
    } else {
      duracion.classList.remove("is-invalid");
      duracion.classList.add("is-valid");
    }

    // Validacion quinto campo
    if (audio.files.length === 0) {
      isValid = false;
      audio.classList.add("is-invalid");
    } else {
      audio.classList.remove("is-invalid");
      audio.classList.add("is-valid");
    }

    // Si las validacions son correctas, envia los campos
    if (isValid) {
      this.submit();
    } else {
      alert("Por favor, corrige los errores en el formulario antes de envir.");
    }
  });
