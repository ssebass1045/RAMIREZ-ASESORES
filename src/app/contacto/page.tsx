'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './contacto.module.css';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const servicios = [
    'Outsourcing Contable',
    'Revisoría Fiscal',
    'Auditoría Financiera',
    'Asesoría Aduanera',
    'Consultoría Cambiaria',
    'Consultoría Tributaria',
    'Asesoría Financiera',
    'Consultoría Empresarial',
    'Otro servicio'
  ];

  const contactInfo = {
    direccion: 'Carrera 65 #45-20 Interior 1906, Medellín, Colombia',
    telefono: '+57 (4) 322 1158',
    celular: '+57 321 582 9812',
    email: 'gerencia@ramirezasesores.co',
    horario: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573215829812'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    // Crear mensaje para WhatsApp
    const mensajeWhatsApp = `
¡Hola! Me gustaría recibir información sobre los servicios de Ramírez y Asesores SAS.

*Información del contacto:*
👤 Nombre: ${formData.nombre}
🏢 Empresa: ${formData.empresa || 'No especificada'}
📧 Email: ${formData.email}
📱 Teléfono: ${formData.telefono}
🛠️ Servicio de interés: ${formData.servicio}

💬 Mensaje:
${formData.mensaje}

*Por favor contactarme para una consultoría gratuita.*
    `.trim();

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    
    // Crear URL de WhatsApp
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank');
    
    // También puedes enviar el formulario a tu backend si lo deseas
    // await fetch('/api/contacto', { method: 'POST', body: JSON.stringify(formData) });
    
      
      setSubmitStatus('success');
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: ''
      });
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = `¡Hola! Me gustaría recibir información sobre los servicios de Ramírez y Asesores SAS.`;
    const url = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span className={styles.highlight}>Contáctanos</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Estamos aquí para ayudarte. Solicita una consultoría gratuita y descubre 
                cómo podemos impulsar el crecimiento de tu empresa.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className={`${styles.contactGrid} section-padding`}>
          <div className="container">
            <div className={styles.gridContainer}>
              
              {/* Formulario de Contacto */}
              <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Solicita tu Consultoría Gratuita</h2>
                  <p className={styles.formSubtitle}>
                    Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
                  </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="nombre" className={styles.formLabel}>
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        required
                        placeholder="Ingresa tu nombre completo"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="empresa" className={styles.formLabel}>
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        required
                        placeholder="tucorreo@empresa.com"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="telefono" className={styles.formLabel}>
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        required
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="servicio" className={styles.formLabel}>
                      Servicio de interés *
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleInputChange}
                      className={styles.formSelect}
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      {servicios.map((servicio) => (
                        <option key={servicio} value={servicio}>
                          {servicio}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="mensaje" className={styles.formLabel}>
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className={styles.formTextarea}
                      required
                      rows={5}
                      placeholder="Cuéntanos sobre tu empresa y qué necesitas..."
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button
                      type="submit"
                      className={`btn btn-primary ${styles.submitButton}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <div className={styles.successMessage}>
                      ✅ ¡Gracias por contactarnos! Te responderemos en menos de 24 horas.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className={styles.errorMessage}>
                      ❌ Hubo un error al enviar el formulario. Por favor, intenta nuevamente.
                    </div>
                  )}
                </form>
              </div>

              {/* Información de Contacto */}
              <div className={styles.infoContainer}>
                <div className={styles.infoCard}>
                  <h3 className={styles.infoTitle}>Información de Contacto</h3>
                  
                  <div className={styles.contactItems}>
                    <div className={styles.contactItem}>
                      <div className={styles.contactIcon}>📍</div>
                      <div>
                        <h4>Dirección</h4>
                        <p>{contactInfo.direccion}</p>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <div className={styles.contactIcon}>📞</div>
                      <div>
                        <h4>Teléfono Fijo</h4>
                        <p>{contactInfo.telefono}</p>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <div className={styles.contactIcon}>📱</div>
                      <div>
                        <h4>Celular / WhatsApp</h4>
                        <p>{contactInfo.celular}</p>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <div className={styles.contactIcon}>✉️</div>
                      <div>
                        <h4>Correo Electrónico</h4>
                        <p>{contactInfo.email}</p>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <div className={styles.contactIcon}>⏰</div>
                      <div>
                        <h4>Horario de Atención</h4>
                        <p>{contactInfo.horario}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.whatsappCta}>
                    <button
                      onClick={handleWhatsAppClick}
                      className={`btn btn-primary ${styles.whatsappButton}`}
                    >
                      💬 Chatear por WhatsApp
                    </button>
                    <p className={styles.whatsappNote}>
                      Resolvemos tus dudas al instante
                    </p>
                  </div>

                  <div className={styles.mapContainer}>
                    <div className={styles.mapPlaceholder}>
                      <div className={styles.mapText}>
                        📍 Mapa de Google Maps
                      </div>
                      <p className={styles.mapNote}>
                        Ubicación exacta de nuestras oficinas en Medellín
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className={`${styles.faqPreview} section-padding`}>
          <div className="container">
            <div className={styles.faqContent}>
              <h2 className={styles.faqTitle}>Preguntas Frecuentes</h2>
              <p className={styles.faqSubtitle}>
                Resolvemos algunas dudas comunes sobre nuestros servicios
              </p>
              
              <div className={styles.faqGrid}>
                <div className={styles.faqItem}>
                  <h4>¿Cuánto tiempo toma obtener una cotización?</h4>
                  <p>Te enviamos una cotización preliminar en menos de 24 horas hábiles.</p>
                </div>
                
                <div className={styles.faqItem}>
                  <h4>¿Ofrecen servicios para empresas pequeñas?</h4>
                  <p>Sí, tenemos planes adaptados a empresas de todos los tamaños.</p>
                </div>
                
                <div className={styles.faqItem}>
                  <h4>¿Trabajan en toda Medellín?</h4>
                  <p>Atendemos empresas en toda el área metropolitana de Medellín.</p>
                </div>
                
                <div className={styles.faqItem}>
                  <h4>¿Cómo agendo una consultoría gratuita?</h4>
                  <p>Completa el formulario o contáctanos por WhatsApp para agendar.</p>
                </div>
              </div>
              
              <div className={styles.faqCta}>
                <a href="/preguntas-frecuentes" className="btn btn-outline">
                  Ver Todas las Preguntas Frecuentes
                </a>
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