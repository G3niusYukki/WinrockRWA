"use client";

import { useLanguage } from "../LanguageContext";

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      className="ml-4 px-2 py-1 text-sm border border-indigo-400/50 rounded hover:bg-indigo-800/30 transition-colors"
    >
      {lang === "en" ? "中文" : "EN"}
    </button>
  );
}

