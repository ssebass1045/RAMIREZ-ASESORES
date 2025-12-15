# PLAN DE IMÁGENES - RAMÍREZ Y ASESORES SAS

## 📁 ESTRUCTURA DE DIRECTORIOS DE IMÁGENES

```
ramirez-asesores-web/public/
├── logo.png (✅ YA EXISTE)
├── team/ (✅ YA EXISTE - 7 imágenes del equipo)
│   ├── nestor-ramirez.png
│   ├── viviana-vargas.png
│   ├── maria-callejas.png
│   ├── paula-montoya.png
│   ├── viviana-piedrahita.png
│   ├── yulian-gomez.png
│   └── ana-estrada.png
├── services/ (📁 CREAR)
│   ├── outsourcing-contable.jpg
│   ├── revisoria-fiscal.jpg
│   ├── auditoria-financiera.jpg
│   ├── asesoria-aduanera.jpg
│   ├── consultoria-cambiaria.jpg
│   ├── consultoria-tributaria.jpg
│   ├── asesoria-financiera.jpg
│   └── consultoria-empresarial.jpg
├── blog/ (📁 CREAR)
│   ├── outsourcing-pymes.jpg
│   ├── normativa-tributaria.jpg
│   ├── auditoria-fiscal.jpg
│   ├── niif-implementacion.jpg
│   ├── revisoria-preventiva.jpg
│   ├── optimizacion-costos.jpg
│   ├── comercio-exterior.jpg
│   └── planeacion-tributaria.jpg
├── home/ (📁 CREAR)
│   ├── hero-profesional.jpg
│   ├── equipo-trabajo.jpg
│   └── oficina-medellin.jpg
└── general/ (📁 CREAR)
    ├── background-pattern.png
    └── iconos/
        ├── check-circle.svg
        ├── arrow-right.svg
        └── phone-icon.svg
```

## 📍 UBICACIONES ESPECÍFICAS DE IMÁGENES

### 1. PÁGINA PRINCIPAL (`src/app/page.tsx`)

#### 1.1 Hero Section
- **Ubicación**: Sección Hero - Lado derecho
- **Nombre archivo**: `hero-profesional.jpg`
- **Ruta**: `/public/home/hero-profesional.jpg`
- **Descripción**: Imagen profesional de consultoría contable (personas en oficina moderna, reunión de trabajo)
- **Dimensiones recomendadas**: 1200x800px
- **Código actual**: 
```tsx
<div className={styles.heroImage}>
  <div className={styles.imagePlaceholder}>
    <div className={styles.placeholderText}>
      Imagen Profesional
    </div>
  </div>
</div>
```
- **Código modificado**:
```tsx
<div className={styles.heroImage}>
  <img 
    src="/home/hero-profesional.jpg" 
    alt="Expertos en outsourcing contable en Medellín"
    className={styles.heroPhoto}
  />
</div>
```

#### 1.2 Sección "Por Qué Elegirnos"
- **Ubicación**: Lado derecho de la sección Why Us
- **Nombre archivo**: `equipo-trabajo.jpg`
- **Ruta**: `/public/home/equipo-trabajo.jpg`
- **Descripción**: Imagen del equipo de trabajo colaborando
- **Dimensiones recomendadas**: 800x600px
- **Código actual**:
```tsx
<div className={styles.whyUsImage}>
  <div className={styles.imagePlaceholder}>
    <div className={styles.placeholderText}>
      Imagen de Equipo de Trabajo
    </div>
  </div>
</div>
```
- **Código modificado**:
```tsx
<div className={styles.whyUsImage}>
  <img 
    src="/home/equipo-trabajo.jpg" 
    alt="Equipo de trabajo de Ramírez y Asesores"
    className={styles.whyUsPhoto}
  />
</div>
```

