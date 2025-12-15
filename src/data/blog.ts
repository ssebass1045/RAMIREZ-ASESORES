export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'beneficios-outsourcing-contable-pymes-medellin',
    title: '5 Beneficios del Outsourcing Contable para PYMES en Medellín',
    excerpt: 'Descubre cómo el outsourcing contable puede optimizar costos y mejorar la eficiencia en tu empresa medellinense.',
    content: '<p>El outsourcing contable se ha convertido en una estrategia fundamental para las pequeñas y medianas empresas que buscan optimizar sus recursos y garantizar el cumplimiento normativo.</p>',
    author: 'Néstor Ramírez',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Outsourcing Contable',
    image: '/blog/outsourcing-pymes.jpg',
    tags: ['Outsourcing', 'PYMES', 'Contabilidad', 'Eficiencia', 'Medellín'],
    featured: true
  },
  {
    id: 'novedades-normativa-tributaria-2024-colombia',
    title: 'Novedades en Normativa Tributaria 2024 en Colombia',
    excerpt: 'Actualización completa de los cambios en la normativa tributaria colombiana para el año 2024.',
    content: '<p>El año 2024 trae importantes cambios en la normativa tributaria colombiana que afectan a empresas de todos los tamaños.</p>',
    author: 'María Fernanda Callejas',
    date: '2024-01-10',
    readTime: '8 min',
    category: 'Consultoría Tributaria',
    image: '/blog/normativa-tributaria.jpg',
    tags: ['NIIF', 'Normatividad', 'Estados Financieros', 'PYMES', '2024'],
    featured: true
  },
  {
    id: 'como-prepararse-auditoria-fiscal-dian',
    title: 'Cómo Prepararse para una Auditoría Fiscal de la DIAN',
    excerpt: 'Guía práctica para empresas en Medellín sobre cómo prepararse exitosamente para una auditoría fiscal.',
    content: '<p>Una auditoría fiscal de la DIAN puede ser un proceso complejo, pero con la preparación adecuada, tu empresa puede enfrentarla con confianza.</p>',
    author: 'Paula Montoya',
    date: '2024-01-05',
    readTime: '7 min',
    category: 'Auditoría',
    image: '/blog/auditoria-fiscal.jpg',
    tags: ['Auditoría Fiscal', 'DIAN', 'Preparación', 'Cumplimiento', 'Medellín'],
    featured: false
  },
  {
    id: 'implementacion-niif-empresas-medellin',
    title: 'Implementación de NIIF en Empresas de Medellín: Guía Paso a Paso',
    excerpt: 'Proceso detallado para implementar las Normas Internacionales de Información Financiera en tu empresa.',
    content: '<p>La implementación de NIIF es obligatoria para muchas empresas en Colombia y representa un desafío importante.</p>',
    author: 'María Fernanda Callejas',
    date: '2023-12-28',
    readTime: '10 min',
    category: 'Contabilidad',
    image: '/blog/niif-implementacion.jpg',
    tags: ['NIIF', 'Implementación', 'Contabilidad', 'Normatividad', 'Medellín'],
    featured: false
  },
  {
    id: 'ventajas-revisoria-fiscal-preventiva',
    title: 'Ventajas de una Revisoría Fiscal Preventiva para tu Empresa',
    excerpt: 'Cómo una revisoría fiscal preventiva puede proteger los intereses de tu empresa en Medellín.',
    content: '<p>La revisoría fiscal preventiva no solo cumple con un requisito legal, sino que se convierte en una herramienta estratégica para proteger y potenciar tu empresa.</p>',
    author: 'Viviana Vargas',
    date: '2023-12-20',
    readTime: '6 min',
    category: 'Revisoría Fiscal',
    image: '/blog/revisoria-preventiva.jpg',
    tags: ['Revisoría Fiscal', 'Obligaciones', 'Normatividad', 'Cumplimiento', 'Preventiva'],
    featured: false
  },
  {
    id: 'optimizacion-costos-empresariales-medellin',
    title: 'Estrategias de Optimización de Costos para Empresas en Medellín',
    excerpt: 'Métodos efectivos para reducir costos y mejorar la rentabilidad de tu empresa en el mercado local.',
    content: '<p>En el competitivo mercado de Medellín, la optimización de costos se ha convertido en una prioridad para las empresas que buscan mantener su rentabilidad y competitividad.</p>',
    author: 'Néstor Ramírez',
    date: '2023-12-15',
    readTime: '9 min',
    category: 'Asesoría Financiera',
    image: '/blog/optimizacion-costos.jpg',
    tags: ['Costos', 'Optimización', 'Rentabilidad', 'Eficiencia', 'Medellín'],
    featured: false
  },
  {
    id: 'requisitos-importacion-exportacion-colombia',
    title: 'Requisitos Actualizados para Importación y Exportación en Colombia',
    excerpt: 'Guía completa sobre los requisitos y procedimientos para comercio exterior en 2024.',
    content: '<p>El comercio exterior en Colombia requiere el cumplimiento de una serie de requisitos y procedimientos específicos.</p>',
    author: 'Paula Montoya',
    date: '2023-12-10',
    readTime: '8 min',
    category: 'Asesoría Aduanera',
    image: '/blog/comercio-exterior.jpg',
    tags: ['Importación', 'Exportación', 'Aduanas', 'Comercio Exterior', 'Colombia'],
    featured: false
  },
  {
    id: 'planeacion-tributaria-estrategica-2024',
    title: 'Planeación Tributaria Estratégica para el Año 2024',
    excerpt: 'Cómo planificar tus impuestos de manera estratégica para optimizar cargas fiscales legalmente.',
    content: '<p>La planeación tributaria estratégica es fundamental para cualquier empresa que busque optimizar sus cargas fiscales dentro del marco legal.</p>',
    author: 'Néstor Ramírez',
    date: '2023-12-05',
    readTime: '7 min',
    category: 'Consultoría Tributaria',
    image: '/blog/planeacion-tributaria.jpg',
    tags: ['Tributación', 'Planeación', 'Optimización', '2024', 'Estratégica'],
    featured: false
  }
];
