import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nuestro Equipo - Ramírez y Asesores SAS | Expertos Contables Medellín',
  description: 'Conoce a nuestro equipo de profesionales especializados en contabilidad, auditoría, revisoría fiscal y asesorías jurídicas en Medellín.',
  keywords: 'equipo contable Medellín, profesionales contables, auditores, revisores fiscales, asesores tributarios',
  openGraph: {
    title: 'Nuestro Equipo - Ramírez y Asesores SAS',
    description: 'Conoce a nuestro equipo de profesionales especializados en contabilidad, auditoría, revisoría fiscal y asesorías jurídicas en Medellín.',
    type: 'website',
  },
};

export default function EquipoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}