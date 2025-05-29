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
      // Base de datos de sermones con predicadores prominentes del cristianismo
    const sermones = [
        {
            id: 1,
            titulo: "La Soberanía de Dios en la Salvación",
            predicador: "Juan Calvino",
            fecha: "2025-05-20",
            categoria: "doctrina",
            duracion: "42 min",
            imagen: "../img/Sermones/Calvino.jpg",
            audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            extracto: "Una exposición profunda sobre la elección divina y la gracia irresistible. Calvino nos enseña sobre la seguridad de la salvación basada en la soberanía de Dios.",
            versiculo: "Efesios 1:4-5 - Según nos escogió en él antes de la fundación del mundo, para que fuésemos santos y sin mancha delante de él, en amor habiéndonos predestinado para ser adoptados hijos suyos por medio de Jesucristo.",
            puntos: [
                "La elección incondicional de Dios",
                "La depravación total del hombre",
                "La gracia irresistible en la conversión",
                "La perseverancia de los santos"
            ]
        },
        {
            id: 2,
            titulo: "Las Confesiones de un Corazón Transformado",
            predicador: "Agustín de Hipona",
            fecha: "2025-05-13",
            categoria: "conversion",
            duracion: "38 min",
            imagen: "../img/Sermones/Agustin.webp",
            audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            extracto: "Basado en sus famosas 'Confesiones', Agustín reflexiona sobre la búsqueda del alma humana por Dios y la gracia transformadora del Evangelio.",
            versiculo: "Salmo 51:10 - Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.",
            puntos: [
                "La inquietud del corazón sin Dios",
                "El poder transformador de la gracia",
                "La belleza de la confesión sincera",
                "La paz que solo Dios puede dar"
            ]
        },
        {
            id: 3,
            titulo: "La Justificación Solo por Fe",
            predicador: "R.C. Sproul",
            fecha: "2025-05-06",
            categoria: "doctrina",
            duracion: "45 min",
            imagen: "../img/Sermones/Sproul.webp",
            audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            extracto: "Una explicación magistral de la doctrina central de la Reforma. Sproul demuestra cómo la justificación por fe solamente es el corazón del Evangelio.",
            versiculo: "Romanos 3:28 - Concluimos, pues, que el hombre es justificado por fe sin las obras de la ley.",
            puntos: [
                "La insuficiencia de las obras humanas",
                "La justicia imputada de Cristo",
                "Solo la fe como medio de justificación",
                "Las implicaciones prácticas de esta doctrina"
            ]
        },
        {
            id: 4,
            titulo: "El Llamado a la Predicación Expositiva",
            predicador: "Sugel Michelén",
            fecha: "2025-04-29",
            categoria: "predicacion",
            duracion: "40 min",
            imagen: "../img/Sermones/sugel.jpg",
            audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            extracto: "Michelén desafía a los predicadores a mantenerse fieles a la Palabra de Dios, explicando la importancia de la predicación expositiva en la iglesia moderna.",
            versiculo: "2 Timoteo 4:2 - Que prediques la palabra; que instes a tiempo y fuera de tiempo; redarguye, reprende, exhorta con toda paciencia y doctrina.",
            puntos: [
                "La autoridad suprema de las Escrituras",
                "Métodos de interpretación bíblica",
                "La responsabilidad del predicador",
                "El poder transformador de la Palabra"
            ]
        },
        {
            id: 5,
            titulo: "La Centralidad del Evangelio",
            predicador: "Apóstol Pablo",
            fecha: "2025-04-22",
            categoria: "evangelio",
            duracion: "35 min",
            imagen: "../img/Sermones/Paul.jpg",
            audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            extracto: "Basado en las epístolas paulinas, este sermón presenta el mensaje central del cristianismo: Cristo crucificado y resucitado como único medio de salvación.",
            versiculo: "1 Corintios 15:3-4 - Porque primeramente os he enseñado lo que asimismo recibí: Que Cristo murió por nuestros pecados, conforme a las Escrituras; y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras.",            puntos: [
                "El problema del pecado humano",
                "La solución de Dios: Jesucristo",
                "La muerte expiatoria de Cristo",
                "La nueva vida en Cristo por fe"
            ]
        },
        {
            id: 6,
            titulo: "La Vida Consagrada a Dios",
            predicador: "Miguel Gosías",
            fecha: "2025-04-15",
            categoria: "santificacion",
            duracion: "37 min",
            imagen: "../img/Sermones/gosias.jpg",
            audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            extracto: "Un llamado profundo a la santificación y consagración total a Dios. Gosías nos desafía a vivir vidas que honren al Señor en cada área.",
            versiculo: "Romanos 12:1 - Así que, hermanos, os ruego por las misericordias de Dios, que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional.",            puntos: [
                "El llamado a la santificación",
                "La separación del mundo y sus valores",
                "Vivir como sacrificio vivo a Dios",
                "Los frutos de una vida consagrada"
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
        'doctrina': 'Doctrina',
        'conversion': 'Conversión',
        'predicacion': 'Predicación',
        'evangelio': 'Evangelio',
        'santificacion': 'Santificación'
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

// ========================================
// ESTADÍSTICAS ANIMADAS
// ========================================

// Función para animar contadores
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Función de easing para suavizar la animación
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);
        
        // Formatear número con + si es necesario
        const originalText = element.textContent;
        const hasPlus = originalText.includes('+');
        
        if (hasPlus) {
            element.textContent = current + '+';
        } else {
            element.textContent = current.toLocaleString();
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Asegurar que muestre el valor final correcto
            element.textContent = originalText;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Función para observar elementos y activar animaciones
function initStatsAnimation() {
    const statsSection = document.querySelector('.sermones-stats');
    if (!statsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                
                statNumbers.forEach((stat, index) => {
                    // Agregar clase de animación
                    setTimeout(() => {
                        stat.classList.add('counting');
                        
                        // Extraer número del texto
                        const text = stat.textContent;
                        const number = parseInt(text.replace(/[^\d]/g, ''));
                        
                        // Animar con delay escalonado
                        setTimeout(() => {
                            animateCounter(stat, number, 2000);
                        }, index * 200);
                        
                    }, index * 100);
                });
                
                // Desconectar observer después de la primera animación
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    observer.observe(statsSection);
}

// Función para agregar efectos de hover mejorados
function initStatsInteractions() {
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Inicializar estadísticas cuando el DOM esté listo
$(document).ready(function() {
    // Inicializar animaciones después de un pequeño delay
    setTimeout(() => {
        initStatsAnimation();
        initStatsInteractions();
    }, 500);
});
