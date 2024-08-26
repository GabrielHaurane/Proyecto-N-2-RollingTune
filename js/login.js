const loginLink = document.querySelector("#loginLink");
const loginModal = document.querySelector("#loginModal");
const cerrarModal = document.querySelector("#cerrar");
const loginButton = document.querySelector("#loginButton");
const errorMessage = document.getElementById("error-message");

// Mostrar el modal al hacer clic en "Iniciar Sesión"
loginLink.onclick = function () {
  loginModal.style.display = "block";
};

// Cerrar el modal al hacer clic en la "X"
cerrarModal.onclick = function () {
  loginModal.style.display = "none";
  errorMessage.style.display = "none";
};

// Simulación de inicio de sesión
loginButton.onclick = function () {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  // Lógica de autenticación básica
  if (username === "admin" && password === "admin123") {
    iniciarSesion("admin");
  } else if (username === "cliente" && password === "cliente123") {
    iniciarSesion("cliente");
  } else {
    showError("Credenciales incorrectas");
    return;
  }

  // Cerrar el modal después del inicio de sesión
  loginModal.style.display = "none";
};

// Función para actualizar la barra de navegación según el tipo de usuario
function iniciarSesion(tipoUsuario) {
  const navBar = document.querySelector("#contenedorNavBar");

  // Limpiar la barra de navegación
  navBar.innerHTML = "";

  // Agregar opciones comunes
  navBar.innerHTML += `
                    <li class="nav-item">
                        <a class="color-a active" aria-current="page" href="./index.html">Inicio</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="color-a" href="./pages/nosotros.html">Nosotros</a>
                    </li>`;
  if (tipoUsuario === "admin") {
    // Opciones adicionales para el administrador
    navBar.innerHTML += ` <li class="list-unstyled">
                        <a class="color-a" href="./pages/administrador.html">Administracion</a>
                    </li>`;
  }

  // Cerrar sesión
  navBar.innerHTML += `<li class="list-unstyled">
                      <a class="color-a" href="#iniciar-sesion" href="#cerrar-sesion" id="logoutLink">Cerrar Sesion</a>
                    </li>`;

  // Evento para cerrar sesión
  document.querySelector("#logoutLink").addEventListener("click", function () {
    cerrarSesion();
  });
}

// Función para restaurar la barra de navegación al cerrar sesión
function cerrarSesion() {
  Swal.fire({
    title: "¿Estás seguro de que quiere cerrar la sesion?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, cerrar sesión",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      // Restaurar la barra de navegación inicial
      const navBar = document.querySelector("#contenedorNavBar");
      // Restaurar la barra de navegación inicial
      navBar.innerHTML = `
                  <li class="nav-item">
                      <a class="color-a active" aria-current="page" href="./index.html">Inicio</a>
                  </li>
                  
                  <li class="nav-item">
                      <a class="color-a" href="./pages/nosotros.html">Nosotros</a>
                  </li>
                  <li class="list-unstyled">
                    <a class="color-a" href="#iniciar-sesion" id="loginLink">iniciar Sesion</a>
                  </li>`;

      // Reasignar evento al enlace de iniciar sesión
      document
        .querySelector("#loginLink")
        .addEventListener("click", function () {
          loginModal.style.display = "block";
        });
    }
  });
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}
