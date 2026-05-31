import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "../styles/taura.css";

/* next/font — fonts self-hosted by Next.js, available by family name in CSS */
const _inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const _cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "José S. Taura | Consultor Empresarial · Auditorías · Coaching · Baleares",
  description:
    "Más de 25 años transformando empresas en Islas Baleares, Menorca y Península. Consultoría empresarial, auditorías y coaching de alto rendimiento para PYMEs, sector hotelero y construcción. Primera consulta gratuita.",
  keywords:
    "consultor empresarial baleares, consultor empresarial menorca, consultoría empresarial, coaching empresarial baleares, auditoría empresarial, coach alto rendimiento menorca, José Taura consultor, asesor empresarial menorca, sector hotelero construcción instalaciones",
  authors: [{ name: "José S. Taura" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://tjtaura.com/",
  },
  openGraph: {
    type: "website",
    url: "https://tjtaura.com/",
    title: "José S. Taura | Consultor Empresarial · Baleares & Península",
    description:
      "Transforma tu negocio con metodologías probadas. +25 años de experiencia, +400 clientes satisfechos en Baleares y Península.",
    siteName: "José S. Taura · Consultoría Empresarial",
    images: [
      {
        url: "https://i.ibb.co/4g90GWCp/Jose-avion.jpg",
        width: 1200,
        height: 630,
        alt: "José S. Taura - Consultor Empresarial",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "José S. Taura | Consultor Empresarial · Baleares",
    description:
      "Transforma tu negocio con metodologías probadas. +25 años de experiencia, +400 clientes satisfechos.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        {/* Load CDN scripts in dependency order — GSAP first, then plugins, then Lenis, then main.js */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"
          strategy="afterInteractive"
        />
        <Script src="/jtaura/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
