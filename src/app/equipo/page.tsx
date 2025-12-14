'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './equipo.module.css';
import Image from 'next/image';
import Link from 'next/link';

// Datos del equipo (igual que antes)
const equipo = [
  {
    id: 'nestor-ramirez',
    nombre: 'Néstor Augusto Ramírez Ospina',
    cargo: 'Gerente',
    email: 'gerencia@ramirezasesores.co',
    imagen: '/team/nestor-ramirez.png',
    especialidades: ['Estrategia Empresarial', 'Gestión Financiera', 'Desarrollo Organizacional'],
    experiencia: 'Más de 15 años de experiencia en dirección de empresas y consultoría financiera',
    formacion: 'Especialista en Finanzas y Gestión Empresarial',
    destacado: true
  },
  {
    id: 'viviana-vargas',
    nombre: 'Viviana María Vargas Franco',
    cargo: 'Coordinadora Administración y Gestión Humana',
    email: 'gestionhumana@ramirezasesores.co',
    imagen: '/team/viviana-vargas.png',
    especialidades: ['Gestión Humana', 'Administración', 'Procesos Organizacionales'],
    experiencia: 'Amplia experiencia en gestión administrativa y desarrollo del talento humano',
    formacion: 'Profesional en Administración de Empresas'
  },
  {
    id: 'maria-callejas',
    nombre: 'María Fernanda Callejas Saldarriaga',
    cargo: 'Auditora y Revisora Fiscal',
    email: 'revisoria@ramirezasesores.co',
    imagen: '/team/maria-callejas.png',
    especialidades: ['Auditoría Financiera', 'Revisoría Fiscal', 'Control Interno'],
    experiencia: 'Especialista en auditoría y revisoría fiscal con enfoque preventivo',
    formacion: 'Contadora Pública - Especialista en Auditoría'
  },
  {
    id: 'paula-montoya',
    nombre: 'Paula Andrea Montoya Álvarez',
    cargo: 'Coordinadora de Contabilidad',
    email: 'coordinadora@ramirezasesores.co',
    imagen: '/team/paula-montoya.png',
    especialidades: ['Contabilidad General', 'NIIF', 'Impuestos'],
    experiencia: 'Experta en implementación de sistemas contables y normativa NIIF',
    formacion: 'Contadora Pública - Especialista en Normas Internacionales'
  },
  {
    id: 'viviana-piedrahita',
    nombre: 'Viviana María Piedrahita Zapata',
    cargo: 'Analista de Contabilidad',
    email: 'analista@ramirezasesores.co',
    imagen: '/team/viviana-piedrahita.png',
    especialidades: ['Análisis Financiero', 'Conciliaciones', 'Reportes Gerenciales'],
    experiencia: 'Especialista en análisis financiero y elaboración de reportes ejecutivos',
    formacion: 'Contadora Pública'
  },
  {
    id: 'yulian-gomez',
    nombre: 'Yulián Andrés Gómez Garzón',
    cargo: 'Asistente Contable',
    email: 'contabilidad@ramirezasesores.co',
    imagen: '/team/yulian-gomez.png',
    especialidades: ['Registro Contable', 'Nómina', 'Soporte Tributario'],
    experiencia: 'Experto en registro contable y gestión de nómina',
    formacion: 'Tecnólogo en Contabilidad y Finanzas'
  },
  {
    id: 'ana-estrada',
    nombre: 'Ana María Estrada Arroyave',
    cargo: 'Asistente Contable Junior',
    email: 'contabilidad@ramirezasesores.co',
    imagen: '/team/ana-estrada.png',
    especialidades: ['Auxiliar Contable', 'Archivo', 'Soporte Administrativo'],
    experiencia: 'Especialista en soporte contable y organización documental',
    formacion: 'Técnica en Auxiliar Contable'
  },
  {
    id: 'katerine-jaramillo',
    nombre: 'Katerine Jaramillo Duque',
    cargo: 'Asistente Administrativa y Contable',
    email: 'administracion@ramirezasesores.co',
    imagen: '/team/katerine-jaramillo.png',
    especialidades: ['Atención al Cliente', 'Soporte Administrativo', 'Logística'],
    experiencia: 'Experta en atención al cliente y soporte administrativo integral',
    formacion: 'Técnica en Administración'
  }
];

const areasEspecializadas = [
  {
    area: 'Contabilidad y Finanzas',
    descripcion: 'Expertos en gestión contable, estados financieros y análisis financiero',
    icono: '📊',
    color: '#5170ff'
  },
  {
    area: 'Auditoría y Revisoría Fiscal',
    descripcion: 'Especialistas en control interno, auditoría financiera y cumplimiento normativo',
    icono: '🔍',
    color: '#25D366'
  },
  {
    area: 'Asesoría Tributaria',
    descripcion: 'Consultores expertos en normativa tributaria y optimización fiscal',
    icono: '💰',
    color: '#FF6B6B'
  },
  {
    area: 'Gestión Empresarial',
    descripcion: 'Profesionales en administración, procesos y desarrollo organizacional',
    icono: '🏢',
    color: '#FFA726'
  }
];

