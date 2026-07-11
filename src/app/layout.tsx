import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
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

// TODO: substituir pelo domínio real quando o site tiver um definido.
const siteUrl = "https://www.nicoleamorimpsi.com.br";

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
    <html lang="pt-BR" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-[#333333]">
        {children}
      </body>
    </html>
  );
}
