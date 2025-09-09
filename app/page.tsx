"use client";

import { useState } from "react";
import CryptoBackground from "./components/CryptoBackground";

export default function Home() {
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [connecting, setConnecting] = useState(false);

  const features = [
    {
      title: "On-chain Registry",
      description: "Track asset ownership using immutable smart contracts.",
    },
    {
      title: "Compliance Ready",
      description:
        "Integrated KYC/AML modules keep your platform aligned with regulations.",
    },
    {
      title: "Real-time Settlement",
      description:
        "Experience instant settlement with blockchain finality.",
    },
  ];

  const connectWallet = async () => {
    setConnecting(true);
    await fetch("/api/wallet/connect", { method: "POST" });
    setConnecting(false);
  };

  const fetchPrice = async () => {
    const res = await fetch(`/api/prices?symbol=${symbol}`);
    const data = await res.json();
    setPrice(data.price);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-black to-slate-900 text-gray-100">
      <CryptoBackground />
      <header className="relative z-10 max-w-6xl mx-auto flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Winrock RWA</h1>
        <nav className="flex gap-6 text-sm">
          <a href="#features" className="hover:text-indigo-400 transition-colors">
            Features
          </a>
          <a href="#docs" className="hover:text-indigo-400 transition-colors">
            Docs
          </a>
          <a href="#community" className="hover:text-indigo-400 transition-colors">
            Community
          </a>
        </nav>
        <button
          onClick={connectWallet}
          className="ml-6 px-4 py-2 text-sm rounded-md bg-indigo-600 hover:bg-indigo-500 transition-all"
        >
          {connecting ? "Connecting..." : "Connect Wallet"}
        </button>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        <section className="py-24 text-center">
          <h2 className="fade-in-up text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-500">
            Tokenize Real World Assets
          </h2>
          <p
            className="fade-in-up text-lg text-indigo-100/80 max-w-2xl mx-auto mb-10"
            style={{ animationDelay: "0.2s" }}
          >
            Build, issue, and trade tokenized assets with a modern blockchain interface.
          </p>
          <div
            className="fade-in-up flex justify-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors"
              href="/launchapp"
            >
              Launch App
            </a>
            <a
              className="px-8 py-3 rounded-lg border border-indigo-400/50 hover:bg-indigo-800/30 transition-colors"
              href="#learn"
            >
              Read Docs
            </a>
          </div>
        </section>

        <section id="features" className="grid gap-8 sm:grid-cols-3 pb-24">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="fade-in-up p-6 bg-white/5 rounded-xl backdrop-blur border border-white/10 transform transition-transform hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-indigo-100/80">{feature.description}</p>
            </div>
          ))}
        </section>

        <section id="price" className="pb-24 text-center fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-3xl font-bold mb-4">Check Crypto Price</h3>
          <div className="flex justify-center gap-2">
            <input
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              placeholder="e.g. BTC"
              className="px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none"
            />
            <button
              onClick={fetchPrice}
              className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors"
            >
              Query
            </button>
          </div>
          {price !== null && (
            <p className="mt-4 text-lg">Current price: {price}</p>
          )}
        </section>
      </main>

      <footer className="relative z-10 text-center py-10 text-sm text-indigo-100/60">
        © {new Date().getFullYear()} Winrock RWA. All rights reserved.
      </footer>
    </div>
  );
}
