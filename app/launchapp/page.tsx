"use client";

import React from "react";

const products = [
  { name: "Test Product A", price: "$10" },
  { name: "Test Product B", price: "$20" },
  { name: "Test Product C", price: "$30" },
];

const LaunchAppPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">Launch App</h1>
      <p className="text-center text-gray-200 mb-6">
        Browse a few sample products and explore the distribution network.
      </p>

      <a
        href="/distribution"
        className="mb-8 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors"
      >
        Distribution
      </a>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 w-full max-w-4xl">
        {products.map((product) => (
          <div
            key={product.name}
            className="p-4 border border-white/20 rounded-lg text-center"
          >
            <h2 className="font-semibold mb-2">{product.name}</h2>
            <p className="text-sm text-gray-300">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchAppPage;
