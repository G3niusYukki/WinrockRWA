"use client";

import { LanguageProvider } from "./LanguageContext";
import { CartProvider } from "./CartContext";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const applyTheme = () => {
      const hour = new Date().getHours();
      const isDay = hour >= 6 && hour < 18;
      const root = document.documentElement;
      root.classList.toggle("light", isDay);
    };
    applyTheme();
    const id = setInterval(applyTheme, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <LanguageProvider>
      <CartProvider>{children}</CartProvider>
    </LanguageProvider>
  );
}

