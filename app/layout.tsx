import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical assets for instant loading */}
        <link rel="preload" href="/videos/curtain.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/images/hero-bg-1.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/hero-bg-2.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/hero-bg-3.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/hero-bg-4.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/hero-bg-5.webp" as="image" type="image/webp" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}