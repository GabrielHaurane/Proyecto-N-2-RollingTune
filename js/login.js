function loguear() {
    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin123";
    const clienteEmail = "cliente@gmail.com";
    const clientePassword = "cliente123";

    const userEmail = document.getElementById("InputEmail").value.trim();
    const userPassword = document.getElementById("InputPassword1").value.trim();
    
    if (!validateEmailFormat(userEmail)) {
        Swal.fire({
            title: 'Error',
            text: 'Formato de correo electrónico incorrecto',
            icon: 'warning',
            confirmButtonText: 'Entendido'
        });
        return false;
    }

    if (userEmail === adminEmail && userPassword === adminPassword) {
        localStorage.setItem("userRole", "admin");
        window.location.href = "./pages/administrador.html";
    } else if (userEmail === clienteEmail && userPassword === clientePassword) {
        window.location.href = "./index.html";
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Correo electrónico o contraseña incorrectos',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
        });
        return false;
    }
    
    return false; 
}

function validateEmailFormat(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email); 
}
