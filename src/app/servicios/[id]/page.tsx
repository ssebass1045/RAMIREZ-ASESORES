import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './servicio.module.css';
import Link from 'next/link';
import { services } from '@/data/services';

// Generar parámetros estáticos para exportación
export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

// Datos adicionales para casos de uso y procesos
const serviciosAdicionales = {
  'outsourcing-contable': {
    casosUso: [
      'Empresas en crecimiento que necesitan estructura contable sólida',
      'Pymes que buscan optimizar costos administrativos',
      'Empresas con contabilidades atrasadas',
      'Emprendedores que inician operaciones'
    ],
    proceso: [
      'Diagnóstico inicial gratuito',
      'Plan de trabajo personalizado',
      'Implementación progresiva',
      'Capacitación del equipo',
      'Seguimiento y reportes mensuales'
    ]
  },
  'revisoria-fiscal': {
    casosUso: [
      'Sociedades por acciones obligadas por ley',
      'Empresas con activos superiores a 5.000 salarios mínimos',
      'Compañías que buscan transparencia para inversionistas',
      'Empresas en procesos de financiación'
    ],
    proceso: [
      'Evaluación de obligatoriedad',
      'Designación formal ante cámara de comercio',
      'Plan de revisión anual',
      'Informes periódicos',
      'Acompañamiento en asambleas'
    ]
  },
  'auditoria-financiera': {
    casosUso: [
      'Preparación para solicitud de créditos bancarios',
      'Due diligence para inversionistas',
      'Empresas con cambios de dirección',
      'Verificación de estados financieros anuales'
    ],
    proceso: [
      'Planificación y alcance',
      'Ejecución de pruebas de auditoría',
      'Evaluación de hallazgos',
      'Elaboración de informe',
      'Presentación de resultados'
    ]
  },
  'asesoria-aduanera': {
    casosUso: [
      'Empresas importadoras o exportadoras',
      'Compañías con operaciones internacionales frecuentes',
      'Negocios que inician operaciones de comercio exterior',
      'Empresas con sanciones aduaneras previas'
    ],
    proceso: [
      'Diagnóstico de operaciones aduaneras',
      'Revisión documental completa',
      'Capacitación en procedimientos',
      'Acompañamiento en declaraciones',
      'Soporte en inspecciones'
    ]
  },
  'consultoria-cambiaria': {
    casosUso: [
      'Empresas con endeudamiento externo',
      'Compañías con inversiones internacionales',
      'Negocios que reciben pagos en divisas',
      'Empresas con operaciones de comercio exterior'
    ],
    proceso: [
      'Análisis de operaciones cambiarias',
      'Revisión de registros y declaraciones',
      'Capacitación en normativa cambiaria',
      'Acompañamiento en procesos',
      'Soporte en auditorías'
    ]
  },
  'consultoria-tributaria': {
    casosUso: [
      'Empresas con alta carga tributaria',
      'Compañías en procesos de reestructuración',
      'Negocios con operaciones complejas',
      'Empresas sujetas a auditorías fiscales'
    ],
    proceso: [
      'Diagnóstico tributario',
      'Plan de optimización fiscal',
      'Acompañamiento en declaraciones',
      'Representación ante autoridades',
      'Seguimiento de cambios normativos'
    ]
  },
  'asesoria-financiera': {
    casosUso: [
      'Empresas en fase de expansión',
      'Pymes que buscan optimizar resultados',
      'Compañías con problemas de liquidez',
      'Negocios que planean inversiones importantes'
    ],
    proceso: [
      'Diagnóstico financiero inicial',
      'Definición de objetivos',
      'Elaboración de modelos y proyecciones',
      'Implementación de estrategias',
      'Seguimiento de resultados'
    ]
  },
  'consultoria-empresarial': {
    casosUso: [
      'Empresas con procesos desorganizados',
      'Compañías que implementan NIIF',
      'Negocios con contabilidades atrasadas',
      'Empresas que buscan certificaciones'
    ],
    proceso: [
      'Diagnóstico de cumplimiento',
      'Plan de implementación',
      'Capacitación del equipo',
      'Acompañamiento en cambios',
      'Verificación de resultados'
    ]
  },
  'servicios-especializados': {
    casosUso: [
      'Emprendedores y empresas nuevas',
      'Empresas con saldos a favor o pagos en exceso',
      'Empresas sujetas a fiscalización',
      'Personas naturales con actividad empresarial'
    ],
    proceso: [
      'Evaluación de necesidades específicas',
      'Diseño de solución personalizada',
      'Implementación de estrategias',
      'Capacitación y acompañamiento',
      'Seguimiento y ajustes continuos'
    ]
  }
};

