window.addEventListener('scroll', function() { 
    const navbar = document.getElementById('navbar'); 
    if (window.scrollY > 50) { // Cambia el 50 por el valor de desplazamiento que prefieras 
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Menos opaco al hacer scroll 
    } else { 
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)'; // Más opaco cuando no hay scroll 
    } 
    });