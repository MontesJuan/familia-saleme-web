import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://familia-saleme-web.vercel.app"),
  title: {
    default: "Familia Saleme | Aceite de Oliva Virgen Extra Multipremiado — San Juan",
    template: "%s | Familia Saleme",
  },
  description:
    "Mejor Aceite de Oliva Virgen Extra de la Argentina en Caminos y Sabores 2026. Producido a 1.350 msnm en Valle de Pedernal, San Juan. Prensado en frío en menos de 3 horas. Acidez menor a 0.20%. Envíos directos a todo el país.",
  keywords: [
    "Aceite de oliva virgen extra",
    "Familia Saleme",
    "Mejor aceite de oliva argentina 2026",
    "Caminos y Sabores 2026",
    "Valle de Pedernal",
    "AOVE San Juan",
    "ArgOliva",
    "Olive Japan 2024",
    "Aceite de oliva prensado en frio",
    "Sin TACC",
    "Indicacion Geografica San Juan",
    "Aceite de oliva gourmet",
  ],
  authors: [{ name: "Familia Saleme — Olivícola Pedernal S.A." }],
  creator: "Familia Saleme",
  publisher: "Familia Saleme",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://familia-saleme-web.vercel.app",
  },
  openGraph: {
    title: "Familia Saleme | Mejor Aceite de Oliva Virgen Extra de Argentina 2026",
    description:
      "Consagrado en Caminos y Sabores 2026. Nacido a 1.350 msnm en Valle de Pedernal con agua pura de deshielo andino. Descubrí el auténtico Oro Líquido sanjuanino.",
    url: "https://familia-saleme-web.vercel.app",
    siteName: "Familia Saleme — Aceite de Oliva Virgen Extra",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/hero_olivares_bg.jpg",
        width: 1376,
        height: 768,
        alt: "Olivares de altura de Familia Saleme en el Valle de Pedernal, San Juan",
      },
      {
        url: "/images/premio_stage_caminos.jpg",
        width: 1376,
        height: 768,
        alt: "Familia Saleme — Ganador Mejor Aceite de Oliva Virgen Extra en Caminos y Sabores 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Familia Saleme | Mejor AOVE de Argentina 2026",
    description:
      "Oro Líquido de la Precordillera. Cosecha manual seleccionada y extracción en frío en Valle de Pedernal, San Juan.",
    images: ["/images/hero_olivares_bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Gourmet Food & Beverages",
};

// JSON-LD Structured Data Schema for SEO & Rich Google Results
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://familia-saleme-web.vercel.app/#organization",
      name: "Familia Saleme",
      legalName: "Olivícola Pedernal S.A.",
      url: "https://familia-saleme-web.vercel.app",
      logo: "https://familia-saleme-web.vercel.app/images/logo_familia_saleme_complete_trans.png",
      description:
        "Productor artesanal de Aceite de Oliva Virgen Extra de alta gama en Valle de Pedernal, San Juan, Argentina.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valle de Pedernal",
        addressRegion: "San Juan",
        addressCountry: "AR",
      },
      award: [
        "1° Premio Mejor Aceite de Oliva Virgen Extra — Caminos y Sabores 2026",
        "1° Puesto ArgOliva Nacional Grandes Productores",
        "3° Puesto ArgOliva Internacional Grandes Productores",
        "5 Estrellas — La Guía Digital Argentina Virgen Extra",
        "Medalla de Plata — Olive Japan 2024",
      ],
      sameAs: ["https://www.instagram.com/familia_saleme"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+5492644999862",
        contactType: "customer service",
        availableLanguage: ["Spanish"],
      },
    },
    {
      "@type": "Product",
      "@id": "https://familia-saleme-web.vercel.app/#product-500ml",
      name: "Aceite de Oliva Virgen Extra Blend Selección Arbequina & Picual",
      image: "https://familia-saleme-web.vercel.app/images/producto_premium.jpg",
      description:
        "Aceite de oliva virgen extra de altura (1.350 msnm), prensado en frío a menos de 24°C dentro de las 3 horas de cosechado. Acidez menor a 0.20%, certificación Sin TACC y Sello Indicación Geográfica San Juan.",
      brand: {
        "@type": "Brand",
        name: "Familia Saleme",
      },
      countryOfOrigin: {
        "@type": "Country",
        name: "Argentina",
      },
      award: "Mejor Aceite de Oliva Virgen Extra de la Argentina 2026 — Caminos y Sabores",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "128",
        bestRating: "5",
        worstRating: "1",
      },
      offers: {
        "@type": "Offer",
        url: "https://familia-saleme-web.vercel.app/#productos",
        priceCurrency: "ARS",
        availability: "https://schema.org/InStock",
        seller: {
          "@id": "https://familia-saleme-web.vercel.app/#organization",
        },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
