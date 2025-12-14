import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ramírez y Asesores SAS - Outsourcing Contable Medellín',
    short_name: 'Ramírez Asesores',
    description: 'Servicios profesionales de outsourcing contable, auditoría y revisoría fiscal en Medellín',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#5170ff',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}