# Imágenes del Blog

Este directorio contiene las imágenes para los artículos del blog de Ramírez y Asesores SAS.

## 📁 Archivos requeridos:

Basados en los artículos definidos en `src/app/blog/page.tsx`:

1. **outsourcing-pymes.jpg** - 5 Beneficios del Outsourcing Contable para PYMES en Medellín
2. **normativa-tributaria.jpg** - Novedades en Normativa Tributaria 2024 en Colombia
3. **auditoria-fiscal.jpg** - Cómo Prepararse para una Auditoría Fiscal de la DIAN
4. **niif-implementacion.jpg** - Implementación de NIIF en Empresas de Medellín: Guía Paso a Paso
5. **revisoria-preventiva.jpg** - Ventajas de una Revisoría Fiscal Preventiva para tu Empresa
6. **optimizacion-costos.jpg** - Estrategias de Optimización de Costos para Empresas en Medellín
7. **comercio-exterior.jpg** - Requisitos Actualizados para Importación y Exportación en Colombia
8. **planeacion-tributaria.jpg** - Planeación Tributaria Estratégica para el Año 2024

## 🎨 Especificaciones técnicas:

- **Formato**: JPG
- **Dimensiones**: 600x400px (recomendado)
- **Calidad**: 80-85%
- **Tamaño máximo**: 200KB por imagen
- **Nombres**: Usar exactamente los nombres especificados arriba

## 📝 Temática sugerida:

1. **Outsourcing PYMES**: Pequeñas empresas trabajando, gráficos de crecimiento
2. **Normativa Tributaria**: Documentos legales, calendario fiscal
3. **Auditoría Fiscal**: Personas revisando documentos, lupa sobre números
4. **NIIF Implementación**: Gráficos de normas internacionales, equipo capacitándose
5. **Revisoría Preventiva**: Escudo protector, documentos organizados
6. **Optimización Costos**: Gráficos de ahorro, monedas, calculadora
7. **Comercio Exterior**: Contenedores, barcos, aviones, documentos aduaneros
8. **Planeación Tributaria**: Calendario, estrategias, reunión de planeación

## 🔗 Uso en el código:

Las imágenes se referencian en el código como:
```tsx
<img src="/blog/outsourcing-pymes.jpg" alt="5 Beneficios del Outsourcing Contable para PYMES" />
```

## 📚 Estructura de artículos:

Cada artículo en `src/data/blog.ts` tiene un campo `imagen` que referencia estos archivos. Asegurar que los nombres coincidan exactamente.

## ✅ Verificación:

Después de agregar las imágenes, verificar que:
1. Todos los 8 archivos existan
2. Los nombres coincidan con los IDs de los artículos
3. Las imágenes se muestren correctamente en la página de blog
4. No haya errores 404 en la consola del navegador
5. Las imágenes sean responsivas en diferentes tamaños de pantalla
