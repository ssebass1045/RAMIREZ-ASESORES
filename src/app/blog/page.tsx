import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './blog.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog - Ramírez y Asesores SAS | Consejos Contables y Financieros Medellín',
  description: 'Artículos especializados sobre contabilidad, auditoría, revisoría fiscal, asesoría tributaria y finanzas empresariales en Medellín.',
  keywords: 'blog contable Medellín, consejos financieros, normativa tributaria, NIIF, auditoría, revisoría fiscal, asesoría empresarial',
};

// Datos de artículos del blog (simulados - en producción vendrían de una API o CMS)
const articulos = [
  {
    id: 'beneficios-outsourcing-contable-pymes-medellin',
    titulo: '5 Beneficios del Outsourcing Contable para PYMES en Medellín',
    descripcion: 'Descubre cómo el outsourcing contable puede optimizar costos y mejorar la eficiencia en tu empresa medellinense.',
    fecha: '15 de Enero, 2024',
    categoria: 'Outsourcing Contable',
    tiempoLectura: '5 min',
    imagen: '/blog/outsourcing-pymes.jpg',
    destacado: true,
    contenido: 'El outsourcing contable se ha convertido en una estrategia clave para las PYMES en Medellín que buscan optimizar recursos...'
  },
  {
    id: 'novedades-normativa-tributaria-2024-colombia',
    titulo: 'Novedades en Normativa Tributaria 2024 en Colombia',
    descripcion: 'Actualización completa de los cambios en la normativa tributaria colombiana para el año 2024.',
    fecha: '10 de Enero, 2024',
    categoria: 'Consultoría Tributaria',
    tiempoLectura: '8 min',
    imagen: '/blog/normativa-tributaria.jpg',
    destacado: true,
    contenido: 'El año 2024 trae importantes cambios en la normativa tributaria colombiana que afectan a empresas de todos los tamaños...'
  },
  {
    id: 'como-prepararse-auditoria-fiscal-dian',
    titulo: 'Cómo Prepararse para una Auditoría Fiscal de la DIAN',
    descripcion: 'Guía práctica para empresas en Medellín sobre cómo prepararse exitosamente para una auditoría fiscal.',
    fecha: '5 de Enero, 2024',
    categoria: 'Auditoría',
    tiempoLectura: '7 min',
    imagen: '/blog/auditoria-fiscal.jpg',
    destacado: false,
    contenido: 'Una auditoría fiscal de la DIAN puede ser un proceso complejo, pero con la preparación adecuada...'
  },
  {
    id: 'implementacion-niif-empresas-medellin',
    titulo: 'Implementación de NIIF en Empresas de Medellín: Guía Paso a Paso',
    descripcion: 'Proceso detallado para implementar las Normas Internacionales de Información Financiera en tu empresa.',
    fecha: '28 de Diciembre, 2023',
    categoria: 'Contabilidad',
    tiempoLectura: '10 min',
    imagen: '/blog/niif-implementacion.jpg',
    destacado: false,
    contenido: 'La implementación de NIIF es obligatoria para muchas empresas en Colombia y representa un desafío importante...'
  },
  {
    id: 'ventajas-revisoria-fiscal-preventiva',
    titulo: 'Ventajas de una Revisoría Fiscal Preventiva para tu Empresa',
    descripcion: 'Cómo una revisoría fiscal preventiva puede proteger los intereses de tu empresa en Medellín.',
    fecha: '20 de Diciembre, 2023',
    categoria: 'Revisoría Fiscal',
    tiempoLectura: '6 min',
    imagen: '/blog/revisoria-preventiva.jpg',
    destacado: false,
    contenido: 'La revisoría fiscal preventiva no solo cumple con un requisito legal, sino que se convierte en una herramienta estratégica...'
  },
  {
    id: 'optimizacion-costos-empresariales-medellin',
    titulo: 'Estrategias de Optimización de Costos para Empresas en Medellín',
    descripcion: 'Métodos efectivos para reducir costos y mejorar la rentabilidad de tu empresa en el mercado local.',
    fecha: '15 de Diciembre, 2023',
    categoria: 'Asesoría Financiera',
    tiempoLectura: '9 min',
    imagen: '/blog/optimizacion-costos.jpg',
    destacado: false,
    contenido: 'En el competitivo mercado de Medellín, la optimización de costos se ha convertido en una prioridad para las empresas...'
  },
  {
    id: 'requisitos-importacion-exportacion-colombia',
    titulo: 'Requisitos Actualizados para Importación y Exportación en Colombia',
    descripcion: 'Guía completa sobre los requisitos y procedimientos para comercio exterior en 2024.',
    fecha: '10 de Diciembre, 2023',
    categoria: 'Asesoría Aduanera',
    tiempoLectura: '8 min',
    imagen: '/blog/comercio-exterior.jpg',
    destacado: false,
    contenido: 'El comercio exterior en Colombia requiere el cumplimiento de una serie de requisitos y procedimientos específicos...'
  },
  {
    id: 'planeacion-tributaria-estrategica-2024',
    titulo: 'Planeación Tributaria Estratégica para el Año 2024',
    descripcion: 'Cómo planificar tus impuestos de manera estratégica para optimizar cargas fiscales legalmente.',
    fecha: '5 de Diciembre, 2023',
    categoria: 'Consultoría Tributaria',
    tiempoLectura: '7 min',
    imagen: '/blog/planeacion-tributaria.jpg',
    destacado: false,
    contenido: 'La planeación tributaria estratégica es fundamental para cualquier empresa que busque optimizar sus cargas fiscales...'
  }
];

