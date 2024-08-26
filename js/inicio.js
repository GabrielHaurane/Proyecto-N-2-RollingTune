import { Usuario } from "./claseUsuario.js";
import { agregarUsuarioALS, isEmailRepetido } from "./utils.js";

const actualizarNav = () => {
  const nav = document.getElementById("contenedorNavBar");
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarios"));
  if (usuarioLogueado) {
    // Usuario logueado, mostrar opciones personalizadas
    nav.innerHTML = `
      <li class="nav-item">
                            <a class="color-a active" aria-current="page" href="./index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="color-a" href="./pages/nosotros.html">Nosotros</a>
                        </li>
                        ${usuarioLogueado.email === 'administrador@gmail.com' ? '<li class="nav-item"><a href="administracion.html">Administración</a></li>' : ''}
                        <li class="nav-item">
                          <a class="color-a" href="#iniciar-sesion" id="loginLink">Iniciar Sesión</a>
                        </li>
    `;

    // Evento para cerrar sesión
    document.getElementById("cerrarSesion").addEventListener("click", cerrarSesion);
  } else {
    // Usuario no logueado, mostrar opciones estándar
    nav.innerHTML = `<li class="nav-item">
                            <a class="color-a active" aria-current="page" href="./index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="color-a" href="./pages/nosotros.html">Nosotros</a>
                        </li>
                        <li class="nav-item">
                          <a class="color-a" href="#iniciar-sesion" id="loginLink">Iniciar Sesión</a>
                        </li>`;
  }
};

// Función para cerrar sesión
const cerrarSesion = () => {
  sessionStorage.removeItem("usuarioLogueado");
  alert("Sesión cerrada con éxito");
  window.location.href = "inicio.html";
};

// Llamar a la función para actualizar el menú de navegación
actualizarNav();

// Función para iniciar sesión y guardar en sessionStorage
const iniciarSesion = (usuario) => {
  sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
};
document
  .getElementById("registroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtención de los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validaciones
    let isValid = true;

    // Validación del nombre
    const nombreError = document.getElementById("nombreError");
    nombreError.textContent = "";
    if (nombre.length < 8 || nombre.length > 20) {
      nombreError.textContent = "El nombre debe tener entre 8 y 20 caracteres.";
      isValid = false;
    } else if (isEmailRepetido(email)) {
      nombreError.textContent = "El nombre de usuario ya está registrado.";
      isValid = false;
    }

    // Validación del email
    const emailError = document.getElementById("emailError");
    emailError.textContent = "";
    if (email.length < 11 || email.length > 50) {
      emailError.textContent = "El email debe tener entre 11 y 50 caracteres.";
      isValid = false;
    } else if (!validateEmailFormat(email)) {
      emailError.textContent = "El formato del email no es válido.";
      isValid = false;
    }

    // Validación de la contraseña
    const passwordError = document.getElementById("passwordError");
    passwordError.textContent = "";
    if (password.length < 8 || password.length > 20) {
      passwordError.textContent =
        "La contraseña debe tener entre 8 y 20 caracteres.";
      isValid = false;
    } else if (!validatePasswordSecurity(password)) {
      passwordError.textContent =
        "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.";
      isValid = false;
    }

    // Si todas las validaciones son correctas
    if (isValid) {
      const user = new Usuario(nombre, email, password);
      agregarUsuarioALS(user);
      iniciarSesion(user);
    }
  });

function validateEmailFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePasswordSecurity(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;
  return passwordRegex.test(password);
}
