# 📘 GUÍA COMPLETA DE JQUERY - Iglesia DIOS NOS AMA

## 🎯 **¿Qué es jQuery?**

jQuery es una biblioteca de JavaScript que simplifica la manipulación del DOM, manejo de eventos, animaciones y AJAX. En tu proyecto de iglesia, jQuery se usa para crear una experiencia de usuario más interactiva y moderna.

---

## 📁 **Archivos jQuery en tu Proyecto**

### 1. **jquery-advanced.js** - Funcionalidades avanzadas
### 2. **script.js** - Funcionalidades básicas (JavaScript vanilla + algunas con jQuery)
### 3. **jquery-components.css** - Estilos para componentes jQuery

---

## 🎨 **FUNCIONALIDADES IMPLEMENTADAS**

### 1. **🎬 ANIMACIONES Y EFECTOS**

#### **Fade-in al hacer scroll**
```javascript
$('.fade-in').each(function() {
    const elementTop = $(this).offset().top;
    const windowBottom = $(window).scrollTop() + $(window).innerHeight();
    
    if (elementTop < windowBottom - 100) {
        $(this).addClass('visible');
    }
});
```
**¿Qué hace?** Los elementos con clase `fade-in` aparecen gradualmente cuando el usuario hace scroll y llegan a ser visibles.

**¿Cómo usarlo en HTML?**
```html
<div class="fade-in">
    <h2>Este texto aparecerá con animación</h2>
</div>
```

---

#### **Efectos Hover Mejorados**
```javascript
$('.service-card, .belief-item, .team-member').hover(
    function() { $(this).addClass('hover-effect'); },
    function() { $(this).removeClass('hover-effect'); }
);
```
**¿Qué hace?** Añade efectos especiales cuando pasas el mouse sobre tarjetas de servicios, creencias o miembros del equipo.

---

### 2. **🔍 SISTEMA DE BÚSQUEDA EN TIEMPO REAL**

```javascript
$('#search-input').on('keyup', function() {
    const value = $(this).val().toLowerCase();
    
    $('.searchable-item').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
});
```

**¿Qué hace?** Permite buscar contenido en tiempo real (sermones, eventos) mientras el usuario escribe.

**¿Cómo implementarlo en HTML?**
```html
<input type="text" id="search-input" placeholder="Buscar sermones...">

<div class="searchable-item">
    <h3>Sermón sobre el amor</h3>
    <p>Contenido del sermón...</p>
</div>

<div class="searchable-item">
    <h3>Evento de jóvenes</h3>
    <p>Información del evento...</p>
</div>
```

---

### 3. **📱 MODAL DE CONTACTO**

#### **Abrir Modal**
```javascript
$('.contact-btn').click(function(e) {
    e.preventDefault();
    $('#contact-modal').fadeIn(300);
    $('body').addClass('modal-open');
});
```

#### **Cerrar Modal**
```javascript
$('.close-modal, .modal-overlay').click(function() {
    $('#contact-modal').fadeOut(300);
    $('body').removeClass('modal-open');
});
```

**¿Qué hace?** Crea ventanas emergentes para formularios de contacto sin salir de la página.

**¿Cómo implementarlo en HTML?**
```html
<!-- Botón para abrir modal -->
<button class="contact-btn">Contáctanos</button>

<!-- Modal -->
<div id="contact-modal" class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
        <button class="close-modal">&times;</button>
        <h3>Contáctanos</h3>
        <form id="contact-form">
            <!-- Formulario aquí -->
        </form>
    </div>
</div>
```

---

### 4. **✅ VALIDACIÓN DE FORMULARIOS**

```javascript
$('#contact-form').submit(function(e) {
    e.preventDefault();
    
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
});
```

**¿Qué hace?** Valida automáticamente los campos del formulario y muestra mensajes de error específicos.

---

### 5. **🖼️ GALERÍA DE IMÁGENES CON LIGHTBOX**

```javascript
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
```

**¿Qué hace?** Al hacer clic en una imagen, se abre en pantalla completa con fondo oscuro.

**¿Cómo usarlo en HTML?**
```html
<img src="evento1.jpg" alt="Evento de navidad" class="gallery-image">
<img src="evento2.jpg" alt="Bautizo" class="gallery-image">
```

---

### 6. **⚡ LAZY LOADING DE IMÁGENES**

```javascript
$('img[data-src]').each(function() {
    const $img = $(this);
    const src = $img.attr('data-src');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.getAttribute('data-src');
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe($img[0]);
});
```

**¿Qué hace?** Las imágenes se cargan solo cuando están a punto de ser visibles, mejorando la velocidad de carga.

**¿Cómo usarlo en HTML?**
```html
<img data-src="imagen-grande.jpg" alt="Descripción" class="lazy-image">
```

---

### 7. **🔢 CONTADOR ANIMADO**

```javascript
function animateCounters() {
    $('.counter').each(function() {
        const $this = $(this);
        const countTo = $this.attr('data-count');
        
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            step: function() {
                $this.text(Math.floor(this.countNum));
            }
        });
    });
}
```

