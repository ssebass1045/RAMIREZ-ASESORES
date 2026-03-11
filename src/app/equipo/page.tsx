"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import styles from "./equipo.module.css";
import Image from "next/image";
import Link from "next/link";

// Datos del equipo (igual que antes)
const equipo = [
  {
    id: "nestor-ramirez",
    nombre: "Néstor Augusto Ramírez Ospina",
    cargo: "CEO",
    email: "gerencia@ramirezasesores.co",
    imagen: "/team/nestor-ramirez.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
    destacado: true,
  },
  {
    id: "viviana-vargas",
    nombre: "Viviana María Vargas Franco",
    cargo: "Coordinadora Administrativa y Gestión Humana",
    email: "gestionhumana@ramirezasesores.co",
    imagen: "/team/viviana-vargas.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
  {
    id: "maria-callejas",
    nombre: "María Fernanda Callejas Saldarriaga",
    cargo: "Auditora y Revisora Fiscal",
    email: "revisoria@ramirezasesores.co",
    imagen: "/team/maria-callejas.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
  {
    id: "paula-montoya",
    nombre: "Paula Andrea Montoya Álvarez",
    cargo: "Coordinadora Contable",
    email: "coordinadora@ramirezasesores.co",
    imagen: "/team/paula-montoya.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
  {
    id: "viviana-piedrahita",
    nombre: "Viviana María Piedrahita Zapata",
    cargo: "Analista Contable",
    email: "analista@ramirezasesores.co",
    imagen: "/team/viviana-piedrahita.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
  {
    id: "yulian-gomez",
    nombre: "Yulián Andrés Gómez Garzón",
    cargo: "Líder Contable",
    email: "contabilidad@ramirezasesores.co",
    imagen: "/team/yulian-gomez.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
  {
    id: "ana-estrada",
    nombre: "Ana María Estrada Arroyave",
    cargo: "Asistente Contable Junior",
    email: "contabilidad@ramirezasesores.co",
    imagen: "/team/ana-estrada.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
  {
    id: "katerine-jaramillo",
    nombre: "Katerine Jaramillo Duque",
    cargo: "Asistente Administrativa",
    email: "administracion@ramirezasesores.co",
    imagen: "/team/katerine-jaramillo.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
];

const areasEspecializadas = [
  {
    area: "Contabilidad y Finanzas",
    descripcion:
      "Expertos en gestión contable, estados financieros y análisis financiero",
    icono: "📊",
    color: "#5170ff",
  },
  {
    area: "Auditoría y Revisoría Fiscal",
    descripcion:
      "Especialistas en control interno, auditoría financiera y cumplimiento normativo",
    icono: "🔍",
    color: "#25D366",
  },
  {
    area: "Asesoría Tributaria",
    descripcion:
      "Consultores expertos en normativa tributaria y optimización fiscal",
    icono: "💰",
    color: "#FF6B6B",
  },
  {
    area: "Gestión Empresarial",
    descripcion:
      "Profesionales en administración, procesos y desarrollo organizacional",
    icono: "🏢",
    color: "#FFA726",
  },
  {
    area: "Aduanero y Cambiario",
    descripcion:
      "Especialistas en régimen aduanero, operaciones de comercio exterior y cumplimiento cambiario",
    icono: "🌐",
    color: "#7E57C2",
  },
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
                Profesionales altamente calificados comprometidos con tu éxito
                empresarial en Medellín
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>20+</span>
                  <span className={styles.statLabel}>Años de Experiencia</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>8</span>
                  <span className={styles.statLabel}>Especialistas</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5</span>
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
                Contamos con especialistas en cada área para brindarte un
                servicio integral
              </p>
            </div>

            <div className={styles.areasGrid}>
              {areasEspecializadas.map((area, index) => (
                <div
                  key={area.area}
                  className={`card ${styles.areaCard} ${styles[`areaCard${index + 1}`]}`}
                  style={{ "--area-color": area.color } as React.CSSProperties}
                >
                  <div
                    className={styles.areaIcon}
                    style={{ color: area.color }}
                  >
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
                Conoce a Nuestros{" "}
                <span className={styles.highlight}>Profesionales</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Cada miembro aporta experiencia y especialización única
              </p>
            </div>

            <div className={styles.teamContainer}>
              {equipo.map((miembro, index) => (
                <div
                  key={miembro.id}
                  className={`card ${styles.teamCard} ${miembro.destacado ? styles.destacado : ""}`}
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
                        <Link href="/contacto" className={styles.contactLink}>
                          Contactar
                        </Link>
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
                  Nuestra <span className={styles.highlight}>Filosofía</span> de
                  Trabajo
                </h2>
                <p className={styles.valuesDescription}>
                  Creemos en el trabajo en equipo, la formación continua y el
                  compromiso con la excelencia en cada servicio que brindamos.
                </p>

                <div className={styles.valuesList}>
                  <div className={styles.valueItem}>
                    <div className={styles.valueIconContainer}>
                      <span className={styles.valueIcon}>👥</span>
                    </div>
                    <div>
                      <h4>Trabajo en Equipo</h4>
                      <p>
                        Colaboramos estrechamente para ofrecer soluciones
                        integrales
                      </p>
                    </div>
                  </div>

                  <div className={styles.valueItem}>
                    <div className={styles.valueIconContainer}>
                      <span className={styles.valueIcon}>🎯</span>
                    </div>
                    <div>
                      <h4>Enfoque en Resultados</h4>
                      <p>
                        Nos orientamos a lograr objetivos concretos para
                        nuestros clientes
                      </p>
                    </div>
                  </div>

                  <div className={styles.valueItem}>
                    <div className={styles.valueIconContainer}>
                      <span className={styles.valueIcon}>📚</span>
                    </div>
                    <div>
                      <h4>Formación Continua</h4>
                      <p>
                        Mantenemos actualización constante en normativas y
                        mejores prácticas
                      </p>
                    </div>
                  </div>

                  <div className={styles.valueItem}>
                    <div className={styles.valueIconContainer}>
                      <span className={styles.valueIcon}>💝</span>
                    </div>
                    <div>
                      <h4>Compromiso con el Cliente</h4>
                      <p>
                        Tu éxito es nuestra prioridad y nos esforzamos por
                        superar expectativas
                      </p>
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
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a
                alcanzar tus objetivos
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
