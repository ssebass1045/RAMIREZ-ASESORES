import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Outsourcing Contable", href: "/servicios/outsourcing-contable" },
    { name: "Revisoría Fiscal", href: "/servicios/revisoria-fiscal" },
    { name: "Auditoría Financiera", href: "/servicios/auditoria-financiera" },
    { name: "Asesoría Aduanera", href: "/servicios/asesoria-aduanera" },
    { name: "Consultoría Cambiaria", href: "/servicios/consultoria-cambiaria" },
    {
      name: "Consultoría Tributaria",
      href: "/servicios/consultoria-tributaria",
    },
    { name: "Asesoría Financiera", href: "/servicios/asesoria-financiera" },
    {
      name: "Consultoría Empresarial",
      href: "/servicios/consultoria-empresarial",
    },
    {
      name: "Servicios Especializados",
      href: "/servicios/servicios-especializados",
    },
  ];

  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Equipo", href: "/equipo" },
    { name: "Blog", href: "/blog" },
    { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
    { name: "Contacto", href: "/contacto" },
    { name: "Política de Privacidad", href: "/politica-privacidad" },
    { name: "Términos y Condiciones", href: "/terminos-condiciones" },
  ];

  const contactInfo = {
    address: "Carrera 65 #45-20 Interior 1906, Medellín, Colombia",
    phone: "+57 (4) 322 1158",
    mobile: "+57 321 582 9812",
    email: "contabilidad@ramirezasesores.co",
    hours: "Lunes a Viernes: 8:00 AM - 5:00 PM",
  };

  const socialMedia = [
    {
      name: "Facebook",
      icon: "/icons/facebook.svg",
      href: "https://facebook.com/ramirezasesores",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram.svg",
      href: "https://instagram.com/ramirezasesores",
    },
    {
      name: "X (Twitter)",
      icon: "/icons/x.svg",
      href: "https://twitter.com/ramirezasesores",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          {/* Company Info */}
          <div className={styles.footerSection}>
            <div className={styles.logoContainer}>
              <Image
                src="/logo.png"
                alt="Ramírez y Asesores SAS"
                width={200}
                height={70}
                className={styles.logo}
              />
            </div>
            <p className={styles.companyDescription}>
              Más de 20 años acompañando empresas en Medellín y Antioquia con
              servicios profesionales de outsourcing contable, auditoría,
              revisoría fiscal y asesorías jurídicas.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>{contactInfo.address}</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>{contactInfo.phone}</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <span>{contactInfo.mobile}</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span>{contactInfo.email}</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>⏰</span>
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Nuestros Servicios</h3>
            <ul className={styles.footerLinks}>
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className={styles.footerLink}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Enlaces Rápidos</h3>
            <ul className={styles.footerLinks}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa y Redes Sociales */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Ubicación y Redes</h3>

            {/* Mapa de Google Maps */}
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d-75.569905424164!3d6.201661493798989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468280b8c6e6c9%3A0x4c95d0e0c8c9c9c9!2sCarrera%2065%20%2345-20%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Ramírez y Asesores SAS en Medellín"
                className={styles.mapIframe}
              />
            </div>

            <div className={styles.socialMedia}>
              <h4 className={styles.socialTitle}>Síguenos en Redes Sociales</h4>
              <div className={styles.socialIcons}>
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label={social.name}
                    title={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={`${social.name} de Ramírez y Asesores`}
                      width={24}
                      height={24}
                      className={styles.socialIconImage}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear} Ramírez y Asesores SAS. Todos los derechos
            reservados.
          </div>

          <div className={styles.legalLinks}>
            <Link href="/politica-privacidad" className={styles.legalLink}>
              Política de Privacidad
            </Link>
            <span className={styles.separator}>|</span>
            <Link href="/terminos-condiciones" className={styles.legalLink}>
              Términos y Condiciones
            </Link>
            <span className={styles.separator}>|</span>
            <Link href="/mapa-del-sitio" className={styles.legalLink}>
              Mapa del Sitio
            </Link>
          </div>

          <div className={styles.seoText}>
            <p>
              <strong>SEO Local Medellín:</strong> Outsourcing contable Medellín
              • Auditoría fiscal Antioquia • Revisoría fiscal Medellín •
              Asesoría aduanera Colombia • Consultoría tributaria • Servicios
              contables profesionales • Empresa de auditoría Medellín
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
