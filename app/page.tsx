"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function Home() {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-black to-slate-900 text-gray-100">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">{t("siteTitle")}</h1>
        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm"
          >
            {t("login")}
          </a>
          <a
            href="/register"
            className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm"
          >
            {t("register")}
          </a>
          <a
            href="/affiliate/index.html"
            className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm"
          >
            {t("navAffiliate")}
          </a>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("popularProducts")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white/5 rounded-lg overflow-hidden backdrop-blur border border-white/10"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
                <p className="text-indigo-300 text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center py-10 text-sm text-indigo-100/60">
        © {new Date().getFullYear()} Winrock RWA. {t("rights")}
      </footer>
    </div>
  );
}
