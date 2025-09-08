'use client';

import { useState, useEffect, useCallback } from 'react';

export default function PricesPage() {
  const [symbol, setSymbol] = useState('BTC');
  const [price, setPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPrice = useCallback(async () => {
    try {
      const res = await fetch(`/api/crypto/${symbol}`);
      const json = await res.json();
      if (res.ok) {
        setPrice(json.price);
        setError(null);
      } else {
        setError(json.error || 'Unable to fetch price');
        setPrice(null);
      }
    } catch {
      setError('Network error');
      setPrice(null);
    }
  }, [symbol]);

  useEffect(() => {
    fetchPrice();
    const id = setInterval(fetchPrice, 30000);
    return () => clearInterval(id);
  }, [fetchPrice]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-black to-slate-900 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Crypto Prices</h1>
      <div className="flex gap-2 mb-6">
        <input
          className="p-2 rounded text-black"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        />
        <button
          className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500"
          onClick={fetchPrice}
        >
          Fetch
        </button>
      </div>
      {price !== null && (
        <p>
          {symbol}: ${price.toFixed(2)}
        </p>
      )}
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
}
