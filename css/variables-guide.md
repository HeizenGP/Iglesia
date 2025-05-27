# 🎨 Guía de Variables CSS Globales

## 📋 Índice
- [Colores](#-colores)
- [Tipografía](#-tipografía)
- [Espaciado](#-espaciado)
- [Bordes y Sombras](#-bordes-y-sombras)
- [Transiciones](#-transiciones)
- [Ejemplos de Uso](#-ejemplos-de-uso)

## 🎨 Colores

### Colores Principales
```css
var(--primary-color)       /* #656554 - Verde oliva principal */
var(--primary-light)       /* #7a7968 - Verde oliva claro */
var(--primary-dark)        /* #4d4c3e - Verde oliva oscuro */
```

### Colores Secundarios
```css
var(--secondary-color)     /* #8b7355 - Marrón cálido */
var(--accent-color)        /* #d4af37 - Dorado */
```

### Colores Neutros
```css
var(--white)               /* #ffffff */
var(--light-gray)          /* #f7f7f7 */
var(--medium-gray)         /* #e6e6e6 */
var(--dark-gray)           /* #999999 */
var(--text-primary)        /* #050505 */
var(--text-secondary)      /* #333333 */
var(--text-light)          /* #666666 */
var(--black)               /* #000000 */
```

## 📝 Tipografía

### Familias de Fuentes
```css
var(--font-primary)        /* 'Lato', sans-serif */
var(--font-secondary)      /* 'Roboto', sans-serif */
var(--font-fallback)       /* 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif */
```

### Tamaños de Fuente
```css
var(--font-size-xs)        /* 12px */
var(--font-size-sm)        /* 14px */
var(--font-size-base)      /* 16px */
var(--font-size-lg)        /* 18px */
var(--font-size-xl)        /* 20px */
var(--font-size-2xl)       /* 24px */
var(--font-size-3xl)       /* 28px */
var(--font-size-4xl)       /* 36px */
var(--font-size-5xl)       /* 48px */
```

### Pesos de Fuente
```css
var(--font-weight-light)   /* 300 */
var(--font-weight-normal)  /* 400 */
var(--font-weight-medium)  /* 500 */
var(--font-weight-bold)    /* 700 */
var(--font-weight-black)   /* 900 */
```

## 📏 Espaciado

```css
var(--spacing-xs)          /* 5px */
var(--spacing-sm)          /* 10px */
var(--spacing-md)          /* 20px */
var(--spacing-lg)          /* 30px */
var(--spacing-xl)          /* 40px */
var(--spacing-2xl)         /* 50px */
var(--spacing-3xl)         /* 80px */
```

## 🎯 Bordes y Sombras

### Radios de Borde
```css
var(--border-radius-sm)    /* 3px */
var(--border-radius-md)    /* 5px */
var(--border-radius-lg)    /* 10px */
var(--border-radius-xl)    /* 15px */
var(--border-radius-full)  /* 50% */
```

### Sombras
```css
var(--shadow-sm)           /* 0 1px 3px rgba(0, 0, 0, 0.1) */
var(--shadow-md)           /* 0 2px 5px rgba(0, 0, 0, 0.1) */
var(--shadow-lg)           /* 0 4px 6px rgba(0, 0, 0, 0.15) */
var(--shadow-xl)           /* 0 8px 15px rgba(0, 0, 0, 0.2) */
```

## ⚡ Transiciones

```css
var(--transition-fast)     /* 0.15s ease */
var(--transition-normal)   /* 0.3s ease */
var(--transition-slow)     /* 0.5s ease */
```

## 🎛️ Otros

### Contenedores
```css
var(--container-max-width) /* 1200px */
var(--container-padding)   /* 20px */
```

### Z-index
```css
var(--z-index-dropdown)    /* 1000 */
var(--z-index-fixed)       /* 1030 */
var(--z-index-modal)       /* 1050 */
var(--z-index-tooltip)     /* 1070 */
```

## 💡 Ejemplos de Uso

### Botón con variables
```css
.mi-boton {
    background-color: var(--primary-color);
    color: var(--white);
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--border-radius-md);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-normal);
}

.mi-boton:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}
```

### Tarjeta con variables
```css
.mi-tarjeta {
    background-color: var(--white);
    padding: var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    margin-bottom: var(--spacing-lg);
}

.mi-tarjeta h3 {
    color: var(--text-primary);
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-md);
}

.mi-tarjeta p {
    color: var(--text-secondary);
    font-size: var(--font-size-base);
    line-height: 1.6;
}
```

### Sección con variables
```css
.mi-seccion {
    padding: var(--spacing-3xl) 0;
    background-color: var(--light-gray);
}

.mi-seccion .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
}
```

## 🚀 Ventajas de usar Variables CSS

1. **Consistencia**: Todos los elementos usan los mismos valores
2. **Mantenimiento**: Cambiar un valor actualiza todo el sitio
3. **Escalabilidad**: Fácil agregar nuevos componentes
4. **Legibilidad**: El código es más fácil de entender
5. **Temas**: Fácil crear variantes de color

## 📝 Consejos de Uso

1. **Siempre usa variables** para colores, espaciado y fuentes
2. **No uses valores hardcodeados** como `color: #333` 
3. **Mantén la nomenclatura consistente** 
4. **Documenta nuevas variables** que agregues
5. **Prueba en diferentes pantallas** para asegurar responsividad

## 🎨 Cómo cambiar el tema

Para cambiar los colores principales, simplemente modifica las variables en `:root`:

```css
:root {
    /* Cambiar de verde oliva a azul */
    --primary-color: #2563eb;
    --primary-light: #3b82f6;
    --primary-dark: #1e40af;
}
```

¡Y automáticamente todo el sitio cambiará de color! 🎉
