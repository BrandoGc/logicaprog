// Toggle menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const navCenter = document.querySelector('.nav-center');

menuToggle.addEventListener('click', () => {
  navCenter.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navCenter.classList.remove('active');
  });
});

// Animación de página
document.addEventListener('DOMContentLoaded', function() {
  document.body.style.opacity = '1';
});