**¿Qué hace?** Los números suben automáticamente desde 0 hasta el valor final de forma animada.

**¿Cómo usarlo en HTML?**
```html
<div class="counter" data-count="500">0</div>
<p>Miembros de nuestra iglesia</p>

<div class="counter" data-count="1988">0</div>
<p>Año de fundación</p>
```

---

### 8. **💬 SISTEMA DE NOTIFICACIONES**

```javascript
function showNotification(message, type = 'info') {
    const notification = `
        <div class="notification notification-${type}">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    $('body').append(notification);
    $('.notification').last().slideDown(300);
}
```

**¿Qué hace?** Muestra mensajes temporales al usuario (éxito, error, información).

**¿Cómo usarlo?**
```javascript
// Desde cualquier parte del código
showNotification('¡Mensaje enviado correctamente!', 'success');
showNotification('Error al enviar mensaje', 'error');
showNotification('Información importante', 'info');
```

---

### 9. **💡 TOOLTIPS**

```javascript
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
```

**¿Qué hace?** Muestra información adicional al pasar el mouse sobre un elemento.

**¿Cómo usarlo en HTML?**
```html
<button data-tooltip="Haz clic para contactarnos">Contacto</button>
<span data-tooltip="Fundada en 1988">Iglesia DIOS NOS AMA</span>
```

---

### 10. **🏃‍♂️ SMOOTH SCROLLING**

```javascript
$('a[href*="#"]:not([href="#"])').click(function() {
    let target = $(this.hash);
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top - 80
        }, 800);
        return false;
    }
});
```

**¿Qué hace?** Los enlaces internos se desplazan suavemente en lugar de saltar bruscamente.

---

## 🎯 **CÓMO USAR ESTAS FUNCIONALIDADES**

### **1. Para Eventos:**
```html
<!-- En eventos.html -->
<div class="searchable-item fade-in">
    <h3>Retiro de Jóvenes 2025</h3>
    <p>Un fin de semana de crecimiento espiritual...</p>
    <img data-src="retiro-jovenes.jpg" alt="Retiro" class="gallery-image">
</div>
```

### **2. Para Sermones:**
```html
<!-- En sermones.html -->
<div class="searchable-item fade-in">
    <h3>El Amor de Cristo</h3>
    <p>Sermón sobre 1 Corintios 13...</p>
    <button class="contact-btn">Solicitar sermón completo</button>
</div>
```

### **3. Para Estadísticas:**
```html
<!-- En index.html -->
<section class="counters-section">
    <div class="counter" data-count="500">0</div>
    <p>Miembros activos</p>
    
    <div class="counter" data-count="35">0</div>
    <p>Años de ministerio</p>
</section>
```

---

## 🔧 **FUNCIONES AUXILIARES INCLUIDAS**

### **1. Validar formularios**
```javascript
function validateForm(formId) {
    let isValid = true;
    $(`${formId} [required]`).each(function() {
        if (!$(this).val().trim()) {
            $(this).addClass('error');
            isValid = false;
        }
    });
    return isValid;
}
```

### **2. Formatear fechas**
```javascript
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    return new Date(date).toLocaleDateString('es-ES', options);
}
```

---

## 📱 **BENEFICIOS DE USAR JQUERY EN TU SITIO WEB**

1. **🎨 Mejor experiencia visual** - Animaciones suaves y efectos atractivos
2. **⚡ Interactividad mejorada** - Respuesta inmediata a las acciones del usuario  
3. **📱 Responsivo** - Funciona perfectamente en móviles y escritorio
4. **🔍 Funcionalidad de búsqueda** - Los usuarios pueden encontrar contenido rápidamente
5. **✅ Validación automática** - Menos errores en formularios
6. **🖼️ Galería profesional** - Visualización elegante de imágenes
7. **💬 Comunicación fluida** - Modales y notificaciones informativas

---

## 🚀 **PRÓXIMOS PASOS RECOMENDADOS**

1. **Implementar búsqueda** en páginas de sermones y eventos
2. **Agregar galería de fotos** de eventos pasados
3. **Crear formulario de contacto** con modal
4. **Añadir contadores** de estadísticas en la página principal
5. **Implementar sistema de notificaciones** para mensajes del sitio

---

## ⚙️ **CONFIGURACIÓN NECESARIA**

### **En el HTML:**
```html
<!-- jQuery CDN (ya incluido) -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<!-- Tu archivo de funcionalidades -->
<script src="../js/jquery-advanced.js"></script>

<!-- Estilos para componentes -->
<link rel="stylesheet" href="../css/jquery-components.css">
```

### **Clases CSS necesarias:**
- `.fade-in` - Para animaciones de entrada
- `.searchable-item` - Para elementos buscables
- `.gallery-image` - Para imágenes de galería
- `.counter` - Para contadores animados
- `.modal` - Para ventanas emergentes

---

¡Tu sitio web de la iglesia ahora tiene funcionalidades modernas y profesionales gracias a jQuery! 🎉
