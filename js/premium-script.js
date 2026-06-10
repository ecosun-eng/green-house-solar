// ============================================
// SCROLL EFFECTS & ANIMATIONS
// ============================================

// Detectar la sección actual y actualizar el invernadero 3D
window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercentage < 15) {
        document.body.className = 'section-1';
    } else if (scrollPercentage < 30) {
        document.body.className = 'section-2';
    } else if (scrollPercentage < 45) {
        document.body.className = 'section-3';
    } else if (scrollPercentage < 60) {
        document.body.className = 'section-4';
    } else if (scrollPercentage < 75) {
        document.body.className = 'section-5';
    } else if (scrollPercentage < 90) {
        document.body.className = 'section-6';
    } else {
        document.body.className = 'section-7';
    }
});

// ============================================
// HERO PARTICLES
// ============================================

function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ============================================
// QUIÉNES SOMOS - EXPANDABLE QUESTIONS
// ============================================

document.querySelectorAll('.question-box').forEach((box, index) => {
    box.addEventListener('click', function() {
        // Remover active de todos
        document.querySelectorAll('.question-box').forEach(b => b.classList.remove('active'));
        // Agregar active al actual
        this.classList.add('active');
    });
    
    // Auto-expandir primera pregunta
    if (index === 0) {
        box.classList.add('active');
    }
});

// ============================================
// ECOSYSTEM CIRCLES - HOVER EFFECT
// ============================================

document.querySelectorAll('.ecosystem-circle').forEach(circle => {
    circle.addEventListener('mouseenter', function() {
        // Animar la línea de conexión
        document.querySelectorAll('.ecosystem-lines line').forEach(line => {
            line.style.animation = 'none';
            setTimeout(() => {
                line.style.animation = 'flowAnimation 3s infinite';
            }, 10);
        });
    });
});

// ============================================
// PROCESO - SCROLL ANIMATION
// ============================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const step = entry.target.dataset.step;
            entry.target.style.animation = `slideIn 0.6s ease-out ${step * 0.1}s both`;
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.process-step').forEach(step => {
    observer.observe(step);
});

// ============================================
// HEXÁGONOS - CLICK PARA EXPANDIR
// ============================================

const serviceDescriptions = {
    1: {
        title: 'Generación de Energía Solar',
        description: 'Los paneles solares captan la luz del sol y la convierten en energía eléctrica renovable para alimentar todo el sistema del invernadero.',
        image: 'assets/energia-solar.jpg'
    },
    2: {
        title: 'Ventilación Sostenible',
        description: 'El sistema permite la circulación del aire para evitar exceso de calor y humedad dentro del invernadero, protegiendo las plantas.',
        image: 'assets/ventilacion.jpg'
    },
    3: {
        title: 'Monitoreo Inteligente',
        description: 'El ESP32 supervisa variables como temperatura y humedad para controlar el funcionamiento del invernadero de manera automática.',
        image: 'assets/monitoreo.jpg'
    },
    4: {
        title: 'Iluminación Eficiente',
        description: 'Las luces LED brindan apoyo lumínico a los cultivos cuando la luz solar es insuficiente, optimizando el crecimiento.',
        image: 'assets/iluminacion.jpg'
    },
    5: {
        title: 'Control de Temperatura',
        description: 'Sensores y ventiladores ayudan a mantener un ambiente fresco y adecuado para el crecimiento saludable de las plantas.',
        image: 'assets/temperatura.jpg'
    },
    6: {
        title: 'Protección de Cultivos',
        description: 'La estructura protege las plantas frente a lluvias intensas, plagas y cambios bruscos del clima, mejorando la producción agrícola.',
        image: 'assets/proteccion.jpg'
    }
};

document.querySelectorAll('.hexagon').forEach(hex => {
    hex.addEventListener('click', function() {
        const serviceId = this.dataset.service;
        if (!serviceId) return;
        
        const service = serviceDescriptions[serviceId];
        const panel = document.querySelector('.service-detail-panel');
        
        document.getElementById('detail-title').textContent = service.title;
        document.getElementById('detail-description').textContent = service.description;
        document.getElementById('detail-image').src = service.image;
        
        panel.classList.add('show');
    });
});

// Cerrar panel
document.querySelector('.detail-close')?.addEventListener('click', function() {
    document.querySelector('.service-detail-panel').classList.remove('show');
});

// ============================================
// IMPACT NUMBERS - ANIMACIÓN AL SCROLL
// ============================================

let animated = false;

const impactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            animated = true;
            document.querySelectorAll('.impact-card').forEach((card, index) => {
                card.style.animation = `slideUp 0.6s ease-out ${index * 0.2}s both`;
            });
        }
    });
}, { threshold: 0.5 });

const impactSection = document.querySelector('.impacto-section');
if (impactSection) {
    impactObserver.observe(impactSection);
}

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

document.querySelector('.contacto-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = this.querySelector('input[type=\"text\"]').value;
    const email = this.querySelector('input[type=\"email\"]').value;
    const mensaje = this.querySelector('textarea').value;
    
    if (nombre && email && mensaje) {
        alert('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
        this.reset();
    } else {
        alert('Por favor completa todos los campos.');
    }
});

// ============================================
// ANIMACIONES CSS
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .service-detail-panel {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 1000;
        align-items: center;
        justify-content: center;
    }

    .service-detail-panel.show {
        display: flex;
    }

    .detail-content {
        background: rgba(30, 41, 59, 0.95);
        padding: 3rem;
        border-radius: 12px;
        max-width: 600px;
        border: 1px solid rgba(34, 197, 94, 0.3);
        position: relative;
        animation: scaleIn 0.3s ease-out;
    }

    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .detail-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
        font-size: 2rem;
        color: #e2e8f0;
        transition: color 0.3s ease;
    }

    .detail-close:hover {
        color: #22c55e;
    }

    #detail-image {
        width: 100%;
        height: auto;
        border-radius: 8px;
        margin-top: 1rem;
    }
`;

document.head.appendChild(style);

// ============================================
// SMOOTH SCROLL PARA LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// HERO BUTTON
// ============================================

document.querySelector('.hero-button')?.addEventListener('click', function() {
    document.querySelector('#quienes').scrollIntoView({ behavior: 'smooth' });
});

console.log('✅ Premium Script Loaded');
