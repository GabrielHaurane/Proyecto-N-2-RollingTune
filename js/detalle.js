window.addEventListener('scroll', function() { 
    const navbar = document.getElementById('navbar'); 
    if (window.scrollY > 50) { 
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else { 
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } 
    });