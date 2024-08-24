
function loguear() {
    const validEmail = "bere@gmail.com";
    const validPassword = "12345678";

    const userEmail = document.getElementById("InputEmail").value.trim();
    const userPassword = document.getElementById("InputPassword1").value.trim();

    if (!validateEmailFormat(userEmail)) {
        alert("Formato de correo electrónico incorrecto");
        return;
    }

    if (userEmail === validEmail && userPassword === validPassword) {
        alert("Bienvenido");
        // Redirigir al usuario o realizar otra acción aquí
    } else {
        alert("Correo electrónico o contraseña incorrectos");
    }
}

function validateEmailFormat(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}