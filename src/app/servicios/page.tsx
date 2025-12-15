import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './servicios.module.css';
import Link from 'next/link';
import { services } from '@/data/services';

export const metadata = {
  title: 'Servicios - Ramírez y Asesores SAS | Outsourcing Contable Medellín',
  description: 'Servicios profesionales de outsourcing contable, revisoría fiscal, auditoría, asesoría aduanera y consultoría tributaria en Medellín.',
  keywords: 'servicios contables Medellín, outsourcing contable, revisoría fiscal, auditoría financiera, asesoría aduanera, consultoría tributaria',
};

export default function Servicios() {
  // Transformar los servicios para incluir campos adicionales necesarios
  const servicios = services.map(service => ({
    id: service.id,
    icon: service.icon,
    title: service.title,
    shortDesc: service.description.substring(0, 100) + '...',
    fullDesc: service.description,
    features: service.features,
    benefits: service.benefits,
    image: service.image
  }));

  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Nuestros <span className={styles.highlight}>Servicios</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Soluciones integrales y personalizadas para el crecimiento y cumplimiento de tu empresa en Medellín
              </p>
            </div>
          </div>
        </section>

        {/* Servicios Grid */}
        <section className={`${styles.servicesGridSection} section-padding`}>
          <div className="container">
            <div className="text-center">
              <h2 className={styles.sectionTitle}>
                Servicios <span className={styles.highlight}>Profesionales</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Más de 15 años de experiencia respaldan nuestra calidad y compromiso
              </p>
            </div>
            
            <div className={styles.servicesContainer}>
              {servicios.map((servicio, index) => (
                <div 
                  key={servicio.id} 
                  className={`card ${styles.serviceCard} ${
                    index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
                  }`}
                >
                  <div className={styles.serviceHeader}>
                    <div className={styles.serviceImage}>
                      <img 
                        src={servicio.image} 
                        alt={servicio.title}
                        className={styles.servicePhoto}
                      />
                    </div>
                    <div className={styles.serviceIcon}>{servicio.icon}</div>
                    <h3 className={styles.serviceTitle}>{servicio.title}</h3>
                    <p className={styles.serviceShortDesc}>{servicio.shortDesc}</p>
                  </div>
                  
                  <div className={styles.serviceBody}>
                    <p className={styles.serviceFullDesc}>{servicio.fullDesc}</p>
                    
                    <div className={styles.featuresSection}>
                      <h4 className={styles.featuresTitle}>¿Qué incluye?</h4>
                      <ul className={styles.featuresList}>
                        {servicio.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.benefitsSection}>
                      <h4 className={styles.benefitsTitle}>Beneficios</h4>
                      <ul className={styles.benefitsList}>
                        {servicio.benefits.map((benefit, idx) => (
                          <li key={idx}>
                            <span className={styles.benefitIcon}>✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.serviceFooter}>
                    <Link 
                      href={`/servicios/${servicio.id}`} 
                      className={`btn btn-primary ${styles.serviceButton}`}
                    >
                      Más Información
                    </Link>
                    <Link 
                      href="/contacto" 
                      className={`btn btn-outline ${styles.contactButton}`}
                    >
                      Solicitar Cotización
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios Especializados */}
        <section className={`${styles.specialServices} section-padding`}>
          <div className="container">
            <div className={styles.specialContent}>
              <h2 className={styles.sectionTitle}>Servicios Especializados</h2>
              <p className={styles.specialDescription}>
                También ofrecemos servicios especializados según tus necesidades específicas
              </p>
              
              <div className={styles.specialGrid}>
                <div className={styles.specialItem}>
                  <h4>Apertura de Empresas</h4>
                  <p>Acompañamiento en apertura y estructuración contable inicial</p>
                </div>
                
                <div className={styles.specialItem}>
                  <h4>Recuperación Contable</h4>
                  <p>Recuperación y organización de contabilidades atrasadas</p>
                </div>
                
                <div className={styles.specialItem}>
                  <h4>Preparación para Visitas</h4>
                  <p>Preparación para visitas de DIAN, SuperSociedades, UGPP</p>
                </div>
                
                <div className={styles.specialItem}>
                  <h4>Consultoría Específica</h4>
                  <p>Servicios personalizados según requerimientos especiales</p>
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
                ¿No encuentras el servicio que necesitas?
              </h2>
              <p className={styles.ctaSubtitle}>
                Contáctanos para una consultoría personalizada y descubre cómo podemos ayudarte
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contacto" className="btn btn-primary">
                  Solicitar Consultoría Personalizada
                </Link>
                <Link href="/preguntas-frecuentes" className="btn btn-outline">
                  Ver Preguntas Frecuentes
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
