document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        console.log('Nombre de Usuario:', username);
        console.log('Contraseña:', password);

        alert('Inicio de sesión exitoso.');

    });
});
