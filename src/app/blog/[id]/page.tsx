'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './articulo.module.css';
import Link from 'next/link';

// Datos de todos los artículos (deberían venir de una API o CMS en producción)
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
    contenido: `
      <h2>Introducción</h2>
      <p>El outsourcing contable se ha convertido en una estrategia clave para las PYMES en Medellín que buscan optimizar recursos, reducir costos y mejorar la eficiencia operativa. En un mercado tan competitivo como el antioqueño, contar con un equipo de expertos en contabilidad puede marcar la diferencia en el crecimiento y sostenibilidad de tu empresa.</p>
      
      <h2>1. Reducción de Costos Operativos</h2>
      <p>Una de las principales ventajas del outsourcing contable es la significativa reducción de costos. Al externalizar los servicios contables, eliminas los gastos asociados con:</p>
      <ul>
        <li>Salarios y prestaciones sociales de personal contable</li>
        <li>Capacitación y actualización constante del equipo</li>
        <li>Licencias de software especializado</li>
        <li>Espacio físico y equipos de oficina</li>
      </ul>
      
      <h2>2. Acceso a Expertos Especializados</h2>
      <p>Con el outsourcing contable, tu empresa tiene acceso a un equipo multidisciplinario de profesionales con experiencia en diferentes áreas:</p>
      <ul>
        <li>Contadores públicos certificados</li>
        <li>Especialistas en normativa NIIF</li>
        <li>Expertos en tributación colombiana</li>
        <li>Consultores en procesos administrativos</li>
      </ul>
      
      <h2>3. Información Contable Precisa y Oportuna</h2>
      <p>Un servicio de outsourcing contable profesional garantiza:</p>
      <ul>
        <li>Registros contables actualizados diariamente</li>
        <li>Estados financieros precisos y oportunos</li>
        <li>Reportes gerenciales personalizados</li>
        <li>Alertas tempranas sobre situaciones financieras críticas</li>
      </ul>
      
      <h2>4. Cumplimiento Normativo Garantizado</h2>
      <p>En Ramírez y Asesores SAS nos mantenemos actualizados con:</p>
      <ul>
        <li>Cambios en la normativa tributaria colombiana</li>
        <li>Actualizaciones en NIIF y normas contables</li>
        <li>Requerimientos de la DIAN y otras entidades de control</li>
        <li>Obligaciones laborales y de seguridad social</li>
      </ul>
      
      <h2>5. Enfoque en el Core Business</h2>
      <p>Al delegar la gestión contable a expertos, tu equipo puede concentrarse en:</p>
      <ul>
        <li>Desarrollo del negocio principal</li>
        <li>Atención al cliente y ventas</li>
        <li>Innovación y mejora de productos/servicios</li>
        <li>Estrategias de crecimiento y expansión</li>
      </ul>
      
      <h2>Conclusión</h2>
      <p>El outsourcing contable representa una solución estratégica para las PYMES de Medellín que buscan optimizar sus recursos, garantizar el cumplimiento normativo y enfocarse en su crecimiento empresarial. En Ramírez y Asesores SAS contamos con más de 15 años de experiencia acompañando a empresas antioqueñas en su desarrollo financiero y contable.</p>
    `
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
    contenido: 'Contenido del artículo sobre normativa tributaria...'
  },
  // ... agregar los demás artículos con su contenido completo
];

export default function ArticuloPage() {
  const params = useParams();
  const articuloId = params.id as string;
  
  const articulo = articulos.find(a => a.id === articuloId);
  
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
                <span className={styles.categoria}>{articulo.categoria}</span>
                <span className={styles.fecha}>{articulo.fecha}</span>
                <span className={styles.tiempoLectura}>{articulo.tiempoLectura} lectura</span>
              </div>
              <h1 className={styles.heroTitle}>{articulo.titulo}</h1>
              <p className={styles.heroDescripcion}>{articulo.descripcion}</p>
              <div className={styles.heroAuthor}>
                <div className={styles.authorInfo}>
                  <div className={styles.authorAvatar}>RA</div>
                  <div>
                    <p className={styles.authorName}>Equipo Ramírez y Asesores SAS</p>
                    <p className={styles.authorRole}>Expertos en Contabilidad y Finanzas</p>
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
                  dangerouslySetInnerHTML={{ __html: articulo.contenido }}
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
                    {articulos
                      .filter(a => a.id !== articuloId && a.categoria === articulo.categoria)
                      .slice(0, 3)
                      .map((relacionado) => (
                        <Link 
                          key={relacionado.id} 
                          href={`/blog/${relacionado.id}`}
                          className={styles.articuloRelacionado}
                        >
                          <h4>{relacionado.titulo}</h4>
                          <p>{relacionado.descripcion.substring(0, 100)}...</p>
                        </Link>
                      ))}
                  </div>
                </div>
                
                <div className={`card ${styles.sidebarCard}`}>
                  <h3 className={styles.sidebarTitle}>Categorías</h3>
                  <div className={styles.categoriasList}>
                    {['Outsourcing Contable', 'Revisoría Fiscal', 'Auditoría', 'Consultoría Tributaria', 'Asesoría Aduanera', 'Asesoría Financiera'].map((categoria) => (
                      <Link 
                        key={categoria} 
                        href={`/blog?categoria=${categoria}`}
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
                ¿Necesitas asesoría personalizada sobre {articulo.categoria.toLowerCase()}?
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