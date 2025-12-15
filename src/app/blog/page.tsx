'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './blog.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { blogPosts, BlogPost } from '@/data/blog';

// Extraer categorías únicas de los artículos
const categoriasUnicas = ['Todos', ...Array.from(new Set(blogPosts.map(post => post.category)))];

// Función para formatear fecha
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function Blog() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [paginaActual, setPaginaActual] = useState(1);
  const articulosPorPagina = 6;

  // Filtrar artículos por categoría
  const articulosFiltrados = categoriaSeleccionada === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(articulo => articulo.category === categoriaSeleccionada);

  // Obtener artículos destacados
  const articulosDestacados = blogPosts.filter(art => art.featured);

  // Calcular paginación
  const totalPaginas = Math.ceil(articulosFiltrados.length / articulosPorPagina);
  const inicio = (paginaActual - 1) * articulosPorPagina;
  const fin = inicio + articulosPorPagina;
  const articulosPagina = articulosFiltrados.slice(inicio, fin);

  // Manejar cambio de categoría
  const handleCategoriaClick = (categoria: string) => {
    setCategoriaSeleccionada(categoria);
    setPaginaActual(1); // Resetear a primera página al cambiar categoría
  };

  // Manejar cambio de página
  const handlePaginaClick = (pagina: number) => {
    setPaginaActual(pagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                      <img 
                        src={articulo.image} 
                        alt={articulo.title}
                        className={styles.blogPhoto}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div className={styles.destacadoBadge}>Destacado</div>
                    </div>
                    
                    <div className={styles.destacadoContent}>
                      <div className={styles.articuloMeta}>
                        <span className={styles.articuloCategoria}>{articulo.category}</span>
                        <span className={styles.articuloFecha}>{formatDate(articulo.date)}</span>
                        <span className={styles.articuloTiempo}>{articulo.readTime} lectura</span>
                      </div>
                      
                      <h3 className={styles.articuloTitle}>
                        <Link href={`/blog/${articulo.id}`}>
                          {articulo.title}
                        </Link>
                      </h3>
                      
                      <p className={styles.articuloDescripcion}>
                        {articulo.excerpt}
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
                {categoriasUnicas.map((categoria) => (
                  <button
                    key={categoria}
                    className={`${styles.categoriaButton} ${
                      categoriaSeleccionada === categoria ? styles.categoriaActiva : ''
                    }`}
                    onClick={() => handleCategoriaClick(categoria)}
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
              <h2 className={styles.gridTitle}>
                {categoriaSeleccionada === 'Todos' ? 'Artículos Recientes' : `Artículos de ${categoriaSeleccionada}`}
              </h2>
              <p className={styles.gridSubtitle}>
                {articulosFiltrados.length} artículo{articulosFiltrados.length !== 1 ? 's' : ''} encontrado{articulosFiltrados.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            {articulosPagina.length > 0 ? (
              <>
                <div className={styles.articulosContainer}>
                  {articulosPagina.map((articulo, index) => (
                    <article 
                      key={articulo.id} 
                      className={`card ${styles.articuloCard} fade-in-up`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={styles.articuloImage}>
                        <img 
                          src={articulo.image} 
                          alt={articulo.title}
                          className={styles.blogPhoto}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      
                      <div className={styles.articuloContent}>
                        <div className={styles.articuloMeta}>
                          <span className={styles.articuloCategoria}>{articulo.category}</span>
                          <span className={styles.articuloFecha}>{formatDate(articulo.date)}</span>
                        </div>
                        
                        <h3 className={styles.articuloTitle}>
                          <Link href={`/blog/${articulo.id}`}>
                            {articulo.title}
                          </Link>
                        </h3>
                        
                        <p className={styles.articuloDescripcion}>
                          {articulo.excerpt}
                        </p>
                        
                        <div className={styles.articuloFooter}>
                          <span className={styles.articuloTiempo}>{articulo.readTime} lectura</span>
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
                {totalPaginas > 1 && (
                  <div className={styles.paginacion}>
                    <button 
                      className={styles.paginaButton} 
                      onClick={() => handlePaginaClick(paginaActual - 1)}
                      disabled={paginaActual === 1}
                    >
                      ← Anterior
                    </button>
                    <div className={styles.paginaNumeros}>
                      {Array.from({ length: Math.min(5, totalPaginas) }, (_, i) => {
                        let paginaNumero;
                        if (totalPaginas <= 5) {
                          paginaNumero = i + 1;
                        } else if (paginaActual <= 3) {
                          paginaNumero = i + 1;
                        } else if (paginaActual >= totalPaginas - 2) {
                          paginaNumero = totalPaginas - 4 + i;
                        } else {
                          paginaNumero = paginaActual - 2 + i;
                        }
                        
                        return (
                          <span 
                            key={paginaNumero}
                            className={`${styles.paginaNumero} ${paginaActual === paginaNumero ? styles.activo : ''}`}
                            onClick={() => handlePaginaClick(paginaNumero)}
                          >
                            {paginaNumero}
                          </span>
                        );
                      })}
                      {totalPaginas > 5 && paginaActual < totalPaginas - 2 && (
                        <>
                          <span className={styles.paginaPuntos}>...</span>
                          <span 
                            className={styles.paginaNumero}
                            onClick={() => handlePaginaClick(totalPaginas)}
                          >
                            {totalPaginas}
                          </span>
                        </>
                      )}
                    </div>
                    <button 
                      className={styles.paginaButton} 
                      onClick={() => handlePaginaClick(paginaActual + 1)}
                      disabled={paginaActual === totalPaginas}
                    >
                      Siguiente →
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className={styles.sinResultados}>
                <p>No se encontraron artículos en la categoría "{categoriaSeleccionada}".</p>
                <button 
                  className={styles.categoriaButton}
                  onClick={() => handleCategoriaClick('Todos')}
                >
                  Ver todos los artículos
                </button>
              </div>
            )}
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
