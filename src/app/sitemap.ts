import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 horas

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ramirezasesores.co';
  
  const routes = [
    '',
    '/nosotros',
    '/servicios',
    '/equipo',
    '/blog',
    '/preguntas-frecuentes',
    '/contacto',
    '/servicios/outsourcing-contable',
    '/servicios/revisoria-fiscal',
    '/servicios/auditoria-financiera',
    '/servicios/asesoria-aduanera',
    '/servicios/consultoria-cambiaria',
    '/servicios/consultoria-tributaria',
    '/servicios/asesoria-financiera',
    '/servicios/consultoria-empresarial',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route.startsWith('/servicios') ? 0.9 : 0.8,
  }));
}
