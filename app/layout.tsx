import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Supreme Group Bangladesh | Diversified Business Conglomerate",
    template: "%s | Supreme Group Bangladesh",
  },
  description:
    "Supreme Group Bangladesh is a diversified conglomerate with six sister concerns spanning garment manufacturing, accessories, agro, embellishment, food, and retail across Bangladesh.",
  keywords: [
    "Supreme Group Bangladesh",
    "garment manufacturer Bangladesh",
    "Supreme Stitch",
    "Supreme Outfit",
    "Bangladesh conglomerate",
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
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