#### 1.3 Servicios (8 imágenes)
- **Ubicación**: Cards de servicios en página principal
- **Nombres archivos**: Ver sección `public/services/`
- **Ruta**: `/public/services/[nombre-servicio].jpg`
- **Descripción**: Imágenes representativas de cada servicio
- **Dimensiones recomendadas**: 600x400px
- **Código actual**:
```tsx
<div className={styles.serviceImage}>
  <div className={styles.imagePlaceholder}>
    <div className={styles.placeholderText}>
      {service.icon}
    </div>
  </div>
</div>
```
- **Código modificado**:
```tsx
<div className={styles.serviceImage}>
  <img 
    src={`/services/${service.id}.jpg`}
    alt={service.title}
    className={styles.servicePhoto}
  />
</div>
```

#### 1.4 Blog (3 imágenes destacadas)
- **Ubicación**: Cards de blog en página principal
- **Nombres archivos**: Ver sección `public/blog/`
- **Ruta**: `/public/blog/[nombre-articulo].jpg`
- **Dimensiones recomendadas**: 600x400px
- **Código actual**:
```tsx
<div className={styles.blogImage}>
  <div className={styles.imagePlaceholder}>
    <div className={styles.placeholderText}>📊</div>
  </div>
</div>
```
- **Código modificado**:
```tsx
<div className={styles.blogImage}>
  <img 
    src={`/blog/${articulo.id}.jpg`}
    alt={articulo.titulo}
    className={styles.blogPhoto}
  />
</div>
```

### 2. PÁGINA DE SERVICIOS (`src/app/servicios/page.tsx`)

#### 2.1 Hero Section
- **Ubicación**: Se podría agregar imagen de fondo o lateral
- **Nombre archivo**: `oficina-medellin.jpg`
- **Ruta**: `/public/home/oficina-medellin.jpg`
- **Descripción**: Imagen de oficina moderna en Medellín
- **Recomendación**: Agregar como background-image en CSS

#### 2.2 Iconos de servicios
- **Nota**: Actualmente usa emojis, se pueden reemplazar por iconos SVG
- **Ubicación**: `public/general/iconos/`
- **Formato**: SVG preferiblemente

### 3. PÁGINA DE BLOG (`src/app/blog/page.tsx`)

#### 3.1 Artículos destacados (2 imágenes)
#### 3.2 Grid de artículos (6 imágenes)
- **Nombres archivos**: Según IDs en el array `articulos`
- **Ruta**: `/public/blog/[id-articulo].jpg`
- **Código actual**:
```tsx
<div className={styles.imagePlaceholder}>
  <div className={styles.imageText}>
    {articulo.titulo.substring(0, 20)}...
  </div>
</div>
```
- **Código modificado**:
```tsx
<img 
  src={`/blog/${articulo.id}.jpg`}
  alt={articulo.titulo}
  className={styles.articuloPhoto}
/>
```

### 4. PÁGINA DE CONTACTO (`src/app/contacto/page.tsx`)

#### 4.1 Hero Section
- **Recomendación**: Agregar imagen de fondo relacionada con comunicación/contacto
- **Nombre archivo**: `contacto-hero.jpg`
- **Ruta**: `/public/home/contacto-hero.jpg`

### 5. PÁGINA NOSOTROS (`src/app/nosotros/page.tsx`)

#### 5.1 Hero Section
- **Recomendación**: Imagen de equipo completo o oficina
- **Nombre archivo**: `nosotros-hero.jpg`
- **Ruta**: `/public/home/nosotros-hero.jpg`

#### 5.2 Historia/Misión/Visión
- **Recomendación**: Imágenes ilustrativas para cada sección

## 🎨 OPTIMIZACIÓN CSS PARA IMÁGENES RESPONSIVAS

### Clases CSS a crear/modificar en `page.module.css`:

```css
/* Hero Image */
.heroPhoto {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(81, 112, 255, 0.2);
}

/* Why Us Image */
.whyUsPhoto {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 20px;
  animation: float 6s ease-in-out infinite;
}

/* Service Images */
.servicePhoto {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

/* Blog Images */
.blogPhoto {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

/* Team Images (YA EXISTE - optimizar) */
.teamPhoto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .heroPhoto {
    height: 300px;
  }
  
  .whyUsPhoto {
    height: 350px;
  }
  
  .servicePhoto,
  .blogPhoto {
    height: 150px;
  }
}

@media (max-width: 480px) {
  .heroPhoto {
    height: 250px;
  }
  
  .whyUsPhoto {
    height: 300px;
  }
}
```

