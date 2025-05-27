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
    });

    // === Menú móvil (pendiente por implementar) ===
    const navLinks = document.querySelector('.nav-links');
    // Código futuro aquí
});