export default function ServicioPage({ params }: { params: { id: string } }) {
  const servicioId = params.id;
  
  // Buscar el servicio en los datos importados
  const servicioBase = services.find(s => s.id === servicioId);
  
  if (!servicioBase) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <section className={styles.notFound}>
            <div className="container">
              <div className={styles.notFoundContent}>
                <h1>Servicio no encontrado</h1>
                <p>El servicio que buscas no existe o ha sido movido.</p>
                <Link href="/servicios" className="btn btn-primary">
                  Ver Todos los Servicios
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

  // Obtener datos adicionales
  const adicionales = serviciosAdicionales[servicioId as keyof typeof serviciosAdicionales] || {
    casosUso: [],
    proceso: []
  };

  // Combinar datos del servicio
  const servicio = {
    ...servicioBase,
    shortDesc: servicioBase.description.substring(0, 100) + '...',
    casosUso: adicionales.casosUso,
    proceso: adicionales.proceso
  };
  
  if (!servicio) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <section className={styles.notFound}>
            <div className="container">
              <div className={styles.notFoundContent}>
                <h1>Servicio no encontrado</h1>
                <p>El servicio que buscas no existe o ha sido movido.</p>
                <Link href="/servicios" className="btn btn-primary">
                  Ver Todos los Servicios
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
              <div className={styles.heroImageContainer}>
                <img 
                  src={servicio.image} 
                  alt={servicio.title}
                  className={styles.heroImage}
                />
                <div className={styles.heroIcon}>{servicio.icon}</div>
              </div>
              <h1 className={styles.heroTitle}>{servicio.title}</h1>
              <p className={styles.heroSubtitle}>{servicio.shortDesc}</p>
              <div className={styles.heroButtons}>
                <Link href="/contacto" className="btn btn-primary">
                  Solicitar Este Servicio
                </Link>
                <Link href="/servicios" className="btn btn-outline">
                  Ver Todos los Servicios
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Descripción Detallada */}
        <section className={`${styles.description} section-padding`}>
          <div className="container">
            <div className={styles.descriptionContent}>
              <h2 className={styles.sectionTitle}>Descripción del Servicio</h2>
              <p className={styles.fullDescription}>{servicio.description}</p>
            </div>
          </div>
        </section>

        {/* Características */}
        <section className={`${styles.features} section-padding`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>¿Qué incluye este servicio?</h2>
            <div className={styles.featuresGrid}>
              {servicio.features.map((feature, index) => (
                <div key={index} className={`card ${styles.featureCard}`}>
                  <span className={styles.featureIcon}>✓</span>
                  <p className={styles.featureText}>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className={`${styles.benefits} section-padding`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Beneficios Principales</h2>
            <div className={styles.benefitsGrid}>
              {servicio.benefits.map((benefit, index) => (
                <div key={index} className={`card ${styles.benefitCard}`}>
                  <h3 className={styles.benefitTitle}>Beneficio {index + 1}</h3>
                  <p className={styles.benefitText}>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Uso */}
        {servicio.casosUso && (
          <section className={`${styles.useCases} section-padding`}>
            <div className="container">
              <h2 className={styles.sectionTitle}>¿Para quién es ideal?</h2>
              <div className={styles.useCasesList}>
                {servicio.casosUso.map((caso, index) => (
                  <div key={index} className={styles.useCaseItem}>
                    <span className={styles.useCaseNumber}>{index + 1}</span>
                    <p className={styles.useCaseText}>{caso}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Proceso */}
        {servicio.proceso && (
          <section className={`${styles.process} section-padding`}>
            <div className="container">
              <h2 className={styles.sectionTitle}>Nuestro Proceso</h2>
              <div className={styles.processSteps}>
                {servicio.proceso.map((paso, index) => (
                  <div key={index} className={styles.processStep}>
                    <div className={styles.stepNumber}>{index + 1}</div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>Paso {index + 1}</h3>
                      <p className={styles.stepDescription}>{paso}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
                            <h2 className={styles.ctaTitle}>
                ¿Listo para implementar {servicio.title} en tu empresa?
              </h2>
              <p className={styles.ctaSubtitle}>
                Agenda una consultoría gratuita y descubre cómo podemos ayudarte
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contacto" className="btn btn-primary">
                  Solicitar Consultoría Gratuita
                </Link>
                <Link href="/servicios" className="btn btn-outline">
                  Ver Otros Servicios
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Otros Servicios */}
        <section className={`${styles.otherServices} section-padding`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Otros Servicios que te pueden interesar</h2>
            <div className={styles.servicesGrid}>
              {services
                .filter(s => s.id !== servicioId)
                .slice(0, 3)
                .map((otroServicio) => (
                  <Link 
                    key={otroServicio.id} 
                    href={`/servicios/${otroServicio.id}`}
                    className={`card ${styles.serviceCard}`}
                  >
                    <div className={styles.serviceImageContainer}>
                      <img 
                        src={otroServicio.image} 
                        alt={otroServicio.title}
                        className={styles.serviceImage}
                      />
                      <div className={styles.serviceIcon}>{otroServicio.icon}</div>
                    </div>
                    <h3 className={styles.serviceTitle}>{otroServicio.title}</h3>
                    <p className={styles.serviceDesc}>{otroServicio.description.substring(0, 100)}...</p>
                    <span className={styles.serviceLink}>Ver detalles →</span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}