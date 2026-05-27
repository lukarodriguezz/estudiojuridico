import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({ 
  subsets: ["latin"],
  variable: '--font-newsreader',
  style: ['normal', 'italic']
});

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: "Neuquén Legal | Asesoramiento Jurídico en Patagonia",
  description: "Estudio jurídico especializado en hidrocarburos, derecho corporativo y laboral. Soluciones legales estratégicas en Neuquén, Patagonia Argentina.",
  keywords: ["abogados Neuquén", "estudio jurídico Patagonia", "derecho corporativo", "hidrocarburos", "asesoramiento legal"],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Neuquén Legal | Asesoramiento Jurídico",
    description: "Estudio jurídico especializado en hidrocarburos, derecho corporativo y laboral en Neuquén.",
    siteName: "Neuquén Legal",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuquén Legal | Asesoramiento Jurídico",
    description: "Estudio jurídico especializado en hidrocarburos, derecho corporativo y laboral en Neuquén.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${newsreader.variable} ${manrope.variable} font-body bg-surface text-on-surface antialiased selection:bg-tertiary-fixed selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}