const categorias = [
  'Todos',
  'Outsourcing Contable',
  'Revisoría Fiscal',
  'Auditoría',
  'Consultoría Tributaria',
  'Asesoría Aduanera',
  'Asesoría Financiera',
  'Contabilidad',
  'Normativa'
];

export default function Blog() {
  const articulosDestacados = articulos.filter(art => art.destacado);
  const articulosRecientes = articulos.slice(0, 6);

  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span className={styles.highlight}>Blog</span> Especializado
              </h1>
              <p className={styles.heroSubtitle}>
                Artículos expertos sobre contabilidad, finanzas, normativa tributaria y mejores prácticas 
                para empresas en Medellín y Antioquia.
              </p>
            </div>
          </div>
        </section>

        {/* Artículos Destacados */}
        {articulosDestacados.length > 0 && (
          <section className={`${styles.destacados} section-padding`}>
            <div className="container">
              <div className={styles.destacadosHeader}>
                <h2 className={styles.destacadosTitle}>Artículos Destacados</h2>
                <p className={styles.destacadosSubtitle}>
                  Contenido seleccionado por nuestro equipo de expertos
                </p>
              </div>
              
              <div className={styles.destacadosGrid}>
                {articulosDestacados.map((articulo, index) => (
                  <article 
                    key={articulo.id} 
                    className={`card ${styles.destacadoCard} ${
                      index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
                    }`}
                  >
                    <div className={styles.destacadoImage}>
                      <div className={styles.imagePlaceholder}>
                        <div className={styles.imageText}>
                          {articulo.titulo.substring(0, 30)}...
                        </div>
                      </div>
                      <div className={styles.destacadoBadge}>Destacado</div>
                    </div>
                    
                    <div className={styles.destacadoContent}>
                      <div className={styles.articuloMeta}>
                        <span className={styles.articuloCategoria}>{articulo.categoria}</span>
                        <span className={styles.articuloFecha}>{articulo.fecha}</span>
                        <span className={styles.articuloTiempo}>{articulo.tiempoLectura} lectura</span>
                      </div>
                      
                      <h3 className={styles.articuloTitle}>
                        <Link href={`/blog/${articulo.id}`}>
                          {articulo.titulo}
                        </Link>
                      </h3>
                      
                      <p className={styles.articuloDescripcion}>
                        {articulo.descripcion}
                      </p>
                      
                      <Link 
                        href={`/blog/${articulo.id}`} 
                        className={styles.leerMasLink}
                      >
                        Leer artículo completo →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categorías y Filtros */}
        <section className={`${styles.categorias} section-padding`}>
          <div className="container">
            <div className={styles.categoriasContent}>
              <h3 className={styles.categoriasTitle}>Explora por Categoría</h3>
              <div className={styles.categoriasList}>
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    className={styles.categoriaButton}
                  >
                    {categoria}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Grid de Artículos */}
        <section className={`${styles.articulosGrid} section-padding`}>
          <div className="container">
            <div className={styles.gridHeader}>
              <h2 className={styles.gridTitle}>Artículos Recientes</h2>
              <p className={styles.gridSubtitle}>
                Mantente actualizado con las últimas tendencias y normativas
              </p>
            </div>
            
            <div className={styles.articulosContainer}>
              {articulosRecientes.map((articulo, index) => (
                <article 
                  key={articulo.id} 
                  className={`card ${styles.articuloCard} fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.articuloImage}>
                    <div className={styles.imagePlaceholder}>
                      <div className={styles.imageText}>
                        {articulo.titulo.substring(0, 20)}...
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.articuloContent}>
                    <div className={styles.articuloMeta}>
                      <span className={styles.articuloCategoria}>{articulo.categoria}</span>
                      <span className={styles.articuloFecha}>{articulo.fecha}</span>
                    </div>
                    
                    <h3 className={styles.articuloTitle}>
                      <Link href={`/blog/${articulo.id}`}>
                        {articulo.titulo}
                      </Link>
                    </h3>
                    
                    <p className={styles.articuloDescripcion}>
                      {articulo.descripcion}
                    </p>
                    
                    <div className={styles.articuloFooter}>
                      <span className={styles.articuloTiempo}>{articulo.tiempoLectura} lectura</span>
                      <Link 
                        href={`/blog/${articulo.id}`} 
                        className={styles.leerMasLink}
                      >
                        Leer más
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Paginación */}
            <div className={styles.paginacion}>
              <button className={styles.paginaButton} disabled>
                ← Anterior
              </button>
              <div className={styles.paginaNumeros}>
                <span className={`${styles.paginaNumero} ${styles.activo}`}>1</span>
                <span className={styles.paginaNumero}>2</span>
                <span className={styles.paginaNumero}>3</span>
                <span className={styles.paginaPuntos}>...</span>
                <span className={styles.paginaNumero}>8</span>
              </div>
              <button className={styles.paginaButton}>
                Siguiente →
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className={`${styles.newsletter} section-padding`}>
          <div className="container">
            <div className={styles.newsletterContent}>
              <div className={styles.newsletterText}>
                <h2 className={styles.newsletterTitle}>
                  Suscríbete a Nuestro Newsletter
                </h2>
                <p className={styles.newsletterSubtitle}>
                  Recibe artículos exclusivos, actualizaciones normativas y consejos 
                  prácticos directamente en tu correo.
                </p>
              </div>
              
              <form className={styles.newsletterForm}>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className={styles.newsletterInput}
                    required
                  />
                  <button type="submit" className={styles.newsletterButton}>
                    Suscribirse
                  </button>
                </div>
                <p className={styles.newsletterNote}>
                  Sin spam. Puedes darte de baja en cualquier momento.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                ¿Necesitas asesoría personalizada?
              </h2>
              <p className={styles.ctaSubtitle}>
                Nuestros expertos están listos para ayudarte con soluciones específicas para tu empresa
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contacto" className="btn btn-primary">
                  Solicitar Asesoría
                </Link>
                <Link href="/servicios" className="btn btn-outline">
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}