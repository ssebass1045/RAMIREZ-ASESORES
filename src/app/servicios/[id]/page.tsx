'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './servicio.module.css';
import Link from 'next/link';

// Datos de todos los servicios
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
  }
];

export default function ServicioPage() {
  const params = useParams();
  const servicioId = params.id as string;
  
  const servicio = servicios.find(s => s.id === servicioId);
  
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
              <div className={styles.heroIcon}>{servicio.icon}</div>
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
              <p className={styles.fullDescription}>{servicio.fullDesc}</p>
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
              {servicios
                .filter(s => s.id !== servicioId)
                .slice(0, 3)
                .map((otroServicio) => (
                  <Link 
                    key={otroServicio.id} 
                    href={`/servicios/${otroServicio.id}`}
                    className={`card ${styles.serviceCard}`}
                  >
                    <div className={styles.serviceIcon}>{otroServicio.icon}</div>
                    <h3 className={styles.serviceTitle}>{otroServicio.title}</h3>
                    <p className={styles.serviceDesc}>{otroServicio.shortDesc}</p>
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
               