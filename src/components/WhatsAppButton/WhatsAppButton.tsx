'use client';

import { useState } from 'react';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573215829812';
  
  const servicios = [
    'Outsourcing Contable',
    'Revisoría Fiscal',
    'Auditoría Financiera',
    'Asesoría Aduanera',
    'Consultoría Cambiaria',
    'Consultoría Tributaria',
    'Asesoría Financiera',
    'Consultoría Empresarial'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    const message = `¡Hola! Me gustaría solicitar información sobre sus servicios:\n\n` +
      `*Nombre:* ${formData.nombre}\n` +
      `*Email:* ${formData.email}\n` +
      `*Teléfono:* ${formData.telefono}\n` +
      `*Servicio de interés:* ${formData.servicio}\n` +
      `*Mensaje:* ${formData.mensaje}\n\n` +
      `*Empresa:* Ramírez y Asesores SAS`;
    
    return encodeURIComponent(message);
  };

  const handleDirectMessage = () => {
    const message = `¡Hola! Me gustaría recibir información sobre los servicios de Ramírez y Asesores SAS.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
    setShowForm(false);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    });
  };

  return (
    <>
      {/* Botón flotante de WhatsApp simplificado y profesional */}
      <div className={styles.whatsappContainer}>
        {showForm && (
          <div className={styles.formOverlay} onClick={() => setShowForm(false)}>
            <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
              <div className={styles.formHeader}>
                <h3>📱 Contactar por WhatsApp</h3>
                <button 
                  className={styles.closeButton}
                  onClick={() => setShowForm(false)}
                  aria-label="Cerrar formulario"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo *"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono *"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Seleccione un servicio *</option>
                    {servicios.map(servicio => (
                      <option key={servicio} value={servicio}>
                        {servicio}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <textarea
                    name="mensaje"
                    placeholder="Mensaje o consulta específica *"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>
                  <span className={styles.whatsappIconSmall}>💬</span>
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Botón principal simplificado - solo ícono de WhatsApp */}
        <div className={styles.whatsappButton} onClick={() => setShowForm(true)}>
          <div className={styles.whatsappIconContainer}>
            <svg viewBox="0 0 32 32" className={styles.whatsappIcon}>
              <path d="M16 0C7.164 0 0 7.164 0 16c0 2.968.824 5.744 2.256 8.112L0 32l8.112-2.256C10.256 31.176 13.032 32 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm7.744 22.256c-.416.744-2.056 1.36-2.84 1.416-.784.056-1.696.416-5.256-1.416-3.56-1.832-5.832-6.328-6-6.616-.168-.288-1.416-2.84-1.416-5.416s.872-2.84 1.192-3.288c.32-.448.696-.56.928-.56h1.168c.288 0 .56.056.784.28.224.224.872.84 1.136 1.416.264.576.448 1.248.168 1.976-.28.728-1.416 2.84-1.696 3.336-.28.496-.56.56-.784.56-.224 0-.56-.056-1.136-.224-.576-.168-2.128-.616-3.336-1.976-1.208-1.36-2.016-3.136-2.24-3.696-.224-.56-.024-.864.168-1.136.192-.272.448-.56.672-.84.224-.28.336-.448.56-.728.224-.28.112-.56-.056-.84-.168-.28-1.416-3.136-1.976-4.2-.56-1.064-1.136-.976-1.528-.976h-1.168c-.448 0-1.136.168-1.752.84-.616.672-2.24 2.184-2.24 5.328s2.296 6.216 2.616 6.664c.32.448 4.536 7.224 11.112 9.784 1.456.56 2.608.896 3.5 1.136.784.224 1.472.196 2.024.112.552-.084 1.696-.696 1.944-1.36.248-.664.248-1.248.168-1.36-.08-.112-.32-.224-.736-.392z"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
