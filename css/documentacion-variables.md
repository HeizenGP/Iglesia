# Variables CSS Globales - Iglesia Dios Nos Ama

## 📋 Índice
1. [Introducción](#introducción)
2. [Estructura del Sistema](#estructura-del-sistema)
3. [Categorías de Variables](#categorías-de-variables)
4. [Guía de Uso](#guía-de-uso)
5. [Ventajas del Sistema](#ventajas-del-sistema)
6. [Mantenimiento](#mantenimiento)

---

## 🎯 Introducción

Este documento explica el sistema de **variables CSS globales** implementado en el sitio web de la Iglesia Dios Nos Ama. Las variables CSS (Custom Properties) nos permiten mantener consistencia visual, facilitar el mantenimiento del código y hacer cambios globales de manera eficiente.

### ¿Qué son las Variables CSS?

Las variables CSS son propiedades personalizadas que almacenan valores específicos para ser reutilizados en todo el sitio web. Se definen una vez y se pueden usar múltiples veces.

**Sintaxis:**
```css
/* Definición */
:root {
    --nombre-variable: valor;
}

/* Uso */
.elemento {
    propiedad: var(--nombre-variable);
}
```

---

## 🏗️ Estructura del Sistema

### Archivo Principal
- **Ubicación:** `css/variables.css`
- **Importación:** Se incluye en todas las páginas HTML antes de `styles.css`
- **Scope:** Global (definidas en `:root`)

### Organización
Las variables están organizadas en **10 categorías principales**:

1. **COLORES** - Paleta de colores del sitio
2. **TIPOGRAFÍA** - Fuentes, tamaños y pesos
3. **ESPACIADO** - Márgenes, padding y dimensiones
4. **SOMBRAS** - Box-shadow predefinidas
5. **BORDES** - Border-radius y estilos de borde
6. **TRANSICIONES** - Animaciones y efectos
7. **BREAKPOINTS** - Puntos de quiebre responsivos
8. **Z-INDEX** - Capas de elementos
9. **EFECTOS Y FILTROS** - Transformaciones y filtros
10. **GRADIENTES** - Para futuras mejoras

---

## 📊 Categorías de Variables

### 1. 🎨 COLORES

#### Colores Principales
```css
--color-primary: #0077cc;           /* Azul principal del sitio */
--color-primary-dark: #005fa3;      /* Azul oscuro para hover */
--color-primary-light: rgba(0,119,204,0.1); /* Azul claro para fondos */
--color-primary-transparent: rgba(0,119,204,0.8); /* Semi-transparente */
```

#### Colores Secundarios
```css
--color-secondary: #656554;         /* Verde grisáceo del header */
--color-accent: #535c5a;           /* Verde oscuro para CTA */
```

#### Escala de Grises
```css
--color-black: #000000;            /* Negro puro */
--color-dark: #050505;             /* Negro muy oscuro */
--color-gray-dark: #333;           /* Gris oscuro */
--color-gray: #555;                /* Gris medio */
--color-gray-medium: #666;         /* Gris medio-claro */
--color-gray-light: #999;          /* Gris claro */
--color-gray-lighter: #ccc;        /* Gris muy claro */
--color-gray-lightest: #ddd;       /* Gris casi blanco */
--color-white: #ffffff;            /* Blanco puro */
```

#### Colores de Fondo Específicos
```css
--bg-light-gray: #f7f7f7;         /* Sección de creencias */
--bg-medium-gray: #f2f2f2;        /* Hover de botones */
--bg-tag: #f0f0f0;                /* Etiquetas de categorías */
--bg-circle: #e6e6e6;             /* Círculos de expand/collapse */
```

### 2. ✏️ TIPOGRAFÍA

#### Familias de Fuentes
```css
--font-primary: "Lato", sans-serif;    /* Fuente principal */
--font-fallback: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fallback */
```

#### Tamaños de Fuente (Escala Modular)
```css
--font-size-xs: 0.9rem;           /* 14.4px - Textos pequeños */
--font-size-sm: 0.95rem;          /* 15.2px - Extractos */
--font-size-base: 1rem;           /* 16px - Texto base */
--font-size-lg: 1.3rem;           /* 20.8px - Hero párrafos */
--font-size-xl: 1.4rem;           /* 22.4px - Títulos de eventos */
--font-size-2xl: 1.75rem;         /* 28px - Subtítulos */
--font-size-3xl: 2.25rem;         /* 36px - Títulos sección */
--font-size-4xl: 3rem;            /* 48px - Hero títulos */
```

#### Pesos y Altura de Línea
```css
--font-weight-normal: 400;         /* Texto normal */
--font-weight-medium: 500;         /* Texto medio */
--font-weight-bold: 700;           /* Texto bold */

--line-height-tight: 1.4;         /* Títulos */
--line-height-normal: 1.5;        /* Texto general */
--line-height-relaxed: 1.6;       /* Párrafos largos */
```

### 3. 📏 ESPACIADO

#### Espaciado Base (Escala 8px)
```css
--spacing-xs: 5px;                /* Espacios muy pequeños */
--spacing-sm: 8px;                /* Espacios pequeños */
--spacing-base: 10px;             /* Espaciado base */
--spacing-md: 15px;               /* Espaciado medio */
--spacing-lg: 20px;               /* Espaciado grande */
--spacing-xl: 30px;               /* Espaciado extra grande */
--spacing-2xl: 40px;              /* Espaciado muy grande */
--spacing-3xl: 50px;              /* Espaciado extra grande */
--spacing-4xl: 80px;              /* Espaciado máximo */
```

#### Dimensiones Específicas
```css
--header-height: 100px;           /* Altura del header */
--logo-height: 65px;              /* Altura del logo */
--thumbnail-height: 200px;        /* Altura de miniaturas */
--team-image-size: 200px;         /* Tamaño de fotos equipo */
--social-icon-size: 30px;         /* Tamaño iconos sociales */
--play-button-size: 60px;         /* Tamaño botón play */
```

### 4. 🌫️ SOMBRAS

#### Niveles de Elevación
```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.1);        /* Sombra sutil */
--shadow-base: 0 2px 4px rgba(0,0,0,0.1);      /* Sombra base */
--shadow-md: 0 2px 5px rgba(0,0,0,0.1);        /* Sombra media */
--shadow-lg: 0 3px 10px rgba(0,0,0,0.1);       /* Sombra grande */
--shadow-xl: 0 5px 15px rgba(0,0,0,0.1);       /* Sombra extra grande */
--shadow-2xl: 0 10px 20px rgba(0,0,0,0.15);    /* Sombra máxima */
```

### 5. 🔳 BORDES

#### Border Radius
```css
--radius-sm: 4px;                 /* Botones pequeños */
--radius-base: 5px;               /* Elementos generales */
--radius-md: 8px;                 /* Tarjetas */
--radius-lg: 20px;                /* Etiquetas redondeadas */
--radius-full: 50%;               /* Círculos perfectos */
```

### 6. ⚡ TRANSICIONES

#### Duraciones Estándar
```css
--transition-fast: 0.2s;          /* Transiciones rápidas */
--transition-base: 0.3s;          /* Transiciones estándar */
--transition-slow: 0.5s;          /* Transiciones lentas */
```

#### Transiciones Predefinidas
```css
--transition-color: color 0.3s;                    /* Cambios de color */
--transition-bg: background-color 0.3s;            /* Cambios de fondo */
--transition-transform: transform 0.3s;            /* Transformaciones */
--transition-all: all 0.3s;                       /* Transición completa */
--transition-shadow: box-shadow 0.3s;             /* Cambios de sombra */
```

### 7. 📱 BREAKPOINTS

#### Puntos de Quiebre Responsivos
```css
--breakpoint-sm: 600px;           /* Mobile */
--breakpoint-md: 768px;           /* Tablet */
--breakpoint-lg: 900px;           /* Tablet grande */
--breakpoint-xl: 992px;           /* Desktop */
--breakpoint-2xl: 1200px;         /* Desktop grande */
```

### 8. 📚 Z-INDEX

#### Sistema de Capas
```css
--z-dropdown: 100;                /* Menús desplegables */
--z-sticky: 200;                  /* Elementos pegajosos */
--z-fixed: 300;                   /* Posición fija */
--z-modal-backdrop: 400;          /* Fondo de modales */
--z-modal: 500;                   /* Modales */
--z-popover: 600;                 /* Popovers */
--z-tooltip: 700;                 /* Tooltips */
--z-toast: 800;                   /* Notificaciones */
--z-header: 1000;                 /* Header principal */
```

### 9. 🎭 EFECTOS Y TRANSFORMACIONES

#### Transformaciones Hover
```css
--transform-hover-up: translateY(-3px);           /* Elevar elemento */
--transform-hover-up-sm: translateY(-5px);        /* Elevar más */
--transform-hover-right: translateX(5px);         /* Mover derecha */
--transform-scale-hover: scale(1.05);             /* Agrandar */
--transform-brightness: brightness(1.2);          /* Brillo */
```

### 10. 🌈 GRADIENTES

#### Para Futuras Mejoras
```css
--gradient-primary: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
--gradient-overlay: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7));
```

---

## 🛠️ Guía de Uso

### Cómo Usar las Variables

#### ✅ Correcto
```css
.button {
    background-color: var(--color-primary);
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--radius-base);
    transition: var(--transition-bg);
}

.button:hover {
    background-color: var(--color-primary-dark);
}
```

#### ❌ Incorrecto (hardcoded)
```css
.button {
    background-color: #0077cc;
    padding: 15px 30px;
    border-radius: 5px;
    transition: background-color 0.3s;
}
```

### Ejemplos Prácticos

#### Tarjeta de Evento
```css
.event-card {
    background-color: var(--color-white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-xl);
    padding: var(--spacing-lg);
    transition: var(--transition-transform);
}

.event-card:hover {
    transform: var(--transform-hover-up-sm);
}
```

#### Botón de Acción
```css
.btn-primary {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-sm);
    font-weight: var(--font-weight-medium);
    transition: var(--transition-bg);
}

.btn-primary:hover {
    background-color: var(--color-primary-dark);
}
```

---

## ✨ Ventajas del Sistema

### 1. **Consistencia Visual**
- Todos los elementos usan los mismos valores
- Evita inconsistencias accidentales
- Mantiene la identidad visual unificada

### 2. **Mantenimiento Simplificado**
- Cambios globales desde un solo archivo
- Reduce el tiempo de desarrollo
- Minimiza errores de actualización

### 3. **Escalabilidad**
- Fácil agregar nuevos componentes
- Sistema extensible y modular
- Preparado para futuras mejoras

### 4. **Legibilidad del Código**
- Nombres descriptivos y claros
- Organización lógica
- Documentación integrada

### 5. **Performance**
- Variables nativas del navegador
- Sin procesamiento adicional
- Carga rápida y eficiente

---

## 🔧 Mantenimiento

### Agregar Nuevas Variables

1. **Identifica la categoría** apropiada
2. **Usa la nomenclatura** establecida
3. **Agrega comentarios** explicativos
4. **Mantén la organización** por secciones

#### Ejemplo:
```css
/* En la sección de COLORES */
--color-success: #28a745;          /* Verde para mensajes de éxito */
--color-warning: #ffc107;          /* Amarillo para advertencias */
--color-danger: #dc3545;           /* Rojo para errores */
```

### Modificar Variables Existentes

⚠️ **PRECAUCIÓN:** Cambiar variables afecta todos los elementos que las usan.

1. **Identifica** todos los usos de la variable
2. **Verifica** el impacto visual
3. **Prueba** en todas las páginas
4. **Documenta** el cambio

### Nomenclatura

#### Estructura de Nombres
```
--[categoría]-[elemento]-[variante]
```

#### Ejemplos:
- `--color-primary-dark` (color principal oscuro)
- `--spacing-xl` (espaciado extra grande)
- `--shadow-lg` (sombra grande)
- `--font-size-2xl` (fuente extra grande)

---

## 📝 Notas de Implementación

### Estado Actual
- ✅ Variables creadas y documentadas
- ✅ Importadas en todas las páginas HTML
- 🔄 Conversión parcial de `styles.css`
- ⏳ Pendiente: completar conversión total

### Próximos Pasos
1. Finalizar reemplazo de valores hardcoded
2. Optimizar variables no utilizadas
3. Agregar variables para temas (light/dark)
4. Implementar variables para componentes específicos

### Archivos Afectados
- `css/variables.css` - Variables globales
- `css/styles.css` - Estilos principales
- `html/*.html` - Importación de variables

---

## 🎨 Paleta de Colores Visual

### Colores Principales
- 🔵 **Primary:** `#0077cc` - Azul principal
- 🔷 **Primary Dark:** `#005fa3` - Azul oscuro
- 💙 **Primary Light:** `rgba(0,119,204,0.1)` - Azul claro

### Colores Secundarios
- 🟫 **Secondary:** `#656554` - Verde grisáceo
- 🌿 **Accent:** `#535c5a` - Verde oscuro

### Escala de Grises
- ⚫ **Black:** `#000000`
- ⬛ **Dark:** `#050505`
- 🔘 **Gray Dark:** `#333333`
- 🔳 **Gray:** `#555555`
- ⚪ **White:** `#ffffff`

---

*Documento actualizado: Mayo 2025*
*Proyecto: Iglesia Dios Nos Ama*
*Versión: 1.0*
