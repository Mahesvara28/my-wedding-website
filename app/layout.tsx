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
        <link rel="preload" href="/images/hero-bg-1.JPG" as="image" type="image/jpeg" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}