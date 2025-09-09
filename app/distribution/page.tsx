"use client";

import { useEffect, useState } from "react";
import DistributionTree, { DistributionData } from "../components/DistributionTree";

export default function DistributionPage() {
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
      <h1 className="text-2xl font-bold mb-6">Distribution Network</h1>
      {data ? <DistributionTree data={data} /> : <p>Loading...</p>}
    </div>
  );
}
