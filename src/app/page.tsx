'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import VideoCarousel from '@/components/Hero/VideoCarousel';
import TeamCarousel from '@/components/Team/TeamCarousel';
import styles from './page.module.css';
import Link from 'next/link';
import { services } from '@/data/services';
import Contacto from './contacto/page';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {/* Hero Section Mejorada con Video Carousel */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              {/* Columna izquierda: Información con gradiente */}
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
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>Cumplimiento</span>
                  </div>
                </div>
              </div>
              
              {/* Columna derecha: Video Carousel */}
              <div className={styles.heroVideo}>
                <VideoCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Todos los Servicios */}
        <section className={`${styles.allServices} section-padding`}>
          <div className="container">
            <div className="text-center">
              <h2 className={styles.sectionTitle}>
                Nuestros <span className={styles.highlight}>Servicios</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Soluciones integrales para el crecimiento y cumplimiento de tu empresa
              </p>
            </div>
            
            <div className={styles.allServicesGrid}>
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`card ${styles.serviceCard} hover-lift`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.serviceImage}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className={styles.servicePhoto}
                    />
                  </div>
                  <div className={styles.serviceContent}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className={styles.serviceFeatures}>
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className={styles.featureItem}>
                          <span className={styles.featureIcon}>✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={`/servicios/${service.id}`} className={styles.serviceLink}>
                      Conocer más →
                    </Link>
                  </div>
                </div>
              ))}
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
                <img 
                  src="/home/equipo-trabajo.jpg" 
                  alt="Equipo de trabajo de Ramírez y Asesores SAS"
                  className={styles.whyUsPhoto}
                />
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


        {/* Sección de Equipo Destacado - Reemplazada por Team Carousel */}
        <section className={`${styles.teamSection} section-padding`}>
          <div className="container">
            <TeamCarousel />
          </div>
        </section>

        {/* Sección de Preguntas Frecuentes Destacadas */}
        <section className={`${styles.faqSection} section-padding`}>
          <div className="container">
            <div className="text-center">
              <h2 className={styles.sectionTitle}>
                Preguntas <span className={styles.highlight}>Frecuentes</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Respuestas a las consultas más comunes sobre nuestros servicios
              </p>
            </div>
            
            <div className={styles.faqGrid}>
              <div className={`card ${styles.faqCard}`}>
                <h3>¿Qué es el outsourcing contable?</h3>
                <p>Es la externalización de la gestión contable de tu empresa a un equipo de expertos, permitiéndote enfocarte en el crecimiento del negocio mientras garantizamos el cumplimiento normativo.</p>
              </div>
              
              <div className={`card ${styles.faqCard}`}>
                <h3>¿Cuándo es obligatoria la revisoría fiscal?</h3>
                <p>Es obligatoria para sociedades por acciones cuando sus activos brutos superan los 5.000 salarios mínimos legales mensuales vigentes.</p>
              </div>
              
              <div className={`card ${styles.faqCard}`}>
                <h3>¿Qué ventajas tiene contratar sus servicios?</h3>
                <p>Ahorro de costos, acceso a equipo experto, reducción de riesgos tributarios, información contable precisa y cumplimiento normativo garantizado.</p>
              </div>
              
              <div className={`card ${styles.faqCard}`}>
                <h3>¿Trabajan con empresas de todos los tamaños?</h3>
                <p>Sí, atendemos desde emprendimientos hasta grandes corporaciones, adaptando nuestros servicios a las necesidades específicas de cada cliente.</p>
              </div>
            </div>
            
            <div className={styles.faqCta}>
              <Link href="/preguntas-frecuentes" className="btn btn-outline">
                Ver Todas las Preguntas
              </Link>
            </div>
          </div>
        </section>

        {/* Sección de Blog Destacado */}
        <section className={`${styles.blogSection} section-padding`}>
          <div className="container">
            <div className="text-center">
              <h2 className={styles.sectionTitle}>
                Blog <span className={styles.highlight}>Especializado</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Artículos y guías sobre contabilidad, finanzas y normatividad para tu empresa
              </p>
            </div>
            
            <div className={styles.blogGrid}>
              <div className={`card ${styles.blogCard}`}>
                <div className={styles.blogImage}>
                  <img 
                    src="/blog/outsourcing-pymes.jpg" 
                    alt="5 Beneficios del Outsourcing Contable para PYMES en Medellín"
                    className={styles.blogPhoto}
                  />
                </div>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogCategory}>Outsourcing Contable</span>
                    <span className={styles.blogDate}>15 Ene 2024</span>
                  </div>
                  <h3>5 Beneficios del Outsourcing Contable para PYMES en Medellín</h3>
                  <p>Descubre cómo el outsourcing contable puede optimizar costos y mejorar la eficiencia en tu empresa medellinense.</p>
                  <div className={styles.blogFooter}>
                    <span className={styles.blogAuthor}>Por: Néstor Ramírez</span>
                    <Link href="/blog/beneficios-outsourcing-contable-pymes-medellin" className={styles.blogLink}>
                      Leer más →
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className={`card ${styles.blogCard}`}>
                <div className={styles.blogImage}>
                  <img 
                    src="/blog/normativa-tributaria.jpg" 
                    alt="Novedades en Normativa Tributaria y Laboral 2025 en Colombia"
                    className={styles.blogPhoto}
                  />
                </div>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogCategory}>Actualidad Tributaria</span>
                    <span className={styles.blogDate}>10 Ene 2025</span>
                  </div>
                  <h3>Novedades en Normativa Tributaria y Laboral 2025 en Colombia</h3>
                  <p>Guía esencial sobre la UVT 2025, reducción de jornada laboral y cambios en facturación electrónica para este año.</p>
                  <div className={styles.blogFooter}>
                    <span className={styles.blogAuthor}>Por: María Fernanda Callejas</span>
                    <Link href="/blog/novedades-normativa-tributaria-2025-colombia" className={styles.blogLink}>
                      Leer más →
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className={`card ${styles.blogCard}`}>
                <div className={styles.blogImage}>
                  <img 
                    src="/blog/revisoria-preventiva.jpg" 
                    alt="Ventajas de una Revisoría Fiscal Preventiva para tu Empresa"
                    className={styles.blogPhoto}
                  />
                </div>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogCategory}>Revisoría Fiscal</span>
                    <span className={styles.blogDate}>20 Feb 2025</span>
                  </div>
                  <h3>Ventajas de una Revisoría Fiscal Preventiva para tu Empresa</h3>
                  <p>Cómo una revisoría fiscal preventiva puede proteger los intereses de tu empresa en Medellín.</p>
                  <div className={styles.blogFooter}>
                    <span className={styles.blogAuthor}>Por: Viviana Vargas</span>
                    <Link href="/blog/ventajas-revisoria-fiscal-preventiva" className={styles.blogLink}>
                      Leer más →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.blogCta}>
              <Link href="/blog" className="btn btn-primary">
                Ver Todos los Artículos
              </Link>
            </div>
          </div>
        </section>

        <Contacto></Contacto>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
