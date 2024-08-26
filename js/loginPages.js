localStorage.setItem('usuario', JSON.stringify(usuario));

window.onload = function() {
    const usuarioString = localStorage.getItem('usuario'); // Obtienes el string del usuario
    if (usuarioString) {
        const usuario = JSON.parse(usuarioString); // Lo parseas a objeto
        iniciarSesion(usuario); // Luego lo pasas a la función
    }
}

    function actualizarNavBar(tipoUsuario) {
        const navBar = document.getElementById('navBar');

        // Limpiar la barra de navegación
        navBar.innerHTML = '';

        // Agregar opciones comunes
        navBar.innerHTML += '<a href="../index.html">Inicio</a>';
        navBar.innerHTML += '<a href="nosotros.html">Nosotros</a>';

        if (tipoUsuario === 'admin') {
            // Opciones adicionales para el administrador
            navBar.innerHTML += '<a href="administracion.html">Administración</a>';
        }

        // Cerrar sesión
        navBar.innerHTML += '<a href="#" id="logoutLink">Cerrar Sesión</a>';

        // Evento para cerrar sesión
        document.getElementById('logoutLink').addEventListener('click', function() {
            cerrarSesion();
        });
    }

    function cerrarSesion() {
        localStorage.removeItem('usuario'); // Eliminar usuario del localStorage
        window.location.href = '../index.html'; // Redirigir al usuario a la página principal
    }

