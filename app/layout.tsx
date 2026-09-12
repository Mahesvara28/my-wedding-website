import "./globals.css";
import { Pinyon_Script, Cormorant_Garamond, Montserrat } from "next/font/google";

// 1. Calligraphic/Formal Script for Names & Key Focal Text
const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
});

// 2. Traditional Serif for Date, Location, and Secondary Details
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

// 3. Clean Sans-Serif for small UI text (buttons, labels)
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