// import { validateLoginForm } from "./validacionesLogin.js";
// import { obtenerUsuariosDeLS } from "./utils.js";
// import { Usuario } from "./claseUsuario.js";
// let usuarios = obtenerUsuariosDeLS();

 document.addEventListener("DOMContentLoaded", () => {
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
  errorMessage.style.display = "none";
};
// Función para mostrar mensajes de error
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}
// Función para actualizar la barra de navegación según el tipo de usuario
function iniciarSesion(tipoUsuario) {
  const navBar = document.querySelector("#contenedorNavBar");

  // Guardar el usuario en localStorage
  localStorage.setItem('usuario', tipoUsuario);

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
});
window.onload = function() {
  const usuario = localStorage.getItem('usuario');
  if (usuario) {
      iniciarSesion(usuario);
  }
}


// const actualizarNav = () => {
//   const nav = document.getElementById('contenedorNavBar');
//   const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuarioLogueado'));

//   if (usuarioLogueado) {
//     // Usuario logueado, mostrar opciones personalizadas
//     nav.innerHTML = 
//       `<a href="inicio.html">Inicio</a>
//       <a href="nosotros.html">Nosotros</a>`
//       if (usuarioLogueado.tipo === 'admin') {
//         `<a href="administracion.html">Administración</a>`  
//         `<a href="#" id="cerrarSesion">Cerrar Sesión</a>`;
//       }
        
    
//     // Evento para cerrar sesión
//     document.getElementById('cerrarSesion').addEventListener('click', cerrarSesion);
//   } else {
//     // Usuario no logueado, mostrar opciones estándar
//     nav.innerHTML = `
//       <a href="inicio.html">Inicio</a>
//       <a href="nosotros.html">Nosotros</a>
//       <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Iniciar Sesión</a>
//     `;
//   };

// // Función para cerrar sesión
// const cerrarSesion = () => {
//   sessionStorage.removeItem('usuarioLogueado');
//   alert('Sesión cerrada con éxito');
//   window.location.href = 'inicio.html';
// };

// // Llamar a la función para actualizar el menú de navegación
// actualizarNav();

// // Guardar usuario en localStorage
//  const agregarUsuarioALS = (usuario) => {
//   const usuarios = obtenerUsuariosDeLS();
//   usuarios.push(usuario);
//   localStorage.setItem("usuarios", JSON.stringify(usuarios));
// };

// // Obtener usuarios de localStorage
//  const obtenerUsuariosDeLS = () => {
//   return ordenarLista(JSON.parse(localStorage.getItem("usuarios")) || []);
// };

// // Ordenar la lista de usuarios
//  const ordenarLista = (lista) => {
//   return lista.sort((a, b) => {
//     if (a.nombre > b.nombre) {
//       return 1;
//     }
//     if (a.nombre < b.nombre) {
//       return -1;
//     }
//     return 0;
//   });
// };

// // Verificar si el nombre ya está registrado
//  const isNombreRepetido = (nombre) => {
//   const usuarios = obtenerUsuariosDeLS();
//   return usuarios.some(user => user.nombre === nombre);
// };

// // Clase Usuario
//  class Usuario {
//   constructor(nombre, email, password, tipo = 'cliente') { // Por defecto el tipo es 'cliente'
//     this.nombre = nombre;
//     this.email = email;
//     this.password = password;
//     this.tipo = tipo; // 'cliente' o 'administrador'
//   }
// }

// // Función para iniciar sesión y guardar en sessionStorage
// const iniciarSesion = (usuario) => {
//   sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
// };

// // Validar el formulario de registro
// document.getElementById('registroForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Evita el envío del formulario

//   // Obtención de los valores de los campos
//   const nombre = document.getElementById('nombre').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const password = document.getElementById('password').value.trim();
//   const tipoUsuario = 'cliente'; // O 'administrador', si es necesario

//   // Validaciones
//   let isValid = true;

//   // Validación del nombre
//   const nombreError = document.getElementById('nombreError');
//   nombreError.textContent = '';

//   if (nombre.length < 8 || nombre.length > 20) {
//       nombreError.textContent = 'El nombre debe tener entre 8 y 20 caracteres.';
//       isValid = false;
//   } else if (isNombreRepetido(nombre)) {
//       nombreError.textContent = 'El nombre de usuario ya está registrado.';
//       isValid = false;
//   }

//   // Validación del email
//   const emailError = document.getElementById('emailError');
//   emailError.textContent = '';
//   if (email.length < 11 || email.length > 50) {
//       emailError.textContent = 'El email debe tener entre 11 y 50 caracteres.';
//       isValid = false;
//   } else if (!validateEmailFormat(email)) {
//       emailError.textContent = 'El formato del email no es válido.';
//       isValid = false;
//   }

//   // Validación de la contraseña
//   const passwordError = document.getElementById('passwordError');
//   passwordError.textContent = '';
//   if (password.length < 8 || password.length > 20) {
//       passwordError.textContent = 'La contraseña debe tener entre 8 y 20 caracteres.';
//       isValid = false;
//   } else if (!validatePasswordSecurity(password)) {
//       passwordError.textContent = 'La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.';
//       isValid = false;
//   }

//   // Si todas las validaciones son correctas
//   if (isValid) {
//       const usuario = new Usuario(nombre, email, password, tipoUsuario);
//       agregarUsuarioALS(usuario);
//       iniciarSesion(usuario); // Iniciar sesión automáticamente después del registro
//       alert('Registro y sesión iniciada exitosamente!');
      
//       // Redirigir al inicio después del registro
//       window.location.href = 'inicio.html';
//   }
// });

// // Validar formato de email
// function validateEmailFormat(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// // Validar seguridad de la contraseña
// function validatePasswordSecurity(password) {
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;
//   return passwordRegex.test(password);}};

