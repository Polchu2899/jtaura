import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "../styles/taura.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "José S. Taura | Consultor Empresarial & Coach de Alto Rendimiento · Islas Baleares",
  description:
    "Consultor empresarial con +25 años de experiencia. Auditorías, coaching de alto rendimiento y reducción de costes para PYMEs, empresas hoteleras y autónomos en Islas Baleares y Península. Primera consulta gratuita.",
  keywords:
    "consultor empresarial menorca, coaching empresarial baleares, auditoría empresarial, coach alto rendimiento menorca",
  authors: [{ name: "José S. Taura" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://tjtaura.com/",
    title: "José S. Taura | Consultor Empresarial & Coach de Alto Rendimiento",
    description:
      "Transforma tu empresa con +25 años de experiencia. Auditorías, coaching y consultoría para PYMEs en Baleares y Península.",
    siteName: "José S. Taura · Consultoría Empresarial",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body>
        {children}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script src="/jtaura/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
