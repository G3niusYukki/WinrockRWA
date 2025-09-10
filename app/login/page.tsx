"use client";

import { useLanguage } from "../LanguageContext";

export default function LoginPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-black to-slate-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">{t("login")}</h1>
      <p className="text-sm">API not implemented.</p>
    </div>
  );
}
