import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - Ramírez y Asesores SAS | Outsourcing Contable Medellín',
  description: 'Respuestas a las preguntas más comunes sobre outsourcing contable, revisoría fiscal, auditoría y servicios contables en Medellín.',
  keywords: 'preguntas frecuentes contabilidad, FAQ outsourcing contable, dudas revisoría fiscal, consultas auditoría Medellín',
  openGraph: {
    title: 'Preguntas Frecuentes - Ramírez y Asesores SAS',
    description: 'Respuestas a las preguntas más comunes sobre outsourcing contable, revisoría fiscal, auditoría y servicios contables en Medellín.',
    type: 'website',
  },
};

export default function PreguntasFrecuentesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}