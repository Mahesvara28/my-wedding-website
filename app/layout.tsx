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
    "We're so excited to step into this next chapter, and we'd love for you to join us to celebrate our marriage on the 21st of February, 2027.",

  openGraph: {
    title: "Pao & Dei | Wedding Invitation",
    description:
      "We're so excited to step into this next chapter, and we'd love for you to join us to celebrate our marriage on the 21st of February, 2027.",
    url: "https://paoanddei.vercel.app/",
    siteName: "Pao & Dei Wedding",
    type: "website",
    images: [
      {
        url: "https://paoanddei.vercel.app/images/mess-temp-v4.jpg",
        width: 1200,
        height: 1200,
        alt: "Pao and Dei Wedding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pao & Dei | Wedding Invitation",
    description:
      "We're so excited to step into this next chapter, and we'd love for you to join us to celebrate our marriage on the 21st of February, 2027.",
    images: [
      "https://paoanddei.vercel.app/images/mess-temp-v4.jpg",
    ],
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