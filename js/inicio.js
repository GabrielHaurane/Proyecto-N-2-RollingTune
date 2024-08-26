import { validateLoginForm } from "./validacionesLogin.js";
import { obtenerUsuariosDeLS } from "./utils.js";
import { Usuario } from "./claseUsuario.js";
let usuarios = obtenerUsuariosDeLS();
document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.querySelector("#loginLink");
  const loginModal = document.querySelector("#loginModal");
  const cerrarModal = document.querySelector("cerrar");
  const loginButton = document.querySelector("#loginButton");
  const errorMessage = document.querySelector("#error-message");

  // Mostrar el modal al hacer clic en "Iniciar Sesión"
  loginLink.onclick = function () {
    loginModal.style.display = "block";
  };

  // Cerrar el modal al hacer clic en la "X"
  cerrarModal.onclick = function () {
    loginModal.style.display = "none";
    errorMessage.style.display = "none"; // Ocultar mensaje de error
  };

  // Cerrar el modal si se hace clic fuera del modal
  window.onclick = function (event) {
    if (event.target == loginModal) {
      loginModal.style.display = "none";
      errorMessage.style.display = "none"; // Ocultar mensaje de error
    }
  };

  // Validar y procesar el inicio de sesión
  loginButton.onclick = function (event) {
    event.preventDefault(); // Previene el envío del formulario
    if (validateLoginForm()) {
      const username = document.querySelector("#username").value.trim;
      const password = document.querySelector("#password").value.trim;
      console.log(username)
      //   // Simulación de autenticación básica
      //   if (username === "admin" && password === "admin123") {
      //     iniciarSesion("admin");
      //   } else if (username === "cliente" && password === "cliente123") {
      //     iniciarSesion("cliente");
      //   } else {
      //     showError("Credenciales incorrectas");
      //   }
      // }}
      
      usuarios.map((usuario) => {
        if (username === usuario.nombre) {
          if (password === usuario.password) {
            localStorage.setItem("user", JSON.stringify(usuario));
            console.log(usuario)
          }
        }
      });
    } else {
      function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
      }
      console.log('no llega')

    }

    // Función para mostrar mensajes de error
    console.log(username);
    localStorage.setItem;

    // Función para actualizar la barra de navegación según el tipo de usuario
    function iniciarSesion(tipoUsuario) {
      const navBar = document.querySelector("#navBar");

      // Limpiar la barra de navegación
      navBar.innerHTML = "";
      navBar.innerHTML = `
      <li class="nav-item">
                            <a class="color-a active" aria-current="page" href="./index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="color-a" href="./pages/nosotros.html">Nosotros</a>
                        </li>`;
      if (tipoUsuario === "admin") {
        // Opciones adicionales para el administrador
        navBar.innerHTML += '<a href="#administracion">Administración</a>';
      }

      // Cerrar sesión
      navBar.innerHTML +=
        '<a href="#cerrar-sesion" id="logoutLink">Cerrar Sesión</a>';

      // Evento para cerrar sesión
      document
        .querySelector("#logoutLink")
        .addEventListener("click", function () {
          cerrarSesion();
        });

      // Cerrar el modal
      loginModal.style.display = "none";
    }

    // Función para restaurar la barra de navegación al cerrar sesión
    function cerrarSesion() {
      const navBar = document.querySelector("#navBar");

      // Restaurar la barra de navegación inicial
      navBar.innerHTML = `
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#iniciar-sesion" id="loginLink">Iniciar Sesión</a>
      `;

      // Reasignar evento al enlace de iniciar sesión
      document
        .querySelector("#loginLink")
        .addEventListener("click", function () {
          loginModal.style.display = "block";
        });
    }
  };
});
