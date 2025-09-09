'use client';

import React from 'react';

const coins = [
  { label: 'BTC', color: '#f7931a', distance: 180, duration: 20 },
  { label: 'ETH', color: '#627eea', distance: 230, duration: 28 },
  { label: 'USDT', color: '#26a17b', distance: 200, duration: 32 },
  { label: 'BNB', color: '#f3ba2f', distance: 260, duration: 36 },
  { label: 'XRP', color: '#346aa9', distance: 150, duration: 24 },
];

export default function CryptoBackground() {
  return (
    <div className="crypto-background pointer-events-none">
      {coins.map((coin, idx) => {
        const style: React.CSSProperties = {
          '--start': `${(idx * 360) / coins.length}deg`,
          '--duration': `${coin.duration}s`,
          '--distance': `${coin.distance}px`,
        } as React.CSSProperties;

        return (
          <span key={coin.label} className="crypto-icon-wrapper" style={style}>
            <span className="crypto-icon" style={{ backgroundColor: coin.color }}>
              {coin.label}
            </span>
          </span>
        );
      })}
    </div>
  );
}