### Clases CSS a crear en `blog.module.css`:

```css
/* Article Images */
.articuloPhoto {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}

.destacadoPhoto {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}

/* Responsive */
@media (max-width: 768px) {
  .articuloPhoto {
    height: 180px;
  }
  
  .destacadoPhoto {
    height: 200px;
  }
}
```

### Clases CSS a crear en `servicios.module.css`:

```css
/* Service header images (si se deciden agregar) */
.serviceHeaderImage {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}
```

## 📋 CHECKLIST DE IMPLEMENTACIÓN

### FASE 1: Preparar estructura de directorios
- [ ] Crear directorio `/public/services/`
- [ ] Crear directorio `/public/blog/`
- [ ] Crear directorio `/public/home/`
- [ ] Crear directorio `/public/general/iconos/`

### FASE 2: Modificar código para usar imágenes reales
- [ ] Página principal: Hero section
- [ ] Página principal: Why Us section
- [ ] Página principal: Services cards
- [ ] Página principal: Blog cards
- [ ] Página de blog: Artículos destacados
- [ ] Página de blog: Grid de artículos
- [ ] Página de servicios: Hero section (opcional)
- [ ] Página de contacto: Hero section (opcional)
- [ ] Página nosotros: Hero section (opcional)

### FASE 3: Optimizar CSS
- [ ] Agregar clases para imágenes responsivas en `page.module.css`
- [ ] Agregar clases para imágenes en `blog.module.css`
- [ ] Agregar clases para imágenes en `servicios.module.css`
- [ ] Ajustar breakpoints responsive
- [ ] Agregar efectos hover y transiciones

### FASE 4: Mejoras adicionales
- [ ] Agregar lazy loading a todas las imágenes
- [ ] Implementar componente Image de Next.js para optimización
- [ ] Agregar atributos alt descriptivos para SEO
- [ ] Configurar tamaños de imágenes para diferentes viewports

## 🚀 RECOMENDACIONES PARA LAS IMÁGENES

### Especificaciones técnicas:
1. **Formato**: JPG para fotos, PNG para logos/iconos, SVG para iconos vectoriales
2. **Calidad**: 80-85% de calidad para buen balance tamaño/calidad
3. **Tamaños**:
   - Hero images: 1200-2000px de ancho
   - Card images: 600-800px de ancho
   - Team photos: 400-600px de ancho
4. **Optimización**: Comprimir todas las imágenes antes de subir
5. **Nombres**: Usar nombres descriptivos en kebab-case (ej: `outsourcing-contable.jpg`)

### Temática de imágenes:
1. **Profesionalismo**: Oficinas modernas, equipo trabajando
2. **Confianza**: Personas sonrientes, apretón de manos
3. **Tecnología**: Computadoras, gráficos, dashboards
4. **Local**: Elementos que identifiquen Medellín/Antioquia
5. **Servicios específicos**: Imágenes relacionadas con cada servicio

### Consideraciones SEO:
1. **Nombres de archivo**: Descriptivos y con keywords
2. **Atributos alt**: Descriptivos, incluir keywords naturales
3. **Tamaños optimizados**: No sobrepasar 200KB por imagen
4. **Lazy loading**: Implementar para mejor performance
5. **WebP format**: Considerar conversión a WebP para mejor compresión

## 📞 SOPORTE TÉCNICO

Para cualquier duda sobre la implementación:
1. Revisar los códigos de ejemplo proporcionados
2. Verificar que las rutas de imágenes sean correctas
3. Asegurar que los directorios existan en `/public/`
4. Probar en diferentes tamaños de pantalla
5. Verificar la consola del navegador por errores 404

Este plan garantiza que todas las secciones del sitio web estén preparadas para mostrar imágenes reales, optimizadas para SEO y responsivas en todos los dispositivos.
