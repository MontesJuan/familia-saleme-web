import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://familia-saleme-web.vercel.app"),
  title: "Familia Saleme | Aceite de Oliva Virgen Extra Premium — San Juan, Argentina",
  description:
    "Aceite de Oliva Virgen Extra premiado de San Juan, Argentina. Ganador al Mejor AOVE en Caminos y Sabores 2026. Finca propia en Valle de Pedernal a 1.350 msnm. Prensado en frío en menos de 3 horas.",
  keywords: [
    "Aceite de oliva virgen extra",
    "Familia Saleme",
    "AOVE premium San Juan",
    "Valle de Pedernal",
    "Olivícola Pedernal",
    "Caminos y Sabores 2026",
    "Mejor aceite de oliva argentina",
    "Sin TACC",
    "Indicación Geográfica San Juan",
  ],
  openGraph: {
    title: "Familia Saleme | Aceite de Oliva Virgen Extra Premiado",
    description:
      "Mejor Aceite de Oliva Virgen Extra del País — Caminos y Sabores 2026. Cosecha seleccionada y prensado en frío en Valle de Pedernal, San Juan.",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/images/hero_bottle_olivegrove.jpg",
        width: 1080,
        height: 1350,
        alt: "Familia Saleme — Aceite de Oliva Virgen Extra",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#0A0A0A] text-[#F5F0EB] font-sans antialiased overflow-x-hidden selection:bg-[#C8A96E] selection:text-black">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
