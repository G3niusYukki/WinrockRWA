"use client";

import React, { useState } from "react";

interface Product {
  price: string;
  image: string;
  description: string;
}

const LaunchAppPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = () => {
    if (!price || !image || !description) return;
    setProducts([...products, { price, image, description }]);
    setPrice("");
    setImage("");
    setDescription("");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">Launch App</h1>

      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="px-4 py-2 mb-6 rounded bg-indigo-600 hover:bg-indigo-500 transition-colors"
      >
        上架商品
      </button>

      {showForm && (
        <div className="w-full max-w-md mb-8 p-6 bg-white/10 rounded-lg backdrop-blur">
          <div className="mb-4">
            <label className="block text-sm mb-1">价格</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder="请输入价格"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">商品图片 URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder="请输入图片链接"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">商品描述</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder="请输入商品描述"
            />
          </div>
          <button
            onClick={addProduct}
            className="w-full px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            提交
          </button>
        </div>
      )}

      <div className="w-full max-w-md grid gap-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-white/10 backdrop-blur border border-white/10"
          >
            <img
              src={product.image}
              alt="商品图片"
              className="w-full h-48 object-cover mb-3 rounded"
            />
            <p className="font-semibold mb-1">价格: {product.price}</p>
            <p className="text-sm text-gray-200">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchAppPage;
