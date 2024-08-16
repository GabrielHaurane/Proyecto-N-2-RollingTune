export const funcionScroll = window.addEventListener('scroll', () => { 
    const navbar = document.querySelector('.navbar'); 
    if (window.scrollY > 0) { 
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else { 
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } 
    });