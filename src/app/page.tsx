'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import VideoCarousel from '@/components/Hero/VideoCarousel';
import TeamCarousel from '@/components/Team/TeamCarousel';
import ScrollReveal from '@/components/common/ScrollReveal';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import TypeWriter from '@/components/common/TypeWriter';
import PageTransition from '@/components/common/PageTransition';
import styles from './page.module.css';
import Link from 'next/link';
import { services } from '@/data/services';
import Contacto from './contacto/page';

export default function Home() {
  return (
    <>
      <Header />
      <PageTransition>
      <main className={styles.main}>
        
        {/* Hero Section Mejorada con Video Carousel */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              {/* Columna izquierda: Información con gradiente */}
              <div className={styles.heroText}>
                <h1 className={`${styles.heroTitle} fade-in-up`}>
                  Expertos en{' '}
                  <span className={styles.highlight}>
                    <TypeWriter 
                      words={[
                        'Outsourcing Contable',
                        'Revisoría Fiscal',
                        'Auditoría Financiera',
                        'Asesoría Aduanera',
                        'Consultoría Cambiaria',
                        'Consultoría Tributaria',
                      ]}
                      typingSpeed={80}
                      deletingSpeed={40}
                      pauseTime={2500}
                    />
                  </span>
                </h1>
                <div className={`${styles.heroSubtitle} fade-in-up`}>
                  <ul>
                    <li>✅ Contabilidad por Outsourcing.</li>
                    <li>✅ Revisoría Fiscal.</li>
                    <li>✅ Auditoría Financiera.</li>
                    <li>✅ Aduanera.</li>
                    <li>✅ Cambiaria</li>
                  </ul>
                </div>
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
                    <AnimatedCounter end={20} suffix="+" className={styles.statNumber} />
                    <span className={styles.statLabel}>Años de Experiencia</span>
                  </div>
                  <div className={styles.stat}>
                    <AnimatedCounter end={500} suffix="+" className={styles.statNumber} />
                    <span className={styles.statLabel}>Clientes Satisfechos</span>
                  </div>
                  <div className={styles.stat}>
                    <AnimatedCounter end={100} suffix="%" className={styles.statNumber} />
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
            <ScrollReveal animation="fade-up">
              <div className="text-center">
                <h2 className={styles.sectionTitle}>
                  Nuestros <span className={styles.highlight}>Servicios</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                  Soluciones integrales para el crecimiento y cumplimiento de tu empresa
                </p>
              </div>
            </ScrollReveal>
            
            <div className={styles.allServicesGrid}>
              {services.map((service, index) => (
                <ScrollReveal 
                  key={service.id} 
                  animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                  delay={index * 100}
                >
                  <div 
                    className={`card ${styles.serviceCard} hover-lift`}
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Por Qué Elegirnos */}
        <section className={`${styles.whyUs} section-padding`}>
          <div className="container">
            <div className={styles.whyUsContent}>
              <ScrollReveal animation="fade-right">
                <div className={styles.whyUsText}>
                  <h2 className={styles.sectionTitle}>
                    ¿Por qué elegir <span className={styles.highlight}>Ramírez Asesores</span>?
                  </h2>
                  <p className={styles.whyUsDescription}>
                    Más de 15 años de experiencia nos respaldan. Somos tu aliado estratégico 
                    en el crecimiento empresarial con servicios de alta calidad y compromiso.
                  </p>
                  
                  <div className={styles.benefitsList}>
                    {[
                      { title: 'Equipo Altamente Calificado', desc: 'Profesionales especializados en cada área de servicio' },
                      { title: 'Tecnología y Procesos Optimizados', desc: 'Utilizamos las mejores herramientas para eficiencia y precisión' },
                      { title: 'Enfoque en Medellín y Antioquia', desc: 'Conocemos el mercado local y sus particularidades' },
                      { title: 'Resultados Comprobados', desc: '98% de cumplimiento en entregas y satisfacción del cliente' },
                    ].map((benefit, i) => (
                      <ScrollReveal key={i} animation="fade-up" delay={i * 150}>
                        <div className={styles.benefit}>
                          <span className={styles.benefitIcon}>✓</span>
                          <div>
                            <h4>{benefit.title}</h4>
                            <p>{benefit.desc}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-left">
                <div className={styles.whyUsImage}>
                  <img 
                    src="/home/equipo-trabajo.jpg" 
                    alt="Equipo de trabajo de Ramírez y Asesores SAS"
                    className={styles.whyUsPhoto}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonios / Reseñas de Clientes */}
        <section className={`${styles.testimonialsSection} section-padding`}>
          <div className="container">
            <ScrollReveal animation="fade-up">
              <div className="text-center">
                <h2 className={styles.sectionTitle}>
                  Lo que dicen nuestros <span className={styles.highlight}>Clientes</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                  La confianza de quienes nos eligen es nuestro mayor respaldo
                </p>
              </div>
            </ScrollReveal>

            <div className={styles.testimonialsGrid}>
              {[
                {
                  logo: '/reseña/cliente1.jpeg',
                  name: 'Seven Elephants',
                  text: 'Seven Elephants reconoce y agradece el acompañamiento profesional de Ramírez Asesores en la gestión contable y financiera de nuestra compañía. Su experiencia, compromiso y rigor han sido fundamentales para asegurar procesos claros, oportunos y alineados con las mejores prácticas. Es un equipo que recomendamos con total confianza.',
                  rating: 5,
                },
                {
                  logo: '/reseña/cliente2.jpeg',
                  name: 'AGC Tecnología',
                  text: 'Ramírez Asesores destaca por su profesionalismo y calidez humana. Su equipo siempre está dispuesto a dar un paso más para asegurar que nuestro negocio cumpla con sus metas. Totalmente recomendados por su eficacia.',
                  rating: 5,
                },
                {
                  logo: '/reseña/cliente3.jpeg',
                  name: 'SDP Sueño de Playa',
                  text: 'Para nuestra organización ha sido muy valioso trabajar con Ramírez Asesores. Destacamos su alto nivel de profesionalismo, la solidez técnica de sus recomendaciones y el acompañamiento estratégico brindado en cada etapa del proceso. Su asesoría ha contribuido significativamente a fortalecer nuestra gestión y toma de decisiones.',
                  rating: 5,
                },
                {
                  logo: '/reseña/cliente4.jpeg',
                  name: 'Iluminaciones JV',
                  text: 'La firma Ramírez Asesores es una empresa seria, responsable, con la que llevo más de 15 años donde he sentido el respeto y compromiso para el cliente.',
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 150}>
                  <div className={styles.testimonialCard}>
                    <div className={styles.testimonialStars}>
                      {Array.from({ length: testimonial.rating }).map((_, s) => (
                        <span key={s} className={styles.star}>★</span>
                      ))}
                    </div>
                    <div className={styles.testimonialQuote}>
                      <span className={styles.quoteIcon}>&ldquo;</span>
                      <p>{testimonial.text}</p>
                    </div>
                    <div className={styles.testimonialAuthor}>
                      <div className={styles.testimonialLogo}>
                        <img src={testimonial.logo} alt={testimonial.name} />
                      </div>
                      <div className={styles.testimonialName}>
                        <h4>{testimonial.name}</h4>
                        <span>Cliente verificado</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <ScrollReveal animation="zoom-in">
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
            </ScrollReveal>
          </div>
        </section>

        {/* Sección de Equipo Destacado */}
        <section className={`${styles.teamSection} section-padding`}>
          <div className="container">
            <ScrollReveal animation="fade-up">
              <TeamCarousel />
            </ScrollReveal>
          </div>
        </section>

        {/* Sección de Preguntas Frecuentes Destacadas */}
        <section className={`${styles.faqSection} section-padding`}>
          <div className="container">
            <ScrollReveal animation="fade-up">
              <div className="text-center">
                <h2 className={styles.sectionTitle}>
                  Preguntas <span className={styles.highlight}>Frecuentes</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                  Respuestas a las consultas más comunes sobre nuestros servicios
                </p>
              </div>
            </ScrollReveal>
            
            <div className={styles.faqGrid}>
              {[
                { q: '¿Qué es el outsourcing contable?', a: 'Es la externalización de la gestión contable de tu empresa a un equipo de expertos, permitiéndote enfocarte en el crecimiento del negocio mientras garantizamos el cumplimiento normativo.' },
                { q: '¿Cuándo es obligatoria la revisoría fiscal?', a: 'Es obligatoria para sociedades por acciones cuando sus activos brutos superan los 5.000 salarios mínimos legales mensuales vigentes.' },
                { q: '¿Qué ventajas tiene contratar sus servicios?', a: 'Ahorro de costos, acceso a equipo experto, reducción de riesgos tributarios, información contable precisa y cumplimiento normativo garantizado.' },
                { q: '¿Trabajan con empresas de todos los tamaños?', a: 'Sí, atendemos desde emprendimientos hasta grandes corporaciones, adaptando nuestros servicios a las necesidades específicas de cada cliente.' },
              ].map((faq, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                  <div className={`card ${styles.faqCard}`}>
                    <h3>{faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal animation="fade-up" delay={400}>
              <div className={styles.faqCta}>
                <Link href="/preguntas-frecuentes" className="btn btn-outline">
                  Ver Todas las Preguntas
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Sección de Blog Destacado */}
        <section className={`${styles.blogSection} section-padding`}>
          <div className="container">
            <ScrollReveal animation="fade-up">
              <div className="text-center">
                <h2 className={styles.sectionTitle}>
                  Blog <span className={styles.highlight}>Especializado</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                  Artículos y guías sobre contabilidad, finanzas y normatividad para tu empresa
                </p>
              </div>
            </ScrollReveal>
            
            <div className={styles.blogGrid}>
              {[
                {
                  img: '/blog/outsourcing-pymes.jpg',
                  alt: '5 Beneficios del Outsourcing Contable para PYMES en Medellín',
                  cat: 'Outsourcing Contable',
                  date: '15 Ene 2024',
                  title: '5 Beneficios del Outsourcing Contable para PYMES en Medellín',
                  desc: 'Descubre cómo el outsourcing contable puede optimizar costos y mejorar la eficiencia en tu empresa medellinense.',
                  author: 'Néstor Ramírez',
                  href: '/blog/beneficios-outsourcing-contable-pymes-medellin',
                },
                {
                  img: '/blog/normativa-tributaria.jpg',
                  alt: 'Novedades en Normativa Tributaria y Laboral 2025 en Colombia',
                  cat: 'Actualidad Tributaria',
                  date: '10 Ene 2025',
                  title: 'Novedades en Normativa Tributaria y Laboral 2025 en Colombia',
                  desc: 'Guía esencial sobre la UVT 2025, reducción de jornada laboral y cambios en facturación electrónica para este año.',
                  author: 'María Fernanda Callejas',
                  href: '/blog/novedades-normativa-tributaria-2025-colombia',
                },
                {
                  img: '/blog/revisoria-preventiva.jpg',
                  alt: 'Ventajas de una Revisoría Fiscal Preventiva para tu Empresa',
                  cat: 'Revisoría Fiscal',
                  date: '20 Feb 2025',
                  title: 'Ventajas de una Revisoría Fiscal Preventiva para tu Empresa',
                  desc: 'Cómo una revisoría fiscal preventiva puede proteger los intereses de tu empresa en Medellín.',
                  author: 'Viviana Vargas',
                  href: '/blog/ventajas-revisoria-fiscal-preventiva',
                },
              ].map((blog, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 150}>
                  <div className={`card ${styles.blogCard}`}>
                    <div className={styles.blogImage}>
                      <img src={blog.img} alt={blog.alt} className={styles.blogPhoto} />
                    </div>
                    <div className={styles.blogContent}>
                      <div className={styles.blogMeta}>
                        <span className={styles.blogCategory}>{blog.cat}</span>
                        <span className={styles.blogDate}>{blog.date}</span>
                      </div>
                      <h3>{blog.title}</h3>
                      <p>{blog.desc}</p>
                      <div className={styles.blogFooter}>
                        <span className={styles.blogAuthor}>Por: {blog.author}</span>
                        <Link href={blog.href} className={styles.blogLink}>
                          Leer más →
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal animation="fade-up" delay={400}>
              <div className={styles.blogCta}>
                <Link href="/blog" className="btn btn-primary">
                  Ver Todos los Artículos
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Contacto></Contacto>

      </main>
      </PageTransition>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
