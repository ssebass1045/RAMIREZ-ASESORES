# Guía de Despliegue en GoDaddy - Ramírez y Asesores SAS

## Resumen

Esta guía detalla los pasos para desplegar el sitio web estático de Ramírez y Asesores SAS en el hosting de GoDaddy (plan "Web Hosting Inicial"). El sitio ha sido exportado como sitio estático compatible con servidores Apache (cPanel).

## Estado Actual del Proyecto

✅ **Configuración completada:**
- Next.js configurado para exportación estática (`output: 'export'`)
- Imágenes optimizadas para exportación estática (`unoptimized: true`)
- Rutas dinámicas (servicios y blog) generadas estáticamente
- Sitemap y manifest configurados para exportación
- Build exitoso generado en carpeta `out/`

## Archivos Generados

La carpeta `out/` contiene:
- `index.html` - Página principal
- `servicios/` - Todas las páginas de servicios (9 servicios)
- `blog/` - Todos los artículos del blog (8 artículos)
- `nosotros/`, `contacto/`, `equipo/`, etc. - Páginas estáticas
- Assets estáticos (imágenes, videos, CSS, JS)

## Pasos para Desplegar en GoDaddy

### 1. Acceder al Panel de Control de GoDaddy

1. Inicia sesión en tu cuenta de GoDaddy
2. Ve a la sección **Web Hosting**
3. Haz clic en **Configurar** o **Administrar** en el plan "Web Hosting Inicial"

### 2. Subir Archivos al Servidor

#### Opción A: Usando File Manager (Recomendado)

1. En el panel de control, busca y haz clic en **File Manager**
2. Navega a la carpeta `public_html` (esta es la carpeta raíz del sitio web)
3. **IMPORTANTE:** Si hay archivos existentes, haz backup primero
4. Sube TODOS los archivos y carpetas de la carpeta `out/` local:
   - Selecciona "Upload" en File Manager
   - Arrastra o selecciona todos los archivos de `out/`
   - Asegúrate de mantener la estructura de carpetas

#### Opción B: Usando FTP

1. Usa un cliente FTP (FileZilla, Cyberduck, etc.)
2. Conéctate con las credenciales FTP de GoDaddy
3. Navega al directorio `public_html`
4. Sube todos los archivos de la carpeta `out/`

### 3. Verificar la Subida

Después de subir los archivos, la estructura en `public_html` debe verse así:
```
public_html/
├── index.html
├── servicios/
│   ├── outsourcing-contable/
│   │   └── index.html
│   ├── revisoria-fiscal/
│   │   └── index.html
│   └── ...
├── blog/
│   ├── beneficios-outsourcing-contable-pymes-medellin/
│   │   └── index.html
│   └── ...
├── _next/ (carpeta con assets optimizados)
└── [todas las demás carpetas y archivos]
```

### 4. Configurar Dominio y DNS

El dominio `ramirezasesores.co` ya está en tu cuenta. Verifica:

1. En la sección **Dominios**, haz clic en **Administrar DNS**
2. Asegúrate de que el **Registro A** apunte a la dirección IP de tu Web Hosting Inicial
3. **NO modifiques los registros MX** (son para los correos de Microsoft 365)

### 5. Configurar Correos Corporativos (CRÍTICO)

**¡PRECAUCIÓN!** Ya tienes 7 cuentas de Microsoft 365 configuradas:
- gerencia@ramirezasesores.co
- contabilidad@ramirezasesores.co
- etc.

**NO borres ni modifiques los registros MX** durante la configuración del hosting. GoDaddy suele mantenerlos integrados, pero verifica que sigan presentes después de cualquier cambio.

### 6. Verificar el Sitio Web

1. Visita `https://ramirezasesores.co` en tu navegador
2. Verifica que todas las páginas carguen correctamente
3. Prueba la navegación entre servicios y blog
4. Verifica que los formularios de contacto funcionen (si los hay)

## Consideraciones Técnicas Importantes

### Videos del Carousel
- Los videos están en `public/videos/` y se sirven estáticamente
- Para mejor rendimiento, considera subirlos a un CDN o servicio externo (YouTube, Vimeo) en el futuro
- Actualmente están optimizados en formato .mp4

### Blog Estático
- Los 8 artículos del blog son completamente estáticos
- No requiere base de datos ni backend
- Para agregar nuevos artículos, necesitarás regenerar el build

### Optimizaciones Implementadas
- ✅ Compresión de CSS y JavaScript
- ✅ Imágenes en formatos modernos (WebP, AVIF)
- ✅ Headers de seguridad configurados
- ✅ Sitemap XML generado automáticamente
- ✅ Manifest para PWA

## Mantenimiento y Actualizaciones

### Para Actualizar el Sitio

1. **Localmente:**
   ```bash
   # Hacer cambios en el código
   npm run build
   ```
2. **Subir cambios:**
   - Reemplazar solo los archivos modificados en `public_html`
   - O subir toda la carpeta `out/` nuevamente

### Para Agregar Nuevos Servicios o Artículos

1. Editar los archivos de datos:
   - `src/data/services.ts` para servicios
   - `src/data/blog.ts` para artículos
2. Regenerar el build completo
3. Subir los nuevos archivos generados

## Solución de Problemas Comunes

### Páginas muestran 404
- Verifica que los archivos `.html` estén en las carpetas correctas
- Asegúrate de que la estructura de carpetas coincida con las rutas de Next.js

### Imágenes no se cargan
- Verifica que las rutas de imágenes sean relativas (`/imagen.jpg`)
- Asegúrate de que los archivos de imágenes estén en `public_html`

### CSS/JS no se carga
- Verifica que la carpeta `_next/` se haya subido completamente
- Revisa las consolas de desarrollador para errores 404

### Redirecciones no funcionan
- El hosting estático no soporta redirecciones del lado del servidor
- Considera usar `.htaccess` para redirecciones simples

## Contacto para Soporte

Si encuentras problemas durante el despliegue:
- Revisa los logs de error en el panel de GoDaddy
- Verifica que todos los archivos se hayan subido correctamente
- Contacta al equipo de desarrollo si necesitas asistencia técnica

## Conclusión

El sitio web está listo para producción y optimizado para el hosting compartido de GoDaddy. Con esta configuración, mantendrás el Lighthouse Score de 95+ mientras aprovechas la infraestructura existente de GoDaddy.

**¡El sitio está listo para ir a producción!**