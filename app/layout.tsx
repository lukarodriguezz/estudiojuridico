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
  title: "Neuquén Legal | Expert Legal Counsel",
  description: "Firma de abogados líder en la Patagonia Argentina.",
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