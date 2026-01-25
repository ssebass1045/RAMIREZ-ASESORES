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

        {/* Contact Grid con Fondo Tecnológico */}
        <section className={`${styles.contactGrid} section-padding`}>
          <div className="container">
            <div className={styles.gridContainer}>
              
              {/* Formulario de Contacto */}
              <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Solicita tu Consultoría Gratuita</h2>
                  <p className={styles.formSubtitle}>
                    Completa el formulario y nuestro agente IA te contactará en segundos
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
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud al Agente IA'}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <div className={styles.successMessage}>
                      ✅ ¡Gracias por contactarnos! Nuestro agente IA te responderá en segundos.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className={styles.errorMessage}>
                      ❌ Hubo un error al enviar el formulario. Por favor, intenta nuevamente.
                    </div>
                  )}
                </form>
              </div>

              {/* Tarjeta de Presentación del Agente IA */}
              <div className={styles.aiPresentationCard}>
                <div className={styles.aiCardContent}>
                  {/* Imagen del Agente IA */}
                  <div className={styles.aiImageContainer}>
                    <div className={styles.aiImageWrapper}>
                      
                      <img
                        src="/agenteia.png"
                        alt="Agente IA de Ramírez y Asesores - Robot profesional con corbata azul"
                        className={styles.aiImage}
                        />

                      <div className={styles.aiImageGlow}></div>
                    </div>
                    <div className={styles.aiBadge}>
                      <span className={styles.aiIcon}>🤖</span>
                      <span className={styles.aiLabel}>AGENTE DE IA OFICIAL</span>
                    </div>
                  </div>
                  
                  {/* Información del Agente */}
                  <div className={styles.aiInfo}>
                    <h3 className={styles.aiTitle}>
                      <span className={styles.aiTitleMain}>RA-3000</span>
                      <span className={styles.aiTitleSub}>Asistente Virtual Inteligente</span>
                    </h3>
                    
                    <div className={styles.aiStats}>
                      <div className={styles.aiStat}>
                        <div className={styles.statIcon}>⚡</div>
                        <div className={styles.statContent}>
                          <div className={styles.statValue}>0.8s</div>
                          <div className={styles.statLabel}>Respuesta promedio</div>
                        </div>
                      </div>
                      
                      <div className={styles.aiStat}>
                        <div className={styles.statIcon}>📊</div>
                        <div className={styles.statContent}>
                          <div className={styles.statValue}>15+ años</div>
                          <div className={styles.statLabel}>Experiencia integrada</div>
                        </div>
                      </div>
                      
                      <div className={styles.aiStat}>
                        <div className={styles.statIcon}>🌐</div>
                        <div className={styles.statContent}>
                          <div className={styles.statValue}>4 idiomas</div>
                          <div className={styles.statLabel}>Español, Inglés, Portugués, francés</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.aiDescription}>
                      <p>
                        Soy el asistente virtual oficial de <strong>Ramírez y Asesores SAS</strong>. 
                        Estoy entrenado con toda nuestra experiencia de 15+ años en servicios contables 
                        y puedo ayudarte con:
                      </p>
                    </div>
                    
                    <div className={styles.aiCapabilities}>
                      <div className={styles.capability}>
                        <span className={styles.capabilityIcon}>✅</span>
                        <span>Consultas inmediatas 24/7</span>
                      </div>
                      <div className={styles.capability}>
                        <span className={styles.capabilityIcon}>✅</span>
                        <span>Agendamiento automático de reuniones</span>
                      </div>
                      <div className={styles.capability}>
                        <span className={styles.capabilityIcon}>✅</span>
                        <span>Conexión directa con especialistas</span>
                      </div>
                      <div className={styles.capability}>
                        <span className={styles.capabilityIcon}>✅</span>
                        <span>Análisis preliminar de necesidades</span>
                      </div>
                    </div>
                    
                    <div className={styles.aiCta}>
                      <button
                        onClick={handleWhatsAppClick}
                        className={`btn btn-primary ${styles.aiWhatsappButton}`}
                      >
                        <span className={styles.buttonIcon}>💬</span>
                        <span className={styles.buttonText}>Chatear directamente con RA-3000</span>
                      </button>
                      <p className={styles.aiCtaNote}>
                        Conecta al instante con nuestro agente IA por WhatsApp
                      </p>
                    </div>
                    
                    <div className={styles.aiTechNote}>
                      <p>
                        <span className={styles.techIcon}>🔒</span>
                        <strong>Seguridad garantizada:</strong> Todas las conversaciones están encriptadas 
                        y protegidas por nuestros sistemas de última generación.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Preview - Actualizado para IA */}
        <section className={`${styles.faqPreview} section-padding`}>
          <div className="container">
            <div className={styles.faqContent}>
              <h2 className={styles.faqTitle}>Preguntas Frecuentes sobre nuestro Agente IA</h2>
              <p className={styles.faqSubtitle}>
                Resolvemos dudas comunes sobre nuestro asistente virtual de WhatsApp
              </p>
              
              <div className={styles.faqGrid}>
                <div className={styles.faqItem}>
                  <h4>¿Cómo funciona el agente de IA?</h4>
                  <p>Nuestro asistente virtual analiza tu consulta, responde preguntas frecuentes, 
                  agenda reuniones y te conecta con el especialista adecuado en tiempo real.</p>
                </div>
                
                <div className={styles.faqItem}>
                  <h4>¿Puede el agente IA resolver consultas complejas?</h4>
                  <p>Sí, nuestro agente está entrenado con toda nuestra experiencia de 15+ años 
                  y puede escalar consultas complejas a nuestros asesores humanos especializados.</p>
                </div>
                
                <div className={styles.faqItem}>
                  <h4>¿Qué horario atiende el agente IA?</h4>
                  <p>Está disponible 24/7 para consultas iniciales. Las reuniones con especialistas 
                  se agendan dentro de nuestro horario laboral (Lunes a Viernes 8AM-6PM).</p>
                </div>
                
                <div className={styles.faqItem}>
                  <h4>¿Cómo agendo una consultoría gratuita con el agente IA?</h4>
                  <p>Completa el formulario o chatea directamente por WhatsApp. El agente te guiará 
                  para agendar una consultoría gratuita con el área especializada.</p>
                </div>
              </div>
              
              <div className={styles.faqCta}>
                <p className={styles.faqFinalNote}>
                  💡 <strong>Tip:</strong> Nuestro agente IA también puede ayudarte con información sobre 
                  servicios, precios, documentación requerida y procesos específicos de tu empresa.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <WhatsAppButton />
    </>
  );
}
