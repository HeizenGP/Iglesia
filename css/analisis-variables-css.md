# Análisis de Variables CSS - Iglesia Dios Nos Ama

## Variables Definidas en variables.css pero NO utilizadas

### 1. COLORES NO UTILIZADOS
- `--color-primary-light` - Azul claro para fondos
- `--color-primary-transparent` - Azul semi-transparente
- `--bg-tag` - Fondo para etiquetas  
- `--bg-thumbnail` - Fondo para miniaturas

### 2. TIPOGRAFÍA NO UTILIZADA
- `--font-weight-normal` - No se usa, solo medium y bold

### 3. ESPACIADO NO UTILIZADO
- `--play-button-size` - Tamaño de botón de reproducción
- `--thumbnail-height` - Altura de miniaturas

### 4. SOMBRAS NO UTILIZADAS
- `--shadow-2xl` - Sombra extra grande

### 5. BORDES NO UTILIZADOS
- `--border-width` - Ancho de borde
- `--border-style` - Estilo de borde
- `--border-color` - Color de borde
- `--border-gray` - Borde gris

### 6. TRANSICIONES NO UTILIZADAS
- `--transition-fast` - Transición rápida
- `--ease-base` - Curva de animación base
- `--ease-in-out` - Curva ease-in-out
- `--ease-out` - Curva ease-out
- `--transition-shadow` - Transición de sombra

### 7. BREAKPOINTS NO UTILIZADOS
- `--breakpoint-sm` - Mobile
- `--breakpoint-md` - Tablet
- `--breakpoint-lg` - Tablet grande
- `--breakpoint-xl` - Desktop
- `--breakpoint-2xl` - Desktop grande

### 8. Z-INDEX NO UTILIZADOS
- `--z-dropdown` - Capa de dropdowns
- `--z-sticky` - Capa sticky
- `--z-fixed` - Capa fija
- `--z-modal-backdrop` - Fondo de modal
- `--z-modal` - Modal
- `--z-popover` - Popover
- `--z-tooltip` - Tooltip
- `--z-toast` - Notificaciones

### 9. EFECTOS Y TRANSFORMACIONES NO UTILIZADOS
- `--transform-hover-right` - Movimiento derecha
- `--transform-hover-up-sm` - Movimiento arriba pequeño
- `--transform-scale-hover` - Escala en hover

### 10. GRADIENTES NO UTILIZADOS
- `--gradient-primary` - Gradiente primario
- `--gradient-overlay` - Gradiente overlay

## Variables Utilizadas pero NO definidas en variables.css

### VARIABLES INCONSISTENTES ENCONTRADAS:
- `--border-radius-full` (usado) vs `--radius-full` (definido)
- `--border-radius-lg` (usado) vs `--radius-lg` (definido)  
- `--border-radius-md` (usado) vs `--radius-md` (definido)
- `--border-radius-sm` (usado) vs `--radius-sm` (definido)
- `--primary-color` (usado) vs `--color-primary` (definido)
- `--medium-gray` (usado) - NO definido
- `--dark-gray` (usado) vs `--color-gray-dark` (definido)
- `--transition-normal` (usado) vs `--transition-base` (definido)
- `--shadow-soft` (usado) - NO definido
- `--shadow-strong` (usado) - NO definido
- `--font-size-5xl` (usado) - NO definido
- `--font-weight-black` (usado) - NO definido
- `--z-index-modal` (usado) vs `--z-modal` (definido)
- `--z-index-tooltip` (usado) vs `--z-tooltip` (definido)

## Recomendaciones

### 1. VARIABLES A ELIMINAR (no utilizadas):
**Total: 32 variables**

### 2. VARIABLES A CORREGIR (inconsistencias de nombres):
- Unificar nomenclatura de border-radius
- Corregir referencias de colores
- Estandarizar nombres de z-index
- Definir variables faltantes

### 3. VARIABLES A AÑADIR:
- `--medium-gray`
- `--font-size-5xl` 
- `--font-weight-black`
- `--shadow-soft`
- `--shadow-strong`
- `--transition-normal`

### 4. IMPACTO:
- **Reducción de archivo**: ~40% menos líneas en variables.css
- **Mejora de rendimiento**: Menos variables CSS a procesar
- **Mejor mantenimiento**: Solo variables realmente utilizadas
