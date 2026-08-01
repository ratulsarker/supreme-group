import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollInit from "@/components/ScrollInit";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Supreme Group Bangladesh | Garments Conglomerate",
    template: "%s | Supreme Group Bangladesh",
  },
  description:
    "Supreme Group Bangladesh is a diversified garments conglomerate with six sister concerns spanning garment manufacturing, accessories, sustainable agriculture, embellishment, retail, and food.",
  keywords: [
    "Supreme Group Bangladesh",
    "garment manufacturer Bangladesh",
    "Supreme Stitch",
    "Supreme Outfit",
    "Bangladesh conglomerate",
    "export oriented garments",
    "Fanatics supplier",
    "Walmart supplier",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://supremegroupbd.com",
    siteName: "Supreme Group Bangladesh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollInit />
        <Analytics />
      </body>
    </html>
  );
}
