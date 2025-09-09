'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SparklineChart from '../components/SparklineChart';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: { price: number[] };
}

export default function LaunchAppPage() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true'
        );
        const data: Coin[] = await res.json();
        setCoins(data);
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
    <div className="p-6 overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Coin</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">24h %</th>
            <th className="py-2 px-4">Market Cap</th>
            <th className="py-2 px-4">Last 7d</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin.id} className="border-t border-white/10">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">
                <div className="flex items-center">
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span>{coin.name}</span>
                  <span className="ml-2 text-xs text-white/50">
                    {coin.symbol.toUpperCase()}
                  </span>
                </div>
              </td>
              <td className="py-2 px-4">${coin.current_price.toLocaleString()}</td>
              <td
                className={`py-2 px-4 ${
                  coin.price_change_percentage_24h >= 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="py-2 px-4">${coin.market_cap.toLocaleString()}</td>
              <td className="py-2 px-4">
                <SparklineChart data={coin.sparkline_in_7d.price} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

