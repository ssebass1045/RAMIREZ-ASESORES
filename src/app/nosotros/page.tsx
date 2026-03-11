import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import styles from "./nosotros.module.css";
import Link from "next/link";

export const metadata = {
  title: "Nosotros - Ramírez y Asesores SAS | Expertos Contables en Medellín",
  description:
    "Conoce nuestra misión, visión y valores. Más de 20 años de experiencia en outsourcing contable, auditoría y revisoría fiscal en Medellín.",
  keywords:
    "nosotros, misión, visión, valores, empresa contable Medellín, historia Ramírez Asesores",
};

export default function Nosotros() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Sobre <span className={styles.highlight}>Nosotros</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Más de 20 años acompañando el crecimiento empresarial en
                Medellín y Antioquia
              </p>
            </div>
          </div>
        </section>

        {/* Historia y Trayectoria */}
        <section className={`${styles.history} section-padding`}>
          <div className="container">
            <div className={styles.historyContent}>
              <div className={styles.historyText}>
                <h2 className={styles.sectionTitle}>Nuestra Trayectoria</h2>
                <p className={styles.historyDescription}>
                  En <strong>Ramírez Asesores SAS</strong> hemos dedicado más de
                  20 años a brindar soluciones integrales en outsourcing
                  contable y administrativo, revisoría fiscal, auditoría y
                  asesorías jurídicas, tributarias, aduaneras y cambiarias.
                </p>
                <p className={styles.historyDescription}>
                  Nuestro compromiso se basa en mantener la confidencialidad y
                  seguridad de la información de nuestros clientes,
                  desarrollando nuestras actividades con honestidad, excelencia
                  y puntualidad.
                </p>

                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>2009</span>
                    <span className={styles.statLabel}>Año de Fundación</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>15+</span>
                    <span className={styles.statLabel}>
                      Años de Experiencia
                    </span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>Clientes Atendidos</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>98%</span>
                    <span className={styles.statLabel}>
                      Satisfacción del Cliente
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.historyImage}>
                <img
                  src="/home/oficina-medellin.jpg"
                  alt="Oficina de Ramírez y Asesores SAS en Medellín"
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <p className={styles.imageCaption}>
                    Nuestras instalaciones en Medellín, Antioquia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className={`${styles.missionVision} section-padding`}>
          <div className="container">
            <div className={styles.missionVisionGrid}>
              {/* Misión */}
              <div className={`card ${styles.missionCard}`}>
                <div className={styles.cardIcon}>🎯</div>
                <h3 className={styles.cardTitle}>Misión</h3>
                <p className={styles.cardText}>
                  Ramírez Asesores SAS acompaña a las empresas en su
                  crecimiento, ofreciendo servicios de alto nivel en outsourcing
                  contable y administrativo, auditoría, revisoría fiscal y
                  asesorías jurídicas de tipo tributarias, aduaneras y
                  cambiarias.
                </p>
                <p className={styles.cardText}>
                  Nuestro propósito es generar confianza y valor a través de un
                  equipo humano íntegro, ético y altamente calificado, que
                  brinda soluciones oportunas y personalizadas, potenciando la
                  productividad, la transparencia y la sostenibilidad de
                  nuestros clientes.
                </p>
              </div>

              {/* Visión */}
              <div className={`card ${styles.visionCard}`}>
                <div className={styles.cardIcon}>🔭</div>
                <h3 className={styles.cardTitle}>Visión</h3>
                <p className={styles.cardText}>
                  Para el año 2030, Ramírez Asesores SAS será reconocida a nivel
                  regional y nacional como una firma líder en outsourcing
                  contable y administrativo, auditoría, revisoría fiscal y
                  asesorías jurídicas de tipo tributarias, aduaneras y
                  cambiarias.
                </p>
                <p className={styles.cardText}>
                  Nos proyectamos como una organización sólida, ética e
                  innovadora, que se distingue por su excelencia técnica, el
                  compromiso de su equipo y la confianza de sus clientes,
                  contribuyendo al fortalecimiento empresarial y al desarrollo
                  económico sostenible del país.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Corporativos */}
        <section className={`${styles.values} section-padding`}>
          <div className="container">
            <div className="text-center">
              <h2 className={styles.sectionTitle}>
                Nuestros <span className={styles.highlight}>Valores</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Principios que guían cada una de nuestras acciones y decisiones
              </p>
            </div>

            <div className={styles.valuesGrid}>
              <div className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>🛡️</div>
                <h3>Integridad</h3>
                <p>
                  Actuamos con ética, honestidad y coherencia, generando
                  confianza y credibilidad en cada servicio que prestamos.
                </p>
              </div>

              <div className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>⭐</div>
                <h3>Excelencia</h3>
                <p>
                  Buscamos superar las expectativas mediante resultados
                  precisos, eficientes y sostenibles.
                </p>
              </div>

              <div className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>🔒</div>
                <h3>Confidencialidad</h3>
                <p>
                  Resguardamos cada dato con responsabilidad y discreción,
                  cumpliendo los más altos estándares profesionales.
                </p>
              </div>

              <div className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>🤝</div>
                <h3>Responsabilidad</h3>
                <p>
                  Asumimos nuestros deberes con clientes, colaboradores y
                  comunidad, contribuyendo al desarrollo empresarial y social.
                </p>
              </div>

              <div className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>⏱️</div>
                <h3>Cumplimiento y Puntualidad</h3>
                <p>
                  Garantizamos entregas oportunas, procesos ágiles y resultados
                  confiables.
                </p>
              </div>

              <div className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>👥</div>
                <h3>Colaboración</h3>
                <p>
                  Fomentamos el trabajo en equipo, el respeto y la comunicación
                  efectiva para alcanzar metas comunes.
                </p>
              </div>

              <div className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>💝</div>
                <h3>Cercanía y Amabilidad</h3>
                <p>
                  Nuestro servicio es humano, atendemos con calidez, empatía y
                  disposición, creando relaciones duraderas basadas en el
                  respeto y la confianza.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Política General */}
        <section className={`${styles.policy} section-padding`}>
          <div className="container">
            <div className={styles.policyContent}>
              <h2 className={styles.sectionTitle}>Política General</h2>
              <div className={`card ${styles.policyCard}`}>
                <p className={styles.policyText}>
                  En Ramírez Asesores SAS llevamos más de 20 años acompañando a
                  empresas de diferentes sectores económicos, ofreciendo
                  soluciones integrales en outsourcing contable y
                  administrativo, revisoría fiscal, auditoría y asesorías
                  jurídicas, tributarias, aduaneras y cambiarias.
                </p>

                <div className={styles.commitments}>
                  <h4>Nos comprometemos a:</h4>
                  <ul className={styles.commitmentList}>
                    <li>
                      Mantener la confidencialidad y seguridad de la información
                      de nuestros clientes.
                    </li>
                    <li>
                      Desarrollar nuestras actividades con honestidad,
                      excelencia y puntualidad.
                    </li>
                    <li>
                      Promover la mejora continua de nuestros procesos,
                      garantizando eficiencia y cumplimiento oportuno.
                    </li>
                    <li>
                      Fomentar la formación permanente y el trabajo en equipo de
                      nuestro talento humano.
                    </li>
                    <li>
                      Construir relaciones basadas en la confianza, el respeto y
                      la satisfacción de nuestros clientes.
                    </li>
                  </ul>
                </div>

                <p className={styles.policyConclusion}>
                  Esta política guía nuestras decisiones diarias y refleja
                  nuestro compromiso con la calidad, la transparencia y el
                  desarrollo sostenible de las empresas que confían en nosotros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                ¿Listo para trabajar con un equipo comprometido?
              </h2>
              <p className={styles.ctaSubtitle}>
                Descubre cómo nuestra experiencia y valores pueden beneficiar a
                tu empresa
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contacto" className="btn btn-primary">
                  Contactar Ahora
                </Link>
                <Link href="/equipo" className="btn btn-outline">
                  Conocer Nuestro Equipo
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
