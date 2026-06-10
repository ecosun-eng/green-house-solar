// ============================================
// MAIN JAVASCRIPT
// ============================================

// Formulario de Contacto
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Validación básica
        if (!nombre || !email || !asunto || !mensaje) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }
        
        // Aquí puedes enviar el formulario a un servidor
        // Por ahora, mostraremos un mensaje de éxito
        alert('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.');
        contactForm.reset();
    });
}

// Scroll animado para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar activa basada en scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Modo responsivo del menú
function setupResponsiveMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Aquí puedes agregar lógica adicional para menús móviles si es necesario
}

// Lazy loading de imágenes
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Analytics (opcional)
console.log('Green House Solar - Sitio Web Cargado');
