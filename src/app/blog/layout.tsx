import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Ramírez y Asesores SAS | Consejos Contables y Financieros Medellín',
  description: 'Artículos especializados sobre contabilidad, auditoría, revisoría fiscal, asesoría tributaria y finanzas empresariales en Medellín.',
  keywords: 'blog contable Medellín, consejos financieros, normativa tributaria, NIIF, auditoría, revisoría fiscal, asesoría empresarial',
  openGraph: {
    title: 'Blog - Ramírez y Asesores SAS | Consejos Contables y Financieros Medellín',
    description: 'Artículos especializados sobre contabilidad, auditoría, revisoría fiscal, asesoría tributaria y finanzas empresariales en Medellín.',
    type: 'website',
    locale: 'es_CO',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
