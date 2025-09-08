import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";

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
      <body className="antialiased font-sans min-h-screen bg-gradient-to-br from-indigo-950 via-black to-slate-900 text-gray-100 flex flex-col">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <footer className="text-center py-10 text-sm text-indigo-100/60">
          © {new Date().getFullYear()} Winrock RWA. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
