import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Remove the entire <head> section with preloads */}
      <body className="antialiased">{children}</body>
    </html>
  );
}