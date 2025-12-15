# Imágenes para la Página Principal

Este directorio contiene las imágenes específicas para la página principal (Home) de Ramírez y Asesores SAS.

## 📁 Archivos requeridos:

1. **hero-profesional.jpg** - Imagen principal del Hero Section
2. **equipo-trabajo.jpg** - Imagen para la sección "Por Qué Elegirnos"
3. **oficina-medellin.jpg** - Imagen de fondo para secciones (opcional)

## 🎨 Especificaciones técnicas:

### hero-profesional.jpg
- **Formato**: JPG
- **Dimensiones**: 1200x800px (recomendado)
- **Calidad**: 85-90%
- **Tamaño máximo**: 300KB
- **Temática**: Consultoría contable profesional, equipo trabajando en oficina moderna

### equipo-trabajo.jpg
- **Formato**: JPG
- **Dimensiones**: 800x600px (recomendado)
- **Calidad**: 85-90%
- **Tamaño máximo**: 250KB
- **Temática**: Equipo colaborando, reunión de trabajo, ambiente profesional

### oficina-medellin.jpg
- **Formato**: JPG
- **Dimensiones**: 1600x900px (recomendado)
- **Calidad**: 85-90%
- **Tamaño máximo**: 400KB
- **Temática**: Oficina moderna en Medellín, vista de la ciudad

## 📝 Ubicaciones en la página:

### 1. Hero Section (`src/app/page.tsx`)
```tsx
<div className={styles.heroImage}>
  <img 
    src="/home/hero-profesional.jpg" 
    alt="Expertos en outsourcing contable en Medellín"
    className={styles.heroPhoto}
  />
</div>
```

### 2. Why Us Section (`src/app/page.tsx`)
```tsx
<div className={styles.whyUsImage}>
  <img 
    src="/home/equipo-trabajo.jpg" 
    alt="Equipo de trabajo de Ramírez y Asesores"
    className={styles.whyUsPhoto}
  />
</div>
```

### 3. Background Images (opcional)
Para usar como background en CSS:
```css
.hero {
  background-image: url('/home/oficina-medellin.jpg');
  background-size: cover;
  background-position: center;
}
```

## 🎯 Consideraciones de diseño:

1. **Consistencia**: Mantener un estilo visual coherente
2. **Profesionalismo**: Imágenes de alta calidad que reflejen seriedad
3. **Local**: Elementos que identifiquen Medellín/Antioquia
4. **Diversidad**: Mostrar equipo diverso y multicultural
5. **Modernidad**: Estética contemporánea y actual

## ✅ Verificación:

Después de agregar las imágenes, verificar que:
1. Las imágenes se muestren en las secciones correctas
2. Sean responsivas en diferentes dispositivos
3. No afecten el tiempo de carga de la página
4. Los textos sean legibles sobre las imágenes
5. No haya errores de ruta en la consola

## 🔧 Optimización:

Recomendaciones para optimizar las imágenes:
1. Usar herramientas como TinyPNG o Squoosh para compresión
2. Considerar formato WebP para mejor compresión
3. Implementar lazy loading para imágenes fuera del viewport
4. Usar el componente `Image` de Next.js para optimización automática
