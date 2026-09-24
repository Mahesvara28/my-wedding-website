import "./globals.css";
import {
  Pinyon_Script,
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://paoanddei.vercel.app"),

  title: "Pao & Dei | Wedding Invitation",

  description:
    "Join us as we celebrate our marriage on February 21, 2027 in Manila.",

  openGraph: {
    title: "Pao & Dei | Wedding Invitation",

    description:
      "Join us as we celebrate our marriage on February 21, 2027 in Manila.",

    url: "https://paoanddei.vercel.app/",

    siteName: "Pao & Dei Wedding",

    type: "website",

    images: [
      {
        url: "/images/link-pic.webp",
        width: 1200,
        height: 630,
        alt: "Pao and Dei Wedding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Pao & Dei | Wedding Invitation",

    description:
      "Join us as we celebrate our marriage on February 21, 2027 in Manila.",

    images: ["/images/link-pic.webp"],
  },
};

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pinyon.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}