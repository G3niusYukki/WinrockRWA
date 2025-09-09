"use client";

import { useEffect, useState } from "react";
import DistributionTree, { DistributionData } from "../components/DistributionTree";
import { useLanguage } from "../LanguageContext";

export default function DistributionPage() {
  const { t } = useLanguage();
  const [data, setData] = useState<DistributionData | null>(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/distribution");
      const json = await res.json();
      setData(json);
    };
    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{t("distributionTitle")}</h1>
      {data ? <DistributionTree data={data} /> : <p>{t("loading")}</p>}
    </div>
  );
}
