import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1 className={`${styles.heroTitle} fade-in-up`}>
                  Expertos en <span className={styles.highlight}>Outsourcing Contable</span> en Medellín
                </h1>
                <p className={`${styles.heroSubtitle} fade-in-up`}>
                  Más de 15 años acompañando empresas con servicios integrales de contabilidad, 
                  auditoría, revisoría fiscal y asesorías jurídicas en Medellín y Antioquia.
                </p>
                <div className={`${styles.heroButtons} fade-in-up`}>
                  <Link href="/servicios" className="btn btn-primary">
                    Nuestros Servicios
                  </Link>
                  <Link href="/contacto" className="btn btn-outline">
                    Contactar Ahora
                  </Link>
                </div>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>15+</span>
                    <span className={styles.statLabel}>Años de Experiencia</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>Clientes Satisfechos</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>98%</span>
                    <span className={styles.statLabel}>Cumplimiento</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.imagePlaceholder}>
                  {/* Aquí irá una imagen profesional */}
                  <div className={styles.placeholderText}>
                    Imagen Profesional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Destacados */}
        <section className={`${styles.services} section-padding`}>
          <div className="container">
            <div className="text-center">
              <h2 className={styles.sectionTitle}>
                Nuestros <span className={styles.highlight}>Servicios</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Soluciones integrales para el crecimiento y cumplimiento de tu empresa
              </p>
            </div>
            
            <div className={styles.servicesGrid}>
              <div className={`card ${styles.serviceCard} slide-in-left`}>
                <div className={styles.serviceIcon}>📊</div>
                <h3>Outsourcing Contable</h3>
                <p>
                  Gestión contable completa con equipo experto. Registro de operaciones, 
                  nómina, impuestos y estados financieros bajo NIIF.
                </p>
                <Link href="/servicios/outsourcing-contable" className={styles.serviceLink}>
                  Conocer más →
                </Link>
              </div>

              <div className={`card ${styles.serviceCard} fade-in-up`}>
                <div className={styles.serviceIcon}>🔍</div>
                <h3>Revisoría Fiscal</h3>
                <p>
                  Servicio preventivo e independiente para proteger los intereses 
                  de socios e inversionistas frente a entes de control.
                </p>
                <Link href="/servicios/revisoria-fiscal" className={styles.serviceLink}>
                  Conocer más →
                </Link>
              </div>

              <div className={`card ${styles.serviceCard} slide-in-right`}>
                <div className={styles.serviceIcon}>📋</div>
                <h3>Auditoría Financiera</h3>
                <p>
                  Verificación independiente de la información financiera 
                  y evaluación de procesos internos de tu empresa.
                </p>
                <Link href="/servicios/auditoria-financiera" className={styles.serviceLink}>
                  Conocer más →
                </Link>
              </div>
            </div>

            <div className={styles.servicesCta}>
              <Link href="/servicios" className="btn btn-primary">
                Ver Todos los Servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Por Qué Elegirnos */}
        <section className={`${styles.whyUs} section-padding`}>
          <div className="container">
            <div className={styles.whyUsContent}>
              <div className={styles.whyUsText}>
                <h2 className={styles.sectionTitle}>
                  ¿Por qué elegir <span className={styles.highlight}>Ramírez y Asesores</span>?
                </h2>
                <p className={styles.whyUsDescription}>
                  Más de 15 años de experiencia nos respaldan. Somos tu aliado estratégico 
                  en el crecimiento empresarial con servicios de alta calidad y compromiso.
                </p>
                
                <div className={styles.benefitsList}>
                  <div className={styles.benefit}>
                    <span className={styles.benefitIcon}>✓</span>
                    <div>
                      <h4>Equipo Altamente Calificado</h4>
                      <p>Profesionales especializados en cada área de servicio</p>
                    </div>
                  </div>
                  
                  <div className={styles.benefit}>
                    <span className={styles.benefitIcon}>✓</span>
                    <div>
                      <h4>Tecnología y Procesos Optimizados</h4>
                      <p>Utilizamos las mejores herramientas para eficiencia y precisión</p>
                    </div>
                  </div>
                  
                  <div className={styles.benefit}>
                    <span className={styles.benefitIcon}>✓</span>
                    <div>
                      <h4>Enfoque en Medellín y Antioquia</h4>
                      <p>Conocemos el mercado local y sus particularidades</p>
                    </div>
                  </div>
                  
                  <div className={styles.benefit}>
                    <span className={styles.benefitIcon}>✓</span>
                    <div>
                      <h4>Resultados Comprobados</h4>
                      <p>98% de cumplimiento en entregas y satisfacción del cliente</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.whyUsImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>
                    Imagen de Equipo de Trabajo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                ¿Listo para optimizar la gestión de tu empresa?
              </h2>
              <p className={styles.ctaSubtitle}>
                Agenda una consultoría gratuita y descubre cómo podemos ayudarte a crecer
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contacto" className="btn btn-primary">
                  Solicitar Consultoría Gratuita
                </Link>
                <Link href="/nosotros" className="btn btn-outline">
                  Conocer Más Sobre Nosotros
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Navegación Rápida */}
<section className={`${styles.quickNav} section-padding`}>
  <div className="container">
    <div className="text-center">
      <h2 className={styles.sectionTitle}>
        Explora Nuestro <span className={styles.highlight}>Sitio</span>
      </h2>
      <p className={styles.sectionSubtitle}>
        Acceso rápido a todas nuestras secciones
      </p>
    </div>
    
    <div className={styles.quickNavGrid}>
      <Link href="/equipo" className={`card ${styles.quickNavCard}`}>
        <div className={styles.quickNavIcon}>👥</div>
        <h3>Nuestro Equipo</h3>
        <p>Conoce a nuestros profesionales especializados</p>
        <span className={styles.quickNavLink}>Ver Equipo →</span>
      </Link>
      
      <Link href="/preguntas-frecuentes" className={`card ${styles.quickNavCard}`}>
        <div className={styles.quickNavIcon}>❓</div>
        <h3>Preguntas Frecuentes</h3>
        <p>Resuelve tus dudas sobre nuestros servicios</p>
        <span className={styles.quickNavLink}>Ver FAQ →</span>
      </Link>
      
      <Link href="/blog" className={`card ${styles.quickNavCard}`}>
        <div className={styles.quickNavIcon}>📚</div>
        <h3>Blog Especializado</h3>
        <p>Artículos sobre contabilidad y finanzas</p>
        <span className={styles.quickNavLink}>Ver Blog →</span>
      </Link>
      
      <Link href="/servicios" className={`card ${styles.quickNavCard}`}>
        <div className={styles.quickNavIcon}>🛠️</div>
        <h3>Todos los Servicios</h3>
        <p>Descubre nuestra oferta completa</p>
        <span className={styles.quickNavLink}>Ver Servicios →</span>
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