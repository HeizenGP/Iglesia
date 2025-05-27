// ===============================================
//  FUNCIONALIDADES JQUERY AVANZADAS
//  Iglesia DIOS NOS AMA
// ===============================================

$(document).ready(function() {
    
    // === ANIMACIONES CON JQUERY ===
    
    // Animación de fade-in para elementos cuando aparecen en pantalla
    function checkScroll() {
        $('.fade-in').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            if (elementTop < windowBottom - 100) {
                $(this).addClass('visible');
            }
        });
    }
    
    // Ejecutar al cargar y al hacer scroll
    checkScroll();
    $(window).scroll(checkScroll);
    
    
    // === EFECTOS HOVER MEJORADOS ===
    
    // Efecto hover en tarjetas de servicios
    $('.service-card, .belief-item, .team-member').hover(
        function() {
            $(this).addClass('hover-effect');
        },
        function() {
            $(this).removeClass('hover-effect');
        }
    );
    
    
    // === FUNCIONALIDAD DE BÚSQUEDA ===
    
    // Búsqueda en tiempo real para sermones o eventos
    $('#search-input').on('keyup', function() {
        const value = $(this).val().toLowerCase();
        
        $('.searchable-item').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        
        // Mostrar mensaje si no hay resultados
        const visibleItems = $('.searchable-item:visible').length;
        if (visibleItems === 0) {
            $('.no-results').show();
        } else {
            $('.no-results').hide();
        }
    });
    
    
    // === MODAL DE CONTACTO ===
    
    // Abrir modal
    $('.contact-btn').click(function(e) {
        e.preventDefault();
        $('#contact-modal').fadeIn(300);
        $('body').addClass('modal-open');
    });
    
    // Cerrar modal
    $('.close-modal, .modal-overlay').click(function() {
        $('#contact-modal').fadeOut(300);
        $('body').removeClass('modal-open');
    });
    
    // Cerrar con tecla ESC
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            $('#contact-modal').fadeOut(300);
            $('body').removeClass('modal-open');
        }
    });
    
    
    // === FORMULARIO DE CONTACTO CON VALIDACIÓN ===
    
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        
        // Limpiar errores previos
        $('.error-message').remove();
        $('.form-group').removeClass('error');
        
        let isValid = true;
        
        // Validar nombre
        const name = $('#name').val().trim();
        if (name.length < 2) {
            showError('#name', 'El nombre debe tener al menos 2 caracteres');
            isValid = false;
        }
        
        // Validar email
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('#email', 'Ingrese un email válido');
            isValid = false;
        }
        
        // Validar mensaje
        const message = $('#message').val().trim();
        if (message.length < 10) {
            showError('#message', 'El mensaje debe tener al menos 10 caracteres');
            isValid = false;
        }
        
        if (isValid) {
            // Mostrar loading
            $('.submit-btn').html('<i class="loading-icon"></i> Enviando...').prop('disabled', true);
            
            // Simular envío (aquí integrarías con tu backend)
            setTimeout(function() {
                showSuccess('¡Mensaje enviado correctamente! Te contactaremos pronto.');
                $('#contact-form')[0].reset();
                $('.submit-btn').html('Enviar Mensaje').prop('disabled', false);
            }, 2000);
        }
    });
    
    
    // === FUNCIONES AUXILIARES ===
    
    function showError(field, message) {
        $(field).closest('.form-group').addClass('error');
        $(field).after(`<span class="error-message">${message}</span>`);
    }
    
    function showSuccess(message) {
        $('.form-messages').html(`
            <div class="success-message">
                <i class="success-icon">✓</i>
                ${message}
            </div>
        `).show();
        
        setTimeout(function() {
            $('.form-messages').fadeOut();
        }, 5000);
    }
    
    
    // === CONTADOR DINÁMICO ===
    
    function animateCounters() {
        $('.counter').each(function() {
            const $this = $(this);
            const countTo = $this.attr('data-count');
            
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }
    
    // Ejecutar contador cuando el elemento sea visible
    $(window).scroll(function() {
        const countersTop = $('.counters-section').offset()?.top || 0;
        const windowBottom = $(window).scrollTop() + $(window).innerHeight();
        
        if (countersTop < windowBottom && !$('.counters-section').hasClass('animated')) {
            $('.counters-section').addClass('animated');
            animateCounters();
        }
    });
    
    
    // === GALERÍA DE IMÁGENES ===
    
    $('.gallery-image').click(function() {
        const src = $(this).attr('src');
        const alt = $(this).attr('alt');
        
        const lightbox = `
            <div class="lightbox-overlay">
                <div class="lightbox-content">
                    <img src="${src}" alt="${alt}">
                    <button class="lightbox-close">&times;</button>
                </div>
            </div>
        `;
        
        $('body').append(lightbox);
        $('.lightbox-overlay').fadeIn(300);
    });
    
    // Cerrar lightbox
    $(document).on('click', '.lightbox-close, .lightbox-overlay', function(e) {
        if (e.target === this) {
            $('.lightbox-overlay').fadeOut(300, function() {
                $(this).remove();
            });
        }
    });
    
    
    // === LAZY LOADING DE IMÁGENES ===
    
    $('img[data-src]').each(function() {
        const $img = $(this);
        const src = $img.attr('data-src');
        
        // Crear observer para lazy loading
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.getAttribute('data-src');
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });
            
            observer.observe($img[0]);
        } else {
            // Fallback para navegadores que no soportan IntersectionObserver
            $img.attr('src', src).addClass('loaded');
        }
    });
    
    
    // === SMOOTH SCROLLING MEJORADO ===
    
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800, 'easeInOutCubic');
                return false;
            }
        }
    });
    
    
    // === TOOLTIPS ===
    
    $('[data-tooltip]').hover(
        function() {
            const tooltip = $(this).attr('data-tooltip');
            $(this).append(`<div class="tooltip">${tooltip}</div>`);
            $('.tooltip').fadeIn(200);
        },
        function() {
            $('.tooltip').fadeOut(200, function() {
                $(this).remove();
            });
        }
    );
    
});

// ===============================================
//  FUNCIONES GLOBALES
// ===============================================

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = `
        <div class="notification notification-${type}">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    $('body').append(notification);
    $('.notification').last().slideDown(300);
    
    // Auto-close después de 5 segundos
    setTimeout(function() {
        $('.notification').last().slideUp(300, function() {
            $(this).remove();
        });
    }, 5000);
}

// Cerrar notificaciones manualmente
$(document).on('click', '.notification-close', function() {
    $(this).parent().slideUp(300, function() {
        $(this).remove();
    });
});

// Función para formatear fechas
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    return new Date(date).toLocaleDateString('es-ES', options);
}

// Función para validar formularios
function validateForm(formId) {
    let isValid = true;
    
    $(`${formId} [required]`).each(function() {
        if (!$(this).val().trim()) {
            $(this).addClass('error');
            isValid = false;
        } else {
            $(this).removeClass('error');
        }
    });
    
    return isValid;
}
