import "./globals.css";
import { Pinyon_Script, Cormorant_Garamond, Montserrat } from "next/font/google";
import type { Metadata } from "next";

// 1. Metadata for Link Previews (Thumbnail, Title, Description)
export const metadata: Metadata = {
  title: "Pao & Dei | Wedding Invitation",
  description: "Join us as we celebrate our marriage on February 21, 2027 in Manila.",
  openGraph: {
    title: "Pao & Dei | Wedding Invitation",
    description: "Join us as we celebrate our marriage on February 21, 2027 in Manila.",
    images: [
      {
        url: "/images/hero-bg-1.webp", // <-- Uses your beautiful photo!
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
    images: ["/images/hero-bg-1.webp"],
  },
};

// 2. Calligraphic/Formal Script for Names & Key Focal Text
const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
});

// 3. Traditional Serif for Date, Location, and Secondary Details
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

// 4. Clean Sans-Serif for small UI text (buttons, labels)
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