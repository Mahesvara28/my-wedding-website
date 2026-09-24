import "./globals.css";
import { Pinyon_Script, Cormorant_Garamond, Montserrat } from "next/font/google";
import type { Metadata } from "next";

// Replace this with your ACTUAL live website URL
const SITE_URL = "https://paoanddei.vercel.app"; 

export const metadata: Metadata = {
  title: "Pao & Dei | Wedding Invitation",
  description: "Join us as we celebrate our marriage on February 21, 2027 in Manila.",
  openGraph: {
    title: "Pao & Dei | Wedding Invitation",
    description: "Join us as we celebrate our marriage on February 21, 2027 in Manila.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        // MUST be an absolute URL for social media to find it
        url: `${SITE_URL}/images/hero-bg-1.webp`, 
        width: 1200,
        height: 630,
        alt: "Pao and Dei Wedding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pao & Dei | Wedding Invitation",
    description: "Join us as we celebrate our marriage on February 21, 2027 in Manila.",
    images: [`${SITE_URL}/images/hero-bg-1.webp`],
  },
};

// ... (keep your font configurations exactly as they are below)
const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pinyon.variable} ${cormorant.variable} ${montserrat.variable}`}>
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}