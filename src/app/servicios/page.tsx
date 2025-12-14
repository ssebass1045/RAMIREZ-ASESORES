import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './servicios.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Servicios - Ramírez y Asesores SAS | Outsourcing Contable Medellín',
  description: 'Servicios profesionales de outsourcing contable, revisoría fiscal, auditoría, asesoría aduanera y consultoría tributaria en Medellín.',
  keywords: 'servicios contables Medellín, outsourcing contable, revisoría fiscal, auditoría financiera, asesoría aduanera, consultoría tributaria',
};

export default function Servicios() {
  const servicios = [
    {
      id: 'outsourcing-contable',
      icon: '📊',
      title: 'Outsourcing Contable',
      shortDesc: 'Gestión contable completa con equipo experto',
      fullDesc: 'En Ramírez Asesores SAS contamos con equipo altamente profesional y experimentado en manejo contable alineados rigurosamente con la normativa tributaria aplicada a cada tipo de negocio.',
      features: [
        'Registro y clasificación de operaciones contables diarias',
        'Conciliaciones bancarias, de cartera y de proveedores',
        'Gestión de nómina, prestaciones sociales y seguridad social',
        'Liquidación y presentación de impuestos nacionales y territoriales',
        'Elaboración de estados financieros bajo NIIF',
        'Preparación de reportes gerenciales e indicadores',
        'Implementación y acompañamiento en software contable',
        'Soporte en visitas de entes de control'
      ],
      benefits: [
        'Ahorro en costos laborales',
        'Información contable precisa y actualizada',
        'Reducción de riesgos tributarios y sanciones',
        'Equipo experto disponible sin incrementar nómina'
      ]
    },
    {
      id: 'revisoria-fiscal',
      icon: '🔍',
      title: 'Revisoría Fiscal',
      shortDesc: 'Servicio preventivo e independiente',
      fullDesc: 'Prestamos servicios de Revisoría Fiscal con enfoque preventivo, independiente y orientado a proteger los intereses de los socios, inversionistas y la empresa frente a entes de control.',
      features: [
        'Revisión permanente del cumplimiento contable, fiscal y legal',
        'Verificación de la razonabilidad de los estados financieros',
        'Evaluación de los sistemas de control interno',
        'Supervisión del cumplimiento de obligaciones laborales y societarias',
        'Elaboración de informes mensuales, trimestrales o anuales',
        'Participación en reuniones de junta y asambleas'
      ],
      benefits: [
        'Independencia, transparencia y rigor técnico',
        'Identificación temprana de riesgos y recomendaciones',
        'Cumplimiento frente a DIAN, SuperSociedades, UGPP',
        'Protección de intereses de socios e inversionistas'
      ]
    },
    {
      id: 'auditoria-financiera',
      icon: '📋',
      title: 'Auditoría Financiera',
      shortDesc: 'Verificación independiente de información financiera',
      fullDesc: 'Realizamos auditorías independientes para verificar la confiabilidad de la información financiera y la eficiencia de los procesos internos de tu empresa.',
      features: [
        'Auditoría completa o por áreas críticas',
        'Verificación de aplicación de políticas contables y NIIF',
        'Revisión del cumplimiento tributario y fiscal',
        'Evaluación de controles internos financieros y operativos',
        'Identificación de riesgos y propuesta de planes de acción',
        'Informes con hallazgos, análisis y recomendaciones'
      ],
      benefits: [
        'Ideal para empresas en crecimiento',
        'Preparación para procesos de inversión',
        'Detección de inconsistencias contables',
        'Preparación para venta, fusión o adquisición'
      ]
    },
    {
      id: 'asesoria-aduanera',
      icon: '🌐',
      title: 'Asesoría Aduanera',
      shortDesc: 'Cumplimiento del régimen aduanero',
      fullDesc: 'Apoyamos a empresas con operaciones de comercio exterior para garantizar el correcto cumplimiento del régimen aduanero vigente en Colombia.',
      features: [
        'Revisión documental de importaciones y exportaciones',
        'Validación de declaraciones aduaneras y sus soportes',
        'Identificación de riesgos, inconsistencias y sanciones',
        'Auditorías preventivas antes de inspecciones oficiales',
        'Acompañamiento en procesos ante autoridades aduaneras'
      ],
      benefits: [
        'Reducción de contingencias y sanciones',
        'Procesos de comercio exterior más seguros',
        'Diagnóstico claro de la operación aduanera',
        'Cumplimiento normativo garantizado'
      ]
    },
    {
      id: 'consultoria-cambiaria',
      icon: '💱',
      title: 'Consultoría Cambiaria',
      shortDesc: 'Cumplimiento de obligaciones cambiarias',
      fullDesc: 'Verificamos y acompañamos el cumplimiento de las obligaciones cambiarias frente al Banco de la República, DIAN y demás autoridades competentes.',
      features: [
        'Revisión de canalización de divisas',
        'Acompañamiento en operaciones de endeudamiento externo',
        'Validación de registros, declaraciones y formularios',
        'Identificación de riesgos de sanciones',
        'Asesoría en respuestas a requerimientos administrativos',
        'Auditoría a inversiones internacionales'
      ],
      benefits: [
        'Ideal para empresas que importan o exportan',
        'Prevención de sanciones del régimen cambiario',
        'Manejo seguro de cuentas en moneda extranjera',
        'Soporte en operaciones financieras internacionales'
      ]
    },
    {
      id: 'consultoria-tributaria',
      icon: '💰',
      title: 'Consultoría Tributaria',
      shortDesc: 'Acompañamiento experto en ciclo tributario',
      fullDesc: 'Brindamos acompañamiento experto en todo el ciclo tributario de tu empresa, desde la planeación hasta la defensa técnica frente a entidades estatales.',
      features: [
        'Planeación tributaria estratégica anual',
        'Elaboración y revisión de declaraciones tributarias',
        'Análisis de riesgos tributarios y cumplimiento fiscal',
        'Representación en procesos administrativos con DIAN',
        'Actualización y aplicación de nuevas normas tributarias',
        'Optimización de cargas fiscales dentro del marco legal'
      ],
      benefits: [
        'Minimización de riesgos sancionatorios',
        'Eficiencia fiscal y financiera',
        'Soporte experto en auditorías de DIAN',
        'Optimización legal de cargas tributarias'
      ]
    },
    {
      id: 'asesoria-financiera',
      icon: '📈',
      title: 'Asesoría Financiera y Estratégica',
      shortDesc: 'Fortalecimiento del desempeño financiero',
      fullDesc: 'Te ayudamos a fortalecer el desempeño financiero de tu empresa mediante análisis, proyecciones y estrategias a medida.',
      features: [
        'Análisis de liquidez, rentabilidad y endeudamiento',
        'Elaboración de proyecciones y presupuestos',
        'Modelos financieros personalizados',
        'Diagnósticos financieros completos',
        'Informes ejecutivos para juntas directivas',
        'Acompañamiento en decisiones estratégicas'
      ],
      benefits: [
        'Toma de decisiones informada',
        'Mejora del desempeño financiero',
        'Estrategias de crecimiento personalizadas',
        'Información ejecutiva de alta calidad'
      ]
    },
    {
      id: 'consultoria-empresarial',
      icon: '🏢',
      title: 'Consultoría Empresarial y Cumplimiento Normativo',
      shortDesc: 'Implementación de buenas prácticas',
      fullDesc: 'Apoyamos a tu empresa a implementar buenas prácticas y a alinearse a la normatividad vigente en materia contable, laboral, societaria, tributaria, aduanera y cambiaria.',
      features: [
        'Implementación de políticas contables bajo NIIF',
        'Actualización de libros contables',
        'Diagnósticos de cumplimiento regulatorio',
        'Capacitación a equipos administrativos y contables',
        'Organización y depuración de contabilidades atrasadas'
      ],
      benefits: [
        'Cumplimiento normativo integral',
        'Mejora de procesos internos',
        'Capacitación del personal',
        'Organización de información contable'
      ]
    }
  ];

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