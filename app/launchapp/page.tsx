'use client';

import { useEffect, useState } from 'react';
import CandlestickChart from '../components/CandlestickChart';

interface MarketCoin {
  id: string;
  name: string;
  symbol: string;
  market_cap: number;
  image: string;
}

interface Coin extends MarketCoin {
  ohlc: number[][];
}

export default function LaunchAppPage() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        );
        const marketData: MarketCoin[] = await res.json();
        const coinsWithOhlc: Coin[] = await Promise.all(
          marketData.map(async (coin: MarketCoin) => {
            const ohlcRes = await fetch(
              `https://api.coingecko.com/api/v3/coins/${coin.id}/ohlc?vs_currency=usd&days=7`
            );
            const ohlcData = await ohlcRes.json();
            return {
              id: coin.id,
              name: coin.name,
              symbol: coin.symbol,
              market_cap: coin.market_cap,
              image: coin.image,
              ohlc: ohlcData,
            };
          })
        );
        setCoins(coinsWithOhlc);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {coins.map((coin) => (
        <div key={coin.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <img src={coin.image} alt={coin.name} className="w-6 h-6" />
            <h4 className="font-semibold">
              {coin.name} ({coin.symbol.toUpperCase()})
            </h4>
          </div>
          <CandlestickChart data={coin.ohlc} />
          <p className="mt-2 text-sm">Market Cap: ${coin.market_cap.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

