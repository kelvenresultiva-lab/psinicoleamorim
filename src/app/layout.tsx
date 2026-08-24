import type { Metadata } from "next";
import { Playfair_Display, Poppins, Lato, Heebo } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/content";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Usadas nas seções a partir de "Como funciona meu trabalho" (o mesmo
// sistema tipográfico do site da Miriam Souza: Lato para rótulos/botões,
// Heebo para corpo de texto).
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

// Resolve automaticamente para a URL do deploy (preview ou produção) na Vercel.
// Defina NEXT_PUBLIC_SITE_URL nas envs do projeto quando o domínio definitivo
// estiver configurado, para sobrescrever esse valor.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.professionalName} | ${siteConfig.title} em ${siteConfig.city}`,
  description: `Psicoterapia para adultos, casais e famílias com abordagem psicanalítica. Atendimento presencial em ${siteConfig.city} e online. Agende uma conversa.`,
  keywords: [
    "psicóloga",
    "psicóloga clínica",
    "psicoterapia",
    "terapia online",
    "São João del-Rei",
    "psicanálise",
  ],
  openGraph: {
    title: `${siteConfig.professionalName} | ${siteConfig.title}`,
    description: `Psicoterapia para adultos, casais e famílias com abordagem psicanalítica. Atendimento presencial em ${siteConfig.city} e online.`,
    url: siteUrl,
    siteName: siteConfig.professionalName,
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${poppins.variable} ${lato.variable} ${heebo.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-[#333333]">
        {children}
      </body>
    </html>
  );
}
