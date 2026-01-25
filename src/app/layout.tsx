import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramírez y Asesores SAS - Outsourcing Contable en Medellín",
  description: "Más de 15 años de experiencia en outsourcing contable, auditoría, revisoría fiscal y asesorías jurídicas en Medellín. Servicios profesionales de contabilidad, aduanera y consultoría tributaria.",
  keywords: "outsourcing contable Medellín, auditoría fiscal Antioquia, revisoría fiscal, asesoría aduanera, consultoría tributaria, contabilidad empresas Medellín",
  authors: [{ name: "Ramírez y Asesores SAS" }],
  creator: "Ramírez y Asesores SAS",
  publisher: "Ramírez y Asesores SAS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ramirezasesores.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ramírez y Asesores SAS - Expertos Contables en Medellín",
    description: "Servicios profesionales de outsourcing contable, auditoría y revisoría fiscal en Medellín",
    url: 'https://ramirezasesores.co',
    siteName: 'Ramírez y Asesores SAS',
    locale: 'es_CO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
