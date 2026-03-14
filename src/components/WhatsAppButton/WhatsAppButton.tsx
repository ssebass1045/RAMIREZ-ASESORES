"use client";

import { useState } from "react";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
    habeasData: false,
  });
  const [habeasDataError, setHabeasDataError] = useState(false);

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573219468986";

  const servicios = [
    "Outsourcing Contable",
    "Revisoría Fiscal",
    "Auditoría Financiera",
    "Asesoría Aduanera",
    "Consultoría Cambiaria",
    "Consultoría Tributaria",
    "Asesoría Financiera",
    "Consultoría Empresarial",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
    // Limpiar error cuando el usuario marca la casilla
    if (name === "habeasData" && checked) {
      setHabeasDataError(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const message =
      `¡Hola! Me gustaría solicitar información sobre sus servicios:\n\n` +
      `*Nombre:* ${formData.nombre}\n` +
      `*Email:* ${formData.email}\n` +
      `*Teléfono:* ${formData.telefono}\n` +
      `*Servicio de interés:* ${formData.servicio}\n` +
      `*Mensaje:* ${formData.mensaje}\n\n` +
      `*Empresa:* Ramírez Asesores SAS`;

    return encodeURIComponent(message);
  };

  const handleDirectMessage = () => {
    const message = `¡Hola! Me gustaría recibir información sobre los servicios de Ramírez Asesores SAS.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar Habeas Data
    if (!formData.habeasData) {
      setHabeasDataError(true);
      return;
    }

    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
    setShowForm(false);
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      servicio: "",
      mensaje: "",
      habeasData: false,
    });
    setHabeasDataError(false);
  };

  return (
    <>
      {/* Botón flotante de WhatsApp simplificado y profesional */}
      <div className={styles.whatsappContainer}>
        {showForm && (
          <div
            className={styles.formOverlay}
            onClick={() => setShowForm(false)}
          >
            <div
              className={styles.formContainer}
              onClick={(e) => e.stopPropagation()}
            >
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
                    {servicios.map((servicio) => (
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

                {/* Casilla de Habeas Data */}
                <div className={styles.formGroup}>
                  <div className={styles.checkboxContainer}>
                    <input
                      type="checkbox"
                      id="habeasDataWhatsApp"
                      name="habeasData"
                      checked={formData.habeasData}
                      onChange={handleCheckboxChange}
                      className={styles.checkboxInput}
                      required
                    />
                    <label
                      htmlFor="habeasDataWhatsApp"
                      className={styles.checkboxLabel}
                    >
                      He leído y acepto la{" "}
                      <a
                        href="https://www.ramirezasesores.co/politica-privacidad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.privacyLink}
                      >
                        Política de Privacidad y Tratamiento de Datos
                      </a>{" "}
                      de Ramírez Asesores SAS *
                    </label>
                  </div>
                  {habeasDataError && (
                    <div className={styles.errorMessage}>
                      ❌ Debes aceptar la Política de Privacidad para continuar.
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitButton}`}
                >
                  <span className={styles.whatsappIconSmall}>💬</span>
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Botón principal simplificado - solo ícono de WhatsApp */}
        <div
          className={styles.whatsappButton}
          onClick={() => setShowForm(true)}
        >
          <div className={styles.whatsappIconContainer}>
            <img
              src="/icons/WhatsApp.svg.webp"
              alt="WhatsApp"
              className={styles.whatsappIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
