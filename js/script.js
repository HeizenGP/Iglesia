document.addEventListener('DOMContentLoaded', function() {
    // === Scroll suave en los enlaces ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === Funcionalidad para botones de expansión en "creencias" ===
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const beliefItem = this.closest('.belief-item');
            beliefItem.classList.toggle('active');

            const circle = this.querySelector('.circle');
            circle.textContent = beliefItem.classList.contains('active') ? '-' : '+';
        });
    });

    // === Lugar para animaciones basadas en scroll (opcional) ===
    window.addEventListener('scroll', function() {
        // Implementar animaciones aquí si deseas
    });    // === Menú móvil profesional ===
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const body = document.body;

    // Función para abrir el menú móvil
    function openMobileMenu() {
        navLinks.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        body.classList.add('mobile-menu-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        
        // Prevenir scroll del body cuando el menú está abierto
        body.style.overflow = 'hidden';
    }

    // Función para cerrar el menú móvil
    function closeMobileMenu() {
        navLinks.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        body.classList.remove('mobile-menu-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        
        // Restaurar scroll del body
        body.style.overflow = '';
    }

    // Toggle del menú móvil
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const isMenuOpen = navLinks.classList.contains('active');
            
            if (isMenuOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // Cerrar menú al hacer click en el overlay
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    // Cerrar menú al hacer click en un enlace (navegación)
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Cerrar menú con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Cerrar menú cuando se cambia el tamaño de ventana (responsive)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // === Smooth scrolling mejorado para dispositivos móviles ===
    const smoothScrollOffset = window.innerWidth <= 768 ? 60 : 80;
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            closeMobileMenu(); // Cerrar menú móvil si está abierto

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - smoothScrollOffset;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
