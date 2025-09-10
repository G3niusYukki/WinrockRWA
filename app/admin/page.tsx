"use client";

import { useLanguage } from "../LanguageContext";

export default function AdminPage() {
  const { t } = useLanguage();
  return (
    <div className="p-8 min-h-screen bg-gray-900 text-gray-100">
      <h1 className="text-3xl font-bold mb-4">{t("adminTitle")}</h1>
      <p>
        This is a placeholder for the future admin dashboard. An example API is
        available at <code className="bg-gray-800 px-1 rounded">/api/admin/status</code>.
      </p>
    </div>
  );
}

