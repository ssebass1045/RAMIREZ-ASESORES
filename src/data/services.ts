export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'outsourcing-contable',
    title: 'Contabilidad por Outsourcing',
    description: 'Equipo altamente profesional y experimentado en manejo contable alineado rigurosamente con la normativa tributaria aplicada a cada tipo de negocio.',
    icon: '📊',
    image: '/services/outsourcing-contable.jpg',
    features: [
      'Registro y clasificación de operaciones contables diarias',
      'Conciliaciones bancarias, de cartera y de proveedores',
      'Gestión de nómina, prestaciones sociales y seguridad social',
      'Liquidación y presentación de impuestos nacionales y territoriales',
      'Elaboración de estados financieros bajo NIIF',
      'Preparación de reportes gerenciales e indicadores financieros'
    ],
    benefits: [
      'Ahorro en costos laborales',
      'Información contable precisa y actualizada',
      'Reducción de riesgos tributarios y sanciones',
      'Equipo experto disponible sin incrementar tu nómina'
    ]
  },
  {
    id: 'revisoria-fiscal',
    title: 'Revisoría Fiscal',
    description: 'Servicios de Revisoría Fiscal con enfoque preventivo, independiente y orientado a proteger los intereses de los socios, inversionistas y la empresa.',
    icon: '🔍',
    image: '/services/revisoria-fiscal.jpg',
    features: [
      'Revisión permanente del cumplimiento contable, fiscal y legal',
      'Verificación de la razonabilidad de los estados financieros',
      'Evaluación de los sistemas de control interno',
      'Supervisión del cumplimiento de obligaciones laborales y societarias',
      'Elaboración de informes mensuales, trimestrales o anuales',
      'Participación en reuniones de junta y asambleas'
    ],
    benefits: [
      'Independencia, transparencia y rigor técnico',
      'Identificación temprana de riesgos y recomendaciones de mejora',
      'Cumplimiento frente a DIAN, SuperSociedades, UGPP y demás entidades'
    ]
  },
  {
    id: 'auditoria-financiera',
    title: 'Auditoría Financiera',
    description: 'Auditorías independientes para verificar la confiabilidad de la información financiera y la eficiencia de los procesos internos de tu empresa.',
    icon: '📋',
    image: '/services/auditoria-financiera.jpg',
    features: [
      'Auditoría completa o por áreas críticas (inventarios, costos, cartera, nómina, etc.)',
      'Verificación de la aplicación de políticas contables y normas NIIF',
      'Revisión del cumplimiento tributario y fiscal',
      'Evaluación de controles internos financieros y operativos',
      'Identificación de riesgos y propuesta de planes de acción',
      'Informes con hallazgos, análisis y recomendaciones gerenciales'
    ],
    benefits: [
      'Confianza en la información financiera',
      'Identificación de oportunidades de mejora',
      'Preparación para procesos de venta, fusión o adquisición',
      'Cumplimiento de requisitos para inversionistas'
    ]
  },
  {
    id: 'asesoria-aduanera',
    title: 'Asesoría Aduanera',
    description: 'Apoyamos a empresas con operaciones de comercio exterior para garantizar el correcto cumplimiento del régimen aduanero vigente en Colombia.',
    icon: '🌐',
    image: '/services/asesoria-aduanera.jpg',
    features: [
      'Revisión documental de importaciones y exportaciones',
      'Validación de declaraciones aduaneras y sus soportes',
      'Identificación de riesgos, inconsistencias y posibles sanciones',
      'Auditorías preventivas antes de inspecciones oficiales',
      'Acompañamiento en procesos ante autoridades aduaneras'
    ],
    benefits: [
      'Reducción de contingencias y sanciones',
      'Procesos de comercio exterior más seguros y eficientes',
      'Diagnóstico claro de la operación aduanera de la empresa'
    ]
  },
  {
    id: 'consultoria-cambiaria',
    title: 'Consultoría Cambiaria',
    description: 'Verificamos y acompañamos el cumplimiento de las obligaciones cambiarias frente al Banco de la República, DIAN y demás autoridades competentes.',
    icon: '💱',
    image: '/services/consultoria-cambiaria.jpg',
    features: [
      'Revisión de canalización de divisas',
      'Acompañamiento en operaciones de endeudamiento externo',
      'Validación de registros, declaraciones y formularios cambiarios',
      'Identificación de riesgos de sanciones',
      'Asesoría en respuestas a requerimientos administrativos',
      'Auditoría a inversiones internacionales'
    ],
    benefits: [
      'Cumplimiento normativo cambiario',
      'Prevención de sanciones del régimen cambiario',
      'Optimización de operaciones financieras internacionales'
    ]
  },
  {
    id: 'consultoria-tributaria',
    title: 'Consultoría Tributaria',
    description: 'Brindamos acompañamiento experto en todo el ciclo tributario de tu empresa, desde la planeación hasta la defensa técnica frente a entidades estatales.',
    icon: '💰',
    image: '/services/consultoria-tributaria.jpg',
    features: [
      'Planeación tributaria estratégica anual',
      'Elaboración y revisión de declaraciones tributarias',
      'Análisis de riesgos tributarios y cumplimiento fiscal',
      'Representación en procesos administrativos con DIAN',
      'Actualización y aplicación de nuevas normas tributarias',
      'Optimización de cargas fiscales dentro del marco legal'
    ],
    benefits: [
      'Minimización de riesgos sancionatorios',
      'Eficiencia fiscal y financiera',
      'Soporte experto en auditorías de DIAN',
      'Optimización de cargas tributarias'
    ]
  },
  {
    id: 'asesoria-financiera',
    title: 'Asesoría Financiera y Estratégica',
    description: 'Te ayudamos a fortalecer el desempeño financiero de tu empresa mediante análisis, proyecciones y estrategias a medida.',
    icon: '📈',
    image: '/services/asesoria-financiera.jpg',
    features: [
      'Análisis de liquidez, rentabilidad y endeudamiento',
      'Elaboración de proyecciones y presupuestos',
      'Modelos financieros personalizados',
      'Diagnósticos financieros completos',
      'Informes ejecutivos para juntas directivas',
      'Acompañamiento en decisiones estratégicas'
    ],
    benefits: [
      'Toma de decisiones informada',
      'Optimización del desempeño financiero',
      'Preparación para crecimiento y expansión',
      'Mejora en la gestión de recursos'
    ]
  },
  {
    id: 'consultoria-empresarial',
    title: 'Consultoría Empresarial y Cumplimiento Normativo',
    description: 'Apoyamos a tu empresa a implementar buenas prácticas y a alinearse a la normatividad vigente en materia contable, laboral, societaria, tributaria, aduanera y cambiaria.',
    icon: '🏢',
    image: '/services/consultoria-empresarial.jpg',
    features: [
      'Implementación de políticas contables bajo NIIF',
      'Actualización de libros contables',
      'Diagnósticos de cumplimiento regulatorio',
      'Capacitación a equipos administrativos y contables',
      'Organización y depuración de contabilidades atrasadas',
      'Preparación para visitas de entidades de control'
    ],
    benefits: [
      'Cumplimiento normativo integral',
      'Mejora en procesos y controles internos',
      'Reducción de riesgos legales y regulatorios',
      'Preparación para auditorías y visitas oficiales'
    ]
  }
];
