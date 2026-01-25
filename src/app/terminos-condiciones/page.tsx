import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './terminos.module.css';

export const metadata = {
  title: 'Términos y Condiciones - Ramírez y Asesores SAS',
  description: 'Términos y condiciones de uso del sitio web de Ramírez y Asesores SAS. Consulta nuestras políticas de servicio.',
  keywords: 'términos y condiciones, políticas de servicio, condiciones de uso, Ramírez y Asesores SAS',
};

export default function TerminosCondiciones() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span className={styles.highlight}>Términos y Condiciones</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Última actualización: {new Date().toLocaleDateString('es-CO', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className={`${styles.content} section-padding`}>
          <div className="container">
            <div className={styles.contentWrapper}>
              
              <div className={styles.intro}>
                <p>
                  Bienvenido a <strong>Ramírez y Asesores SAS</strong>. Al acceder y utilizar nuestro sitio web, 
                  usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. 
                  Si no está de acuerdo con alguno de estos términos, le recomendamos que no utilice nuestro sitio.
                </p>
              </div>

              <div className={styles.section}>
                <h2>1. Aceptación de los Términos</h2>
                <p>
                  Al utilizar este sitio web, usted reconoce haber leído, entendido y aceptado estos 
                  términos y condiciones en su totalidad. Estos términos constituyen un acuerdo legal 
                  entre usted y Ramírez y Asesores SAS.
                </p>
              </div>

              <div className={styles.section}>
                <h2>2. Uso del Sitio Web</h2>
                <p>
                  Este sitio web está destinado a proporcionar información sobre nuestros servicios 
                  profesionales de outsourcing contable, auditoría, revisoría fiscal y asesorías jurídicas. 
                  Usted se compromete a:
                </p>
                <ul>
                  <li>Utilizar el sitio solo para fines legales y de acuerdo con estos términos</li>
                  <li>No realizar actividades que puedan dañar, deshabilitar o sobrecargar el sitio</li>
                  <li>No intentar acceder a áreas restringidas del sitio sin autorización</li>
                  <li>No utilizar el sitio para enviar contenido malicioso o spam</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>3. Propiedad Intelectual</h2>
                <p>
                  Todo el contenido de este sitio web, incluyendo pero no limitado a texto, gráficos, 
                  logotipos, imágenes, videos, software y código fuente, es propiedad de Ramírez y Asesores SAS 
                  o de sus licenciantes y está protegido por las leyes de propiedad intelectual.
                </p>
                <p>
                  Queda prohibida la reproducción, distribución, modificación o uso comercial de cualquier 
                  contenido sin nuestro consentimiento expreso por escrito.
                </p>
              </div>

              <div className={styles.section}>
                <h2>4. Servicios Profesionales</h2>
                <p>
                  La información proporcionada en este sitio web tiene fines informativos y no constituye 
                  asesoramiento profesional. Para recibir servicios profesionales específicos, debe 
                  contactarnos directamente y establecer una relación contractual formal.
                </p>
                <p>
                  Los precios y características de los servicios mencionados están sujetos a cambio 
                  sin previo aviso y pueden variar según las necesidades específicas de cada cliente.
                </p>
              </div>

              <div className={styles.section}>
                <h2>5. Limitación de Responsabilidad</h2>
                <p>
                  Ramírez y Asesores SAS no será responsable por:
                </p>
                <ul>
                  <li>Daños directos, indirectos, incidentales o consecuentes derivados del uso del sitio</li>
                  <li>Interrupciones del servicio, errores técnicos o fallas en el sitio web</li>
                  <li>Contenido publicado por terceros en el sitio</li>
                  <li>Decisiones tomadas basadas en la información proporcionada en el sitio</li>
                </ul>
                <p>
                  El uso del sitio es bajo su propio riesgo. El sitio se proporciona "tal cual" y 
                  "según disponibilidad".
                </p>
              </div>

              <div className={styles.section}>
                <h2>6. Enlaces a Terceros</h2>
                <p>
                  Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces se 
                  proporcionan únicamente para su conveniencia. No tenemos control sobre el contenido de 
                  estos sitios y no somos responsables de ellos.
                </p>
                <p>
                  La inclusión de cualquier enlace no implica necesariamente una recomendación o 
                  respaldo de los puntos de vista expresados en ellos.
                </p>
              </div>

              <div className={styles.section}>
                <h2>7. Privacidad</h2>
                <p>
                  La protección de sus datos personales es importante para nosotros. Consulte nuestra 
                  <a href="/politica-privacidad" className={styles.link}> Política de Privacidad</a> para 
                  obtener información detallada sobre cómo recopilamos, usamos y protegemos su información.
                </p>
              </div>

              <div className={styles.section}>
                <h2>8. Modificaciones</h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                  Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
                </p>
                <p>
                  Es su responsabilidad revisar periódicamente estos términos para estar al tanto de 
                  cualquier cambio. El uso continuado del sitio después de los cambios constituye la 
                  aceptación de los nuevos términos.
                </p>
              </div>

              <div className={styles.section}>
                <h2>9. Ley Aplicable y Jurisdicción</h2>
                <p>
                  Estos términos y condiciones se rigen por las leyes de la República de Colombia. 
                  Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción 
                  exclusiva de los tribunales de Medellín, Colombia.
                </p>
              </div>

              <div className={styles.section}>
                <h2>10. Contacto</h2>
                <p>
                  Si tiene preguntas sobre estos términos y condiciones, puede contactarnos a través de:
                </p>
                <ul>
                  <li><strong>Email:</strong> gerencia@ramirezasesores.co</li>
                  <li><strong>Teléfono:</strong> +57 (4) 322 1158</li>
                  <li><strong>Dirección:</strong> Carrera 65 #45-20 Interior 1906, Medellín, Colombia</li>
                </ul>
              </div>

              <div className={styles.acknowledgment}>
                <p>
                  Al utilizar este sitio web, usted reconoce haber leído, entendido y aceptado estos 
                  términos y condiciones en su totalidad.
                </p>
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