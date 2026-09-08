import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Familia Saleme | Aceite de Oliva Virgen Extra Premium",
  description:
    "Aceite de Oliva Virgen Extra premiado de San Juan, Argentina. Dos generaciones de tradición olivícola. Blend Arbequina & Picual. Mejor AOVE 2026 — Caminos y Sabores.",
  keywords: [
    "Aceite de oliva virgen extra",
    "Familia Saleme",
    "AOVE premium",
    "San Juan Argentina",
    "Olivícola Pedernal",
    "Prensado en frío",
    "Arbequina Picual",
  ],
  openGraph: {
    title: "Familia Saleme | Aceite de Oliva Virgen Extra Premium",
    description:
      "Aceite de Oliva Virgen Extra premiado. Dos generaciones de tradición olivícola en San Juan, Argentina.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F5F0EB] font-sans antialiased overflow-x-hidden">
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
