'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './articulo.module.css';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

// Función para formatear fecha
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Función para obtener el nombre del autor
const getAuthorName = (author: string) => {
  const authorMap: Record<string, { name: string, role: string }> = {
    'Néstor Ramírez': { name: 'Néstor Ramírez', role: 'Gerente - Especialista en Outsourcing Contable' },
    'María Fernanda Callejas': { name: 'María Fernanda Callejas', role: 'Auditora y Revisora Fiscal' },
    'Paula Montoya': { name: 'Paula Montoya', role: 'Coordinadora de Contabilidad' },
    'Viviana Vargas': { name: 'Viviana Vargas', role: 'Coordinadora Administrativa y Gestión Humana' }
  };
  
  return authorMap[author] || { name: author, role: 'Experto en Contabilidad y Finanzas' };
};

export default function ArticuloPage() {
  const params = useParams();
  const articuloId = params.id as string;
  
  const articulo = blogPosts.find(a => a.id === articuloId);
  
  if (!articulo) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <section className={styles.notFound}>
            <div className="container">
              <div className={styles.notFoundContent}>
                <h1>Artículo no encontrado</h1>
                <p>El artículo que buscas no existe o ha sido movido.</p>
                <Link href="/blog" className="btn btn-primary">
                  Volver al Blog
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroMeta}>
                <span className={styles.categoria}>{articulo.category}</span>
                <span className={styles.fecha}>{formatDate(articulo.date)}</span>
                <span className={styles.tiempoLectura}>{articulo.readTime} lectura</span>
              </div>
              <h1 className={styles.heroTitle}>{articulo.title}</h1>
              <p className={styles.heroDescripcion}>{articulo.excerpt}</p>
              <div className={styles.heroAuthor}>
                <div className={styles.authorInfo}>
                  <div className={styles.authorAvatar}>
                    {getAuthorName(articulo.author).name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className={styles.authorName}>{getAuthorName(articulo.author).name}</p>
                    <p className={styles.authorRole}>{getAuthorName(articulo.author).role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido del Artículo */}
        <section className={`${styles.contenido} section-padding`}>
          <div className="container">
            <div className={styles.contenidoWrapper}>
              <div className={styles.contenidoPrincipal}>
                <div 
                  className={styles.articuloContenido}
                  dangerouslySetInnerHTML={{ __html: articulo.content }}
                />
                
                {/* Compartir */}
                <div className={styles.compartir}>
                  <h3>Comparte este artículo</h3>
                  <div className={styles.compartirRedes}>
                    <button className={styles.compartirBoton}>Facebook</button>
                    <button className={styles.compartirBoton}>Twitter</button>
                    <button className={styles.compartirBoton}>LinkedIn</button>
                    <button className={styles.compartirBoton}>WhatsApp</button>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={`card ${styles.sidebarCard}`}>
                  <h3 className={styles.sidebarTitle}>Sobre el Autor</h3>
                  <div className={styles.authorBio}>
                    <div className={styles.authorAvatar}>RA</div>
                    <div>
                      <h4>Ramírez y Asesores SAS</h4>
                      <p>Firma contable con más de 15 años de experiencia en Medellín, especializada en outsourcing contable, revisoría fiscal, auditoría y consultoría tributaria.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`card ${styles.sidebarCard}`}>
                  <h3 className={styles.sidebarTitle}>Artículos Relacionados</h3>
                  <div className={styles.articulosRelacionados}>
                    {blogPosts
                      .filter(a => a.id !== articuloId && a.category === articulo.category)
                      .slice(0, 3)
                      .map((relacionado) => (
                        <Link 
                          key={relacionado.id} 
                          href={`/blog/${relacionado.id}`}
                          className={styles.articuloRelacionado}
                        >
                          <h4>{relacionado.title}</h4>
                          <p>{relacionado.excerpt.substring(0, 100)}...</p>
                        </Link>
                      ))}
                  </div>
                </div>
                
                <div className={`card ${styles.sidebarCard}`}>
                  <h3 className={styles.sidebarTitle}>Categorías</h3>
                  <div className={styles.categoriasList}>
                    {Array.from(new Set(blogPosts.map(post => post.category))).map((categoria) => (
                      <Link 
                        key={categoria} 
                        href={`/blog`}
                        className={styles.categoriaLink}
                      >
                        {categoria}
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                ¿Necesitas asesoría personalizada sobre {articulo.category.toLowerCase()}?
              </h2>
              <p className={styles.ctaSubtitle}>
                Nuestros expertos están listos para ayudarte con soluciones específicas para tu empresa
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contacto" className="btn btn-primary">
                  Solicitar Asesoría Gratuita
                </Link>
                <Link href="/blog" className="btn btn-outline">
                  Ver Más Artículos
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
