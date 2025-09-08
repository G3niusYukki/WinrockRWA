'use client';

import { useState } from 'react';

export default function CommunityPage() {
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState('');
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email || wallet) {
      setJoined(true);
    }
  };

  if (joined) {
    return (
      <div className="max-w-md mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Community</h2>
        <p className="text-indigo-100/80">You&apos;re now connected!</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-6">Join the Community</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded text-black"
        />
        <input
          type="text"
          placeholder="Wallet Address"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          className="w-full px-3 py-2 rounded text-black"
        />
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
