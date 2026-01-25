import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './privacidad.module.css';

export const metadata = {
  title: 'Política de Privacidad - Ramírez y Asesores SAS',
  description: 'Política de privacidad y protección de datos personales de Ramírez y Asesores SAS. Conoce cómo protegemos tu información.',
  keywords: 'política de privacidad, protección de datos, datos personales, RGPD, privacidad, Ramírez y Asesores SAS',
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span className={styles.highlight}>Política de Privacidad</span>
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
                  En <strong>Ramírez y Asesores SAS</strong> nos comprometemos a proteger la privacidad 
                  y seguridad de sus datos personales. Esta política de privacidad explica cómo recopilamos, 
                  usamos, compartimos y protegemos su información cuando utiliza nuestro sitio web y servicios.
                </p>
              </div>

              <div className={styles.section}>
                <h2>1. Información que Recopilamos</h2>
                <p>
                  Podemos recopilar los siguientes tipos de información:
                </p>
                <ul>
                  <li>
                    <strong>Información de contacto:</strong> Nombre, dirección de correo electrónico, 
                    número de teléfono, dirección postal, empresa.
                  </li>
                  <li>
                    <strong>Información profesional:</strong> Cargo, industria, tamaño de empresa, 
                    necesidades de servicios contables.
                  </li>
                  <li>
                    <strong>Información de uso:</strong> Datos sobre cómo interactúa con nuestro sitio web, 
                    páginas visitadas, tiempo de visita, dispositivo utilizado.
                  </li>
                  <li>
                    <strong>Información técnica:</strong> Dirección IP, tipo de navegador, sistema operativo, 
                    páginas de referencia.
                  </li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>2. Cómo Recopilamos su Información</h2>
                <p>
                  Recopilamos información a través de:
                </p>
                <ul>
                  <li><strong>Formularios de contacto:</strong> Cuando solicita información o servicios</li>
                  <li><strong>Registro en el sitio:</strong> Al suscribirse a nuestro boletín o recursos</li>
                  <li><strong>Comunicaciones:</strong> Correos electrónicos, llamadas telefónicas, WhatsApp</li>
                  <li><strong>Tecnologías automáticas:</strong> Cookies, registros del servidor, herramientas de análisis</li>
                  <li><strong>Terceros:</strong> Redes sociales, socios comerciales (con su consentimiento)</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>3. Uso de la Información</h2>
                <p>
                  Utilizamos su información para:
                </p>
                <ul>
                  <li>Proporcionar los servicios contables y de asesoría solicitados</li>
                  <li>Responder a sus consultas y solicitudes de información</li>
                  <li>Enviar comunicaciones sobre nuestros servicios y actualizaciones</li>
                  <li>Mejorar nuestro sitio web y experiencia del usuario</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                  <li>Prevenir fraudes y proteger la seguridad de nuestros sistemas</li>
                  <li>Realizar análisis de mercado y desarrollo de negocios</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>4. Base Legal para el Tratamiento</h2>
                <p>
                  Procesamos sus datos personales basándonos en:
                </p>
                <ul>
                  <li><strong>Consentimiento:</strong> Cuando nos da su permiso explícito</li>
                  <li><strong>Contrato:</strong> Para cumplir con nuestros servicios contratados</li>
                  <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicarnos</li>
                  <li><strong>Obligación legal:</strong> Para cumplir con leyes y regulaciones aplicables</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>5. Compartición de Información</h2>
                <p>
                  Podemos compartir su información con:
                </p>
                <ul>
                  <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar nuestro negocio</li>
                  <li><strong>Autoridades legales:</strong> Cuando sea requerido por ley o para proteger derechos</li>
                  <li><strong>Socios comerciales:</strong> Con su consentimiento para servicios específicos</li>
                  <li><strong>Transferencias empresariales:</strong> En caso de fusión, adquisición o venta</li>
                </ul>
                <p>
                  <strong>No vendemos</strong> su información personal a terceros con fines de marketing.
                </p>
              </div>

              <div className={styles.section}>
                <h2>6. Seguridad de los Datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                  sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>
                <p>
                  Estas medidas incluyen:
                </p>
                <ul>
                  <li>Encriptación de datos sensibles</li>
                  <li>Control de acceso basado en roles</li>
                  <li>Firewalls y sistemas de detección de intrusiones</li>
                  <li>Capacitación regular del personal en protección de datos</li>
                  <li>Copias de seguridad periódicas</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>7. Retención de Datos</h2>
                <p>
                  Conservamos sus datos personales solo durante el tiempo necesario para los fines 
                  para los que fueron recopilados, incluyendo para cumplir con obligaciones legales, 
                  contables o de informes.
                </p>
                <p>
                  Los períodos de retención específicos varían según el tipo de datos y el propósito 
                  del procesamiento. Una vez que ya no necesitemos sus datos, los eliminaremos de 
                  manera segura.
                </p>
              </div>

              <div className={styles.section}>
                <h2>8. Sus Derechos</h2>
                <p>
                  De acuerdo con la legislación de protección de datos, usted tiene derecho a:
                </p>
                <ul>
                  <li><strong>Acceso:</strong> Solicitar una copia de sus datos personales</li>
                  <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                  <li><strong>Eliminación:</strong> Solicitar la eliminación de sus datos</li>
                  <li><strong>Restricción:</strong> Limitar el procesamiento de sus datos</li>
                  <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                  <li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos</li>
                  <li><strong>Retirar consentimiento:</strong> En cualquier momento, sin afectar la legalidad previa</li>
                </ul>
                <p>
                  Para ejercer estos derechos, contáctenos a través de los medios indicados al final 
                  de esta política.
                </p>
              </div>

              <div className={styles.section}>
                <h2>9. Cookies y Tecnologías Similares</h2>
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. 
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo.
                </p>
                <p>
                  Tipos de cookies que utilizamos:
                </p>
                <ul>
                  <li><strong>Esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
                  <li><strong>Funcionales:</strong> Mejoran la experiencia del usuario</li>
                  <li><strong>Analíticas:</strong> Nos ayudan a entender cómo se usa el sitio</li>
                  <li><strong>Publicitarias:</strong> Muestran anuncios relevantes (con su consentimiento)</li>
                </ul>
                <p>
                  Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.
                </p>
              </div>

              <div className={styles.section}>
                <h2>10. Transferencias Internacionales</h2>
                <p>
                  Sus datos pueden ser transferidos y procesados en países fuera de Colombia. 
                  En tales casos, nos aseguramos de que existan garantías adecuadas de protección 
                  de datos, como cláusulas contractuales estándar o decisiones de adecuación.
                </p>
              </div>

              <div className={styles.section}>
                <h2>11. Cambios a esta Política</h2>
                <p>
                  Podemos actualizar esta política de privacidad periódicamente. Le notificaremos sobre 
                  cambios significativos publicando la nueva política en nuestro sitio web y actualizando 
                  la fecha de "Última actualización".
                </p>
                <p>
                  Le recomendamos revisar esta política regularmente para estar informado sobre cómo 
                  protegemos su información.
                </p>
              </div>

              <div className={styles.section}>
                <h2>12. Contacto</h2>
                <p>
                  Si tiene preguntas, inquietudes o solicitudes relacionadas con esta política de 
                  privacidad o el tratamiento de sus datos personales, puede contactarnos a través de:
                </p>
                <ul>
                  <li><strong>Email:</strong> gerencia@ramirezasesores.co</li>
                  <li><strong>Teléfono:</strong> +57 (4) 322 1158</li>
                  <li><strong>Dirección:</strong> Carrera 65 #45-20 Interior 1906, Medellín, Colombia</li>
                  <li><strong>Encargado de Protección de Datos:</strong> Departamento de Cumplimiento</li>
                </ul>
                <p>
                  También tiene derecho a presentar una queja ante la autoridad de protección de datos 
                  competente si considera que el tratamiento de sus datos personales infringe la ley.
                </p>
              </div>

              <div className={styles.acknowledgment}>
                <p>
                  Al utilizar nuestro sitio web y servicios, usted reconoce haber leído y entendido 
                  esta política de privacidad y acepta el tratamiento de sus datos personales de 
                  acuerdo con lo aquí establecido.
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