export default function Equipo() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {/* Hero Section mejorada */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Nuestro <span className={styles.highlight}>Equipo</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Profesionales altamente calificados comprometidos con tu éxito empresarial en Medellín
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Años de Experiencia</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>8</span>
                  <span className={styles.statLabel}>Especialistas</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>4</span>
                  <span className={styles.statLabel}>Áreas Clave</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas Especializadas mejoradas */}
        <section className={`${styles.areas} section-padding`}>
          <div className="container">
            <div className="text-center">
              <h2 className={styles.sectionTitle}>
                Áreas <span className={styles.highlight}>Especializadas</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Contamos con especialistas en cada área para brindarte un servicio integral
              </p>
            </div>
            
            <div className={styles.areasGrid}>
              {areasEspecializadas.map((area, index) => (
                <div 
                  key={area.area} 
                  className={`card ${styles.areaCard} ${styles[`areaCard${index + 1}`]}`}
                  style={{ '--area-color': area.color } as React.CSSProperties}
                >
                  <div className={styles.areaIcon} style={{ color: area.color }}>
                    {area.icono}
                  </div>
                  <h3 className={styles.areaTitle}>{area.area}</h3>
                  <p className={styles.areaDesc}>{area.descripcion}</p>
                  <div className={styles.areaOverlay}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grid del Equipo mejorado */}
        <section className={`${styles.teamGrid} section-padding`}>
          <div className="container">
            <div className="text-center">
              <h2 className={styles.sectionTitle}>
                Conoce a Nuestros <span className={styles.highlight}>Profesionales</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Cada miembro aporta experiencia y especialización única
              </p>
            </div>
            
            <div className={styles.teamContainer}>
              {equipo.map((miembro, index) => (
                <div 
                  key={miembro.id} 
                  className={`card ${styles.teamCard} ${miembro.destacado ? styles.destacado : ''}`}
                >
                  <div className={styles.memberImage}>
                    <Image
                      src={miembro.imagen}
                      alt={miembro.nombre}
                      width={200}
                      height={200}
                      className={styles.image}
                      priority={miembro.destacado}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.socialLinks}>
                        <a 
                          href={`mailto:${miembro.email}`}
                          className={styles.socialLink}
                          title="Enviar correo"
                        >
                          <span className={styles.socialIcon}>📧</span>
                        </a>
                        <Link 
                          href="/contacto" 
                          className={styles.contactButton}
                          title="Contactar"
                        >
                          <span className={styles.socialIcon}>💬</span>
                        </Link>
                      </div>
                    </div>
                    {miembro.destacado && (
                      <div className={styles.badgeDestacado}>
                        <span>⭐ Líder</span>
                      </div>
                    )}
                  </div>
                  
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{miembro.nombre}</h3>
                    <p className={styles.memberPosition}>{miembro.cargo}</p>
                    
                    <div className={styles.contactInfo}>
                      <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>📧</span>
                        <a 
                          href={`mailto:${miembro.email}`}
                          className={styles.contactLink}
                        >
                          {miembro.email}
                        </a>
                      </div>
                      <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>💼</span>
                        <span className={styles.contactText}>
                          Contactar a través del formulario
                        </span>
                      </div>
                    </div>
                    
                    <div className={styles.experience}>
                      <h4 className={styles.experienceTitle}>Experiencia</h4>
                      <p className={styles.experienceText}>{miembro.experiencia}</p>
                    </div>
                    
                    <div className={styles.formacion}>
                      <h4 className={styles.formacionTitle}>Formación</h4>
                      <p className={styles.formacionText}>{miembro.formacion}</p>
                    </div>
                    
                    <div className={styles.especialidades}>
                      <h4 className={styles.especialidadesTitle}>Especialidades</h4>
                      <div className={styles.especialidadesList}>
                        {miembro.especialidades.map((especialidad, idx) => (
                          <span key={idx} className={styles.especialidadTag}>
                            {especialidad}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores del Equipo mejorados */}
        <section className={`${styles.teamValues} section-padding`}>
          <div className="container">
            <div className={styles.valuesContent}>
              <div className={styles.valuesText}>
                <h2 className={styles.sectionTitle}>
                  Nuestra <span className={styles.highlight}>Filosofía</span> de Trabajo
                </h2>
                <p className={styles.valuesDescription}>
                  Creemos en el trabajo en equipo, la formación continua y el compromiso 
                  con la excelencia en cada servicio que brindamos.
                </p>
                
                <div className={styles.valuesList}>
                  <div className={styles.valueItem}>
                    <div className={styles.valueIconContainer}>
                      <span className={styles.valueIcon}>👥</span>
                    </div>
                    <div>
                      <h4>Trabajo en Equipo</h4>
                      <p>Colaboramos estrechamente para ofrecer soluciones integrales</p>
                    </div>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <div className={styles.valueIconContainer}>
                      <span className={styles.valueIcon}>🎯</span>
                    </div>
                    <div>
                      <h4>Enfoque en Resultados</h4>
                      <p>Nos orientamos a lograr objetivos concretos para nuestros clientes</p>
                    </div>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <div className={styles.valueIconContainer}>
                      <span className={styles.valueIcon}>📚</span>
                    </div>
                    <div>
                      <h4>Formación Continua</h4>
                      <p>Mantenemos actualización constante en normativas y mejores prácticas</p>
                    </div>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <div className={styles.valueIconContainer}>
                      <span className={styles.valueIcon}>💝</span>
                    </div>
                    <div>
                      <h4>Compromiso con el Cliente</h4>
                      <p>Tu éxito es nuestra prioridad y nos esforzamos por superar expectativas</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.valuesImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderContent}>
                    <div className={styles.placeholderIcon}>🤝</div>
                    <p className={styles.placeholderText}>
                      Equipo comprometido con tu éxito
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section mejorada */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
                            <h2 className={styles.ctaTitle}>
                ¿Listo para trabajar con nuestro equipo de expertos?
              </h2>
              <p className={styles.ctaSubtitle}>
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contacto" className="btn btn-primary">
                  <span className={styles.ctaIcon}>📅</span>
                  Agendar Consulta Gratuita
                </Link>
                <Link href="/servicios" className="btn btn-outline">
                  <span className={styles.ctaIcon}>📋</span>
                  Ver Nuestros Servicios
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