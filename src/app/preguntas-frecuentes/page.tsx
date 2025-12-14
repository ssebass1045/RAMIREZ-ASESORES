'use client'

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './preguntas-frecuentes.module.css';
import { useState } from 'react';


type Pregunta = {
  id: string;
  pregunta: string;
  respuesta: string;
  categoria: string;
};

export default function PreguntasFrecuentes() {
  const [preguntaActiva, setPreguntaActiva] = useState<string | null>(null);
  const [categoriaActiva, setCategoriaActiva] = useState<string>('todas');

  const preguntas: Pregunta[] = [
    // Outsourcing Contable
    {
      id: 'outsourcing-1',
      pregunta: '¿Qué es el outsourcing contable y cómo beneficia a mi empresa en Medellín?',
      respuesta: 'El outsourcing contable es la externalización de los procesos contables de tu empresa a un equipo especializado como el nuestro. En Medellín, esto te beneficia porque: 1) Reduces costos operativos al no necesitar un departamento contable interno, 2) Accedes a expertos en normativa local y nacional, 3) Garantizas cumplimiento tributario oportuno, 4) Obtienes información financiera precisa para la toma de decisiones, y 5) Te enfocas en el core business de tu empresa mientras nosotros manejamos la contabilidad.',
      categoria: 'Outsourcing Contable'
    },
    {
      id: 'outsourcing-2',
      pregunta: '¿Qué servicios incluye el outsourcing contable con Ramírez y Asesores?',
      respuesta: 'Nuestro servicio de outsourcing contable en Medellín incluye: registro contable diario, conciliaciones bancarias, gestión de nómina y seguridad social, liquidación de impuestos (IVA, renta, ICA, retenciones), elaboración de estados financieros bajo NIIF, preparación de reportes gerenciales, implementación de software contable, y soporte en visitas de entes de control como DIAN o SuperSociedades.',
      categoria: 'Outsourcing Contable'
    },
    {
      id: 'outsourcing-3',
      pregunta: '¿Cuánto cuesta el servicio de outsourcing contable para una PYME en Medellín?',
      respuesta: 'El costo varía según el tamaño de tu empresa, volumen de operaciones y servicios específicos requeridos. Ofrecemos planes personalizados que se adaptan a tus necesidades. Generalmente, las PYMES en Medellín obtienen ahorros del 30-50% comparado con tener un departamento contable interno. Contáctanos para una cotización personalizada sin compromiso.',
      categoria: 'Outsourcing Contable'
    },

    // Revisoría Fiscal
    {
      id: 'revisoria-1',
      pregunta: '¿Es obligatoria la revisoría fiscal para mi empresa en Medellín?',
      respuesta: 'Según el Código de Comercio colombiano, están obligadas a tener revisor fiscal las sociedades por acciones (S.A.), las sociedades limitadas (Ltda.) con activos brutos superiores a 5.000 salarios mínimos o ingresos brutos superiores a 3.000 salarios mínimos. En Medellín, muchas PYMES cumplen estos requisitos. Te asesoramos para determinar si tu empresa requiere revisor fiscal.',
      categoria: 'Revisoría Fiscal'
    },
    {
      id: 'revisoria-2',
      pregunta: '¿Qué diferencia hay entre un contador y un revisor fiscal?',
      respuesta: 'El contador se encarga del registro y procesamiento de la información contable diaria. El revisor fiscal, por su parte, es un profesional independiente que verifica y da fe pública sobre la razonabilidad de los estados financieros, evalúa los controles internos y supervisa el cumplimiento legal. En Ramírez y Asesores, ofrecemos ambos servicios de manera integrada.',
      categoria: 'Revisoría Fiscal'
    },

    // Auditoría
    {
      id: 'auditoria-1',
      pregunta: '¿Cuándo necesito una auditoría financiera para mi empresa en Medellín?',
      respuesta: 'Necesitas una auditoría financiera cuando: 1) Requieres financiamiento bancario o inversionistas, 2) Vas a vender o fusionar tu empresa, 3) Sospechas de irregularidades contables, 4) Es requisito de socios o junta directiva, 5) Necesitas certificar estados financieros para licitaciones públicas. En Medellín, muchas empresas la solicitan anualmente como práctica preventiva.',
      categoria: 'Auditoría'
    },
    {
      id: 'auditoria-2',
      pregunta: '¿Cuánto tiempo toma una auditoría financiera completa?',
      respuesta: 'El tiempo depende del tamaño de la empresa y complejidad de operaciones. Para una PYME típica en Medellín, una auditoría completa toma entre 2-4 semanas. Ofrecemos auditorías por áreas específicas (inventarios, cartera, nómina) que toman menos tiempo. Te proporcionamos un cronograma detallado antes de comenzar.',
      categoria: 'Auditoría'
    },

    // Asesoría Aduanera
    {
      id: 'aduanera-1',
      pregunta: '¿Qué empresas en Medellín necesitan asesoría aduanera?',
      respuesta: 'Necesitan asesoría aduanera las empresas que: importan materias primas o productos, exportan bienes o servicios, manejan operaciones de comercio exterior, tienen proveedores o clientes internacionales, o realizan inversión extranjera. En Medellín, muchas empresas manufactureras, textiles y de tecnología requieren estos servicios.',
      categoria: 'Asesoría Aduanera'
    },

    // Consultoría Tributaria
    {
      id: 'tributaria-1',
      pregunta: '¿Cómo puedo optimizar mis impuestos legalmente en Colombia?',
      respuesta: 'La optimización tributaria legal se logra mediante: 1) Planeación tributaria estratégica anual, 2) Aprovechamiento de beneficios y exenciones, 3) Estructuración adecuada de operaciones, 4) Deducciones permitidas, 5) Timing de reconocimiento de ingresos y gastos. En Ramírez y Asesores diseñamos estrategias personalizadas para empresas en Medellín.',
      categoria: 'Consultoría Tributaria'
    },
    {
      id: 'tributaria-2',
      pregunta: '¿Qué hacer si recibo una visita de la DIAN en Medellín?',
      respuesta: 'Si recibes una visita de la DIAN: 1) Mantén la calma y solicita identificación del funcionario, 2) Comunícate inmediatamente con nosotros, 3) No firmes documentos sin asesoría, 4) Proporciona solo la información solicitada, 5) Lleva un registro de todo lo solicitado. Ofrecemos acompañamiento completo durante visitas de la DIAN en Medellín.',
      categoria: 'Consultoría Tributaria'
    },

    // General
    {
      id: 'general-1',
      pregunta: '¿Por qué elegir Ramírez y Asesores sobre otras firmas en Medellín?',
      respuesta: 'Nos diferenciamos por: 1) Más de 15 años de experiencia en Medellín, 2) Conocimiento profundo del mercado local, 3) Equipo multidisciplinario especializado, 4) Tecnología de punta en procesos contables, 5) Enfoque preventivo y estratégico, 6) Atención personalizada y cercana, 7) Resultados comprobados con más de 500 clientes satisfechos.',
      categoria: 'General'
    },
    {
      id: 'general-2',
      pregunta: '¿Trabajan con empresas de todos los tamaños en Medellín?',
      respuesta: 'Sí, trabajamos con microempresas, PYMES y grandes empresas en Medellín y área metropolitana. Adaptamos nuestros servicios y tarifas según el tamaño y necesidades específicas de cada cliente. Tenemos planes especiales para emprendedores y startups del ecosistema tecnológico de Medellín.',
      categoria: 'General'
    },
    {
      id: 'general-3',
      pregunta: '¿Cómo es el proceso de contratación de sus servicios?',
      respuesta: 'El proceso es simple: 1) Contacto inicial (llamada, WhatsApp o formulario), 2) Diagnóstico gratuito de tus necesidades, 3) Propuesta personalizada de servicios, 4) Firma de contrato y confidencialidad, 5) Implementación con acompañamiento completo, 6) Seguimiento y reportes periódicos. Todo el proceso puede hacerse de manera virtual o en nuestras oficinas en Medellín.',
      categoria: 'General'
    },
    {
      id: 'general-4',
      pregunta: '¿Garantizan la confidencialidad de la información de mi empresa?',
      respuesta: 'Absolutamente. La confidencialidad es uno de nuestros valores corporativos. Firmamos acuerdos de confidencialidad, utilizamos sistemas seguros con encriptación, y nuestro personal está entrenado en protección de datos. Cumplimos con la Ley 1581 de 2012 de protección de datos personales en Colombia.',
      categoria: 'General'
    },
    {
      id: 'general-5',
      pregunta: '¿Ofrecen servicios de manera virtual o solo presencial en Medellín?',
      respuesta: 'Ofrecemos ambos modelos. Para empresas en Medellín, podemos trabajar de manera híbrida: reuniones presenciales cuando sea necesario y seguimiento virtual. Para empresas fuera de Medellín, trabajamos completamente de manera virtual con tecnología segura. Adaptamos nuestro modelo a tus preferencias.',
      categoria: 'General'
    }
  ];

  const categorias = [
    { id: 'todas', nombre: 'Todas las Categorías', count: preguntas.length },
    { id: 'Outsourcing Contable', nombre: 'Outsourcing Contable', count: preguntas.filter(p => p.categoria === 'Outsourcing Contable').length },
    { id: 'Revisoría Fiscal', nombre: 'Revisoría Fiscal', count: preguntas.filter(p => p.categoria === 'Revisoría Fiscal').length },
    { id: 'Auditoría', nombre: 'Auditoría', count: preguntas.filter(p => p.categoria === 'Auditoría').length },
    { id: 'Asesoría Aduanera', nombre: 'Asesoría Aduanera', count: preguntas.filter(p => p.categoria === 'Asesoría Aduanera').length },
    { id: 'Consultoría Tributaria', nombre: 'Consultoría Tributaria', count: preguntas.filter(p => p.categoria === 'Consultoría Tributaria').length },
    { id: 'General', nombre: 'General', count: preguntas.filter(p => p.categoria === 'General').length }
  ];

  const preguntasFiltradas = categoriaActiva === 'todas' 
    ? preguntas 
    : preguntas.filter(p => p.categoria === categoriaActiva);

  const togglePregunta = (id: string) => {
    setPreguntaActiva(preguntaActiva === id ? null : id);
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
                Preguntas <span className={styles.highlight}>Frecuentes</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Encuentra respuestas a las dudas más comunes sobre nuestros servicios contables 
                y financieros en Medellín
              </p>
            </div>
          </div>
        </section>

        {/* Categorías */}
        <section className={`${styles.categorias} section-padding`}>
          <div className="container">
            <div className={styles.categoriasContent}>
              <h2 className={styles.categoriasTitle}>Explora por Categoría</h2>
              <p className={styles.categoriasSubtitle}>
                Selecciona una categoría para ver preguntas específicas
              </p>
              
              <div className={styles.categoriasGrid}>
                {categorias.map((categoria) => (
                  <button
                    key={categoria.id}
                    className={`${styles.categoriaCard} ${
                      categoriaActiva === categoria.id ? styles.categoriaActiva : ''
                    }`}
                    onClick={() => setCategoriaActiva(categoria.id)}
                  >
                    <h3 className={styles.categoriaNombre}>{categoria.nombre}</h3>
                    <span className={styles.categoriaCount}>{categoria.count} preguntas</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas y Respuestas */}
        <section className={`${styles.preguntas} section-padding`}>
          <div className="container">
            <div className={styles.preguntasContent}>
              <div className={styles.preguntasHeader}>
                <h2 className={styles.preguntasTitle}>
                  {categoriaActiva === 'todas' 
                    ? 'Todas las Preguntas Frecuentes' 
                    : `Preguntas sobre ${categoriaActiva}`}
                </h2>
                <p className={styles.preguntasCount}>
                  {preguntasFiltradas.length} preguntas encontradas
                </p>
              </div>
              
              <div className={styles.preguntasList}>
                {preguntasFiltradas.map((pregunta) => (
                  <div 
                    key={pregunta.id} 
                    className={`${styles.preguntaItem} ${
                      preguntaActiva === pregunta.id ? styles.preguntaActiva : ''
                    }`}
                  >
                    <button
                      className={styles.preguntaButton}
                      onClick={() => togglePregunta(pregunta.id)}
                      aria-expanded={preguntaActiva === pregunta.id}
                    >
                      <span className={styles.preguntaTexto}>{pregunta.pregunta}</span>
                      <span className={styles.preguntaIcon}>
                        {preguntaActiva === pregunta.id ? '−' : '+'}
                      </span>
                    </button>
                    
                    <div 
                      className={styles.respuestaContent}
                      style={{
                        maxHeight: preguntaActiva === pregunta.id ? '1000px' : '0',
                        opacity: preguntaActiva === pregunta.id ? '1' : '0'
                      }}
                    >
                      <div className={styles.respuestaTexto}>
                        <p>{pregunta.respuesta}</p>
                        <div className={styles.respuestaMeta}>
                          <span className={styles.respuestaCategoria}>
                            Categoría: {pregunta.categoria}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de Preguntas */}
        <section className={`${styles.formulario} section-padding`}>
          <div className="container">
            <div className={styles.formularioContent}>
              <div className={styles.formularioText}>
                <h2 className={styles.formularioTitle}>¿No encontraste tu respuesta?</h2>
                <p className={styles.formularioSubtitle}>
                  Envíanos tu pregunta y nuestro equipo de expertos te responderá 
                  en menos de 24 horas hábiles
                </p>
                <div className={styles.formularioBenefits}>
                  <div className={styles.benefit}>
                    <span className={styles.benefitIcon}>⚡</span>
                    <span>Respuesta en menos de 24 horas</span>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.benefitIcon}>👨‍💼</span>
                    <span>Atención personalizada de expertos</span>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.benefitIcon}>🔒</span>
                    <span>Confidencialidad garantizada</span>
                  </div>
                </div>
              </div>
              
              <form className={styles.formularioForm}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Tu nombre completo *"
                    className={styles.formInput}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    placeholder="Correo electrónico *"
                    className={styles.formInput}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    placeholder="Teléfono (opcional)"
                    className={styles.formInput}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <select className={styles.formSelect} required>
                    <option value="">Selecciona una categoría *</option>
                    <option value="Outsourcing Contable">Outsourcing Contable</option>
                    <option value="Revisoría Fiscal">Revisoría Fiscal</option>
                                        <option value="Auditoría">Auditoría</option>
                    <option value="Asesoría Aduanera">Asesoría Aduanera</option>
                    <option value="Consultoría Tributaria">Consultoría Tributaria</option>
                    <option value="General">General</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <textarea
                    placeholder="Tu pregunta o consulta específica *"
                    className={styles.formTextarea}
                    rows={4}
                    required
                  />
                </div>
                
                <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>
                  Enviar Pregunta
                </button>
                
                <p className={styles.formNote}>
                  Al enviar tu pregunta, aceptas nuestra política de privacidad.
                  Te contactaremos por el medio que prefieras.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                ¿Listo para resolver todas tus dudas contables?
              </h2>
              <p className={styles.ctaSubtitle}>
                Agenda una consultoría gratuita de 30 minutos con uno de nuestros expertos
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contacto" className="btn btn-primary">
                  Solicitar Consultoría Gratuita
                </a>
                <a href="https://wa.me/573215829812" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  💬 Chatear por WhatsApp
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