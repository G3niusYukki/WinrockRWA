import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winrock RWA",
  description: "Tokenize real-world assets with a modern blockchain interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
