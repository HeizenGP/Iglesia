/* ========================================
   SERMONES.JS - FUNCIONALIDAD DINÁMICA
   ========================================
   
   Funcionalidades implementadas:
   1. Generación dinámica de tarjetas de sermones
   2. Filtrado por categorías
   3. Reproductor de audio integrado
   4. Búsqueda en tiempo real
   5. Efectos de animación con jQuery
   6. Modal para ver sermones completos
   ======================================== */

$(document).ready(function() {
    
    // Base de datos de sermones (simulada)
    const sermones = [
        {
            id: 1,
            titulo: "El Poder de la Fe",
            predicador: "Pastor Juan Carlos",
            fecha: "2025-05-20",
            categoria: "fe",
            duracion: "35 min",
            imagen: "../img/sermones.jpg",
            audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // URL de ejemplo
            extracto: "Descubre cómo la fe puede transformar tu vida y llevarte a experimentar milagros extraordinarios. En este sermón exploramos las bases bíblicas de una fe inquebrantable.",
            versiculo: "Hebreos 11:1 - Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.",
            puntos: [
                "La fe como fundamento de la vida cristiana",
                "Ejemplos bíblicos de fe extraordinaria",
                "Cómo desarrollar una fe inquebrantable",
                "Los frutos de una vida de fe"
            ]
        },
        {
            id: 2,
            titulo: "Familia Según el Corazón de Dios",
            predicador: "Pastora María Elena",
            fecha: "2025-05-13",
            categoria: "familia",
            duracion: "28 min",
            imagen: "../img/F-iglesia.jpg",
            audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            extracto: "Principios bíblicos para construir familias sólidas y bendecidas. Aprende cómo Dios diseñó la familia y su propósito eterno.",
            versiculo: "Josué 24:15 - Pero yo y mi casa serviremos a Jehová.",
            puntos: [
                "El diseño original de Dios para la familia",
                "Roles y responsabilidades en el hogar cristiano",
                "Crianza de hijos con valores bíblicos",
                "La familia como testimonio al mundo"
            ]
        },
        {
            id: 3,
            titulo: "La Oración que Mueve Montañas",
            predicador: "Pastor David Ruiz",
            fecha: "2025-05-06",
            categoria: "oracion",
            duracion: "42 min",
            imagen: "../img/eventos.jpg",
            audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            extracto: "Descubre los secretos de una vida de oración efectiva. Aprende a comunicarte con Dios de manera profunda y poderosa.",
            versiculo: "Mateo 17:20 - Si tenéis fe como un grano de mostaza, diréis a este monte: Pásate de aquí allá, y se pasará.",
            puntos: [
                "Los fundamentos de la oración bíblica",
                "Diferentes tipos de oración y su propósito",
                "Obstáculos comunes en la vida de oración",
                "Testimonios de oraciones respondidas"
            ]
        },
        {
            id: 4,
            titulo: "Esperanza en Tiempos Difíciles",
            predicador: "Pastor Juan Carlos",
            fecha: "2025-04-29",
            categoria: "esperanza",
            duracion: "38 min",
            imagen: "../img/fondo1.jpg",
            audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            extracto: "Cuando las circunstancias parecen imposibles, Dios nos ofrece una esperanza que no decepciona. Encuentra fortaleza en Su promesa.",
            versiculo: "Romanos 5:5 - Y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones.",
            puntos: [
                "La naturaleza de la esperanza cristiana",
                "Cómo mantener la esperanza en adversidades",
                "Promesas bíblicas para tiempos difíciles",
                "Testimonios de victoria y superación"
            ]
        },
        {
            id: 5,
            titulo: "El Evangelio de Jesucristo",
            predicador: "Pastor David Ruiz",
            fecha: "2025-04-22",
            categoria: "evangelio",
            duracion: "45 min",
            imagen: "../img/servicios.jpg",
            audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            extracto: "El mensaje central del cristianismo explicado con claridad. Descubre el plan de salvación de Dios para la humanidad.",
            versiculo: "Juan 3:16 - Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito.",
            puntos: [
                "El problema del pecado humano",
                "La solución de Dios: Jesucristo",
                "Cómo recibir la salvación",
                "La nueva vida en Cristo"
            ]
        },
        {
            id: 6,
            titulo: "Creciendo en Gracia",
            predicador: "Pastora María Elena",
            fecha: "2025-04-15",
            categoria: "fe",
            duracion: "33 min",
            imagen: "../img/sermones.jpg",
            audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            extracto: "El crecimiento espiritual es un proceso continuo. Aprende las disciplinas que nos ayudan a madurar en la fe cristiana.",
            versiculo: "2 Pedro 3:18 - Antes bien, creced en la gracia y el conocimiento de nuestro Señor.",
            puntos: [
                "Las etapas del crecimiento espiritual",
                "Disciplinas espirituales esenciales",
                "El papel de la comunidad en nuestro crecimiento",
                "Frutos de una vida madura en Cristo"
            ]
        }
    ];

    // Variables globales
    let sermonesActuales = [...sermones];
    let reproductorActivo = null;

    // Inicialización
    function inicializar() {
        generarTarjetasSermones(sermonesActuales);
        configurarFiltros();
        configurarBuscador();
        configurarModal();
        animarElementos();
    }

    // Generar tarjetas de sermones dinámicamente
    function generarTarjetasSermones(listaSermones) {
        const container = $('.sermones-grid');
        container.empty();

        if (listaSermones.length === 0) {
            container.html(`
                <div class="no-results">
                    <h3>No se encontraron sermones</h3>
                    <p>Intenta con otros términos de búsqueda o categorías.</p>
                </div>
            `);
            return;
        }

        listaSermones.forEach((sermon, index) => {
            const tarjeta = `
                <div class="sermon-card" data-categoria="${sermon.categoria}" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="sermon-thumbnail">
                        <img src="${sermon.imagen}" alt="${sermon.titulo}" loading="lazy">
                        <div class="sermon-play-btn" data-audio="${sermon.audio}" data-titulo="${sermon.titulo}">
                            <i class="play-icon">▶</i>
                        </div>
                        <div class="sermon-duration">${sermon.duracion}</div>
                    </div>
                    <div class="sermon-details">
                        <div class="sermon-date">${formatearFecha(sermon.fecha)}</div>
                        <h3 class="sermon-title">${sermon.titulo}</h3>
                        <div class="sermon-speaker">
                            <img src="../img/logo.png" alt="${sermon.predicador}">
                            <span>${sermon.predicador}</span>
                        </div>
                        <p class="sermon-excerpt">${sermon.extracto}</p>
                        <div class="sermon-verse">
                            <strong>"${sermon.versiculo}"</strong>
                        </div>
                        <div class="sermon-actions">
                            <button class="sermon-link btn-ver-completo" data-id="${sermon.id}">
                                Ver Completo
                            </button>
                            <button class="sermon-download" onclick="descargarSermon(${sermon.id})">
                                Descargar
                            </button>
                        </div>
                    </div>
                </div>
            `;
            container.append(tarjeta);
        });

        // Configurar eventos para los botones de reproducción
        $('.sermon-play-btn').on('click', function() {
            const audioUrl = $(this).data('audio');
            const titulo = $(this).data('titulo');
            reproducirAudio(audioUrl, titulo, $(this));
        });

        // Configurar eventos para ver sermón completo
        $('.btn-ver-completo').on('click', function() {
            const sermonId = parseInt($(this).data('id'));
            mostrarSermonCompleto(sermonId);
        });
    }

    // Configurar filtros por categoría
    function configurarFiltros() {
        $('.categoria-tag').on('click', function(e) {
            e.preventDefault();
            
            // Actualizar estado visual de filtros
            $('.categoria-tag').removeClass('active');
            $(this).addClass('active');
            
            const categoria = $(this).data('categoria');
            
            if (categoria === 'todos') {
                sermonesActuales = [...sermones];
            } else {
                sermonesActuales = sermones.filter(sermon => sermon.categoria === categoria);
            }
            
            generarTarjetasSermones(sermonesActuales);
            
            // Animación suave
            $('.sermones-grid').hide().fadeIn(500);
        });
    }

    // Configurar buscador en tiempo real
    function configurarBuscador() {
        const buscador = $('#buscador-sermones');
        
        buscador.on('input', function() {
            const termino = $(this).val().toLowerCase().trim();
            
            if (termino === '') {
                sermonesActuales = [...sermones];
            } else {
                sermonesActuales = sermones.filter(sermon => 
                    sermon.titulo.toLowerCase().includes(termino) ||
                    sermon.predicador.toLowerCase().includes(termino) ||
                    sermon.extracto.toLowerCase().includes(termino) ||
                    sermon.categoria.toLowerCase().includes(termino)
                );
            }
            
            generarTarjetasSermones(sermonesActuales);
        });
    }

    // Reproductor de audio
    function reproducirAudio(audioUrl, titulo, botonElement) {
        // Detener cualquier reproducción anterior
        if (reproductorActivo) {
            reproductorActivo.pause();
            $('.sermon-play-btn').removeClass('playing').find('.play-icon').text('▶');
        }

        // Crear nuevo reproductor
        reproductorActivo = new Audio(audioUrl);
        
        // Actualizar interfaz
        botonElement.addClass('playing').find('.play-icon').text('⏸');
        
        // Mostrar reproductor flotante
        mostrarReproductorFlotante(titulo, reproductorActivo, botonElement);
        
        // Eventos del reproductor
        reproductorActivo.onended = function() {
            botonElement.removeClass('playing').find('.play-icon').text('▶');
            ocultarReproductorFlotante();
        };
        
        reproductorActivo.onerror = function() {
            alert('Error al cargar el audio. Por favor, intenta más tarde.');
            botonElement.removeClass('playing').find('.play-icon').text('▶');
        };
        
        // Reproducir
        reproductorActivo.play().catch(function(error) {
            console.error('Error al reproducir:', error);
            alert('Error al reproducir el audio.');
        });
    }

    // Mostrar reproductor flotante
    function mostrarReproductorFlotante(titulo, audio, botonOriginal) {
        const reproductor = `
            <div id="reproductor-flotante" class="reproductor-flotante">
                <div class="reproductor-info">
                    <div class="reproductor-titulo">${titulo}</div>
                    <div class="reproductor-controles">
                        <button id="btn-play-pause" class="btn-control">⏸</button>
                        <div class="progress-container">
                            <div class="progress-bar">
                                <div class="progress-fill"></div>
                            </div>
                            <div class="time-display">
                                <span class="current-time">0:00</span> / 
                                <span class="total-time">0:00</span>
                            </div>
                        </div>
                        <button id="btn-cerrar-reproductor" class="btn-control">✕</button>
                    </div>
                </div>
            </div>
        `;
        
        // Remover reproductor anterior si existe
        $('#reproductor-flotante').remove();
        
        // Agregar nuevo reproductor
        $('body').append(reproductor);
        
        // Configurar eventos
        configurarEventosReproductor(audio, botonOriginal);
        
        // Animación de entrada
        $('#reproductor-flotante').slideDown(300);
    }

    // Configurar eventos del reproductor
    function configurarEventosReproductor(audio, botonOriginal) {
        const $reproductor = $('#reproductor-flotante');
        
        // Play/Pause
        $('#btn-play-pause').on('click', function() {
            if (audio.paused) {
                audio.play();
                $(this).text('⏸');
                botonOriginal.addClass('playing').find('.play-icon').text('⏸');
            } else {
                audio.pause();
                $(this).text('▶');
                botonOriginal.removeClass('playing').find('.play-icon').text('▶');
            }
        });
        
        // Cerrar reproductor
        $('#btn-cerrar-reproductor').on('click', function() {
            audio.pause();
            botonOriginal.removeClass('playing').find('.play-icon').text('▶');
            ocultarReproductorFlotante();
        });
        
        // Actualizar progreso
        audio.ontimeupdate = function() {
            const progreso = (audio.currentTime / audio.duration) * 100;
            $('.progress-fill').css('width', progreso + '%');
            $('.current-time').text(formatearTiempo(audio.currentTime));
        };
        
        // Duración total
        audio.onloadedmetadata = function() {
            $('.total-time').text(formatearTiempo(audio.duration));
        };
        
        // Click en barra de progreso
        $('.progress-bar').on('click', function(e) {
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const clickRatio = clickX / width;
            audio.currentTime = clickRatio * audio.duration;
        });
    }

    // Ocultar reproductor flotante
    function ocultarReproductorFlotante() {
        $('#reproductor-flotante').slideUp(300, function() {
            $(this).remove();
        });
        reproductorActivo = null;
    }

    // Modal para sermón completo
    function configurarModal() {
        // Crear modal si no existe
        if ($('#modal-sermon').length === 0) {
            const modal = `
                <div id="modal-sermon" class="modal-overlay">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 id="modal-titulo"></h2>
                            <button id="btn-cerrar-modal" class="btn-cerrar">×</button>
                        </div>
                        <div class="modal-body">
                            <div id="modal-contenido"></div>
                        </div>
                    </div>
                </div>
            `;
            $('body').append(modal);
        }
        
        // Eventos del modal
        $('#btn-cerrar-modal, #modal-sermon').on('click', function(e) {
            if (e.target === this) {
                cerrarModal();
            }
        });
        
        // Cerrar con ESC
        $(document).on('keydown', function(e) {
            if (e.key === 'Escape' && $('#modal-sermon').is(':visible')) {
                cerrarModal();
            }
        });
    }

    // Mostrar sermón completo en modal
    function mostrarSermonCompleto(sermonId) {
        const sermon = sermones.find(s => s.id === sermonId);
        if (!sermon) return;
        
        const contenido = `
            <div class="sermon-completo">
                <div class="sermon-meta">
                    <div class="sermon-fecha">${formatearFecha(sermon.fecha)}</div>
                    <div class="sermon-predicador">Por: ${sermon.predicador}</div>
                    <div class="sermon-categoria">Categoría: ${sermon.categoria.charAt(0).toUpperCase() + sermon.categoria.slice(1)}</div>
                </div>
                
                <div class="sermon-imagen">
                    <img src="${sermon.imagen}" alt="${sermon.titulo}">
                </div>
                
                <div class="sermon-descripcion">
                    <p><strong>Versículo base:</strong></p>
                    <blockquote>${sermon.versiculo}</blockquote>
                    
                    <p><strong>Descripción:</strong></p>
                    <p>${sermon.extracto}</p>
                    
                    <p><strong>Puntos principales:</strong></p>
                    <ul>
                        ${sermon.puntos.map(punto => `<li>${punto}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="sermon-acciones">
                    <button class="btn btn-primary" onclick="window.open('${sermon.audio}', '_blank')">
                        🎧 Escuchar Completo
                    </button>
                    <button class="btn btn-secondary" onclick="descargarSermon(${sermon.id})">
                        📥 Descargar
                    </button>
                    <button class="btn btn-outline" onclick="compartirSermon(${sermon.id})">
                        📤 Compartir
                    </button>
                </div>
            </div>
        `;
        
        $('#modal-titulo').text(sermon.titulo);
        $('#modal-contenido').html(contenido);
        $('#modal-sermon').fadeIn(300);
        $('body').addClass('modal-open');
    }

    // Cerrar modal
    function cerrarModal() {
        $('#modal-sermon').fadeOut(300);
        $('body').removeClass('modal-open');
    }

    // Funciones auxiliares
    function formatearFecha(fecha) {
        const opciones = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date(fecha).toLocaleDateString('es-ES', opciones);
    }

    function formatearTiempo(segundos) {
        const minutos = Math.floor(segundos / 60);
        const segs = Math.floor(segundos % 60);
        return `${minutos}:${segs.toString().padStart(2, '0')}`;
    }

    // Animaciones
    function animarElementos() {
        // Animación para las tarjetas al cargar
        $('.sermon-card').each(function(index) {
            $(this).delay(index * 100).fadeIn(500);
        });
        
        // Hover effects
        $('.sermon-card').hover(
            function() {
                $(this).addClass('hover-effect');
            },
            function() {
                $(this).removeClass('hover-effect');
            }
        );
    }

    // Funciones globales (disponibles desde HTML)
    window.descargarSermon = function(sermonId) {
        const sermon = sermones.find(s => s.id === sermonId);
        if (sermon) {
            // Simular descarga
            alert(`Descargando: "${sermon.titulo}"\nEsta funcionalidad se implementará con el servidor.`);
        }
    };

    window.compartirSermon = function(sermonId) {
        const sermon = sermones.find(s => s.id === sermonId);
        if (sermon && navigator.share) {
            navigator.share({
                title: sermon.titulo,
                text: sermon.extracto,
                url: window.location.href
            });
        } else if (sermon) {
            // Fallback para navegadores sin soporte de Web Share API
            const url = window.location.href;
            const texto = `${sermon.titulo} - ${sermon.extracto}\n\nEscúchalo en: ${url}`;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(texto).then(() => {
                    alert('Enlace copiado al portapapeles');
                });
            } else {
                alert('Compartir: ' + texto);
            }
        }
    };

    // Inicializar cuando el DOM esté listo
    inicializar();

    console.log('🎵 Sistema de sermones cargado correctamente');
});

// ========================================
// FUNCIONALIDAD DE BÚSQUEDA Y FILTROS AVANZADOS
// ========================================

// Variables para filtros
let filtroActual = {
    categoria: 'todos',
    predicador: '',
    fecha: '',
    duracion: '',
    busqueda: ''
};

// Función para aplicar todos los filtros
function aplicarFiltros() {
    let sermonesToDisplay = [...sermones];
    let resultCount = 0;
    
    // Filtrar por categoría
    if (filtroActual.categoria !== 'todos') {
        sermonesToDisplay = sermonesToDisplay.filter(sermon => 
            sermon.categoria === filtroActual.categoria
        );
    }
    
    // Filtrar por predicador
    if (filtroActual.predicador) {
        sermonesToDisplay = sermonesToDisplay.filter(sermon => 
            sermon.predicador.toLowerCase().includes(filtroActual.predicador.toLowerCase())
        );
    }
    
    // Filtrar por fecha
    if (filtroActual.fecha) {
        const ahora = new Date();
        sermonesToDisplay = sermonesToDisplay.filter(sermon => {
            const fechaSermon = new Date(sermon.fecha);
            
            switch(filtroActual.fecha) {
                case 'ultima-semana':
                    return (ahora - fechaSermon) <= (7 * 24 * 60 * 60 * 1000);
                case 'ultimo-mes':
                    return (ahora - fechaSermon) <= (30 * 24 * 60 * 60 * 1000);
                case 'ultimos-3-meses':
                    return (ahora - fechaSermon) <= (90 * 24 * 60 * 60 * 1000);
                case 'este-año':
                    return fechaSermon.getFullYear() === ahora.getFullYear();
                default:
                    return true;
            }
        });
    }
    
    // Filtrar por duración
    if (filtroActual.duracion) {
        sermonesToDisplay = sermonesToDisplay.filter(sermon => {
            const duracionMin = parseInt(sermon.duracion);
            
            switch(filtroActual.duracion) {
                case 'corto':
                    return duracionMin < 30;
                case 'medio':
                    return duracionMin >= 30 && duracionMin <= 45;
                case 'largo':
                    return duracionMin > 45;
                default:
                    return true;
            }
        });
    }
    
    // Filtrar por búsqueda de texto
    if (filtroActual.busqueda.trim()) {
        const textoBusqueda = filtroActual.busqueda.toLowerCase().trim();
        sermonesToDisplay = sermonesToDisplay.filter(sermon => 
            sermon.titulo.toLowerCase().includes(textoBusqueda) ||
            sermon.predicador.toLowerCase().includes(textoBusqueda) ||
            sermon.extracto.toLowerCase().includes(textoBusqueda) ||
            sermon.categoria.toLowerCase().includes(textoBusqueda)
        );
    }
    
    // Actualizar contador de resultados
    resultCount = sermonesToDisplay.length;
    actualizarContadorResultados(resultCount);
    
    // Mostrar sermones filtrados
    mostrarSermones(sermonesToDisplay);
    
    return sermonesToDisplay;
}

// Función para actualizar contador de resultados
function actualizarContadorResultados(count) {
    const resultsInfo = $('#results-info');
    const resultsCount = $('#results-count');
    
    if (count === sermones.length) {
        resultsInfo.hide();
    } else {
        resultsCount.text(count);
        resultsInfo.show().hide().fadeIn(300);
    }
}

// Función para mostrar/ocultar mensaje de "sin resultados"
function toggleNoResultsMessage(show) {
    const noResults = $('#no-results');
    const sermonesGrid = $('#sermones-grid .sermon-card');
    
    if (show && sermonesGrid.length === 0) {
        noResults.fadeIn(300);
    } else {
        noResults.hide();
    }
}

// ========================================
// EVENT LISTENERS PARA FILTROS
// ========================================

// Búsqueda en tiempo real
$('#buscador-sermones').on('input', function() {
    filtroActual.busqueda = $(this).val();
    aplicarFiltros();
});

// Filtro por predicador
$('#filter-predicador').on('change', function() {
    filtroActual.predicador = $(this).val();
    aplicarFiltros();
});

// Filtro por fecha
$('#filter-fecha').on('change', function() {
    filtroActual.fecha = $(this).val();
    aplicarFiltros();
});

// Filtro por duración
$('#filter-duracion').on('change', function() {
    filtroActual.duracion = $(this).val();
    aplicarFiltros();
});

// Limpiar todos los filtros
$('#clear-filters').on('click', function(e) {
    e.preventDefault();
    
    // Resetear filtros
    filtroActual = {
        categoria: 'todos',
        predicador: '',
        fecha: '',
        duracion: '',
        busqueda: ''
    };
    
    // Resetear campos del formulario
    $('#buscador-sermones').val('');
    $('#filter-predicador').val('');
    $('#filter-fecha').val('');
    $('#filter-duracion').val('');
    
    // Resetear categorías
    $('.categoria-tag').removeClass('active');
    $('.categoria-tag[data-categoria="todos"]').addClass('active');
    
    // Aplicar filtros (mostrar todos)
    aplicarFiltros();
    
    // Efecto visual
    $(this).addClass('clicked');
    setTimeout(() => {
        $(this).removeClass('clicked');
    }, 200);
});

// ========================================
// MEJORAR FILTROS POR CATEGORÍA
// ========================================

// Event listener mejorado para categorías
$('.categoria-tag').on('click', function(e) {
    e.preventDefault();
    
    // Remover clase active de todas las categorías
    $('.categoria-tag').removeClass('active');
    
    // Añadir clase active a la categoría seleccionada
    $(this).addClass('active');
    
    // Actualizar filtro
    filtroActual.categoria = $(this).data('categoria');
    
    // Aplicar filtros
    aplicarFiltros();
    
    // Efecto visual de selección
    $(this).addClass('clicked');
    setTimeout(() => {
        $(this).removeClass('clicked');
    }, 300);
});

// ========================================
// FUNCIÓN MEJORADA PARA MOSTRAR SERMONES
// ========================================

function mostrarSermones(sermonesArray) {
    const grid = $('#sermones-grid');
    const loading = $('#loading-sermones');
    
    // Limpiar grid actual (excepto loading y no-results)
    grid.find('.sermon-card').remove();
    
    if (sermonesArray.length === 0) {
        loading.hide();
        toggleNoResultsMessage(true);
        return;
    }
    
    toggleNoResultsMessage(false);
    
    // Generar HTML para cada sermón
    sermonesArray.forEach((sermon, index) => {
        const sermonCard = `
            <div class="sermon-card" data-categoria="${sermon.categoria}" data-index="${index}">
                <div class="sermon-thumbnail">
                    <img src="${sermon.imagen}" alt="${sermon.titulo}" loading="lazy">
                    <div class="sermon-play-btn" data-audio="${sermon.audio}">
                        <i class="fas fa-play"></i> ▶️
                    </div>
                    <div class="sermon-category-badge">${obtenerNombreCategoria(sermon.categoria)}</div>
                </div>
                <div class="sermon-details">
                    <div class="sermon-date">${formatearFecha(sermon.fecha)}</div>
                    <h3 class="sermon-title">${sermon.titulo}</h3>
                    <div class="sermon-speaker">
                        <img src="../img/logo.png" alt="Avatar" loading="lazy">
                        <span>${sermon.predicador}</span>
                    </div>
                    <p class="sermon-excerpt">${sermon.extracto}</p>
                    <div class="sermon-meta">
                        <span class="sermon-duration">⏱️ ${sermon.duracion}</span>
                        <span class="sermon-verse">${sermon.versiculo ? sermon.versiculo.split(' -')[0] : ''}</span>
                    </div>
                    <div class="sermon-actions">
                        <a href="#" class="sermon-link btn-escuchar" data-sermon-id="${sermon.id}">
                            🎧 Escuchar
                        </a>
                        <a href="#" class="sermon-download" data-sermon-id="${sermon.id}">
                            💾 Descargar
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        // Añadir con animación
        const $card = $(sermonCard).hide();
        grid.append($card);
        $card.delay(index * 100).fadeIn(400);
    });
    
    // Ocultar loading
    loading.hide();
}

// Función para obtener nombre legible de categoría
function obtenerNombreCategoria(categoria) {
    const categorias = {
        'fe': 'Fe',
        'familia': 'Familia',
        'oracion': 'Oración',
        'evangelio': 'Evangelio',
        'juventud': 'Juventud',
        'crecimiento': 'Crecimiento',
        'servicio': 'Servicio'
    };
    return categorias[categoria] || categoria;
}

// Función para formatear fecha
function formatearFecha(fechaString) {
    const fecha = new Date(fechaString);
    const opciones = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'UTC'
    };
    return fecha.toLocaleDateString('es-ES', opciones);
}
